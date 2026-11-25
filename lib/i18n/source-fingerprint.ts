/**
 * The fingerprint of the English a translation was made from. Each translated question in
 * locales/<lng>/<category>.json keeps it as "src"; when the English question, options or
 * explanation change, the fingerprint changes and the translation counts as stale.
 *
 * Shared by the server overlay (lib/i18n/content.server.ts), the review sheet
 * (lib/review-sheet/sheet.ts) and the tsx scripts, so it has no Next, server-only or fs imports.
 */
import { createHash } from "node:crypto"

/** The English fields that make up the fingerprint. */
export type EnglishSource = { question?: string; options?: readonly string[]; explanation?: string }

const SEP = String.fromCharCode(0x241f) // SYMBOL FOR UNIT SEPARATOR: never typed in quiz text

/** question, every option, explanation (empty when there is none), joined with U+241F. */
export function canonicalEnglish(e: EnglishSource): string {
  return [e.question ?? "", ...(e.options ?? []), e.explanation ?? ""].join(SEP)
}

/** First 8 hex characters of the sha1 of the canonical English. */
export function englishFingerprint(e: EnglishSource): string {
  return createHash("sha1").update(canonicalEnglish(e), "utf8").digest("hex").slice(0, 8)
}

/** True when the translation records a fingerprint and it is not the one of this English. Missing src = not stale. */
export function isStale(src: string | undefined, e: EnglishSource): boolean {
  return typeof src === "string" && src !== "" && src !== englishFingerprint(e)
}
