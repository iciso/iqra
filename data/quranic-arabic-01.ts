
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
