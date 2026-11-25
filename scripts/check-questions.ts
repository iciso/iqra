/**
 * Checks the quiz data. Run from the repo root:  npx tsx scripts/check-questions.ts
 * Exit 1 when any of these is wrong:
 *   - a question has no id
 *   - an id is used by two different questions in one category
 *   - correctAnswer is not one of the options (exactly)
 *   - an option is repeated inside one question
 *   - the same question text appears twice in one level (more often than KNOWN_DUPLICATES allows)
 *
 * A question shared by two levels (intermediate = easy.slice(0, 10)) is ONE object and
 * keeps one id, so it is counted once per category.
 */
import { getAllCategories } from "../data/quiz-data-manager"

const LEVELS = ["easy", "intermediate", "advanced"] as const

// Text repeats that exist today and are kept ON PURPOSE: "category/level" -> how many repeats.
// Deleting one shortens that level's question pool, which reshuffles it and breaks the challenge
// sections already stored in the database. The check fails when a level has MORE repeats than listed.
// Lower a number (or drop the line) in the same change that deletes the duplicate questions.
const KNOWN_DUPLICATES: Record<string, number> = {
  "psych/advanced": 1,
  "imagery/intermediate": 2,
  "imagery/advanced": 32,
  "modern-arabic-01/intermediate": 1,
  "quranic-arabic-01/intermediate": 22,
  "quranic-arabic-01/advanced": 3,
}

function main() {
  const errors: string[] = []
  const warnings: string[] = []
  let questions = 0

  const log = console.log
  console.log = () => {}
  const categories = getAllCategories()
  console.log = log

  for (const cat of categories) {
    const owner = new Map<string, object>() // id -> the question object that owns it
    const seenObjects = new Set<object>()

    for (const level of LEVELS) {
      const list = cat.levels[level] ?? []
      const texts = new Map<string, number>()
      const repeats: string[] = []

      list.forEach((q, i) => {
        const where = `${cat.id}/${level}#${i}`
        questions++

        if (q.id === undefined || q.id === null || q.id === "" || q.id === 0) {
          errors.push(`${where}: missing id`)
        } else if (!seenObjects.has(q)) {
          const key = String(q.id)
          const other = owner.get(key)
          if (other && other !== q) errors.push(`${where}: id ${JSON.stringify(q.id)} is also used by another question in ${cat.id}`)
          owner.set(key, q)
        }
        seenObjects.add(q)

        if (!q.options.includes(q.correctAnswer)) {
          errors.push(`${where}: correctAnswer is not one of the options: ${JSON.stringify(q.correctAnswer).slice(0, 80)}`)
        }
        if (new Set(q.options).size !== q.options.length) {
          errors.push(`${where}: an option is repeated`)
        }

        const first = texts.get(q.question)
        if (first !== undefined) repeats.push(`${where}: same question text as #${first} in this level: ${q.question.slice(0, 60)}`)
        else texts.set(q.question, i)
      })

      const allowed = KNOWN_DUPLICATES[`${cat.id}/${level}`] ?? 0
      if (repeats.length > allowed) errors.push(...repeats)
      else if (repeats.length > 0) warnings.push(`${cat.id}/${level}: ${repeats.length} repeated question texts (known, kept)`)
    }
  }

  for (const w of warnings) console.warn(`warning: ${w}`)
  for (const e of errors) console.error(`error: ${e}`)
  console.log(`${categories.length} categories, ${questions} questions: ${errors.length} errors, ${warnings.length} warnings`)
  if (errors.length > 0) process.exit(1)
}

main()
