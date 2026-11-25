"use client"

import type { ReactNode } from "react"
import { I18nextProvider } from "react-i18next"
import useI18nInstance from "@/hooks/use-i18n-instance"

/** Gives every client component t(). Pages stay static: the server renders English. */
const I18nProvider = ({ children }: { children: ReactNode }) => {
  const i18n = useI18nInstance()
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default I18nProvider
