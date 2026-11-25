import TranslationsContent from "@/components/translations/translations-content"
import { pageMetadata } from "@/lib/seo"
import { awaitingFirst, REVIEW_LOCALES, reviewCategories } from "@/lib/review-sheet/files.server"
import { subjects } from "@/lib/subjects"

export const metadata = pageMetadata({
  title: "Help check our translations",
  description: "Download the Bangla and Tamil quiz text as an Excel sheet, type your corrections and send it back to the IQRA team.",
  path: "/translations",
})

// Static: the subject list and which subjects wait for a scholar are read from locales/ at build time.
// The sheets themselves are built per download by app/api/review-sheet/route.ts.
const TranslationsPage = () => {
  const available = new Set(reviewCategories())
  const ordered = subjects.filter((s) => available.has(s.slug))
  const englishName = Object.fromEntries(ordered.map((s) => [s.slug, s.name]))
  const languages = REVIEW_LOCALES.map((lng) => ({
    lng,
    subjects: awaitingFirst(lng, ordered.map((s) => s.slug)).map((c) => ({ ...c, name: englishName[c.id] })),
  }))

  return <TranslationsContent languages={languages} />
}

export default TranslationsPage
