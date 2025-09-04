import type { QuizQuestion } from "@/types/quiz"

// Tamil translations for Quran category questions
export const tamilQuranQuestions: QuizQuestion[] = [
  {
    id: "quran-ta-1",
    question: "குர்ஆனின் முதல் சூரா (அத்தியாயம்) எது?",
    options: ["அல்-ஃபாத்திஹா", "அல்-பகரா", "யூசுஃப்", "அர்-ரஹ்மான்"],
    correctAnswer: "அல்-ஃபாத்திஹா",
    explanation: "சூரா அல்-ஃபாத்திஹா, அதாவது 'தொடக்கம்', குர்ஆனின் முதல் அத்தியாயமாகும்.",
  },
  {
    id: "quran-ta-2",
    question: "குர்ஆனில் எத்தனை சூராக்கள் (அத்தியாயங்கள்) உள்ளன?",
    options: ["110", "114", "120", "130"],
    correctAnswer: "114",
    explanation: "குர்ஆனில் 114 அத்தியாயங்கள் உள்ளன, அவை நீளம் மற்றும் கருப்பொருளில் வேறுபடுகின்றன.",
  },
  {
    id: "quran-ta-3",
    question: "குர்ஆனின் மிக நீளமான சூரா எது?",
    options: ["ஆல் இம்ரான்", "அன்-நிசா", "அல்-கஹ்ஃப்", "அல்-பகரா"],
    correctAnswer: "அல்-பகரா",
    explanation: "சூரா அல்-பகரா, அதாவது 'பசு', குர்ஆனின் மிக நீளமான அத்தியாயமாகும்.",
  },
  {
    id: "quran-ta-4",
    question: "குர்ஆனின் மிகச் சிறிய சூரா எது?",
    options: ["அல்-கவ்தர்", "அல்-அஸ்ர்", "அல்-இக்லாஸ்", "அன்-நஸ்ர்"],
    correctAnswer: "அல்-கவ்தர்",
    explanation: "சூரா அல்-கவ்தர், அதாவது 'சொர்க்கத்தின் நதி', குர்ஆனின் மிகச் சிறிய அத்தியாயமாகும், இதில் மூன்று வசனங்கள் உள்ளன.",
  },
  {
    id: "quran-ta-5",
    question: "எந்த சூரா 'குர்ஆனின் இதயம்' என்று அழைக்கப்படுகிறது?",
    options: ["யாசீன்", "அல்-ஃபாத்திஹா", "அல்-இக்லாஸ்", "அர்-ரஹ்மான்"],
    correctAnswer: "யாசீன்",
    explanation: "சூரா யாசீன் அதன் மைய செய்தி மற்றும் முக்கியத்துவத்தின் காரணமாக 'குர்ஆனின் இதயம்' என்று அழைக்கப்படுகிறது.",
  },
]

// Tamil translations for Fiqh category questions
export const tamilFiqhQuestions: QuizQuestion[] = [
  {
    id: "fiqh-ta-1",
    question: "ஒரு முஸ்லிமின் முதல் கடமை என்ன?",
    options: [
      "நாளொன்றுக்கு ஐந்து முறை தொழுகை செய்வது",
      "அல்லாஹ் மற்றும் அவனது தூதரை நம்புவது",
      "ரமலானில் நோன்பு நோற்பது",
      "ஸகாத் கொடுப்பது",
    ],
    correctAnswer: "அல்லாஹ் மற்றும் அவனது தூதரை நம்புவது",
    explanation: "ஷஹாதா (நம்பிக்கை அறிக்கை) இஸ்லாமின் முதல் மற்றும் மிக அடிப்படையான தூணாகும்.",
  },
  {
    id: "fiqh-ta-2",
    question: "ஒரு நாளில் எத்தனை கட்டாய தொழுகைகள் உள்ளன?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    explanation: "ஒரு நாளில் ஐந்து கட்டாய தொழுகைகள் உள்ளன: ஃபஜ்ர், துஹர், அஸர், மஃக்ரிப் மற்றும் இஷா.",
  },
  {
    id: "fiqh-ta-3",
    question: "தங்கத்திற்கான ஸகாத்தின் குறைந்தபட்ச அளவு (நிஸாப்) என்ன?",
    options: ["50 கிராம்", "85 கிராம்", "100 கிராம்", "200 கிராம்"],
    correctAnswer: "85 கிராம்",
    explanation: "தங்கத்திற்கான நிஸாப் 85 கிராம் (அல்லது நாணயத்தில் அதற்கு சமமான மதிப்பு).",
  },
]

// Tamil translations for Hadeeth category questions
export const tamilHadeethQuestions: QuizQuestion[] = [
  {
    id: "hadeeth-ta-1",
    question: "'ஹதீஸ்' என்ற சொல்லின் பொருள் என்ன?",
    options: ["தொழுகை", "கதை", "புத்தகம்", "சட்டம்"],
    correctAnswer: "கதை",
    explanation:
      "ஹதீஸ் என்பது ஒரு கதை, கணக்கு அல்லது அறிக்கை என்று பொருள். இஸ்லாமிய சூழலில், இது நபி முஹம்மது (ஸல்) அவர்களின் வாக்குகள், செயல்கள் அல்லது ஒப்புதல்களைக் குறிக்கிறது.",
  },
  {
    id: "hadeeth-ta-2",
    question: "ஹதீஸின் இரண்டு முக்கிய கூறுகள் என்ன?",
    options: ["குர்ஆன் மற்றும் சுன்னா", "இஸ்னாத் மற்றும் மத்ன்", "ஸஹீஹ் மற்றும் தயீஃப்", "ஃபிக்ஹ் மற்றும் அகீதா"],
    correctAnswer: "இஸ்னாத் மற்றும் மத்ன்",
    explanation: "ஒரு ஹதீஸ் இஸ்னாத் (கதைசொல்பவர்களின் சங்கிலி) மற்றும் மத்ன் (கதையின் உண்மையான உரை அல்லது உள்ளடக்கம்) ஆகியவற்றைக் கொண்டுள்ளது.",
  },
]

// Tamil translations for Aqeedah category questions
export const tamilAqeedahQuestions: QuizQuestion[] = [
  {
    id: "aqeedah-ta-1",
    question: "'அகீதா' என்றால் என்ன?",
    options: ["தொழுகை", "நம்பிக்கை", "தர்மம்", "நோன்பு"],
    correctAnswer: "நம்பிக்கை",
    explanation:
      "அகீதா என்பது இஸ்லாமின் முக்கிய நம்பிக்கைகள் மற்றும் கொள்கைகளைக் குறிக்கிறது, அதில் ஒரு முஸ்லிம் உறுதியான நம்பிக்கை கொண்டிருக்க வேண்டும்.",
  },
  {
    id: "aqeedah-ta-2",
    question: "இஸ்லாமில் எத்தனை நம்பிக்கைக் கட்டுரைகள் உள்ளன?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
    explanation:
      "இஸ்லாமில் ஆறு நம்பிக்கைக் கட்டுரைகள் உள்ளன: அல்லாஹ், அவனது தேவதூதர்கள், அவனது புத்தகங்கள், அவனது தூதர்கள், நியாயத்தீர்ப்பு நாள் மற்றும் தெய்வீக விதி மீதான நம்பிக்கை.",
  },
]

// Function to get Tamil questions for a specific category
export function getTamilQuestionsForCategory(categoryId: string): QuizQuestion[] {
  switch (categoryId) {
    case "quran":
      return tamilQuranQuestions
    case "fiqh":
      return tamilFiqhQuestions
    case "hadeeth":
      return tamilHadeethQuestions
    case "aqeedah":
      return tamilAqeedahQuestions
    default:
      return []
  }
}

// Function to get all Tamil questions
export function getAllTamilQuestions(): QuizQuestion[] {
  return [...tamilQuranQuestions, ...tamilFiqhQuestions, ...tamilHadeethQuestions, ...tamilAqeedahQuestions]
}
