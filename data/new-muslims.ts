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
    question: "What is the first thing a new Muslim should do after taking Shahada?",
    options: [
      "Perform Ghusl (ritual bath)",
      "Start fasting immediately",
      "Go for Hajj",
      "Memorize the entire Quran"
    ],
    correctAnswer: "Perform Ghusl (ritual bath)",
    explanation: "It is recommended for new Muslims to perform Ghusl (full ritual purification) after accepting Islam, as it symbolizes spiritual cleansing and a fresh start."
  },
  {
    question: "What is the minimum amount of clothing required for Salah (prayer)?",
    options: [
      "Full body covering",
      "From navel to knees for men, entire body except face/hands for women",
      "Only clean clothes regardless of coverage",
      "Special prayer garments only"
    ],
    correctAnswer: "From navel to knees for men, entire body except face/hands for women",
    explanation: "The minimum clothing requirement for Salah is covering from the navel to the knees for men, and the entire body except face and hands for women, with loose, opaque garments."
  },
  {
    question: "How should a new Muslim begin learning the Quran?",
    options: [
      "Start from the last chapter (Juz Amma)",
      "Only read translations first",
      "Memorize the longest chapters first",
      "Avoid reading until fluent in Arabic"
    ],
    correctAnswer: "Start from the last chapter (Juz Amma)",
    explanation: "New Muslims are often advised to start with the 30th chapter (Juz Amma) containing shorter surahs that are easier to memorize and frequently recited in prayers."
  },
  {
    question: "What is the Islamic greeting?",
    options: [
      "Hello",
      "As-salamu alaykum (Peace be upon you)",
      "Good morning",
      "Allahu Akbar"
    ],
    correctAnswer: "As-salamu alaykum (Peace be upon you)",
    explanation: "The Islamic greeting is 'As-salamu alaykum' meaning 'Peace be upon you', to which the reply is 'Wa alaykum as-salam' (And upon you be peace)."
  },
  {
    question: "What should a Muslim say before eating?",
    options: [
      "Nothing specific",
      "Bismillah (In the name of Allah)",
      "Alhamdulillah",
      "Allahu Akbar"
    ],
    correctAnswer: "Bismillah (In the name of Allah)",
    explanation: "It is Sunnah to say 'Bismillah' (In the name of Allah) before eating. If forgotten at the start, one should say 'Bismillahi awwalahu wa akhirahu' (In Allah's name at the beginning and end)."
  },
  {
    question: "What is the first month of the Islamic calendar?",
    options: [
      "Ramadan",
      "Muharram",
      "Shawwal",
      "Dhul-Hijjah"
    ],
    correctAnswer: "Muharram",
    explanation: "Muharram is the first month of the Islamic lunar calendar. It is one of the four sacred months in Islam."
  },
  {
    question: "What is the night prayer called in Islam?",
    options: [
      "Fajr",
      "Tahajjud",
      "Isha",
      "Tarawih"
    ],
    correctAnswer: "Tahajjud",
    explanation: "Tahajjud is the voluntary night prayer performed after waking from sleep. Isha is the obligatory night prayer, while Tarawih are special Ramadan night prayers."
  },
  {
    question: "What is the Islamic way to respond when someone sneezes?",
    options: [
      "Say nothing",
      "Say 'Yarhamukallah' (May Allah have mercy on you)",
      "Say 'Alhamdulillah'",
      "Say 'Get well soon'"
    ],
    correctAnswer: "Say 'Yarhamukallah' (May Allah have mercy on you)",
    explanation: "When a Muslim sneezes and says 'Alhamdulillah', others should respond with 'Yarhamukallah'. The sneezer then replies 'Yahdikumullah wa yuslihu balakum' (May Allah guide you and improve your condition)."
  },
  {
    question: "What is the minimum age for Zakat payment?",
    options: [
      "There is no age minimum",
      "Puberty",
      "18 years old",
      "21 years old"
    ],
    correctAnswer: "Puberty",
    explanation: "Zakat becomes obligatory upon reaching puberty and possessing wealth above the nisab (minimum threshold) for one lunar year. Children's wealth is not subject to Zakat."
  },
  {
    question: "What is the Islamic ruling on music with inappropriate lyrics?",
    options: [
      "Permissible if enjoyable",
      "Permissible in moderation",
      "Prohibited",
      "Only prohibited during prayer"
    ],
    correctAnswer: "Prohibited",
    explanation: "Music containing inappropriate, vulgar, or shirk-promoting lyrics is considered haram (prohibited) as it can corrupt the heart and lead away from remembrance of Allah."
  },
  {
    question: "What is the Islamic view on adoption?",
    options: [
      "Allowed with full legal rights transfer",
      "Prohibited completely",
      "Allowed but without changing lineage",
      "Only allowed for orphans"
    ],
    correctAnswer: "Allowed but without changing lineage",
    explanation: "Islam permits caring for orphans and needy children (highly encouraged) but prohibits legally changing their lineage. They retain their biological parents' names and inheritance rules differ."
  },
  {
    question: "What is the ruling on shaking hands with the opposite gender?",
    options: [
      "Permissible in all cases",
      "Permissible only with close relatives",
      "Prohibited unless necessary",
      "Only allowed in business settings"
    ],
    correctAnswer: "Prohibited unless necessary",
    explanation: "Shaking hands with non-mahram (marriageable) members of the opposite gender is generally prohibited to avoid improper physical contact, except in cases of genuine necessity."
  },
  {
    question: "What is the Islamic stance on interest (riba)?",
    options: [
      "Permissible in small amounts",
      "Only prohibited for Muslims",
      "Completely prohibited",
      "Permissible for business loans"
    ],
    correctAnswer: "Completely prohibited",
    explanation: "All forms of riba (interest) are strictly prohibited in Islam, as stated in the Quran (2:275-279). This includes bank interest, credit card interest, and any loan with excess repayment."
  },
  {
    question: "What is the Islamic ruling on tattoos?",
    options: [
      "Permissible if small",
      "Permissible only for medical reasons",
      "Prohibited as they change Allah's creation",
      "Only prohibited if they contain images"
    ],
    correctAnswer: "Prohibited as they change Allah's creation",
    explanation: "Permanent tattoos are generally considered haram as they involve changing Allah's creation without valid reason and cause unnecessary harm to the body."
  },
  {
    question: "What is the Islamic view on celebrating birthdays?",
    options: [
      "Obligatory to celebrate",
      "Permissible if no haram activities",
      "Prohibited as it's an innovation",
      "Only allowed for children"
    ],
    correctAnswer: "Permissible if no haram activities",
    explanation: "There's no Islamic basis for celebrating birthdays, but simple gatherings without haram elements (music, mixing, extravagance) are generally considered permissible by many scholars."
  },
  {
    question: "What is the Islamic ruling on fasting while traveling?",
    options: [
      "Always obligatory",
      "Optional - can fast or break and make up later",
      "Always prohibited",
      "Only allowed if the journey is short"
    ],
    correctAnswer: "Optional - can fast or break and make up later",
    explanation: "Travelers may choose to fast or break their fast during Ramadan and make up the missed days later, as Allah desires ease for His servants (Quran 2:184-185)."
  },
  {
    question: "What is the Islamic way to dispose of an old Quran?",
    options: [
      "Burn it",
      "Bury it in clean ground",
      "Throw it in recycling",
      "Keep it as decoration"
    ],
    correctAnswer: "Bury it in clean ground",
    explanation: "Old Qurans should be respectfully buried in clean ground or preserved. If burial isn't possible, they may be burned as a last resort, following proper Islamic guidelines."
  },
  {
    question: "What is the ruling on using perfume containing alcohol?",
    options: [
      "Completely prohibited",
      "Permissible if the alcohol is not intoxicating",
      "Only for men",
      "Only prohibited during prayer"
    ],
    correctAnswer: "Permissible if the alcohol is not intoxicating",
    explanation: "Perfumes with non-intoxicating, industrial alcohol are generally considered permissible as the alcohol undergoes chemical changes and cannot be consumed."
  },
  {
    question: "What is the Islamic ruling on photography?",
    options: [
      "Completely prohibited",
      "Permissible except for living beings",
      "Permissible with certain guidelines",
      "Only allowed for ID photos"
    ],
    correctAnswer: "Permissible with certain guidelines",
    explanation: "Most contemporary scholars permit photography when done for legitimate purposes without promoting vanity or haram activities, differing from early strict opinions."
  },
  {
    question: "What is the Islamic view on organ donation?",
    options: [
      "Completely prohibited",
      "Permissible with conditions",
      "Only allowed for Muslims",
      "Only allowed while alive"
    ],
    correctAnswer: "Permissible with conditions",
    explanation: "Many Islamic scholars permit organ donation if it saves lives and follows ethical guidelines, considering it an act of charity, though opinions vary on specific cases."
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
    question: "What is the concept of 'Fitrah' in Islam?",
    options: [
      "Islamic taxes",
      "The natural disposition to recognize Allah",
      "A type of prayer",
      "Islamic clothing requirements"
    ],
    correctAnswer: "The natural disposition to recognize Allah",
    explanation: "Fitrah refers to the innate, natural disposition of humans to recognize their Creator. The Prophet (PBUH) said every child is born upon Fitrah (Sahih Muslim)."
  },
  {
    question: "What is 'Ihsan' in Islamic teachings?",
    options: [
      "Performing worship perfectly as if seeing Allah",
      "Islamic inheritance laws",
      "A type of charity",
      "Pilgrimage rites"
    ],
    correctAnswer: "Performing worship perfectly as if seeing Allah",
    explanation: "Ihsan means worshipping Allah as if you see Him, and though you don't see Him, knowing He sees you. It represents the highest level of faith and consciousness of Allah."
  },
  {
    question: "What is the ruling on following a madhab (school of thought)?",
    options: [
      "Obligatory to strictly follow one",
      "Prohibited to follow any",
      "Permissible as a learning framework but not obligatory",
      "Only for scholars"
    ],
    correctAnswer: "Permissible as a learning framework but not obligatory",
    explanation: "While following a madhab helps in learning Islam systematically, it's not obligatory. Muslims should seek evidence-based knowledge while respecting scholarly traditions."
  },
  {
    question: "What is 'Bid'ah' in Islamic terminology?",
    options: [
      "Any new practice in religion",
      "Innovation in worldly matters",
      "Only major sins",
      "Islamic festivals"
    ],
    correctAnswer: "Any new practice in religion",
    explanation: "Bid'ah refers to introducing innovations in matters of worship or religion that have no basis in Quran or authentic Sunnah. The Prophet (PBUH) warned against all innovations in religion."
  },
  {
    question: "What is the Islamic concept of 'Taqwa'?",
    options: [
      "Fear of punishment only",
      "Allah-consciousness in all aspects of life",
      "Only during Ramadan",
      "Following cultural traditions"
    ],
    correctAnswer: "Allah-consciousness in all aspects of life",
    explanation: "Taqwa is often translated as 'piety' or 'fear of Allah', but more accurately means being consciously aware of Allah in all aspects of life, leading to righteous actions."
  },
  {
    question: "What is 'Qada' and 'Qadar' in Islamic belief?",
    options: [
      "Allah's divine decree and predestination",
      "Islamic prayer times",
      "Types of charity",
      "Marriage contracts"
    ],
    correctAnswer: "Allah's divine decree and predestination",
    explanation: "Qada refers to Allah's eternal decree, while Qadar is the manifestation of that decree in creation. Muslims believe in divine predestination while maintaining human free will and responsibility."
  },
  {
    question: "What is the ruling on celebrating Mawlid (Prophet's birthday)?",
    options: [
      "Obligatory celebration",
      "Permissible expression of love for the Prophet",
      "Prohibited innovation",
      "Only in Muslim-majority countries"
    ],
    correctAnswer: "Prohibited innovation",
    explanation: "Most scholars consider Mawlid an innovation (bid'ah) as it wasn't practiced by the Prophet or his companions. Love for the Prophet should be shown by following his Sunnah, not innovations."
  },
  {
    question: "What is 'Shafa'ah' in Islamic theology?",
    options: [
      "Intercession on Judgment Day",
      "Islamic medical treatment",
      "A type of charity",
      "Prayer beads"
    ],
    correctAnswer: "Intercession on Judgment Day",
    explanation: "Shafa'ah refers to the Prophet's (and others') intercession on Judgment Day for believers, granted by Allah's permission. This differs from Christian concepts of intercession."
  },
  {
    question: "What is 'Istikhara' prayer and when is it performed?",
    options: [
      "Prayer for guidance in decision-making",
      "Prayer during eclipse",
      "Funeral prayer",
      "Rain-seeking prayer"
    ],
    correctAnswer: "Prayer for guidance in decision-making",
    explanation: "Salat al-Istikhara is a two-rakah prayer seeking Allah's guidance when making decisions. After praying, one should follow what feels right while trusting Allah's plan."
  },
  {
    question: "What is the Islamic ruling on artificial insemination?",
    options: [
      "Permissible in all cases",
      "Permissible only with husband's sperm and wife's egg",
      "Completely prohibited",
      "Only for medical necessity"
    ],
    correctAnswer: "Permissible only with husband's sperm and wife's egg",
    explanation: "Most scholars permit artificial insemination if using the husband's sperm and wife's egg to preserve lineage. Using third-party donors is prohibited due to lineage and adultery concerns."
  },
  {
    question: "What is 'Ruqyah' in Islamic practice?",
    options: [
      "Islamic exorcism",
      "Healing through Quranic verses and authentic supplications",
      "Black magic",
      "Herbal medicine"
    ],
    correctAnswer: "Healing through Quranic verses and authentic supplications",
    explanation: "Ruqyah is the Islamic practice of healing through recitation of Quran, authentic dua, and permissible means. It differs from magic or shirk-based practices."
  },
  {
    question: "What is the Islamic ruling on IVF (In Vitro Fertilization)?",
    options: [
      "Permissible under same conditions as artificial insemination",
      "Completely prohibited",
      "Only for male infertility",
      "Permissible with donor eggs/sperm"
    ],
    correctAnswer: "Permissible under same conditions as artificial insemination",
    explanation: "IVF is generally permitted when using the married couple's own egg and sperm, with all embryos implanted in the wife's uterus to prevent mixing of lineages."
  },
  {
    question: "What is 'Sunnah Mu'akkadah' in Islamic law?",
    options: [
      "Highly emphasized prophetic practices",
      "Optional prayers",
      "Abrogated rulings",
      "Cultural traditions"
    ],
    correctAnswer: "Highly emphasized prophetic practices",
    explanation: "Sunnah Mu'akkadah refers to practices the Prophet consistently performed and encouraged, like Sunnah prayers before/after fard prayers. They're highly recommended though not obligatory."
  },
  {
    question: "What is the Islamic ruling on cremation?",
    options: [
      "Permissible if requested",
      "Prohibited as it disrespects the human body",
      "Only for non-Muslim relatives",
      "Permissible in non-Muslim countries"
    ],
    correctAnswer: "Prohibited as it disrespects the human body",
    explanation: "Cremation is prohibited in Islam as it violates the dignity of the human body which should be respectfully buried according to Islamic rites."
  },
  {
    question: "What is 'Aqeedah Tahawiyyah'?",
    options: [
      "A classical text on Islamic creed",
      "A Quranic chapter",
      "A type of prayer",
      "Islamic inheritance laws"
    ],
    correctAnswer: "A classical text on Islamic creed",
    explanation: "Aqeedah Tahawiyyah is a foundational text summarizing Sunni Islamic creed, written by Imam Abu Ja'far al-Tahawi. It's widely studied to understand correct Islamic beliefs."
  },
  {
    question: "What is the Islamic ruling on life support?",
    options: [
      "Always obligatory",
      "Permissible if there's hope of recovery",
      "Always prohibited",
      "Only for young patients"
    ],
    correctAnswer: "Permissible if there's hope of recovery",
    explanation: "Life support is permissible when there's medical hope of recovery. If doctors confirm brain death or no chance of recovery, it may be discontinued after consultation with scholars."
  },
  {
    question: "What is 'Fiqh al-Aqalliyyat'?",
    options: [
      "Jurisprudence for Muslim minorities",
      "Islamic space science",
      "Rules for prayer timings",
      "Islamic environmental laws"
    ],
    correctAnswer: "Jurisprudence for Muslim minorities",
    explanation: "Fiqh al-Aqalliyyat refers to Islamic legal rulings adapted for Muslim minorities living in non-Muslim societies, addressing unique challenges while maintaining core principles."
  },
  {
    question: "What is the Islamic ruling on surrogate motherhood?",
    options: [
      "Permissible if all parties consent",
      "Prohibited due to lineage concerns",
      "Only for infertile couples",
      "Permissible with family members only"
    ],
    correctAnswer: "Prohibited due to lineage concerns",
    explanation: "Surrogacy is generally prohibited as it risks confusing lineage (a major Islamic concern) and involves exposing awrah (private parts) to non-mahrams during procedures."
  },
  {
    question: "What is 'Wasatiyyah' in Islamic discourse?",
    options: [
      "Islamic extremism",
      "The balanced middle path of Islam",
      "A type of prayer",
      "Islamic finance contracts"
    ],
    correctAnswer: "The balanced middle path of Islam",
    explanation: "Wasatiyyah refers to Islam's balanced, moderate approach avoiding extremes. The Quran describes Muslims as 'a middle nation' (2:143) between various extremes."
  },
  {
    question: "What is the Islamic ruling on euthanasia?",
    options: [
      "Permissible to relieve suffering",
      "Prohibited as it constitutes killing",
      "Only for terminal patients",
      "Permissible if requested"
    ],
    correctAnswer: "Prohibited as it constitutes killing",
    explanation: "Active euthanasia is prohibited as it involves taking life which is Allah's sole right. However, withholding extraordinary treatment for terminally ill patients may be permissible."
  },
  {
    question: "What is 'Maqasid al-Shariah'?",
    options: [
      "The higher objectives of Islamic law",
      "Prayer direction indicators",
      "Islamic calendar calculations",
      "Quranic recitation rules"
    ],
    correctAnswer: "The higher objectives of Islamic law",
    explanation: "Maqasid al-Shariah refers to Islam's higher objectives: protecting religion, life, intellect, lineage, and property. Understanding these helps apply Islamic principles contextually."
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
