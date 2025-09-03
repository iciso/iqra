"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggle = () => {
    const next = i18n.language?.startsWith("ta") ? "en" : "ta"
    i18n.changeLanguage(next)
  }

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Lang:</span>
      <Button variant="outline" size="sm" onClick={toggle} aria-label="Toggle language">
        {i18n.language?.startsWith("ta") ? "தமிழ்" : "EN"}
      </Button>
    </div>
  )
}

export default LanguageSwitcher
