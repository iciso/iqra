import type { QuizCategory } from "@/types/quiz"

// Additional quiz categories here were removed but can be used for beefing up first 6 cats
// First six cats are Quran Fiqh Tafsir Hadeeth Aqeedah Seerah having only 10 easy and 10 Advanced
export const additionalCategories: QuizCategory[] = [         
  {
    id: "aqeedah",
    title: "Aqeedah",
    description: "Islamic Creed and Beliefs",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does 'Aqeedah' mean?",
          options: ["Prayer", "Belief", "Charity", "Fasting"],
          correctAnswer: "Belief",
          explanation:
            "Aqeedah refers to the core beliefs and creed of Islam that a Muslim must have firm conviction in.",
        },
        {
          question: "How many articles of faith are there in Islam?",
          options: ["4", "5", "6", "7"],
          correctAnswer: "6",
          explanation:
            "There are six articles of faith in Islam: belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree.",
        },
        {
          question: "What is 'Tawheed'?",
          options: [
            "Belief in the Day of Judgment",
            "Belief in the oneness of Allah",
            "Belief in the prophets",
            "Belief in the angels",
          ],
          correctAnswer: "Belief in the oneness of Allah",
          explanation:
            "Tawheed is the concept of the absolute oneness of Allah, which is the most fundamental aspect of Islamic belief.",
        },
        {
          question: "What is the opposite of Tawheed?",
          options: ["Iman", "Shirk", "Kufr", "Nifaq"],
          correctAnswer: "Shirk",
          explanation:
            "Shirk is the association of partners with Allah, which is the opposite of Tawheed (monotheism).",
        },
        {
          question: "What is the meaning of 'La ilaha illa Allah'?",
          options: [
            "There is no god worthy of worship except Allah",
            "Allah is the greatest",
            "Praise be to Allah",
            "Allah is one",
          ],
          correctAnswer: "There is no god worthy of worship except Allah",
          explanation:
            "La ilaha illa Allah is the first part of the Islamic declaration of faith (Shahada), meaning 'There is no god worthy of worship except Allah', affirming the absolute oneness of Allah.",
        },
        {
          question: "What is the belief about the Quran in Islamic Aqeedah?",
          options: [
            "It is one of many holy books",
            "It is the unchanged, preserved word of Allah",
            "It was written by Prophet Muhammad",
            "It is only a historical document",
          ],
          correctAnswer: "It is the unchanged, preserved word of Allah",
          explanation:
            "In Islamic Aqeedah, the Quran is believed to be the literal, unchanged, and preserved word of Allah revealed to Prophet Muhammad (PBUH) through Angel Gabriel.",
        },
        {
          question: "What is the Islamic belief about the angels?",
          options: [
            "They are myths",
            "They are created beings who obey Allah",
            "They are children of Allah",
            "They can choose to disobey Allah",
          ],
          correctAnswer: "They are created beings who obey Allah",
          explanation:
            "In Islamic Aqeedah, angels are created beings made from light who always obey Allah and never disobey Him. They have various roles assigned by Allah.",
        },
        {
          question: "What is the Islamic belief about the Day of Judgment?",
          options: [
            "It is symbolic, not literal",
            "It will never happen",
            "It is a certain reality that will come",
            "It has already occurred",
          ],
          correctAnswer: "It is a certain reality that will come",
          explanation:
            "Islamic Aqeedah affirms that the Day of Judgment is a certain reality that will come, when all humans will be resurrected and held accountable for their deeds.",
        },
        {
          question: "What is 'Iman' in Islamic terminology?",
          options: ["Prayer", "Faith or belief", "Charity", "Pilgrimage"],
          correctAnswer: "Faith or belief",
          explanation:
            "Iman refers to faith or belief in Islam, encompassing belief in Allah, His angels, His books, His messengers, the Day of Judgment, and divine decree.",
        },
        {
          question: "What is the Islamic belief about previous prophets?",
          options: [
            "They were not real",
            "They were all Arabs",
            "They all brought the same core message of monotheism",
            "Their messages are irrelevant now",
          ],
          correctAnswer: "They all brought the same core message of monotheism",
          explanation:
            "Islamic Aqeedah teaches that all prophets, from Adam to Muhammad (peace be upon them all), brought the same core message of monotheism (Tawheed), calling people to worship Allah alone.",
        },
      ],
      advanced: [
        {
          question: "What are the three categories of Tawheed?",
          options: [
            "Tawheed al-Uluhiyyah, Tawheed al-Rububiyyah, Tawheed al-Asma wa al-Sifat",
            "Tawheed al-Salat, Tawheed al-Zakat, Tawheed al-Sawm",
            "Tawheed al-Quran, Tawheed al-Sunnah, Tawheed al-Ijma",
            "Tawheed al-Iman, Tawheed al-Islam, Tawheed al-Ihsan",
          ],
          correctAnswer: "Tawheed al-Uluhiyyah, Tawheed al-Rububiyyah, Tawheed al-Asma wa al-Sifat",
          explanation:
            "The three categories of Tawheed are: Tawheed al-Rububiyyah (Oneness of Lordship), Tawheed al-Uluhiyyah (Oneness of Worship), and Tawheed al-Asma wa al-Sifat (Oneness of Names and Attributes).",
        },
        {
          question: "What is 'Qadar' in Islamic belief?",
          options: [
            "The Islamic holy book",
            "Divine decree and predestination",
            "The Day of Judgment",
            "The five pillars of Islam",
          ],
          correctAnswer: "Divine decree and predestination",
          explanation:
            "Qadar refers to Allah's divine decree and predestination, the belief that Allah has knowledge of and control over all things.",
        },
        {
          question: "What is the concept of 'Kufr' in Islam?",
          options: ["Belief in Allah", "Disbelief or rejection of faith", "Performing good deeds", "Giving charity"],
          correctAnswer: "Disbelief or rejection of faith",
          explanation: "Kufr refers to disbelief or the rejection of faith in Allah and the teachings of Islam.",
        },
        {
          question: "What is 'Al-Wala wal-Bara'?",
          options: [
            "The concept of Heaven and Hell",
            "The concept of loyalty to Islam and disavowal of disbelief",
            "The concept of reward and punishment",
            "The concept of life and death",
          ],
          correctAnswer: "The concept of loyalty to Islam and disavowal of disbelief",
          explanation:
            "Al-Wala wal-Bara refers to the concept of loyalty and love for the sake of Allah, and disavowal and disassociation from disbelief and its people.",
        },
        {
          question: "What is the difference between the attributes of Allah and those of His creation?",
          options: [
            "There is no difference",
            "Allah's attributes are limited, creation's are unlimited",
            "Allah's attributes are perfect and unique, without resemblance to creation",
            "Allah has no attributes",
          ],
          correctAnswer: "Allah's attributes are perfect and unique, without resemblance to creation",
          explanation:
            "Allah's attributes are perfect, complete, and unique to Him, without any resemblance to the attributes of His creation, as stated in the Quran: 'There is nothing like unto Him' (42:11).",
        },
        {
          question: "What is the Ash'ari school's approach to understanding Allah's attributes?",
          options: [
            "They reject all attributes",
            "They interpret attributes literally",
            "They interpret some attributes metaphorically",
            "They believe attributes are created",
          ],
          correctAnswer: "They interpret some attributes metaphorically",
          explanation:
            "The Ash'ari school, founded by Abu al-Hasan al-Ash'ari, takes a middle path by affirming Allah's attributes while interpreting some of them metaphorically to avoid anthropomorphism.",
        },
        {
          question: "What is the concept of 'Bid'ah' in relation to Aqeedah?",
          options: [
            "Innovation that is always good",
            "Innovation in religious matters that has no precedent",
            "Following the Sunnah strictly",
            "Interpreting the Quran",
          ],
          correctAnswer: "Innovation in religious matters that has no precedent",
          explanation:
            "Bid'ah refers to innovations or newly invented matters in religion that have no precedent from the time of the Prophet Muhammad (PBUH) and his companions.",
        },
        {
          question: "What is the concept of 'Tawassul' in Islamic belief?",
          options: [
            "Direct worship of saints",
            "Seeking nearness to Allah through permissible means",
            "Rejecting intercession completely",
            "Praying to the deceased",
          ],
          correctAnswer: "Seeking nearness to Allah through permissible means",
          explanation:
            "Tawassul refers to the concept of seeking nearness to Allah through permissible means, such as through His names and attributes, good deeds, or the supplication of a living righteous person.",
        },
        {
          question: "What is the difference between 'Tawheed al-Rububiyyah' and 'Tawheed al-Uluhiyyah'?",
          options: [
            "They are the same thing",
            "Rububiyyah is about Allah's lordship, Uluhiyyah is about worshipping Him alone",
            "Rububiyyah is about worship, Uluhiyyah is about lordship",
            "Rububiyyah is about the Quran, Uluhiyyah is about the Sunnah",
          ],
          correctAnswer: "Rububiyyah is about Allah's lordship, Uluhiyyah is about worshipping Him alone",
          explanation:
            "Tawheed al-Rububiyyah is the belief in Allah's lordship, that He alone is the creator, sustainer, and controller of all things. Tawheed al-Uluhiyyah is the belief that Allah alone deserves to be worshipped, without any partners.",
        },
        {
          question: "What is the concept of 'Ru'yat Allah' (Seeing Allah) in Islamic Aqeedah?",
          options: [
            "Allah can never be seen under any circumstances",
            "Believers will see Allah in the Hereafter without comprehending His nature",
            "Allah can be seen in this world through spiritual exercises",
            "It is a metaphorical concept, not literal",
          ],
          correctAnswer: "Believers will see Allah in the Hereafter without comprehending His nature",
          explanation:
            "According to mainstream Sunni Aqeedah, believers will literally see Allah in the Hereafter, as mentioned in various Quranic verses and authentic Hadiths. However, this vision will not encompass or comprehend Allah's nature or essence, as 'There is nothing like unto Him' (Quran 42:11).",
        },
      ],
    },
  },
]
