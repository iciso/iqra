/**
 * Verifies data/ content by listing category files and estimating question counts.
 *
 * Heuristics:
 * - Counts 'difficulty: "easy"' and 'difficulty: "advanced"' occurrences per file.
 * - If structure differs, it still lists files and sizes.
 */

import fs from "node:fs/promises"
import path from "node:path"

async function getAllTsFiles(dir) {
  const out = []
  async function walk(d) {
    const entries = await fs.readdir(d, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) await walk(full)
      else if (e.isFile() && full.endsWith(".ts")) out.push(full)
    }
  }
  await walk(dir)
  return out
}

function countOccurrences(str, re) {
  let count = 0
  for (const _ of str.matchAll(re)) count++
  return count
}

async function main() {
  const dataDir = path.join(process.cwd(), "data")
  try {
    await fs.access(dataDir)
  } catch {
    console.error("data/ directory not found.")
    process.exit(1)
  }

  const files = await getAllTsFiles(dataDir)
  console.log(`Found ${files.length} data files.`)

  let totalEasy = 0
  let totalAdvanced = 0

  for (const file of files) {
    const content = await fs.readFile(file, "utf8")
    const easy = countOccurrences(content, /difficulty:\s*['"]easy['"]/g)
    const adv = countOccurrences(content, /difficulty:\s*['"]advanced['"]/g)
    totalEasy += easy
    totalAdvanced += adv
    console.log(
      `${path.relative(process.cwd(), file)} -> easy: ${easy}, advanced: ${adv}, size: ${content.length} chars`
    )
  }

  console.log(`Totals -> easy: ${totalEasy}, advanced: ${totalAdvanced}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
