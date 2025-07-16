import type { QuizCategory } from "@/types/quiz"

const fiqhCategory: QuizCategory = {
  id: "fiqh",
  title: "Fiqh",
  description: "Islamic Jurisprudence",
  icon: "speech",
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
            question: "How many obligatory prayers are there in a day?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "5",
            explanation: "There are five obligatory prayers in a day: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
          },
          {
            question: "What is the minimum amount of wealth (nisab) required for Zakat on gold?",
            options: ["50 grams", "85 grams", "100 grams", "200 grams"],
            correctAnswer: "85 grams",
            explanation: "The nisab for gold is 85 grams (or its equivalent value in currency).",
          },
          {
            question: "What is the Arabic term for ritual purification?",
            options: ["Salat", "Wudu", "Taharah", "Tayammum"],
            correctAnswer: "Taharah",
            explanation: "Taharah refers to the state of ritual purity and the process of purification in Islam.",
          },
          {
            question: "Which of the following invalidates the fast?",
            options: [
              "Unintentional vomiting",
              "Using an inhaler for asthma",
              "Intentionally eating or drinking",
              "Taking a shower",
            ],
            correctAnswer: "Intentionally eating or drinking",
            explanation: "Intentionally eating or drinking invalidates the fast, while unintentional actions do not.",
          },
          {
            question: "What is the term for the intention to perform a religious act?",
            options: ["Niyyah", "Ijma", "Qiyas", "Ijtihad"],
            correctAnswer: "Niyyah",
            explanation: "Niyyah refers to the intention one must have before performing any act of worship in Islam.",
          },
          {
            question: "What is 'Ghusl' in Islamic jurisprudence?",
            options: ["Dry ablution", "Partial ablution", "Full body ritual bath", "Washing hands before eating"],
            correctAnswer: "Full body ritual bath",
            explanation:
              "Ghusl refers to the ritual bath or full body washing that is required after certain events such as sexual intercourse, completion of menstruation, or before certain religious practices.",
          },
          {
            question: "What is the term for the direction Muslims face during prayer?",
            options: ["Mihrab", "Qiblah", "Ka'bah", "Sajdah"],
            correctAnswer: "Qiblah",
            explanation: "Qiblah is the direction that Muslims face during prayer, which is toward the Ka'bah in Makkah.",
          },
          {
            question: "What is 'Zakatul-Fitr'?",
            options: [
              "Regular annual charity",
              "Charity given at any time",
              "Charity given at the end of Ramadan",
              "Charity given during Hajj",
            ],
            correctAnswer: "Charity given at the end of Ramadan",
            explanation:
              "Zakatul-Fitr is a type of charity that must be given by every Muslim, regardless of age or wealth, before the Eid prayer at the end of Ramadan.",
          },
          {
            question: "What is the ruling on praying the five daily prayers on time?",
            options: ["Recommended (Mustahabb)", "Obligatory (Fard)", "Optional (Nafl)", "Emphasized Sunnah"],
            correctAnswer: "Obligatory (Fard)",
            explanation:
              "Performing the five daily prayers on their prescribed times is obligatory (Fard) upon every adult Muslim of sound mind.",
          },
    {
      question: "What is the minimum amount of wealth (nisab) required for Zakat on silver?",
      options: ["200 dirhams", "400 dirhams", "595 grams", "1 kg"],
      correctAnswer: "595 grams",
      explanation: "The nisab for silver is 595 grams (or its equivalent value in currency), based on the Prophet's (PBUH) teachings.",
    },
    {
      question: "Which prayer is known as 'the middle prayer' in the Quran?",
      options: ["Fajr", "Dhuhr", "Asr", "Isha"],
      correctAnswer: "Asr",
      explanation: "Allah mentions 'the middle prayer' in Quran 2:238, which most scholars identify as the Asr prayer due to its special emphasis.",
    },
    {
      question: "What is 'Tayammum'?",
      options: [
        "Dry ablution using clean earth",
        "A type of charity",
        "Special prayer during travel",
        "Fasting without water"
      ],
      correctAnswer: "Dry ablution using clean earth",
      explanation: "Tayammum is the dry purification method using clean earth when water is unavailable or its use would be harmful, as permitted in Quran 4:43 and authentic Sunnah.",
    },
    {
      question: "How many Rak'ahs are in the Fajr prayer?",
      options: ["2", "3", "4", "5"],
      correctAnswer: "2",
      explanation: "The Fajr prayer consists of 2 Rak'ahs, as consistently practiced by the Prophet (PBUH) and preserved in authentic hadith.",
    },
    {
      question: "What is the ruling on combining prayers during travel?",
      options: [
        "Always obligatory",
        "Permissible but not obligatory",
        "Only for the sick",
        "Never allowed"
      ],
      correctAnswer: "Permissible but not obligatory",
      explanation: "Combining Dhuhr with Asr and Maghrib with Isha is permitted during travel based on the Prophet's (PBUH) practice, though not obligatory.",
    },
    {
      question: "What invalidates Wudu?",
      options: [
        "Sleeping while lying down",
        "Touching a dog",
        "Passing wind",
        "Eating cooked food"
      ],
      correctAnswer: "Passing wind",
      explanation: "Among the things that nullify Wudu are passing wind, answering the call of nature, and deep sleep, as established in authentic hadith.",
    },
    {
      question: "What is the minimum duration for fasting each day during Ramadan?",
      options: [
        "From sunrise to sunset",
        "From dawn until sunset",
        "From morning prayer to evening prayer",
        "12 hours"
      ],
      correctAnswer: "From dawn until sunset",
      explanation: "Fasting begins at true dawn (Fajr) and ends at sunset (Maghrib), as specified in Quran 2:187 and practiced by the Prophet (PBUH).",
    },
    {
      question: "What is 'Sunnah Mu'akkadah'?",
      options: [
        "Highly recommended Prophetic practices",
        "Obligatory prayers",
        "Voluntary night prayers",
        "Forgotten Sunnahs"
      ],
      correctAnswer: "Highly recommended Prophetic practices",
      explanation: "Sunnah Mu'akkadah refers to practices the Prophet (PBUH) consistently performed and encouraged, like the Sunnah prayers before/after obligatory prayers.",
    },
    {
      question: "What is the ruling on Friday (Jumu'ah) prayer?",
      options: [
        "Obligatory for all Muslims",
        "Obligatory only for men",
        "Recommended for everyone",
        "Only for scholars"
      ],
      correctAnswer: "Obligatory only for men",
      explanation: "Jumu'ah prayer is obligatory for adult, sane, resident Muslim men based on Quran 62:9 and authentic Sunnah, while recommended for women.",
    },
    {
      question: "What is 'Qunut' in prayer?",
      options: [
        "A special supplication during prayer",
        "The bowing position",
        "The opening chapter",
        "The testimony of faith"
      ],
      correctAnswer: "A special supplication during prayer",
      explanation: "Qunut refers to a special supplication made during prayer, particularly in Witr prayer or times of calamity, following the Prophet's (PBUH) practice.",
    },
    {
      question: "What is the ruling on eating pork?",
      options: [
        "Permissible in small amounts",
        "Only prohibited if slaughtered incorrectly",
        "Completely prohibited",
        "Allowed during emergencies"
      ],
      correctAnswer: "Completely prohibited",
      explanation: "Pork is categorically prohibited in Islam as stated in Quran 2:173, 5:3, 6:145, and 16:115, with no exceptions except life-threatening necessity.",
    },
    {
      question: "What is 'Ihram'?",
      options: [
        "The sacred state for Hajj/Umrah",
        "The black cloth of Ka'bah",
        "The call to prayer",
        "The night prayer"
      ],
      correctAnswer: "The sacred state for Hajj/Umrah",
      explanation: "Ihram is the sacred state entered for Hajj or Umrah, marked by specific clothing and restrictions, based on Quran 2:197 and authentic Sunnah.",
    },
    {
      question: "What is the ruling on paying Zakat?",
      options: [
        "Only for the wealthy",
        "Only during Ramadan",
        "Obligatory on qualifying wealth after one lunar year",
        "Voluntary charity"
      ],
      correctAnswer: "Obligatory on qualifying wealth after one lunar year",
      explanation: "Zakat becomes obligatory when one possesses the nisab amount for a complete lunar year, as established in Quran 9:103 and authentic Sunnah.",
    },
    {
      question: "What is 'Eid al-Fitr'?",
      options: [
        "The festival at Hajj completion",
        "The festival ending Ramadan",
        "The Prophet's birthday",
        "Islamic New Year"
      ],
      correctAnswer: "The festival ending Ramadan",
      explanation: "Eid al-Fitr marks the end of Ramadan, celebrated on 1st Shawwal, as established by the Prophet (PBUH) and mentioned in authentic hadith.",
    },
    {
      question: "What is the minimum age for Hajj obligation?",
      options: [
        "12 years",
        "15 years",
        "Puberty",
        "18 years"
      ],
      correctAnswer: "Puberty",
      explanation: "Hajj becomes obligatory upon reaching puberty, as Islamic obligations generally begin at this stage based on Quranic principles and authentic Sunnah.",
    },
    {
      question: "What is 'Riba' in Islam?",
      options: [
        "Any business transaction",
        "Interest or usury",
        "Charitable giving",
        "Trade profit"
      ],
      correctAnswer: "Interest or usury",
      explanation: "Riba refers to interest or usury, strictly prohibited in Quran 2:275-279 and 3:130, with severe warnings against it in authentic hadith.",
    },
    {
      question: "What is 'Halal' slaughter?",
      options: [
        "Any meat from Muslim countries",
        "Meat slaughtered with Allah's name mentioned",
        "Vegetarian food",
        "Seafood"
      ],
      correctAnswer: "Meat slaughtered with Allah's name mentioned",
      explanation: "Halal slaughter requires mentioning Allah's name while cutting the throat, esophagus and jugular veins of permissible animals, as per Quran 6:118-121 and authentic Sunnah.",
    },
    {
      question: "What is 'Sujud al-Sahw'?",
      options: [
        "Prostration of forgetfulness",
        "Special Friday prostration",
        "Voluntary prostration",
        "Prostration of gratitude"
      ],
      correctAnswer: "Prostration of forgetfulness",
      explanation: "Sujud al-Sahw are two prostrations performed to compensate for certain mistakes in prayer, based on the Prophet's (PBUH) consistent practice.",
    },
    {
      question: "What is 'Taraweeh' prayer?",
      options: [
        "Night prayer during Ramadan",
        "Funeral prayer",
        "Eid prayer",
        "Prayer for rain"
      ],
      correctAnswer: "Night prayer during Ramadan",
      explanation: "Taraweeh refers to the special night prayers performed during Ramadan, traditionally 20 Rak'ahs in most schools following the practice of Caliph Umar and the companions.",
    },
    {
      question: "What is the ruling on backbiting (Ghibah)?",
      options: [
        "Permissible if true",
        "Major sin with exceptions for valid Islamic purposes",
        "Only wrong if about scholars",
        "Allowed against non-Muslims"
      ],
      correctAnswer: "Major sin with exceptions for valid Islamic purposes",
      explanation: "Backbiting is a major sin as stated in Quran 49:12, but exceptions exist for valid Islamic purposes like seeking help against oppression or scholarly criticism.",
    },    
    ],
    advanced: [
        {
            question: "What is the term for consensus of Islamic scholars?",
            options: ["Qiyas", "Ijma", "Ijtihad", "Istihsan"],
            correctAnswer: "Ijma",
            explanation: "Ijma refers to the consensus of Islamic scholars on a point of Islamic law.",
          },
          {
            question: "What is the minimum period of waiting (Iddah) for a divorced woman?",
            options: ["1 month", "3 menstrual cycles", "4 months and 10 days", "1 year"],
            correctAnswer: "3 menstrual cycles",
            explanation:
              "The standard Iddah period for a divorced woman is three menstrual cycles or three months if she does not menstruate.",
          },
          {
            question: "What is the term for legal reasoning by analogy?",
            options: ["Ijma", "Qiyas", "Istihsan", "Ijtihad"],
            correctAnswer: "Qiyas",
            explanation: "Qiyas is the process of deductive analogy used to apply a known ruling to a new situation.",
          },
          {
            question: "Which school of thought was founded by Imam Abu Hanifa?",
            options: ["Maliki", "Shafi'i", "Hanbali", "Hanafi"],
            correctAnswer: "Hanafi",
            explanation:
              "The Hanafi school of thought was founded by Imam Abu Hanifa and is one of the four major Sunni schools of jurisprudence.",
          },
          {
            question: "What is 'Ijma' in Islamic jurisprudence?",
            options: ["Consensus", "Analogy", "Precedent", "Interpretation"],
            correctAnswer: "Consensus",
            explanation: "'Ijma' refers to the consensus of Muslim scholars on a matter of Islamic law.",
          },
          {
            question: "What is the difference between Fard and Wajib in the Hanafi school?",
            options: [
              "They are the same thing",
              "Fard is obligatory based on definitive evidence, Wajib on probable evidence",
              "Fard is for individuals, Wajib is for communities",
              "Fard is in the Quran, Wajib is in the Sunnah",
            ],
            correctAnswer: "Fard is obligatory based on definitive evidence, Wajib on probable evidence",
            explanation:
              "In the Hanafi school, Fard is an obligation established by definitive evidence, while Wajib is established by probable evidence.",
          },
          {
            question: "What is 'Urf' in Islamic jurisprudence?",
            options: ["Legal precedent", "Custom or common practice", "Scholarly opinion", "Textual interpretation"],
            correctAnswer: "Custom or common practice",
            explanation:
              "'Urf refers to the custom or common practice of a society that is considered in Islamic legal rulings when it doesn't contradict Islamic principles.",
          },
          {
            question: "What is the concept of 'Istihsan' in Islamic jurisprudence?",
            options: [
              "Consensus of scholars",
              "Juristic preference or discretion",
              "Analogical reasoning",
              "Public interest",
            ],
            correctAnswer: "Juristic preference or discretion",
            explanation:
              "Istihsan is a method of juristic preference where a stronger evidence is given preference over a weaker one, or an exception is made to a general rule based on evidence.",
          },
            {
          "question": "Is it permissible in Islamic law to perform IVF using donor sperm or eggs?",
          "options": [
          "Yes, with no restrictions",
          "No, it is always forbidden",
          "Yes, if it is for treatment and within the boundaries of Islamic ethics",
          "No, unless both spouses are related"
          ],
          "correctAnswer": "Yes, if it is for treatment and within the boundaries of Islamic ethics",
          "explanation": "Islam permits IVF for medical treatment purposes, provided that it involves the couple's own sperm and eggs and does not involve third-party donors. Use of donor sperm or eggs is generally considered impermissible because it introduces a third party into the marital relationship, which is against Islamic principles.",
          "difficulty": "high"
          },
          {
            question: "What is the difference between 'Qada' and 'Qadar' in Islamic theology?",
            options: [
              "They are synonyms",
              "Qada is Allah's decree, Qadar is its manifestation",
              "Qada is for good things, Qadar is for bad things",
              "Qada is predestination, Qadar is free will",
            ],
            correctAnswer: "Qada is Allah's decree, Qadar is its manifestation",
            explanation:
              "Qada refers to Allah's decree or decision, while Qadar refers to the execution or manifestation of that decree.",
          },
          {
            question: "What is 'Istishab' in Islamic jurisprudence?",
            options: [
              "Presumption of continuity",
              "Public interest",
              "Analogical reasoning",
              "Scholarly consensus"
            ],
            correctAnswer: "Presumption of continuity",
            explanation: "Istishab is the legal principle that assumes the continuation of a previous state until evidence establishes otherwise, used in resolving doubtful matters.",
          },
          {
            question: "What is 'Faskh' in Islamic marriage law?",
            options: [
              "Divorce initiated by husband",
              "Judicial annulment",
              "Mutual separation",
              "Waiting period"
            ],
            correctAnswer: "Judicial annulment",
            explanation: "Faskh refers to the judicial dissolution of marriage by Islamic courts due to valid reasons like impotence, abuse, or failure to provide.",
          },
          {
            question: "What is 'Diyah' in Islamic penal law?",
            options: [
              "Blood money for accidental killing",
              "Fine for theft",
              "Punishment for adultery",
              "Compensation for slander"
            ],
            correctAnswer: "Blood money for accidental killing",
            explanation: "Diyah is the financial compensation paid to victims or heirs in cases of accidental killing or bodily harm, with amounts specified in authentic Sunnah.",
          },
          {
            question: "What is 'Hadd' punishment for theft?",
            options: [
              "Imprisonment",
              "Cutting the hand",
              "Public flogging",
              "Exile"
            ],
            correctAnswer: "Cutting the hand",
            explanation: "The Hadd punishment for theft under strict conditions is cutting the hand, based on Quran 5:38, but requires numerous stringent conditions rarely met today.",
          },
          {
            question: "What is 'Bay' al-Salam' in Islamic finance?",
            options: [
              "Forward sale with deferred delivery",
              "Interest-based loan",
              "Gambling contract",
              "Partnership agreement"
            ],
            correctAnswer: "Forward sale with deferred delivery",
            explanation: "Bay' al-Salam is a permissible forward sale where price is paid upfront for goods delivered later, with strict conditions to avoid uncertainty (Gharar).",
          },
          {
            question: "What is 'Ijara' in Islamic finance?",
            options: [
              "Leasing contract",
              "Interest-based loan",
              "Gift contract",
              "Inheritance share"
            ],
            correctAnswer: "Leasing contract",
            explanation: "Ijara refers to Islamic leasing where assets are rented for a fee, permissible when structured according to Shariah principles avoiding interest.",
          },
          {
            question: "What is 'Talaq al-Bid'ah'?",
            options: [
              "Divorce during wife's purity period",
              "Triple divorce in one sitting",
              "Divorce through writing",
              "Judicial divorce"
            ],
            correctAnswer: "Triple divorce in one sitting",
            explanation: "Talaq al-Bid'ah refers to the innovated practice of pronouncing three divorces at once, which is valid but sinful according to authentic Sunnah.",
          },
          {
            question: "What is 'Khula' in Islamic law?",
            options: [
              "Divorce initiated by wife with compensation",
              "Divorce by mutual agreement",
              "Annulment by court",
              "Temporary marriage"
            ],
            correctAnswer: "Divorce initiated by wife with compensation",
            explanation: "Khula is when a wife seeks dissolution of marriage by returning the dowry or compensation, based on Quran 2:229 and authentic hadith.",
          },
          {
            question: "What is 'Mudaraba' in Islamic finance?",
            options: [
              "Profit-sharing partnership",
              "Interest-based loan",
              "Leasing agreement",
              "Insurance contract"
            ],
            correctAnswer: "Profit-sharing partnership",
            explanation: "Mudaraba is an Islamic profit-sharing partnership where one provides capital and the other provides labor, with profits shared per agreement.",
          },
          {
            question: "What is 'Aqd al-Mu'allaq'?",
            options: [
              "Suspended contract",
              "Marriage contract",
              "Sales contract",
              "Lease agreement"
            ],
            correctAnswer: "Suspended contract",
            explanation: "Aqd al-Mu'allaq refers to a contract whose execution is suspended upon a future condition, generally invalid in Islamic law due to uncertainty.",
          },
          {
            question: "What is 'Tahleel marriage'?",
            options: [
              "Temporary marriage",
              "Marriage to make a divorced woman permissible again",
              "Secret marriage",
              "Marriage without witnesses"
            ],
            correctAnswer: "Marriage to make a divorced woman permissible again",
            explanation: "Tahleel marriage is when a woman marries another man after triple divorce to become permissible to her first husband again, valid only if genuinely intended.",
          },
          {
            question: "What is 'Bay' al-'Inah'?",
            options: [
              "Prohibited sale to circumvent interest",
              "Permissible installment sale",
              "Forward commodity sale",
              "Charitable sale"
            ],
            correctAnswer: "Prohibited sale to circumvent interest",
            explanation: "Bay' al-'Inah is a controversial transaction involving immediate sale and repurchase to simulate a loan with interest, prohibited by most scholars.",
          },
          {
            question: "What is 'Waqf' in Islamic law?",
            options: [
              "Permanent charitable endowment",
              "Temporary loan",
              "Marriage gift",
              "Inheritance share"
            ],
            correctAnswer: "Permanent charitable endowment",
            explanation: "Waqf refers to dedicating property for perpetual religious or charitable purposes, a practice established by the Prophet (PBUH) and companions.",
          },
          {
            question: "What is 'Hiyal' in Islamic jurisprudence?",
            options: [
              "Legal stratagems to circumvent Shariah",
              "Methods of Quranic interpretation",
              "Prayer positions",
              "Types of ablution"
            ],
            correctAnswer: "Legal stratagems to circumvent Shariah",
            explanation: "Hiyal refers to legal devices or stratagems designed to technically comply with Shariah while violating its spirit, generally discouraged by scholars.",
          },
          {
            question: "What is 'Fara'id' in Islamic law?",
            options: [
              "Obligatory prayers",
              "Inheritance shares",
              "Mandatory charity",
              "Pilgrimage rites"
            ],
            correctAnswer: "Inheritance shares",
            explanation: "Fara'id refers to the fixed shares of inheritance specified in Quran 4:11-12, forming a precise mathematical distribution system.",
          },
          {
            question: "What is 'Tazir' punishment?",
            options: [
              "Fixed punishments in Quran",
              "Discretionary punishments by judge",
              "Capital punishment",
              "Financial penalties only"
            ],
            correctAnswer: "Discretionary punishments by judge",
            explanation: "Tazir refers to discretionary punishments administered by Islamic judges for offenses without fixed penalties, aiming at reform and deterrence.",
          },
          {
            question: "What is 'Shuf'ah' in Islamic law?",
            options: [
              "Pre-emptive right in property",
              "Right to divorce",
              "Right to cancel sales",
              "Right to inherit"
            ],
            correctAnswer: "Pre-emptive right in property",
            explanation: "Shuf'ah is the right of a co-owner or neighbor to purchase property before others when sold, based on the Prophet's (PBUH) rulings.",
          },
          {
            question: "What is 'Qisas' in Islamic penal law?",
            options: [
              "Retributive justice principle",
              "Financial compensation",
              "Public apology",
              "Rehabilitation"
            ],
            correctAnswer: "Retributive justice principle",
            explanation: "Qisas is the principle of retributive justice ('life for life') for intentional murder or bodily harm, with option for forgiveness or compensation.",
          },
          {
            question: "What is 'Bay' al-Gharar'?",
            options: [
              "Sale involving excessive uncertainty",
              "Permissible forward sale",
              "Charitable sale",
              "Installment sale"
            ],
            correctAnswer: "Sale involving excessive uncertainty",
            explanation: "Bay' al-Gharar refers to sales involving excessive uncertainty or risk, prohibited in Islam due to potential disputes and injustice.",
          },
          {
            question: "What is 'Sarf' in Islamic finance?",
            options: [
              "Currency exchange",
              "Interest-based loan",
              "Commodity trading",
              "Leasing"
            ],
            correctAnswer: "Currency exchange",
            explanation: "Sarf refers to currency exchange transactions which must be hand-to-hand and equal if same currencies, based on the Prophet's (PBUH) prohibition of Riba al-Fadl.",
          },
          {
            question: "What is 'Hudud' in Islamic law?",
            options: [
              "Boundaries of Allah",
              "Discretionary punishments",
              "Civil laws",
              "Commercial regulations"
            ],
            correctAnswer: "Boundaries of Allah",
            explanation: "Hudud refers to the 'boundaries of Allah' - fixed punishments for specific crimes mentioned in the Quran and Sunnah like theft and adultery.",
          },          
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!fiqhCategory.levels.intermediate) {
  fiqhCategory.levels.intermediate = [...fiqhCategory.levels.easy]
}

export default fiqhCategory