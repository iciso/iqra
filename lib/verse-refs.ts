export type VerseRef = { sura: number; aya: number }

export const MAX_VERSES = 3

/** Number of ayahs in each sura, 1 to 114 (Hafs count, 6236 in all). */
export const AYAH_COUNTS: readonly number[] = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
]

// sura:aya, optionally a range end: 2:255, 2:255-257, 2:255–257
const REF = String.raw`(\d{1,3}):(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?`
// Words that mark a Quran reference. আয়াত is written with য় (U+09DF) or য + nukta.
const WORD = String.raw`(?:qur['’]?an|surah?|ayah|কুরআন|সূরা|আ(?:য়|য়)াত)`

// "(78:13)", "(2:255-257)", "(Quran 2:255)", "(Q 2:255)", "(Surah 2:255)"
const IN_PARENS = new RegExp(String.raw`\(\s*(?:(?:${WORD}|q)\.?\s*)?${REF}\s*\)`, "giu")
// "Quran 2:255", "Surah 78:13", "সূরা 78:13": the word directly before the numbers
const AFTER_WORD = new RegExp(String.raw`(?<![\p{L}\p{M}])${WORD}\.?\s*${REF}(?![\d:])`, "giu")

/**
 * Quran references in `text`: only "(sura:aya)" in parentheses, or sura:aya directly after
 * Quran / Qur'an / Surah / Sura / Ayah or কুরআন / সূরা / আয়াত. A bare "10:30" is a clock time.
 * Each ayah must exist (AYAH_COUNTS). A range expands to its ayas; 3 at most in all.
 */
export const parseVerseRefs = (text: string): VerseRef[] => {
  const matches = [...text.matchAll(IN_PARENS), ...text.matchAll(AFTER_WORD)].sort(
    (a, b) => (a.index ?? 0) - (b.index ?? 0),
  )
  const found: VerseRef[] = []
  const seen = new Set<string>()
  for (const m of matches) {
    const sura = Number(m[1])
    const from = Number(m[2])
    const to = m[3] ? Number(m[3]) : from
    const count = AYAH_COUNTS[sura - 1]
    if (!count || from < 1 || to < from || to > count) continue
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
