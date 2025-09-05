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
    question: "Which battle marked the beginning of the Islamic calendar?",
    options: [
      "Battle of Badr",
      "Battle of Uhud",
      "Hijrah (Migration to Madinah)",
      "Conquest of Makkah"
    ],
    correctAnswer: "Hijrah (Migration to Madinah)",
    explanation: "The Islamic calendar begins from the Hijrah in 622 CE when Prophet Muhammad (PBUH) migrated from Makkah to Madinah, marking the start of the Muslim community."
  },
  {
    question: "Who was the first martyr in Islam?",
    options: [
      "Sumayyah bint Khayyat",
      "Hamza ibn Abdul-Muttalib",
      "Bilal ibn Rabah",
      "Abu Bakr"
    ],
    correctAnswer: "Sumayyah bint Khayyat",
    explanation: "Sumayyah bint Khayyat was the first martyr in Islam, tortured and killed by the Quraysh for refusing to renounce her faith during the early days in Makkah."
  },
  {
    question: "Which companion was known as the 'Sword of Allah'?",
    options: [
      "Umar ibn al-Khattab",
      "Khalid ibn al-Walid",
      "Ali ibn Abi Talib",
      "Uthman ibn Affan"
    ],
    correctAnswer: "Khalid ibn al-Walid",
    explanation: "Khalid ibn al-Walid earned the title 'Sword of Allah' for his military brilliance in battles during the early Islamic conquests."
  },
  {
    question: "What was the name of Prophet Muhammad's (PBUH) camel during the Hijrah?",
    options: [
      "Al-Qaswa",
      "Al-Adha",
      "Buraq",
      "Al-Yamamah"
    ],
    correctAnswer: "Al-Qaswa",
    explanation: "Al-Qaswa was the name of the Prophet's she-camel that carried him during the Hijrah from Makkah to Madinah."
  },
  {
    question: "Which city was known as the 'City of the Prophet'?",
    options: [
      "Makkah",
      "Jerusalem",
      "Madinah",
      "Damascus"
    ],
    correctAnswer: "Madinah",
    explanation: "Madinah is called 'Madinat an-Nabi' (City of the Prophet) as it became the home of Prophet Muhammad (PBUH) after the Hijrah and the first Islamic state."
  },
  {
    question: "Who was the first Muslim child born in Madinah after the Hijrah?",
    options: [
      "Abdullah ibn Zubayr",
      "Abdullah ibn Umar",
      "Abdullah ibn Abbas",
      "Abdullah ibn Ja'far"
    ],
    correctAnswer: "Abdullah ibn Zubayr",
    explanation: "Abdullah ibn Zubayr was born to Asma bint Abi Bakr and Zubayr ibn al-Awwam shortly after the Muslims arrived in Madinah."
  },
  {
    question: "Which companion compiled the first complete written copy of the Quran?",
    options: [
      "Abu Bakr",
      "Umar ibn al-Khattab",
      "Zayd ibn Thabit",
      "Ali ibn Abi Talib"
    ],
    correctAnswer: "Zayd ibn Thabit",
    explanation: "Zayd ibn Thabit, under Abu Bakr's instruction, compiled the first complete written copy of the Quran after the Battle of Yamama."
  },
  {
    question: "What was the name of the first Islamic university?",
    options: [
      "Al-Azhar University",
      "University of Al-Qarawiyyin",
      "Nizamiyya Madrasa",
      "Bayt al-Hikma"
    ],
    correctAnswer: "University of Al-Qarawiyyin",
    explanation: "Founded in 859 CE in Fez, Morocco by Fatima al-Fihri, Al-Qarawiyyin is recognized by UNESCO as the oldest existing degree-granting university."
  },
  {
    question: "Which battle is known as the 'Conquest of Conquests' in Islamic history?",
    options: [
      "Conquest of Makkah",
      "Battle of Yarmouk",
      "Conquest of Jerusalem",
      "Battle of Qadisiyyah"
    ],
    correctAnswer: "Conquest of Makkah",
    explanation: "The Conquest of Makkah in 630 CE is called 'Fath al-Futuh' (Conquest of Conquests) as it marked Islam's triumph over its birthplace without bloodshed."
  },
  {
    question: "Who was the first Muslim ruler of Spain?",
    options: [
      "Abd al-Rahman I",
      "Tariq ibn Ziyad",
      "Musa ibn Nusayr",
      "Al-Hakam II"
    ],
    correctAnswer: "Abd al-Rahman I",
    explanation: "Abd al-Rahman I established the Umayyad Emirate of Cordoba in 756 CE after fleeing the Abbasid revolution, becoming the first Muslim ruler of Spain."
  },
  {
    question: "Which Islamic empire built the Taj Mahal?",
    options: [
      "Ottoman Empire",
      "Mughal Empire",
      "Safavid Empire",
      "Abbasid Caliphate"
    ],
    correctAnswer: "Mughal Empire",
    explanation: "The Mughal Emperor Shah Jahan built the Taj Mahal in the 17th century as a mausoleum for his wife Mumtaz Mahal, showcasing Islamic architecture in India."
  },
  {
    question: "What was the capital of the Fatimid Caliphate?",
    options: [
      "Baghdad",
      "Damascus",
      "Cairo",
      "Cordoba"
    ],
    correctAnswer: "Cairo",
    explanation: "The Fatimids established Cairo (Al-Qahira) in 969 CE as their capital, which became a major center of Islamic learning and culture."
  },
  {
    question: "Which Muslim scientist invented the first mechanical clock?",
    options: [
      "Al-Jazari",
      "Ibn Sina",
      "Al-Khwarizmi",
      "Al-Biruni"
    ],
    correctAnswer: "Al-Jazari",
    explanation: "Al-Jazari (1136-1206 CE) invented the elephant clock and other sophisticated mechanical devices, considered among the first programmable machines."
  },
  {
    question: "Who was the first female ruler in Islamic history?",
    options: [
      "Shajar al-Durr",
      "Razia Sultana",
      "Arwa al-Sulayhi",
      "Khadija bint Khuwaylid"
    ],
    correctAnswer: "Shajar al-Durr",
    explanation: "Shajar al-Durr ruled Egypt in 1250 CE after the death of her husband As-Salih Ayyub, marking the transition from Ayyubid to Mamluk rule."
  },
  {
    question: "Which Muslim civilization built the Great Mosque of Djenné?",
    options: [
      "Mali Empire",
      "Ottoman Empire",
      "Songhai Empire",
      "Ghana Empire"
    ],
    correctAnswer: "Mali Empire",
    explanation: "The Great Mosque of Djenné in Mali, first built in the 13th century, is the largest mud-brick structure in the world and a masterpiece of Sudano-Sahelian architecture."
  },
  {
    question: "What was the official language of the Abbasid administration?",
    options: [
      "Persian",
      "Arabic",
      "Turkish",
      "Greek"
    ],
    correctAnswer: "Arabic",
    explanation: "While the Abbasid Caliphate incorporated many Persian administrative practices, Arabic remained the official language of government and scholarship."
  },
  {
    question: "Which Muslim leader defeated the Crusaders at the Battle of Hattin?",
    options: [
      "Nur ad-Din Zangi",
      "Saladin",
      "Baibars",
      "Qutuz"
    ],
    correctAnswer: "Saladin",
    explanation: "Saladin's victory at Hattin in 1187 CE led to the recapture of Jerusalem and marked a turning point in the Crusades."
  },
  {
    question: "What was the name of the first Muslim navy?",
    options: [
      "Fleet of Alexandria",
      "Umayyad Navy",
      "Fleet of the Companions",
      "Byzantine Convert Fleet"
    ],
    correctAnswer: "Fleet of the Companions",
    explanation: "Established during Uthman's caliphate, the first Muslim navy was called 'Usrat al-Ashaba' (Fleet of the Companions) and secured early naval victories."
  },
  {
    question: "Which Islamic empire reached the gates of Vienna?",
    options: [
      "Ottoman Empire",
      "Mughal Empire",
      "Abbasid Caliphate",
      "Umayyad Caliphate"
    ],
    correctAnswer: "Ottoman Empire",
    explanation: "The Ottomans besieged Vienna in 1529 and again in 1683, marking the farthest westward expansion of Islamic rule in Europe."
  },
  {
    question: "What was the primary writing material used in early Islamic manuscripts?",
    options: [
      "Papyrus",
      "Parchment",
      "Paper",
      "Clay tablets"
    ],
    correctAnswer: "Parchment",
    explanation: "Early Islamic manuscripts primarily used parchment (animal skin) until papermaking technology spread from China through the Islamic world."
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
    question: "What was the 'Constitution of Medina' and its significance?",
    options: [
      "A trade agreement with Jewish tribes",
      "The first written constitution establishing a multi-religious state",
      "Military strategy document",
      "Taxation policy for Madinah"
    ],
    correctAnswer: "The first written constitution establishing a multi-religious state",
    explanation: "The Constitution of Medina, drafted by Prophet Muhammad (PBUH), established rights and responsibilities for Muslims, Jews, and other communities, creating the first Islamic state with pluralistic governance."
  },
  {
    question: "How did the 'Ahl al-Dhimma' system function in Islamic empires?",
    options: [
      "Complete assimilation of non-Muslims",
      "Protected status for non-Muslims with specific rights and obligations",
      "Forced conversion after one generation",
      "Total exclusion from civic life"
    ],
    correctAnswer: "Protected status for non-Muslims with specific rights and obligations",
    explanation: "The dhimmi system granted Jews, Christians, and other 'People of the Book' protected status, allowing religious practice in exchange for jizya tax and adherence to certain regulations."
  },
  {
    question: "What was the 'Millet System' in the Ottoman Empire?",
    options: [
      "Autonomous religious communities with their own laws",
      "Military recruitment strategy",
      "Agricultural land distribution",
      "Imperial succession rules"
    ],
    correctAnswer: "Autonomous religious communities with their own laws",
    explanation: "The millet system organized non-Muslim communities (Orthodox Christians, Armenians, Jews) as semi-autonomous entities under their own religious leaders, fostering coexistence in the diverse Ottoman Empire."
  },
  {
    question: "How did the 'Translation Movement' contribute to the Islamic Golden Age?",
    options: [
      "By preserving and expanding ancient Greek, Persian, and Indian knowledge",
      "Only translating Quranic texts",
      "Focusing solely on Arabic literature",
      "Eliminating all pre-Islamic knowledge"
    ],
    correctAnswer: "By preserving and expanding ancient Greek, Persian, and Indian knowledge",
    explanation: "The Abbasid-sponsored translation movement (8th-10th centuries) systematically translated Greek, Persian, and Indian works into Arabic, synthesizing this knowledge with Islamic scholarship to advance science, medicine, and philosophy."
  },
  {
    question: "What was unique about the 'Fatimid Caliphate's' religious orientation?",
    options: [
      "It was the only Shia Ismaili caliphate in Islamic history",
      "It rejected all forms of Islamic jurisprudence",
      "It combined Christianity and Islam",
      "It abolished the caliphate system"
    ],
    correctAnswer: "It was the only Shia Ismaili caliphate in Islamic history",
    explanation: "The Fatimids (909-1171 CE) were Ismaili Shia Muslims who established a rival caliphate to the Sunni Abbasids, ruling from North Africa and later Egypt, promoting Ismaili doctrine while generally tolerating other sects."
  },
  {
    question: "How did 'Sufi Tariqas' influence the spread of Islam?",
    options: [
      "Through spiritual teachings and adaptation to local cultures",
      "By military conquest only",
      "Through forced conversions",
      "By rejecting all Islamic scholarship"
    ],
    correctAnswer: "Through spiritual teachings and adaptation to local cultures",
    explanation: "Sufi orders played a major role in Islam's spread through mystical teachings, cultural adaptation, and establishing spiritual networks across Africa, Asia, and Southeast Europe."
  },
  {
    question: "What was the 'Inquisition (Mihna)' under Caliph al-Ma'mun?",
    options: [
      "Persecution of scholars who rejected Mu'tazili theology",
      "Suppression of non-Muslims",
      "Elimination of all philosophical inquiry",
      "A military campaign against Byzantium"
    ],
    correctAnswer: "Persecution of scholars who rejected Mu'tazili theology",
    explanation: "The Mihna (833-851 CE) was a theological inquisition where Caliph al-Ma'mun imposed Mu'tazili rationalist doctrines, particularly the 'created Quran' belief, persecuting traditionalist scholars like Ahmad ibn Hanbal."
  },
  {
    question: "How did the 'Mamluk System' function in Islamic states?",
    options: [
      "Military slaves rising to political power",
      "Democratic election of rulers",
      "Hereditary monarchy",
      "Tribal confederation rule"
    ],
    correctAnswer: "Military slaves rising to political power",
    explanation: "The Mamluk system involved purchasing Turkic and Circassian slave soldiers who were trained, converted to Islam, and often rose to high military and political positions, eventually ruling Egypt and Syria from 1250-1517 CE."
  },
  {
    question: "What was the 'Pact of Umar' and its historical context?",
    options: [
      "Conditions of surrender for Christian Jerusalem to Caliph Umar",
      "Peace treaty between Ali and Muawiya",
      "Trade agreement with Byzantium",
      "Succession plan after Prophet Muhammad"
    ],
    correctAnswer: "Conditions of surrender for Christian Jerusalem to Caliph Umar",
    explanation: "The Pact of Umar (637 CE) outlined terms for Christian submission to Muslim rule, including protection of lives/property in exchange for jizya and restrictions on church construction/public worship."
  },
  {
    question: "How did 'Islamic Spain (Al-Andalus)' contribute to European Renaissance?",
    options: [
      "By preserving and transmitting classical knowledge to Europe",
      "Through military conquest of France",
      "By isolating itself from Europe completely",
      "Through forced conversion of all Christians"
    ],
    correctAnswer: "By preserving and transmitting classical knowledge to Europe",
    explanation: "Al-Andalus served as a conduit for Greco-Islamic knowledge to medieval Europe through translation centers like Toledo, influencing European philosophy, science, and medicine during the 12th century Renaissance."
  },
  {
    question: "What was the 'Devshirme System' in the Ottoman Empire?",
    options: [
      "Conscription of Christian boys for imperial service",
      "Islamic education system",
      "Tax collection method",
      "Military promotion structure"
    ],
    correctAnswer: "Conscription of Christian boys for imperial service",
    explanation: "The devshirme collected Christian boys from the Balkans, converted them to Islam, and trained them for elite military (Janissaries) or administrative roles, creating a loyal servant class to the Sultan."
  },
  {
    question: "How did the 'Mughal Empire' approach religious diversity in India?",
    options: [
      "Through policies of tolerance under Akbar and syncretism",
      "Forced conversion of all Hindus",
      "Complete separation from Indian culture",
      "Expulsion of all non-Muslims"
    ],
    correctAnswer: "Through policies of tolerance under Akbar and syncretism",
    explanation: "Akbar's reign (1556-1605) implemented sulh-e-kul (universal tolerance), abolished jizya, promoted Hindu-Muslim unity, and created a syncretic 'Din-i-Ilahi' faith, though later emperors varied in religious policies."
  },
  {
    question: "What was the 'Siege of Constantinople (717-718)'s' significance?",
    options: [
      "Failed Umayyad attempt to conquer Byzantium",
      "First Muslim victory over the Crusaders",
      "Ottoman conquest of the city",
      "End of the Abbasid Caliphate"
    ],
    correctAnswer: "Failed Umayyad attempt to conquer Byzantium",
    explanation: "The massive Umayyad siege (717-718) led by Maslama ibn Abd al-Malik ultimately failed due to Byzantine Greek fire, harsh winter, and Bulgar attacks, marking the high point of early Muslim expansion into Europe."
  },
  {
    question: "How did the 'Safavid Empire' transform Persia religiously?",
    options: [
      "Established Twelver Shi'ism as the state religion",
      "Converted Persia to Sunni Islam",
      "Created a new syncretic religion",
      "Abolished Islam entirely"
    ],
    correctAnswer: "Established Twelver Shi'ism as the state religion",
    explanation: "Shah Ismail I (r. 1501-1524) forcibly converted Persia from Sunni to Twelver Shi'a Islam, creating a distinct Persian-Shi'a identity opposed to the Sunni Ottomans and Uzbeks."
  },
  {
    question: "What was the 'Islamic Agricultural Revolution'?",
    options: [
      "Diffusion of new crops and farming techniques across Muslim lands",
      "Complete abandonment of agriculture",
      "Exclusive focus on nomadic herding",
      "Rejection of all non-Islamic farming methods"
    ],
    correctAnswer: "Diffusion of new crops and farming techniques across Muslim lands",
    explanation: "Between 8th-13th centuries, Muslim lands saw an agricultural transformation through crop diffusion (citrus, cotton, sugarcane), advanced irrigation (norias, qanats), and scientific farming manuals."
  },
  {
    question: "How did 'Islamic Hospital (Bimaristan)' institutions differ from earlier medical facilities?",
    options: [
      "Systematic medical care for all patients regardless of status",
      "Only served the ruling elite",
      "Focused solely on religious healing",
      "Rejected all Greek medical knowledge"
    ],
    correctAnswer: "Systematic medical care for all patients regardless of status",
    explanation: "Bimaristans like Al-Adudi in Baghdad (9th century) provided free healthcare to all, had specialized wards, medical records, and clinical training, setting standards for modern hospitals."
  },
  {
    question: "What was the 'Islamic Postal (Barid) System's' significance?",
    options: [
      "Efficient communication network facilitating governance and trade",
      "Only used for military messages",
      "Limited to caliphal family correspondence",
      "A failed experiment abandoned quickly"
    ],
    correctAnswer: "Efficient communication network facilitating governance and trade",
    explanation: "The Abbasid barid system had relay stations, fast couriers, and route maps, enabling rapid communication across the empire (Baghdad to Cordoba in 2 weeks) and serving as an early intelligence network."
  },
  {
    question: "How did 'Islamic Glassmaking' influence medieval technology?",
    options: [
      "Pioneered chemical processes and lens grinding techniques",
      "Only produced simple decorative items",
      "Rejected all Roman glass methods",
      "Kept techniques secret with no diffusion"
    ],
    correctAnswer: "Pioneered chemical processes and lens grinding techniques",
    explanation: "Muslim glassmakers in Syria and Iraq advanced Roman techniques, creating stained glass, enameling, and clear glass crucial for later scientific instruments like spectacles and microscopes."
  },
  {
    question: "What was the 'Ayyubid-Mamluk Transition' in Egyptian history?",
    options: [
      "Military slaves overthrowing the dynasty that created them",
      "Peaceful handover of power",
      "Foreign invasion ending Islamic rule",
      "Return to Fatimid governance"
    ],
    correctAnswer: "Military slaves overthrowing the dynasty that created them",
    explanation: "The Mamluks (slave soldiers of the Ayyubids) under Shajar al-Durr seized power after defeating the Crusaders at Mansurah (1250) and killing Turanshah, ending Ayyubid rule in Egypt."
  },
  {
    question: "How did 'Islamic Cartography' advance medieval geography?",
    options: [
      "Al-Idrisi's world map and improved projection methods",
      "Only copied Ptolemaic maps without changes",
      "Rejected all mapmaking as un-Islamic",
      "Created maps solely for religious purposes"
    ],
    correctAnswer: "Al-Idrisi's world map and improved projection methods",
    explanation: "Muslim geographers like Al-Idrisi (Tabula Rogeriana, 1154) synthesized Greek, Islamic, and Viking knowledge, creating the most accurate world maps until the Age of Discovery and advancing mathematical geography."
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
