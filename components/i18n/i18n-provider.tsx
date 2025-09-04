"use client"

import { useEffect, type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialize i18n and load saved language from localStorage
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ta")) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
