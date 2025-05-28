export interface ChallengeScoreResult {
  baseScore: number
  bonusPoints: number
  totalScore: number
  badgeEarned?: string
  reason: string
}

export type ChallengeOutcome =
  | "completed_both" // Both players completed
  | "completed_solo" // Only challenger completed, opponent didn't
  | "declined" // Challenge was declined
  | "expired" // Challenge expired without response
  | "abandoned" // Challenger didn't complete after acceptance

export function calculateChallengeScore(
  originalScore: number,
  totalQuestions: number,
  outcome: ChallengeOutcome,
  timeBonus?: number,
): ChallengeScoreResult {
  const basePercentage = (originalScore / totalQuestions) * 100

  switch (outcome) {
    case "completed_both":
      return {
        baseScore: originalScore,
        bonusPoints: Math.floor(originalScore * 0.5) + (timeBonus || 0), // 50% bonus + time bonus
        totalScore: originalScore + Math.floor(originalScore * 0.5) + (timeBonus || 0),
        badgeEarned: basePercentage >= 80 ? "Challenge Master" : "Challenge Winner",
        reason: "Challenge completed by both players with bonus!",
      }

    case "completed_solo":
      return {
        baseScore: originalScore,
        bonusPoints: Math.floor(originalScore * 0.25), // 25% bonus
        totalScore: originalScore + Math.floor(originalScore * 0.25),
        badgeEarned: "Solo Challenger",
        reason: "Challenge completed, waiting for opponent",
      }

    case "declined":
      return {
        baseScore: Math.floor(originalScore * 0.5), // 50% of original score
        bonusPoints: 5, // Small consolation bonus
        totalScore: Math.floor(originalScore * 0.5) + 5,
        badgeEarned: basePercentage >= 70 ? "Persistent Challenger" : "Challenge Initiator",
        reason: "Challenge declined, but effort rewarded",
      }

    case "expired":
      return {
        baseScore: Math.floor(originalScore * 0.3), // 30% of original score
        bonusPoints: 3,
        totalScore: Math.floor(originalScore * 0.3) + 3,
        badgeEarned: "Patient Challenger",
        reason: "Challenge expired, partial credit given",
      }

    case "abandoned":
      return {
        baseScore: 0,
        bonusPoints: 0,
        totalScore: 0,
        reason: "Challenge abandoned - no points awarded",
      }

    default:
      return {
        baseScore: originalScore,
        bonusPoints: 0,
        totalScore: originalScore,
        reason: "Standard quiz completion",
      }
  }
}

// Helper function to determine challenge outcome
export function determineChallengeOutcome(
  challengerCompleted: boolean,
  challengedCompleted: boolean,
  challengeStatus: string,
  isExpired: boolean,
): ChallengeOutcome {
  if (challengeStatus === "declined") return "declined"
  if (isExpired && challengeStatus === "pending") return "expired"
  if (!challengerCompleted) return "abandoned"
  if (challengerCompleted && challengedCompleted) return "completed_both"
  if (challengerCompleted && !challengedCompleted) return "completed_solo"

  return "completed_solo" // Default fallback
}

// Badge definitions for challenges
export const CHALLENGE_BADGES = {
  "Challenge Master": {
    icon: "👑",
    description: "Completed a challenge with 80%+ score",
    points: 50,
  },
  "Challenge Winner": {
    icon: "🏆",
    description: "Successfully completed a challenge",
    points: 25,
  },
  "Solo Challenger": {
    icon: "🎯",
    description: "Completed challenge while waiting for opponent",
    points: 15,
  },
  "Persistent Challenger": {
    icon: "💪",
    description: "Scored 70%+ on a declined challenge",
    points: 10,
  },
  "Challenge Initiator": {
    icon: "🚀",
    description: "Initiated a challenge (even if declined)",
    points: 5,
  },
  "Patient Challenger": {
    icon: "⏰",
    description: "Waited patiently for challenge response",
    points: 8,
  },
} as const
