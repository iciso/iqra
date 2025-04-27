"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addToLeaderboard } from "@/utils/leaderboard"
import { getCategory } from "@/data/quiz-data-manager"
import { checkForBadges } from "@/utils/badges"
import badgesData from "@/data/badges-data"
import BadgeNotification from "@/components/badges/badge-notification"
import BadgesProfile from "@/components/badges/badges-profile"

export default function ResultsPage() {
  const router = useRouter()
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

  useEffect(() => {
    // Mark that we're on the client
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

      if (savedScore && savedTotal) {
        setScore(Number.parseInt(savedScore))
        setTotalQuestions(Number.parseInt(savedTotal))
      }

      if (savedCategory) {
        setCategoryId(savedCategory)
        const category = getCategory(savedCategory)
        if (category) {
          setCategoryTitle(category.title)
        }
      }

      if (savedDifficulty) {
        setDifficulty(savedDifficulty)
      }

      if (savedChallenge) {
        setChallenge(savedChallenge)
      }

      if (savedTimeLeft) {
        setTimeLeft(Number.parseInt(savedTimeLeft))
      }

      if (savedTimeTotal) {
        setTimeTotal(Number.parseInt(savedTimeTotal))
      }

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

        // Find badge details for the awarded badge IDs
        if (awardedBadgeIds.length > 0) {
          const newBadgeDetails = badgesData.filter((badge) => awardedBadgeIds.includes(badge.id))
          setNewBadges(newBadgeDetails)
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  // Calculate percentage
  const percentage = score !== null && totalQuestions !== null ? Math.round((score / totalQuestions) * 100) : null

  // Determine message based on score
  const getMessage = () => {
    if (percentage === null) return ""
    if (percentage >= 80) return "Excellent! MashaAllah!"
    if (percentage >= 60) return "Good job! Keep learning! Alhamdulilah!"
    return "Keep studying. You can improve! Astaghufiruallah!"
  }

  const handleSubmitScore = () => {
    if (!userName.trim() || score === null || totalQuestions === null || percentage === null) return

    // Format current date
    const today = new Date()
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })

    // Add to leaderboard
    addToLeaderboard({
      name: userName.trim(),
      score,
      totalQuestions,
      percentage,
      date: formattedDate,
      category: categoryTitle || "Unknown",
      difficulty: difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : "Unknown",
      challenge: challenge || undefined,
    })

    setSubmitted(true)
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
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {newBadges.length > 0 && <BadgeNotification badges={newBadges} onClose={() => setNewBadges([])} />}

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

                {!submitted ? (
                  <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium mb-2 flex items-center justify-center dark:text-white">
                      <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                      Join the Hall of Fame
                    </h3>
                    <div className="mb-4">
                      <Label htmlFor="user-name" className="text-left block mb-1 dark:text-gray-300">
                        Enter your name:
                      </Label>
                      <Input
                        id="user-name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your name"
                        className="dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                    <Button
                      onClick={handleSubmitScore}
                      disabled={!userName.trim()}
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                    >
                      Submit to Leaderboard
                    </Button>
                  </div>
                ) : (
                  <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                    <p className="text-green-700 dark:text-green-400 mb-4">
                      Your score has been added to the Hall of Fame!
                    </p>
                    <Button
                      onClick={viewLeaderboard}
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                    >
                      View Leaderboard
                    </Button>
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
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-4">
          <BadgesProfile />
        </div>
      </div>
    </main>
  )
}
