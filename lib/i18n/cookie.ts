import { LOCALE_COOKIE, isLocale, type Locale } from "@/lib/i18n/config"

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

// Browser only. Returns the saved language, or null when none was chosen yet.
export function readLocaleCookie(): Locale | null {
  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(`${LOCALE_COOKIE}=`))
  const value = match?.slice(LOCALE_COOKIE.length + 1)
  return isLocale(value) ? value : null
}

// Browser only. The server reads this same cookie on pages that need it (quiz page).
export function writeLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; max-age=${ONE_YEAR_SECONDS}; path=/; samesite=lax`
}

// First visit, no cookie: use the browser's language if we have it.
export function detectBrowserLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0]
    if (isLocale(base)) return base
  }
  return null
}
