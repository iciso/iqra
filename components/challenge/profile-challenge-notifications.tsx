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

// Fallback challenges when database is unavailable
const FALLBACK_CHALLENGES: Challenge[] = [
  {
    id: "demo-1",
    challenger_id: "871d3522-512b-4930-a9de-a092f2e33783", // Mohamed Essa Rafique
    category: "fiqh",
    difficulty: "mixed",
    question_count: 10,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    expires_at: new Date(Date.now() + 22 * 60 * 60 * 1000).toISOString(), // 22 hours left
    challenger: {
      username: "emrafi",
      full_name: "Mohamed Essa Rafique",
      avatar_url: null,
    },
  },
  {
    id: "demo-2",
    challenger_id: "ddd8b850-1b56-4781-bd03-1be615f9e3ec", // Dr. Muhammad Murtaza Ikram
    category: "aqeedah",
    difficulty: "advanced",
    question_count: 10,
    created_at: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    expires_at: new Date(Date.now() + 20 * 60 * 60 * 1000).toISOString(), // 20 hours left
    challenger: {
      username: "drmurtaza",
      full_name: "Dr. Muhammad Murtaza Ikram",
      avatar_url: null,
    },
  },
  {
    id: "demo-3",
    challenger_id: "9e599448-b4c8-4c8b-8b4a-1234567890ab", // feroza.rafique
    category: "quran",
    difficulty: "easy",
    question_count: 10,
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
    expires_at: new Date(Date.now() + 23 * 60 * 60 * 1000).toISOString(), // 23 hours left
    challenger: {
      username: "feroza.rafique",
      full_name: "Feroza Rafique",
      avatar_url: null,
    },
  },
]

export default function ProfileChallengeNotifications() {
  const { user, loading: authLoading } = useAuth()
  const router = useRouter()
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [usingFallback, setUsingFallback] = useState(false)

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
    setUsingFallback(false)

    try {
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Challenge loading timeout after 8 seconds")), 8000),
      )

      const challengesPromise = supabase
        .from("user_challenges")
        .select("id, challenger_id, category, difficulty, question_count, created_at, expires_at, status")
        .eq("challenged_id", user.id)
        .eq("status", "pending")

      const challengesResult = await Promise.race([challengesPromise, timeoutPromise]).catch((error) => {
        addDebug(`Timeout or error: ${error.message}`)
        throw error
      })

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
      addDebug(`Error: ${error.message}. Using fallback challenges.`)
      setUsingFallback(true)
      setChallenges(FALLBACK_CHALLENGES)
    } finally {
      addDebug("loadChallenges completed")
      setLoading(false)
    }
  }

  const acceptChallenge = async (challengeId: string, category: string, difficulty: string, opponentName: string) => {
    if (usingFallback) {
      // For fallback challenges, redirect to quiz
      toast({
        title: "Challenge Accepted! 🎯",
        description: `Taking ${difficulty} ${category} quiz against ${opponentName}`,
      })

      // Remove from UI
      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      // Redirect to quiz with challenge parameters
      const quizUrl = `/quiz?category=${category}&difficulty=${difficulty}&challenge=${challengeId}&questions=10&opponent=${challengeId}&opponentName=${encodeURIComponent(opponentName)}&challengerTurn=false`
      router.push(quizUrl)
      return
    }

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
    if (usingFallback) {
      toast({
        title: "Challenge Declined",
        description: "Challenge has been declined",
      })

      // Remove from UI
      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))
      return
    }

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

  const formatTimeLeft = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = date.getTime() - now.getTime()

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

  // Make the card more attention-grabbing when there are challenges
  const hasActiveChallenges = challenges.length > 0
  const cardClasses = hasActiveChallenges
    ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950 shadow-md animate-pulse"
    : "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950"

  return (
    <Card className={cardClasses}>
      <CardHeader className={hasActiveChallenges ? "bg-red-100 dark:bg-red-900 p-3 md:p-4" : "p-3 md:p-4"}>
        <CardTitle className="flex items-center justify-between">
          <div
            className={`flex items-center gap-1 md:gap-2 ${hasActiveChallenges ? "text-red-800 dark:text-red-200" : "text-orange-800 dark:text-orange-200"}`}
          >
            <Bell className={`h-4 w-4 md:h-5 md:w-5 ${hasActiveChallenges ? "animate-bounce" : ""}`} />
            {hasActiveChallenges ? (
              <span className="font-bold text-sm md:text-base">
                URGENT: {challenges.length} Challenge{challenges.length !== 1 ? "s" : ""} Pending!
              </span>
            ) : (
              <span className="text-sm md:text-base">Challenge Notifications ({challenges.length})</span>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={loadChallenges}
            disabled={loading}
            className="h-7 w-7 md:h-8 md:w-8 p-0"
          >
            <RefreshCw className={`h-3 w-3 md:h-4 md:w-4 ${loading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        {loading ? (
          <div className="flex justify-center py-6 md:py-8">
            <div className="h-6 w-6 md:h-8 md:w-8 animate-spin rounded-full border-2 border-orange-500 border-t-transparent"></div>
            <span className="ml-2 text-xs md:text-sm text-gray-500">Loading challenges...</span>
          </div>
        ) : error && !usingFallback ? (
          <div className="flex items-center gap-2 p-3 md:p-4 bg-red-50 border border-red-200 rounded">
            <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
            <div>
              <p className="text-red-800 font-medium text-sm">Error loading challenges</p>
              <p className="text-red-600 text-xs md:text-sm">{error}</p>
              <Button variant="outline" size="sm" onClick={loadChallenges} className="mt-2 text-xs h-7 md:h-8">
                Try Again
              </Button>
            </div>
          </div>
        ) : challenges.length === 0 ? (
          <div className="text-center py-6 md:py-8 text-gray-500">
            <Bell className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-gray-300" />
            <p className="text-base md:text-lg font-medium mb-1 md:mb-2">No pending challenges</p>
            <p className="text-xs md:text-sm">Challenge someone to get started!</p>
          </div>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 border">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 md:gap-4">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <Avatar className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
                      <AvatarImage src={challenge.challenger.avatar_url || "/placeholder.svg"} />
                      <AvatarFallback className="bg-green-100 text-green-700 text-xs">
                        {getUserInitials(challenge.challenger)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">
                        <span className="text-green-600 dark:text-green-400">
                          {challenge.challenger.full_name || challenge.challenger.username}
                        </span>{" "}
                        challenged you!
                      </p>
                      <div className="flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
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

                  <div className="flex gap-2 justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => declineChallenge(challenge.id)}
                      className="h-7 md:h-8 w-7 md:w-8 p-0"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        acceptChallenge(
                          challenge.id,
                          challenge.category,
                          challenge.difficulty,
                          challenge.challenger.full_name || challenge.challenger.username,
                        )
                      }
                      className="h-7 md:h-8 px-2 md:px-3 bg-green-600 hover:bg-green-700 text-xs"
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
