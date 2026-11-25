"use client"

import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { isLocale } from "@/lib/i18n/config"
import { writeLocaleCookie } from "@/lib/i18n/cookie"

/** The current language and the handler the switcher calls when a new one is picked. */
const useLanguageSwitch = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const current = isLocale(i18n.resolvedLanguage) ? i18n.resolvedLanguage : "en"

  const change = (value: string) => {
    if (!isLocale(value)) return
    writeLocaleCookie(value)
    void i18n.changeLanguage(value)
    // Server-rendered parts (the quiz page) read the cookie, so ask them to render again.
    router.refresh()
  }

  return { t, current, change }
}

export default useLanguageSwitch
