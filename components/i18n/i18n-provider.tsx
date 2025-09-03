"use client"

import { type ReactNode, Suspense, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import { getI18n } from "./i18n"

export function I18nProvider({ children }: { children: ReactNode }) {
  const i18n = getI18n()

  // Ensure initialization on mount on the client
  useEffect(() => {
    getI18n()
  }, [])

  return (
    <Suspense fallback={<div className="p-4 text-sm text-muted-foreground">Loading translations…</div>}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  )
}
