import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.join(__dirname, "..", "data")

function listCategoryFiles() {
  if (!fs.existsSync(dataDir)) {
    console.error("data/ directory not found.")
    process.exit(1)
  }
  const files = fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".ts") || f.endsWith(".tsx"))
    .filter((f) => !f.includes("quran") && !f.includes("infographic") && !f.includes("quiz-data"))
  return files
}

// Heuristic count: scan for arrays named easyQuestions and advancedQuestions.
function countQuestionsInFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8")
  const easyMatches = (src.match(/easyQuestions\s*:\s*\[/g) || []).length
  const advMatches = (src.match(/advancedQuestions\s*:\s*\[/g) || []).length
  // Fallback heuristics for some data shapes: count "level: 'easy'/'advanced'"
  const easyAlt = (src.match(/level\s*:\s*['"]easy['"]/g) || []).length
  const advAlt = (src.match(/level\s*:\s*['"]advanced['"]/g) || []).length
  return {
    easyBlocks: easyMatches,
    advancedBlocks: advMatches,
    easyAlt,
    advancedAlt,
  }
}

function main() {
  const files = listCategoryFiles()
  console.log(`Found ${files.length} potential category files in data/`)
  const summary = []
  for (const f of files) {
    const p = path.join(dataDir, f)
    const c = countQuestionsInFile(p)
    summary.push({ file: f, ...c })
  }
  for (const row of summary) {
    console.log(
      `${row.file} -> easyBlocks=${row.easyBlocks}, advancedBlocks=${row.advancedBlocks}, easyAlt=${row.easyAlt}, advancedAlt=${row.advancedAlt}`,
    )
  }
  console.log("Note: This is a heuristic. Use your app pages to verify exact counts visually.")
}

main()
