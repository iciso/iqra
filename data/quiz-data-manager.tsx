import type { QuizCategory, DifficultyLevel, QuizQuestion } from "@/types/quiz"

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
          question: "In which Surah is Ayat al-Kursi (The Throne Verse) found?",
          options: ["Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah"],
          correctAnswer: "Al-Baqarah",
          explanation: "Ayat al-Kursi (the Throne Verse) is verse 255 of Surah Al-Baqarah.",
        },
        {
          question:
            "Which Surah does not start with 'Bismillah ir-Rahman ir-Rahim' (In the name of Allah, the Most Gracious, the Most Merciful)?",
          options: ["Al-Fatiha", "Al-An'am", "At-Tawbah", "Yunus"],
          correctAnswer: "At-Tawbah",
          explanation:
            "Surah At-Tawbah (The Repentance) is the only Surah in the Quran that does not begin with the Basmala.",
        },
        {
          question: "Which Surah is known as the 'Heart of the Quran'?",
          options: ["Yasin", "Ar-Rahman", "Al-Mulk", "Al-Waqi'ah"],
          correctAnswer: "Yasin",
          explanation:
            "Surah Yasin is often referred to as the 'Heart of the Quran' due to its profound themes and spiritual significance.",
        },
        {
          question: "How many prophets are mentioned by name in the Quran?",
          options: ["18", "25", "30", "35"],
          correctAnswer: "25",
          explanation: "There are 25 prophets explicitly mentioned by name in the Quran.",
        },
        {
          question: "Which angel is responsible for revealing the Quran to Prophet Muhammad (peace be upon him)?",
          options: ["Jibril (Gabriel)", "Mikail (Michael)", "Israfil", "Azrael"],
          correctAnswer: "Jibril (Gabriel)",
          explanation:
            "Angel Jibril (Gabriel) was the intermediary through whom Allah (SWT) revealed the Quran to Prophet Muhammad (peace be upon him).",
        },
        {
          question: "During which month was the Quran first revealed?",
          options: ["Ramadan", "Shawwal", "Rajab", "Muharram"],
          correctAnswer: "Ramadan",
          explanation:
            "The Quran began to be revealed to Prophet Muhammad (peace be upon him) during the month of Ramadan.",
        },
        {
          question: "What is the meaning of the word 'Allah'?",
          options: ["The Creator", "The Most Merciful", "The One and Only God", "The Sustainer"],
          correctAnswer: "The One and Only God",
          explanation: "'Allah' is the unique name of the One and Only God in Islam, having no plural or gender.",
        },
        {
          question: "What is the significance of 'Laylat al-Qadr' (The Night of Power)?",
          options: [
            "The Prophet's birthday",
            "The night the Kaaba was built",
            "The night the Quran was first revealed",
            "The night of the Hijra",
          ],
          correctAnswer: "The night the Quran was first revealed",
          explanation:
            "Laylat al-Qadr is the night in Ramadan when the first verses of the Quran were revealed to Prophet Muhammad (peace be upon him).",
        },
        {
          question: "Which Surah is named after an insect?",
          options: ["An-Nahl (The Bee)", "Al-Ankabut (The Spider)", "An-Naml (The Ant)", "Al-Fil (The Elephant)"],
          correctAnswer: "An-Naml (The Ant)",
          explanation: "Surah An-Naml, meaning 'The Ant,' is named after the ants mentioned in its verses.",
        },
        {
          question: "Which Surah discusses the story of the 'People of the Cave' (Ashab al-Kahf)?",
          options: ["Yusuf", "Al-Kahf", "Al-Isra", "Al-Anbiya"],
          correctAnswer: "Al-Kahf",
          explanation: "Surah Al-Kahf narrates the story of a group of young believers who sought refuge in a cave.",
        },
        {
          question: "What is the direction of prayer (Qibla) for Muslims?",
          options: ["Jerusalem", "Damascus", "Makkah (Kaaba)", "Medina"],
          correctAnswer: "Makkah (Kaaba)",
          explanation: "Muslims around the world face the Kaaba in Makkah during their daily prayers (Salat).",
        },
        {
          question: "Which Surah is known as 'The Key'?",
          options: ["Al-Fatiha", "Yasin", "Al-Mulk", "Al-Falaq"],
          correctAnswer: "Al-Fatiha",
          explanation:
            "Surah Al-Fatiha is sometimes referred to as 'The Key' because it opens the Quran and is essential to prayer.",
        },
        {
          question: "How many parts (Juz') is the Quran divided into?",
          options: ["20", "30", "40", "50"],
          correctAnswer: "30",
          explanation: "The Quran is divided into 30 equal parts known as Juz' (plural: Ajza').",
        },
        {
          question: "Which Surah is named after a fruit?",
          options: ["At-Tin (The Fig)", "Az-Zumar (The Troops)", "Ar-Ra'd (The Thunder)", "Al-Qasas (The Stories)"],
          correctAnswer: "At-Tin (The Fig)",
          explanation: "Surah At-Tin, meaning 'The Fig,' begins by swearing by the fig and the olive.",
        },
        {
          question: "Which Surah discusses the Battle of Badr?",
          options: ["Al-Anfal", "Al-Imran", "Al-Ahzab", "Muhammad"],
          correctAnswer: "Al-Anfal",
          explanation: "Surah Al-Anfal extensively discusses the events and lessons learned from the Battle of Badr.",
        },
        {
          question: "What is the meaning of the word 'Tawhid'?",
          options: ["Charity", "Justice", "The Oneness of Allah", "Forgiveness"],
          correctAnswer: "The Oneness of Allah",
          explanation:
            "'Tawhid' is the fundamental concept in Islam emphasizing the absolute oneness and uniqueness of Allah.",
        },
        {
          question: "Which Surah is known as 'The Bride of the Quran'?",
          options: ["Ar-Rahman", "Yasin", "Al-Kahf", "Al-Mulk"],
          correctAnswer: "Ar-Rahman",
          explanation:
            "Surah Ar-Rahman is often called 'The Bride of the Quran' due to its beautiful and rhythmic style and its focus on the blessings of Allah.",
        },
        {
          question: "In which Surah is the story of Prophet Yusuf (Joseph) narrated in detail?",
          options: ["Al-Baqarah", "Yusuf", "Hud", "Ibrahim"],
          correctAnswer: "Yusuf",
          explanation: "Surah Yusuf uniquely narrates the complete story of Prophet Yusuf (Joseph).",
        },
        {
          question: "What is the name given to the verses of the Quran?",
          options: ["Hadith", "Ayat", "Sunnah", "Thikr"],
          correctAnswer: "Ayat",
          explanation: "The verses of the Quran are called 'Ayat,' meaning 'signs' or 'proofs' of Allah.",
        },
        {
          question: "Which Surah mentions the story of the elephant?",
          options: ["Al-Fil", "Al-Quraish", "Al-Ma'un", "Al-Kafirun"],
          correctAnswer: "Al-Fil",
          explanation:
            "Surah Al-Fil (The Elephant) recounts the story of Abraha's army and their elephant attempting to destroy the Kaaba.",
        },
        {
          question: "What is the meaning of 'Islam'?",
          options: ["Peace", "Submission to the will of Allah", "Righteousness", "Charity"],
          correctAnswer: "Submission to the will of Allah",
          explanation: "'Islam' literally means 'submission' or 'surrender' to the will of Allah (God).",
        },
      ],
      advanced: [
        {
          question:
            "What is the significance of the 'Seven Oft-Repeated Verses' ( السَّبْعُ ٱلْمَثَانِي ) mentioned in Surah Al-Hijr (15:87)?",
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
          question:
            "Analyze the literary device of 'iltifat' (الِالتِفَاتُ) in Surah Al-Kahf. Provide an example of a shift in pronoun or grammatical person and its rhetorical effect.",
          options: [
            "The consistent use of the third person to maintain objectivity.",
            "The shift from singular to plural to denote a change in addressee or focus, such as the narrative shift when addressing the sleepers of the cave directly.",
            "The frequent use of imperative verbs to emphasize divine commands.",
            "The exclusive use of metaphors to illustrate abstract concepts.",
          ],
          correctAnswer:
            "The shift from singular to plural to denote a change in addressee or focus, such as the narrative shift when addressing the sleepers of the cave directly.",
          explanation:
            "'Iltifat' is a rhetorical device involving a shift in grammatical person, number, or tense to engage the reader or listener and create a specific effect. In Surah Al-Kahf, there are instances where the narrative shifts from describing the sleepers in the third person to addressing them directly (hypothetically) in the second person, creating a more vivid and engaging scene.",
        },
        {
          question:
            "Discuss the concept of 'Muhkamat' ( مُحْكَمَات ) and 'Mutashabihat' ( مُتَشَابِهَات ) verses in the Quran as outlined in Surah Al-Imran (3:7). What is the primary purpose of distinguishing between these two categories?",
          options: [
            "To create ambiguity and test the faith of believers.",
            "To establish a hierarchy of importance among different Quranic verses.",
            "To differentiate between verses with clear, unambiguous meanings and those open to interpretation, emphasizing the need for sound knowledge and preventing misinterpretations by those with ill intentions.",
            "To provide different levels of understanding for different intellectual capacities.",
          ],
          correctAnswer:
            "To differentiate between verses with clear, unambiguous meanings and those open to interpretation, emphasizing the need for sound knowledge and preventing misinterpretations by those with ill intentions.",
          explanation:
            "'Muhkamat' are verses with clear and established meanings, forming the foundation of Islamic law and belief. 'Mutashabihat' are verses with allegorical or ambiguous meanings that require deeper understanding and should be interpreted in light of the 'Muhkamat' to avoid deviation. The distinction aims to ensure a consistent and accurate understanding of the Quran.",
        },
        {
          question:
            "Analyze the significance of the oath taken by Allah (SWT) using various celestial bodies and natural phenomena in the opening verses of Surah Ash-Shams (91). What rhetorical purpose do these oaths serve?",
          options: [
            "To simply list the wonders of creation.",
            "To emphasize the power and majesty of Allah (SWT).",
            "To draw parallels between the order and regularity of the cosmos and the moral and spiritual order being presented, highlighting the importance of the subsequent message about the soul and its purification or corruption.",
            "To provide scientific insights into the workings of the universe.",
          ],
          correctAnswer:
            "To draw parallels between the order and regularity of the cosmos and the moral and spiritual order being presented, highlighting the importance of the subsequent message about the soul and its purification or corruption.",
          explanation:
            "The series of oaths in Surah Ash-Shams, involving the sun, moon, day, night, heaven, earth, and the soul, are not merely descriptive. They serve to establish a profound connection between the grand order of the universe and the inherent nature of the human soul. The regularity and balance in the cosmos underscore the importance of achieving a similar balance and purity within oneself.",
        },
        {
          question:
            "Discuss the theological implications of the concept of 'Fitra' ( فِطْرَة ) as mentioned in Surah Ar-Rum (30:30). How does this concept relate to the innate human inclination towards monotheism?",
          options: [
            "It refers to the physical attributes of human beings.",
            "It describes the cultural norms prevalent in early Arabia.",
            "It signifies the inherent, God-given disposition within every human being towards recognizing and submitting to the One God (Allah), even if this inclination is later obscured by external influences.",
            "It implies that humans are born with a pre-programmed set of religious beliefs.",
          ],
          correctAnswer:
            "It signifies the inherent, God-given disposition within every human being towards recognizing and submitting to the One God (Allah), even if this inclination is later obscured by external influences.",
          explanation:
            "'Fitra' in Islamic theology refers to the natural, innate disposition with which Allah (SWT) has created humanity. This inherent nature includes a primordial inclination towards recognizing and worshipping the One True God. While external factors can deviate a person from this natural state, the 'Fitra' remains a fundamental aspect of the human soul.",
        },
        {
          question:
            "Analyze the linguistic structure and rhetorical impact of the repeated phrase 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' (So which of the favors of your Lord will you deny?) in Surah Ar-Rahman (55). What is the intended effect on the reader/listener?",
          options: [
            "To provide a rhythmic quality to the Surah.",
            "To confuse the disbelievers.",
            "To emphasize the countless blessings of Allah (SWT) bestowed upon both humans and jinn, challenging them to acknowledge these favors and reflect on their ingratitude.",
            "To serve as a grammatical marker between different themes.",
          ],
          correctAnswer:
            "To emphasize the countless blessings of Allah (SWT) bestowed upon both humans and jinn, challenging them to acknowledge these favors and reflect on their ingratitude.",
          explanation:
            "The repeated rhetorical question in Surah Ar-Rahman serves as a powerful reminder of Allah's (SWT) abundant blessings in various aspects of creation and sustenance. By addressing both humans and jinn, it underscores the universality of these favors and prompts reflection on the denial or neglect of these divine gifts.",
        },
        {
          question:
            "Discuss the legal and ethical implications of the concept of 'Istislah' (الِاسْتِصْلَاحُ) or 'Maslahah Mursalah' (الْمَصْلَحَة الْمُرْسَلَة) as a source of Islamic jurisprudence. Can you identify a potential application of this principle based on a scenario presented in the Quran?",
          options: [
            "It refers to strict adherence to the literal interpretation of the Quran and Sunnah.",
            "It allows for the consideration of public interest in legal rulings, even if not explicitly supported by a specific text, provided it does not contradict the fundamental principles of Islam. An example could be the implied permissibility of constructing secure prisons based on the Quranic emphasis on justice and preventing harm.",
            "It prioritizes the consensus of scholars above textual evidence.",
            "It advocates for the abrogation of earlier rulings based on changing societal norms.",
          ],
          correctAnswer:
            "It allows for the consideration of public interest in legal rulings, even if not explicitly supported by a specific text, provided it does not contradict the fundamental principles of Islam. An example could be the implied permissibility of constructing secure prisons based on the Quranic emphasis on justice and preventing harm.",
          explanation:
            "'Istislah' or 'Maslahah Mursalah' is a principle in Islamic jurisprudence that allows for rulings based on public interest, provided they align with the broader objectives and principles of Sharia. While the Quran doesn't explicitly detail the construction of prisons, the overarching emphasis on justice, preventing harm, and maintaining social order could be used as a basis for their permissibility under this principle.",
        },
        {
          question:
            "Analyze the narrative structure of Surah Yusuf. How does the seemingly fragmented storytelling contribute to the Surah's overall themes of divine providence, patience, and the consequences of envy?",
          options: [
            "The fragmented structure reflects the chaotic nature of Joseph's life.",
            "The non-linear narrative is a literary flaw.",
            "The seemingly disjointed events, when viewed retrospectively, reveal a clear unfolding of Allah's (SWT) plan, demonstrating His ultimate control over events and highlighting the importance of patience through trials and the destructive nature of envy.",
            "The structure is designed to confuse the reader and emphasize the unpredictability of life.",
          ],
          correctAnswer:
            "The seemingly disjointed events, when viewed retrospectively, reveal a clear unfolding of Allah's (SWT) plan, demonstrating His ultimate control over events and highlighting the importance of patience through trials and the destructive nature of envy.",
          explanation:
            "While the events in Surah Yusuf may appear disconnected at times, the overall narrative arc reveals a masterful unfolding of divine will. The trials and tribulations faced by Prophet Yusuf (peace be upon him), the envy of his brothers, and the eventual reunion are all interconnected, demonstrating Allah's (SWT) ultimate plan and the virtues of patience and forgiveness.",
        },
        {
          question:
            "Discuss the Quranic concept of 'Tazkiyah' ( تَزْكِيَة ), often translated as purification or sanctification of the soul. How is this process achieved according to the Quranic teachings?",
          options: [
            "Through rigorous asceticism and isolation from society.",
            "Primarily through ritualistic practices without inner reflection.",
            "Through sincere faith in Allah (SWT), obedience to His commands, remembrance of Him (Dhikr), striving against one's ego (Nafs), seeking knowledge, and doing righteous deeds.",
            "Through seeking intercession from saints and righteous individuals.",
          ],
          correctAnswer:
            "Through sincere faith in Allah (SWT), obedience to His commands, remembrance of Him (Dhikr), striving against one's ego (Nafs), seeking knowledge, and doing righteous deeds.",
          explanation:
            "'Tazkiyah' is a holistic process of spiritual purification and growth. The Quran emphasizes that it is achieved through a combination of inner faith, conscious effort in obeying Allah's (SWT) commands, consistent remembrance of Him, striving to overcome negative desires, seeking beneficial knowledge, and engaging in righteous actions. It is a continuous journey of self-improvement and drawing closer to God.",
        },
        {
          question:
            "Analyze the significance of the 'Trust' ( الْأَمَانَة ) mentioned in Surah Al-Ahzab (33:72) that was offered to the heavens, the earth, and the mountains, but they declined to bear it, and mankind undertook it. What are the different interpretations of this 'Trust'?",
          options: [
            "It refers solely to the five pillars of Islam.",
            "It is the responsibility of maintaining the physical environment.",
            "Interpretations vary, including the capacity for reason and free will, moral responsibility, the obligation to obey divine law, and the potential for both spiritual ascent and descent. Mankind's acceptance highlights both our unique potential and the immense responsibility that comes with it.",
            "It signifies the secret knowledge of the unseen.",
          ],
          correctAnswer:
            "Interpretations vary, including the capacity for reason and free will, moral responsibility, the obligation to obey divine law, and the potential for both spiritual ascent and descent. Mankind's acceptance highlights both our unique potential and the immense responsibility that comes with it.",
          explanation:
            "The 'Trust' (Al-Amanah) mentioned in this verse has been interpreted in various ways by Quranic scholars. These interpretations generally revolve around the unique capacity bestowed upon humanity, such as intellect, free will, and the ability to understand and adhere to divine law. Accepting this trust signifies both humanity's elevated status and the heavy responsibility of moral agency and accountability.",
        },
        {
          question:
            "Discuss the Quranic principles of conflict resolution and reconciliation as exemplified in specific verses. How does the Quran guide believers in addressing disputes and promoting peace?",
          options: [
            "The Quran advocates for immediate and forceful retaliation.",
            "The Quran encourages ignoring disputes to maintain harmony.",
            "The Quran emphasizes justice, fairness, and reconciliation as primary means of resolving conflict, urging believers to mediate with equity, seek peaceful settlements, and forgive when appropriate, as seen in verses like Al-Hujurat (49:9-10) and An-Nisa (4:128).",
            "The Quran permits deception and manipulation to achieve peace.",
          ],
          correctAnswer:
            "The Quran emphasizes justice, fairness, and reconciliation as primary means of resolving conflict, urging believers to mediate with equity, seek peaceful settlements, and forgive when appropriate, as seen in verses like Al-Hujurat (49:9-10) and An-Nisa (4:128).",
          explanation:
            "The Quran provides a comprehensive framework for conflict resolution rooted in justice and reconciliation. Verses encourage believers to act as mediators, to seek fair settlements, and to prioritize peace. While justice is paramount, forgiveness and striving for amicable resolutions are highly valued in Islamic teachings.",
        },
        {
          question:
            "Analyze the Quranic discourse on wealth and poverty. What are the key ethical principles outlined in the Quran regarding the acquisition, distribution, and use of wealth?",
          options: [
            "The Quran condemns the accumulation of wealth.",
            "The Quran promotes unrestricted capitalism.",
            "The Quran emphasizes that wealth is a test, advocating for its acquisition through lawful means, its distribution through Zakat and charity, and its use responsibly while avoiding extravagance and hoarding. It highlights the rights of the poor and needy in one's wealth (e.g., Adh-Dhariyat 51:19).",
            "The Quran suggests that poverty is a sign of divine favor.",
          ],
          correctAnswer:
            "The Quran emphasizes that wealth is a test, advocating for its acquisition through lawful means, its distribution through Zakat and charity, and its use responsibly while avoiding extravagance and hoarding. It highlights the rights of the poor and needy in one's wealth (e.g., Adh-Dhariyat 51:19).",
          explanation:
            "The Quran views wealth as a trial and a trust from Allah (SWT). It stresses the importance of earning it ethically, fulfilling the obligation of Zakat, practicing voluntary charity (Sadaqah), and utilizing it responsibly without extravagance or miserliness. The Quran also explicitly recognizes the rights of the less fortunate in the wealth of the affluent.",
        },
        {
          question:
            "Discuss the Quranic perspective on the relationship between humans and the environment. What are the primary responsibilities entrusted to humanity as 'Khalifa' ( خَلِيفَة ) or stewards of the Earth?",
          options: [
            "Humans have the right to exploit the environment for their own benefit without any restrictions.",
            "The environment has no intrinsic value and exists solely for human use.",
            "Humanity is entrusted with the responsibility of stewardship (Khilafa), meaning we are accountable for the care, preservation, and sustainable use of the Earth's resources. This includes avoiding waste, preventing pollution, and maintaining ecological balance (e.g., Surah Ar-Rum 30:41).",
            "The Quran advocates for complete detachment from the natural world.",
          ],
          correctAnswer:
            "Humanity is entrusted with the responsibility of stewardship (Khilafa), meaning we are accountable for the care, preservation, and sustainable use of the Earth's resources. This includes avoiding waste, preventing pollution, and maintaining ecological balance (e.g., Surah Ar-Rum 30:41).",
          explanation:
            "The Quran designates humans as 'Khalifa' or stewards of the Earth, implying a profound responsibility for its well-being. This stewardship necessitates the just and sustainable utilization of natural resources, the avoidance of environmental degradation, and the preservation of biodiversity, recognizing the interconnectedness of all creation.",
        },
        {
          question:
            "Analyze the Quranic verses pertaining to the concept of 'Naskh' ( نَسْخ ), or abrogation. What are the conditions and scholarly debates surrounding the abrogation of certain verses by others?",
          options: [
            "All Quranic verses are eternally binding and cannot be abrogated.",
            "Abrogation was a common practice throughout the Quran's revelation, leading to significant contradictions.",
            "The concept of 'Naskh' refers to the cancellation or modification of specific rulings in earlier verses by later revelations, primarily within the realm of legal injunctions. There are strict scholarly conditions for accepting abrogation, and the extent and wisdom of abrogation are subjects of detailed discussion among Islamic scholars.",
            "Only the Sunnah can abrogate Quranic verses.",
          ],
          correctAnswer:
            "The concept of 'Naskh' refers to the cancellation or modification of specific rulings in earlier verses by later revelations, primarily within the realm of legal injunctions. There are strict scholarly conditions for accepting abrogation, and the extent and wisdom of abrogation are subjects of detailed discussion among Islamic scholars.",
          explanation:
            "'Naskh' is a complex topic in Quranic studies, referring to the abrogation of specific legal rulings in earlier verses by later ones. This primarily concerns practical injunctions, and there are rigorous scholarly criteria for establishing abrogation. The wisdom behind it is understood to be part of the gradual unfolding of Islamic law. The number of definitively abrogated verses is a subject of debate among scholars.",
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
          question: "How many obligatory (fard) prayers are there each day?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: "Five",
          explanation: "Muslims are obligated to perform five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        },
        {
          question: "What is the direction Muslims face during prayer (Salat)?",
          options: ["Jerusalem", "Rome", "Makkah (Kaaba)", "Madinah"],
          correctAnswer: "Makkah (Kaaba)",
          explanation: "The Qibla, the direction of prayer, is towards the Kaaba in Makkah.",
        },
        {
          question: "What is the month of fasting called in Islam?",
          options: ["Shawwal", "Ramadan", "Dhul Hijjah", "Muharram"],
          correctAnswer: "Ramadan",
          explanation:
            "Ramadan is the ninth month of the Islamic calendar, during which Muslims fast from dawn till sunset.",
        },
        {
          question: "What is Zakat?",
          options: [
            "Voluntary charity",
            "A type of prayer",
            "Obligatory charity for those who meet certain criteria",
            "A pilgrimage to Makkah",
          ],
          correctAnswer: "Obligatory charity for those who meet certain criteria",
          explanation: "Zakat is the third pillar of Islam, an obligatory act of charity for eligible Muslims.",
        },
        {
          question: "What is Hajj?",
          options: [
            "The declaration of faith",
            "The daily prayers",
            "The pilgrimage to Makkah",
            "The month of fasting",
          ],
          correctAnswer: "The pilgrimage to Makkah",
          explanation:
            "Hajj is the fifth pillar of Islam, a pilgrimage to Makkah that every able-bodied Muslim must perform once in their lifetime.",
        },
        {
          question: "What is 'wudu'?",
          options: [
            "A type of prayer",
            "Fasting before dawn",
            "Ablution (ritual washing) before prayer",
            "A celebration after fasting",
          ],
          correctAnswer: "Ablution (ritual washing) before prayer",
          explanation: "Wudu is the ritual purification performed by Muslims before Salat (prayer).",
        },
        {
          question: "What is the meaning of 'halal'?",
          options: ["Forbidden", "Permissible according to Islamic law", "Discouraged", "Neutral"],
          correctAnswer: "Permissible according to Islamic law",
          explanation: "Halal refers to things and actions that are permissible according to Islamic law.",
        },
        {
          question: "What is the meaning of 'haram'?",
          options: ["Permissible", "Encouraged", "Neutral", "Forbidden according to Islamic law"],
          correctAnswer: "Forbidden according to Islamic law",
          explanation: "Haram refers to things and actions that are forbidden according to Islamic law.",
        },
        {
          question: "Eating which of the following is generally considered 'haram' for Muslims?",
          options: ["Fish", "Chicken", "Beef", "Pork"],
          correctAnswer: "Pork",
          explanation: "The Quran explicitly prohibits the consumption of pork.",
        },
        {
          question: "What is the 'adhan'?",
          options: [
            "The call to prayer",
            "A supplication made after prayer",
            "A chapter in the Quran",
            "A religious festival",
          ],
          correctAnswer: "The call to prayer",
          explanation: "The adhan is the Islamic call to prayer, recited by a muezzin.",
        },
        {
          question: "What is 'rak'ah'?",
          options: ["A verse in the Quran", "A unit of prayer in Salat", "A type of charity", "A pillar of Islam"],
          correctAnswer: "A unit of prayer in Salat",
          explanation: "A rak'ah is a prescribed set of movements and recitations performed during Salat.",
        },
        {
          question: "What is 'sujud'?",
          options: ["Standing in prayer", "Bowing in prayer", "Prostration in prayer", "Sitting in prayer"],
          correctAnswer: "Prostration in prayer",
          explanation:
            "Sujud is the act of prostrating oneself on the ground during Salat as a sign of submission to Allah.",
        },
        {
          question: "What is 'tashahhud'?",
          options: [
            "The opening chapter of the Quran",
            "A recitation during the sitting position in Salat",
            "The call to fast",
            "The celebration of Eid",
          ],
          correctAnswer: "A recitation during the sitting position in Salat",
          explanation: "Tashahhud is the attestation of faith recited while sitting during Salat.",
        },
        {
          question: "What is 'siyam'?",
          options: ["Prayer", "Fasting", "Charity", "Pilgrimage"],
          correctAnswer: "Fasting",
          explanation: "Siyam is the act of fasting, particularly during the month of Ramadan.",
        },
        {
          question: "What is 'ihram'?",
          options: [
            "The state of ritual purity for Hajj and Umrah",
            "The final sermon of the Prophet",
            "The celebration at the end of Ramadan",
            "The clothing worn during prayer",
          ],
          correctAnswer: "The state of ritual purity for Hajj and Umrah",
          explanation:
            "Ihram is a sacred state which a Muslim must enter before performing the rituals of Hajj or Umrah.",
        },
        {
          question: "What is 'tawaf'?",
          options: [
            "Standing on Mount Arafat",
            "Throwing stones at the pillars",
            "Circumambulating the Kaaba",
            "Praying in the mosque",
          ],
          correctAnswer: "Circumambulating the Kaaba",
          explanation:
            "Tawaf is the act of circling the Kaaba seven times in an anti-clockwise direction during Hajj and Umrah.",
        },
        {
          question: "What is 'sa'i'?",
          options: [
            "The sermon during Friday prayer",
            "The journey between the hills of Safa and Marwa",
            "The animal sacrifice during Eid al-Adha",
            "The breaking of the fast",
          ],
          correctAnswer: "The journey between the hills of Safa and Marwa",
          explanation:
            "Sa'i is the ritual of walking or running seven times between the hills of Safa and Marwa during Hajj and Umrah.",
        },
        {
          question: "What is 'Eid al-Fitr'?",
          options: [
            "The festival of sacrifice",
            "The celebration marking the end of Ramadan",
            "The day of Arafat",
            "The first day of the Islamic year",
          ],
          correctAnswer: "The celebration marking the end of Ramadan",
          explanation: "Eid al-Fitr is the festival that marks the end of the month of Ramadan.",
        },
        {
          question: "What is 'Eid al-Adha'?",
          options: [
            "The celebration marking the end of Hajj",
            "The festival of sacrifice commemorating Prophet Ibrahim's willingness to sacrifice his son",
            "The celebration of the Prophet's birthday",
            "The day the Quran was revealed",
          ],
          correctAnswer: "The festival of sacrifice commemorating Prophet Ibrahim's willingness to sacrifice his son",
          explanation:
            "Eid al-Adha is the festival of sacrifice, celebrated in commemoration of Prophet Ibrahim's (Abraham) willingness to sacrifice his son as an act of obedience to God.",
        },
        {
          question: "What is 'qiblah'?",
          options: [
            "The first pillar of Islam",
            "The direction Muslims face during prayer",
            "The month of fasting",
            "The call to prayer",
          ],
          correctAnswer: "The direction Muslims face during prayer",
          explanation:
            "Qiblah is the direction that Muslims face during their prayers, which is towards the Kaaba in Makkah.",
        },
        {
          question: "What is 'masjid'?",
          options: [
            "A holy book",
            "A place of worship for Muslims (mosque)",
            "A religious scholar",
            "A type of Islamic clothing",
          ],
          correctAnswer: "A place of worship for Muslims (mosque)",
          explanation: "Masjid is the Arabic word for mosque, a place where Muslims gather for prayer and worship.",
        },
        {
          question: "What is 'imaan'?",
          options: ["Action", "Faith or belief", "Charity", "Knowledge"],
          correctAnswer: "Faith or belief",
          explanation:
            "Imaan refers to faith or belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree.",
        },
        {
          question: "What is 'ihsan'?",
          options: ["Perfection or excellence in worship", "Anger", "Ignorance", "Laziness"],
          correctAnswer: "Perfection or excellence in worship",
          explanation:
            "Ihsan means perfection or excellence, particularly in the way one worships Allah and interacts with others.",
        },
        {
          question: "What is 'du'a'?",
          options: [
            "A chapter of the Quran",
            "A voluntary prayer",
            "A supplication or invocation to Allah",
            "The call to prayer before dawn",
          ],
          correctAnswer: "A supplication or invocation to Allah",
          explanation: "Du'a is a personal prayer or supplication made by a Muslim directly to Allah.",
        },
      ],
      advanced: [
        {
          question: "What is 'Ijma' in Islamic jurisprudence?",
          options: ["Consensus", "Analogy", "Precedent", "Interpretation"],
          correctAnswer: "Consensus",
          explanation: "'Ijma' refers to the consensus of Muslim scholars on a matter of Islamic law.",
        },
        {
          question:
            "What is the primary legal basis (Asl) for determining the permissibility (Hill) or prohibition (Hurmah) of actions in Islamic jurisprudence?",
          options: [
            "Al-Istishab (Presumption of Continuity)",
            "Al-Maslahah al-Mursalah (Considerations of Public Interest)",
            "Nusus ash-Shar'iyyah (The Textual Sources)",
            "'Urf (Custom)",
          ],
          correctAnswer: "Nusus ash-Shar'iyyah (The Textual Sources)",
          explanation:
            "The Quran and the Sunnah are the foundational sources for determining the Shari'ah rulings. Other principles are generally applied when these primary texts are silent or require interpretation.",
        },
        {
          question: "Which of the following best describes the concept of 'Istislah' in Islamic legal theory?",
          options: [
            "Seeking the best outcome based on textual evidence.",
            "Deriving rulings based on analogical reasoning.",
            "Prioritizing the general welfare and benefit of the community.",
            "Maintaining the legal status quo unless evidence suggests otherwise.",
          ],
          correctAnswer: "Prioritizing the general welfare and benefit of the community.",
          explanation:
            "Istislah (or Maslahah al-Mursalah) is a method of legal reasoning that considers the overall benefit and welfare of the community in deriving rulings, especially in areas where explicit textual guidance is lacking.",
        },
        {
          question:
            "In the Hanafi school of thought, what is the status of 'Istihsan' (juristic preference) as a source of law?",
          options: [
            "It is entirely rejected as it constitutes subjective opinion.",
            "It is a primary independent source alongside the Quran and Sunnah.",
            "It is a subsidiary source allowing deviation from strict analogy for a stronger public interest or established custom.",
            "It is considered a form of weak analogy and rarely applied.",
          ],
          correctAnswer:
            "It is a subsidiary source allowing deviation from strict analogy for a stronger public interest or established custom.",
          explanation:
            "Istihsan allows a jurist to depart from the conclusion indicated by strict analogy (Qiyas) to a ruling that is considered better or more equitable based on broader principles of Shari'ah, public interest, or prevailing custom.",
        },
        {
          question:
            "What is the fundamental difference between 'Wajib' (obligatory) and 'Mandub' (recommended) acts in Fiqh?",
          options: [
            "Wajib acts are rewarded, while Mandub acts are not.",
            "Wajib acts are established by definitive proof, while Mandub acts are based on weaker evidence.",
            "The omission of a Wajib act entails sin and potential legal consequences, while the omission of a Mandub act is generally not sinful.",
            "Wajib acts are related to worship, while Mandub acts are related to social conduct.",
          ],
          correctAnswer:
            "The omission of a Wajib act entails sin and potential legal consequences, while the omission of a Mandub act is generally not sinful.",
          explanation:
            "Wajib (or Fard) denotes a binding obligation whose performance is rewarded and whose omission is punishable. Mandub (or Sunnah, Mustahabb) refers to recommended acts whose performance is rewarded but whose omission does not incur sin.",
        },
        {
          question:
            "Which of the following conditions is generally considered essential for a valid 'Qiyas' (analogical reasoning) in Islamic jurisprudence?",
          options: [
            "The original case (Asl) and the new case (Far') must have different effective causes ('illah).",
            "The ruling of the original case (Hukm al-Asl) must be based on a rationale that is also found in the new case.",
            "The new case (Far') must be explicitly mentioned in the Quran or Sunnah.",
            "The ruling derived through Qiyas must contradict the apparent meaning of a textual source.",
          ],
          correctAnswer:
            "The ruling of the original case (Hukm al-Asl) must be based on a rationale that is also found in the new case.",
          explanation:
            "For a valid Qiyas, there must be a shared effective cause ('illah) between the original case (where a ruling exists) and the new case for which a ruling is being derived. The ruling is then extended based on this shared rationale.",
        },
        {
          question: "What is the legal implication of a 'Sahih' (sound) Hadith that is 'Mutawatir' (mass-narrated)?",
          options: [
            "It provides strong evidence for a ruling but is still open to interpretation.",
            "It establishes definitive knowledge ('Ilm al-Yaqin') and its ruling is considered binding and certain.",
            "It is considered highly reliable but does not reach the level of certainty of the Quran.",
            "Its authenticity is beyond doubt, but its application may be limited by other stronger evidence.",
          ],
          correctAnswer:
            "It establishes definitive knowledge ('Ilm al-Yaqin') and its ruling is considered binding and certain.",
          explanation:
            "A Mutawatir Hadith that is also Sahih provides certainty of knowledge and its legal implications are considered definitive, similar to the Quran in terms of the obligation to accept and follow it.",
        },
        {
          question:
            "In the context of contracts ('Uqud') in Islamic commercial law, what is the significance of 'Khiyar al-Majlis' (option of the session)?",
          options: [
            "It is the right of a buyer to inspect the goods before finalizing the purchase.",
            "It is the option for either party to withdraw from the contract during the meeting or session in which it was concluded.",
            "It refers to the stipulation of a specific time frame for the fulfillment of the contract.",
            "It is the legal requirement for the contract to be documented in writing.",
          ],
          correctAnswer:
            "It is the option for either party to withdraw from the contract during the meeting or session in which it was concluded.",
          explanation:
            "Khiyar al-Majlis grants both parties to a contract the right to annul it while they are still physically present in the same meeting where the agreement was made. Once the session ends and the parties separate, the contract generally becomes binding.",
        },
        {
          question: "What distinguishes 'Zakat' from 'Sadaqah' in Islamic financial jurisprudence?",
          options: [
            "Zakat is voluntary charity, while Sadaqah is obligatory.",
            "Zakat has specific conditions (Nisab, Hawlan) and designated recipients, while Sadaqah is general charity.",
            "Zakat is only monetary, while Sadaqah can be in any form.",
            "There is no significant difference between the two terms; they are interchangeable.",
          ],
          correctAnswer:
            "Zakat has specific conditions (Nisab, Hawlan) and designated recipients, while Sadaqah is general charity.",
          explanation:
            "Zakat is an obligatory act of worship with specific thresholds (Nisab), a waiting period (Hawlan for some assets), and designated categories of recipients mentioned in the Quran. Sadaqah is voluntary charity given at any time and to anyone in need.",
        },
        {
          question:
            "According to the majority of Sunni schools, what is the ruling on 'Talaq al-Bid'ah' (innovated divorce, e.g., pronouncing triple Talaq in one sitting)?",
          options: [
            "It is considered a valid and effective form of divorce.",
            "It is considered invalid and does not dissolve the marriage.",
            "It is considered sinful but legally effective.",
            "Its validity depends on the intention of the husband.",
          ],
          correctAnswer: "It is considered sinful but legally effective.",
          explanation:
            "While considered a blameworthy innovation (Bid'ah) that goes against the Prophetic Sunnah, the majority of Sunni schools of thought consider a triple Talaq pronounced in one sitting as legally effective, though the husband incurs sin for this practice.",
        },
        {
          question: "In Islamic inheritance law ('Fara'id'), what is the status of a 'Hajb' (exclusion) of an heir?",
          options: [
            "It completely nullifies the inheritance rights of the excluded individual.",
            "It temporarily suspends the inheritance rights until a specific condition is met.",
            "It reduces the share of the excluded individual but does not eliminate it entirely.",
            "It only applies to distant relatives and not primary heirs.",
          ],
          correctAnswer: "It completely nullifies the inheritance rights of the excluded individual.",
          explanation:
            "Hajb refers to the legal exclusion of an heir from receiving any share of the inheritance due to the presence of a closer relative. For example, a son will generally exclude a grandson from inheriting.",
        },
        {
          question:
            "What is the underlying principle behind the prohibition of 'Riba' (usury or interest) in Islamic finance?",
          options: [
            "To prevent economic growth and encourage hoarding of wealth.",
            "To ensure fairness, prevent exploitation, and promote productive investment and risk-sharing.",
            "To favor lenders over borrowers in financial transactions.",
            "To maintain a fixed and stable monetary system.",
          ],
          correctAnswer:
            "To ensure fairness, prevent exploitation, and promote productive investment and risk-sharing.",
          explanation:
            "The prohibition of Riba aims to establish a just and equitable financial system where wealth is generated through productive activities and risk is shared between parties, rather than through the exploitation inherent in interest-based lending.",
        },
        {
          question:
            "In the Maliki school of thought, what is the significance of the 'Amal Ahl al-Madinah' (the practice of the people of Medina) as a source of law?",
          options: [
            "It is considered a weak and unreliable source.",
            "It is a primary source of law, sometimes even preferred over isolated (Ahad) Hadith.",
            "It is only relevant for matters specific to the city of Medina.",
            "It is treated as equivalent to the consensus (Ijma') of the scholars.",
          ],
          correctAnswer: "It is a primary source of law, sometimes even preferred over isolated (Ahad) Hadith.",
          explanation:
            "Imam Malik considered the continuous and established practice of the people of Medina during the time of the Prophet (PBUH) and the early generations as strong evidence of the Sunnah, sometimes giving it precedence over individual narrations.",
        },
        {
          question:
            "What is the legal ruling on 'Istihalah' (transformation) in Islamic law, particularly concerning impure substances?",
          options: [
            "It always purifies an impure substance regardless of the extent of transformation.",
            "It purifies an impure substance only if its essence and name are completely changed.",
            "It never purifies an impure substance; it remains Najasa (ritually impure).",
            "Its permissibility is subject to strict textual evidence in each specific case.",
          ],
          correctAnswer: "It purifies an impure substance only if its essence and name are completely changed.",
          explanation:
            "Istihalah is a legal principle stating that if an impure substance undergoes a complete transformation in its essence, characteristics, and name, it may become pure. A common example is the transformation of wine into vinegar.",
        },
        {
          question:
            "In the context of Islamic criminal law ('Uqubat'), what is the difference between 'Qisas' (retaliation) and 'Diya' (blood money)?",
          options: [
            "Qisas is for unintentional killing, while Diya is for intentional killing.",
            "Qisas is a mandatory punishment, while Diya is an optional expiation.",
            "Qisas is a punishment equivalent to the harm caused, while Diya is financial compensation to the victim's family.",
            "There is no significant difference; the terms are interchangeable.",
          ],
          correctAnswer:
            "Qisas is a punishment equivalent to the harm caused, while Diya is financial compensation to the victim's family.",
          explanation:
            "Qisas is the principle of equal retaliation for intentional bodily harm or murder, while Diya is blood money or financial compensation paid to the victim or their family, often as an alternative to Qisas or in cases of unintentional harm.",
        },
        {
          question: "What is the legal status of 'Urf al-Fasid' (corrupt custom) in Islamic jurisprudence?",
          options: [
            "It is a valid source of law if it is widely practiced.",
            "It is always rejected and cannot form the basis of a legal ruling.",
            "It can be considered if it does not contradict the explicit texts of the Quran and Sunnah.",
            "Its acceptance depends on the school of thought.",
          ],
          correctAnswer: "It is always rejected and cannot form the basis of a legal ruling.",
          explanation:
            "'Urf (custom) is a recognized subsidiary source of law, but 'Urf al-Fasid' (a custom that contradicts the principles or explicit texts of the Shari'ah) is considered invalid and cannot be used to derive or justify legal rulings.",
        },
        {
          question:
            "According to the Shafi'i school, what is the ruling on touching a non-Mahram (marriageable) woman without a barrier during the state of Wudu (ablution)?",
          options: [
            "It nullifies the Wudu.",
            "It is disliked (Makruh) but does not invalidate the Wudu.",
            "It does not affect the validity of the Wudu.",
            "It only nullifies the Wudu if it is accompanied by desire.",
          ],
          correctAnswer: "It nullifies the Wudu.",
          explanation:
            "The Shafi'i school of thought holds the view that touching a non-Mahram woman without a barrier invalidates the Wudu, regardless of whether it is accompanied by desire.",
        },
        {
          question:
            "In Islamic dietary laws, what is the general principle regarding food and drink that are not explicitly mentioned as Halal (permissible) or Haram (forbidden)?",
          options: [
            "They are all considered Haram unless proven otherwise.",
            "They are all considered Halal unless proven otherwise.",
            "Their permissibility depends on the local custom.",
            "Their ruling is subject to strict analogy with explicitly mentioned substances.",
          ],
          correctAnswer: "They are all considered Halal unless proven otherwise.",
          explanation:
            "The general principle in Islamic dietary law is that all food and drink are considered permissible unless there is clear and explicit evidence from the Quran or Sunnah prohibiting them.",
        },
        {
          question: "What is the concept of 'Sadd al-Dhara'i' (blocking the means) in Islamic legal methodology?",
          options: [
            "It refers to the interpretation of ambiguous verses in a way that avoids contradiction.",
            "It is a principle of leniency in applying punishments.",
            "It involves prohibiting permissible acts that are likely to lead to forbidden ones.",
            "It emphasizes the importance of good intentions in all actions.",
          ],
          correctAnswer: "It involves prohibiting permissible acts that are likely to lead to forbidden ones.",
          explanation:
            "Sadd al-Dhara'i' is a principle used to prevent harm or wrongdoing by prohibiting actions that are permissible in themselves but are likely to lead to impermissible outcomes.",
        },
        {
          question:
            "In the context of oaths ('Ayman') in Islamic law, what is the significance of intention (Niyyah) when the wording of the oath is ambiguous?",
          options: [
            "Intention is irrelevant; the literal meaning of the words prevails.",
            "Intention overrides the literal meaning in all cases.",
            "The apparent meaning of the words is considered unless there is strong evidence of a different intention.",
            "The ruling depends entirely on the emotional state of the person taking the oath.",
          ],
          correctAnswer:
            "The apparent meaning of the words is considered unless there is strong evidence of a different intention.",
          explanation:
            "While intention is crucial in many aspects of Islamic law, in the case of ambiguous oaths, the apparent meaning of the words used is generally taken into account unless there is clear evidence indicating a different intention at the time the oath was taken.",
        },
        {
          question:
            "According to the majority of scholars, what is the ruling on the permissibility of musical instruments?",
          options: [
            "All musical instruments are strictly forbidden.",
            "All musical instruments are generally permissible.",
            "Only certain types of musical instruments are permissible.",
            "The ruling varies depending on the context and the content of the music.",
          ],
          correctAnswer: "The ruling varies depending on the context and the content of the music.",
          explanation:
            "There is a divergence of opinion among scholars regarding musical instruments. Some strictly prohibit all or most, while others permit certain types, especially those without lewd or inciting lyrics, emphasizing the context and potential for distraction from religious duties.",
        },
        {
          question: "What is the legal concept of 'Waqf' in Islamic law?",
          options: [
            "A temporary loan given for charitable purposes.",
            "An endowment of property that is dedicated for religious, educational, or charitable purposes in perpetuity.",
            "A form of mandatory charity given annually.",
            "A type of inheritance distribution specific to religious scholars.",
          ],
          correctAnswer:
            "An endowment of property that is dedicated for religious, educational, or charitable purposes in perpetuity.",
          explanation:
            "Waqf is the permanent dedication of movable or immovable property for religious, educational, charitable, or other pious purposes, with the usufruct benefiting the designated beneficiaries while the original asset remains intact.",
        },
        {
          question:
            "In Islamic criminal procedure, what is the standard of evidence required to establish a 'Hadd' punishment (fixed penalty for certain crimes)?",
          options: [
            "Preponderance of evidence.",
            "Reasonable suspicion.",
            "Beyond a reasonable doubt, often requiring strict criteria like multiple eyewitnesses or confession.",
            "Any credible testimony is sufficient.",
          ],
          correctAnswer:
            "Beyond a reasonable doubt, often requiring strict criteria like multiple eyewitnesses or confession.",
          explanation:
            "Hadd punishments require a very high standard of proof, typically demanding strict conditions like the testimony of multiple upright eyewitnesses or a clear and unequivocal confession to ensure that these severe penalties are applied justly and without doubt.",
        },
        {
          question:
            "What is the significance of 'Maslahah al-Mulgha' (rejected public interest) in Islamic legal reasoning?",
          options: [
            "It is a public interest that is explicitly supported by textual evidence.",
            "It is a public interest that contradicts the clear rulings or principles of the Shari'ah.",
            "It is a public interest that is considered but ultimately not acted upon due to weaker evidence.",
            "It is a public interest that is only relevant in minority opinions.",
          ],
          correctAnswer: "It is a public interest that contradicts the clear rulings or principles of the Shari'ah.",
          explanation:
            "Maslahah al-Mulgha is a consideration of public interest that is deemed invalid and rejected as a basis for legal rulings because it clashes with explicit texts or established principles of the Shari'ah.",
        },
      ],
    },
  },
  {
    id: "tafsir",
    title: "Tafsir",
    description: "Quranic Exegesis and Commentary",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is Tafsir?",
          options: ["Commentary on the Quran", "Rules of prayer", "Collection of Hadith", "Islamic history"],
          correctAnswer: "Commentary on the Quran",
          explanation: "Tafsir is the interpretation or commentary on the Quran.",
        },
        {
          question: "What is the primary source for Tafsir?",
          options: ["Hadith", "Ijma' (Consensus)", "The Quran itself", "Qiyas (Analogy)"],
          correctAnswer: "The Quran itself",
          explanation:
            "The best Tafsir of the Quran is often found within the Quran itself, where verses explain other verses.",
        },
        {
          question: "What does 'Ayah' mean in the context of the Quran?",
          options: ["Chapter", "Verse", "Word", "Story"],
          correctAnswer: "Verse",
          explanation: "Ayah is the Arabic word for a verse in the Quran.",
        },
        {
          question: "Which angel is primarily associated with bringing the Quran to Prophet Muhammad (PBUH)?",
          options: ["Mikail (Michael)", "Israfil", "Jibril (Gabriel)", "Azrael"],
          correctAnswer: "Jibril (Gabriel)",
          explanation:
            "Angel Jibril (Gabriel) was the means through which Allah's (SWT) revelations were conveyed to Prophet Muhammad (PBUH).",
        },
        {
          question: "What is the meaning of 'Surah'?",
          options: ["Verse", "Chapter", "Part", "Section"],
          correctAnswer: "Chapter",
          explanation: "Surah refers to a chapter in the Quran. The Quran is divided into 114 Surahs.",
        },
        {
          question: "What is the first Surah of the Quran?",
          options: ["Al-Baqarah", "Yusuf", "Al-Fatiha", "Al-Ikhlas"],
          correctAnswer: "Al-Fatiha",
          explanation: "Surah Al-Fatiha, meaning 'The Opening,' is the first chapter of the Quran.",
        },
        {
          question: "What is the meaning of 'Bismillah ir-Rahman ir-Rahim'?",
          options: [
            "Allah is the most merciful",
            "In the name of Allah, the Most Gracious, the Most Merciful",
            "Praise be to Allah, Lord of the worlds",
            "There is no god but Allah",
          ],
          correctAnswer: "In the name of Allah, the Most Gracious, the Most Merciful",
          explanation:
            "This phrase precedes almost every Surah in the Quran and signifies seeking Allah's blessing and mercy.",
        },
        {
          question: "What is the term for the occasions or circumstances of the revelation of Quranic verses?",
          options: ["Tajweed", "Asbab an-Nuzul", "Qira'at", "Hadith Qudsi"],
          correctAnswer: "Asbab an-Nuzul",
          explanation:
            "Asbab an-Nuzul refers to the historical context and reasons behind the revelation of specific Quranic verses.",
        },
        {
          question: "Which of the following is NOT a primary source used in Tafsir?",
          options: [
            "The Quran",
            "The Sunnah (Prophet's traditions)",
            "Personal opinions without basis",
            "The understanding of the Companions (Sahabah)",
          ],
          correctAnswer: "Personal opinions without basis",
          explanation:
            "Valid Tafsir relies on established sources like the Quran, Sunnah, and the understanding of the early Muslims.",
        },
        {
          question: "What does 'Al-Ghaib' refer to in the Quran?",
          options: ["The past", "The present", "The unseen", "The future"],
          correctAnswer: "The unseen",
          explanation:
            "Al-Ghaib refers to that which is hidden from human perception, such as the afterlife and the nature of Allah (SWT).",
        },
        {
          question: "What is the meaning of 'Tanzil' in relation to the Quran?",
          options: ["Compilation", "Recitation", "Revelation", "Interpretation"],
          correctAnswer: "Revelation",
          explanation:
            "Tanzil means 'sending down' or 'revelation,' referring to the Quran being revealed by Allah (SWT).",
        },
        {
          question: "Which of these is a characteristic often used to describe Allah (SWT) in the Quran?",
          options: ["Weak", "Unknowing", "Limited", "All-Knowing (Al-'Aleem)"],
          correctAnswer: "All-Knowing (Al-'Aleem)",
          explanation:
            "The Quran describes Allah (SWT) with numerous beautiful names and attributes, including Al-'Aleem (The All-Knowing).",
        },
        {
          question: "What is the purpose of stories of past prophets in the Quran?",
          options: [
            "To entertain the readers",
            "To provide historical accounts",
            "To teach lessons and provide guidance",
            "To show the superiority of one prophet over another",
          ],
          correctAnswer: "To teach lessons and provide guidance",
          explanation:
            "The stories of past prophets in the Quran serve as lessons, warnings, and guidance for humanity.",
        },
        {
          question: "What does 'Al-Kitab' commonly refer to in the Quran?",
          options: ["Hadith collections", "Books of history", "The Quran", "Poetry"],
          correctAnswer: "The Quran",
          explanation: "'Al-Kitab' (The Book) is a frequent reference to the Quran itself.",
        },
        {
          question: "What is the meaning of 'Al-Furqan'?",
          options: ["The Criterion (distinguishing right from wrong)", "The Remembrance", "The Guidance", "The Wisdom"],
          correctAnswer: "The Criterion (distinguishing right from wrong)",
          explanation:
            "Al-Furqan is another name for the Quran, highlighting its role in distinguishing between truth and falsehood.",
        },
        {
          question: "In Tafsir, what is the importance of the Arabic language?",
          options: [
            "It is just the language the Quran was revealed in, but not important for understanding",
            "Understanding Arabic grammar and vocabulary is crucial for accurate interpretation",
            "Translations are always sufficient for understanding the Quran",
            "Only scholars who speak classical Arabic can understand the Quran",
          ],
          correctAnswer: "Understanding Arabic grammar and vocabulary is crucial for accurate interpretation",
          explanation:
            "The Quran was revealed in Arabic, and a deep understanding of its linguistic nuances is essential for accurate Tafsir.",
        },
        {
          question: "What is the role of the Sunnah in understanding the Quran?",
          options: [
            "The Sunnah contradicts the Quran",
            "The Sunnah explains, clarifies, and elaborates on the Quran",
            "The Sunnah is irrelevant to understanding the Quran",
            "The Sunnah only provides historical context",
          ],
          correctAnswer: "The Sunnah explains, clarifies, and elaborates on the Quran",
          explanation:
            "The Prophet Muhammad's (PBUH) sayings and actions (Sunnah) provide essential context and clarification for the Quranic verses.",
        },
        {
          question: "What does 'Tawhid' mean in the context of the Quran?",
          options: ["Charity", "Fasting", "The Oneness of Allah", "Prayer"],
          correctAnswer: "The Oneness of Allah",
          explanation:
            "Tawhid is the fundamental concept of Islam, emphasizing the absolute oneness and uniqueness of Allah (SWT).",
        },
        {
          question: "What is the meaning of 'Shirk'?",
          options: [
            "Giving charity",
            "Believing in the oneness of Allah",
            "Associating partners with Allah",
            "Performing good deeds",
          ],
          correctAnswer: "Associating partners with Allah",
          explanation:
            "Shirk is the act of associating partners with Allah (SWT) in worship, which is considered the greatest sin in Islam.",
        },
        {
          question: "What is the ultimate goal of understanding and reflecting on the Quran?",
          options: [
            "To win quiz competitions",
            "To memorize the entire Quran without understanding",
            "To implement its teachings in one's life and draw closer to Allah (SWT)",
            "To debate with people of other faiths",
          ],
          correctAnswer: "To implement its teachings in one's life and draw closer to Allah (SWT)",
          explanation:
            "The primary purpose of studying and reflecting on the Quran is to understand and apply its guidance in our lives to please Allah (SWT).",
        },
        {
          question: "What does 'Juz' refer to in relation to the Quran?",
          options: [
            "A verse",
            "A chapter",
            "One of thirty roughly equal parts of the Quran",
            "A specific theme in the Quran",
          ],
          correctAnswer: "One of thirty roughly equal parts of the Quran",
          explanation:
            "The Quran is often divided into 30 Juz' to facilitate its recitation over the month of Ramadan.",
        },
        {
          question: "What is the meaning of 'Hifz'?",
          options: [
            "Reciting the Quran beautifully",
            "Understanding the meaning of the Quran",
            "Memorizing the Quran",
            "Writing the Quran",
          ],
          correctAnswer: "Memorizing the Quran",
          explanation: "Hifz refers to the act of memorizing the entire Quran.",
        },
        {
          question: "What is the significance of the 'Seven Oft-Repeated Verses' mentioned in the Quran?",
          options: [
            "The last seven Surahs",
            "The seven longest verses",
            "Surah Al-Fatiha",
            "Seven different names of Allah",
          ],
          correctAnswer: "Surah Al-Fatiha",
          explanation:
            "The 'Seven Oft-Repeated Verses' is a reference to Surah Al-Fatiha, due to its importance in prayer.",
        },
        {
          question: "What does 'Naskh' in Tafsir refer to?",
          options: [
            "The abrogation of one Quranic verse by another",
            "The different styles of Quranic recitation",
            "The historical order of revelation",
            "The grammatical rules of Arabic in the Quran",
          ],
          correctAnswer: "The abrogation of one Quranic verse by another",
          explanation:
            "Naskh is a concept in Islamic jurisprudence and Tafsir referring to the abrogation of a ruling in one Quranic verse by another, later verse.",
        },
        {
          question: "What is the meaning of 'Muhkam' verses?",
          options: [
            "Verses with allegorical meanings",
            "Verses whose meaning is clear and unambiguous",
            "Verses revealed in Makkah",
            "Very long verses",
          ],
          correctAnswer: "Verses whose meaning is clear and unambiguous",
          explanation: "Muhkam verses are those whose meaning is clear and directly understood.",
        },
        {
          question: "What is the meaning of 'Mutashabih' verses?",
          options: [
            "Short verses",
            "Verses revealed in Medina",
            "Verses whose meaning is allegorical or open to interpretation",
            "Verses about historical events",
          ],
          correctAnswer: "Verses whose meaning is allegorical or open to interpretation",
          explanation:
            "Mutashabih verses contain allegorical meanings or require deeper understanding and interpretation.",
        },
      ],
      advanced: [
        {
          question: "What is the significance of 'Asbab al-Nuzul' (occasions of revelation) in Tafsir?",
          options: [
            "They determine the chronological order of the Quranic verses.",
            "They provide the historical and contextual background for understanding verses.",
            "They establish the legal rulings derived from specific verses.",
            "They highlight the linguistic beauty of the Quranic text.",
          ],
          correctAnswer: "They provide the historical and contextual background for understanding verses.",
          explanation:
            "Understanding the 'Asbab al-Nuzul' is crucial for accurate Tafsir as it clarifies the circumstances and context in which specific verses were revealed, aiding in their proper interpretation.",
        },
        {
          question: "Which of the following best describes the 'Tafsir bi al-Ma'thur' approach?",
          options: [
            "Interpretation based solely on linguistic analysis.",
            "Interpretation relying on the Quran, Sunnah, and the sayings of the Companions and early scholars.",
            "Interpretation based on personal opinion and reasoning.",
            "Interpretation focused on the scientific implications of the Quranic verses.",
          ],
          correctAnswer:
            "Interpretation relying on the Quran, Sunnah, and the sayings of the Companions and early scholars.",
          explanation:
            "'Tafsir bi al-Ma'thur' (interpretation based on transmitted reports) is considered a primary and reliable method, drawing upon the most authoritative sources of Islamic knowledge.",
        },
        {
          question: "What is the role of 'Qira'at' (variant readings of the Quran) in the field of Tafsir?",
          options: [
            "They are considered abrogated and have no bearing on interpretation.",
            "They offer different linguistic possibilities and can enrich the understanding of a verse.",
            "They primarily affect the recitation and pronunciation of the Quran, not its meaning.",
            "They were only prevalent in the early centuries of Islam and are no longer relevant.",
          ],
          correctAnswer: "They offer different linguistic possibilities and can enrich the understanding of a verse.",
          explanation:
            "The recognized variant readings ('Qira'at') can provide different shades of meaning and linguistic nuances, leading to a broader and deeper understanding of the Quranic text.",
        },
        {
          question: "Explain the concept of 'Nasikh' (abrogating) and 'Mansukh' (abrogated) verses in Tafsir.",
          options: [
            "They refer to verses that have similar meanings but different wording.",
            "They are verses whose literal meaning is no longer applicable due to later revelations.",
            "They are verses that were revealed in Makkah and later in Madinah.",
            "They are verses that deal with specific historical events that are no longer relevant.",
          ],
          correctAnswer: "They are verses whose literal meaning is no longer applicable due to later revelations.",
          explanation:
            "The principle of 'Naskh' is a complex but important aspect of Tafsir, where later revealed verses can abrogate the rulings or applicability of earlier verses. Understanding this requires careful scholarly analysis.",
        },
        {
          question:
            "What is the significance of 'Al-Muhkam' (clear and unambiguous) and 'Al-Mutashabih' (allegorical or ambiguous) verses in the Quran?",
          options: [
            "'Al-Muhkam' verses deal with practical laws, while 'Al-Mutashabih' verses deal with theological matters.",
            "'Al-Muhkam' verses are to be understood literally, while the meaning of 'Al-Mutashabih' verses is known only to Allah.",
            "'Al-Muhkam' verses are the majority and form the basis of understanding, while 'Al-Mutashabih' verses require deeper scholarly interpretation.",
            "All of the above.",
          ],
          correctAnswer: "All of the above.",
          explanation:
            "The distinction between 'Al-Muhkam' and 'Al-Mutashabih' is fundamental in Tafsir. 'Al-Muhkam' verses are clear in their meaning, while 'Al-Mutashabih' verses require careful interpretation, often guided by the 'Muhkam' verses.",
        },
        {
          question: "Discuss the role of 'Isra'iliyyat' (narrations from Jewish and Christian traditions) in Tafsir.",
          options: [
            "They are considered authentic sources for understanding the Quranic narratives.",
            "They are entirely rejected and have no place in Tafsir.",
            "They are sometimes used cautiously for historical context but are not authoritative in matters of Islamic law or belief.",
            "They are only relevant when they directly contradict the Quranic text, to highlight its superiority.",
          ],
          correctAnswer:
            "They are sometimes used cautiously for historical context but are not authoritative in matters of Islamic law or belief.",
          explanation:
            "'Isra'iliyyat' are narrations from earlier religious traditions that found their way into some Tafsir works. While they might offer historical context, they are not considered authoritative sources in Islamic jurisprudence or theology and must be evaluated critically against the Quran and Sunnah.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Ta'wil' according to classical Islamic scholarship?",
          options: [
            "They are synonymous terms with no significant difference.",
            "'Tafsir' is the literal explanation, while 'Ta'wil' involves a deeper, often allegorical, interpretation.",
            "'Tafsir' relies on transmitted reports, while 'Ta'wil' is based on linguistic analysis.",
            "'Tafsir' is done by scholars, while 'Ta'wil' is accessible to all Muslims.",
          ],
          correctAnswer:
            "'Tafsir' is the literal explanation, while 'Ta'wil' involves a deeper, often allegorical, interpretation.",
          explanation:
            "Classical scholars often distinguished between 'Tafsir' (explaining the apparent meaning) and 'Ta'wil' (deriving a deeper, sometimes non-literal meaning based on linguistic and contextual clues). However, the usage of these terms has varied among scholars.",
        },
        {
          question:
            "Explain the significance of the linguistic aspects of the Quran (e.g., rhetoric, grammar, morphology) in Tafsir.",
          options: [
            "They are secondary to the thematic understanding of the verses.",
            "They provide the foundational tools for accurately understanding the meaning and nuances of the Quranic text.",
            "They are primarily relevant for understanding the beauty of the Quran but not its legal implications.",
            "They were only important in the early stages of Islam when Arabic was the primary language.",
          ],
          correctAnswer:
            "They provide the foundational tools for accurately understanding the meaning and nuances of the Quranic text.",
          explanation:
            "A deep understanding of Arabic grammar ('Nahw'), morphology ('Sarf'), and rhetoric ('Balaghah') is essential for accurate Tafsir, as the precise wording and structure of the Quran convey profound meanings.",
        },
        {
          question:
            "Discuss the development of Tafsir literature throughout Islamic history, highlighting major schools and influential figures.",
          options: [
            "Early Tafsir was primarily oral, with written Tafsir emerging much later.",
            "Major schools include the Tafsir bi al-Ma'thur school and the Tafsir bi al-Ra'y school.",
            "Influential figures include Ibn Jarir al-Tabari, al-Zamakhshari, and Ibn Kathir.",
            "All of the above.",
          ],
          correctAnswer: "All of the above.",
          explanation:
            "Tafsir literature evolved from oral transmission to comprehensive written works. Key schools and scholars have significantly shaped the methodologies and understanding of Quranic exegesis.",
        },
        {
          question:
            "What are some of the challenges faced by contemporary scholars in interpreting the Quran in the modern context?",
          options: [
            "Dealing with scientific advancements not explicitly mentioned in the Quran.",
            "Addressing modern social and ethical issues through Quranic principles.",
            "Navigating diverse cultural contexts and interpretations.",
            "All of the above.",
          ],
          correctAnswer: "All of the above.",
          explanation:
            "Modern Tafsir requires grappling with new scientific knowledge, contemporary ethical dilemmas, and the application of timeless Quranic principles across diverse global contexts.",
        },
        {
          question:
            "Explain the concept of 'Tadabbur al-Quran' (reflecting deeply on the Quran) and its importance in understanding the divine message.",
          options: [
            "It primarily focuses on memorizing the Quran with correct Tajweed.",
            "It involves a superficial reading of the Quran to gain general blessings.",
            "It is a crucial process of contemplation and engagement with the Quran's meanings and implications for one's life.",
            "It is only required for scholars and those involved in formal Tafsir.",
          ],
          correctAnswer:
            "It is a crucial process of contemplation and engagement with the Quran's meanings and implications for one's life.",
          explanation:
            "'Tadabbur' goes beyond mere reading or recitation; it involves thoughtful reflection on the verses to internalize their message, understand their wisdom, and apply them in daily life.",
        },
        {
          question:
            "What is the significance of understanding the 'Makki' and 'Madani' classifications of Surahs in Tafsir?",
          options: [
            "It helps in understanding the chronological order of revelation and the development of Islamic teachings.",
            "Makki Surahs are generally shorter and focus on faith, while Madani Surahs are longer and address social and legal issues.",
            "This classification helps in identifying abrogating and abrogated verses.",
            "All of the above.",
          ],
          correctAnswer: "All of the above.",
          explanation:
            "Knowing whether a Surah was revealed in Makkah or Madinah provides crucial context for understanding its themes, style, and the stage of the Prophet's mission it addresses.",
        },
        {
          question:
            "Discuss the different levels of understanding the Quran, from the literal to the esoteric (Sufi) interpretations.",
          options: [
            "Only the literal meaning is considered valid in mainstream Islamic scholarship.",
            "Esoteric interpretations are universally accepted as the deepest level of understanding.",
            "Mainstream scholarship recognizes different levels of meaning, with the literal being primary and others requiring rigorous justification.",
            "There is no scholarly basis for considering multiple levels of meaning in the Quran.",
          ],
          correctAnswer:
            "Mainstream scholarship recognizes different levels of meaning, with the literal being primary and others requiring rigorous justification.",
          explanation:
            "While the literal meaning is fundamental, many scholars acknowledge the possibility of deeper, symbolic, or spiritual interpretations ('Ta'wil') under strict methodological guidelines.",
        },
        {
          question: "What is the role of consensus ('Ijma') among scholars in the interpretation of the Quran?",
          options: [
            "It is the primary source of interpretation, even above the Sunnah.",
            "It provides a strong indication of the correct understanding of a verse.",
            "It is only relevant in legal matters, not in theological interpretations.",
            "It is rarely achieved and therefore has limited significance.",
          ],
          correctAnswer: "It provides a strong indication of the correct understanding of a verse.",
          explanation:
            "The consensus of qualified scholars on the interpretation of a Quranic verse is considered a significant and reliable indicator of its correct meaning, though the methodology for establishing 'Ijma' is complex.",
        },
        {
          question:
            "Explain the concept of 'I'jaz al-Quran' (the inimitable nature of the Quran) and how it relates to Tafsir.",
          options: [
            "It refers solely to the miraculous events described in the Quran.",
            "It is irrelevant to the process of interpreting the Quran's meaning.",
            "It encompasses the linguistic perfection, rhetorical beauty, and profound wisdom of the Quran, often explored in Tafsir.",
            "It only pertains to the Quran's preservation over time.",
          ],
          correctAnswer:
            "It encompasses the linguistic perfection, rhetorical beauty, and profound wisdom of the Quran, often explored in Tafsir.",
          explanation:
            "The 'I'jaz' of the Quran is a significant field of study within Islamic sciences, and Tafsir often delves into the linguistic and stylistic elements that contribute to its inimitability.",
        },
        {
          question:
            "Discuss the impact of different ideological and theological schools of thought on the development of Tafsir.",
          options: [
            "Tafsir has remained largely objective and unaffected by theological biases.",
            "Different schools of thought (e.g., Mu'tazilah, Ash'ariyyah, Sufi) have sometimes influenced the interpretation of certain verses to align with their doctrines.",
            "Only the earliest Tafsir works are considered free from theological influences.",
            "Theological differences primarily affected the translation of the Quran, not its Tafsir.",
          ],
          correctAnswer:
            "Different schools of thought (e.g., Mu'tazilah, Ash'ariyyah, Sufi) have sometimes influenced the interpretation of certain verses to align with their doctrines.",
          explanation:
            "Theological and ideological viewpoints have, at times, shaped the way certain Quranic verses have been interpreted throughout history. Recognizing these influences is important for a critical understanding of Tafsir literature.",
        },
        {
          question:
            "What is the significance of understanding the broader themes and objectives ('Maqasid al-Shari'ah') of the Quran in Tafsir?",
          options: [
            "It is only relevant for interpreting legal verses, not those dealing with ethics or theology.",
            "It helps in understanding the underlying wisdom and purpose behind specific rulings and guidance.",
            "It allows for subjective interpretations based on contemporary social values.",
            "It was a later development in Islamic scholarship and has limited relevance to classical Tafsir.",
          ],
          correctAnswer:
            "It helps in understanding the underlying wisdom and purpose behind specific rulings and guidance.",
          explanation:
            "Considering the overarching aims and objectives of Islamic law ('Maqasid al-Shari'ah') provides a framework for a more holistic and insightful interpretation of the Quranic verses, especially those with legal implications.",
        },
        {
          question: "Explain the relationship between Hadith studies ('Ulum al-Hadith') and Tafsir.",
          options: [
            "Hadith provides essential context, clarification, and elaboration for many Quranic verses.",
            "Tafsir is independent of Hadith and relies solely on the Quran itself.",
            "Hadith can sometimes abrogate or supersede the meaning of the Quranic text.",
            "The authority of Hadith in Tafsir is a matter of ongoing debate among scholars.",
          ],
          correctAnswer: "Hadith provides essential context, clarification, and elaboration for many Quranic verses.",
          explanation:
            "The Sunnah of the Prophet (PBUH), as preserved in Hadith literature, is a vital source for understanding and interpreting the Quran. It provides practical examples, clarifies ambiguities, and offers further details on Quranic injunctions.",
        },
        {
          question:
            "What are some of the ethical considerations that Tafsir scholars must adhere to in their interpretations?",
          options: [
            "Avoiding the imposition of personal biases or desires onto the text.",
            "Presenting interpretations with humility and acknowledging the possibility of error.",
            "Considering the potential impact of their interpretations on the community.",
            "All of the above.",
          ],
          correctAnswer: "All of the above.",
          explanation:
            "Tafsir is a weighty responsibility, and scholars must adhere to strict ethical guidelines to ensure their interpretations are sound, unbiased, and beneficial to the Muslim community.",
        },
        {
          question:
            "Discuss the role of reason ('Aql') and linguistic analysis in 'Tafsir bi al-Ra'y' (interpretation based on reasoning).",
          options: [
            "'Tafsir bi al-Ra'y' relies solely on personal opinion without any basis in the text or language.",
            "Reason and linguistic analysis are crucial tools in 'Tafsir bi al-Ra'y', but they must be grounded in the Quran and Sunnah.",
            "'Tafsir bi al-Ma'thur' completely rejects the use of reason and linguistic analysis.",
            "'Tafsir bi al-Ra'y' was the dominant method of interpretation in the early centuries of Islam.",
          ],
          correctAnswer:
            "Reason and linguistic analysis are crucial tools in 'Tafsir bi al-Ra'y', but they must be grounded in the Quran and Sunnah.",
          explanation:
            "'Tafsir bi al-Ra'y' involves the use of intellect and linguistic understanding to interpret the Quran, but it is considered acceptable only when it does not contradict the Quran, Sunnah, or established principles of Islamic knowledge.",
        },
        {
          question:
            "How does the understanding of the historical context of the Prophet's (PBUH) life and the early Muslim community contribute to accurate Tafsir?",
          options: [
            "It is irrelevant as the Quran's message is universal and timeless.",
            "It provides valuable insights into the social, political, and cultural backdrop against which the Quran was revealed.",
            "It only helps in understanding the verses related to specific battles or events.",
            "It can sometimes limit the broader applicability of certain verses.",
          ],
          correctAnswer:
            "It provides valuable insights into the social, political, and cultural backdrop against which the Quran was revealed.",
          explanation:
            "Understanding the historical context ('Sirah') in which the Quranic verses were revealed sheds light on their immediate meaning and helps in discerning their broader implications.",
        },
        {
          question: "Who is known as the 'Father of Tafsir'?",
          options: ["Ibn Abbas", "Ibn Kathir", "Al-Qurtubi", "At-Tabari"],
          correctAnswer: "Ibn Abbas",
          explanation: "Abdullah ibn Abbas is highly regarded for his knowledge of Tafsir.",
        },
      ],
    },
  },
  {
    id: "hadeeth",
    title: "Hadeeth",
    description: "Prophetic Traditions",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is a Hadith?",
          options: ["Sayings of Prophet Muhammad", "Quranic verse", "Islamic law", "Angels name"],
          correctAnswer: "Sayings of Prophet Muhammad",
          explanation:
            "A Hadith is a record of the words, actions, or approvals of Prophet Muhammad (peace be upon him).",
        },
        {
          question: "What is the primary source of Islamic teachings after the Quran?",
          options: [
            "Sunnah (Prophetic Traditions)",
            "Ijma' (Consensus)",
            "Qiyas (Analogy)",
            "Istislah (Public Interest)",
          ],
          correctAnswer: "Sunnah (Prophetic Traditions)",
          explanation: "The Sunnah, which includes Hadith, is the second primary source of Islamic guidance.",
        },
        {
          question: "What does 'peace be upon him' (PBUH) refer to when mentioned after a prophet's name?",
          options: ["A blessing", "A curse", "A title", "A historical period"],
          correctAnswer: "A blessing",
          explanation:
            "Muslims say 'peace be upon him' (or its Arabic equivalent) as a sign of respect and blessing for the prophets of God.",
        },
        {
          question: "Who were the companions of Prophet Muhammad (PBUH)?",
          options: [
            "His enemies",
            "His family only",
            "People who lived during his time",
            "Those who believed in him and spent time with him",
          ],
          correctAnswer: "Those who believed in him and spent time with him",
          explanation:
            "The Sahabah (companions) were the Prophet's closest followers and played a crucial role in preserving and transmitting his teachings.",
        },
        {
          question: "What is the meaning of 'Sahih' in the context of Hadith?",
          options: ["Weak", "Good", "Authentic/Sound", "Fabricated"],
          correctAnswer: "Authentic/Sound",
          explanation:
            "'Sahih' is a term used to describe a Hadith that has been rigorously authenticated and is considered sound.",
        },
        {
          question: "Which of the following is a famous collection of Hadith?",
          options: ["The Gospel of Barnabas", "The Epic of Gilgamesh", "Sahih Bukhari", "The Book of Mormon"],
          correctAnswer: "Sahih Bukhari",
          explanation: "Sahih Bukhari is one of the most highly regarded and authentic collections of Hadith.",
        },
        {
          question: "What is the importance of Hadith in understanding Islam?",
          options: [
            "It contradicts the Quran",
            "It is irrelevant to modern life",
            "It explains and elaborates on the Quran",
            "It is only for scholars",
          ],
          correctAnswer: "It explains and elaborates on the Quran",
          explanation:
            "Hadith provides context, details, and practical applications of the principles mentioned in the Quran.",
        },
      ],
    },
  },
  {
    id: "aqeedah",
    title: "Aqeedah",
    description: "Islamic Monotheism",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is Tawhid?",
          options: ["Oneness of Allah", "Belief in angels", "Prophethood", "Day of Judgment"],
          correctAnswer: "Oneness of Allah",
          explanation: "Tawhid is the concept of the absolute oneness and uniqueness of Allah.",
        },
        {
          question: "What is the first and most important pillar of Islam?",
          options: ["Salat (Prayer)", "Zakat (Charity)", "Shahada (Declaration of Faith)", "Sawm (Fasting)"],
          correctAnswer: "Shahada (Declaration of Faith)",
          explanation:
            "The Shahada is the declaration that there is no god but Allah, and Muhammad is His messenger, which is the foundation of Islamic monotheism.",
        },
        {
          question: "What does 'Allah' mean?",
          options: ["The Prophet Muhammad", "The Angel Jibril", "The One True God", "The Holy Book"],
          correctAnswer: "The One True God",
          explanation: "'Allah' is the Arabic word for God, the one and only deity worthy of worship in Islam.",
        },
        {
          question: "Believing that Allah has partners in His divinity is called:",
          options: ["Taqwa", "Zulm", "Shirk", "Sabr"],
          correctAnswer: "Shirk",
          explanation:
            "Shirk is the act of associating partners with Allah in worship or belief, which is considered the greatest sin in Islam.",
        },
        {
          question: "Which of the following is NOT one of Allah's names?",
          options: [
            "Ar-Rahman (The Most Compassionate)",
            "Al-Karim (The Most Generous)",
            "Buddha",
            "Al-Quddus (The Holy)",
          ],
          correctAnswer: "Buddha",
          explanation: "Buddha is the founder of Buddhism and not one of the names of Allah in Islam.",
        },
        {
          question: "Allah is free from all needs and is self-sufficient. This attribute is known as:",
          options: [
            "Al-Aleem (The All-Knowing)",
            "Al-Ghani (The Self-Sufficient)",
            "Al-Hakeem (The All-Wise)",
            "Al-Qadir (The All-Powerful)",
          ],
          correctAnswer: "Al-Ghani (The Self-Sufficient)",
          explanation: "Al-Ghani means that Allah needs nothing from His creation, but all creation is in need of Him.",
        },
      ],
      advanced: [
        {
          question: "What is 'Ilm al-Ghaib'?",
          options: ["Knowledge of the unseen", "Knowledge of law", "Knowledge of history", "Knowledge of medicine"],
          correctAnswer: "Knowledge of the unseen",
          explanation: "'Ilm al-Ghaib' refers to the knowledge of the unseen, which is exclusive to Allah.",
        },
        {
          question: "Explain the difference between 'Tawhid al-Rububiyyah' and 'Tawhid al-Uluhiyyah'.",
          options: [
            "No difference; they are synonymous terms",
            "'Tawhid al-Rububiyyah' refers to Allah's Lordship (creation, sustenance, etc.), while 'Tawhid al-Uluhiyyah' refers to directing all worship to Allah alone",
            "'Tawhid al-Rububiyyah' is about Allah's names and attributes, while 'Tawhid al-Uluhiyyah' is about His actions",
            "'Tawhid al-Rububiyyah' is a modern concept, while 'Tawhid al-Uluhiyyah' is classical",
          ],
          correctAnswer:
            "'Tawhid al-Rububiyyah' refers to Allah's Lordship (creation, sustenance, etc.), while 'Tawhid al-Uluhiyyah' refers to directing all worship to Allah alone",
          explanation:
            "'Tawhid al-Rububiyyah' is the belief that Allah alone is the Lord, Creator, and Sustainer of all that exists. 'Tawhid al-Uluhiyyah' is the belief that Allah alone deserves to be worshipped, and no acts of worship should be directed to anyone or anything else.",
        },
      ],
    },
  },
]

// Function to get quiz questions for a specific category and difficulty level
export const getQuizQuestions = (categoryId: string, difficulty: DifficultyLevel): QuizQuestion[] => {
  const category = quizData.find((cat) => cat.id === categoryId)
  if (!category) {
    return []
  }
  return category.levels[difficulty] || []
}

// Function to get a specific category by ID
export const getCategory = (categoryId: string): QuizCategory | undefined => {
  return quizData.find((category) => category.id === categoryId)
}
