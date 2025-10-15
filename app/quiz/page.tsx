import QuizContainer from "@/components/quiz/quiz-container"

// Server imports
import { createClient } from "@supabase/supabase-js"

// Types
import type { QuizQuestion, QuizCategory, DifficultyLevel } from "@/types/quiz"

// Utilities
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function takeN<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n)
}

type Pools = {
  easy: QuizQuestion[]
  intermediate: QuizQuestion[]
  advanced: QuizQuestion[]
}

async function getCategoryAndPools(categoryId: string): Promise<{ category: QuizCategory; pools: Pools } | null> {
  // Load quiz data manager dynamically to avoid build coupling
  const mod: any = await import("@/data/quiz-data-manager")

  if (!mod || typeof mod.getCategory !== "function") {
    console.error("quiz-data-manager.getCategory() not found")
    return null
  }

  const category: QuizCategory | null = mod.getCategory(categoryId)
  if (!category) {
    console.error(`Category not found: ${categoryId}`)
    return null
  }

  // Extract difficulty pools defensively (support different shapes)
  const pools: Pools = {
    easy: [],
    intermediate: [],
    advanced: [],
  }

  // Common shapes we support:
  // - category.easyQuestions / intermediateQuestions / advancedQuestions
  // - category.easy / intermediate / advanced
  // - category.questions[] with each item having a difficulty field
  // - category.questions_easy / questions_intermediate / questions_advanced
  const tryArray = (val: any) => (Array.isArray(val) ? (val as QuizQuestion[]) : [])

  const easyCandidates = [(category as any).easyQuestions, (category as any).easy, (category as any).questions_easy]
  const intermediateCandidates = [
    (category as any).intermediateQuestions,
    (category as any).intermediate,
    (category as any).questions_intermediate,
  ]
  const advancedCandidates = [
    (category as any).advancedQuestions,
    (category as any).advanced,
    (category as any).questions_advanced,
  ]

  // Direct arrays by key
  for (const c of easyCandidates) pools.easy.push(...tryArray(c))
  for (const c of intermediateCandidates) pools.intermediate.push(...tryArray(c))
  for (const c of advancedCandidates) pools.advanced.push(...tryArray(c))

  // Partition from a flat questions array if present
  const flat = tryArray((category as any).questions)
  if (flat.length > 0) {
    for (const q of flat) {
      const d = (q as any).difficulty?.toLowerCase?.()
      if (d === "easy") pools.easy.push(q)
      else if (d === "intermediate" || d === "medium" || d === "moderate") pools.intermediate.push(q)
      else if (d === "advanced" || d === "hard") pools.advanced.push(q)
      else {
        // If no difficulty, treat as easy by default
        pools.easy.push(q)
      }
    }
  }

  // Deduplicate by question text to avoid duplicates when multiple sources fill pools
  const dedupe = (arr: QuizQuestion[]) => {
    const seen = new Set<string>()
    const out: QuizQuestion[] = []
    for (const q of arr) {
      const key = (q as any).question || JSON.stringify(q)
      if (!seen.has(key)) {
        seen.add(key)
        out.push(q)
      }
    }
    return out
  }

  pools.easy = dedupe(pools.easy)
  pools.intermediate = dedupe(pools.intermediate)
  pools.advanced = dedupe(pools.advanced)

  return { category, pools }
}

function buildQuestionsForDifficulty(
  pools: Pools,
  difficulty: DifficultyLevel | "mixed",
  count: number,
): QuizQuestion[] {
  if (difficulty === "mixed") {
    // Try to spread across available pools
    const thirds = Math.max(1, Math.floor(count / 3))
    const remainder = count - thirds * 3

    const easyPick = takeN(shuffleArray(pools.easy), Math.min(thirds, pools.easy.length))
    const interPick = takeN(shuffleArray(pools.intermediate), Math.min(thirds, pools.intermediate.length))
    const advPick = takeN(shuffleArray(pools.advanced), Math.min(thirds, pools.advanced.length))

    let combined = [...easyPick, ...interPick, ...advPick]

    // If we still need more (e.g., category lacks some difficulty), fill from any available pool
    const all = shuffleArray([...pools.easy, ...pools.intermediate, ...pools.advanced].filter(Boolean))
    if (combined.length < count && all.length > 0) {
      const missing = count - combined.length
      // Avoid duplicating items we already picked
      const chosenSet = new Set<string>(combined.map((q: any) => q.question))
      const fillers: QuizQuestion[] = []
      for (const q of all) {
        if (fillers.length >= missing) break
        const key = (q as any).question
        if (!chosenSet.has(key)) {
          fillers.push(q)
          chosenSet.add(key)
        }
      }
      combined = [...combined, ...fillers]
    }

    return takeN(shuffleArray(combined), count)
  }

  // Single difficulty
  const source =
    difficulty === "easy" ? pools.easy : difficulty === "intermediate" ? pools.intermediate : pools.advanced

  if (source.length >= count) {
    return takeN(shuffleArray(source), count)
  }

  // Not enough questions in selected difficulty; top up from others
  const needed = count - source.length
  const otherPools =
    difficulty === "easy"
      ? [...pools.intermediate, ...pools.advanced]
      : difficulty === "intermediate"
        ? [...pools.easy, ...pools.advanced]
        : [...pools.easy, ...pools.intermediate]

  const topUp = takeN(shuffleArray(otherPools), Math.min(needed, otherPools.length))

  return takeN(shuffleArray([...source, ...topUp]), count)
}

type ChallengeResolved = {
  category: string
  difficulty: DifficultyLevel | "mixed"
  questionCount: number
  opponentId?: string
  opponentName?: string
  challengerTurn?: boolean
  timeLimit?: number // seconds
}

async function resolveChallengeServerSide(params: URLSearchParams): Promise<ChallengeResolved> {
  // From URL if present
  let category = params.get("category") || "quran"
  let difficulty = (params.get("difficulty") || "easy").toLowerCase() as DifficultyLevel | "mixed"
  let questionCount = Number.parseInt(params.get("questions") || "10", 10)
  let opponentId = params.get("opponent") || undefined
  let opponentName = params.get("opponentName") || undefined
  let challengerTurn = params.get("challengerTurn") === "true"
  const challengeId = params.get("challenge") || undefined

  // If challenge is specified but URL is missing metadata, fetch from DB
  if (challengeId) {
    try {
      const url = process.env.SUPABASE_URL as string
      const key = (process.env.SUPABASE_SERVICE_ROLE_KEY as string) || (process.env.SUPABASE_ANON_KEY as string)
      const supabase = createClient(url, key)

      const { data: challenge, error } = await supabase
        .from("user_challenges")
        .select(`
          id,
          challenger_id,
          challenged_id,
          category,
          difficulty,
          question_count,
          time_limit,
          challenger:user_profiles!user_challenges_challenger_id_fkey ( id, full_name, username )
        `)
        .eq("id", challengeId)
        .single()

      if (!error && challenge) {
        // Fill blanks from DB
        category = challenge.category || category
        difficulty = (challenge.difficulty || difficulty) as DifficultyLevel | "mixed"
        questionCount = Number.isFinite(challenge.question_count) ? challenge.question_count : questionCount

        // If accepting a challenge, opponent is the challenger
        opponentId = opponentId || challenge.challenger?.id || challenge.challenger_id || opponentId
        opponentName = opponentName || challenge.challenger?.full_name || challenge.challenger?.username || opponentName

        // If not explicitly stated, default to accepting mode
        if (params.get("challengerTurn") === null) {
          challengerTurn = false
        }

        // time_limit is typically seconds in DB; if you store in minutes, adjust here
        const timeLimit = Number.isFinite(challenge.time_limit) ? challenge.time_limit : undefined
        return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, timeLimit }
      }
    } catch (e) {
      console.error("Error resolving challenge server-side:", e)
    }
  }

  return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn }
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const params = new URLSearchParams(
    Object.entries(searchParams || {}).reduce(
      (acc, [k, v]) => {
        if (Array.isArray(v)) acc[k] = v[0] ?? ""
        else if (v != null) acc[k] = v
        return acc
      },
      {} as Record<string, string>,
    ),
  )

  // 1) Resolve the challenge context (fills in missing URL fields)
  const resolved = await resolveChallengeServerSide(params)
  const { category, difficulty, questionCount, opponentId, opponentName, challengerTurn } = resolved

  // 2) Load category and build difficulty pools
  const catAndPools = await getCategoryAndPools(category)
  if (!catAndPools) {
    // Graceful fallback with link back to categories
    return (
      <main className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-green-800 dark:text-green-300 mb-2">Category not found</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            The requested category "{category}" could not be loaded. Please choose another category.
          </p>
          <a
            href="/categories"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 h-10 px-4 py-2"
          >
            Back to Categories
          </a>
        </div>
      </main>
    )
  }

  const { category: cat, pools } = catAndPools

  // 3) Build the actual questions set (enforce exact count)
  const finalQuestions = buildQuestionsForDifficulty(pools, difficulty, Math.max(1, questionCount))

  // 4) Render the client container
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <QuizContainer
        questions={finalQuestions}
        category={cat}
        difficulty={difficulty as DifficultyLevel}
        challengeMode={params.get("challenge") || undefined}
        opponentId={opponentId}
        opponentName={opponentName}
        challengerTurn={Boolean(challengerTurn)}
      />
    </main>
  )
}
