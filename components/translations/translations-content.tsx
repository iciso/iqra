"use client"

import Link from "next/link"
import { Home } from "lucide-react"
import { Trans, useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/shared/page-header"
import LanguageSheets, { type LanguageSheetsProps } from "@/components/translations/translations-parts/language-sheets"
import { pageContainerClass } from "@/lib/page-layout"

type TranslationsContentProps = {
  languages: Omit<LanguageSheetsProps, "id">[]
}

const STEPS = ["step1", "step2", "step3", "step4"] as const

const aboutLink = (
  <Link
    href="/about"
    className="font-medium text-green-700 underline underline-offset-4 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
  />
)

// /translations: how to check the Bangla and Tamil text, and the Excel sheets to do it with.
// app/translations/page.tsx stays a static server page and passes the subject lists in.
const TranslationsContent = ({ languages }: TranslationsContentProps) => {
  const { t } = useTranslation("translations")

  return (
    <div className={pageContainerClass}>
      <PageHeader
        title={t("title")}
        subtitle={t("intro")}
        actions={
          <Button asChild variant="outline" className="min-h-11">
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              {t("home")}
            </Link>
          </Button>
        }
      />

      <section aria-labelledby="translations-how" className="mb-10 max-w-3xl">
        <h2 id="translations-how" className="font-heading text-xl font-bold text-green-900 dark:text-green-200">
          {t("howTitle")}
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-foreground sm:text-base">
          {STEPS.map((step) => (
            <li key={step}>
              <Trans t={t} i18nKey={step} components={{ yellow: <mark className="rounded bg-yellow-100 px-1 text-yellow-950" />, about: aboutLink }} />
            </li>
          ))}
        </ol>
      </section>

      <div className="space-y-12">
        {languages.map((language) => (
          <LanguageSheets key={language.lng} id={`sheets-${language.lng}`} {...language} />
        ))}
      </div>
    </div>
  )
}

export default TranslationsContent
