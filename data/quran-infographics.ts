// This file contains infographic data for Quran-related quiz questions

export const quranInfographics = {
  // Structure of the Quran
  quranStructure: {
    type: "chart" as const,
    data: {
      title: "Structure of the Quran",
      labels: ["Surahs", "Juz", "Hizb", "Ruku", "Ayat"],
      values: [114, 30, 60, 556, 6236],
    },
  },

  // Timeline of Quran Revelation
  revelationTimeline: {
    type: "timeline" as const,
    data: [
      {
        year: "610 CE",
        title: "First Revelation",
        description: "The first verses of Surah Al-Alaq were revealed to Prophet Muhammad (PBUH) in the Cave of Hira.",
      },
      {
        year: "610-622 CE",
        title: "Meccan Period",
        description: "Revelations focused on faith (tawhid), the Day of Judgment, and moral teachings.",
      },
      {
        year: "622-632 CE",
        title: "Medinan Period",
        description: "Revelations focused on social laws, governance, and detailed guidance for the Muslim community.",
      },
      {
        year: "632 CE",
        title: "Completion of Revelation",
        description: "The final verses were revealed shortly before the Prophet's death, completing the Quran.",
      },
      {
        year: "632-634 CE",
        title: "Abu Bakr's Compilation",
        description: "First compilation of the Quran into a single manuscript after the Battle of Yamama.",
      },
      {
        year: "644-656 CE",
        title: "Uthman's Standardization",
        description: "Standardized version was compiled and distributed to different regions of the Islamic empire.",
      },
    ],
  },

  // Comparison of Meccan vs Medinan Surahs
  meccanVsMedinan: {
    type: "comparison" as const,
    data: [
      {
        concept: "Meccan Surahs",
        description: "Generally shorter with brief, powerful verses. Focus on faith, monotheism, and the hereafter.",
        category: "Characteristics",
      },
      {
        concept: "Medinan Surahs",
        description: "Generally longer with detailed verses. Focus on social laws, governance, and community affairs.",
        category: "Characteristics",
      },
      {
        concept: "Meccan Surahs",
        description: "86 surahs (approximately 19 years of revelation)",
        category: "Number",
      },
      {
        concept: "Medinan Surahs",
        description: "28 surahs (approximately 10 years of revelation)",
        category: "Number",
      },
      {
        concept: "Meccan Surahs",
        description: "Often begin with oath-taking (e.g., 'By the sun...') and address people as 'O mankind'",
        category: "Style",
      },
      {
        concept: "Medinan Surahs",
        description: "Often begin with 'Alif Lam Mim' or similar letters and address people as 'O believers'",
        category: "Style",
      },
    ],
  },

  // Process of Quran Preservation
  quranPreservation: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Memorization",
        description:
          "The Prophet (PBUH) and companions memorized the Quran as it was revealed, establishing the tradition of huffaz (memorizers).",
      },
      {
        step: 2,
        title: "Written Records",
        description:
          "Scribes like Zaid ibn Thabit wrote down revelations on various materials including parchment, leather, and palm leaves.",
      },
      {
        step: 3,
        title: "First Compilation",
        description:
          "Abu Bakr ordered the first complete compilation into a single manuscript (mushaf) after many huffaz died in the Battle of Yamama.",
      },
      {
        step: 4,
        title: "Standardization",
        description:
          "Uthman ibn Affan created a standard version and sent copies to major Islamic centers, eliminating dialectal variations.",
      },
      {
        step: 5,
        title: "Development of Diacritical Marks",
        description:
          "During the Umayyad period, dots and diacritical marks were added to prevent misreading of the text.",
      },
      {
        step: 6,
        title: "Modern Preservation",
        description:
          "Combination of memorization, written copies, and digital preservation ensures the Quran remains unchanged.",
      },
    ],
  },

  // Map of Important Quranic Locations
  quranLocations: {
    type: "map" as const,
    data: [
      {
        name: "Cave of Hira (Mecca)",
        description: "Where the first revelation of the Quran was received by Prophet Muhammad (PBUH).",
        coordinates: [21.4558, 39.8579],
      },
      {
        name: "Masjid al-Haram (Mecca)",
        description: "The Sacred Mosque containing the Kaaba, mentioned in the Quran as the first house of worship.",
        coordinates: [21.4225, 39.8262],
      },
      {
        name: "Masjid al-Nabawi (Medina)",
        description: "The Prophet's Mosque, where many Quranic verses were revealed and taught.",
        coordinates: [24.4672, 39.6112],
      },
      {
        name: "Mount Sinai (Egypt)",
        description: "Where Allah spoke to Prophet Musa (Moses), mentioned in several surahs.",
        coordinates: [28.5423, 33.9756],
      },
      {
        name: "Masjid al-Aqsa (Jerusalem)",
        description: "The Farthest Mosque, mentioned in Surah Al-Isra regarding the Night Journey.",
        coordinates: [31.7767, 35.2356],
      },
    ],
  },

  // Longest and Shortest Surahs
  surahLengths: {
    type: "chart" as const,
    data: {
      title: "Longest and Shortest Surahs (by verses)",
      labels: ["Al-Baqarah", "An-Nisa", "Al-Imran", "Al-Kawthar", "Al-Asr", "An-Nasr"],
      values: [286, 176, 200, 3, 3, 3],
    },
  },

  // Ibn Kathir's Tafsir of Al-Kawthar
  ibnKathirAlFatiha: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Hadith of Muslim, Abu Dawud and An-Nasa'i",
        description:
          'Muslim, Abu Dawud and An-Nasa\'i, all recorded from Anas that he said,"While we were with the Messenger of Allah in the Masjid, he dozed off into a slumber. Then he lifted his head smiling. We said, O Messenger of Allah! What has caused you to laugh\' He said, Verily, a Surah was just revealed to me. Then he recited, Verily, We have granted you Al-Kawthar. Therefore turn in prayer to your Lord and sacrifice. For he who hates you, he will be cut off. Then he said, Do you all know what is Al-Kawthar? We said, Allah and His Messenger know best.\' He said,Verily, it is a river that my Lord, the Mighty and Majestic, has promised me and it has abundant goodness. It is a pond where my Ummah will be brought to on the Day of Judgement. Its containers are as numerous as the stars in the sky.Then a servant of Allah from among them will be (prevented from it) and I will say: "O Lord! Verily, he is from my Ummah (followers)." Then He (Allah) will say:"Verily, you do not know what he introduced (or innovated) after you."This is the wording of Muslim.',
      },
      {
        step: 2,
        title: "Hadith of Imam Ahmad",
        description:
          'Ahmad recorded this Hadith from Muhammad bin Fudayl, who reported from Al-Mukhtar bin Fulful, who reported it from Anas bin Malik.Imam Ahmad also recorded from Anas that the Messenger of Allah said, "I entered Paradise and I came to a river whose banks had tents made of pearls. So I thrust my hand into its flowing water and found that it was the strongest (smell) of musk. So I asked, "O Jibril! What is this" He replied, "This is Al-Kawthar which Allah, the Mighty and Majestic has given you."',
      },
      {
        step: 3,
        title: "Hadith from Al-Bukhari",
        description:
          'Al-Bukhari recorded this in his Sahih, and so did Muslim, on the authority of Anas bin Malik. In their version Anas said, "When the Prophet was taken up to the heaven, he said,I came to a river whose banks had domes of hollowed pearl. I said:"O Jibril! What is this?"  He replied: "This is Al-Kawthar." This is the wording of Al-Bukhari.',
      },
    ],
  },

  // Comparison of Al-Fatiha and Lord's Prayer
  fatihaAndLordsPrayer: {
    type: "comparison" as const,
    data: [
      {
        concept: "Al-Fatiha (Opening)",
        description: "Begins with praise: 'All praise is due to Allah, Lord of the worlds'",
        category: "Beginning",
      },
      {
        concept: "Lord's Prayer",
        description: "Begins with acknowledgment: 'Our Father, who art in heaven, hallowed be thy name'",
        category: "Beginning",
      },
      {
        concept: "Al-Fatiha",
        description: "Emphasizes Allah's mercy: 'The Most Gracious, the Most Merciful'",
        category: "Divine Attributes",
      },
      {
        concept: "Lord's Prayer",
        description: "Emphasizes God's holiness: 'Hallowed be thy name'",
        category: "Divine Attributes",
      },
      {
        concept: "Al-Fatiha",
        description: "Requests guidance: 'Guide us to the straight path'",
        category: "Central Request",
      },
      {
        concept: "Lord's Prayer",
        description:
          "Requests provision and forgiveness: 'Give us this day our daily bread and forgive us our trespasses'",
        category: "Central Request",
      },
      {
        concept: "Al-Fatiha",
        description:
          "Recited in every unit (rak'ah) of the five daily prayers, making it the most frequently recited surah",
        category: "Usage",
      },
      {
        concept: "Lord's Prayer",
        description: "Central prayer taught by Jesus to his disciples, recited in various Christian services",
        category: "Usage",
      },
    ],
  },

  // Al-Moududi's Tafsir of Al-Fatiha
  moududiFatiha: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Introduction to Al-Fatiha",
        description:
          "Moududi explains that Al-Fatiha serves as the perfect opening to the Quran, containing the essence of the entire Quranic message. It is called 'The Opening' because it opens the Book and also because it is the first surah recited in every prayer.",
      },
      {
        step: 2,
        title: "Bismillah",
        description:
          "Moududi emphasizes that beginning with Allah's name signifies that the reciter is seeking Allah's help and blessing. The attributes 'Al-Rahman' and 'Al-Raheem' highlight Allah's all-encompassing mercy and special mercy for believers. While recited before Al-Fatiha, its status as a numbered verse varies among Islamic traditions.",
      },
      {
        step: 3,
        title: "Praise and Lordship (Verse 1)",
        description:
          "In 'Alhamdulillahi Rabbil Alameen', Moududi explains that all praise belongs exclusively to Allah who is the sustainer, nourisher, and developer of all creation. This establishes the fundamental relationship between Creator and creation.",
      },
      {
        step: 4,
        title: "Divine Mercy (Verse 2)",
        description:
          "Moududi notes that repeating 'Al-Rahman Al-Raheem' after mentioning Allah's lordship emphasizes that His authority is not oppressive but based on mercy and compassion, encouraging believers to turn to Him with hope.",
      },
      {
        step: 5,
        title: "Day of Judgment (Verse 3)",
        description:
          "In 'Maliki Yawmid-Deen', Moududi highlights that Allah's sovereignty over the Day of Judgment reminds believers of accountability, encouraging righteous conduct and establishing the concept of divine justice.",
      },
      {
        step: 6,
        title: "Worship and Assistance (Verse 4)",
        description:
          "Moududi explains that 'Iyyaka na'budu wa iyyaka nasta'een' (You alone we worship and You alone we ask for help) establishes the core of Islamic monotheism - exclusive worship and reliance on Allah alone.",
      },
      {
        step: 7,
        title: "Prayer for Guidance (Verses 5-7)",
        description:
          "In the final verses, Moududi elaborates that asking for guidance to the straight path is the most important prayer, as it encompasses all aspects of life. The straight path is defined as the path of those who have received Allah's favor, not those who have earned His anger or gone astray.",
      },
      {
        step: 8,
        title: "Significance in Prayer",
        description:
          "Moududi emphasizes that Al-Fatiha's recitation in every rak'ah of prayer is essential because it represents the covenant between Allah and His servants - the servant praises Allah, acknowledges His sovereignty, and asks for guidance, while Allah promises to respond to this sincere request.",
      },
    ],
  },

  // Al-Fatiha as a Dialogue (Hadith from Imam Muslim)
  fatihaDialogue: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Introduction to the Hadith",
        description:
          "Imam Muslim in his Sahih (Book of Prayer, Hadith 395) narrates from Abu Hurairah (رضي الله عنه) that the Prophet (ﷺ) said: \"Allah the Exalted said: 'I have divided the prayer (Salah, referring to Surah Al-Fatiha) between Myself and My servant into two halves, and My servant shall have what he has asked for.'\"",
      },
      {
        step: 2,
        title: "First Part: Verses 1-3 (Praise of Allah)",
        description:
          'When the servant recites: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ" (All praise is due to Allah, Lord of the worlds), "الرَّحْمَٰنِ الرَّحِيمِ" (The Most Gracious, the Most Merciful), "مَالِكِ يَوْمِ الدِّينِ" (Master of the Day of Judgment), Allah says: "My servant has praised Me."',
      },
      {
        step: 3,
        title: "Middle Part: Verse 4 (Worship & Help)",
        description:
          'When the servant recites: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ" (You alone we worship, and You alone we ask for help), Allah says: "This is between Me and My servant, and My servant shall have what he has asked for."',
      },
      {
        step: 4,
        title: "Final Part: Verses 5-7 (Guidance)",
        description:
          'When the servant recites: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ" (Guide us to the straight path), "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ" (The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger nor of those who are astray), Allah says: "This is for My servant, and My servant shall have what he has asked for."',
      },
      {
        step: 5,
        title: "The Seven Verses Structure",
        description:
          "This hadith confirms that Al-Fatiha consists of seven verses and illustrates how they are divided: the first three verses are praise of Allah, the middle verse establishes the relationship between the servant and Allah, and the final three verses are the servant's supplication for guidance.",
      },
      {
        step: 6,
        title: "Spiritual Significance",
        description:
          "This hadith reveals that reciting Al-Fatiha is not merely reading words, but engaging in a direct dialogue with Allah. Each part of the surah receives a divine response, making it a profound spiritual conversation between the worshipper and the Creator.",
      },
      {
        step: 7,
        title: "Importance in Prayer",
        description:
          'The Prophet (ﷺ) said: "There is no prayer for the one who does not recite the Opening of the Book (Al-Fatiha)." This hadith explains why - because Al-Fatiha establishes the essential dialogue between the worshipper and Allah that forms the foundation of prayer.',
      },
    ],
  },

  // The Meaning and Virtues of Al-Hamd in Al-Fatiha
  alHamdMeaning: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Meaning of Al-Hamd",
        description:
          "Abu Jafar bin Jarir said: \"The meaning of 'Al-Hamdu Lillah' is: all thanks are due purely to Allah alone, not any of the objects that are being worshipped instead of Him, nor any of His creation. These thanks are due to Allah's innumerable favors and bounties that only He knows the amount of.\"",
      },
      {
        step: 2,
        title: "Difference Between Praise and Thanks",
        description:
          "Hamd (praise) is more general than Shukr (thanks). Hamd is a statement of praise for one's characteristics or for what one has done, while thanks are given specifically for what was done, not merely for characteristics.",
      },
      {
        step: 3,
        title: "Statements of the Salaf",
        description:
          "When Umar asked Ali about the meaning of 'Al-Hamdu Lillah', Ali replied: \"It is a statement that Allah liked for Himself, was pleased with for Himself, and He likes that it be repeated.\" Ibn Abbas said: \"Al-Hamdu Lillah is the statement of appreciation. When the servant says Al-Hamdu Lillah, Allah says, 'My servant has praised Me.'\"",
      },
      {
        step: 4,
        title: "Allah Loves Al-Hamd",
        description:
          'The Prophet (ﷺ) said to Al-Aswad bin Sari who wanted to recite words of praise: "Verily, your Lord likes Al-Hamd." This confirms that praising Allah is beloved to Him.',
      },
      {
        step: 5,
        title: "Best Dhikr and Supplication",
        description:
          'The Prophet (ﷺ) said: "The best Dhikr (remembering Allah) is La ilaha illallah and the best supplication is Al-Hamdu Lillah." This elevates the status of praising Allah above all other forms of supplication.',
      },
      {
        step: 6,
        title: "Blessing of Saying Al-Hamd",
        description:
          "The Prophet (ﷺ) said: \"No servant is blessed by Allah and says, 'Al-Hamdu Lillah', except that what he was given is better than that which he has himself acquired.\" This shows that the act of praising Allah for His blessings increases their value.",
      },
      {
        step: 7,
        title: "Al-Fatiha as the Greatest Surah",
        description:
          "The Prophet (ﷺ) told Abu Sa'id bin Al-Mu'alla: \"I will teach you a Surah which is the greatest Surah in the Qur'an... Al-Hamdu lillahi Rabbil-'alamin [Surat Al-Fatihah] which is As-Sab' Al-Mathani (the seven repeatedly recited Verses) and the Grand Qur'an which has been given to me.\"",
      },
      {
        step: 8,
        title: "Meaning of 'Rabb' (Lord)",
        description:
          "The term 'Rabb' in 'Rabbil-'alamin' has no proper equivalent in English. It means the One and Only Lord for all the universe - its Creator, Owner, Organizer, Provider, Master, Planner, Sustainer, Cherisher, and Giver of security.",
      },
    ],
  },

  // Names of the Quran
  quranNames: {
    type: "comparison" as const,
    data: [
      {
        concept: "Al-Quran",
        description: "The most common name, referring to the Quran's function as a book to be read aloud or recited",
        category: "Primary Name",
      },
      {
        concept: "Al-Furqan",
        description: "The Criterion for judging right from wrong, distinguishing between truth and falsehood",
        category: "Functional Name",
      },
      {
        concept: "Al-Kitab",
        description: "The Book, referring to the Quran's structure as a written collection of revelations",
        category: "Descriptive Name",
      },
      {
        concept: "Al-Dhikr",
        description: "The Reminder, emphasizing the Quran's purpose to remind people of their responsibilities",
        category: "Functional Name",
      },
      {
        concept: "Al-Tanzeel",
        description: "The Revelation, referring to the Quran's origin as being revealed from Allah through Gabriel",
        category: "Origin Name",
      },
      {
        concept: "Al-Huda",
        description: "The Guidance, highlighting the Quran's function as a guide for Muslims in all aspects of life",
        category: "Functional Name",
      },
      {
        concept: "Al-Nur",
        description: "The Light, emphasizing the Quran's ability to illuminate the path to understanding and faith",
        category: "Metaphorical Name",
      },
      {
        concept: "Al-Shifa",
        description: "The Healing, pointing to the Quran's potential to offer spiritual and physical healing",
        category: "Beneficial Name",
      },
    ],
  },

  // Meaning of the Word Quran
  quranMeaning: {
    type: "process" as const,
    data: [
      {
        step: 1,
        title: "Etymology",
        description:
          "The word 'Quran' comes from the Arabic root 'qara'a' (قرأ) which means 'to read' or 'to recite'. This reflects its primary nature as a book meant to be recited aloud.",
      },
      {
        step: 2,
        title: "Divine Naming",
        description:
          "Allah Himself named the Quran. In Surah Al-Qiyamah (75:17-18), Allah says: 'Indeed, upon Us is its collection and its recitation. So when We recite it, follow its recitation.'",
      },
      {
        step: 3,
        title: "Multiple Names",
        description:
          "The Quran has many names given by Allah, each reflecting its different attributes and functions. These include Al-Furqan (The Criterion), Al-Dhikr (The Reminder), and Al-Kitab (The Book).",
      },
      {
        step: 4,
        title: "Al-Quran as Primary Name",
        description:
          "While it has many names, 'Al-Quran' is the most commonly used name throughout the text itself and in Islamic tradition, emphasizing its nature as a recited revelation.",
      },
      {
        step: 5,
        title: "Scholarly Definition",
        description:
          "Scholars define the Quran as 'the speech of Allah, sent down upon the last Prophet Muhammad, through the Angel Gabriel, in its precise meaning and precise wording, transmitted to us by numerous persons, both verbally and in writing.'",
      },
      {
        step: 6,
        title: "Significance of Recitation",
        description:
          "The name 'Quran' emphasizes the oral nature of its transmission and the importance of recitation in worship. The Prophet Muhammad ﷺ received the revelation orally and taught it orally to his companions.",
      },
      {
        step: 7,
        title: "Authentic References",
        description:
          "According to Islamic scholars, the name 'Quran' was given by Allah Himself, as evidenced in multiple verses where Allah refers to the revelation as 'Quran'. This is documented in authoritative sources like IslamQA.",
      },
    ],
  },
}

// Helper function to get infographic data for a specific question
export function getQuranInfographic(questionId: string) {
  // Map for easy questions
  const easyInfographicMap: Record<string, any> = {
    // Question: What is the first Surah (chapter) of the Quran?
    "quran-1": {
      type: "process",
      data: quranInfographics.alHamdMeaning.data,
      title: "The Meaning and Virtues of Al-Hamd in Surah Al-Fatiha",
    },
    // Question: How many Surahs (chapters) are there in the Quran?
    "quran-2": {
      type: "chart",
      data: quranInfographics.quranStructure.data,
      title: "Structure of the Quran",
    },
    // Question: Which is the longest Surah in the Quran?
    "quran-3": {
      type: "chart",
      data: quranInfographics.surahLengths.data,
      title: "Longest and Shortest Surahs in the Quran",
    },
    // Question: Which Surah is recited in every raka'ah of the prayer?
    "quran-4": {
      type: "process",
      data: [
        {
          step: 1,
          title: "Hadith of Al-Bukhari",
          description:
            'Abu Said ibn al-Mualla reported: I was praying in the mosque when the Messenger of Allah, peace and blessings be upon him, called out to me but I did not respond. I said later, "O Messenger of Allah, I was praying." The Prophet said, "Did not Allah say: Respond to Allah and the Messenger when he calls you?" (8:24) Then, the Prophet said, "Shall I not teach you the greatest chapter in the Quran before you leave the mosque?" The Prophet took me by the hand and when he intended to leave, I said to him, "Did you not say that you would teach me the greatest chapter in the Quran?" The Prophet said, "All praise is due to Allah, the Lord of the worlds (1:1), which are the seven oft-repeated verses and the great Quran given to me."Source: Ṣaḥīḥ al-Bukhārī 5006',
        },
        {
          step: 2,
          title: "Three Fundamentals",
          description:
            "Sūrah al-Fātiḥah was revealed in Makkah. In keeping with the other Makkan sūrahs it focuses on the three fundamental principles: 1. Establishing the Oneness of Allah (ʿazza wa jall).2. Establishing Prophethood.3. Belief in the Hereafter.",
        },
        {
          step: 3,
          title: "Virtues of Surah Al-Fatiha",
          description:
            'Surat Al-Fatihah is one of the pillars or essential parts of the prayer, and no prayer is valid without it. Al-Bukhari (756) and Muslim (394) narrated from `Ubadah ibn As-Samit (may Allah be pleased with him) that the Messenger of Allah (blessings and peace of Allah be upon him) said: "There is no prayer for the one who does not recite the Opening of the Book (i.e., Surat Al-Fatihah)."',
        },
      ],
      title: "Surah Al-Fatihah recited in every Prayer",
    },
    // Question: What is the meaning of the word 'Quran'?
    "quran-meaning": {
      type: "process",
      data: quranInfographics.quranMeaning.data,
      title: "The Meaning of the Word 'Quran'",
    },
    // Question: What are the different names of the Quran?
    "quran-names": {
      type: "comparison",
      data: quranInfographics.quranNames.data,
      title: "The Various Names of the Quran",
    },
    // Question: How many verses (ayat) are there in Surah Al-Fatiha?
    "quran-7": {
      type: "process",
      data: quranInfographics.fatihaDialogue.data,
      title: "The Seven Verses of Al-Fatiha: A Divine Dialogue",
    },
    "quran-5": {
      type: "process",
      data: [
        {
          step: 1,
          title: "Position in Quran",
          description: "Surah Yasin is the 36th chapter of the Quran with 83 verses.",
        },
        {
          step: 2,
          title: "Special Status",
          description: "Known as 'The Heart of the Quran' (Qalb al-Quran) due to its central importance.",
        },
        {
          step: 3,
          title: "Main Themes",
          description: "Focuses on the Oneness of Allah, prophethood, resurrection, and the hereafter.",
        },
        {
          step: 4,
          title: "Prophet's Recommendation",
          description: "Prophet Muhammad (PBUH) encouraged its recitation, especially for the dying and deceased.",
        },
        {
          step: 5,
          title: "Benefits",
          description: "Recitation is said to bring rewards equivalent to reciting the entire Quran 10 times.",
        },
      ],
      title: "Surah Yasin: The Heart of the Quran",
    },
    "quran-6": {
      type: "comparison",
      data: [
        {
          concept: "Bismillah in Surahs",
          description: "113 out of 114 surahs begin with 'Bismillah ar-Rahman ar-Raheem'",
          category: "General Rule",
        },
        {
          concept: "Surah Al-Tawbah",
          description: "The only surah that does not begin with Bismillah",
          category: "Exception",
        },
        {
          concept: "Reason for Exception",
          description:
            "Scholars suggest it's because this surah deals with war and severing relations with polytheists",
          category: "Explanation",
        },
        {
          concept: "Surah Al-Naml",
          description: "Contains Bismillah twice - once at the beginning and once in verse 30",
          category: "Special Case",
        },
      ],
      title: "Bismillah in the Quran",
    },
  }

  // Map for advanced questions
  const advancedInfographicMap: Record<string, any> = {
    "quran-11": {
      type: "timeline",
      data: [
        {
          year: "Period",
          title: "The People of the Cave",
          description:
            "Young believers who fled persecution and took refuge in a cave, where Allah caused them to sleep for many years.",
        },
        {
          year: "Duration",
          title: "309 Years",
          description: "The Quran mentions they remained in the cave for 309 years (solar calendar).",
        },
        {
          year: "Awakening",
          title: "Divine Sign",
          description: "Their awakening after centuries served as a sign of Allah's power over death and resurrection.",
        },
        {
          year: "Lesson",
          title: "Faith and Perseverance",
          description:
            "Their story teaches about maintaining faith in the face of persecution and Allah's protection of believers.",
        },
      ],
      title: "Story of the People of the Cave (Ashab al-Kahf)",
    },
    "quran-10": {
      type: "comparison",
      data: [
        {
          concept: "Makki Surahs",
          description: "Revealed before the Prophet's migration to Madinah (610-622 CE)",
          category: "Period",
        },
        {
          concept: "Madani Surahs",
          description: "Revealed after the Prophet's migration to Madinah (622-632 CE)",
          category: "Period",
        },
        {
          concept: "Makki Surahs",
          description: "Focus on faith, monotheism, Day of Judgment, and moral teachings",
          category: "Content",
        },
        {
          concept: "Madani Surahs",
          description: "Focus on social legislation, governance, and community affairs",
          category: "Content",
        },
        {
          concept: "Makki Surahs",
          description: "Generally shorter with powerful, concise verses",
          category: "Style",
        },
        {
          concept: "Madani Surahs",
          description: "Generally longer with detailed explanations",
          category: "Style",
        },
      ],
      title: "Makki and Madani Surahs",
    },
    "quran-9": {
      type: "process",
      data: [
        {
          step: 1,
          title: "Hadith of Al-Bukhari",
          description:
            'Abu Said ibn al-Mualla reported: I was praying in the mosque when the Messenger of Allah, peace and blessings be upon him, called out to me but I did not respond. I said later, "O Messenger of Allah, I was praying." The Prophet said, "Did not Allah say: Respond to Allah and the Messenger when he calls you?" (8:24) Then, the Prophet said, "Shall I not teach you the greatest chapter in the Quran before you leave the mosque?" The Prophet took me by the hand and when he intended to leave, I said to him, "Did you not say that you would teach me the greatest chapter in the Quran?" The Prophet said, "All praise is due to Allah, the Lord of the worlds (1:1), which are the seven oft-repeated verses and the great Quran given to me."Source: Ṣaḥīḥ al-Bukhārī 5006',
        },
        {
          step: 2,
          title: "Three Fundamentals",
          description:
            "Sūrah al-Fātiḥah was revealed in Makkah. In keeping with the other Makkan sūrahs it focuses on the three fundamental principles: 1. Establishing the Oneness of Allah (ʿazza wa jall).2. Establishing Prophethood.3. Belief in the Hereafter.",
        },
        {
          step: 3,
          title: "Virtues of Surah Al-Fatiha",
          description:
            'Surat Al-Fatihah is one of the pillars or essential parts of the prayer, and no prayer is valid without it. Al-Bukhari (756) and Muslim (394) narrated from `Ubadah ibn As-Samit (may Allah be pleased with him) that the Messenger of Allah (blessings and peace of Allah be upon him) said: "There is no prayer for the one who does not recite the Opening of the Book (i.e., Surat Al-Fatihah)."',
        },
      ],
      title: "Surah Al-Fatihah recited in every Prayer",
    },
  }

  // Check both maps for the question ID
  return easyInfographicMap[questionId] || advancedInfographicMap[questionId] || null
}
