"use client"

import { GitFork } from "lucide-react"
import { useTranslation } from "react-i18next"

const DecisionPill = () => {
  const { t } = useTranslation("how")
  return (
  <p
    data-flow-card="decision"
    className="mx-auto flex w-fit items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-900 dark:border-green-700 dark:bg-green-900/40 dark:text-green-100"
  >
    <GitFork aria-hidden="true" className="h-4 w-4 text-green-700 dark:text-green-300" />
    {t("flow.decision")}
  </p>
  )
}

export default DecisionPill
