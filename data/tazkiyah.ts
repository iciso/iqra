import type { QuizCategory } from "@/types/quiz"

// Has Tazkiyah data 10 in easy and 10 in advanced
// Add 20 more quiz questions in both easy and advanced levels 
const tazkiyahCategory: QuizCategory[] = [
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
]

export default tazkiyahCategory