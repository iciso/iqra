"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ta" : "en"
    i18n.changeLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{i18n.language === "en" ? "தமிழ்" : "English"}</span>
    </Button>
  )
}

export default LanguageSwitcher
