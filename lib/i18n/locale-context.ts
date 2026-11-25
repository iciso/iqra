"use client"

import { createContext, useContext } from "react"
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config"

interface LocaleContextValue {
  // The language the reader picked (cookie iqra-lang, else the browser language).
  locale: Locale
  // Switches the UI only; the language switcher writes the cookie itself.
  setLocale: (next: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
})

/** The reader's language and the function that switches it. */
export const useLocale = () => useContext(LocaleContext)
