// Languages the UI can be shown in. A locale is the folder name under locales/.
export const LOCALES = ["en", "bn", "ta"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

// The browser keeps the chosen language here (set by the language switcher).
export const LOCALE_COOKIE = "iqra-lang"

// Each language written in its own script, so a reader can always find theirs.
export const nativeName: Record<Locale, string> = {
  en: "English",
  bn: "বাংলা",
  ta: "தமிழ்",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.some((locale) => locale === value)
}
