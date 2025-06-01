"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Check, X, Clock, RefreshCw, AlertCircle } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface Challenge {
  id: string
  challenger_id: string
  category: string
  difficulty: string
  question_count: number
  created_at: string
  expires_at: string
  challenger: {
    username: string
    full_name?: string
    avatar_url?: string
  }
}

export default function ProfileChallengeNotifications() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🔔 DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    if (!authLoading && user) {
      loadChallenges()
    }
  }, [user, authLoading])

  const loadChallenges = async () => {
    if (!user) return

    addDebug("Starting loadChallenges...")
    setLoading(true)
    setError(null)

    try {
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Challenge loading timeout after 10 seconds")), 10000),
      )

      const challengesPromise = supabase
        .from("user_challenges")
        .select("id, challenger_id, category, difficulty, question_count, created_at, expires_at, status")
        .eq("challenged_id", user.id)
        .eq("status", "pending")

      const challengesResult = await Promise.race([challengesPromise, timeoutPromise])

      addDebug(
        `Challenges query result: ${JSON.stringify({ error: challengesResult.error, count: challengesResult.data?.length })}`,
      )

      if (challengesResult.error) {
        throw challengesResult.error
      }

      const challengesData = challengesResult.data || []
      addDebug(`Found ${challengesData.length} raw challenges`)

      // Filter by expiry date in JavaScript instead of SQL
      const now = new Date()
      const validChallenges = challengesData.filter((challenge) => {
        const expiryDate = new Date(challenge.expires_at)
        return expiryDate > now
      })

      addDebug(`After expiry filter: ${validChallenges.length} valid challenges`)

      if (validChallenges.length === 0) {
        setChallenges([])
        return
      }

      // Get challenger profiles with individual queries and timeout
      const challengesWithProfiles = []
      for (const challenge of validChallenges) {
        try {
          addDebug(`Getting profile for challenger: ${challenge.challenger_id}`)

          const profilePromise = supabase
            .from("user_profiles")
            .select("username, full_name, avatar_url")
            .eq("id", challenge.challenger_id)
            .maybeSingle()

          const profileTimeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Profile query timeout")), 3000),
          )

          const profileResult = await Promise.race([profilePromise, profileTimeoutPromise])

          addDebug(
            `Profile result for ${challenge.challenger_id}: ${JSON.stringify({
              error: profileResult.error,
              hasData: !!profileResult.data,
            })}`,
          )

          challengesWithProfiles.push({
            ...challenge,
            challenger: profileResult.data || { username: "Unknown", full_name: "Unknown User" },
          })
        } catch (profileError: any) {
          addDebug(`Profile error for ${challenge.challenger_id}: ${profileError.message}`)
          challengesWithProfiles.push({
            ...challenge,
            challenger: { username: "Unknown", full_name: "Unknown User" },
          })
        }
      }

      addDebug(`Successfully processed ${challengesWithProfiles.length} challenges`)
      setChallenges(challengesWithProfiles)
    } catch (error: any) {
      addDebug(`Error: ${error.message}`)
      setError(error.message)
      // Don't leave in infinite loading state
      setChallenges([])
    } finally {
      addDebug("loadChallenges completed")
      setLoading(false)
    }
  }

  const acceptChallenge = async (challengeId: string, category: string) => {
    try {
      const { error } = await supabase.from("user_challenges").update({ status: "accepted" }).eq("id", challengeId)

      if (error) throw error

      toast({
        title: "Challenge Accepted! 🎯",
        description: "Redirecting to quiz...",
      })

      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))
      router.push(`/quiz?category=${category}&difficulty=mixed&challenge=${challengeId}&questions=10`)
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const declineChallenge = async (challengeId: string) => {
    try {
      const { error } = await supabase.from("user_challenges").update({ status: "declined" }).eq("id", challengeId)

      if (error) throw error

      toast({
        title: "Challenge Declined",
        description: "Challenge has been declined",
      })

      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const formatTimeLeft = (expiresAt: string) => {
    const now = new Date()
    const expires = new Date(expiresAt)
    const diff = expires.getTime() - now.getTime()

    if (diff <= 0) return "Expired"

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

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

  if (authLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Challenge Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
            <span className="ml-2 text-sm text-gray-500">Loading authentication...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Challenge Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Please sign in to view challenges</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
            <Bell className="h-5 w-5" />
            Challenge Notifications ({challenges.length})
          </div>
          <Button variant="outline" size="sm" onClick={loadChallenges} disabled={loading} className="h-8 w-8 p-0">
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Debug Info */}
        <div className="text-xs text-gray-500 p-2 bg-gray-50 dark:bg-gray-800 rounded mb-4">
          <p>User ID: {user.id}</p>
          <p>Auth Loading: {authLoading.toString()}</p>
          <p>Component Loading: {loading.toString()}</p>
          <p>Challenges: {challenges.length}</p>
          <div className="mt-2">
            <p className="font-medium">Debug Log:</p>
            {debugInfo.map((info, index) => (
              <p key={index} className="text-xs">
                {info}
              </p>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
            <span className="ml-2 text-sm text-gray-500">Loading challenges...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium">Error loading challenges</p>
              <p className="text-red-600 text-sm">{error}</p>
              <Button variant="outline" size="sm" onClick={loadChallenges} className="mt-2">
                Try Again
              </Button>
            </div>
          </div>
        ) : challenges.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium mb-2">No pending challenges</p>
            <p className="text-sm">Challenge someone to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {challenges.map((challenge) => (
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
                        <span className="text-green-600 dark:text-green-400">
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
                          {formatTimeLeft(challenge.expires_at)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => declineChallenge(challenge.id)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => acceptChallenge(challenge.id, challenge.category)}
                      className="h-8 px-3 bg-green-600 hover:bg-green-700"
                    >
                      <Check className="h-3 w-3 mr-1" />
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
