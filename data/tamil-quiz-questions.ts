import type { QuizQuestion } from "@/types/quiz"

// Tamil translations for Quran category questions
const tamilQuranQuestions: QuizQuestion[] = [
  {
    id: "quran-ta-1",
    question: "குர்ஆனில் எத்தனை சூராக்கள் உள்ளன?",
    options: ["114", "110", "120", "100"],
    correctAnswer: "114",
    explanation: "குர்ஆனில் மொத்தம் 114 சூராக்கள் உள்ளன. இது அல்-ஃபாத்திஹாவிலிருந்து தொடங்கி அன்-நாஸ் வரை உள்ளது.",
    difficulty: "easy",
    category: "quran",
  },
  {
    id: "quran-ta-2",
    question: "குர்ஆனின் முதல் சூரா எது?",
    options: ["அல்-ஃபாத்திஹா", "அல்-பகரா", "ஆல் இம்ரான்", "அன்-நிசா"],
    correctAnswer: "அல்-ஃபாத்திஹா",
    explanation: "அல்-ஃபாத்திஹா குர்ஆனின் முதல் சூராவாகும். இது 'திறப்பு' என்று பொருள்படும்.",
    difficulty: "easy",
    category: "quran",
  },
  {
    id: "quran-ta-3",
    question: "குர்ஆனின் மிக நீளமான சூரா எது?",
    options: ["அல்-பகரா", "ஆல் இம்ரான்", "அன்-நிசா", "அல்-மாயிதா"],
    correctAnswer: "அல்-பகரா",
    explanation: "அல்-பகரா குர்ஆனின் மிக நீளமான சூராவாகும். இதில் 286 வசனங்கள் உள்ளன.",
    difficulty: "intermediate",
    category: "quran",
  },
]

// Tamil translations for Fiqh category questions
const tamilFiqhQuestions: QuizQuestion[] = [
  {
    id: "fiqh-ta-1",
    question: "இஸ்லாமின் ஐந்து தூண்களில் முதலாவது எது?",
    options: ["ஷஹாதா", "ஸலாஹ்", "ஸகாத்", "ஹஜ்"],
    correctAnswer: "ஷஹாதா",
    explanation: "ஷஹாதா (நம்பிக்கை அறிக்கை) இஸ்லாமின் ஐந்து தூண்களில் முதலாவதாகும்.",
    difficulty: "easy",
    category: "fiqh",
  },
  {
    id: "fiqh-ta-2",
    question: "ஒரு நாளில் எத்தனை முறை கட்டாய தொழுகை உள்ளது?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    explanation: "ஒரு நாளில் ஐந்து முறை கட்டாய தொழுகை உள்ளது: ஃபஜ்ர், ழுஹர், அஸர், மஃக்ரிப், இஷா.",
    difficulty: "easy",
    category: "fiqh",
  },
]

// Tamil translations for Hadith category questions
const tamilHadithQuestions: QuizQuestion[] = [
  {
    id: "hadith-ta-1",
    question: "மிகவும் நம்பகமான ஹதீஸ் தொகுப்பு எது?",
    options: ["ஸஹீஹ் அல்-புகாரி", "ஸஹீஹ் முஸ்லிம்", "சுனன் அபூ தாவூத்", "ஜாமி அத்-திர்மிதி"],
    correctAnswer: "ஸஹீஹ் அல்-புகாரி",
    explanation: "ஸஹீஹ் அல்-புகாரி மிகவும் நம்பகமான ஹதீஸ் தொகுப்பாக கருதப்படுகிறது.",
    difficulty: "intermediate",
    category: "hadeeth",
  },
]

// Tamil translations for Seerah category questions
const tamilSeerahQuestions: QuizQuestion[] = [
  {
    id: "seerah-ta-1",
    question: "நபி முஹம்மத் (ஸல்) எந்த ஆண்டில் பிறந்தார்?",
    options: ["570 CE", "571 CE", "569 CE", "572 CE"],
    correctAnswer: "570 CE",
    explanation: "நபி முஹம்மத் (ஸல்) கி.பி. 570 ஆம் ஆண்டில் மக்காவில் பிறந்தார்.",
    difficulty: "intermediate",
    category: "seerah",
  },
]

// Tamil translations for Aqeedah category questions
const tamilAqeedahQuestions: QuizQuestion[] = [
  {
    id: "aqeedah-ta-1",
    question: "தவ்ஹீத் என்றால் என்ன?",
    options: ["அல்லாஹ்வின் ஒற்றுமை", "தொழுகை", "நோன்பு", "தர்மம்"],
    correctAnswer: "அல்லாஹ்வின் ஒற்றுமை",
    explanation: "தவ்ஹீத் என்பது அல்லாஹ்வின் ஒற்றுமை மற்றும் ஒரே இறைவன் என்ற நம்பிக்கையைக் குறிக்கிறது.",
    difficulty: "easy",
    category: "aqeedah",
  },
]

// Combine all Tamil questions
const allTamilQuestions: QuizQuestion[] = [
  ...tamilQuranQuestions,
  ...tamilFiqhQuestions,
  ...tamilHadithQuestions,
  ...tamilSeerahQuestions,
  ...tamilAqeedahQuestions,
]

export function getTamilQuestionsForCategory(categoryId: string): QuizQuestion[] {
  return allTamilQuestions.filter((q) => q.category === categoryId)
}

export function getAllTamilQuestions(): QuizQuestion[] {
  return allTamilQuestions
}
