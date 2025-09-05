
import type { QuizCategory } from "@/types/quiz"

// Had Contained Quran, Fiqh, Tafseer, Hadeeth, and Aqeedah
// Now only Expanded Quran Questions
export const expandedQuranQuestions: QuizCategory = {
  name: "Quran",
  description: "Test your knowledge of the Holy Quran",
  icon: "book-open",
  questions: [
    {
      id: "quran-11",
      question: "Which surah is known as 'The Heart of the Quran'?",
      options: ["Surah Yasin", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Rahman"],
      correctAnswer: "Surah Yasin",
      explanation:
        "Surah Yasin is often referred to as 'The Heart of the Quran' due to its central importance and the Prophet Muhammad (PBUH) encouraged its recitation.",
      difficulty: "medium",
    },
    {
      id: "quran-12",
      question: "How many verses are in Surah Al-Fatiha?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7",
      explanation: "Surah Al-Fatiha consists of 7 verses and is recited in every unit (rak'ah) of the daily prayers.",
      difficulty: "easy",
    },
    {
      id: "quran-13",
      question: "Which surah does not begin with 'Bismillah'?",
      options: ["Surah Al-Baqarah", "Surah Al-Tawbah", "Surah Al-Ikhlas", "Surah Al-Nasr"],
      correctAnswer: "Surah Al-Tawbah",
      explanation:
        "Surah Al-Tawbah (Chapter 9) is the only surah in the Quran that does not begin with 'Bismillah ar-Rahman ar-Raheem'.",
      difficulty: "medium",
    },
    {
      id: "quran-14",
      question: "Which surah is named after a metal?",
      options: ["Surah Al-Hadid", "Surah Al-Fajr", "Surah Al-Kahf", "Surah Al-Qamar"],
      correctAnswer: "Surah Al-Hadid",
      explanation:
        "Surah Al-Hadid (Chapter 57) is named after iron (hadid in Arabic), which is mentioned in verse 25 of the surah.",
      difficulty: "medium",
    },
    {
      id: "quran-15",
      question: "Which is the longest surah in the Quran?",
      options: ["Surah Al-Baqarah", "Surah Al-Imran", "Surah An-Nisa", "Surah Al-Maidah"],
      correctAnswer: "Surah Al-Baqarah",
      explanation: "Surah Al-Baqarah (Chapter 2) is the longest surah in the Quran with 286 verses.",
      difficulty: "easy",
    },
    {
      id: "quran-16",
      question: "Which surah is known as 'The Mother of the Quran'?",
      options: ["Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Yasin", "Surah Al-Baqarah"],
      correctAnswer: "Surah Al-Fatiha",
      explanation:
        "Surah Al-Fatiha is known as 'Umm al-Quran' (The Mother of the Quran) because it contains the essence of the entire Quran.",
      difficulty: "easy",
    },
    {
      id: "quran-17",
      question: "Which surah mentions the story of the People of the Cave (Ashab al-Kahf)?",
      options: ["Surah Al-Kahf", "Surah Yasin", "Surah Al-Qasas", "Surah Maryam"],
      correctAnswer: "Surah Al-Kahf",
      explanation: "The story of the People of the Cave (Ashab al-Kahf) is mentioned in Surah Al-Kahf (Chapter 18).",
      difficulty: "easy",
    },
    {
      id: "quran-18",
      question: "How many times is the name of Prophet Muhammad (PBUH) mentioned in the Quran?",
      options: ["2", "4", "5", "7"],
      correctAnswer: "4",
      explanation:
        "The name 'Muhammad' is mentioned 4 times in the Quran: in Surah Al-Imran (3:144), Surah Al-Ahzab (33:40), Surah Muhammad (47:2), and Surah Al-Fath (48:29).",
      difficulty: "medium",
    },
    {
      id: "quran-19",
      question: "Which surah is recommended to read on Friday?",
      options: ["Surah Al-Kahf", "Surah Yasin", "Surah Al-Mulk", "Surah Al-Waqiah"],
      correctAnswer: "Surah Al-Kahf",
      explanation:
        "The Prophet Muhammad (PBUH) encouraged Muslims to recite Surah Al-Kahf on Fridays as it provides protection from trials and tribulations.",
      difficulty: "easy",
    },
    {
      id: "quran-20",
      question: "Which surah is entirely about Prophet Muhammad (PBUH)?",
      options: ["Surah Muhammad", "Surah Al-Fath", "Surah Al-Duha", "Surah Al-Kawthar"],
      correctAnswer: "Surah Muhammad",
      explanation:
        "Surah Muhammad (Chapter 47) is named after the Prophet Muhammad (PBUH) and discusses various aspects related to him and his message.",
      difficulty: "medium",
    },
  ],
}

// Expanded Fiqh Questions
export const expandedFiqhQuestions: QuizCategory = {
  name: "Fiqh",
  description: "Test your knowledge of Islamic jurisprudence",
  icon: "scale",
  questions: [
       {
      id: "fiqh-11",
      question: "What is the minimum amount of wealth (nisab) required for Zakat on gold?",
      options: ["85 grams", "87.48 grams", "90 grams", "95 grams"],
      correctAnswer: "87.48 grams",
      explanation:
        "The nisab for gold is 87.48 grams (approximately 7.5 tolas). When a Muslim possesses this amount of gold for one lunar year, they must pay 2.5% of its value as Zakat.",
      difficulty: "medium",
    },
    {
      id: "fiqh-12",
      question: "Which of the following invalidates the fast?",
      options: ["Unintentional vomiting", "Using eye drops", "Accidentally drinking water", "Intentionally eating"],
      correctAnswer: "Intentionally eating",
      explanation:
        "Intentionally eating breaks the fast. Unintentional actions like accidentally drinking water, unintentional vomiting, or using eye drops do not invalidate the fast according to most scholars.",
      difficulty: "easy",
    },
    {
      id: "fiqh-13",
      question: "What is the term for the intention to perform Hajj and Umrah together?",
      options: ["Ifrad", "Qiran", "Tamattu", "Ihram"],
      correctAnswer: "Qiran",
      explanation:
        "Qiran is when a pilgrim intends to perform Hajj and Umrah together, wearing the ihram once for both. The other types are Ifrad (Hajj only) and Tamattu (Umrah first, then Hajj with a new ihram).",
      difficulty: "medium",
    },
    {
      id: "fiqh-14",
      question: "What is the ruling on praying Witr prayer?",
      options: ["Fard", "Wajib", "Sunnah", "Nafl"],
      correctAnswer: "Wajib",
      explanation:
        "According to the Hanafi school, Witr prayer is wajib (necessary/obligatory). Other schools consider it a highly emphasized sunnah (Sunnah Mu'akkadah).",
      difficulty: "medium",
    },
    {
      id: "fiqh-15",
      question: "How many obligatory acts (fard) are there in wudu according to the majority of scholars?",
      options: ["3", "4", "6", "7"],
      correctAnswer: "4",
      explanation:
        "According to the majority of scholars, there are 4 obligatory acts in wudu: washing the face, washing the arms to the elbows, wiping the head, and washing the feet to the ankles.",
      difficulty: "medium",
    },
    {
      id: "fiqh-16",
      question: "What is the minimum amount that must be given as Zakat al-Fitr per person?",
      options: ["One sa' of dates", "One sa' of barley", "One sa' of wheat", "All of the above are acceptable"],
      correctAnswer: "All of the above are acceptable",
      explanation:
        "Zakat al-Fitr can be given as one sa' (approximately 2.5-3 kg) of the staple food of the region, which can include dates, barley, wheat, rice, or other staple foods.",
      difficulty: "medium",
    },
    {
      id: "fiqh-17",
      question: "What is the ruling on combining prayers (Jam') for a traveler?",
      options: ["Haram", "Makruh", "Permissible", "Obligatory"],
      correctAnswer: "Permissible",
      explanation:
        "It is permissible for a traveler to combine certain prayers (Zuhr with Asr, and Maghrib with Isha) either by advancing the later prayer (jam' taqdim) or delaying the earlier prayer (jam' ta'khir).",
      difficulty: "easy",
    },
    {
      id: "fiqh-18",
      question:
        "What is the minimum period of travel that allows a person to shorten prayers according to the Hanafi school?",
      options: ["1 day", "3 days", "15 days", "1 month"],
      correctAnswer: "3 days",
      explanation:
        "According to the Hanafi school, the minimum distance for shortening prayers (qasr) is the distance that would take 3 days to travel on foot or by camel (approximately 77-81 km).",
      difficulty: "medium",
    },
    {
      id: "fiqh-19",
      question:
        "What is the term for the waiting period a woman must observe after divorce or the death of her husband?",
      options: ["Khula", "Iddah", "Mahr", "Talaq"],
      correctAnswer: "Iddah",
      explanation:
        "Iddah is the waiting period a woman must observe after divorce or the death of her husband before she can remarry. It varies in length depending on the circumstances.",
      difficulty: "easy",
    },
    {
      id: "fiqh-20",
      question: "Which type of water is suitable for purification (wudu and ghusl)?",
      options: ["Mutlaq water only", "Muqayyad water only", "Both Mutlaq and Muqayyad water", "Neither"],
      correctAnswer: "Mutlaq water only",
      explanation:
        "Mutlaq water (pure, natural water that hasn't changed in color, taste, or smell) is suitable for purification. Muqayyad water (water mixed with pure substances changing its nature) is not suitable for purification according to most scholars.",
      difficulty: "advanced",
    },
  ],
}

// Expanded Tafsir Questions
export const expandedTafsirQuestions: QuizCategory = {
  name: "Tafsir",
  description: "Test your knowledge of Quranic interpretation",
  icon: "book",
  questions: [
    {
      id: "tafsir-11",
      question: "Who is considered the 'Father of Tafsir'?",
      options: ["Abdullah ibn Abbas", "Abdullah ibn Masud", "Ubayy ibn Ka'b", "Abu Hurairah"],
      correctAnswer: "Abdullah ibn Abbas",
      explanation:
        "Abdullah ibn Abbas (may Allah be pleased with him), the cousin of Prophet Muhammad (PBUH), is often referred to as the 'Father of Tafsir' due to his extensive knowledge and contributions to Quranic interpretation.",
      difficulty: "medium",
    },
    {
      id: "tafsir-12",
      question: "What is the meaning of 'Asbab al-Nuzul'?",
      options: ["Methods of recitation", "Occasions of revelation", "Abrogated verses", "Linguistic analysis"],
      correctAnswer: "Occasions of revelation",
      explanation:
        "Asbab al-Nuzul refers to the historical contexts and occasions that led to the revelation of specific Quranic verses, which helps in understanding their proper meaning and application.",
      difficulty: "easy",
    },
    {
      id: "tafsir-13",
      question: "Which surah's tafsir explains the story of the People of the Elephant (Ashab al-Fil)?",
      options: ["Surah Al-Fil", "Surah Al-Quraish", "Surah Al-Humazah", "Surah Al-Ma'un"],
      correctAnswer: "Surah Al-Fil",
      explanation:
        "Surah Al-Fil (Chapter 105) describes the story of Abraha and his army who came with elephants to destroy the Ka'bah but were defeated by birds sent by Allah.",
      difficulty: "easy",
    },
    {
      id: "tafsir-14",
      question: "What is 'Tafsir bil-Ma'thur'?",
      options: [
        "Interpretation based on personal opinion",
        "Interpretation based on transmitted reports",
        "Interpretation based on linguistic analysis",
        "Interpretation based on scientific facts",
      ],
      correctAnswer: "Interpretation based on transmitted reports",
      explanation:
        "Tafsir bil-Ma'thur is interpretation of the Quran based on narrations and reports from the Prophet Muhammad (PBUH), his companions, and their successors.",
      difficulty: "medium",
    },
    {
      id: "tafsir-15",
      question: "Which famous tafsir was written by Ibn Kathir?",
      options: ["Tafsir al-Tabari", "Tafsir al-Qurtubi", "Tafsir Ibn Kathir", "Tafsir al-Zamakhshari"],
      correctAnswer: "Tafsir Ibn Kathir",
      explanation:
        "Tafsir Ibn Kathir (Tafsir al-Quran al-Azim) was written by Ismail ibn Kathir, a prominent 14th-century scholar, and is known for its emphasis on interpretation through hadith.",
      difficulty: "easy",
    },
    {
      id: "tafsir-16",
      question: "What is the meaning of 'muhkam' verses in the Quran?",
      options: ["Abrogated verses", "Clear and unambiguous verses", "Ambiguous verses", "Repeated verses"],
      correctAnswer: "Clear and unambiguous verses",
      explanation:
        "Muhkam verses are those that are clear, precise, and unambiguous in their meaning. They form the foundation of the Quran and are contrasted with mutashabihat (ambiguous) verses.",
      difficulty: "medium",
    },
    {
      id: "tafsir-17",
      question: "Which surah's tafsir explains the concept of Allah's Kursi (Throne)?",
      options: ["Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Kursi", "Surah Yasin"],
      correctAnswer: "Surah Al-Baqarah",
      explanation:
        "Ayat al-Kursi (The Verse of the Throne) is found in Surah Al-Baqarah (2:255) and describes Allah's Kursi extending over the heavens and the earth.",
      difficulty: "easy",
    },
    {
      id: "tafsir-18",
      question: "What is 'nasikh' and 'mansukh' in Quranic interpretation?",
      options: [
        "Clear and ambiguous verses",
        "Literal and metaphorical meanings",
        "Abrogating and abrogated verses",
        "General and specific verses",
      ],
      correctAnswer: "Abrogating and abrogated verses",
      explanation:
        "Nasikh refers to verses that abrogate or supersede earlier rulings, while mansukh refers to verses whose rulings have been abrogated or replaced by later revelations.",
      difficulty: "medium",
    },
    {
      id: "tafsir-19",
      question: "Which famous tafsir is known for its linguistic analysis of the Quran?",
      options: ["Tafsir al-Tabari", "Tafsir al-Kashshaf", "Tafsir Ibn Kathir", "Tafsir al-Qurtubi"],
      correctAnswer: "Tafsir al-Kashshaf",
      explanation:
        "Tafsir al-Kashshaf by al-Zamakhshari is renowned for its detailed linguistic and rhetorical analysis of the Quran, focusing on grammar, syntax, and literary devices.",
      difficulty: "advanced",
    },
    {
      id: "tafsir-20",
      question: "What is the meaning of 'Isra'iliyyat' in tafsir literature?",
      options: [
        "Stories about Bani Israel",
        "Narrations from Jewish and Christian sources",
        "Interpretations by Israeli scholars",
        "References to the Night Journey",
      ],
      correctAnswer: "Narrations from Jewish and Christian sources",
      explanation:
        "Isra'iliyyat refers to narrations and stories from Jewish and Christian sources that were incorporated into some tafsir works. Scholars approach these with caution, accepting only what aligns with Islamic teachings.",
      difficulty: "medium",
    },
  ],
}

// Expanded Hadeeth Questions
export const expandedHadeethQuestions: QuizCategory = {
  name: "Hadeeth",
  description: "Test your knowledge of Prophetic traditions",
  icon: "message-square",
  questions: [
    {
      id: "hadeeth-11",
      question: "Which collection of hadith is known as 'The Sound Book'?",
      options: ["Sahih Bukhari", "Sahih Muslim", "Sunan Abu Dawood", "Jami at-Tirmidhi"],
      correctAnswer: "Sahih Bukhari",
      explanation:
        "Sahih Bukhari, compiled by Imam Muhammad al-Bukhari, is known as 'Al-Jami al-Sahih' (The Sound Collection) and is considered the most authentic collection of hadith.",
      difficulty: "easy",
    },
    {
      id: "hadeeth-12",
      question: "How many hadith did Imam Bukhari collect initially before compiling his Sahih?",
      options: ["About 300,000", "About 600,000", "About 900,000", "About 1.2 million"],
      correctAnswer: "About 600,000",
      explanation:
        "Imam Bukhari collected approximately 600,000 hadith and after rigorous authentication, included only about 7,275 hadith (including repeated narrations) in his Sahih collection.",
      difficulty: "medium",
    },
    {
      id: "hadeeth-13",
      question: "Which hadith collection is known as 'The Second Most Authentic Book after the Quran'?",
      options: ["Sahih Bukhari", "Sahih Muslim", "Muwatta Imam Malik", "Sunan Ibn Majah"],
      correctAnswer: "Sahih Bukhari",
      explanation:
        "Sahih Bukhari is often referred to as 'The Second Most Authentic Book after the Quran' due to its rigorous methodology in collecting and verifying authentic hadith.",
      difficulty: "easy",
    },
    {
      id: "hadeeth-14",
      question: "What is a 'mutawatir' hadith?",
      options: [
        "A hadith with a broken chain",
        "A hadith narrated by a single companion",
        "A hadith reported by many narrators at each level",
        "A hadith with conflicting versions",
      ],
      correctAnswer: "A hadith reported by many narrators at each level",
      explanation:
        "A mutawatir hadith is one that has been narrated by such a large number of narrators at each level of the chain that it is impossible for them to have conspired to fabricate it.",
      difficulty: "medium",
    },
    {
      id: "hadeeth-15",
      question: "Which term refers to the chain of narrators in a hadith?",
      options: ["Matn", "Isnad", "Rawi", "Muhaddith"],
      correctAnswer: "Isnad",
      explanation:
        "Isnad refers to the chain of narrators through which a hadith has been transmitted. The matn is the actual text or content of the hadith.",
      difficulty: "easy",
    },
    {
      id: "hadeeth-16",
      question: "What is a 'sahih' hadith?",
      options: ["A fabricated hadith", "A weak hadith", "An authentic hadith", "An abrogated hadith"],
      correctAnswer: "An authentic hadith",
      explanation:
        "A sahih (authentic) hadith meets all criteria of authenticity: continuous chain of reliable narrators, no irregularities, and no hidden defects.",
      difficulty: "easy",
    },
    {
      id: "hadeeth-17",
      question: "Who is known as 'The Commander of the Faithful in Hadith'?",
      options: ["Imam Bukhari", "Imam Muslim", "Imam Malik", "Imam Shafi'i"],
      correctAnswer: "Imam Bukhari",
      explanation:
        "Imam Muhammad al-Bukhari was given the title 'Amir al-Mu'minin fil-Hadith' (The Commander of the Faithful in Hadith) due to his exceptional expertise in hadith sciences.",
      difficulty: "medium",
    },
    {
      id: "hadeeth-18",
      question: "What is a 'qudsi' hadith?",
      options: [
        "A hadith about Jerusalem",
        "A hadith where Allah speaks in first person",
        "A hadith with a complete chain",
        "A hadith about the Day of Judgment",
      ],
      correctAnswer: "A hadith where Allah speaks in first person",
      explanation:
        "A hadith qudsi (sacred hadith) is one in which the Prophet (PBUH) narrates a message from Allah in the first person, but it is not part of the Quran.",
      difficulty: "medium",
    },
    {
      id: "hadeeth-19",
      question: "Which of the following is NOT one of the six major hadith collections (Kutub al-Sittah)?",
      options: ["Sunan Abu Dawood", "Sahih Ibn Hibban", "Jami at-Tirmidhi", "Sunan an-Nasa'i"],
      correctAnswer: "Sahih Ibn Hibban",
      explanation:
        "The six major hadith collections (Kutub al-Sittah) are: Sahih Bukhari, Sahih Muslim, Sunan Abu Dawood, Jami at-Tirmidhi, Sunan an-Nasa'i, and Sunan Ibn Majah. Sahih Ibn Hibban is not among them.",
      difficulty: "medium",
    },
    {
      id: "hadeeth-20",
      question: "What is the term for a hadith that is attributed directly to the Prophet Muhammad (PBUH)?",
      options: ["Marfu", "Mawquf", "Maqtu", "Mursal"],
      correctAnswer: "Marfu",
      explanation:
        "A marfu hadith is one that is attributed directly to the Prophet Muhammad (PBUH), either through his statements, actions, or tacit approvals.",
      difficulty: "advanced",
    },
  ],
}

// Expanded Aqeedah Questions
export const expandedAqeedahQuestions: QuizCategory = {
  name: "Aqeedah",
  description: "Test your knowledge of Islamic beliefs and creed",
  icon: "heart",
  questions: [
    {
      id: "aqeedah-11",
      question: "What is the meaning of 'Tawheed ar-Rububiyyah'?",
      options: [
        "Oneness of Allah's Lordship",
        "Oneness of Allah's Names and Attributes",
        "Oneness of Worship",
        "Oneness of Allah's Law",
      ],
      correctAnswer: "Oneness of Allah's Lordship",
      explanation:
        "Tawheed ar-Rububiyyah refers to the belief in the Oneness of Allah's Lordship - that Allah alone is the Creator, Sustainer, and Controller of the universe.",
      difficulty: "medium",
    },
    {
      id: "aqeedah-12",
      question: "What is the Islamic belief regarding the Quran?",
      options: [
        "It is created",
        "It is the uncreated speech of Allah",
        "It was written by Prophet Muhammad",
        "It evolved over time",
      ],
      correctAnswer: "It is the uncreated speech of Allah",
      explanation:
        "The orthodox Islamic belief is that the Quran is the uncreated, eternal speech of Allah, revealed to Prophet Muhammad (PBUH) through Angel Jibreel.",
      difficulty: "medium",
    },
    {
      id: "aqeedah-13",
      question: "What is the meaning of 'Al-Qadar'?",
      options: ["Divine Will", "Divine Power", "Divine Decree", "Divine Knowledge"],
      correctAnswer: "Divine Decree",
      explanation:
        "Al-Qadar refers to Allah's Divine Decree and Predestination - the belief that Allah has decreed everything that happens in the universe according to His prior knowledge and wisdom.",
      difficulty: "medium",
    },
    {
      id: "aqeedah-14",
      question: "Which of the following is NOT one of the six articles of faith in Islam?",
      options: [
        "Belief in Allah",
        "Belief in the Angels",
        "Belief in the Five Pillars",
        "Belief in the Day of Judgment",
      ],
      correctAnswer: "Belief in the Five Pillars",
      explanation:
        "The six articles of faith are: Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree. The Five Pillars are acts of worship, not articles of faith.",
      difficulty: "easy",
    },
    {
      id: "aqeedah-15",
      question: "What is 'Shirk' in Islamic theology?",
      options: ["Disbelief in Allah", "Associating partners with Allah", "Denying the prophets", "Rejecting the Quran"],
      correctAnswer: "Associating partners with Allah",
      explanation:
        "Shirk is the sin of associating partners with Allah in His divinity, worship, or attributes. It is considered the gravest sin in Islam.",
      difficulty: "easy",
    },
    {
      id: "aqeedah-16",
      question: "What is the Islamic belief about Jesus (Isa) peace be upon him?",
      options: [
        "He is the son of God",
        "He is God incarnate",
        "He is a prophet and messenger of Allah",
        "He was not a real historical figure",
      ],
      correctAnswer: "He is a prophet and messenger of Allah",
      explanation:
        "In Islamic belief, Jesus (Isa) peace be upon him is revered as one of the mightiest messengers of Allah, born miraculously to the Virgin Mary, but he is not divine or the son of God.",
      difficulty: "easy",
    },
    {
      id: "aqeedah-17",
      question: "What is 'Tawheed al-Asma wa al-Sifat'?",
      options: [
        "Oneness of Allah's Lordship",
        "Oneness of Worship",
        "Oneness of Allah's Names and Attributes",
        "Oneness of Allah's Law",
      ],
      correctAnswer: "Oneness of Allah's Names and Attributes",
      explanation:
        "Tawheed al-Asma wa al-Sifat refers to the belief in the Oneness and uniqueness of Allah's Names and Attributes as mentioned in the Quran and authentic Sunnah, without distortion, denial, or anthropomorphism.",
      difficulty: "medium",
    },
    {
      id: "aqeedah-18",
      question: "What is the Islamic belief regarding the nature of angels?",
      options: [
        "They are physical beings with wings",
        "They are created from light",
        "They are metaphorical concepts",
        "They are evolved spiritual beings",
      ],
      correctAnswer: "They are created from light",
      explanation:
        "According to Islamic belief, angels are created from light (nur), do not possess free will, and are completely obedient to Allah's commands.",
      difficulty: "easy",
    },
    {
      id: "aqeedah-19",
      question: "What is the meaning of 'Kufr' in Islamic theology?",
      options: ["Minor sin", "Major sin", "Disbelief or rejection of faith", "Innovation in religion"],
      correctAnswer: "Disbelief or rejection of faith",
      explanation:
        "Kufr refers to disbelief or rejection of the fundamental aspects of Islamic faith, such as denying the existence of Allah, the prophethood of Muhammad (PBUH), or the authenticity of the Quran.",
      difficulty: "easy",
    },
    {
      id: "aqeedah-20",
      question: "What is the Islamic belief about the creation of humans?",
      options: ["Evolved from earlier species", "Created by chance", "Created directly by Allah", "Self-created"],
      correctAnswer: "Created directly by Allah",
      explanation:
        "Islamic belief holds that humans were created directly by Allah, with Adam as the first human being, created from clay/earth, and Eve created from Adam.",
      difficulty: "easy",
    },
  ],
}

// Removed on 14 July 2025 three appendicular History questions which were here
