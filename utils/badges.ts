import badgesData from "@/data/badges-data"

// Check if code is running in browser
const isBrowser = typeof window !== "undefined"

// List of all 23 categories normalized for comparison
export const ALL_23_CATEGORIES = [
  "quran",
  "fiqh",
  "tafsir",
  "hadeeth",
  "aqeedah",
  "seerah",
  "tazkiyah",
  "salah",
  "sawm",
  "islamic-history",
  "dawah",
  "new-muslims",
  "comparative-religion",
  "christianity",
  "hinduism",
  "islamic-finance",
  "crypto-and-blockchain",
  "gender",
  "islam-and-lgbtqia+",
  "islamic-psychology",
  "islamic-parenting",
  "medical-ethics",
  "peace",
]

// Normalize string for consistent matching
export function normalizeCategorySlug(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/_+/g, "-")
}

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
    const normalizedChallenge = normalizeCategorySlug(result.challenge)
    const challengeBadge = badgesData.find(
      (badge) =>
        badge.criteria.type === "challenge" &&
        normalizeCategorySlug(String(badge.criteria.value)) === normalizedChallenge
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
  if (result.timeLeft !== undefined && result.timeTotal !== undefined && percentage >= 80) {
    const timeUsed = result.timeTotal - result.timeLeft
    if (timeUsed <= result.timeTotal / 2) {
      badgesToAward.push("speed_demon")
    }
  }

  // Category badges & Knowledge Explorer tracking
  if (result.category) {
    const normalizedCat = normalizeCategorySlug(result.category)

    // Find and award category specific badge
    const categoryBadge = badgesData.find(
      (badge) =>
        badge.criteria.type === "category" &&
        normalizeCategorySlug(String(badge.criteria.value)) === normalizedCat
    )

    if (categoryBadge) {
      badgesToAward.push(categoryBadge.id)
    }

    // Get completed categories from localStorage
    const completedCategories: string[] = JSON.parse(
      localStorage.getItem("quranQuizCompletedCategories") || "[]"
    )

    if (!completedCategories.includes(normalizedCat)) {
      completedCategories.push(normalizedCat)
      localStorage.setItem("quranQuizCompletedCategories", JSON.stringify(completedCategories))
    }

    // Check if all 23 categories are completed
    const hasCompletedAll = ALL_23_CATEGORIES.every((cat) => completedCategories.includes(cat))
    if (hasCompletedAll) {
      badgesToAward.push("explorer")
    }
  }

  // Check for streak badges
  const today = new Date().toDateString()
  const quizDates: string[] = JSON.parse(localStorage.getItem("quranQuizDates") || "[]")

  if (!quizDates.includes(today)) {
    quizDates.push(today)
    localStorage.setItem("quranQuizDates", JSON.stringify(quizDates))
  }

  // Check for 7-day streak
  if (isConsecutiveStreak(quizDates, 7)) {
    badgesToAward.push("weekly_streak")
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
