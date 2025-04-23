import type { Challenge, ChallengeResult, User } from "@/types/challenge"
import type { QuizQuestion } from "@/types/quiz"

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: "user1",
    name: "Ahmed",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 1250,
    streak: 3,
    badges: ["Quran Scholar", "Hadith Expert"],
    recentQuestions: [], // Track recently seen questions
  },
  {
    id: "user2",
    name: "Fatima",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 980,
    streak: 1,
    badges: ["Fiqh Enthusiast"],
    recentQuestions: [],
  },
  {
    id: "user3",
    name: "Yusuf",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 1450,
    streak: 5,
    badges: ["Tawhid Master", "Quiz Champion"],
    recentQuestions: [],
  },
  {
    id: "user4",
    name: "Aisha",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 1100,
    badges: ["Seerah Expert"],
    recentQuestions: [],
  },
  {
    id: "user5",
    name: "Omar",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 890,
    badges: ["New Muslim"],
    recentQuestions: [],
  },
  {
    id: "current",
    name: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: 750,
    streak: 2,
    badges: ["Quran Learner"],
    recentQuestions: [], // Track recently seen questions
  },
]

const mockChallenges: Challenge[] = [
  {
    id: "challenge1",
    challenger: mockUsers[0],
    opponent: mockUsers[5], // current user
    category: "Quran",
    level: 2,
    status: "pending",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    reward: 50,
  },
  {
    id: "challenge2",
    challenger: mockUsers[5], // current user
    opponent: mockUsers[1],
    category: "Fiqh",
    level: 1,
    status: "accepted",
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    reward: 45,
  },
  {
    id: "challenge3",
    challenger: mockUsers[5], // current user
    opponent: mockUsers[2],
    category: "Aqeedah",
    level: 3,
    status: "completed",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    reward: 60,
  },
]

// Expanded question bank
const mockQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the first Surah (chapter) of the Quran?",
    options: ["Al-Fatiha", "Al-Baqarah", "Yusuf", "Ar-Rahman"],
    correctAnswer: "Al-Fatiha",
    category: "Quran",
    level: 1,
  },
  {
    id: "q2",
    question: "How many pillars are there in Islam?",
    options: ["3", "5", "6", "7"],
    correctAnswer: "5",
    category: "Aqeedah",
    level: 1,
  },
  {
    id: "q3",
    question: "Who was the first Caliph after Prophet Muhammad (PBUH)?",
    options: ["Umar ibn Al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib", "Abu Bakr As-Siddiq"],
    correctAnswer: "Abu Bakr As-Siddiq",
    category: "Islamic History",
    level: 2,
  },
  {
    id: "q4",
    question: "What is the meaning of 'Tawhid'?",
    options: ["Prayer", "Charity", "The Oneness of Allah", "Pilgrimage"],
    correctAnswer: "The Oneness of Allah",
    category: "Aqeedah",
    level: 1,
  },
  {
    id: "q5",
    question: "Which of the following is NOT one of the four major schools of Fiqh?",
    options: ["Hanafi", "Maliki", "Shafi'i", "Jafari"],
    correctAnswer: "Jafari",
    category: "Fiqh",
    level: 2,
  },
  {
    id: "q6",
    question: "What is the longest Surah in the Quran?",
    options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Maidah"],
    correctAnswer: "Al-Baqarah",
    category: "Quran",
    level: 1,
  },
  {
    id: "q7",
    question: "What is the Islamic term for the obligatory charity?",
    options: ["Sadaqah", "Zakat", "Infaq", "Hibah"],
    correctAnswer: "Zakat",
    category: "Fiqh",
    level: 1,
  },
  {
    id: "q8",
    question: "In which month was the Quran first revealed?",
    options: ["Rajab", "Sha'ban", "Ramadan", "Dhul-Hijjah"],
    correctAnswer: "Ramadan",
    category: "Quran",
    level: 1,
  },
  {
    id: "q9",
    question: "What is the name of the night during Ramadan when the Quran was first revealed?",
    options: ["Laylat al-Qadr", "Laylat al-Isra", "Laylat al-Mi'raj", "Laylat al-Baraat"],
    correctAnswer: "Laylat al-Qadr",
    category: "Quran",
    level: 2,
  },
  {
    id: "q10",
    question: "What is the term for ritual purification before prayer?",
    options: ["Ghusl", "Wudu", "Tayammum", "Istinja"],
    correctAnswer: "Wudu",
    category: "Fiqh",
    level: 1,
  },
  {
    id: "q11",
    question: "Which of the following is NOT one of the articles of faith in Islam?",
    options: ["Belief in Allah", "Belief in the Angels", "Belief in the Prophets", "Belief in the Four Caliphs"],
    correctAnswer: "Belief in the Four Caliphs",
    category: "Aqeedah",
    level: 2,
  },
  {
    id: "q12",
    question: "What is the name of the angel who brought revelations to Prophet Muhammad (PBUH)?",
    options: ["Mikail", "Israfil", "Jibreel", "Izrail"],
    correctAnswer: "Jibreel",
    category: "Aqeedah",
    level: 1,
  },
  {
    id: "q13",
    question: "What is the Islamic term for the pilgrimage to Makkah?",
    options: ["Umrah", "Hajj", "Ziyarah", "Rihla"],
    correctAnswer: "Hajj",
    category: "Fiqh",
    level: 1,
  },
  {
    id: "q14",
    question: "Which battle is known as the 'Victory of Victories' in Islamic history?",
    options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq", "Conquest of Makkah"],
    correctAnswer: "Conquest of Makkah",
    category: "Islamic History",
    level: 2,
  },
  {
    id: "q15",
    question: "What is the name of the first mosque built in Islam?",
    options: ["Masjid al-Haram", "Masjid al-Nabawi", "Masjid Quba", "Masjid al-Aqsa"],
    correctAnswer: "Masjid Quba",
    category: "Islamic History",
    level: 2,
  },
  {
    id: "q16",
    question: "What is the term for the migration of Prophet Muhammad (PBUH) from Makkah to Madinah?",
    options: ["Isra", "Mi'raj", "Hijrah", "Fatah"],
    correctAnswer: "Hijrah",
    category: "Islamic History",
    level: 1,
  },
  {
    id: "q17",
    question: "What is the name of the first revelation of the Quran?",
    options: ["Surah Al-Fatiha", "Surah Al-Alaq", "Surah Al-Ikhlas", "Surah Al-Nas"],
    correctAnswer: "Surah Al-Alaq",
    category: "Quran",
    level: 2,
  },
  {
    id: "q18",
    question: "What is the Islamic term for the call to prayer?",
    options: ["Iqamah", "Adhan", "Takbir", "Tasleem"],
    correctAnswer: "Adhan",
    category: "Fiqh",
    level: 1,
  },
  {
    id: "q19",
    question: "Which of the following is NOT one of the names of Allah mentioned in the Quran?",
    options: ["Al-Rahman", "Al-Raheem", "Al-Malik", "Al-Mustafa"],
    correctAnswer: "Al-Mustafa",
    category: "Aqeedah",
    level: 2,
  },
  {
    id: "q20",
    question: "What is the name of the sacred well located within the Masjid al-Haram in Makkah?",
    options: ["Zamzam", "Salsabil", "Kawthar", "Tasneem"],
    correctAnswer: "Zamzam",
    category: "Islamic History",
    level: 1,
  },
]

// Daily challenge questions (refreshed daily)
let dailyChallengeQuestions: QuizQuestion[] = []
let dailyChallengeDate: string = new Date().toDateString()

// Function to get non-repetitive questions for a user
function getNonRepetitiveQuestions(userId: string, category: string, level: number, count = 5): QuizQuestion[] {
  // Get the user
  const user = mockUsers.find((u) => u.id === userId)
  if (!user) return mockQuestions.slice(0, count)

  // Filter questions by category and level
  let availableQuestions = mockQuestions.filter(
    (q) => (category === "any" || q.category === category) && (level === 0 || q.level === level),
  )

  // If not enough questions in the specified category/level, expand the search
  if (availableQuestions.length < count) {
    availableQuestions = mockQuestions.filter(
      (q) => category === "any" || q.category === category || level === 0 || q.level === level,
    )
  }

  // Filter out recently seen questions
  const nonRepeatedQuestions = availableQuestions.filter((q) => !user.recentQuestions.includes(q.id))

  // If we still don't have enough questions, use some repeated ones
  let selectedQuestions: QuizQuestion[] = []
  if (nonRepeatedQuestions.length >= count) {
    // Randomly select from non-repeated questions
    selectedQuestions = shuffleArray(nonRepeatedQuestions).slice(0, count)
  } else {
    // Use all non-repeated questions
    selectedQuestions = [...nonRepeatedQuestions]

    // Fill the rest with least recently seen questions
    const remainingCount = count - selectedQuestions.length
    const leastRecentlySeenQuestions = availableQuestions
      .filter((q) => !selectedQuestions.includes(q))
      .sort((a, b) => {
        const aIndex = user.recentQuestions.indexOf(a.id)
        const bIndex = user.recentQuestions.indexOf(b.id)
        if (aIndex === -1) return -1
        if (bIndex === -1) return 1
        return aIndex - bIndex
      })
      .slice(0, remainingCount)

    selectedQuestions = [...selectedQuestions, ...leastRecentlySeenQuestions]
  }

  // Update user's recently seen questions
  const questionIds = selectedQuestions.map((q) => q.id)
  user.recentQuestions = [...questionIds, ...user.recentQuestions].slice(0, 50) // Keep track of last 50 questions

  return selectedQuestions
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// API functions
export async function getUserChallenges(userId: string): Promise<Challenge[]> {
  // In a real app, this would be a fetch call to your API
  return mockChallenges.filter((challenge) => challenge.challenger.id === userId || challenge.opponent.id === userId)
}

export async function getChallengeById(challengeId: string): Promise<Challenge | null> {
  // In a real app, this would be a fetch call to your API
  return mockChallenges.find((challenge) => challenge.id === challengeId) || null
}

export async function getQuestionsForChallenge(challengeId: string): Promise<QuizQuestion[]> {
  // In a real app, this would be a fetch call to your API
  const challenge = mockChallenges.find((c) => c.id === challengeId)
  if (!challenge) return []

  // Determine the current user (in a real app, use auth)
  const currentUserId = "current"

  // Get non-repetitive questions for the user
  return getNonRepetitiveQuestions(currentUserId, challenge.category, challenge.level)
}

export async function acceptChallenge(challengeId: string): Promise<Challenge> {
  // In a real app, this would be a fetch call to your API
  const challenge = mockChallenges.find((c) => c.id === challengeId)
  if (!challenge) throw new Error("Challenge not found")

  // Update the challenge status to accepted
  challenge.status = "accepted"

  // Also update the challenge in the mockChallenges array
  const index = mockChallenges.findIndex((c) => c.id === challengeId)
  if (index !== -1) {
    mockChallenges[index] = { ...challenge }
  }

  return challenge
}

export async function declineChallenge(challengeId: string): Promise<Challenge> {
  // In a real app, this would be a fetch call to your API
  const challenge = mockChallenges.find((c) => c.id === challengeId)
  if (!challenge) throw new Error("Challenge not found")

  challenge.status = "declined"
  return challenge
}

export async function startDailyChallenge(): Promise<Challenge> {
  // Check if we need to refresh the daily challenge
  const today = new Date().toDateString()
  if (dailyChallengeDate !== today || dailyChallengeQuestions.length === 0) {
    // Generate new daily challenge questions
    const currentUser = mockUsers.find((u) => u.id === "current")
    if (currentUser) {
      // Rotate through categories for daily challenges
      const categories = ["Quran", "Fiqh", "Aqeedah", "Islamic History"]
      const todayCategory = categories[new Date().getDay() % categories.length]

      dailyChallengeQuestions = getNonRepetitiveQuestions("current", todayCategory, 0)
      dailyChallengeDate = today
    }
  }

  // Create a new challenge for the daily challenge
  const newChallenge: Challenge = {
    id: `daily-${Date.now()}`,
    challenger: mockUsers.find((u) => u.id === "current")!,
    opponent: {
      id: "daily-bot",
      name: "IQRA Bot",
      avatar: "/placeholder.svg?height=40&width=40",
      kp: 1000,
      badges: ["Daily Challenge"],
    },
    category: "Daily Challenge",
    level: 2,
    status: "accepted",
    createdAt: new Date().toISOString(),
    reward: 100, // Double reward for daily challenge
    questions: dailyChallengeQuestions.map((q) => q.id),
  }

  // Add to mock challenges
  mockChallenges.push(newChallenge)

  return newChallenge
}

export async function createNewChallenge(category: string, level: number, opponentId: string): Promise<Challenge> {
  // Get the current user and opponent
  const currentUser = mockUsers.find((u) => u.id === "current")
  const opponent = mockUsers.find((u) => u.id === opponentId) || {
    id: "random-opponent",
    name: "Random Opponent",
    avatar: "/placeholder.svg?height=40&width=40",
    kp: Math.floor(Math.random() * 500) + 500,
  }

  if (!currentUser) throw new Error("Current user not found")

  // Create a new challenge
  const newChallenge: Challenge = {
    id: `challenge-${Date.now()}`,
    challenger: currentUser,
    opponent,
    category,
    level,
    status: opponentId === "random-opponent" ? "accepted" : "pending",
    createdAt: new Date().toISOString(),
    reward: 50 + level * 10,
  }

  // Add to mock challenges
  mockChallenges.push(newChallenge)

  return newChallenge
}

export async function submitChallengeAnswers(
  challengeId: string,
  userId: string,
  answers: string[],
  timeRemaining: number[],
): Promise<ChallengeResult> {
  // In a real app, this would be a fetch call to your API

  // For demo, create a mock result
  const challenge = mockChallenges.find((c) => c.id === challengeId)
  if (!challenge) throw new Error("Challenge not found")

  const isChallenger = challenge.challenger.id === userId
  const user = isChallenger ? challenge.challenger : challenge.opponent
  const opponent = isChallenger ? challenge.opponent : challenge.challenger

  // Get the questions for this challenge
  const questions = challenge.questions
    ? mockQuestions.filter((q) => challenge.questions!.includes(q.id))
    : await getQuestionsForChallenge(challengeId)

  // Calculate correct answers based on the actual questions
  const correctAnswers = answers.filter(
    (answer, index) => questions[index] && answer === questions[index].correctAnswer,
  ).length

  // For the opponent, generate a realistic score
  const opponentCorrectAnswers = Math.floor(Math.random() * 4) + 1 // 1-4 correct answers

  // Calculate time bonus (sum of remaining seconds)
  const timeBonus = timeRemaining.reduce((sum, time) => sum + Math.min(time, 5), 0) // Cap at 5 per question
  const opponentTimeBonus = Math.floor(Math.random() * 15) // 0-14 seconds

  // Calculate streak bonus
  const streakBonus = user.streak && user.streak > 0 ? Math.min(user.streak, 5) * 5 : 0
  const opponentStreakBonus = opponent.streak && opponent.streak > 0 ? Math.min(opponent.streak, 5) * 5 : 0

  // Calculate total KP
  const userScore = correctAnswers * 10 + timeBonus + streakBonus
  const opponentScore = opponentCorrectAnswers * 10 + opponentTimeBonus + opponentStreakBonus

  // Determine winner
  let winner: User | null = null
  let userTotalKP = userScore
  let opponentTotalKP = opponentScore

  if (userScore > opponentScore) {
    winner = user
    userTotalKP += 30 // Win bonus
    opponentTotalKP += 10 // Participation
  } else if (opponentScore > userScore) {
    winner = opponent
    opponentTotalKP += 30 // Win bonus
    userTotalKP += 10 // Participation
  } else {
    // Draw
    userTotalKP += 15
    opponentTotalKP += 15
  }

  // Double rewards for daily challenges
  if (challenge.category === "Daily Challenge") {
    userTotalKP *= 2
    opponentTotalKP *= 2
  }

  // Update challenge status
  challenge.status = "completed"

  // Update user's KP
  if (isChallenger) {
    challenge.challenger.kp += userTotalKP
    challenge.opponent.kp += opponentTotalKP
  } else {
    challenge.challenger.kp += opponentTotalKP
    challenge.opponent.kp += userTotalKP
  }

  // Update the user in the mockUsers array
  const userIndex = mockUsers.findIndex((u) => u.id === user.id)
  if (userIndex !== -1) {
    mockUsers[userIndex].kp += userTotalKP
    // Update streak if user won
    if (winner && winner.id === user.id) {
      mockUsers[userIndex].streak = (mockUsers[userIndex].streak || 0) + 1
    } else if (!winner) {
      // Maintain streak on draw
    } else {
      // Reset streak on loss
      mockUsers[userIndex].streak = 0
    }
  }

  return {
    id: `result-${challengeId}`,
    challengeId,
    challenger: challenge.challenger,
    opponent: challenge.opponent,
    category: challenge.category,
    level: challenge.level,
    challengerResult: isChallenger
      ? {
          correctAnswers,
          timeBonus,
          streakBonus,
          totalKP: userTotalKP,
        }
      : {
          correctAnswers: opponentCorrectAnswers,
          timeBonus: opponentTimeBonus,
          streakBonus: opponentStreakBonus,
          totalKP: opponentTotalKP,
        },
    opponentResult: isChallenger
      ? {
          correctAnswers: opponentCorrectAnswers,
          timeBonus: opponentTimeBonus,
          streakBonus: opponentStreakBonus,
          totalKP: opponentTotalKP,
        }
      : {
          correctAnswers,
          timeBonus,
          streakBonus,
          totalKP: userTotalKP,
        },
    winner,
    kpAwarded: winner ? 30 : 15,
    completedAt: new Date().toISOString(),
  }
}

export async function getLeaderboardUsers(): Promise<User[]> {
  // In a real app, this would be a fetch call to your API
  return mockUsers
}

export async function getCurrentUser(): Promise<User> {
  // In a real app, this would be a fetch call to your API
  return mockUsers.find((user) => user.id === "current") || mockUsers[5]
}

export async function getDailyLimits(): Promise<{
  dailyChallenges: number
  maxDailyChallenges: number
  categoriesUsed: number
  maxDailyCategories: number
}> {
  // In a real app, this would be a fetch call to your API
  return {
    dailyChallenges: 3,
    maxDailyChallenges: 5,
    categoriesUsed: 2,
    maxDailyCategories: 3,
  }
}
