// Run: pnpm check:locales
// bn and ta must have exactly the same keys as en. Prints missing/extra keys, exits 1 on any.
import { readFileSync } from "node:fs"
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

function load(locale: string): Json {
  return JSON.parse(readFileSync(join(ROOT, locale, "common.json"), "utf8")) as Json
}

const baseKeys = new Set(flatten(load(BASE)))
let problems = 0

for (const locale of OTHERS) {
  const keys = new Set(flatten(load(locale)))
  const missing = [...baseKeys].filter((key) => !keys.has(key))
  const extra = [...keys].filter((key) => !baseKeys.has(key))
  for (const key of missing) console.log(`${locale}: missing ${key}`)
  for (const key of extra) console.log(`${locale}: extra   ${key}`)
  problems += missing.length + extra.length
}

if (problems > 0) {
  console.log(`check-locales: ${problems} problem(s)`)
  process.exit(1)
}
console.log(`check-locales: OK (${baseKeys.size} keys in en, bn and ta)`)
