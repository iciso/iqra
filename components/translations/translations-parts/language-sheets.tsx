"use client"

import { Download, FileSpreadsheet } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { nativeName, type Locale } from "@/lib/i18n/config"

type SheetSubject = { id: string; name: string; awaiting: boolean }

export type LanguageSheetsProps = {
  id: string
  lng: Exclude<Locale, "en">
  subjects: SheetSubject[]
}

const sheetHref = (lng: string, cat: string) =>
  `/api/review-sheet?lng=${encodeURIComponent(lng)}&cat=${encodeURIComponent(cat)}`

// One language: the "all subjects" download, then the subjects waiting for a scholar, then the rest.
const LanguageSheets = ({ id, lng, subjects }: LanguageSheetsProps) => {
  const { t } = useTranslation("translations")
  const nameOf = (subject: SheetSubject) => t(`${subject.id}.name`, { ns: "subjects", defaultValue: subject.name })

  const groups = [
    { key: "awaiting", title: t("awaitingTitle"), lede: t("awaitingLede"), items: subjects.filter((s) => s.awaiting) },
    { key: "others", title: t("othersTitle"), lede: t("othersLede"), items: subjects.filter((s) => !s.awaiting) },
  ].filter((group) => group.items.length > 0)

  return (
    <section aria-labelledby={id} className="rounded-xl border border-green-100 p-4 sm:p-6 dark:border-green-900/60">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id={id} lang={lng} className="font-heading text-2xl font-bold text-green-900 dark:text-green-100">
          {nativeName[lng]}
        </h2>
        <Button asChild size="lg" className="min-h-11 w-full bg-green-700 px-5 text-white hover:bg-green-800 sm:w-auto dark:bg-green-600 dark:hover:bg-green-500">
          <a href={sheetHref(lng, "all")} download>
            <FileSpreadsheet aria-hidden="true" />
            {t("downloadAll")}
          </a>
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{t("downloadAllHint", { n: subjects.length })}</p>

      {groups.map((group) => (
        <div key={group.key} className="mt-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-green-900 dark:text-green-200">
            {group.key === "awaiting" && <span className="h-2 w-2 shrink-0 rounded-full bg-red-700 dark:bg-red-400" aria-hidden="true" />}
            {group.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{group.lede}</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((subject) => (
              <li key={subject.id} className="flex min-w-0 items-center justify-between gap-2 rounded-lg border border-border bg-background py-1 pl-3 pr-1">
                <span className="min-w-0 break-words text-sm font-medium text-foreground">{nameOf(subject)}</span>
                <a
                  href={sheetHref(lng, subject.id)}
                  download
                  aria-label={t("downloadOne", { name: nameOf(subject) })}
                  className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-3 text-sm font-medium text-green-700 hover:bg-green-50 hover:text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 dark:text-green-400 dark:hover:bg-green-950 dark:hover:text-green-300"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t("download")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default LanguageSheets
