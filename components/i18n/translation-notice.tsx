"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useTranslationNotice } from "@/hooks/use-translation-notice"

const REPORT_URL = "https://github.com/iciso/iqra/issues/new?title=Translation%20mistake"

const noticeLinkClass =
  "inline-flex min-h-11 items-center text-sm font-medium text-green-800 underline underline-offset-4 hover:text-green-950 dark:text-green-300 dark:hover:text-green-100"

/** Small corner card telling Bangla and Tamil readers that translation is still under way. */
const TranslationNotice = () => {
  const { t } = useTranslation("common")
  const { locale, visible, state, setState } = useTranslationNotice()

  if (!visible) return null

  if (state === "minimized") {
    return (
      <button
        type="button"
        lang={locale}
        aria-expanded={false}
        onClick={() => setState(locale, "open")}
        className="fixed bottom-4 left-4 z-40 inline-flex h-11 max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-green-700 bg-green-50 px-4 text-[11px] font-semibold uppercase tracking-widest text-green-900 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-50 dark:focus-visible:ring-green-400"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600 dark:bg-green-400" aria-hidden="true" />
        <span className="truncate">{t("notice.label")}</span>
      </button>
    )
  }

  return (
    <aside
      role="status"
      lang={locale}
      className="fixed bottom-4 left-4 right-4 z-40 rounded-lg border border-l-4 border-green-700 bg-green-50 p-4 pr-12 text-green-950 shadow-lg dark:border-green-800 dark:border-l-green-600 dark:bg-green-950 dark:text-green-50 sm:right-auto sm:w-[300px]"
    >
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-green-800 dark:text-green-300">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600 dark:bg-green-400" aria-hidden="true" />
        {t("notice.label")}
      </p>
      <p className="mt-2 font-heading text-base font-bold leading-snug">{t("notice.title")}</p>
      <p className="mt-1 text-sm leading-relaxed text-green-900 dark:text-green-100">{t("notice.body")}</p>
      <div className="mt-3 flex flex-wrap gap-x-4">
        <a href={REPORT_URL} target="_blank" rel="noopener noreferrer" className={noticeLinkClass}>
          {t("notice.report")}
        </a>
        <Link href="/translations" className={noticeLinkClass}>
          {t("notice.check")}
        </Link>
      </div>
      <button
        type="button"
        aria-expanded={true}
        onClick={() => setState(locale, "minimized")}
        aria-label={t("notice.minimize")}
        className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-lg text-green-900 hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 dark:text-green-100 dark:hover:bg-green-900 dark:focus-visible:ring-green-400"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </aside>
  )
}

export default TranslationNotice
