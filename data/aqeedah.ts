import type { QuizCategory } from "@/types/quiz"

const aqeedahCategory: QuizCategory = {
  id: "aqeedah",
  title: "Aqeedah",
  description: "The core beliefs of Islam: the six pillars of Iman, Tawhid, and the foundations of sound creed",
  icon: "Heart",
  levels: {
    easy: [
      {
        question: "How many pillars of Iman (faith) are there in Islam?",
        options: ["Four", "Five", "Six", "Seven"],
        correctAnswer: "Six",
        explanation: "The six pillars of Iman are belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree (Qadr).",
        references: "Sahih Muslim: Hadith of Jibril"
      },
      {
        question: "What is the Arabic term for the Islamic creed or core beliefs?",
        options: ["Fiqh", "Aqeedah", "Tafsir", "Seerah"],
        correctAnswer: "Aqeedah",
        explanation: "Aqeedah refers to the firm, unwavering beliefs that a Muslim holds in the heart regarding matters of faith.",
        references: "Sahih Muslim: Hadith of Jibril"
      },
      {
        question: "What is the first pillar of Iman?",
        options: ["Belief in Angels", "Belief in Allah", "Belief in the Last Day", "Belief in the Books"],
        correctAnswer: "Belief in Allah",
        explanation: "Belief in Allah is the foundation of all other pillars of faith and includes affirming His Oneness (Tawhid).",
        references: "Sahih Muslim: Hadith of Jibril"
      },
      {
        question: "What does Tawhid mean?",
        options: ["Prayer", "Oneness of Allah", "Charity", "Fasting"],
        correctAnswer: "Oneness of Allah",
        explanation: "Tawhid is the belief that Allah is One, unique, without partners, and alone deserves all worship.",
        references: "Surah Al-Ikhlas 112:1-4"
      },
      {
        question: "Which Surah is often called the Surah of Tawhid?",
        options: ["Surah Al-Fatihah", "Surah Al-Ikhlas", "Surah Al-Baqarah", "Surah An-Nas"],
        correctAnswer: "Surah Al-Ikhlas",
        explanation: "Surah Al-Ikhlas purely declares the Oneness of Allah: He is One, the Eternal Refuge, who neither begets nor is born.",
        references: "Surah Al-Ikhlas 112:1-4"
      },
      {
        question: "What is the opposite of Tawhid?",
        options: ["Iman", "Shirk", "Ihsan", "Taqwa"],
        correctAnswer: "Shirk",
        explanation: "Shirk means associating partners with Allah in His Lordship, worship, or Names and Attributes.",
        references: "Surah An-Nisa 4:48"
      },
      {
        question: "From what were the angels created?",
        options: ["Clay", "Fire", "Light", "Water"],
        correctAnswer: "Light",
        explanation: "Angels were created from light, while jinn were created from fire and humans from clay.",
        references: "Sahih Muslim"
      },
      {
        question: "Which angel brought revelation (Wahy) to the Prophets?",
        options: ["Mika'il", "Israfil", "Jibril", "Malik"],
        correctAnswer: "Jibril",
        explanation: "Angel Jibril (Gabriel) was tasked with delivering Allah's revelation to the Prophets, including the Quran to Prophet Muhammad ﷺ.",
        references: "Surah Al-Baqarah 2:97"
      },
      {
        question: "Which angel will blow the Trumpet on the Day of Judgment?",
        options: ["Jibril", "Mika'il", "Israfil", "Izra'il"],
        correctAnswer: "Israfil",
        explanation: "Israfil is the angel who will blow the Trumpet to signal the end of the world and the resurrection.",
        references: "Sahih Muslim"
      },
      {
        question: "How many primary revealed books are commonly mentioned in Islamic belief?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "The four primary books are the Tawrah (Torah), Zabur (Psalms), Injeel (Gospel), and the Quran.",
        references: "Surah Al-Baqarah 2:285"
      },
      {
        question: "To which Prophet was the Tawrah revealed?",
        options: ["Ibrahim (AS)", "Musa (AS)", "Dawud (AS)", "Isa (AS)"],
        correctAnswer: "Musa (AS)",
        explanation: "The Tawrah was revealed to Prophet Musa (Moses), peace be upon him.",
        references: "Surah Al-Ma'idah 5:44"
      },
      {
        question: "To which Prophet was the Zabur revealed?",
        options: ["Musa (AS)", "Dawud (AS)", "Isa (AS)", "Ibrahim (AS)"],
        correctAnswer: "Dawud (AS)",
        explanation: "The Zabur (Psalms) was revealed to Prophet Dawud (David), peace be upon him.",
        references: "Surah An-Nisa 4:163"
      },
      {
        question: "To which Prophet was the Injeel revealed?",
        options: ["Musa (AS)", "Dawud (AS)", "Isa (AS)", "Muhammad ﷺ"],
        correctAnswer: "Isa (AS)",
        explanation: "The Injeel (Gospel) was revealed to Prophet Isa (Jesus), peace be upon him.",
        references: "Surah Al-Ma'idah 5:46"
      },
      {
        question: "Which book is the final revelation from Allah?",
        options: ["Tawrah", "Zabur", "Injeel", "Quran"],
        correctAnswer: "Quran",
        explanation: "The Quran is the final, complete, and preserved revelation sent to Prophet Muhammad ﷺ for all humanity.",
        references: "Surah Al-Ahzab 33:40"
      },
      {
        question: "Who is the last and final Messenger of Allah?",
        options: ["Isa (AS)", "Musa (AS)", "Ibrahim (AS)", "Muhammad ﷺ"],
        correctAnswer: "Muhammad ﷺ",
        explanation: "Prophet Muhammad ﷺ is the Seal of the Prophets; no prophet will come after him.",
        references: "Surah Al-Ahzab 33:40"
      },
      {
        question: "How many Prophets are mentioned by name in the Quran?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "25",
        explanation: "The Quran mentions 25 Prophets by name, though the total number of Prophets is much greater.",
        references: "Surah Al-An'am 6:83-86"
      },
      {
        question: "What is the Arabic term for the Day of Judgment?",
        options: ["Yawm al-Qiyamah", "Laylatul Qadr", "Yawm al-Arafah", "Eid al-Fitr"],
        correctAnswer: "Yawm al-Qiyamah",
        explanation: "Yawm al-Qiyamah refers to the Day of Resurrection when all people will be held accountable for their deeds.",
        references: "Surah Al-Qiyamah 75:1"
      },
      {
        question: "What does belief in Qadr mean?",
        options: ["Belief in angels", "Belief in divine decree", "Belief in the books", "Belief in the Prophets"],
        correctAnswer: "Belief in divine decree",
        explanation: "Qadr is the belief that everything, good and bad, happens by the knowledge, will, and decree of Allah.",
        references: "Sahih Muslim: Hadith of Jibril"
      },
      {
        question: "Which of the following is NOT one of the six pillars of Iman?",
        options: ["Belief in Allah", "Belief in Angels", "Belief in the Five Pillars of Islam", "Belief in Qadr"],
        correctAnswer: "Belief in the Five Pillars of Islam",
        explanation: "The five pillars of Islam are acts of worship, while the six pillars of Iman are the core beliefs of the heart.",
        references: "Sahih Muslim: Hadith of Jibril"
      },
      {
        question: "Who records the deeds of human beings?",
        options: ["Jibril and Mika'il", "Kiraman Katibin", "Israfil and Malik", "Munkar and Nakir"],
        correctAnswer: "Kiraman Katibin",
        explanation: "The Kiraman Katibin are the noble recording angels who write down every person's good and bad deeds.",
        references: "Surah Al-Infitar 82:10-12"
      },
      {
        question: "What is the name of the angel who takes the souls at death?",
        options: ["Jibril", "Malik", "Izra'il (Angel of Death)", "Ridwan"],
        correctAnswer: "Izra'il (Angel of Death)",
        explanation: "The Angel of Death (often referred to as Izra'il) is responsible for taking the souls of the living when their time ends.",
        references: "Surah As-Sajdah 32:11"
      },
      {
        question: "What is the main message that all Prophets brought?",
        options: ["Build nations", "Worship Allah alone", "Accumulate wealth", "Perform miracles only"],
        correctAnswer: "Worship Allah alone",
        explanation: "Every Prophet called their people to Tawhid — the exclusive worship of Allah alone without partners.",
        references: "Surah An-Nahl 16:36"
      },
      {
        question: "What is the Shahadah?",
        options: ["The declaration of faith", "The daily prayer", "The pilgrimage", "The fast of Ramadan"],
        correctAnswer: "The declaration of faith",
        explanation: "The Shahadah is the testimony that there is no god worthy of worship except Allah and that Muhammad ﷺ is His Messenger.",
        references: "Sahih Bukhari"
      },
      {
        question: "Which of the following is a Name of Allah meaning 'The Most Merciful'?",
        options: ["Al-Malik", "Ar-Rahman", "Al-Aziz", "Al-Hakim"],
        correctAnswer: "Ar-Rahman",
        explanation: "Ar-Rahman means the Most Merciful, encompassing all of creation with Allah's mercy.",
        references: "Surah Al-Fatihah 1:1"
      },
      {
        question: "Do angels have free will like humans?",
        options: ["Yes, they can choose to disobey", "No, they never disobey Allah", "Only some angels do", "They have limited free will"],
        correctAnswer: "No, they never disobey Allah",
        explanation: "Angels are obedient servants of Allah who do not disobey His commands and carry them out perfectly.",
        references: "Surah At-Tahrim 66:6"
      },
      {
        question: "What is the belief that Allah has no beginning and no end called in relation to His nature?",
        options: ["He is Eternal", "He is Created", "He is Limited", "He is Dependent"],
        correctAnswer: "He is Eternal",
        explanation: "Allah is Al-Awwal (the First) and Al-Akhir (the Last); He has no beginning and no end.",
        references: "Surah Al-Hadid 57:3"
      },
      {
        question: "Which Prophet is known as the father of the Prophets (Abul Anbiya)?",
        options: ["Nuh (AS)", "Ibrahim (AS)", "Musa (AS)", "Adam (AS)"],
        correctAnswer: "Ibrahim (AS)",
        explanation: "Prophet Ibrahim (Abraham) is called Abul Anbiya because many Prophets came from his lineage.",
        references: "Surah Al-Anbiya 21:51-73"
      },
      {
        question: "What happens on the Day of Judgment according to Islamic belief?",
        options: ["Everyone is rewarded equally", "People are held accountable for their deeds", "The world continues as normal", "Only Prophets are judged"],
        correctAnswer: "People are held accountable for their deeds",
        explanation: "On the Day of Judgment, every person will be resurrected and judged based on their beliefs and actions.",
        references: "Surah Az-Zalzalah 99:7-8"
      },
      {
        question: "What is Paradise called in Arabic?",
        options: ["Jahannam", "Jannah", "Barzakh", "Siraat"],
        correctAnswer: "Jannah",
        explanation: "Jannah is the eternal abode of reward prepared for the believers who obeyed Allah.",
        references: "Surah Al-Baqarah 2:25"
      },
      {
        question: "What is Hellfire called in Arabic?",
        options: ["Jannah", "Jahannam", "Araf", "Mizan"],
        correctAnswer: "Jahannam",
        explanation: "Jahannam is the abode of punishment prepared for those who rejected faith and committed major sins without repentance.",
        references: "Surah Al-Baqarah 2:24"
      },
      {
        question: "Who is the first Prophet in Islam?",
        options: ["Nuh (AS)", "Ibrahim (AS)", "Adam (AS)", "Idris (AS)"],
        correctAnswer: "Adam (AS)",
        explanation: "Prophet Adam (peace be upon him) was the first human and the first Prophet created by Allah.",
        references: "Surah Al-Baqarah 2:30-39"
      },
      {
        question: "What must a Muslim believe about all the Prophets?",
        options: ["Only Muhammad ﷺ is true", "All Prophets were truthful and sent by Allah", "Some Prophets made mistakes in their message", "Prophets are equal to angels"],
        correctAnswer: "All Prophets were truthful and sent by Allah",
        explanation: "Muslims believe in all Prophets without distinction; all of them conveyed the message of Tawhid truthfully.",
        references: "Surah Al-Baqarah 2:285"
      },
      {
        question: "What is the term for the unseen world that includes angels, jinn, and the Hereafter?",
        options: ["Al-Ghayb", "Ash-Shahadah", "Ad-Dunya", "Al-Akhirah only"],
        correctAnswer: "Al-Ghayb",
        explanation: "Al-Ghayb refers to the unseen realities that cannot be perceived by ordinary human senses but are affirmed by revelation.",
        references: "Surah Al-Baqarah 2:3"
      },
      {
        question: "Which of the following is a correct statement about Allah?",
        options: ["Allah has a son", "Allah is One and has no partners", "Allah needs helpers", "Allah resembles His creation"],
        correctAnswer: "Allah is One and has no partners",
        explanation: "Allah is uniquely One (Ahad). He has no partners, no children, and nothing is comparable to Him.",
        references: "Surah Al-Ikhlas 112:1-4"
      },
      {
        question: "What is the reward for those who believe in Allah and do righteous deeds?",
        options: ["Temporary success only", "Gardens of Paradise", "No specific reward", "Only worldly benefits"],
        correctAnswer: "Gardens of Paradise",
        explanation: "Allah promises eternal Gardens (Jannah) beneath which rivers flow for those who believe and do good deeds.",
        references: "Surah Al-Baqarah 2:25"
      },
      {
        question: "In the Hadith of Jibril, who asked the Prophet ﷺ about Iman?",
        options: ["Angel Mika'il", "Angel Jibril in the form of a man", "A companion named Umar only", "Angel Israfil"],
        correctAnswer: "Angel Jibril in the form of a man",
        explanation: "Angel Jibril came in the form of a man and asked the Prophet ﷺ about Islam, Iman, and Ihsan in the famous Hadith of Jibril.",
        references: "Sahih Muslim"
      }
    ],
    intermediate: [
      {
        question: "Tawhid is commonly divided by scholars into how many main categories?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three",
        explanation: "The three categories are Tawhid ar-Rububiyyah (Lordship), Tawhid al-Uluhiyyah (Worship), and Tawhid al-Asma wa as-Sifat (Names and Attributes).",
        references: "Classical works of Aqeedah (e.g., Kitab at-Tawhid)"
      },
      {
        question: "What does Tawhid ar-Rububiyyah affirm?",
        options: ["Allah alone deserves worship", "Allah is the sole Creator, Sustainer, and Controller", "Allah's Names must be affirmed without distortion", "Allah has a physical form"],
        correctAnswer: "Allah is the sole Creator, Sustainer, and Controller",
        explanation: "Tawhid ar-Rububiyyah is the belief that Allah alone is the Lord who creates, provides, gives life and death, and manages the universe.",
        references: "Surah Al-Fatihah 1:2"
      },
      {
        question: "What does Tawhid al-Uluhiyyah (or Tawhid al-Ibadah) require?",
        options: ["Believing Allah created everything", "Directing all acts of worship to Allah alone", "Affirming Allah's Names only", "Denying Allah's Attributes"],
        correctAnswer: "Directing all acts of worship to Allah alone",
        explanation: "Tawhid al-Uluhiyyah means worshipping Allah exclusively — prayer, dua, sacrifice, trust, and love are for Him alone.",
        references: "Surah Al-An'am 6:162-163"
      },
      {
        question: "What is the correct approach of Ahlus-Sunnah regarding Allah's Names and Attributes?",
        options: ["Deny them completely", "Affirm them as they came without likening to creation or distorting", "Interpret them all metaphorically", "Compare them to human attributes"],
        correctAnswer: "Affirm them as they came without likening to creation or distorting",
        explanation: "Ahlus-Sunnah affirm Allah's Names and Attributes as stated in the Quran and Sunnah, without tashbih (likening), ta'til (denial), or tahrif (distortion).",
        references: "Surah Ash-Shura 42:11"
      },
      {
        question: "What is major shirk (shirk akbar)?",
        options: ["Showing off in good deeds", "Associating partners with Allah in a way that takes one out of Islam", "Swearing by other than Allah", "Wearing amulets without belief"],
        correctAnswer: "Associating partners with Allah in a way that takes one out of Islam",
        explanation: "Major shirk includes worshipping others besides Allah, making dua to the dead, or believing someone shares in Allah's unique rights.",
        references: "Surah An-Nisa 4:48"
      },
      {
        question: "What is minor shirk (shirk asghar)?",
        options: ["Worshipping idols", "Actions that diminish pure Tawhid but do not expel from Islam, such as showing off (riya)", "Denying the Quran", "Rejecting the Prophets"],
        correctAnswer: "Actions that diminish pure Tawhid but do not expel from Islam, such as showing off (riya)",
        explanation: "Minor shirk includes riya (showing off), swearing by other than Allah, and similar acts that compromise sincerity without constituting apostasy.",
        references: "Musnad Ahmad"
      },
      {
        question: "Which angel is associated with provision and rain?",
        options: ["Jibril", "Mika'il", "Israfil", "Malik"],
        correctAnswer: "Mika'il",
        explanation: "Angel Mika'il is responsible for matters of provision (rizq), including rain and plant growth by Allah's permission.",
        references: "Classical tafsir works"
      },
      {
        question: "Who is the guardian of Hellfire?",
        options: ["Ridwan", "Malik", "Munkar", "Nakir"],
        correctAnswer: "Malik",
        explanation: "Malik is the chief angel over Hellfire (Jahannam), as mentioned in the Quran.",
        references: "Surah Az-Zukhruf 43:77"
      },
      {
        question: "Who is the guardian of Paradise?",
        options: ["Malik", "Ridwan", "Israfil", "Jibril"],
        correctAnswer: "Ridwan",
        explanation: "Ridwan is the angel who is the keeper of the gates of Paradise (Jannah).",
        references: "Classical Islamic literature"
      },
      {
        question: "What is the difference between a Nabi and a Rasul according to many scholars?",
        options: ["There is no difference", "A Rasul is sent with a new law or message; every Rasul is a Nabi but not every Nabi is a Rasul", "A Nabi is higher in rank", "Only Muhammad ﷺ was a Rasul"],
        correctAnswer: "A Rasul is sent with a new law or message; every Rasul is a Nabi but not every Nabi is a Rasul",
        explanation: "A Nabi (Prophet) receives revelation; a Rasul (Messenger) is additionally sent with a specific message or law to a people.",
        references: "Classical works of Aqeedah"
      },
      {
        question: "Who are the five Prophets of strong resolve (Ulul Azm)?",
        options: ["Adam, Nuh, Ibrahim, Musa, Isa", "Nuh, Ibrahim, Musa, Isa, Muhammad ﷺ", "Musa, Harun, Dawud, Sulayman, Isa", "Ibrahim, Ismail, Ishaq, Yaqub, Yusuf"],
        correctAnswer: "Nuh, Ibrahim, Musa, Isa, Muhammad ﷺ",
        explanation: "The Ulul Azm are the five greatest Messengers known for their exceptional patience and resolve in conveying the message.",
        references: "Surah Al-Ahqaf 46:35"
      },
      {
        question: "What must a Muslim believe regarding the previous scriptures?",
        options: ["They remain completely unchanged and should be followed today", "They were originally from Allah but have been altered; the Quran is the final authority", "They are entirely fabricated", "Only the Injeel is still valid"],
        correctAnswer: "They were originally from Allah but have been altered; the Quran is the final authority",
        explanation: "Muslims believe the original Tawrah, Zabur, and Injeel were revelations from Allah, but they underwent change; the Quran abrogates and is protected.",
        references: "Surah Al-Ma'idah 5:48"
      },
      {
        question: "What is the belief about the Quran's nature according to Ahlus-Sunnah?",
        options: ["The Quran is created", "The Quran is the uncreated Speech of Allah", "The Quran is only the meaning, not the words", "The Quran is a human composition"],
        correctAnswer: "The Quran is the uncreated Speech of Allah",
        explanation: "Ahlus-Sunnah hold that the Quran is the eternal, uncreated Speech (Kalam) of Allah, revealed to the Prophet ﷺ.",
        references: "Surah At-Tawbah 9:6"
      },
      {
        question: "What are the four levels of belief in Qadr according to classical scholars?",
        options: ["Knowledge, Writing, Will, Creation", "Faith, Action, Intention, Result", "Past, Present, Future, Eternal", "Good, Bad, Neutral, Mixed"],
        correctAnswer: "Knowledge, Writing, Will, Creation",
        explanation: "Belief in Qadr includes: 1) Allah's eternal knowledge, 2) Writing in the Preserved Tablet, 3) Allah's Will, and 4) Allah's creation of all things.",
        references: "Classical Aqeedah texts (e.g., Ibn Uthaymeen)"
      },
      {
        question: "What is the Preserved Tablet called in Arabic?",
        options: ["Al-Lawh al-Mahfuz", "Al-Arsh", "Al-Kursi", "As-Siraat"],
        correctAnswer: "Al-Lawh al-Mahfuz",
        explanation: "Al-Lawh al-Mahfuz is the Preserved Tablet where Allah has written the decree of all that will happen.",
        references: "Surah Al-Buruj 85:21-22"
      },
      {
        question: "What is the questioning in the grave conducted by?",
        options: ["Jibril and Mika'il", "Munkar and Nakir", "Malik and Ridwan", "Israfil and Izra'il"],
        correctAnswer: "Munkar and Nakir",
        explanation: "The two angels Munkar and Nakir question the deceased in the grave about their Lord, religion, and Prophet.",
        references: "Sunan at-Tirmidhi"
      },
      {
        question: "What is the bridge that will be laid over Hellfire on the Day of Judgment?",
        options: ["Al-Mizan", "As-Siraat", "Al-Hawd", "Al-Arsh"],
        correctAnswer: "As-Siraat",
        explanation: "As-Siraat is the bridge over Jahannam that every person must cross; the righteous will pass safely while others may fall.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is Al-Mizan on the Day of Judgment?",
        options: ["The bridge over Hell", "The Scale that weighs deeds", "The Pool of the Prophet ﷺ", "The Throne of Allah"],
        correctAnswer: "The Scale that weighs deeds",
        explanation: "Al-Mizan is the Scale set up to weigh the good and bad deeds of people with perfect justice.",
        references: "Surah Al-Anbiya 21:47"
      },
      {
        question: "What is Al-Hawd?",
        options: ["The Scale of deeds", "The Pool of the Prophet ﷺ from which believers will drink", "The bridge over Hell", "The Preserved Tablet"],
        correctAnswer: "The Pool of the Prophet ﷺ from which believers will drink",
        explanation: "Al-Hawd is the Pool (Basin) granted to Prophet Muhammad ﷺ; those who drink from it will never feel thirst again.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the belief regarding seeing Allah in the Hereafter according to Ahlus-Sunnah?",
        options: ["It is impossible", "The believers will see Allah in Paradise", "Only Prophets will see Allah", "It is only a metaphorical vision"],
        correctAnswer: "The believers will see Allah in Paradise",
        explanation: "Ahlus-Sunnah affirm that the believers will see Allah with their eyes in the Hereafter as a great blessing, without encompassing Him.",
        references: "Surah Al-Qiyamah 75:22-23; Sahih Bukhari"
      },
      {
        question: "What is the status of the Companions (Sahabah) in the creed of Ahlus-Sunnah?",
        options: ["They are ordinary people with no special status", "They are the best of generations and must be respected and loved", "Only a few of them are reliable", "They should be criticized for their differences"],
        correctAnswer: "They are the best of generations and must be respected and loved",
        explanation: "Ahlus-Sunnah love and honor all the Companions, recognizing them as the best generation after the Prophets.",
        references: "Surah At-Tawbah 9:100"
      },
      {
        question: "What is the correct belief about the intercession (Shafa'ah) of the Prophet ﷺ?",
        options: ["There is no intercession", "The Prophet ﷺ will intercede by Allah's permission on the Day of Judgment", "Anyone can intercede freely", "Only angels intercede"],
        correctAnswer: "The Prophet ﷺ will intercede by Allah's permission on the Day of Judgment",
        explanation: "The greatest intercession belongs to Prophet Muhammad ﷺ, and all intercession occurs only by Allah's permission and pleasure.",
        references: "Surah Al-Baqarah 2:255; Sahih Bukhari"
      },
      {
        question: "What is the term for the period between death and the Day of Resurrection?",
        options: ["Al-Qiyamah", "Al-Barzakh", "Al-Mahshar", "As-Siraat"],
        correctAnswer: "Al-Barzakh",
        explanation: "Al-Barzakh is the intermediate realm where souls remain after death until the Resurrection.",
        references: "Surah Al-Mu'minun 23:100"
      },
      {
        question: "Which of the following is an example of major shirk?",
        options: ["Showing off in prayer", "Calling upon a deceased saint for help", "Swearing by one's parents", "Wearing a ring for beauty"],
        correctAnswer: "Calling upon a deceased saint for help",
        explanation: "Directing acts of worship such as dua (supplication) to anyone other than Allah constitutes major shirk.",
        references: "Surah Al-Jinn 72:18-20"
      },
      {
        question: "What does the Name of Allah 'Al-Quddus' mean?",
        options: ["The Most Merciful", "The Holy, Free from all imperfection", "The All-Powerful", "The All-Knowing"],
        correctAnswer: "The Holy, Free from all imperfection",
        explanation: "Al-Quddus means the Absolutely Pure and Holy One who is free from any deficiency or imperfection.",
        references: "Surah Al-Hashr 59:23"
      },
      {
        question: "What is the correct belief about human free will in relation to Qadr?",
        options: ["Humans have no free will at all", "Humans have free will and are responsible for their choices, while Allah's decree encompasses all", "Qadr means humans are forced in every action", "Free will cancels out Qadr"],
        correctAnswer: "Humans have free will and are responsible for their choices, while Allah's decree encompasses all",
        explanation: "Ahlus-Sunnah affirm both divine decree and human responsibility; humans choose and act, and Allah creates their actions.",
        references: "Surah Al-Kahf 18:29"
      },
      {
        question: "What is the meaning of 'La ilaha illallah'?",
        options: ["There is no creator except Allah", "There is no god truly worthy of worship except Allah", "Allah is the greatest", "Muhammad is the Messenger"],
        correctAnswer: "There is no god truly worthy of worship except Allah",
        explanation: "The Kalima of Tawhid negates all false objects of worship and affirms that only Allah deserves worship.",
        references: "Sahih Bukhari"
      },
      {
        question: "Which of the following is a condition for the acceptance of the Shahadah?",
        options: ["Simply uttering the words without understanding", "Knowledge, certainty, sincerity, truthfulness, love, submission, and acceptance", "Being born into a Muslim family only", "Performing Hajj immediately"],
        correctAnswer: "Knowledge, certainty, sincerity, truthfulness, love, submission, and acceptance",
        explanation: "The Shahadah has conditions including knowledge of its meaning, certainty, sincerity (ikhlas), truthfulness, love, submission, and acceptance.",
        references: "Classical works on Tawhid"
      },
      {
        question: "What is the belief of Ahlus-Sunnah regarding the Attributes of Allah such as His Hand, Face, and Rising over the Throne?",
        options: ["They are denied", "They are affirmed as real without asking how (bila kayf) and without likening to creation", "They are purely metaphorical", "They mean Allah has a body like humans"],
        correctAnswer: "They are affirmed as real without asking how (bila kayf) and without likening to creation",
        explanation: "Ahlus-Sunnah affirm the Attributes as they came in the texts, without tashbih, ta'til, or asking 'how'.",
        references: "Surah Taha 20:5; Surah Al-Fath 48:10"
      },
      {
        question: "What is the Throne of Allah called in Arabic?",
        options: ["Al-Kursi", "Al-Arsh", "Al-Lawh", "Al-Mizan"],
        correctAnswer: "Al-Arsh",
        explanation: "Al-Arsh is the Throne of Allah, the greatest of His creations, over which He rose in a manner befitting His Majesty.",
        references: "Surah Taha 20:5"
      },
      {
        question: "What is Al-Kursi?",
        options: ["The Throne", "The Footstool of Allah, which extends over the heavens and earth", "The Preserved Tablet", "The Scale of deeds"],
        correctAnswer: "The Footstool of Allah, which extends over the heavens and earth",
        explanation: "Al-Kursi is the Footstool; its greatness is indicated in Ayat al-Kursi, and it is distinct from the Throne (Al-Arsh).",
        references: "Surah Al-Baqarah 2:255"
      },
      {
        question: "What is the correct belief about the jinn?",
        options: ["They do not exist", "They are a creation of Allah with free will, made from smokeless fire, and some are believers and some are not", "They are the same as angels", "They cannot harm humans"],
        correctAnswer: "They are a creation of Allah with free will, made from smokeless fire, and some are believers and some are not",
        explanation: "Jinn are real beings created from fire, possess free will, and will also be judged on the Day of Resurrection.",
        references: "Surah Al-Jinn 72:1-15"
      },
      {
        question: "What is the greatest sin in Islam?",
        options: ["Murder", "Shirk (associating partners with Allah)", "Lying", "Stealing"],
        correctAnswer: "Shirk (associating partners with Allah)",
        explanation: "Shirk is the greatest sin because it violates the sole right of Allah to be worshipped, and Allah does not forgive it if one dies upon it without repentance.",
        references: "Surah An-Nisa 4:48"
      },
      {
        question: "What is the term for the belief that faith increases with obedience and decreases with disobedience?",
        options: ["Iman is static", "Iman increases and decreases", "Iman is only in the heart", "Iman is only actions"],
        correctAnswer: "Iman increases and decreases",
        explanation: "Ahlus-Sunnah hold that Iman consists of belief, speech, and action, and it increases with good deeds and decreases with sins.",
        references: "Surah Al-Anfal 8:2"
      },
      {
        question: "Who are the best of people after the Prophets according to Ahlus-Sunnah?",
        options: ["The scholars only", "The Companions of the Prophet ﷺ", "The later generations", "The rulers"],
        correctAnswer: "The Companions of the Prophet ﷺ",
        explanation: "The Sahabah are the best generation; after them come the Tabi'in and then the Atba' at-Tabi'in.",
        references: "Sahih Bukhari"
      },
      {
        question: "What is the correct belief about the return of Isa (Jesus), peace be upon him?",
        options: ["He will not return", "He will return near the end of time, kill the Dajjal, and rule with justice", "He already returned", "He will return only as a spirit"],
        correctAnswer: "He will return near the end of time, kill the Dajjal, and rule with justice",
        explanation: "Authentic hadiths confirm that Prophet Isa (AS) will descend near the end of time, break the cross, kill the swine, and defeat the Dajjal.",
        references: "Sahih Bukhari & Muslim"
      }
    ],
    advanced: [
      {
        question: "What is the precise meaning of Tawhid al-Asma wa as-Sifat according to Ahlus-Sunnah?",
        options: ["Affirming Allah's Names and Attributes exactly as they appear in the texts, without tashbih, ta'til, takyif, or tahrif", "Interpreting all Attributes metaphorically", "Denying Attributes that seem anthropomorphic", "Affirming Attributes while likening them to creation"],
        correctAnswer: "Affirming Allah's Names and Attributes exactly as they appear in the texts, without tashbih, ta'til, takyif, or tahrif",
        explanation: "The methodology of Ahlus-Sunnah is to affirm what Allah and His Messenger affirmed, negate what they negated, and remain silent where the texts are silent — without distortion, denial, asking how, or likening.",
        references: "Surah Ash-Shura 42:11; works of Ibn Taymiyyah"
      },
      {
        question: "What is the difference between the Will of Allah (Al-Iradah) that is Kawniyyah and Shar'iyyah?",
        options: ["There is no difference", "Kawniyyah is the universal creative will that always occurs; Shar'iyyah is the legislative will that Allah loves but may not occur if humans disobey", "Both always occur", "Shar'iyyah is only for Prophets"],
        correctAnswer: "Kawniyyah is the universal creative will that always occurs; Shar'iyyah is the legislative will that Allah loves but may not occur if humans disobey",
        explanation: "Allah's Kawni (universal) will encompasses everything that happens. His Shar'i (legislative) will is what He commands and loves; humans may choose to obey or disobey it.",
        references: "Classical Aqeedah explanations of Qadr"
      },
      {
        question: "What is the ruling on one who denies any of the six pillars of Iman?",
        options: ["He is a sinner but still a Muslim", "He has left the fold of Islam (committed kufr)", "He only needs to repent privately", "It depends on the scholar's opinion only"],
        correctAnswer: "He has left the fold of Islam (committed kufr)",
        explanation: "Denial of any of the six pillars of Iman constitutes major disbelief (kufr akbar) that expels a person from Islam.",
        references: "Consensus of Ahlus-Sunnah"
      },
      {
        question: "What is the correct understanding of Allah's Istiwa (rising) over the Throne?",
        options: ["It means Allah is sitting like a human", "It is a real attribute of Allah in a manner befitting His Majesty, without asking how", "It means Allah took control metaphorically", "It is denied entirely"],
        correctAnswer: "It is a real attribute of Allah in a manner befitting His Majesty, without asking how",
        explanation: "Ahlus-Sunnah affirm Allah's Istiwa over the Throne as mentioned in seven places in the Quran, without likening it to creation or denying it.",
        references: "Surah Taha 20:5"
      },
      {
        question: "What is the meaning of Allah's Ma'iyyah (being with His creation)?",
        options: ["Allah is physically mixed with creation", "Allah is with His creation by His knowledge, hearing, seeing, and power — a general and specific nearness", "Allah is only in the heavens", "Allah is everywhere in His Essence"],
        correctAnswer: "Allah is with His creation by His knowledge, hearing, seeing, and power — a general and specific nearness",
        explanation: "Ma'iyyah is of two types: general (with all creation by knowledge and power) and specific (with the believers by support and protection). It does not mean mixing of essences.",
        references: "Surah Al-Hadid 57:4; Surah Al-Mujadilah 58:7"
      },
      {
        question: "What is the belief regarding the Speech of Allah (Kalamullah)?",
        options: ["It is created", "It is an eternal Attribute of Allah; He speaks when He wills with letters and sound as befitting Him", "It is only meanings without words", "It is limited to the Quran only"],
        correctAnswer: "It is an eternal Attribute of Allah; He speaks when He wills with letters and sound as befitting Him",
        explanation: "Ahlus-Sunnah affirm that Allah speaks with a real Speech that is uncreated; the Quran is part of His Speech revealed to the Prophet ﷺ.",
        references: "Surah At-Tawbah 9:6; works of Ahlus-Sunnah"
      },
      {
        question: "What is the status of one who commits major sins according to Ahlus-Sunnah?",
        options: ["He is a complete kafir", "He is a Muslim with deficient Iman; under Allah's will — He may forgive or punish him", "He is permanently in Hell", "He is equal to the Prophets"],
        correctAnswer: "He is a Muslim with deficient Iman; under Allah's will — He may forgive or punish him",
        explanation: "Ahlus-Sunnah do not declare the major sinner a kafir; he is a believer with weak faith and is subject to Allah's will in the Hereafter.",
        references: "Surah An-Nisa 4:48 (exception for shirk); classical creeds"
      },
      {
        question: "What is the correct position on the Companions who fought each other (e.g., the events of the Fitnah)?",
        options: ["All of them were wrong", "We withhold from judging them, love them all, and believe they acted on ijtihad; the wrongdoer is forgiven", "Only one side was completely right and the other is cursed", "We must take sides and criticize openly"],
        correctAnswer: "We withhold from judging them, love them all, and believe they acted on ijtihad; the wrongdoer is forgiven",
        explanation: "Ahlus-Sunnah love all Sahabah, refrain from delving into their disputes, and hold that those who erred did so based on sincere ijtihad and are forgiven.",
        references: "Surah Al-Hashr 59:10; classical creeds"
      },
      {
        question: "What is the belief about the Mahdi according to Ahlus-Sunnah?",
        options: ["He is a mythical figure", "A righteous man from the descendants of the Prophet ﷺ will appear near the end of time and fill the earth with justice", "He has already appeared", "He is the same as Isa (AS)"],
        correctAnswer: "A righteous man from the descendants of the Prophet ﷺ will appear near the end of time and fill the earth with justice",
        explanation: "Authentic hadiths establish the coming of the Mahdi, a leader from the family of the Prophet ﷺ who will rule with justice before the descent of Isa (AS).",
        references: "Sunan Abu Dawud; Musnad Ahmad"
      },
      {
        question: "What is the correct belief about the Dajjal (False Messiah)?",
        options: ["He is a symbol only", "A real one-eyed man will appear as a major trial near the end of time and will be killed by Isa (AS)", "He already appeared in history", "He is the same as the Mahdi"],
        correctAnswer: "A real one-eyed man will appear as a major trial near the end of time and will be killed by Isa (AS)",
        explanation: "The Dajjal is a real individual who will claim divinity, perform false miracles, and be a tremendous fitnah; Isa (AS) will kill him.",
        references: "Sahih Muslim"
      },
      {
        question: "What is the ruling on seeking help (istighathah) from the dead?",
        options: ["It is recommended", "It is major shirk because it directs an act of worship to other than Allah", "It is permissible if the person was a saint", "It is only minor shirk"],
        correctAnswer: "It is major shirk because it directs an act of worship to other than Allah",
        explanation: "Calling upon the dead for help, relief, or intercession in matters only Allah can do is major shirk that nullifies Tawhid.",
        references: "Surah Al-Fatihah 1:5; Surah Al-Jinn 72:18"
      },
      {
        question: "What is the difference between Tawassul that is permissible and that which is not?",
        options: ["All Tawassul is forbidden", "Permissible Tawassul is through one's own good deeds, Allah's Names, or the living; forbidden is calling upon the dead or using them as intermediaries in worship", "Only Tawassul through the Prophet ﷺ is allowed after his death by calling him", "Tawassul has no rules"],
        correctAnswer: "Permissible Tawassul is through one's own good deeds, Allah's Names, or the living; forbidden is calling upon the dead or using them as intermediaries in worship",
        explanation: "Permissible means of nearness include asking Allah by His Names, by one's righteous deeds, or requesting dua from a living righteous person. Calling upon the deceased is shirk.",
        references: "Surah Al-Ma'idah 5:35; classical fatwas"
      },
      {
        question: "What is the belief of Ahlus-Sunnah regarding the punishment and bliss in the grave?",
        options: ["It is only metaphorical", "It is real for both the body and soul; the believer experiences bliss and the disbeliever or major sinner experiences punishment", "Only the soul is affected", "There is no experience in the grave"],
        correctAnswer: "It is real for both the body and soul; the believer experiences bliss and the disbeliever or major sinner experiences punishment",
        explanation: "Authentic hadiths establish that the grave is either a garden from the gardens of Paradise or a pit from the pits of Hellfire.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the correct understanding of Allah's Nuzul (descent) to the lowest heaven in the last third of the night?",
        options: ["It is metaphorical for His mercy", "It is a real descent befitting His Majesty, without likening to creation", "It means Allah leaves the Throne", "It is denied"],
        correctAnswer: "It is a real descent befitting His Majesty, without likening to creation",
        explanation: "Ahlus-Sunnah affirm the Nuzul as reported in the authentic hadiths, in a manner that befits Allah, without takyif or tashbih.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the status of the one who mocks or reviles Allah, His Messenger, or the religion?",
        options: ["He is a sinner but remains Muslim", "He has committed major kufr and left Islam", "He only needs to seek forgiveness", "It depends on intention only"],
        correctAnswer: "He has committed major kufr and left Islam",
        explanation: "Reviling Allah, His Messenger, or Islam is major disbelief that expels a person from the religion, whether done seriously or in jest.",
        references: "Surah At-Tawbah 9:65-66"
      },
      {
        question: "What is the belief about the creation of the actions of the servants?",
        options: ["Humans create their own actions independently", "Allah creates the actions of the servants while they perform them by their will and choice", "Actions are neither created nor real", "Only good actions are created by Allah"],
        correctAnswer: "Allah creates the actions of the servants while they perform them by their will and choice",
        explanation: "Ahlus-Sunnah hold that Allah is the Creator of everything, including the actions of humans, while humans are the doers who choose and are held accountable.",
        references: "Surah As-Saffat 37:96"
      },
      {
        question: "What is the correct position on the Names of Allah that are mentioned in the Quran and Sunnah?",
        options: ["We may invent new Names based on reason", "We affirm only those Names established in the Quran and authentic Sunnah", "All beautiful words can be used as Names", "Names are limited to ninety-nine only"],
        correctAnswer: "We affirm only those Names established in the Quran and authentic Sunnah",
        explanation: "The Names of Allah are tawqifiyyah (based solely on revelation); we do not invent Names that are not reported in the texts.",
        references: "Classical works on Asma wa Sifat"
      },
      {
        question: "What is the meaning of the phrase 'bila kayf' in the methodology of Ahlus-Sunnah?",
        options: ["Without any meaning", "Without asking 'how' and without likening to creation", "Without affirming the Attribute", "Without using the Arabic language"],
        correctAnswer: "Without asking 'how' and without likening to creation",
        explanation: "Bila kayf means we affirm the Attribute as real while refraining from asking about its modality, because the 'how' is known only to Allah.",
        references: "Statements of the Salaf (e.g., Imam Malik on Istiwa)"
      },
      {
        question: "What is the ruling on denying the punishment of the grave?",
        options: ["It is a minor difference of opinion", "It is a serious deviation; authentic hadiths establish it, and denying them is rejected", "It is acceptable in modern times", "Only the Quran mentions it"],
        correctAnswer: "It is a serious deviation; authentic hadiths establish it, and denying them is rejected",
        explanation: "The punishment and bliss of the grave are established by mutawatir (mass-transmitted) meaning in the Sunnah; denying them is a deviation from the creed of Ahlus-Sunnah.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the correct belief about the intercession of the angels, Prophets, and righteous?",
        options: ["There is no intercession at all", "Intercession is real and occurs only by Allah's permission and for those with whom He is pleased", "Anyone can intercede for anyone", "Only the Prophet ﷺ intercedes"],
        correctAnswer: "Intercession is real and occurs only by Allah's permission and for those with whom He is pleased",
        explanation: "Allah grants permission for intercession to whom He wills; the greatest intercession is that of the Prophet ﷺ, followed by others among the angels, Prophets, and righteous.",
        references: "Surah Al-Baqarah 2:255; Sahih Bukhari"
      },
      {
        question: "What is the position of Ahlus-Sunnah on the issue of the Quran being created or uncreated?",
        options: ["The Quran is created", "The Quran is the uncreated Speech of Allah", "The letters are created but the meaning is not", "It is a matter of indifference"],
        correctAnswer: "The Quran is the uncreated Speech of Allah",
        explanation: "Ahlus-Sunnah unanimously hold that the Quran is the eternal, uncreated Kalam of Allah. The view that it is created is a major innovation (bid'ah).",
        references: "Consensus of the Salaf"
      },
      {
        question: "What is the correct understanding of the hadith 'Whoever dies while knowing that there is no god but Allah will enter Paradise'?",
        options: ["Simply uttering the words is enough regardless of action or belief", "It means the one who dies upon pure Tawhid, free from major shirk, will eventually enter Paradise (even if after purification)", "It means no deeds are required at all", "It applies only to the Companions"],
        correctAnswer: "It means the one who dies upon pure Tawhid, free from major shirk, will eventually enter Paradise (even if after purification)",
        explanation: "The hadith affirms that the one who dies upon Tawhid will enter Paradise, though major sinners among them may first undergo purification in Hellfire if Allah wills.",
        references: "Sahih Muslim"
      },
      {
        question: "What is the belief regarding the Ru'yah (seeing) of Allah in this world?",
        options: ["It is possible for anyone", "No one can see Allah in this world with their eyes; the believers will see Him only in the Hereafter", "The Prophet ﷺ saw Allah with his eyes on earth", "It is metaphorical only"],
        correctAnswer: "No one can see Allah in this world with their eyes; the believers will see Him only in the Hereafter",
        explanation: "Ahlus-Sunnah hold that Allah cannot be seen in this worldly life; the vision is a special blessing reserved for the believers in Paradise.",
        references: "Surah Al-An'am 6:103; Sahih Muslim"
      },
      {
        question: "What is the correct creed regarding the parents of the Prophet ﷺ?",
        options: ["They were believers", "According to authentic reports, they died upon the religion of their people (pre-Islamic); the matter is left to Allah", "They are guaranteed Paradise", "They were Prophets"],
        correctAnswer: "According to authentic reports, they died upon the religion of their people (pre-Islamic); the matter is left to Allah",
        explanation: "Authentic hadiths indicate that the parents of the Prophet ﷺ died in the pre-Islamic period of ignorance; their ultimate fate is with Allah.",
        references: "Sahih Muslim"
      },
      {
        question: "What is the ruling on one who claims that the companions of the Prophet ﷺ apostatized after his death (except a few)?",
        options: ["It is a valid historical opinion", "It is a major deviation and a form of rejection of the Quran and Sunnah that praise the Companions", "It is a minor issue", "It is accepted by some schools"],
        correctAnswer: "It is a major deviation and a form of rejection of the Quran and Sunnah that praise the Companions",
        explanation: "Claiming mass apostasy of the Sahabah contradicts clear Quranic praise and the consensus of Ahlus-Sunnah; it is a hallmark of certain deviant sects.",
        references: "Surah At-Tawbah 9:100; Surah Al-Fath 48:29"
      },
      {
        question: "What is the correct belief about the miracles (mu'jizat) of the Prophets?",
        options: ["They are myths", "They are real acts that Allah caused to occur at the hands of His Prophets as proof of their truthfulness", "They were performed by the Prophets independently", "Only Muhammad ﷺ had miracles"],
        correctAnswer: "They are real acts that Allah caused to occur at the hands of His Prophets as proof of their truthfulness",
        explanation: "Miracles are extraordinary events that Allah allows His Prophets to display as evidence that they are truly sent by Him.",
        references: "Quranic accounts of the Prophets"
      },
      {
        question: "What is the belief of Ahlus-Sunnah concerning the Scale (Mizan) on the Day of Judgment?",
        options: ["It is only metaphorical for justice", "It is a real Scale with two pans that will weigh the deeds of the servants", "Only good deeds are weighed", "It is not mentioned in authentic texts"],
        correctAnswer: "It is a real Scale with two pans that will weigh the deeds of the servants",
        explanation: "Ahlus-Sunnah affirm the reality of the Mizan as described in the Quran and authentic Sunnah; deeds will be weighed with perfect precision.",
        references: "Surah Al-A'raf 7:8-9"
      },
      {
        question: "What is the correct understanding of the hadith about the seventy-three sects?",
        options: ["All sects are equal", "The saved sect is the one that follows the Quran, Sunnah, and the way of the Companions (Ahlus-Sunnah wal-Jama'ah)", "Only one sect exists today", "The hadith is weak"],
        correctAnswer: "The saved sect is the one that follows the Quran, Sunnah, and the way of the Companions (Ahlus-Sunnah wal-Jama'ah)",
        explanation: "The Prophet ﷺ informed that the ummah would split into seventy-three sects; the saved one is that which is upon what he and his Companions were upon.",
        references: "Sunan Abu Dawud; Tirmidhi"
      },
      {
        question: "What is the position of Ahlus-Sunnah on the Attributes of Allah that are mentioned in the dual form (e.g., Hands)?",
        options: ["They are denied", "They are affirmed as real dual Attributes befitting Allah, without likening to creation", "They mean power only", "They are metaphorical for favor"],
        correctAnswer: "They are affirmed as real dual Attributes befitting Allah, without likening to creation",
        explanation: "When the texts mention Allah's two Hands, Ahlus-Sunnah affirm them as real Attributes without tashbih or ta'til.",
        references: "Surah Sad 38:75; Surah Al-Ma'idah 5:64"
      },
      {
        question: "What is the correct creed regarding the Night Journey and Ascension (Isra and Mi'raj)?",
        options: ["It was only a dream", "It was a real, physical journey of the Prophet ﷺ by body and soul from Makkah to Jerusalem and then to the heavens", "It was only spiritual", "It is a later fabrication"],
        correctAnswer: "It was a real, physical journey of the Prophet ﷺ by body and soul from Makkah to Jerusalem and then to the heavens",
        explanation: "Ahlus-Sunnah affirm that the Isra and Mi'raj occurred with the Prophet's body and soul while he was awake, as a great miracle.",
        references: "Surah Al-Isra 17:1; Sahih Bukhari & Muslim"
      },
      {
        question: "What is the ruling on one who believes that the awliya (saints) have independent control over the universe?",
        options: ["It is a high level of faith", "It is major shirk because control of the universe belongs only to Allah", "It is a minor innovation", "It is acceptable in Sufism"],
        correctAnswer: "It is major shirk because control of the universe belongs only to Allah",
        explanation: "Believing that any created being has independent power to control benefit, harm, or the universe is a form of major shirk in Rububiyyah.",
        references: "Surah Al-Fatihah 1:2; Surah Yunus 10:107"
      },
      {
        question: "What is the correct belief about the fate of the children of disbelievers who die before the age of puberty?",
        options: ["They are definitely in Hell", "Their fate is left to the knowledge and justice of Allah; some reports indicate they are tested", "They are definitely in Paradise", "They cease to exist"],
        correctAnswer: "Their fate is left to the knowledge and justice of Allah; some reports indicate they are tested",
        explanation: "The most cautious position of Ahlus-Sunnah is to entrust their affair to Allah; authentic reports mention a test for them on the Day of Judgment.",
        references: "Sahih Bukhari; classical discussions"
      },
      {
        question: "What is the meaning of the statement of Imam Malik when asked about Istiwa?",
        options: ["Istiwa is unknown", "Istiwa is known, its 'how' is unknown, belief in it is obligatory, and asking about it is innovation", "Istiwa is metaphorical", "Istiwa is denied"],
        correctAnswer: "Istiwa is known, its 'how' is unknown, belief in it is obligatory, and asking about it is innovation",
        explanation: "Imam Malik's famous reply encapsulates the methodology of the Salaf: affirm the Attribute, consign the modality to Allah, and avoid speculative questioning.",
        references: "Reported in classical Aqeedah works"
      },
      {
        question: "What is the correct position on the issue of whether Allah is above His creation?",
        options: ["Allah is everywhere in His Essence", "Allah is above His creation, risen over the Throne, distinct from His creation", "Allah is inside everything", "Direction does not apply to Allah at all"],
        correctAnswer: "Allah is above His creation, risen over the Throne, distinct from His creation",
        explanation: "Ahlus-Sunnah affirm that Allah is above the heavens, risen over the Throne, separate from His creation, as indicated by numerous Quranic verses and hadiths.",
        references: "Surah Al-Mulk 67:16-17; Surah Taha 20:5"
      },
      {
        question: "What is the belief regarding the finality of Prophethood?",
        options: ["Prophets may still come after Muhammad ﷺ", "Muhammad ﷺ is the final Prophet and Messenger; anyone claiming prophethood after him is a liar and kafir", "Only Messengers have ended, not Prophets", "The door of Prophethood is open for reformers"],
        correctAnswer: "Muhammad ﷺ is the final Prophet and Messenger; anyone claiming prophethood after him is a liar and kafir",
        explanation: "The Quran and authentic Sunnah establish that Muhammad ﷺ is the Seal of the Prophets; belief in any prophet after him is major disbelief.",
        references: "Surah Al-Ahzab 33:40"
      },
      {
        question: "What is the comprehensive definition of Iman according to Ahlus-Sunnah?",
        options: ["Belief in the heart only", "Belief in the heart, speech of the tongue, and actions of the limbs; it increases and decreases", "Actions only", "Speech only"],
        correctAnswer: "Belief in the heart, speech of the tongue, and actions of the limbs; it increases and decreases",
        explanation: "Iman according to Ahlus-Sunnah is statement and action: belief of the heart, affirmation of the tongue, and deeds of the limbs, and it fluctuates with obedience and disobedience.",
        references: "Surah Al-Anfal 8:2; consensus of the Salaf"
      }
    ]
  }
}

export default aqeedahCategory
