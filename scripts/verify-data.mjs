#!/usr/bin/env node
/**
 * Quick verification for data/ files:
 * - Lists category files under data/
 * - Heuristically counts questions by matching "question:" occurrences.
 */
import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"

const dataDir = path.resolve("data")
const files = await lsTsFiles(dataDir)
let total = 0

for (const f of files) {
  const content = await readFile(f, "utf8")
  const qMatches = content.match(/\bquestion\s*:/g) || []
  total += qMatches.length
  console.log(`${path.relative(process.cwd(), f)} -> ~${qMatches.length} question entries`)
}

console.log(`Total heuristic question entries: ~${total}`)
console.log("Note: This is an approximation based on 'question:' occurrences in TS files.")

async function lsTsFiles(dir) {
  const out = []
  const entries = await readdir(dir)
  for (const name of entries) {
    const full = path.join(dir, name)
    const s = await stat(full)
    if (s.isDirectory()) {
      const sub = await lsTsFiles(full)
      out.push(...sub)
    } else if (name.endsWith(".ts") || name.endsWith(".tsx")) {
      out.push(full)
    }
  }
  return out
}
