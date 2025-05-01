import type { Opponent, OpponentType } from "@/components/challenge/opponent-profile"

// Generate a random score within a range close to the user's score
export function generateBotScore(userScore: number, totalQuestions: number): number {
  // Bots should be challenging but beatable
  // Score range is between -2 and +2 of user's score, but always between 0 and totalQuestions
  const min = Math.max(0, userScore - 2)
  const max = Math.min(totalQuestions, userScore + 2)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Predefined list of opponents
const opponentsList: Opponent[] = [
  {
    id: "iqra-bot-1",
    name: "IQRA Bot",
    type: "bot",
    level: "Advanced",
  },
  {
    id: "iqra-bot-2",
    name: "QuizMaster",
    type: "bot",
    level: "Expert",
  },
  {
    id: "user-1",
    name: "Ahmed",
    type: "user",
    avatar: "/thoughtful-woman-park.png",
    level: "Intermediate",
  },
  {
    id: "user-2",
    name: "Fatima",
    type: "user",
    avatar: "/diverse-group-chatting.png",
    level: "Advanced",
  },
  {
    id: "user-3",
    name: "Omar",
    type: "user",
    avatar: "/diverse-group-city.png",
    level: "Beginner",
  },
  {
    id: "user-4",
    name: "Aisha",
    type: "user",
    avatar: "/group-of-friends.png",
    level: "Expert",
  },
]

// Get a random opponent based on type preference
export function getRandomOpponent(preferredType?: OpponentType): Opponent {
  const filteredOpponents = preferredType ? opponentsList.filter((o) => o.type === preferredType) : opponentsList

  const randomIndex = Math.floor(Math.random() * filteredOpponents.length)
  return { ...filteredOpponents[randomIndex] }
}

// Get a specific opponent by ID
export function getOpponentById(id: string): Opponent | undefined {
  return opponentsList.find((o) => o.id === id)
}

// Update the getNextChallenge function to include the new Dawah challenge
export function getNextChallenge(
  currentCategory?: string,
  currentDifficulty?: string,
): { category: string; difficulty: string; challenge: string } {
  const challenges = [
    { category: "quran", difficulty: "easy", challenge: "daily" },
    { category: "quran", difficulty: "advanced", challenge: "quran" },
    { category: "seerah", difficulty: "advanced", challenge: "seerah" },
    { category: "fiqh", difficulty: "easy", challenge: "fiqh" },
    { category: "hadeeth", difficulty: "easy", challenge: "hadeeth" },
    { category: "tafsir", difficulty: "advanced", challenge: "tafsir" },
    { category: "aqeedah", difficulty: "intermediate", challenge: "aqeedah" },
    { category: "comparative", difficulty: "advanced", challenge: "comparative" },
    { category: "islamic-finance", difficulty: "intermediate", challenge: "finance" },
    { category: "tazkiyah", difficulty: "intermediate", challenge: "tazkiyah" },
    { category: "history", difficulty: "intermediate", challenge: "history" },
    { category: "dawah", difficulty: "intermediate", challenge: "dawah" },
  ]

  if (!currentCategory || !currentDifficulty) {
    return challenges[0]
  }

  const currentIndex = challenges.findIndex((c) => c.category === currentCategory && c.difficulty === currentDifficulty)

  if (currentIndex === -1 || currentIndex === challenges.length - 1) {
    return challenges[0] // Cycle back to the first if not found or at the end
  }

  return challenges[currentIndex + 1]
}
