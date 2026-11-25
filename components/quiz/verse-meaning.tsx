"use client"

import useVerseMeaning from "@/hooks/use-verse-meaning"

const creditUrl = (sura: number, aya: number) =>
  `https://quranenc.com/bn/browse/bengali_zakaria/${sura}#${aya}`

/** Bangla meaning of the Quran verses cited in an explanation, shown only when the UI is in Bangla. */
export default function VerseMeaning({ text }: { text: string }) {
  const { t, refs, verses, loading } = useVerseMeaning(text)

  if (refs.length === 0) return null

  if (loading) {
    return (
      <div className="mt-3 space-y-2" aria-hidden="true">
        {refs.map((r) => (
          <div key={`${r.sura}:${r.aya}`} className="space-y-1.5 rounded-md border border-border bg-muted/40 p-3">
            <div className="h-3 w-12 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    )
  }

  if (verses.length === 0) return null

  return (
    <div lang="bn" className="mt-3 space-y-2">
      {verses.map((v) => (
        <figure key={`${v.sura}:${v.aya}`} className="rounded-md border border-border bg-muted/40 p-3">
          <figcaption className="text-xs font-medium text-muted-foreground">
            {v.sura}:{v.aya}
          </figcaption>
          <blockquote className="mt-1 text-sm leading-relaxed text-foreground">{v.translation}</blockquote>
          <p className="mt-1 text-xs text-muted-foreground">
            <a
              href={creditUrl(v.sura, v.aya)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {t("verse.credit")}
            </a>
          </p>
        </figure>
      ))}
    </div>
  )
}
