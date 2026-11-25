"use client"

import { useTranslation } from "react-i18next"

const OrDivider = () => {
  const { t } = useTranslation("how")
  return (
  <div
    aria-hidden="true"
    className="flex items-center gap-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400"
  >
    <span className="h-px flex-1 bg-green-200 dark:bg-green-800" />
    {t("flow.or")}
    <span className="h-px flex-1 bg-green-200 dark:bg-green-800" />
  </div>
  )
}

export default OrDivider
