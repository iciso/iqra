import type { QuizCategory } from "@/types/quiz"

const dawahCategory: QuizCategory = {
  id: "dawah",
  title: "Dawah",
  description: "Islamic Outreach and Invitation",
  icon: "message-circle",
  levels: {
    easy: [
      {
        question: "What does the term 'Dawah' mean?",
        options: ["Prayer", "Charity", "Invitation or Call", "Pilgrimage"],
        correctAnswer: "Invitation or Call",
        explanation:
          "Dawah literally means 'invitation' or 'call' in Arabic. In Islamic context, it refers to inviting people to understand and embrace Islam.",
      },
        {
    question: "Which prophet is mentioned in the Quran as calling his father to Islam in a gentle manner?",
    options: [
      "Prophet Musa (AS)",
      "Prophet Ibrahim (AS)",
      "Prophet Nuh (AS)",
      "Prophet Yusuf (AS)"
    ],
    correctAnswer: "Prophet Ibrahim (AS)",
    explanation: "In Surah Maryam (19:41-48), Prophet Ibrahim (AS) gently calls his father to worship Allah alone, saying 'O my father, why do you worship what can neither hear nor see nor benefit you at all?' This shows the importance of gentleness in dawah."
  },
  {
    question: "What was the first word of revelation to Prophet Muhammad (PBUH)?",
    options: [
      "Pray",
      "Read",
      "Worship",
      "Proclaim"
    ],
    correctAnswer: "Read",
    explanation: "The first revelation in Surah Al-Alaq (96:1) began with 'Read (or Proclaim) in the name of your Lord who created.' This emphasizes the importance of knowledge in Islamic dawah."
  },
  {
    question: "Which companion was known as 'The First Male Muslim'?",
    options: [
      "Abu Bakr (RA)",
      "Umar (RA)",
      "Ali (RA)",
      "Uthman (RA)"
    ],
    correctAnswer: "Abu Bakr (RA)",
    explanation: "Abu Bakr (RA) was the first adult male to accept Islam and became a strong supporter of the Prophet's dawah. His immediate acceptance shows the power of sincere conviction."
  },
  {
    question: "What is the meaning of 'Uswah Hasanah' in the context of dawah?",
    options: [
      "Beautiful speech",
      "Excellent example",
      "Good intention",
      "Perfect knowledge"
    ],
    correctAnswer: "Excellent example",
    explanation: "Uswah Hasanah refers to the excellent example set by Prophet Muhammad (PBUH). The Quran (33:21) states he is the best example, showing that living Islam is a powerful form of dawah."
  },
  {
    question: "Which surah is known as 'The Heart of the Quran' and often used in dawah?",
    options: [
      "Surah Al-Fatiha",
      "Surah Al-Baqarah",
      "Surah Yasin",
      "Surah Al-Ikhlas"
    ],
    correctAnswer: "Surah Yasin",
    explanation: "Surah Yasin is often called 'The Heart of the Quran' and contains fundamental Islamic teachings about resurrection and divine power, making it valuable for dawah."
  },
  {
    question: "What was the primary language used by Prophet Muhammad (PBUH) for dawah?",
    options: [
      "The language of the people he was addressing",
      "Only classical Arabic",
      "Greek and Aramaic",
      "Latin"
    ],
    correctAnswer: "The language of the people he was addressing",
    explanation: "The Prophet communicated in the language his audience understood. While revelation came in Arabic, his dawah was practical and accessible to his listeners."
  },
  {
    question: "Which of these is NOT a method of dawah mentioned in the Quran?",
    options: [
      "Through wisdom",
      "Through good preaching",
      "Through force and compulsion",
      "Through good argument"
    ],
    correctAnswer: "Through force and compulsion",
    explanation: "The Quran (2:256) clearly states 'There is no compulsion in religion.' Dawah must be done through wisdom, good preaching, and kind argumentation (16:125)."
  },
  {
    question: "What is the first pillar of Islam that should be emphasized in dawah?",
    options: [
      "Shahadah (Testimony of Faith)",
      "Salah (Prayer)",
      "Zakat (Charity)",
      "Hajj (Pilgrimage)"
    ],
    correctAnswer: "Shahadah (Testimony of Faith)",
    explanation: "The Shahadah is the foundation of Islam. Prophet Muhammad (PBUH) instructed his companions to first call people to testify to Allah's oneness before teaching other pillars."
  },
  {
    question: "Which companion was sent to teach the Quran in Medina before Hijrah?",
    options: [
      "Mus'ab ibn Umayr (RA)",
      "Bilal (RA)",
      "Hamza (RA)",
      "Salman al-Farsi (RA)"
    ],
    correctAnswer: "Mus'ab ibn Umayr (RA)",
    explanation: "Mus'ab ibn Umayr (RA) was sent to Medina to teach Islam before the Hijrah. His successful dawah prepared Medina to become the center of Islamic civilization."
  },
  {
    question: "What is the term for non-Muslims living under Islamic rule who are given protection?",
    options: [
      "Muhajirun",
      "Ansar",
      "Dhimmi",
      "Kafirun"
    ],
    correctAnswer: "Dhimmi",
    explanation: "Dhimmis are protected non-Muslim citizens who enjoy rights under Islamic governance. This system demonstrates Islam's practical tolerance and can be a form of dawah by example."
  },
  {
    question: "Which Quranic verse is known as the 'Verse of Dawah'?",
    options: [
      "Al-Baqarah 2:255 (Ayat al-Kursi)",
      "An-Nahl 16:125",
      "Al-Ikhlas 112:1-4",
      "Al-Fatiha 1:1-7"
    ],
    correctAnswer: "An-Nahl 16:125",
    explanation: "An-Nahl 16:125 outlines the three primary methods of dawah: wisdom, good admonition, and arguing in the best manner. It's considered the foundational verse for Islamic outreach."
  },
  {
    question: "What quality of the Prophet made people naturally inclined to listen to his message?",
    options: [
      "His wealth",
      "His physical strength",
      "His truthfulness (As-Sadiq)",
      "His poetic skills"
    ],
    correctAnswer: "His truthfulness (As-Sadiq)",
    explanation: "Even before prophethood, Muhammad (PBUH) was known as 'As-Sadiq' (the truthful) and 'Al-Amin' (the trustworthy). His impeccable character made people receptive to his message."
  },
  {
    question: "Which of these is NOT a recommended quality for a da'i (person giving dawah)?",
    options: [
      "Patience",
      "Arrogance",
      "Knowledge",
      "Good manners"
    ],
    correctAnswer: "Arrogance",
    explanation: "Arrogance contradicts Islamic teachings. The Prophet said, 'No one who has an atom's weight of arrogance in his heart will enter Paradise.' (Muslim) Humility is essential for effective dawah."
  },
  {
    question: "What was the first house established for worship mentioned in the Quran?",
    options: [
      "Al-Aqsa Mosque",
      "Kaaba in Makkah",
      "Prophet's Mosque in Medina",
      "Mosque of Quba"
    ],
    correctAnswer: "Kaaba in Makkah",
    explanation: "The Quran (3:96) states the Kaaba was the first house established for mankind's worship. Its historical significance is often mentioned in dawah about Islamic monotheism."
  },
  {
    question: "How did the Prophet respond when people insulted him during dawah?",
    options: [
      "He insulted them back",
      "He remained patient and prayed for their guidance",
      "He ordered them to be punished",
      "He avoided them completely"
    ],
    correctAnswer: "He remained patient and prayed for their guidance",
    explanation: "The Prophet exemplified patience and often prayed for his persecutors' guidance. His famous prayer for Taif's people after they stoned him shows the ideal response to rejection."
  },
  {
    question: "What is the term for the migration of early Muslims to Abyssinia for religious freedom?",
    options: [
      "Hijrah",
      "Jihad",
      "First Migration",
      "Exodus"
    ],
    correctAnswer: "First Migration",
    explanation: "The migration to Abyssinia (615 CE) was the first hijrah in Islamic history, where Muslims sought religious freedom under a just Christian king, showing early interfaith relations."
  },
  {
    question: "Which companion gave dawah to Umar (RA) leading to his conversion?",
    options: [
      "His sister Fatimah and her husband",
      "Abu Bakr (RA)",
      "Khabbab ibn Al-Aratt (RA)",
      "Ali (RA)"
    ],
    correctAnswer: "His sister Fatimah and her husband",
    explanation: "Umar's (RA) conversion began when he heard his sister and brother-in-law reciting Quran. This shows how family dawah can be powerful when done with wisdom."
  },
  {
    question: "What percentage of the Quran deals with legal rulings?",
    options: [
      "About 10%",
      "About 50%",
      "About 80%",
      "About 3%"
    ],
    correctAnswer: "About 3%",
    explanation: "Only approximately 3% of Quranic verses deal with legal matters. This is important for dawah to show Islam's comprehensive nature beyond just laws."
  },
  {
    question: "Which prophet is mentioned most frequently in the Quran?",
    options: [
      "Prophet Ibrahim (AS)",
      "Prophet Musa (AS)",
      "Prophet Isa (AS)",
      "Prophet Nuh (AS)"
    ],
    correctAnswer: "Prophet Musa (AS)",
    explanation: "Prophet Musa (AS) is mentioned about 136 times, often in contexts showing dialogue with Pharaoh. These narratives provide dawah lessons in speaking truth to power."
  },
  {
    question: "What was the primary method the Prophet used to teach new Muslims?",
    options: [
      "Mass lectures",
      "Written books",
      "One-on-one and small group instruction",
      "Through dreams"
    ],
    correctAnswer: "One-on-one and small group instruction",
    explanation: "The Prophet focused on personal and small group teaching, ensuring proper understanding. This method remains effective in dawah for building strong foundations."
      },
      {
        question: "Which Quranic verse mentions 'calling to the way of your Lord with wisdom and good instruction'?",
        options: ["Surah Al-Baqarah 2:256", "Surah An-Nahl 16:125", "Surah Al-Ikhlas 112:1", "Surah Al-Fatiha 1:5"],
        correctAnswer: "Surah An-Nahl 16:125",
        explanation:
          "Surah An-Nahl 16:125 states: 'Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.'",
      },
      {
        question: "What is the primary purpose of Dawah?",
        options: [
          "To convert as many people as possible",
          "To convey the message of Islam and invite to the truth",
          "To win arguments against other religions",
          "To establish Islamic rule",
        ],
        correctAnswer: "To convey the message of Islam and invite to the truth",
        explanation:
          "The primary purpose of Dawah is to convey the message of Islam and invite people to the truth. The guidance is ultimately from Allah, and there is no compulsion in religion.",
      },
      {
        question: "Which of the following is NOT one of the key principles of effective Dawah?",
        options: [
          "Wisdom (Hikmah)",
          "Good instruction (Maw'izah Hasanah)",
          "Arguing in the best manner",
          "Forcing others to accept your viewpoint",
        ],
        correctAnswer: "Forcing others to accept your viewpoint",
        explanation:
          "Forcing others contradicts the Quranic principle 'There is no compulsion in religion' (2:256). The key principles are wisdom, good instruction, and arguing in the best manner.",
      },
      {
        question: "What is the meaning of 'Hikmah' in the context of Dawah?",
        options: ["Speaking loudly", "Wisdom and sound judgment", "Memorizing many Quranic verses", "Debating skills"],
        correctAnswer: "Wisdom and sound judgment",
        explanation:
          "Hikmah refers to wisdom, sound judgment, and understanding. It involves knowing what to say, when to say it, and how to say it in the most effective manner.",
      },
      {
        question: "What should be the primary source of information when giving Dawah?",
        options: [
          "Personal opinions",
          "Cultural traditions",
          "The Quran and authentic Sunnah",
          "Modern interpretations",
        ],
        correctAnswer: "The Quran and authentic Sunnah",
        explanation:
          "The Quran and authentic Sunnah (teachings and practices of Prophet Muhammad) should be the primary sources of information when giving Dawah to ensure accuracy and authenticity.",
      },
      {
        question: "What is the importance of good character (akhlaq) in Dawah?",
        options: [
          "It's not important as long as the information is correct",
          "It's essential as it reflects the beauty of Islamic teachings",
          "It only matters when speaking to non-Muslims",
          "It's less important than knowledge",
        ],
        correctAnswer: "It's essential as it reflects the beauty of Islamic teachings",
        explanation:
          "Good character is essential in Dawah as it practically demonstrates the beauty of Islamic teachings. Prophet Muhammad (PBUH) said, 'I have been sent to perfect good character.'",
      },
      {
        question: "What is the concept of 'Tabligh' in relation to Dawah?",
        options: [
          "Forcing others to accept Islam",
          "Conveying or transmitting the message",
          "Debating with non-Muslims",
          "Establishing Islamic institutions",
        ],
        correctAnswer: "Conveying or transmitting the message",
        explanation:
          "Tabligh means conveying or transmitting the message. It emphasizes the duty of Muslims to convey the message of Islam to others, without being responsible for the outcome.",
      },
      {
        question: "What did Prophet Muhammad (PBUH) say about conveying his message?",
        options: [
          "Only scholars should convey the message",
          "Convey from me, even if it is one verse",
          "Only convey to those who will accept",
          "Convey only to family members",
        ],
        correctAnswer: "Convey from me, even if it is one verse",
        explanation:
          "Prophet Muhammad (PBUH) said, 'Convey from me, even if it is one verse.' This encourages all Muslims to share whatever knowledge they have, even if it's limited.",
      },
      {
        question: "What is the role of patience (sabr) in Dawah?",
        options: [
          "It's not necessary if you have knowledge",
          "It's crucial as guidance may take time and face resistance",
          "It's only needed when dealing with difficult people",
          "It's less important than eloquence",
        ],
        correctAnswer: "It's crucial as guidance may take time and face resistance",
        explanation:
          "Patience is crucial in Dawah as guidance may take time and face resistance. The prophets exemplified great patience in their dawah efforts despite facing severe opposition.",
      },
        {
        question: "What did the Prophet (PBUH) tell Ali ibn Abi Talib at Khaybar regarding the immense value of guiding a single person to Islam?",
        options: [
          "\"It is better for you than possessing red camels\"",
          "\"It will grant you kingship over the land\"",
          "\"It is equivalent to fasting an entire lifetime\"",
          "\"It relieves you of all future obligations\"",
        ],
        correctAnswer: "\"It is better for you than possessing red camels\"",
        explanation:
          "In Sahih al-Bukhari and Sahih Muslim, the Prophet (PBUH) told Ali (RA): 'By Allah, if Allah were to guide a single person through you, it is better for you than possessing red camels' (the most prized wealth of the Arabs at that time).",
      },
      {
        question: "When the Prophet (PBUH) was commanded to warn his near relatives (26:214), from where did he publicly summon and address the Quraysh clans?",
        options: ["Mount Safa", "Mount Uhud", "Mount Thawr", "The Plain of Arafat"],
        correctAnswer: "Mount Safa",
        explanation:
          "As recorded in Sahih al-Bukhari, the Prophet (PBUH) ascended Mount Safa and called out to each clan of Quraysh by name, asking if they would believe him if he warned of an army behind the hill, establishing his truthfulness before proclaiming the message of Tawheed.",
      },
      {
        question: "According to Surah al-Ankabut (29:14), for approximately how long did Prophet Nuh (Noah) patiently preach to his people?",
        options: ["100 years", "500 years", "950 years", "1,000 years"],
        correctAnswer: "950 years",
        explanation:
          "The Noble Quran states in Surah al-Ankabut (29:14): 'And We certainly sent Noah to his people, and he remained among them a thousand years less fifty years' (950 years), exemplifying profound endurance in Dawah.",
      },
      {
        question: "How did Prophet Yusuf (peace be upon him) utilize his time in prison to deliver Dawah (Surah Yusuf 12:39-40)?",
        options: [
          "He demanded his release before speaking",
          "He called his fellow inmates to the Oneness of Allah before interpreting their dreams",
          "He debated Greek philosophy with the prison guards",
          "He remained completely silent until an angel appeared",
        ],
        correctAnswer: "He called his fellow inmates to the Oneness of Allah before interpreting their dreams",
        explanation:
          "In Surah Yusuf (12:39-40), Yusuf (AS) seized the opportunity of his fellow prisoners' inquiry to first explain Tawheed: 'O my two companions of prison, are separate lords better or Allah, the One, the Subduer?'",
      },
      {
        question: "When Allah commanded Prophet Musa and Harun to invite Pharaoh to the truth, what manner of speech did He specifically ordain (Surah Taha 20:44)?",
        options: [
          "Harsh threats and condemnation",
          "Gentle speech (Qawlan Layyinan)",
          "Silent gestures and signs",
          "Poetic riddles and parables",
        ],
        correctAnswer: "Gentle speech (Qawlan Layyinan)",
        explanation:
          "Allah commanded Musa and Harun in Surah Taha (20:44): 'And speak to him with gentle speech that perhaps he may be reminded or fear [Allah].' Even with a tyrannical oppressor, dawah begins with gentleness.",
      },
      {
        question: "When the Prophet (PBUH) was rejected and injured by the leaders and people of Ta'if, what was his reaction toward the offer of the Angel of the Mountains to crush the city?",
        options: [
          "He accepted the offer immediately",
          "He refused and prayed that Allah would bring forth from their descendants worshippers of Allah alone",
          "He demanded a financial ransom from them",
          "He cursed the city of Ta'if",
        ],
        correctAnswer: "He refused and prayed that Allah would bring forth from their descendants worshippers of Allah alone",
        explanation:
          "In Sahih al-Bukhari and Sahih Muslim, the Prophet (PBUH) mercifully replied: 'Rather, I hope that Allah will bring forth from their loins people who will worship Allah alone, associating nothing with Him.'",
      },
      {
        question: "Which Surah and verse explicitly defines the global mission of Prophet Muhammad (PBUH) as 'a mercy to the worlds'?",
        options: [
          "Surah al-Anbiya (21:107)",
          "Surah al-Fatihah (1:1)",
          "Surah al-Baqarah (2:100)",
          "Surah al-Ikhlas (112:1)",
        ],
        correctAnswer: "Surah al-Anbiya (21:107)",
        explanation:
          "Allah states in Surah al-Anbiya (21:107): 'And We have not sent you, [O Muhammad], except as a mercy to the worlds' (Rahmatan lil-'Alamin), which constitutes the foundational spirit of Islamic Dawah.",
      },
      {
        question: "Which companion represented the Muslims and recited the opening verses of Surah Maryam before the Christian King of Abyssinia (the Negus)?",
        options: ["Ja'far ibn Abi Talib", "Khalid ibn al-Walid", "Abu Bakr al-Siddiq", "Bilal ibn Rabah"],
        correctAnswer: "Ja'far ibn Abi Talib",
        explanation:
          "Ja'far ibn Abi Talib (RA) was the spokesperson for the Muslim emigrants in Abyssinia. He eloquently explained Islam's message and recited verses from Surah Maryam, causing the Negus to weep and grant the Muslims protection.",
      },
      {
        question: "What is the famous rule established in Surah al-Baqarah (2:256) regarding freedom of conscience in entering Islam?",
        options: [
          "\"There is no compulsion in religion\"",
          "\"Faith is inherited through ancestry\"",
          "\"Belief must be enforced by authorities\"",
          "\"Only scholars may choose their faith\"",
        ],
        correctAnswer: "\"There is no compulsion in religion\"",
        explanation:
          "Surah al-Baqarah (2:256) establishes the definitive principle: 'There is no compulsion in religion. Verily, the right path has become distinct from the wrong path.' Sincere faith must stem from conviction, not coercion.",
      },
      {
        question: "To which world leaders did the Prophet (PBUH) dispatch official emissaries and letters inviting them to Islam after the Treaty of Hudaybiyyah?",
        options: [
          "Heraclius of Byzantium, Chosroes of Persia, and the Negus of Abyssinia",
          "Julius Caesar and Alexander the Great",
          "The Emperor of China and the King of Britain",
          "Only the tribal chieftains of Yemen",
        ],
        correctAnswer: "Heraclius of Byzantium, Chosroes of Persia, and the Negus of Abyssinia",
        explanation:
          "As documented in Sahih al-Bukhari, following Hudaybiyyah, the Prophet (PBUH) dispatched international diplomatic letters inviting key monarchs including Heraclius of the Byzantine Empire, Chosroes II of Persia, and the Negus of Abyssinia to embrace Islam.",
      },
     ],
   intermediate: [
      {
        question: "What is the vital theological distinction between 'Hidayat al-Irshad' (guidance of showing the path) and 'Hidayat al-Tawfeeq' (guidance of heart and acceptance)?",
        options: [
          "Hidayat al-Irshad is only for angels, while Tawfeeq is for humans",
          "Hidayat al-Irshad (teaching and conveying) is within the human capacity of the Da'i, whereas Hidayat al-Tawfeeq belongs solely to Allah (Surah al-Qasas 28:56)",
          "They are completely identical with no scholarly difference",
          "Hidayat al-Tawfeeq can be purchased through charity",
        ],
        correctAnswer: "Hidayat al-Irshad (teaching and conveying) is within the human capacity of the Da'i, whereas Hidayat al-Tawfeeq belongs solely to Allah (Surah al-Qasas 28:56)",
        explanation:
          "Scholars emphasize that a Da'i is only tasked with conveying and clarifying the truth (Hidayat al-Dalalah wal-Irshad). Transforming the heart and granting true faith (Hidayat al-Tawfeeq) is exclusively in the hands of Allah, as stated in 28:56: 'Indeed, you do not guide whom you like, but Allah guides whom He wills.'",
      },
      {
        question: "How did Ja'far ibn Abi Talib (RA) represent the message of Islam when presenting Dawah before the Christian King of Abyssinia (the Negus)?",
        options: [
          "He threatened the king with military confrontation",
          "He contrasted the moral darkness of pre-Islamic Jahiliyyah with Islamic virtues and recited verses from Surah Maryam honoring Jesus and Mary",
          "He claimed that Muslims do not believe in Prophet Isa (Jesus)",
          "He refused to speak and demanded unconditional asylum",
        ],
        correctAnswer: "He contrasted the moral darkness of pre-Islamic Jahiliyyah with Islamic virtues and recited verses from Surah Maryam honoring Jesus and Mary",
        explanation:
          "In an authentic narrative recorded by Imam Ahmad, Ja'far (RA) articulated Islam's ethical transformation of society and recited the opening of Surah Maryam, moving the Negus to tears and earning royal protection for the early Muslims.",
      },
      {
        question: "When Mus'ab ibn Umayr (RA) was confronted by the armed tribal chieftain Usayd ibn Hudayr in Madinah, what legendary Dawah response did he give?",
        options: [
          "He drew his sword to defend himself",
          "\"Will you not sit and listen? If you are pleased with what you hear, accept it; and if you dislike it, we will refrain from what you dislike\"",
          "He fled from Madinah back to Makkah",
          "He mocked Usayd's pagan idols",
        ],
        correctAnswer: "\"Will you not sit and listen? If you are pleased with what you hear, accept it; and if you dislike it, we will refrain from what you dislike\"",
        explanation:
          "Mus'ab's sublime composure, gentleness, and reasonable approach disarmed Usayd, who sat, listened to the Quran, and embraced Islam that very hour, soon leading to the conversion of his entire clan.",
      },
      {
        question: "When the Angel of the Mountains offered to crush the insolent people of Ta'if between two mountains after they stoned the Prophet (PBUH), how did he respond?",
        options: [
          "He immediately agreed to their destruction",
          "He prayed: 'Rather, I hope that Allah will bring forth from their loins people who will worship Allah alone, associating nothing with Him'",
          "He asked the angel to destroy their crops and livestock instead",
          "He cursed them by name",
        ],
        correctAnswer: "He prayed: 'Rather, I hope that Allah will bring forth from their loins people who will worship Allah alone, associating nothing with Him'",
        explanation:
          "Recorded in Sahih al-Bukhari and Muslim, this magnificent response epitomizes prophetic mercy and long-term vision in Dawah, prioritizing the guidance of future generations over personal retribution.",
      },
      {
        question: "According to the famous hadith in Sahih Muslim, what are the three progressive stages of rectifying evil (Nahy 'anil-Munkar)?",
        options: [
          "With armed force, with legal prosecution, or through political debate",
          "With the hand (authority/action), with the tongue (speech/admonition), or with the heart (disapproval), which is the weakest of faith",
          "By boycotting trade, by public shaming, or by emigrating",
          "By fines, by imprisonment, or by public censure",
        ],
        correctAnswer: "With the hand (authority/action), with the tongue (speech/admonition), or with the heart (disapproval), which is the weakest of faith",
        explanation:
          "The Prophet (PBUH) said in Sahih Muslim: 'Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart, and that is the weakest of faith.' Each stage corresponds to one's legitimate capability.",
      },
      {
        question: "Why does Surah al-An'am (6:108) strictly prohibit Muslims from verbally abusing the false gods and idols of other religions?",
        options: [
          "Because pagan idols possess genuine supernatural powers",
          "Lest they, in retaliation and ignorance, insult and blaspheme Allah without knowledge",
          "Because idols are sacred according to Islamic law",
          "To allow Muslims to worship them occasionally",
        ],
        correctAnswer: "Lest they, in retaliation and ignorance, insult and blaspheme Allah without knowledge",
        explanation:
          "Surah al-An'am (6:108) warns: 'And do not insult those they invoke other than Allah, lest they insult Allah in enmity without knowledge.' A Da'i must not use counterproductive insults that provoke hatred against Allah and the truth.",
      },
      {
        question: "How did Prophet Muhammad (PBUH) begin his public Dawah to the Quraysh clans from atop Mount Safa?",
        options: [
          "By demanding they surrender the keys of the Ka'bah",
          "By establishing his credibility: 'If I told you that horsemen were emerging from the foot of this valley to attack you, would you believe me?'",
          "By reciting all twenty-eight letters of the Arabic alphabet",
          "By warning them of immediate Roman invasion",
        ],
        correctAnswer: "By establishing his credibility: 'If I told you that horsemen were emerging from the foot of this valley to attack you, would you believe me?'",
        explanation:
          "In Sahih al-Bukhari, the Prophet (PBUH) first leveraged his lifelong reputation as Al-Amin (the trustworthy) and Al-Sadiq (the truthful). When they confirmed his impeccable honesty, he delivered the warning of monotheism and the Day of Judgment.",
      },
      {
        question: "When Prophet Yusuf (Joseph) was unjustly imprisoned and fellow inmates asked him to interpret their dreams, how did he structure his Dawah (Surah Yusuf 12:37-40)?",
        options: [
          "He demanded payment in gold before interpreting the dreams",
          "He first called them rationally to Tawheed and exposed the vanity of fragmented false gods before addressing their dream inquiries",
          "He refused to interpret dreams for non-believers",
          "He told them to seek freedom through armed prison rebellion",
        ],
        correctAnswer: "He first called them rationally to Tawheed and exposed the vanity of fragmented false gods before addressing their dream inquiries",
        explanation:
          "Prophet Yusuf (AS) seized the receptive moment in prison to direct their hearts to the foundational truth of Tawheed: 'Are different lords better or Allah, the One, the Subduer?' (12:39), demonstrating how a Da'i integrates faith into everyday counseling.",
      },
      {
        question: "What universal prophetic principle regarding compensation for delivering religious guidance is repeatedly emphasized throughout the Quran?",
        options: [
          "Charging hourly consulting fees for basic Islamic guidance",
          "\"I do not ask you for it any payment; my reward is only from the Lord of the worlds\" (Surah ash-Shu'ara 26:109)",
          "Collecting a mandatory percentage of the listener's harvest",
          "Requiring new converts to build houses for the preacher",
        ],
        correctAnswer: "\"I do not ask you for it any payment; my reward is only from the Lord of the worlds\" (Surah ash-Shu'ara 26:109)",
        explanation:
          "Prophets Nuh, Hud, Salih, Lut, and Shu'ayb repeatedly proclaimed: 'Wa ma as'alukum 'alayhi min ajr' (I do not ask of you any payment for it). Sincerity free from commercialized preaching gives Dawah purity and moral authority.",
      },
      {
        question: "What profound rule regarding speech and character did the Prophet (PBUH) teach Aisha (RA) in Sahih Muslim?",
        options: [
          "\"Harshness is necessary to make people fear the truth\"",
          "\"Gentleness is not found in anything except that it beautifies it, and is not removed from anything except that it blemishes it\"",
          "\"Only speak when you are provoked to anger\"",
          "\"Flattery is the best tool of speech\"",
        ],
        correctAnswer: "\"Gentleness is not found in anything except that it beautifies it, and is not removed from anything except that it blemishes it\"",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) said: 'Inna al-rifqa la yakunu fi shay'in illa zanahu, wa la yunza'u min shay'in illa shanahu.' Gentleness (Rifq) is a foundational virtue that attracts hearts during Dawah.",
      },
      {
        question: "What is the Quranic directive regarding dealing with non-Muslim parents who actively pressure their Muslim child to commit Shirk (Surah Luqman 31:15)?",
        options: [
          "Insult and physically disown them immediately",
          "Do not obey them in committing Shirk, yet accompany them in this worldly life with kindness and honor",
          "Obey them in religious matters until they pass away",
          "Cease all financial support and communication forever",
        ],
        correctAnswer: "Do not obey them in committing Shirk, yet accompany them in this worldly life with kindness and honor",
        explanation:
          "Surah Luqman (31:15) orders: 'But if they endeavor to make you associate with Me that of which you have no knowledge, do not obey them but accompany them in [this] world with appropriate kindness.' Kindness to parents is an enduring form of Dawah bil-Hal.",
      },
      {
        question: "What historic role did 'Dar al-Arqam' play during the initial phase of the Prophet's mission in Makkah?",
        options: [
          "It was a military training fortress",
          "A confidential gathering place for spiritual cultivation, Quran study, and strategic Dawah under intense persecution",
          "A marketplace for Muslim merchants to trade without taxes",
          "A public courthouse where disputes were arbitrated",
        ],
        correctAnswer: "A confidential gathering place for spiritual cultivation, Quran study, and strategic Dawah under intense persecution",
        explanation:
          "The home of al-Arqam ibn Abi al-Arqam served as the clandestine headquarters of the early Muslim community in Makkah, where the Prophet (PBUH) nurtured core converts in faith, character, and Quranic literacy.",
      },
      {
        question: "Which early companion's proactive, personal Dawah led immediately to the conversion of senior figures including Uthman ibn Affan, Abdur-Rahman ibn Awf, and Talhah ibn Ubaydullah?",
        options: ["Abu Bakr al-Siddiq (RA)", "Umar ibn al-Khattab (RA)", "Khalid ibn al-Walid (RA)", "Bilal ibn Rabah (RA)"],
        correctAnswer: "Abu Bakr al-Siddiq (RA)",
        explanation:
          "Abu Bakr (RA) was beloved, wise, and highly respected for his genealogical knowledge and integrity. Upon accepting Islam, he immediately invited his circle of noble friends, bringing the foundational pillars of the Ummah into Islam.",
      },
      {
        question: "What stern rebuke does Surah al-Baqarah (2:44) address to religious teachers whose personal actions contradict their public preaching?",
        options: [
            "\"Why do you preach to those who already know?\"",
            "\"Do you order righteousness of the people and forget yourselves while you recite the Scripture? Have you no sense?\"",
            "\"Preaching without a microphone is invalid\"",
            "\"Your knowledge will be stripped from your memory in this life\"",
        ],
        correctAnswer: "\"Do you order righteousness of the people and forget yourselves while you recite the Scripture? Have you no sense?\"",
        explanation:
          "Surah al-Baqarah (2:44) warns against intellectual hypocrisy—calling others to virtue while disregarding it in one's private life. Authenticity and personal integrity are essential pillars of Dawah.",
      },
      {
        question: "According to the consensus of classical Islamic jurists, what is the collective legal ruling (Hukm) of engaging in Dawah for the Muslim Ummah?",
        options: [
          "Merely a recommended voluntary hobby (Mustahabb)",
          "A communal obligation (Fard Kifayah) upon the Ummah, and an individual duty (Fard Ayn) on each Muslim according to their knowledge and ability",
          "Restricted exclusively to political rulers and judges",
          "Forbidden except during designated pilgrimage months",
        ],
        correctAnswer: "A communal obligation (Fard Kifayah) upon the Ummah, and an individual duty (Fard Ayn) on each Muslim according to their knowledge and ability",
        explanation:
          "Based on Surah Ali 'Imran (3:104), Dawah is Fard Kifayah collectively, ensuring an educated body calls to truth; individually, every Muslim must convey Islam and correct wrongdoing according to their level of capability and knowledge.",
      },
      {
        question: "How did Prophet Ibrahim (AS) decisively dismantle the philosophical arrogance of King Nimrod in Surah al-Baqarah (2:258)?",
        options: [
          "He challenged him to an archery contest",
          "He proclaimed: 'Indeed, Allah brings the sun from the east, so bring it from the west.' Whereupon the disbeliever was dumbfounded",
          "He summoned an army to invade the palace",
          "He offered to divide the kingdom with him",
        ],
        correctAnswer: "He proclaimed: 'Indeed, Allah brings the sun from the east, so bring it from the west.' Whereupon the disbeliever was dumbfounded",
        explanation:
          "When the tyrant ridiculously claimed he could give life and death by sparing one prisoner and executing another, Ibrahim (AS) pivoted to an irrefutable cosmic proof of divine omnipotence, immediately silencing the king.",
      },
      {
        question: "What rational method did Prophet Ibrahim (AS) use to guide his people away from celestial polytheism in Surah al-An'am (6:76-79)?",
        options: [
          "He destroyed their astronomical charts",
          "He contemplated the setting of the star, moon, and sun, pointing out that anything that sets and fades is flawed and unworthy of worship",
          "He claimed that planets do not exist in reality",
          "He refused to look at the night sky",
        ],
        correctAnswer: "He contemplated the setting of the star, moon, and sun, pointing out that anything that sets and fades is flawed and unworthy of worship",
        explanation:
          "Ibrahim (AS) used an engaging pedagogical demonstration: seeing the heavenly bodies set, he declared, 'I do not like those that set' (La uhibbu al-afilin), directing their intellects to the Eternal Creator Who never disappears.",
      },
      {
        question: "What famous rule of psychological pedagogy in Dawah did the Prophet (PBUH) articulate in Sahih al-Bukhari to Mu'adh and Abu Musa al-Ash'ari?",
        options: [
          "\"Compel the people through fear and urgency\"",
          "\"Make things easy and do not make them difficult; give glad tidings and do not repel people\"",
          "\"Withhold religious knowledge until they pay taxes\"",
          "\"Preach only once every lunar year\"",
        ],
        correctAnswer: "\"Make things easy and do not make them difficult; give glad tidings and do not repel people\"",
        explanation:
          "The Prophet (PBUH) instructed his emissaries: 'Yassiru wa la tu'assiru, wa bashshiru wa la tunaffiru' (Make things easy and do not make them hard; bring good cheer and do not drive people away). Facilitation and hope are critical in Dawah.",
      },
      {
        question: "How did the Prophet (PBUH) handle the incident of the Bedouin who urinated inside the Prophet's Mosque in Madinah?",
        options: [
          "He had the companions beat and expel him immediately",
          "He stopped companions from rebuking him harshly, let him finish, poured a bucket of water over it, and gently explained the sanctity of mosques",
          "He demanded the Bedouin pay a monetary fine to the treasury",
          "He ordered the mosque to be demolished and rebuilt",
        ],
        correctAnswer: "He stopped companions from rebuking him harshly, let him finish, poured a bucket of water over it, and gently explained the sanctity of mosques",
        explanation:
          "In Sahih al-Bukhari, the Prophet's response showcased supreme emotional intelligence and educational wisdom: avoiding medical harm to the man, preventing urine dispersal, solving the contamination cleanly, and educating the ignorant with compassion.",
      },
      {
        question: "When a passionate young man asked the Prophet (PBUH) for permission to commit fornication (Zina), how did the Prophet address him?",
        options: [
          "He cursed him and ordered him stoned immediately",
          "He engaged him with calm, Socratic empathy: 'Would you like that for your mother, daughter, or sister?' and then placed his hand on his chest and made Dua for him",
          "He expelled him from the Muslim community",
          "He ignored his question and walked away",
        ],
        correctAnswer: "He engaged him with calm, Socratic empathy: 'Would you like that for your mother, daughter, or sister?' and then placed his hand on his chest and made Dua for him",
        explanation:
          "Recorded in Musnad Ahmad, the Prophet (PBUH) reasoned with the youth's conscience, awakening his empathy for others' families, and supplicated for his purity. The youth departed with nothing more detestable to him than Zina.",
      },
      {
        question: "What does the term 'Al-Balagh al-Mubin' mean in Quranic passages defining the scope of prophetic duty (e.g., Surah al-Nur 24:54)?",
        options: [
          "Secret communication through signs",
          "Clear, unambiguous, and comprehensive conveyance of the divine message",
          "Political subjugation of opponents",
          "Poetic composition without practical application",
        ],
        correctAnswer: "Clear, unambiguous, and comprehensive conveyance of the divine message",
        explanation:
          "The Quran repeats: 'And there is not upon the Messenger except clear conveyance (Al-Balagh al-Mubin).' The caller's responsibility is fulfilled when the truth is explained thoroughly, lucidly, and without distortion.",
      },
      {
        question: "How did Tufayl ibn Amr al-Dawsi, a noble poet who stuffed cotton in his ears to avoid hearing the Prophet (PBUH), eventually embrace Islam?",
        options: [
          "He was forced by the leaders of Quraysh",
          "He reasoned that as an intelligent poet he could judge words himself; he removed the cotton, heard the Quran, and recognized its sublime truth",
          "He found an ancient manuscript in a cave",
          "He had a financial dispute with the leaders of Makkah",
        ],
        correctAnswer: "He reasoned that as an intelligent poet he could judge words himself; he removed the cotton, heard the Quran, and recognized its sublime truth",
        explanation:
          "Recorded in classical Seerah (Ibn Hisham), Tufayl thought: 'I am a mature, intelligent poet who knows good speech from bad; what prevents me from listening?' Upon hearing the Quran, he was captivated and became an ardent Da'i among his tribe, Daws.",
      },
      {
        question: "What did the Jewish youth who used to serve the Prophet (PBUH) do when the Prophet visited him during his mortal illness and called him to Islam?",
        options: [
          "He insulted the Prophet and turned his back",
          "He looked at his father, who told him: 'Obey Abu al-Qasim,' and he embraced Islam before passing away",
          "He asked for a miraculous sign before believing",
          "He refused to speak to anyone",
        ],
        correctAnswer: "He looked at his father, who told him: 'Obey Abu al-Qasim,' and he embraced Islam before passing away",
        explanation:
          "In Sahih al-Bukhari, the Prophet visited the sick youth, demonstrating care across religious boundaries. When invited to Islam, the boy's father endorsed it, prompting the Prophet to say: 'Praise be to Allah Who saved him from the Fire.'",
      },
      {
        question: "What powerful rational argument does Surah at-Tur (52:35) pose to deconstruct philosophical atheism and materialism in Dawah?",
        options: [
          "\"Do they possess the treasures of gold?\"",
          "\"Were they created by nothing, or were they the creators [of themselves]?\"",
          "\"Can they fly to the ends of the universe?\"",
          "\"Why do they not write their own scriptures?\"",
        ],
        correctAnswer: "\"Were they created by nothing, or were they the creators [of themselves]?\"",
        explanation:
          "Surah at-Tur (52:35) articulates an inescapable logical dilemma: either existence arose from absolute nothingness (impossible), or humans created themselves (equally absurd), proving that an Uncreated, All-Powerful Creator is necessary.",
      },
      {
        question: "When Jubayr ibn Mut'im, while still a polytheist, heard the Prophet (PBUH) reciting Surah at-Tur during Maghrib prayer, what impact did it have on him?",
        options: [
          "He plugged his ears in anger",
          "He said: 'My heart almost flew [out of my chest], and that was the first time faith settled in my heart'",
          "He challenged the Prophet to a poetry contest",
          "He fell asleep in the courtyard",
        ],
        correctAnswer: "He said: 'My heart almost flew [out of my chest], and that was the first time faith settled in my heart'",
        explanation:
          "In Sahih al-Bukhari, Jubayr narrated how the profound majesty and cosmic logic of the Quran pierced his skepticism, demonstrating the unparalleled power of reciting the Quran directly during Dawah.",
      },
      {
        question: "What does the Quran designate as the primary spiritual barrier that prevents arrogant people from receiving Dawah (Surah al-A'raf 7:146)?",
        options: [
          "Lack of financial literacy",
          "Kibr (arrogance and unjustified pride in the earth)",
          "Physical distance from Makkah",
          "Ignorance of foreign languages",
        ],
        correctAnswer: "Kibr (arrogance and unjustified pride in the earth)",
        explanation:
          "Allah warns in 7:146: 'I will turn away from My signs those who are arrogant upon the earth without right.' Kibr blinds an individual from accepting evident truth regardless of how convincing the proofs are.",
      },
      {
        question: "What is the concept of 'Fitrah' and why is it considered the greatest psychological ally of a Da'i?",
        options: [
          "A commercial fee paid after Ramadan",
          "The innate, primordial human disposition created to recognize the Oneness of Allah and love moral virtue",
          "An acquired cultural tradition inherited from parents",
          "The legal contract signed when becoming a citizen",
        ],
        correctAnswer: "The innate, primordial human disposition created to recognize the Oneness of Allah and love moral virtue",
        explanation:
          "In Sahih al-Bukhari, the Prophet (PBUH) taught: 'Every child is born upon the Fitrah.' Dawah does not implant an unnatural alien concept; it awakens the slumbering intrinsic human inclination toward monotheism and virtue.",
      },
      {
        question: "Why did the Treaty of Hudaybiyyah, despite seeming unfavorable to some companions initially, produce the greatest surge of conversions in early Islamic history?",
        options: [
          "It forced the Quraysh to convert under threat of arms",
          "It halted active hostilities, allowing Muslims and non-Muslims to mix freely, engage in open dialogue, and observe the reality of Islam firsthand",
          "It gave Muslims complete financial control of Mecca's trade",
          "It abolished all previous Makki treaties",
        ],
        correctAnswer: "It halted active hostilities, allowing Muslims and non-Muslims to mix freely, engage in open dialogue, and observe the reality of Islam firsthand",
        explanation:
          "Imam al-Zuhri noted that peace allowed people to interact without prejudice. More people embraced Islam during the two years following Hudaybiyyah than in all the preceding years combined, as described in Surah al-Fath.",
      },
      {
        question: "What pedagogical insight did Mother of the Believers Aisha (RA) offer regarding the gradual revelation of the Quran and its impact on Dawah?",
        options: [
          "All legal prohibitions should have been revealed in a single day",
          "The first verses revealed focused on Paradise, Hellfire, and faith until hearts softened; had 'do not drink wine' been revealed first, people would have refused",
          "Makki verses contained all complex criminal penalties",
          "Dawah should start with severe punishments before mentioning mercy",
        ],
        correctAnswer: "The first verses revealed focused on Paradise, Hellfire, and faith until hearts softened; had 'do not drink wine' been revealed first, people would have refused",
        explanation:
          "In Sahih al-Bukhari, Aisha (RA) explained the divine pedagogy of Tadarruj (gradualism): establishing deep love and reverence for Allah in hearts before issuing detailed legislative prohibitions.",
      },
      {
        question: "How did Abdullah ibn Salam (RA), the prominent Jewish rabbi of Madinah, react upon first hearing the public address of Prophet Muhammad (PBUH)?",
        options: [
          "He disputed his lineage and debated him publicly",
          "He recognized his face was not that of a liar, and listened to him teach: 'O people, spread peace, feed the hungry, uphold family ties, and pray at night...'",
          "He immediately left Madinah for Jerusalem",
          "He demanded forty miraculous signs",
        ],
        correctAnswer: "He recognized his face was not that of a liar, and listened to him teach: 'O people, spread peace, feed the hungry, uphold family ties, and pray at night...'",
        explanation:
          "Recorded in Jami` at-Tirmidhi, Abdullah ibn Salam testified that the Prophet's sheer sincerity, radiant countenance, and noble ethical discourse provided unmistakable proof of his divine prophethood.",
      },
      {
        question: "What is the Quranic response commanded in Surah al-Furqan (25:63) when the servants of the Most Merciful encounter insults and foolish mockery from the ignorant?",
        options: [
          "Respond with louder insults and curses",
          "They pass by gracefully and say words of peace (Qalu Salama)",
          "Engage in prolonged internet arguments",
          "Threaten physical violence",
        ],
        correctAnswer: "They pass by gracefully and say words of peace (Qalu Salama)",
        explanation:
          "Surah al-Furqan (25:63) highlights: 'And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace.' A Da'i never stoops to vulgarity.",
      },
      {
        question: "What was the significance of 'Bay'at al-Aqabah' (The Pledges of al-Aqabah) in the strategic progression of Islamic Dawah?",
        options: [
          "They marked the end of Dawah in the Arabian Peninsula",
          "They established a foundational treaty of mutual protection and political sanctuary with the leaders of Yathrib (Madinah), paving the way for the Hijrah",
          "They were trade agreements with Roman caravans",
          "They concerned the building of naval ships",
        ],
        correctAnswer: "They established a foundational treaty of mutual protection and political sanctuary with the leaders of Yathrib (Madinah), paving the way for the Hijrah",
        explanation:
          "The two Pledges of al-Aqabah provided the fledgling Muslim community with a secure homeland and political sovereignty in Madinah, transitioning Dawah from individual survival in Makkah to community establishment.",
      },
      {
        question: "When Dimad al-Azdi, an herbalist and exorcist from Yemen, arrived in Makkah intending to cure the Prophet (PBUH) of alleged madness, what converted him?",
        options: [
          "A military duel",
          "The eloquence and profound meaning of the Prophet's opening Khutbat al-Hajah ('All praise is due to Allah, we praise Him and seek His help...')",
          "A gift of gold coins",
          "Seeing a solar eclipse",
        ],
        correctAnswer: "The eloquence and profound meaning of the Prophet's opening Khutbat al-Hajah ('All praise is due to Allah, we praise Him and seek His help...')",
        explanation:
          "In Sahih Muslim, Dimad asked the Prophet (PBUH) to repeat the words three times, declaring: 'I have heard the words of sorcerers, poets, and soothsayers, but I have never heard anything like these majestic words,' and embraced Islam on the spot.",
      },
      {
        question: "What year in the Seerah is renowned as 'Am al-Wufud' (The Year of Delegations) and what was its significance for Dawah?",
        options: [
          "The 2nd year of Hijrah after Badr",
          "The 9th year of Hijrah, when Arab tribes from across the peninsula sent delegations to Madinah to embrace Islam and learn its laws",
          "The year of the conquest of Constantinople",
          "The year before the Prophet's birth",
        ],
        correctAnswer: "The 9th year of Hijrah, when Arab tribes from across the peninsula sent delegations to Madinah to embrace Islam and learn its laws",
        explanation:
          "Following the Conquest of Makkah and the Battle of Tabuk, tribal delegations arrived in Madinah in waves (Surah an-Nasr), representing the mass entry of Arabian tribes into Islam through peaceful diplomatic Dawah.",
      },
      {
        question: "What does the Quran teach regarding the role of divine reflection (Tadabbur) in awakening skeptics and critics?",
        options: [
          "The Quran discourages questioning and deep analysis",
          "It repeatedly challenges them: 'Do they not reflect upon the Quran, or are there locks upon their hearts?' (Surah Muhammad 47:24)",
          "Reflection is only permissible for ancient scholars",
          "Tadabbur refers exclusively to memorizing verse numbers",
        ],
        correctAnswer: "It repeatedly challenges them: 'Do they not reflect upon the Quran, or are there locks upon their hearts?' (Surah Muhammad 47:24)",
        explanation:
          "The Quran directly appeals to human intellect and conscience, commanding contemplation of its depth, internal coherence, and spiritual resonance to dismantle intellectual prejudice.",
      },
      {
        question: "Why is 'Fiqh al-Inkar' (the jurisprudence of forbidding evil) conditioned on not resulting in a greater evil?",
        options: [
          "Because scholars are not interested in public welfare",
          "According to Ibn al-Qayyim and classical jurists, if denouncing an evil leads directly to an evil that is worse and more destructive, denouncing it becomes impermissible",
          "Because evil should always be tolerated without concern",
          "To allow rulers to suspend all Islamic laws",
        ],
        correctAnswer: "According to Ibn al-Qayyim and classical jurists, if denouncing an evil leads directly to an evil that is worse and more destructive, denouncing it becomes impermissible",
        explanation:
          "In *I'lam al-Muwaqqi'in*, Ibn al-Qayyim details that rectifying a wrong is aimed at achieving good; if an intervention produces a greater harm or bloodshed (Mafsada A'zam), Shariah mandates restraint.",
      },
      {
        question: "How did Prophet Muhammad (PBUH) instruct his companions to engage with the elderly and youth during community Dawah?",
        options: [
          "\"Treat all people identically with cold detachment\"",
          "\"He is not of us who does not show mercy to our young and respect to our elders\" (at-Tirmidhi)",
          "\"Only give attention to wealthy community leaders\"",
          "\"Ignore children until they reach adulthood\"",
        ],
        correctAnswer: "\"He is not of us who does not show mercy to our young and respect to our elders\" (at-Tirmidhi)",
        explanation:
          "This prophetic hadith establishes an empathetic community atmosphere where children are nurtured with tenderness and elders are honored with deference, fostering receptivity to Dawah.",
      },
      {
        question: "What was the Prophet's practice when giving public sermons and admonitions so as not to exhaust his audience?",
        options: [
          "He preached continuously for entire days without pause",
          "As narrated by Ibn Mas'ud in Sahih al-Bukhari, he used to space out his admonitions over intervals, fearing he might cause boredom",
          "He delivered speeches only once a year on Eid",
          "He made the companions stand on one foot while listening",
        ],
        correctAnswer: "As narrated by Ibn Mas'ud in Sahih al-Bukhari, he used to space out his admonitions over intervals, fearing he might cause boredom",
        explanation:
          "Abdullah ibn Mas'ud stated: 'The Prophet (PBUH) used to take our circumstances into account with his sermons, choosing suitable days to avoid tiring or boring us.' Effective Dawah respects the cognitive limits of the audience.",
      },
      {
        question: "In Surah Fussilat (41:34), what psychological strategy does the Quran prescribe to transform an enemy into a devoted friend?",
        options: [
          "Retaliate with double the offense",
          "Repel evil with that which is better (goodness and kindness)",
          "Sue them in civil courts",
          "Boycott their community forever",
        ],
        correctAnswer: "Repel evil with that which is better (goodness and kindness)",
        explanation:
          "Surah Fussilat (41:34) states: 'Repel [evil] by that [deed] which is better; and thereupon, the one whom between you and him is enmity [will become] as though he was a devoted friend.' Magnanimity disarms hostility.",
      },
      {
        question: "What is the crucial prerequisite before a Muslim engages in debating polemicists and theological critics of Islam?",
        options: [
          "Merely having high confidence and enthusiasm",
          "Possessing sound Islamic knowledge, grounded textual understanding, and familiarity with counter-arguments to avoid spreading doubt or confusion",
          "Being an elected public official",
          "Memorizing Greek philosophical terms",
        ],
        correctAnswer: "Possessing sound Islamic knowledge, grounded textual understanding, and familiarity with counter-arguments to avoid spreading doubt or confusion",
        explanation:
          "Scholars emphasize that entering complex debates without solid grounding in Islamic theology and scholarly proofs risks confusing oneself and misrepresenting the faith. Sincerity alone is never a substitute for verified knowledge.",
      },
    ],
    advanced: [
      {
        question: "What is the difference between 'Dawah bil-Hal' and 'Dawah bil-Lisan'?",
        options: [
          "There is no difference",
          "Dawah bil-Hal is invitation through actions and conduct, while Dawah bil-Lisan is invitation through speech",
          "Dawah bil-Hal is for Muslims, while Dawah bil-Lisan is for non-Muslims",
          "Dawah bil-Hal is obligatory, while Dawah bil-Lisan is optional",
        ],
        correctAnswer:
          "Dawah bil-Hal is invitation through actions and conduct, while Dawah bil-Lisan is invitation through speech",
        explanation:
          "Dawah bil-Hal refers to invitation through one's actions, conduct, and example, while Dawah bil-Lisan refers to invitation through speech, explanation, and verbal communication.",
      },
        {
    question: "What is the concept of 'Al-Hikmah al-Ta'rifiyyah' in contemporary dawah?",
    options: [
      "Using complex philosophical arguments exclusively",
      "Introducing Islam through its most beautiful and recognizable aspects first",
      "Focusing only on legal rulings",
      "Avoiding all cultural references"
    ],
    correctAnswer: "Introducing Islam through its most beautiful and recognizable aspects first",
    explanation: "Al-Hikmah al-Ta'rifiyyah means strategic introduction of Islam by beginning with its most universally appealing aspects (mercy, justice, etc.) before detailed discussions, following the Prophet's gradual approach."
  },
  {
    question: "How did classical scholars categorize different levels of dawah priorities?",
    options: [
      "Daruriyyat (essentials), Hajiyyat (needs), Tahsiniyyat (embellishments)",
      "Only focusing on what's culturally popular",
      "Teaching advanced fiqh before basics",
      "No categorization existed"
    ],
    correctAnswer: "Daruriyyat (essentials), Hajiyyat (needs), Tahsiniyyat (embellishments)",
    explanation: "Scholars developed this hierarchy: 1) Essentials (Tawhid, pillars); 2) Needs (social regulations); 3) Embellishments (perfecting practice). This ensures proper dawah sequencing."
  },
  {
    question: "What is 'Fiqh al-Muwazanat' in the context of dawah?",
    options: [
      "Memorizing scales of fiqh rulings",
      "Balancing between different priorities and outcomes in conveying the message",
      "Weighing different madhahib opinions",
      "Commercial transactions in fiqh"
    ],
    correctAnswer: "Balancing between different priorities and outcomes in conveying the message",
    explanation: "Fiqh al-Muwazanat refers to the jurisprudence of balancing - weighing potential outcomes, prioritizing more important matters, and avoiding disproportionate focus on minor issues at the expense of major ones in dawah."
  },
  {
    question: "What was Imam Al-Ghazali's approach to addressing philosophical challenges in dawah?",
    options: [
      "Complete rejection of philosophy",
      "Uncritical acceptance of all philosophical ideas",
      "Critical engagement - accepting what aligned with Islam and refuting what contradicted it",
      "Avoiding all intellectual discourse"
    ],
    correctAnswer: "Critical engagement - accepting what aligned with Islam and refuting what contradicted it",
    explanation: "Al-Ghazali's 'Tahafut al-Falasifa' exemplifies sophisticated engagement with philosophy - accepting logic and sound reasoning while refuting metaphysical errors, a model for intellectual dawah."
  },
  {
    question: "What is the concept of 'Al-Tadarruj' in Islamic dawah methodology?",
    options: [
      "Sudden and complete transformation",
      "Gradual progression in teaching and implementation",
      "Only teaching in Arabic",
      "Focusing only on elite audiences"
    ],
    correctAnswer: "Gradual progression in teaching and implementation",
    explanation: "Al-Tadarruj refers to the gradual approach seen in Quranic revelation and Prophetic teaching - introducing concepts progressively according to people's capacity, as seen with the phased prohibition of alcohol."
  },
  {
    question: "How did Ibn Taymiyyah approach dawah to Christian scholars?",
    options: [
      "Through his work 'Al-Jawab al-Sahih' providing detailed, evidence-based responses",
      "By avoiding all dialogue with them",
      "By accepting their core doctrines",
      "Through military confrontation"
    ],
    correctAnswer: "Through his work 'Al-Jawab al-Sahih' providing detailed, evidence-based responses",
    explanation: "Ibn Taymiyyah's 4-volume 'Al-Jawab al-Sahih' systematically addresses Christian theological claims using their own scriptures, logic, and Islamic sources - a model for scholarly interfaith dawah."
  },
  {
    question: "What is 'Al-Fiqh al-Aqalliyyat' and its relevance to dawah?",
    options: [
      "Fiqh for Muslim minorities focusing on their unique circumstances",
      "A fiqh school only for Arabs",
      "Ancient fiqh no longer relevant",
      "Fiqh exclusively for scholars"
    ],
    correctAnswer: "Fiqh for Muslim minorities focusing on their unique circumstances",
    explanation: "Al-Fiqh al-Aqalliyyat addresses specific challenges Muslim minorities face, providing relevant guidance for dawah in non-Muslim majority societies while maintaining Islamic principles."
  },
  {
    question: "What was the approach of the Andalusian scholars in dawah to European intellectuals?",
    options: [
      "Isolation from non-Muslim thinkers",
      "Translation movements and intellectual exchange while maintaining Islamic identity",
      "Complete adoption of European thought",
      "Only military engagement"
    ],
    correctAnswer: "Translation movements and intellectual exchange while maintaining Islamic identity",
    explanation: "Andalusian scholars like Ibn Rushd engaged European thinkers through translation projects and philosophical discourse, influencing Aquinas and medieval thought while articulating Islamic positions - a model for intellectual dawah."
  },
  {
    question: "What is the concept of 'Al-Maqasid al-Shariah' in contemporary dawah?",
    options: [
      "Focusing only on literal texts without considering purposes",
      "Understanding and communicating the higher objectives of Islamic law",
      "Rejecting all traditional interpretations",
      "Creating new religious fundamentals"
    ],
    correctAnswer: "Understanding and communicating the higher objectives of Islamic law",
    explanation: "Emphasizing Islam's higher objectives (protection of religion, life, intellect, lineage, property) helps present Islam as a comprehensive value system rather than just rules, making dawah more meaningful."
  },
  {
    question: "How did early Muslim scholars approach translation of Greek philosophy for dawah purposes?",
    options: [
      "They rejected all foreign knowledge",
      "They translated selectively, adapting useful concepts while filtering out unIslamic elements",
      "They adopted Greek philosophy uncritically",
      "They only translated scientific works"
    ],
    correctAnswer: "They translated selectively, adapting useful concepts while filtering out unIslamic elements",
    explanation: "The House of Wisdom's translation movement under caliphs like Al-Ma'mun carefully selected and Islamically framed useful Greek concepts while rejecting contradictory ideas - a balanced approach to cultural exchange in dawah."
  },
  {
    question: "What is 'Al-Manhaj al-Nabawi' in dawah methodology?",
    options: [
      "Following the Prophet's exact historical circumstances without adaptation",
      "Understanding and applying the Prophetic method's principles to contemporary contexts",
      "Creating completely new methods unrelated to the Sunnah",
      "Only focusing on the Madinan period"
    ],
    correctAnswer: "Understanding and applying the Prophetic method's principles to contemporary contexts",
    explanation: "Al-Manhaj al-Nabawi means deriving timeless principles from the Prophet's dawah (gradualism, wisdom, prioritizing essentials) and intelligently applying them to modern contexts without mere imitation of 7th century Arabia."
  },
  {
    question: "What is the concept of 'Al-Taysir' (facilitation) in dawah?",
    options: [
      "Making religion excessively easy by abandoning all obligations",
      "Providing appropriate concessions for new Muslims without compromising fundamentals",
      "Changing core beliefs to attract people",
      "Only teaching what people want to hear"
    ],
    correctAnswer: "Providing appropriate concessions for new Muslims without compromising fundamentals",
    explanation: "Al-Taysir refers to the Islamic principle of facilitation - easing people into practice by starting with essentials and allowing legitimate concessions (like gradual implementation of prayers) while maintaining core principles."
  },
  {
    question: "How did classical scholars approach 'Al-Dawah bi-l-Qudwah' (dawah by example)?",
    options: [
      "By focusing only on verbal preaching",
      "By embodying Islamic teachings in personal and community life",
      "By isolating from society",
      "By compromising principles to fit in"
    ],
    correctAnswer: "By embodying Islamic teachings in personal and community life",
    explanation: "Scholars like Al-Shafi'i and Malik emphasized living Islam completely - their integrity, worship, and dealings became powerful dawah that attracted people before they even spoke, exemplifying 'dawah bil-hal'."
  },
  {
    question: "What is 'Al-Fiqh al-Da'wah' as articulated by contemporary scholars?",
    options: [
      "A new madhab (school of thought)",
      "The jurisprudence of understanding dawah contexts and appropriate methodologies",
      "Only rules about missionary work",
      "Rejection of all traditional fiqh"
    ],
    correctAnswer: "The jurisprudence of understanding dawah contexts and appropriate methodologies",
    explanation: "Al-Fiqh al-Da'wah systematically studies how to apply Islamic legal principles in dawah contexts - understanding audiences, cultural sensitivities, and effective communication strategies within Islamic parameters."
  },
  {
    question: "How did the Prophet (PBUH) use 'Al-Qisas al-Qur'ani' (Quranic narratives) in dawah?",
    options: [
      "As mere historical stories",
      "As profound lessons addressing his audience's specific circumstances and questions",
      "Only for entertainment",
      "Avoiding them completely"
    ],
    correctAnswer: "As profound lessons addressing his audience's specific circumstances and questions",
    explanation: "The Prophet used Quranic stories (like prophets' struggles) to address his listeners' situations - comforting persecuted Muslims with Yusuf's story, or using Nuh's patience as an example. This shows narrative's power in dawah."
  },
  {
    question: "What is 'Al-Dawah al-Nisa'iyyah' (women's dawah) in classical Islamic tradition?",
    options: [
      "Non-existent as women didn't participate",
      "Limited to teaching other women",
      "An active tradition with female scholars teaching both genders",
      "Only permissible in the home"
    ],
    correctAnswer: "An active tradition with female scholars teaching both genders",
    explanation: "History records many female scholars (like Aisha RA, Umm al-Darda) who taught men and women. Their role in preserving and transmitting knowledge demonstrates Islam's endorsement of women's intellectual dawah participation."
  },
  {
    question: "What was Imam Abu Hanifa's approach to theological dawah debates?",
    options: [
      "Avoiding all theological discussions",
      "Engaging with rigorous logical arguments while grounded in revelation",
      "Only using emotional appeals",
      "Accepting all others' views"
    ],
    correctAnswer: "Engaging with rigorous logical arguments while grounded in revelation",
    explanation: "Abu Hanifa's 'Al-Fiqh al-Akbar' and recorded debates show his method of using systematic logic to defend Islamic beliefs while remaining rooted in Quran and Sunnah - a model for intellectual dawah."
  },
  {
    question: "What is the concept of 'Al-Wasatiyyah' in contemporary dawah contexts?",
    options: [
      "Extremism in religion",
      "Balance and moderation in understanding and presenting Islam",
      "Compromising core beliefs",
      "Mixing all religions together"
    ],
    correctAnswer: "Balance and moderation in understanding and presenting Islam",
    explanation: "Al-Wasatiyyah (Quran 2:143) means presenting Islam as the middle path - avoiding extremes, balancing spirituality with practicality, and justice with mercy - making the message appealing and realistic."
  },
  {
    question: "How did early tafseer scholars approach 'Asbab al-Nuzul' in dawah contexts?",
    options: [
      "Ignoring historical contexts of Quranic verses",
      "Using revelation contexts to show Islam's practical responses to real situations",
      "Creating fictional stories about verses",
      "Considering only linguistic analysis"
    ],
    correctAnswer: "Using revelation contexts to show Islam's practical responses to real situations",
    explanation: "Scholars like Al-Wahidi documented occasions of revelation to demonstrate how Quranic teachings addressed actual circumstances - making dawah more relatable by showing Islam's relevance to human experiences."
  },
  {
    question: "What is 'Al-Dawah al-Ijtimai'iyyah' (social dawah) in contemporary discourse?",
    options: [
      "Isolating from society",
      "Demonstrating Islam's solutions to social problems through practical community work",
      "Only focusing on individual worship",
      "Rejecting all social engagement"
    ],
    correctAnswer: "Demonstrating Islam's solutions to social problems through practical community work",
    explanation: "This approach implements Islamic social principles (charity, justice, family values) through concrete projects - showing rather than just telling Islam's benefits, following the Prophet's establishment of Medina's welfare system."
  },
  {
    question: "What was the approach of the Tabi'in generation in continuing the Prophet's dawah?",
    options: [
      "Mechanically repeating his exact words without understanding contexts",
      "Understanding the wisdom behind his teachings and applying principles to new situations",
      "Creating completely new teachings",
      "Only focusing on political power"
    ],
    correctAnswer: "Understanding the wisdom behind his teachings and applying principles to new situations",
    explanation: "Successors like Sa'id ibn al-Musayyab and Hasan al-Basri derived principles from the Prophet's dawah and applied them creatively to new contexts - establishing the methodology of principled adaptation in dawah."
      },
      {
        question: "What is the concept of 'Mujadalah bil-lati hiya ahsan' in Dawah?",
        options: [
          "Arguing in any way to win the debate",
          "Avoiding all forms of debate",
          "Debating in a manner that is best and most gracious",
          "Using complex theological arguments",
        ],
        correctAnswer: "Debating in a manner that is best and most gracious",
        explanation:
          "'Mujadalah bil-lati hiya ahsan' means debating or arguing in a manner that is best and most gracious. It emphasizes respectful dialogue that aims to reach truth rather than win arguments.",
      },
      {
        question: "What is the concept of 'Daruriyyat' (necessities) in prioritizing Dawah topics?",
        options: [
          "Focusing only on prayer and fasting",
          "Prioritizing essential beliefs and practices before secondary matters",
          "Teaching only what people want to hear",
          "Focusing exclusively on theological debates",
        ],
        correctAnswer: "Prioritizing essential beliefs and practices before secondary matters",
        explanation:
          "Daruriyyat refers to necessities or essentials. In Dawah, it means prioritizing fundamental beliefs (like Tawhid) and practices before moving to secondary or detailed matters.",
      },
      {
        question:
          "What was Prophet Muhammad's (PBUH) instruction to Mu'adh ibn Jabal when sending him to Yemen for Dawah?",
        options: [
          "To focus on collecting taxes",
          "To first call to Tawhid, then prayer, then zakat",
          "To build a mosque immediately",
          "To enforce Islamic law strictly",
        ],
        correctAnswer: "To first call to Tawhid, then prayer, then zakat",
        explanation:
          "Prophet Muhammad (PBUH) instructed Mu'adh to first call people to testify that there is no god but Allah (Tawhid), then to establish prayer, and then to give zakat, showing a step-by-step approach to Dawah.",
      },
      {
        question: "What is the concept of 'Maslaha' (public interest) in relation to Dawah?",
        options: [
          "Ignoring Islamic principles to please others",
          "Considering the welfare and benefit of the audience in the approach",
          "Focusing only on what's easy to explain",
          "Avoiding controversial topics entirely",
        ],
        correctAnswer: "Considering the welfare and benefit of the audience in the approach",
        explanation:
          "Maslaha refers to public interest or welfare. In Dawah, it means considering what approach would be most beneficial for the audience's understanding and acceptance of the message.",
      },
      {
        question: "What is the importance of cultural sensitivity in Dawah?",
        options: [
          "It's not important as Islam transcends culture",
          "It helps distinguish between cultural practices and Islamic teachings",
          "It means accepting all cultural practices",
          "It's only relevant in Western countries",
        ],
        correctAnswer: "It helps distinguish between cultural practices and Islamic teachings",
        explanation:
          "Cultural sensitivity helps distinguish between cultural practices and Islamic teachings, making Dawah more effective by addressing genuine Islamic principles without unnecessary cultural barriers.",
      },
      {
        question: "What is the concept of 'Tadahhul Hadari' (cultural engagement) in contemporary Dawah?",
        options: [
          "Complete isolation from other cultures",
          "Positive engagement with other cultures while maintaining Islamic identity",
          "Adopting all aspects of other cultures",
          "Focusing only on Muslim communities",
        ],
        correctAnswer: "Positive engagement with other cultures while maintaining Islamic identity",
        explanation:
          "Tadahhul Hadari refers to positive cultural engagement, where Muslims interact constructively with other cultures while maintaining their Islamic identity and principles.",
      },
      {
        question: "What is the role of 'Urf' (custom) consideration in Dawah?",
        options: [
          "Rejecting all local customs",
          "Accepting customs that don't contradict Islamic principles",
          "Following only Arab customs",
          "Ignoring customs entirely",
        ],
        correctAnswer: "Accepting customs that don't contradict Islamic principles",
        explanation:
          "Urf refers to custom or convention. In Dawah, considering urf means accepting and working within local customs that don't contradict Islamic principles, making Islam more accessible.",
      },
      {
        question: "What is the concept of 'Fiqh al-Waqi' (understanding reality) in Dawah?",
        options: [
          "Focusing only on theoretical aspects of Islam",
          "Understanding the current reality and context of the audience",
          "Ignoring modern challenges",
          "Studying only classical texts",
        ],
        correctAnswer: "Understanding the current reality and context of the audience",
        explanation:
          "Fiqh al-Waqi refers to understanding reality. In Dawah, it means having a deep understanding of the current reality and context of the audience to make the message relevant and effective.",
      },
      {
        question: "How did Prophet Muhammad (PBUH) employ the Quranic category of 'Mu'allafat al-Qulub' (reconciling hearts) in Dawah following the Battle of Hunayn?",
        options: [
          "He banished former opponents to foreign lands",
          "He gave generous material gifts and livestock to prominent tribal leaders (like Safwan ibn Umayyah and Abu Sufyan) to soften their hearts towards Islam",
          "He confiscated all their pre-existing wealth",
          "He required them to remain silent for one year",
        ],
        correctAnswer: "He gave generous material gifts and livestock to prominent tribal leaders (like Safwan ibn Umayyah and Abu Sufyan) to soften their hearts towards Islam",
        explanation:
          "In Sahih Muslim, Safwan ibn Umayyah stated: 'The Messenger of Allah gave to me when he was the most detestable person to me, and he continued to give to me until he became the most beloved person to me.' This demonstrates wise utilization of material diplomacy to open hearts to faith.",
      },
      {
        question: "What is the core methodology championed in Shaykh al-Islam Ibn Taymiyyah's monumental multi-volume treatise 'Al-Jawab al-Sahih li-man Baddala Din al-Masih'?",
        options: [
          "Dismissing biblical texts without reading them",
          "Systematic internal textual critique of biblical manuscripts, analyzing linguistic historical shifts, and demonstrating that original prophetic teachings matched Islamic Tawheed",
          "Translating European poems into Arabic",
          "Arguing exclusively through political decrees",
        ],
        correctAnswer: "Systematic internal textual critique of biblical manuscripts, analyzing linguistic historical shifts, and demonstrating that original prophetic teachings matched Islamic Tawheed",
        explanation:
          "In 'Al-Jawab al-Sahih', Ibn Taymiyyah conducted groundbreaking comparative textual analysis of the Gospels and Old Testament, using rigorous scriptural and rational evidences to show how original monotheism was corrupted into Trinitarian dogma.",
      },
      {
        question: "In the science of Da'wah methodology, what does 'Fiqh al-Awlawiyyat' (jurisprudence of priorities) dictate when introducing Islam to an entirely unreached society?",
        options: [
          "Beginning immediately with complex inheritance math and penal codes",
          "Establishing the foundational bedrock of Tawheed, the reality of the Hereafter, and the truth of Prophethood before presenting detailed legal duties",
          "Focusing solely on foreign policy and military treaties",
          "Debating minor historical scholarly disagreements",
        ],
        correctAnswer: "Establishing the foundational bedrock of Tawheed, the reality of the Hereafter, and the truth of Prophethood before presenting detailed legal duties",
        explanation:
          "Fiqh al-Awlawiyyat requires prioritizing essentials (Usul) over secondary branches (Furu'). Without first establishing deep conviction in Allah's Oneness and accountability, moral and legal obligations lack meaningful foundation.",
      },
      {
        question: "What profound guideline regarding intellectual calibration in Dawah is recorded from Ali ibn Abi Talib (RA) in Sahih al-Bukhari?",
        options: [
          "\"Speak to everyone in the most esoteric terms available\"",
          "\"Speak to people according to what they can understand; do you wish that Allah and His Messenger should be disbelieved?\"",
          "\"Never explain the meaning of Quranic verses to commoners\"",
          "\"Only scholars are permitted to listen to religious lectures\"",
        ],
        correctAnswer: "\"Speak to people according to what they can understand; do you wish that Allah and His Messenger should be disbelieved?\"",
        explanation:
          "In Sahih al-Bukhari, Ali (RA) emphasized tailoring discourse to the listener's intellectual level (Khatibu an-nasa 'ala qadri 'uqulihim), warning that overloading unlearned minds with obscure details risks driving them to reject divine truth.",
      },
      {
        question: "In his seminal work 'Faysal al-Tafriqah bayn al-Islam wal-Zandaqah', what critical boundary does Imam Abu Hamid al-Ghazali set to protect the Dawah ecosystem from internal extremism?",
        options: [
          "Permitting unconditional takfir against anyone with differing political opinions",
          "Exercising extreme caution against Takfir (excommunication), affirming that declaring a Muslim an apostate without definitive proof is a catastrophic sin",
          "Abolishing the study of Aqeedah completely",
          "Mandating uniform dress codes across all Islamic cultures",
        ],
        correctAnswer: "Exercising extreme caution against Takfir (excommunication), affirming that declaring a Muslim an apostate without definitive proof is a catastrophic sin",
        explanation:
          "Al-Ghazali warned that hasty excommunication (Takfir) causes sectarian strife and dismantles Dawah. He established that so long as an individual affirms the fundamental tenets and does not deny definitive mutawatir consensus, they remain within Islam.",
      },
      {
        question: "How do contemporary scholars (such as the European Council for Fatwa and Research) conceptualize non-Muslim-majority secular nations in modern Dawah terminology?",
        options: [
          "As 'Dar al-Harb' (Abode of War) requiring permanent isolation",
          "As 'Dar al-Dawah' (Abode of Invitation) or 'Dar al-Ahd' (Abode of Covenant), where Muslims are bound by civic laws and tasked with calling people to Islam with wisdom",
          "As forbidden lands where residing is universally sinful",
          "As regions devoid of any spiritual purpose",
        ],
        correctAnswer: "As 'Dar al-Dawah' (Abode of Invitation) or 'Dar al-Ahd' (Abode of Covenant), where Muslims are bound by civic laws and tasked with calling people to Islam with wisdom",
        explanation:
          "Modern jurists classify nations bound by international treaties and visas as Dar al-Ahd / Dar al-Dawah. Living peacefully under legal covenants, Muslims represent Islamic character and actively invite society to truth through constructive citizenship.",
      },
      {
        question: "How does Surah al-Mumtahanah (60:8) balance theological loyalty with practical humanitarian benevolence towards peaceful non-Muslims in Dawah?",
        options: [
          "It commands boycotting all social interaction with non-Muslims",
          "It explicitly permits and encourages showing righteousness, kindness (Al-Birr), and justice to non-Muslims who have not fought Muslims or expelled them from their homes",
          "It requires adopting non-Muslim religious beliefs",
          "It forbids feeding or smiling at non-Muslim neighbors",
        ],
        correctAnswer: "It explicitly permits and encourages showing righteousness, kindness (Al-Birr), and justice to non-Muslims who have not fought Muslims or expelled them from their homes",
        explanation:
          "Surah al-Mumtahanah (60:8) uses the word 'Tabarruhum'—derived from Birr (the highest form of active kindness, identical to Birr al-Walidayn)—establishing that compassion and justice towards non-combative non-Muslims are sanctioned by Allah.",
      },
      {
        question: "What is 'Tahqiq al-Manat' (verifying the locus/context of a ruling) and why is it vital for contemporary Da'is and Muftis living in minority contexts?",
        options: [
          "Checking the grammatical correctness of Arabic poetry",
          "Accurately assessing the specific factual reality, social conditions, and psychological state of an individual or society before applying a legal text or ruling",
          "Calculating the lunar calendar using telescopes",
          "Translating legal documents into English",
        ],
        correctAnswer: "Accurately assessing the specific factual reality, social conditions, and psychological state of an individual or society before applying a legal text or ruling",
        explanation:
          "In Usul al-Fiqh, Tahqiq al-Manat is ensuring that a recognized Shariah ruling correctly applies to a concrete, real-world case. A Da'i must understand the nuance of lived context so that applying a ruling does not produce harm contrary to Shariah objectives.",
      },
      {
        question: "How has the evidentiary discourse on 'I'jaz al-Quran' (the miraculous inimitability of the Quran) evolved in modern intellectual Dawah?",
        options: [
          "It has been completely abandoned by modern scholars",
          "While classical discourse focused primarily on Arabic rhetoric and syntax, contemporary Dawah expands to include legislative excellence (I'jaz Tashri'i), psychological coherence, and unassailable cosmic insights",
          "It now relies entirely on numerological calculations",
          "It is restricted only to native Arabic speakers",
        ],
        correctAnswer: "While classical discourse focused primarily on Arabic rhetoric and syntax, contemporary Dawah expands to include legislative excellence (I'jaz Tashri'i), psychological coherence, and unassailable cosmic insights",
        explanation:
          "For non-Arabic speakers who cannot perceive grammatical subtleties directly, scholars like al-Zarqani and modern apologists emphasize the Quran's transcendent moral worldview, legal justice, historical accuracy, and profound psychological impact.",
      },
      {
        question: "In the epistemology of Dawah established by scholars like Ibn al-Qayyim, what is the proper relationship between 'Aql' (sound reason) and 'Naql' (authentic revelation)?",
        options: [
          "Sound reason and authentic revelation are in eternal, irreconcilable opposition",
          "Authentic explicit revelation never contradicts sound, objective human intellect ('Aql Sarih); apparent contradiction arises only from corrupt logic or unauthentic texts",
          "Reason must be discarded entirely when speaking about faith",
          "Modern philosophy always supersedes Quranic texts",
        ],
        correctAnswer: "Authentic explicit revelation never contradicts sound, objective human intellect ('Aql Sarih); apparent contradiction arises only from corrupt logic or unauthentic texts",
        explanation:
          "Ibn Taymiyyah articulated this in 'Dar' Ta'arud al-Aql wan-Naql', demonstrating that true divine revelation and pristine human reason inherently harmonize, providing Da'is with confidence to rationally engage philosophical inquiries.",
      },
    ],
  },
}
    
export default dawahCategory
