"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, ArrowLeft, ArrowRight, Clock, CheckCircle, Users } from "lucide-react"
import { getCategory } from "@/data/quiz-data-manager"
import { checkForBadges } from "@/utils/badges"
import badgesData from "@/data/badges-data"
import BadgeNotification from "@/components/badges/badge-notification"
import BadgesProfile from "@/components/badges/badges-profile"
import { getRandomOpponent, generateBotScore, getNextChallenge } from "@/utils/opponents"
import type { Opponent } from "@/components/challenge/opponent-profile"
import ChallengeResultsComparison from "@/components/challenge/challenge-results-comparison"
import { useAuth } from "@/contexts/auth-context"
import { submitQuizResult, getChallenge } from "@/lib/supabase-queries"

export default function ResultsPage() {
  const router = useRouter()
  const { user, profile, loading } = useAuth()
  const [score, setScore] = useState<number | null>(null)
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null)
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
  const [saving, setSaving] = useState(false)
  const [challengeData, setChallengeData] = useState<any>(null)
  const [isChallenger, setIsChallenger] = useState(false)
  const [challengerTurn, setChallengerTurn] = useState(false)
  const [authReady, setAuthReady] = useState(false)

  // Get localStorage values directly for render decision
  const getLocalStorageValues = () => {
    if (typeof window === "undefined") return { challenge: null, challengerTurn: false, score: null }

    return {
      challenge: localStorage.getItem("quizChallenge"),
      challengerTurn: localStorage.getItem("challengerTurn") === "true",
      score: localStorage.getItem("quizScore"),
    }
  }

  // Wait for auth to fully initialize (not just "not loading")
  useEffect(() => {
    if (!loading) {
      // Give it a tiny extra moment to ensure profile fetch completes
      const timer = setTimeout(() => {
        setAuthReady(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [loading])

  // Debug authentication state
  useEffect(() => {
    console.log("🔍 Results page auth state:", {
      user: !!user,
      profile: !!profile,
      loading,
      authReady,
      userEmail: user?.email,
      profileUsername: profile?.username,
    })
  }, [user, profile, loading, authReady])

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
      const savedChallengerTurn = localStorage.getItem("challengerTurn") === "true"

      console.log("🎯 RESULTS: Challenge detection values:", {
        savedChallenge,
        savedChallengerTurn,
        hasChallenge: !!savedChallenge,
        isChallengerTurn: savedChallengerTurn,
        hasScore: !!savedScore,
        showChallengeSubmitted: !!savedChallenge && savedChallengerTurn && !!savedScore,
      })

      setChallengerTurn(savedChallengerTurn)

      if (savedScore && savedTotal) {
        const parsedScore = Number.parseInt(savedScore)
        const parsedTotal = Number.parseInt(savedTotal)

        setScore(parsedScore)
        setTotalQuestions(parsedTotal)

        // Generate opponent for challenges
        if (savedChallenge) {
          setChallenge(savedChallenge)

          // Fetch challenge data from Supabase
          const fetchChallengeData = async () => {
            try {
              if (!user) return

              const challengeData = await getChallenge(savedChallenge)
              console.log("📋 Challenge data:", challengeData)

              if (challengeData) {
                setChallengeData(challengeData)
                const isUserChallenger = challengeData.challenger_id === user.id
                setIsChallenger(isUserChallenger)

                // Set opponent based on challenge data
                const opponentData = isUserChallenger ? challengeData.challenged : challengeData.challenger
                if (opponentData) {
                  const opponentInfo = {
                    id: opponentData.id,
                    name: opponentData.full_name || opponentData.username || "Opponent",
                    avatar_url: opponentData.avatar_url,
                    level: savedChallengerTurn ? "Waiting for response" : "Challenger",
                    score: isUserChallenger ? null : challengeData.challenger_score,
                  }
                  setOpponent(opponentInfo)
                }
              }
            } catch (error) {
              console.error("Error fetching challenge data:", error)

              // Fallback to localStorage opponent
              const newOpponent = savedOpponentId
                ? JSON.parse(localStorage.getItem("quizOpponent") || "null")
                : getRandomOpponent()

              if (newOpponent) {
                newOpponent.score = generateBotScore(parsedScore, parsedTotal)
                setOpponent(newOpponent)
              }
            }
          }

          fetchChallengeData()
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
      console.error("❌ Error accessing localStorage:", error)
    }
  }, [user])

  // Auto-save with retry logic
  useEffect(() => {
    const autoSave = async () => {
      console.log("💾 RESULTS AUTO-SAVE: Starting check...", {
        hasUser: !!user,
        hasProfile: !!profile,
        hasScore: score !== null,
        hasTotalQuestions: totalQuestions !== null,
        submitted,
        saving,
        loading,
        authReady,
        challenge,
        challengerTurn,
      })

      // Only attempt save if:
      // 1. Auth is ready (not loading AND authReady is true)
      // 2. We have user, profile, score, and totalQuestions
      // 3. We haven't already submitted
      // 4. We're not currently saving
      if (authReady && user && profile && score !== null && totalQuestions !== null && !submitted && !saving) {
        console.log("🚀 RESULTS AUTO-SAVE: Starting auto-save...")
        setSaving(true)
        try {
          const result = await submitQuizResult(
            score,
            totalQuestions,
            categoryId || "quran",
            difficulty || "easy",
            timeLeft || undefined,
            undefined, // answers - can be added later
            challenge || undefined, // challenge_id for challenges
          )
          setSubmitted(true)
          console.log("✅ RESULTS AUTO-SAVE: Quiz result saved successfully!", result)
        } catch (error) {
          console.error("❌ RESULTS AUTO-SAVE: Error saving to database:", error)
          // Don't set submitted to true if there was an error
          // The user can retry or navigate manually
        } finally {
          setSaving(false)
        }
      }
    }

    autoSave()
  }, [authReady, user, profile, score, totalQuestions, submitted, saving, categoryId, difficulty, timeLeft, challenge])

  // Calculate percentage
  const percentage = score !== null && totalQuestions !== null ? Math.round((score / totalQuestions) * 100) : null

  // Determine message based on score
  const getMessage = () => {
    if (percentage === null) return ""
    if (percentage >= 80) return "Excellent! MashaAllah!"
    if (percentage >= 60) return "Good job! Keep learning! Alhamdulilah!"
    return "Keep studying. You can improve! Astaghufiruallah!"
  }

  const viewChallenges = () => {
    router.push("/challenges")
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

  // Show loading state while auth is loading
  if (!isClient || !authReady) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-md border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading your results...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  // Determine if user is authenticated
  const isAuthenticated = user && profile && !loading

  // Get current localStorage values for render decision
  const {
    challenge: currentChallenge,
    challengerTurn: currentChallengerTurn,
    score: currentScore,
  } = getLocalStorageValues()

  // Special case for challenger who just completed their turn
  const showChallengeSubmitted = currentChallenge && currentChallengerTurn && currentScore !== null

  console.log("🎯 FINAL Render decision:", {
    isAuthenticated,
    loading,
    authReady,
    user: !!user,
    profile: !!profile,
    isChallenger,
    challengerTurn,
    challenge: !!challenge,
    score,
    currentChallenge,
    currentChallengerTurn,
    currentScore,
    showChallengeSubmitted,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {newBadges.length > 0 && <BadgeNotification badges={newBadges} onClose={() => setNewBadges([])} />}

      {showChallengeSubmitted ? (
        // Challenge submitted view - show when challenger has just completed their turn
        <Card className="w-full max-w-md mx-auto border-green-200 shadow-lg dark:border-green-800">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Challenge Sent!</CardTitle>
            {categoryTitle && difficulty && (
              <p className="text-green-600 dark:text-green-500 mt-1">
                {categoryTitle} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Challenge
              </p>
            )}
          </CardHeader>
          <CardContent className="text-center">
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

            <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center mb-2">
                <Clock className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-lg font-medium dark:text-white">Waiting for opponent</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                Your challenge has been sent to {opponent?.name || "your opponent"}. You'll be notified when they
                respond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link href="/leaderboard" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    <Trophy className="mr-2 h-4 w-4" />
                    View Leaderboard
                  </Button>
                </Link>
                <Link href="/challenges" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                    <Users className="mr-2 h-4 w-4" />
                    View Challenges
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/categories">
              <Button variant="outline" className="dark:border-green-700 dark:text-green-400 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Categories
              </Button>
            </Link>
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={() => router.push("/")}
            >
              Home
            </Button>
          </CardFooter>
        </Card>
      ) : (
        // Regular results view
        <>
          {challenge && opponent && (
            <div className="w-full max-w-md mx-auto mb-6">
              <h2 className="text-lg font-semibold mb-3 text-center dark:text-white">Challenge Results</h2>
              <ChallengeResultsComparison
                userName={isAuthenticated ? profile.full_name || profile.username || "You" : "You"}
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

                    {isAuthenticated ? (
                      // Authenticated user - show results with links
                      <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                          <span className="text-lg font-medium dark:text-white">
                            Welcome, {profile?.full_name || profile?.username}! 🎉
                          </span>
                        </div>
                        {saving ? (
                          <p className="text-blue-600 dark:text-blue-400 mb-4">💾 Saving your score...</p>
                        ) : submitted ? (
                          <p className="text-green-700 dark:text-green-400 mb-4">
                            ✅ Your score has been saved to your profile!
                          </p>
                        ) : (
                          <p className="text-yellow-600 dark:text-yellow-400 mb-4">
                            🔄 Preparing to save your score...
                          </p>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                          <Link href="/leaderboard" className="flex-1">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                              <Trophy className="mr-2 h-4 w-4" />
                              View Leaderboard
                            </Button>
                          </Link>
                          {challenge && (
                            <Link href="/challenges" className="flex-1">
                              <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                                <Users className="mr-2 h-4 w-4" />
                                View Challenges
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    ) : (
                      // This should now rarely appear since users must be authenticated
                      <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="mr-2 h-5 w-5 text-red-500" />
                          <span className="text-lg font-medium dark:text-white">Authentication Issue</span>
                        </div>
                        <p className="text-center text-red-600 dark:text-red-400 mb-4">
                          Please refresh the page to restore your session.
                        </p>
                        <Button
                          onClick={() => window.location.reload()}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          🔄 Refresh Page
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="dark:text-white mb-4">No quiz results found.</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Complete a quiz to see your results here!
                    </p>
                    <Link href="/categories">
                      <Button className="mt-4 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                        Start a Quiz
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link href={challenge ? "/challenges" : "/categories"}>
                  <Button variant="outline" className="dark:border-green-700 dark:text-green-400 bg-transparent">
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
        </>
      )}
    </main>
  )
}
