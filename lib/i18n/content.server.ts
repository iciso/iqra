import "server-only"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import type { Locale } from "@/lib/i18n/config"
import { isStale } from "@/lib/i18n/source-fingerprint"
import { isPinnedOption } from "@/lib/quiz-options"
import type { ContentStatus, QuizCategory, QuizQuestion } from "@/types/quiz"

// Shape of locales/<lng>/<categoryId>.json (written by the content export, read-only here).
export type { ContentStatus }

export interface QuestionTranslation {
  question?: string
  options?: string[]
  explanation?: string
  /** Fingerprint of the English this was translated from (lib/i18n/source-fingerprint.ts). */
  src?: string
}

export interface CategoryLocale {
  _meta: { status: ContentStatus; title?: string; description?: string }
  questions: Record<string, QuestionTranslation>
}

const SAFE_ID = /^[a-z0-9-]+$/i
const STATUSES: ContentStatus[] = ["review", "approved", "hidden"]

// One read per file per server process. Dev re-reads so edited files show up.
const cache = new Map<string, Promise<CategoryLocale | null>>()

async function readCategoryLocale(lng: Locale, categoryId: string): Promise<CategoryLocale | null> {
  try {
    const raw = await readFile(join(process.cwd(), "locales", lng, `${categoryId}.json`), "utf8")
    const parsed = JSON.parse(raw) as Partial<CategoryLocale>
    const status = parsed._meta?.status
    if (!status || !STATUSES.includes(status)) return null
    return { _meta: { ...parsed._meta, status }, questions: parsed.questions ?? {} }
  } catch {
    // Missing or unreadable file: the category stays English.
    return null
  }
}

/** The translated content for one category, or null (English). English itself never has a file. */
export function loadCategoryLocale(lng: Locale, categoryId: string): Promise<CategoryLocale | null> {
  if (lng === "en" || !SAFE_ID.test(categoryId)) return Promise.resolve(null)
  const key = `${lng}/${categoryId}`
  if (process.env.NODE_ENV !== "production") return readCategoryLocale(lng, categoryId)
  let entry = cache.get(key)
  if (!entry) {
    entry = readCategoryLocale(lng, categoryId)
    cache.set(key, entry)
  }
  return entry
}

/** Content that should be shown: a hidden file counts as no translation. */
export function visibleLocale(content: CategoryLocale | null): CategoryLocale | null {
  return content && content._meta.status !== "hidden" ? content : null
}

function correctIndexOf(q: QuizQuestion): number {
  return typeof q.correctIndex === "number" && q.correctIndex >= 0 ? q.correctIndex : q.options.indexOf(q.correctAnswer)
}

function localizeOne(q: QuizQuestion, tr: QuestionTranslation | undefined): QuizQuestion {
  // `pinned` always comes from the English text, so translated "all of the above" stays last.
  const pinned = q.options.map(isPinnedOption)
  const english = { ...q, pinned }
  if (!tr) return english
  // The English changed after this was translated: the old meaning would be wrong, so show English.
  // No src (files from before fingerprints) keeps the translation.
  if (isStale(tr.src, q)) return english

  const correctIndex = correctIndexOf(q)
  let options = q.options
  if (tr.options) {
    // Options that do not line up with the English ones: keep the whole question English.
    if (tr.options.length !== q.options.length || correctIndex < 0) return english
    // An empty slot ("") means "not translated yet": that one option stays English.
    const merged = tr.options.map((o, i) => (typeof o === "string" && o.trim() !== "" ? o : q.options[i]))
    // Grading compares option text, so two equal options would break it: keep English then.
    if (new Set(merged).size !== merged.length) return english
    options = merged
  }

  return {
    ...english,
    question: tr.question?.trim() ? tr.question : q.question,
    options,
    correctAnswer: correctIndex >= 0 ? options[correctIndex] : q.correctAnswer,
    explanation: tr.explanation?.trim() ? tr.explanation : q.explanation,
  }
}

/**
 * Overlays the translated text on each question by id. Never adds, removes or
 * reorders questions: challenge sections depend on the count and the order.
 */
export async function localizeQuestions(
  questions: QuizQuestion[],
  lng: Locale,
  categoryId: string,
): Promise<QuizQuestion[]> {
  const visible = visibleLocale(await loadCategoryLocale(lng, categoryId))
  return questions.map((q) => localizeOne(q, q.id != null && visible ? visible.questions[String(q.id)] : undefined))
}

/** The category with its title and description in the reader's language, where translated. */
export function localizeCategory(category: QuizCategory, content: CategoryLocale | null): QuizCategory {
  const meta = visibleLocale(content)?._meta
  if (!meta) return category
  return {
    ...category,
    title: meta.title?.trim() ? meta.title : category.title,
    description: meta.description?.trim() ? meta.description : category.description,
  }
}
