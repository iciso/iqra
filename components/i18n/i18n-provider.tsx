"use client"

import type React from "react"

import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

interface I18nProviderProps {
  children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Initialize i18n on client side
    if (!i18n.isInitialized) {
      i18n.init()
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
