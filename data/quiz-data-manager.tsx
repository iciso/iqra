import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz";
import seerahCategory from "./quiz-data-manager-additions";
import { additionalCategories } from "./quiz-data-manager-additional-categories";
import comparativeReligionCategory from "./comparative-religion";
import islamicFinanceCategory from "./islamic-finance";
import islamicHistoryCategory from "./islamic-history";
import hadeethCategory from "./hadeeth";
import fiqhCategory from "./fiqh";
import dawahCategory from "./dawah";
import tafsirCategory from "./tafsir";
import newMuslimsCategory from "./new-muslims";
import tazkiyahCategory from "./tazkiyah";
import medicalEthicsCategory from "./islamic-medical-ethics"
import { enhanceQuestionsWithInfographics } from "./quiz-data-manager-infographics";

// Has Quran only 30-30 each in easy and advanced 
// Seerah is in quiz-data-manager-additions, Aqeedah in quiz-data-manager-additional-categories
// Define all quiz categories in this file if removing any category from here or adding any new in data folder
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
        {
          question: "Which Surah is named after a prophet?",
          options: ["Yusuf", "Al-Fil", "Al-Qadr", "Al-Falaq"],
          correctAnswer: "Yusuf",
          explanation: "Surah Yusuf is named after Prophet Yusuf (Joseph) and contains his complete story.",
        },
        {
          question: "Which Surah is known as 'The Purity'?",
          options: ["Al-Fatiha", "Al-Ikhlas", "Al-Kafirun", "An-Nas"],
          correctAnswer: "Al-Ikhlas",
          explanation: "Surah Al-Ikhlas is called 'The Purity' as it affirms the absolute oneness of Allah.",
        },
        {
          question: "Which Surah mentions the event of the splitting of the moon?",
          options: ["Al-Qamar", "Al-Mulk", "Al-Jinn", "Al-Muzzammil"],
          correctAnswer: "Al-Qamar",
          explanation: "The splitting of the moon is mentioned in Surah Al-Qamar (The Moon), verse 1.",
        },
        {
          question: "Which Surah begins with the word 'Qul' (Say)?",
          options: ["Al-Ikhlas", "Al-Kafirun", "Al-Falaq", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs all begin with the command 'Qul' (Say), which is characteristic of many short Surahs.",
        },
        {
          question: "Which Surah is named after a small creature?",
          options: ["Al-Naml", "Al-Fil", "Al-Humazah", "Al-Ankabut"],
          correctAnswer: "Al-Naml",
          explanation: "Surah Al-Naml (The Ant) is named after the ants mentioned in verse 18.",
        },
        {
          question: "Which Surah mentions the story of Prophet Yunus (Jonah)?",
          options: ["Yunus", "Al-Anbiya", "As-Saffat", "All of these"],
          correctAnswer: "All of these",
          explanation: "The story of Prophet Yunus is mentioned in multiple Surahs including those listed.",
        },
        {
          question: "Which Surah is named after a day in Islamic eschatology?",
          options: ["Al-Qiyamah", "Al-Hashr", "At-Taghabun", "Al-Jumuah"],
          correctAnswer: "Al-Qiyamah",
          explanation: "Surah Al-Qiyamah is named after the Day of Resurrection.",
        },
        {
          question: "Which Surah mentions the event of the elephant?",
          options: ["Al-Fil", "Al-Quraysh", "Al-Maun", "Al-Kawthar"],
          correctAnswer: "Al-Fil",
          explanation: "Surah Al-Fil (The Elephant) mentions the event of Abraha's army with elephants.",
        },
        {
          question: "Which Surah is named after a heavenly book?",
          options: ["Al-Furqan", "Al-Qalam", "Al-Buruj", "At-Tin"],
          correctAnswer: "Al-Furqan",
          explanation: "Surah Al-Furqan is named after one of the names of the Quran meaning 'The Criterion'.",
        },
        {
          question: "Which Surah mentions the 'Night of Decree' (Laylatul Qadr)?",
          options: ["Al-Qadr", "Al-Duha", "Al-Alaq", "Al-Mulk"],
          correctAnswer: "Al-Qadr",
          explanation: "Surah Al-Qadr (The Decree) specifically describes Laylatul Qadr.",
        },
        {
          question: "Which Surah is named after a star?",
          options: ["An-Najm", "Ash-Shams", "Al-Layl", "Ad-Duha"],
          correctAnswer: "An-Najm",
          explanation: "Surah An-Najm (The Star) begins with an oath by the star when it sets.",
        },
        {
          question: "Which Surah mentions the 'two gardens' parable?",
          options: ["Al-Kahf", "Al-Qalam", "Al-Baqarah", "Al-Hadid"],
          correctAnswer: "Al-Kahf",
          explanation: "The parable of the two gardens is mentioned in Surah Al-Kahf, verses 32-43.",
        },
        {
          question: "Which Surah is named after a historical nation?",
          options: ["Hud", "Al-Araf", "Al-Rum", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs are named after historical nations mentioned in the Quran.",
        },
        {
          question: "Which Surah mentions the 'five pillars of Islam'?",
          options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "None specifically"],
          correctAnswer: "None specifically",
          explanation: "While the Quran mentions all five pillars, no single Surah lists all five together explicitly.",
        },
        {
          question: "Which Surah is named after a woman?",
          options: ["Maryam", "Al-Mujadilah", "At-Tahrim", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs are named after or prominently feature women in their content.",
        },
        {
          question: "Which Surah mentions the prohibition of alcohol?",
          options: ["Al-Baqarah", "Al-Maidah", "An-Nisa", "All of these"],
          correctAnswer: "All of these",
          explanation: "The prohibition of alcohol is mentioned in stages across several Surahs.",
        },
        {
          question: "Which Surah is named after a battle?",
          options: ["Al-Ahzab", "Al-Anfal", "At-Tawbah", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs are named after or relate to important battles in Islamic history.",
        },
        {
          question: "Which Surah mentions the 'creation of man from a clot'?",
          options: ["Al-Alaq", "Al-Muminun", "Al-Hajj", "All of these"],
          correctAnswer: "Al-Alaq",
          explanation: "Surah Al-Alaq mentions the creation of man from a clot (verse 2).",
        },
        {
          question: "Which Surah is named after a pilgrimage rite?",
          options: ["Al-Hajj", "Al-Safa", "Al-Marwah", "Al-Muzdalifah"],
          correctAnswer: "Al-Hajj",
          explanation: "Surah Al-Hajj is named after the pilgrimage and mentions several of its rites.",
        },
        {
          question: "Which Surah mentions the 'miracle of the she-camel'?",
          options: ["Al-Araf", "Hud", "Ash-Shams", "All of these"],
          correctAnswer: "All of these",
          explanation: "The story of Prophet Salih and the she-camel is mentioned in several Surahs.",
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
        {
          question: "Which Surah contains the most mentions of Allah's name?",
          options: ["Al-Baqarah", "Al-Mujadilah", "Al-Hashr", "Al-Imran"],
          correctAnswer: "Al-Mujadilah",
          explanation: "Surah Al-Mujadilah mentions Allah's name in every verse except one, totaling 40 times.",
        },
        {
          question: "Which Surah is known as 'The Bride of the Quran'?",
          options: ["Ar-Rahman", "Yasin", "Al-Waqiah", "Al-Mulk"],
          correctAnswer: "Ar-Rahman",
          explanation: "Surah Ar-Rahman is called 'The Bride of the Quran' due to its beautiful rhythmic style.",
        },
        {
          question: "Which Surah mentions the 'Covenant of the Prophets'?",
          options: ["Al-Ahzab", "Al-Imran", "Al-Maida", "Al-Anfal"],
          correctAnswer: "Al-Ahzab",
          explanation: "The Covenant of the Prophets is mentioned in Surah Al-Ahzab, verse 7.",
        },
        {
          question: "Which Surah contains the longest verse in the Quran?",
          options: ["Al-Baqarah", "An-Nisa", "Al-Maidah", "At-Tawbah"],
          correctAnswer: "Al-Baqarah",
          explanation: "The longest verse (Ayat ad-Dayn) is Al-Baqarah 282, dealing with debt transactions.",
        },
        {
          question: "Which Surah is named after an insect?",
          options: ["An-Nahl", "Al-Ankabut", "Al-Fil", "Al-Qalam"],
          correctAnswer: "An-Nahl",
          explanation: "Surah An-Nahl (The Bee) is named after the bee mentioned in verses 68-69.",
        },
        {
          question: "Which Surah mentions the 'Table Spread' (Ma'idah)?",
          options: ["Al-Maidah", "Al-Imran", "An-Nisa", "Al-Araf"],
          correctAnswer: "Al-Maidah",
          explanation: "Surah Al-Maidah (The Table Spread) mentions the miraculous table spread for Jesus' disciples.",
        },
        {
          question: "Which Surah contains the verse of 'mutual cursing' (Mubahala)?",
          options: ["Al-Imran", "An-Nisa", "Al-Maidah", "At-Tawbah"],
          correctAnswer: "Al-Imran",
          explanation: "The verse of Mubahala (3:61) is in Surah Al-Imran, regarding a challenge to Christians of Najran.",
        },
        {
          question: "Which Surah mentions the 'Night Journey' (Isra)?",
          options: ["Al-Isra", "An-Najm", "Al-Furqan", "Al-Ahzab"],
          correctAnswer: "Al-Isra",
          explanation: "Surah Al-Isra (The Night Journey) begins with reference to the Prophet's miraculous journey.",
        },
        {
          question: "Which Surah is named after a historical event?",
          options: ["Al-Fath", "Al-Hashr", "At-Tahrim", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs are named after significant historical events in Islamic history.",
        },
        {
          question: "Which Surah mentions the 'Hypocrites' (Munafiqun)?",
          options: ["Al-Munafiqun", "At-Tawbah", "Al-Ahzab", "All of these"],
          correctAnswer: "All of these",
          explanation: "Characteristics of hypocrites are mentioned in several Surahs including these.",
        },
        {
          question: "Which Surah contains the 'verse of light' (Ayat an-Nur)?",
          options: ["An-Nur", "Al-Baqarah", "Al-Hadid", "Al-Mulk"],
          correctAnswer: "An-Nur",
          explanation: "The famous 'verse of light' (24:35) is in Surah An-Nur, containing profound spiritual imagery.",
        },
        {
          question: "Which Surah is named after a cosmic phenomenon?",
          options: ["Ash-Shams", "Al-Qamar", "At-Tariq", "All of these"],
          correctAnswer: "All of these",
          explanation: "These Surahs are named after cosmic phenomena: the sun, moon, and the night star.",
        },
        {
          question: "Which Surah mentions the 'Seven Heavens'?",
          options: ["Al-Baqarah", "Al-Mulk", "Nuh", "All of these"],
          correctAnswer: "All of these",
          explanation: "The concept of seven heavens is mentioned in several Surahs including these.",
        },
        {
          question: "Which Surah contains the 'verse of the throne' (Ayat al-Kursi)?",
          options: ["Al-Baqarah", "Al-Imran", "Al-Hadid", "Al-Hashr"],
          correctAnswer: "Al-Baqarah",
          explanation: "Ayat al-Kursi (2:255) is in Surah Al-Baqarah, describing Allah's supreme authority.",
        },
        {
          question: "Which Surah is named after a historical object?",
          options: ["Al-Fil", "Al-Qalam", "Al-Hujurat", "Al-Jathiyah"],
          correctAnswer: "Al-Fil",
          explanation: "Surah Al-Fil is named after the elephants in Abraha's army that attacked Makkah.",
        },
        {
          question: "Which Surah mentions the 'Companions of the Elephant'?",
          options: ["Al-Fil", "Al-Quraysh", "Al-Maun", "Al-Kawthar"],
          correctAnswer: "Al-Fil",
          explanation: "Surah Al-Fil mentions the event of the Companions of the Elephant who attacked Makkah.",
        },
        {
          question: "Which Surah contains the 'verse of purification' (Ayat at-Tathir)?",
          options: ["Al-Ahzab", "An-Nur", "Al-Hujurat", "Al-Mumtahanah"],
          correctAnswer: "Al-Ahzab",
          explanation: "The verse of purification (33:33) is in Surah Al-Ahzab, regarding the purity of the Prophet's household.",
        },
        {
          question: "Which Surah is named after a unit of measurement?",
          options: ["Al-Qariah", "At-Tatfif", "Al-Maarij", "Al-Haqqah"],
          correctAnswer: "At-Tatfif",
          explanation: "Surah At-Tatfif (Those Who Give Less) refers to dishonest measurement in commerce.",
        },
        {
          question: "Which Surah mentions the 'Golden Calf' incident?",
          options: ["Al-Baqarah", "Al-Araf", "Ta-Ha", "All of these"],
          correctAnswer: "All of these",
          explanation: "The story of the Golden Calf is mentioned in several Surahs including these.",
        },
        {
          question: "Which Surah contains the 'verse of the sword' (Ayat as-Sayf)?",
          options: ["At-Tawbah", "Al-Baqarah", "Al-Anfal", "Al-Imran"],
          correctAnswer: "At-Tawbah",
          explanation: "The so-called 'verse of the sword' (9:5) is in Surah At-Tawbah regarding combat with polytheists.",
        },
      ],
    },
  },
  seerahCategory,
   ...additionalCategories,
  newMuslimsCategory,
  tafsirCategory,
  tazkiyahCategory,
  comparativeReligionCategory,
  islamicFinanceCategory,
  islamicHistoryCategory,
  hadeethCategory,
  fiqhCategory,
  dawahCategory,
  medicalEthicsCategory,
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

// Updated getQuizQuestions function to handle intermediate difficulty, assign IDs, and support question sets
export function getQuizQuestions(
  categoryId: string,
  difficulty: DifficultyLevel,
  setNumber: number = 1, // Default to first set (1–10)
  questionsPerSet: number = 10 // Default to 10 questions
): QuizQuestion[] {
  console.log(`Fetching questions for category: ${categoryId}, difficulty: ${difficulty}, set: ${setNumber}`);
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

  // Calculate start and end indices for the set
  const startIndex = (setNumber - 1) * questionsPerSet;
  const endIndex = startIndex + questionsPerSet;
  questions = questions.slice(startIndex, endIndex).map((question, index) => ({
    ...question,
    id: `${categoryId}-${difficulty}-${startIndex + index + 1}`,
  }));

  console.log(`Found ${questions.length} questions for ${categoryId}/${difficulty}/set-${setNumber}`);

  // Temporarily disable infographics due to display issues
  // const enhancedQuestions = enhanceQuestionsWithInfographics(categoryId, questions);
  // const withInfographics = enhancedQuestions.filter((q) => q.hasInfographic).length;
  // console.log(`Enhanced ${withInfographics} questions with infographics`);
  // return enhancedQuestions;

  return questions;
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
