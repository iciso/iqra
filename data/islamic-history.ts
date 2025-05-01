import type { QuizCategory } from "@/types/quiz"

const islamicHistoryCategory: QuizCategory = {
  id: "history",
  title: "Islamic History & Civilization",
  description: "Explore the golden ages of Islamic civilization, scientific achievements, and cultural contributions",
  icon: "landmark",
  levels: {
    easy: [
      {
        question: "Which city was the first capital of the Islamic state under Prophet Muhammad (PBUH)?",
        options: ["Makkah", "Madinah", "Jerusalem", "Damascus"],
        correctAnswer: "Madinah",
        explanation:
          "After the Hijrah (migration) from Makkah, Prophet Muhammad (PBUH) established the first Islamic state in Madinah, making it the first capital.",
      },
      {
        question: "Who was the first Caliph after the death of Prophet Muhammad (PBUH)?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Abu Bakr",
        explanation:
          "Abu Bakr was elected as the first Caliph (successor) after the death of Prophet Muhammad (PBUH) in 632 CE.",
      },
      {
        question: "During which Caliph's rule was the Quran compiled into a single manuscript?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Abu Bakr",
        explanation:
          "The Quran was first compiled into a single manuscript during Abu Bakr's caliphate, at the suggestion of Umar ibn al-Khattab, following the Battle of Yamama.",
      },
      {
        question: "Which Muslim dynasty ruled Spain (Al-Andalus) for nearly 800 years?",
        options: ["Abbasids", "Umayyads", "Ottomans", "Fatimids"],
        correctAnswer: "Umayyads",
        explanation:
          "The Umayyad dynasty established rule in Al-Andalus (Islamic Spain) in 711 CE, and various Muslim dynasties continued to rule parts of the Iberian Peninsula until 1492 CE.",
      },
      {
        question: "Who was the founder of the Ottoman Empire?",
        options: ["Osman I", "Mehmed II", "Suleiman the Magnificent", "Selim I"],
        correctAnswer: "Osman I",
        explanation:
          "Osman I (also known as Osman Bey or Osman Ghazi) founded the Ottoman Empire around 1299 CE. The empire was named after him - 'Ottoman' is derived from the Arabic form of his name, 'Uthman'.",
      },
      {
        question: "Which Muslim ruler sent the famous elephant as a gift to Charlemagne?",
        options: ["Harun al-Rashid", "Al-Mansur", "Saladin", "Al-Ma'mun"],
        correctAnswer: "Harun al-Rashid",
        explanation:
          "Abbasid Caliph Harun al-Rashid sent an Asian elephant named Abul-Abbas as a diplomatic gift to Charlemagne, the Holy Roman Emperor, in 802 CE.",
      },
      {
        question: "Which city was the capital of the Abbasid Caliphate for most of its existence?",
        options: ["Damascus", "Baghdad", "Cairo", "Cordoba"],
        correctAnswer: "Baghdad",
        explanation:
          "Baghdad was founded in 762 CE by the Abbasid Caliph Al-Mansur and served as the capital of the Abbasid Caliphate during its golden age.",
      },
      {
        question: "Which Muslim general conquered Sindh (in modern-day Pakistan) in 712 CE?",
        options: ["Tariq ibn Ziyad", "Muhammad bin Qasim", "Khalid ibn al-Walid", "Saladin"],
        correctAnswer: "Muhammad bin Qasim",
        explanation:
          "Muhammad bin Qasim, a young 17-year-old general of the Umayyad Caliphate, conquered Sindh in 712 CE, bringing Islam to the Indian subcontinent.",
      },
      {
        question: "Which Muslim dynasty ruled Egypt after the Fatimids?",
        options: ["Ayyubids", "Mamluks", "Ottomans", "Abbasids"],
        correctAnswer: "Ayyubids",
        explanation:
          "The Ayyubid dynasty, founded by Saladin (Salah ad-Din), ruled Egypt after overthrowing the Fatimid Caliphate in 1171 CE.",
      },
      {
        question: "When did the Ottoman Empire officially end?",
        options: ["1918", "1922", "1924", "1932"],
        correctAnswer: "1922",
        explanation:
          "The Ottoman Empire officially ended in 1922 when the sultanate was abolished. The Turkish Republic was proclaimed in 1923, and the caliphate was abolished in 1924.",
      },
    ],
    advanced: [
      {
        question: "Which Muslim scientist is known as the 'Father of Algebra'?",
        options: ["Ibn Sina (Avicenna)", "Al-Khwarizmi", "Ibn al-Haytham", "Al-Biruni"],
        correctAnswer: "Al-Khwarizmi",
        explanation:
          "Muhammad ibn Musa al-Khwarizmi (c. 780-850 CE) is considered the 'Father of Algebra'. His book 'Kitab al-Jabr wa-l-Muqabala' gave us the term 'algebra'.",
      },
      {
        question:
          "Which Muslim physician wrote 'The Canon of Medicine' that was used as a medical textbook in Europe for centuries?",
        options: ["Ibn Sina (Avicenna)", "Al-Razi", "Ibn Rushd (Averroes)", "Ibn al-Nafis"],
        correctAnswer: "Ibn Sina (Avicenna)",
        explanation:
          "Ibn Sina (980-1037 CE), known as Avicenna in the West, wrote 'The Canon of Medicine' (Al-Qanun fi al-Tibb), which was a standard medical text in European universities until the 17th century.",
      },
      {
        question: "Which Muslim scholar first described the pulmonary circulation of blood?",
        options: ["Ibn Sina", "Al-Razi", "Ibn al-Nafis", "Al-Zahrawi"],
        correctAnswer: "Ibn al-Nafis",
        explanation:
          "Ibn al-Nafis (1213-1288 CE) was the first to describe the pulmonary circulation of blood, about 300 years before European scientists.",
      },
      {
        question: "Which Muslim mathematician introduced the concept of zero to the Islamic world?",
        options: ["Al-Khwarizmi", "Al-Kindi", "Al-Battani", "Al-Karaji"],
        correctAnswer: "Al-Khwarizmi",
        explanation:
          "Al-Khwarizmi introduced the Hindu-Arabic numeral system, including the concept of zero, to the Islamic world through his mathematical works.",
      },
      {
        question: "Which Muslim dynasty established the House of Wisdom (Bayt al-Hikma) in Baghdad?",
        options: ["Umayyads", "Abbasids", "Fatimids", "Seljuks"],
        correctAnswer: "Abbasids",
        explanation:
          "The House of Wisdom was established by the Abbasid Caliph Harun al-Rashid and expanded by his son Al-Ma'mun. It was a major intellectual center during the Islamic Golden Age.",
      },
      {
        question: "Which Muslim explorer traveled extensively through Asia, Africa, and Europe in the 14th century?",
        options: ["Ibn Battuta", "Al-Idrisi", "Ibn Jubayr", "Al-Masudi"],
        correctAnswer: "Ibn Battuta",
        explanation:
          "Ibn Battuta (1304-1369 CE) traveled over 75,000 miles across Africa, Asia, and parts of Europe over a period of nearly 30 years, documenting his journeys in 'Rihla' (The Travels).",
      },
      {
        question: "Which Muslim astronomer accurately calculated the length of the solar year?",
        options: ["Al-Battani", "Al-Biruni", "Al-Sufi", "Al-Farghani"],
        correctAnswer: "Al-Battani",
        explanation:
          "Al-Battani (858-929 CE) calculated the length of the solar year as 365 days, 5 hours, 46 minutes and 24 seconds, which is very close to modern calculations.",
      },
      {
        question: "Which Muslim dynasty ruled the largest portion of the Islamic world in the 16th century?",
        options: ["Ottomans", "Safavids", "Mughals", "Mamluks"],
        correctAnswer: "Ottomans",
        explanation:
          "In the 16th century, the Ottoman Empire was at its height and controlled vast territories across three continents: Asia, Europe, and Africa.",
      },
      {
        question: "Which Muslim scholar wrote 'Muqaddimah', considered one of the earliest works on social sciences?",
        options: ["Ibn Khaldun", "Al-Ghazali", "Ibn Rushd", "Al-Farabi"],
        correctAnswer: "Ibn Khaldun",
        explanation:
          "Ibn Khaldun (1332-1406 CE) wrote 'Muqaddimah' (Introduction) as a preface to his universal history. It is considered a pioneering work in the fields of historiography, sociology, economics, and demography.",
      },
      {
        question: "Which Muslim civilization built the Alhambra palace complex in Granada, Spain?",
        options: ["Umayyads of Spain", "Nasrids", "Almoravids", "Almohads"],
        correctAnswer: "Nasrids",
        explanation:
          "The Alhambra was built primarily during the Nasrid dynasty (1230-1492 CE), the last Muslim dynasty in Spain, and is considered one of the finest examples of Islamic architecture.",
      },
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!islamicHistoryCategory.levels.intermediate) {
  islamicHistoryCategory.levels.intermediate = [...islamicHistoryCategory.levels.easy]
}

export default islamicHistoryCategory
