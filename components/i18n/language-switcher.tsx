"use client"

import * as React from "react"

// Minimal, framework-agnostic language switcher.
// It stores the selection for later reads in your app (localStorage + cookie).
// Replace with your i18n integration as needed.
export type LanguageSwitcherProps = {
  available?: string[]
  labels?: Record<string, string>
  storageKey?: string
  className?: string
}

function setCookie(name: string, value: string, days = 365) {
  try {
    const d = new Date()
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = "expires=" + d.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
  } catch {}
}

export function LanguageSwitcher({
  available = ["en", "ta"],
  labels = { en: "English", ta: "தமிழ்" },
  storageKey = "iqra_locale",
  className,
}: LanguageSwitcherProps) {
  const [lang, setLang] = React.useState<string>(() => {
    if (typeof window === "undefined") return available[0]
    const fromStorage = window.localStorage.getItem(storageKey)
    if (fromStorage && available.includes(fromStorage)) return fromStorage
    // Fallback: navigator language
    const nav = navigator.language?.split("-")?.[0]
    return available.includes(nav) ? nav : available[0]
  })

  React.useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(storageKey, lang)
    setCookie(storageKey, lang)
  }, [lang, storageKey])

  return (
    <div className={className}>
      <label htmlFor="lang" className="sr-only">
        Language
      </label>
      <select
        id="lang"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
        aria-label="Select language"
      >
        {available.map((code) => (
          <option key={code} value={code}>
            {labels[code] ?? code}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
