import { redirect } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import QuizContainer from "@/components/quiz/quiz-container"
import { getQuizQuestions, getCategory } from "@/data/quiz-data-manager"
import type { DifficultyLevel, QuizCategory, QuizQuestion } from "@/types/quiz"

// Fisher-Yates shuffle to randomize the order
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

type SearchParams = { [key: string]: string | string[] | undefined }

async function getChallengeDetails(challengeId: string) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  const { data: challenge, error } = await supabase.from("user_challenges").select("*").eq("id", challengeId).single()

  if (error || !challenge) {
    console.error("Failed to fetch challenge:", error)
    return null
  }

  // Fetch challenger profile so the acceptor sees the real opponent
  const { data: challengerProfile } = await supabase
    .from("user_profiles")
    .select("id, full_name, username")
    .eq("id", challenge.challenger_id)
    .single()

  return {
    category: challenge.category as string | undefined,
    difficulty: (challenge.difficulty as DifficultyLevel | undefined) || undefined,
    questionCount: (challenge.question_count as number | undefined) ?? 10,
    // default opponent is the challenger for an accepted challenge
    opponentId: challengerProfile?.id || challenge.challenger_id,
    opponentName: challengerProfile?.full_name || challengerProfile?.username || "Challenger",
    // keep the raw record in case we need more fields later
    raw: challenge,
  }
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  // URL params (may be incomplete if coming from an accept link)
  let categoryId = searchParams.category as string | undefined
  let difficulty = (searchParams.difficulty as DifficultyLevel | undefined) || undefined
  const challengeMode = (searchParams.challenge as string | undefined) || undefined
  let opponentId = (searchParams.opponent as string | undefined) || undefined
  let opponentName = (searchParams.opponentName as string | undefined) || undefined

  // If provided explicitly in URL, respect it; otherwise we’ll derive it for challenges
  let questionCount = searchParams.questions ? Number.parseInt(searchParams.questions as string, 10) : undefined

  // For now, if not explicitly specified, assume the acceptor is not the challenger
  // The client-side component will still handle the submit flow correctly using auth
  const challengerTurn = (searchParams.challengerTurn as string | undefined) === "true"

  // If this is an accepted challenge and required bits are missing, resolve them from the DB
  if (challengeMode && (!categoryId || !difficulty || !questionCount || !opponentId || !opponentName)) {
    const details = await getChallengeDetails(challengeMode)
    if (details) {
      categoryId = categoryId ?? details.category
      difficulty = difficulty ?? details.difficulty
      questionCount = questionCount ?? details.questionCount
      opponentId = opponentId ?? details.opponentId
      opponentName = opponentName ?? details.opponentName
    }
  }

  // Validate category
  if (!categoryId) {
    // No category in URL and no challenge-derived category
    redirect("/categories")
  }

  const category = getCategory(categoryId)
  if (!category) {
    // Unknown category id (e.g., a bad/old link)
    redirect("/categories")
  }

  // Default difficulty if still missing
  const finalDifficulty: DifficultyLevel = (difficulty as DifficultyLevel) || "easy"

  // Build question set
  let questions: QuizQuestion[] = []

  if (finalDifficulty === "mixed") {
    // Combine easy + intermediate + advanced for a mixed set
    const easy = getQuizQuestions(categoryId, "easy")
    const intermediate = getQuizQuestions(categoryId, "intermediate")
    const advanced = getQuizQuestions(categoryId, "advanced")
    questions = [...easy, ...intermediate, ...advanced]
  } else {
    questions = getQuizQuestions(categoryId, finalDifficulty)
  }

  // Always shuffle
  questions = shuffleArray(questions)

  // For challenge mode: enforce the challenge's configured question count, defaulting to 10
  if (challengeMode) {
    const desiredCount = questionCount && questionCount > 0 ? questionCount : 10
    if (questions.length > desiredCount) {
      questions = questions.slice(0, desiredCount)
    }
  } else if (questionCount && questions.length > questionCount) {
    // Non-challenge flow honoring explicit questions param
    questions = questions.slice(0, questionCount)
  }

  // If somehow we ended with no questions, push back to categories gracefully
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
