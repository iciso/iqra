export interface LeaderboardEntry {
  name: string
  score: number
  totalQuestions: number
  percentage: number
  date: string
  category?: string
  difficulty?: string
  challenge?: string
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
    console.error("Error getting leaderboard:", error)
    return []
  }
}

// Add entry to leaderboard
export function addToLeaderboard(entry: LeaderboardEntry): void {
  if (!isBrowser) return

  try {
    const leaderboard = getLeaderboard()

    // Add new entry
    leaderboard.push(entry)

    // Sort by percentage (highest first)
    leaderboard.sort((a, b) => b.percentage - a.percentage)

    // Keep only top 10 entries
    const topEntries = leaderboard.slice(0, 10)

    // Save back to localStorage
    localStorage.setItem("quranQuizLeaderboard", JSON.stringify(topEntries))
  } catch (error) {
    console.error("Error adding to leaderboard:", error)
  }
}

// Clear leaderboard (for testing)
export function clearLeaderboard(): void {
  if (!isBrowser) return

  try {
    localStorage.removeItem("quranQuizLeaderboard")
  } catch (error) {
    console.error("Error clearing leaderboard:", error)
  }
}
