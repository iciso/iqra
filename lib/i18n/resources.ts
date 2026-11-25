import en from "@/locales/en/common.json"
import bn from "@/locales/bn/common.json"
import ta from "@/locales/ta/common.json"
import type { Locale } from "@/lib/i18n/config"

// All three UI string files are small, so they ship in the client bundle.
// That keeps every page static: no cookie or header is read on the server.
export const resources: Record<Locale, { common: typeof en }> = {
  en: { common: en },
  bn: { common: bn },
  ta: { common: ta },
}
