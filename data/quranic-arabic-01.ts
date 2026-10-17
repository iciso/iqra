
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
    // New easy questions
    {
      id: "qav-easy-008",
      question: "What does فِي (fī) mean?",
      options: ["In", "After", "Under", "Without"],
      correctAnswer: "In",
      explanation:
        "فِي (fī) means “in” or “within”. It is extremely common, e.g. in Quran 2:2. The target word has two Arabic letters.",
    },
    {
      id: "qav-easy-009",
      question: "What does عَلَى (ʿalā) mean?",
      options: ["On / upon", "From", "Before", "With"],
      correctAnswer: "On / upon",
      explanation:
        "عَلَى (ʿalā) means “on” or “upon”. See Quran 2:5. The target word has three Arabic letters.",
    },
    {
      id: "qav-easy-010",
      question: "What does إِلَى (ilā) mean?",
      options: ["To / towards", "From", "Above", "Except"],
      correctAnswer: "To / towards",
      explanation:
        "إِلَى (ilā) means “to” or “towards”. It appears frequently, e.g. Quran 2:210. The target word has three Arabic letters.",
    },
    {
      id: "qav-easy-011",
      question: "What does لَا (lā) mean?",
      options: ["No / not", "Yes", "And", "Or"],
      correctAnswer: "No / not",
      explanation:
        "لَا (lā) is the common negation particle meaning “no” or “not”. Famous in لَا إِلَٰهَ إِلَّا اللَّهُ. One Arabic letter.",
    },
    {
      id: "qav-easy-012",
      question: "What does أَرْض (arḍ) mean?",
      options: ["Earth / land", "Sky", "Water", "Fire"],
      correctAnswer: "Earth / land",
      explanation:
        "أَرْض (arḍ) means “earth” or “land”. See Quran 2:22. The target word has three Arabic letters.",
    },
    {
      id: "qav-easy-013",
      question: "What does نَاس (nās) mean?",
      options: ["People / mankind", "Angels", "Books", "Days"],
      correctAnswer: "People / mankind",
      explanation:
        "نَاس (nās) means “people” or “mankind”. See يَا أَيُّهَا النَّاسُ in Quran 2:21. Three Arabic letters.",
    },
    {
      id: "qav-easy-014",
      question: "What does مَاء (māʾ) mean?",
      options: ["Water", "Light", "Fire", "Wind"],
      correctAnswer: "Water",
      explanation:
        "مَاء (māʾ) means “water”. It appears in many verses about creation, e.g. Quran 2:22. Three Arabic letters.",
    },
    {
      id: "qav-easy-015",
      question: "What does نَار (nār) mean?",
      options: ["Fire", "Garden", "Path", "Book"],
      correctAnswer: "Fire",
      explanation:
        "نَار (nār) means “fire” (often referring to Hellfire). See Quran 2:24. Three Arabic letters.",
    },
    {
      id: "qav-easy-016",
      question: "What does جَنَّة (jannah) mean?",
      options: ["Garden / Paradise", "Punishment", "Night", "Mountain"],
      correctAnswer: "Garden / Paradise",
      explanation:
        "جَنَّة (jannah) means “garden” and is the word for Paradise. See Quran 2:25. Four Arabic letters.",
    },
    {
      id: "qav-easy-017",
      question: "What does حَقّ (ḥaqq) mean?",
      options: ["Truth / right", "Falsehood", "Doubt", "Speech"],
      correctAnswer: "Truth / right",
      explanation:
        "حَقّ (ḥaqq) means “truth” or “right”. See Quran 2:42. Three Arabic letters.",
    },
    {
      id: "qav-easy-018",
      question: "What does خَيْر (khayr) mean?",
      options: ["Good / goodness", "Evil", "Punishment", "Night"],
      correctAnswer: "Good / goodness",
      explanation:
        "خَيْر (khayr) means “good” or “goodness”. See Quran 2:105. Three Arabic letters.",
    },
    {
      id: "qav-easy-019",
      question: "What does دِين (dīn) mean?",
      options: ["Religion / judgment", "Book", "Heart", "Water"],
      correctAnswer: "Religion / judgment",
      explanation:
        "دِين (dīn) means “religion”, “way of life”, or “judgment”. See مَالِكِ يَوْمِ الدِّينِ in Quran 1:4. Three Arabic letters.",
    },
    {
      id: "qav-easy-020",
      question: "What does صَلَاة (ṣalāh) mean?",
      options: ["Prayer", "Charity", "Fasting", "Pilgrimage"],
      correctAnswer: "Prayer",
      explanation:
        "صَلَاة (ṣalāh) means the ritual prayer. See أَقِيمُوا الصَّلَاةَ in Quran 2:43. Four Arabic letters.",
    },
    {
      id: "qav-easy-021",
      question: "What does زَكَاة (zakāh) mean?",
      options: ["Charity / almsgiving", "Prayer", "Fasting", "Knowledge"],
      correctAnswer: "Charity / almsgiving",
      explanation:
        "زَكَاة (zakāh) means obligatory charity or purification of wealth. See Quran 2:43. Four Arabic letters.",
    },
    {
      id: "qav-easy-022",
      question: "What does إِيمَان (īmān) mean?",
      options: ["Faith / belief", "Disbelief", "Patience", "Mercy"],
      correctAnswer: "Faith / belief",
      explanation:
        "إِيمَان (īmān) means “faith” or “belief”. See Quran 2:108. Five Arabic letters.",
    },
    {
      id: "qav-easy-023",
      question: "What does رَحْمَة (raḥmah) mean?",
      options: ["Mercy", "Punishment", "Guidance", "Book"],
      correctAnswer: "Mercy",
      explanation:
        "رَحْمَة (raḥmah) means “mercy” or “compassion”. See Quran 7:156. Four Arabic letters.",
    },
    {
      id: "qav-easy-024",
      question: "What does صَبْر (ṣabr) mean?",
      options: ["Patience", "Anger", "Joy", "Wealth"],
      correctAnswer: "Patience",
      explanation:
        "صَبْر (ṣabr) means “patience” or “steadfastness”. See إِنَّ اللَّهَ مَعَ الصَّابِرِينَ in Quran 2:153. Three Arabic letters.",
    },
    {
      id: "qav-easy-025",
      question: "What does عِلْم (ʿilm) mean?",
      options: ["Knowledge", "Ignorance", "Wealth", "Power"],
      correctAnswer: "Knowledge",
      explanation:
        "عِلْم (ʿilm) means “knowledge”. See Quran 2:247. Three Arabic letters.",
    },
    {
      id: "qav-easy-026",
      question: "What does عَمَل (ʿamal) mean?",
      options: ["Deed / action", "Speech", "Thought", "Sleep"],
      correctAnswer: "Deed / action",
      explanation:
        "عَمَل (ʿamal) means “deed” or “action”. Frequently paired with faith. Three Arabic letters.",
    },
    {
      id: "qav-easy-027",
      question: "What does نَفْس (nafs) mean?",
      options: ["Soul / self", "Body", "Heart", "Mind"],
      correctAnswer: "Soul / self",
      explanation:
        "نَفْس (nafs) means “soul” or “self”. See Quran 3:185. Three Arabic letters.",
    },
    {
      id: "qav-easy-028",
      question: "What does آيَة (āyah) mean?",
      options: ["Sign / verse", "Chapter", "Book", "Prayer"],
      correctAnswer: "Sign / verse",
      explanation:
        "آيَة (āyah) means “sign” or “verse”. See Quran 2:106. Three Arabic letters.",
    },
    {
      id: "qav-easy-029",
      question: "What does قَوْم (qawm) mean?",
      options: ["People / nation", "Individual", "Angel", "Prophet"],
      correctAnswer: "People / nation",
      explanation:
        "قَوْم (qawm) means “people” or “nation”. Very frequent in stories of the prophets. Three Arabic letters.",
    },
    {
      id: "qav-easy-030",
      question: "What does بَيْت (bayt) mean?",
      options: ["House", "Path", "Garden", "Sky"],
      correctAnswer: "House",
      explanation:
        "بَيْت (bayt) means “house”. See Quran 2:125 (the Sacred House). Three Arabic letters.",
    },
    {
      id: "qav-easy-031",
      question: "What does لَيْل (layl) mean?",
      options: ["Night", "Day", "Morning", "Evening"],
      correctAnswer: "Night",
      explanation:
        "لَيْل (layl) means “night”. See Quran 73:1. Three Arabic letters.",
    },
    {
      id: "qav-easy-032",
      question: "What does نَهَار (nahār) mean?",
      options: ["Daytime", "Night", "Month", "Year"],
      correctAnswer: "Daytime",
      explanation:
        "نَهَار (nahār) means “daytime” (as opposed to night). See Quran 2:164. Four Arabic letters.",
    },
    {
      id: "qav-easy-033",
      question: "What does شَمْس (shams) mean?",
      options: ["Sun", "Moon", "Star", "Sky"],
      correctAnswer: "Sun",
      explanation:
        "شَمْس (shams) means “sun”. See Quran 91:1. Three Arabic letters.",
    },
    {
      id: "qav-easy-034",
      question: "What does قَمَر (qamar) mean?",
      options: ["Moon", "Sun", "Star", "Cloud"],
      correctAnswer: "Moon",
      explanation:
        "قَمَر (qamar) means “moon”. See Quran 91:2. Three Arabic letters.",
    },
    {
      id: "qav-easy-035",
      question: "What does مَال (māl) mean?",
      options: ["Wealth / property", "Poverty", "Knowledge", "Health"],
      correctAnswer: "Wealth / property",
      explanation:
        "مَال (māl) means “wealth” or “property”. See Quran 2:155. Three Arabic letters.",
    },
  ],

  medium: [
    {
      id: "qav-medium-001",
      question: "What does سَمَاء (samāʾ) mean?",
      options: ["Sky or heaven", "Earth", "Sea", "Garden"],
      correctAnswer: "Sky or heaven",
      explanation:
        "سَمَاء (samāʾ) means “sky” or “heaven”, depending on context. See Quran 2:22. The target word has four Arabic letters.",
    },
    {
      id: "qav-medium-002",
      question: "What does عَذَاب (ʿadhāb) mean?",
      options: ["Punishment", "Mercy", "Guidance", "Provision"],
      correctAnswer: "Punishment",
      explanation:
        "عَذَاب (ʿadhāb) means “punishment” or “torment”. See Quran 2:7. The target word has four Arabic letters.",
    },
    {
      id: "qav-medium-003",
      question: "What does رَسُول (rasūl) mean?",
      options: ["Messenger", "Angel", "Believer", "King"],
      correctAnswer: "Messenger",
      explanation:
        "رَسُول (rasūl) means “messenger”. See Quran 4:80. The base word has four Arabic letters; the attached definite article in الرَّسُولَ is not counted.",
    },
    {
      id: "qav-medium-004",
      question: "What does قَلْب (qalb) mean?",
      options: ["Heart", "Earth", "Water", "Book"],
      correctAnswer: "Heart",
      explanation:
        "قَلْب (qalb) means “heart”. In بِقَلْبٍ سَلِيمٍ (Quran 26:89) it refers to a sound heart. Three Arabic letters.",
    },
    {
      id: "qav-medium-005",
      question: "What does تَقْوَى (taqwā) mean?",
      options: ["God-consciousness / piety", "Pride", "Wealth", "Anger"],
      correctAnswer: "God-consciousness / piety",
      explanation:
        "تَقْوَى (taqwā) means God-consciousness or piety. See هُدًى لِلْمُتَّقِينَ in Quran 2:2. Four Arabic letters.",
    },
    {
      id: "qav-medium-006",
      question: "What does صِرَاط (ṣirāṭ) mean?",
      options: ["Path / way", "Book", "Garden", "Punishment"],
      correctAnswer: "Path / way",
      explanation:
        "صِرَاط (ṣirāṭ) means “path” or “way”. Famous in اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (Quran 1:6). Four Arabic letters.",
    },
    {
      id: "qav-medium-007",
      question: "What does مُسْتَقِيم (mustaqīm) mean?",
      options: ["Straight", "Crooked", "Wide", "Narrow"],
      correctAnswer: "Straight",
      explanation:
        "مُسْتَقِيم (mustaqīm) means “straight”. See الصِّرَاطَ الْمُسْتَقِيمَ in Quran 1:6. Six Arabic letters.",
    },
    {
      id: "qav-medium-008",
      question: "What does مَلَائِكَة (malāʾikah) mean?",
      options: ["Angels", "Prophets", "Believers", "Disbelievers"],
      correctAnswer: "Angels",
      explanation:
        "مَلَائِكَة (malāʾikah) means “angels”. See Quran 2:30. Six Arabic letters.",
    },
    {
      id: "qav-medium-009",
      question: "What does شَيْطَان (shayṭān) mean?",
      options: ["Satan / devil", "Angel", "Prophet", "Believer"],
      correctAnswer: "Satan / devil",
      explanation:
        "شَيْطَان (shayṭān) means “Satan” or “devil”. See Quran 2:36. Five Arabic letters.",
    },
    {
      id: "qav-medium-010",
      question: "What does آخِرَة (ākhirah) mean?",
      options: ["Hereafter", "Worldly life", "Past", "Present"],
      correctAnswer: "Hereafter",
      explanation:
        "آخِرَة (ākhirah) means the Hereafter. Often contrasted with الدُّنْيَا. Five Arabic letters.",
    },
    {
      id: "qav-medium-011",
      question: "What does دُنْيَا (dunyā) mean?",
      options: ["Worldly life", "Hereafter", "Paradise", "Hell"],
      correctAnswer: "Worldly life",
      explanation:
        "دُنْيَا (dunyā) means “this world” or “worldly life”. See Quran 2:86. Four Arabic letters.",
    },
    {
      id: "qav-medium-012",
      question: "What does رِزْق (rizq) mean?",
      options: ["Provision / sustenance", "Punishment", "Knowledge", "Prayer"],
      correctAnswer: "Provision / sustenance",
      explanation:
        "رِزْق (rizq) means “provision” or “sustenance” from Allah. See Quran 2:3. Three Arabic letters.",
    },
    {
      id: "qav-medium-013",
      question: "What does تَوْبَة (tawbah) mean?",
      options: ["Repentance", "Pride", "Anger", "Forgetfulness"],
      correctAnswer: "Repentance",
      explanation:
        "تَوْبَة (tawbah) means “repentance” or “turning back to Allah”. See Quran 9:104. Four Arabic letters.",
    },
    {
      id: "qav-medium-014",
      question: "What does مَغْفِرَة (maghfirah) mean?",
      options: ["Forgiveness", "Punishment", "Guidance", "Wealth"],
      correctAnswer: "Forgiveness",
      explanation:
        "مَغْفِرَة (maghfirah) means “forgiveness”. See Quran 2:175. Five Arabic letters.",
    },
    {
      id: "qav-medium-015",
      question: "What does سَبِيل (sabīl) mean?",
      options: ["Way / path", "House", "Book", "Heart"],
      correctAnswer: "Way / path",
      explanation:
        "سَبِيل (sabīl) means “way” or “path”. See فِي سَبِيلِ اللَّهِ. Four Arabic letters.",
    },
    {
      id: "qav-medium-016",
      question: "What does أُمَّة (ummah) mean?",
      options: ["Community / nation", "Individual", "Family", "Tribe only"],
      correctAnswer: "Community / nation",
      explanation:
        "أُمَّة (ummah) means “community” or “nation”. See Quran 2:128. Three Arabic letters.",
    },
    {
      id: "qav-medium-017",
      question: "What does نَبِيّ (nabī) mean?",
      options: ["Prophet", "Messenger only", "Angel", "King"],
      correctAnswer: "Prophet",
      explanation:
        "نَبِيّ (nabī) means “prophet”. See Quran 33:40. Three Arabic letters.",
    },
    {
      id: "qav-medium-018",
      question: "What does عَبْد (ʿabd) mean?",
      options: ["Servant / slave (of Allah)", "King", "Enemy", "Friend"],
      correctAnswer: "Servant / slave (of Allah)",
      explanation:
        "عَبْد (ʿabd) means “servant” or “slave” (especially of Allah). See Quran 19:30. Three Arabic letters.",
    },
    {
      id: "qav-medium-019",
      question: "What does حَيَاة (ḥayāh) mean?",
      options: ["Life", "Death", "Sleep", "Dream"],
      correctAnswer: "Life",
      explanation:
        "حَيَاة (ḥayāh) means “life”. See Quran 2:28. Four Arabic letters.",
    },
    {
      id: "qav-medium-020",
      question: "What does مَوْت (mawt) mean?",
      options: ["Death", "Life", "Sleep", "Birth"],
      correctAnswer: "Death",
      explanation:
        "مَوْت (mawt) means “death”. See Quran 3:185. Three Arabic letters.",
    },
    {
      id: "qav-medium-021",
      question: "What does رُوح (rūḥ) mean?",
      options: ["Spirit / soul", "Body", "Heart", "Mind"],
      correctAnswer: "Spirit / soul",
      explanation:
        "رُوح (rūḥ) means “spirit” or “soul”. See Quran 17:85. Three Arabic letters.",
    },
    {
      id: "qav-medium-022",
      question: "What does ذِكْر (dhikr) mean?",
      options: ["Remembrance", "Forgetfulness", "Speech only", "Writing"],
      correctAnswer: "Remembrance",
      explanation:
        "ذِكْر (dhikr) means “remembrance” (of Allah). See Quran 13:28. Three Arabic letters.",
    },
    {
      id: "qav-medium-023",
      question: "What does دُعَاء (duʿāʾ) mean?",
      options: ["Supplication / prayer", "Argument", "Speech", "Command"],
      correctAnswer: "Supplication / prayer",
      explanation:
        "دُعَاء (duʿāʾ) means “supplication” or calling upon Allah. Four Arabic letters.",
    },
    {
      id: "qav-medium-024",
      question: "What does شُكْر (shukr) mean?",
      options: ["Gratitude", "Complaint", "Anger", "Pride"],
      correctAnswer: "Gratitude",
      explanation:
        "شُكْر (shukr) means “gratitude” or “thankfulness”. See Quran 14:7. Three Arabic letters.",
    },
    {
      id: "qav-medium-025",
      question: "What does فَضْل (faḍl) mean?",
      options: ["Grace / bounty", "Punishment", "Poverty", "Hardship"],
      correctAnswer: "Grace / bounty",
      explanation:
        "فَضْل (faḍl) means “grace”, “bounty” or “favour” from Allah. See Quran 62:4. Three Arabic letters.",
    },
    {
      id: "qav-medium-026",
      question: "What does حِكْمَة (ḥikmah) mean?",
      options: ["Wisdom", "Ignorance", "Strength", "Wealth"],
      correctAnswer: "Wisdom",
      explanation:
        "حِكْمَة (ḥikmah) means “wisdom”. See Quran 2:269. Four Arabic letters.",
    },
    {
      id: "qav-medium-027",
      question: "What does عَدْل (ʿadl) mean?",
      options: ["Justice", "Injustice", "Mercy", "Power"],
      correctAnswer: "Justice",
      explanation:
        "عَدْل (ʿadl) means “justice”. See Quran 16:90. Three Arabic letters.",
    },
    {
      id: "qav-medium-028",
      question: "What does ظُلْم (ẓulm) mean?",
      options: ["Injustice / wrongdoing", "Justice", "Mercy", "Guidance"],
      correctAnswer: "Injustice / wrongdoing",
      explanation:
        "ظُلْم (ẓulm) means “injustice” or “wrongdoing”. See Quran 2:35. Three Arabic letters.",
    },
    {
      id: "qav-medium-029",
      question: "What does بَاطِل (bāṭil) mean?",
      options: ["Falsehood", "Truth", "Guidance", "Light"],
      correctAnswer: "Falsehood",
      explanation:
        "بَاطِل (bāṭil) means “falsehood”. Often contrasted with الْحَقّ. Four Arabic letters.",
    },
    {
      id: "qav-medium-030",
      question: "What does غَيْب (ghayb) mean?",
      options: ["The unseen", "The seen", "The past", "The present"],
      correctAnswer: "The unseen",
      explanation:
        "غَيْب (ghayb) means “the unseen”. Belief in it is a quality of the muttaqīn (Quran 2:3). Three Arabic letters.",
    },
    {
      id: "qav-medium-031",
      question: "What does يَقِين (yaqīn) mean?",
      options: ["Certainty", "Doubt", "Hope", "Fear"],
      correctAnswer: "Certainty",
      explanation:
        "يَقِين (yaqīn) means “certainty”. See Quran 15:99. Four Arabic letters.",
    },
    {
      id: "qav-medium-032",
      question: "What does فِتْنَة (fitnah) mean?",
      options: ["Trial / tribulation", "Ease", "Reward", "Paradise"],
      correctAnswer: "Trial / tribulation",
      explanation:
        "فِتْنَة (fitnah) means “trial”, “test” or “tribulation”. See Quran 2:191. Four Arabic letters.",
    },
    {
      id: "qav-medium-033",
      question: "What does أَجْر (ajr) mean?",
      options: ["Reward", "Punishment", "Debt", "Loss"],
      correctAnswer: "Reward",
      explanation:
        "أَجْر (ajr) means “reward”. See Quran 2:62. Three Arabic letters.",
    },
    {
      id: "qav-medium-034",
      question: "What does وَحْي (waḥy) mean?",
      options: ["Revelation", "Speech", "Writing", "Dream only"],
      correctAnswer: "Revelation",
      explanation:
        "وَحْي (waḥy) means “revelation”. See Quran 53:4. Three Arabic letters.",
    },
    {
      id: "qav-medium-035",
      question: "What does مَسْجِد (masjid) mean?",
      options: ["Mosque / place of prostration", "House", "Market", "School"],
      correctAnswer: "Mosque / place of prostration",
      explanation:
        "مَسْجِد (masjid) means “mosque” (literally place of prostration). See Quran 72:18. Four Arabic letters.",
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
    // New advanced questions
    {
      id: "qav-advanced-005",
      question: "What does إِلَٰه (ilāh) mean?",
      options: ["God / deity", "Prophet", "Angel", "Human"],
      correctAnswer: "God / deity",
      explanation:
        "إِلَٰه (ilāh) means “god” or “deity”. Central in لَا إِلَٰهَ إِلَّا اللَّهُ. Three Arabic letters.",
    },
    {
      id: "qav-advanced-006",
      question: "What does كُفْر (kufr) mean?",
      options: ["Disbelief / covering the truth", "Faith", "Gratitude", "Patience"],
      correctAnswer: "Disbelief / covering the truth",
      explanation:
        "كُفْر (kufr) means “disbelief” (literally covering or concealing the truth). See Quran 2:6. Three Arabic letters.",
    },
    {
      id: "qav-advanced-007",
      question: "What does شِرْك (shirk) mean?",
      options: ["Associating partners with Allah", "Belief in one God", "Charity", "Prayer"],
      correctAnswer: "Associating partners with Allah",
      explanation:
        "شِرْك (shirk) means associating partners with Allah (polytheism). The greatest sin in Islam. Three Arabic letters.",
    },
    {
      id: "qav-advanced-008",
      question: "What does تَوْحِيد (tawḥīd) mean?",
      options: ["Oneness of Allah", "Partnership", "Multiplicity", "Doubt"],
      correctAnswer: "Oneness of Allah",
      explanation:
        "تَوْحِيد (tawḥīd) means the absolute oneness of Allah. Core concept of Islamic creed. Five Arabic letters.",
    },
    {
      id: "qav-advanced-009",
      question: "What does قَدَر (qadar) mean?",
      options: ["Divine decree / destiny", "Free will only", "Chance", "Luck"],
      correctAnswer: "Divine decree / destiny",
      explanation:
        "قَدَر (qadar) means divine decree or predestination. One of the six pillars of faith. Three Arabic letters.",
    },
    {
      id: "qav-advanced-010",
      question: "What does غَفْلَة (ghaflah) mean?",
      options: ["Heedlessness / unawareness", "Remembrance", "Certainty", "Gratitude"],
      correctAnswer: "Heedlessness / unawareness",
      explanation:
        "غَفْلَة (ghaflah) means “heedlessness” or spiritual unawareness. See Quran 21:1. Four Arabic letters.",
    },
    {
      id: "qav-advanced-011",
      question: "What does اسْتِقَامَة (istiqāmah) mean?",
      options: ["Steadfastness / uprightness", "Deviation", "Doubt", "Laziness"],
      correctAnswer: "Steadfastness / uprightness",
      explanation:
        "اسْتِقَامَة (istiqāmah) means remaining steadfast on the straight path. See Quran 41:30. Seven Arabic letters.",
    },
    {
      id: "qav-advanced-012",
      question: "What does إِخْلَاص (ikhlāṣ) mean?",
      options: ["Sincerity / pure devotion", "Showing off", "Hypocrisy", "Doubt"],
      correctAnswer: "Sincerity / pure devotion",
      explanation:
        "إِخْلَاص (ikhlāṣ) means sincerity or purifying one’s intention for Allah alone. Five Arabic letters.",
    },
    {
      id: "qav-advanced-013",
      question: "What does تَوَكُّل (tawakkul) mean?",
      options: ["Reliance upon Allah", "Self-reliance only", "Despair", "Arrogance"],
      correctAnswer: "Reliance upon Allah",
      explanation:
        "تَوَكُّل (tawakkul) means complete reliance and trust in Allah. See Quran 3:159. Five Arabic letters.",
    },
    {
      id: "qav-advanced-014",
      question: "What does فَسَاد (fasād) mean?",
      options: ["Corruption / mischief", "Reform", "Justice", "Peace"],
      correctAnswer: "Corruption / mischief",
      explanation:
        "فَسَاد (fasād) means “corruption” or “mischief” on earth. See Quran 2:11. Four Arabic letters.",
    },
    {
      id: "qav-advanced-015",
      question: "What does صَالِح (ṣāliḥ) mean?",
      options: ["Righteous", "Corrupt", "Ignorant", "Arrogant"],
      correctAnswer: "Righteous",
      explanation:
        "صَالِح (ṣāliḥ) means “righteous” or “good”. Often in عَمِلُوا الصَّالِحَاتِ. Four Arabic letters.",
    },
    {
      id: "qav-advanced-016",
      question: "What does سَيِّئَة (sayyiʾah) mean?",
      options: ["Evil deed / bad action", "Good deed", "Neutral action", "Intention"],
      correctAnswer: "Evil deed / bad action",
      explanation:
        "سَيِّئَة (sayyiʾah) means an evil deed or bad action. Contrasted with حَسَنَة. Five Arabic letters.",
    },
    {
      id: "qav-advanced-017",
      question: "What does حَسَنَة (ḥasanah) mean?",
      options: ["Good deed", "Evil deed", "Punishment", "Trial"],
      correctAnswer: "Good deed",
      explanation:
        "حَسَنَة (ḥasanah) means a good deed. See Quran 2:201. Five Arabic letters.",
    },
    {
      id: "qav-advanced-018",
      question: "What does مِيزَان (mīzān) mean?",
      options: ["Balance / scale", "Sword", "Book", "Path"],
      correctAnswer: "Balance / scale",
      explanation:
        "مِيزَان (mīzān) means “balance” or “scale” (of justice). See Quran 55:7-9. Five Arabic letters.",
    },
    {
      id: "qav-advanced-019",
      question: "What does أَمَانَة (amānah) mean?",
      options: ["Trust / responsibility", "Betrayal", "Wealth", "Power"],
      correctAnswer: "Trust / responsibility",
      explanation:
        "أَمَانَة (amānah) means “trust” or a responsibility entrusted by Allah. See Quran 33:72. Five Arabic letters.",
    },
    {
      id: "qav-advanced-020",
      question: "What does وَلِيّ (walī) mean?",
      options: ["Guardian / protector / friend (of Allah)", "Enemy", "Stranger", "Servant only"],
      correctAnswer: "Guardian / protector / friend (of Allah)",
      explanation:
        "وَلِيّ (walī) means guardian, protector, or close friend (especially of Allah). See Quran 2:257. Three Arabic letters.",
    },
    {
      id: "qav-advanced-021",
      question: "What does مَثَل (mathal) mean?",
      options: ["Example / parable", "Command", "Story only", "Law"],
      correctAnswer: "Example / parable",
      explanation:
        "مَثَل (mathal) means “example” or “parable”. Allah strikes many mathal in the Quran. Three Arabic letters.",
    },
    {
      id: "qav-advanced-022",
      question: "What does قَوْل (qawl) mean?",
      options: ["Speech / saying / word", "Action", "Thought", "Silence"],
      correctAnswer: "Speech / saying / word",
      explanation:
        "قَوْل (qawl) means “speech”, “saying” or “word”. Related to the frequent verb قَالَ. Three Arabic letters.",
    },
    {
      id: "qav-advanced-023",
      question: "What does أَمْر (amr) mean?",
      options: ["Command / affair / matter", "Prohibition only", "Request", "Question"],
      correctAnswer: "Command / affair / matter",
      explanation:
        "أَمْر (amr) means “command”, “affair” or “matter”. See Quran 2:210. Three Arabic letters.",
    },
    {
      id: "qav-advanced-024",
      question: "What does نَهْي (nahy) mean?",
      options: ["Prohibition", "Command", "Permission", "Request"],
      correctAnswer: "Prohibition",
      explanation:
        "نَهْي (nahy) means “prohibition”. Often paired with أَمْر. Three Arabic letters.",
    },
    {
      id: "qav-advanced-025",
      question: "What does بِرّ (birr) mean?",
      options: ["Righteousness / piety", "Sin", "Hypocrisy", "Doubt"],
      correctAnswer: "Righteousness / piety",
      explanation:
        "بِرّ (birr) means “righteousness” or comprehensive piety. See Quran 2:177. Two Arabic letters.",
    },
    {
      id: "qav-advanced-026",
      question: "What does إِحْسَان (iḥsān) mean?",
      options: ["Excellence / doing good beautifully", "Mediocrity", "Injustice", "Neglect"],
      correctAnswer: "Excellence / doing good beautifully",
      explanation:
        "إِحْسَان (iḥsān) means excellence or doing things in the best possible way. Five Arabic letters.",
    },
    {
      id: "qav-advanced-027",
      question: "What does صَوْم (ṣawm) mean?",
      options: ["Fasting", "Prayer", "Charity", "Pilgrimage"],
      correctAnswer: "Fasting",
      explanation:
        "صَوْم (ṣawm) means “fasting”. See Quran 2:183. Three Arabic letters.",
    },
    {
      id: "qav-advanced-028",
      question: "What does حَجّ (ḥajj) mean?",
      options: ["Pilgrimage", "Prayer", "Fasting", "Charity"],
      correctAnswer: "Pilgrimage",
      explanation:
        "حَجّ (ḥajj) means the pilgrimage to Makkah. See Quran 2:196. Two Arabic letters.",
    },
    {
      id: "qav-advanced-029",
      question: "What does جِهَاد (jihād) mean?",
      options: ["Striving / struggle (in the path of Allah)", "Only fighting", "Peace", "Surrender"],
      correctAnswer: "Striving / struggle (in the path of Allah)",
      explanation:
        "جِهَاد (jihād) means striving or struggle in the path of Allah (broader than physical fighting). Four Arabic letters.",
    },
    {
      id: "qav-advanced-030",
      question: "What does شَهَادَة (shahādah) mean?",
      options: ["Testimony / martyrdom", "Silence", "Denial", "Doubt"],
      correctAnswer: "Testimony / martyrdom",
      explanation:
        "شَهَادَة (shahādah) means “testimony” (including the declaration of faith) or “martyrdom”. Five Arabic letters.",
    },
    {
      id: "qav-advanced-031",
      question: "What does قِيَامَة (qiyāmah) mean?",
      options: ["Resurrection / Day of Judgment", "Death", "Birth", "Sleep"],
      correctAnswer: "Resurrection / Day of Judgment",
      explanation:
        "قِيَامَة (qiyāmah) means the Resurrection or Day of Judgment. See يَوْمُ الْقِيَامَةِ. Five Arabic letters.",
    },
    {
      id: "qav-advanced-032",
      question: "What does جَهَنَّم (jahannam) mean?",
      options: ["Hell", "Paradise", "Earth", "Sky"],
      correctAnswer: "Hell",
      explanation:
        "جَهَنَّم (jahannam) is one of the names of Hell. See Quran 2:206. Five Arabic letters.",
    },
    {
      id: "qav-advanced-033",
      question: "What does فِرْدَوْس (firdaws) mean?",
      options: ["The highest level of Paradise", "A level of Hell", "Earth", "Sky"],
      correctAnswer: "The highest level of Paradise",
      explanation:
        "فِرْدَوْس (firdaws) is the highest garden in Paradise. See Quran 18:107. Five Arabic letters.",
    },
    {
      id: "qav-advanced-034",
      question: "What does عَرْش (ʿarsh) mean?",
      options: ["Throne (of Allah)", "Chair", "House", "Mountain"],
      correctAnswer: "Throne (of Allah)",
      explanation:
        "عَرْش (ʿarsh) means the Throne of Allah. See Quran 9:129. Three Arabic letters.",
    },
    {
      id: "qav-advanced-035",
      question: "What does كُرْسِيّ (kursī) mean?",
      options: ["Footstool / chair (of Allah)", "Throne", "Book", "Pen"],
      correctAnswer: "Footstool / chair (of Allah)",
      explanation:
        "كُرْسِيّ (kursī) refers to the Footstool of Allah (distinct from the Throne). Famous in Ayat al-Kursi (2:255). Five Arabic letters.",
    },
  ],
},
}

export default quranicArabic01Category;
