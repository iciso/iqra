// Run: pnpm check:locales
// bn and ta must have exactly the same keys as en, in common.json and in every
// locales/<lng>/pages/*.json. Prints missing/extra keys, exits 1 on any.
import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = join(__dirname, "..", "locales")
const BASE = "en"
const OTHERS = ["bn", "ta"]

type Json = { [key: string]: Json | string }

function flatten(node: Json, prefix = ""): string[] {
  return Object.entries(node).flatMap(([key, value]) =>
    typeof value === "string" ? [prefix + key] : flatten(value, `${prefix}${key}.`),
  )
}

function load(locale: string, file: string): Json {
  const path = join(ROOT, locale, file)
  return existsSync(path) ? (JSON.parse(readFileSync(path, "utf8")) as Json) : {}
}

// common.json plus one entry per file in en/pages/ (the file set of the base language).
const pageFiles = readdirSync(join(ROOT, BASE, "pages"))
  .filter((name) => name.endsWith(".json"))
  .sort()
  .map((name) => `pages/${name}`)
const files = ["common.json", ...pageFiles]

let problems = 0
let total = 0

for (const file of files) {
  const baseKeys = new Set(flatten(load(BASE, file)))
  total += baseKeys.size
  for (const locale of OTHERS) {
    const keys = new Set(flatten(load(locale, file)))
    const missing = [...baseKeys].filter((key) => !keys.has(key))
    const extra = [...keys].filter((key) => !baseKeys.has(key))
    for (const key of missing) console.log(`${locale}/${file}: missing ${key}`)
    for (const key of extra) console.log(`${locale}/${file}: extra   ${key}`)
    problems += missing.length + extra.length
  }
}

if (problems > 0) {
  console.log(`check-locales: ${problems} problem(s)`)
  process.exit(1)
}
console.log(`check-locales: OK (${total} keys in en, bn and ta across ${files.length} files)`)
