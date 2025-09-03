/**
 * Simple verification for the data/ folder:
 * - Lists .ts files in data/
 * - Roughly estimates easy/advanced question counts by regex
 *   (heuristic only; adjust patterns if your schema differs)
 *
 * Usage:
 *  node scripts/verify-data.mjs
 */

import fs from 'node:fs'
import path from 'node:path'

const dataDir = path.join(process.cwd(), 'data')

function grepCount(text, patterns) {
  const re = new RegExp(patterns.join('|'), 'gi')
  const matches = text.match(re)
  return matches ? matches.length : 0
}

async function verify() {
  if (!fs.existsSync(dataDir)) {
    console.error('No data/ directory found.')
    process.exit(1)
  }

  const files = (await fs.promises.readdir(dataDir)).filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'))
  console.log(`Found ${files.length} data file(s).`)

  let totalEasy = 0
  let totalAdvanced = 0

  for (const file of files) {
    const full = path.join(dataDir, file)
    const content = await fs.promises.readFile(full, 'utf8')

    // Heuristics: adjust patterns to your schema
    const easyCount = grepCount(content, ['"easy"', "'easy'", 'easyQuestions', 'easy:'])
    const advancedCount = grepCount(content, ['"advanced"', "'advanced'", 'advancedQuestions', 'hardQuestions', 'advanced:'])

    totalEasy += easyCount
    totalAdvanced += advancedCount

    console.log(`- ${file}: approx easy=${easyCount}, advanced=${advancedCount}`)
  }

  console.log('\nSummary:')
  console.log(`Approx total easy markers: ${totalEasy}`)
  console.log(`Approx total advanced markers: ${totalAdvanced}`)

  console.log('\nNote: This is a heuristic count. Use domain-specific parsing if you need exact totals.')
}

verify().catch((err) => {
  console.error(err)
  process.exit(1)
})
