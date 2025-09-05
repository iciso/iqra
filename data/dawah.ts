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
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!dawahCategory.levels.intermediate) {
  dawahCategory.levels.intermediate = [...dawahCategory.levels.easy]
}

export default dawahCategory
