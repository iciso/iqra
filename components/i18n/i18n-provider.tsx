"use client"

import type React from "react"

import { useEffect } from "react"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize i18n on client side only
  }, [])

  return <>{children}</>
}
