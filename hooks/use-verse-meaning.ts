"use client"

import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

export type VerseRef = { sura: number; aya: number }
export type VerseState = VerseRef & { status: "loading" | "ready"; translation: string }

const MAX_VERSES = 3
const ENDPOINT = "https://quranenc.com/api/v1/translation/aya/bengali_zakaria"
const memory = new Map<string, string>()

/** Finds references such as (78:13), 78:13 or (2:255-257); a range expands to its ayas, 3 at most in all. */
export const parseVerseRefs = (text: string): VerseRef[] => {
  const found: VerseRef[] = []
  const seen = new Set<string>()
  const pattern = /(?<![\d:.])(\d{1,3}):(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?(?![\d:])/g
  for (const m of text.matchAll(pattern)) {
    const sura = Number(m[1])
    const from = Number(m[2])
    const to = m[3] ? Number(m[3]) : from
    if (sura < 1 || sura > 114 || from < 1 || from > 286 || to < from) continue
    for (let aya = from; aya <= to && aya < from + MAX_VERSES; aya++) {
      const key = `${sura}:${aya}`
      if (seen.has(key)) continue
      seen.add(key)
      found.push({ sura, aya })
      if (found.length >= MAX_VERSES) return found
    }
  }
  return found
}

const readStored = (key: string): string | undefined => {
  try {
    return window.sessionStorage.getItem(`verse:${key}`) ?? undefined
  } catch {
    return undefined
  }
}

const writeStored = (key: string, value: string) => {
  try {
    window.sessionStorage.setItem(`verse:${key}`, value)
  } catch {
    // storage full or blocked: the in-memory copy still works
  }
}

const fetchTranslation = async (ref: VerseRef): Promise<string | undefined> => {
  const key = `${ref.sura}:${ref.aya}`
  const cached = memory.get(key) ?? readStored(key)
  if (cached) {
    memory.set(key, cached)
    return cached
  }
  const res = await fetch(`${ENDPOINT}/${ref.sura}/${ref.aya}`)
  if (!res.ok) return undefined
  const body = (await res.json()) as { result?: { translation?: string } }
  const translation = body.result?.translation
  if (!translation) return undefined
  memory.set(key, translation)
  writeStored(key, translation)
  return translation
}

/** Bangla verse meanings for the references in `text`; empty unless the UI language is Bangla. */
const useVerseMeaning = (text: string) => {
  const { t, i18n } = useTranslation()
  const isBangla = i18n.resolvedLanguage === "bn"
  const refs = useMemo(() => (isBangla ? parseVerseRefs(text) : []), [isBangla, text])
  const [loaded, setLoaded] = useState<{ key: string; items: VerseState[] | null }>({ key: "", items: null })
  const refsKey = refs.map((r) => `${r.sura}:${r.aya}`).join(",")

  useEffect(() => {
    if (refs.length === 0) return
    let cancelled = false
    Promise.all(refs.map(fetchTranslation))
      .then((all) => {
        if (cancelled) return
        const items = refs.flatMap((r, i) => {
          const translation = all[i]
          return translation ? [{ ...r, status: "ready" as const, translation }] : []
        })
        setLoaded({ key: refsKey, items })
      })
      .catch(() => {
        if (!cancelled) setLoaded({ key: refsKey, items: [] })
      })
    return () => {
      cancelled = true
    }
  }, [refs, refsKey])

  const settled = loaded.key === refsKey ? loaded.items : null
  const loading = refs.length > 0 && settled === null
  return { t, refs, verses: settled ?? [], loading }
}

export default useVerseMeaning
