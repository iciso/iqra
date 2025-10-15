import QuizContainer from "@/components/quiz/quiz-container"
import { getCategory, getQuizQuestions } from "@/data/quiz-data-manager"
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz"

// Next.js App Router page with search params
export default function QuizPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Parse URL params
  const categoryId = (searchParams.category as string) || "quran"
  const difficulty = ((searchParams.difficulty as string) || "easy") as DifficultyLevel
  const questionCount = Number.parseInt((searchParams.questions as string) || "10")
  const challengeMode = (searchParams.challenge as string) || "" // challenge id string when present
  const opponentId = (searchParams.opponent as string) || undefined
  const opponentName = (searchParams.opponentName as string) || undefined
  const challengerTurnParam = (searchParams.challengerTurn as string) || "false"
  const challengerTurn = challengerTurnParam === "true"

  // Load category and questions
  const category: QuizCategory = getCategory(categoryId) || {
    id: categoryId,
    title: "Quran",
    description: "Quran category",
    icon: "Book",
  }

  const questions: QuizQuestion[] = getQuizQuestions(categoryId, difficulty, questionCount) || []

  return (
    <div className="min-h-screen w-full py-6 px-3 sm:px-4">
      <div className="mx-auto max-w-2xl">
        <QuizContainer
          questions={questions}
          category={category}
          difficulty={difficulty}
          challengeMode={challengeMode}
          opponentId={opponentId}
          opponentName={opponentName}
          challengerTurn={challengerTurn}
        />
      </div>
    </div>
  )
}
