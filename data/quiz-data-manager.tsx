import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz"
import seerahCategory from "./quiz-data-manager-additions"
import { additionalCategories } from "./quiz-data-manager-additional-categories"
import comparativeReligionCategory from "./comparative-religion"
import islamicFinanceCategory from "./islamic-finance"
import islamicHistoryCategory from "./islamic-history"
import dawahCategory from "./dawah"
import islamicMedicalEthicsCategory from "./islamic-medical-ethics"
import islamicPsychologyCategory from "./islamic-psychology"
import islamicParentingCategory from "./islamic-parenting"

// Import the infographics enhancement function
import {
  enhanceQuestionsWithInfographicsForData,
  enhanceQuestionsWithInfographics,
} from "./quiz-data-manager-infographics"

// Define all quiz categories directly in this file
const baseQuizData: QuizCategory[] = [
  {
    id: "quran",
    title: "Quran",
    description: "Test your knowledge of the Holy Quran",
    icon: "📖",
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
    icon: "⚖️",
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
    icon: "📚",
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
            "Check the linguistic meaning",
            "Look for similar verses in the Quran",
            "Consult the Hadith",
            "Consider the historical context",
          ],
          correctAnswer: "Look for similar verses in the Quran",
          explanation:
            "The first step in classical Tafsir methodology is to look for other verses in the Quran that explain or clarify the verse in question, as the Quran is the best interpreter of itself.",
        },
      ],
      advanced: [
        {
          question: "What is 'Asbab al-Nuzul'?",
          options: ["Reasons for revelation", "Methods of recitation", "Types of verses", "Compilation of the Quran"],
          correctAnswer: "Reasons for revelation",
          explanation:
            "Asbab al-Nuzul refers to the occasions or circumstances that led to the revelation of specific verses.",
        },
        {
          question: "Who wrote 'Tafsir al-Tabari'?",
          options: ["Ibn Kathir", "Al-Qurtubi", "Muhammad ibn Jarir al-Tabari", "Al-Jalalayn"],
          correctAnswer: "Muhammad ibn Jarir al-Tabari",
          explanation:
            "Tafsir al-Tabari was written by Muhammad ibn Jarir al-Tabari and is considered one of the most comprehensive classical commentaries.",
        },
        {
          question: "What is the methodology of 'Tafsir al-Quran bil-Quran'?",
          options: [
            "Interpreting the Quran with Hadith",
            "Interpreting the Quran with the Quran itself",
            "Interpreting the Quran with scholarly opinions",
            "Interpreting the Quran with historical context",
          ],
          correctAnswer: "Interpreting the Quran with the Quran itself",
          explanation:
            "This methodology involves explaining verses of the Quran by referring to other verses that clarify or elaborate on the same topic.",
        },
        {
          question: "What is the difference between 'Muhkam' and 'Mutashabih' verses?",
          options: [
            "Clear and ambiguous verses respectively",
            "Meccan and Medinan verses respectively",
            "Legal and narrative verses respectively",
            "Early and late revelations respectively",
          ],
          correctAnswer: "Clear and ambiguous verses respectively",
          explanation:
            "Muhkam verses are clear and unambiguous, while Mutashabih verses are allegorical or ambiguous in meaning.",
        },
        {
          question: "What is 'I'jaz al-Quran'?",
          options: [
            "The compilation of the Quran",
            "The miraculous nature of the Quran",
            "The preservation of the Quran",
            "The translation of the Quran",
          ],
          correctAnswer: "The miraculous nature of the Quran",
          explanation:
            "I'jaz al-Quran refers to the miraculous and inimitable nature of the Quran in its language, style, and content.",
        },
        {
          question: "What is the significance of 'Nasikh wa Mansukh' in Tafsir?",
          options: [
            "Different recitations of the Quran",
            "Abrogation and abrogated verses",
            "Meccan and Medinan verses",
            "Literal and metaphorical verses",
          ],
          correctAnswer: "Abrogation and abrogated verses",
          explanation:
            "Nasikh wa Mansukh deals with the concept of abrogation, where later revelations may supersede earlier ones in certain legal or practical matters.",
        },
        {
          question: "What is 'Tafsir Ishari' or 'Tafsir Sufi'?",
          options: [
            "Literal interpretation",
            "Historical interpretation",
            "Mystical or spiritual interpretation",
            "Legal interpretation",
          ],
          correctAnswer: "Mystical or spiritual interpretation",
          explanation:
            "Tafsir Ishari refers to the mystical or spiritual interpretation of the Quran, focusing on inner meanings and spiritual insights.",
        },
        {
          question: "What is the role of 'Qira'at' (variant readings) in Tafsir?",
          options: [
            "They are ignored in interpretation",
            "They provide additional layers of meaning",
            "They create confusion",
            "They are only for recitation purposes",
          ],
          correctAnswer: "They provide additional layers of meaning",
          explanation:
            "Different authentic readings (Qira'at) of the Quran can provide additional meanings and interpretations of verses.",
        },
        {
          question: "What is 'Tafsir Mawdu'i' (Thematic Tafsir)?",
          options: [
            "Verse-by-verse interpretation",
            "Interpretation based on themes across the Quran",
            "Interpretation based on historical order",
            "Interpretation based on grammatical analysis",
          ],
          correctAnswer: "Interpretation based on themes across the Quran",
          explanation:
            "Tafsir Mawdu'i involves studying and interpreting verses related to specific themes or topics throughout the entire Quran.",
        },
        {
          question: "What is the significance of 'Wujuh wa Naza'ir' in Quranic studies?",
          options: [
            "Different recitations",
            "Similar words with different meanings in different contexts",
            "Abrogated verses",
            "Miraculous aspects",
          ],
          correctAnswer: "Similar words with different meanings in different contexts",
          explanation:
            "Wujuh wa Naza'ir studies how the same word can have different meanings in different contexts throughout the Quran.",
        },
      ],
    },
  },
  {
    id: "hadith",
    title: "Hadith",
    description: "Prophetic Traditions",
    icon: "📜",
    levels: {
      easy: [
        {
          question: "What is a Hadith?",
          options: [
            "A verse from the Quran",
            "A saying, action, or approval of Prophet Muhammad (PBUH)",
            "A prayer",
            "A chapter in the Quran",
          ],
          correctAnswer: "A saying, action, or approval of Prophet Muhammad (PBUH)",
          explanation:
            "A Hadith is a record of the words, actions, and the silent approval of the Islamic prophet Muhammad (PBUH).",
        },
        {
          question: "What is the highest level of authenticity for a Hadith?",
          options: ["Hasan", "Sahih", "Da'if", "Maudu"],
          correctAnswer: "Sahih",
          explanation: "Sahih (authentic) is the highest level of Hadith authenticity.",
        },
        {
          question: "Who compiled Sahih al-Bukhari?",
          options: ["Imam Muslim", "Imam Bukhari", "Imam Tirmidhi", "Imam Abu Dawud"],
          correctAnswer: "Imam Bukhari",
          explanation: "Sahih al-Bukhari was compiled by Imam Muhammad al-Bukhari.",
        },
        {
          question: "What are the 'Kutub al-Sittah'?",
          options: [
            "Six pillars of Islam",
            "Six major Hadith collections",
            "Six companions of the Prophet",
            "Six chapters of the Quran",
          ],
          correctAnswer: "Six major Hadith collections",
          explanation:
            "Kutub al-Sittah refers to the six major collections of Hadith in Sunni Islam: Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, and Ibn Majah.",
        },
        {
          question: "What is the 'Isnad' of a Hadith?",
          options: ["The text of the Hadith", "The chain of narrators", "The authenticity level", "The topic category"],
          correctAnswer: "The chain of narrators",
          explanation:
            "Isnad refers to the chain of narrators who transmitted the Hadith from the Prophet to the compiler.",
        },
        {
          question: "What is the 'Matn' of a Hadith?",
          options: [
            "The chain of narrators",
            "The text or content of the Hadith",
            "The compiler's name",
            "The date of compilation",
          ],
          correctAnswer: "The text or content of the Hadith",
          explanation:
            "Matn refers to the actual text or content of the Hadith, as opposed to the chain of narrators (Isnad).",
        },
        {
          question: "What is a 'Da'if' Hadith?",
          options: ["A very authentic Hadith", "A weak Hadith", "A fabricated Hadith", "A good Hadith"],
          correctAnswer: "A weak Hadith",
          explanation:
            "Da'if refers to a weak Hadith that does not meet the criteria for authenticity due to issues in its chain or content.",
        },
        {
          question: "What is a 'Hasan' Hadith?",
          options: ["A weak Hadith", "A good/fair Hadith", "A fabricated Hadith", "The most authentic Hadith"],
          correctAnswer: "A good/fair Hadith",
          explanation: "Hasan refers to a good or fair Hadith that is acceptable but not as strong as Sahih.",
        },
        {
          question: "What is the second most authentic Hadith collection after Sahih al-Bukhari?",
          options: ["Sunan Abu Dawud", "Sahih Muslim", "Jami' at-Tirmidhi", "Sunan an-Nasa'i"],
          correctAnswer: "Sahih Muslim",
          explanation:
            "Sahih Muslim, compiled by Imam Muslim, is considered the second most authentic Hadith collection after Sahih al-Bukhari.",
        },
        {
          question: "What is 'Sunnah'?",
          options: [
            "The Quran",
            "The way of life prescribed as normative based on the Prophet's teachings",
            "Islamic law",
            "Prayer",
          ],
          correctAnswer: "The way of life prescribed as normative based on the Prophet's teachings",
          explanation:
            "Sunnah refers to the way of life prescribed as normative for Muslims based on the teachings and practices of the Islamic prophet Muhammad.",
        },
      ],
      advanced: [
        {
          question: "What is a 'Mutawatir' Hadith?",
          options: [
            "A Hadith narrated by one person",
            "A Hadith narrated by so many people that it's impossible for them to have conspired to lie",
            "A weak Hadith",
            "A fabricated Hadith",
          ],
          correctAnswer: "A Hadith narrated by so many people that it's impossible for them to have conspired to lie",
          explanation:
            "Mutawatir refers to a Hadith that has been narrated by such a large number of people at each level of the chain that it would be impossible for them all to have conspired to fabricate it.",
        },
        {
          question: "What is 'Ilm al-Rijal'?",
          options: [
            "The science of Hadith compilation",
            "The science of evaluating Hadith narrators",
            "The science of Quranic interpretation",
            "The science of Islamic law",
          ],
          correctAnswer: "The science of evaluating Hadith narrators",
          explanation:
            "Ilm al-Rijal is the science of evaluating the reliability, character, and memory of Hadith narrators.",
        },
        {
          question: "What is a 'Hadith Qudsi'?",
          options: [
            "A very authentic Hadith",
            "A Hadith where the Prophet quotes Allah directly",
            "A weak Hadith",
            "A Hadith about prayer",
          ],
          correctAnswer: "A Hadith where the Prophet quotes Allah directly",
          explanation:
            "Hadith Qudsi are sayings of the Prophet Muhammad (PBUH) that convey the meaning of Allah's words, though not in the exact wording of the Quran.",
        },
        {
          question: "What is the difference between 'Sahih' and 'Hasan' Hadith?",
          options: [
            "There is no difference",
            "Sahih has a stronger chain of narrators",
            "Hasan is more authentic",
            "Sahih is longer",
          ],
          correctAnswer: "Sahih has a stronger chain of narrators",
          explanation:
            "Sahih Hadith has a stronger and more reliable chain of narrators compared to Hasan, making it more authentic.",
        },
        {
          question: "What is 'Tadlis' in Hadith science?",
          options: [
            "A type of authentication",
            "Concealing defects in the chain of narration",
            "A method of compilation",
            "A category of Hadith",
          ],
          correctAnswer: "Concealing defects in the chain of narration",
          explanation:
            "Tadlis refers to the practice of concealing defects in the chain of narration, which affects the authenticity of a Hadith.",
        },
        {
          question: "What is 'Jarh wa Ta'dil'?",
          options: [
            "Compilation of Hadith",
            "Criticism and praise of narrators",
            "Classification of Hadith",
            "Memorization techniques",
          ],
          correctAnswer: "Criticism and praise of narrators",
          explanation:
            "Jarh wa Ta'dil is the science of criticizing and praising Hadith narrators to determine their reliability.",
        },
        {
          question: "What is a 'Maudu' Hadith?",
          options: ["A very authentic Hadith", "A good Hadith", "A weak Hadith", "A fabricated Hadith"],
          correctAnswer: "A fabricated Hadith",
          explanation:
            "Maudu refers to a fabricated or forged Hadith that was not actually said by the Prophet (PBUH).",
        },
        {
          question: "What is 'Musnad' in Hadith literature?",
          options: [
            "A type of weak Hadith",
            "A collection arranged by the names of companions",
            "A fabricated Hadith",
            "A very short Hadith",
          ],
          correctAnswer: "A collection arranged by the names of companions",
          explanation:
            "Musnad refers to a Hadith collection arranged according to the names of the companions who narrated from the Prophet.",
        },
        {
          question: "What is the significance of 'Ahadith al-Ahkam'?",
          options: [
            "Hadith about beliefs",
            "Hadith about legal rulings",
            "Hadith about stories",
            "Hadith about the afterlife",
          ],
          correctAnswer: "Hadith about legal rulings",
          explanation: "Ahadith al-Ahkam refers to Hadith that deal with legal rulings and jurisprudential matters.",
        },
        {
          question: "What is 'Takhrij al-Hadith'?",
          options: [
            "Memorizing Hadith",
            "The process of tracing and verifying Hadith sources",
            "Translating Hadith",
            "Categorizing Hadith",
          ],
          correctAnswer: "The process of tracing and verifying Hadith sources",
          explanation:
            "Takhrij al-Hadith is the scholarly process of tracing a Hadith to its original sources and verifying its authenticity.",
        },
      ],
    },
  },
  {
    id: "seerah",
    title: "Seerah",
    description: "Biography of Prophet Muhammad (PBUH)",
    icon: "🕌",
    levels: {
      easy: [
        {
          question: "In which city was Prophet Muhammad (PBUH) born?",
          options: ["Madinah", "Makkah", "Taif", "Jerusalem"],
          correctAnswer: "Makkah",
          explanation: "Prophet Muhammad (PBUH) was born in Makkah in the year 570 CE.",
        },
        {
          question: "What was the name of Prophet Muhammad's (PBUH) father?",
          options: ["Abu Talib", "Abdullah", "Abu Bakr", "Abdul Muttalib"],
          correctAnswer: "Abdullah",
          explanation: "The Prophet's father was Abdullah ibn Abdul Muttalib, who died before the Prophet was born.",
        },
        {
          question: "What was the name of Prophet Muhammad's (PBUH) mother?",
          options: ["Khadijah", "Aminah", "Fatimah", "Aisha"],
          correctAnswer: "Aminah",
          explanation: "The Prophet's mother was Aminah bint Wahb, who died when he was six years old.",
        },
        {
          question: "At what age did Prophet Muhammad (PBUH) receive his first revelation?",
          options: ["35", "40", "45", "50"],
          correctAnswer: "40",
          explanation: "Prophet Muhammad (PBUH) received his first revelation at the age of 40 in the cave of Hira.",
        },
        {
          question: "What was the name of the cave where Prophet Muhammad (PBUH) used to meditate?",
          options: ["Cave of Thawr", "Cave of Hira", "Cave of Uhud", "Cave of Quba"],
          correctAnswer: "Cave of Hira",
          explanation:
            "The Cave of Hira is where Prophet Muhammad (PBUH) used to retreat for meditation and where he received his first revelation.",
        },
        {
          question: "Who was the first person to accept Islam?",
          options: ["Abu Bakr", "Ali ibn Abi Talib", "Khadijah", "Umar ibn al-Khattab"],
          correctAnswer: "Khadijah",
          explanation: "Khadijah bint Khuwaylid, the Prophet's wife, was the first person to accept Islam.",
        },
        {
          question: "What is the Hijra?",
          options: [
            "The Prophet's first revelation",
            "The migration from Makkah to Madinah",
            "The conquest of Makkah",
            "The Prophet's marriage",
          ],
          correctAnswer: "The migration from Makkah to Madinah",
          explanation:
            "The Hijra refers to the migration of Prophet Muhammad (PBUH) and his followers from Makkah to Madinah in 622 CE.",
        },
        {
          question: "In which year did the Hijra take place?",
          options: ["620 CE", "622 CE", "624 CE", "630 CE"],
          correctAnswer: "622 CE",
          explanation: "The Hijra took place in 622 CE, which marks the beginning of the Islamic calendar.",
        },
        {
          question: "What was the original name of Madinah?",
          options: ["Yathrib", "Taiba", "Quba", "Uhud"],
          correctAnswer: "Yathrib",
          explanation: "Madinah was originally called Yathrib before the Prophet's migration there.",
        },
        {
          question: "How many years did Prophet Muhammad (PBUH) live in Madinah?",
          options: ["8 years", "10 years", "12 years", "15 years"],
          correctAnswer: "10 years",
          explanation: "Prophet Muhammad (PBUH) lived in Madinah for 10 years until his death in 632 CE.",
        },
      ],
      advanced: [
        {
          question: "What was the Year of Sorrow (Am al-Huzn)?",
          options: [
            "The year of the Prophet's birth",
            "The year when both Khadijah and Abu Talib died",
            "The year of Hijra",
            "The year of the conquest of Makkah",
          ],
          correctAnswer: "The year when both Khadijah and Abu Talib died",
          explanation:
            "The Year of Sorrow refers to the year when both the Prophet's wife Khadijah and his uncle Abu Talib died, leaving him without their support.",
        },
        {
          question: "What was the Treaty of Hudaybiyyah?",
          options: [
            "A trade agreement",
            "A peace treaty between Muslims and Makkans",
            "A marriage contract",
            "A military alliance",
          ],
          correctAnswer: "A peace treaty between Muslims and Makkans",
          explanation:
            "The Treaty of Hudaybiyyah was a peace agreement between the Muslims and the Quraysh tribe of Makkah, signed in 628 CE.",
        },
        {
          question: "What was the significance of the Battle of Badr?",
          options: [
            "It was the Muslims' first major victory",
            "It was the largest battle",
            "It was the last battle",
            "It was fought in Madinah",
          ],
          correctAnswer: "It was the Muslims' first major victory",
          explanation:
            "The Battle of Badr was the first major military victory for the Muslim community against the Quraysh of Makkah.",
        },
        {
          question: "What was the Constitution of Madinah?",
          options: [
            "A religious text",
            "A document establishing the rights and duties of all citizens of Madinah",
            "A military strategy",
            "A trade agreement",
          ],
          correctAnswer: "A document establishing the rights and duties of all citizens of Madinah",
          explanation:
            "The Constitution of Madinah was a document that established the rights and duties of all citizens of Madinah, regardless of their religion.",
        },
        {
          question: "What was the Farewell Pilgrimage (Hajjat al-Wada)?",
          options: [
            "The Prophet's first pilgrimage",
            "The Prophet's last pilgrimage before his death",
            "A pilgrimage to Jerusalem",
            "A pilgrimage during Ramadan",
          ],
          correctAnswer: "The Prophet's last pilgrimage before his death",
          explanation:
            "The Farewell Pilgrimage was the last pilgrimage performed by Prophet Muhammad (PBUH) before his death, during which he delivered his famous farewell sermon.",
        },
        {
          question: "What was the significance of the conquest of Makkah?",
          options: [
            "It was the bloodiest battle",
            "It was a peaceful conquest that led to mass conversions",
            "It was the first conquest",
            "It lasted for years",
          ],
          correctAnswer: "It was a peaceful conquest that led to mass conversions",
          explanation:
            "The conquest of Makkah in 630 CE was largely peaceful and led to the mass conversion of the Makkans to Islam.",
        },
        {
          question: "What was the Night Journey (Isra and Mi'raj)?",
          options: [
            "The Prophet's migration to Madinah",
            "The Prophet's miraculous night journey to Jerusalem and ascension to heaven",
            "A dream the Prophet had",
            "The Prophet's first revelation",
          ],
          correctAnswer: "The Prophet's miraculous night journey to Jerusalem and ascension to heaven",
          explanation:
            "The Isra and Mi'raj refers to the Prophet's miraculous night journey from Makkah to Jerusalem and his ascension through the heavens.",
        },
        {
          question: "Who was Waraqah ibn Nawfal?",
          options: [
            "The Prophet's uncle",
            "Khadijah's cousin who confirmed the Prophet's first revelation",
            "The first Caliph",
            "A Makkan leader",
          ],
          correctAnswer: "Khadijah's cousin who confirmed the Prophet's first revelation",
          explanation:
            "Waraqah ibn Nawfal was Khadijah's cousin, a Christian scholar who confirmed that the Prophet's first revelation was from the same angel (Gabriel) who came to Moses.",
        },
        {
          question: "What was the significance of the Battle of Uhud?",
          options: [
            "It was a complete Muslim victory",
            "It taught the Muslims about the consequences of disobedience",
            "It was the largest battle",
            "It was fought in Makkah",
          ],
          correctAnswer: "It taught the Muslims about the consequences of disobedience",
          explanation:
            "The Battle of Uhud initially favored the Muslims, but when some archers disobeyed orders and left their positions, it led to a setback, teaching important lessons about discipline and obedience.",
        },
        {
          question: "What was the Pledge of Aqabah?",
          options: [
            "A trade agreement",
            "The pledge of allegiance given by the people of Madinah to the Prophet",
            "A military treaty",
            "A marriage contract",
          ],
          correctAnswer: "The pledge of allegiance given by the people of Madinah to the Prophet",
          explanation:
            "The Pledge of Aqabah refers to the two pledges of allegiance given by the people of Madinah to Prophet Muhammad (PBUH), which paved the way for the Hijra.",
        },
      ],
    },
  },
  // Add the imported categories
  seerahCategory,
  ...additionalCategories,
  comparativeReligionCategory,
  islamicFinanceCategory,
  islamicHistoryCategory,
  dawahCategory,
  islamicMedicalEthicsCategory,
  islamicPsychologyCategory,
  islamicParentingCategory,
]

// Enhanced quiz data with infographics
const enhancedQuizData = enhanceQuestionsWithInfographicsForData(baseQuizData)

// Export functions for external use
export function getAllCategories(): QuizCategory[] {
  return enhancedQuizData
}

export function getQuizData(): QuizCategory[] {
  return enhancedQuizData
}

export function getQuizQuestions(categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] {
  const category = enhancedQuizData.find((cat) => cat.id === categoryId)
  if (!category) {
    console.warn(`Category ${categoryId} not found`)
    return []
  }

  const questions = category.levels[difficulty] || []
  return enhanceQuestionsWithInfographics(questions, categoryId)
}

export function getCategory(categoryId: string): QuizCategory | undefined {
  return enhancedQuizData.find((cat) => cat.id === categoryId)
}

// Default export for backward compatibility
export default enhancedQuizData
