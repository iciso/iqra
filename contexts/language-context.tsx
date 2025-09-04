"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTranslation, getCurrentLanguage, setLanguage, type Translation } from "@/lib/translations"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: keyof Translation) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = getCurrentLanguage()
    setCurrentLanguage(savedLanguage)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener)
    }
  }, [])

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    setCurrentLanguage(lang)
  }

  const t = (key: keyof Translation) => {
    return getTranslation(key, language)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
