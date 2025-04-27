import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz"
import { additionalCategories } from "./quiz-data-manager-additional-categories"
import seerahCategory from "./quiz-data-manager-additions"

// Define all quiz categories directly in this file
const quizData: QuizCategory[] = [
  {
    id: "quran",
    title: "Quran",
    description: "Test your knowledge of the Holy Quran",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the first Surah (chapter) of the Quran?",
          options: ["Al-Fatiha", "Al-Baqarah", "Yusuf", "Ar-Rahman"],
          correctAnswer: "Al-Fatiha",
          explanation: "Surah Al-Fatiha, meaning 'The Opening,' is the first chapter of the Quran.",
        },
        {
          question: "How many Surahs (chapters) are there in the Quran?",
          options: ["110", "114", "120", "130"],
          correctAnswer: "114",
          explanation: "The Quran consists of 114 chapters, varying in length and theme.",
        },
        {
          question: "What is the longest Surah in the Quran?",
          options: ["Al-Imran", "An-Nisa", "Al-Kahf", "Al-Baqarah"],
          correctAnswer: "Al-Baqarah",
          explanation: "Surah Al-Baqarah, meaning 'The Cow,' is the longest chapter in the Quran.",
        },
        {
          question: "What is the shortest Surah in the Quran?",
          options: ["Al-Kawthar", "Al-Asr", "Al-Ikhlas", "An-Nasr"],
          correctAnswer: "Al-Kawthar",
          explanation:
            "Surah Al-Kawthar, meaning 'A River in Paradise,' is the shortest chapter of the Quran, consisting of three verses.",
        },
      ],
      advanced: [
        {
          question:
            "What is the significance of the 'Seven Oft-Repeated Verses' ( السَّبْعُ ٱلْمَثَانِي ) mentioned in Surah Al-Hijr (15:87)?",
          options: [
            "The last seven verses of the Quran",
            "The seven longest Surahs",
            "Surah Al-Fatiha",
            "Seven specific historical accounts",
          ],
          correctAnswer: "Surah Al-Fatiha",
          explanation:
            "The majority of Quranic commentators understand 'The Seven Oft-Repeated Verses' to refer to Surah Al-Fatiha. Its verses are recited in every unit (rak'ah) of prayer, hence the description 'oft-repeated'.",
        },
      ],
    },
  },
  {
    id: "fiqh",
    title: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the first obligation upon a Muslim?",
          options: [
            "To pray five times a day",
            "To believe in Allah and His Messenger",
            "To fast during Ramadan",
            "To give Zakat",
          ],
          correctAnswer: "To believe in Allah and His Messenger",
          explanation: "The Shahada (declaration of faith) is the first and most fundamental pillar of Islam.",
        },
      ],
      advanced: [
        {
          question: "What is 'Ijma' in Islamic jurisprudence?",
          options: ["Consensus", "Analogy", "Precedent", "Interpretation"],
          correctAnswer: "Consensus",
          explanation: "'Ijma' refers to the consensus of Muslim scholars on a matter of Islamic law.",
        },
      ],
    },
  },
]

const allQuizData = [...quizData, seerahCategory, ...additionalCategories]

export function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] {
  const category = allQuizData.find((cat) => cat.id === categoryId)
  if (!category) return []

  return category.levels[difficulty] || []
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return allQuizData.find((category) => category.id === categoryId)
}

export function getAllCategories(): QuizCategory[] {
  return allQuizData
}
