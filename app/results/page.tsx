"use client"

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { Trans, useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import PageHeader from "@/components/shared/page-header"
import EmptyState from "@/components/shared/empty-state"
import { pageContainerClass } from "@/lib/page-layout"
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
import { submitQuizResult } from "@/lib/quiz-submit"
import { NameInputModal } from "@/components/quiz/name-input-modal"
import { addToLeaderboard } from "@/utils/leaderboard"

// The finished quiz, as quiz-container left it in localStorage.
interface StoredQuiz {
  score: number | null
  totalQuestions: number | null
  categoryId: string | null
  categoryTitle: string
  difficulty: string | null
  challenge: string | null
  challengerTurn: boolean
  opponentId: string | null
  timeLeft: number | null
  nextChallenge: { category: string; difficulty: string; challenge: string } | null
  newBadges: typeof badgesData
}

const EMPTY_QUIZ: StoredQuiz = {
  score: null,
  totalQuestions: null,
  categoryId: null,
  categoryTitle: "",
  difficulty: null,
  challenge: null,
  challengerTurn: false,
  opponentId: null,
  timeLeft: null,
  nextChallenge: null,
  newBadges: [],
}

// Reads the finished quiz once, when the page mounts in the browser. It also
// awards any new badges (checkForBadges), so it must run only once per visit.
function readStoredQuiz(): StoredQuiz {
  if (typeof window === "undefined") return EMPTY_QUIZ
  const quiz: StoredQuiz = { ...EMPTY_QUIZ }

  try {
    const savedScore = localStorage.getItem("quizScore")
    const savedTotal = localStorage.getItem("totalQuestions")
    const savedCategory = localStorage.getItem("quizCategory")
    const savedDifficulty = localStorage.getItem("quizDifficulty")
    const savedChallenge = localStorage.getItem("quizChallenge")
    const savedTimeLeft = localStorage.getItem("quizTimeLeft")
    const savedTimeTotal = localStorage.getItem("quizTimeTotal")
    const savedChallengerTurn = localStorage.getItem("challengerTurn") === "true"

    console.log("🎯 RESULTS: Challenge detection values:", {
      savedChallenge,
      savedChallengerTurn,
      hasChallenge: !!savedChallenge,
      isChallengerTurn: savedChallengerTurn,
      hasScore: !!savedScore,
      showChallengeSubmitted: !!savedChallenge && savedChallengerTurn && !!savedScore,
    })

    quiz.challengerTurn = savedChallengerTurn
    quiz.opponentId = localStorage.getItem("quizOpponentId")

    if (savedScore && savedTotal) {
      quiz.score = Number.parseInt(savedScore)
      quiz.totalQuestions = Number.parseInt(savedTotal)

      if (savedChallenge) {
        quiz.challenge = savedChallenge
        quiz.nextChallenge = getNextChallenge(savedCategory || undefined, savedDifficulty || undefined)
      }
    }

    if (savedCategory) {
      quiz.categoryId = savedCategory
      const category = getCategory(savedCategory)
      if (category) quiz.categoryTitle = category.title
    }

    if (savedDifficulty) quiz.difficulty = savedDifficulty
    if (savedTimeLeft) quiz.timeLeft = Number.parseInt(savedTimeLeft)

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
        quiz.newBadges = badgesData.filter((badge) => awardedBadgeIds.includes(badge.id))
      }
    }
  } catch (error) {
    console.error("❌ Error accessing localStorage:", error)
  }

  return quiz
}

// true in the browser, false on the server and during hydration.
const noSubscribe = () => () => {}
const onClient = () => true
const onServer = () => false

export default function ResultsPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const { user, profile, loading } = useAuth()
  const isClient = useSyncExternalStore(noSubscribe, onClient, onServer)
  // Read once on mount (lazy initializer), never during server rendering.
  const [stored] = useState(readStoredQuiz)
  const { score, totalQuestions, categoryId, categoryTitle, difficulty, challenge, timeLeft, nextChallenge } = stored
  const [submitted, setSubmitted] = useState(false)
  const [newBadges, setNewBadges] = useState(stored.newBadges)
  const [saving, setSaving] = useState(false)
  const [authReady, setAuthReady] = useState(false)
  const [nameModalSubmitted, setNameModalSubmitted] = useState(false)
  const saveStartedRef = useRef(false)
  const [saveError, setSaveError] = useState(false)

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
    console.log("🔍  Results page auth state:", {
      user: !!user,
      profile: !!profile,
      loading,
      authReady,
      userEmail: user?.email,
      profileUsername: profile?.username,
    })
  }, [user, profile, loading, authReady])

  // For a challenge, show the opponent saved by the quiz (or a bot) once the user is known.
  // Browser only (localStorage, random bot), so it waits for isClient.
  const hasUser = Boolean(user)
  const opponent = useMemo<Opponent | null>(() => {
    if (!isClient || !challenge || score === null || totalQuestions === null || !hasUser) return null
    const newOpponent: Opponent | null = stored.opponentId
      ? JSON.parse(localStorage.getItem("quizOpponent") || "null")
      : getRandomOpponent()
    if (newOpponent) newOpponent.score = generateBotScore(score, totalQuestions)
    return newOpponent
  }, [isClient, hasUser, challenge, score, totalQuestions, stored])

  // Show name modal only for non-challenge quizzes.
  // Challenge scores are already saved by the quiz-container with the correct name —
  // showing the modal again would cause a duplicate Neon write.
  const showNameModal = score !== null && totalQuestions !== null && !nameModalSubmitted && !challenge

  // The ONE place a regular (non-challenge) quiz result is written to the database.
  const saveResult = async (name?: string) => {
    if (saveStartedRef.current) return
    if (score === null || totalQuestions === null) return
    // Challenge scores are already saved by quiz-container
    if (localStorage.getItem("quizChallenge")) return

    saveStartedRef.current = true
    setSaving(true)
    setSaveError(false)
    try {
      const userName =
        name ||
        localStorage.getItem("userNameForLeaderboard") ||
        localStorage.getItem("playerName") ||
        undefined

      await submitQuizResult(
        score,
        totalQuestions,
        categoryId || "quran", // ID, not title
        difficulty || "easy",
        timeLeft || undefined,
        undefined,
        undefined,
        userName,
      )
      setSubmitted(true)
    } catch (error) {
      console.error("❌ Error saving quiz result:", error)
      setSaveError(true)
    } finally {
      setSaving(false)
    }
  }

  // Handle name submission: local leaderboard + the single database save
  const handleNameSubmit = async (name: string) => {
    if (score === null || totalQuestions === null) return

    try {
      const percentage = Math.round((score / totalQuestions) * 100)

      // Local leaderboard + remembers the name (no database write)
      await addToLeaderboard({
        name,
        score,
        totalQuestions,
        percentage,
        category: categoryId || undefined,
        difficulty: difficulty || undefined,
        challenge: challenge || undefined,
        date: new Date().toLocaleString(),
      })

      await saveResult(name)

      localStorage.setItem("nameModalSubmittedThisSession", "true")
      setNameModalSubmitted(true)

      setTimeout(() => {
        router.push("/leaderboard")
      }, 500)
    } catch (error) {
      console.error("[v0] Error submitting name:", error)
      throw error
    }
  }

  // Skipping the name still saves the result (using any stored name)
  const handleNameSkip = () => {
    localStorage.setItem("nameModalSubmittedThisSession", "true")
    setNameModalSubmitted(true)
    void saveResult()
  }

  // Calculate percentage
  const percentage = score !== null && totalQuestions !== null ? Math.round((score / totalQuestions) * 100) : null

  // Determine message based on score
  const getMessage = () => {
    if (percentage === null) return ""
    if (percentage >= 80) return t("results.excellent")
    if (percentage >= 60) return t("results.good")
    return t("results.keepStudying")
  }

  const tryAgain = () => {
    if (challenge) {
      router.push(`/challenges`)
    } else if (categoryId && difficulty) {
      router.push(`/quiz?category=${categoryId}&difficulty=${difficulty}`)
    } else {
      router.push("/subjects")
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
      <div className="mx-auto w-full max-w-6xl sm:px-6 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>{t("results.loading")}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Determine if we have valid results (authentication removed)
  const isAuthenticated = score !== null && totalQuestions !== null && !loading

  // Get current localStorage values for render decision
  const {
    challenge: currentChallenge,
    challengerTurn: currentChallengerTurn,
    score: currentScore,
  } = getLocalStorageValues()

  // Special case for challenger who just completed their turn
  const showChallengeSubmitted = currentChallenge && currentChallengerTurn && currentScore !== null

  return (
    <div className={`${pageContainerClass} flex flex-col items-center`}>
      {newBadges.length > 0 && <BadgeNotification badges={newBadges} onClose={() => setNewBadges([])} />}

      <PageHeader
        title={showChallengeSubmitted ? t("results.titleSent") : t("results.title")}
        subtitle={
          categoryTitle && difficulty ? (
            <>
              {categoryTitle} -{" "}
              {t(`difficulty.${difficulty}`, { defaultValue: difficulty.charAt(0).toUpperCase() + difficulty.slice(1) })}
              {(showChallengeSubmitted || challenge) && ` ${t("results.challengeSuffix")}`}
            </>
          ) : undefined
        }
      />

      {showChallengeSubmitted ? (
        // Challenge submitted view - show when challenger has just completed their turn
        <Card className="w-full max-w-md mx-auto border-green-200 shadow-lg dark:border-green-800">
          <CardHeader className="text-center">
            <div className="flex justify-center">
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
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
              <Trans
                i18nKey="results.youScored"
                values={{ score, total: totalQuestions }}
                components={{ green: <span className="font-bold text-green-700 dark:text-green-400" />, bold: <span className="font-bold" /> }}
              />
            </p>
            <p className="text-lg text-green-800 dark:text-green-400 mb-6">{getMessage()}</p>

            <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center mb-2">
                <Clock className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-lg font-medium dark:text-white">{t("results.waitingOpponent")}</span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 mb-4">
                {t("results.sentTo", { name: opponent?.name || t("results.yourOpponent") })}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Link href="/leaderboard" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    <Trophy className="mr-2 h-4 w-4" />
                    {t("results.viewLeaderboard")}
                  </Button>
                </Link>
                <Link href="/challenges" className="flex-1">
                  <Button className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                    <Users className="mr-2 h-4 w-4" />
                    {t("results.viewChallenges")}
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/subjects">
              <Button variant="outline" className="dark:border-green-700 dark:text-green-400 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("results.subjects")}
              </Button>
            </Link>
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={() => router.push("/")}
            >
              {t("results.home")}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        // Regular results view
        <>
          {challenge && opponent && (
            <div className="w-full max-w-md mx-auto mb-6">
              <h2 className="text-lg font-semibold mb-3 text-center dark:text-white">{t("results.challengeResults")}</h2>
              <ChallengeResultsComparison
                userName={isAuthenticated ? profile?.full_name || profile?.username || t("results.you") : t("results.you")}
                userScore={score || 0}
                opponent={opponent}
                totalQuestions={totalQuestions || 10}
              />
            </div>
          )}

          <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6">
            <Card className="w-full max-w-md mx-auto border-green-200 shadow-lg dark:border-green-800">
              <CardHeader className="text-center">
                <div className="flex justify-center">
                  <Trophy className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
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
                      <Trans
                        i18nKey="results.youScored"
                        values={{ score, total: totalQuestions }}
                        components={{ green: <span className="font-bold text-green-700 dark:text-green-400" />, bold: <span className="font-bold" /> }}
                      />
                    </p>
                    <p className="text-lg text-green-800 dark:text-green-400 mb-6">{getMessage()}</p>

                    {isAuthenticated ? (
                      // Authenticated user - show results with links
                      <div className="mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" />
                          <span className="text-lg font-medium dark:text-white">
                            {t("results.welcome", { name: profile?.full_name || profile?.username })}
                          </span>
                        </div>
                        {saving ? (
                          <p className="text-blue-600 dark:text-blue-400 mb-4">{t("results.saving")}</p>
                        ) : submitted ? (
                          <p className="text-green-700 dark:text-green-400 mb-4">
                            {t("results.saved")}
                          </p>
                        ) : saveError ? (
                          <p className="text-red-600 dark:text-red-400 mb-4">
                            {t("results.saveFailed")}{" "}
                            <button
                              className="underline"
                              onClick={() => {
                                saveStartedRef.current = false
                                saveResult()
                              }}
                            >
                              {t("results.retry")}
                            </button>
                          </p>
                        ) : !challenge ? (
                          <p className="text-yellow-600 dark:text-yellow-400 mb-4">
                            {t("results.willSave")}
                          </p>
                        ) : null}
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
                          <span className="text-lg font-medium dark:text-white">{t("results.authIssue")}</span>
                        </div>
                        <p className="text-center text-red-600 dark:text-red-400 mb-4">
                          {t("results.authRefreshText")}
                        </p>
                        <Button
                          onClick={() => window.location.reload()}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          {t("results.refresh")}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <EmptyState
                    icon={<Trophy />}
                    title={t("results.noResultsTitle")}
                    text={t("results.noResultsText")}
                    action={
                      <Link href="/subjects">
                        <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                          {t("results.startQuiz")}
                        </Button>
                      </Link>
                    }
                  />
                )}
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link href={challenge ? "/challenges" : "/subjects"}>
                  <Button variant="outline" className="dark:border-green-700 dark:text-green-400 bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {challenge ? t("results.challenges") : t("results.subjects")}
                  </Button>
                </Link>
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={tryAgain}
                >
                  {t("results.tryAgain")}
                </Button>
                {challenge && nextChallenge && (
                  <Button
                    className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 ml-2"
                    onClick={goToNextChallenge}
                  >
                    {t("results.nextChallenge")}
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

      {/* Name Input Modal for Leaderboard */}
      <NameInputModal
        isOpen={showNameModal}
        onSubmit={handleNameSubmit}
        onSkip={handleNameSkip}
        score={score || 0}
        totalQuestions={totalQuestions || 0}
        percentage={score && totalQuestions ? Math.round((score / totalQuestions) * 100) : 0}
      />
    </div>
  )
}
