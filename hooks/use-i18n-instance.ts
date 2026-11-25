"use client"

import { startTransition, useCallback, useEffect, useState } from "react"
import type { i18n as I18n } from "i18next"
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config"
import { createI18n } from "@/lib/i18n/instance"
import { detectBrowserLocale, readLocaleCookie } from "@/lib/i18n/cookie"

const createAll = () => {
  const all = {} as Record<Locale, I18n>
  for (const lng of LOCALES) all[lng] = createI18n(lng)
  return all
}

/**
 * The app-wide language. Static pages are prerendered in English, so the first client render
 * is English too; after mount the saved language (cookie `iqra-lang`, else the browser
 * language) is applied and <html lang> follows it.
 *
 * One instance PER language instead of i18n.changeLanguage(): changeLanguage mutates the shared
 * instance outside React, so a Suspense boundary still waiting to hydrate (the streamed /quiz
 * page behind app/quiz/loading.tsx) hydrated against the NEW language while its server HTML was
 * English: React error #418. A new instance is a new context value, so React hydrates pending
 * boundaries with the old one first and applies the switch after.
 */
const useI18nInstance = () => {
  const [instances] = useState(createAll)
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  const setLocale = useCallback((next: Locale) => startTransition(() => setLocaleState(next)), [])

  useEffect(() => {
    const wanted = readLocaleCookie() ?? detectBrowserLocale()
    if (wanted && wanted !== DEFAULT_LOCALE) setLocale(wanted)
  }, [setLocale])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return { i18n: instances[locale], locale, setLocale }
}

export default useI18nInstance
