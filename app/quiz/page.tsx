import { redirect } from "next/navigation"
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager"
import QuizContainer from "@/components/quiz/quiz-container"
import type { DifficultyLevel } from "@/types/quiz"
import type { QuizQuestion } from "@/types/quiz"

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function QuizPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const categoryId = searchParams.category as string
  const difficulty = (searchParams.difficulty as DifficultyLevel) || "easy"
  const challengeMode = searchParams.challenge as string | undefined
  const opponentId = searchParams.opponent as string | undefined
  const opponentName = searchParams.opponentName as string | undefined
  const challengerTurn = searchParams.challengerTurn === "true"

  if (!categoryId) {
    redirect("/categories")
  }

  const category = getCategory(categoryId)
  if (!category) {
    redirect("/categories")
  }

  // Get all available questions for this category and difficulty
  let questions: QuizQuestion[] = []

  if (difficulty === "mixed") {
    // For mixed difficulty, combine questions from all difficulty levels
    const easyQuestions = getQuizQuestions(categoryId, "easy")
    const mediumQuestions = getQuizQuestions(categoryId, "medium")
    const hardQuestions = getQuizQuestions(categoryId, "hard")

    // Combine all questions
    questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions]
  } else {
    // For specific difficulty, get questions normally
    questions = getQuizQuestions(categoryId, difficulty)
  }

  // Always shuffle the questions to randomize the order
  questions = shuffleArray(questions)

  // Limit to a maximum of 10 questions per session
  const maxQuestions = 10
  if (questions.length > maxQuestions) {
    questions = questions.slice(0, maxQuestions)
  }

  if (questions.length === 0) {
    const redirectPath = challengeMode ? "/challenges" : "/categories"
    const redirectText = challengeMode ? "Back to Challenges" : "Browse Categories"

    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        <p className="mb-6">
          Sorry, there are no questions available for {category.title} in {difficulty} mode at this time.
        </p>
        <a href={redirectPath} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          {redirectText}
        </a>
      </div>
    )
  }

  // Add navigation logic with session tracking
  const sessionId = `${categoryId}-${difficulty}-${new Date().toISOString().split('T')[0]}` // Simple session identifier
  const currentQuestionIndex = Number(searchParams.index) || 0
  const totalQuestions = questions.length

  // Handle navigation
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const url = new URL(window.location.href)
      url.searchParams.set("index", (currentQuestionIndex + 1).toString())
      window.location.href = url.toString()
    }
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      const url = new URL(window.location.href)
      url.searchParams.set("index", (currentQuestionIndex - 1).toString())
      window.location.href = url.toString()
    }
  }

  const handleFinish = () => {
    redirect("/quiz/results?category=" + categoryId + "&difficulty=" + difficulty)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="py-2 px-4 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <button
          onClick={currentQuestionIndex === totalQuestions - 1 ? handleFinish : handleNext}
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
        </button>
      </div>
      <QuizContainer
        questions={questions}
        category={category}
        difficulty={difficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
        currentQuestionIndex={currentQuestionIndex}
      />
    </div>
  )
}
