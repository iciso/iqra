import { redirect } from "next/navigation"
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager"
import QuizContainer from "@/components/quiz/quiz-container"
import type { DifficultyLevel } from "@/types/quiz"

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

  if (!categoryId) {
    redirect("/categories")
  }

  const category = getCategory(categoryId)
  if (!category) {
    redirect("/categories")
  }

  // Get all available questions for this category and difficulty
  let questions = getQuizQuestions(categoryId, difficulty)

  // Always shuffle the questions to randomize the order
  questions = shuffleArray(questions)

  // If a specific question count is requested and there are enough questions available,
  // limit the number of questions to the requested count
  if (questionCount && questions.length > questionCount) {
    // Take only the requested number of questions from the already shuffled array
    questions = questions.slice(0, questionCount)
  }

  if (questions.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        <p className="mb-6">
          Sorry, there are no questions available for {category.title} in {difficulty} mode at this time.
        </p>
        <a href="/categories" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Categories
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer questions={questions} category={category} difficulty={difficulty} challengeMode={challengeMode} />
    </div>
  )
}
