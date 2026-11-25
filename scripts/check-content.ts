/**
 * pnpm content:check-files (part of content:check). Checks every non-en locales/<lng>/<category>.json:
 *   - every question id exists in the English file of that category
 *   - options, when present, has the same length as the English options
 *   - no translated option is repeated inside one question (empty slots are ignored)
 *   - _meta.status is review, approved or hidden
 *   - src, when present, is 8 hex characters
 * Exit 1 on any error.
 * Warns (no exit 1) with the number of stale translations per language: src no longer matches the
 * English, so the site shows English for them. List them with: pnpm content:stale
 */
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { isStale } from "../lib/i18n/source-fingerprint"
import { LOCALES, STATUSES, type ContentFile } from "./lib/content"

const errors: string[] = []
const read = (p: string) => JSON.parse(readFileSync(p, "utf8")) as ContentFile
const SRC = /^[0-9a-f]{8}$/
let files = 0
let questions = 0
const stale = new Map<string, number>()

for (const lng of readdirSync(LOCALES)) {
  if (lng === "en") continue
  const dir = join(LOCALES, lng)
  for (const name of readdirSync(dir)) {
    if (!name.endsWith(".json") || name === "common.json") continue
    const where = `${lng}/${name}`
    const enPath = join(LOCALES, "en", name)
    let f: ContentFile
    try { f = read(join(dir, name)) } catch (e) { errors.push(`${where}: not valid JSON (${(e as Error).message})`); continue }
    files++
    if (!STATUSES.includes(f._meta?.status)) errors.push(`${where}: _meta.status must be one of ${STATUSES.join(", ")}, got ${JSON.stringify(f._meta?.status)}`)
    if (!existsSync(enPath)) { errors.push(`${where}: no English file locales/en/${name}`); continue }
    const en = read(enPath)
    for (const [id, e] of Object.entries(f.questions ?? {})) {
      questions++
      const base = en.questions[id]
      if (!base) { errors.push(`${where}: id ${id} does not exist in English`); continue }
      if (e.options !== undefined) {
        if (e.options.length !== base.options?.length) errors.push(`${where}: ${id}: ${e.options.length} options, English has ${base.options?.length}`)
        const filled = e.options.filter((o) => o !== "")
        if (new Set(filled).size !== filled.length) errors.push(`${where}: ${id}: a translated option is repeated`)
      }
      if (e.src !== undefined && !SRC.test(e.src)) errors.push(`${where}: ${id}: src must be 8 hex characters, got ${JSON.stringify(e.src)}`)
      else if (isStale(e.src, base)) stale.set(lng, (stale.get(lng) ?? 0) + 1)
    }
  }
}

for (const e of errors) console.error(`error: ${e}`)
for (const [lng, n] of stale) console.warn(`warning: ${lng}: ${n} stale translations (English changed since translated; shown in English). List: pnpm content:stale ${lng}`)
const staleTotal = [...stale.values()].reduce((a, b) => a + b, 0)
console.log(`${files} translation files, ${questions} translated questions: ${errors.length} errors, ${staleTotal} stale`)
if (errors.length > 0) process.exit(1)
