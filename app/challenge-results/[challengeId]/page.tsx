"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Crown, Medal, ArrowLeft, Zap, Clock } from "lucide-react"
import Link from "next/link"

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

const NAME_KEY = "userNameForLeaderboard"

export default function ChallengeResultsPage() {
  const params = useParams()
  const router = useRouter()
  const [challenge, setChallenge] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPlayerName, setCurrentPlayerName] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPlayerName(localStorage.getItem(NAME_KEY))
    }
  }, [])

  useEffect(() => {
    if (params.challengeId) {
      loadChallenge(params.challengeId as string)
    }
  }, [params.challengeId])

  const loadChallenge = async (id: string) => {
    try {
      const res = await fetch(`/api/challenges/${id}`)
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to load challenge")
      }
      const data = await res.json()
      setChallenge(data.challenge)
    } catch (err: any) {
      console.error("Error loading challenge:", err)
      setError(err.message || "Challenge not found")
    } finally {
      setLoading(false)
    }
  }

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)

  const getWinner = () => {
    if (!challenge) return null
    const cs = challenge.challenger_score
    const ds = challenge.challenged_score
    if (cs === null || ds === null) return null
    if (cs > ds) return "challenger"
    if (ds > cs) return "challenged"
    return "tie"
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent mx-auto mb-4" />
          <p className="text-gray-600">Loading challenge results...</p>
        </div>
      </div>
    )
  }

  if (error || !challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Challenge not found</p>
            <p className="text-sm text-gray-400 mb-6">
              {error || "This challenge may have expired or doesn't exist."}
            </p>
            <Link href="/challenges">
              <Button className="bg-green-600 hover:bg-green-700">Back to Challenges</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const winner = getWinner()
  const bothPlayed = challenge.both_played
  const currentIsChallenger =
    currentPlayerName?.toLowerCase().trim() === challenge.challenger_name?.toLowerCase().trim()
  const currentIsChallenged =
    currentPlayerName?.toLowerCase().trim() === challenge.challenged_name?.toLowerCase().trim()

  // Determine if the current visitor won
  const currentPlayerWon =
    (currentIsChallenger && winner === "challenger") ||
    (currentIsChallenged && winner === "challenged")

  const headlineText = () => {
    if (!bothPlayed) return "Challenge In Progress"
    if (winner === "tie") return "It's a Tie! 🤝"
    if (currentIsChallenger || currentIsChallenged) {
      return currentPlayerWon ? "You Won! 🎉" : "Better luck next time!"
    }
    const winnerName =
      winner === "challenger" ? challenge.challenger_name : challenge.challenged_name
    return `${winnerName} Wins! 🏆`
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="max-w-2xl mx-auto pt-8">

        {/* Back button */}
        <div className="mb-6">
          <Link href="/challenges">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Challenges
            </Button>
          </Link>
        </div>

        {/* Header card */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              {!bothPlayed ? (
                <Clock className="h-16 w-16 text-blue-400" />
              ) : winner === "tie" ? (
                <Medal className="h-16 w-16 text-yellow-500" />
              ) : (
                <Trophy className="h-16 w-16 text-yellow-500" />
              )}
            </div>
            <CardTitle className="text-3xl font-bold">{headlineText()}</CardTitle>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {categoryLabels[challenge.category] || challenge.category}
              {" · "}
              {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
              {" · "}
              {challenge.question_count} questions
            </p>
            {!bothPlayed && (
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                Waiting for {challenge.challenged_name} to accept and play
              </p>
            )}
          </CardHeader>
        </Card>

        {/* Head-to-head cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Challenger */}
          <Card className={`${winner === "challenger" ? "ring-2 ring-yellow-400 shadow-lg" : ""}`}>
            <CardHeader className="text-center pb-2">
              {winner === "challenger" && (
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              )}
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarFallback className="bg-green-100 text-green-700 text-2xl font-bold">
                  {getInitials(challenge.challenger_name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenger_name}</h3>
              <div className="flex justify-center gap-2 mt-1">
                <Badge variant="outline">Challenger</Badge>
                {currentIsChallenger && (
                  <Badge className="bg-green-100 text-green-700 border-green-200">You</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="text-center pt-2">
              {challenge.challenger_score !== null ? (
                <>
                  <div className="text-5xl font-bold text-green-600 mb-1">
                    {challenge.challenger_score}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    out of {challenge.challenger_total || challenge.question_count}
                  </p>
                  <Badge
                    variant="secondary"
                    className={`text-base px-3 py-1 ${
                      (challenge.challenger_percentage ?? 0) >= 80
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {challenge.challenger_percentage ??
                      Math.round(
                        (challenge.challenger_score /
                          (challenge.challenger_total || challenge.question_count)) *
                          100,
                      )}
                    %
                  </Badge>
                </>
              ) : (
                <p className="text-gray-400 italic py-4">Not yet played</p>
              )}
            </CardContent>
          </Card>

          {/* Challenged */}
          <Card className={`${winner === "challenged" ? "ring-2 ring-yellow-400 shadow-lg" : ""}`}>
            <CardHeader className="text-center pb-2">
              {winner === "challenged" && (
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              )}
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarFallback className="bg-blue-100 text-blue-700 text-2xl font-bold">
                  {getInitials(challenge.challenged_name)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{challenge.challenged_name}</h3>
              <div className="flex justify-center gap-2 mt-1">
                <Badge variant="outline">Challenged</Badge>
                {currentIsChallenged && (
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">You</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="text-center pt-2">
              {challenge.challenged_score !== null ? (
                <>
                  <div className="text-5xl font-bold text-blue-600 mb-1">
                    {challenge.challenged_score}
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    out of {challenge.challenged_total || challenge.question_count}
                  </p>
                  <Badge
                    variant="secondary"
                    className={`text-base px-3 py-1 ${
                      (challenge.challenged_percentage ?? 0) >= 80
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {challenge.challenged_percentage ??
                      Math.round(
                        (challenge.challenged_score /
                          (challenge.challenged_total || challenge.question_count)) *
                          100,
                      )}
                    %
                  </Badge>
                </>
              ) : (
                <p className="text-gray-400 italic py-4">Not yet played</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Motivational footer */}
        {bothPlayed && winner !== "tie" && (
          <Card className="mt-6 bg-green-50 dark:bg-green-900/30 border-green-200">
            <CardContent className="text-center py-4">
              <p className="text-green-800 dark:text-green-200 font-medium">
                {winner === "challenger"
                  ? `${challenge.challenger_name} wins with ${challenge.challenger_score}/${challenge.challenger_total || challenge.question_count} vs ${challenge.challenged_name}'s ${challenge.challenged_score}/${challenge.challenged_total || challenge.question_count}!`
                  : `${challenge.challenged_name} wins with ${challenge.challenged_score}/${challenge.challenged_total || challenge.question_count} vs ${challenge.challenger_name}'s ${challenge.challenger_score}/${challenge.challenger_total || challenge.question_count}!`}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Keep playing to sharpen your Islamic knowledge! 📚
              </p>
            </CardContent>
          </Card>
        )}

        {/* Action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => router.push("/challenges")}
            className="bg-green-600 hover:bg-green-700"
          >
            <Zap className="h-4 w-4 mr-2" />
            New Challenge
          </Button>
          <Link href="/leaderboard">
            <Button variant="outline">
              <Trophy className="h-4 w-4 mr-2" />
              View Leaderboard
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
