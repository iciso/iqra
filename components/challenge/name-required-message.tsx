"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

// The name is set (and changed) on the Profile page.
export const NAME_PAGE = "/profile"

export function NameRequiredMessage({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation("challenges")
  return (
    <span>
      {t("name.required")}{" "}
      <Link
        href={NAME_PAGE}
        onClick={onNavigate}
        className="font-semibold underline underline-offset-2"
      >
        {t("name.goProfile")}
      </Link>
    </span>
  )
}
