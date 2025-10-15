import { redirect } from "next/navigation"
import QuizContainer from "@/components/quiz/quiz-container"
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager"
import type { DifficultyLevel, QuizCategory, QuizQuestion } from "@/types/quiz"
import { resolveChallenge } from "./resolve-challenge"

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

type SearchParams = { [key: string]: string | string[] | undefined }

export default async function QuizPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  let categoryId = searchParams.category as string | undefined
  let difficulty = (searchParams.difficulty as DifficultyLevel | undefined) || undefined
  const challengeMode = (searchParams.challenge as string | undefined) || undefined
  let opponentId = (searchParams.opponent as string | undefined) || undefined
  let opponentName = (searchParams.opponentName as string | undefined) || undefined
  let questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined
  const challengerTurn = (searchParams.challengerTurn as string | undefined) === "true"

  // Fill missing params from the challenge record if this is an accepted challenge
  if (challengeMode && (!categoryId || !difficulty || !questionCount || !opponentId || !opponentName)) {
    const details = await resolveChallenge(challengeMode)
    if (details) {
      categoryId = categoryId ?? details.category
      difficulty = (difficulty ?? (details.difficulty as DifficultyLevel | undefined)) || "easy"
      questionCount = questionCount ?? details.questionCount ?? 10
      opponentId = opponentId ?? details.opponentId
      opponentName = opponentName ?? details.opponentName
    }
  }

  // Validate category
  if (!categoryId) {
    redirect("/categories")
  }

  const category = getCategory(categoryId)
  if (!category) {
    redirect("/categories")
  }

  const finalDifficulty: DifficultyLevel = (difficulty as DifficultyLevel) || "easy"

  // Build question set (ensure we use the correct keys used by your data manager: "easy" | "medium" | "hard" | "mixed")
  let questions: QuizQuestion[] = []
  if (finalDifficulty === "mixed") {
    const easy = getQuizQuestions(categoryId, "easy")
    const medium = getQuizQuestions(categoryId, "medium")
    const hard = getQuizQuestions(categoryId, "hard")
    questions = [...easy, ...medium, ...hard]
  } else {
    questions = getQuizQuestions(categoryId, finalDifficulty)
  }

  // Shuffle always
  questions = shuffleArray(questions)

  // Enforce question count for challenges (default to 10)
  if (challengeMode) {
    const desired = questionCount && questionCount > 0 ? questionCount : 10
    if (questions.length > desired) {
      questions = questions.slice(0, desired)
    }
  } else if (questionCount && questions.length > questionCount) {
    questions = questions.slice(0, questionCount)
  }

  if (questions.length === 0) {
    redirect("/categories")
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={questions}
        category={category as QuizCategory}
        difficulty={finalDifficulty}
        challengeMode={challengeMode}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={challengerTurn}
      />
    </div>
  )
}
