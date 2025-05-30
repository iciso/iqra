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
import InteractiveInfographic from "@/components/quiz/interactive-infographic"
import { getUserProfile } from "@/lib/supabase-queries"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"

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
  const [realOpponent, setRealOpponent] = useState<any>(null)

  // Generate a unique quiz ID when the component mounts
  useEffect(() => {
    setQuizId(`quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`)
  }, [])

  useEffect(() => {
    // Initialize answers array
    setAnswers(Array(questions.length).fill(""))

    // Set up an opponent for challenge mode
    if (challengeMode) {
      console.log("Challenge mode active with opponent ID:", opponentId)
      console.log("Opponent name from URL:", opponentName)
      console.log("Challenger turn:", challengerTurn)

      if (opponentId) {
        // Try to fetch the real opponent data if we have an ID
        const fetchOpponent = async () => {
          try {
            console.log("Fetching opponent profile for ID:", opponentId)
            const opponentData = await getUserProfile(opponentId)
            console.log("Fetched opponent data:", opponentData)

            if (opponentData) {
              setRealOpponent({
                id: opponentData.id,
                name: opponentData.full_name || opponentData.username || opponentName || "Challenger",
                avatar_url: opponentData.avatar_url,
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              })
            } else {
              // Fallback to name from URL if profile fetch fails
              setRealOpponent({
                id: opponentId,
                name: opponentName || "Challenger",
                avatar_url: null,
                level: challengerTurn ? "Waiting for your quiz" : "Challenger",
              })
            }
          } catch (error) {
            console.error("Error fetching opponent:", error)
            // Fallback to name from URL if profile fetch fails
            setRealOpponent({
              id: opponentId,
              name: opponentName || "Challenger",
              avatar_url: null,
              level: challengerTurn ? "Waiting for your quiz" : "Challenger",
            })
          }
        }

        fetchOpponent()
      } else {
        // Fallback to random opponent if no ID provided
        const newOpponent = getRandomOpponent()
        setOpponent(newOpponent)

        // Store the opponent for results page
        localStorage.setItem("quizOpponentId", newOpponent.id)
        localStorage.setItem("quizOpponent", JSON.stringify(newOpponent))
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

    const categoryId = category.id

    console.log("Quiz Container - Category ID:", categoryId)
    console.log("Quiz Container - Difficulty:", difficulty)
    console.log("Quiz Container - Questions loaded:", questions.length)
    console.log("Quiz Container - Challenger turn:", challengerTurn)
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

  const handleFinishQuiz = async () => {
    // Stop the timer
    setIsTimerRunning(false)

    // Save score and time to localStorage
    try {
      localStorage.setItem("quizScore", score.toString())
      localStorage.setItem("totalQuestions", questions.length.toString())
      localStorage.setItem("quizCategory", category.id)
      localStorage.setItem("quizDifficulty", difficulty)
      localStorage.setItem("quizChallenge", challengeMode || "")
      localStorage.setItem("quizTimeLeft", timeLeft.toString())
      localStorage.setItem("quizId", quizId) // Store the unique quiz ID

      // Store opponent info - prefer real opponent if available
      if (realOpponent) {
        localStorage.setItem("quizOpponentId", realOpponent.id || "")
        localStorage.setItem("quizOpponent", JSON.stringify(realOpponent))
      } else if (opponent) {
        localStorage.setItem("quizOpponentId", opponent.id || "")
        localStorage.setItem("quizOpponent", JSON.stringify(opponent))
      }

      // If this is the challenger's turn, update the challenge status
      if (challengerTurn && challengeMode) {
        console.log("🎯 Challenger finished quiz, updating challenge status...")

        try {
          // Update challenge status to "pending" so the challenged user can now accept it
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
            console.error("Error updating challenge status:", error)
          } else {
            console.log("🎯 Challenge status updated to pending")
          }
        } catch (error) {
          console.error("Error updating challenge:", error)
        }
      }
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }

    if (transitionType === "finish") {
      // Simulate a brief loading period before redirecting
      setTimeout(() => {
        router.push("/results")
      }, 1200) // Slightly longer for final transition
    } else {
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
    const categoryId = category.id
    console.error(`No questions found for category: ${categoryId}, difficulty: ${difficulty}`)

    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">No questions available for this category and difficulty level.</p>
          <Link href="/categories">
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              Return to Categories
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  // Loading text based on transition type
  const getLoadingText = () => {
    if (transitionType === "submit") return "Checking answer..."
    if (transitionType === "next") return "Loading next question..."
    if (transitionType === "finish") return "Calculating results..."
    return "Loading..."
  }

  // Determine which opponent to display
  const displayOpponent = realOpponent || opponent

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href={challengeMode ? "/challenges" : "/categories"}>
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">{challengeMode ? "Challenges" : "Categories"}</span>
          </Button>
        </Link>
      </div>

      <div className="w-full mb-4 mt-12">
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

      <Card className="border-green-200 shadow-lg dark:border-green-800 min-h-[400px] flex flex-col">
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
              {challengeMode && displayOpponent && (
                <div className="flex justify-center mt-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      {challengerTurn ? "Challenging:" : "Opponent:"}
                    </span>
                    {displayOpponent && (
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">{displayOpponent.name || "Challenger"}</span>
                        {challengerTurn && <span className="text-xs text-gray-500">({displayOpponent.level})</span>}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4 dark:text-white">{question.question}</h2>
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

                {showExplanation && (
                  <>
                    {question.explanation && (
                      <Alert className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                        <AlertDescription className="text-blue-800 dark:text-blue-300">
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

                    {/* Only show infographics if NOT in challenge mode */}
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
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between mt-auto">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0 || isLoading}
                className="dark:border-green-700 dark:text-green-400"
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
                    : "Next Question"}
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
