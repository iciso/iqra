import { 
  Award, Zap, Star, Trophy, BookOpen, Crown, Medal, Clock, Sparkles, Target,
  Scale, Book, Heart, Compass, Shield, Users, Globe, Landmark, Coins,
  Cpu, Transgender, Brain, Baby, Stethoscope, Peace, UserCheck
} from "lucide-react"

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
  // --- Global / Accomplishment Badges ---
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
    id: "high_score",
    name: "Distinguished Scholar",
    description: "Scored at least 80% in any challenge or quiz",
    icon: Medal,
    color: "text-blue-600",
    criteria: {
      type: "score",
      value: 80, // 80%
    },
    rarity: "common",
  },
  {
    id: "perfect_score",
    name: "Perfect Scholar",
    description: "Achieved a perfect score in any challenge or quiz",
    icon: Crown,
    color: "text-yellow-500",
    criteria: {
      type: "score",
      value: 100, // 100%
    },
    rarity: "rare",
  },
  {
    id: "speed_demon",
    name: "Speed of Light",
    description: "Completed a quiz with at least 80% accuracy in half the allotted time",
    icon: Clock,
    color: "text-orange-500",
    criteria: {
      type: "special",
      value: "speed",
    },
    rarity: "rare",
  },
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
  {
    id: "explorer",
    name: "Knowledge Explorer",
    description: "Completed at least one quiz in all 23 categories",
    icon: Target,
    color: "text-emerald-600",
    criteria: {
      type: "special",
      value: "all_categories",
    },
    rarity: "legendary",
  },

  // --- Category Badges (23 Categories) ---
  {
    id: "badge_quran",
    name: "Quran Master",
    description: "Completed a quiz in the Quran category",
    icon: BookOpen,
    color: "text-emerald-500",
    criteria: {
      type: "category",
      value: "quran",
    },
    rarity: "common",
  },
  {
    id: "badge_fiqh",
    name: "Fiqh Expert",
    description: "Completed a quiz in the Fiqh category",
    icon: Scale,
    color: "text-purple-500",
    criteria: {
      type: "category",
      value: "fiqh",
    },
    rarity: "common",
  },
  {
    id: "badge_tafsir",
    name: "Tafsir Analyst",
    description: "Completed a quiz in the Tafsir category",
    icon: Book,
    color: "text-teal-500",
    criteria: {
      type: "category",
      value: "tafsir",
    },
    rarity: "common",
  },
  {
    id: "badge_hadeeth",
    name: "Hadith Guardian",
    description: "Completed a quiz in the Hadeeth category",
    icon: Star,
    color: "text-amber-500",
    criteria: {
      type: "category",
      value: "hadeeth",
    },
    rarity: "common",
  },
  {
    id: "badge_aqeedah",
    name: "Aqeedah Anchor",
    description: "Completed a quiz in the Aqeedah category",
    icon: Shield,
    color: "text-sky-500",
    criteria: {
      type: "category",
      value: "aqeedah",
    },
    rarity: "common",
  },
  {
    id: "badge_seerah",
    name: "Prophet's Companion",
    description: "Completed a quiz in the Seerah category",
    icon: Compass,
    color: "text-rose-500",
    criteria: {
      type: "category",
      value: "seerah",
    },
    rarity: "common",
  },
  {
    id: "badge_tazkiyah",
    name: "Purified Soul",
    description: "Completed a quiz in the Tazkiyah category",
    icon: Heart,
    color: "text-pink-500",
    criteria: {
      type: "category",
      value: "tazkiyah",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_salah",
    name: "Pillar of Prayer",
    description: "Completed a quiz in the Salah category",
    icon: Award,
    color: "text-cyan-500",
    criteria: {
      type: "category",
      value: "salah",
    },
    rarity: "common",
  },
  {
    id: "badge_sawm",
    name: "Devout Fasting",
    description: "Completed a quiz in the Sawm category",
    icon: Sparkles,
    color: "text-violet-500",
    criteria: {
      type: "category",
      value: "sawm",
    },
    rarity: "common",
  },
  {
    id: "badge_islamic_history",
    name: "History Chronicler",
    description: "Completed a quiz in the Islamic History category",
    icon: Landmark,
    color: "text-yellow-600",
    criteria: {
      type: "category",
      value: "islamic-history",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_dawah",
    name: "Caller to Good",
    description: "Completed a quiz in the Dawah category",
    icon: Users,
    color: "text-indigo-600",
    criteria: {
      type: "category",
      value: "dawah",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_new_muslims",
    name: "Welcoming Light",
    description: "Completed a quiz in the New Muslims category",
    icon: UserCheck,
    color: "text-lime-500",
    criteria: {
      type: "category",
      value: "new-muslims",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_comparative_religion",
    name: "Interfaith Scholar",
    description: "Completed a quiz in the Comparative Religion category",
    icon: Globe,
    color: "text-teal-600",
    criteria: {
      type: "category",
      value: "comparative-religion",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_christianity",
    name: "Christianity Studies",
    description: "Completed a quiz in the Christianity category",
    icon: Book,
    color: "text-blue-400",
    criteria: {
      type: "category",
      value: "christianity",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_hinduism",
    name: "Hinduism Studies",
    description: "Completed a quiz in the Hinduism category",
    icon: Book,
    color: "text-orange-400",
    criteria: {
      type: "category",
      value: "hinduism",
    },
    rarity: "uncommon",
  },
  {
    id: "badge_islamic_finance",
    name: "Halal Wealth Guide",
    description: "Completed a quiz in the Islamic Finance category",
    icon: Coins,
    color: "text-emerald-600",
    criteria: {
      type: "category",
      value: "islamic-finance",
    },
    rarity: "rare",
  },
  {
    id: "badge_crypto_blockchain",
    name: "FinTech Pioneer",
    description: "Completed a quiz in the Crypto & Blockchain category",
    icon: Cpu,
    color: "text-fuchsia-500",
    criteria: {
      type: "category",
      value: "crypto-and-blockchain",
    },
    rarity: "rare",
  },
  {
    id: "badge_gender",
    name: "Gender & Ethics Thinker",
    description: "Completed a quiz in the Gender category",
    icon: Transgender,
    color: "text-purple-400",
    criteria: {
      type: "category",
      value: "gender",
    },
    rarity: "rare",
  },
  {
    id: "badge_lgbtqia",
    name: "Contemporary Discourse",
    description: "Completed a quiz in the Islam and LGBTQIA+ category",
    icon: Target,
    color: "text-rose-400",
    criteria: {
      type: "category",
      value: "islam-and-lgbtqia+",
    },
    rarity: "rare",
  },
  {
    id: "badge_islamic_psychology",
    name: "Mind & Soul Explorer",
    description: "Completed a quiz in the Islamic Psychology category",
    icon: Brain,
    color: "text-indigo-400",
    criteria: {
      type: "category",
      value: "islamic-psychology",
    },
    rarity: "rare",
  },
  {
    id: "badge_islamic_parenting",
    name: "Nurturing Guardian",
    description: "Completed a quiz in the Islamic Parenting category",
    icon: Baby,
    color: "text-amber-600",
    criteria: {
      type: "category",
      value: "islamic-parenting",
    },
    rarity: "rare",
  },
  {
    id: "badge_medical_ethics",
    name: "Bioethics Scholar",
    description: "Completed a quiz in the Medical Ethics category",
    icon: Stethoscope,
    color: "text-red-500",
    criteria: {
      type: "category",
      value: "medical-ethics",
    },
    rarity: "rare",
  },
  {
    id: "badge_peace",
    name: "Ambassador of Peace",
    description: "Completed a quiz in the Peace category",
    icon: Peace,
    color: "text-sky-400",
    criteria: {
      type: "category",
      value: "peace",
    },
    rarity: "rare",
  },
]

export default badgesData
