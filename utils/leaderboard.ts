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

// Check if code is running in browser
const isBrowser = typeof window !== "undefined"

// Get leaderboard from localStorage
export function getLeaderboard(): LeaderboardEntry[] {
  if (!isBrowser) return []

  try {
    const leaderboard = localStorage.getItem("quranQuizLeaderboard")
    const entries = leaderboard ? JSON.parse(leaderboard) : []
    return deduplicateAndMergeLeaderboard(entries)
  } catch (error) {
    console.error("[v0] Error getting leaderboard:", error)
    return []
  }
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

  // Convert to array with aggregated scores
  const deduplicated = Array.from(playerMap.values()).map(({ entries, totalScore, totalQuestions }) => {
    const firstEntry = entries[0]
    const aggregatedPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0
    
    return {
      ...firstEntry,
      name: firstEntry.name, // Keep original case
      score: totalScore,
      totalQuestions,
      percentage: aggregatedPercentage,
      submittedAt: new Date().toISOString(), // Update timestamp
    }
  })

  // Sort by aggregated percentage, then score
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

// Add entry to leaderboard (both localStorage and submit to API)
export async function addToLeaderboard(entry: LeaderboardEntry): Promise<void> {
  if (!isBrowser) return

  try {
    const leaderboard = getLeaderboard()

    // Prepare the entry with proper date formatting
    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      ...entry,
      date: entry.date || new Date().toLocaleString(),
      submittedAt: new Date().toISOString(),
    }

    // Save user's name to localStorage for persistence across sessions
    if (entry.name) {
      try {
        localStorage.setItem("userNameForLeaderboard", entry.name)
      } catch (e) {
        console.warn("[v0] Could not save name to localStorage:", e)
      }
    }

    // Add new entry
    leaderboard.push(newEntry)

    // Sort by percentage (highest first), then by score (highest first), then by date (newest first)
    leaderboard.sort((a, b) => {
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage
      }
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return new Date(b.submittedAt || b.date).getTime() - new Date(a.submittedAt || a.date).getTime()
    })

    // Keep only top 100 entries (increased from 10 to accommodate more players)
    const topEntries = leaderboard.slice(0, 100)

    // Save back to localStorage
    localStorage.setItem("quranQuizLeaderboard", JSON.stringify(topEntries))

    // Submit to API for database storage (fire and forget to not block UX)
    try {
      await fetch("/api/quiz/submit-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      })
      console.log("[v0] Quiz result submitted to Neon database")
    } catch (error) {
      console.error("[v0] Error submitting to API:", error)
      // Continue anyway - localStorage is already updated
    }
  } catch (error) {
    console.error("[v0] Error adding to leaderboard:", error)
  }
}

// Clear leaderboard (for testing)
export function clearLeaderboard(): void {
  if (!isBrowser) return

  try {
    localStorage.removeItem("quranQuizLeaderboard")
  } catch (error) {
    console.error("[v0] Error clearing leaderboard:", error)
  }
}
