import QuizContainer from "@/components/quiz/quiz-container"
import type { DifficultyLevel, QuizQuestion } from "@/types/quiz"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Quiz",
  description: "Answer the questions one by one and see your score at the end.",
  path: "/quiz",
  noindex: true,
})

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type BaseDifficulty = "easy" | "intermediate" | "advanced"
type DifficultyLike = BaseDifficulty | "medium" | "hard" | "mixed"

// Number of questions in one numbered section.
const DEFAULT_SECTION_SIZE = 10

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// Normalize URL/database difficulty values to the keys used by quiz-data-manager.
function normalizeDifficulty(d: string | undefined): DifficultyLike {
  const val = (d || "").toLowerCase()
  if (val === "mixed") return "mixed"
  if (val === "intermediate" || val === "medium") return "intermediate"
  if (val === "advanced" || val === "hard") return "advanced"
  return "easy"
}

// Removes duplicates but KEEPS the original (data-file) order.
function dedupeQuestions(arr: QuizQuestion[]): QuizQuestion[] {
  const seen = new Set<string | number>()
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

// Seeded shuffle: the same seed always produces the same order.
// This keeps both players' question sets identical in a challenge.
function seededShuffle<T>(items: T[], seed: string): T[] {
  const result = [...items];

  // Convert the seed string into a 32-bit number.
  let state = 2166136261;

  for (let i = 0; i < seed.length; i++) {
    state ^= seed.charCodeAt(i);
    state = Math.imul(state, 16777619);
  }

  // Deterministic pseudo-random number generator.
  const random = () => {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // Fisher–Yates shuffle.
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

async function loadCategoryAndQuestions(categoryId: string) {
  const mod = await import("@/data/quiz-data-manager")
  if (!mod || typeof mod.getCategory !== "function" || typeof mod.getQuizQuestions !== "function") {
    throw new Error("quiz-data-manager exports not found")
  }
  const getCategory = mod.getCategory
  const getQuizQuestions: (id: string, diff: BaseDifficulty) => QuizQuestion[] = mod.getQuizQuestions
  const category = getCategory(categoryId)
  return { category, getQuizQuestions }
}

/**
 * Build a question pool for ONE difficulty level only.
 * Difficulty names match quiz-data-manager: easy, intermediate, advanced.
 * The same category and level always produce the same shuffled order so
 * numbered sections remain consistent for challenge players.
 */
function buildOrderedPool(
  getQuizQuestions: (
    id: string,
    diff: BaseDifficulty
  ) => QuizQuestion[],
  categoryId: string,
  difficulty: DifficultyLike,
): QuizQuestion[] {
  // Mixed-level selection is no longer supported.
  if (difficulty === "mixed") return [];

  // Keep compatibility with legacy values while using the data manager's keys.
  const dataLevel: BaseDifficulty =
    difficulty === "medium"
      ? "intermediate"
      : difficulty === "hard"
        ? "advanced"
        : difficulty;

  const questions = dedupeQuestions(
    getQuizQuestions(categoryId, dataLevel) || []
  );

  return seededShuffle(
    questions,
    `${categoryId}:${dataLevel}`
  );
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
  const opponentId = params.get("opponent") || undefined
  let opponentName = params.get("opponentName") || undefined
  let challengerTurn = params.get("challengerTurn") === "true"
  const challengeId = params.get("challenge") || undefined


  const needsResolve = !!challengeId && (!category || !difficulty || !questionCount || !opponentId || !opponentName)

  if (!needsResolve) {
    return { category, difficulty, questionCount, opponentId, opponentName, challengerTurn, challengeId }
  }

  try {
    // Challenges live in Neon (lib/server/challenge-data.ts). Values already in the URL win;
    // the database only fills what the link left out. Returns null for an unknown id.
    const { getChallengeResult } = await import("@/lib/server/challenge-data")
    const challenge = await getChallengeResult(challengeId)

    if (challenge) {
      category = params.get("category") || challenge.category || category
      // Older challenges were saved as "mixed", which no longer has questions; keep the default level then.
      const storedDifficulty = normalizeDifficulty(challenge.difficulty || (difficulty as string))
      if (!params.get("difficulty") && storedDifficulty !== "mixed") difficulty = storedDifficulty
      questionCount = params.get("questions")
        ? questionCount
        : Number.isFinite(challenge.question_count) ? challenge.question_count : questionCount
      opponentName = opponentName || challenge.challenger_name || opponentName
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
        <a href="/subjects" className="text-sm text-green-700 underline dark:text-green-400">
          ← Back to subjects
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

  const { category, difficulty, opponentId, opponentName, challengerTurn, challengeId } =
    await resolveChallengeParams(params)

  const { category: cat, getQuizQuestions } = await loadCategoryAndQuestions(category)

  if (!cat) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-6">The requested category &quot;{category}&quot; could not be loaded. Please choose another category.</p>
        <a href="/subjects" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Subjects
        </a>
      </div>
    )
  }

  // Numbered sections always use groups of ten; the final section may be shorter.
  const sectionSize = DEFAULT_SECTION_SIZE;
  const pool = buildOrderedPool(getQuizQuestions, category, difficulty)

  if (pool.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        <p className="mb-6">
          Sorry, there are no questions available for {cat.title} in {String(difficulty)} mode at this time.
        </p>
        <a href="/subjects" className="inline-block py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">
          Browse Subjects
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
  const finalQuestions = getSectionSlice(pool, section, sectionSize)

  return (
    <div className="container mx-auto py-8 px-4">
      <QuizContainer
        questions={finalQuestions}
        category={cat}
        difficulty={difficulty === "mixed" ? "easy" : (difficulty as DifficultyLevel)}
        challengeMode={challengeId || params.get("challenge") || undefined}
        opponentId={opponentId}
        opponentName={opponentName ? decodeURIComponent(opponentName) : undefined}
        challengerTurn={Boolean(challengerTurn)}
      />
    </div>
  )
}
