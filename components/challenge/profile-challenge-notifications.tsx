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
  const { user } = useAuth()
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState("")

  useEffect(() => {
    if (user) {
      loadChallenges()
    }
  }, [user])

  const loadChallenges = async () => {
    if (!user) {
      setDebugInfo("No user authenticated")
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    setDebugInfo(`Loading challenges for user: ${user.id}`)

    try {
      console.log("🔔 Loading pending challenges for user:", user.id)

      const { data, error } = await supabase
        .from("user_challenges")
        .select(`
          id,
          challenger_id,
          category,
          difficulty,
          question_count,
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
        .gt("expires_at", new Date().toISOString())

      if (error) {
        console.error("❌ Error loading challenges:", error)
        setError(error.message)
        setDebugInfo(`Error: ${error.message}`)
        return
      }

      console.log("✅ Challenges loaded:", data)
      setChallenges(data || [])
      setDebugInfo(`Found ${data?.length || 0} pending challenges`)
    } catch (error: any) {
      console.error("❌ Error in loadChallenges:", error)
      setError(error.message)
      setDebugInfo(`Caught error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const acceptChallenge = async (challengeId: string) => {
    try {
      const { data, error } = await supabase.rpc("accept_challenge", {
        challenge_id: challengeId,
        user_id: user?.id,
      })

      if (error) throw error

      toast({
        title: "Challenge Accepted! 🎯",
        description: "Redirecting to quiz...",
      })

      // Redirect to quiz
      window.location.href = `/quiz?challenge=${challengeId}`
    } catch (error: any) {
      console.error("Error accepting challenge:", error)
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

      loadChallenges() // Refresh the list
    } catch (error: any) {
      console.error("Error declining challenge:", error)
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          <p>Debug: User ID: {user.id}</p>
          <p>Debug Info: {debugInfo}</p>
          <p>Challenges Count: {challenges.length}</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-green-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium">Error loading challenges</p>
              <p className="text-red-600 text-sm">{error}</p>
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
              <div key={challenge.id} className="border rounded-lg p-4 dark:border-gray-600">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={challenge.challenger.avatar_url || "/placeholder.svg"} />
                      <AvatarFallback className="bg-green-100 text-green-700">
                        {challenge.challenger.full_name?.charAt(0) || challenge.challenger.username.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium dark:text-white">
                        {challenge.challenger.full_name || challenge.challenger.username}
                      </p>
                      <p className="text-sm text-gray-500">challenged you to a quiz</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{challenge.category}</Badge>
                    <Badge variant="outline">{challenge.difficulty}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Questions:</span>
                    <span className="ml-1 font-medium dark:text-white">{challenge.question_count}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Time limit:</span>
                    <span className="ml-1 font-medium dark:text-white">5 minutes</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{formatTimeLeft(challenge.expires_at)}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => declineChallenge(challenge.id)}
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => acceptChallenge(challenge.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Check className="h-4 w-4 mr-1" />
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
