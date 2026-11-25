"use client"

import { useCallback, useSyncExternalStore } from "react"
import { useLocale } from "@/lib/i18n/locale-context"
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config"

// Holds {lng, state}: the language the reader last chose a state for, and that state.
export const NOTICE_KEY = "iqra-translation-notice"

export type NoticeState = "open" | "minimized"

// Same-tab listeners: the browser "storage" event only fires in other tabs.
const listeners = new Set<() => void>()

function subscribe(onChange: () => void) {
  listeners.add(onChange)
  window.addEventListener("storage", onChange)
  return () => {
    listeners.delete(onChange)
    window.removeEventListener("storage", onChange)
  }
}

// A string, so useSyncExternalStore sees an unchanged value as equal.
function readRaw(): string {
  try {
    return window.localStorage.getItem(NOTICE_KEY) ?? ""
  } catch {
    return ""
  }
}

// null on the server and during hydration, so the notice is never in the first render.
const readServer = () => null

function parse(raw: string): { lng?: string; state?: string } {
  try {
    const value: unknown = JSON.parse(raw)
    return value && typeof value === "object" ? value : {}
  } catch {
    return {}
  }
}

/**
 * The "translation in progress" notice: nothing in English and nothing before mount. In another
 * language it starts open (a pill on a phone); the reader can minimize it to a pill and open it again. The choice is
 * remembered per language, so a different language starts open again.
 */
export function useTranslationNotice() {
  const { locale } = useLocale()
  const raw = useSyncExternalStore<string | null>(subscribe, readRaw, readServer)

  const saved = raw === null ? {} : parse(raw)
  const visible = raw !== null && locale !== DEFAULT_LOCALE
  // No choice saved for this language yet: open on a wide screen, but a pill on a phone, where
  // the open card would sit on top of the quiz answer buttons.
  const fallback: NoticeState = visible && window.matchMedia("(min-width: 640px)").matches ? "open" : "minimized"
  const chosen = saved.lng === locale && (saved.state === "open" || saved.state === "minimized")
  const state: NoticeState = chosen ? (saved.state as NoticeState) : fallback

  const setState = useCallback((lng: Locale, next: NoticeState) => {
    try {
      window.localStorage.setItem(NOTICE_KEY, JSON.stringify({ lng, state: next }))
    } catch {
      // Storage blocked: the choice lasts until the page reloads.
    }
    listeners.forEach((notify) => notify())
  }, [])

  return { locale, visible, state, setState }
}
