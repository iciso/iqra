/**
 * Gives every quiz question a stable `id`: "<categoryId>-<level>-<n>".
 *
 * Run from the repo root:  npx tsx scripts/add-question-ids.ts
 *
 * It edits the data files in place (inserting `id: "..."` as the first property of
 * each question object that has none), then re-loads the data in a fresh process and
 * FAILS (exit 1) if the question pool of any (category, level) changed in count or order.
 * The pool is what app/quiz/page.tsx builds before it shuffles: challenge sections stored in
 * the database point into it, so it must not move.
 *
 * Safe to re-run: with no missing ids it writes nothing.
 */
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { execFileSync } from "node:child_process"
import ts from "typescript"

const ROOT = path.resolve(__dirname, "..")
const DATA = path.join(ROOT, "data")
const LEVELS = ["easy", "intermediate", "advanced"] as const

type Pool = Record<string, string[]> // "category/level" -> question texts in pool order

// Mirrors getQuizQuestions (fills a missing id) + dedupeQuestions in app/quiz/page.tsx.
// After this script ran, every id is explicit and the fill never triggers.
async function loadPools(): Promise<Pool> {
  const log = console.log
  console.log = () => {}
  const mod = await import("../data/quiz-data-manager")
  console.log = log
  const pools: Pool = {}
  for (const cat of mod.getAllCategories()) {
    for (const level of LEVELS) {
      const list = cat.levels[level]
      if (!list) continue
      const seen = new Set<string | number>()
      const texts: string[] = []
      list.forEach((q, i) => {
        const key = q.id || `${cat.id}-${i + 1}`
        if (seen.has(key)) return
        seen.add(key)
        texts.push(q.question)
      })
      pools[`${cat.id}/${level}`] = texts
    }
  }
  return pools
}

async function addIds(): Promise<number> {
  const log = console.log
  console.log = () => {}
  const mod = await import("../data/quiz-data-manager")
  console.log = log
  const categories = mod.getAllCategories()

  // Which runtime category lives in which file: the source file declares `id: "<categoryId>"`.
  const files = fs.readdirSync(DATA).filter((f) => /\.tsx?$/.test(f))
  let added = 0

  for (const cat of categories) {
    const idLine = new RegExp(`^\\s*id:\\s*["']${cat.id}["']`, "m")
    const file = files.find((f) => !/manager|expanded|examples/.test(f) && idLine.test(fs.readFileSync(path.join(DATA, f), "utf8")))
    if (!file) throw new Error(`no data file declares category ${cat.id}`)

    // Unique question objects without an id, in (level, index) order. A level can alias objects
    // of another level (intermediate = easy.slice(0, 10)): the same object is one question.
    const owner = new Map<object, string>() // question object -> level it first appears in
    const missing: { q: { id?: string | number; question: string }; level: string }[] = []
    const taken = new Set<string>()
    for (const level of LEVELS) {
      for (const q of cat.levels[level] ?? []) {
        if (q.id) taken.add(String(q.id))
        if (owner.has(q)) continue
        owner.set(q, level)
        if (!q.id) missing.push({ q, level })
      }
    }
    if (missing.length === 0) continue

    // Assign ids: counter per level, skipping numbers already taken in this category.
    const counter: Record<string, number> = { easy: 0, intermediate: 0, advanced: 0 }
    const assigned: { question: string; id: string }[] = []
    for (const { q, level } of missing) {
      let id: string
      do {
        counter[level]++
        id = `${cat.id}-${level}-${counter[level]}`
      } while (taken.has(id))
      taken.add(id)
      assigned.push({ question: q.question, id })
    }

    // Find the literals in the source, match by question text in source order.
    const filePath = path.join(DATA, file)
    const text = fs.readFileSync(filePath, "utf8")
    const sf = ts.createSourceFile(filePath, text, ts.ScriptTarget.ES2020, true)
    const byText = new Map<string, string[]>()
    for (const a of assigned) byText.set(a.question, [...(byText.get(a.question) ?? []), a.id])

    const edits: { pos: number; insert: string }[] = []
    const visit = (node: ts.Node) => {
      if (ts.isObjectLiteralExpression(node)) {
        const props = new Map<string, ts.PropertyAssignment>()
        for (const p of node.properties) {
          if (ts.isPropertyAssignment(p) && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name))) props.set(p.name.text, p)
        }
        const qp = props.get("question")
        if (qp && props.has("options") && props.has("correctAnswer") && !props.has("id")) {
          if (!ts.isStringLiteral(qp.initializer) && !ts.isNoSubstitutionTemplateLiteral(qp.initializer)) {
            throw new Error(`${file}: question is not a plain string at offset ${qp.getStart()}`)
          }
          const ids = byText.get(qp.initializer.text)
          const id = ids?.shift()
          if (!id) throw new Error(`${file}: literal has no matching runtime question: ${qp.initializer.text.slice(0, 60)}`)
          const first = node.properties[0]
          const quoted = ts.isPropertyAssignment(first) && ts.isStringLiteral(first.name)
          const start = first.getStart(sf)
          const lineStart = text.lastIndexOf("\n", start - 1) + 1
          const before = text.slice(lineStart, start)
          const ownLine = /^\s*$/.test(before)
          const key = quoted ? `"id"` : "id"
          edits.push({ pos: start, insert: ownLine ? `${key}: ${JSON.stringify(id)},\n${before}` : `${key}: ${JSON.stringify(id)}, ` })
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(sf)

    const leftover = [...byText.values()].reduce((n, l) => n + l.length, 0)
    if (leftover !== 0 || edits.length !== assigned.length) {
      throw new Error(`${file}: ${assigned.length} runtime questions need ids, ${edits.length} literals edited, ${leftover} unmatched`)
    }

    let out = text
    for (const e of edits.sort((a, b) => b.pos - a.pos)) out = out.slice(0, e.pos) + e.insert + out.slice(e.pos)
    fs.writeFileSync(filePath, out)
    added += edits.length
    console.log(`${cat.id}: +${edits.length} ids (${file})`)
  }
  return added
}

async function main() {
  const mode = process.argv[2]
  if (mode === "--dump") {
    fs.writeFileSync(process.argv[3], JSON.stringify(await loadPools()))
    return
  }

  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "qids-"))
  const dump = (name: string) => {
    const f = path.join(tmp, name)
    execFileSync(process.execPath, [...process.execArgv, __filename, "--dump", f], { cwd: ROOT, stdio: ["ignore", "ignore", "inherit"] })
    return JSON.parse(fs.readFileSync(f, "utf8")) as Pool
  }

  const before = dump("before.json")
  const added = await addIds()
  const after = dump("after.json")

  let changes = 0
  for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) {
    const a = before[key] ?? []
    const b = after[key] ?? []
    if (a.length !== b.length || a.some((t, i) => t !== b[i])) {
      changes++
      console.error(`ORDER/COUNT CHANGED ${key}: ${a.length} -> ${b.length}`)
    }
  }
  const total = Object.values(after).reduce((n, l) => n + l.length, 0)
  console.log(`ids added: ${added}; pools checked: ${Object.keys(after).length} (${total} questions); order/count changes: ${changes}`)
  if (changes > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
