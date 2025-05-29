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
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🔔 DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    addDebug(`useEffect triggered - authLoading: ${authLoading}, user: ${!!user}`)

    if (authLoading) {
      addDebug("Auth still loading, waiting...")
      return
    }

    if (!user) {
      addDebug("No user found after auth loading completed")
      return
    }

    addDebug(`User found: ${user.id}, loading challenges...`)
    loadChallenges()
  }, [user, authLoading])

  const loadChallenges = async () => {
    if (!user) {
      addDebug("loadChallenges called but no user")
      return
    }

    addDebug("Starting loadChallenges...")
    setLoading(true)
    setError(null)

    // Create a timeout to prevent hanging
    const timeout = setTimeout(() => {
      addDebug("⚠️ Query timeout after 10 seconds")
      setLoading(false)
      setError("Query timeout after 10 seconds. Please try again.")
    }, 10000)

    try {
      addDebug(`Querying challenges for user: ${user.id}`)

      // Use a simpler query with a timeout
      const { data, error } = await supabase
        .from("user_challenges")
        .select("id, challenger_id, category, difficulty, question_count, created_at, expires_at")
        .eq("challenged_id", user.id)
        .eq("status", "pending")
        .gt("expires_at", new Date().toISOString())
        .limit(10)

      // Clear the timeout since the query completed
      clearTimeout(timeout)

      addDebug(`Query completed - error: ${!!error}, data: ${data ? data.length : "null"}`)

      if (error) {
        addDebug(`Database error: ${error.message}`)
        setError(error.message)
        setLoading(false)
        return
      }

      if (!data || data.length === 0) {
        addDebug("No challenges found")
        setChallenges([])
        setLoading(false)
        return
      }

      addDebug(`Found ${data.length} challenges, now getting challenger info...`)

      // Use a simpler approach to get challenger info
      const challengesWithChallengers = []

      for (const challenge of data) {
        try {
          const { data: challenger, error: challengerError } = await supabase
            .from("user_profiles")
            .select("username, full_name, avatar_url")
            .eq("id", challenge.challenger_id)
            .single()

          if (challengerError) {
            addDebug(`Error getting challenger ${challenge.challenger_id}: ${challengerError.message}`)
            // Continue with default values
            challengesWithChallengers.push({
              ...challenge,
              challenger: { username: "Unknown", full_name: "Unknown User" },
            })
          } else {
            challengesWithChallengers.push({
              ...challenge,
              challenger: challenger || { username: "Unknown", full_name: "Unknown User" },
            })
          }
        } catch (e) {
          addDebug(`Exception getting challenger ${challenge.challenger_id}: ${e}`)
          // Continue with default values
          challengesWithChallengers.push({
            ...challenge,
            challenger: { username: "Unknown", full_name: "Unknown User" },
          })
        }
      }

      addDebug(`Successfully loaded ${challengesWithChallengers.length} challenges with challenger info`)
      setChallenges(challengesWithChallengers)
    } catch (error: any) {
      // Clear the timeout since we caught an error
      clearTimeout(timeout)

      addDebug(`Caught error: ${error.message}`)
      setError(error.message)
    } finally {
      // Clear the timeout in case it hasn't fired yet
      clearTimeout(timeout)

      addDebug("loadChallenges completed, setting loading to false")
      setLoading(false)
    }
  }

  const acceptChallenge = async (challengeId: string, category: string) => {
    addDebug(`Accepting challenge: ${challengeId}`)
    setActionLoading(challengeId)

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
      addDebug(`Error accepting challenge: ${error.message}`)
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setActionLoading(null)
    }
  }

  const declineChallenge = async (challengeId: string) => {
    addDebug(`Declining challenge: ${challengeId}`)
    setActionLoading(challengeId)

    try {
      const { error } = await supabase.from("user_challenges").update({ status: "declined" }).eq("id", challengeId)

      if (error) throw error

      toast({
        title: "Challenge Declined",
        description: "Challenge has been declined",
      })

      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))
    } catch (error: any) {
      addDebug(`Error declining challenge: ${error.message}`)
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setActionLoading(null)
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

  // Show auth loading state
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

  // Show not authenticated state
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
                      onClick={() => acceptChallenge(challenge.id, challenge.category)}
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
          </div>
        )}
      </CardContent>
    </Card>
  )
}
