/**
 * pnpm content:stale [lng...]
 * Lists translated questions whose English changed after they were translated (their "src" no longer
 * matches the English fingerprint), per language and category. The site shows English for these until
 * they are retranslated: the review sheet marks them "english changed - retranslate".
 * Reads the English from data/*.ts. Always exits 0 (a report, not a gate).
 */
import { loadExport, staleByCategory, translationLocales } from "./lib/content"

const wanted = process.argv.slice(2)
const english = loadExport()
let total = 0
for (const lng of wanted.length ? wanted : translationLocales()) {
  const stale = staleByCategory(lng, english)
  const n = [...stale.values()].reduce((a, ids) => a + ids.length, 0)
  total += n
  console.log(`${lng}: ${n} stale`)
  for (const [cat, ids] of stale) console.log(`  ${cat} (${ids.length}): ${ids.join(", ")}`)
}
console.log(`${total} stale translations`)
