"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initializeI18n = async () => {
      try {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem("language")
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ta")) {
          await i18n.changeLanguage(savedLanguage)
        }
        setIsInitialized(true)
      } catch (error) {
        console.error("Failed to initialize i18n:", error)
        setIsInitialized(true) // Still render even if initialization fails
      }
    }

    initializeI18n()
  }, [])

  if (!isInitialized) {
    return <div>Loading...</div>
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
