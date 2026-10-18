
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
        options: ["Before", "Above", "And", "From"],
        correctAnswer: "And",
        explanation: "وَ (wa) means “and”. It is often attached to the next word. The phrase وَالضُّحَىٰ (waḍ-ḍuḥā – “By the morning brightness”) opens Surah Ad-Duha (93:1). The particle itself has one Arabic letter."
      },
      {
        id: "qav-easy-002",
        question: "What does مِن (min) mean?",
        options: ["Together", "Under", "From", "After"],
        correctAnswer: "From",
        explanation: "مِن (min) commonly means “from”. The phrase مِن مِّثْلِهِ (min mithlihī – “from the like of it”) appears in the challenge of the Quran in Surah Al-Baqarah (2:23). The target word has two Arabic letters."
      },
      {
        id: "qav-easy-003",
        question: "What does رَبّ (rabb) mean?",
        options: ["Book", "Lord", "Heart", "Sky"],
        correctAnswer: "Lord",
        explanation: "رَبّ (rabb) means “Lord” or “Sustainer”. The famous phrase رَبِّ الْعَالَمِينَ (Rabbi-l-ʿālamīn – “Lord of all the worlds”) is in Surah Al-Fatihah (1:2). The target word has two Arabic letters."
      },
      {
        id: "qav-easy-004",
        question: "What does نُور (nūr) mean?",
        options: ["Mountain", "Light", "Water", "Night"],
        correctAnswer: "Light",
        explanation: "نُور (nūr) means “light”. The majestic phrase اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ (Allāhu nūru-s-samāwāti wa-l-arḍ – “Allah is the Light of the heavens and the earth”) is in Surah An-Nur (24:35). The target word has three Arabic letters."
      },
      {
        id: "qav-easy-005",
        question: "What does يَوْم (yawm) mean?",
        options: ["Rain", "House", "Day", "Heart"],
        correctAnswer: "Day",
        explanation: "يَوْم (yawm) means “day”. The phrase مَالِكِ يَوْمِ الدِّينِ (Māliki yawmi-d-dīn – “Master of the Day of Judgment”) is recited in every unit of prayer in Surah Al-Fatihah (1:4). The target word has three Arabic letters."
      },
      {
        id: "qav-easy-006",
        question: "What does هُدًى (hudā) mean?",
        options: ["Guidance", "Messenger", "Garden", "Punishment"],
        correctAnswer: "Guidance",
        explanation: "هُدًى (hudā) means “guidance”. The phrase هُدًى لِّلْمُتَّقِينَ (hudan lil-muttaqīn – “a guidance for those who are God-conscious”) is in Surah Al-Baqarah (2:2). The target word has three Arabic letters when vowel marks are ignored."
      },
      {
        id: "qav-easy-007",
        question: "What does كِتَاب (kitāb) mean?",
        options: ["Book", "River", "Prayer", "Light"],
        correctAnswer: "Book",
        explanation: "كِتَاب (kitāb) means “book”. The phrase ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ (dhālika-l-kitābu lā rayba fīh – “This is the Book about which there is no doubt”) opens the main body of Surah Al-Baqarah (2:2). The target word has four Arabic letters."
      },
      {
        id: "qav-easy-008",
        question: "What does فِي (fī) mean?",
        options: ["Without", "After", "Under", "In"],
        correctAnswer: "In",
        explanation: "فِي (fī) means “in” or “within”. The phrase فِيهِ هُدًى (fīhi hudan – “in it is guidance”) is part of the same famous verse of Surah Al-Baqarah (2:2). The target word has two Arabic letters."
      },
      {
        id: "qav-easy-009",
        question: "What does عَلَى (ʿalā) mean?",
        options: ["With", "From", "On / upon", "Before"],
        correctAnswer: "On / upon",
        explanation: "عَلَى (ʿalā) means “on” or “upon”. The phrase أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ (ulā’ika ʿalā hudan min Rabbihim – “Those are upon guidance from their Lord”) is in Surah Al-Baqarah (2:5). The target word has three Arabic letters."
      },
      {
        id: "qav-easy-010",
        question: "What does إِلَى (ilā) mean?",
        options: ["Except", "Above", "From", "To / towards"],
        correctAnswer: "To / towards",
        explanation: "إِلَى (ilā) means “to” or “towards”. The phrase إِلَى اللَّهِ تُرْجَعُ الْأُمُورُ (ilā Allāhi turjaʿu-l-umūr – “to Allah all matters are returned”) is a recurring Quranic truth (e.g. 2:210). The target word has three Arabic letters."
      },
      {
        id: "qav-easy-011",
        question: "What does لَا (lā) mean?",
        options: ["Or", "And", "Yes", "No / not"],
        correctAnswer: "No / not",
        explanation: "لَا (lā) is the common negation particle meaning “no” or “not”. The greatest phrase in Islam is لَا إِلَٰهَ إِلَّا اللَّهُ (lā ilāha illā Allāh – “There is no god except Allah”). One Arabic letter."
      },
      {
        id: "qav-easy-012",
        question: "What does أَرْض (arḍ) mean?",
        options: ["Fire", "Sky", "Earth / land", "Water"],
        correctAnswer: "Earth / land",
        explanation: "أَرْض (arḍ) means “earth” or “land”. The phrase جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا (jaʿala lakumu-l-arḍa firāshan – “He made the earth a bed for you”) is in Surah Al-Baqarah (2:22). The target word has three Arabic letters."
      },
      {
        id: "qav-easy-013",
        question: "What does نَاس (nās) mean?",
        options: ["Days", "Angels", "People / mankind", "Books"],
        correctAnswer: "People / mankind",
        explanation: "نَاس (nās) means “people” or “mankind”. The address يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ (yā ayyuhā-n-nāsu-ʿbudū Rabbakum – “O mankind, worship your Lord”) opens the call in Surah Al-Baqarah (2:21). Three Arabic letters."
      },
      {
        id: "qav-easy-014",
        question: "What does مَاء (māʾ) mean?",
        options: ["Wind", "Fire", "Light", "Water"],
        correctAnswer: "Water",
        explanation: "مَاء (māʾ) means “water”. The phrase وَأَنزَلَ مِنَ السَّمَاءِ مَاءً (wa anzala mina-s-samā’i mā’an – “and He sent down water from the sky”) is in Surah Al-Baqarah (2:22). Three Arabic letters."
      },
      {
        id: "qav-easy-015",
        question: "What does نَار (nār) mean?",
        options: ["Path", "Book", "Garden", "Fire"],
        correctAnswer: "Fire",
        explanation: "نَار (nār) means “fire” (often Hellfire). The terrifying phrase نَارُ اللَّهِ الْمُوقَدَةُ (nāru-Allāhi-l-mūqadah – “the fire of Allah, kindled”) is in Surah Al-Humazah (104:6). Three Arabic letters."
      },
      {
        id: "qav-easy-016",
        question: "What does جَنَّة (jannah) mean?",
        options: ["Night", "Punishment", "Mountain", "Garden / Paradise"],
        correctAnswer: "Garden / Paradise",
        explanation: "جَنَّة (jannah) means “garden” and is the word for Paradise. The phrase جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ (jannātin tajrī min taḥtihā-l-anhār – “gardens beneath which rivers flow”) is promised repeatedly, e.g. Surah Al-Baqarah (2:25). Four Arabic letters."
      },
      {
        id: "qav-easy-017",
        question: "What does حَقّ (ḥaqq) mean?",
        options: ["Doubt", "Speech", "Falsehood", "Truth / right"],
        correctAnswer: "Truth / right",
        explanation: "حَقّ (ḥaqq) means “truth” or “right”. The phrase وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ (wa lā talbisū-l-ḥaqqa bi-l-bāṭil – “Do not mix the truth with falsehood”) is in Surah Al-Baqarah (2:42). Three Arabic letters."
      },
      {
        id: "qav-easy-018",
        question: "What does خَيْر (khayr) mean?",
        options: ["Night", "Evil", "Punishment", "Good / goodness"],
        correctAnswer: "Good / goodness",
        explanation: "خَيْر (khayr) means “good” or “goodness”. The phrase وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ ... خَيْرٌ (Allāhu dhū-l-faḍli-l-ʿaẓīm … khayrun) appears in contexts of Allah’s bounty, e.g. Surah Al-Baqarah (2:105). Three Arabic letters."
      },
      {
        id: "qav-easy-019",
        question: "What does دِين (dīn) mean?",
        options: ["Water", "Heart", "Book", "Religion / judgment"],
        correctAnswer: "Religion / judgment",
        explanation: "دِين (dīn) means “religion”, “way of life”, or “judgment”. The phrase مَالِكِ يَوْمِ الدِّينِ (Māliki yawmi-d-dīn – “Master of the Day of Judgment”) is in Surah Al-Fatihah (1:4). Three Arabic letters."
      },
      {
        id: "qav-easy-020",
        question: "What does صَلَاة (ṣalāh) mean?",
        options: ["Pilgrimage", "Charity", "Fasting", "Prayer"],
        correctAnswer: "Prayer",
        explanation: "صَلَاة (ṣalāh) means the ritual prayer. The command أَقِيمُوا الصَّلَاةَ (aqīmū-ṣ-ṣalāh – “Establish the prayer”) is repeated throughout the Quran, first appearing in Surah Al-Baqarah (2:43). Four Arabic letters."
      },
      {
        id: "qav-easy-021",
        question: "What does زَكَاة (zakāh) mean?",
        options: ["Knowledge", "Prayer", "Fasting", "Charity / almsgiving"],
        correctAnswer: "Charity / almsgiving",
        explanation: "زَكَاة (zakāh) means obligatory charity. The phrase وَآتُوا الزَّكَاةَ (wa ātū-z-zakāh – “and give the zakah”) is paired with prayer in Surah Al-Baqarah (2:43). Four Arabic letters."
      },
      {
        id: "qav-easy-022",
        question: "What does إِيمَان (īmān) mean?",
        options: ["Mercy", "Disbelief", "Patience", "Faith / belief"],
        correctAnswer: "Faith / belief",
        explanation: "إِيمَان (īmān) means “faith” or “belief”. The phrase وَمَن يَتَبَدَّلِ الْكُفْرَ بِالْإِيمَانِ (wa man yatabaddali-l-kufra bi-l-īmān – “whoever exchanges faith for disbelief”) is in Surah Al-Baqarah (2:108). Five Arabic letters."
      },
      {
        id: "qav-easy-023",
        question: "What does رَحْمَة (raḥmah) mean?",
        options: ["Book", "Punishment", "Guidance", "Mercy"],
        correctAnswer: "Mercy",
        explanation: "رَحْمَة (raḥmah) means “mercy”. The beautiful phrase وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ (wa raḥmatī wasiʿat kulla shay’ – “My mercy encompasses all things”) is in Surah Al-A‘raf (7:156). Four Arabic letters."
      },
      {
        id: "qav-easy-024",
        question: "What does صَبْر (ṣabr) mean?",
        options: ["Wealth", "Anger", "Joy", "Patience"],
        correctAnswer: "Patience",
        explanation: "صَبْر (ṣabr) means “patience” or “steadfastness”. The comforting phrase إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (inna Allāha maʿa-ṣ-ṣābirīn – “Indeed, Allah is with the patient”) is in Surah Al-Baqarah (2:153). Three Arabic letters."
      },
      {
        id: "qav-easy-025",
        question: "What does عِلْم (ʿilm) mean?",
        options: ["Power", "Ignorance", "Wealth", "Knowledge"],
        correctAnswer: "Knowledge",
        explanation: "عِلْم (ʿilm) means “knowledge”. The phrase وَاللَّهُ عَلِيمٌ ... يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا ... وَالَّذِينَ أُوتُوا الْعِلْمَ (Allāhu … yarfaʿi-llāhu … wa-lladhīna ūtū-l-ʿilm – Allah raises those who believe and those given knowledge) is in Surah Al-Mujadila (58:11). Three Arabic letters."
      },
      {
        id: "qav-easy-026",
        question: "What does عَمَل (ʿamal) mean?",
        options: ["Sleep", "Speech", "Thought", "Deed / action"],
        correctAnswer: "Deed / action",
        explanation: "عَمَل (ʿamal) means “deed” or “action”. The frequent pairing الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ (alladhīna āmanū wa ʿamilū-ṣ-ṣāliḥāt – “those who believe and do righteous deeds”) appears dozens of times. Three Arabic letters."
      },
      {
        id: "qav-easy-027",
        question: "What does نَفْس (nafs) mean?",
        options: ["Mind", "Body", "Heart", "Soul / self"],
        correctAnswer: "Soul / self",
        explanation: "نَفْس (nafs) means “soul” or “self”. The universal truth كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ (kullu nafsin dhā’iqatu-l-mawt – “Every soul will taste death”) is in Surah Al-Imran (3:185). Three Arabic letters."
      },
      {
        id: "qav-easy-028",
        question: "What does آيَة (āyah) mean?",
        options: ["Prayer", "Chapter", "Book", "Sign / verse"],
        correctAnswer: "Sign / verse",
        explanation: "آيَة (āyah) means “sign” or “verse”. The phrase وَمِنْ آيَاتِهِ (wa min āyātih – “And of His signs…”) introduces many proofs of Allah’s power, e.g. Surah Ar-Rum (30:20). Three Arabic letters."
      },
      {
        id: "qav-easy-029",
        question: "What does قَوْم (qawm) mean?",
        options: ["Prophet", "Individual", "Angel", "People / nation"],
        correctAnswer: "People / nation",
        explanation: "قَوْم (qawm) means “people” or “nation”. The phrase قَوْمَ نُوحٍ (qawma Nūḥ – “the people of Noah”) and similar references to the nations of the prophets appear throughout the Quran. Three Arabic letters."
      },
      {
        id: "qav-easy-030",
        question: "What does بَيْت (bayt) mean?",
        options: ["Sky", "Path", "Garden", "House"],
        correctAnswer: "House",
        explanation: "بَيْت (bayt) means “house”. The phrase الْبَيْتَ الْحَرَامَ (al-bayta-l-ḥarām – “the Sacred House”) refers to the Ka‘bah in Surah Al-Baqarah (2:125). Three Arabic letters."
      },
      {
        id: "qav-easy-031",
        question: "What does لَيْل (layl) mean?",
        options: ["Evening", "Day", "Morning", "Night"],
        correctAnswer: "Night",
        explanation: "لَيْل (layl) means “night”. The address يَا أَيُّهَا الْمُزَّمِّلُ ۝ قُمِ اللَّيْلَ (yā ayyuhā-l-muzzammil, qumi-l-layl – “O you who wraps himself, arise [to pray] the night”) opens Surah Al-Muzzammil (73:1-2). Three Arabic letters."
      },
      {
        id: "qav-easy-032",
        question: "What does نَهَار (nahār) mean?",
        options: ["Year", "Night", "Month", "Daytime"],
        correctAnswer: "Daytime",
        explanation: "نَهَار (nahār) means “daytime”. The phrase وَجَعَلْنَا اللَّيْلَ وَالنَّهَارَ آيَتَيْنِ (wa jaʿalnā-l-layla wa-n-nahāra āyatayn – “We made the night and the day two signs”) is in Surah Al-Isra (17:12). Four Arabic letters."
      },
      {
        id: "qav-easy-033",
        question: "What does شَمْس (shams) mean?",
        options: ["Sky", "Moon", "Star", "Sun"],
        correctAnswer: "Sun",
        explanation: "شَمْس (shams) means “sun”. The oath وَالشَّمْسِ وَضُحَاهَا (wa-sh-shamsi wa ḍuḥāhā – “By the sun and its brightness”) opens Surah Ash-Shams (91:1). Three Arabic letters."
      },
      {
        id: "qav-easy-034",
        question: "What does قَمَر (qamar) mean?",
        options: ["Cloud", "Sun", "Star", "Moon"],
        correctAnswer: "Moon",
        explanation: "قَمَر (qamar) means “moon”. The oath وَالْقَمَرِ إِذَا تَلَاهَا (wa-l-qamari idhā talāhā – “And by the moon when it follows it”) continues in Surah Ash-Shams (91:2). Three Arabic letters."
      },
      {
        id: "qav-easy-035",
        question: "What does مَال (māl) mean?",
        options: ["Health", "Poverty", "Knowledge", "Wealth / property"],
        correctAnswer: "Wealth / property",
        explanation: "مَال (māl) means “wealth” or “property”. The phrase وَتُحِبُّونَ الْمَالَ حُبًّا جَمًّا (wa tuḥibbūna-l-māla ḥubban jammā – “And you love wealth with immense love”) is in Surah Al-Fajr (89:20). Three Arabic letters."
      },
      {
        id: "qav-easy-036",
        question: "What does قَالَ (qāla) mean?",
        options: ["He created", "He said", "He believed", "He went"],
        correctAnswer: "He said",
        explanation: "قَالَ (qāla) means “he said”. The phrase وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ (wa idh qāla rabbuka li-l-malāʾikah – “And when your Lord said to the angels”) is in Surah Al-Baqarah (2:30). Root ق-و-ل."
      },
      {
        id: "qav-easy-037",
        question: "What does كَانَ (kāna) mean?",
        options: ["He said", "He was / it was", "He knew", "He came"],
        correctAnswer: "He was / it was",
        explanation: "كَانَ (kāna) means “he was” or “it was”. The phrase وَكَانَ اللَّهُ غَفُورًا رَحِيمًا (wa kāna-llāhu ghafūran raḥīmā – “And Allah is ever Forgiving and Merciful”) is in Surah An-Nisa (4:96). Root ك-و-ن."
      },
      {
        id: "qav-easy-038",
        question: "What does آمَنَ (āmana) mean?",
        options: ["He disbelieved", "He believed", "He denied", "He forgot"],
        correctAnswer: "He believed",
        explanation: "آمَنَ (āmana) means “he believed”. The phrase الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ (alladhīna āmanū wa ʿamilū-ṣ-ṣāliḥāt – “those who believe and do righteous deeds”) is frequent, e.g. Surah Al-Baqarah (2:25). Root أ-م-ن."
      },
      {
        id: "qav-easy-039",
        question: "What does عَمِلَ (ʿamila) mean?",
        options: ["He spoke", "He did / worked", "He slept", "He wrote"],
        correctAnswer: "He did / worked",
        explanation: "عَمِلَ (ʿamila) means “he did” or “he worked”. The phrase وَعَمِلُوا الصَّالِحَاتِ (wa ʿamilū-ṣ-ṣāliḥāt – “and they did righteous deeds”) is in Surah Al-Baqarah (2:25). Root ع-م-ل."
      },
      {
        id: "qav-easy-040",
        question: "What does جَعَلَ (jaʿala) mean?",
        options: ["He destroyed", "He made / placed", "He took", "He hid"],
        correctAnswer: "He made / placed",
        explanation: "جَعَلَ (jaʿala) means “he made” or “he placed”. The phrase جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا (jaʿala lakumu-l-arḍa firāshā – “He made the earth a bed for you”) is in Surah Al-Baqarah (2:22). Root ج-ع-ل."
      },
      {
        id: "qav-easy-041",
        question: "What does خَلَقَ (khalaqa) mean?",
        options: ["He created", "He ate", "He ran", "He opened"],
        correctAnswer: "He created",
        explanation: "خَلَقَ (khalaqa) means “he created”. The phrase خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ (khalaqa-s-samāwāti wa-l-arḍ – “He created the heavens and the earth”) is in Surah Al-An’am (6:1). Root خ-ل-ق."
      },
      {
        id: "qav-easy-042",
        question: "What does أَنزَلَ (anzala) mean?",
        options: ["He raised", "He sent down / revealed", "He delayed", "He closed"],
        correctAnswer: "He sent down / revealed",
        explanation: "أَنزَلَ (anzala) means “he sent down” or “revealed”. The phrase نَزَّلَ عَلَيْكَ الْكِتَابَ (nazzala ʿalayka-l-kitāb – “He sent down the Book upon you”) is in Surah Aal-Imran (3:3). Root ن-ز-ل."
      },
      {
        id: "qav-easy-043",
        question: "What does كَفَرَ (kafara) mean?",
        options: ["He believed", "He disbelieved / covered the truth", "He thanked", "He travelled"],
        correctAnswer: "He disbelieved / covered the truth",
        explanation: "كَفَرَ (kafara) means “he disbelieved” (covered the truth). The phrase إِنَّ الَّذِينَ كَفَرُوا (inna-lladhīna kafarū – “Indeed, those who disbelieve”) is in Surah Al-Baqarah (2:6). Root ك-ف-ر."
      },
      {
        id: "qav-easy-044",
        question: "What does جَاءَ (jāʾa) mean?",
        options: ["He left", "He came", "He sat", "He slept"],
        correctAnswer: "He came",
        explanation: "جَاءَ (jāʾa) means “he came”. The phrase وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ (wa jāʾa min aqṣā-l-madīnati rajul – “And there came from the farthest end of the city a man”) is in Surah Yasin (36:20). Root ج-ي-ء."
      },
      {
        id: "qav-easy-045",
        question: "What does شَاءَ (shāʾa) mean?",
        options: ["He feared", "He willed / wished", "He saw", "He heard"],
        correctAnswer: "He willed / wished",
        explanation: "شَاءَ (shāʾa) means “he willed” or “wished”. The phrase إِنْ شَاءَ اللَّهُ (in shāʾa-llāh – “if Allah wills”) is in Surah Al-Kahf (18:69). Root ش-ي-ء."
      },
      {
        id: "qav-easy-046",
        question: "What does عَلِمَ (ʿalima) mean?",
        options: ["He forgot", "He knew", "He wrote", "He spoke"],
        correctAnswer: "He knew",
        explanation: "عَلِمَ (ʿalima) means “he knew”. The phrase عَلِمَ اللَّهُ أَنَّكُمْ (ʿalima-llāhu annakum – “Allah knew that you…”) appears e.g. in Surah Al-Baqarah (2:187). Root ع-ل-م."
      },
      {
        id: "qav-easy-047",
        question: "What does رَأَى (raʾā) mean?",
        options: ["He heard", "He saw", "He touched", "He smelled"],
        correctAnswer: "He saw",
        explanation: "رَأَى (raʾā) means “he saw”. The phrase لَقَدْ رَأَى مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ (laqad raʾā min āyāti rabbihi-l-kubrā – “He certainly saw of the greatest signs of his Lord”) is in Surah An-Najm (53:18). Root ر-أ-ي."
      },
      {
        id: "qav-easy-048",
        question: "What does سَمِعَ (samiʿa) mean?",
        options: ["He saw", "He heard", "He tasted", "He walked"],
        correctAnswer: "He heard",
        explanation: "سَمِعَ (samiʿa) means “he heard”. The phrase قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ (qad samiʿa-llāhu qawla-llatī tujādiluka – “Allah has certainly heard the statement of the one who argues with you”) is in Surah Al-Mujadila (58:1). Root س-م-ع."
      },
      {
        id: "qav-easy-049",
        question: "What does أَتَى (atā) mean?",
        options: ["He left", "He came / brought", "He slept", "He wrote"],
        correctAnswer: "He came / brought",
        explanation: "أَتَى (atā) means “he came” or “brought”. The phrase هَلْ أَتَىٰ عَلَى الْإِنْسَانِ (hal atā ʿalā-l-insāni – “Has there come upon man…”) is in Surah Al-Insan (76:1). Root أ-ت-ي."
      },
      {
        id: "qav-easy-050",
        question: "What does هُوَ (huwa) mean?",
        options: ["She", "He", "They", "We"],
        correctAnswer: "He",
        explanation: "هُوَ (huwa) means “he”. The phrase قُلْ هُوَ اللَّهُ أَحَدٌ (qul huwa-llāhu aḥad – “Say: He is Allah, the One”) is in Surah Al-Ikhlas (112:1)."
      },
      {
        id: "qav-easy-051",
        question: "What does هِيَ (hiya) mean?",
        options: ["He", "She", "You", "I"],
        correctAnswer: "She",
        explanation: "هِيَ (hiya) means “she”. The phrase وَهِيَ تَجْرِي بِهِمْ (wa hiya tajrī bihim – “and it sailed with them”) is in Surah Hud (11:42)."
      },
      {
        id: "qav-easy-052",
        question: "What does هُمْ (hum) mean?",
        options: ["We", "They (masculine)", "You (singular)", "She"],
        correctAnswer: "They (masculine)",
        explanation: "هُمْ (hum) means “they” (masculine). The phrase وَهُمْ لَا يَشْعُرُونَ (wa hum lā yashʿurūn – “while they perceive not”) is in Surah Az-Zumar (39:25)."
      },
      {
        id: "qav-easy-053",
        question: "What does نَحْنُ (naḥnu) mean?",
        options: ["You", "They", "We", "He"],
        correctAnswer: "We",
        explanation: "نَحْنُ (naḥnu) means “we”. The phrase إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ (innā naḥnu nazzalnā-dh-dhikr – “Indeed, it is We who sent down the Reminder”) is in Surah Al-Hijr (15:9)."
      },
      {
        id: "qav-easy-054",
        question: "What does أَنْتَ (anta) mean?",
        options: ["I", "You (singular masculine)", "He", "They"],
        correctAnswer: "You (singular masculine)",
        explanation: "أَنْتَ (anta) means “you” (singular masculine). The phrase إِنَّكَ أَنْتَ الْعَلِيمُ الْحَكِيمُ (innaka anta-l-ʿalīmu-l-ḥakīm – “Indeed, it is You who is the Knowing, the Wise”) is in Surah Al-Baqarah (2:32)."
      },
      {
        id: "qav-easy-055",
        question: "What does أَنَا (ana) mean?",
        options: ["You", "He", "I", "We"],
        correctAnswer: "I",
        explanation: "أَنَا (ana) means “I”. The phrase إِنِّي أَنَا رَبُّكَ (innī ana rabbuka – “Indeed, I am your Lord”) is in Surah Ta-Ha (20:12)."
      },
      {
        id: "qav-easy-056",
        question: "What does فَ (fa) mean?",
        options: ["Or", "Then / so", "But", "If"],
        correctAnswer: "Then / so",
        explanation: "فَ (fa) means “then” or “so”. The phrase فَاذْكُرُونِي أَذْكُرْكُمْ (fa-dhkurūnī adhkurkum – “So remember Me; I will remember you”) is in Surah Al-Baqarah (2:152)."
      },
      {
        id: "qav-easy-057",
        question: "What does ثُمَّ (thumma) mean?",
        options: ["Before", "Then / thereafter", "Never", "Only"],
        correctAnswer: "Then / thereafter",
        explanation: "ثُمَّ (thumma) means “then” or “thereafter”. The phrase ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ (thumma amātahu fa-aqbarah – “Then He causes him to die and puts him in his grave”) is in Surah Abasa (80:21)."
      },
      {
        id: "qav-easy-058",
        question: "What does أَوْ (aw) mean?",
        options: ["And", "Or", "But", "If"],
        correctAnswer: "Or",
        explanation: "أَوْ (aw) means “or”. The phrase آباؤُكُمْ أَوْ أَبْنَاؤُكُمْ (ābāʾukum aw abnāʾukum – “your fathers or your sons”) is in Surah At-Tawbah (9:24)."
      },
      {
        id: "qav-easy-059",
        question: "What does إِنَّ (inna) mean?",
        options: ["If", "Indeed / verily", "Except", "When"],
        correctAnswer: "Indeed / verily",
        explanation: "إِنَّ (inna) means “indeed” or “verily”. The phrase إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (inna-llāha maʿa-ṣ-ṣābirīn – “Indeed, Allah is with the patient”) is in Surah Al-Baqarah (2:153)."
      },
      {
        id: "qav-easy-060",
        question: "What does إِنْ (in) mean?",
        options: ["Indeed", "If", "Except", "Until"],
        correctAnswer: "If",
        explanation: "إِنْ (in) often means “if”. The phrase إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ (in tanṣurū-llāha yanṣurkum – “If you support Allah, He will support you”) is in Surah Muhammad (47:7)."
      },
      {
        id: "qav-easy-061",
        question: "What does إِلَّا (illā) mean?",
        options: ["And", "Except / unless", "Before", "After"],
        correctAnswer: "Except / unless",
        explanation: "إِلَّا (illā) means “except” or “unless”. The phrase لَا إِلَٰهَ إِلَّا اللَّهُ (lā ilāha illā-llāh – “There is no deity except Allah”) is the core of tawhid, e.g. Surah As-Saffat (37:35)."
      },
      {
        id: "qav-easy-062",
        question: "What does عَنْ (ʿan) mean?",
        options: ["In", "About / from / away from", "With", "Under"],
        correctAnswer: "About / from / away from",
        explanation: "عَنْ (ʿan) means “about”, “from”, or “away from”. The phrase يَسْأَلُونَكَ عَنِ الْأَهِلَّةِ (yasʾalūnaka ʿani-l-ahillah – “They ask you about the new moons”) is in Surah Al-Baqarah (2:189)."
      },
      {
        id: "qav-easy-063",
        question: "What does مَعَ (maʿa) mean?",
        options: ["Without", "With", "Against", "Before"],
        correctAnswer: "With",
        explanation: "مَعَ (maʿa) means “with”. The phrase إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (inna-llāha maʿa-ṣ-ṣābirīn – “Indeed, Allah is with the patient”) is in Surah Al-Baqarah (2:153)."
      },
      {
        id: "qav-easy-064",
        question: "What does بَعْدَ (baʿda) mean?",
        options: ["Before", "After", "During", "Above"],
        correctAnswer: "After",
        explanation: "بَعْدَ (baʿda) means “after”. The phrase مِنْ بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَاتُ (min baʿdi mā jāʾathumu-l-bayyināt – “after the clear proofs had come to them”) is in Surah Al-Baqarah (2:213)."
      },
      {
        id: "qav-easy-065",
        question: "What does قَبْلَ (qabla) mean?",
        options: ["After", "Before", "Beside", "Inside"],
        correctAnswer: "Before",
        explanation: "قَبْلَ (qabla) means “before”. The phrase مِنْ قَبْلِكَ (min qablika – “before you”) is frequent, e.g. Surah Al-Baqarah (2:4)."
      },
      {
        id: "qav-easy-066",
        question: "What does عِنْدَ (ʿinda) mean?",
        options: ["Far from", "With / at / near", "Under", "Above"],
        correctAnswer: "With / at / near",
        explanation: "عِنْدَ (ʿinda) means “with”, “at”, or “near”. The phrase عِنْدَ رَبِّهِمْ (ʿinda rabbihim – “with their Lord”) is in Surah Al-Baqarah (2:62)."
      },
      {
        id: "qav-easy-067",
        question: "What does بَيْنَ (bayna) mean?",
        options: ["Outside", "Between / among", "Behind", "Above"],
        correctAnswer: "Between / among",
        explanation: "بَيْنَ (bayna) means “between” or “among”. The phrase بَيْنَ يَدَيْهِ (bayna yadayhi – “before it / in front of it”) is in Surah Al-Baqarah (2:97)."
      },
      {
        id: "qav-easy-068",
        question: "What does كُلّ (kull) mean?",
        options: ["Some", "Every / all", "None", "Few"],
        correctAnswer: "Every / all",
        explanation: "كُلّ (kull) means “every” or “all”. The phrase كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ (kullu nafsin dhāʾiqatu-l-mawt – “Every soul will taste death”) is in Surah Aal-Imran (3:185)."
      },
      {
        id: "qav-easy-069",
        question: "What does بَعْض (baʿḍ) mean?",
        options: ["All", "Some / part", "None", "Many"],
        correctAnswer: "Some / part",
        explanation: "بَعْض (baʿḍ) means “some” or “part”. The phrase بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ (baʿḍukum li-baʿḍin ʿaduww – “some of you are enemies to others”) is in Surah Al-Baqarah (2:36)."
      },
      {
        id: "qav-easy-070",
        question: "What does شَيْء (shayʾ) mean?",
        options: ["Person", "Thing", "Place", "Time"],
        correctAnswer: "Thing",
        explanation: "شَيْء (shayʾ) means “thing”. The phrase إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ (inna-llāha ʿalā kulli shayʾin qadīr – “Indeed, Allah is over all things competent”) is in Surah Al-Baqarah (2:20). Root ش-ي-ء."
      },
      {
        id: "qav-easy-071",
        question: "What does أَمْر (amr) mean?",
        options: ["News", "Command / matter", "Food", "Path"],
        correctAnswer: "Command / matter",
        explanation: "أَمْر (amr) means “command” or “matter”. The phrase أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ (alā lahu-l-khalqu wa-l-amr – “Unquestionably, His is the creation and the command”) is in Surah Al-A’raf (7:54). Root أ-م-ر."
      },
      {
        id: "qav-easy-072",
        question: "What does قَوْل (qawl) mean?",
        options: ["Action", "Speech / saying", "Thought", "Silence"],
        correctAnswer: "Speech / saying",
        explanation: "قَوْل (qawl) means “speech” or “saying”. The phrase قَوْلٌ مَعْرُوفٌ (qawlun maʿrūf – “kind speech”) is in Surah Al-Baqarah (2:263). Root ق-و-ل."
      },
      {
        id: "qav-easy-073",
        question: "What does حَيَاة (ḥayāh) mean?",
        options: ["Death", "Life", "Sleep", "Dream"],
        correctAnswer: "Life",
        explanation: "حَيَاة (ḥayāh) means “life”. The phrase الْحَيَاةُ الدُّنْيَا (al-ḥayātu-d-dunyā – “the worldly life”) is in Surah Al-Baqarah (2:86). Root ح-ي-ي."
      },
      {
        id: "qav-easy-074",
        question: "What does مَوْت (mawt) mean?",
        options: ["Life", "Death", "Sleep", "Birth"],
        correctAnswer: "Death",
        explanation: "مَوْت (mawt) means “death”. The phrase كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ (kullu nafsin dhāʾiqatu-l-mawt – “Every soul will taste death”) is in Surah Aal-Imran (3:185). Root م-و-ت."
      },
      {
        id: "qav-easy-075",
        question: "What does سَاعَة (sāʿah) mean?",
        options: ["Day", "Hour / the Hour (of Judgment)", "Year", "Month"],
        correctAnswer: "Hour / the Hour (of Judgment)",
        explanation: "سَاعَة (sāʿah) means “hour”; often the Hour of Judgment. The phrase يَسْأَلُونَكَ عَنِ السَّاعَةِ (yasʾalūnaka ʿani-s-sāʿah – “They ask you about the Hour”) is in Surah Al-A’raf (7:187)."
      },
      {
        id: "qav-easy-076",
        question: "What does رِيح (rīḥ) mean?",
        options: ["Water", "Wind", "Fire", "Earth"],
        correctAnswer: "Wind",
        explanation: "رِيح (rīḥ) means “wind”. The phrase رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ (rīḥun fīhā ʿadhābun alīm – “a wind in which is a painful punishment”) is in Surah Al-Ahqaf (46:24)."
      },
      {
        id: "qav-easy-077",
        question: "What does بَحْر (baḥr) mean?",
        options: ["Mountain", "Sea / large body of water", "River only", "Desert"],
        correctAnswer: "Sea / large body of water",
        explanation: "بَحْر (baḥr) means “sea”. The phrase وَالْبَحْرِ الْمَسْجُورِ (wa-l-baḥri-l-masjūr – “By the sea filled with fire”) is in Surah At-Tur (52:6)."
      },
      {
        id: "qav-easy-078",
        question: "What does جَبَل (jabal) mean?",
        options: ["Valley", "Mountain", "Plain", "River"],
        correctAnswer: "Mountain",
        explanation: "جَبَل (jabal) means “mountain”. The phrase وَإِذْ نَتَقْنَا الْجَبَلَ فَوْقَهُمْ (wa idh nataqnā-l-jabala fawqahum – “And when We raised the mountain above them”) is in Surah Al-A’raf (7:171)."
      },
      {
        id: "qav-easy-079",
        question: "What does شَجَر (shajar) mean?",
        options: ["Stone", "Tree / trees", "Flower", "Grass"],
        correctAnswer: "Tree / trees",
        explanation: "شَجَر (shajar) means “tree(s)”. The phrase وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ (wa-n-najmu wa-sh-shajaru yasjudān – “And the stars and trees prostrate”) is in Surah Ar-Rahman (55:6)."
      },
      {
        id: "qav-easy-080",
        question: "What does ثَمَر (thamar) mean?",
        options: ["Leaf", "Fruit", "Root", "Branch"],
        correctAnswer: "Fruit",
        explanation: "ثَمَر (thamar) means “fruit”. The phrase وَمِنْ ثَمَرَاتِ النَّخِيلِ وَالْأَعْنَابِ (wa min thamarāti-n-nakhīli wa-l-aʿnāb – “And from the fruits of the palm trees and grapevines”) is in Surah An-Nahl (16:67)."
      },
      {
        id: "qav-easy-081",
        question: "What does طَعَام (ṭaʿām) mean?",
        options: ["Drink", "Food", "Clothing", "Shelter"],
        correctAnswer: "Food",
        explanation: "طَعَام (ṭaʿām) means “food”. The phrase وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ (wa yuṭʿimūna-ṭ-ṭaʿāma ʿalā ḥubbihi – “And they give food, in spite of love for it”) is in Surah Al-Insan (76:8)."
      },
      {
        id: "qav-easy-082",
        question: "What does لَبَن (laban) mean?",
        options: ["Honey", "Milk", "Water", "Oil"],
        correctAnswer: "Milk",
        explanation: "لَبَن (laban) means “milk”. The phrase مِنْ بَيْنِ فَرْثٍ وَدَمٍ لَبَنًا خَالِصًا (min bayni farthin wa damin labanan khāliṣā – “from between excretions and blood, pure milk”) is in Surah An-Nahl (16:66)."
      },
      {
        id: "qav-easy-083",
        question: "What does عَسَل (ʿasal) mean?",
        options: ["Milk", "Honey", "Wine", "Oil"],
        correctAnswer: "Honey",
        explanation: "عَسَل (ʿasal) means “honey”. The phrase وَأَنْهَارٌ مِنْ عَسَلٍ مُصَفًّى (wa anhārun min ʿasalin muṣaffā – “and rivers of purified honey”) is in Surah Muhammad (47:15)."
      },
      {
        id: "qav-easy-084",
        question: "What does خَمْر (khamr) mean?",
        options: ["Milk", "Wine / intoxicant", "Water", "Juice"],
        correctAnswer: "Wine / intoxicant",
        explanation: "خَمْر (khamr) means “wine” or intoxicant. The phrase يَسْأَلُونَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِ (yasʾalūnaka ʿani-l-khamri wa-l-maysir – “They ask you about wine and gambling”) is in Surah Al-Baqarah (2:219)."
      },
      {
        id: "qav-easy-085",
        question: "What does لَحْم (laḥm) mean?",
        options: ["Bread", "Meat / flesh", "Fish only", "Bone"],
        correctAnswer: "Meat / flesh",
        explanation: "لَحْم (laḥm) means “meat” or “flesh”. The phrase وَلَحْمِ طَيْرٍ مِمَّا يَشْتَهُونَ (wa laḥmi ṭayrin mimmā yashtahūn – “and the meat of birds from whatever they desire”) is in Surah Al-Waqi’ah (56:21)."
      },
      {
        id: "qav-easy-086",
        question: "What does دَم (dam) mean?",
        options: ["Water", "Blood", "Milk", "Oil"],
        correctAnswer: "Blood",
        explanation: "دَم (dam) means “blood”. The phrase حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ (ḥurrimat ʿalaykumu-l-maytatu wa-d-dam – “Prohibited to you are dead animals and blood”) is in Surah Al-Ma’idah (5:3)."
      },
      {
        id: "qav-easy-087",
        question: "What does عَظْم (ʿaẓm) mean?",
        options: ["Skin", "Bone", "Muscle", "Hair"],
        correctAnswer: "Bone",
        explanation: "عَظْم (ʿaẓm) means “bone”. The phrase مَنْ يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ (man yuḥyi-l-ʿiẓāma wa hiya ramīm – “Who will give life to bones while they are disintegrated?”) is in Surah Yasin (36:78)."
      },
      {
        id: "qav-easy-088",
        question: "What does جِلْد (jild) mean?",
        options: ["Bone", "Skin", "Blood", "Hair"],
        correctAnswer: "Skin",
        explanation: "جِلْد (jild) means “skin”. The phrase كُلَّمَا نَضِجَتْ جُلُودُهُمْ (kullamā naḍijat julūduhum – “Every time their skins are roasted through”) is in Surah An-Nisa (4:56)."
      },
      {
        id: "qav-easy-089",
        question: "What does عَيْن (ʿayn) mean?",
        options: ["Ear", "Eye / spring", "Nose", "Mouth"],
        correctAnswer: "Eye / spring",
        explanation: "عَيْن (ʿayn) means “eye” (and sometimes “spring”). The phrase وَفَجَّرْنَا الْأَرْضَ عُيُونًا (wa fajjarnā-l-arḍa ʿuyūnā – “And We caused the earth to burst with springs”) is in Surah Al-Qamar (54:12)."
      },
      {
        id: "qav-easy-090",
        question: "What does أُذُن (udhun) mean?",
        options: ["Eye", "Ear", "Nose", "Tongue"],
        correctAnswer: "Ear",
        explanation: "أُذُن (udhun) means “ear”. The phrase وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ … وَفِي آذَانِنَا وَقْرٌ (wa qālū qulūbunā fī akinnah … wa fī ādhāninā waqr – “And they say, ‘Our hearts are within coverings… and in our ears is deafness’”) is in Surah Fussilat (41:5)."
      },
      {
        id: "qav-easy-091",
        question: "What does لِسَان (lisān) mean?",
        options: ["Hand", "Tongue / language", "Foot", "Eye"],
        correctAnswer: "Tongue / language",
        explanation: "لِسَان (lisān) means “tongue” or “language”. The phrase بِلِسَانٍ عَرَبِيٍّ مُبِينٍ (bi-lisānin ʿarabiyyin mubīn – “in a clear Arabic language”) is in Surah Ash-Shu’ara (26:195)."
      },
      {
        id: "qav-easy-092",
        question: "What does يَد (yad) mean?",
        options: ["Foot", "Hand", "Head", "Back"],
        correctAnswer: "Hand",
        explanation: "يَد (yad) means “hand”. The phrase يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ (yadu-llāhi fawqa aydīhim – “The hand of Allah is over their hands”) is in Surah Al-Fath (48:10)."
      },
      {
        id: "qav-easy-093",
        question: "What does رِجْل (rijl) mean?",
        options: ["Hand", "Foot / leg", "Arm", "Neck"],
        correctAnswer: "Foot / leg",
        explanation: "رِجْل (rijl) means “foot” or “leg”. The phrase وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ (wa-msaḥū bi-ruʾūsikum wa arjulakum – “and wipe over your heads and wash your feet”) is in Surah Al-Ma’idah (5:6)."
      },
      {
        id: "qav-easy-094",
        question: "What does وَجْه (wajh) mean?",
        options: ["Back", "Face", "Side", "Top"],
        correctAnswer: "Face",
        explanation: "وَجْه (wajh) means “face”. The phrase وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ (wa li-llāhi-l-mashriqu wa-l-maghrib fa-aynamā tuwallū fa-thamma wajhu-llāh – “To Allah belong the East and the West; wherever you turn, there is the Face of Allah”) is in Surah Al-Baqarah (2:115)."
      },
      {
        id: "qav-easy-095",
        question: "What does رَأْس (raʾs) mean?",
        options: ["Foot", "Head", "Hand", "Heart"],
        correctAnswer: "Head",
        explanation: "رَأْس (raʾs) means “head”. The phrase وَامْسَحُوا بِرُءُوسِكُمْ (wa-msaḥū bi-ruʾūsikum – “and wipe over your heads”) is in Surah Al-Ma’idah (5:6)."
      },
      {
        id: "qav-easy-096",
        question: "What does أَب (ab) mean?",
        options: ["Mother", "Father", "Brother", "Son"],
        correctAnswer: "Father",
        explanation: "أَب (ab) means “father”. The phrase رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ (rabbanā-ghfir lī wa li-wālidayya – “Our Lord, forgive me and my parents”) is in Surah Ibrahim (14:41)."
      },
      {
        id: "qav-easy-097",
        question: "What does أُمّ (umm) mean?",
        options: ["Father", "Mother", "Sister", "Daughter"],
        correctAnswer: "Mother",
        explanation: "أُمّ (umm) means “mother”. The phrase وَوَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ (wa waṣṣaynā-l-insāna bi-wālidayhi ḥamalathu ummuhu – “And We have enjoined upon man [care] for his parents. His mother carried him…”) is in Surah Luqman (31:14)."
      },
      {
        id: "qav-easy-098",
        question: "What does اِبْن (ibn) mean?",
        options: ["Daughter", "Son", "Uncle", "Nephew"],
        correctAnswer: "Son",
        explanation: "اِبْن (ibn) means “son”. The phrase يَا بُنَيَّ (yā bunayya – “O my son”) appears in Luqman’s advice, Surah Luqman (31:13)."
      },
      {
        id: "qav-easy-099",
        question: "What does بِنْت (bint) mean?",
        options: ["Son", "Daughter", "Wife", "Sister"],
        correctAnswer: "Daughter",
        explanation: "بِنْت (bint) means “daughter”. The phrase وَمَرْيَمَ ابْنَتَ عِمْرَانَ (wa Maryama-bnata ʿImrān – “And Mary, the daughter of Imran”) is in Surah At-Tahrim (66:12)."
      },
      {
        id: "qav-easy-100",
        question: "What does أَخ (akh) mean?",
        options: ["Sister", "Brother", "Father", "Friend only"],
        correctAnswer: "Brother",
        explanation: "أَخ (akh) means “brother”. The phrase إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ (innamā-l-muʾminūna ikhwah – “The believers are but brothers”) is in Surah Al-Hujurat (49:10)."
      },
      {
        id: "qav-easy-101",
        question: "What does أُخْت (ukht) mean?",
        options: ["Brother", "Sister", "Mother", "Aunt"],
        correctAnswer: "Sister",
        explanation: "أُخْت (ukht) means “sister”. The phrase يَا أُخْتَ هَارُونَ (yā ukhta Hārūn – “O sister of Aaron”) is in Surah Maryam (19:28)."
      },
      {
        id: "qav-easy-102",
        question: "What does زَوْج (zawj) mean?",
        options: ["Child", "Spouse / pair", "Parent", "Friend"],
        correctAnswer: "Spouse / pair",
        explanation: "زَوْج (zawj) means “spouse” or “pair”. The phrase وَخَلَقَ مِنْهَا زَوْجَهَا (wa khalaqa minhā zawjahā – “and created from it its mate”) is in Surah An-Nisa (4:1)."
      },
      {
        id: "qav-easy-103",
        question: "What does وَلَد (walad) mean?",
        options: ["Parent", "Child / offspring", "Uncle", "Grandparent"],
        correctAnswer: "Child / offspring",
        explanation: "وَلَد (walad) means “child” or “offspring”. The phrase وَلَا يَلِدْ وَلَمْ يُولَدْ (wa lam yalid wa lam yūlad – “He neither begets nor is born”) is in Surah Al-Ikhlas (112:3)."
      },
      {
        id: "qav-easy-104",
        question: "What does قَرْيَة (qaryah) mean?",
        options: ["City only", "Town / village", "Country", "House"],
        correctAnswer: "Town / village",
        explanation: "قَرْيَة (qaryah) means “town” or “village”. The phrase وَاضْرِبْ لَهُمْ مَثَلًا أَصْحَابَ الْقَرْيَةِ (wa-ḍrib lahum mathalan aṣḥāba-l-qaryah – “And present to them an example: the people of the town”) is in Surah Yasin (36:13)."
      },
      {
        id: "qav-easy-105",
        question: "What does مَدِينَة (madīnah) mean?",
        options: ["Village", "City", "Desert", "Mountain"],
        correctAnswer: "City",
        explanation: "مَدِينَة (madīnah) means “city”. The phrase وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ (wa jāʾa min aqṣā-l-madīnati rajul – “And there came from the farthest end of the city a man”) is in Surah Yasin (36:20)."
      },
      {
        id: "qav-easy-106",
        question: "What does طَرِيق (ṭarīq) mean?",
        options: ["Door", "Road / way", "Bridge", "Wall"],
        correctAnswer: "Road / way",
        explanation: "طَرِيق (ṭarīq) means “road” or “way”. The phrase وَيَهْدِيَكُمْ صِرَاطًا مُسْتَقِيمًا (related sense of path); for ṭarīq see e.g. فَاضْرِبْ لَهُمْ طَرِيقًا فِي الْبَحْرِ (fa-ḍrib lahum ṭarīqan fī-l-baḥr – “strike for them a path in the sea”) in Surah Ta-Ha (20:77)."
      },
      {
        id: "qav-easy-107",
        question: "What does بَاب (bāb) mean?",
        options: ["Window", "Door / gate", "Roof", "Floor"],
        correctAnswer: "Door / gate",
        explanation: "بَاب (bāb) means “door” or “gate”. The phrase وَأْتُوا الْبُيُوتَ مِنْ أَبْوَابِهَا (wa-ʾtū-l-buyūta min abwābihā – “And enter houses from their doors”) is in Surah Al-Baqarah (2:189)."
      },
      {
        id: "qav-easy-108",
        question: "What does سُور (sūr) mean?",
        options: ["Door", "Wall / chapter (of Quran)", "Road", "House"],
        correctAnswer: "Wall / chapter (of Quran)",
        explanation: "سُور (sūr) can mean “wall”; سُورَة is a Quran chapter. The phrase سُورَةٌ أَنْزَلْنَاهَا (sūratun anzalnāhā – “A surah which We have sent down”) is in Surah An-Nur (24:1)."
      },
      {
        id: "qav-easy-109",
        question: "What does كَلِمَة (kalimah) mean?",
        options: ["Letter", "Word", "Book", "Sentence only"],
        correctAnswer: "Word",
        explanation: "كَلِمَة (kalimah) means “word”. The phrase وَكَلِمَةُ اللَّهِ هِيَ الْعُلْيَا (wa kalimatu-llāhi hiya-l-ʿulyā – “And the word of Allah is the highest”) is in Surah At-Tawbah (9:40)."
      },
      {
        id: "qav-easy-110",
        question: "What does اِسْم (ism) mean?",
        options: ["Verb", "Name", "Number", "Place"],
        correctAnswer: "Name",
        explanation: "اِسْم (ism) means “name”. The phrase بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (bismi-llāhi-r-raḥmāni-r-raḥīm – “In the name of Allah, the Most Compassionate, the Most Merciful”) is in Surah Al-Fatihah (1:1)."
      },
      {
        id: "qav-easy-111",
        question: "What does عَدَد (ʿadad) mean?",
        options: ["Name", "Number / count", "Colour", "Size"],
        correctAnswer: "Number / count",
        explanation: "عَدَد (ʿadad) means “number” or “count”. The phrase فَأَتِمُّوا الْعِدَّةَ (fa-atimmū-l-ʿiddah – related counting sense); see also وَأَحْصَىٰ كُلَّ شَيْءٍ عَدَدًا (wa aḥṣā kulla shayʾin ʿadadā – “And He has enumerated everything in number”) in Surah Al-Jinn (72:28)."
      },
      {
        id: "qav-easy-112",
        question: "What does يَوْمَئِذٍ (yawmaʾidhin) mean?",
        options: ["Yesterday", "On that day", "Tomorrow", "Every day"],
        correctAnswer: "On that day",
        explanation: "يَوْمَئِذٍ (yawmaʾidhin) means “on that day”. The phrase يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا (yawmaʾidhin yaṣduru-n-nāsu ashtātā – “That Day, the people will depart separated”) is in Surah Az-Zalzalah (99:6)."
      },
      {
        id: "qav-easy-113",
        question: "What does الْيَوْم (al-yawm) mean?",
        options: ["Yesterday", "Today / the Day", "Tomorrow", "Night"],
        correctAnswer: "Today / the Day",
        explanation: "الْيَوْم (al-yawm) means “today” or “the Day”. The phrase الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ (al-yawma akmaltu lakum dīnakum – “This day I have perfected for you your religion”) is in Surah Al-Ma’idah (5:3)."
      },
      {
        id: "qav-easy-114",
        question: "What does غَد (ghad) mean?",
        options: ["Yesterday", "Tomorrow", "Today", "Evening"],
        correctAnswer: "Tomorrow",
        explanation: "غَد (ghad) means “tomorrow”. The phrase وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا (wa lā taqūlanna li-shayʾin innī fāʿilun dhālika ghadā – “And never say of anything, ‘I will do that tomorrow’”) is in Surah Al-Kahf (18:23)."
      },
      {
        id: "qav-easy-115",
        question: "What does أَمْس (ams) mean?",
        options: ["Tomorrow", "Yesterday", "Today", "Morning"],
        correctAnswer: "Yesterday",
        explanation: "أَمْس (ams) means “yesterday”. The phrase كَأَنْ لَمْ تَغْنَ بِالْأَمْسِ (ka-an lam taghna bi-l-ams – “as if it had not flourished yesterday”) is in Surah Yunus (10:24)."
      },
      {
        id: "qav-easy-116",
        question: "What does صَبَاح (ṣabāḥ) mean?",
        options: ["Evening", "Morning", "Night", "Noon"],
        correctAnswer: "Morning",
        explanation: "صَبَاح (ṣabāḥ) means “morning”. The phrase فَإِذَا هُمْ مُصْبِحُونَ (related morning sense); see also وَالصُّبْحِ إِذَا أَسْفَرَ (wa-ṣ-ṣubḥi idhā asfar – “And by the dawn when it breathes”) in Surah Al-Muddaththir (74:34)."
      },
      {
        id: "qav-easy-117",
        question: "What does مَسَاء (masāʾ) mean?",
        options: ["Morning", "Evening", "Midnight", "Dawn"],
        correctAnswer: "Evening",
        explanation: "مَسَاء (masāʾ) means “evening”. The phrase فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ (fa-subḥāna-llāhi ḥīna tumsūna wa ḥīna tuṣbiḥūn – “So exalted is Allah when you reach the evening and when you reach the morning”) is in Surah Ar-Rum (30:17)."
      },
      {
        id: "qav-easy-118",
        question: "What does قَدْ (qad) mean?",
        options: ["Never", "Indeed / already (particle of certainty)", "Perhaps", "Only"],
        correctAnswer: "Indeed / already (particle of certainty)",
        explanation: "قَدْ (qad) affirms or marks that something has already occurred. The phrase قَدْ أَفْلَحَ الْمُؤْمِنُونَ (qad aflaḥa-l-muʾminūn – “Certainly will the believers have succeeded”) is in Surah Al-Mu’minun (23:1)."
      },
      {
        id: "qav-easy-119",
        question: "What does لَمَّا (lammā) mean?",
        options: ["Before", "When / after (something happened)", "Never", "Always"],
        correctAnswer: "When / after (something happened)",
        explanation: "لَمَّا (lammā) often means “when” or “after”. The phrase فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ (fa-lammā tajallā rabbuhu li-l-jabal – “But when his Lord appeared to the mountain”) is in Surah Al-A’raf (7:143)."
      },
      {
        id: "qav-easy-120",
        question: "What does حَتَّى (ḥattā) mean?",
        options: ["From", "Until / so that", "Without", "Instead of"],
        correctAnswer: "Until / so that",
        explanation: "حَتَّى (ḥattā) means “until” or “so that”. The phrase حَتَّىٰ يَأْتِيَكَ الْيَقِينُ (ḥattā yaʾtiyaka-l-yaqīn – “until there comes to you the certainty [death]”) is in Surah Al-Hijr (15:99)."
      },
      {
        id: "qav-easy-121",
        question: "What does لَكِنَّ (lākinna) mean?",
        options: ["And", "But / however", "Or", "If"],
        correctAnswer: "But / however",
        explanation: "لَكِنَّ (lākinna) means “but” or “however”. The phrase لَٰكِنِ الرَّاسِخُونَ فِي الْعِلْمِ (lākini-r-rāsikhūna fī-l-ʿilm – “But those firm in knowledge”) is in Surah An-Nisa (4:162)."
      },
      {
        id: "qav-easy-122",
        question: "What does بَلْ (bal) mean?",
        options: ["And", "Rather / but", "Or", "If"],
        correctAnswer: "Rather / but",
        explanation: "بَلْ (bal) means “rather” or “but”. The phrase بَلْ هُوَ قُرْآنٌ مَجِيدٌ (bal huwa qurʾānun majīd – “But this is a glorious Quran”) is in Surah Al-Buruj (85:21)."
      },
      {
        id: "qav-easy-123",
        question: "What does هَلْ (hal) mean?",
        options: ["Who", "Question particle (yes/no)", "What", "Where"],
        correctAnswer: "Question particle (yes/no)",
        explanation: "هَلْ (hal) introduces a yes/no question. The phrase هَلْ أَتَىٰ عَلَى الْإِنْسَانِ (hal atā ʿalā-l-insān – “Has there come upon man…”) is in Surah Al-Insan (76:1)."
      },
      {
        id: "qav-easy-124",
        question: "What does مَا (mā) mean? (common senses)",
        options: ["Only “water”", "What / that which / not (depending on context)", "Only “who”", "Only “when”"],
        correctAnswer: "What / that which / not (depending on context)",
        explanation: "مَا (mā) is versatile: “what”, “that which”, or “not”. The phrase مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ (mā fī-s-samāwāti wa mā fī-l-arḍ – “whatever is in the heavens and whatever is on the earth”) is in Surah Al-Baqarah (2:284)."
      },
      {
        id: "qav-easy-125",
        question: "What does مَنْ (man) mean?",
        options: ["What", "Who / whoever", "Where", "When"],
        correctAnswer: "Who / whoever",
        explanation: "مَنْ (man) means “who” or “whoever”. The phrase مَنْ جَاءَ بِالْحَسَنَةِ (man jāʾa bi-l-ḥasanah – “Whoever comes with a good deed”) is in Surah Al-An’am (6:160)."
      }
    ],
    medium: [
      {
        id: "qav-medium-001",
        question: "What does سَمَاء (samāʾ) mean?",
        options: ["Earth", "Garden", "Sky or heaven", "Sea"],
        correctAnswer: "Sky or heaven",
        explanation: "سَمَاء (samāʾ) means “sky” or “heaven”. The phrase وَالسَّمَاءَ بِنَاءً (wa-s-samā’a binā’an – “and the sky a canopy”) is in Surah Al-Baqarah (2:22). The target word has four Arabic letters."
      },
      {
        id: "qav-medium-002",
        question: "What does عَذَاب (ʿadhāb) mean?",
        options: ["Guidance", "Punishment", "Provision", "Mercy"],
        correctAnswer: "Punishment",
        explanation: "عَذَاب (ʿadhāb) means “punishment” or “torment”. The phrase عَذَابٌ عَظِيمٌ (ʿadhābun ʿaẓīm – “a great punishment”) appears frequently, e.g. Surah Al-Baqarah (2:7). The target word has four Arabic letters."
      },
      {
        id: "qav-medium-003",
        question: "What does رَسُول (rasūl) mean?",
        options: ["Angel", "Messenger", "King", "Believer"],
        correctAnswer: "Messenger",
        explanation: "رَسُول (rasūl) means “messenger”. The phrase مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ (man yuṭiʿi-r-rasūla fa-qad aṭāʿa Allāh – “Whoever obeys the Messenger has obeyed Allah”) is in Surah An-Nisa (4:80). Four Arabic letters (base form)."
      },
      {
        id: "qav-medium-004",
        question: "What does قَلْب (qalb) mean?",
        options: ["Book", "Water", "Earth", "Heart"],
        correctAnswer: "Heart",
        explanation: "قَلْب (qalb) means “heart”. The phrase بِقَلْبٍ سَلِيمٍ (bi-qalbin salīm – “with a sound heart”) describes the heart that will benefit on the Day of Judgment in Surah Ash-Shu‘ara (26:89). Three Arabic letters."
      },
      {
        id: "qav-medium-005",
        question: "What does تَقْوَى (taqwā) mean?",
        options: ["Anger", "Pride", "Wealth", "God-consciousness / piety"],
        correctAnswer: "God-consciousness / piety",
        explanation: "تَقْوَى (taqwā) means God-consciousness or piety. The phrase هُدًى لِّلْمُتَّقِينَ (hudan lil-muttaqīn – “guidance for the God-conscious”) is in Surah Al-Baqarah (2:2). Four Arabic letters."
      },
      {
        id: "qav-medium-006",
        question: "What does صِرَاط (ṣirāṭ) mean?",
        options: ["Punishment", "Book", "Garden", "Path / way"],
        correctAnswer: "Path / way",
        explanation: "صِرَاط (ṣirāṭ) means “path” or “way”. The daily prayer اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (ihdinā-ṣ-ṣirāṭa-l-mustaqīm – “Guide us to the straight path”) is in Surah Al-Fatihah (1:6). Four Arabic letters."
      },
      {
        id: "qav-medium-007",
        question: "What does مُسْتَقِيم (mustaqīm) mean?",
        options: ["Narrow", "Crooked", "Wide", "Straight"],
        correctAnswer: "Straight",
        explanation: "مُسْتَقِيم (mustaqīm) means “straight”. It completes the famous request اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ in Surah Al-Fatihah (1:6). Six Arabic letters."
      },
      {
        id: "qav-medium-008",
        question: "What does مَلَائِكَة (malāʾikah) mean?",
        options: ["Disbelievers", "Prophets", "Believers", "Angels"],
        correctAnswer: "Angels",
        explanation: "مَلَائِكَة (malāʾikah) means “angels”. The phrase وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ (wa idh qāla Rabbuka lil-malā’ikah – “And when your Lord said to the angels”) begins the story of Adam in Surah Al-Baqarah (2:30). Six Arabic letters."
      },
      {
        id: "qav-medium-009",
        question: "What does شَيْطَان (shayṭān) mean?",
        options: ["Believer", "Angel", "Prophet", "Satan / devil"],
        correctAnswer: "Satan / devil",
        explanation: "شَيْطَان (shayṭān) means “Satan” or “devil”. The phrase فَأَزَلَّهُمَا الشَّيْطَانُ (fa-azallahumā-sh-shayṭān – “But Satan caused them to slip”) is in the story of Adam in Surah Al-Baqarah (2:36). Five Arabic letters."
      },
      {
        id: "qav-medium-010",
        question: "What does آخِرَة (ākhirah) mean?",
        options: ["Present", "Worldly life", "Past", "Hereafter"],
        correctAnswer: "Hereafter",
        explanation: "آخِرَة (ākhirah) means the Hereafter. The phrase وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ (wa-l-ākhiratu khayrun wa abqā – “And the Hereafter is better and more lasting”) is in Surah Al-A‘la (87:17). Five Arabic letters."
      },
      {
        id: "qav-medium-011",
        question: "What does دُنْيَا (dunyā) mean?",
        options: ["Hell", "Hereafter", "Paradise", "Worldly life"],
        correctAnswer: "Worldly life",
        explanation: "دُنْيَا (dunyā) means “this world” or “worldly life”. The phrase الْحَيَاةُ الدُّنْيَا (al-ḥayātu-d-dunyā – “the worldly life”) is frequently contrasted with the Hereafter, e.g. Surah Al-Baqarah (2:86). Four Arabic letters."
      },
      {
        id: "qav-medium-012",
        question: "What does رِزْق (rizq) mean?",
        options: ["Prayer", "Punishment", "Knowledge", "Provision / sustenance"],
        correctAnswer: "Provision / sustenance",
        explanation: "رِزْق (rizq) means “provision” or “sustenance”. The phrase وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ (wa mimmā razaqnāhum yunfiqūn – “and from what We have provided them, they spend”) describes the believers in Surah Al-Baqarah (2:3). Three Arabic letters."
      },
      {
        id: "qav-medium-013",
        question: "What does تَوْبَة (tawbah) mean?",
        options: ["Forgetfulness", "Pride", "Anger", "Repentance"],
        correctAnswer: "Repentance",
        explanation: "تَوْبَة (tawbah) means “repentance”. The phrase إِنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ (inna Allāha huwa-t-tawwābu-r-raḥīm – “Indeed, Allah is the Accepter of repentance, the Merciful”) is in Surah At-Tawbah (9:104). Four Arabic letters."
      },
      {
        id: "qav-medium-014",
        question: "What does مَغْفِرَة (maghfirah) mean?",
        options: ["Wealth", "Punishment", "Guidance", "Forgiveness"],
        correctAnswer: "Forgiveness",
        explanation: "مَغْفِرَة (maghfirah) means “forgiveness”. The phrase وَاللَّهُ غَفُورٌ رَّحِيمٌ and the noun مَغْفِرَة appear together in many places, e.g. Surah Al-Baqarah (2:175). Five Arabic letters."
      },
      {
        id: "qav-medium-015",
        question: "What does سَبِيل (sabīl) mean?",
        options: ["Heart", "House", "Book", "Way / path"],
        correctAnswer: "Way / path",
        explanation: "سَبِيل (sabīl) means “way” or “path”. The phrase فِي سَبِيلِ اللَّهِ (fī sabīli-llāh – “in the way of Allah”) is one of the most frequent expressions of striving for Allah’s cause. Four Arabic letters."
      },
      {
        id: "qav-medium-016",
        question: "What does أُمَّة (ummah) mean?",
        options: ["Tribe only", "Individual", "Family", "Community / nation"],
        correctAnswer: "Community / nation",
        explanation: "أُمَّة (ummah) means “community” or “nation”. The phrase وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا (wa kadhālika jaʿalnākum ummatan wasaṭan – “And thus We have made you a just community”) is in Surah Al-Baqarah (2:143). Three Arabic letters."
      },
      {
        id: "qav-medium-017",
        question: "What does نَبِيّ (nabī) mean?",
        options: ["King", "Messenger only", "Angel", "Prophet"],
        correctAnswer: "Prophet",
        explanation: "نَبِيّ (nabī) means “prophet”. The phrase خَاتَمَ النَّبِيِّينَ (khātama-n-nabiyyīn – “the Seal of the Prophets”) refers to Muhammad ﷺ in Surah Al-Ahzab (33:40). Three Arabic letters."
      },
      {
        id: "qav-medium-018",
        question: "What does عَبْد (ʿabd) mean?",
        options: ["Friend", "King", "Enemy", "Servant / slave (of Allah)"],
        correctAnswer: "Servant / slave (of Allah)",
        explanation: "عَبْد (ʿabd) means “servant” or “slave” (of Allah). The phrase إِنِّي عَبْدُ اللَّهِ (innī ʿabdu-llāh – “Indeed, I am the servant of Allah”) is spoken by the infant Jesus in Surah Maryam (19:30). Three Arabic letters."
      },
      {
        id: "qav-medium-019",
        question: "What does حَيَاة (ḥayāh) mean?",
        options: ["Dream", "Death", "Sleep", "Life"],
        correctAnswer: "Life",
        explanation: "حَيَاة (ḥayāh) means “life”. The phrase كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنتُمْ أَمْوَاتًا فَأَحْيَاكُمْ (kayfa takfurūna bi-llāhi wa kuntum amwātan fa-aḥyākum – “How can you disbelieve in Allah when you were lifeless and He gave you life?”) is in Surah Al-Baqarah (2:28). Four Arabic letters."
      },
      {
        id: "qav-medium-020",
        question: "What does مَوْت (mawt) mean?",
        options: ["Birth", "Life", "Sleep", "Death"],
        correctAnswer: "Death",
        explanation: "مَوْت (mawt) means “death”. The phrase كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ (kullu nafsin dhā’iqatu-l-mawt – “Every soul will taste death”) is in Surah Al-Imran (3:185). Three Arabic letters."
      },
      {
        id: "qav-medium-021",
        question: "What does رُوح (rūḥ) mean?",
        options: ["Mind", "Body", "Heart", "Spirit / soul"],
        correctAnswer: "Spirit / soul",
        explanation: "رُوح (rūḥ) means “spirit” or “soul”. The phrase وَيَسْأَلُونَكَ عَنِ الرُّوحِ (wa yas’alūnaka ʿani-r-rūḥ – “And they ask you about the spirit”) is in Surah Al-Isra (17:85). Three Arabic letters."
      },
      {
        id: "qav-medium-022",
        question: "What does ذِكْر (dhikr) mean?",
        options: ["Writing", "Forgetfulness", "Speech only", "Remembrance"],
        correctAnswer: "Remembrance",
        explanation: "ذِكْر (dhikr) means “remembrance” (of Allah). The phrase أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (alā bi-dhikri-llāhi taṭma’innu-l-qulūb – “Unquestionably, by the remembrance of Allah hearts are assured”) is in Surah Ar-Ra‘d (13:28). Three Arabic letters."
      },
      {
        id: "qav-medium-023",
        question: "What does دُعَاء (duʿāʾ) mean?",
        options: ["Command", "Argument", "Speech", "Supplication / prayer"],
        correctAnswer: "Supplication / prayer",
        explanation: "دُعَاء (duʿāʾ) means “supplication”. The phrase ادْعُونِي أَسْتَجِبْ لَكُمْ (ud‘ūnī astajib lakum – “Call upon Me; I will respond to you”) is in Surah Ghafir (40:60). Four Arabic letters."
      },
      {
        id: "qav-medium-024",
        question: "What does شُكْر (shukr) mean?",
        options: ["Pride", "Complaint", "Anger", "Gratitude"],
        correctAnswer: "Gratitude",
        explanation: "شُكْر (shukr) means “gratitude”. The promise لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ (la’in shakartum la-azīdannakum – “If you are grateful, I will surely increase you”) is in Surah Ibrahim (14:7). Three Arabic letters."
      },
      {
        id: "qav-medium-025",
        question: "What does فَضْل (faḍl) mean?",
        options: ["Hardship", "Punishment", "Poverty", "Grace / bounty"],
        correctAnswer: "Grace / bounty",
        explanation: "فَضْل (faḍl) means “grace” or “bounty”. The phrase ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَن يَشَاءُ (dhālika faḍlu-llāhi yu’tīhi man yashā’ – “That is the bounty of Allah, which He gives to whom He wills”) is in Surah Al-Jumu‘ah (62:4). Three Arabic letters."
      },
      {
        id: "qav-medium-026",
        question: "What does حِكْمَة (ḥikmah) mean?",
        options: ["Wealth", "Ignorance", "Strength", "Wisdom"],
        correctAnswer: "Wisdom",
        explanation: "حِكْمَة (ḥikmah) means “wisdom”. The phrase يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ (yu’tī-l-ḥikmata man yashā’ – “He gives wisdom to whom He wills”) is in Surah Al-Baqarah (2:269). Four Arabic letters."
      },
      {
        id: "qav-medium-027",
        question: "What does عَدْل (ʿadl) mean?",
        options: ["Power", "Injustice", "Mercy", "Justice"],
        correctAnswer: "Justice",
        explanation: "عَدْل (ʿadl) means “justice”. The command إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ (inna Allāha ya’muru bi-l-ʿadli wa-l-iḥsān – “Indeed, Allah orders justice and excellence”) is in Surah An-Nahl (16:90). Three Arabic letters."
      },
      {
        id: "qav-medium-028",
        question: "What does ظُلْم (ẓulm) mean?",
        options: ["Guidance", "Justice", "Mercy", "Injustice / wrongdoing"],
        correctAnswer: "Injustice / wrongdoing",
        explanation: "ظُلْم (ẓulm) means “injustice” or “wrongdoing”. The phrase إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ (inna-sh-shirka la-ẓulmun ʿaẓīm – “Indeed, association [with Allah] is great injustice”) is in Surah Luqman (31:13). Three Arabic letters."
      },
      {
        id: "qav-medium-029",
        question: "What does بَاطِل (bāṭil) mean?",
        options: ["Light", "Truth", "Guidance", "Falsehood"],
        correctAnswer: "Falsehood",
        explanation: "بَاطِل (bāṭil) means “falsehood”. The phrase وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ (wa lā talbisū-l-ḥaqqa bi-l-bāṭil – “Do not mix the truth with falsehood”) is in Surah Al-Baqarah (2:42). Four Arabic letters."
      },
      {
        id: "qav-medium-030",
        question: "What does غَيْب (ghayb) mean?",
        options: ["The present", "The seen", "The past", "The unseen"],
        correctAnswer: "The unseen",
        explanation: "غَيْب (ghayb) means “the unseen”. The phrase الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ (alladhīna yu’minūna bi-l-ghayb – “who believe in the unseen”) is the first quality of the muttaqīn in Surah Al-Baqarah (2:3). Three Arabic letters."
      },
      {
        id: "qav-medium-031",
        question: "What does يَقِين (yaqīn) mean?",
        options: ["Fear", "Doubt", "Hope", "Certainty"],
        correctAnswer: "Certainty",
        explanation: "يَقِين (yaqīn) means “certainty”. The phrase وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ (wa-ʿbud Rabbaka ḥattā ya’tiyaka-l-yaqīn – “And worship your Lord until there comes to you the certainty [death]”) is in Surah Al-Hijr (15:99). Four Arabic letters."
      },
      {
        id: "qav-medium-032",
        question: "What does فِتْنَة (fitnah) mean?",
        options: ["Paradise", "Ease", "Reward", "Trial / tribulation"],
        correctAnswer: "Trial / tribulation",
        explanation: "فِتْنَة (fitnah) means “trial” or “tribulation”. The phrase وَالْفِتْنَةُ أَشَدُّ مِنَ الْقَتْلِ (wa-l-fitnatu ashaddu mina-l-qatl – “and fitnah is worse than killing”) is in Surah Al-Baqarah (2:191). Four Arabic letters."
      },
      {
        id: "qav-medium-033",
        question: "What does أَجْر (ajr) mean?",
        options: ["Loss", "Punishment", "Debt", "Reward"],
        correctAnswer: "Reward",
        explanation: "أَجْر (ajr) means “reward”. The phrase لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ (lahum ajruhum ʿinda Rabbihim – “for them is their reward with their Lord”) appears for the righteous, e.g. Surah Al-Baqarah (2:62). Three Arabic letters."
      },
      {
        id: "qav-medium-034",
        question: "What does وَحْي (waḥy) mean?",
        options: ["Dream only", "Speech", "Writing", "Revelation"],
        correctAnswer: "Revelation",
        explanation: "وَحْي (waḥy) means “revelation”. The phrase إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ (in huwa illā waḥyun yūḥā – “It is only a revelation revealed”) is in Surah An-Najm (53:4). Three Arabic letters."
      },
      {
        id: "qav-medium-035",
        question: "What does مَسْجِد (masjid) mean?",
        options: ["School", "House", "Market", "Mosque / place of prostration"],
        correctAnswer: "Mosque / place of prostration",
        explanation: "مَسْجِد (masjid) means “mosque” (place of prostration). The phrase وَأَنَّ الْمَسَاجِدَ لِلَّهِ (wa anna-l-masājida li-llāh – “And the mosques are for Allah”) is in Surah Al-Jinn (72:18). Four Arabic letters."
      }
    ],
    advanced: [
      {
        id: "qav-advanced-001",
        question: "What does قَلْب (qalb) mean in Quran 26:89?",
        options: ["Book", "Heart", "Earth", "Water"],
        correctAnswer: "Heart",
        explanation: "قَلْب (qalb) means “heart”. In the phrase بِقَلْبٍ سَلِيمٍ (bi-qalbin salīm – “with a sound heart”) in Surah Ash-Shu‘ara (26:89), it refers to a pure heart that will benefit its owner on the Day of Judgment. Three Arabic letters."
      },
      {
        id: "qav-advanced-002",
        question: "What does سَمَاء (samāʾ) mean?",
        options: ["Garden", "Sky or heaven", "Sea", "Earth"],
        correctAnswer: "Sky or heaven",
        explanation: "سَمَاء (samāʾ) means “sky” or “heaven”. The phrase وَالسَّمَاءَ بِنَاءً (wa-s-samā’a binā’an – “and the sky a canopy”) is in Surah Al-Baqarah (2:22). Four Arabic letters."
      },
      {
        id: "qav-advanced-003",
        question: "What does عَذَاب (ʿadhāb) mean?",
        options: ["Guidance", "Provision", "Mercy", "Punishment"],
        correctAnswer: "Punishment",
        explanation: "عَذَاب (ʿadhāb) means “punishment”. The phrase عَذَابٌ عَظِيمٌ (ʿadhābun ʿaẓīm – “a great punishment”) warns the disbelievers in Surah Al-Baqarah (2:7). Four Arabic letters."
      },
      {
        id: "qav-advanced-004",
        question: "What does رَسُول (rasūl) mean?",
        options: ["King", "Angel", "Believer", "Messenger"],
        correctAnswer: "Messenger",
        explanation: "رَسُول (rasūl) means “messenger”. The phrase مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ (man yuṭiʿi-r-rasūla fa-qad aṭāʿa Allāh – “Whoever obeys the Messenger has obeyed Allah”) is in Surah An-Nisa (4:80). Four Arabic letters."
      },
      {
        id: "qav-advanced-005",
        question: "What does إِلَٰه (ilāh) mean?",
        options: ["Human", "Prophet", "Angel", "God / deity"],
        correctAnswer: "God / deity",
        explanation: "إِلَٰه (ilāh) means “god” or “deity”. The foundation of faith is لَا إِلَٰهَ إِلَّا اللَّهُ (lā ilāha illā Allāh – “There is no god except Allah”). Three Arabic letters."
      },
      {
        id: "qav-advanced-006",
        question: "What does كُفْر (kufr) mean?",
        options: ["Patience", "Faith", "Gratitude", "Disbelief / covering the truth"],
        correctAnswer: "Disbelief / covering the truth",
        explanation: "كُفْر (kufr) means “disbelief” (covering the truth). The phrase إِنَّ الَّذِينَ كَفَرُوا (inna-lladhīna kafarū – “Indeed, those who disbelieve”) opens many warnings, e.g. Surah Al-Baqarah (2:6). Three Arabic letters."
      },
      {
        id: "qav-advanced-007",
        question: "What does شِرْك (shirk) mean?",
        options: ["Prayer", "Belief in one God", "Charity", "Associating partners with Allah"],
        correctAnswer: "Associating partners with Allah",
        explanation: "شِرْك (shirk) means associating partners with Allah. The phrase إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ (inna-sh-shirka la-ẓulmun ʿaẓīm – “Indeed, shirk is great injustice”) is in Surah Luqman (31:13). Three Arabic letters."
      },
      {
        id: "qav-advanced-008",
        question: "What does تَوْحِيد (tawḥīd) mean?",
        options: ["Doubt", "Partnership", "Multiplicity", "Oneness of Allah"],
        correctAnswer: "Oneness of Allah",
        explanation: "تَوْحِيد (tawḥīd) means the oneness of Allah. Although the word itself is later technical, its meaning is the entire message of قُلْ هُوَ اللَّهُ أَحَدٌ (qul huwa-llāhu aḥad – “Say: He is Allah, the One”) in Surah Al-Ikhlas (112:1). Five Arabic letters."
      },
      {
        id: "qav-advanced-009",
        question: "What does قَدَر (qadar) mean?",
        options: ["Luck", "Free will only", "Chance", "Divine decree / destiny"],
        correctAnswer: "Divine decree / destiny",
        explanation: "قَدَر (qadar) means divine decree. The phrase إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ (innā kulla shay’in khalaqnāhu bi-qadar – “Indeed, We created everything according to a measure”) is in Surah Al-Qamar (54:49). Three Arabic letters."
      },
      {
        id: "qav-advanced-010",
        question: "What does غَفْلَة (ghaflah) mean?",
        options: ["Gratitude", "Remembrance", "Certainty", "Heedlessness / unawareness"],
        correctAnswer: "Heedlessness / unawareness",
        explanation: "غَفْلَة (ghaflah) means “heedlessness”. The phrase اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ (iqtaraba lin-nāsi ḥisābuhum wa hum fī ghaflatin muʿriḍūn – “The people’s account has drawn near while they are in heedlessness, turning away”) opens Surah Al-Anbiya (21:1). Four Arabic letters."
      },
      {
        id: "qav-advanced-011",
        question: "What does اسْتِقَامَة (istiqāmah) mean?",
        options: ["Laziness", "Deviation", "Doubt", "Steadfastness / uprightness"],
        correctAnswer: "Steadfastness / uprightness",
        explanation: "اسْتِقَامَة (istiqāmah) means steadfastness. The phrase إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا (inna-lladhīna qālū Rabbunā-llāhu thumma-staqāmū – “Indeed, those who have said ‘Our Lord is Allah’ and then remained steadfast”) is in Surah Fussilat (41:30). Seven Arabic letters."
      },
      {
        id: "qav-advanced-012",
        question: "What does إِخْلَاص (ikhlāṣ) mean?",
        options: ["Doubt", "Showing off", "Hypocrisy", "Sincerity / pure devotion"],
        correctAnswer: "Sincerity / pure devotion",
        explanation: "إِخْلَاص (ikhlāṣ) means sincerity. Surah Al-Ikhlas itself is named after this concept; the command is to purify worship for Allah alone. Five Arabic letters."
      },
      {
        id: "qav-advanced-013",
        question: "What does تَوَكُّل (tawakkul) mean?",
        options: ["Arrogance", "Self-reliance only", "Despair", "Reliance upon Allah"],
        correctAnswer: "Reliance upon Allah",
        explanation: "تَوَكُّل (tawakkul) means reliance upon Allah. The phrase فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ (fa-idhā ʿazamta fa-tawakkal ʿalā-llāh – “And when you have decided, then rely upon Allah”) is in Surah Al-Imran (3:159). Five Arabic letters."
      },
      {
        id: "qav-advanced-014",
        question: "What does فَسَاد (fasād) mean?",
        options: ["Peace", "Reform", "Justice", "Corruption / mischief"],
        correctAnswer: "Corruption / mischief",
        explanation: "فَسَاد (fasād) means “corruption” or “mischief”. The phrase وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ (wa idhā qīla lahum lā tufsidū fī-l-arḍ – “And when it is said to them, ‘Do not cause corruption on the earth’”) is in Surah Al-Baqarah (2:11). Four Arabic letters."
      },
      {
        id: "qav-advanced-015",
        question: "What does صَالِح (ṣāliḥ) mean?",
        options: ["Arrogant", "Corrupt", "Ignorant", "Righteous"],
        correctAnswer: "Righteous",
        explanation: "صَالِح (ṣāliḥ) means “righteous”. The frequent phrase الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ (alladhīna āmanū wa ʿamilū-ṣ-ṣāliḥāt – “those who believe and do righteous deeds”) appears throughout the Quran. Four Arabic letters."
      },
      {
        id: "qav-advanced-016",
        question: "What does سَيِّئَة (sayyiʾah) mean?",
        options: ["Intention", "Good deed", "Neutral action", "Evil deed / bad action"],
        correctAnswer: "Evil deed / bad action",
        explanation: "سَيِّئَة (sayyiʾah) means an evil deed. The phrase مَن جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا ۖ وَمَن جَاءَ بِالسَّيِّئَةِ (man jā’a bi-l-ḥasanati fa-lahu ʿashru amthālihā wa man jā’a bi-s-sayyi’ah – “Whoever comes with a good deed will have ten times as much, and whoever comes with an evil deed…”) is in Surah Al-An‘am (6:160). Five Arabic letters."
      },
      {
        id: "qav-advanced-017",
        question: "What does حَسَنَة (ḥasanah) mean?",
        options: ["Trial", "Evil deed", "Punishment", "Good deed"],
        correctAnswer: "Good deed",
        explanation: "حَسَنَة (ḥasanah) means a good deed. The phrase رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً (Rabbanā ātinā fī-d-dunyā ḥasanatan wa fī-l-ākhirati ḥasanah – “Our Lord, give us good in this world and good in the Hereafter”) is the famous du‘a in Surah Al-Baqarah (2:201). Five Arabic letters."
      },
      {
        id: "qav-advanced-018",
        question: "What does مِيزَان (mīzān) mean?",
        options: ["Path", "Sword", "Book", "Balance / scale"],
        correctAnswer: "Balance / scale",
        explanation: "مِيزَان (mīzān) means “balance” or “scale”. The phrase وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ (wa-s-samā’a rafaʿahā wa waḍaʿa-l-mīzān – “And the heaven He raised and imposed the balance”) is in Surah Ar-Rahman (55:7). Five Arabic letters."
      },
      {
        id: "qav-advanced-019",
        question: "What does أَمَانَة (amānah) mean?",
        options: ["Power", "Betrayal", "Wealth", "Trust / responsibility"],
        correctAnswer: "Trust / responsibility",
        explanation: "أَمَانَة (amānah) means “trust” or responsibility. The phrase إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ (innā ʿaraḍnā-l-amānata ʿalā-s-samāwāti wa-l-arḍ – “Indeed, We offered the Trust to the heavens and the earth”) is in Surah Al-Ahzab (33:72). Five Arabic letters."
      },
      {
        id: "qav-advanced-020",
        question: "What does وَلِيّ (walī) mean?",
        options: ["Servant only", "Enemy", "Stranger", "Guardian / protector / friend (of Allah)"],
        correctAnswer: "Guardian / protector / friend (of Allah)",
        explanation: "وَلِيّ (walī) means guardian, protector or friend (of Allah). The phrase اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا (Allāhu waliyyu-lladhīna āmanū – “Allah is the Protector of those who believe”) is in Surah Al-Baqarah (2:257). Three Arabic letters."
      },
      {
        id: "qav-advanced-021",
        question: "What does مَثَل (mathal) mean?",
        options: ["Law", "Command", "Story only", "Example / parable"],
        correctAnswer: "Example / parable",
        explanation: "مَثَل (mathal) means “example” or “parable”. The phrase وَيَضْرِبُ اللَّهُ الْأَمْثَالَ لِلنَّاسِ (wa yaḍribu-llāhu-l-amthāla lin-nās – “And Allah presents examples for the people”) is a common Quranic expression. Three Arabic letters."
      },
      {
        id: "qav-advanced-022",
        question: "What does قَوْل (qawl) mean?",
        options: ["Silence", "Action", "Thought", "Speech / saying / word"],
        correctAnswer: "Speech / saying / word",
        explanation: "قَوْل (qawl) means “speech” or “saying”. The phrase قَوْلٌ مَّعْرُوفٌ وَمَغْفِرَةٌ (qawlun maʿrūfun wa maghfirah – “Kind speech and forgiveness”) is better than charity followed by injury (2:263). Three Arabic letters."
      },
      {
        id: "qav-advanced-023",
        question: "What does أَمْر (amr) mean?",
        options: ["Question", "Prohibition only", "Request", "Command / affair / matter"],
        correctAnswer: "Command / affair / matter",
        explanation: "أَمْر (amr) means “command” or “affair”. The phrase إِلَى اللَّهِ تُرْجَعُ الْأُمُورُ (ilā Allāhi turjaʿu-l-umūr – “To Allah all matters are returned”) appears in many places, e.g. 2:210. Three Arabic letters."
      },
      {
        id: "qav-advanced-024",
        question: "What does نَهْي (nahy) mean?",
        options: ["Request", "Command", "Permission", "Prohibition"],
        correctAnswer: "Prohibition",
        explanation: "نَهْي (nahy) means “prohibition”. It is the counterpart of amr; the Quran repeatedly enjoins al-amr bi-l-maʿrūf wa-n-nahy ʿani-l-munkar (enjoining good and forbidding evil). Three Arabic letters."
      },
      {
        id: "qav-advanced-025",
        question: "What does بِرّ (birr) mean?",
        options: ["Doubt", "Sin", "Hypocrisy", "Righteousness / piety"],
        correctAnswer: "Righteousness / piety",
        explanation: "بِرّ (birr) means “righteousness”. The comprehensive definition لَيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ ... وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ (laysa-l-birra an tuwallū wujūhakum … wa lākinna-l-birra man āmana bi-llāh – “Righteousness is not that you turn your faces… but righteousness is [in] one who believes in Allah…”) is in Surah Al-Baqarah (2:177). Two Arabic letters."
      },
      {
        id: "qav-advanced-026",
        question: "What does إِحْسَان (iḥsān) mean?",
        options: ["Neglect", "Mediocrity", "Injustice", "Excellence / doing good beautifully"],
        correctAnswer: "Excellence / doing good beautifully",
        explanation: "إِحْسَان (iḥsān) means excellence. The command إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ (inna Allāha ya’muru bi-l-ʿadli wa-l-iḥsān – “Indeed, Allah orders justice and excellence”) is in Surah An-Nahl (16:90). Five Arabic letters."
      },
      {
        id: "qav-advanced-027",
        question: "What does صَوْم (ṣawm) mean?",
        options: ["Pilgrimage", "Prayer", "Charity", "Fasting"],
        correctAnswer: "Fasting",
        explanation: "صَوْم (ṣawm) means “fasting”. The phrase يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ (yā ayyuhā-lladhīna āmanū kutiba ʿalaykumu-ṣ-ṣiyām – “O you who have believed, fasting is prescribed for you”) is in Surah Al-Baqarah (2:183). Three Arabic letters."
      },
      {
        id: "qav-advanced-028",
        question: "What does حَجّ (ḥajj) mean?",
        options: ["Charity", "Prayer", "Fasting", "Pilgrimage"],
        correctAnswer: "Pilgrimage",
        explanation: "حَجّ (ḥajj) means the pilgrimage. The phrase وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ (wa atimmū-l-ḥajja wa-l-ʿumrata li-llāh – “And complete the Hajj and Umrah for Allah”) is in Surah Al-Baqarah (2:196). Two Arabic letters."
      },
      {
        id: "qav-advanced-029",
        question: "What does جِهَاد (jihād) mean?",
        options: ["Surrender", "Only fighting", "Peace", "Striving / struggle (in the path of Allah)"],
        correctAnswer: "Striving / struggle (in the path of Allah)",
        explanation: "جِهَاد (jihād) means striving in the path of Allah. The phrase وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا (wa-lladhīna jāhadū fīnā la-nahdiyannahum subulanā – “And those who strive for Us – We will surely guide them to Our ways”) is in Surah Al-Ankabut (29:69). Four Arabic letters."
      },
      {
        id: "qav-advanced-030",
        question: "What does شَهَادَة (shahādah) mean?",
        options: ["Denial", "Testimony / martyrdom", "Silence", "Doubt"],
        correctAnswer: "Testimony / martyrdom",
        explanation: "شَهَادَة (shahādah) means “testimony” or “martyrdom”. The declaration of faith is the greatest shahādah; the word also appears in legal and eschatological contexts. Five Arabic letters."
      },
      {
        id: "qav-advanced-031",
        question: "What does قِيَامَة (qiyāmah) mean?",
        options: ["Birth", "Sleep", "Death", "Resurrection / Day of Judgment"],
        correctAnswer: "Resurrection / Day of Judgment",
        explanation: "قِيَامَة (qiyāmah) means the Resurrection. The phrase يَوْمَ الْقِيَامَةِ (yawma-l-qiyāmah – “on the Day of Resurrection”) is one of the most frequent expressions of the Last Day. Five Arabic letters."
      },
      {
        id: "qav-advanced-032",
        question: "What does جَهَنَّم (jahannam) mean?",
        options: ["Hell", "Sky", "Paradise", "Earth"],
        correctAnswer: "Hell",
        explanation: "جَهَنَّم (jahannam) means Hell. The phrase وَحَسْبُهُمْ جَهَنَّمُ (wa ḥasbuhum jahannam – “and Hell is sufficient for them”) appears as a warning, e.g. Surah Al-Baqarah (2:206). Five Arabic letters."
      },
      {
        id: "qav-advanced-033",
        question: "What does فِرْدَوْس (firdaws) mean?",
        options: ["Earth", "Sky", "The highest level of Paradise", "A level of Hell"],
        correctAnswer: "The highest level of Paradise",
        explanation: "فِرْدَوْس (firdaws) is the highest level of Paradise. The phrase إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا (inna-lladhīna āmanū … kānat lahum jannātu-l-firdawsi nuzulan – “Indeed, those who believe and do righteous deeds – for them are the Gardens of Firdaws as a lodging”) is in Surah Al-Kahf (18:107). Five Arabic letters."
      },
      {
        id: "qav-advanced-034",
        question: "What does عَرْش (ʿarsh) mean?",
        options: ["Chair", "Mountain", "Throne (of Allah)", "House"],
        correctAnswer: "Throne (of Allah)",
        explanation: "عَرْش (ʿarsh) means the Throne of Allah. The phrase وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ (wa huwa Rabbu-l-ʿarshi-l-ʿaẓīm – “And He is the Lord of the Great Throne”) closes Surah At-Tawbah (9:129). Three Arabic letters."
      },
      {
        id: "qav-advanced-035",
        question: "What does كُرْسِيّ (kursī) mean?",
        options: ["Book", "Footstool / chair (of Allah)", "Pen", "Throne"],
        correctAnswer: "Footstool / chair (of Allah)",
        explanation: "كُرْسِيّ (kursī) refers to the Footstool of Allah. The famous Āyat al-Kursī contains وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ (wasiʿa kursiyyuhu-s-samāwāti wa-l-arḍ – “His Kursī extends over the heavens and the earth”) in Surah Al-Baqarah (2:255). Five Arabic letters."
      },
    ],
  },
}

export default quranicArabic01Category;
