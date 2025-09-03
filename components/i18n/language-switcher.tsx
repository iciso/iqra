"use client"

import { useEffect, useState } from "react"
import i18next from "i18next"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

type SupportedLang = "en" | "ta"

export function LanguageSwitcher({ align = "left" }: { align?: "left" | "right" }) {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState<SupportedLang>((i18n.language as SupportedLang) || "en")

  useEffect(() => {
    const handler = () => {
      const current = (i18next.language as SupportedLang) || "en"
      setLang(current)
    }
    i18next.on("languageChanged", handler)
    return () => {
      i18next.off("languageChanged", handler)
    }
  }, [])

  async function changeLanguage(next: SupportedLang) {
    await i18n.changeLanguage(next)
    setLang(next)
  }

  return (
    <div className={`flex items-center gap-2 ${align === "right" ? "justify-end" : "justify-start"}`}>
      <Button
        variant={lang === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("en")}
        aria-pressed={lang === "en"}
      >
        English
      </Button>
      <Button
        variant={lang === "ta" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("ta")}
        aria-pressed={lang === "ta"}
      >
        {"தமிழ்"}
      </Button>
    </div>
  )
}

export default LanguageSwitcher
