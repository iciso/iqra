/**
 * Seeds locales/ta/<category>.json from the legacy Tamil quizzes (data/ta-*.ts), which mirror the English
 * categories position by position inside each level. Copies a Tamil question only when the option count
 * matches English AND the Tamil correct answer sits at the same option index as the English one.
 * data/ta-*.ts is not changed. Existing ta entries are kept unless re-seeded for the same id.
 *   pnpm exec tsx scripts/seed-ta-from-legacy.ts
 */
import quran from "../data/quran"
import aqeedah from "../data/aqeedah"
import salah from "../data/salah"
import charity from "../data/charity"
import fiqh from "../data/fiqh"
import taQuran from "../data/ta-quran"
import taAqeedah from "../data/ta-aqeedah"
import taSalah from "../data/ta-salah"
import taCharity from "../data/ta-charity"
import taFiqh from "../data/ta-fiqh"
import { englishFingerprint } from "../lib/i18n/source-fingerprint"
import { hasContent, readContent, writeContent } from "./lib/content"

const LEVELS = ["easy", "intermediate", "advanced"] as const
const pairs = [
  ["quran", quran, taQuran],
  ["aqeedah", aqeedah, taAqeedah],
  ["salah", salah, taSalah],
  ["charity", charity, taCharity],
  ["fiqh", fiqh, taFiqh],
] as const

const skipped: string[] = []
for (const [id, en, ta] of pairs) {
  if (!hasContent("ta", id)) throw new Error(`locales/ta/${id}.json missing: run pnpm content:new-locale ta`)
  const file = readContent("ta", id)
  let seeded = 0
  for (const level of LEVELS) {
    const e = en.levels[level] ?? []
    const t = ta.levels[level] ?? []
    if (e.length !== t.length) skipped.push(`${id} ${level}: size differs (en ${e.length}, ta ${t.length}); compared the first ${Math.min(e.length, t.length)}`)
    for (let i = 0; i < Math.min(e.length, t.length); i++) {
      const eq = e[i], tq = t[i]
      const label = `${eq.id} (${id} ${level} #${i + 1})`
      if (eq.options.length !== tq.options.length) { skipped.push(`${label}: option count ${tq.options.length} vs ${eq.options.length}`); continue }
      const ei = eq.options.indexOf(eq.correctAnswer as string)
      const ti = tq.options.indexOf(tq.correctAnswer as string)
      if (ei < 0 || ti < 0 || ei !== ti) { skipped.push(`${label}: correct answer at index ${ti} in Tamil, ${ei} in English`); continue }
      if (!tq.question || tq.options.some((o) => !o)) { skipped.push(`${label}: empty Tamil text`); continue }
      const entry: { question: string; options: string[]; explanation?: string; src?: string } = { question: tq.question, options: [...tq.options] }
      if (tq.explanation) entry.explanation = tq.explanation
      entry.src = englishFingerprint(eq)
      file.questions[String(eq.id)] = entry
      seeded++
    }
  }
  if (!file._meta.title) { file._meta.title = ta.title; file._meta.description = ta.description }
  writeContent("ta", id, file)
  console.log(`${id}: seeded ${seeded}`)
}
console.log(`skipped ${skipped.length}`)
for (const s of skipped) console.log(`  ${s}`)
