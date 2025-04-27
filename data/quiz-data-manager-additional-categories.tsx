import type { QuizCategory } from "@/types/quiz"

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
      ],
    },
  },
  {
    id: "comparative",
    title: "Comparative Religion",
    description: "Atheism, Science and Islamic Thought",
    icon: "",
    levels: {
      easy: [
        {
          question: "What is the Islamic view on previous divine revelations?",
          options: [
            "They are completely false",
            "They were originally from Allah but were later altered",
            "They are identical to the Quran",
            "They are irrelevant to Muslims",
          ],
          correctAnswer: "They were originally from Allah but were later altered",
          explanation:
            "Islam teaches that Allah sent revelations to previous prophets (like the Torah to Moses and the Gospel to Jesus), but these texts were altered over time. The Quran is considered the final, unaltered revelation.",
        },
        {
          question: "How does Islam view science and scientific inquiry?",
          options: [
            "As completely opposed to religious belief",
            "As encouraged, since understanding the natural world leads to appreciation of Allah's creation",
            "As unnecessary for Muslims",
            "As only permissible for religious scholars",
          ],
          correctAnswer:
            "As encouraged, since understanding the natural world leads to appreciation of Allah's creation",
          explanation:
            "Islam encourages the pursuit of knowledge, including scientific inquiry. Many verses in the Quran encourage reflection on natural phenomena, and the Islamic civilization made significant contributions to science during the Golden Age of Islam.",
        },
      ],
      advanced: [
        {
          question: "What is the Islamic perspective on the concept of 'Original Sin' as found in Christianity?",
          options: [
            "Islam fully accepts the concept of Original Sin",
            "Islam rejects the concept, teaching that humans are born sinless (fitrah) and each person is responsible only for their own sins",
            "Islam teaches that only men inherit Original Sin",
            "Islam teaches that Original Sin exists but can be removed through specific rituals",
          ],
          correctAnswer:
            "Islam rejects the concept, teaching that humans are born sinless (fitrah) and each person is responsible only for their own sins",
          explanation:
            "Islam rejects the Christian concept of Original Sin. According to Islamic teaching, humans are born in a natural state of purity (fitrah), and each person is accountable only for their own actions, not for Adam's sin. The Quran states: 'No bearer of burdens shall bear the burden of another' (53:38).",
        },
        {
          question: "How does the Islamic concept of God (Allah) differ from the Christian concept of the Trinity?",
          options: [
            "There is no significant difference between the two concepts",
            "Islam teaches strict monotheism (Tawhid) and rejects the Trinity as compromising God's oneness",
            "Islam accepts the Trinity but interprets it differently",
            "Islam believes in multiple deities while Christianity believes in one God in three persons",
          ],
          correctAnswer:
            "Islam teaches strict monotheism (Tawhid) and rejects the Trinity as compromising God's oneness",
          explanation:
            "Islam emphasizes absolute monotheism (Tawhid) and considers the Christian doctrine of the Trinity (Father, Son, and Holy Spirit as three persons in one God) as compromising God's oneness. The Quran explicitly states: 'Say: He is Allah, the One and Only' (112:1) and 'They have certainly disbelieved who say that Allah is the third of three' (5:73).",
        },
      ],
    },
  },
]
