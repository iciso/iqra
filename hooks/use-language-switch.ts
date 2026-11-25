"use client"

import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import { isLocale } from "@/lib/i18n/config"
import { writeLocaleCookie } from "@/lib/i18n/cookie"
import { useLocale } from "@/lib/i18n/locale-context"

/** The current language and the handler the switcher calls when a new one is picked. */
const useLanguageSwitch = () => {
  const { t } = useTranslation()
  const { locale: current, setLocale } = useLocale()
  const router = useRouter()

  const change = (value: string) => {
    if (!isLocale(value)) return
    writeLocaleCookie(value)
    setLocale(value)
    // Server-rendered parts (the quiz page) read the cookie, so ask them to render again.
    router.refresh()
  }

  return { t, current, change }
}

export default useLanguageSwitch
