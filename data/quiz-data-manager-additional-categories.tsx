import type { QuizCategory } from "@/types/quiz"

// Has Tazkiyah, History and New Muslims
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
  {
    id: "dawah",
    title: "Dawah",
    description: "Inviting to Islam",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the meaning of 'Dawah'?",
          options: ["Prayer", "Fasting", "Invitation to Islam", "Pilgrimage"],
          correctAnswer: "Invitation to Islam",
          explanation:
            "Dawah literally means 'invitation' or 'call' and refers to the practice of inviting people to understand and embrace Islam.",
        },
        {
          question: "Which of the following is NOT a quality that a person giving Dawah should have?",
          options: ["Knowledge", "Patience", "Arrogance", "Good character"],
          correctAnswer: "Arrogance",
          explanation:
            "Arrogance is contrary to the spirit of Dawah. A person giving Dawah should be humble, knowledgeable, patient, and display good character.",
        },
        {
          question: "What is the primary source that should guide Dawah efforts?",
          options: ["Cultural traditions", "Personal opinions", "The Quran and Sunnah", "Modern philosophies"],
          correctAnswer: "The Quran and Sunnah",
          explanation:
            "The Quran and the Sunnah (teachings and practices of Prophet Muhammad) are the primary sources that should guide all Dawah efforts to ensure authenticity and correctness.",
        },
        {
          question:
            "Which Quranic verse mentions: 'Invite to the way of your Lord with wisdom and good instruction...'?",
          options: ["Surah Al-Baqarah 2:256", "Surah An-Nahl 16:125", "Surah Al-Ikhlas 112:1", "Surah Al-Fatihah 1:5"],
          correctAnswer: "Surah An-Nahl 16:125",
          explanation:
            "Surah An-Nahl 16:125 states: 'Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best. Indeed, your Lord is most knowing of who has strayed from His way, and He is most knowing of who is [rightly] guided.'",
        },
        {
          question: "What is 'Hikmah' in the context of Dawah?",
          options: [
            "Forceful argumentation",
            "Wisdom and good judgment",
            "Memorization of texts",
            "Financial incentives",
          ],
          correctAnswer: "Wisdom and good judgment",
          explanation:
            "Hikmah refers to wisdom, good judgment, and insight. In Dawah, it means conveying the message in a way that is appropriate to the situation and the person being addressed.",
        },
        {
          question: "Which of the following is the best approach when giving Dawah?",
          options: [
            "Forcing others to accept your viewpoint",
            "Speaking without knowledge",
            "Being gentle and respectful",
            "Arguing aggressively",
          ],
          correctAnswer: "Being gentle and respectful",
          explanation:
            "The best approach in Dawah is to be gentle, respectful, and considerate of others' feelings and perspectives, following the example of Prophet Muhammad (peace be upon him).",
        },
        {
          question: "What is the purpose of Dawah?",
          options: [
            "To win arguments",
            "To increase the number of Muslims",
            "To convey the message of Islam and guide people to the truth",
            "To show superiority over other religions",
          ],
          correctAnswer: "To convey the message of Islam and guide people to the truth",
          explanation:
            "The purpose of Dawah is to convey the message of Islam and guide people to the truth, leaving the outcome to Allah. It's about sharing the guidance, not forcing conversion or winning arguments.",
        },
        {
          question: "Which of the following is NOT a method of Dawah mentioned in the Quran?",
          options: ["Invitation with wisdom", "Good admonition", "Arguing in the best manner", "Compulsion and force"],
          correctAnswer: "Compulsion and force",
          explanation:
            "The Quran explicitly states 'There is no compulsion in religion' (2:256). The methods mentioned in the Quran include invitation with wisdom, good admonition, and arguing in the best manner.",
        },
        {
          question: "What is the role of personal example in Dawah?",
          options: [
            "It is not important",
            "It is somewhat helpful",
            "It is one of the most effective forms of Dawah",
            "It only matters for religious leaders",
          ],
          correctAnswer: "It is one of the most effective forms of Dawah",
          explanation:
            "Personal example is one of the most effective forms of Dawah. When people see the positive impact of Islamic teachings in a Muslim's life, it can be more convincing than words alone.",
        },
        {
          question: "What should be the primary motivation for giving Dawah?",
          options: [
            "To gain respect from the community",
            "To fulfill a religious obligation without caring about results",
            "Seeking Allah's pleasure and genuine concern for others",
            "To demonstrate superior knowledge",
          ],
          correctAnswer: "Seeking Allah's pleasure and genuine concern for others",
          explanation:
            "The primary motivation for giving Dawah should be seeking Allah's pleasure and having genuine concern for the guidance and welfare of others.",
        },
      ],
      advanced: [
        {
          question:
            "What is the concept of 'Maqasid al-Shariah' (higher objectives of Islamic law) and its relevance to contemporary Dawah?",
          options: [
            "It refers to the literal application of Islamic law without consideration of context",
            "It refers to the underlying aims and purposes of Islamic law, which can guide flexible and contextual Dawah approaches",
            "It is a concept that is irrelevant to Dawah activities",
            "It refers exclusively to political objectives in Islamic governance",
          ],
          correctAnswer:
            "It refers to the underlying aims and purposes of Islamic law, which can guide flexible and contextual Dawah approaches",
          explanation:
            "Maqasid al-Shariah refers to the higher objectives of Islamic law, which include the preservation of faith, life, intellect, lineage, and property. Understanding these objectives allows for more nuanced, flexible, and contextual Dawah approaches that focus on the spirit and purpose of Islamic teachings rather than rigid literalism.",
        },
        {
          question: "How does the concept of 'Fiqh al-Waqi' (understanding of reality) apply to effective Dawah?",
          options: [
            "It means ignoring contemporary realities and focusing only on classical texts",
            "It refers to understanding the contemporary context, challenges, and circumstances when applying Islamic principles in Dawah",
            "It means adapting Islamic teachings to match popular trends",
            "It refers exclusively to political analysis",
          ],
          correctAnswer:
            "It refers to understanding the contemporary context, challenges, and circumstances when applying Islamic principles in Dawah",
          explanation:
            "Fiqh al-Waqi' (understanding of reality) is crucial for effective Dawah as it involves comprehending the contemporary context, cultural nuances, social challenges, and intellectual currents when applying Islamic principles. This allows the da'i (one who gives Dawah) to address real concerns and present Islam in a relevant and meaningful way.",
        },
        {
          question: "What is the significance of 'Usul al-Dawah' (principles of Dawah) in systematic Islamic outreach?",
          options: [
            "It refers to using only one method of Dawah in all situations",
            "It refers to a set of foundational principles that guide methodical and effective Dawah efforts",
            "It means focusing exclusively on converting non-Muslims",
            "It refers to political strategies for establishing Islamic governance",
          ],
          correctAnswer:
            "It refers to a set of foundational principles that guide methodical and effective Dawah efforts",
          explanation:
            "Usul al-Dawah refers to the foundational principles that guide systematic and effective Dawah efforts. These include principles derived from the Quran and Sunnah about the proper methodology, ethics, priorities, and approaches to inviting others to Islam in different contexts and with different audiences.",
        },
        {
          question: "How does the concept of 'Maslaha' (public interest) inform ethical considerations in Dawah?",
          options: [
            "It means prioritizing quantity of converts over quality of understanding",
            "It means considering the genuine welfare and benefit of individuals and society in Dawah approaches",
            "It refers exclusively to economic benefits",
            "It means focusing only on the interests of the Muslim community",
          ],
          correctAnswer:
            "It means considering the genuine welfare and benefit of individuals and society in Dawah approaches",
          explanation:
            "Maslaha (public interest) in Dawah means considering the genuine welfare and benefit of individuals and society when determining approaches and priorities. It involves weighing potential benefits and harms, considering timing and context, and ensuring that Dawah efforts truly serve the best interests of those being invited to Islam, rather than causing harm or alienation.",
        },
        {
          question: "What is the relationship between 'Rahmah' (mercy) and effective Dawah?",
          options: [
            "Mercy is irrelevant to Dawah, which should focus on warning about punishment",
            "Mercy should only be emphasized when speaking to Muslims",
            "Mercy is the cornerstone of effective Dawah, reflecting Allah's primary attribute and the Prophet's approach",
            "Mercy means avoiding any discussion of Islamic rules or obligations",
          ],
          correctAnswer:
            "Mercy is the cornerstone of effective Dawah, reflecting Allah's primary attribute and the Prophet's approach",
          explanation:
            "Rahmah (mercy) is the cornerstone of effective Dawah, reflecting Allah's primary attribute and the Prophet Muhammad's approach. The Quran states that the Prophet was sent 'as a mercy to all worlds' (21:107). Dawah rooted in genuine compassion, empathy, and concern for others' well-being is more authentic and impactful than approaches based on harshness or fear.",
        },
        {
          question: "What is the concept of 'Hikmah' (wisdom) in the context of Dawah?",
          options: [
            "Using forceful arguments to win debates",
            "Conveying the message with wisdom, considering the recipient's background, understanding, and circumstances",
            "Simplifying Islamic teachings to make them more appealing",
            "Using only rational arguments without reference to revelation",
          ],
          correctAnswer:
            "Conveying the message with wisdom, considering the recipient's background, understanding, and circumstances",
          explanation:
            "Hikmah (wisdom) in Dawah refers to conveying the message with wisdom, considering the recipient's background, understanding, and circumstances. The Quran instructs: 'Invite to the way of your Lord with wisdom' (16:125). This includes using appropriate language, addressing relevant concerns, choosing suitable timing, and presenting Islam in a way that resonates with the specific audience.",
        },
        {
          question: "How does the concept of 'Gradualism' apply to effective Dawah?",
          options: [
            "It means compromising Islamic principles to attract people",
            "It refers to presenting Islamic teachings in stages, prioritizing fundamentals before details",
            "It means delaying the invitation to Islam indefinitely",
            "It refers to gradually reducing Islamic practices to make them easier",
          ],
          correctAnswer:
            "It refers to presenting Islamic teachings in stages, prioritizing fundamentals before details",
          explanation:
            "Gradualism in Dawah refers to presenting Islamic teachings in stages, prioritizing fundamentals before details. This approach follows the Quranic revelation pattern, which was revealed over 23 years, addressing beliefs before practices. Prophet Muhammad (peace be upon him) instructed Mu'adh bin Jabal when sending him to Yemen: 'Invite them to testify to La ilaha illa Allah... If they obey you in that, then inform them that Allah has made five daily prayers obligatory...' This gradual approach respects people's capacity to absorb and implement new concepts.",
        },
        {
          question: "What is the role of 'Akhlaq' (character) in effective Dawah?",
          options: [
            "Character is irrelevant as long as the message is correct",
            "Good character is the most powerful form of Dawah, as it demonstrates Islam in practice",
            "Character only matters when dealing with Muslims, not non-Muslims",
            "Character is less important than eloquence and persuasive arguments",
          ],
          correctAnswer: "Good character is the most powerful form of Dawah, as it demonstrates Islam in practice",
          explanation:
            "Good character (Akhlaq) is considered the most powerful form of Dawah as it demonstrates Islamic teachings in practice. The Prophet Muhammad (peace be upon him) said: 'I have only been sent to perfect good character.' His exemplary conduct attracted people to Islam more effectively than his words alone. When people observe Muslims embodying Islamic values like honesty, compassion, and integrity, it creates credibility and interest in the faith.",
        },
        {
          question: "What is the concept of 'Tawhid-centric' Dawah?",
          options: [
            "Focusing exclusively on rituals and practices",
            "Centering the invitation around the oneness of Allah as the core message of Islam",
            "Emphasizing cultural aspects of Muslim societies",
            "Focusing primarily on political dimensions of Islam",
          ],
          correctAnswer: "Centering the invitation around the oneness of Allah as the core message of Islam",
          explanation:
            "Tawhid-centric Dawah means centering the invitation around the oneness of Allah as the core message of Islam. This approach follows the pattern of all prophets who prioritized establishing correct belief in God before other aspects. The Prophet Muhammad (peace be upon him) instructed Mu'adh bin Jabal to begin with Tawhid when inviting people to Islam. This foundation provides the proper context for understanding all other Islamic teachings.",
        },
        {
          question: "How does the concept of 'Da'wah bil-Hal' (invitation through action) differ from verbal Dawah?",
          options: [
            "They are contradictory approaches",
            "Da'wah bil-Hal demonstrates Islam through actions and example, complementing verbal invitation",
            "Da'wah bil-Hal is only for those who cannot speak well",
            "Da'wah bil-Hal was practiced by early Muslims but is not relevant today",
          ],
          correctAnswer:
            "Da'wah bil-Hal demonstrates Islam through actions and example, complementing verbal invitation",
          explanation:
            "Da'wah bil-Hal (invitation through action) demonstrates Islam through practical example, complementing verbal invitation. While verbal Dawah communicates Islamic teachings explicitly, Da'wah bil-Hal shows these teachings in practice through exemplary conduct, charitable work, ethical business practices, and positive contributions to society. Both approaches are complementary and were embodied by the Prophet Muhammad (peace be upon him), who was both an eloquent teacher and a living example of the Quran.",
        },
      ],
    },
  },
  {
    id: "new-muslims",
    title: "New Muslims",
    description: "Essentials for New Muslims",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the meaning of the word 'Islam'?",
          options: ["Peace", "Submission to Allah", "Prayer", "Charity"],
          correctAnswer: "Submission to Allah",
          explanation:
            "The word 'Islam' comes from the Arabic root 's-l-m' which means peace, but in the religious context, it means voluntary submission or surrender to the will of Allah.",
        },
        {
          question: "What is the declaration of faith (Shahada) in Islam?",
          options: [
            "There is no god but Allah, and Muhammad is the messenger of Allah",
            "Allah is the Greatest",
            "All praise belongs to Allah",
            "There is no power except with Allah",
          ],
          correctAnswer: "There is no god but Allah, and Muhammad is the messenger of Allah",
          explanation:
            "The Shahada (declaration of faith) is: 'La ilaha illa Allah, Muhammad rasul Allah' which means 'There is no god but Allah, and Muhammad is the messenger of Allah.' This declaration is the first pillar of Islam.",
        },
        {
          question: "How many times a day do Muslims pray?",
          options: ["Once", "Three times", "Five times", "Seven times"],
          correctAnswer: "Five times",
          explanation:
            "Muslims are required to perform five obligatory prayers (Salah) each day: Fajr (dawn), Dhuhr (noon), Asr (afternoon), Maghrib (sunset), and Isha (night).",
        },
        {
          question: "What is the holy book of Islam?",
          options: ["Injeel", "Torah", "Quran", "Zabur"],
          correctAnswer: "Quran",
          explanation:
            "The Quran is the holy book of Islam, believed by Muslims to be the literal word of Allah revealed to Prophet Muhammad (peace be upon him) through the angel Gabriel over a period of 23 years.",
        },
        {
          question: "What is Wudu?",
          options: [
            "A type of Islamic clothing",
            "Ritual purification before prayer",
            "A special prayer during Ramadan",
            "A pilgrimage site",
          ],
          correctAnswer: "Ritual purification before prayer",
          explanation:
            "Wudu is the Islamic procedure for washing parts of the body, a type of ritual purification that Muslims perform before prayer (Salah) and before handling the Quran.",
        },
        {
          question: "What is the direction Muslims face during prayer?",
          options: ["East", "West", "Towards the Kaaba in Makkah", "Towards Jerusalem"],
          correctAnswer: "Towards the Kaaba in Makkah",
          explanation:
            "Muslims face the direction of the Kaaba in Makkah, Saudi Arabia during prayer. This direction is called the Qibla.",
        },
        {
          question: "What is Ramadan?",
          options: [
            "An Islamic festival",
            "The month of fasting in the Islamic calendar",
            "A special prayer",
            "The name of a mosque",
          ],
          correctAnswer: "The month of fasting in the Islamic calendar",
          explanation:
            "Ramadan is the ninth month of the Islamic calendar, during which Muslims fast from dawn until sunset. It is a time of spiritual reflection, improvement, and increased devotion and worship.",
        },
        {
          question: "What is Zakat?",
          options: [
            "Islamic fasting",
            "Obligatory charity given by Muslims",
            "Islamic pilgrimage",
            "A type of Islamic prayer",
          ],
          correctAnswer: "Obligatory charity given by Muslims",
          explanation:
            "Zakat is one of the five pillars of Islam and refers to the obligatory giving of a set proportion of one's wealth to charity. It is regarded as a type of worship and self-purification.",
        },
        {
          question: "What is Hajj?",
          options: [
            "Islamic New Year celebration",
            "A special prayer during Ramadan",
            "Pilgrimage to Makkah",
            "A type of Islamic charity",
          ],
          correctAnswer: "Pilgrimage to Makkah",
          explanation:
            "Hajj is the annual Islamic pilgrimage to Makkah, Saudi Arabia, and is mandatory for Muslims to perform at least once in their lifetime if they are physically and financially capable.",
        },
        {
          question: "What does 'Halal' mean?",
          options: ["Forbidden", "Permissible", "Doubtful", "Disliked"],
          correctAnswer: "Permissible",
          explanation:
            "Halal is an Arabic word meaning 'permissible' or 'lawful'. In the context of food, it refers to what is allowed for Muslims to eat according to Islamic law.",
        },
      ],
      advanced: [
        {
          question: "What is the concept of 'Tawhid' in Islam?",
          options: [
            "The belief in multiple deities",
            "The oneness and uniqueness of Allah",
            "The belief in prophets",
            "The practice of charity",
          ],
          correctAnswer: "The oneness and uniqueness of Allah",
          explanation:
            "Tawhid is the most fundamental concept in Islam, referring to the oneness and uniqueness of Allah. It means believing that Allah is One, without any partners, and that nothing is comparable to Him.",
        },
        {
          question: "What are the three categories of Tawhid?",
          options: [
            "Tawhid al-Rububiyyah, Tawhid al-Uluhiyyah, Tawhid al-Asma wa al-Sifat",
            "Tawhid al-Salat, Tawhid al-Zakat, Tawhid al-Sawm",
            "Tawhid al-Iman, Tawhid al-Islam, Tawhid al-Ihsan",
            "Tawhid al-Quran, Tawhid al-Sunnah, Tawhid al-Ijma",
          ],
          correctAnswer: "Tawhid al-Rububiyyah, Tawhid al-Uluhiyyah, Tawhid al-Asma wa al-Sifat",
          explanation:
            "The three categories of Tawhid are: Tawhid al-Rububiyyah (Oneness of Lordship), Tawhid al-Uluhiyyah (Oneness of Worship), and Tawhid al-Asma wa al-Sifat (Oneness of Allah's Names and Attributes).",
        },
        {
          question: "What is the concept of 'Shirk' in Islam?",
          options: [
            "The practice of charity",
            "Associating partners with Allah",
            "Performing the pilgrimage",
            "Fasting during Ramadan",
          ],
          correctAnswer: "Associating partners with Allah",
          explanation:
            "Shirk is the sin of associating partners with Allah, whether in His Lordship, worship, or in His names and attributes. It is considered the gravest sin in Islam.",
        },
        {
          question: "What is the Islamic concept of 'Iman'?",
          options: [
            "The five daily prayers",
            "Faith or belief",
            "Charity given to the poor",
            "The pilgrimage to Makkah",
          ],
          correctAnswer: "Faith or belief",
          explanation:
            "Iman refers to faith or belief in Islam. It encompasses belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree (both the good and bad of it).",
        },
        {
          question: "What are the 'Arkaan al-Iman' (Pillars of Faith) in Islam?",
          options: [
            "Prayer, Fasting, Zakat, Hajj, Shahada",
            "Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree",
            "Ihsan, Islam, Iman",
            "Quran, Sunnah, Ijma, Qiyas",
          ],
          correctAnswer:
            "Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree",
          explanation:
            "The Arkaan al-Iman (Pillars of Faith) in Islam are: Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree (both the good and bad of it).",
        },
        {
          question: "What is the concept of 'Tawhid' in Islam?",
          options: [
            "The belief in multiple deities",
            "The oneness and uniqueness of Allah",
            "The belief in prophets",
            "The practice of charity",
          ],
          correctAnswer: "The oneness and uniqueness of Allah",
          explanation:
            "Tawhid is the most fundamental concept in Islam, referring to the oneness and uniqueness of Allah. It means believing that Allah is One, without any partners, and that nothing is comparable to Him.",
        },
        {
          question: "What are the three categories of Tawhid?",
          options: [
            "Tawhid al-Rububiyyah, Tawhid al-Uluhiyyah, Tawhid al-Asma wa al-Sifat",
            "Tawhid al-Salat, Tawhid al-Zakat, Tawhid al-Sawm",
            "Tawhid al-Iman, Tawhid al-Islam, Tawhid al-Ihsan",
            "Tawhid al-Quran, Tawhid al-Sunnah, Tawhid al-Ijma",
          ],
          correctAnswer: "Tawhid al-Rububiyyah, Tawhid al-Uluhiyyah, Tawhid al-Asma wa al-Sifat",
          explanation:
            "The three categories of Tawhid are: Tawhid al-Rububiyyah (Oneness of Lordship), Tawhid al-Uluhiyyah (Oneness of Worship), and Tawhid al-Asma wa al-Sifat (Oneness of Allah's Names and Attributes).",
        },
        {
          question: "What is the concept of 'Shirk' in Islam?",
          options: [
            "The practice of charity",
            "Associating partners with Allah",
            "Performing the pilgrimage",
            "Fasting during Ramadan",
          ],
          correctAnswer: "Associating partners with Allah",
          explanation:
            "Shirk is the sin of associating partners with Allah, whether in His Lordship, worship, or in His names and attributes. It is considered the gravest sin in Islam.",
        },
        {
          question: "What is the Islamic concept of 'Iman'?",
          options: [
            "The five daily prayers",
            "Faith or belief",
            "Charity given to the poor",
            "The pilgrimage to Makkah",
          ],
          correctAnswer: "Faith or belief",
          explanation:
            "Iman refers to faith or belief in Islam. It encompasses belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree (both the good and bad of it).",
        },
        {
          question: "What are the 'Arkaan al-Iman' (Pillars of Faith) in Islam?",
          options: [
            "Prayer, Fasting, Zakat, Hajj, Shahada",
            "Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree",
            "Ihsan, Islam, Iman",
            "Quran, Sunnah, Ijma, Qiyas",
          ],
          correctAnswer:
            "Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree",
          explanation:
            "The Arkaan al-Iman (Pillars of Faith) in Islam are: Belief in Allah, His Angels, His Books, His Messengers, the Day of Judgment, and Divine Decree (both the good and bad of it).",
        },
      ],
    },
  },
]
