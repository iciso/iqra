/**
 * Scholar review sheet: CSV out, corrections back in.
 *   pnpm review:export <lng> [category...]   writes review/<lng>/<category>.csv and review/<lng>/ALL.csv
 *   pnpm review:import <lng> <file.csv>      writes every non-empty "correction" into locales/<lng>/<category>.json
 *   pnpm review:approve <lng> <category>     sets _meta.status "approved"
 *
 * Columns: category, id, field, english, translation, correction, reviewer_note
 * field is: question | option1 | option2 | ... | explanation. One row per field.
 * (A "category" column leads each row so ALL.csv can be imported; per-category files work with or
 * without it - the file name is used when the column is missing.)
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { basename, join } from "node:path"
import {
  csvLine, hasContent, loadExport, parseCsv, readContent, REVIEW, STATUSES, writeContent,
  type ContentFile, type Entry,
} from "./lib/content"

const HEADER = ["category", "id", "field", "english", "translation", "correction", "reviewer_note"]

function fieldsOf(e: Entry): [string, string][] {
  const rows: [string, string][] = [["question", e.question ?? ""]]
  ;(e.options ?? []).forEach((o, i) => rows.push([`option${i + 1}`, o]))
  if (e.explanation) rows.push(["explanation", e.explanation])
  return rows
}

function translationOf(e: Entry | undefined, field: string): string {
  if (!e) return ""
  if (field === "question") return e.question ?? ""
  if (field === "explanation") return e.explanation ?? ""
  return e.options?.[Number(field.slice(6)) - 1] ?? ""
}

function exportSheet(lng: string, wanted: string[]) {
  const all = loadExport()
  const items = wanted.length ? all.filter((i) => wanted.includes(i.id)) : all
  for (const w of wanted) if (!all.some((i) => i.id === w)) throw new Error(`no such category: ${w}`)
  const dir = join(REVIEW, lng)
  mkdirSync(dir, { recursive: true })
  const bom = "﻿"
  const combined: string[] = [csvLine(HEADER)]
  for (const { id, file } of items) {
    if (!hasContent(lng, id)) throw new Error(`locales/${lng}/${id}.json does not exist - run: pnpm content:new-locale ${lng}`)
    const tr = readContent(lng, id)
    const lines: string[] = []
    for (const [qid, en] of Object.entries(file.questions)) {
      for (const [field, english] of fieldsOf(en)) {
        lines.push(csvLine([id, qid, field, english, translationOf(tr.questions[qid], field), "", ""]))
      }
    }
    writeFileSync(join(dir, `${id}.csv`), bom + [csvLine(HEADER), ...lines].join("\r\n") + "\r\n")
    combined.push(...lines)
    console.log(`${id}: ${lines.length} rows`)
  }
  writeFileSync(join(dir, "ALL.csv"), bom + combined.join("\r\n") + "\r\n")
  console.log(`wrote review/${lng}/ALL.csv (${combined.length - 1} rows) and ${items.length} category files`)
}

function importSheet(lng: string, csvPath: string) {
  if (!existsSync(csvPath)) throw new Error(`no such file: ${csvPath}`)
  const rows = parseCsv(readFileSync(csvPath, "utf8"))
  if (rows.length === 0) throw new Error("empty CSV")
  const head = rows[0].map((h) => h.trim().toLowerCase())
  const col = (n: string) => head.indexOf(n)
  const [cId, cField, cCorr] = [col("id"), col("field"), col("correction")]
  if (cId < 0 || cField < 0 || cCorr < 0) throw new Error("CSV needs the columns id, field, correction")
  const cCat = col("category")
  const fallbackCat = basename(csvPath).replace(/\.csv$/i, "")

  const english = new Map(loadExport().map((i) => [i.id, i.file]))
  const files = new Map<string, ContentFile>()
  const counts = new Map<string, number>()
  const rejected: string[] = []
  let line = 1

  for (const r of rows.slice(1)) {
    line++
    const corr = r[cCorr] ?? ""
    if (corr.trim() === "") continue
    const cat = (cCat >= 0 ? r[cCat] : "")?.trim() || fallbackCat
    const id = (r[cId] ?? "").trim()
    const field = (r[cField] ?? "").trim()
    const en = english.get(cat)?.questions[id]
    const m = /^option([1-9]\d*)$/.exec(field)
    const ok =
      en !== undefined &&
      (field === "question" || (field === "explanation" && en.explanation !== undefined) || (m !== null && Number(m[1]) <= (en.options?.length ?? 0)))
    if (!ok) { rejected.push(`line ${line}: ${cat}/${id}/${field} does not exist in English`); continue }
    if (!hasContent(lng, cat)) { rejected.push(`line ${line}: locales/${lng}/${cat}.json does not exist`); continue }

    let f = files.get(cat)
    if (!f) { f = readContent(lng, cat); files.set(cat, f) }
    const e = (f.questions[id] ??= {})
    const value = corr.trim()
    if (field === "question") e.question = value
    else if (field === "explanation") e.explanation = value
    else {
      const n = Number(m![1])
      const len = en!.options!.length
      const opts = e.options ?? []
      while (opts.length < len) opts.push("")
      opts[n - 1] = value
      e.options = opts
    }
    counts.set(cat, (counts.get(cat) ?? 0) + 1)
  }

  for (const [cat, f] of files) {
    // keep the English order of questions and of keys inside each question
    const order = Object.keys(english.get(cat)!.questions)
    const sorted: ContentFile["questions"] = {}
    for (const id of order) {
      const e = f.questions[id]
      if (!e) continue
      const out: Entry = {}
      if (e.question !== undefined) out.question = e.question
      if (e.options !== undefined) out.options = e.options
      if (e.explanation !== undefined) out.explanation = e.explanation
      sorted[id] = out
    }
    f.questions = sorted
    writeContent(lng, cat, f)
  }
  for (const [cat, n] of counts) console.log(`${cat}: ${n} corrections written`)
  for (const r of rejected) console.error(`rejected: ${r}`)
  console.log(`${[...counts.values()].reduce((a, b) => a + b, 0)} written, ${rejected.length} rejected`)
  if (rejected.length > 0) process.exit(1)
}

function approve(lng: string, category: string) {
  if (!hasContent(lng, category)) throw new Error(`locales/${lng}/${category}.json does not exist`)
  const f = readContent(lng, category)
  f._meta.status = STATUSES[1]
  writeContent(lng, category, f)
  console.log(`${lng}/${category}: approved`)
}

function main() {
  const [cmd, lng, ...rest] = process.argv.slice(2)
  try {
    if (cmd === "export" && lng) return exportSheet(lng, rest)
    if (cmd === "import" && lng && rest[0]) return importSheet(lng, rest[0])
    if (cmd === "approve" && lng && rest[0]) return approve(lng, rest[0])
  } catch (err) {
    console.error(`error: ${(err as Error).message}`)
    process.exit(1)
  }
  console.error("usage: review-sheet export <lng> [category...] | import <lng> <file.csv> | approve <lng> <category>")
  process.exit(1)
}

main()
