/**
 * One-time: stamp "src" (the English fingerprint, lib/i18n/source-fingerprint.ts) on every translated
 * question that has none, from the CURRENT English in data/*.ts. Run only while translations and English
 * are in sync (pnpm content:check passes). Entries that already have src are left alone. Safe to re-run.
 *   pnpm exec tsx scripts/backfill-src.ts [lng...]      (default: every translation language)
 */
import { englishFingerprint } from "../lib/i18n/source-fingerprint"
import { hasContent, loadExport, readContent, translationLocales, writeContent } from "./lib/content"

const wanted = process.argv.slice(2)
const english = loadExport()
for (const lng of wanted.length ? wanted : translationLocales()) {
  let stamped = 0
  let kept = 0
  for (const { id, file } of english) {
    if (!hasContent(lng, id)) continue
    const tr = readContent(lng, id)
    let changed = false
    for (const [qid, e] of Object.entries(tr.questions ?? {})) {
      const en = file.questions[qid]
      if (!en) continue // content:check reports unknown ids
      if (e.src) { kept++; continue }
      e.src = englishFingerprint(en)
      stamped++
      changed = true
    }
    if (changed) writeContent(lng, id, tr)
  }
  console.log(`${lng}: stamped ${stamped}, already had src ${kept}`)
}
