import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      // Navigation
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
      // Home page
      home: {
        title: "IQRA - Islamic Quiz Rivalry App",
        subtitle: "Increase & Test your Islamic knowledge through interactive quizzes and challenges",
        learningMode: {
          title: "Learning Mode",
          description: "Practice and improve your Islamic knowledge at your own pace",
          features: ["Self-paced learning", "Instant feedback", "Progress tracking", "Multiple categories"],
          button: "Start Learning",
        },
        challengeMode: {
          title: "Challenge Mode",
          description: "Compete with friends and other Muslims worldwide",
          features: ["Real-time competitions", "Global leaderboards", "Achievement badges", "Social features"],
          button: "Join Challenge",
        },
        getStarted: "Get Started",
        signInPrompt: "Sign in to access all features and track your progress",
      },
    },
  },
  ta: {
    translation: {
      // Navigation
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
      // Home page
      home: {
        title: "இக்ரா - இஸ்லாமிய வினாடி வினா போட்டி பயன்பாடு",
        subtitle: "ஊடாடும் வினாடி வினாக்கள் மற்றும் சவால்கள் மூலம் உங்கள் இஸ்லாமிய அறிவை அதிகரித்து சோதிக்கவும்",
        learningMode: {
          title: "கற்றல் முறை",
          description: "உங்கள் சொந்த வேகத்தில் இஸ்லாமிய அறிவை பயிற்சி செய்து மேம்படுத்துங்கள்",
          features: ["சுய-வேக கற்றல்", "உடனடி கருத்து", "முன்னேற்ற கண்காணிப்பு", "பல வகைகள்"],
          button: "கற்றல் தொடங்கு",
        },
        challengeMode: {
          title: "சவால் முறை",
          description: "நண்பர்கள் மற்றும் உலகெங்கிலும் உள்ள மற்ற முஸ்லிம்களுடன் போட்டியிடுங்கள்",
          features: ["நேரடி போட்டிகள்", "உலகளாவிய தலைமை பலகைகள்", "சாதனை பதக்கங்கள்", "சமூக அம்சங்கள்"],
          button: "சவாலில் சேரு",
        },
        getStarted: "தொடங்குங்கள்",
        signInPrompt: "அனைத்து அம்சங்களையும் அணுக மற்றும் உங்கள் முன்னேற்றத்தை கண்காணிக்க உள்நுழையவும்",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
