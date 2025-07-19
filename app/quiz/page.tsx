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
  const questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined
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

  // If a specific question count is requested and there are enough questions available,
  // limit the number of questions to the requested count
  if (questionCount && questions.length > questionCount) {
    // Take only the requested number of questions from the already shuffled array
    questions = questions.slice(0, questionCount)
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

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={questions}
        category={category}
        difficulty={difficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
      />
    </div>
  )
}
