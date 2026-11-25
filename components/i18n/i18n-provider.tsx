"use client"

import { useMemo, type ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import useI18nInstance from "@/hooks/use-i18n-instance"
import { LocaleContext } from "@/lib/i18n/locale-context"

/** Gives every client component t(). Pages stay static: the server renders English. */
const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { i18n, locale, setLocale } = useI18nInstance()
  const localeValue = useMemo(() => ({ locale, setLocale }), [locale, setLocale])
  return (
    <LocaleContext.Provider value={localeValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  )
}

export default I18nProvider
