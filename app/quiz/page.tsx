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
  const index = Number(searchParams.index) || 0

  if (!categoryId) {
    redirect("/categories")
  }

  const category = getCategory(categoryId)
  if (!category) {
    redirect("/categories")
  }

  let questions: QuizQuestion[] = []
  try {
    if (difficulty === "mixed") {
      const easyQuestions = getQuizQuestions(categoryId, "easy") || []
      const mediumQuestions = getQuizQuestions(categoryId, "medium") || []
      const hardQuestions = getQuizQuestions(categoryId, "hard") || []
      questions = [...easyQuestions, ...mediumQuestions, ...hardQuestions]
    } else {
      questions = getQuizQuestions(categoryId, difficulty) || []
    }

    questions = shuffleArray(questions)
    const maxQuestions = 10
    if (questions.length > maxQuestions) {
      questions = questions.slice(0, maxQuestions)
    }

    if (questions.length === 0) {
      return (
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
          <p className="mb-6">
            Sorry, there are no questions available for {category.title} in {difficulty} mode at this time.
          </p>
          <a href={challengeMode ? "/challenges" : "/categories"} className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
            {challengeMode ? "Back to Challenges" : "Browse Categories"}
          </a>
        </div>
      )
    }
  } catch (error) {
    console.error("Error fetching questions:", error)
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Something Went Wrong!</h1>
        <p className="mb-6">We apologize for the inconvenience. Please try again later.</p>
        <a href="/quiz" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Try Again
        </a>
      </div>
    )
  }

  if (index >= questions.length) {
    redirect(`/quiz/results?category=${categoryId}&difficulty=${difficulty}`)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between mb-4">
        <a
          href={`/quiz?category=${categoryId}&difficulty=${difficulty}${index > 0 ? `&index=${index - 1}` : ""}`}
          className={`py-2 px-4 ${index === 0 ? "bg-gray-400" : "bg-blue-500"} text-white rounded-md`}
        >
          Previous
        </a>
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <a
          href={`/quiz?category=${categoryId}&difficulty=${difficulty}&index=${index + 1}`}
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          {index === questions.length - 1 ? "Finish" : "Next"}
        </a>
      </div>
      <QuizContainer
        questions={questions}
        category={category}
        difficulty={difficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
        currentQuestionIndex={index}
      />
    </div>
  )
}
