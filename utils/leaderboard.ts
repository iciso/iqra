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
    return leaderboard ? JSON.parse(leaderboard) : []
  } catch (error) {
    console.error("[v0] Error getting leaderboard:", error)
    return []
  }
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
