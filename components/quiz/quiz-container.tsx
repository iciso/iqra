"use client"

import { useState, useEffect, useEffectEvent, useMemo, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle, Clock, Info } from "lucide-react"
import Link from "next/link"
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz"
import { getRandomOpponent } from "@/utils/opponents"
import { LoadingAnimation } from "@/components/loading-animation"
import InteractiveInfographic from "@/components/quiz/interactive-infographic"
import { getUserProfile } from "@/lib/supabase-queries"
import { toast } from "@/components/ui/use-toast"

// The opponent shown during a challenge quiz (and saved to localStorage for /results)
interface QuizOpponent {
  id: string
  name: string
  avatar_url?: string | null
  level?: string
}

// Row shape read from user_profiles (getUserProfile is untyped)
interface OpponentProfileRow {
  id: string
  full_name?: string | null
  username?: string | null
  avatar_url?: string | null
}

// false while the server renders and while React hydrates, true after that.
// Random things (option order, bot opponent) are only made when this is true,
// so the server HTML and the first client render match (React error #418).
const subscribeNothing = () => () => {}
function useIsClient() {
  return useSyncExternalStore(
    subscribeNothing,
    () => true,
    () => false,
  )
}

function challengeMinutes(challengeMode?: string) {
  if (challengeMode === "quran") return 7
  if (challengeMode === "seerah") return 6
  return 5
}

// Fisher–Yates shuffle – returns a new array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Options like "All of the above" or "Both A and B" only make sense in their
// original place, so they are kept at the end (in their original order).
const PINNED_OPTION = /(all|none|both|neither) of (the above|these|them)|^\s*(both\s+)?[a-d]\s*(and|&|,)\s*[a-d]\b/i

function shuffleOptions(options: string[]): string[] {
  const movable = options.filter((o) => !PINNED_OPTION.test(o))
  const pinned = options.filter((o) => PINNED_OPTION.test(o))
  return [...shuffleArray(movable), ...pinned]
}

interface QuizContainerProps {
  questions: QuizQuestion[]
  category: QuizCategory
  difficulty: DifficultyLevel
  challengeMode?: string
  opponentId?: string
  opponentName?: string
  challengerTurn?: boolean
}

export default function QuizContainer({
  questions,
  category,
  difficulty,
  challengeMode,
  opponentId,
  opponentName,
  challengerTurn,
}: QuizContainerProps) {
  const router = useRouter()
  const isClient = useIsClient()
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // questionIndex -> was the FIRST submitted answer correct?
  // The score is derived from this, so it can never exceed questions.length
  // and revisiting a question can never earn a second point.
  const [graded, setGraded] = useState<Record<number, boolean>>({})
  const score = useMemo(
    () => Math.min(Object.values(graded).filter(Boolean).length, questions.length),
    [graded, questions.length],
  )

  // One answer slot per question; the selected answer is the slot of the current question
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""))
  const selectedAnswer = answers[currentQuestion] || ""
  const progress = (currentQuestion / questions.length) * 100

  const [showExplanation, setShowExplanation] = useState(false)
  // Challenge mode is timed; the timer starts as soon as the quiz is on screen
  const [timeLeft, setTimeLeft] = useState(() => (challengeMode ? challengeMinutes(challengeMode) * 60 : 0))
  const [isTimerRunning, setIsTimerRunning] = useState(Boolean(challengeMode))
  const [isLoading, setIsLoading] = useState(false)
  const [transitionType, setTransitionType] = useState<"next" | "submit" | "finish" | null>(null)

  // Shuffle the options of every question once when the quiz starts
  // so the correct answer is not always in the same position.
  // Done only on the client (after hydration) so the server HTML matches.
  const shuffledQuestions = useMemo(
    () =>
      isClient
        ? questions.map((q) => ({
            ...q,
            options: shuffleOptions(q.options),
          }))
        : questions,
    [isClient, questions],
  )

  // Demo / fallback challenges skip all database work
  const isFallbackChallenge = Boolean(
    (challengeMode && (challengeMode.startsWith("demo-") || challengeMode.startsWith("fallback-"))) ||
      (opponentId && opponentId.startsWith("demo-")),
  )

  // Where the opponent comes from: the URL name, the user's profile, or a random bot
  const opponentSource = !challengeMode
    ? "none"
    : opponentName
      ? "url"
      : opponentId && !isFallbackChallenge
        ? "profile"
        : "bot"
  const opponentLevel = challengerTurn ? "Waiting for your quiz" : "Challenger"
  const [profileOpponent, setProfileOpponent] = useState<QuizOpponent | null>(null)
  const botOpponent = useMemo(
    () => (isClient && opponentSource === "bot" ? getRandomOpponent() : null),
    [isClient, opponentSource],
  )
  const opponent: QuizOpponent | null = useMemo(() => {
    if (opponentSource === "url" && opponentName) {
      // Use opponentName from URL — no Supabase lookup needed
      return { id: opponentId || opponentName, name: opponentName, avatar_url: null, level: opponentLevel }
    }
    if (opponentSource === "profile") return profileOpponent
    if (opponentSource === "bot") return botOpponent
    return null
  }, [opponentSource, opponentId, opponentName, opponentLevel, profileOpponent, botOpponent])

  useEffect(() => {
    if (challengeMode) {
      console.log("🎯 QUIZ CONTAINER: Challenge mode active")
      console.log("🎯 QUIZ CONTAINER: Opponent ID from URL:", opponentId)
      console.log("🎯 QUIZ CONTAINER: Opponent Name from URL:", opponentName)
      console.log("🎯 QUIZ CONTAINER: Challenger turn:", challengerTurn)
      console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge)
      console.log("🎯 QUIZ CONTAINER: Opponent source:", opponentSource)
      localStorage.setItem("quizTimeTotal", (challengeMinutes(challengeMode) * 60).toString())
    }
    console.log("🎯 QUIZ CONTAINER: Setup complete")
    console.log("🎯 QUIZ CONTAINER: Questions loaded:", questions.length)
  }, [questions.length, challengeMode, opponentId, opponentName, challengerTurn, isFallbackChallenge, opponentSource])

  // Fetch the opponent's profile from the database
  useEffect(() => {
    if (opponentSource !== "profile" || !opponentId) return
    let cancelled = false
    const fallbackOpponent = { id: opponentId, name: opponentName || "Challenger", avatar_url: null, level: opponentLevel }
    console.log("🎯 QUIZ CONTAINER: Fetching opponent profile from database")
    getUserProfile(opponentId)
      .then((data) => {
        const opponentData = data as OpponentProfileRow | null
        console.log("🎯 QUIZ CONTAINER: Fetched opponent data:", opponentData)
        if (cancelled) return
        if (opponentData) {
          setProfileOpponent({
            id: opponentData.id,
            name: opponentData.full_name || opponentData.username || "Challenger",
            avatar_url: opponentData.avatar_url,
            level: opponentLevel,
          })
        } else {
          console.log("🎯 QUIZ CONTAINER: No opponent data found, using fallback")
          setProfileOpponent(fallbackOpponent)
        }
      })
      .catch((error) => {
        console.error("🎯 QUIZ CONTAINER: Error fetching opponent:", error)
        if (!cancelled) setProfileOpponent(fallbackOpponent)
      })
    return () => {
      cancelled = true
    }
  }, [opponentSource, opponentId, opponentName, opponentLevel])

  // Keep the opponent in localStorage for the results page
  useEffect(() => {
    if (!opponent) return
    localStorage.setItem("quizOpponentId", opponent.id)
    localStorage.setItem("quizOpponent", JSON.stringify(opponent))
  }, [opponent])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleAnswerSelect = (value: string) => {
    if (showExplanation) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleSubmitAnswer = () => {
    if (!shuffledQuestions[currentQuestion]) return

    const index = currentQuestion

    setTransitionType("submit")
    setIsLoading(true)

    setTimeout(() => {
      const correct = selectedAnswer === shuffledQuestions[index].correctAnswer

      // Record only the FIRST answer for each question; later attempts are ignored
      setGraded((prev) => (index in prev ? prev : { ...prev, [index]: correct }))

      setShowExplanation(true)
      setIsLoading(false)
      setTransitionType(null)
    }, 800)
  }

  const handleNext = () => {
    setTransitionType("next")
    setIsLoading(true)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        const nextIndex = currentQuestion + 1
        setCurrentQuestion(nextIndex)

        // Already answered? Open it in read-only review mode
        if (nextIndex in graded) {
          setShowExplanation(true)
        } else {
          setShowExplanation(false)
        }
      } else {
        setTransitionType("finish")
        handleFinishQuiz()
        return
      }

      setIsLoading(false)
      setTransitionType(null)
    }, 800)
  }

  const submitQuizWithTimeout = async (timeoutMs = 5000) => {
    const { submitQuizResult } = await import("@/lib/supabase-queries")

    // Read player name from localStorage — same key used everywhere
    let playerName = ""
    if (typeof window !== "undefined") {
      playerName = localStorage.getItem("userNameForLeaderboard") || localStorage.getItem("playerName") || ""
    }

    if (!playerName || playerName.length < 2) {
      throw new Error(
        "No player name found — please enter your name with more than 2 characters on the homepage first.",
      )
    }

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Quiz submission timeout")), timeoutMs)
    })

    const submitPromise = submitQuizResult(
      score,
      questions.length,
      category.id,
      difficulty,
      timeLeft,
      answers,
      challengeMode,
      playerName,
    )

    return Promise.race([submitPromise, timeoutPromise])
  }

  const handleFinishQuiz = async () => {
    console.log("🎯 QUIZ CONTAINER: Starting quiz finish process...")
    console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge)

    setIsTimerRunning(false)

    try {
      localStorage.setItem("quizScore", score.toString())
      localStorage.setItem("totalQuestions", questions.length.toString())
      localStorage.setItem("quizCategory", category.id)
      localStorage.setItem("quizDifficulty", difficulty)
      localStorage.setItem("quizChallenge", challengeMode || "")
      localStorage.setItem("quizTimeLeft", timeLeft.toString())
      // A unique id for this quiz attempt
      localStorage.setItem("quizId", `quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`)

      if (challengerTurn) {
        localStorage.setItem("challengerTurn", "true")
        console.log("🎯 QUIZ CONTAINER: Stored challengerTurn=true in localStorage")
      } else {
        localStorage.setItem("challengerTurn", "false")
      }

      if (opponent) {
        localStorage.setItem("quizOpponentId", opponent.id || "")
        localStorage.setItem("quizOpponent", JSON.stringify(opponent))
      }

      console.log("🎯 QUIZ CONTAINER: All localStorage data saved successfully")
    } catch (error) {
      console.error("🎯 QUIZ CONTAINER: Error saving to localStorage:", error)
    }

    if (isFallbackChallenge) {
      console.log("🎯 QUIZ CONTAINER: Fallback challenge detected - skipping database operations")
      toast({
        title: "Challenge Sent!",
        description: `Your score (${score}/${questions.length}) has been recorded. Your opponent will be notified.`,
        duration: 5000,
      })
      router.push("/results")
      return
    }

    toast({
      title: "Saving your score...",
      description: "Please wait while we update the leaderboard.",
      duration: 3000,
    })

    try {
      if (challengerTurn && challengeMode) {
        console.log("🎯 QUIZ CONTAINER: Challenger finished quiz, updating challenge status...")

        try {
          console.log("🎯 QUIZ CONTAINER: Submitting challenger quiz result...")
          await submitQuizWithTimeout(5000)
          console.log("✅ QUIZ CONTAINER: Quiz result submitted successfully")

          toast({
            title: "Challenge Sent Successfully!",
            description: `Your score (${score}/${questions.length}) has been recorded. Your opponent will be notified.`,
            duration: 5000,
          })

          router.push("/results")
          return
        } catch (error) {
          console.error("🎯 QUIZ CONTAINER: Quiz submission error:", error)
          toast({
            title: "Challenge Sent!",
            description: `Your score (${score}/${questions.length}) has been recorded.`,
            duration: 5000,
          })
          router.push("/results")
          return
        }
      } else if (challengeMode) {
        console.log("🏆 QUIZ CONTAINER: Challenge completion - submitting challenged player score...")

        try {
          console.log("💾 Submitting your score to leaderboard...")
          await submitQuizWithTimeout(5000)
          console.log("✅ Challenge score submitted successfully")

          toast({
            title: "Challenge Completed!",
            description: `Your score (${score}/${questions.length}) has been recorded!`,
            duration: 5000,
          })

          router.push("/results")
          return
        } catch (error) {
          console.error("❌ Error in challenge completion:", error)
          toast({
            title: "Challenge Completed!",
            description: `Your score: ${score}/${questions.length}. Great job!`,
            duration: 5000,
          })
          router.push("/results")
          return
        }
      } else {
        console.log("🎯 QUIZ CONTAINER: Regular quiz completion...")
        toast({
          title: "Quiz Completed!",
          description: `Saving your score (${score}/${questions.length}) to the leaderboard...`,
          duration: 3000,
        })
        router.push("/results")
        return
      }
    } catch (error) {
      console.error("🎯 QUIZ CONTAINER: General error in handleFinishQuiz:", error)
      toast({
        title: "Quiz Completed!",
        description: `Your score: ${score}/${questions.length}. Great job!`,
        duration: 3000,
      })
      router.push("/results")
    }
  }

  // When the challenge timer runs out, finish the quiz
  const onTimeUp = useEffectEvent(() => {
    handleFinishQuiz()
  })

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      onTimeUp()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isTimerRunning, timeLeft])

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setTransitionType("next")
      setIsLoading(true)

      setTimeout(() => {
        const prevIndex = currentQuestion - 1
        setCurrentQuestion(prevIndex)

        // Every earlier question has been answered, so show it in review mode:
        // original choice, correct answer and explanation, with options locked
        if (prevIndex in graded) {
          setShowExplanation(true)
        } else {
          setShowExplanation(false)
        }

        setIsLoading(false)
        setTransitionType(null)
      }, 800)
    }
  }

  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">No questions available for this category and difficulty level.</p>
          <Link href="/subjects">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              Return to Subjects
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  const question = shuffledQuestions[currentQuestion]

  const getLoadingText = () => {
    if (transitionType === "submit") return "Checking answer..."
    if (transitionType === "next") return "Loading next question..."
    if (transitionType === "finish") return "Saving results..."
    return "Loading..."
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Button asChild variant="ghost" size="sm" className="-ml-3 mb-2 text-green-700 dark:text-green-400">
        <Link href={challengeMode ? "/challenges" : "/subjects"}>
          <ChevronLeft className="h-4 w-4" />
          {challengeMode ? "Challenges" : "Subjects"}
        </Link>
      </Button>

      <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-green-700 dark:text-green-400">
            {category.title} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            {challengeMode && challengerTurn && ` Challenge (Your Turn)`}
            {challengeMode && !challengerTurn && ` Challenge`}
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-green-100 dark:bg-green-800" />

        {challengeMode && (
          <div className="flex justify-end items-center mt-2">
            <Clock className="h-4 w-4 mr-1 text-green-700 dark:text-green-400" />
            <span
              className={`text-sm font-medium ${timeLeft < 60 ? "text-red-600 dark:text-red-400" : "text-green-700 dark:text-green-400"}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        )}
      </div>

      <Card className="border-green-200 shadow-lg dark:border-green-800 h-[600px] flex flex-col">
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <LoadingAnimation size="md" text={getLoadingText()} />
          </div>
        ) : (
          <>
            <CardHeader className="flex flex-col items-center">
              <Book className="w-10 h-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle className="text-xl text-green-800 dark:text-green-400">
                Question {currentQuestion + 1}
              </CardTitle>

              {challengeMode && opponent && (
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {challengerTurn ? "Challenging:" : "Opponent:"}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-sm">{opponentName || opponent.name || "Challenger"}</span>
                      {!opponentName && opponent.level && !opponent.name.includes("bot") && (
                        <span className="text-xs text-gray-500">({opponent.level})</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto">
              <div className="h-full flex flex-col justify-between">
                <div className="mb-6 flex-1">
                  <h2
                    className="text-lg font-medium mb-4 text-card-foreground min-h-[3rem] leading-normal"
                    style={{
                      // Make Arabic letters ~2× larger so vowels (tashkīl) are readable
                      fontSize: /[\u0600-\u06FF]/.test(question.question) ? "1.65rem" : undefined,
                      lineHeight: /[\u0600-\u06FF]/.test(question.question) ? "1.4" : undefined,
                    }}
                  >
                    {question.question}
                  </h2>

                  <div className="min-h-[200px]">
                    <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 mb-2 p-2 rounded
                            ${
                              showExplanation && option === question.correctAnswer
                                ? "bg-green-100 dark:bg-green-900"
                                : showExplanation && option === selectedAnswer && option !== question.correctAnswer
                                  ? "bg-red-100 dark:bg-red-900"
                                  : "hover:bg-green-50 dark:hover:bg-green-900/50"
                            }`}
                        >
                          <RadioGroupItem value={option} id={`option-${index}`} disabled={showExplanation} />
                          <Label htmlFor={`option-${index}`} className="cursor-pointer w-full text-card-foreground">
                            {option}
                            {showExplanation && option === question.correctAnswer && (
                              <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-600 dark:text-green-400" />
                            )}
                            {showExplanation && option === selectedAnswer && option !== question.correctAnswer && (
                              <XCircle className="inline-block ml-2 h-4 w-4 text-red-600 dark:text-red-400" />
                            )}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {showExplanation && (
                    <div className="mt-4 max-h-[150px] overflow-y-auto">
                      {question.explanation && (
                        <Alert className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                          <AlertDescription
                            className="text-blue-800 dark:text-blue-300"
                            style={{
                              fontSize: /[\u0600-\u06FF]/.test(question.explanation || "") ? "1.15rem" : undefined,
                              lineHeight: 1.8,
                            }}
                          >
                            <div className="flex items-start">
                              <Info className="h-5 w-5 mr-2 flex-shrink-0 text-blue-700 dark:text-blue-400" />
                              <div>
                                <strong className="block mb-1">Explanation:</strong>
                                {question.explanation}
                              </div>
                            </div>
                          </AlertDescription>
                        </Alert>
                      )}

                      {!challengeMode &&
                        question.hasInfographic &&
                        question.infographicType &&
                        question.infographicData && (
                          <div className="mt-4">
                            <InteractiveInfographic
                              type={question.infographicType}
                              data={question.infographicData}
                              title={`${category.title} - Visual Explanation`}
                            />
                          </div>
                        )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between mt-auto">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0 || isLoading}
                className="dark:border-green-700 dark:text-green-400 bg-transparent"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Previous
              </Button>

              {!showExplanation ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer || isLoading}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  {currentQuestion === questions.length - 1
                    ? challengerTurn
                      ? "Send Challenge"
                      : "Finish Quiz"
                    : "Next"}
                  {currentQuestion !== questions.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
