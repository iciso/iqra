"use client"

import { useEffect, useState } from "react"
import { createInstance } from "i18next"
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config"
import { resources } from "@/lib/i18n/resources"
import { detectBrowserLocale, readLocaleCookie } from "@/lib/i18n/cookie"

const createI18n = () => {
  const instance = createInstance()
  // initAsync: false + bundled resources = ready on the first render, so the server HTML
  // (English) and the first client render match.
  void instance.init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: [...LOCALES],
    defaultNS: "common",
    ns: ["common"],
    initAsync: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  })
  return instance
}

/**
 * One i18next instance for the app. The server always renders English; after mount the
 * saved language (cookie `iqra-lang`, else the browser language) is applied and
 * <html lang> follows every change. No cookie is read on the server, so pages stay static.
 */
const useI18nInstance = () => {
  const [i18n] = useState(createI18n)

  useEffect(() => {
    const syncHtmlLang = (lng: string) => {
      document.documentElement.lang = lng
    }
    i18n.on("languageChanged", syncHtmlLang)

    const wanted = readLocaleCookie() ?? detectBrowserLocale()
    if (wanted && wanted !== i18n.language) void i18n.changeLanguage(wanted)

    return () => i18n.off("languageChanged", syncHtmlLang)
  }, [i18n])

  return i18n
}

export default useI18nInstance
