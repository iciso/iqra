"use client"

import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next"
import type { ContentStatus } from "@/types/quiz"

const ISSUES_URL = "https://github.com/iciso/iqra/issues/new"

const reportUrl = (categoryId: string, questionId?: string | number) => {
  const where = questionId != null ? `${categoryId} / ${questionId}` : categoryId
  return `${ISSUES_URL}?${new URLSearchParams({ title: `Translation mistake: ${where}` }).toString()}`
}

interface TranslationBannerProps {
  // _meta.status of the reader's language file; null = English or no file (nothing to show).
  status: ContentStatus | null
  categoryId: string
  questionId?: string | number
}

/** "Under review - report a mistake" for review translations; a note for subjects still hidden. */
const TranslationBanner = ({ status, categoryId, questionId }: TranslationBannerProps) => {
  const { t } = useTranslation()

  if (status !== "review" && status !== "hidden") return null

  return (
    <div
      role="note"
      className="mb-3 flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200"
    >
      <Languages className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
      {status === "hidden" ? (
        <p>{t("quiz.translation.hidden")}</p>
      ) : (
        <p>
          {t("quiz.translation.review")}{" "}
          <a
            href={reportUrl(categoryId, questionId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2"
          >
            {t("quiz.translation.report")}
          </a>
        </p>
      )}
    </div>
  )
}

export default TranslationBanner
