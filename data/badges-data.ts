import { Award, Zap, Star, Trophy, BookOpen, Crown, Medal, Clock, Sparkles, Target } from "lucide-react"

export interface Badge {
  id: string
  name: string
  description: string
  icon: any // Lucide icon component
  color: string
  criteria: {
    type: "challenge" | "score" | "streak" | "category" | "special"
    value: string | number
  }
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary"
}

const badgesData: Badge[] = [
  // Challenge completion badges
  {
    id: "daily_challenge",
    name: "Daily Scholar",
    description: "Completed the Daily Quiz Challenge",
    icon: Zap,
    color: "text-blue-500",
    criteria: {
      type: "challenge",
      value: "daily",
    },
    rarity: "common",
  },
  {
    id: "quran_challenge",
    name: "Quran Master",
    description: "Completed the Quran Knowledge Challenge",
    icon: BookOpen,
    color: "text-emerald-500",
    criteria: {
      type: "challenge",
      value: "quran",
    },
    rarity: "uncommon",
  },
  {
    id: "seerah_challenge",
    name: "Prophet's Companion",
    description: "Completed the Seerah Special Challenge",
    icon: Star,
    color: "text-amber-500",
    criteria: {
      type: "challenge",
      value: "seerah",
    },
    rarity: "uncommon",
  },
  {
    id: "fiqh_challenge",
    name: "Fiqh Expert",
    description: "Completed the Fiqh Fundamentals Challenge",
    icon: Award,
    color: "text-purple-500",
    criteria: {
      type: "challenge",
      value: "fiqh",
    },
    rarity: "uncommon",
  },

  // Score-based badges
  {
    id: "perfect_score",
    name: "Perfect Scholar",
    description: "Achieved a perfect score in any challenge",
    icon: Crown,
    color: "text-yellow-500",
    criteria: {
      type: "score",
      value: 100, // 100%
    },
    rarity: "rare",
  },
  {
    id: "high_score",
    name: "Distinguished Scholar",
    description: "Scored at least 80% in any challenge",
    icon: Medal,
    color: "text-blue-600",
    criteria: {
      type: "score",
      value: 80, // 80%
    },
    rarity: "common",
  },

  // Speed badges
  {
    id: "speed_demon",
    name: "Speed of Light",
    description: "Completed a challenge with at least 80% accuracy in half the allotted time",
    icon: Clock,
    color: "text-orange-500",
    criteria: {
      type: "special",
      value: "speed",
    },
    rarity: "rare",
  },

  // Streak badges
  {
    id: "weekly_streak",
    name: "Consistent Student",
    description: "Completed at least one challenge every day for a week",
    icon: Sparkles,
    color: "text-indigo-500",
    criteria: {
      type: "streak",
      value: 7, // 7 days
    },
    rarity: "epic",
  },

  // All categories
  {
    id: "explorer",
    name: "Knowledge Explorer",
    description: "Completed at least one quiz in each category",
    icon: Target,
    color: "text-green-600",
    criteria: {
      type: "special",
      value: "all_categories",
    },
    rarity: "legendary",
  },

  // First badge
  {
    id: "first_step",
    name: "First Step",
    description: "Completed your first quiz",
    icon: Trophy,
    color: "text-green-500",
    criteria: {
      type: "special",
      value: "first",
    },
    rarity: "common",
  },
]

export default badgesData
