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

  // App Title & Branding
  appTitle: string
  appDescription: string

  // Categories
  categories: string
  selectCategory: string
  quran: string
  fiqh: string
  hadeeth: string
  seerah: string
  aqeedah: string
  tafsir: string
  tazkiyah: string
  history: string
  dawah: string
  newMuslims: string
  comparative: string
  islamicFinance: string

  // Category Descriptions
  quranDesc: string
  fiqhDesc: string
  hadeethDesc: string
  seerahDesc: string
  aqeedahDesc: string
  tafsirDesc: string
  tazkiyahDesc: string
  historyDesc: string
  dawahDesc: string
  newMuslimsDesc: string
  comparativeDesc: string
  islamicFinanceDesc: string

  // Difficulty Levels
  easy: string
  intermediate: string
  advanced: string
  mixed: string

  // Quiz Interface
  question: string
  questionOf: string
  submitAnswer: string
  nextQuestion: string
  previousQuestion: string
  finishQuiz: string
  explanation: string
  correct: string
  incorrect: string
  timeLeft: string
  score: string

  // Results
  quizCompleted: string
  yourScore: string
  percentage: string
  correctAnswers: string
  totalQuestions: string
  tryAgain: string
  backToCategories: string

  // Challenge System
  challenge: string
  challengeMode: string
  challenger: string
  opponent: string
  sendChallenge: string
  acceptChallenge: string
  declineChallenge: string
  challengeSent: string
  challengeAccepted: string
  challengeDeclined: string
  challengeExpired: string
  findChallengers: string

  // Authentication
  welcome: string
  signInWithGoogle: string
  signInWithGithub: string
  email: string
  password: string
  fullName: string
  createAccount: string
  alreadyHaveAccount: string
  dontHaveAccount: string

  // Profile & Stats
  totalScore: string
  bestPercentage: string
  quizzesCompleted: string
  averageScore: string
  badges: string
  achievements: string

  // Common Actions
  loading: string
  save: string
  cancel: string
  delete: string
  edit: string
  view: string
  share: string

  // Messages & Notifications
  success: string
  error: string
  warning: string
  info: string
  pleaseWait: string
  tryAgainLater: string

  // Time & Dates
  minutes: string
  seconds: string
  hours: string
  days: string
  ago: string

  // Islamic Terms
  shahada: string
  salah: string
  zakat: string
  sawm: string
  hajj: string
  wudu: string
  qibla: string
  ramadan: string
  eid: string

  // Leaderboard
  rank: string
  player: string
  points: string

  // About Page
  aboutIqra: string
  aboutDescription: string
  features: string
  contact: string
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

    // App Title & Branding
    appTitle: "IQRA",
    appDescription: "Islamic Quiz Rivalry App - Test your Islamic knowledge through interactive quizzes and challenges",

    // Categories
    categories: "Categories",
    selectCategory: "Select a Category",
    quran: "Quran",
    fiqh: "Fiqh",
    hadeeth: "Hadeeth",
    seerah: "Seerah",
    aqeedah: "Aqeedah",
    tafsir: "Tafsir",
    tazkiyah: "Tazkiyah",
    history: "Islamic History",
    dawah: "Dawah",
    newMuslims: "New Muslims",
    comparative: "Comparative Religion",
    islamicFinance: "Islamic Finance",

    // Category Descriptions
    quranDesc: "Test your knowledge of the Holy Quran",
    fiqhDesc: "Islamic Jurisprudence and Law",
    hadeethDesc: "Prophetic Traditions and Sayings",
    seerahDesc: "Life and Biography of Prophet Muhammad",
    aqeedahDesc: "Islamic Beliefs and Creed",
    tafsirDesc: "Quranic Commentary and Interpretation",
    tazkiyahDesc: "Spiritual Purification and Development",
    historyDesc: "History of Islam and Muslim Civilization",
    dawahDesc: "Islamic Outreach and Invitation",
    newMuslimsDesc: "Essential Knowledge for New Muslims",
    comparativeDesc: "Comparative Study of Religions",
    islamicFinanceDesc: "Islamic Banking and Finance Principles",

    // Difficulty Levels
    easy: "Easy",
    intermediate: "Intermediate",
    advanced: "Advanced",
    mixed: "Mixed",

    // Quiz Interface
    question: "Question",
    questionOf: "of",
    submitAnswer: "Submit Answer",
    nextQuestion: "Next",
    previousQuestion: "Previous",
    finishQuiz: "Finish Quiz",
    explanation: "Explanation",
    correct: "Correct",
    incorrect: "Incorrect",
    timeLeft: "Time Left",
    score: "Score",

    // Results
    quizCompleted: "Quiz Completed!",
    yourScore: "Your Score",
    percentage: "Percentage",
    correctAnswers: "Correct Answers",
    totalQuestions: "Total Questions",
    tryAgain: "Try Again",
    backToCategories: "Back to Categories",

    // Challenge System
    challenge: "Challenge",
    challengeMode: "Challenge Mode",
    challenger: "Challenger",
    opponent: "Opponent",
    sendChallenge: "Send Challenge",
    acceptChallenge: "Accept Challenge",
    declineChallenge: "Decline Challenge",
    challengeSent: "Challenge Sent!",
    challengeAccepted: "Challenge Accepted!",
    challengeDeclined: "Challenge Declined",
    challengeExpired: "Challenge Expired",
    findChallengers: "Find Challengers",

    // Authentication
    welcome: "Welcome",
    signInWithGoogle: "Sign in with Google",
    signInWithGithub: "Sign in with GitHub",
    email: "Email",
    password: "Password",
    fullName: "Full Name",
    createAccount: "Create Account",
    alreadyHaveAccount: "Already have an account? Sign in",
    dontHaveAccount: "Don't have an account? Sign up",

    // Profile & Stats
    totalScore: "Total Score",
    bestPercentage: "Best Percentage",
    quizzesCompleted: "Quizzes Completed",
    averageScore: "Average Score",
    badges: "Badges",
    achievements: "Achievements",

    // Common Actions
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    share: "Share",

    // Messages & Notifications
    success: "Success",
    error: "Error",
    warning: "Warning",
    info: "Information",
    pleaseWait: "Please wait...",
    tryAgainLater: "Please try again later",

    // Time & Dates
    minutes: "minutes",
    seconds: "seconds",
    hours: "hours",
    days: "days",
    ago: "ago",

    // Islamic Terms
    shahada: "Shahada (Declaration of Faith)",
    salah: "Salah (Prayer)",
    zakat: "Zakat (Charity)",
    sawm: "Sawm (Fasting)",
    hajj: "Hajj (Pilgrimage)",
    wudu: "Wudu (Ablution)",
    qibla: "Qibla (Direction of Prayer)",
    ramadan: "Ramadan",
    eid: "Eid",

    // Leaderboard
    rank: "Rank",
    player: "Player",
    points: "Points",

    // About Page
    aboutIqra: "About IQRA",
    aboutDescription:
      "IQRA is an interactive Islamic learning platform that helps Muslims test and improve their knowledge of Islam through engaging quizzes and challenges.",
    features: "Features",
    contact: "Contact",
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

    // App Title & Branding
    appTitle: "இக்ரா",
    appDescription: "இஸ்லாமிய வினாடி வினா போட்டி செயலி - ஊடாடும் வினாடி வினாக்கள் மற்றும் சவால்கள் மூலம் உங்கள் இஸ்லாமிய அறிவை சோதிக்கவும்",

    // Categories
    categories: "பிரிவுகள்",
    selectCategory: "ஒரு பிரிவை தேர்ந்தெடுக்கவும்",
    quran: "குர்ஆன்",
    fiqh: "ஃபிக்ஹ்",
    hadeeth: "ஹதீஸ்",
    seerah: "சீரா",
    aqeedah: "அகீதா",
    tafsir: "தஃப்சீர்",
    tazkiyah: "தஸ்கியா",
    history: "இஸ்லாமிய வரலாறு",
    dawah: "தஃவா",
    newMuslims: "புதிய முஸ்லிம்கள்",
    comparative: "ஒப்பீட்டு மதம்",
    islamicFinance: "இஸ்லாமிய நிதி",

    // Category Descriptions
    quranDesc: "புனித குர்ஆனின் அறிவை சோதிக்கவும்",
    fiqhDesc: "இஸ்லாமிய நீதிநூல் மற்றும் சட்டம்",
    hadeethDesc: "நபிகள் நாயகத்தின் மரபுகள் மற்றும் வாக்குகள்",
    seerahDesc: "நபி முஹம்மதின் வாழ்க்கை மற்றும் வரலாறு",
    aqeedahDesc: "இஸ்லாமிய நம்பிக்கைகள் மற்றும் கொள்கை",
    tafsirDesc: "குர்ஆன் விளக்கவுரை மற்றும் விளக்கம்",
    tazkiyahDesc: "ஆன்மீக தூய்மை மற்றும் வளர்ச்சி",
    historyDesc: "இஸ்லாம் மற்றும் முஸ்லிம் நாகரிகத்தின் வரலாறு",
    dawahDesc: "இஸ்லாமிய அழைப்பு மற்றும் பிரச்சாரம்",
    newMuslimsDesc: "புதிய முஸ்லிம்களுக்கான அத்தியாவசிய அறிவு",
    comparativeDesc: "மதங்களின் ஒப்பீட்டு ஆய்வு",
    islamicFinanceDesc: "இஸ்லாமிய வங்கி மற்றும் நிதி கொள்கைகள்",

    // Difficulty Levels
    easy: "எளிது",
    intermediate: "இடைநிலை",
    advanced: "மேம்பட்ட",
    mixed: "கலவை",

    // Quiz Interface
    question: "கேள்வி",
    questionOf: "இல்",
    submitAnswer: "பதில் சமர்பிக்கவும்",
    nextQuestion: "அடுத்தது",
    previousQuestion: "முந்தைய",
    finishQuiz: "வினாடி வினாவை முடிக்கவும்",
    explanation: "விளக்கம்",
    correct: "சரி",
    incorrect: "தவறு",
    timeLeft: "மீதமுள்ள நேரம்",
    score: "மதிப்பெண்",

    // Results
    quizCompleted: "வினாடி வினா முடிந்தது!",
    yourScore: "உங்கள் மதிப்பெண்",
    percentage: "சதவீதம்",
    correctAnswers: "சரியான பதில்கள்",
    totalQuestions: "மொத்த கேள்விகள்",
    tryAgain: "மீண்டும் முயற்சிக்கவும்",
    backToCategories: "பிரிவுகளுக்கு திரும்பு",

    // Challenge System
    challenge: "சவால்",
    challengeMode: "சவால் முறை",
    challenger: "சவால் விடுபவர்",
    opponent: "எதிராளி",
    sendChallenge: "சவால் அனுப்பு",
    acceptChallenge: "சவாலை ஏற்கவும்",
    declineChallenge: "சவாலை நிராகரிக்கவும்",
    challengeSent: "சவால் அனுப்பப்பட்டது!",
    challengeAccepted: "சவால் ஏற்கப்பட்டது!",
    challengeDeclined: "சவால் நிராகரிக்கப்பட்டது",
    challengeExpired: "சவால் காலாவதியானது",
    findChallengers: "சவால் விடுபவர்களை கண்டறியவும்",

    // Authentication
    welcome: "வரவேற்கிறோம்",
    signInWithGoogle: "Google மூலம் உள்நுழையவும்",
    signInWithGithub: "GitHub மூலம் உள்நுழையவும்",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    fullName: "முழு பெயர்",
    createAccount: "கணக்கு உருவாக்கவும்",
    alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்",
    dontHaveAccount: "கணக்கு இல்லையா? பதிவு செய்யவும்",

    // Profile & Stats
    totalScore: "மொத்த மதிப்பெண்",
    bestPercentage: "சிறந்த சதவீதம்",
    quizzesCompleted: "முடிக்கப்பட்ட வினாடி வினாக்கள்",
    averageScore: "சராசரி மதிப்பெண்",
    badges: "பேட்ஜ்கள்",
    achievements: "சாதனைகள்",

    // Common Actions
    loading: "ஏற்றுகிறது...",
    save: "சேமிக்கவும்",
    cancel: "ரத்து செய்யவும்",
    delete: "நீக்கவும்",
    edit: "திருத்தவும்",
    view: "பார்க்கவும்",
    share: "பகிரவும்",

    // Messages & Notifications
    success: "வெற்றி",
    error: "பிழை",
    warning: "எச்சரிக்கை",
    info: "தகவல்",
    pleaseWait: "தயவுசெய்து காத்திருக்கவும்...",
    tryAgainLater: "தயவுசெய்து பின்னர் மீண்டும் முயற்சிக்கவும்",

    // Time & Dates
    minutes: "நிமிடங்கள்",
    seconds: "விநாடிகள்",
    hours: "மணிநேரங்கள்",
    days: "நாட்கள்",
    ago: "முன்பு",

    // Islamic Terms (keeping Arabic with Tamil explanations)
    shahada: "ஷஹாதா (நம்பிக்கை அறிக்கை)",
    salah: "ஸலாஹ் (தொழுகை)",
    zakat: "ஸகாத் (தர்மம்)",
    sawm: "ஸவ்ம் (நோன்பு)",
    hajj: "ஹஜ் (புனித யாத்திரை)",
    wudu: "வுழூ (அங்க சுத்தம்)",
    qibla: "கிப்லா (தொழுகை திசை)",
    ramadan: "ரமலான்",
    eid: "ஈத்",

    // Leaderboard
    rank: "தரவரிசை",
    player: "வீரர்",
    points: "புள்ளிகள்",

    // About Page
    aboutIqra: "இக்ரா பற்றி",
    aboutDescription:
      "இக்ரா என்பது ஒரு ஊடாடும் இஸ்லாமிய கற்றல் தளமாகும், இது முஸ்லிம்கள் ஈர்க்கும் வினாடி வினாக்கள் மற்றும் சவால்கள் மூலம் இஸ்லாம் பற்றிய தங்கள் அறிவை சோதிக்கவும் மேம்படுத்தவும் உதவுகிறது.",
    features: "அம்சங்கள்",
    contact: "தொடர்பு",
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
