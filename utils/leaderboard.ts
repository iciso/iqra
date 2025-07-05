export interface LeaderboardEntry {
  rank?: number
  name: string
  score: number
  totalQuestions: number
  percentage: number
  date: string
  category?: string
  difficulty?: string
  challenge?: string
  user_id?: string
}

// Check if code is running in browser
const isBrowser = typeof window !== "undefined"

// Get leaderboard from localStorage
export function getLeaderboard(): LeaderboardEntry[] {
  if (!isBrowser) return []

  try {
    const leaderboard = localStorage.getItem("quranQuizLeaderboard")
    const entries = leaderboard ? JSON.parse(leaderboard) : []
    // Add rank based on sorted order
    return entries
      .sort((a, b) => b.percentage - a.percentage)
      .map((entry, index) => ({ ...entry, rank: index + 1 }))
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
    // Remove rank from existing entries to avoid duplication
    const cleanLeaderboard = leaderboard.map(({ rank, ...rest }) => rest)
    // Add new entry
    cleanLeaderboard.push(entry)
    // Save back to localStorage (no slicing to keep all entries)
    localStorage.setItem("quranQuizLeaderboard", JSON.stringify(cleanLeaderboard))
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
