/**
 * pnpm content:new-locale <lng>
 * Creates locales/<lng>/<categoryId>.json (empty questions) for every exported category that has none yet.
 * Sensitive categories start "hidden"; all others start "review".
 */
import { hasContent, loadExport, SENSITIVE, writeContent } from "./lib/content"

const lng = process.argv[2]
if (!lng || lng === "en" || !/^[a-z]{2,3}(-[A-Za-z]+)?$/.test(lng)) {
  console.error("usage: pnpm content:new-locale <lng>   (e.g. bn; not en)")
  process.exit(1)
}
const created: string[] = []
const hidden: string[] = []
let kept = 0
for (const { id } of loadExport()) {
  if (hasContent(lng, id)) { kept++; continue }
  const status = SENSITIVE.includes(id) ? "hidden" : "review"
  writeContent(lng, id, { _meta: { status }, questions: {} })
  created.push(id)
  if (status === "hidden") hidden.push(id)
}
console.log(`${lng}: created ${created.length}, already existed ${kept}`)
console.log(`hidden until a scholar approves (${hidden.length}): ${hidden.join(", ")}`)
