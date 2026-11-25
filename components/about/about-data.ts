// Question counts per category and level. The names live in locales/<lng>/pages/about.json (categories.<slug>).
export const quizDistribution = [
  { slug: "quran", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "seerah", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "aqeedah", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "shirk", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "new-muslims", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "tafsir", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "tazkiyah", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "comparative-religion", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "islamic-finance", easy: 30, intermediate: 50, advanced: 40 },
  { slug: "cryptocurrency", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "history", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "hadeeth", easy: 40, intermediate: 40, advanced: 39 },
  { slug: "fiqh", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "christianity", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "bidah", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "riba", easy: 40, intermediate: 30, advanced: 30 },
  { slug: "takaful", easy: 35, intermediate: 31, advanced: 27 },
  { slug: "hinduism", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "dawah", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "gender", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "lgbtq", easy: 30, intermediate: 30, advanced: 30 },
  { slug: "psychology", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "music", easy: 40, intermediate: 30, advanced: 30 },
  { slug: "islamic-alcohol-drugs", easy: 34, intermediate: 33, advanced: 33 },
  { slug: "imagery", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "dating", easy: 33, intermediate: 34, advanced: 33 },
  { slug: "marriage", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "parenting", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "peace", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "salah", easy: 30, intermediate: 30, advanced: 30 },
  { slug: "sawm", easy: 29, intermediate: 32, advanced: 35 },
  { slug: "charity", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "hajj", easy: 40, intermediate: 30, advanced: 30 },
  { slug: "madhab", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "inheritance", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "fitnah", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "islamic-eschatology", easy: 34, intermediate: 33, advanced: 33 },
  { slug: "islamic-medical-ethics", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "surah-78", easy: 35, intermediate: 35, advanced: 35 },
  { slug: "surah-79", easy: 35, intermediate: 35, advanced: 35 },
  { slug: "surah-80", easy: 30, intermediate: 35, advanced: 35 },
  { slug: "surah-81", easy: 30, intermediate: 35, advanced: 35 },
  { slug: "surah-82", easy: 35, intermediate: 35, advanced: 35 },
  { slug: "ta-quran", easy: 30, intermediate: 10, advanced: 30 },
  { slug: "ta-aqeedah", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "ta-salah", easy: 30, intermediate: 30, advanced: 30 },
  { slug: "ta-charity", easy: 36, intermediate: 36, advanced: 36 },
  { slug: "ta-fiqh", easy: 40, intermediate: 40, advanced: 40 },
  { slug: "quranic-arabic-01", easy: 125, intermediate: 125, advanced: 125 },
  { slug: "modern-arabic-01", easy: 167, intermediate: 167, advanced: 166 },
]

// Players who sent accepted corrections. The text for each (label, intro, reward note, item titles and
// details) lives in locales/<lng>/pages/about.json under players.list.<id>.
export type Contributor = {
  id: string // used as the anchor, e.g. /about#dhanish-ali
  name: string // a person's name is not translated
  reward: number // total reward in INR for this contributor
  icons: string[] // one icon per contribution, in the same order as players.list.<id>.items
}

export const contributors: Contributor[] = [
  { id: "dhanish-ali", name: "Dhanish Ali", reward: 1250, icons: ["🧕", "🏛️", "🕌", "📗", "📜"] },
  { id: "feroza-mi", name: "Feroza MI", reward: 500, icons: ["📖", "🕌"] },
  { id: "joy-ahmed", name: "Joy Ahmed", reward: 1500, icons: ["💫", "📲", "💯", "👏", "🌙", "🏠"] },
  { id: "riaz-ahamed", name: "Riaz Ahamed Bobby", reward: 1000, icons: ["🤖", "📊", "🔓", "👏"] },
]

// Totals (update automatically)
export const totalCategory = quizDistribution.length
export const totalEasy = quizDistribution.reduce((sum, item) => sum + item.easy, 0)
export const totalIntermediate = quizDistribution.reduce((sum, item) => sum + item.intermediate, 0)
export const totalAdvanced = quizDistribution.reduce((sum, item) => sum + item.advanced, 0)
export const grandTotal = totalEasy + totalIntermediate + totalAdvanced

export const totalRewards = contributors.reduce((sum, c) => sum + c.reward, 0)
export const totalContributions = contributors.reduce((sum, c) => sum + c.icons.length, 0)

export const featureKeys = ["quiz", "challenge", "learning", "progress", "badges", "responsive", "contrib"] as const

export const techKeys = [
  { key: "next", name: "Next.js" },
  { key: "ts", name: "TypeScript" },
  { key: "tailwind", name: "Tailwind CSS" },
  { key: "neon", name: "Neon" },
  { key: "vercel", name: "Vercel" },
] as const
