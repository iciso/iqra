"use client"

import i18next, { type i18n as I18nInstance } from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import HttpBackend from "i18next-http-backend"

// Initialize i18n only once on the client.
// We use HttpBackend to load translation files from /public/locales/{lng}/{ns}.json
// and LanguageDetector to persist choice via cookie/localStorage.
let initialized = false

export function getI18n(): I18nInstance {
  if (!initialized && typeof window !== "undefined") {
    i18next
      .use(HttpBackend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: "en",
        supportedLngs: ["en", "ta"],
        defaultNS: "common",
        ns: ["common"],
        backend: {
          // served by Next.js from public/
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        detection: {
          order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
          caches: ["cookie", "localStorage"],
          lookupQuerystring: "lang",
          cookieMinutes: 60 * 24 * 365,
        },
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: true,
        },
      })
    initialized = true
  }
  return i18next
}
