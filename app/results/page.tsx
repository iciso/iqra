"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, ArrowLeft, ArrowRight } from "lucide-react"
import { getCategory } from "@/data/quiz-data-manager"
import { checkForBadges } from "@/utils/badges"
import badgesData from "@/data/badges-data"
import BadgeNotification from "@/components/badges/badge-notification"
import BadgesProfile from "@/components/badges/badges-profile"
import { getRandomOpponent, generateBotScore, getNextChallenge } from "@/utils/opponents"
import type { Opponent } from "@/components/challenge/opponent-profile"
import ChallengeResultsComparison from "@/components/challenge/challenge-results-comparison"
import { useAuth } from "@/contexts/auth-context"
import { submitQuizResult } from "@/lib/supabase-queries"

export default function ResultsPage() {
  const router = useRouter()
  const { user, profile } = useAuth()
  const [score, setScore] = useState<number | null>(null)
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null)
  const [userName, setUserName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [categoryId, setCategoryId] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<string | null>(null)
  const [challenge, setChallenge] = useState<string | null>(null)
  const [categoryTitle, setCategoryTitle] = useState("")
  const [newBadges, setNewBadges] = useState<typeof badgesData>([])
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [timeTotal, setTimeTotal] = useState<number | null>(null)
  const [opponent, setOpponent] = useState<Opponent | null>(null)
  const [nextChallenge, setNextChallenge] = useState<{
    category: string
    difficulty: string
    challenge: string
  } | null>(null)
  const [autoSaved, setAutoSaved] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Get score from localStorage
    try {
      const savedScore = localStorage.getItem("quizScore")
      const savedTotal = localStorage.getItem("totalQuestions")
      const savedCategory = localStorage.getItem("quizCategory")
      const savedDifficulty = localStorage.getItem("quizDifficulty")
      const savedChallenge = localStorage.getItem("quizChallenge")
      const savedTimeLeft = localStorage.getItem("quizTimeLeft")
      const savedTimeTotal = localStorage.getItem("quizTimeTotal")
      const savedOpponentId = localStorage.getItem("quizOpponentId")

      if (savedScore && savedTotal) {
        const parsedScore = Number.parseInt(savedScore)
        const parsedTotal = Number.parseInt(savedTotal)

        setScore(parsedScore)
        setTotalQuestions(parsedTotal)

        // Auto-save to database if user is authenticated
        if (user && profile && !autoSaved) {
          submitQuizResult(
            parsedScore,
            parsedTotal,
            savedCategory || "quran",
            savedDifficulty || "easy",
            savedTimeLeft ? Number.parseInt(savedTimeLeft) : undefined,
            undefined, // answers - can be added later
            savedChallenge ? undefined : undefined, // challenge_id for regular challenges
          )
            .then(() => {
              setAutoSaved(true)
              setSubmitted(true)
            })
            .catch((error) => {
              console.error("Error saving to database:", error)
            })
        }

        // Generate opponent for challenges
        if (savedChallenge) {
          const newOpponent = savedOpponentId
            ? JSON.parse(localStorage.getItem("quizOpponent") || "null")
            : getRandomOpponent()

          if (newOpponent) {
            newOpponent.score = generateBotScore(parsedScore, parsedTotal)
            setOpponent(newOpponent)
            localStorage.setItem("quizOpponentId", newOpponent.id)
            localStorage.setItem("quizOpponent", JSON.stringify(newOpponent))
          }

          setNextChallenge(getNextChallenge(savedCategory || undefined, savedDifficulty || undefined))
        }
      }

      // Set other data
      if (savedCategory) {
        setCategoryId(savedCategory)
        const category = getCategory(savedCategory)
        if (category) {
          setCategoryTitle(category.title)
        }
      }

      if (savedDifficulty) setDifficulty(savedDifficulty)
      if (savedChallenge) setChallenge(savedChallenge)
      if (savedTimeLeft) setTimeLeft(Number.parseInt(savedTimeLeft))
      if (savedTimeTotal) setTimeTotal(Number.parseInt(savedTimeTotal))

      // Check for new badges
      if (savedScore && savedTotal) {
        const awardedBadgeIds = checkForBadges({
          score: Number.parseInt(savedScore),
          totalQuestions: Number.parseInt(savedTotal),
          category: savedCategory || undefined,
          difficulty: savedDifficulty || undefined,
          challenge: savedChallenge || undefined,
          timeLeft: savedTimeLeft ? Number.parseInt(savedTimeLeft) : undefined,
          timeTotal: savedTimeTotal ? Number.parseInt(savedTimeTotal) : undefined,
        })

        if (awardedBadgeIds.length > 0) {
          const newBadgeDetails = badgesData.filter((badge) => awardedBadgeIds.includes(badge.id))
          setNewBadges(newBadgeDetails)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [user, profile, autoSaved])

  // Calculate percentage
  const percentage = score !== null && totalQuestions !== null ? Math.round((score / totalQuestions) * 100) : null

  // Determine message based on score
  const getMessage = () => {
    if (percentage === null) return ""
    if (percentage >= 80) return "Excellent! MashaAllah!"
    if (percentage >= 60) return "Good job! Keep learning! Alhamdulilah!"
    return "Keep studying. You can improve! Astaghufiruallah!"
  }

  const viewLeaderboard = () => {
    router.push("/leaderboard")
  }

  const tryAgain = () => {
    if (challenge) {
      router.push(`/challenges`)
    } else if (categoryId && difficulty) {
      router.push(`/quiz?category=${categoryId}&difficulty=${difficulty}`)
    } else {
      router.push("/categories")
    }
  }

  const goToNextChallenge = () => {
    if (nextChallenge) {
      router.push(
        `/quiz?category=${nextChallenge.category}&difficulty=${nextChallenge.difficulty}&challenge=${nextChallenge.challenge}&questions=10`,
      )
    } else {
      router.push("/challenges")
    }
  }

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-md border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading results...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4"></div>

      {newBadges.length > 0 && <BadgeNotification badges={newBadges} onClose={() => setNewBadges([])} />}

      {challenge && opponent && (
        <div className="w-full max-w-md mx-auto mb-6">
          <h2 className="text-lg font-semibold mb-3 text-center dark:text-white">Challenge Results</h2>
          <ChallengeResultsComparison
            userName={user ? profile?.full_name || profile?.username || "You" : "You"}
            userScore={score || 0}
            opponent={opponent}
            totalQuestions={totalQuestions || 10}
          />
        </div>
      )}

      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6">
        <Card className="w-full max-w-md mx-auto border-green-200 shadow-lg dark:border-green-800">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Quiz Results</CardTitle>
            {categoryTitle && difficulty && (
              <p className="text-green-600 dark:text-green-500 mt-1">
                {categoryTitle} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                {challenge && " Challenge"}
              </p>
            )}
          </CardHeader>
          <CardContent className="text-center">
            {score !== null && totalQuestions !== null ? (
              <>
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div
                      className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500 dark:border-green-600"
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${
                          percentage! >= 25
                            ? "100% 0%"
                            : `${50 + 50 * Math.sin(((percentage! / 100) * Math.PI) / 2)}% ${
                                50 - 50 * Math.cos(((percentage! / 100) * Math.PI) / 2)
                              }%`
                        }${percentage! >= 50 ? ", 100% 100%" : ""}${percentage! >= 75 ? ", 0% 100%" : ""}${
                          percentage! >= 100 ? ", 0% 0%" : ""
                        })`,
                      }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold dark:text-white">{percentage}%</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl mb-2 dark:text-white">
                  You scored <span className="font-bold text-green-700 dark:text-green-400">{score}</span> out of{" "}
                  <span className="font-bold">{totalQuestions}</span>
                </p>
                <p className="text-lg text-green-800 dark:text-green-400 mb-6">{getMessage()}</p>

                {user && profile ? (
                  // Authenticated user - auto-saved
                  <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-lg font-medium dark:text-white">
                        Welcome, {profile.full_name || profile.username}!
                      </span>
                    </div>
                    <p className="text-green-700 dark:text-green-400 mb-4">
                      Your score has been automatically saved to your profile!
                    </p>
                    <Button
                      onClick={viewLeaderboard}
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                    >
                      View Leaderboard
                    </Button>
                  </div>
                ) : (
                  // Non-authenticated user - require sign in
                  <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-lg font-medium dark:text-white">Join the Hall of Fame</span>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                      Sign in to save your scores and compete on the leaderboard!
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link href="/auth" className="w-full">
                        <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                          Sign In to Save Score
                        </Button>
                      </Link>
                      <Button
                        onClick={viewLeaderboard}
                        variant="outline"
                        className="w-full dark:border-green-700 dark:text-green-400"
                      >
                        View Leaderboard
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="dark:text-white">No results found. Try taking the quiz first!</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href={challenge ? "/challenges" : "/categories"}>
              <Button variant="outline" className="dark:border-green-700 dark:text-green-400">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {challenge ? "Challenges" : "Categories"}
              </Button>
            </Link>
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={tryAgain}
            >
              Try Again
            </Button>
            {challenge && nextChallenge && (
              <Button
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 ml-2"
                onClick={goToNextChallenge}
              >
                Next Challenge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-4">
          <BadgesProfile />
        </div>
      </div>
    </main>
  )
}
