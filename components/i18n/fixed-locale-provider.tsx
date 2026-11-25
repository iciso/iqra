"use client"

import { useMemo, type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import { createI18n } from "@/lib/i18n/instance"
import type { Locale } from "@/lib/i18n/config"

/**
 * For a dynamic page that already rendered on the server in `lng` (app/quiz/page.tsx reads the
 * cookie): client components inside use `lng` from the very first render, so they match the
 * server HTML and never flash English. After a switch, router.refresh() sends the new `lng`.
 */
const FixedLocaleProvider = ({ lng, children }: { lng: Locale; children: ReactNode }) => {
  const i18n = useMemo(() => createI18n(lng), [lng])
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default FixedLocaleProvider
