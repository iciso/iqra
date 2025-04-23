"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Book, Clock } from "lucide-react"
import type { QuizQuestion } from "@/types/quiz"

interface ChallengeQuizProps {
  questions: QuizQuestion[]
  categoryTitle: string
  level: number
  timeLimit: number // in seconds per question
  onComplete: (answers: string[], timeRemaining: number[]) => void
}

export function ChallengeQuiz({ questions, categoryTitle, level, timeLimit = 15, onComplete }: ChallengeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [answers, setAnswers] = useState<string[]>([])
  const [timeRemaining, setTimeRemaining] = useState<number[]>([])
  const [currentTimer, setCurrentTimer] = useState(timeLimit)
  const [progress, setProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize answers and timeRemaining arrays
  useEffect(() => {
    setAnswers(Array(questions.length).fill(""))
    setTimeRemaining(Array(questions.length).fill(0))
  }, [questions])

  // Timer effect
  useEffect(() => {
    if (currentTimer <= 0) {
      handleNextQuestion()
      return
    }

    const timer = setTimeout(() => {
      setCurrentTimer(currentTimer - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [currentTimer])

  // Update progress bar
  useEffect(() => {
    const progressValue = (currentQuestion / questions.length) * 100
    setProgress(progressValue)
  }, [currentQuestion, questions.length])

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    // Save time remaining for scoring
    const newTimeRemaining = [...timeRemaining]
    newTimeRemaining[currentQuestion] = currentTimer
    setTimeRemaining(newTimeRemaining)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(answers[currentQuestion + 1])
      setCurrentTimer(timeLimit) // Reset timer for next question
    } else {
      // Complete the quiz
      setIsSubmitting(true)

      // Calculate total time bonus for display
      const totalTimeBonus = newTimeRemaining.reduce((sum, time) => sum + time, 0)

      // Calculate correct answers
      const correctCount = answers.filter((answer, index) => answer === questions[index].correctAnswer).length

      // Show a brief message before submitting
      alert(`Quiz completed!\n\nCorrect answers: ${correctCount}/5\nTime bonus: +${totalTimeBonus} points`)

      // Submit the results
      onComplete(answers, newTimeRemaining)
    }
  }

  // If no questions are available
  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">No questions available for this challenge.</p>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="w-full max-w-md">
      <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-green-700 dark:text-green-400">
            {categoryTitle} - Level {level}
          </span>
          <span className="text-sm text-green-700 dark:text-green-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-green-100 dark:bg-green-800" />
      </div>

      <Card className="border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="flex flex-col items-center">
          <Book className="w-10 h-10 text-green-600 dark:text-green-400 mb-2" />
          <CardTitle className="text-xl text-green-800 dark:text-green-400">Question {currentQuestion + 1}</CardTitle>
          <div className="flex items-center mt-2 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-green-600 dark:text-green-400 mr-1" />
            <span
              className={`font-mono ${currentTimer <= 5 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
            >
              {currentTimer}s
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4 dark:text-white">{question.question}</h2>
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 mb-2 p-2 rounded hover:bg-green-50 dark:hover:bg-green-900/50"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer w-full dark:text-gray-200">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
            onClick={handleNextQuestion}
            disabled={isSubmitting}
          >
            {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next Question"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
