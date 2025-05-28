"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, X, Check } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface Challenge {
  id: string
  challenger_id: string
  challenged_id: string
  category: string
  difficulty: string
  question_count: number
  status: string
  created_at: string
  expires_at: string
  challenger: {
    username: string
    full_name?: string
    avatar_url?: string
  }
}

export default function ProfileChallengeNotifications() {
  const { user } = useAuth()
  const router = useRouter()
  const [pendingChallenges, setPendingChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string>("")

  useEffect(() => {
    console.log("🔔 CHALLENGE NOTIFICATIONS: Component mounted, user:", user?.id)

    if (user) {
      loadPendingChallenges()

      // Subscribe to real-time updates with more specific filtering
      const subscription = supabase
        .channel(`challenge-notifications-${user.id}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "user_challenges",
          },
          (payload) => {
            console.log("🔔 REAL-TIME: Challenge update received:", payload)

            // Check if this update is relevant to current user
            const newRecord = payload.new as any
            const oldRecord = payload.old as any

            if (newRecord?.challenged_id === user.id || oldRecord?.challenged_id === user.id) {
              console.log("🔔 REAL-TIME: Update is for current user, reloading...")
              loadPendingChallenges()
            }
          },
        )
        .subscribe((status) => {
          console.log("🔔 REAL-TIME: Subscription status:", status)
        })

      return () => {
        console.log("🔔 CHALLENGE NOTIFICATIONS: Cleaning up subscription")
        subscription.unsubscribe()
      }
    }
  }, [user])

  const loadPendingChallenges = async () => {
    if (!user) {
      console.log("🔔 LOAD CHALLENGES: No user found")
      return
    }

    console.log("🔔 LOAD CHALLENGES: Starting load for user:", user.id)
    setLoading(true)

    try {
      // First, let's check all challenges for this user (for debugging)
      const { data: allChallenges, error: allError } = await supabase
        .from("user_challenges")
        .select("*")
        .eq("challenged_id", user.id)

      console.log("🔔 ALL CHALLENGES for user:", allChallenges)

      if (allError) {
        console.error("🔔 ERROR fetching all challenges:", allError)
      }

      // Now get pending challenges with full data
      const { data, error } = await supabase
        .from("user_challenges")
        .select(`
          id,
          challenger_id,
          challenged_id,
          category,
          difficulty,
          question_count,
          status,
          created_at,
          expires_at,
          challenger:user_profiles!user_challenges_challenger_id_fkey (
            username,
            full_name,
            avatar_url
          )
        `)
        .eq("challenged_id", user.id)
        .eq("status", "pending")
        .order("created_at", { ascending: false })

      console.log("🔔 PENDING CHALLENGES query result:", { data, error })

      if (error) {
        console.error("🔔 ERROR loading pending challenges:", error)
        setDebugInfo(`Error: ${error.message}`)
        return
      }

      // Filter out expired challenges
      const now = new Date()
      const validChallenges = (data || []).filter((challenge) => {
        const expiryDate = new Date(challenge.expires_at)
        const isValid = expiryDate > now
        console.log(`🔔 Challenge ${challenge.id}: expires ${challenge.expires_at}, valid: ${isValid}`)
        return isValid
      })

      console.log("🔔 VALID CHALLENGES after filtering:", validChallenges)
      setPendingChallenges(validChallenges)
      setDebugInfo(`Found ${validChallenges.length} pending challenges`)

      // Show toast if new challenges found
      if (validChallenges.length > 0) {
        toast({
          title: "🎯 New Challenge!",
          description: `You have ${validChallenges.length} pending challenge${validChallenges.length > 1 ? "s" : ""}`,
        })
      }
    } catch (error) {
      console.error("🔔 CATCH ERROR in loadPendingChallenges:", error)
      setDebugInfo(`Catch error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptChallenge = async (challengeId: string, category: string) => {
    console.log("🔔 ACCEPT: Starting accept for challenge:", challengeId)
    setActionLoading(challengeId)

    try {
      // Update challenge status to accepted
      const { error } = await supabase.from("user_challenges").update({ status: "accepted" }).eq("id", challengeId)

      if (error) {
        throw error
      }

      toast({
        title: "Challenge Accepted! 🎯",
        description: "Redirecting you to the quiz...",
      })

      // Remove from local state
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      // Redirect to quiz with challenge parameters
      router.push(`/quiz?category=${category}&difficulty=mixed&challenge=${challengeId}&questions=10`)
    } catch (error: any) {
      console.error("🔔 ERROR accepting challenge:", error)
      toast({
        title: "Error",
        description: "Failed to accept challenge. Please try again.",
        variant: "destructive",
      })
    } finally {
      setActionLoading(null)
    }
  }

  const handleDeclineChallenge = async (challengeId: string) => {
    console.log("🔔 DECLINE: Starting decline for challenge:", challengeId)
    setActionLoading(challengeId)

    try {
      const { error } = await supabase.from("user_challenges").update({ status: "declined" }).eq("id", challengeId)

      if (error) {
        throw error
      }

      toast({
        title: "Challenge Declined",
        description: "The challenge has been declined.",
      })

      // Remove from local state
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))
    } catch (error: any) {
      console.error("🔔 ERROR declining challenge:", error)
      toast({
        title: "Error",
        description: "Failed to decline challenge. Please try again.",
        variant: "destructive",
      })
    } finally {
      setActionLoading(null)
    }
  }

  const getTimeRemaining = (expiresAt: string) => {
    const now = new Date()
    const expiry = new Date(expiresAt)
    const diffMs = expiry.getTime() - now.getTime()

    if (diffMs <= 0) return "Expired"

    const hours = Math.floor(diffMs / (1000 * 60 * 60))
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) {
      return `${hours}h ${minutes}m left`
    }
    return `${minutes}m left`
  }

  const getUserInitials = (challenger: Challenge["challenger"]) => {
    if (challenger.full_name) {
      return challenger.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return challenger.username.charAt(0).toUpperCase()
  }

  const categoryLabels: Record<string, string> = {
    quran: "Quran Knowledge",
    seerah: "Seerah",
    fiqh: "Fiqh",
    hadeeth: "Hadeeth",
    aqeedah: "Aqeedah",
    tafsir: "Tafsir",
    comparative: "Comparative Religion",
    "islamic-finance": "Islamic Finance",
    tazkiyah: "Tazkiyah",
    history: "Islamic History",
    dawah: "Dawah",
  }

  // Debug section - remove in production
  const debugSection = (
    <div className="text-xs text-gray-500 p-2 bg-gray-50 dark:bg-gray-800 rounded">
      <p>Debug: User ID: {user?.id}</p>
      <p>Debug Info: {debugInfo}</p>
      <p>Challenges Count: {pendingChallenges.length}</p>
      <Button size="sm" variant="outline" onClick={loadPendingChallenges} className="mt-1">
        🔄 Refresh Challenges
      </Button>
    </div>
  )

  if (loading) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            <span className="ml-2 text-sm text-gray-500">Loading notifications...</span>
          </div>
          {debugSection}
        </CardContent>
      </Card>
    )
  }

  if (pendingChallenges.length === 0) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="text-center py-4 text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No pending challenges</p>
            <p className="text-sm">When someone challenges you, it will appear here</p>
          </div>
          {debugSection}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
          <Bell className="h-5 w-5" />
          Challenge Notifications ({pendingChallenges.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {pendingChallenges.map((challenge) => (
          <div key={challenge.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={challenge.challenger.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700">
                    {getUserInitials(challenge.challenger)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">
                    <span className="text-green-600">
                      {challenge.challenger.full_name || challenge.challenger.username}
                    </span>{" "}
                    challenged you!
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabels[challenge.category] || challenge.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {challenge.difficulty}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {getTimeRemaining(challenge.expires_at)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeclineChallenge(challenge.id)}
                  disabled={actionLoading === challenge.id}
                  className="h-8 w-8 p-0"
                >
                  {actionLoading === challenge.id ? (
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                  ) : (
                    <X className="h-3 w-3" />
                  )}
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleAcceptChallenge(challenge.id, challenge.category)}
                  disabled={actionLoading === challenge.id}
                  className="h-8 px-3 bg-green-600 hover:bg-green-700"
                >
                  {actionLoading === challenge.id ? (
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent mr-1"></div>
                  ) : (
                    <Check className="h-3 w-3 mr-1" />
                  )}
                  Accept
                </Button>
              </div>
            </div>
          </div>
        ))}
        {debugSection}
      </CardContent>
    </Card>
  )
}
