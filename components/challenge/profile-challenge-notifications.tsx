"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bell, Check, X, Clock, RefreshCw, User } from "lucide-react"
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

const NAME_KEY = "userNameForLeaderboard"

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
  salah: "Salah",
  sawm: "Sawm",
  "new-muslims": "New Muslims",
  "islamic-medical-ethics": "Islamic Medical Ethics",
  crypto: "Crypto & Islam",
  gender: "Gender in Islam",
  lgbtq: "LGBTQ & Islam",
  psych: "Islamic Psychology",
  parenting: "Islamic Parenting",
  peace: "Peace & Islam",
  christ: "Christianity & Islam",
  hindu: "Hinduism & Islam",
}

export default function ProfileChallengeNotifications() {
  const router = useRouter()
  const [playerName, setPlayerName] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState("")
  const [nameError, setNameError] = useState("")
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false) // has localStorage been read yet?

  // Read localStorage only on client
  useEffect(() => {
    const saved = localStorage.getItem(NAME_KEY)
    setPlayerName(saved)
    setChecked(true)
    if (saved) loadChallenges(saved)
  }, [])

  const saveName = () => {
    const trimmed = nameInput.trim()
    if (!trimmed || trimmed.length < 2) {
      setNameError("Please enter at least 2 characters")
      return
    }
    localStorage.setItem(NAME_KEY, trimmed)
    localStorage.setItem("tempChallengerId", trimmed)
    setPlayerName(trimmed)
    setNameError("")
    loadChallenges(trimmed)
  }

  const loadChallenges = async (name: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/challenges?name=${encodeURIComponent(name)}`)
      const result = await res.json()
      setChallenges(result.challenges || [])
    } catch {
      setChallenges([])
    } finally {
      setLoading(false)
    }
  }

  const respond = async (challengeId: string, action: "accept" | "decline") => {
    try {
      const res = await fetch("/api/challenges/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challengeId, action }),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Failed")

      setChallenges((prev) => prev.filter((c) => c.id !== challengeId))

      if (action === "decline") {
        toast({ title: "Challenge Declined" })
        return
      }

      toast({ title: "Challenge Accepted! 🎯", description: "Starting your quiz now..." })
      const c = result.challenge
      router.push(
        `/quiz?category=${c.category}&difficulty=${c.difficulty}&challenge=${c.id}&questions=${c.question_count}&opponentName=${encodeURIComponent(c.challenger_name)}&challengerTurn=false`
      )
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" })
    }
  }

  const formatTimeLeft = (dateString: string) => {
    const diffMs = new Date(dateString).getTime() - Date.now()
    if (diffMs <= 0) return "Expired"
    const hours = Math.floor(diffMs / (1000 * 60 * 60))
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    return hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`
  }

  // Still reading localStorage — render nothing to avoid flash
  if (!checked) return null

  // No name saved yet — show a compact "who are you?" prompt
  if (!playerName) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardHeader className="p-3 md:p-4 pb-2">
          <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200 text-sm md:text-base">
            <Bell className="h-4 w-4" />
            Challenge Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-4 pt-0">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3">
            Enter your name to see if anyone has challenged you.
          </p>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder="Your name"
                value={nameInput}
                onChange={(e) => { setNameInput(e.target.value); setNameError("") }}
                onKeyDown={(e) => e.key === "Enter" && saveName()}
                className="h-8 md:h-9 text-sm"
              />
              {nameError && <p className="text-xs text-red-500 mt-1">{nameError}</p>}
            </div>
            <Button onClick={saveName} size="sm" className="bg-green-600 hover:bg-green-700 h-8 md:h-9 px-3">
              <User className="h-3 w-3 mr-1" />
              Check
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Name known — show notification feed
  const hasActive = challenges.length > 0

  return (
    <Card className={hasActive
      ? "border-red-300 bg-red-50 dark:border-red-800 dark:bg-red-950 shadow-md"
      : "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950"
    }>
      <CardHeader className={`p-3 md:p-4 ${hasActive ? "bg-red-100 dark:bg-red-900" : ""}`}>
        <CardTitle className="flex items-center justify-between">
          <div className={`flex items-center gap-2 text-sm md:text-base ${hasActive ? "text-red-800 dark:text-red-200" : "text-orange-800 dark:text-orange-200"}`}>
            <Bell className={`h-4 w-4 md:h-5 md:w-5 ${hasActive ? "animate-bounce" : ""}`} />
            {hasActive
              ? <span className="font-bold">{challenges.length} Challenge{challenges.length !== 1 ? "s" : ""} for {playerName}!</span>
              : <span>No pending challenges for <strong>{playerName}</strong></span>
            }
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 text-xs text-gray-500 hover:text-gray-700"
              title="Not you?"
              onClick={() => {
                localStorage.removeItem(NAME_KEY)
                localStorage.removeItem("tempChallengerId")
                setPlayerName(null)
                setNameInput("")
                setChallenges([])
              }}
            >
              ✕
            </Button>
            <Button variant="outline" size="sm" onClick={() => loadChallenges(playerName)} disabled={loading} className="h-7 w-7 md:h-8 md:w-8 p-0">
              <RefreshCw className={`h-3 w-3 md:h-4 md:w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      {hasActive && (
        <CardContent className="p-3 md:p-4">
          {loading ? (
            <div className="flex justify-center py-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
              <span className="ml-2 text-sm text-gray-500">Loading...</span>
            </div>
          ) : (
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="bg-white dark:bg-gray-800 rounded-lg p-3 border">
                  <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">
                        <span className="text-green-600 dark:text-green-400">{challenge.challenger_name}</span>
                        {" "}challenged you!
                      </p>
                      <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {categoryLabels[challenge.category] || challenge.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">{challenge.difficulty}</Badge>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {formatTimeLeft(challenge.expires_at)}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end flex-shrink-0">
                      <Button size="sm" variant="outline" onClick={() => respond(challenge.id, "decline")} className="h-7 w-7 p-0">
                        <X className="h-3 w-3" />
                      </Button>
                      <Button size="sm" onClick={() => respond(challenge.id, "accept")} className="h-7 px-2 bg-green-600 hover:bg-green-700 text-xs">
                        <Check className="h-3 w-3 mr-1" />Accept
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}
