import type { QuizQuestion, QuizCategory } from "@/types/quiz"

// Enhanced infographic data with more comprehensive coverage
const infographicQuestions = {
  quran: [
    {
      id: "quran-structure",
      title: "Structure of the Quran",
      description: "Visual breakdown of Quranic organization",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Quran+Structure+Infographic",
      question: "How many Surahs are in the Quran?",
      options: ["110", "114", "120", "130"],
      correctAnswer: "114",
      explanation: "The Quran consists of 114 chapters (Surahs), each varying in length and containing verses (Ayat).",
    },
    {
      id: "quran-revelation",
      title: "Revelation of the Quran",
      description: "Timeline and process of Quranic revelation",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Quran+Revelation+Timeline",
      question: "Over how many years was the Quran revealed?",
      options: ["20 years", "23 years", "25 years", "30 years"],
      correctAnswer: "23 years",
      explanation: "The Quran was revealed over a period of approximately 23 years during the Prophet's mission.",
    },
  ],
  fiqh: [
    {
      id: "prayer-times",
      title: "Five Daily Prayers",
      description: "Times and significance of daily prayers",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Prayer+Times+Infographic",
      question: "What is the first prayer of the day?",
      options: ["Dhuhr", "Fajr", "Asr", "Maghrib"],
      correctAnswer: "Fajr",
      explanation: "Fajr is the dawn prayer, the first of the five daily prayers in Islam.",
    },
  ],
  hadith: [
    {
      id: "hadith-classification",
      title: "Classification of Hadith",
      description: "Different categories of Hadith authenticity",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Hadith+Classification+Chart",
      question: "What is the highest level of Hadith authenticity?",
      options: ["Hasan", "Sahih", "Da'if", "Maudu"],
      correctAnswer: "Sahih",
      explanation:
        "Sahih (authentic) is the highest level of Hadith authenticity, meeting all criteria for reliability.",
    },
  ],
}

// Function to assign unique IDs to questions
function assignQuestionIds(questions: QuizQuestion[]): QuizQuestion[] {
  if (!Array.isArray(questions)) {
    console.warn("assignQuestionIds received non-array input:", questions)
    return []
  }

  return questions.map((question, index) => ({
    ...question,
    id: question.id || `q_${index + 1}`,
  }))
}

// Function to enhance questions with infographics
export function enhanceQuestionsWithInfographics(questions: QuizQuestion[], categoryId: string): QuizQuestion[] {
  if (!Array.isArray(questions)) {
    console.warn("enhanceQuestionsWithInfographics received non-array questions:", questions)
    return []
  }

  const questionsWithIds = assignQuestionIds(questions)
  const categoryInfographics = infographicQuestions[categoryId as keyof typeof infographicQuestions] || []

  return questionsWithIds.map((question) => {
    const matchingInfographic = categoryInfographics.find((infographic) => infographic.question === question.question)

    if (matchingInfographic) {
      return {
        ...question,
        infographic: {
          title: matchingInfographic.title,
          description: matchingInfographic.description,
          imageUrl: matchingInfographic.imageUrl,
        },
      }
    }

    return question
  })
}

// Function to enhance entire quiz data with infographics
export function enhanceQuestionsWithInfographicsForData(categories: QuizCategory[]): QuizCategory[] {
  if (!Array.isArray(categories)) {
    console.warn("enhanceQuestionsWithInfographicsForData received non-array categories:", categories)
    return []
  }

  return categories.map((category) => ({
    ...category,
    levels: {
      easy: enhanceQuestionsWithInfographics(category.levels.easy || [], category.id),
      advanced: enhanceQuestionsWithInfographics(category.levels.advanced || [], category.id),
    },
  }))
}

// Export infographic data for direct access
export { infographicQuestions }
