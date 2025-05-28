"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gamepad2, Clock, Check, X } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import { acceptChallenge, declineChallenge } from "@/lib/supabase-queries"

export default function ProfileChallengeNotifications() {
  const [pendingChallenges, setPendingChallenges] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [processingAction, setProcessingAction] = useState<Record<string, boolean>>({})

  // Category mapping for better descriptions
  const categoryDescriptions: Record<string, string> = {
    quran: "Quran Knowledge",
    seerah: "Seerah (Prophet's Biography)",
    fiqh: "Fiqh (Islamic Jurisprudence)",
    hadeeth: "Hadeeth",
    aqeedah: "Aqeedah (Islamic Creed)",
    tafsir: "Tafsir (Quran Commentary)",
    comparative: "Comparative Religion",
    "islamic-finance": "Islamic Finance",
    tazkiyah: "Tazkiyah (Spiritual Purification)",
    history: "Islamic History & Civilization",
    dawah: "Dawah (Islamic Outreach)",
  }

  useEffect(() => {
    loadPendingChallenges()

    // Set up real-time subscription for new challenges
    const channel = supabase
      .channel("profile-challenges")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "user_challenges",
          filter: `challenged_id=eq.${supabase.auth.getSession().then(({ data }) => data.session?.user.id)}`,
        },
        (payload) => {
          console.log("New challenge received:", payload)
          loadPendingChallenges()

          // Show toast notification
          toast({
            title: "New Challenge!",
            description: "You've received a new challenge. Check your profile!",
          })
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const loadPendingChallenges = async () => {
    try {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData?.session?.user) return

      setLoading(true)
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
        .eq("challenged_id", sessionData.session.user.id)
        .eq("status", "pending")
        .gt("expires_at", new Date().toISOString())

      if (error) {
        console.error("Error loading pending challenges:", error)
        return
      }

      setPendingChallenges(data || [])
    } catch (error) {
      console.error("Error in loadPendingChallenges:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptChallenge = async (challengeId: string) => {
    setProcessingAction((prev) => ({ ...prev, [challengeId]: true }))
    try {
      await acceptChallenge(challengeId)

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Accepted!",
        description: "You can now take the challenge quiz.",
      })

      // Get the challenge details for redirection
      const challenge = pendingChallenges.find((c) => c.id === challengeId)
      if (challenge) {
        const challengeUrl = `/quiz?category=${challenge.category}&difficulty=${challenge.difficulty}&challenge=${challengeId}&questions=${challenge.question_count}&opponent=${challenge.challenger_id}`
        window.location.href = challengeUrl
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to accept challenge",
        variant: "destructive",
      })
    } finally {
      setProcessingAction((prev) => ({ ...prev, [challengeId]: false }))
    }
  }

  const handleDeclineChallenge = async (challengeId: string) => {
    setProcessingAction((prev) => ({ ...prev, [challengeId]: true }))
    try {
      await declineChallenge(challengeId)

      // Remove from pending challenges
      setPendingChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      toast({
        title: "Challenge Declined",
        description: "The challenge has been declined.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to decline challenge",
        variant: "destructive",
      })
    } finally {
      setProcessingAction((prev) => ({ ...prev, [challengeId]: false }))
    }
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))

    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`

    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`
  }

  const formatExpiresIn = (dateString: string) => {
    const expiryDate = new Date(dateString)
    const now = new Date()
    const diffMs = expiryDate.getTime() - now.getTime()

    if (diffMs <= 0) return "Expired"

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""}`

    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays !== 1 ? "s" : ""}`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
      </div>
    )
  }

  if (pendingChallenges.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Challenge Invitations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6 text-gray-500">
            <Gamepad2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>No pending challenges</p>
            <p className="text-sm">When someone challenges you, it will appear here</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gamepad2 className="h-5 w-5" />
          Challenge Invitations ({pendingChallenges.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {pendingChallenges.map((challenge) => (
          <div key={challenge.id} className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={challenge.challenger?.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700">
                    {(challenge.challenger?.full_name || challenge.challenger?.username || "").charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{challenge.challenger?.full_name || challenge.challenger?.username}</p>
                  <p className="text-xs text-gray-500">Sent {formatTimeAgo(challenge.created_at)}</p>
                </div>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Expires in {formatExpiresIn(challenge.expires_at)}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">{categoryDescriptions[challenge.category] || challenge.category}</p>
              </div>
              <div>
                <p className="text-gray-500">Difficulty</p>
                <p className="font-medium">
                  {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Questions</p>
                <p className="font-medium">{challenge.question_count}</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => handleAcceptChallenge(challenge.id)}
                className="flex-1 bg-green-600 hover:bg-green-700"
                disabled={processingAction[challenge.id]}
              >
                {processingAction[challenge.id] ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Accept & Start
                  </>
                )}
              </Button>
              <Button
                onClick={() => handleDeclineChallenge(challenge.id)}
                variant="outline"
                className="flex-1"
                disabled={processingAction[challenge.id]}
              >
                <X className="h-4 w-4 mr-2" />
                Decline
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
