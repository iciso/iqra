export interface LeaderboardEntry {
  id?: string
  name: string
  score: number
  totalQuestions: number
  percentage: number
  date: string
  category?: string
  difficulty?: string
  challenge?: string
  submittedAt?: string
}

const STORAGE_KEY = "quranQuizLeaderboard"

// Check if code is running in browser
const isBrowser = typeof window !== "undefined"

// Raw entries exactly as stored (never merged).
function readRaw(): LeaderboardEntry[] {
  if (!isBrowser) return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("[v0] Error reading leaderboard:", error)
    return []
  }
}

// Merged view for display: one row per player.
export function getLeaderboard(): LeaderboardEntry[] {
  return deduplicateAndMergeLeaderboard(readRaw())
}

// Deduplicate and merge leaderboard entries by name
// Aggregates scores and total questions for the same player
export function deduplicateAndMergeLeaderboard(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const playerMap = new Map<string, {
    entries: LeaderboardEntry[]
    totalScore: number
    totalQuestions: number
  }>()

  entries.forEach((entry) => {
    const playerName = entry.name.toLowerCase().trim()
    const existing = playerMap.get(playerName)

    if (!existing) {
      playerMap.set(playerName, {
        entries: [entry],
        totalScore: entry.score,
        totalQuestions: entry.totalQuestions,
      })
    } else {
      existing.entries.push(entry)
      existing.totalScore += entry.score
      existing.totalQuestions += entry.totalQuestions
    }
  })

  const deduplicated = Array.from(playerMap.values()).map(({ entries, totalScore, totalQuestions }) => {
    const firstEntry = entries[0]
    const aggregatedPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0

    return {
      ...firstEntry,
      name: firstEntry.name, // Keep original case
      score: totalScore,
      totalQuestions,
      percentage: aggregatedPercentage,
      submittedAt: new Date().toISOString(),
    }
  })

  deduplicated.sort((a, b) => {
    if (b.percentage !== a.percentage) {
      return b.percentage - a.percentage
    }
    if (b.score !== a.score) {
      return b.score - a.score
    }
    return new Date(b.submittedAt || b.date).getTime() - new Date(a.submittedAt || a.date).getTime()
  })

  return deduplicated
}

// Adds an entry to the LOCAL leaderboard and remembers the player's name.
// It deliberately does NOT write to the database. submitQuizResult() in
// lib/supabase-queries.ts is the only database writer.
export async function addToLeaderboard(entry: LeaderboardEntry): Promise<void> {
  if (!isBrowser) return

  try {
    // Read RAW entries so individual plays (with categories) are preserved.
    const leaderboard = readRaw()

    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      ...entry,
      date: entry.date || new Date().toLocaleString(),
      submittedAt: new Date().toISOString(),
    }

    // Remember the name for future sessions
    if (entry.name) {
      try {
        localStorage.setItem("userNameForLeaderboard", entry.name)
      } catch (e) {
        console.warn("[v0] Could not save name to localStorage:", e)
      }
    }

    leaderboard.push(newEntry)

    // Highest percentage, then highest score, then newest
    leaderboard.sort((a, b) => {
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage
      }
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return new Date(b.submittedAt || b.date).getTime() - new Date(a.submittedAt || a.date).getTime()
    })

    // Keep only the top 100 entries
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leaderboard.slice(0, 100)))
  } catch (error) {
    console.error("[v0] Error adding to leaderboard:", error)
  }
}

// Clear leaderboard (for testing)
export function clearLeaderboard(): void {
  if (!isBrowser) return

  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error("[v0] Error clearing leaderboard:", error)
  }
}
