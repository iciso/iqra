"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Book, ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react"
import type { QuizQuestion } from "@/types/quiz"

interface QuizContainerProps {
  questions: QuizQuestion[]
  categoryTitle: string
  difficulty: string
  onComplete: (score: number, totalQuestions: number) => void
}

export default function QuizContainer({ questions, categoryTitle, difficulty, onComplete }: QuizContainerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Initialize answers array
    setAnswers(Array(questions.length).fill(""))
  }, [questions])

  const handleAnswerSelect = (value: string) => {
    if (showExplanation) return // Prevent changing answer after submission

    setSelectedAnswer(value)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleSubmitAnswer = () => {
    if (!questions[currentQuestion]) return

    const correct = selectedAnswer === questions[currentQuestion].correctAnswer
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
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(answers[currentQuestion + 1])
    } else {
      // Complete the quiz
      onComplete(score, questions.length)
    }
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
    const progressValue = (currentQuestion / questions.length) * 100
    setProgress(progressValue)
  }, [currentQuestion, questions.length])

  // If no questions are available
  if (questions.length === 0) {
    return (
      <Card className="w-full max-w-md border-green-200 shadow-lg dark:border-green-800">
        <CardContent className="text-center py-8">
          <p className="dark:text-white mb-4">No questions available for this category and difficulty level.</p>
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
            {categoryTitle} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
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
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
              {currentQuestion !== questions.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
