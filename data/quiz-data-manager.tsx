import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz";
import seerahCategory from "./quiz-data-manager-additions";
import { additionalCategories } from "./quiz-data-manager-additional-categories";
import comparativeReligionCategory from "./comparative-religion";
import islamicFinanceCategory from "./islamic-finance";
import islamicHistoryCategory from "./islamic-history";
import hadeethCategory from "./hadeeth";
import fiqhCategory from "./fiqh";
import dawahCategory from "./dawah";
import newMuslimsCategory from "./new-muslims";
import tazkiyahCategory from "./tazkiyah";
import { enhanceQuestionsWithInfographics } from "./quiz-data-manager-infographics";

// Has Quran Tafsir Hadeeth 10-10 each in easy and advanced 
// Seerah is in quiz-data-manager-additions,  Aqeedah in quiz-data-manager-additional-categories
// Define all quiz categories directly in this file if removing any data category
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
        {
          question: "Which Surah is known as 'The Heart of the Quran'?",
          options: ["Yasin", "Al-Fatiha", "Al-Ikhlas", "Ar-Rahman"],
          correctAnswer: "Yasin",
          explanation:
            "Surah Yasin is often referred to as the 'Heart of the Quran' due to its central message and importance.",
        },
        {
          question: "Which Surah does not start with 'Bismillah'?",
          options: ["Al-Fatiha", "Al-Ikhlas", "At-Tawbah", "An-Nas"],
          correctAnswer: "At-Tawbah",
          explanation: "Surah At-Tawbah is the only chapter in the Quran that does not begin with 'Bismillah'.",
        },
        {
          question: "How many verses (ayat) are there in Surah Al-Fatiha?",
          options: ["5", "6", "7", "8"],
          correctAnswer: "7",
          explanation: "Surah Al-Fatiha consists of 7 verses and is recited in every unit of prayer.",
        },
        {
          question: "Which Surah is named after a metal?",
          options: ["Al-Hadid", "Al-Fil", "Al-Qamar", "Al-Fajr"],
          correctAnswer: "Al-Hadid",
          explanation: "Surah Al-Hadid (The Iron) is named after the metal iron, which is mentioned in verse 25.",
        },
        {
          question: "Which Surah is recited in every raka'ah of the prayer?",
          options: ["Al-Fatiha", "Al-Ikhlas", "Al-Falaq", "Al-Nas"],
          correctAnswer: "Al-Fatiha",
          explanation:
            "Surah Al-Fatiha is recited in every raka'ah (unit) of the obligatory and voluntary prayers, making it the most frequently recited chapter of the Quran.",
        },
        {
          question: "What is the meaning of the word 'Quran'?",
          options: ["Book", "Recitation", "Message", "Guidance"],
          correctAnswer: "Recitation",
          explanation:
            "The word 'Quran' comes from the Arabic verb 'qara'a' which means 'to read' or 'to recite'. Thus, 'Quran' literally means 'the recitation' or 'the reading'.",
        },
      ],
      advanced: [
        {
          question: "Which Surah mentions the story of Dhul-Qarnayn?",
          options: ["Al-Kahf", "Yusuf", "Maryam", "Al-Qasas"],
          correctAnswer: "Al-Kahf",
          explanation: "The story of Dhul-Qarnayn is mentioned in Surah Al-Kahf (The Cave).",
        },
        {
          question: "Which Surah is named after a time of day?",
          options: ["Al-Fajr", "Al-Asr", "Ad-Duha", "All of these"],
          correctAnswer: "All of these",
          explanation:
            "All three Surahs are named after times of day: Al-Fajr (Dawn), Al-Asr (Afternoon), and Ad-Duha (Morning).",
        },
        {
          question: "Which Surah is known as 'The Mother of the Quran'?",
          options: ["Al-Baqarah", "Al-Fatiha", "Yasin", "Al-Ikhlas"],
          correctAnswer: "Al-Fatiha",
          explanation:
            "Surah Al-Fatiha is known as 'Umm al-Quran' (The Mother of the Quran) because it summarizes the entire message of the Quran.",
        },
        {
          question: "Which Surah was revealed in its entirety at once, rather than in parts?",
          options: ["Al-Fatiha", "Al-Ikhlas", "Al-Kawthar", "Al-Anam"],
          correctAnswer: "Al-Anam",
          explanation: "Surah Al-Anam was revealed all at once, accompanied by 70,000 angels, according to hadith.",
        },
        {
          question:
            "What is the significance of the 'Seven Oft-Repeated Verses' (السَّبْعُ ٱلْمَثَانِي) mentioned in Surah Al-Hijr (15:87)?",
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
        {
          question: "Which Surah contains the Ayat al-Kursi (Verse of the Throne)?",
          options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Maidah"],
          correctAnswer: "Al-Baqarah",
          explanation:
            "Ayat al-Kursi is verse 255 of Surah Al-Baqarah and is considered one of the greatest verses of the Quran.",
        },
        {
          question: "Which Surah is known as 'The Clarifier' (Al-Mubeen)?",
          options: ["Yasin", "Al-Fatiha", "Al-Ikhlas", "Al-Furqan"],
          correctAnswer: "Yasin",
          explanation:
            "Surah Yasin is sometimes referred to as 'Al-Mubeen' (The Clarifier) because it clarifies many aspects of faith and the afterlife.",
        },
        {
          question: "Which Surah mentions the 'People of the Cave' (Ashab al-Kahf)?",
          options: ["Al-Kahf", "Al-Qasas", "Maryam", "Al-Anbiya"],
          correctAnswer: "Al-Kahf",
          explanation: "The story of the People of the Cave (Ashab al-Kahf) is mentioned in Surah Al-Kahf (The Cave).",
        },
        {
          question: "Which Surah contains the verse 'There is no compulsion in religion'?",
          options: ["Al-Baqarah", "Al-Kafirun", "Al-Ikhlas", "An-Nisa"],
          correctAnswer: "Al-Baqarah",
          explanation:
            "The verse 'There is no compulsion in religion' (La ikraha fid-din) is found in Surah Al-Baqarah, verse 256.",
        },
        {
          question: "What is the concept of 'Makki' and 'Madani' Surahs?",
          options: [
            "Surahs revealed in Makkah and Madinah respectively",
            "Surahs about Makkah and Madinah",
            "Long and short Surahs respectively",
            "First and last half of the Quran respectively",
          ],
          correctAnswer: "Surahs revealed in Makkah and Madinah respectively",
          explanation:
            "Makki Surahs are those revealed before the Prophet's migration (Hijrah) to Madinah, while Madani Surahs are those revealed after the Hijrah. Makki Surahs generally focus on faith and monotheism, while Madani Surahs often address social legislation and community matters.",
        },
      ],
    },
  },
  {
    id: "tafsir",
    title: "Tafsir",
    description: "Quranic Interpretation",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does 'Tafsir' mean?",
          options: ["Recitation", "Interpretation", "Translation", "Memorization"],
          correctAnswer: "Interpretation",
          explanation:
            "Tafsir refers to the exegesis or interpretation of the Quran, explaining its meanings, context, and implications.",
        },
        {
          question: "Who is considered the first interpreter (mufassir) of the Quran?",
          options: ["Abu Bakr", "Umar ibn al-Khattab", "Prophet Muhammad (PBUH)", "Ali ibn Abi Talib"],
          correctAnswer: "Prophet Muhammad (PBUH)",
          explanation: "Prophet Muhammad (PBUH) was the first to explain and interpret the Quran to his companions.",
        },
        {
          question: "What is the primary source for Tafsir?",
          options: ["The Quran itself", "Hadith", "Scholarly consensus", "Personal opinion"],
          correctAnswer: "The Quran itself",
          explanation:
            "The best interpretation of the Quran comes from the Quran itself, where one verse explains another.",
        },
        {
          question: "What is 'Tafsir bil-Ma'thur'?",
          options: [
            "Interpretation based on personal opinion",
            "Interpretation based on transmitted knowledge",
            "Interpretation based on linguistic analysis",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on transmitted knowledge",
          explanation:
            "Tafsir bil-Ma'thur is interpretation based on narrations from the Prophet, companions, and early Muslims.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Tarjama'?",
          options: [
            "They are the same",
            "Tafsir is interpretation, Tarjama is translation",
            "Tafsir is in Arabic, Tarjama is in other languages",
            "Tafsir is by scholars, Tarjama is by laypeople",
          ],
          correctAnswer: "Tafsir is interpretation, Tarjama is translation",
          explanation:
            "Tafsir refers to the detailed explanation and interpretation of the Quranic verses, while Tarjama refers to the translation of the Quran from Arabic to other languages.",
        },
        {
          question: "What is the role of context in Tafsir?",
          options: [
            "It is irrelevant",
            "It is essential for proper understanding",
            "It is only important for legal verses",
            "It is only considered by modern interpreters",
          ],
          correctAnswer: "It is essential for proper understanding",
          explanation:
            "Context, including the occasion of revelation (asbab al-nuzul), historical background, and the surrounding verses, is essential for proper understanding and interpretation of the Quranic verses.",
        },
        {
          question: "Who is Ibn Abbas in relation to Tafsir?",
          options: [
            "The first caliph",
            "The Prophet's cousin and a renowned interpreter of the Quran",
            "A modern Tafsir scholar",
            "The compiler of Sahih Bukhari",
          ],
          correctAnswer: "The Prophet's cousin and a renowned interpreter of the Quran",
          explanation:
            "Abdullah ibn Abbas was the Prophet Muhammad's cousin who became one of the most knowledgeable interpreters of the Quran. He is often referred to as 'Tarjuman al-Quran' (The Interpreter of the Quran).",
        },
        {
          question: "What is the importance of Arabic language in Tafsir?",
          options: [
            "It is not important",
            "It is essential as the Quran was revealed in Arabic",
            "It is only important for Arabs",
            "It was important in the past but not now",
          ],
          correctAnswer: "It is essential as the Quran was revealed in Arabic",
          explanation:
            "Knowledge of Arabic language, its grammar, rhetoric, and literary devices is essential for Tafsir as the Quran was revealed in Arabic, and many nuances and meanings can only be fully appreciated in the original language.",
        },
        {
          question: "What is 'Tafsir bil-Ra'y'?",
          options: [
            "Interpretation based on narrations",
            "Interpretation based on personal opinion",
            "Interpretation based on dreams",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on personal opinion",
          explanation:
            "Tafsir bil-Ra'y refers to interpretation based on personal opinion or reasoning. It is considered acceptable if it is based on sound knowledge and does not contradict established principles.",
        },
        {
          question: "What is the first step in interpreting a verse according to classical Tafsir methodology?",
          options: [
            "Consulting historical context",
            "Looking at linguistic meaning",
            "Interpreting the Quran with the Quran",
            "Referring to scholarly opinions",
          ],
          correctAnswer: "Interpreting the Quran with the Quran",
          explanation:
            "The first step in classical Tafsir methodology is to interpret the Quran with the Quran itself, looking for explanations of a verse in other parts of the Quran before moving to other sources.",
        },
      ],
      advanced: [
        {
          question: "Who authored the famous Tafsir 'Fi Zilal al-Quran' (In the Shade of the Quran)?",
          options: ["Ibn Kathir", "Sayyid Qutb", "Al-Tabari", "Al-Qurtubi"],
          correctAnswer: "Sayyid Qutb",
          explanation: "'Fi Zilal al-Quran' was written by Sayyid Qutb while he was in prison in Egypt.",
        },
        {
          question: "What is 'Tafsir bil-Ra'y'?",
          options: [
            "Interpretation based on narrations",
            "Interpretation based on personal opinion",
            "Interpretation based on dreams",
            "Interpretation based on consensus",
          ],
          correctAnswer: "Interpretation based on personal opinion",
          explanation:
            "Tafsir bil-Ra'y is interpretation based on personal opinion or reasoning, which must be grounded in sound knowledge.",
        },
        {
          question: "Which famous Tafsir is known for its comprehensive linguistic analysis?",
          options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Kashshaf by Zamakhshari", "Tafsir al-Qurtubi"],
          correctAnswer: "Tafsir al-Kashshaf by Zamakhshari",
          explanation:
            "Al-Kashshaf by Zamakhshari is renowned for its detailed linguistic and rhetorical analysis of the Quran.",
        },
        {
          question: "What is 'Asbab al-Nuzul'?",
          options: [
            "The order of revelation",
            "The occasions or circumstances of revelation",
            "The place of revelation",
            "The time of revelation",
          ],
          correctAnswer: "The occasions or circumstances of revelation",
          explanation:
            "Asbab al-Nuzul refers to the historical contexts and occasions that led to the revelation of specific verses.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Ta'wil'?",
          options: [
            "They are synonyms",
            "Tafsir is literal explanation, Ta'wil is deeper interpretation",
            "Tafsir is for scholars, Ta'wil is for laypeople",
            "Tafsir is based on narrations, Ta'wil on reasoning",
          ],
          correctAnswer: "Tafsir is literal explanation, Ta'wil is deeper interpretation",
          explanation:
            "Traditionally, Tafsir refers to the apparent or literal explanation, while Ta'wil refers to the deeper or allegorical interpretation.",
        },
        {
          question: "What is 'Isra'iliyyat' in Tafsir literature?",
          options: [
            "Interpretations from Israeli scholars",
            "Stories about Bani Israel in the Quran",
            "Narrations from Jewish and Christian sources",
            "References to the Night Journey (Isra)",
          ],
          correctAnswer: "Narrations from Jewish and Christian sources",
          explanation:
            "Isra'iliyyat refers to narrations and stories from Jewish and Christian sources that were incorporated into some Tafsir works.",
        },
        {
          question: "Which Tafsir is known for its focus on legal rulings (Ahkam)?",
          options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Qurtubi", "Tafsir al-Kashshaf"],
          correctAnswer: "Tafsir al-Qurtubi",
          explanation:
            "Tafsir al-Qurtubi (Al-Jami' li-Ahkam al-Quran) is famous for its detailed discussion of legal rulings derived from the Quran.",
        },
        {
          question: "What is 'Tafsir al-Ishari'?",
          options: [
            "Interpretation based on historical context",
            "Interpretation based on mystical or spiritual insights",
            "Interpretation based on scientific discoveries",
            "Interpretation based on linguistic analysis",
          ],
          correctAnswer: "Interpretation based on mystical or spiritual insights",
          explanation:
            "Tafsir al-Ishari refers to mystical or spiritual interpretations that go beyond the apparent meaning, often associated with Sufi traditions.",
        },
        {
          question: "What is the concept of 'Muhkam and Mutashabih' verses in the Quran?",
          options: [
            "Abrogating and abrogated verses",
            "Clear and ambiguous verses",
            "Long and short verses",
            "Early and late revelations",
          ],
          correctAnswer: "Clear and ambiguous verses",
          explanation:
            "Muhkam refers to verses with clear and definitive meanings, while Mutashabih refers to verses that are ambiguous or open to multiple interpretations.",
        },
        {
          question: "What is the concept of 'Nasikh and Mansukh' in Quranic interpretation?",
          options: [
            "Different styles of recitation",
            "Abrogating and abrogated verses",
            "Clear and ambiguous verses",
            "Literal and metaphorical meanings",
          ],
          correctAnswer: "Abrogating and abrogated verses",
          explanation:
            "Nasikh refers to verses that abrogate or supersede earlier rulings, while Mansukh refers to verses whose rulings have been abrogated or replaced by later revelations. This concept addresses the apparent contradictions in the Quran by recognizing the progressive nature of revelation.",
        },
      ],
    },
  },
  seerahCategory,
   ...additionalCategories,
  newMuslimsCategory,
  tazkiyahCategory,
  comparativeReligionCategory,
  islamicFinanceCategory,
  islamicHistoryCategory,
  hadeethCategory,
  fiqhCategory,
  dawahCategory,
];

// Debug logs
console.log(
  "Loading quiz data with categories:",
  quizData.map((cat) => cat.id),
);

console.log(
  "Loaded categories:",
  quizData.map((cat) => `${cat.id} (${cat.levels.easy.length} easy, ${cat.levels.advanced.length} advanced questions)`),
);

// Update the getQuizQuestions function to handle intermediate difficulty and assign IDs
export function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] {
  console.log(`Fetching questions for category: ${categoryId}, difficulty: ${difficulty}`);
  const category = quizData.find((cat) => cat.id === categoryId);
  if (!category) {
    console.log(`Category ${categoryId} not found`);
    return [];
  }

  // If intermediate difficulty is requested but not available, fall back to easy
  if (difficulty === "intermediate" && (!category.levels.intermediate || category.levels.intermediate.length === 0)) {
    console.log(`No intermediate questions found for ${categoryId}, falling back to easy`);
    difficulty = "easy";
  }

  // Get the questions for the specified category and difficulty
  let questions = category.levels[difficulty] || [];

  // Assign IDs to questions if they don't have them
  questions = questions.map((question, index) => {
    if (!question.id) {
      return {
        ...question,
        id: `${categoryId}-${index + 1}`,
      };
    }
    return question;
  });

  console.log(`Found ${questions.length} questions for ${categoryId}/${difficulty}`);

  // Before returning the questions, enhance them with infographics if available
  const enhancedQuestions = enhanceQuestionsWithInfographics(categoryId, questions);

  // Log which questions have infographics
  const withInfographics = enhancedQuestions.filter((q) => q.hasInfographic).length;
  console.log(`Enhanced ${withInfographics} questions with infographics`);

  return enhancedQuestions;
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return quizData.find((category) => category.id === categoryId);
}

export function getAllCategories(): QuizCategory[] {
  return quizData;
}

// Verify all categories have questions
quizData.forEach((category) => {
  console.log(
    `Category ${category.id} has ${category.levels.easy.length} easy questions and ${category.levels.advanced.length} advanced questions`,
  );

  // Check for any empty question arrays
  if (category.levels.easy.length === 0) {
    console.warn(`Warning: Category ${category.id} has no easy questions`);
  }
  if (category.levels.advanced.length === 0) {
    console.warn(`Warning: Category ${category.id} has no advanced questions`);
  }
});
