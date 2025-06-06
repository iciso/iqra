import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz"
import seerahCategory from "./quiz-data-manager-additions"
import { additionalCategories } from "./quiz-data-manager-additional-categories"
import comparativeReligionCategory from "./comparative-religion"
import islamicFinanceCategory from "./islamic-finance"
import islamicHistoryCategory from "./islamic-history"
import dawahCategory from "./dawah"

// Import the infographics enhancement function
import { enhanceQuestionsWithInfographics } from "./quiz-data-manager-infographics"

// Define all quiz categories directly in this file
const quizData: QuizCategory[] = [
  {
    id: "quran",
    title: "Quran",
    description: "Test your knowledge of the Holy Quran",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the first Surah (chapter) of the Quran?",
          options: ["Al-Fatiha", "Al-Baqarah", "Yusuf", "Ar-Rahman"],
          correctAnswer: "Al-Fatiha",
          explanation: "Surah Al-Fatiha, meaning 'The Opening,' is the first chapter of the Quran.",
        },
        {
          question: "How many Surahs (chapters) are there in the Quran?",
          options: ["110", "114", "120", "130"],
          correctAnswer: "114",
          explanation: "The Quran consists of 114 chapters, varying in length and theme.",
        },
        {
          question: "What is the longest Surah in the Quran?",
          options: ["Al-Imran", "An-Nisa", "Al-Kahf", "Al-Baqarah"],
          correctAnswer: "Al-Baqarah",
          explanation: "Surah Al-Baqarah, meaning 'The Cow,' is the longest chapter in the Quran.",
        },
        {
          question: "What is the shortest Surah in the Quran?",
          options: ["Al-Kawthar", "Al-Asr", "Al-Ikhlas", "An-Nasr"],
          correctAnswer: "Al-Kawthar",
          explanation:
            "Surah Al-Kawthar, meaning 'A River in Paradise,' is the shortest chapter of the Quran, consisting of three verses.",
        },
        {
          question: "Which Surah is known as 'The Heart of the Quran'?",
          options: ["Yasin", "Al-Fatiha", "Al-Ikhlas", "Ar-Rahman"],
          correctAnswer: "Yasin",
          explanation:
            "Surah Yasin is often referred to as the 'Heart of the Quran' due to its central message and importance.",
        },
        {
          question: "Which Surah does not start with 'Bismillah'?",
          options: ["Al-Fatiha", "Al-Ikhlas", "At-Tawbah", "An-Nas"],
          correctAnswer: "At-Tawbah",
          explanation: "Surah At-Tawbah is the only chapter in the Quran that does not begin with 'Bismillah'.",
        },
        {
          question: "How many verses (ayat) are there in Surah Al-Fatiha?",
          options: ["5", "6", "7", "8"],
          correctAnswer: "7",
          explanation: "Surah Al-Fatiha consists of 7 verses and is recited in every unit of prayer.",
        },
        {
          question: "Which Surah is named after a metal?",
          options: ["Al-Hadid", "Al-Fil", "Al-Qamar", "Al-Fajr"],
          correctAnswer: "Al-Hadid",
          explanation: "Surah Al-Hadid (The Iron) is named after the metal iron, which is mentioned in verse 25.",
        },
        {
          question: "Which Surah is recited in every raka'ah of the prayer?",
          options: ["Al-Fatiha", "Al-Ikhlas", "Al-Falaq", "Al-Nas"],
          correctAnswer: "Al-Fatiha",
          explanation:
            "Surah Al-Fatiha is recited in every raka'ah (unit) of the obligatory and voluntary prayers, making it the most frequently recited chapter of the Quran.",
        },
        {
          question: "What is the meaning of the word 'Quran'?",
          options: ["Book", "Recitation", "Message", "Guidance"],
          correctAnswer: "Recitation",
          explanation:
            "The word 'Quran' comes from the Arabic verb 'qara'a' which means 'to read' or 'to recite'. Thus, 'Quran' literally means 'the recitation' or 'the reading'.",
        },
      ],
      advanced: [
        {
          question: "Which Surah mentions the story of Dhul-Qarnayn?",
          options: ["Al-Kahf", "Yusuf", "Maryam", "Al-Qasas"],
          correctAnswer: "Al-Kahf",
          explanation: "The story of Dhul-Qarnayn is mentioned in Surah Al-Kahf (The Cave).",
        },
        {
          question: "Which Surah is named after a time of day?",
          options: ["Al-Fajr", "Al-Asr", "Ad-Duha", "All of these"],
          correctAnswer: "All of these",
          explanation:
            "All three Surahs are named after times of day: Al-Fajr (Dawn), Al-Asr (Afternoon), and Ad-Duha (Morning).",
        },
        {
          question: "Which Surah is known as 'The Mother of the Quran'?",
          options: ["Al-Baqarah", "Al-Fatiha", "Yasin", "Al-Ikhlas"],
          correctAnswer: "Al-Fatiha",
          explanation:
            "Surah Al-Fatiha is known as 'Umm al-Quran' (The Mother of the Quran) because it summarizes the entire message of the Quran.",
        },
        {
          question: "Which Surah was revealed in its entirety at once, rather than in parts?",
          options: ["Al-Fatiha", "Al-Ikhlas", "Al-Kawthar", "Al-Anam"],
          correctAnswer: "Al-Anam",
          explanation: "Surah Al-Anam was revealed all at once, accompanied by 70,000 angels, according to hadith.",
        },
        {
          question:
            "What is the significance of the 'Seven Oft-Repeated Verses' (السَّبْعُ ٱلْمَثَانِي) mentioned in Surah Al-Hijr (15:87)?",
          options: [
            "The last seven verses of the Quran",
            "The seven longest Surahs",
            "Surah Al-Fatiha",
            "Seven specific historical accounts",
          ],
          correctAnswer: "Surah Al-Fatiha",
          explanation:
            "The majority of Quranic commentators understand 'The Seven Oft-Repeated Verses' to refer to Surah Al-Fatiha. Its verses are recited in every unit (rak'ah) of prayer, hence the description 'oft-repeated'.",
        },
        {
          question: "Which Surah contains the Ayat al-Kursi (Verse of the Throne)?",
          options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Maidah"],
          correctAnswer: "Al-Baqarah",
          explanation:
            "Ayat al-Kursi is verse 255 of Surah Al-Baqarah and is considered one of the greatest verses of the Quran.",
        },
        {
          question: "Which Surah is known as 'The Clarifier' (Al-Mubeen)?",
          options: ["Yasin", "Al-Fatiha", "Al-Ikhlas", "Al-Furqan"],
          correctAnswer: "Yasin",
          explanation:
            "Surah Yasin is sometimes referred to as 'Al-Mubeen' (The Clarifier) because it clarifies many aspects of faith and the afterlife.",
        },
        {
          question: "Which Surah mentions the 'People of the Cave' (Ashab al-Kahf)?",
          options: ["Al-Kahf", "Al-Qasas", "Maryam", "Al-Anbiya"],
          correctAnswer: "Al-Kahf",
          explanation: "The story of the People of the Cave (Ashab al-Kahf) is mentioned in Surah Al-Kahf (The Cave).",
        },
        {
          question: "Which Surah contains the verse 'There is no compulsion in religion'?",
          options: ["Al-Baqarah", "Al-Kafirun", "Al-Ikhlas", "An-Nisa"],
          correctAnswer: "Al-Baqarah",
          explanation:
            "The verse 'There is no compulsion in religion' (La ikraha fid-din) is found in Surah Al-Baqarah, verse 256.",
        },
        {
          question: "What is the concept of 'Makki' and 'Madani' Surahs?",
          options: [
            "Surahs revealed in Makkah and Madinah respectively",
            "Surahs about Makkah and Madinah",
            "Long and short Surahs respectively",
            "First and last half of the Quran respectively",
          ],
          correctAnswer: "Surahs revealed in Makkah and Madinah respectively",
          explanation:
            "Makki Surahs are those revealed before the Prophet's migration (Hijrah) to Madinah, while Madani Surahs are those revealed after the Hijrah. Makki Surahs generally focus on faith and monotheism, while Madani Surahs often address social legislation and community matters.",
        },
      ],
    },
  },
  {
    id: "fiqh",
    title: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the first obligation upon a Muslim?",
          options: [
            "To pray five times a day",
            "To believe in Allah and His Messenger",
            "To fast during Ramadan",
            "To give Zakat",
          ],
          correctAnswer: "To believe in Allah and His Messenger",
          explanation: "The Shahada (declaration of faith) is the first and most fundamental pillar of Islam.",
        },
        {
          question: "How many obligatory prayers are there in a day?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "5",
          explanation: "There are five obligatory prayers in a day: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        },
        {
          question: "What is the minimum amount of wealth (nisab) required for Zakat on gold?",
          options: ["50 grams", "85 grams", "100 grams", "200 grams"],
          correctAnswer: "85 grams",
          explanation: "The nisab for gold is 85 grams (or its equivalent value in currency).",
        },
        {
          question: "What is the Arabic term for ritual purification?",
          options: ["Salat", "Wudu", "Taharah", "Tayammum"],
          correctAnswer: "Taharah",
          explanation: "Taharah refers to the state of ritual purity and the process of purification in Islam.",
        },
        {
          question: "Which of the following invalidates the fast?",
          options: [
            "Unintentional vomiting",
            "Using an inhaler for asthma",
            "Intentionally eating or drinking",
            "Taking a shower",
          ],
          correctAnswer: "Intentionally eating or drinking",
          explanation: "Intentionally eating or drinking invalidates the fast, while unintentional actions do not.",
        },
        {
          question: "What is the term for the intention to perform a religious act?",
          options: ["Niyyah", "Ijma", "Qiyas", "Ijtihad"],
          correctAnswer: "Niyyah",
          explanation: "Niyyah refers to the intention one must have before performing any act of worship in Islam.",
        },
        {
          question: "What is 'Ghusl' in Islamic jurisprudence?",
          options: ["Dry ablution", "Partial ablution", "Full body ritual bath", "Washing hands before eating"],
          correctAnswer: "Full body ritual bath",
          explanation:
            "Ghusl refers to the ritual bath or full body washing that is required after certain events such as sexual intercourse, completion of menstruation, or before certain religious practices.",
        },
        {
          question: "What is the term for the direction Muslims face during prayer?",
          options: ["Mihrab", "Qiblah", "Ka'bah", "Sajdah"],
          correctAnswer: "Qiblah",
          explanation: "Qiblah is the direction that Muslims face during prayer, which is toward the Ka'bah in Makkah.",
        },
        {
          question: "What is 'Zakatul-Fitr'?",
          options: [
            "Regular annual charity",
            "Charity given at any time",
            "Charity given at the end of Ramadan",
            "Charity given during Hajj",
          ],
          correctAnswer: "Charity given at the end of Ramadan",
          explanation:
            "Zakatul-Fitr is a type of charity that must be given by every Muslim, regardless of age or wealth, before the Eid prayer at the end of Ramadan.",
        },
        {
          question: "What is the ruling on praying the five daily prayers on time?",
          options: ["Recommended (Mustahabb)", "Obligatory (Fard)", "Optional (Nafl)", "Emphasized Sunnah"],
          correctAnswer: "Obligatory (Fard)",
          explanation:
            "Performing the five daily prayers on their prescribed times is obligatory (Fard) upon every adult Muslim of sound mind.",
        },
      ],
      advanced: [
        {
          question: "What is the term for consensus of Islamic scholars?",
          options: ["Qiyas", "Ijma", "Ijtihad", "Istihsan"],
          correctAnswer: "Ijma",
          explanation: "Ijma refers to the consensus of Islamic scholars on a point of Islamic law.",
        },
        {
          question: "What is the minimum period of waiting (Iddah) for a divorced woman?",
          options: ["1 month", "3 menstrual cycles", "4 months and 10 days", "1 year"],
          correctAnswer: "3 menstrual cycles",
          explanation:
            "The standard Iddah period for a divorced woman is three menstrual cycles or three months if she does not menstruate.",
        },
        {
          question: "What is the term for legal reasoning by analogy?",
          options: ["Ijma", "Qiyas", "Istihsan", "Ijtihad"],
          correctAnswer: "Qiyas",
          explanation: "Qiyas is the process of deductive analogy used to apply a known ruling to a new situation.",
        },
        {
          question: "Which school of thought was founded by Imam Abu Hanifa?",
          options: ["Maliki", "Shafi'i", "Hanbali", "Hanafi"],
          correctAnswer: "Hanafi",
          explanation:
            "The Hanafi school of thought was founded by Imam Abu Hanifa and is one of the four major Sunni schools of jurisprudence.",
        },
        {
          question: "What is 'Ijma' in Islamic jurisprudence?",
          options: ["Consensus", "Analogy", "Precedent", "Interpretation"],
          correctAnswer: "Consensus",
          explanation: "'Ijma' refers to the consensus of Muslim scholars on a matter of Islamic law.",
        },
        {
          question: "What is the difference between Fard and Wajib in the Hanafi school?",
          options: [
            "They are the same thing",
            "Fard is obligatory based on definitive evidence, Wajib on probable evidence",
            "Fard is for individuals, Wajib is for communities",
            "Fard is in the Quran, Wajib is in the Sunnah",
          ],
          correctAnswer: "Fard is obligatory based on definitive evidence, Wajib on probable evidence",
          explanation:
            "In the Hanafi school, Fard is an obligation established by definitive evidence, while Wajib is established by probable evidence.",
        },
        {
          question: "What is 'Urf' in Islamic jurisprudence?",
          options: ["Legal precedent", "Custom or common practice", "Scholarly opinion", "Textual interpretation"],
          correctAnswer: "Custom or common practice",
          explanation:
            "'Urf refers to the custom or common practice of a society that is considered in Islamic legal rulings when it doesn't contradict Islamic principles.",
        },
        {
          question: "What is the concept of 'Istihsan' in Islamic jurisprudence?",
          options: [
            "Consensus of scholars",
            "Juristic preference or discretion",
            "Analogical reasoning",
            "Public interest",
          ],
          correctAnswer: "Juristic preference or discretion",
          explanation:
            "Istihsan is a method of juristic preference where a stronger evidence is given preference over a weaker one, or an exception is made to a general rule based on evidence.",
        },
        {
          question: "What is the difference between 'Qada' and 'Qadar' in Islamic theology?",
          options: [
            "They are synonyms",
            "Qada is Allah's decree, Qadar is its manifestation",
            "Qada is for good things, Qadar is for bad things",
            "Qada is predestination, Qadar is free will",
          ],
          correctAnswer: "Qada is Allah's decree, Qadar is its manifestation",
          explanation:
            "Qada refers to Allah's decree or decision, while Qadar refers to the execution or manifestation of that decree.",
        },
      ],
    },
  },
  {
    id: "tafsir",
    title: "Tafsir",
    description: "Quranic Interpretation",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does 'Tafsir' mean?",
          options: ["Recitation", "Interpretation", "Translation", "Memorization"],
          correctAnswer: "Interpretation",
          explanation:
            "Tafsir refers to the exegesis or interpretation of the Quran, explaining its meanings, context, and implications.",
        },
        {
          question: "Who is considered the first interpreter (mufassir) of the Quran?",
          options: ["Abu Bakr", "Umar ibn al-Khattab", "Prophet Muhammad (PBUH)", "Ali ibn Abi Talib"],
          correctAnswer: "Prophet Muhammad (PBUH)",
          explanation: "Prophet Muhammad (PBUH) was the first to explain and interpret the Quran to his companions.",
        },
        {
          question: "What is the primary source for Tafsir?",
          options: ["The Quran itself", "Hadith", "Scholarly consensus", "Personal opinion"],
          correctAnswer: "The Quran itself",
          explanation:
            "The best interpretation of the Quran comes from the Quran itself, where one verse explains another.",
        },
        {
          question: "What is 'Tafsir bil-Ma'thur'?",
          options: [
            "Interpretation based on personal opinion",
            "Interpretation based on transmitted knowledge",
            "Interpretation based on linguistic analysis",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on transmitted knowledge",
          explanation:
            "Tafsir bil-Ma'thur is interpretation based on narrations from the Prophet, companions, and early Muslims.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Tarjama'?",
          options: [
            "They are the same",
            "Tafsir is interpretation, Tarjama is translation",
            "Tafsir is in Arabic, Tarjama is in other languages",
            "Tafsir is by scholars, Tarjama is by laypeople",
          ],
          correctAnswer: "Tafsir is interpretation, Tarjama is translation",
          explanation:
            "Tafsir refers to the detailed explanation and interpretation of the Quranic verses, while Tarjama refers to the translation of the Quran from Arabic to other languages.",
        },
        {
          question: "What is the role of context in Tafsir?",
          options: [
            "It is irrelevant",
            "It is essential for proper understanding",
            "It is only important for legal verses",
            "It is only considered by modern interpreters",
          ],
          correctAnswer: "It is essential for proper understanding",
          explanation:
            "Context, including the occasion of revelation (asbab al-nuzul), historical background, and the surrounding verses, is essential for proper understanding and interpretation of the Quranic verses.",
        },
        {
          question: "Who is Ibn Abbas in relation to Tafsir?",
          options: [
            "The first caliph",
            "The Prophet's cousin and a renowned interpreter of the Quran",
            "A modern Tafsir scholar",
            "The compiler of Sahih Bukhari",
          ],
          correctAnswer: "The Prophet's cousin and a renowned interpreter of the Quran",
          explanation:
            "Abdullah ibn Abbas was the Prophet Muhammad's cousin who became one of the most knowledgeable interpreters of the Quran. He is often referred to as 'Tarjuman al-Quran' (The Interpreter of the Quran).",
        },
        {
          question: "What is the importance of Arabic language in Tafsir?",
          options: [
            "It is not important",
            "It is essential as the Quran was revealed in Arabic",
            "It is only important for Arabs",
            "It was important in the past but not now",
          ],
          correctAnswer: "It is essential as the Quran was revealed in Arabic",
          explanation:
            "Knowledge of Arabic language, its grammar, rhetoric, and literary devices is essential for Tafsir as the Quran was revealed in Arabic, and many nuances and meanings can only be fully appreciated in the original language.",
        },
        {
          question: "What is 'Tafsir bil-Ra'y'?",
          options: [
            "Interpretation based on narrations",
            "Interpretation based on personal opinion",
            "Interpretation based on dreams",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on personal opinion",
          explanation:
            "Tafsir bil-Ra'y refers to interpretation based on personal opinion or reasoning. It is considered acceptable if it is based on sound knowledge and does not contradict established principles.",
        },
        {
          question: "What is the first step in interpreting a verse according to classical Tafsir methodology?",
          options: [
            "Consulting historical context",
            "Looking at linguistic meaning",
            "Interpreting the Quran with the Quran",
            "Referring to scholarly opinions",
          ],
          correctAnswer: "Interpreting the Quran with the Quran",
          explanation:
            "The first step in classical Tafsir methodology is to interpret the Quran with the Quran itself, looking for explanations of a verse in other parts of the Quran before moving to other sources.",
        },
      ],
      advanced: [
        {
          question: "Who authored the famous Tafsir 'Fi Zilal al-Quran' (In the Shade of the Quran)?",
          options: ["Ibn Kathir", "Sayyid Qutb", "Al-Tabari", "Al-Qurtubi"],
          correctAnswer: "Sayyid Qutb",
          explanation: "'Fi Zilal al-Quran' was written by Sayyid Qutb while he was in prison in Egypt.",
        },
        {
          question: "What is 'Tafsir bil-Ra'y'?",
          options: [
            "Interpretation based on narrations",
            "Interpretation based on personal opinion",
            "Interpretation based on dreams",
            "Interpretation based on consensus",
          ],
          correctAnswer: "Interpretation based on personal opinion",
          explanation:
            "Tafsir bil-Ra'y is interpretation based on personal opinion or reasoning, which must be grounded in sound knowledge.",
        },
        {
          question: "Which famous Tafsir is known for its comprehensive linguistic analysis?",
          options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Kashshaf by Zamakhshari", "Tafsir al-Qurtubi"],
          correctAnswer: "Tafsir al-Kashshaf by Zamakhshari",
          explanation:
            "Al-Kashshaf by Zamakhshari is renowned for its detailed linguistic and rhetorical analysis of the Quran.",
        },
        {
          question: "What is 'Asbab al-Nuzul'?",
          options: [
            "The order of revelation",
            "The occasions or circumstances of revelation",
            "The place of revelation",
            "The time of revelation",
          ],
          correctAnswer: "The occasions or circumstances of revelation",
          explanation:
            "Asbab al-Nuzul refers to the historical contexts and occasions that led to the revelation of specific verses.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Ta'wil'?",
          options: [
            "They are synonyms",
            "Tafsir is literal explanation, Ta'wil is deeper interpretation",
            "Tafsir is for scholars, Ta'wil is for laypeople",
            "Tafsir is based on narrations, Ta'wil on reasoning",
          ],
          correctAnswer: "Tafsir is literal explanation, Ta'wil is deeper interpretation",
          explanation:
            "Traditionally, Tafsir refers to the apparent or literal explanation, while Ta'wil refers to the deeper or allegorical interpretation.",
        },
        {
          question: "What is 'Isra'iliyyat' in Tafsir literature?",
          options: [
            "Interpretations from Israeli scholars",
            "Stories about Bani Israel in the Quran",
            "Narrations from Jewish and Christian sources",
            "References to the Night Journey (Isra)",
          ],
          correctAnswer: "Narrations from Jewish and Christian sources",
          explanation:
            "Isra'iliyyat refers to narrations and stories from Jewish and Christian sources that were incorporated into some Tafsir works.",
        },
        {
          question: "Which Tafsir is known for its focus on legal rulings (Ahkam)?",
          options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Qurtubi", "Tafsir al-Kashshaf"],
          correctAnswer: "Tafsir al-Qurtubi",
          explanation:
            "Tafsir al-Qurtubi (Al-Jami' li-Ahkam al-Quran) is famous for its detailed discussion of legal rulings derived from the Quran.",
        },
        {
          question: "What is 'Tafsir al-Ishari'?",
          options: [
            "Interpretation based on historical context",
            "Interpretation based on mystical or spiritual insights",
            "Interpretation based on scientific discoveries",
            "Interpretation based on linguistic analysis",
          ],
          correctAnswer: "Interpretation based on mystical or spiritual insights",
          explanation:
            "Tafsir al-Ishari refers to mystical or spiritual interpretations that go beyond the apparent meaning, often associated with Sufi traditions.",
        },
        {
          question: "What is the concept of 'Muhkam and Mutashabih' verses in the Quran?",
          options: [
            "Abrogating and abrogated verses",
            "Clear and ambiguous verses",
            "Long and short verses",
            "Early and late revelations",
          ],
          correctAnswer: "Clear and ambiguous verses",
          explanation:
            "Muhkam refers to verses with clear and definitive meanings, while Mutashabih refers to verses that are ambiguous or open to multiple interpretations.",
        },
        {
          question: "What is the concept of 'Nasikh and Mansukh' in Quranic interpretation?",
          options: [
            "Different styles of recitation",
            "Abrogating and abrogated verses",
            "Clear and ambiguous verses",
            "Literal and metaphorical meanings",
          ],
          correctAnswer: "Abrogating and abrogated verses",
          explanation:
            "Nasikh refers to verses that abrogate or supersede earlier rulings, while Mansukh refers to verses whose rulings have been abrogated or replaced by later revelations. This concept addresses the apparent contradictions in the Quran by recognizing the progressive nature of revelation.",
        },
      ],
    },
  },
  {
    id: "hadeeth",
    title: "Hadeeth",
    description: "Sayings and actions of Prophet Muhammad (PBUH)",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does the term 'Hadith' mean?",
          options: ["Prayer", "Narration", "Book", "Law"],
          correctAnswer: "Narration",
          explanation:
            "Hadith literally means a narration, account, or report. In Islamic context, it refers to the sayings, actions, or approvals of Prophet Muhammad (PBUH).",
        },
        {
          question: "What are the two main components of a Hadith?",
          options: ["Quran and Sunnah", "Isnad and Matn", "Sahih and Daif", "Fiqh and Aqeedah"],
          correctAnswer: "Isnad and Matn",
          explanation:
            "A Hadith consists of the Isnad (chain of narrators) and the Matn (the actual text or content of the narration).",
        },
        {
          question: "Who compiled the collection of Hadiths known as 'Sahih Bukhari'?",
          options: ["Imam Muslim", "Imam Bukhari", "Imam Malik", "Imam Abu Dawud"],
          correctAnswer: "Imam Bukhari",
          explanation: "Sahih Bukhari was compiled by Imam Muhammad ibn Ismail al-Bukhari (810-870 CE).",
        },
        {
          question: "What is a 'Sahih' Hadith?",
          options: [
            "A Hadith narrated by a companion",
            "A Hadith found in the Quran",
            "A Hadith that is authentic and meets all criteria of acceptance",
            "A Hadith that is weak",
          ],
          correctAnswer: "A Hadith that is authentic and meets all criteria of acceptance",
          explanation:
            "A Sahih Hadith is one that is authentic and meets all the criteria of acceptance in terms of chain of narrators and content.",
        },
        {
          question: "What is the difference between Hadith and Sunnah?",
          options: [
            "They are the same",
            "Hadith is written, Sunnah is practiced",
            "Hadith is the narration, Sunnah is the practice or way",
            "Hadith is from the Quran, Sunnah is from the Prophet",
          ],
          correctAnswer: "Hadith is the narration, Sunnah is the practice or way",
          explanation:
            "Hadith refers to the narrations of the Prophet's sayings, actions, or approvals, while Sunnah refers to his established practice or way of life.",
        },
        {
          question: "What is the purpose of studying Hadith?",
          options: [
            "To replace the Quran",
            "To understand and implement the Quran and Islamic teachings correctly",
            "Only for historical interest",
            "Only for scholars, not regular Muslims",
          ],
          correctAnswer: "To understand and implement the Quran and Islamic teachings correctly",
          explanation:
            "Studying Hadith helps Muslims understand and implement the Quran and Islamic teachings correctly, as the Prophet Muhammad (PBUH) was the living example of the Quran in practice.",
        },
        {
          question: "What is a 'Daif' (weak) Hadith?",
          options: [
            "A Hadith with a short text",
            "A Hadith narrated by few people",
            "A Hadith that doesn't meet all criteria of authenticity",
            "A Hadith about minor issues",
          ],
          correctAnswer: "A Hadith that doesn't meet all criteria of authenticity",
          explanation:
            "A Daif (weak) Hadith is one that doesn't meet all the criteria of authenticity in terms of chain of narrators or content, making it less reliable than Sahih or Hasan Hadiths.",
        },
        {
          question: "Who is considered the 'Mother of the Believers' who narrated many Hadiths?",
          options: ["Fatimah", "Khadijah", "Aisha", "Zaynab"],
          correctAnswer: "Aisha",
          explanation:
            "Aisha, the wife of Prophet Muhammad (PBUH), is considered one of the 'Mothers of the Believers' and narrated approximately 2,210 Hadiths, making her one of the most prolific narrators.",
        },
        {
          question: "What is the meaning of 'Sunnah' in the context of Hadith studies?",
          options: [
            "The Quran",
            "The way or practice of the Prophet",
            "The consensus of scholars",
            "The legal rulings",
          ],
          correctAnswer: "The way or practice of the Prophet",
          explanation:
            "In the context of Hadith studies, Sunnah refers to the way or practice of Prophet Muhammad (PBUH), including his sayings, actions, and tacit approvals.",
        },
        {
          question: "What is the role of Hadith in Islamic law?",
          options: [
            "It has no role",
            "It is the only source",
            "It is the second primary source after the Quran",
            "It is only used when the Quran is silent",
          ],
          correctAnswer: "It is the second primary source after the Quran",
          explanation:
            "Hadith serves as the second primary source of Islamic law after the Quran, providing detailed explanations, clarifications, and additional rulings not explicitly mentioned in the Quran.",
        },
      ],
      advanced: [
        {
          question: "What is the difference between Hadith and Sunnah?",
          options: [
            "They are the same thing",
            "Hadith is written, Sunnah is practiced",
            "Hadith is the narration, Sunnah is the practice or way",
            "Hadith is from companions, Sunnah is from the Prophet",
          ],
          correctAnswer: "Hadith is the narration, Sunnah is the practice or way",
          explanation:
            "Hadith refers to the narrations about the Prophet's sayings, actions, or approvals, while Sunnah refers to his way of life, practices, and traditions.",
        },
        {
          question: "What is a 'Mutawatir' Hadith?",
          options: [
            "A Hadith narrated by a single person",
            "A Hadith with a broken chain",
            "A Hadith transmitted by a large number of narrators at each level",
            "A Hadith that contradicts the Quran",
          ],
          correctAnswer: "A Hadith transmitted by a large number of narrators at each level",
          explanation:
            "A Mutawatir Hadith is one that has been narrated by such a large number of people at each level of the chain that it is impossible for them to have colluded in a lie.",
        },
        {
          question: "What are the 'Kutub al-Sittah'?",
          options: [
            "The six verses of the Quran",
            "The six pillars of faith",
            "The six canonical collections of Hadith",
            "The six schools of thought",
          ],
          correctAnswer: "The six canonical collections of Hadith",
          explanation:
            "Kutub al-Sittah refers to the six major collections of Hadith: Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami al-Tirmidhi, Sunan al-Nasa'i, and Sunan Ibn Majah.",
        },
        {
          question: "What is 'Ilm al-Jarh wa al-Ta'dil'?",
          options: [
            "The science of Quranic interpretation",
            "The science of evaluating Hadith narrators",
            "The science of Islamic law",
            "The science of Arabic grammar",
          ],
          correctAnswer: "The science of evaluating Hadith narrators",
          explanation:
            "Ilm al-Jarh wa al-Ta'dil is the science of critically evaluating Hadith narrators to determine their reliability and integrity.",
        },
        {
          question: "What is a 'Hadith Qudsi'?",
          options: [
            "A Hadith narrated by Qudsi, a companion",
            "A Hadith where the Prophet quotes Allah's words",
            "A Hadith about Jerusalem (Al-Quds)",
            "A Hadith that is extremely authentic",
          ],
          correctAnswer: "A Hadith where the Prophet quotes Allah's words",
          explanation:
            "A Hadith Qudsi is a narration where the Prophet Muhammad (PBUH) quotes Allah's words, but it is not part of the Quran.",
        },
        {
          question: "What is the difference between 'Hadith Sahih' and 'Hadith Hasan'?",
          options: [
            "They are the same",
            "Sahih is authentic, Hasan is good but slightly less authentic",
            "Sahih is from the Prophet, Hasan is from companions",
            "Sahih is in Arabic, Hasan is translated",
          ],
          correctAnswer: "Sahih is authentic, Hasan is good but slightly less authentic",
          explanation:
            "A Sahih Hadith meets all criteria of authenticity at the highest level, while a Hasan Hadith is reliable but doesn't reach the highest level of authenticity.",
        },
        {
          question: "What is 'Ilm Mustalah al-Hadith'?",
          options: [
            "The science of Hadith terminology and classification",
            "The science of Hadith narration",
            "The science of Hadith interpretation",
            "The science of Hadith collection",
          ],
          correctAnswer: "The science of Hadith terminology and classification",
          explanation:
            "Ilm Mustalah al-Hadith is the science that deals with the terminology, classification, and methodology of Hadith studies.",
        },
        {
          question: "What is a 'Mawdu' Hadith?",
          options: [
            "A Hadith with a complete chain",
            "A Hadith with multiple chains",
            "A fabricated or forged Hadith",
            "A Hadith with a single narrator",
          ],
          correctAnswer: "A fabricated or forged Hadith",
          explanation:
            "A Mawdu Hadith is one that has been fabricated or forged and falsely attributed to the Prophet Muhammad (PBUH).",
        },
        {
          question: "What is the concept of 'Isnad' in Hadith studies?",
          options: [
            "The text of the Hadith",
            "The chain of narrators",
            "The meaning of the Hadith",
            "The collection of Hadiths",
          ],
          correctAnswer: "The chain of narrators",
          explanation:
            "Isnad refers to the chain of narrators through which a Hadith has been transmitted, which is crucial for evaluating its authenticity.",
        },
        {
          question: "What is the concept of 'Tadlis' in Hadith terminology?",
          options: [
            "Adding extra information to a Hadith",
            "Concealing a defect in the chain of narration",
            "Translating a Hadith incorrectly",
            "Fabricating a Hadith completely",
          ],
          correctAnswer: "Concealing a defect in the chain of narration",
          explanation:
            "Tadlis refers to the practice of concealing a defect in the chain of narration, such as when a narrator gives the impression that he heard the Hadith directly from someone he actually didn't meet or hear from directly. This is considered a form of misrepresentation that affects the authenticity of the Hadith.",
        },
      ],
    },
  },
  {
    id: "aqeedah",
    title: "Aqeedah",
    description: "Islamic Creed and Beliefs",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does 'Aqeedah' mean?",
          options: ["Prayer", "Belief", "Charity", "Fasting"],
          correctAnswer: "Belief",
          explanation:
            "Aqeedah refers to the core beliefs and creed of Islam that a Muslim must have firm conviction in.",
        },
        {
          question: "How many articles of faith are there in Islam?",
          options: ["4", "5", "6", "7"],
          correctAnswer: "6",
          explanation:
            "There are six articles of faith in Islam: belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree.",
        },
        {
          question: "What is 'Tawheed'?",
          options: [
            "Belief in the Day of Judgment",
            "Belief in the oneness of Allah",
            "Belief in the prophets",
            "Belief in the angels",
          ],
          correctAnswer: "Belief in the oneness of Allah",
          explanation:
            "Tawheed is the concept of the absolute oneness of Allah, which is the most fundamental aspect of Islamic belief.",
        },
        {
          question: "What is the opposite of Tawheed?",
          options: ["Iman", "Shirk", "Kufr", "Nifaq"],
          correctAnswer: "Shirk",
          explanation:
            "Shirk is the association of partners with Allah, which is the opposite of Tawheed (monotheism).",
        },
        {
          question: "What is the meaning of 'La ilaha illa Allah'?",
          options: [
            "There is no god worthy of worship except Allah",
            "Allah is the greatest",
            "Praise be to Allah",
            "Allah is one",
          ],
          correctAnswer: "There is no god worthy of worship except Allah",
          explanation:
            "La ilaha illa Allah is the first part of the Islamic declaration of faith (Shahada), meaning 'There is no god worthy of worship except Allah', affirming the absolute oneness of Allah.",
        },
        {
          question: "What is the belief about the Quran in Islamic Aqeedah?",
          options: [
            "It is one of many holy books",
            "It is the unchanged, preserved word of Allah",
            "It was written by Prophet Muhammad",
            "It is only a historical document",
          ],
          correctAnswer: "It is the unchanged, preserved word of Allah",
          explanation:
            "In Islamic Aqeedah, the Quran is believed to be the literal, unchanged, and preserved word of Allah revealed to Prophet Muhammad (PBUH) through Angel Gabriel.",
        },
        {
          question: "What is the Islamic belief about the angels?",
          options: [
            "They are myths",
            "They are created beings who obey Allah",
            "They are children of Allah",
            "They can choose to disobey Allah",
          ],
          correctAnswer: "They are created beings who obey Allah",
          explanation:
            "In Islamic Aqeedah, angels are created beings made from light who always obey Allah and never disobey Him. They have various roles assigned by Allah.",
        },
        {
          question: "What is the Islamic belief about the Day of Judgment?",
          options: [
            "It is symbolic, not literal",
            "It will never happen",
            "It is a certain reality that will come",
            "It has already occurred",
          ],
          correctAnswer: "It is a certain reality that will come",
          explanation:
            "Islamic Aqeedah affirms that the Day of Judgment is a certain reality that will come, when all humans will be resurrected and held accountable for their deeds.",
        },
        {
          question: "What is 'Iman' in Islamic terminology?",
          options: ["Prayer", "Faith or belief", "Charity", "Pilgrimage"],
          correctAnswer: "Faith or belief",
          explanation:
            "Iman refers to faith or belief in Islam, encompassing belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree.",
        },
        {
          question: "What is the Islamic belief about previous prophets?",
          options: [
            "They were not real",
            "They were all Arabs",
            "They all brought the same core message of monotheism",
            "Their messages are irrelevant now",
          ],
          correctAnswer: "They all brought the same core message of monotheism",
          explanation:
            "Islamic Aqeedah teaches that all prophets, from Adam to Muhammad (peace be upon them all), brought the same core message of monotheism (Tawheed), calling people to worship Allah alone.",
        },
      ],
      advanced: [
        {
          question: "What are the three categories of Tawheed?",
          options: [
            "Tawheed al-Uluhiyyah, Tawheed al-Rububiyyah, Tawheed al-Asma wa al-Sifat",
            "Tawheed al-Salat, Tawheed al-Zakat, Tawheed al-Sawm",
            "Tawheed al-Quran, Tawheed al-Sunnah, Tawheed al-Ijma",
            "Tawheed al-Iman, Tawheed al-Islam, Tawheed al-Ihsan",
          ],
          correctAnswer: "Tawheed al-Uluhiyyah, Tawheed al-Rububiyyah, Tawheed al-Asma wa al-Sifat",
          explanation:
            "The three categories of Tawheed are: Tawheed al-Rububiyyah (Oneness of Lordship), Tawheed al-Uluhiyyah (Oneness of Worship), and Tawheed al-Asma wa al-Sifat (Oneness of Names and Attributes).",
        },
        {
          question: "What is 'Qadar' in Islamic belief?",
          options: [
            "The Islamic holy book",
            "Divine decree and predestination",
            "The Day of Judgment",
            "The five pillars of Islam",
          ],
          correctAnswer: "Divine decree and predestination",
          explanation:
            "Qadar refers to Allah's divine decree and predestination, the belief that Allah has knowledge of and control over all things.",
        },
        {
          question: "What is the concept of 'Kufr' in Islam?",
          options: ["Belief in Allah", "Disbelief or rejection of faith", "Performing good deeds", "Giving charity"],
          correctAnswer: "Disbelief or rejection of faith",
          explanation: "Kufr refers to disbelief or the rejection of faith in Allah and the teachings of Islam.",
        },
        {
          question: "What is 'Al-Wala wal-Bara'?",
          options: [
            "The concept of Heaven and Hell",
            "The concept of loyalty to Islam and disavowal of disbelief",
            "The concept of reward and punishment",
            "The concept of life and death",
          ],
          correctAnswer: "The concept of loyalty to Islam and disavowal of disbelief",
          explanation:
            "Al-Wala wal-Bara refers to the concept of loyalty and love for the sake of Allah, and disavowal and disassociation from disbelief and its people.",
        },
        {
          question: "What is the difference between the attributes of Allah and those of His creation?",
          options: [
            "There is no difference",
            "Allah's attributes are limited, creation's are unlimited",
            "Allah's attributes are perfect and unique, without resemblance to creation",
            "Allah has no attributes",
          ],
          correctAnswer: "Allah's attributes are perfect and unique, without resemblance to creation",
          explanation:
            "Allah's attributes are perfect, complete, and unique to Him, without any resemblance to the attributes of His creation, as stated in the Quran: 'There is nothing like unto Him' (42:11).",
        },
        {
          question: "What is the Ash'ari school's approach to understanding Allah's attributes?",
          options: [
            "They reject all attributes",
            "They interpret attributes literally",
            "They interpret some attributes metaphorically",
            "They believe attributes are created",
          ],
          correctAnswer: "They interpret some attributes metaphorically",
          explanation:
            "The Ash'ari school, founded by Abu al-Hasan al-Ash'ari, takes a middle path by affirming Allah's attributes while interpreting some of them metaphorically to avoid anthropomorphism.",
        },
        {
          question: "What is the concept of 'Bid'ah' in relation to Aqeedah?",
          options: [
            "Innovation that is always good",
            "Innovation in religious matters that has no precedent",
            "Following the Sunnah strictly",
            "Interpreting the Quran",
          ],
          correctAnswer: "Innovation in religious matters that has no precedent",
          explanation:
            "Bid'ah refers to innovations or newly invented matters in religion that have no precedent from the time of the Prophet Muhammad (PBUH) and his companions.",
        },
        {
          question: "What is the concept of 'Tawassul' in Islamic belief?",
          options: [
            "Direct worship of saints",
            "Seeking nearness to Allah through permissible means",
            "Rejecting intercession completely",
            "Praying to the deceased",
          ],
          correctAnswer: "Seeking nearness to Allah through permissible means",
          explanation:
            "Tawassul refers to the concept of seeking nearness to Allah through permissible means, such as through His names and attributes, good deeds, or the supplication of a living righteous person.",
        },
        {
          question: "What is the difference between 'Tawheed al-Rububiyyah' and 'Tawheed al-Uluhiyyah'?",
          options: [
            "They are the same thing",
            "Rububiyyah is about Allah's lordship, Uluhiyyah is about worshipping Him alone",
            "Rububiyyah is about worship, Uluhiyyah is about lordship",
            "Rububiyyah is about the Quran, Uluhiyyah is about the Sunnah",
          ],
          correctAnswer: "Rububiyyah is about Allah's lordship, Uluhiyyah is about worshipping Him alone",
          explanation:
            "Tawheed al-Rububiyyah is the belief in Allah's lordship, that He alone is the creator, sustainer, and controller of all things. Tawheed al-Uluhiyyah is the belief that Allah alone deserves to be worshipped, without any partners.",
        },
        {
          question: "What is the concept of 'Ru'yat Allah' (Seeing Allah) in Islamic Aqeedah?",
          options: [
            "Allah can never be seen under any circumstances",
            "Believers will see Allah in the Hereafter without comprehending His nature",
            "Allah can be seen in this world through spiritual exercises",
            "It is a metaphorical concept, not literal",
          ],
          correctAnswer: "Believers will see Allah in the Hereafter without comprehending His nature",
          explanation:
            "According to mainstream Sunni Aqeedah, believers will literally see Allah in the Hereafter, as mentioned in various Quranic verses and authentic Hadiths. However, this vision will not encompass or comprehend Allah's nature or essence, as 'There is nothing like unto Him' (Quran 42:11).",
        },
      ],
    },
  },
  seerahCategory,
  ...additionalCategories,
  comparativeReligionCategory,
  islamicFinanceCategory,
  islamicHistoryCategory,
  dawahCategory,
]

// Add this right after the quizData array definition
console.log(
  "Loaded categories:",
  quizData.map((cat) => `${cat.id} (${cat.levels.easy.length} easy, ${cat.levels.advanced.length} advanced questions)`),
)

// Add this at the top of the file, right after the import statements:
// This will help us see if all categories are being loaded properly
console.log(
  "Loading quiz data with categories:",
  quizData.map((cat) => cat.id),
)

// Update the getQuizQuestions function to handle intermediate difficulty and assign IDs
export function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] {
  console.log(`Fetching questions for category: ${categoryId}, difficulty: ${difficulty}`)
  const category = quizData.find((cat) => cat.id === categoryId)
  if (!category) {
    console.log(`Category ${categoryId} not found`)
    return []
  }

  // If intermediate difficulty is requested but not available, fall back to easy
  if (difficulty === "intermediate" && (!category.levels.intermediate || category.levels.intermediate.length === 0)) {
    console.log(`No intermediate questions found for ${categoryId}, falling back to easy`)
    difficulty = "easy"
  }

  // Get the questions for the specified category and difficulty
  let questions = category.levels[difficulty] || []

  // Assign IDs to questions if they don't have them
  questions = questions.map((question, index) => {
    if (!question.id) {
      return {
        ...question,
        id: `${categoryId}-${index + 1}`,
      }
    }
    return question
  })

  console.log(`Found ${questions.length} questions for ${categoryId}/${difficulty}`)

  // Before returning the questions, enhance them with infographics if available
  const enhancedQuestions = enhanceQuestionsWithInfographics(categoryId, questions)

  // Log which questions have infographics
  const withInfographics = enhancedQuestions.filter((q) => q.hasInfographic).length
  console.log(`Enhanced ${withInfographics} questions with infographics`)

  return enhancedQuestions
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return quizData.find((category) => category.id === categoryId)
}

export function getAllCategories(): QuizCategory[] {
  return quizData
}

// Verify all categories have questions
quizData.forEach((category) => {
  console.log(
    `Category ${category.id} has ${category.levels.easy.length} easy questions and ${category.levels.advanced.length} advanced questions`,
  )

  // Check for any empty question arrays
  if (category.levels.easy.length === 0) {
    console.warn(`Warning: Category ${category.id} has no easy questions`)
  }
  if (category.levels.advanced.length === 0) {
    console.warn(`Warning: Category ${category.id} has no advanced questions`)
  }
})
