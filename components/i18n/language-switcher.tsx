"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ta" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleLanguage} className="ml-2 bg-transparent">
      {i18n.language === "en" ? "தமிழ்" : "English"}
    </Button>
  )
}

export { LanguageSwitcher as default }
