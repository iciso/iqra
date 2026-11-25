import "server-only"
import { cookies } from "next/headers"
import { createInstance, type TFunction } from "i18next"
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, isLocale, type Locale } from "@/lib/i18n/config"
import { resources } from "@/lib/i18n/resources"

/**
 * The language saved in the `iqra-lang` cookie, else English.
 * Reading cookies makes a route dynamic: call this ONLY from app/quiz/page.tsx
 * (already dynamic), never from a layout or a static page.
 */
export async function getRequestLocale(): Promise<Locale> {
  const store = await cookies()
  const value = store.get(LOCALE_COOKIE)?.value
  return isLocale(value) ? value : DEFAULT_LOCALE
}

/** A t() for server components, built from the same bundled common.json files the client uses. */
export function getServerT(lng: Locale): TFunction {
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
  })
  return instance.t
}
