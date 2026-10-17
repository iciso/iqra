
import type { QuizCategory } from "@/types/quiz";

const quranicArabic01Category: QuizCategory = {
  id: "quranic-arabic-01",
  title: "Quranic Arabic - Level 1",
  description: "Learn the meanings of one-letter & simple words used in the Quran",
  icon: "languages",

  levels: {
    easy: [
      {
        id: "qav-easy-001",
        question: "What does وَ (wa) mean?",
        options: ["And", "From", "Above", "Before"],
        correctAnswer: "And",
        explanation:
          "وَ (wa) means “and”. It is often attached to the next word, as in وَالضُّحَىٰ in Quran 93:1. The particle itself has one Arabic letter.",
      },
      {
        id: "qav-easy-002",
        question: "What does مِن (min) mean?",
        options: ["From", "Under", "After", "Together"],
        correctAnswer: "From",
        explanation:
          "مِن (min) commonly means “from”. It appears in Quran 2:23. The target word has two Arabic letters.",
      },
      {
        id: "qav-easy-003",
        question: "What does رَبّ (rabb) mean?",
        options: ["Lord", "Heart", "Book", "Sky"],
        correctAnswer: "Lord",
        explanation:
          "رَبّ (rabb) means “Lord” or “Sustainer”. See رَبِّ الْعَالَمِينَ in Quran 1:2. The target word has two Arabic letters.",
      },
      {
        id: "qav-easy-004",
        question: "What does نُور (nūr) mean?",
        options: ["Light", "Water", "Mountain", "Night"],
        correctAnswer: "Light",
        explanation:
          "نُور (nūr) means “light”. See Quran 24:35. The target word has three Arabic letters.",
      },
      {
        id: "qav-easy-005",
        question: "What does يَوْم (yawm) mean?",
        options: ["Day", "Heart", "Rain", "House"],
        correctAnswer: "Day",
        explanation:
          "يَوْم (yawm) means “day”. It appears in مَالِكِ يَوْمِ الدِّينِ in Quran 1:4. The target word has three Arabic letters.",
      },
      {
        id: "qav-easy-006",
        question: "What does هُدًى (hudā) mean?",
        options: ["Guidance", "Punishment", "Messenger", "Garden"],
        correctAnswer: "Guidance",
        explanation:
          "هُدًى (hudā) means “guidance”. See هُدًى لِلْمُتَّقِينَ in Quran 2:2. The target word has three Arabic letters when vowel marks are ignored.",
      },
      {
        id: "qav-easy-007",
        question: "What does كِتَاب (kitāb) mean?",
        options: ["Book", "Light", "River", "Prayer"],
        correctAnswer: "Book",
        explanation:
          "كِتَاب (kitāb) means “book”. See ذَٰلِكَ الْكِتَابُ in Quran 2:2. The target word has four Arabic letters.",
      },
    ],

    advanced: [
      {
        id: "qav-advanced-001",
        question: "What does قَلْب (qalb) mean in Quran 26:89?",
        options: ["Heart", "Earth", "Water", "Book"],
        correctAnswer: "Heart",
        explanation:
          "قَلْب (qalb) means “heart”. In بِقَلْبٍ سَلِيمٍ, it refers to a sound or pure heart. The target word has three Arabic letters.",
      },
      {
        id: "qav-advanced-002",
        question: "What does سَمَاء (samāʾ) mean?",
        options: ["Sky or heaven", "Earth", "Sea", "Garden"],
        correctAnswer: "Sky or heaven",
        explanation:
          "سَمَاء (samāʾ) means “sky” or “heaven”, depending on context. See Quran 2:22. The target word has four Arabic letters.",
      },
      {
        id: "qav-advanced-003",
        question: "What does عَذَاب (ʿadhāb) mean?",
        options: ["Punishment", "Mercy", "Guidance", "Provision"],
        correctAnswer: "Punishment",
        explanation:
          "عَذَاب (ʿadhāb) means “punishment” or “torment”. See Quran 2:7. The target word has four Arabic letters.",
      },
      {
        id: "qav-advanced-004",
        question: "What does رَسُول (rasūl) mean?",
        options: ["Messenger", "Angel", "Believer", "King"],
        correctAnswer: "Messenger",
        explanation:
          "رَسُول (rasūl) means “messenger”. See Quran 4:80. The base word has four Arabic letters; the attached definite article in الرَّسُولَ is not counted.",
      },
    ],
  },
};

export default quranicArabic01Category;
