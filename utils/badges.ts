import badgesData from "@/data/badges-data"

// Check if code is running in browser
const isBrowser = typeof window !== "undefined"

// Get earned badges from localStorage
export function getEarnedBadges(): string[] {
  if (!isBrowser) return []

  try {
    const badges = localStorage.getItem("quranQuizBadges")
    return badges ? JSON.parse(badges) : []
  } catch (error) {
    console.error("Error getting badges:", error)
    return []
  }
}

// Save badges to localStorage
export function saveEarnedBadges(badges: string[]): void {
  if (!isBrowser) return

  try {
    localStorage.setItem("quranQuizBadges", JSON.stringify(badges))
  } catch (error) {
    console.error("Error saving badges:", error)
  }
}

// Award a badge to the user
export function awardBadge(badgeId: string): boolean {
  const earnedBadges = getEarnedBadges()

  // Check if already earned
  if (earnedBadges.includes(badgeId)) {
    return false
  }

  // Add badge to earned list
  earnedBadges.push(badgeId)
  saveEarnedBadges(earnedBadges)
  return true
}

// Award multiple badges
export function awardBadges(badgeIds: string[]): string[] {
  const newlyAwarded: string[] = []

  badgeIds.forEach((id) => {
    if (awardBadge(id)) {
      newlyAwarded.push(id)
    }
  })

  return newlyAwarded
}

// Check for badges that should be awarded after completing a quiz/challenge
export function checkForBadges(result: {
  score: number
  totalQuestions: number
  category?: string
  difficulty?: string
  challenge?: string
  timeLeft?: number
  timeTotal?: number
}): string[] {
  const badgesToAward: string[] = []
  const percentage = result.totalQuestions > 0 ? Math.round((result.score / result.totalQuestions) * 100) : 0

  // First quiz badge
  const earnedBadges = getEarnedBadges()
  if (earnedBadges.length === 0) {
    badgesToAward.push("first_step")
  }

  // Challenge badges
  if (result.challenge) {
    const challengeBadge = badgesData.find(
      (badge) => badge.criteria.type === "challenge" && badge.criteria.value === result.challenge,
    )

    if (challengeBadge) {
      badgesToAward.push(challengeBadge.id)
    }
  }

  // Score badges
  if (percentage === 100) {
    badgesToAward.push("perfect_score")
  } else if (percentage >= 80) {
    badgesToAward.push("high_score")
  }

  // Speed badge (if completed in half the time with at least 80% accuracy)
  if (result.timeLeft && result.timeTotal && percentage >= 80) {
    const timeUsed = result.timeTotal - result.timeLeft
    if (timeUsed <= result.timeTotal / 2) {
      badgesToAward.push("speed_demon")
    }
  }

  // Check for all categories badge
  if (result.category) {
    const allCategories = ["quran", "fiqh", "tafsir", "hadeeth", "aqeedah", "seerah"]

    // Get completed categories from localStorage
    const completedCategories: string[] = JSON.parse(localStorage.getItem("quranQuizCompletedCategories") || "[]")

    if (!completedCategories.includes(result.category)) {
      completedCategories.push(result.category)
      localStorage.setItem("quranQuizCompletedCategories", JSON.stringify(completedCategories))

      // If all categories completed, award the badge
      if (allCategories.every((cat) => completedCategories.includes(cat))) {
        badgesToAward.push("explorer")
      }
    }
  }

  // Check for streak badges
  const today = new Date().toDateString()
  const quizDates: string[] = JSON.parse(localStorage.getItem("quranQuizDates") || "[]")

  if (!quizDates.includes(today)) {
    quizDates.push(today)
    localStorage.setItem("quranQuizDates", JSON.stringify(quizDates))

    // Check for 7-day streak
    if (isConsecutiveStreak(quizDates, 7)) {
      badgesToAward.push("weekly_streak")
    }
  }

  // Award the earned badges
  return awardBadges(badgesToAward)
}

// Helper function to check if there's a consecutive streak of days
function isConsecutiveStreak(dates: string[], requiredDays: number): boolean {
  if (dates.length < requiredDays) return false

  // Sort dates in descending order (newest first)
  const sortedDates = dates.map((dateStr) => new Date(dateStr)).sort((a, b) => b.getTime() - a.getTime())

  // Check for streak
  let streak = 1
  let currentDate = sortedDates[0]

  for (let i = 1; i < sortedDates.length; i++) {
    const prevDate = new Date(currentDate)
    prevDate.setDate(prevDate.getDate() - 1)

    // Check if this date is one day before the current date
    if (sortedDates[i].toDateString() === prevDate.toDateString()) {
      streak++
      currentDate = sortedDates[i]

      if (streak >= requiredDays) return true
    }
    // If not consecutive but same date (duplicate), continue checking
    else if (sortedDates[i].toDateString() !== currentDate.toDateString()) {
      // Reset streak if not a consecutive day
      streak = 1
      currentDate = sortedDates[i]
    }
  }

  return false
}
