import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

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
        title: "IQRA - Islamic Knowledge Quiz",
        subtitle: "Test and enhance your Islamic knowledge through interactive quizzes and challenges",
        learningMode: {
          title: "Learning Mode",
          description: "Study at your own pace",
          content:
            "Explore Islamic knowledge through carefully curated questions across multiple categories. Perfect for building your foundation.",
          features: {
            categories: "21+ Categories",
            questions: "1000+ Questions",
            difficulty: "Easy & Advanced levels",
          },
          button: "Start Learning",
        },
        challengeMode: {
          title: "Challenge Mode",
          description: "Compete with others",
          content:
            "Test your knowledge against other users in real-time challenges. Climb the leaderboard and earn badges.",
          features: {
            realTime: "Real-time challenges",
            leaderboard: "Global leaderboard",
            badges: "Achievement badges",
          },
          button: "Start Challenge",
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
        title: "இக்ரா - இஸ்லாமிய அறிவு வினாடி வினா",
        subtitle: "ஊடாடும் வினாடி வினா மற்றும் சவால்கள் மூலம் உங்கள் இஸ்லாமிய அறிவை சோதித்து மேம்படுத்துங்கள்",
        learningMode: {
          title: "கற்றல் முறை",
          description: "உங்கள் வேகத்தில் படிக்கவும்",
          content: "பல வகைகளில் கவனமாக தேர்ந்தெடுக்கப்பட்ட கேள்விகள் மூலம் இஸ்லாமிய அறிவை ஆராயுங்கள். உங்கள் அடித்தளத்தை உருவாக்க சிறந்தது.",
          features: {
            categories: "21+ வகைகள்",
            questions: "1000+ கேள்விகள்",
            difficulty: "எளிய மற்றும் மேம்பட்ட நிலைகள்",
          },
          button: "கற்றலைத் தொடங்கு",
        },
        challengeMode: {
          title: "சவால் முறை",
          description: "மற்றவர்களுடன் போட்டியிடுங்கள்",
          content: "நிகழ்நேர சவால்களில் மற்ற பயனர்களுக்கு எதிராக உங்கள் அறிவை சோதிக்கவும். தலைமை பலகையில் ஏறி பதக்கங்களை வெல்லுங்கள்.",
          features: {
            realTime: "நிகழ்நேர சவால்கள்",
            leaderboard: "உலகளாவிய தலைமை பலகை",
            badges: "சாதனை பதக்கங்கள்",
          },
          button: "சவாலைத் தொடங்கு",
        },
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  })

export default i18n
