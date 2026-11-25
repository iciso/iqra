import "server-only"
import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { LOCALES } from "@/lib/i18n/config"
import type { ReviewFile } from "@/lib/review-sheet/sheet"

// Reads locales/<lng>/<category>.json for the review sheets. The category list is the set of
// files in locales/en (made from data/*.ts), so a request can only name a file that exists.

const LOCALES_DIR = join(process.cwd(), "locales")
const NOT_CATEGORIES = new Set(["common"])

/** Languages that have review sheets: every UI language except English. */
export const REVIEW_LOCALES = LOCALES.filter((lng) => lng !== "en")
export type ReviewLocale = (typeof REVIEW_LOCALES)[number]

export const isReviewLocale = (value: string | null): value is ReviewLocale =>
  REVIEW_LOCALES.some((lng) => lng === value)

/** Category ids that have an English file, sorted. */
export function reviewCategories(): string[] {
  return readdirSync(join(LOCALES_DIR, "en"), { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".json"))
    .map((d) => d.name.slice(0, -".json".length))
    .filter((id) => !NOT_CATEGORIES.has(id))
    .sort()
}

/** The file, or null when it is missing or unreadable (the sheet then shows empty translations). */
export function readReviewFile(lng: string, category: string): ReviewFile | null {
  try {
    const parsed = JSON.parse(readFileSync(join(LOCALES_DIR, lng, `${category}.json`), "utf8")) as Partial<ReviewFile>
    return { _meta: parsed._meta ?? {}, questions: parsed.questions ?? {} }
  } catch {
    return null
  }
}

/** Categories still waiting for a scholar ("hidden" in this language). */
export const isAwaitingScholar = (lng: ReviewLocale, category: string) =>
  readReviewFile(lng, category)?._meta?.status === "hidden"

/** All categories, the ones waiting for a scholar first; each group keeps the given order. */
export function awaitingFirst(lng: ReviewLocale, categories: string[]): { id: string; awaiting: boolean }[] {
  const tagged = categories.map((id) => ({ id, awaiting: isAwaitingScholar(lng, id) }))
  return [...tagged.filter((c) => c.awaiting), ...tagged.filter((c) => !c.awaiting)]
}
