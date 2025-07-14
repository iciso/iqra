"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Home } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { submitQuizResult, getChallenge } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"

interface ResultProps {
  score?: number
  totalQuestions?: number
  percentage?: number
  message?: string
}

export default function Result({ score: propScore, totalQuestions: propTotalQuestions, percentage: propPercentage, message: propMessage }: ResultProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [score, setScore] = useState<number | null>(propScore || null)
  const [totalQuestions, setTotalQuestions] = useState<number | null>(propTotalQuestions || null)
  const [percentage, setPercentage] = useState<number | null>(propPercentage || null)
  const [message, setMessage] = useState<string>(propMessage || "Great job!")
  const [category, setCategory] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<string | null>(null)
  const [timeTaken, setTimeTaken] = useState<number | null>(null)
  const [challengeId, setChallengeId] = useState<string | null>(null)
  const [opponent, setOpponent] = useState<any>(null)
  const [challengerTurn, setChallengerTurn] = useState<boolean>(false)
  const [opponentScore, setOpponentScore] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    console.log("🚀 RESULT: Initializing component...")
    // Retrieve data from localStorage
    const storedScore = localStorage.getItem("quizScore")
    const storedTotalQuestions = localStorage.getItem("totalQuestions")
    const storedCategory = localStorage.getItem("quizCategory")
    const storedDifficulty = localStorage.getItem("quizDifficulty")
    const storedTimeLeft = localStorage.getItem("quizTimeLeft")
    const storedChallengeId = localStorage.getItem("quizChallenge")
    const storedOpponent = localStorage.getItem("quizOpponent")
    const storedChallengerTurn = localStorage.getItem("challengerTurn")
    const storedTimeTotal = localStorage.getItem("quizTimeTotal")

    // Set state from localStorage or props
    setScore(propScore || (storedScore ? parseInt(storedScore) : 0))
    setTotalQuestions(propTotalQuestions || (storedTotalQuestions ? parseInt(storedTotalQuestions) : 10))
    setCategory(storedCategory || "hadeeth")
    setDifficulty(storedDifficulty || "mixed")
    setTimeTaken(storedTimeTotal && storedTimeLeft ? parseInt(storedTimeTotal) - parseInt(storedTimeLeft) : null)
    setChallengeId(storedChallengeId && storedChallengeId !== "" ? storedChallengeId : null)
    setChallengerTurn(storedChallengerTurn === "true")
    setOpponent(storedOpponent ? JSON.parse(storedOpponent) : null)

    // Calculate percentage if not provided
    if (!propPercentage && storedScore && storedTotalQuestions) {
      const calcPercentage = Number(((parseInt(storedScore) / parseInt(storedTotalQuestions)) * 100).toFixed(2))
      setPercentage(calcPercentage)
    }

    // Set message based on score
    if (storedScore && storedTotalQuestions) {
      const scoreVal = parseInt(storedScore)
      const totalVal = parseInt(storedTotalQuestions)
      if (scoreVal / totalVal >= 0.8) {
        setMessage("Excellent work!")
      } else if (scoreVal / totalVal >= 0.5) {
        setMessage("Good effort!")
      } else {
        setMessage("Keep practicing!")
      }
    }

    console.log("🚀 RESULT: Loaded data:", {
      score: storedScore,
      totalQuestions: storedTotalQuestions,
      category: storedCategory,
      difficulty: storedDifficulty,
      timeTaken: storedTimeTotal && storedTimeLeft ? parseInt(storedTimeTotal) - parseInt(storedTimeLeft) : null,
      challengeId: storedChallengeId,
      opponent: storedOpponent ? JSON.parse(storedOpponent) : null,
      challengerTurn: storedChallengerTurn,
    })
  }, [])

  useEffect(() => {
    const fetchOpponentScore = async () => {
      if (challengeId && !challengerTurn && user) {
        console.log("🚀 RESULT: Fetching opponent score for challenge:", challengeId)
        try {
          const { data, error } = await getChallenge(challengeId)
          if (error) throw error
          const isChallenger = data.challenger_id === user.id
          const opponentScore = isChallenger ? data.challenged_score : data.challenger_score
          setOpponentScore(opponentScore)
          console.log("✅ RESULT: Opponent score fetched:", opponentScore)
        } catch (error: any) {
          console.error("❌ RESULT: Error fetching opponent score:", error)
          toast({
            title: "Error",
            description: "Failed to fetch opponent score.",
            variant: "destructive",
          })
        }
      }
    }
    fetchOpponentScore()
  }, [challengeId, challengerTurn, user])

  useEffect(() => {
    const autoSaveQuizResult = async () => {
      if (user && score !== null && totalQuestions !== null && category && difficulty && !submitted) {
        console.log("🚀 RESULT: Starting auto-save...")
        try {
          const { success, error } = await submitQuizResult(
            score,
            totalQuestions,
            category,
            difficulty,
            timeTaken,
            null, // Answers not stored in localStorage
            challengeId
          )
          if (success) {
            setSubmitted(true)
            console.log("✅ RESULT: Quiz result saved successfully!")
            toast({
              title: "Score Saved",
              description: `Your score of ${score}/${totalQuestions} has been saved to the leaderboard.`,
              duration: 5000,
            })
          } else {
            throw error
          }
        } catch (error: any) {
          console.error("❌ RESULT: Auto-save failed:", error)
          toast({
            title: "Error",
            description: "Failed to save quiz result.",
            variant: "destructive",
          })
        }
      }
    }
    autoSaveQuizResult()
  }, [user, score, totalQuestions, category, difficulty, timeTaken, challengeId, submitted])

  const handleTryAgain = () => {
    console.log("🚀 RESULT: Try again clicked, navigating to categories...")
    // Clear localStorage to prevent stale data
    localStorage.removeItem("quizScore")
    localStorage.removeItem("totalQuestions")
    localStorage.removeItem("quizCategory")
    localStorage.removeItem("quizDifficulty")
    localStorage.removeItem("quizTimeLeft")
    localStorage.removeItem("quizTimeTotal")
    localStorage.removeItem("quizChallenge")
    localStorage.removeItem("quizOpponentId")
    localStorage.removeItem("quizOpponent")
    localStorage.removeItem("challengerTurn")
    localStorage.removeItem("quizId")
    router.push("/categories")
  }

  return (
    <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">
          {challengeId ? "Challenge Results" : "Quiz Results"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <div className="relative w-32 h-32 mx-auto">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500 dark:border-green-600"
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${
                  percentage && percentage >= 25
                    ? "100% 0%"
                    : `${50 + 50 * Math.sin(((percentage || 0) / 100) * Math.PI / 2)}% ${
                        50 - 50 * Math.cos(((percentage || 0) / 100) * Math.PI / 2)
                      }%`
                }${percentage && percentage >= 50 ? ", 100% 100%" : ""}${
                  percentage && percentage >= 75 ? ", 0% 100%" : ""
                }${percentage && percentage >= 100 ? ", 0% 0%" : ""})`,
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold dark:text-white">{percentage || 0}%</span>
            </div>
          </div>
        </div>
        <p className="text-xl mb-2 dark:text-white">
          You scored <span className="font-bold text-green-700 dark:text-green-400">{score || 0}</span> out of{" "}
          <span className="font-bold">{totalQuestions || 10}</span>
        </p>
        {challengeId && opponent && (
          <p className="text-lg mb-2 dark:text-white">
            Opponent ({opponent.name}):{" "}
            <span className="font-bold text-green-700 dark:text-green-400">
              {opponentScore !== null ? `${opponentScore}/${totalQuestions || 10}` : "Pending"}
            </span>
          </p>
        )}
        <p className="text-lg text-green-800 dark:text-green-400 mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <Link href="/categories">
            <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
              <Home className="mr-2 h-4 w-4" />
              Categories
            </Button>
          </Link>
          <Button
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            onClick={handleTryAgain}
          >
            Try Again
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
