import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        categories: "Quiz",
        challenges: "Challenges",
        leaderboard: "Leaderboard",
        badges: "Badges",
        profile: "Profile",
        about: "About",
        signIn: "Sign In",
        signOut: "Sign Out",
      },
      home: {
        title: "IQRA - Islamic Quiz Rivalry App",
        subtitle: "Increase & Test your Islamic knowledge through interactive quizzes and challenges",
        getStarted: "Get Started",
        signInToStart: "Sign in to start your Islamic learning journey",
        welcomeBack: "Welcome back to IQRA!",
        continueJourney: "Continue your Islamic learning journey",
        learningMode: {
          title: "Learning Mode",
          description: "Study and learn at your own pace",
          features: [
            "Interactive quizzes on Islamic topics",
            "Detailed explanations for each answer",
            "Progress tracking and statistics",
            "Multiple categories to choose from",
          ],
          startButton: "Start Learning",
        },
        challengeMode: {
          title: "Challenge Mode",
          description: "Compete with other users",
          features: [
            "Real-time competitions with other users",
            "Leaderboards and rankings",
            "Achievement badges and rewards",
            "Social features and community",
          ],
          startButton: "Start Challenges",
        },
      },
    },
  },
  ta: {
    translation: {
      nav: {
        home: "முகப்பு",
        categories: "வினாடி வினா",
        challenges: "சவால்கள்",
        leaderboard: "தலைமை பலகை",
        badges: "பதக்கங்கள்",
        profile: "சுயவிவரம்",
        about: "பற்றி",
        signIn: "உள்நுழைய",
        signOut: "வெளியேறு",
      },
      home: {
        title: "இக்ரா - இஸ்லாமிய வினாடி வினா போட்டி பயன்பாடு",
        subtitle: "ஊடாடும் வினாக்கள் மற்றும் சவால்கள் மூலம் உங்கள் இஸ்லாமிய அறிவை அதிகரித்து சோதிக்கவும்",
        getStarted: "தொடங்கவும்",
        signInToStart: "உங்கள் இஸ்லாமிய கற்றல் பயணத்தைத் தொடங்க உள்நுழையவும்",
        welcomeBack: "இக்ராவுக்கு மீண்டும் வரவேற்கிறோம்!",
        continueJourney: "உங்கள் இஸ்லாமிய கற்றல் பயணத்தைத் தொடரவும்",
        learningMode: {
          title: "கற்றல் முறை",
          description: "உங்கள் சொந்த வேகத்தில் படித்து கற்றுக்கொள்ளுங்கள்",
          features: [
            "இஸ்லாமிய தலைப்புகளில் ஊடாடும் வினாக்கள்",
            "ஒவ்வொரு பதிலுக்கும் விரிவான விளக்கங்கள்",
            "முன்னேற்ற கண்காணிப்பு மற்றும் புள்ளிவிவரங்கள்",
            "தேர்ந்தெடுக்க பல வகைகள்",
          ],
          startButton: "கற்றலைத் தொடங்கவும்",
        },
        challengeMode: {
          title: "சவால் முறை",
          description: "பிற பயனர்களுடன் போட்டியிடுங்கள்",
          features: [
            "பிற பயனர்களுடன் நேரடி போட்டிகள்",
            "தலைமை பலகைகள் மற்றும் தரவரிசைகள்",
            "சாதனை பதக்கங்கள் மற்றும் வெகுமதிகள்",
            "சமூக அம்சங்கள் மற்றும் சமூகம்",
          ],
          startButton: "சவால்களைத் தொடங்கவும்",
        },
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
