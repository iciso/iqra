"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Lang = "en" | "ta"

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en"
  const stored = (localStorage.getItem("lang") || "").toLowerCase()
  if (stored === "ta" || stored === "en") return stored as Lang
  const cookieMatch = document.cookie.match(/(?:^|; )lang=([^;]+)/)
  if (cookieMatch && (cookieMatch[1] === "en" || cookieMatch[1] === "ta")) {
    return cookieMatch[1] as Lang
  }
  return "en"
}

function setLang(lang: Lang) {
  if (typeof window === "undefined") return
  localStorage.setItem("lang", lang)
  document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`
}

export function LanguageSwitcher() {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    setLangState(getInitialLang())
  }, [])

  const handleChange = (l: Lang) => {
    setLang(l)
    setLangState(l)
    // If your app uses a router-aware i18n, navigate or refresh here.
    // location.reload()
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={lang === "en" ? "default" : "outline"}
        onClick={() => handleChange("en")}
        aria-pressed={lang === "en"}
      >
        English
      </Button>
      <Button
        variant={lang === "ta" ? "default" : "outline"}
        onClick={() => handleChange("ta")}
        aria-pressed={lang === "ta"}
      >
        தமிழ்
      </Button>
    </div>
  )
}

export default LanguageSwitcher
