export interface Translation {
  // Navigation & Header
  home: string
  quiz: string
  challenges: string
  leaderboard: string
  profile: string
  about: string
  signIn: string
  signOut: string
  appTitle: string

  // Auth Modal
  welcome: string
  joinIqra: string
  welcomeBack: string
  continueWithGoogle: string
  continueWithGithub: string
  orContinueWith: string
  fullName: string
  email: string
  password: string
  enterFullName: string
  enterEmail: string
  enterPassword: string
  createAccount: string
  pleaseWait: string
  alreadyHaveAccount: string
  dontHaveAccount: string
  checkEmailForVerification: string
  signedInSuccessfully: string
  authenticationFailed: string
  failedToSignInWith: string

  // Common
  loading: string
  error: string
  success: string
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation & Header
    home: "Home",
    quiz: "Quiz",
    challenges: "Challenges",
    leaderboard: "Leaderboard",
    profile: "Profile",
    about: "About",
    signIn: "Sign In",
    signOut: "Sign Out",
    appTitle: "IQRA",

    // Auth Modal
    welcome: "Welcome",
    joinIqra: "Join IQRA",
    welcomeBack: "Welcome Back",
    continueWithGoogle: "Continue with Google",
    continueWithGithub: "Continue with GitHub",
    orContinueWith: "Or continue with",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    enterFullName: "Enter your full name",
    enterEmail: "Enter your email",
    enterPassword: "Enter your password",
    createAccount: "Create Account",
    pleaseWait: "Please wait...",
    alreadyHaveAccount: "Already have an account? Sign in",
    dontHaveAccount: "Don't have an account? Sign up",
    checkEmailForVerification: "Check your email for verification link!",
    signedInSuccessfully: "Signed in successfully!",
    authenticationFailed: "Authentication failed",
    failedToSignInWith: "Failed to sign in with",

    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },

  ta: {
    // Navigation & Header
    home: "முகப்பு",
    quiz: "வினாடி வினா",
    challenges: "சவால்கள்",
    leaderboard: "தலைமை பலகை",
    profile: "சுயவிவரம்",
    about: "பற்றி",
    signIn: "உள்நுழைய",
    signOut: "வெளியேறு",
    appTitle: "இக்ரா",

    // Auth Modal
    welcome: "வரவேற்கிறோம்",
    joinIqra: "இக்ராவில் சேரவும்",
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    continueWithGoogle: "Google மூலம் தொடரவும்",
    continueWithGithub: "GitHub மூலம் தொடரவும்",
    orContinueWith: "அல்லது இதன் மூலம் தொடரவும்",
    fullName: "முழு பெயர்",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    enterFullName: "உங்கள் முழு பெயரை உள்ளிடவும்",
    enterEmail: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    enterPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
    createAccount: "கணக்கு உருவாக்கவும்",
    pleaseWait: "தயவுசெய்து காத்திருக்கவும்...",
    alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்",
    dontHaveAccount: "கணக்கு இல்லையா? பதிவு செய்யவும்",
    checkEmailForVerification: "சரிபார்ப்பு இணைப்புக்காக உங்கள் மின்னஞ்சலைச் சரிபார்க்கவும்!",
    signedInSuccessfully: "வெற்றிகரமாக உள்நுழைந்தீர்கள்!",
    authenticationFailed: "அங்கீகாரம் தோல்வியடைந்தது",
    failedToSignInWith: "இதன் மூலம் உள்நுழைவதில் தோல்வி",

    // Common
    loading: "ஏற்றுகிறது...",
    error: "பிழை",
    success: "வெற்றி",
  },
}

export function getTranslation(key: keyof Translation, language = "en"): string {
  return translations[language]?.[key] || translations.en[key] || key
}

export function getCurrentLanguage(): string {
  if (typeof window !== "undefined") {
    return localStorage.getItem("iqra-language") || "en"
  }
  return "en"
}

export function setLanguage(language: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("iqra-language", language)
    window.dispatchEvent(new CustomEvent("languageChange", { detail: language }))
  }
}

export const supportedLanguages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
]
