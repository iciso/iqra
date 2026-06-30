"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, X, Clock, RefreshCw } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface Challenge {
  id: string
  challenger_name: string
  challenged_name: string
  category: string
  difficulty: string
  question_count: number
  created_at: string
  expires_at: string
}

const NAME_STORAGE_KEY = "userNameForLeaderboard"

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

export default function ProfileChallengeNotifications() {
  const router = useRouter()
  const [playerName, setPlayerName] = useState<string | null>(null)
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem(NAME_STORAGE_KEY)
      setPlayerName(savedName)
      if (savedName) {
        loadChallenges(savedName)
      }
    }
  }, [])

  const loadChallenges = async (name: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/challenges?name=${encodeURIComponent(name)}`)
      const result = await response.json()
      setChallenges(result.challenges || [])
    } catch (error) {
      console.error("Error loading challenges:", error)
      setChallenges([])
    } finally {
      setLoading(false)
    }
  }

  const respondToChallenge = async (challengeId: string, action: "accept" | "decline") => {
    try {
      const response = await fetch("/api/challenges/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, action }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Failed to update challenge")

      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      if (action === "decline") {
        toast({ title: "Challenge Declined", description: "The challenge has been declined." })
        return
      }

      const challenge = result.challenge
      toast({ title: "Challenge Accepted! 🎯", description: "Starting your quiz now..." })

      const quizUrl = `/quiz?category=${challenge.category}&difficulty=${challenge.difficulty}&challenge=${challenge.id}&questions=${challenge.question_count}&opponentName=${encodeURIComponent(challenge.challenger_name)}&challengerTurn=false`
      router.push(quizUrl)
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Failed to update challenge", variant: "destructive" })
    }
  }

  const formatTimeLeft = (dateString: string) => {
    const diffMs = new Date(dateString).getTime() - Date.now()
    if (diffMs <= 0) return "Expired"
    const hours = Math.floor(diffMs / (1000 * 60 * 60))
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    return hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`
  }

  // No name saved yet - nothing to check notifications against
  if (!playerName) {
    return null
  }

  const hasActiveChallenges = challenges.length > 0
  const cardClasses = hasActiveChallenges
    ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950 shadow-md"
    : "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950"

  return (
    <Card className={cardClasses}>
      <CardHeader className={hasActiveChallenges ? "bg-red-100 dark:bg-red-900 p-3 md:p-4" : "p-3 md:p-4"}>
        <CardTitle className="flex items-center justify-between">
          <div className={`flex items-center gap-1 md:gap-2 ${hasActiveChallenges ? "text-red-800 dark:text-red-200" : "text-orange-800 dark:text-orange-200"}`}>
            <Bell className={`h-4 w-4 md:h-5 md:w-5 ${hasActiveChallenges ? "animate-bounce" : ""}`} />
            {hasActiveChallenges ? (
              <span className="font-bold text-sm md:text-base">
                {challenges.length} Challenge{challenges.length !== 1 ? "s" : ""} for {playerName}!
              </span>
            ) : (
              <span className="text-sm md:text-base">Challenge Notifications ({challenges.length})</span>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={() => loadChallenges(playerName)} disabled={loading} className="h-7 w-7 md:h-8 md:w-8 p-0">
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
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">
                      <span className="text-green-600 dark:text-green-400">{challenge.challenger_name}</span> challenged you!
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

                  <div className="flex gap-2 justify-end">
                    <Button size="sm" variant="outline" onClick={() => respondToChallenge(challenge.id, "decline")} className="h-7 md:h-8 w-7 md:w-8 p-0">
                      <X className="h-3 w-3" />
                    </Button>
                    <Button size="sm" onClick={() => respondToChallenge(challenge.id, "accept")} className="h-7 md:h-8 px-2 md:px-3 bg-green-600 hover:bg-green-700 text-xs">
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
