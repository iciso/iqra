import type { QuizCategory } from "@/types/quiz"

// Contains only Aqeedah 
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
  question: "What is the meaning of 'Shahada'?",
  options: [
    "The Islamic declaration of faith",
    "The pilgrimage to Makkah",
    "The daily prayers",
    "The month of fasting"
  ],
  correctAnswer: "The Islamic declaration of faith",
  explanation: "The Shahada is the Islamic testimony of faith: 'There is no god but Allah, and Muhammad is His messenger.' It's the first pillar of Islam.",
},
{
  question: "Which angel is responsible for bringing revelations to prophets?",
  options: [
    "Mikail (Michael)",
    "Israfil",
    "Jibreel (Gabriel)",
    "Izrail"
  ],
  correctAnswer: "Jibreel (Gabriel)",
  explanation: "Angel Jibreel (Gabriel) is responsible for delivering Allah's revelations to the prophets throughout history, including the Quran to Prophet Muhammad (PBUH).",
},
{
  question: "What is the Islamic belief about previous scriptures like the Torah and Gospel?",
  options: [
    "They are completely false",
    "They were originally from Allah but have been changed",
    "They are exactly the same as the Quran",
    "They are more important than the Quran"
  ],
  correctAnswer: "They were originally from Allah but have been changed",
  explanation: "Islam teaches that previous scriptures were divine revelations but have been altered over time, while the Quran remains preserved in its original form.",
},
{
  question: "What is 'Sunnah' in Islamic terminology?",
  options: [
    "The obligatory prayers",
    "The teachings and practices of Prophet Muhammad (PBUH)",
    "The Islamic calendar",
    "The pilgrimage rites"
  ],
  correctAnswer: "The teachings and practices of Prophet Muhammad (PBUH)",
  explanation: "Sunnah refers to the sayings, actions, and approvals of Prophet Muhammad (PBUH), which along with the Quran form the basis of Islamic guidance.",
},
{
  question: "What is the Islamic view about the nature of Allah?",
  options: [
    "Allah has a physical form",
    "Allah is present everywhere in person",
    "There is nothing like unto Allah",
    "Allah is limited by time and space"
  ],
  correctAnswer: "There is nothing like unto Allah",
  explanation: "The Quran states 'There is nothing like unto Him' (42:11), meaning Allah's nature is unique and unlike anything in creation.",
},
{
  question: "What is 'Qiyamah'?",
  options: [
    "The night prayer",
    "The Day of Judgment",
    "The Friday prayer",
    "The standing in Hajj"
  ],
  correctAnswer: "The Day of Judgment",
  explanation: "Qiyamah refers to the Day of Judgment when all creation will be resurrected and held accountable for their deeds.",
},
{
  question: "How many names of Allah are mentioned in the authentic hadith as being especially blessed?",
  options: [
    "7",
    "99",
    "1000",
    "All names are equally blessed"
  ],
  correctAnswer: "99",
  explanation: "A famous hadith mentions that Allah has 99 names, and whoever memorizes them will enter Paradise (Bukhari and Muslim).",
},
{
  question: "What is the Islamic belief about the throne of Allah (Arsh)?",
  options: [
    "It's a physical chair",
    "It's a metaphorical concept",
    "It's the greatest of Allah's creations",
    "It doesn't exist"
  ],
  correctAnswer: "It's the greatest of Allah's creations",
  explanation: "The throne (Arsh) is the greatest of Allah's creations, above which Allah rose in a manner that befits His majesty (as mentioned in Quran 20:5).",
},
{
  question: "What is 'Barzakh' in Islamic belief?",
  options: [
    "The bridge over Hell",
    "The barrier between this world and the Hereafter",
    "The scale of deeds",
    "The record of actions"
  ],
  correctAnswer: "The barrier between this world and the Hereafter",
  explanation: "Barzakh refers to the intermediate state between death and resurrection where souls await the Day of Judgment.",
},
{
  question: "What is the Islamic belief about destiny (Qadr)?",
  options: [
    "Everything is predestined with no free will",
    "Humans have complete free will with no divine decree",
    "Allah's knowledge encompasses all things, and humans have limited free will",
    "Destiny changes randomly"
  ],
  correctAnswer: "Allah's knowledge encompasses all things, and humans have limited free will",
  explanation: "Islamic belief balances divine decree with human responsibility - Allah knows all things while humans make real choices for which they're accountable.",
},
{
  question: "What is 'Ruh' in Islamic terminology?",
  options: [
    "The physical body",
    "The soul or spirit",
    "The heart",
    "The mind"
  ],
  correctAnswer: "The soul or spirit",
  explanation: "Ruh refers to the soul or spirit that Allah places in each human being, the nature of which is known only to Allah (Quran 17:85).",
},
{
  question: "What is the Islamic belief about the preservation of the Quran?",
  options: [
    "It was preserved only in the memories of scholars",
    "Allah has promised to preserve it completely",
    "Parts of it have been lost",
    "It changes with time"
  ],
  correctAnswer: "Allah has promised to preserve it completely",
  explanation: "The Quran states: 'Indeed, it is We who sent down the Quran and indeed, We will be its guardian' (15:9), indicating its divine preservation.",
},
{
  question: "What is 'Fitrah' in Islamic belief?",
  options: [
    "The natural disposition to recognize Allah",
    "The Islamic dress code",
    "The ritual purification",
    "The legal rulings"
  ],
  correctAnswer: "The natural disposition to recognize Allah",
  explanation: "Fitrah refers to the innate human disposition to recognize and worship Allah, which every child is born with according to Islamic belief.",
},
{
  question: "What is the Islamic view about the purpose of creation?",
  options: [
    "There is no purpose",
    "To worship Allah alone",
    "To enjoy worldly life",
    "To accumulate wealth"
  ],
  correctAnswer: "To worship Allah alone",
  explanation: "The Quran states: 'I did not create jinn and mankind except to worship Me' (51:56), establishing worship as the primary purpose of creation.",
},
{
  question: "What is 'Ghusl' in Islamic terminology?",
  options: [
    "The full ritual bath",
    "The dry ablution",
    "The call to prayer",
    "The funeral prayer"
  ],
  correctAnswer: "The full ritual bath",
  explanation: "Ghusl refers to the full ritual bath required in certain circumstances like major ritual impurity, distinct from the regular wudu (ablution).",
},
{
  question: "What is the Islamic belief about intercession (Shafa'ah) on Judgment Day?",
  options: [
    "There will be no intercession",
    "Only prophets can intercede",
    "Allah may grant certain individuals permission to intercede",
    "Anyone can intercede for others"
  ],
  correctAnswer: "Allah may grant certain individuals permission to intercede",
  explanation: "Islamic belief holds that intercession will occur on Judgment Day, but only by Allah's permission and for those He approves, with Prophet Muhammad (PBUH) having the greatest intercession.",
},
{
  question: "What is 'Sirat' in Islamic eschatology?",
  options: [
    "The record of deeds",
    "The bridge over Hellfire",
    "The trumpet blown by Israfil",
    "The scale of justice"
  ],
  correctAnswer: "The bridge over Hellfire",
  explanation: "Sirat is the bridge over Hell that all must cross on Judgment Day - believers will cross successfully while disbelievers will fall into Hell.",
},
{
  question: "What is the Islamic belief about the nature of angels?",
  options: [
    "They have free will like humans",
    "They are made from light and always obey Allah",
    "They can take human form permanently",
    "They are divine beings"
  ],
  correctAnswer: "They are made from light and always obey Allah",
  explanation: "Angels are created from light, have no free will to disobey Allah, and perfectly carry out His commands according to Islamic belief.",
},
{
  question: "What is 'Hawd' (the Basin) in Islamic belief?",
  options: [
    "The fountain in Paradise",
    "The Prophet's basin from which believers will drink on Judgment Day",
    "The river in Hell",
    "The well of Zamzam"
  ],
  correctAnswer: "The Prophet's basin from which believers will drink on Judgment Day",
  explanation: "Hawd refers to the Basin that Prophet Muhammad (PBUH) will be granted on Judgment Day, from which his followers will drink and never thirst again.",
},
{
  question: "What is the Islamic view about the finality of Prophet Muhammad's (PBUH) prophethood?",
  options: [
    "He was the last prophet for Arabs only",
    "He was one of many prophets with no special status",
    "He is the final prophet for all humanity until Judgment Day",
    "There will be prophets after him"
  ],
  correctAnswer: "He is the final prophet for all humanity until Judgment Day",
  explanation: "The Quran declares Prophet Muhammad (PBUH) as 'the seal of the prophets' (33:40), meaning no prophet will come after him until Judgment Day.",
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
  question: "What is the difference between 'Iman' and 'Islam' in Islamic theology?",
  options: [
    "They are exactly the same",
    "Iman refers to inner belief while Islam refers to outward submission",
    "Islam is stronger than Iman",
    "Iman is only for prophets"
  ],
  correctAnswer: "Iman refers to inner belief while Islam refers to outward submission",
  explanation: "While related, Iman refers to inner faith and belief, while Islam refers to outward submission to Allah's commands. A person may have Islam without complete Iman (hypocrites), but true Iman necessarily leads to Islam.",
},
{
  question: "What is the concept of 'Istawa' (Allah's ascension over the Throne) in Islamic creed?",
  options: [
    "Allah literally sits on the Throne",
    "A unique ascension befitting Allah's majesty without resembling creation",
    "Allah is everywhere so doesn't need to ascend",
    "It's a metaphorical concept"
  ],
  correctAnswer: "A unique ascension befitting Allah's majesty without resembling creation",
  explanation: "The mainstream Sunni position affirms Allah's ascension over the Throne as mentioned in the Quran (20:5), while maintaining it's unlike any created ascension and without knowing its exact nature ('bila kayf' - without asking how).",
},
{
  question: "What is the concept of 'Kalam Allah' (Allah's Speech) in Islamic theology?",
  options: [
    "Allah's speech is created",
    "Allah's speech is eternal and uncreated",
    "Allah doesn't speak",
    "Allah's speech is like human speech"
  ],
  correctAnswer: "Allah's speech is eternal and uncreated",
  explanation: "Orthodox Sunni theology holds that Allah's speech is an eternal attribute, not created. The Quran as Allah's speech is uncreated, though its written form and recitation are created.",
},
{
  question: "What is the difference between 'Tawheed al-Asma wa al-Sifat' and other categories of Tawheed?",
  options: [
    "It deals only with Allah's names",
    "It affirms Allah's names and attributes without distortion or resemblance to creation",
    "It rejects all attributes",
    "It's the same as Tawheed al-Uluhiyyah"
  ],
  correctAnswer: "It affirms Allah's names and attributes without distortion or resemblance to creation",
  explanation: "Tawheed al-Asma wa al-Sifat involves affirming all the names and attributes Allah has ascribed to Himself in the Quran and authentic Sunnah, without distortion (tahrif), denial (ta'til), anthropomorphism (tashbih), or questioning how (takyeef).",
},
{
  question: "What is the concept of 'Irja' in Islamic theology?",
  options: [
    "Delaying the judgment of a person's faith based on their actions",
    "Immediate excommunication for major sins",
    "Belief that actions don't matter at all",
    "Rejection of divine decree"
  ],
  correctAnswer: "Delaying the judgment of a person's faith based on their actions",
  explanation: "Irja (from Murji'ah) refers to the theological position that delays judgment about a person's faith based on their sinful actions, considering Iman to be primarily a matter of heart belief regardless of actions.",
},
{
  question: "What is the concept of 'Khawarij' in Islamic creed?",
  options: [
    "Those who rebelled against Ali and declared other Muslims as disbelievers",
    "The earliest Sufis",
    "Followers of orthodox Sunni creed",
    "A political party during Umayyad era"
  ],
  correctAnswer: "Those who rebelled against Ali and declared other Muslims as disbelievers",
  explanation: "Khawarij were a sect that emerged during Ali's caliphate, known for declaring other Muslims as disbelievers (takfir) based on major sins and rebelling against established authority.",
},
{
  question: "What is the concept of 'Qada' and 'Qadar' in Islamic belief?",
  options: [
    "They are the same thing",
    "Qada is Allah's eternal decree, Qadar is its execution in time",
    "Qadar is Allah's eternal decree, Qada is its execution in time",
    "They have nothing to do with divine decree"
  ],
  correctAnswer: "Qadar is Allah's eternal decree, Qada is its execution in time",
  explanation: "In Islamic theology, Qadar refers to Allah's eternal knowledge and decree of all things, while Qada refers to the actualization of that decree in creation at its appointed time.",
},
{
  question: "What is the concept of 'Naskh' (abrogation) in relation to Islamic creed?",
  options: [
    "Complete cancellation of previous revelations",
    "Replacement of certain rulings with new ones by divine wisdom",
    "Editing of the Quran",
    "Rejection of hadith"
  ],
  correctAnswer: "Replacement of certain rulings with new ones by divine wisdom",
  explanation: "Naskh refers to Allah's wisdom in replacing certain earlier rulings with new ones through subsequent revelation, which demonstrates the progressive legislation in Islam while maintaining consistent creedal foundations.",
},
{
  question: "What is the concept of 'Ahl al-Sunnah wal-Jama'ah'?",
  options: [
    "A specific madhab of fiqh",
    "Those who follow the Quran only",
    "Those who follow the Prophet's way and the mainstream Muslim community's understanding",
    "A political group"
  ],
  correctAnswer: "Those who follow the Prophet's way and the mainstream Muslim community's understanding",
  explanation: "Ahl al-Sunnah wal-Jama'ah refers to those who adhere to the authentic teachings of Prophet Muhammad (PBUH) and the understanding of the early Muslim community, avoiding extremes in creed.",
},
{
  question: "What is the concept of 'Taqleed' in relation to Islamic creed?",
  options: [
    "Blind following without evidence",
    "Following a qualified scholar in matters one doesn't know",
    "Rejecting all scholarly opinions",
    "Creating new beliefs"
  ],
  correctAnswer: "Following a qualified scholar in matters one doesn't know",
  explanation: "Taqleed refers to laypeople following qualified scholars in matters they're not knowledgeable about, which is permissible in creedal matters for those unable to directly study evidences.",
},
{
  question: "What is the concept of 'Ithbat al-Uluww' (affirming Allah's loftiness) in Islamic creed?",
  options: [
    "Allah is physically above the Throne",
    "Allah is everywhere",
    "Allah is above His creation in a manner befitting His majesty",
    "Allah has no relation to space"
  ],
  correctAnswer: "Allah is above His creation in a manner befitting His majesty",
  explanation: "Ithbat al-Uluww affirms that Allah is above His creation in a way that befits His majesty, without resembling creation's spatial relationships, based on numerous Quranic verses and hadiths.",
},
{
  question: "What is the concept of 'Haqiqah Muhammadiyyah' in Islamic theology?",
  options: [
    "The historical reality of Prophet Muhammad's life",
    "A Sufi concept about the primordial light of Muhammad",
    "The scientific study of hadith",
    "The legal rulings specific to the Prophet"
  ],
  correctAnswer: "A Sufi concept about the primordial light of Muhammad",
  explanation: "Haqiqah Muhammadiyyah is a Sufi metaphysical concept positing that Prophet Muhammad (PBUH) existed as a primordial light before creation, a view not found in mainstream Sunni creed.",
},
{
  question: "What is the concept of 'Sifat al-Fi'liyyah' among Allah's attributes?",
  options: [
    "Attributes related to Allah's essence",
    "Attributes related to Allah's actions that occur at specific times",
    "Attributes shared with creation",
    "Metaphorical attributes"
  ],
  correctAnswer: "Attributes related to Allah's actions that occur at specific times",
  explanation: "Sifat al-Fi'liyyah are Allah's active attributes that occur at specific times (like creating, providing), distinct from His essential attributes (like knowledge, power) which are eternal.",
},
{
  question: "What is the concept of 'Tafwid' in relation to Allah's attributes?",
  options: [
    "Delegating the meaning of ambiguous attributes to Allah",
    "Interpreting them metaphorically",
    "Rejecting them completely",
    "Understanding them literally"
  ],
  correctAnswer: "Delegating the meaning of ambiguous attributes to Allah",
  explanation: "Tafwid is the approach of affirming Allah's attributes as mentioned in Quran/Sunnah while delegating knowledge of their exact nature to Allah, without distorting or denying them.",
},
{
  question: "What is the concept of 'Iman bi al-Qada wal-Qadar'?",
  options: [
    "Belief that humans create their own destiny",
    "Belief in both good and bad aspects of divine decree",
    "Belief only in good decree",
    "Rejection of divine decree"
  ],
  correctAnswer: "Belief in both good and bad aspects of divine decree",
  explanation: "Complete belief in divine decree includes accepting both what we perceive as good and bad, knowing Allah's wisdom encompasses all things even if we don't understand it.",
},
{
  question: "What is the concept of 'Kufr al-Ni'mah'?",
  options: [
    "Disbelief in Allah",
    "Ungratefulness for blessings while still believing",
    "A type of minor shirk",
    "Rejecting the prophets"
  ],
  correctAnswer: "Ungratefulness for blessings while still believing",
  explanation: "Kufr al-Ni'mah refers to being ungrateful for Allah's blessings, which is a form of 'lesser kufr' that doesn't take one out of Islam but is a major sin.",
},
{
  question: "What is the concept of 'Tawakkul' in relation to Islamic creed?",
  options: [
    "Complete reliance on Allah while taking lawful means",
    "Fatalism without taking any action",
    "Trusting in creation instead of Allah",
    "A Sufi meditation practice"
  ],
  correctAnswer: "Complete reliance on Allah while taking lawful means",
  explanation: "Tawakkul in creed means truly relying on Allah while taking permissible means, distinguishing between the Creator (who controls outcomes) and the means (which we're commanded to utilize).",
},
{
  question: "What is the concept of 'Ghayb' in Islamic belief?",
  options: [
    "Only the unseen spiritual world",
    "All matters beyond human perception that Allah has revealed",
    "Superstitions and myths",
    "Future predictions"
  ],
  correctAnswer: "All matters beyond human perception that Allah has revealed",
  explanation: "Ghayb refers to all matters beyond human perception that Allah has informed us about through revelation (like angels, Paradise, Hell), forming a core part of Islamic creed.",
},
{
  question: "What is the concept of 'Iradah' (Will) in relation to Allah's attributes?",
  options: [
    "Allah's will is like human will",
    "Allah has two wills - one for creation and one for command",
    "Allah has no will",
    "Allah's will changes"
  ],
  correctAnswer: "Allah has two wills - one for creation and one for command",
  explanation: "Islamic theology distinguishes between Allah's Kawni Will (what He allows to happen in creation) and Shar'i Will (what He commands us to do), explaining why evil occurs by His Kawni Will but not His Shar'i Will.",
},
{
  question: "What is the concept of 'Mahdiyyah' in Islamic eschatology?",
  options: [
    "The guided one who will appear before Judgment Day",
    "A prophet after Muhammad",
    "A Shia concept only",
    "A Sufi spiritual rank"
  ],
  correctAnswer: "The guided one who will appear before Judgment Day",
  explanation: "The Mahdi is a rightly-guided leader who will appear before Judgment Day to establish justice, a belief based on authentic hadiths and accepted by mainstream Sunni creed.",
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
