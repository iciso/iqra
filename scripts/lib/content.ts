/**
 * Shared helpers for the content scripts (export-content, new-locale, review-sheet, check-content).
 * File shape (frozen): locales/<lng>/<categoryId>.json
 *   { "_meta": { status, title?, description? }, "questions": { "<id>": { question?, options?, explanation? } } }
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { getAllCategories } from "../../data/quiz-data-manager"
import { subjects } from "../../lib/subjects"

export const ROOT = join(__dirname, "..", "..")
export const LOCALES = join(ROOT, "locales")
export const REVIEW = join(ROOT, "review")
export const STATUSES = ["review", "approved", "hidden"] as const
export type Status = (typeof STATUSES)[number]

export type Meta = { status: Status; title?: string; description?: string }
export type Entry = { question?: string; options?: string[]; explanation?: string }
export type ContentFile = { _meta: Meta; questions: Record<string, Entry> }

/** Categories that start "hidden" in a new language until a scholar approves them. */
export const SENSITIVE = ["fiqh", "madhab", "bidah", "music", "aqeedah", "shirk", "inheritance", "gender", "lgbtq", "dating", "marriage", "imagery", "islamic-medical-ethics", "riba", "islamic-finance", "takaful", "crypto"]

const LEVELS = ["easy", "intermediate", "advanced"] as const

/** Exported categories: everything except Tamil ones (ta-*), in data order. Questions once each (shared objects deduped). */
export function loadExport(): { id: string; file: ContentFile }[] {
  const log = console.log
  console.log = () => {}
  const categories = getAllCategories()
  console.log = log
  const names = new Map(subjects.map((s) => [s.slug, s]))
  const out: { id: string; file: ContentFile }[] = []
  for (const cat of categories) {
    if (cat.id.startsWith("ta-")) continue
    const seen = new Set<object>()
    const questions: Record<string, Entry> = {}
    for (const level of LEVELS) {
      for (const q of cat.levels[level] ?? []) {
        if (seen.has(q)) continue
        seen.add(q)
        if (q.id === undefined || q.id === null || q.id === "") throw new Error(`${cat.id}/${level}: question without id`)
        const entry: Entry = { question: q.question, options: [...q.options] }
        if (q.explanation) entry.explanation = q.explanation
        questions[String(q.id)] = entry
      }
    }
    const s = names.get(cat.id)
    out.push({
      id: cat.id,
      file: { _meta: { status: "approved", title: s?.name ?? cat.title, description: s?.description ?? cat.description }, questions },
    })
  }
  return out
}

export const filePath = (lng: string, category: string) => join(LOCALES, lng, `${category}.json`)
export const serialize = (f: ContentFile) => JSON.stringify(f, null, 2) + "\n"
export function readContent(lng: string, category: string): ContentFile {
  return JSON.parse(readFileSync(filePath(lng, category), "utf8")) as ContentFile
}
export function writeContent(lng: string, category: string, f: ContentFile) {
  mkdirSync(join(LOCALES, lng), { recursive: true })
  writeFileSync(filePath(lng, category), serialize(f))
}
export const hasContent = (lng: string, category: string) => existsSync(filePath(lng, category))

// ---- CSV -----------------------------------------------------------------------------------

/** Quote a cell when it holds a comma, quote, or line break. */
export function csvCell(v: string): string {
  return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, "\"\"")}"` : v
}
export const csvLine = (cells: string[]) => cells.map(csvCell).join(",")

/** Small RFC 4180 parser: quoted cells, doubled quotes, commas and newlines inside quotes. Strips a BOM. */
export function parseCsv(text: string): string[][] {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1)
  const rows: string[][] = []
  let row: string[] = []
  let cell = ""
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === "\"") {
        if (text[i + 1] === "\"") { cell += "\""; i++ } else quoted = false
      } else cell += c
    } else if (c === "\"") quoted = true
    else if (c === ",") { row.push(cell); cell = "" }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++
      row.push(cell); cell = ""
      rows.push(row); row = []
    } else cell += c
  }
  if (cell !== "" || row.length > 0) { row.push(cell); rows.push(row) }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""))
}
