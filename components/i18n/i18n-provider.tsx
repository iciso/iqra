"use client"

import { type ReactNode, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Ensure i18n is initialized on the client
    if (!i18n.isInitialized) {
      i18n.init()
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
