import type { QuizCategory } from "@/types/quiz"

// Has Tazkiyah, History
// Additional quiz categories with questions
export const additionalCategories: QuizCategory[] = [
  {
    id: "tazkiyah",
    title: "Tazkiyah",
    description: "Spiritual Purification",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the meaning of 'Tazkiyah'?",
          options: ["Physical cleanliness", "Spiritual purification", "Financial charity", "Ritual prayer"],
          correctAnswer: "Spiritual purification",
          explanation:
            "Tazkiyah refers to the purification of the soul, which involves cleansing the heart from spiritual diseases and cultivating virtuous qualities.",
        },
        {
          question: "Which of the following is NOT considered a spiritual disease of the heart?",
          options: ["Envy (Hasad)", "Pride (Kibr)", "Generosity (Sakha)", "Showing off (Riya)"],
          correctAnswer: "Generosity (Sakha)",
          explanation:
            "Generosity (Sakha) is a virtuous quality, while envy, pride, and showing off are spiritual diseases that need to be purified from the heart.",
        },
        {
          question: "What is 'Taqwa'?",
          options: ["Fasting during Ramadan", "Consciousness and fear of Allah", "Giving charity", "Performing Hajj"],
          correctAnswer: "Consciousness and fear of Allah",
          explanation:
            "Taqwa refers to God-consciousness, being aware of Allah's presence and fearing His displeasure, which leads to righteous actions.",
        },
        {
          question: "What is 'Dhikr'?",
          options: ["Fasting", "Remembrance of Allah", "Charity", "Pilgrimage"],
          correctAnswer: "Remembrance of Allah",
          explanation:
            "Dhikr is the practice of remembering Allah through various forms of glorification, such as reciting His names, praising Him, and supplicating to Him.",
        },
        {
          question: "What is 'Sabr'?",
          options: ["Patience", "Generosity", "Knowledge", "Wisdom"],
          correctAnswer: "Patience",
          explanation:
            "Sabr refers to patience and perseverance in the face of difficulties, an essential quality for spiritual purification.",
        },
        {
          question: "What is 'Istighfar'?",
          options: ["Seeking knowledge", "Seeking forgiveness", "Giving charity", "Performing extra prayers"],
          correctAnswer: "Seeking forgiveness",
          explanation:
            "Istighfar is the act of seeking forgiveness from Allah for one's sins, an essential practice for purifying the soul.",
        },
        {
          question: "What is 'Tawbah'?",
          options: ["Charity", "Repentance", "Fasting", "Pilgrimage"],
          correctAnswer: "Repentance",
          explanation:
            "Tawbah is the act of repenting for one's sins, turning back to Allah with sincere regret and a firm resolve not to repeat the sin.",
        },
        {
          question: "What is 'Muraqabah'?",
          options: ["Self-criticism", "Self-awareness and vigilance", "Self-praise", "Self-indulgence"],
          correctAnswer: "Self-awareness and vigilance",
          explanation:
            "Muraqabah is the practice of being constantly aware that Allah is watching over us, leading to vigilance in one's actions and thoughts.",
        },
        {
          question: "What is 'Ikhlas'?",
          options: ["Showing off", "Sincerity", "Hypocrisy", "Jealousy"],
          correctAnswer: "Sincerity",
          explanation:
            "Ikhlas refers to sincerity of intention, performing acts of worship solely for the sake of Allah, not for recognition or praise from others.",
        },
        {
          question: "What is 'Riya'?",
          options: ["Sincerity", "Showing off in worship", "Patience", "Gratitude"],
          correctAnswer: "Showing off in worship",
          explanation:
            "Riya refers to performing acts of worship or good deeds with the intention of gaining praise or recognition from others, rather than seeking Allah's pleasure.",
        },
      ],
      advanced: [
        {
          question: "What is the relationship between 'Tazkiyah' and 'Ihsan'?",
          options: [
            "They are completely unrelated concepts",
            "Tazkiyah is a prerequisite for achieving Ihsan",
            "Ihsan is only about physical acts of worship",
            "Tazkiyah is only relevant for scholars",
          ],
          correctAnswer: "Tazkiyah is a prerequisite for achieving Ihsan",
          explanation:
            "Tazkiyah (purification of the soul) is a necessary process for achieving Ihsan, which is the highest level of faith where one worships Allah as if seeing Him, knowing that even if one does not see Him, He sees the worshipper.",
        },
        {
          question: "According to Imam Al-Ghazali, what are the four domains that need purification?",
          options: [
            "Body, mind, soul, and wealth",
            "Actions, speech, thoughts, and intentions",
            "Prayer, fasting, charity, and pilgrimage",
            "Heart, senses, speech, and actions",
          ],
          correctAnswer: "Heart, senses, speech, and actions",
          explanation:
            "In his work 'Ihya Ulum al-Din', Imam Al-Ghazali identifies four domains that require purification: the heart (qalb), the senses, speech, and actions, with the purification of the heart being the foundation.",
        },
        {
          question: "What is the concept of 'Mujahada' in Tazkiyah?",
          options: [
            "Physical jihad against enemies",
            "Striving against one's lower self (nafs)",
            "Debating with others about religion",
            "Memorizing religious texts",
          ],
          correctAnswer: "Striving against one's lower self (nafs)",
          explanation:
            "Mujahada in the context of Tazkiyah refers to the spiritual struggle against one's lower self (nafs), resisting its negative inclinations and disciplining it to follow the path of righteousness.",
        },
        {
          question: "How does the concept of 'Khawf' and 'Raja' apply to Tazkiyah?",
          options: [
            "They are irrelevant to spiritual purification",
            "They represent the balance between fear of Allah's punishment and hope in His mercy",
            "They are only important for beginners in the spiritual path",
            "They refer to physical states of the body during worship",
          ],
          correctAnswer: "They represent the balance between fear of Allah's punishment and hope in His mercy",
          explanation:
            "Khawf (fear) and Raja (hope) are essential spiritual states that create a balance in the heart of the believer. Fear of Allah's punishment prevents complacency and sin, while hope in His mercy prevents despair and motivates righteous action.",
        },
        {
          question: "According to Islamic spirituality, what are the three stages of the nafs (self)?",
          options: [
            "Nafs al-Ammarah, Nafs al-Lawwamah, Nafs al-Mutma'innah",
            "Nafs al-Baseerah, Nafs al-Qawiyyah, Nafs al-Kamilah",
            "Nafs al-Sagheerah, Nafs al-Wasatiyyah, Nafs al-Kabeerah",
            "Nafs al-Dhahirah, Nafs al-Batinah, Nafs al-Wusta",
          ],
          correctAnswer: "Nafs al-Ammarah, Nafs al-Lawwamah, Nafs al-Mutma'innah",
          explanation:
            "Islamic spirituality identifies three stages of the nafs: Nafs al-Ammarah (the commanding self that inclines toward evil), Nafs al-Lawwamah (the blaming self that feels remorse), and Nafs al-Mutma'innah (the tranquil self that has achieved peace through submission to Allah).",
        },
        {
          question: "What is the relationship between 'Tawbah' (repentance) and spiritual purification?",
          options: [
            "They are unrelated concepts",
            "Tawbah is a prerequisite for spiritual purification",
            "Spiritual purification makes Tawbah unnecessary",
            "Tawbah is only for major sins, not spiritual purification",
          ],
          correctAnswer: "Tawbah is a prerequisite for spiritual purification",
          explanation:
            "Tawbah (repentance) is a prerequisite for spiritual purification as it cleanses the heart from the spiritual impurities of sin. The process of turning back to Allah with sincere regret and firm resolve not to repeat sins is essential for beginning the journey of purifying the soul.",
        },
        {
          question: "How does the concept of 'Muhasabah' (self-reckoning) contribute to Tazkiyah?",
          options: [
            "It has no role in spiritual purification",
            "It involves daily self-examination and holding oneself accountable",
            "It is only practiced during Ramadan",
            "It is only for advanced spiritual practitioners",
          ],
          correctAnswer: "It involves daily self-examination and holding oneself accountable",
          explanation:
            "Muhasabah is the practice of daily self-examination and holding oneself accountable for one's thoughts, intentions, and actions. This regular introspection is essential for spiritual purification as it helps identify spiritual diseases and track progress in overcoming them.",
        },
        {
          question: "What is the role of 'Dhikr' (remembrance of Allah) in Tazkiyah?",
          options: [
            "It is a distraction from spiritual purification",
            "It is the primary means of purifying the heart and maintaining spiritual awareness",
            "It has no specific role in spiritual development",
            "It is only for those who cannot perform other acts of worship",
          ],
          correctAnswer: "It is the primary means of purifying the heart and maintaining spiritual awareness",
          explanation:
            "Dhikr (remembrance of Allah) is considered the primary means of purifying the heart and maintaining spiritual awareness. The Quran states: 'Verily, in the remembrance of Allah do hearts find rest' (13:28). Regular dhikr polishes the heart from spiritual rust and keeps one connected to the Divine.",
        },
        {
          question: "What is the concept of 'Riyadat al-Nafs' (training the soul) in Tazkiyah?",
          options: [
            "Physical exercise to support spiritual practice",
            "Disciplining the soul through gradual training and spiritual exercises",
            "Punishing oneself for past sins",
            "Isolating oneself from society",
          ],
          correctAnswer: "Disciplining the soul through gradual training and spiritual exercises",
          explanation:
            "Riyadat al-Nafs refers to disciplining the soul through gradual training and spiritual exercises. Like physical training, the soul requires consistent discipline to strengthen its virtuous qualities and weaken its negative tendencies. This includes practices like fasting, night prayer, controlling anger, and cultivating patience.",
        },
        {
          question: "How does 'Zuhd' (asceticism) relate to Tazkiyah in Islamic spirituality?",
          options: [
            "Zuhd means complete rejection of all worldly possessions",
            "Zuhd is detachment of the heart from worldly things, not necessarily physical abandonment",
            "Zuhd is only for monks and ascetics, not regular Muslims",
            "Zuhd contradicts the principles of Tazkiyah",
          ],
          correctAnswer: "Zuhd is detachment of the heart from worldly things, not necessarily physical abandonment",
          explanation:
            "In Islamic spirituality, Zuhd (asceticism) refers to detachment of the heart from worldly things, not necessarily their physical abandonment. It means that while one may possess worldly things, the heart is not attached to them. This balanced approach to worldly matters is essential for spiritual purification, as it prevents material concerns from dominating one's consciousness.",
        },
      ],
    },
  },
  {
    id: "history",
    title: "Islamic History",
    description: "History of Islam and Muslims",
    icon: "",
    levels: {
      easy: [
        {
          question: "In which year did the Prophet Muhammad (peace be upon him) receive his first revelation?",
          options: ["570 CE", "610 CE", "622 CE", "632 CE"],
          correctAnswer: "610 CE",
          explanation:
            "The Prophet Muhammad (peace be upon him) received his first revelation in the Cave of Hira in 610 CE when he was 40 years old.",
        },
        {
          question: "What is the name of the migration of Muslims from Makkah to Madinah?",
          options: ["Hajj", "Hijrah", "Umrah", "Jihad"],
          correctAnswer: "Hijrah",
          explanation:
            "The Hijrah refers to the migration of Prophet Muhammad (peace be upon him) and his followers from Makkah to Madinah in 622 CE, which marks the beginning of the Islamic calendar.",
        },
        {
          question: "Who was the first Caliph after the death of Prophet Muhammad (peace be upon him)?",
          options: ["Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib", "Abu Bakr as-Siddiq"],
          correctAnswer: "Abu Bakr as-Siddiq",
          explanation:
            "Abu Bakr as-Siddiq was the closest companion of the Prophet and was chosen as the first Caliph (successor) after the Prophet's death in 632 CE.",
        },
        {
          question: "Which dynasty ruled the Islamic world immediately after the Rashidun Caliphate?",
          options: ["Abbasid Dynasty", "Ottoman Dynasty", "Umayyad Dynasty", "Fatimid Dynasty"],
          correctAnswer: "Umayyad Dynasty",
          explanation:
            "The Umayyad Dynasty, established by Muawiyah ibn Abi Sufyan, ruled the Islamic world from 661 to 750 CE, following the period of the four Rashidun (Rightly Guided) Caliphs.",
        },
        {
          question: "Which Muslim general conquered Spain (Al-Andalus) in 711 CE?",
          options: ["Salahuddin Ayyubi", "Tariq ibn Ziyad", "Muhammad bin Qasim", "Khalid ibn al-Walid"],
          correctAnswer: "Tariq ibn Ziyad",
          explanation:
            "Tariq ibn Ziyad led the Muslim conquest of Visigothic Hispania in 711 CE. The Rock of Gibraltar (Jabal Tariq) is named after him.",
        },
        {
          question: "During which Islamic dynasty did the Islamic Golden Age reach its peak?",
          options: ["Umayyad Dynasty", "Abbasid Dynasty", "Ottoman Dynasty", "Mamluk Dynasty"],
          correctAnswer: "Abbasid Dynasty",
          explanation:
            "The Islamic Golden Age reached its peak during the Abbasid Dynasty, particularly during the reigns of Harun al-Rashid and his son Al-Ma'mun, with Baghdad as the center of learning and culture.",
        },
        {
          question:
            "Who was the famous Muslim commander who defeated the Crusaders and recaptured Jerusalem in 1187 CE?",
          options: ["Salahuddin Ayyubi (Saladin)", "Mahmud of Ghazni", "Muhammad Al-Fatih", "Baibars"],
          correctAnswer: "Salahuddin Ayyubi (Saladin)",
          explanation:
            "Salahuddin Ayyubi (Saladin) defeated the Crusaders at the Battle of Hattin in 1187 CE and subsequently recaptured Jerusalem, ending 88 years of Crusader rule.",
        },
        {
          question: "Which Ottoman Sultan conquered Constantinople in 1453 CE?",
          options: ["Suleiman the Magnificent", "Mehmed II (the Conqueror)", "Selim I", "Bayezid I"],
          correctAnswer: "Mehmed II (the Conqueror)",
          explanation:
            "Mehmed II, known as 'the Conqueror,' captured Constantinople (now Istanbul) in 1453 CE, bringing an end to the Byzantine Empire and establishing the city as the new capital of the Ottoman Empire.",
        },
        {
          question: "What was the House of Wisdom (Bayt al-Hikmah)?",
          options: [
            "A mosque in Makkah",
            "A palace in Damascus",
            "A center of learning and translation in Baghdad",
            "A fortress in Jerusalem",
          ],
          correctAnswer: "A center of learning and translation in Baghdad",
          explanation:
            "The House of Wisdom was a major intellectual center during the Islamic Golden Age where scholars translated works from Greek, Persian, and Indian sources into Arabic and conducted original research in various fields.",
        },
        {
          question: "Which Muslim mathematician is credited with developing algebra?",
          options: ["Al-Khwarizmi", "Ibn al-Haytham", "Al-Biruni", "Omar Khayyam"],
          correctAnswer: "Al-Khwarizmi",
          explanation:
            "Muhammad ibn Musa al-Khwarizmi, a 9th-century Persian mathematician, is considered the 'father of algebra.' The word 'algebra' comes from the title of his book 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' (The Compendious Book on Calculation by Completion and Balancing).",
        },
      ],
      advanced: [
        {
          question: "What was the significance of the 'mihna' (inquisition) during the Abbasid Caliphate?",
          options: [
            "It was a period of scientific advancement",
            "It was a theological controversy over the created or uncreated nature of the Quran",
            "It was a military campaign against the Byzantine Empire",
            "It was a system of tax collection",
          ],
          correctAnswer: "It was a theological controversy over the created or uncreated nature of the Quran",
          explanation:
            "The mihna was a period of theological testing instituted by Abbasid Caliph al-Ma'mun (813-833 CE) to impose the Mu'tazilite doctrine that the Quran was created rather than eternal. Scholars who refused to accept this view faced persecution, most notably Imam Ahmad ibn Hanbal.",
        },
        {
          question: "What was the historical significance of the Battle of Tours (Poitiers) in 732 CE?",
          options: [
            "It marked the beginning of Islamic rule in Spain",
            "It halted the Muslim advance into Western Europe",
            "It ended the Byzantine Empire",
            "It established the Abbasid Caliphate",
          ],
          correctAnswer: "It halted the Muslim advance into Western Europe",
          explanation:
            "The Battle of Tours (also known as the Battle of Poitiers) in 732 CE saw the Frankish forces under Charles Martel defeat the Umayyad army led by Abdul Rahman Al Ghafiqi. This battle is often cited as a turning point that prevented further Muslim expansion into Western Europe.",
        },
        {
          question: "What was the 'Asabiyyah' theory proposed by Ibn Khaldun in his Muqaddimah?",
          options: [
            "A theory of planetary motion",
            "A theory of social cohesion and group solidarity as the driving force in history",
            "A theory of economic development based on trade",
            "A theory of political governance based on shura (consultation)",
          ],
          correctAnswer: "A theory of social cohesion and group solidarity as the driving force in history",
          explanation:
            "Ibn Khaldun's concept of 'Asabiyyah' refers to social solidarity, tribal consciousness, or group cohesion. In his Muqaddimah, he proposed that this social cohesion was the driving force in history, with civilizations rising when asabiyyah is strong and declining when it weakens.",
        },
        {
          question:
            "What was the primary cause of the decline of the Abbasid Caliphate's central authority in the 9th and 10th centuries?",
          options: [
            "Foreign invasions",
            "Religious conflicts",
            "The rise of autonomous regional dynasties and military factionalism",
            "Economic collapse due to plague",
          ],
          correctAnswer: "The rise of autonomous regional dynasties and military factionalism",
          explanation:
            "The Abbasid Caliphate's central authority declined primarily due to the rise of autonomous regional dynasties (like the Samanids, Buyids, and Hamdanids) and military factionalism, particularly the increasing power of Turkish military slaves (Mamluks) who eventually became the real power behind the throne.",
        },
        {
          question: "What was the impact of the Mongol conquest of Baghdad in 1258 CE on Islamic civilization?",
          options: [
            "It had minimal impact as Baghdad was already in decline",
            "It led to the immediate end of all Islamic scholarly activity",
            "It destroyed the Abbasid Caliphate and resulted in massive destruction of knowledge and infrastructure",
            "It strengthened Islamic unity against a common enemy",
          ],
          correctAnswer:
            "It destroyed the Abbasid Caliphate and resulted in massive destruction of knowledge and infrastructure",
          explanation:
            "The Mongol conquest of Baghdad in 1258 CE ended the Abbasid Caliphate and resulted in the destruction of libraries, educational institutions, and irrigation systems. Hundreds of thousands were killed, including scholars, and countless books were destroyed or thrown into the Tigris River. This event is often considered one of the most catastrophic in Islamic history.",
        },
        {
          question: "What was the significance of the 'House of Wisdom' (Bayt al-Hikmah) in Baghdad?",
          options: [
            "It was merely a royal library",
            "It was a major center of translation, research, and scholarly activity during the Islamic Golden Age",
            "It was primarily a religious seminary for training imams",
            "It was a political institution for training administrators",
          ],
          correctAnswer:
            "It was a major center of translation, research, and scholarly activity during the Islamic Golden Age",
          explanation:
            "The House of Wisdom, established by the Abbasid Caliph Al-Ma'mun in the early 9th century, was a major intellectual center that played a crucial role in the preservation and advancement of knowledge. Scholars there translated works from Greek, Persian, Indian, and other sources into Arabic and conducted original research in mathematics, astronomy, medicine, chemistry, and other fields.",
        },
        {
          question: "What was the impact of Ibn Khaldun's 'Muqaddimah' on historical methodology?",
          options: [
            "It had little impact as it was largely ignored",
            "It introduced a revolutionary scientific approach to history, analyzing social, economic, and political factors",
            "It focused exclusively on religious interpretations of historical events",
            "It rejected the study of history as valuable",
          ],
          correctAnswer:
            "It introduced a revolutionary scientific approach to history, analyzing social, economic, and political factors",
          explanation:
            "Ibn Khaldun's 'Muqaddimah' (Introduction to History), written in the 14th century, introduced a revolutionary scientific approach to history. He analyzed social, economic, and political factors affecting civilizations, developed theories on the rise and fall of states, and emphasized empirical evidence over supernatural explanations. His work is considered the foundation of modern historiography, sociology, and economics.",
        },
        {
          question: "What was the significance of the Ottoman Caliphate's abolition in 1924?",
          options: [
            "It had minimal impact on the Muslim world",
            "It marked the end of the last major caliphate and profoundly affected Muslim political thought",
            "It strengthened Islamic political unity",
            "It was immediately replaced by another caliphate",
          ],
          correctAnswer:
            "It marked the end of the last major caliphate and profoundly affected Muslim political thought",
          explanation:
            "The abolition of the Ottoman Caliphate in 1924 by Mustafa Kemal Atatürk marked the end of the last major caliphate that had claimed authority over the global Muslim community. This event profoundly affected Muslim political thought, leading to debates about governance in the modern era, the relationship between Islam and the state, and the nature of political authority in Islam that continue to this day.",
        },
        {
          question: "What was the historical significance of Al-Andalus (Islamic Spain)?",
          options: [
            "It was a minor outpost of Islamic civilization with little impact",
            "It was a center of cultural and intellectual flourishing that preserved and advanced knowledge",
            "It was primarily a military base for further conquest",
            "It was isolated from the rest of Islamic civilization",
          ],
          correctAnswer:
            "It was a center of cultural and intellectual flourishing that preserved and advanced knowledge",
          explanation:
            "Al-Andalus (Islamic Spain, 711-1492 CE) was a center of cultural and intellectual flourishing where Muslims, Christians, and Jews coexisted and collaborated. It preserved classical knowledge that might otherwise have been lost, advanced sciences like astronomy, medicine, and mathematics, and developed unique architectural and artistic styles. Its libraries and universities attracted scholars from across Europe and the Islamic world, serving as a crucial bridge for knowledge transfer to medieval Europe.",
        },
        {
          question: "What was the historical relationship between the Mamluk Sultanate and the Mongol Empire?",
          options: [
            "The Mamluks were allies of the Mongols",
            "The Mamluks defeated the Mongols at Ain Jalut in 1260, halting their westward expansion",
            "The Mamluks were conquered by the Mongols",
            "There was no significant interaction between them",
          ],
          correctAnswer: "The Mamluks defeated the Mongols at Ain Jalut in 1260, halting their westward expansion",
          explanation:
            "The Mamluk Sultanate of Egypt and Syria achieved a decisive victory over the Mongols at the Battle of Ain Jalut in 1260 CE. This battle is historically significant as it marked the first major defeat of the Mongols and effectively halted their westward expansion. The Mamluks, who were originally slave soldiers who rose to power, subsequently established a powerful sultanate that ruled Egypt and Syria for over two centuries.",
        },
      ],
    },
  },
]
