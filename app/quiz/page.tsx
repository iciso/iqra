import QuizContainer from "@/components/quiz/quiz-container"

// Types (use a local alias to handle synonyms safely)
type BaseDifficulty = "easy" | "medium" | "hard"
type DifficultyLike = BaseDifficulty | "intermediate" | "advanced" | "mixed"

type QuizQuestion = {
  id?: string
  question?: string
  // other fields are not required here
}

// Normalize query difficulty (accepts synonyms), but preserves "mixed"
function normalizeDifficulty(d: string | undefined): DifficultyLike {
  const val = (d || "").toLowerCase()
  if (val === "mixed") return "mixed"
  if (val === "intermediate" || val === "medium") return "medium"
  if (val === "advanced" || val === "hard") return "hard"
  if (val === "easy") return "easy"
  // default
  return "easy"
}

function shuffle<T>(array: T[]): T[] {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function dedupeQuestions(arr: QuizQuestion[]): QuizQuestion[] {
  const seen = new Set<string>()
  const out: QuizQuestion[] = []
  for (const q of arr) {
    const key = q.id || q.question || JSON.stringify(q)
    if (!seen.has(key)) {
      seen.add(key)
      out.push(q)
    }
  }
  return out
}

function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n)
}

async function loadCategoryAndQuestions(categoryId: string) {
  // Dynamically import the existing data manager you already use everywhere else
  const mod: any = await import("@/data/quiz-data-manager")
  if (!mod || typeof mod.getCategory !== "function" || typeof mod.getQuizQuestions !== "function") {
    throw new Error("quiz-data-manager exports not found")
  }
  const getCategory = mod.getCategory as (id: string) => any
  const getQuizQuestions = mod.getQuizQuestions as (id: string, diff: BaseDifficulty) => QuizQuestion[]

  const category = getCategory(categoryId)
  return { category, getQuizQuestions }
}

/**
 * Always returns exactly `count` questions if the category has enough total,
 * even if some difficulty pools are missing.
 */
function buildQuestionsFor(
  getQuizQuestions: (id: string, diff: BaseDifficulty) => QuizQuestion[],
  categoryId: string,
  difficulty: DifficultyLike,
  count: number,
): QuizQuestion[] {
  const easy = getQuizQuestions(categoryId, "easy") || []
  const medium = getQuizQuestions(categoryId, "medium") || []
  const hard = getQuizQuestions(categoryId, "hard") || []

  const totalAvailable = dedupeQuestions([...easy, ...medium, ...hard])

  if (totalAvailable.length === 0) {
    // Nothing available in this category
    return []
  }

  if (difficulty === "mixed") {
    // Try to spread across pools, then top-up from any available
    const thirds = Math.max(1, Math.floor(count / 3))
    const easyPick = take(shuffle(easy), Math.min(thirds, easy.length))
    const medPick = take(shuffle(medium), Math.min(thirds, medium.length))
    const hardPick = take(shuffle(hard), Math.min(thirds, hard.length))

    const combined = dedupeQuestions([...easyPick, ...medPick, ...hardPick])

    if (combined.length < count) {
      // Top-up across all available
      const all = shuffle(totalAvailable)
      const chosen = new Set(combined.map((q) => q.id || q.question || ""))
      for (const q of all) {
        if (combined.length >= count) break
        const key = q.id || q.question || ""
        if (!chosen.has(key)) {
          combined.push(q)
          chosen.add(key)
        }
      }
    }

    return take(shuffle(combined), Math.min(count, totalAvailable.length))
  }

  // Single-difficulty selection with top-up from others
  const normalized = difficulty as BaseDifficulty // already normalized above
  const primary = normalized === "easy" ? easy : normalized === "medium" ? medium : hard

  if (primary.length >= count) {
    return take(shuffle(primary), count)
  }

  // Not enough in primary; top-up from other pools
  const others =
    normalized === "easy"
      ? dedupeQuestions([...medium, ...hard])
      : normalized === "medium"
        ? dedupeQuestions([...easy, ...hard])
        : dedupeQuestions([...easy, ...medium])

  const base = dedupeQuestions([...primary, ...others])
  if (base.length === 0) return []

  const filled = base.length >= count ? take(shuffle(base), count) : take(shuffle(base), base.length)

  // If still fewer than requested, just return all unique available (we won't duplicate questions)
  return filled
}

/**
 * Optional server-side challenge resolver.
 * If the URL includes challenge=..., but omits details, we fill them from DB.
 * We keep this minimal and data-safe (no client exposure of secrets).
 */
async function resolveChallengeParams(params: URLSearchParams) {
  let category = params.get("category") || "quran"
  let difficulty = normalizeDifficulty(params.get("difficulty") || "easy")
  let questionCount = Number.parseInt(params.get("questions") || "10", 10)
  let opponentId = params.get("opponent") || undefined
  let opponentName = params.get("opponentName") || undefined
  let challengerTurn = params.get("challengerTurn") === "true"
  const challengeId = params.get("challenge") || undefined

  // If everything we need is present, skip DB
  const needsResolve = !!challengeId && (!category || !difficulty || !questionCount || !opponentId || !opponentName)

  if (!needsResolve) {
    return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId }
  }

  // Resolve from Supabase only if needed
  try {
    const { createClient } = await import("@supabase/supabase-js")
    const url = process.env.SUPABASE_URL as string
    const key = (process.env.SUPABASE_SERVICE_ROLE_KEY as string) || (process.env.SUPABASE_ANON_KEY as string)
    const supabase = createClient(url, key)

    const { data: challenge, error } = await supabase
      .from("user_challenges")
      .select(
        `
        id,
        challenger_id,
        challenged_id,
        category,
        difficulty,
        question_count,
        challenger:user_profiles!user_challenges_challenger_id_fkey ( id, full_name, username )
      `,
      )
      .eq("id", challengeId)
      .single()

    if (!error && challenge) {
      category = challenge.category || category
      difficulty = normalizeDifficulty(challenge.difficulty || (difficulty as string))
      questionCount = Number.isFinite(challenge.question_count) ? challenge.question_count : questionCount

      // On acceptance, opponent is the challenger
      opponentId = opponentId || challenge.challenger?.id || challenge.challenger_id || opponentId
      opponentName = opponentName || challenge.challenger?.full_name || challenge.challenger?.username || opponentName

      // Default accepting side to challengerTurn=false if unspecified
      if (params.get("challengerTurn") === null) {
        challengerTurn = false
      }
    }
  } catch (e) {
    // Non-fatal: we will continue with whatever we have
    console.error("Challenge resolve error:", e)
  }

  return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId }
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Normalize search params
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

  // Resolve challenge context (fills any missing details)
  const { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId } =
    await resolveChallengeParams(params)

  // Load the category and question function
  const { category: cat, getQuizQuestions } = await loadCategoryAndQuestions(category)

  if (!cat) {
    // Category truly not available
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">The requested category "{category}" could not be loaded. Please choose another category.</p>
        <a href="/categories" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Categories
        </a>
      </div>
    )
  }

  // Always attempt to build exactly questionCount questions
  const desiredCount = Math.max(1, questionCount || 10)
  const finalQuestions = buildQuestionsFor(getQuizQuestions, category, difficulty, desiredCount)

  if (!finalQuestions || finalQuestions.length === 0) {
    // As a last resort, try to top-up from any difficulty even if the requested difficulty failed
    const easy = getQuizQuestions(category, "easy") || []
    const medium = getQuizQuestions(category, "medium") || []
    const hard = getQuizQuestions(category, "hard") || []
    const any = dedupeQuestions([...easy, ...medium, ...hard])

    if (any.length > 0) {
      // Use whatever we have, up to desiredCount
      const fallbackQuestions = take(shuffle(any), Math.min(desiredCount, any.length))
      return (
        <div className="container mx-auto py-8 px-4">
          <QuizContainer
            questions={fallbackQuestions}
            category={cat}
            difficulty={typeof difficulty === "string" && difficulty !== "mixed" ? (difficulty as any) : "easy"}
            challengeMode={challengeId || params.get("challenge") || undefined}
            opponentId={opponentId}
            opponentName={opponentName}
            challengerTurn={Boolean(challengerTurn)}
          />
        </div>
      )
    }

    // Truly nothing available
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        <p className="mb-6">
          Sorry, there are no questions available for {cat.title} in {String(difficulty)} mode at this time.
        </p>
        <a href="/categories" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Categories
        </a>
      </div>
    )
  }

  // Render with the guaranteed set
  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={finalQuestions}
        category={cat}
        difficulty={difficulty === "mixed" ? "easy" : (difficulty as any)}
        challengeMode={challengeId || params.get("challenge") || undefined}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={Boolean(challengerTurn)}
      />
    </div>
  )
}
