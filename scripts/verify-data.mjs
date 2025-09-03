#!/usr/bin/env node
/**
 * Verify imported data files: list categories & rough count of easy/advanced questions.
 * Heuristic parser: counts occurrences of "easy" and "advanced" tokens in files.
 */

import fs from 'node:fs/promises'
import path from 'node:path'

async function readAll(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...(await readAll(p)))
    } else if (/\.(ts|tsx|js|mjs)$/.test(e.name)) {
      out.push(p)
    }
  }
  return out
}

function countOccurrences(text, needle) {
  const re = new RegExp(needle, 'gi')
  return (text.match(re) ?? []).length
}

async function main() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dataDir)
  } catch {
    console.error('Missing data/ directory. Run the sync script first.')
    process.exit(1)
  }

  const files = await readAll(dataDir)
  let categories = new Set()
  let totalEasy = 0
  let totalAdvanced = 0

  for (const file of files) {
    const text = await fs.readFile(file, 'utf8')
    // Heuristic: treat file stem as category
    const stem = path.basename(file).replace(/\.(ts|tsx|js|mjs)$/, '')
    categories.add(stem)

    // Approximate counts
    totalEasy += countOccurrences(text, 'easy')
    totalAdvanced += countOccurrences(text, 'advanced')
  }

  console.log('Verification summary:')
  console.log('- Categories (by file stem):', categories.size)
  console.log('- Approx. "easy" token occurrences:', totalEasy)
  console.log('- Approx. "advanced" token occurrences:', totalAdvanced)

  console.log('\nSpot check (first 10 category stems):')
  console.log(Array.from(categories).sort().slice(0, 10).join(', '))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
