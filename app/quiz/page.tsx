import QuizContainer from "@/components/quiz/quiz-container"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type BaseDifficulty = "easy" | "medium" | "hard"
type DifficultyLike = BaseDifficulty | "intermediate" | "advanced" | "mixed"

type QuizQuestion = {
  id?: string
  question?: string
  // other fields are not required here
}

// Number of questions in one numbered section (can be overridden by ?questions=)
const DEFAULT_SECTION_SIZE = 10

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// Normalize query difficulty (accepts synonyms), but preserves "mixed"
function normalizeDifficulty(d: string | undefined): DifficultyLike {
  const val = (d || "").toLowerCase()
  if (val === "mixed") return "mixed"
  if (val === "intermediate" || val === "medium") return "medium"
  if (val === "advanced" || val === "hard") return "hard"
  if (val === "easy") return "easy"
  return "easy"
}

// Removes duplicates but KEEPS the original (data-file) order.
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

async function loadCategoryAndQuestions(categoryId: string) {
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
 * Builds the ordered pool of questions for a category.
 * NO shuffling: questions stay exactly in the order of the data files, so
 * "Section 1" is always questions 1-10, "Section 2" is 11-20, and so on.
 *
 * - A specific difficulty uses that difficulty's questions (in file order).
 * - "mixed", or a difficulty pool too small to form a section, falls back to
 *   easy -> medium -> hard concatenated in file order.
 */
function buildOrderedPool(
  getQuizQuestions: (id: string, diff: BaseDifficulty) => QuizQuestion[],
  categoryId: string,
  difficulty: DifficultyLike,
  sectionSize: number,
): QuizQuestion[] {
  const easy = getQuizQuestions(categoryId, "easy") || []
  const medium = getQuizQuestions(categoryId, "medium") || []
  const hard = getQuizQuestions(categoryId, "hard") || []

  const everything = dedupeQuestions([...easy, ...medium, ...hard])
  if (difficulty === "mixed") return everything

  const primary = dedupeQuestions(difficulty === "easy" ? easy : difficulty === "medium" ? medium : hard)

  return primary.length >= sectionSize ? primary : everything
}

const SECTION_SIZE = 10

// Section n of a level = questions (n-1)*10 .. n*10-1 of that level, in data-file order.
// No shuffling and no top-up from other levels, so the section is exactly what the data file holds.
function buildSectionQuestions(
  getQuizQuestions: (id: string, diff: BaseDifficulty) => QuizQuestion[],
  categoryId: string,
  difficulty: DifficultyLike,
  section: number,
): QuizQuestion[] | null {
  if (difficulty === "mixed") return null
  const pool = getQuizQuestions(categoryId, difficulty as BaseDifficulty) || []
  const start = (section - 1) * SECTION_SIZE
  const slice = pool.slice(start, start + SECTION_SIZE)
  return slice.length > 0 ? slice : null
}


/** Splits the ordered pool into numbered sections (1-based) of `size` questions. */
function getSectionCount(total: number, size: number) {
  return Math.max(1, Math.ceil(total / size))
}

function getSectionSlice(pool: QuizQuestion[], section: number, size: number): QuizQuestion[] {
  const start = (section - 1) * size
  return pool.slice(start, start + size)
}

/**
 * Optional server-side challenge resolver (unchanged behaviour).
 * If the URL includes challenge=..., but omits details, we fill them from DB.
 */
async function resolveChallengeParams(params: URLSearchParams) {
  let category = params.get("category") || "quran"
  let difficulty = normalizeDifficulty(params.get("difficulty") || "easy")
  let questionCount = Number.parseInt(params.get("questions") || String(DEFAULT_SECTION_SIZE), 10)
  let opponentId = params.get("opponent") || undefined
  let opponentName = params.get("opponentName") || undefined
  let challengerTurn = params.get("challengerTurn") === "true"
  const challengeId = params.get("challenge") || undefined

  const sectionParam = Number.parseInt(params.get("section") || "", 10)
  const section = Number.isFinite(sectionParam) && sectionParam > 0 ? sectionParam : undefined
  
  const needsResolve = !!challengeId && (!category || !difficulty || !questionCount || !opponentId || !opponentName)

  if (!needsResolve) {
    return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId }
  }

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
      opponentId = opponentId || challenge.challenger?.id || challenge.challenger_id || opponentId
      opponentName = opponentName || challenge.challenger?.full_name || challenge.challenger?.username || opponentName
      if (params.get("challengerTurn") === null) {
        challengerTurn = false
      }
    }
  } catch (e) {
    console.error("Challenge resolve error:", e)
  }

  return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId }
}

// ---------------------------------------------------------------------------
// Section picker (server-rendered, plain links - no client JS needed)
// ---------------------------------------------------------------------------
function SectionPicker({
  categoryTitle,
  categoryId,
  difficulty,
  totalQuestions,
  sectionSize,
  extraParams,
}: {
  categoryTitle: string
  categoryId: string
  difficulty: DifficultyLike
  totalQuestions: number
  sectionSize: number
  extraParams: Record<string, string>
}) {
  const sectionCount = getSectionCount(totalQuestions, sectionSize)
  const sections = Array.from({ length: sectionCount }, (_, i) => i + 1)

  const hrefFor = (section: number) => {
    const qs = new URLSearchParams({
      ...extraParams,
      category: categoryId,
      difficulty: String(difficulty),
      section: String(section),
    })
    return `/quiz?${qs.toString()}`
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">{categoryTitle}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Choose a section to play and learn from. Each section has {sectionSize} questions, always in the same order.
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {totalQuestions} questions · {sectionCount} sections
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sections.map((s) => {
          const from = (s - 1) * sectionSize + 1
          const to = Math.min(s * sectionSize, totalQuestions)
          return (
            <a
              key={s}
              href={hrefFor(s)}
              className="rounded-lg border border-green-200 bg-white p-4 text-center transition-colors hover:border-green-500 hover:bg-green-50 dark:border-green-800 dark:bg-green-950 dark:hover:bg-green-900/50"
            >
              <span className="block text-lg font-semibold text-green-800 dark:text-green-300">Section {s}</span>
              <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                Questions {from}–{to}
              </span>
            </a>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <a href="/categories" className="text-sm text-green-700 underline dark:text-green-400">
          ← Back to categories
        </a>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function QuizPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }> | { [key: string]: string | string[] | undefined }
}) {
  // `await` works for both a plain object (Next 14) and a Promise (Next 15+)
  const rawParams = (await searchParams) || {}

  const params = new URLSearchParams(
    Object.entries(rawParams).reduce(
      (acc, [k, v]) => {
        if (Array.isArray(v)) acc[k] = v[0] ?? ""
        else if (v != null) acc[k] = v
        return acc
      },
      {} as Record<string, string>,
    ),
  )

  const { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId } =
    await resolveChallengeParams(params)

  const { category: cat, getQuizQuestions } = await loadCategoryAndQuestions(category)

  if (!cat) {
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

  const sectionSize = Math.max(1, questionCount || DEFAULT_SECTION_SIZE)
  const pool = buildOrderedPool(getQuizQuestions, category, difficulty, sectionSize)

  if (pool.length === 0) {
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

  const sectionCount = getSectionCount(pool.length, sectionSize)
  const requestedSection = Number.parseInt(params.get("section") || "", 10)
  const hasValidSection =
    Number.isInteger(requestedSection) && requestedSection >= 1 && requestedSection <= sectionCount

  // Challenges must go straight into a quiz (both players need the same
  // questions), so they default to Section 1 instead of showing the picker.
  const isChallenge = Boolean(challengeId || params.get("challenge"))

  // No (valid) section chosen -> let the player pick one.
  if (!hasValidSection && !isChallenge) {
    // Keep any other query params (e.g. opponent info) when linking onward.
    const extraParams: Record<string, string> = {}
    params.forEach((value, key) => {
      if (!["category", "difficulty", "section"].includes(key)) extraParams[key] = value
    })

    return (
      <SectionPicker
        categoryTitle={cat.title}
        categoryId={category}
        difficulty={difficulty}
        totalQuestions={pool.length}
        sectionSize={sectionSize}
        extraParams={extraParams}
      />
    )
  }

  const section = hasValidSection ? requestedSection : 1
  const finalQuestions = getSectionSlice(pool, section, sectionSize) // serial order, no shuffle

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
