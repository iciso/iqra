
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
      },
                {
        id: "qav-medium-036",
        question: "What does صَبْر (ṣabr) mean?",
        options: ["Haste", "Patience / perseverance", "Anger", "Forgetfulness"],
        correctAnswer: "Patience / perseverance",
        explanation: "صَبْر (ṣabr) means “patience” or “perseverance”. The phrase إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (inna-llāha maʿa-ṣ-ṣābirīn – “Indeed, Allah is with the patient”) is in Surah Al-Baqarah (2:153)."
      },
      {
        id: "qav-medium-037",
        question: "What does تَوَكُّل (tawakkul) mean?",
        options: ["Doubt", "Reliance upon Allah", "Planning only", "Fear of people"],
        correctAnswer: "Reliance upon Allah",
        explanation: "تَوَكُّل (tawakkul) means reliance upon Allah. The phrase وَعَلَى اللَّهِ فَتَوَكَّلُوا إِنْ كُنْتُمْ مُؤْمِنِينَ (wa ʿalā-llāhi fa-tawakkalū in kuntum muʾminīn – “And upon Allah rely, if you should be believers”) is in Surah Al-Ma’idah (5:23)."
      },
      {
        id: "qav-medium-038",
        question: "What does إِخْلَاص (ikhlāṣ) mean?",
        options: ["Showing off", "Sincerity / purity of intention", "Hypocrisy", "Doubt"],
        correctAnswer: "Sincerity / purity of intention",
        explanation: "إِخْلَاص (ikhlāṣ) means sincerity. The phrase وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ (wa mā umirū illā li-yaʿbudū-llāha mukhliṣīna lahu-d-dīn – “And they were not commanded except to worship Allah, [being] sincere to Him in religion”) is in Surah Al-Bayyinah (98:5)."
      },
      {
        id: "qav-medium-039",
        question: "What does تَوْحِيد (tawḥīd) mean?",
        options: ["Association of partners", "Oneness of Allah", "Denial of God", "Multiple gods"],
        correctAnswer: "Oneness of Allah",
        explanation: "تَوْحِيد (tawḥīd) means affirming the oneness of Allah. The phrase قُلْ هُوَ اللَّهُ أَحَدٌ (qul huwa-llāhu aḥad – “Say: He is Allah, the One”) in Surah Al-Ikhlas (112:1) is the essence of tawhid."
      },
      {
        id: "qav-medium-040",
        question: "What does شِرْك (shirk) mean?",
        options: ["Gratitude", "Associating partners with Allah", "Prayer", "Charity"],
        correctAnswer: "Associating partners with Allah",
        explanation: "شِرْك (shirk) means associating partners with Allah. The phrase إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ (inna-sh-shirka la-ẓulmun ʿaẓīm – “Indeed, association [with Him] is a great injustice”) is in Surah Luqman (31:13)."
      },
      {
        id: "qav-medium-041",
        question: "What does كُفْر (kufr) mean?",
        options: ["Faith", "Disbelief / rejection of truth", "Gratitude", "Patience"],
        correctAnswer: "Disbelief / rejection of truth",
        explanation: "كُفْر (kufr) means disbelief. The phrase وَالَّذِينَ كَفَرُوا (wa-lladhīna kafarū – “And those who disbelieve”) is frequent, e.g. Surah Al-Baqarah (2:6)."
      },
      {
        id: "qav-medium-042",
        question: "What does نِفَاق (nifāq) mean?",
        options: ["Sincerity", "Hypocrisy", "Courage", "Knowledge"],
        correctAnswer: "Hypocrisy",
        explanation: "نِفَاق (nifāq) means hypocrisy. The phrase إِنَّ الْمُنَافِقِينَ فِي الدَّرْكِ الْأَسْفَلِ مِنَ النَّارِ (inna-l-munāfiqīna fī-d-darki-l-asfali mina-n-nār – “Indeed, the hypocrites will be in the lowest depths of the Fire”) is in Surah An-Nisa (4:145)."
      },
      {
        id: "qav-medium-043",
        question: "What does هُدًى (hudā) mean?",
        options: ["Misguidance", "Guidance", "Punishment", "Wealth"],
        correctAnswer: "Guidance",
        explanation: "هُدًى (hudā) means guidance. The phrase ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ (dhālika-l-kitābu lā rayba fīhi hudan li-l-muttaqīn – “This is the Book about which there is no doubt, a guidance for those conscious of Allah”) is in Surah Al-Baqarah (2:2)."
      },
      {
        id: "qav-medium-044",
        question: "What does ضَلَال (ḍalāl) mean?",
        options: ["Guidance", "Misguidance / error", "Success", "Light"],
        correctAnswer: "Misguidance / error",
        explanation: "ضَلَال (ḍalāl) means misguidance. The phrase غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (ghayri-l-maghḍūbi ʿalayhim wa lā-ḍ-ḍāllīn – “not of those who have earned [Your] anger or of those who are astray”) is in Surah Al-Fatihah (1:7)."
      },
      {
        id: "qav-medium-045",
        question: "What does نُور (nūr) mean?",
        options: ["Darkness", "Light", "Fire", "Shadow"],
        correctAnswer: "Light",
        explanation: "نُور (nūr) means light. The phrase اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ (allāhu nūru-s-samāwāti wa-l-arḍ – “Allah is the Light of the heavens and the earth”) is in Surah An-Nur (24:35)."
      },
      {
        id: "qav-medium-046",
        question: "What does ظُلُمَات (ẓulumāt) mean?",
        options: ["Lights", "Darknesses", "Colors", "Shadows only"],
        correctAnswer: "Darknesses",
        explanation: "ظُلُمَات (ẓulumāt) means darknesses. The phrase يُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ (yukhrijuhum mina-ẓ-ẓulumāti ilā-n-nūr – “He brings them out of darknesses into the light”) is in Surah Al-Baqarah (2:257)."
      },
      {
        id: "qav-medium-047",
        question: "What does حَقّ (ḥaqq) mean?",
        options: ["Falsehood", "Truth / right", "Doubt", "Opinion"],
        correctAnswer: "Truth / right",
        explanation: "حَقّ (ḥaqq) means truth or right. The phrase ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ (dhālika bi-anna-llāha huwa-l-ḥaqq – “That is because Allah is the Truth”) is in Surah Al-Hajj (22:6)."
      },
      {
        id: "qav-medium-048",
        question: "What does بَاطِل (bāṭil) mean?",
        options: ["Truth", "Falsehood / vanity", "Justice", "Wisdom"],
        correctAnswer: "Falsehood / vanity",
        explanation: "بَاطِل (bāṭil) means falsehood. The phrase وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ (wa qul jāʾa-l-ḥaqqu wa zahaqa-l-bāṭil – “And say: Truth has come, and falsehood has departed”) is in Surah Al-Isra (17:81)."
      },
      {
        id: "qav-medium-049",
        question: "What does عَدْل (ʿadl) mean?",
        options: ["Injustice", "Justice / fairness", "Anger", "Excess"],
        correctAnswer: "Justice / fairness",
        explanation: "عَدْل (ʿadl) means justice. The phrase إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ (inna-llāha yaʾmuru bi-l-ʿadli wa-l-iḥsān – “Indeed, Allah orders justice and good conduct”) is in Surah An-Nahl (16:90)."
      },
      {
        id: "qav-medium-050",
        question: "What does ظُلْم (ẓulm) mean?",
        options: ["Justice", "Wrongdoing / oppression", "Mercy", "Guidance"],
        correctAnswer: "Wrongdoing / oppression",
        explanation: "ظُلْم (ẓulm) means wrongdoing or oppression. The phrase إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ (inna-sh-shirka la-ẓulmun ʿaẓīm – “Indeed, association [with Him] is a great injustice”) is in Surah Luqman (31:13)."
      },
      {
        id: "qav-medium-051",
        question: "What does رَحْمَة (raḥmah) mean?",
        options: ["Punishment", "Mercy / compassion", "Anger", "Fear"],
        correctAnswer: "Mercy / compassion",
        explanation: "رَحْمَة (raḥmah) means mercy. The phrase وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ (wa raḥmatī wasiʿat kulla shayʾ – “And My mercy encompasses all things”) is in Surah Al-A’raf (7:156)."
      },
      {
        id: "qav-medium-052",
        question: "What does غَضَب (ghaḍab) mean?",
        options: ["Mercy", "Anger / wrath", "Joy", "Peace"],
        correctAnswer: "Anger / wrath",
        explanation: "غَضَب (ghaḍab) means anger or wrath. The phrase غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ (ghayri-l-maghḍūbi ʿalayhim – “not of those who have earned [Your] anger”) is in Surah Al-Fatihah (1:7)."
      },
      {
        id: "qav-medium-053",
        question: "What does مَغْفِرَة (maghfirah) mean?",
        options: ["Punishment", "Forgiveness", "Reward only", "Warning"],
        correctAnswer: "Forgiveness",
        explanation: "مَغْفِرَة (maghfirah) means forgiveness. The phrase وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَنْ يَشَاءُ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ (related); specifically وَاَللَّهُ غَفُورٌ رَحِيمٌ contexts; see نَغْفِرْ لَكُمْ خَطَايَاكُمْ in Surah Al-Baqarah (2:58) and مَغْفِرَةٍ مِنْ رَبِّكُمْ in Aal-Imran (3:133)."
      },
      {
        id: "qav-medium-054",
        question: "What does تَوْبَة (tawbah) mean?",
        options: ["Persistence in sin", "Repentance / turning back to Allah", "Denial", "Pride"],
        correctAnswer: "Repentance / turning back to Allah",
        explanation: "تَوْبَة (tawbah) means repentance. The phrase إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ (inna-llāha yuḥibbu-t-tawwābīn – “Indeed, Allah loves those who are constantly repentant”) is in Surah Al-Baqarah (2:222)."
      },
      {
        id: "qav-medium-055",
        question: "What does اِسْتِغْفَار (istighfār) mean?",
        options: ["Praising people", "Seeking forgiveness", "Complaining", "Arguing"],
        correctAnswer: "Seeking forgiveness",
        explanation: "اِسْتِغْفَار (istighfār) means seeking forgiveness. The phrase وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ (wa-staghfirū-llāha inna-llāha ghafūrun raḥīm – “And ask forgiveness of Allah. Indeed, Allah is Forgiving and Merciful”) is in Surah Al-Baqarah (2:199)."
      },
      {
        id: "qav-medium-056",
        question: "What does دُعَاء (duʿāʾ) mean?",
        options: ["Silence", "Supplication / prayer of request", "Argument", "Song"],
        correctAnswer: "Supplication / prayer of request",
        explanation: "دُعَاء (duʿāʾ) means supplication. The phrase ادْعُونِي أَسْتَجِبْ لَكُمْ (udʿūnī astajib lakum – “Call upon Me; I will respond to you”) is in Surah Ghafir (40:60)."
      },
      {
        id: "qav-medium-057",
        question: "What does ذِكْر (dhikr) mean?",
        options: ["Forgetfulness", "Remembrance (of Allah)", "Sleep", "Idle talk"],
        correctAnswer: "Remembrance (of Allah)",
        explanation: "ذِكْر (dhikr) means remembrance. The phrase أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (alā bi-dhikri-llāhi taṭmaʾinnu-l-qulūb – “Unquestionably, by the remembrance of Allah hearts are assured”) is in Surah Ar-Ra’d (13:28)."
      },
      {
        id: "qav-medium-058",
        question: "What does شُكْر (shukr) mean?",
        options: ["Ingratitude", "Gratitude / thanks", "Complaint", "Silence"],
        correctAnswer: "Gratitude / thanks",
        explanation: "شُكْر (shukr) means gratitude. The phrase لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ (la-in shakartum la-azīdannakum – “If you are grateful, I will surely increase you [in favor]”) is in Surah Ibrahim (14:7)."
      },
      {
        id: "qav-medium-059",
        question: "What does كُفْرَان (kufrān) mean in the sense of ingratitude?",
        options: ["Thanks", "Ingratitude / denial of favor", "Praise", "Hope"],
        correctAnswer: "Ingratitude / denial of favor",
        explanation: "كُفْرَان can mean ingratitude. The phrase لَئِنْ كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ (la-in kafartum inna ʿadhābī la-shadīd – “but if you deny, indeed, My punishment is severe”) is in Surah Ibrahim (14:7)."
      },
      {
        id: "qav-medium-060",
        question: "What does فَضْل (faḍl) mean?",
        options: ["Deficiency", "Bounty / grace / favor", "Punishment", "Debt"],
        correctAnswer: "Bounty / grace / favor",
        explanation: "فَضْل (faḍl) means bounty or favor. The phrase ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَنْ يَشَاءُ (dhālika faḍlu-llāhi yuʾtīhi man yashāʾ – “That is the bounty of Allah, which He gives to whom He wills”) is in Surah Al-Hadid (57:21)."
      },
      {
        id: "qav-medium-061",
        question: "What does نِعْمَة (niʿmah) mean?",
        options: ["Calamity", "Blessing / favor", "Trial only", "Wealth only"],
        correctAnswer: "Blessing / favor",
        explanation: "نِعْمَة (niʿmah) means blessing. The phrase وَإِنْ تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا (wa in taʿuddū niʿmata-llāhi lā tuḥṣūhā – “And if you should count the favors of Allah, you could not enumerate them”) is in Surah Ibrahim (14:34)."
      },
      {
        id: "qav-medium-062",
        question: "What does بَلَاء (balāʾ) mean?",
        options: ["Comfort only", "Trial / test / affliction", "Reward", "Rest"],
        correctAnswer: "Trial / test / affliction",
        explanation: "بَلَاء (balāʾ) means trial or test. The phrase وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ (wa la-nabluwannakum bi-shayʾin mina-l-khawfi wa-l-jūʿ – “And We will surely test you with something of fear and hunger”) is in Surah Al-Baqarah (2:155)."
      },
      {
        id: "qav-medium-063",
        question: "What does فِتْنَة (fitnah) mean?",
        options: ["Peace only", "Trial / temptation / discord", "Certainty", "Unity"],
        correctAnswer: "Trial / temptation / discord",
        explanation: "فِتْنَة (fitnah) means trial, temptation, or discord. The phrase وَالْفِتْنَةُ أَشَدُّ مِنَ الْقَتْلِ (wa-l-fitnatu ashaddu mina-l-qatl – “And fitnah is worse than killing”) is in Surah Al-Baqarah (2:191)."
      },
      {
        id: "qav-medium-064",
        question: "What does أَجْر (ajr) mean?",
        options: ["Loss", "Reward / wage", "Punishment", "Debt"],
        correctAnswer: "Reward / wage",
        explanation: "أَجْر (ajr) means reward. The phrase إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ (inna-lladhīna āmanū wa ʿamilū-ṣ-ṣāliḥāti lahum ajrun ghayru mamnūn – “Indeed, those who believe and do righteous deeds will have a reward uninterrupted”) is in Surah Fussilat (41:8)."
      },
      {
        id: "qav-medium-065",
        question: "What does ثَوَاب (thawāb) mean?",
        options: ["Sin", "Reward (from Allah)", "Punishment", "Forgetfulness"],
        correctAnswer: "Reward (from Allah)",
        explanation: "ثَوَاب (thawāb) means reward from Allah. The phrase وَاللَّهُ عِنْدَهُ حُسْنُ الثَّوَابِ (wa-llāhu ʿindahu ḥusnu-th-thawāb – “And Allah has with Him the best reward”) is in Surah Aal-Imran (3:195)."
      },
      {
        id: "qav-medium-066",
        question: "What does عِقَاب (ʿiqāb) mean?",
        options: ["Reward", "Punishment / retribution", "Pardon", "Delay"],
        correctAnswer: "Punishment / retribution",
        explanation: "عِقَاب (ʿiqāb) means punishment. The phrase وَاللَّهُ شَدِيدُ الْعِقَابِ (wa-llāhu shadīdu-l-ʿiqāb – “And Allah is severe in penalty”) is in Surah Al-Baqarah (2:196)."
      },
      {
        id: "qav-medium-067",
        question: "What does حِسَاب (ḥisāb) mean?",
        options: ["Gift", "Account / reckoning", "Forgetfulness", "Play"],
        correctAnswer: "Account / reckoning",
        explanation: "حِسَاب (ḥisāb) means account or reckoning. The phrase إِنَّ إِلَيْنَا إِيَابَهُمْ ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُمْ (inna ilaynā iyābahum thumma inna ʿalaynā ḥisābahum – “Indeed, to Us is their return. Then indeed, upon Us is their account”) is in Surah Al-Ghashiyah (88:25–26)."
      },
      {
        id: "qav-medium-068",
        question: "What does مِيزَان (mīzān) mean?",
        options: ["Sword", "Balance / scale", "Book", "Throne"],
        correctAnswer: "Balance / scale",
        explanation: "مِيزَان (mīzān) means balance or scale. The phrase وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ (wa naḍaʿu-l-mawāzīna-l-qisṭa li-yawmi-l-qiyāmah – “And We place the scales of justice for the Day of Resurrection”) is in Surah Al-Anbiya (21:47)."
      },
      {
        id: "qav-medium-069",
        question: "What does صِرَاط (ṣirāṭ) mean?",
        options: ["Door", "Path / way", "Mountain", "River"],
        correctAnswer: "Path / way",
        explanation: "صِرَاط (ṣirāṭ) means path. The phrase اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (ihdinā-ṣ-ṣirāṭa-l-mustaqīm – “Guide us to the straight path”) is in Surah Al-Fatihah (1:6)."
      },
      {
        id: "qav-medium-070",
        question: "What does سَبِيل (sabīl) mean?",
        options: ["Wall", "Way / path / means", "House", "Sky"],
        correctAnswer: "Way / path / means",
        explanation: "سَبِيل (sabīl) means way or path. The phrase فِي سَبِيلِ اللَّهِ (fī sabīli-llāh – “in the way of Allah”) is frequent, e.g. Surah Al-Baqarah (2:154)."
      },
      {
        id: "qav-medium-071",
        question: "What does مَنْهَج (manhaj) / مِنْهَاج (minhāj) mean?",
        options: ["Random path", "Clear way / method", "Obstacle", "Secret"],
        correctAnswer: "Clear way / method",
        explanation: "مِنْهَاج (minhāj) means a clear way or method. The phrase لِكُلٍّ جَعَلْنَا مِنْكُمْ شِرْعَةً وَمِنْهَاجًا (li-kullin jaʿalnā minkum shirʿatan wa minhājā – “To each of you We prescribed a law and a method”) is in Surah Al-Ma’idah (5:48)."
      },
      {
        id: "qav-medium-072",
        question: "What does شَرِيعَة (sharīʿah) mean?",
        options: ["Custom only", "Revealed law / path", "Opinion", "Culture"],
        correctAnswer: "Revealed law / path",
        explanation: "شَرِيعَة (sharīʿah) means revealed law or path. The phrase ثُمَّ جَعَلْنَاكَ عَلَىٰ شَرِيعَةٍ مِنَ الْأَمْرِ (thumma jaʿalnāka ʿalā sharīʿatin mina-l-amr – “Then We put you on an ordained way concerning the matter”) is in Surah Al-Jathiyah (45:18)."
      },
      {
        id: "qav-medium-073",
        question: "What does أَمَانَة (amānah) mean?",
        options: ["Betrayal", "Trust / responsibility", "Secret only", "Gift"],
        correctAnswer: "Trust / responsibility",
        explanation: "أَمَانَة (amānah) means trust. The phrase إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ (innā ʿaraḍnā-l-amānata ʿalā-s-samāwāti wa-l-arḍ – “Indeed, We offered the Trust to the heavens and the earth”) is in Surah Al-Ahzab (33:72)."
      },
      {
        id: "qav-medium-074",
        question: "What does خِيَانَة (khiyānah) mean?",
        options: ["Loyalty", "Betrayal / treachery", "Honesty", "Courage"],
        correctAnswer: "Betrayal / treachery",
        explanation: "خِيَانَة (khiyānah) means betrayal. The phrase يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللَّهَ وَالرَّسُولَ (yā ayyuhā-lladhīna āmanū lā takhūnū-llāha wa-r-rasūl – “O you who have believed, do not betray Allah and the Messenger”) is in Surah Al-Anfal (8:27)."
      },
      {
        id: "qav-medium-075",
        question: "What does عَهْد (ʿahd) mean?",
        options: ["Break", "Covenant / promise", "War", "Silence"],
        correctAnswer: "Covenant / promise",
        explanation: "عَهْد (ʿahd) means covenant or promise. The phrase وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا (wa awfū bi-l-ʿahdi inna-l-ʿahda kāna masʾūlā – “And fulfill [every] commitment. Indeed, the commitment is ever [that about which one will be] questioned”) is in Surah Al-Isra (17:34)."
      },
      {
        id: "qav-medium-076",
        question: "What does مِيثَاق (mīthāq) mean?",
        options: ["Casual talk", "Solemn covenant / pact", "Joke", "Rumour"],
        correctAnswer: "Solemn covenant / pact",
        explanation: "مِيثَاق (mīthāq) means a solemn covenant. The phrase وَإِذْ أَخَذْنَا مِيثَاقَكُمْ (wa idh akhadhnā mīthāqakum – “And [recall] when We took your covenant”) is in Surah Al-Baqarah (2:63)."
      },
      {
        id: "qav-medium-077",
        question: "What does وَعْد (waʿd) mean?",
        options: ["Threat only", "Promise", "Denial", "Delay"],
        correctAnswer: "Promise",
        explanation: "وَعْد (waʿd) means promise. The phrase إِنَّ وَعْدَ اللَّهِ حَقٌّ (inna waʿda-llāhi ḥaqq – “Indeed, the promise of Allah is truth”) is in Surah Fatir (35:5)."
      },
      {
        id: "qav-medium-078",
        question: "What does وَعِيد (waʿīd) mean?",
        options: ["Promise of good", "Threat / warning of punishment", "Praise", "Invitation"],
        correctAnswer: "Threat / warning of punishment",
        explanation: "وَعِيد (waʿīd) means a threat or warning of punishment. The phrase وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ … contexts; see كَذَّبُوا بِآيَاتِنَا فَأَخَذْنَاهُمْ and warnings; e.g. Surah Qaf (50:14) وَعِيدِ."
      },
      {
        id: "qav-medium-079",
        question: "What does بُشْرَى (bushrā) mean?",
        options: ["Bad news", "Glad tidings / good news", "Silence", "Doubt"],
        correctAnswer: "Glad tidings / good news",
        explanation: "بُشْرَى (bushrā) means glad tidings. The phrase يُبَشِّرُهُمْ رَبُّهُمْ بِرَحْمَةٍ مِنْهُ (yubashshiruhum rabbuhum bi-raḥmatin minhu – “Their Lord gives them good tidings of mercy from Him”) is in Surah At-Tawbah (9:21)."
      },
      {
        id: "qav-medium-080",
        question: "What does نَذِير (nadhīr) mean?",
        options: ["One who gives glad tidings only", "Warner", "Silent observer", "Judge only"],
        correctAnswer: "Warner",
        explanation: "نَذِير (nadhīr) means warner. The phrase إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا (innā arsalnāka shāhidan wa mubashshiran wa nadhīrā – “Indeed, We have sent you as a witness and a bringer of good tidings and a warner”) is in Surah Al-Ahzab (33:45)."
      },
      {
        id: "qav-medium-081",
        question: "What does بَشِير (bashīr) mean?",
        options: ["Warner only", "Bearer of glad tidings", "Enemy", "Stranger"],
        correctAnswer: "Bearer of glad tidings",
        explanation: "بَشِير (bashīr) means bearer of glad tidings. The phrase إِنَّا أَرْسَلْنَاكَ شَاهِدًا وَمُبَشِّرًا وَنَذِيرًا (innā arsalnāka shāhidan wa mubashshiran wa nadhīrā) is in Surah Al-Ahzab (33:45)."
      },
      {
        id: "qav-medium-082",
        question: "What does رَسُول (rasūl) mean?",
        options: ["Ordinary person", "Messenger", "King only", "Poet"],
        correctAnswer: "Messenger",
        explanation: "رَسُول (rasūl) means messenger. The phrase مُحَمَّدٌ رَسُولُ اللَّهِ (Muḥammadun rasūlu-llāh – “Muhammad is the Messenger of Allah”) is in Surah Al-Fath (48:29)."
      },
      {
        id: "qav-medium-083",
        question: "What does نَبِيّ (nabī) mean?",
        options: ["King", "Prophet", "Angel", "Scholar only"],
        correctAnswer: "Prophet",
        explanation: "نَبِيّ (nabī) means prophet. The phrase يَا أَيُّهَا النَّبِيُّ (yā ayyuhā-n-nabī – “O Prophet”) is frequent, e.g. Surah Al-Ahzab (33:1)."
      },
      {
        id: "qav-medium-084",
        question: "What does وَحْي (waḥy) mean?",
        options: ["Guesswork", "Revelation / inspiration", "Dream only", "Poetry"],
        correctAnswer: "Revelation / inspiration",
        explanation: "وَحْي (waḥy) means revelation. The phrase إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ (in huwa illā waḥyun yūḥā – “It is not but a revelation revealed”) is in Surah An-Najm (53:4)."
      },
      {
        id: "qav-medium-085",
        question: "What does كِتَاب (kitāb) mean?",
        options: ["Speech only", "Book / scripture", "Picture", "Number"],
        correctAnswer: "Book / scripture",
        explanation: "كِتَاب (kitāb) means book. The phrase ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ (dhālika-l-kitābu lā rayba fīh – “This is the Book about which there is no doubt”) is in Surah Al-Baqarah (2:2)."
      },
      {
        id: "qav-medium-086",
        question: "What does قُرْآن (qurʾān) mean?",
        options: ["Any book", "The Quran (recitation / revealed Book)", "Poem", "Letter"],
        correctAnswer: "The Quran (recitation / revealed Book)",
        explanation: "قُرْآن (qurʾān) is the name of the revealed Book. The phrase إِنَّهُ لَقُرْآنٌ كَرِيمٌ (innahu la-qurʾānun karīm – “Indeed, it is a noble Quran”) is in Surah Al-Waqi’ah (56:77)."
      },
      {
        id: "qav-medium-087",
        question: "What does آيَة (āyah) mean?",
        options: ["Chapter only", "Sign / verse", "Word only", "Book"],
        correctAnswer: "Sign / verse",
        explanation: "آيَة (āyah) means sign or verse. The phrase تِلْكَ آيَاتُ اللَّهِ نَتْلُوهَا عَلَيْكَ (tilka āyātu-llāhi natlūhā ʿalayk – “These are the verses of Allah which We recite to you”) is in Surah Al-Baqarah (2:252)."
      },
      {
        id: "qav-medium-088",
        question: "What does سُورَة (sūrah) mean?",
        options: ["Single word", "Chapter of the Quran", "Footnote", "Title only"],
        correctAnswer: "Chapter of the Quran",
        explanation: "سُورَة (sūrah) means a chapter of the Quran. The phrase سُورَةٌ أَنْزَلْنَاهَا وَفَرَضْنَاهَا (sūratun anzalnāhā wa faraḍnāhā – “A surah which We have sent down and made obligatory”) is in Surah An-Nur (24:1)."
      },
      {
        id: "qav-medium-089",
        question: "What does تَفْسِير (tafsīr) relate to in meaning?",
        options: ["Hiding meaning", "Explanation / interpretation", "Deletion", "Translation only"],
        correctAnswer: "Explanation / interpretation",
        explanation: "تَفْسِير relates to explaining. The phrase وَلَا يَأْتُونَكَ بِمَثَلٍ إِلَّا جِئْنَاكَ بِالْحَقِّ وَأَحْسَنَ تَفْسِيرًا (wa lā yaʾtūnaka bi-mathalin illā jiʾnāka bi-l-ḥaqqi wa aḥsana tafsīrā – “And they do not come to you with an argument except that We bring you the truth and the best explanation”) is in Surah Al-Furqan (25:33)."
      },
      {
        id: "qav-medium-090",
        question: "What does حِكْمَة (ḥikmah) mean?",
        options: ["Foolishness", "Wisdom", "Wealth", "Strength only"],
        correctAnswer: "Wisdom",
        explanation: "حِكْمَة (ḥikmah) means wisdom. The phrase وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا (wa man yuʾta-l-ḥikmata fa-qad ūtiya khayran kathīrā – “And whoever has been given wisdom has certainly been given much good”) is in Surah Al-Baqarah (2:269)."
      },
      {
        id: "qav-medium-091",
        question: "What does عِلْم (ʿilm) mean?",
        options: ["Ignorance", "Knowledge", "Guess", "Opinion only"],
        correctAnswer: "Knowledge",
        explanation: "عِلْم (ʿilm) means knowledge. The phrase وَقُلْ رَبِّ زِدْنِي عِلْمًا (wa qul rabbi zidnī ʿilmā – “And say: My Lord, increase me in knowledge”) is in Surah Ta-Ha (20:114)."
      },
      {
        id: "qav-medium-092",
        question: "What does جَهْل (jahl) mean?",
        options: ["Knowledge", "Ignorance", "Wisdom", "Insight"],
        correctAnswer: "Ignorance",
        explanation: "جَهْل (jahl) means ignorance. The phrase إِنِّي أَعِظُكَ أَنْ تَكُونَ مِنَ الْجَاهِلِينَ (innī aʿiẓuka an takūna mina-l-jāhilīn – “Indeed, I advise you, lest you be among the ignorant”) is in Surah Hud (11:46)."
      },
      {
        id: "qav-medium-093",
        question: "What does فَهْم (fahm) mean?",
        options: ["Confusion", "Understanding", "Forgetting", "Repeating"],
        correctAnswer: "Understanding",
        explanation: "فَهْم (fahm) means understanding. The phrase فَفَهَّمْنَاهَا سُلَيْمَانَ (fa-fahhamnāhā Sulaymān – “And We gave understanding of the case to Solomon”) is in Surah Al-Anbiya (21:79)."
      },
      {
        id: "qav-medium-094",
        question: "What does عَقْل (ʿaql) mean?",
        options: ["Madness", "Intellect / reason", "Emotion only", "Habit"],
        correctAnswer: "Intellect / reason",
        explanation: "عَقْل (ʿaql) means intellect. The phrase أَفَلَا تَعْقِلُونَ (a-fa-lā taʿqilūn – “Then will you not reason?”) is frequent, e.g. Surah Al-Baqarah (2:44)."
      },
      {
        id: "qav-medium-095",
        question: "What does قَلْب (qalb) mean?",
        options: ["Hand", "Heart", "Eye", "Tongue"],
        correctAnswer: "Heart",
        explanation: "قَلْب (qalb) means heart. The phrase إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ (illā man atā-llāha bi-qalbin salīm – “But only one who comes to Allah with a sound heart”) is in Surah Ash-Shu’ara (26:89)."
      },
      {
        id: "qav-medium-096",
        question: "What does نَفْس (nafs) mean?",
        options: ["Only “people”", "Soul / self", "Body only", "Name"],
        correctAnswer: "Soul / self",
        explanation: "نَفْس (nafs) means soul or self. The phrase كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ (kullu nafsin dhāʾiqatu-l-mawt – “Every soul will taste death”) is in Surah Aal-Imran (3:185)."
      },
      {
        id: "qav-medium-097",
        question: "What does رُوح (rūḥ) mean?",
        options: ["Body", "Spirit / soul", "Blood", "Bone"],
        correctAnswer: "Spirit / soul",
        explanation: "رُوح (rūḥ) means spirit. The phrase وَيَسْأَلُونَكَ عَنِ الرُّوحِ (wa yasʾalūnaka ʿani-r-rūḥ – “And they ask you about the soul”) is in Surah Al-Isra (17:85)."
      },
      {
        id: "qav-medium-098",
        question: "What does جَسَد (jasad) mean?",
        options: ["Spirit", "Body", "Shadow", "Name"],
        correctAnswer: "Body",
        explanation: "جَسَد (jasad) means body. The phrase وَمَا جَعَلْنَاهُمْ جَسَدًا لَا يَأْكُلُونَ الطَّعَامَ (wa mā jaʿalnāhum jasadan lā yaʾkulūna-ṭ-ṭaʿām – “And We did not make them [the messengers] bodies that did not eat food”) is in Surah Al-Anbiya (21:8)."
      },
      {
        id: "qav-medium-099",
        question: "What does بَصَر (baṣar) mean?",
        options: ["Hearing", "Sight / vision", "Touch", "Smell"],
        correctAnswer: "Sight / vision",
        explanation: "بَصَر (baṣar) means sight. The phrase فَكَشَفْنَا عَنْكَ غِطَاءَكَ فَبَصَرُكَ الْيَوْمَ حَدِيدٌ (fa-kashafnā ʿanka ghiṭāʾaka fa-baṣaruka-l-yawma ḥadīd – “So We have removed from you your cover, so your sight, this Day, is sharp”) is in Surah Qaf (50:22)."
      },
      {
        id: "qav-medium-100",
        question: "What does سَمْع (samʿ) mean?",
        options: ["Sight", "Hearing", "Speech", "Touch"],
        correctAnswer: "Hearing",
        explanation: "سَمْع (samʿ) means hearing. The phrase إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا (inna-s-samʿa wa-l-baṣara wa-l-fuʾāda kullu ulāʾika kāna ʿanhu masʾūlā – “Indeed, the hearing, the sight and the heart – about all those [one] will be questioned”) is in Surah Al-Isra (17:36)."
      },
      {
        id: "qav-medium-101",
        question: "What does فُؤَاد (fuʾād) mean?",
        options: ["Hand", "Heart / inner heart", "Foot", "Eye"],
        correctAnswer: "Heart / inner heart",
        explanation: "فُؤَاد (fuʾād) means the heart (inner self). The phrase إِنَّ السَّمْعَ وَالْبَصَرَ وَالْفُؤَادَ كُلُّ أُولَٰئِكَ كَانَ عَنْهُ مَسْئُولًا is in Surah Al-Isra (17:36)."
      },
      {
        id: "qav-medium-102",
        question: "What does صَدْر (ṣadr) mean?",
        options: ["Back", "Chest / breast (also: heart/mind)", "Head", "Hand"],
        correctAnswer: "Chest / breast (also: heart/mind)",
        explanation: "صَدْر (ṣadr) means chest; often the seat of feeling. The phrase أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ (a-lam nashraḥ laka ṣadrak – “Did We not expand for you your breast?”) is in Surah Ash-Sharh (94:1)."
      },
      {
        id: "qav-medium-103",
        question: "What does تَقْوَى (taqwā) mean?",
        options: ["Pride", "God-consciousness / piety", "Neglect", "Fear of people only"],
        correctAnswer: "God-consciousness / piety",
        explanation: "تَقْوَى (taqwā) means God-consciousness. The phrase إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ (inna akramakum ʿinda-llāhi atqākum – “Indeed, the most noble of you in the sight of Allah is the most righteous of you”) is in Surah Al-Hujurat (49:13)."
      },
      {
        id: "qav-medium-104",
        question: "What does إِحْسَان (iḥsān) mean?",
        options: ["Wrongdoing", "Excellence / doing good beautifully", "Laziness", "Minimal effort"],
        correctAnswer: "Excellence / doing good beautifully",
        explanation: "إِحْسَان (iḥsān) means excellence in doing good. The phrase إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ (inna-llāha yaʾmuru bi-l-ʿadli wa-l-iḥsān – “Indeed, Allah orders justice and good conduct”) is in Surah An-Nahl (16:90)."
      },
      {
        id: "qav-medium-105",
        question: "What does بِرّ (birr) mean?",
        options: ["Sin", "Righteousness / kindness", "Harshness", "Neglect"],
        correctAnswer: "Righteousness / kindness",
        explanation: "بِرّ (birr) means righteousness. The phrase لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ (laysa-l-birra an tuwallū wujūhakum – “Righteousness is not that you turn your faces…”) is in Surah Al-Baqarah (2:177)."
      },
      {
        id: "qav-medium-106",
        question: "What does إِثْم (ithm) mean?",
        options: ["Reward", "Sin / guilt", "Pardon", "Praise"],
        correctAnswer: "Sin / guilt",
        explanation: "إِثْم (ithm) means sin. The phrase وَالْإِثْمَ وَالْبَغْيَ بِغَيْرِ الْحَقِّ (wa-l-ithma wa-l-baghya bi-ghayri-l-ḥaqq – “and sin and oppression without right”) is in Surah Al-A’raf (7:33)."
      },
      {
        id: "qav-medium-107",
        question: "What does ذَنْب (dhanb) mean?",
        options: ["Good deed", "Sin / fault", "Reward", "Gift"],
        correctAnswer: "Sin / fault",
        explanation: "ذَنْب (dhanb) means sin. The phrase وَمَنْ يَغْفِرُ الذُّنُوبَ إِلَّا اللَّهُ (wa man yaghfiru-dh-dhunūba illā-llāh – “And who can forgive sins except Allah?”) is in Surah Aal-Imran (3:135)."
      },
      {
        id: "qav-medium-108",
        question: "What does سَيِّئَة (sayyiʾah) mean?",
        options: ["Good deed", "Evil deed / bad action", "Neutral act", "Reward"],
        correctAnswer: "Evil deed / bad action",
        explanation: "سَيِّئَة (sayyiʾah) means an evil deed. The phrase مَنْ جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا (man jāʾa bi-s-sayyiʾati fa-lā yujzā illā mithlahā – “And whoever comes with an evil deed will not be recompensed except [with] the like thereof”) is in Surah Al-An’am (6:160)."
      },
      {
        id: "qav-medium-109",
        question: "What does حَسَنَة (ḥasanah) mean?",
        options: ["Evil deed", "Good deed / good thing", "Accident", "Loss"],
        correctAnswer: "Good deed / good thing",
        explanation: "حَسَنَة (ḥasanah) means a good deed. The phrase مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا (man jāʾa bi-l-ḥasanati fa-lahu ʿashru amthālihā – “Whoever comes with a good deed will have ten times the like thereof”) is in Surah Al-An’am (6:160)."
      },
      {
        id: "qav-medium-110",
        question: "What does صَالِح (ṣāliḥ) mean?",
        options: ["Corrupt", "Righteous / good", "Lazy", "Ignorant"],
        correctAnswer: "Righteous / good",
        explanation: "صَالِح (ṣāliḥ) means righteous. The phrase وَعَمِلُوا الصَّالِحَاتِ (wa ʿamilū-ṣ-ṣāliḥāt – “and do righteous deeds”) is frequent, e.g. Surah Al-Baqarah (2:25)."
      },
      {
        id: "qav-medium-111",
        question: "What does فَاسِد (fāsid) / فَسَاد (fasād) mean?",
        options: ["Reform", "Corruption / disorder", "Peace", "Growth"],
        correctAnswer: "Corruption / disorder",
        explanation: "فَسَاد (fasād) means corruption. The phrase وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا (wa lā tufsidū fī-l-arḍi baʿda iṣlāḥihā – “And do not cause corruption upon the earth after its reformation”) is in Surah Al-A’raf (7:56)."
      },
      {
        id: "qav-medium-112",
        question: "What does إِصْلَاح (iṣlāḥ) mean?",
        options: ["Corruption", "Reform / setting right", "Destruction", "Neglect"],
        correctAnswer: "Reform / setting right",
        explanation: "إِصْلَاح (iṣlāḥ) means reform. The phrase إِنْ أُرِيدُ إِلَّا الْإِصْلَاحَ مَا اسْتَطَعْتُ (in urīdu illā-l-iṣlāḥa mā-staṭaʿt – “I only intend reform as much as I am able”) is in Surah Hud (11:88)."
      },
      {
        id: "qav-medium-113",
        question: "What does وَلِيّ (walī) mean?",
        options: ["Enemy", "Ally / protector / close friend", "Stranger", "Slave only"],
        correctAnswer: "Ally / protector / close friend",
        explanation: "وَلِيّ (walī) means ally or protector. The phrase اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا (allāhu waliyyu-lladhīna āmanū – “Allah is the ally of those who believe”) is in Surah Al-Baqarah (2:257)."
      },
      {
        id: "qav-medium-114",
        question: "What does عَدُوّ (ʿaduww) mean?",
        options: ["Friend", "Enemy", "Teacher", "Neighbor"],
        correctAnswer: "Enemy",
        explanation: "عَدُوّ (ʿaduww) means enemy. The phrase إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ فَاتَّخِذُوهُ عَدُوًّا (inna-sh-shayṭāna lakum ʿaduwwun fa-ttakhidhūhu ʿaduwwā – “Indeed, Satan is an enemy to you; so take him as an enemy”) is in Surah Fatir (35:6)."
      },
      {
        id: "qav-medium-115",
        question: "What does حَبِيب (ḥabīb) / مَحَبَّة related sense mean?",
        options: ["Hatred", "Beloved / love", "Fear", "Indifference"],
        correctAnswer: "Beloved / love",
        explanation: "Related to love: the phrase يُحِبُّهُمْ وَيُحِبُّونَهُ (yuḥibbuhum wa yuḥibbūnahu – “He will love them and they will love Him”) is in Surah Al-Ma’idah (5:54)."
      },
      {
        id: "qav-medium-116",
        question: "What does خَوْف (khawf) mean?",
        options: ["Safety", "Fear", "Joy", "Sleep"],
        correctAnswer: "Fear",
        explanation: "خَوْف (khawf) means fear. The phrase فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ (fa-lā khawfun ʿalayhim wa lā hum yaḥzanūn – “no fear will there be concerning them, nor will they grieve”) is in Surah Al-Baqarah (2:62)."
      },
      {
        id: "qav-medium-117",
        question: "What does حُزْن (ḥuzn) mean?",
        options: ["Happiness", "Grief / sadness", "Anger", "Surprise"],
        correctAnswer: "Grief / sadness",
        explanation: "حُزْن (ḥuzn) means grief. The phrase فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ (fa-lā khawfun ʿalayhim wa lā hum yaḥzanūn) is in Surah Al-Baqarah (2:62)."
      },
      {
        id: "qav-medium-118",
        question: "What does رَجَاء (rajāʾ) mean?",
        options: ["Despair", "Hope", "Certainty of failure", "Anger"],
        correctAnswer: "Hope",
        explanation: "رَجَاء (rajāʾ) means hope. The phrase وَيَرْجُونَ رَحْمَتَهُ (wa yarjūna raḥmatahu – “and they hope for His mercy”) appears e.g. in Surah Al-Isra (17:57)."
      },
      {
        id: "qav-medium-119",
        question: "What does يَأْس (yaʾs) mean?",
        options: ["Hope", "Despair", "Patience", "Joy"],
        correctAnswer: "Despair",
        explanation: "يَأْس (yaʾs) means despair. The phrase إِنَّهُ لَا يَيْأَسُ مِنْ رَوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ (innahu lā yayʾasu min rawḥi-llāhi illā-l-qawmu-l-kāfirūn – “Indeed, no one despairs of relief from Allah except the disbelieving people”) is in Surah Yusuf (12:87)."
      },
      {
        id: "qav-medium-120",
        question: "What does طَمَع (ṭamaʿ) mean?",
        options: ["Contentment", "Greed / eager desire", "Generosity", "Fear"],
        correctAnswer: "Greed / eager desire",
        explanation: "طَمَع (ṭamaʿ) means eager desire or greed. The phrase وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ contexts of desire; related: see طَمَعًا in e.g. Surah Al-A’raf (7:56) وَادْعُوهُ خَوْفًا وَطَمَعًا."
      },
      {
        id: "qav-medium-121",
        question: "What does رِضَا (riḍā) mean?",
        options: ["Anger", "Pleasure / contentment (of Allah or a person)", "Doubt", "Fear"],
        correctAnswer: "Pleasure / contentment (of Allah or a person)",
        explanation: "رِضَا (riḍā) means pleasure or contentment. The phrase رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ (raḍiya-llāhu ʿanhum wa raḍū ʿanhu – “Allah is pleased with them and they are pleased with Him”) is in Surah Al-Bayyinah (98:8)."
      },
      {
        id: "qav-medium-122",
        question: "What does سَكِينَة (sakīnah) mean?",
        options: ["Turmoil", "Tranquility / calm", "Noise", "Fear"],
        correctAnswer: "Tranquility / calm",
        explanation: "سَكِينَة (sakīnah) means tranquility. The phrase هُوَ الَّذِي أَنْزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ (huwa-lladhī anzala-s-sakīnata fī qulūbi-l-muʾminīn – “It is He who sent down tranquility into the hearts of the believers”) is in Surah Al-Fath (48:4)."
      },
      {
        id: "qav-medium-123",
        question: "What does طُمَأْنِينَة (ṭumaʾnīnah) mean?",
        options: ["Anxiety", "Reassurance / peace of heart", "Confusion", "Doubt"],
        correctAnswer: "Reassurance / peace of heart",
        explanation: "طُمَأْنِينَة (ṭumaʾnīnah) means reassurance. The phrase أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (alā bi-dhikri-llāhi taṭmaʾinnu-l-qulūb – “Unquestionably, by the remembrance of Allah hearts are assured”) is in Surah Ar-Ra’d (13:28)."
      },
      {
        id: "qav-medium-124",
        question: "What does يَقِين (yaqīn) mean?",
        options: ["Doubt", "Certainty", "Guess", "Hope only"],
        correctAnswer: "Certainty",
        explanation: "يَقِين (yaqīn) means certainty. The phrase وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ (wa-ʿbud rabbaka ḥattā yaʾtiyaka-l-yaqīn – “And worship your Lord until there comes to you the certainty [death]”) is in Surah Al-Hijr (15:99)."
      },
      {
        id: "qav-medium-125",
        question: "What does غَيْب (ghayb) mean?",
        options: ["What is seen", "The unseen", "The past only", "The present only"],
        correctAnswer: "The unseen",
        explanation: "غَيْب (ghayb) means the unseen. The phrase الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ (alladhīna yuʾminūna bi-l-ghayb – “who believe in the unseen”) is in Surah Al-Baqarah (2:3)."
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
       {
        id: "qav-advanced-036",
        question: "What does لَوْح (lawḥ) mean in Quranic usage?",
        options: ["A type of food", "Tablet / board (e.g. the Preserved Tablet)", "A mountain", "A river"],
        correctAnswer: "Tablet / board (e.g. the Preserved Tablet)",
        explanation: "لَوْح (lawḥ) means tablet. The phrase فِي لَوْحٍ مَحْفُوظٍ (fī lawḥin maḥfūẓ – “in a Preserved Tablet”) is in Surah Al-Buruj (85:22)."
      },
      {
        id: "qav-advanced-037",
        question: "What does قَلَم (qalam) mean?",
        options: ["Sword", "Pen", "Shield", "Scroll only"],
        correctAnswer: "Pen",
        explanation: "قَلَم (qalam) means pen. The phrase نْ وَالْقَلَمِ وَمَا يَسْطُرُونَ (nūn wa-l-qalami wa mā yasṭurūn – “Nun. By the pen and what they inscribe”) is in Surah Al-Qalam (68:1)."
      },
      {
        id: "qav-advanced-038",
        question: "What does سِجِّين (sijjīn) mean?",
        options: ["A level of Paradise", "A register / place for the record of the wicked", "A type of angel", "A mountain in this world"],
        correctAnswer: "A register / place for the record of the wicked",
        explanation: "سِجِّين (sijjīn) is the register of the wicked. The phrase كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ (kallā inna kitāba-l-fujjāri la-fī sijjīn – “No! Indeed, the record of the wicked is in Sijjin”) is in Surah Al-Mutaffifin (83:7)."
      },
      {
        id: "qav-advanced-039",
        question: "What does عِلِّيِّين (ʿilliyyīn) mean?",
        options: ["A place of punishment", "A high register / place for the record of the righteous", "A desert", "A type of cloud"],
        correctAnswer: "A high register / place for the record of the righteous",
        explanation: "عِلِّيِّين (ʿilliyyīn) is the high register of the righteous. The phrase كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ (kallā inna kitāba-l-abrāri la-fī ʿilliyyīn – “No! Indeed, the record of the righteous is in Illiyyun”) is in Surah Al-Mutaffifin (83:18)."
      },
      {
        id: "qav-advanced-040",
        question: "What does صِرَاط (ṣirāṭ) mean on the Day of Judgment?",
        options: ["A market", "The bridge / path over Hell", "A garden", "A throne"],
        correctAnswer: "The bridge / path over Hell",
        explanation: "صِرَاط (ṣirāṭ) is the path; on the Last Day it is understood as the bridge over Hell. In this life: اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (ihdinā-ṣ-ṣirāṭa-l-mustaqīm) in Surah Al-Fatihah (1:6)."
      },
      {
        id: "qav-advanced-041",
        question: "What does حَشْر (ḥashr) mean?",
        options: ["Dispersion only", "Gathering / assembly (for Judgment)", "Sleep", "Travel for trade"],
        correctAnswer: "Gathering / assembly (for Judgment)",
        explanation: "حَشْر (ḥashr) means gathering. The phrase وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا (wa ḥasharnāhum fa-lam nughādir minhum aḥadā – “And We will gather them and not leave behind from them anyone”) is in Surah Al-Kahf (18:47)."
      },
      {
        id: "qav-advanced-042",
        question: "What does نَشْر (nashr) mean in eschatological context?",
        options: ["Folding only", "Spreading / resurrection unfolding", "Hiding", "Destroying"],
        correctAnswer: "Spreading / resurrection unfolding",
        explanation: "نَشْر (nashr) means spreading out. The phrase وَإِذَا الصُّحُفُ نُشِرَتْ (wa idhā-ṣ-ṣuḥufu nushirat – “And when the pages are spread”) is in Surah At-Takwir (81:10)."
      },
      {
        id: "qav-advanced-043",
        question: "What does بَعْث (baʿth) mean?",
        options: ["Burial only", "Resurrection / raising (from the dead)", "Birth", "Travel"],
        correctAnswer: "Resurrection / raising (from the dead)",
        explanation: "بَعْث (baʿth) means resurrection. The phrase ثُمَّ إِنَّكُمْ يَوْمَ الْقِيَامَةِ تُبْعَثُونَ (thumma innakum yawma-l-qiyāmati tubʿathūn – “Then indeed you, on the Day of Resurrection, will be resurrected”) is in Surah Al-Mu’minun (23:16)."
      },
      {
        id: "qav-advanced-044",
        question: "What does نُشُور (nushūr) mean?",
        options: ["Sleep", "Rising / resurrection", "Decay only", "Forgetfulness"],
        correctAnswer: "Rising / resurrection",
        explanation: "نُشُور (nushūr) means rising (from death). The phrase ثُمَّ إِذَا شَاءَ أَنْشَرَهُ (thumma idhā shāʾa ansharah – “Then when He wills, He will resurrect him”) is in Surah Abasa (80:22)."
      },
      {
        id: "qav-advanced-045",
        question: "What does صُحُف (ṣuḥuf) mean?",
        options: ["Buildings", "Scrolls / scriptures / pages", "Weapons", "Clothes"],
        correctAnswer: "Scrolls / scriptures / pages",
        explanation: "صُحُف (ṣuḥuf) means scrolls or scriptures. The phrase صُحُفِ إِبْرَاهِيمَ وَمُوسَىٰ (ṣuḥufi Ibrāhīma wa Mūsā – “the scriptures of Abraham and Moses”) is in Surah Al-A’la (87:19)."
      },
      {
        id: "qav-advanced-046",
        question: "What does زُبُر (zubur) mean?",
        options: ["Songs", "Scriptures / Psalms (as revealed books)", "Markets", "Tribes"],
        correctAnswer: "Scriptures / Psalms (as revealed books)",
        explanation: "زُبُر (zubur) means scriptures. The phrase وَآتَيْنَا دَاوُودَ زَبُورًا (wa ātaynā Dāwūda zabūrā – “And We gave David the Zabur [Psalms]”) is in Surah An-Nisa (4:163)."
      },
      {
        id: "qav-advanced-047",
        question: "What does تَوْرَاة (Tawrāh) mean?",
        options: ["The Gospel", "The Torah (revealed to Moses)", "The Psalms", "The Quran only"],
        correctAnswer: "The Torah (revealed to Moses)",
        explanation: "تَوْرَاة (Tawrāh) is the Torah. The phrase إِنَّا أَنْزَلْنَا التَّوْرَاةَ فِيهَا هُدًى وَنُورٌ (innā anzalnā-t-Tawrāta fīhā hudan wa nūr – “Indeed, We sent down the Torah, in which was guidance and light”) is in Surah Al-Ma’idah (5:44)."
      },
      {
        id: "qav-advanced-048",
        question: "What does إِنْجِيل (Injīl) mean?",
        options: ["The Torah", "The Gospel (revealed to Jesus)", "The Psalms", "A commentary"],
        correctAnswer: "The Gospel (revealed to Jesus)",
        explanation: "إِنْجِيل (Injīl) is the Gospel. The phrase وَآتَيْنَاهُ الْإِنْجِيلَ (wa ātaynāhu-l-Injīl – “And We gave him the Gospel”) is in Surah Al-Hadid (57:27)."
      },
      {
        id: "qav-advanced-049",
        question: "What does فُرْقَان (furqān) mean?",
        options: ["Confusion", "Criterion / that which distinguishes truth from falsehood", "A type of prayer", "A mountain"],
        correctAnswer: "Criterion / that which distinguishes truth from falsehood",
        explanation: "فُرْقَان (furqān) means criterion. The phrase تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ (tabāraka-lladhī nazzala-l-furqāna ʿalā ʿabdih – “Blessed is He who sent down the Criterion upon His Servant”) is in Surah Al-Furqan (25:1)."
      },
      {
        id: "qav-advanced-050",
        question: "What does ذِكْر (dhikr) can also mean as a name for revelation?",
        options: ["Only silent thought", "Reminder / the Message (the Quran)", "Only a rosary", "Only history"],
        correctAnswer: "Reminder / the Message (the Quran)",
        explanation: "ذِكْر (dhikr) also means the Reminder (revelation). The phrase إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ (innā naḥnu nazzalnā-dh-dhikra wa innā lahu la-ḥāfiẓūn – “Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian”) is in Surah Al-Hijr (15:9)."
      },
      {
        id: "qav-advanced-051",
        question: "What does مُحْكَم (muḥkam) mean regarding Quranic verses?",
        options: ["Ambiguous", "Clear / decisive in meaning", "Abrogated only", "Poetic only"],
        correctAnswer: "Clear / decisive in meaning",
        explanation: "مُحْكَم (muḥkam) means clear and decisive. The phrase مِنْهُ آيَاتٌ مُحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ (minhu āyātun muḥkamātun hunna ummu-l-kitāb – “within it are verses [that are] precise – they are the foundation of the Book”) is in Surah Aal-Imran (3:7)."
      },
      {
        id: "qav-advanced-052",
        question: "What does مُتَشَابِه (mutashābih) mean regarding Quranic verses?",
        options: ["Always clear", "Ambiguous / similar (unspecific in meaning)", "Abrogating", "Historical only"],
        correctAnswer: "Ambiguous / similar (unspecific in meaning)",
        explanation: "مُتَشَابِه (mutashābih) means unspecific or allegorical. The phrase وَأُخَرُ مُتَشَابِهَاتٌ (wa ukharu mutashābihāt – “and others unspecific”) is in Surah Aal-Imran (3:7)."
      },
      {
        id: "qav-advanced-053",
        question: "What does نَسْخ (naskh) mean in Quranic sciences?",
        options: ["Copying a book only", "Abrogation (of a ruling by a later one)", "Memorization only", "Translation"],
        correctAnswer: "Abrogation (of a ruling by a later one)",
        explanation: "نَسْخ (naskh) means abrogation. The phrase مَا نَنْسَخْ مِنْ آيَةٍ أَوْ نُنْسِهَا نَأْتِ بِخَيْرٍ مِنْهَا (mā nansakh min āyatin aw nunsihā naʾti bi-khayrin minhā – “We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it”) is in Surah Al-Baqarah (2:106)."
      },
      {
        id: "qav-advanced-054",
        question: "What does تَأْوِيل (taʾwīl) mean?",
        options: ["Ignoring a text", "Interpretation / ultimate explanation", "Deletion", "Recitation only"],
        correctAnswer: "Interpretation / ultimate explanation",
        explanation: "تَأْوِيل (taʾwīl) means interpretation or final meaning. The phrase وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ (wa mā yaʿlamu taʾwīlahu illā-llāh – “But no one knows its [true] interpretation except Allah”) is in Surah Aal-Imran (3:7)."
      },
      {
        id: "qav-advanced-055",
        question: "What does غَيْب (ghayb) mean?",
        options: ["What is witnessed", "The unseen", "The marketplace", "The past only"],
        correctAnswer: "The unseen",
        explanation: "غَيْب (ghayb) means the unseen. The phrase عَالِمُ الْغَيْبِ وَالشَّهَادَةِ (ʿālimu-l-ghaybi wa-sh-shahādah – “Knower of the unseen and the witnessed”) is in Surah Al-An’am (6:73)."
      },
      {
        id: "qav-advanced-056",
        question: "What does شَهَادَة (shahādah) mean besides testimony?",
        options: ["Only martyrdom", "The seen / witnessed realm (as opposite of ghayb)", "Only a court case", "Only the shahada formula"],
        correctAnswer: "The seen / witnessed realm (as opposite of ghayb)",
        explanation: "شَهَادَة can mean the witnessed realm. The phrase عَالِمُ الْغَيْبِ وَالشَّهَادَةِ is in Surah Al-An’am (6:73)."
      },
      {
        id: "qav-advanced-057",
        question: "What does قَدَر (qadar) mean?",
        options: ["Chance only", "Divine decree / measure", "Human guess", "Randomness"],
        correctAnswer: "Divine decree / measure",
        explanation: "قَدَر (qadar) means decree or measure. The phrase إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ (innā kulla shayʾin khalaqnāhu bi-qadar – “Indeed, all things We created with predestination”) is in Surah Al-Qamar (54:49)."
      },
      {
        id: "qav-advanced-058",
        question: "What does قَضَاء (qaḍāʾ) mean in theological usage?",
        options: ["Suggestion", "Divine judgment / decree", "Advice", "Delay"],
        correctAnswer: "Divine judgment / decree",
        explanation: "قَضَاء (qaḍāʾ) means decree or judgment. The phrase وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ (wa qaḍā rabbuka allā taʿbudū illā iyyāh – “And your Lord has decreed that you not worship except Him”) is in Surah Al-Isra (17:23)."
      },
      {
        id: "qav-advanced-059",
        question: "What does أَجَل (ajal) mean?",
        options: ["Beginning only", "Appointed term / deadline", "Infinity", "Delay without limit"],
        correctAnswer: "Appointed term / deadline",
        explanation: "أَجَل (ajal) means appointed term. The phrase فَإِذَا جَاءَ أَجَلُهُمْ لَا يَسْتَأْخِرُونَ سَاعَةً (fa-idhā jāʾa ajaluhum lā yastaʾkhirūna sāʿah – “And when their time has come, they will not remain behind an hour”) is in Surah Yunus (10:49)."
      },
      {
        id: "qav-advanced-060",
        question: "What does سَاعَة (sāʿah) mean in many eschatological verses?",
        options: ["A short nap", "The Hour (of Judgment)", "A festival", "A prayer time only"],
        correctAnswer: "The Hour (of Judgment)",
        explanation: "سَاعَة (sāʿah) often means the Hour. The phrase يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا (yasʾalūnaka ʿani-s-sāʿati ayyāna mursāhā – “They ask you about the Hour: when is its arrival?”) is in Surah Al-A’raf (7:187)."
      },
      {
        id: "qav-advanced-061",
        question: "What does آخِرَة (ākhirah) mean?",
        options: ["The present world only", "The Hereafter", "Childhood", "History"],
        correctAnswer: "The Hereafter",
        explanation: "آخِرَة (ākhirah) means the Hereafter. The phrase وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ (wa-l-ākhiratu khayrun wa abqā – “And the Hereafter is better and more enduring”) is in Surah Al-A’la (87:17)."
      },
      {
        id: "qav-advanced-062",
        question: "What does دُنْيَا (dunyā) mean?",
        options: ["The Hereafter", "This world / worldly life", "Paradise", "The sky"],
        correctAnswer: "This world / worldly life",
        explanation: "دُنْيَا (dunyā) means this world. The phrase وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ (wa mā-l-ḥayātu-d-dunyā illā matāʿu-l-ghurūr – “And the worldly life is not but enjoyment of delusion”) is in Surah Aal-Imran (3:185)."
      },
      {
        id: "qav-advanced-063",
        question: "What does مَتَاع (matāʿ) mean?",
        options: ["Eternal reward", "Temporary provision / enjoyment", "Punishment", "Knowledge"],
        correctAnswer: "Temporary provision / enjoyment",
        explanation: "مَتَاع (matāʿ) means temporary provision. The phrase وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ is in Surah Aal-Imran (3:185)."
      },
      {
        id: "qav-advanced-064",
        question: "What does غُرُور (ghurūr) mean?",
        options: ["Sincerity", "Delusion / deception", "Certainty", "Guidance"],
        correctAnswer: "Delusion / deception",
        explanation: "غُرُور (ghurūr) means delusion. The phrase وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ is in Surah Aal-Imran (3:185)."
      },
      {
        id: "qav-advanced-065",
        question: "What does زُخْرُف (zukhruf) mean?",
        options: ["Plain truth", "Ornament / adornment (often of this world)", "Poverty", "Silence"],
        correctAnswer: "Ornament / adornment (often of this world)",
        explanation: "زُخْرُف (zukhruf) means adornment. The phrase وَكَذَٰلِكَ زَيَّنَ لِكَثِيرٍ مِنَ الْمُشْرِكِينَ contexts; see زُخْرُفَ الْقَوْلِ in Surah Al-An’am (6:112)."
      },
      {
        id: "qav-advanced-066",
        question: "What does زِينَة (zīnah) mean?",
        options: ["Ugliness", "Adornment / beauty", "Hunger", "Fear"],
        correctAnswer: "Adornment / beauty",
        explanation: "زِينَة (zīnah) means adornment. The phrase زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ (zuyyina li-n-nāsi ḥubbu-sh-shahawāt – “Beautified for people is the love of that which they desire”) is in Surah Aal-Imran (3:14)."
      },
      {
        id: "qav-advanced-067",
        question: "What does شَهْوَة (shahwah) mean?",
        options: ["Dislike", "Desire / lust", "Wisdom", "Patience"],
        correctAnswer: "Desire / lust",
        explanation: "شَهْوَة (shahwah) means desire. The phrase زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ is in Surah Aal-Imran (3:14)."
      },
      {
        id: "qav-advanced-068",
        question: "What does هَوَى (hawā) mean?",
        options: ["Guidance", "Caprice / base desire", "Revelation", "Law"],
        correctAnswer: "Caprice / base desire",
        explanation: "هَوَى (hawā) means caprice. The phrase وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَنْ سَبِيلِ اللَّهِ (wa lā tattabiʿi-l-hawā fa-yuḍillaka ʿan sabīli-llāh – “and do not follow [your own] desire, as it will lead you astray from the way of Allah”) is in Surah Sad (38:26)."
      },
      {
        id: "qav-advanced-069",
        question: "What does غَفْلَة (ghaflah) mean?",
        options: ["Alertness", "Heedlessness / negligence", "Remembrance", "Scholarship"],
        correctAnswer: "Heedlessness / negligence",
        explanation: "غَفْلَة (ghaflah) means heedlessness. The phrase اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُعْرِضُونَ (iqtaraba li-n-nāsi ḥisābuhum wa hum fī ghaflatin muʿriḍūn – “Mankind’s reckoning has drawn near, while they are in heedlessness, turning away”) is in Surah Al-Anbiya (21:1)."
      },
      {
        id: "qav-advanced-070",
        question: "What does إِعْرَاض (iʿrāḍ) mean?",
        options: ["Turning toward", "Turning away / avoidance", "Greeting", "Support"],
        correctAnswer: "Turning away / avoidance",
        explanation: "إِعْرَاض (iʿrāḍ) means turning away. The phrase وَهُمْ فِي غَفْلَةٍ مُعْرِضُونَ is in Surah Al-Anbiya (21:1)."
      },
      {
        id: "qav-advanced-071",
        question: "What does اسْتِكْبَار (istikbār) mean?",
        options: ["Humility", "Arrogance / refusing the truth out of pride", "Generosity", "Patience"],
        correctAnswer: "Arrogance / refusing the truth out of pride",
        explanation: "اسْتِكْبَار (istikbār) means arrogance. The phrase إِلَّا إِبْلِيسَ أَبَىٰ وَاسْتَكْبَرَ (illā Iblīsa abā wa-stakbar – “except Iblis; he refused and was arrogant”) is in Surah Al-Baqarah (2:34)."
      },
      {
        id: "qav-advanced-072",
        question: "What does تَوَاضُع related sense (خُشُوع) mean?",
        options: ["Pride", "Humility / humble submission", "Noise", "Argument"],
        correctAnswer: "Humility / humble submission",
        explanation: "خُشُوع (khushūʿ) means humble submission. The phrase الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ (alladhīna hum fī ṣalātihim khāshiʿūn – “They who are during their prayer humbly submissive”) is in Surah Al-Mu’minun (23:2)."
      },
      {
        id: "qav-advanced-073",
        question: "What does خَشْيَة (khashyah) mean?",
        options: ["Carelessness", "Awe-filled fear (of Allah)", "Hatred", "Jealousy"],
        correctAnswer: "Awe-filled fear (of Allah)",
        explanation: "خَشْيَة (khashyah) means reverent fear. The phrase إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ (innamā yakhshā-llāha min ʿibādihi-l-ʿulamāʾ – “Only those fear Allah, from among His servants, who have knowledge”) is in Surah Fatir (35:28)."
      },
      {
        id: "qav-advanced-074",
        question: "What does رَهْبَة (rahbah) mean?",
        options: ["Love only", "Fear / dread", "Joy", "Sleep"],
        correctAnswer: "Fear / dread",
        explanation: "رَهْبَة (rahbah) means fear. The phrase وَادْعُوهُ خَوْفًا وَطَمَعًا (related); see لَأَنْتُمْ أَشَدُّ رَهْبَةً in Surah Al-Hashr (59:13)."
      },
      {
        id: "qav-advanced-075",
        question: "What does رَغْبَة (raghbah) mean?",
        options: ["Aversion", "Desire / longing", "Hatred", "Indifference"],
        correctAnswer: "Desire / longing",
        explanation: "رَغْبَة (raghbah) means desire. The phrase وَإِلَىٰ رَبِّكَ فَارْغَبْ (wa ilā rabbika fa-rghab – “And to your Lord direct [your] longing”) is in Surah Ash-Sharh (94:8)."
      },
      {
        id: "qav-advanced-076",
        question: "What does إِنَابَة (inābah) mean?",
        options: ["Turning away", "Turning back to Allah in repentance", "Arguing", "Delaying"],
        correctAnswer: "Turning back to Allah in repentance",
        explanation: "إِنَابَة (inābah) means turning back to Allah. The phrase وَأَنِيبُوا إِلَىٰ رَبِّكُمْ (wa anībū ilā rabbikum – “And return [in repentance] to your Lord”) is in Surah Az-Zumar (39:54)."
      },
      {
        id: "qav-advanced-077",
        question: "What does أَوَّاب (awwāb) mean?",
        options: ["One who turns away", "One who frequently turns back to Allah", "One who argues", "One who forgets"],
        correctAnswer: "One who frequently turns back to Allah",
        explanation: "أَوَّاب (awwāb) means one who turns back often. The phrase نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ (niʿma-l-ʿabdu innahu awwāb – “How excellent a servant! Indeed, he was one repeatedly turning back [to Allah]”) is in Surah Sad (38:30)."
      },
      {
        id: "qav-advanced-078",
        question: "What does مُنِيب (munīb) mean?",
        options: ["Stubborn rejecter", "One who turns to Allah", "Careless person", "Silent observer"],
        correctAnswer: "One who turns to Allah",
        explanation: "مُنِيب (munīb) means one who turns to Allah. The phrase مَنْ خَشِيَ الرَّحْمَٰنَ بِالْغَيْبِ وَجَاءَ بِقَلْبٍ مُنِيبٍ (man khashiya-r-Raḥmāna bi-l-ghaybi wa jāʾa bi-qalbin munīb – “Who feared the Most Merciful unseen and came with a heart returning [in repentance]”) is in Surah Qaf (50:33)."
      },
      {
        id: "qav-advanced-079",
        question: "What does إِخْبَات (ikhbāt) related sense mean?",
        options: ["Pride", "Humble submission / soft-heartedness toward Allah", "Harshness", "Doubt"],
        correctAnswer: "Humble submission / soft-heartedness toward Allah",
        explanation: "Related: وَبَشِّرِ الْمُخْبِتِينَ (wa bashshiri-l-mukhbitīn – “And give good tidings to the humble”) is in Surah Al-Hajj (22:34)."
      },
      {
        id: "qav-advanced-080",
        question: "What does تَضَرُّع (taḍarruʿ) mean?",
        options: ["Arrogant demand", "Humble earnest supplication", "Casual talk", "Silence"],
        correctAnswer: "Humble earnest supplication",
        explanation: "تَضَرُّع (taḍarruʿ) means humble supplication. The phrase ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً (udʿū rabbakum taḍarruʿan wa khufyah – “Call upon your Lord in humility and privately”) is in Surah Al-A’raf (7:55)."
      },
      {
        id: "qav-advanced-081",
        question: "What does خُفْيَة (khufyah) mean in that verse?",
        options: ["Publicly only", "Privately / secretly", "Loudly", "Never"],
        correctAnswer: "Privately / secretly",
        explanation: "خُفْيَة (khufyah) means privately. The phrase ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً is in Surah Al-A’raf (7:55)."
      },
      {
        id: "qav-advanced-082",
        question: "What does ابْتِلَاء (ibtilāʾ) mean?",
        options: ["Permanent comfort", "Trial / testing", "Reward without test", "Ignore"],
        correctAnswer: "Trial / testing",
        explanation: "ابْتِلَاء (ibtilāʾ) means trial. The phrase وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ (wa la-nabluwannakum bi-shayʾin mina-l-khawfi wa-l-jūʿ – “And We will surely test you with something of fear and hunger”) is in Surah Al-Baqarah (2:155)."
      },
      {
        id: "qav-advanced-083",
        question: "What does تَمْحِيص (tamḥīṣ) mean?",
        options: ["Mixing truth and falsehood", "Purification / sifting (of believers)", "Abandonment", "Punishment only"],
        correctAnswer: "Purification / sifting (of believers)",
        explanation: "تَمْحِيص (tamḥīṣ) means purification. The phrase وَلِيُمَحِّصَ اللَّهُ الَّذِينَ آمَنُوا (wa li-yumaḥḥiṣa-llāhu-lladhīna āmanū – “and that Allah may purify those who believe”) is in Surah Aal-Imran (3:141)."
      },
      {
        id: "qav-advanced-084",
        question: "What does تَمْيِيز (tamyīz) related eschatological sense mean?",
        options: ["Confusion", "Distinction / separation (of groups)", "Merging", "Hiding"],
        correctAnswer: "Distinction / separation (of groups)",
        explanation: "Related separation: the phrase وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ (wa-mtāzū-l-yawma ayyuhā-l-mujrimūn – “But stand apart today, you criminals”) is in Surah Yasin (36:59)."
      },
      {
        id: "qav-advanced-085",
        question: "What does فَوْز (fawz) mean?",
        options: ["Loss", "Success / triumph", "Draw", "Delay"],
        correctAnswer: "Success / triumph",
        explanation: "فَوْز (fawz) means success. The phrase ذَٰلِكَ الْفَوْزُ الْعَظِيمُ (dhālika-l-fawzu-l-ʿaẓīm – “That is the great attainment”) is frequent, e.g. Surah At-Tawbah (9:72)."
      },
      {
        id: "qav-advanced-086",
        question: "What does خُسْرَان (khusrān) mean?",
        options: ["Profit", "Loss / ruin", "Balance", "Neutral outcome"],
        correctAnswer: "Loss / ruin",
        explanation: "خُسْرَان (khusrān) means loss. The phrase إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ (inna-l-insāna la-fī khusr – “Indeed, mankind is in loss”) is in Surah Al-Asr (103:2)."
      },
      {
        id: "qav-advanced-087",
        question: "What does فَلَاح (falāḥ) mean?",
        options: ["Failure", "Prosperity / success (especially lasting)", "Temporary gain", "Fame only"],
        correctAnswer: "Prosperity / success (especially lasting)",
        explanation: "فَلَاح (falāḥ) means success. The phrase قَدْ أَفْلَحَ الْمُؤْمِنُونَ (qad aflaḥa-l-muʾminūn – “Certainly will the believers have succeeded”) is in Surah Al-Mu’minun (23:1)."
      },
      {
        id: "qav-advanced-088",
        question: "What does نَجَاة (najāh) mean?",
        options: ["Destruction", "Salvation / deliverance", "Punishment", "Delay"],
        correctAnswer: "Salvation / deliverance",
        explanation: "نَجَاة (najāh) means salvation. The phrase وَنَجَّيْنَا الَّذِينَ آمَنُوا (wa najjaynā-lladhīna āmanū – “And We saved those who believed”) appears e.g. in Surah Fussilat (41:18)."
      },
      {
        id: "qav-advanced-089",
        question: "What does هَلَاك (halāk) mean?",
        options: ["Salvation", "Destruction / perishing", "Growth", "Healing"],
        correctAnswer: "Destruction / perishing",
        explanation: "هَلَاك (halāk) means destruction. The phrase وَكَمْ أَهْلَكْنَا قَبْلَهُمْ مِنْ قَرْنٍ (wa kam ahlaknā qablahum min qarn – “And how many a generation before them did We destroy”) is in Surah Maryam (19:74)."
      },
      {
        id: "qav-advanced-090",
        question: "What does عَذَاب (ʿadhāb) mean?",
        options: ["Comfort", "Punishment / torment", "Reward", "Rest"],
        correctAnswer: "Punishment / torment",
        explanation: "عَذَاب (ʿadhāb) means punishment. The phrase وَلَهُمْ عَذَابٌ عَظِيمٌ (wa lahum ʿadhābun ʿaẓīm – “and for them is a great punishment”) is in Surah Al-Baqarah (2:7)."
      },
      {
        id: "qav-advanced-091",
        question: "What does عِقَاب (ʿiqāb) mean?",
        options: ["Pardon", "Penalty / retribution", "Gift", "Delay"],
        correctAnswer: "Penalty / retribution",
        explanation: "عِقَاب (ʿiqāb) means penalty. The phrase وَاللَّهُ شَدِيدُ الْعِقَابِ (wa-llāhu shadīdu-l-ʿiqāb – “And Allah is severe in penalty”) is in Surah Al-Baqarah (2:196)."
      },
      {
        id: "qav-advanced-092",
        question: "What does نَكَال (nakāl) mean?",
        options: ["Reward", "Exemplary punishment / deterrent", "Forgiveness", "Advice"],
        correctAnswer: "Exemplary punishment / deterrent",
        explanation: "نَكَال (nakāl) means exemplary punishment. The phrase فَجَعَلْنَاهَا نَكَالًا لِمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا (fa-jaʿalnāhā nakālan li-mā bayna yadayhā wa mā khalfahā – “So We made it a deterrent punishment for those who were present and those who succeeded them”) is in Surah Al-Baqarah (2:66)."
      },
      {
        id: "qav-advanced-093",
        question: "What does لَعْنَة (laʿnah) mean?",
        options: ["Blessing", "Curse / exclusion from mercy", "Praise", "Greeting"],
        correctAnswer: "Curse / exclusion from mercy",
        explanation: "لَعْنَة (laʿnah) means curse. The phrase أُولَٰئِكَ عَلَيْهِمْ لَعْنَةُ اللَّهِ (ulāʾika ʿalayhim laʿnatu-llāh – “Those – upon them is the curse of Allah”) is in Surah Al-Baqarah (2:161)."
      },
      {
        id: "qav-advanced-094",
        question: "What does رِضْوَان (riḍwān) mean?",
        options: ["Anger of Allah", "Pleasure / good pleasure of Allah", "Silence", "Neutral state"],
        correctAnswer: "Pleasure / good pleasure of Allah",
        explanation: "رِضْوَان (riḍwān) means Allah’s good pleasure. The phrase وَرِضْوَانٌ مِنَ اللَّهِ أَكْبَرُ (wa riḍwānun mina-llāhi akbar – “But the good pleasure of Allah is greater”) is in Surah At-Tawbah (9:72)."
      },
      {
        id: "qav-advanced-095",
        question: "What does سَكِينَة (sakīnah) mean?",
        options: ["Chaos", "Divine tranquility / calm sent into hearts", "Fear", "Noise"],
        correctAnswer: "Divine tranquility / calm sent into hearts",
        explanation: "سَكِينَة (sakīnah) means tranquility. The phrase هُوَ الَّذِي أَنْزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ (huwa-lladhī anzala-s-sakīnata fī qulūbi-l-muʾminīn) is in Surah Al-Fath (48:4)."
      },
      {
        id: "qav-advanced-096",
        question: "What does طُمَأْنِينَة (ṭumaʾnīnah) mean?",
        options: ["Anxiety", "Peace and reassurance of the heart", "Doubt", "Restlessness"],
        correctAnswer: "Peace and reassurance of the heart",
        explanation: "طُمَأْنِينَة (ṭumaʾnīnah) means reassurance. The phrase أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ is in Surah Ar-Ra’d (13:28)."
      },
      {
        id: "qav-advanced-097",
        question: "What does بَصِيرَة (baṣīrah) mean?",
        options: ["Blindness", "Insight / clear inner vision", "Physical eye only", "Guesswork"],
        correctAnswer: "Insight / clear inner vision",
        explanation: "بَصِيرَة (baṣīrah) means insight. The phrase قَدْ جَاءَكُمْ بَصَائِرُ مِنْ رَبِّكُمْ (qad jāʾakum baṣāʾiru min rabbikum – “There has come to you enlightenment from your Lord”) is in Surah Al-An’am (6:104)."
      },
      {
        id: "qav-advanced-098",
        question: "What does نُور (nūr) mean as a spiritual term?",
        options: ["Only physical light", "Light (including guidance and faith)", "Darkness", "Fire only"],
        correctAnswer: "Light (including guidance and faith)",
        explanation: "نُور (nūr) means light. The phrase اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ is in Surah An-Nur (24:35)."
      },
      {
        id: "qav-advanced-099",
        question: "What does ظُلْمَة (ẓulmah) mean spiritually?",
        options: ["Guidance", "Darkness (including misguidance)", "Clarity", "Knowledge"],
        correctAnswer: "Darkness (including misguidance)",
        explanation: "ظُلْمَة (ẓulmah) means darkness. The phrase يُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ is in Surah Al-Baqarah (2:257)."
      },
      {
        id: "qav-advanced-100",
        question: "What does هُدًى (hudā) mean?",
        options: ["Misguidance", "Guidance", "Punishment", "Wealth"],
        correctAnswer: "Guidance",
        explanation: "هُدًى (hudā) means guidance. The phrase ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ is in Surah Al-Baqarah (2:2)."
      },
      {
        id: "qav-advanced-101",
        question: "What does رُشْد (rushd) mean?",
        options: ["Error", "Right guidance / maturity of judgment", "Childhood", "Confusion"],
        correctAnswer: "Right guidance / maturity of judgment",
        explanation: "رُشْد (rushd) means right guidance. The phrase فَمَنْ أَسْلَمَ فَأُولَٰئِكَ تَحَرَّوْا رَشَدًا (related); see لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ in Surah Al-Baqarah (2:256)."
      },
      {
        id: "qav-advanced-102",
        question: "What does غَيّ (ghayy) mean?",
        options: ["Right guidance", "Error / deviation", "Balance", "Wisdom"],
        correctAnswer: "Error / deviation",
        explanation: "غَيّ (ghayy) means error. The phrase قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ (qad tabayyana-r-rushdu mina-l-ghayy – “The right course has become clear from the wrong”) is in Surah Al-Baqarah (2:256)."
      },
      {
        id: "qav-advanced-103",
        question: "What does ضَلَال (ḍalāl) mean?",
        options: ["Guidance", "Misguidance", "Certainty", "Success"],
        correctAnswer: "Misguidance",
        explanation: "ضَلَال (ḍalāl) means misguidance. The phrase وَلَا الضَّالِّينَ in Surah Al-Fatihah (1:7)."
      },
      {
        id: "qav-advanced-104",
        question: "What does إِضْلَال (iḍlāl) mean?",
        options: ["Guiding others", "Leading astray", "Teaching", "Protecting"],
        correctAnswer: "Leading astray",
        explanation: "إِضْلَال (iḍlāl) means leading astray. The phrase وَيُضِلُّ اللَّهُ الظَّالِمِينَ (wa yuḍillu-llāhu-ẓ-ẓālimīn – “And Allah leaves the wrongdoers astray”) is in Surah Ibrahim (14:27)."
      },
      {
        id: "qav-advanced-105",
        question: "What does تَوْفِيق (tawfīq) mean?",
        options: ["Abandonment", "Divine enabling / success granted by Allah", "Human effort only", "Chance"],
        correctAnswer: "Divine enabling / success granted by Allah",
        explanation: "تَوْفِيق (tawfīq) means divine enabling. The phrase وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ (wa mā tawfīqī illā bi-llāh – “And my success is not but through Allah”) is in Surah Hud (11:88)."
      },
      {
        id: "qav-advanced-106",
        question: "What does خِذْلَان (khidhlān) mean?",
        options: ["Support", "Abandonment / withdrawal of help", "Victory", "Friendship"],
        correctAnswer: "Abandonment / withdrawal of help",
        explanation: "خِذْلَان means abandonment. The phrase وَإِنْ يَخْذُلْكُمْ فَمَنْ ذَا الَّذِي يَنْصُرُكُمْ مِنْ بَعْدِهِ (wa in yakhdhulkum fa-man dhā-lladhī yanṣurukum min baʿdih – “But if He should forsake you, who is there that can aid you after Him?”) is in Surah Aal-Imran (3:160)."
      },
      {
        id: "qav-advanced-107",
        question: "What does نَصْر (naṣr) mean?",
        options: ["Defeat", "Help / victory from Allah", "Neutrality", "Delay"],
        correctAnswer: "Help / victory from Allah",
        explanation: "نَصْر (naṣr) means help or victory. The phrase إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ (idhā jāʾa naṣru-llāhi wa-l-fatḥ – “When the victory of Allah has come and the conquest”) is in Surah An-Nasr (110:1)."
      },
      {
        id: "qav-advanced-108",
        question: "What does فَتْح (fatḥ) mean?",
        options: ["Closing", "Opening / conquest / victory", "Loss", "Secret only"],
        correctAnswer: "Opening / conquest / victory",
        explanation: "فَتْح (fatḥ) means opening or conquest. The phrase إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ is in Surah An-Nasr (110:1)."
      },
      {
        id: "qav-advanced-109",
        question: "What does فُرْقَان (furqān) mean as given at Badr?",
        options: ["A weapon", "Criterion / decisive distinction (day of Badr)", "A book only", "A mountain"],
        correctAnswer: "Criterion / decisive distinction (day of Badr)",
        explanation: "The phrase يَوْمَ الْفُرْقَانِ يَوْمَ الْتَقَى الْجَمْعَانِ (yawma-l-furqāni yawma-l-taqā-l-jamʿān – “on the Day of Criterion, the day the two forces met”) is in Surah Al-Anfal (8:41)."
      },
      {
        id: "qav-advanced-110",
        question: "What does مِحْرَاب (miḥrāb) mean?",
        options: ["Marketplace", "Prayer niche / private chamber", "Battlefield only", "Kitchen"],
        correctAnswer: "Prayer niche / private chamber",
        explanation: "مِحْرَاب (miḥrāb) means a chamber or niche. The phrase كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ (kullamā dakhala ʿalayhā Zakariyyā-l-miḥrāb – “Every time Zechariah entered upon her in the prayer chamber”) is in Surah Aal-Imran (3:37)."
      },
      {
        id: "qav-advanced-111",
        question: "What does مَقَام (maqām) mean?",
        options: ["Flight", "Station / standing place / rank", "Food", "Clothing"],
        correctAnswer: "Station / standing place / rank",
        explanation: "مَقَام (maqām) means station. The phrase فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ (fīhi āyātun bayyinātun maqāmu Ibrāhīm – “In it are clear signs [such as] the standing place of Abraham”) is in Surah Aal-Imran (3:97)."
      },
      {
        id: "qav-advanced-112",
        question: "What does مَشْعَر (mashʿar) mean?",
        options: ["A random place", "A ritual site / place of observance (e.g. Muzdalifah)", "A market", "A house only"],
        correctAnswer: "A ritual site / place of observance (e.g. Muzdalifah)",
        explanation: "The phrase فَاذْكُرُوا اللَّهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ (fa-dhkurū-llāha ʿinda-l-mashʿari-l-ḥarām – “Then remember Allah at al-Mashʿar al-Haram”) is in Surah Al-Baqarah (2:198)."
      },
      {
        id: "qav-advanced-113",
        question: "What does مَنَاسِك (manāsik) mean?",
        options: ["Ordinary habits", "Rites of pilgrimage / ritual acts", "Songs", "Clothes only"],
        correctAnswer: "Rites of pilgrimage / ritual acts",
        explanation: "مَنَاسِك (manāsik) means rites. The phrase فَإِذَا قَضَيْتُمْ مَنَاسِكَكُمْ (fa-idhā qaḍaytum manāsikakum – “And when you have completed your rites”) is in Surah Al-Baqarah (2:200)."
      },
      {
        id: "qav-advanced-114",
        question: "What does نُسُك (nusuk) mean?",
        options: ["Idle talk", "Ritual sacrifice / act of worship", "Trade", "Sleep"],
        correctAnswer: "Ritual sacrifice / act of worship",
        explanation: "نُسُك (nusuk) means ritual sacrifice or worship. The phrase قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ (qul inna ṣalātī wa nusukī wa maḥyāya wa mamātī li-llāh – “Say: Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah”) is in Surah Al-An’am (6:162)."
      },
      {
        id: "qav-advanced-115",
        question: "What does قُرْبَان (qurbān) mean?",
        options: ["A distant gift", "Offering / sacrifice brought near to Allah", "A fine", "A tax only"],
        correctAnswer: "Offering / sacrifice brought near to Allah",
        explanation: "قُرْبَان (qurbān) means offering. The phrase إِذْ قَرَّبَا قُرْبَانًا (idh qarrabā qurbānā – “when they both offered a sacrifice”) is in Surah Al-Ma’idah (5:27)."
      },
      {
        id: "qav-advanced-116",
        question: "What does نَذْر (nadhr) mean?",
        options: ["A casual wish", "Vow / solemn pledge", "A joke", "A debt to people only"],
        correctAnswer: "Vow / solemn pledge",
        explanation: "نَذْر (nadhr) means vow. The phrase إِنِّي نَذَرْتُ لِلرَّحْمَٰنِ صَوْمًا (innī nadhartu li-r-Raḥmāni ṣawmā – “Indeed, I have vowed to the Most Merciful abstention”) is in Surah Maryam (19:26)."
      },
      {
        id: "qav-advanced-117",
        question: "What does كَفَّارَة (kaffārah) mean?",
        options: ["Extra sin", "Expiation / atonement", "Reward", "Ignore"],
        correctAnswer: "Expiation / atonement",
        explanation: "كَفَّارَة (kaffārah) means expiation. The phrase فَكَفَّارَتُهُ إِطْعَامُ عَشَرَةِ مَسَاكِينَ (fa-kaffāratuhu iṭʿāmu ʿasharati masākīn – “its expiation is the feeding of ten needy people”) is in Surah Al-Ma’idah (5:89)."
      },
      {
        id: "qav-advanced-118",
        question: "What does فِدْيَة (fidyah) mean?",
        options: ["A free gift with no reason", "Ransom / compensation (e.g. for missed fast)", "A fine for fun", "Interest"],
        correctAnswer: "Ransom / compensation (e.g. for missed fast)",
        explanation: "فِدْيَة (fidyah) means ransom or compensation. The phrase وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ (wa ʿalā-lladhīna yuṭīqūnahu fidyatun ṭaʿāmu miskīn – “And upon those who are able [to fast, but with hardship] – a ransom [as substitute] of feeding a poor person”) is in Surah Al-Baqarah (2:184)."
      },
      {
        id: "qav-advanced-119",
        question: "What does طَهُور (ṭahūr) mean?",
        options: ["Something impure", "Pure / purifying", "Mixed", "Neutral"],
        correctAnswer: "Pure / purifying",
        explanation: "طَهُور (ṭahūr) means pure and purifying. The phrase وَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً طَهُورًا (wa anzalnā mina-s-samāʾi māʾan ṭahūrā – “And We have sent down from the sky pure water”) is in Surah Al-Furqan (25:48)."
      },
      {
        id: "qav-advanced-120",
        question: "What does نَجَس (najas) mean?",
        options: ["Pure", "Impure / filth", "Sacred", "Neutral"],
        correctAnswer: "Impure / filth",
        explanation: "نَجَس (najas) means impure. The phrase إِنَّمَا الْمُشْرِكُونَ نَجَسٌ (innamā-l-mushrikūna najas – “Indeed, the polytheists are unclean”) is in Surah At-Tawbah (9:28)."
      },
      {
        id: "qav-advanced-121",
        question: "What does زَكَاة (zakāh) mean at root?",
        options: ["Decrease only", "Purification / growth (obligatory alms)", "Tax for rulers only", "Optional gift only"],
        correctAnswer: "Purification / growth (obligatory alms)",
        explanation: "زَكَاة (zakāh) means purification and the obligatory alms. The phrase وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ (wa aqīmū-ṣ-ṣalāta wa ātū-z-zakāh – “And establish prayer and give zakah”) is in Surah Al-Baqarah (2:43)."
      },
      {
        id: "qav-advanced-122",
        question: "What does صَدَقَة (ṣadaqah) mean?",
        options: ["A lie", "Charity / truthful giving", "A forced tax only", "A loan"],
        correctAnswer: "Charity / truthful giving",
        explanation: "صَدَقَة (ṣadaqah) means charity. The phrase إِنْ تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ (in tubdū-ṣ-ṣadaqāti fa-niʿimmā hiya – “If you disclose your charitable expenditures, they are good”) is in Surah Al-Baqarah (2:271)."
      },
      {
        id: "qav-advanced-123",
        question: "What does قَرْض (qarḍ) mean in “qarḍ ḥasan”?",
        options: ["Interest-bearing loan", "A good loan (to Allah: sincere spending)", "A bribe", "A gift with pride"],
        correctAnswer: "A good loan (to Allah: sincere spending)",
        explanation: "قَرْض حَسَن is a good loan. The phrase مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا (man dhā-lladhī yuqriḍu-llāha qarḍan ḥasanā – “Who is it that would loan Allah a goodly loan?”) is in Surah Al-Baqarah (2:245)."
      },
      {
        id: "qav-advanced-124",
        question: "What does رِبَا (ribā) mean?",
        options: ["Fair trade", "Usury / interest", "Charity", "Gift"],
        correctAnswer: "Usury / interest",
        explanation: "رِبَا (ribā) means usury. The phrase وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا (wa aḥalla-llāhu-l-bayʿa wa ḥarrama-r-ribā – “But Allah has permitted trade and has forbidden interest”) is in Surah Al-Baqarah (2:275)."
      },
      {
        id: "qav-advanced-125",
        question: "What does مِيثَاق (mīthāq) mean?",
        options: ["A casual agreement", "A solemn covenant", "A rumour", "A temporary truce only"],
        correctAnswer: "A solemn covenant",
        explanation: "مِيثَاق (mīthāq) means solemn covenant. The phrase وَإِذْ أَخَذَ اللَّهُ مِيثَاقَ النَّبِيِّينَ (wa idh akhadha-llāhu mīthāqa-n-nabiyyīn – “And [recall] when Allah took the covenant of the prophets”) is in Surah Aal-Imran (3:81)."
      },
    ],
  },
}

export default quranicArabic01Category;
