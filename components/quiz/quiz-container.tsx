"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle, Home, Clock, Info } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz"
import { getRandomOpponent } from "@/utils/opponents"
import { LoadingAnimation } from "@/components/loading-animation"
import { getUserProfile } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { toast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"

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
  const { user } = useAuth()
  const { t } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [progress, setProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [quizId, setQuizId] = useState("")
  const [opponent, setOpponent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [transitionType, setTransitionType] = useState<"next" | "submit" | "finish" | null>(null)

  // Helper function to detect fallback challenges
  const isFallbackChallenge = () => {
    return (
      challengeMode?.startsWith("demo-") || challengeMode?.startsWith("fallback-") || opponentId?.startsWith("demo-")
    )
  }

  // Generate a unique quiz ID when the component mounts
  useEffect(() => {
    setQuizId(`quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`)
  }, [])

  useEffect(() => {
    // Initialize answers array
    setAnswers(Array(questions.length).fill(""))

    // Set up opponent for challenge mode
    if (challengeMode) {
      console.log("🎯 QUIZ CONTAINER: Challenge mode active")
      console.log("🎯 QUIZ CONTAINER: Opponent ID from URL:", opponentId)
      console.log("🎯 QUIZ CONTAINER: Opponent Name from URL:", opponentName)
      console.log("🎯 QUIZ CONTAINER: Challenger turn:", challengerTurn)
      console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge())

      if (opponentId && opponentName) {
        // We have opponent information from the URL - use it directly
        console.log("🎯 QUIZ CONTAINER: Using opponent info from URL")
        const opponentInfo = {
          id: opponentId,
          name: opponentName,
          avatar_url: null,
          level: challengerTurn ? "Waiting for your quiz" : "Challenger",
        }
        setOpponent(opponentInfo)

        // Store for results page
        localStorage.setItem("quizOpponentId", opponentId)
        localStorage.setItem("quizOpponent", JSON.stringify(opponentInfo))
      } else if (opponentId && !isFallbackChallenge()) {
        // We have opponent ID but no name - fetch from database (only for real challenges)
        console.log("🎯 QUIZ CONTAINER: Fetching opponent profile from database")
        const fetchOpponent = async () => {
          try {
            const opponentData = await getUserProfile(opponentId)
            console.log("🎯 QUIZ CONTAINER: Fetched opponent data:", opponentData)

            if (opponentData) {
              const opponentInfo = {
                id: opponentData.id,
                name: opponentData.full_name || opponentData.username || "Challenger",
                avatar_url: opponentData.avatar_url,
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              }
              setOpponent(opponentInfo)
              localStorage.setItem("quizOpponentId", opponentData.id)
              localStorage.setItem("quizOpponent", JSON.stringify(opponentInfo))
            } else {
              console.log("🎯 QUIZ CONTAINER: No opponent data found, using fallback")
              const fallbackOpponent = {
                id: opponentId,
                name: opponentName || "Challenger",
                avatar_url: null,
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              }
              setOpponent(fallbackOpponent)
              localStorage.setItem("quizOpponentId", opponentId)
              localStorage.setItem("quizOpponent", JSON.stringify(fallbackOpponent))
            }
          } catch (error) {
            console.error("🎯 QUIZ CONTAINER: Error fetching opponent:", error)
            const fallbackOpponent = {
              id: opponentId,
              name: opponentName || "Challenger",
              avatar_url: null,
              level: challengerTurn ? "Waiting for your quiz" : "Challenger",
            }
            setOpponent(fallbackOpponent)
            localStorage.setItem("quizOpponentId", opponentId)
            localStorage.setItem("quizOpponent", JSON.stringify(fallbackOpponent))
          }
        }

        fetchOpponent()
      } else {
        // No opponent information or fallback challenge - use fallback
        console.log("🎯 QUIZ CONTAINER: Using fallback opponent")
        const randomOpponent = getRandomOpponent()
        setOpponent(randomOpponent)
        localStorage.setItem("quizOpponentId", randomOpponent.id)
        localStorage.setItem("quizOpponent", JSON.stringify(randomOpponent))
      }

      // Set up timer for challenge mode
      let minutes = 5 // Default

      if (challengeMode === "daily") minutes = 5
      else if (challengeMode === "quran") minutes = 7
      else if (challengeMode === "seerah") minutes = 6
      else if (challengeMode === "fiqh") minutes = 5

      const totalTime = minutes * 60
      setTimeLeft(totalTime)
      localStorage.setItem("quizTimeTotal", totalTime.toString())
      setIsTimerRunning(true)
    }

    console.log("🎯 QUIZ CONTAINER: Setup complete")
    console.log("🎯 QUIZ CONTAINER: Questions loaded:", questions.length)
  }, [questions.length, challengeMode, category.id, difficulty, category, opponentId, opponentName, challengerTurn])

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isTimerRunning) {
      // Time's up - submit the quiz
      handleFinishQuiz()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isTimerRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleAnswerSelect = (value: string) => {
    if (showExplanation) return // Prevent changing answer after submission

    setSelectedAnswer(value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleSubmitAnswer = () => {
    if (!questions[currentQuestion]) return

    setTransitionType("submit")
    setIsLoading(true)

    // Simulate a brief loading period
    setTimeout(() => {
      const correct = selectedAnswer === questions[currentQuestion].correctAnswer
      setIsCorrect(correct)
      if (correct) {
        setScore(score + 1)
      }
      setShowExplanation(true)
      setIsLoading(false)
      setTransitionType(null)
    }, 800) // Brief loading animation
  }

  const handleNext = () => {
    setTransitionType("next")
    setIsLoading(true)

    // Simulate a brief loading period
    setTimeout(() => {
      setShowExplanation(false)
      setIsCorrect(null)

      // Move to next question or finish quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(answers[currentQuestion + 1])
      } else {
        setTransitionType("finish")
        handleFinishQuiz()
        return
      }

      setIsLoading(false)
      setTransitionType(null)
    }, 800) // Brief loading animation
  }

  // Helper function to submit quiz with timeout
  const submitQuizWithTimeout = async (timeoutMs = 5000) => {
    const { submitQuizResult } = await import("@/lib/supabase-queries")

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
    )

    return Promise.race([submitPromise, timeoutPromise])
  }

  const handleFinishQuiz = async () => {
    console.log("🎯 QUIZ CONTAINER: Starting quiz finish process...")
    console.log("🎯 QUIZ CONTAINER: Is fallback challenge:", isFallbackChallenge())

    // Stop the timer
    setIsTimerRunning(false)

    // Save score and time to localStorage FIRST
    try {
      localStorage.setItem("quizScore", score.toString())
      localStorage.setItem("totalQuestions", questions.length.toString())
      localStorage.setItem("quizCategory", category.id)
      localStorage.setItem("quizDifficulty", difficulty)
      localStorage.setItem("quizChallenge", challengeMode || "")
      localStorage.setItem("quizTimeLeft", timeLeft.toString())
      localStorage.setItem("quizId", quizId) // Store the unique quiz ID

      // Store challenger turn status for results page
      if (challengerTurn) {
        localStorage.setItem("challengerTurn", "true")
        console.log("🎯 QUIZ CONTAINER: Stored challengerTurn=true in localStorage")
      } else {
        localStorage.setItem("challengerTurn", "false")
      }

      // Store opponent info
      if (opponent) {
        localStorage.setItem("quizOpponentId", opponent.id || "")
        localStorage.setItem("quizOpponent", JSON.stringify(opponent))
      }

      console.log("🎯 QUIZ CONTAINER: All localStorage data saved successfully")
    } catch (error) {
      console.error("🎯 QUIZ CONTAINER: Error saving to localStorage:", error)
    }

    // Check if this is a fallback challenge - handle immediately without database calls
    if (isFallbackChallenge()) {
      console.log("🎯 QUIZ CONTAINER: Fallback challenge detected - skipping database operations")

      toast({
        title: t("challengeSent"),
        description: `${t("yourScore")} (${score}/${questions.length}). ${t("opponentNotified")}`,
        duration: 5000,
      })

      // Navigate directly to results page for fallback challenges
      console.log("🎯 QUIZ CONTAINER: Navigating to results page for fallback challenge")
      router.push("/results")
      return
    }

    // Show a loading toast while saving
    toast({
      title: t("savingScore"),
      description: t("updatingLeaderboard"),
      duration: 3000,
    })

    try {
      // Real challenge processing continues below...

      // If this is the challenger's turn, update the challenge status
      if (challengerTurn && challengeMode) {
        console.log("🎯 QUIZ CONTAINER: Challenger finished quiz, updating challenge status...")

        try {
          console.log("🎯 QUIZ CONTAINER: Attempting real challenge update with timeout...")

          // Try to submit with timeout
          await submitQuizWithTimeout(5000)
          console.log("✅ QUIZ CONTAINER: Quiz result submitted successfully")

          // Then update challenge status
          const { supabase } = await import("@/lib/supabase")
          const { error } = await supabase
            .from("user_challenges")
            .update({
              status: "pending",
              challenger_score: score,
              challenger_completed_at: new Date().toISOString(),
              challenge_questions: JSON.stringify(questions), // Store the exact questions
            })
            .eq("id", challengeMode)

          if (error) {
            console.error("🎯 QUIZ CONTAINER: Error updating challenge status:", error)
            throw error
          }

          console.log("🎯 QUIZ CONTAINER: Challenge status updated to pending successfully")

          toast({
            title: t("challengeSentSuccessfully"),
            description: `${t("yourScore")} (${score}/${questions.length}). ${t("opponentNotified")}`,
            duration: 5000,
          })

          // IMPROVED: Navigate to results page first to show score
          router.push("/results")
          return
        } catch (error) {
          console.error("🎯 QUIZ CONTAINER: Challenge update failed or timed out:", error)

          // Fallback: show success message and navigate anyway
          toast({
            title: t("challengeSent"),
            description: `${t("yourScore")} (${score}/${questions.length}). ${t("opponentNotified")}`,
            duration: 5000,
          })

          router.push("/results")
          return
        }
      } else if (challengeMode) {
        // Challenge completion - save both users' scores to leaderboard
        console.log("🏆 QUIZ CONTAINER: Challenge completion - updating leaderboard with both scores...")

        try {
          // Get challenge details to find both users
          const { supabase } = await import("@/lib/supabase")
          const { data: challenge, error: challengeError } = await supabase
            .from("user_challenges")
            .select(`
        *,
        challenger:user_profiles!user_challenges_challenger_id_fkey(id, username, full_name),
        challenged:user_profiles!user_challenges_challenged_id_fkey(id, username, full_name)
      `)
            .eq("id", challengeMode)
            .single()

          if (challengeError) {
            console.error("🏆 Error fetching challenge:", challengeError)
            throw challengeError
          }

          console.log("🏆 Challenge data:", challenge)

          // Determine if current user is challenger or challenged
          const isChallenger = challenge.challenger_id === user?.id
          const currentUserScore = score
          const opponentScore = isChallenger ? challenge.challenged_score : challenge.challenger_score

          console.log("🏆 Score details:", {
            isChallenger,
            currentUserScore,
            opponentScore,
            challengerId: challenge.challenger_id,
            challengedId: challenge.challenged_id,
          })

          // Save BOTH users' scores to leaderboard immediately
          console.log("💾 Saving current user score to leaderboard...")
          await submitQuizWithTimeout(5000)

          // Save opponent's score if they have completed
          if (opponentScore !== null && opponentScore !== undefined) {
            console.log("💾 Saving opponent score to leaderboard...")

            const opponentId = isChallenger ? challenge.challenged_id : challenge.challenger_id

            // Create a separate leaderboard entry for opponent
            const { error: opponentError } = await supabase.from("quiz_results").insert({
              user_id: opponentId,
              score: opponentScore,
              total_questions: questions.length,
              percentage: Math.round((opponentScore / questions.length) * 100),
              category: category.id,
              difficulty: difficulty,
              challenge_id: challengeMode,
              created_at: new Date().toISOString(),
            })

            if (opponentError) {
              console.error("❌ Error saving opponent score:", opponentError)
            } else {
              console.log("✅ Opponent score saved to leaderboard")
            }
          }

          // Update challenge status to completed
          const updateData = isChallenger
            ? {
                challenger_score: score,
                challenger_completed_at: new Date().toISOString(),
                status: opponentScore !== null ? "completed" : "pending",
              }
            : {
                challenged_score: score,
                challenged_completed_at: new Date().toISOString(),
                status: "completed",
              }

          await supabase.from("user_challenges").update(updateData).eq("id", challengeMode)

          console.log("✅ Challenge updated successfully")
          console.log("🏆 Both scores should now be in leaderboard")

          toast({
            title: t("challengeCompleted"),
            description: `${t("bothScoresUpdated")}. ${t("checkRanking")}`,
            duration: 5000,
          })

          // IMPROVED: First show results, then let user navigate to leaderboard
          router.push("/results")
          return
        } catch (error) {
          console.error("❌ Error in challenge completion:", error)
          toast({
            title: t("challengeCompleted"),
            description: `${t("yourScore")} ${score}/${questions.length}. ${t("greatJob")}`,
            duration: 5000,
          })
          router.push("/results")
          return
        }
      } else {
        // Regular quiz completion - just save to localStorage and navigate
        console.log("🎯 QUIZ CONTAINER: Regular quiz completion - saving to localStorage only...")

        toast({
          title: t("quizCompleted"),
          description: `${t("savingScore")} (${score}/${questions.length}) ${t("toLeaderboard")}`,
          duration: 3000,
        })

        // For regular quizzes, let the results page handle database saving
        router.push("/results")
        return
      }
    } catch (error) {
      console.error("🎯 QUIZ CONTAINER: General error in handleFinishQuiz:", error)
      toast({
        title: t("quizCompleted"),
        description: `${t("yourScore")} ${score}/${questions.length}. ${t("greatJob")}`,
        duration: 3000,
      })

      // Navigate to results as fallback
      router.push("/results")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setTransitionType("next")
      setIsLoading(true)

      // Simulate a brief loading period
      setTimeout(() => {
        setShowExplanation(false)
        setIsCorrect(null)
        setCurrentQuestion(currentQuestion - 1)
        setSelectedAnswer(answers[currentQuestion - 1])
        setIsLoading(false)
        setTransitionType(null)
      }, 800) // Brief loading animation
    }
  }

  // Set selected answer when navigating between questions
  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion])
  }, [currentQuestion, answers])

  // Update progress bar
  useEffect(() => {
    // Calculate progress based on current question
    const progressValue = (currentQuestion / questions.length) * 100
    setProgress(progressValue)
  }, [currentQuestion, questions.length])

  // If no questions are available
  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">{t("noQuestionsAvailable")}</p>
          <Link href="/categories">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              {t("returnToCategories")}
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  // Loading text based on transition type
  const getLoadingText = () => {
    if (transitionType === "submit") return t("checkingAnswer")
    if (transitionType === "next") return t("loadingNextQuestion")
    if (transitionType === "finish") return t("savingResults")
    return t("loading")
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href={challengeMode ? "/challenges" : "/categories"}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-green-700 dark:text-green-400 bg-transparent"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">{challengeMode ? t("challenges") : t("categories")}</span>
          </Button>
        </Link>
      </div>

      <div className="w-full mb-4 mt-12">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-green-700 dark:text-green-400">
            {category.title} - {t(difficulty as keyof typeof t)}
            {challengeMode && challengerTurn && ` ${t("challenge")} (${t("yourTurn")})`}
            {challengeMode && !challengerTurn && ` ${t("challenge")}`}
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            {t("question")} {currentQuestion + 1} {t("questionOf")} {questions.length}
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
                {t("question")} {currentQuestion + 1}
              </CardTitle>
              {challengeMode && opponent && (
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {challengerTurn ? t("challenging") : t("opponent")}
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
                  <h2 className="text-lg font-medium mb-4 dark:text-white min-h-[3rem]">{question.question}</h2>
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
                          <Label htmlFor={`option-${index}`} className="cursor-pointer w-full dark:text-gray-200">
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
                          <AlertDescription className="text-blue-800 dark:text-blue-300">
                            <div className="flex items-start">
                              <Info className="h-5 w-5 mr-2 flex-shrink-0 text-blue-700 dark:text-blue-400" />
                              <div>
                                <strong className="block mb-1">{t("explanation")}:</strong>
                                {question.explanation}
                              </div>
                            </div>
                          </AlertDescription>
                        </Alert>
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
                <ChevronLeft className="mr-1 h-4 w-4" /> {t("previousQuestion")}
              </Button>

              {!showExplanation ? (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer || isLoading}
                >
                  {t("submitAnswer")}
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={handleNext}
                  disabled={isLoading}
                >
                  {currentQuestion === questions.length - 1
                    ? challengerTurn
                      ? t("sendChallenge")
                      : t("finishQuiz")
                    : t("nextQuestion")}
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
