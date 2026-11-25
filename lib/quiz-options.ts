// Options like "All of the above" or "Both A and B" only make sense in their
// original place, so they are kept at the end (in their original order).
// Matched against the ENGLISH option text; translated questions carry `pinned` instead.
export const PINNED_OPTION = /(all|none|both|neither) of (the above|these|them)|^\s*(both\s+)?[a-d]\s*(and|&|,)\s*[a-d]\b/i

export function isPinnedOption(option: string): boolean {
  return PINNED_OPTION.test(option)
}

// Fisher–Yates shuffle – returns a new array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Shuffles the options, keeping pinned ones at the end in their original order.
 * `pinned[i]` says whether options[i] is pinned; without it the English regex decides.
 */
export function shuffleOptions(options: string[], pinned?: boolean[]): string[] {
  const isPinned = (option: string, index: number) =>
    pinned && pinned.length === options.length ? pinned[index] : isPinnedOption(option)
  const movable = options.filter((o, i) => !isPinned(o, i))
  const kept = options.filter((o, i) => isPinned(o, i))
  return [...shuffleArray(movable), ...kept]
}
