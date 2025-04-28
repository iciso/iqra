"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager"
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle, Home, Clock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import type { QuizQuestion, DifficultyLevel } from "@/types/quiz"

export default function QuizPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("category") || "quran"
  const difficulty = (searchParams.get("difficulty") || "easy") as DifficultyLevel
  const challenge = searchParams.get("challenge") || ""

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [categoryTitle, setCategoryTitle] = useState("")
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Get questions for the selected category and difficulty
    console.log(`Requesting questions for ${categoryId}/${difficulty}`)
    const questions = getQuizQuestions(categoryId, difficulty)
    console.log(`Received ${questions.length} questions for ${categoryId}/${difficulty}`)
    setQuizQuestions(questions)

    // Initialize answers array
    setAnswers(Array(questions.length).fill(""))

    // Get category title
    const category = getCategory(categoryId)
    if (category) {
      setCategoryTitle(category.title)
      console.log(`Category title set to: ${category.title}`)
    } else {
      console.log(`Category not found for ID: ${categoryId}`)
    }

    // Add these lines to track time for badges
    if (challenge) {
      let minutes = 5 // Default

      if (challenge === "daily") minutes = 5
      else if (challenge === "quran") minutes = 7
      else if (challenge === "seerah") minutes = 6
      else if (challenge === "fiqh") minutes = 5

      const totalTime = minutes * 60
      setTimeLeft(totalTime)
      localStorage.setItem("quizTimeTotal", totalTime.toString())
      setIsTimerRunning(true)
    }
  }, [categoryId, difficulty, challenge])

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
    if (!quizQuestions[currentQuestion]) return

    const correct = selectedAnswer === quizQuestions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    setIsCorrect(null)

    // Move to next question or finish quiz
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(answers[currentQuestion + 1])
    } else {
      handleFinishQuiz()
    }
  }

  const handleFinishQuiz = () => {
    // Stop the timer
    setIsTimerRunning(false)

    // Save score and time to localStorage
    try {
      localStorage.setItem("quizScore", score.toString())
      localStorage.setItem("totalQuestions", quizQuestions.length.toString())
      localStorage.setItem("quizCategory", categoryId)
      localStorage.setItem("quizDifficulty", difficulty)
      localStorage.setItem("quizChallenge", challenge || "")
      localStorage.setItem("quizTimeLeft", timeLeft.toString())
    } catch (error) {
      console.error("Error saving to localStorage:", error)
    }
    router.push("/results")
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setShowExplanation(false)
      setIsCorrect(null)
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[currentQuestion - 1])
    }
  }

  // Set selected answer when navigating between questions
  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion])
  }, [currentQuestion, answers])

  // Update progress bar
  useEffect(() => {
    // Calculate progress based on current question
    const progressValue = (currentQuestion / quizQuestions.length) * 100
    setProgress(progressValue)
  }, [currentQuestion, quizQuestions.length])

  // If we're not on the client yet, show a simple loading state
  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-md border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading quiz...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  // If no questions are available
  if (quizQuestions.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
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
      </main>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="absolute top-4 left-4">
        <Link href={challenge ? "/challenges" : "/categories"}>
          <Button variant="outline" size="icon" className="rounded-full dark:border-green-700 dark:text-green-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">{challenge ? "Challenges" : "Categories"}</span>
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-md mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-green-700 dark:text-green-400">
            {categoryTitle} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            {challenge && ` Challenge`}
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-green-100 dark:bg-green-800" />

        {challenge && (
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

      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="flex flex-col items-center">
          <Book className="w-10 h-10 text-green-600 dark:text-green-400 mb-2" />
          <CardTitle className="text-xl text-green-800 dark:text-green-400">Question {currentQuestion + 1}</CardTitle>
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

            {showExplanation && question.explanation && (
              <Alert className="mt-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <AlertDescription className="text-blue-800 dark:text-blue-300">
                  <strong className="block mb-1">Explanation:</strong>
                  {question.explanation}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="dark:border-green-700 dark:text-green-400"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>

          {!showExplanation ? (
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              onClick={handleNext}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              {currentQuestion !== quizQuestions.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}
