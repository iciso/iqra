import { createInstance, type i18n as I18n } from "i18next"
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config"
import { resources } from "@/lib/i18n/resources"

/**
 * One i18next instance fixed to ONE language. Bundled resources + initAsync: false make it
 * ready on the first render. Never call changeLanguage() on it: switching language means
 * handing React a different instance, so React sees the change (see hooks/use-i18n-instance.ts).
 */
export function createI18n(lng: Locale): I18n {
  const instance = createInstance()
  void instance.init({
    resources,
    lng,
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
