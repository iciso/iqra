import type { QuizCategory } from "@/types/quiz";

const newMuslimsCategory: QuizCategory = {
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
        question: "What is the significance of the Sunnah for new Muslims?",
        options: [
          "It is optional and not necessary",
          "It provides practical guidance on how to live according to Islamic teachings",
          "It replaces the Quran",
          "It is only for advanced scholars",
        ],
        correctAnswer: "It provides practical guidance on how to live according to Islamic teachings",
        explanation:
          "The Sunnah, the practices and teachings of Prophet Muhammad (peace be upon him), provides practical guidance for new Muslims on how to implement the Quran’s teachings in daily life, such as prayer, manners, and ethics.",
      },
      {
        question: "What is the role of intention (Niyyah) in Islamic worship?",
        options: [
          "It is not necessary",
          "It must be made aloud before every act",
          "It is the sincere intention in the heart to worship Allah",
          "It is only required for Hajj",
        ],
        correctAnswer: "It is the sincere intention in the heart to worship Allah",
        explanation:
          "Niyyah is the sincere intention in the heart to perform an act of worship for the sake of Allah alone. It is a prerequisite for the validity of acts like prayer, fasting, and charity.",
      },
      {
        question: "What is the Islamic ruling on learning the basics of Islam for new Muslims?",
        options: [
          "It is optional",
          "It is obligatory to learn the essentials",
          "It is only for children",
          "It is discouraged",
        ],
        correctAnswer: "It is obligatory to learn the essentials",
        explanation:
          "For new Muslims, learning the essentials of Islam, such as the five pillars, basic beliefs, and how to perform worship, is obligatory to fulfill their religious duties correctly.",
      },
      {
        question: "What is the concept of 'Halal' and 'Haram' in Islamic law?",
        options: [
          "Halal is recommended, Haram is obligatory",
          "Halal is permissible, Haram is forbidden",
          "Halal is for food, Haram is for actions",
          "Halal is temporary, Haram is permanent",
        ],
        correctAnswer: "Halal is permissible, Haram is forbidden",
        explanation:
          "Halal refers to what is permissible or lawful in Islamic law, while Haram refers to what is forbidden. These categories guide Muslims in food, behavior, and other aspects of life.",
      },
      {
        question: "What is the importance of community for new Muslims?",
        options: [
          "It is irrelevant",
          "It provides support, learning, and spiritual growth",
          "It is only for social events",
          "It is discouraged",
        ],
        correctAnswer: "It provides support, learning, and spiritual growth",
        explanation:
          "Joining a Muslim community is crucial for new Muslims as it offers support, opportunities to learn from others, and fosters spiritual growth through collective worship and guidance.",
      },
    ],
  },
};

export default newMuslimsCategory;
