/**
 * Writes locales/en/<categoryId>.json from data/*.ts (every category except ta-*).
 *   pnpm content:export          write the files
 *   pnpm content:export --check  exit 1 if any file differs from the data (or is missing / extra)
 */
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { filePath, loadExport, LOCALES, serialize, writeContent } from "./lib/content"
import { join } from "node:path"

const check = process.argv.includes("--check")
const items = loadExport()
let questions = 0
const drift: string[] = []

for (const { id, file } of items) {
  questions += Object.keys(file.questions).length
  const text = serialize(file)
  const p = filePath("en", id)
  if (check) {
    if (!existsSync(p)) drift.push(`${id}: missing`)
    else if (readFileSync(p, "utf8") !== text) drift.push(`${id}: differs from data`)
  } else writeContent("en", id, file)
}
if (check) {
  const known = new Set(items.map((i) => `${i.id}.json`))
  for (const f of readdirSync(join(LOCALES, "en"))) {
    if (f !== "common.json" && f.endsWith(".json") && !known.has(f)) drift.push(`${f}: no such category in data`)
  }
  for (const d of drift) console.error(`drift: ${d}`)
  console.log(`${items.length} en files, ${questions} questions: ${drift.length} drifted`)
  if (drift.length > 0) {
    console.error("Run: pnpm content:export")
    process.exit(1)
  }
} else console.log(`wrote ${items.length} en files, ${questions} questions`)
