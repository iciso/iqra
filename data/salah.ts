import type { QuizCategory } from "@/types/quiz"

const salahCategory: QuizCategory = {
  id: "salah",
  title: "Salah",
  description: "The second pillar of Islam: Obligatory prayers and their performance",
  icon: "ArrowUp",
  levels: {
    easy: [
      {
        question: "What is the Arabic term for the five daily prayers in Islam?",
        options: ["Zakat", "Sawm", "Salah", "Hajj"],
        correctAnswer: "Salah",
        explanation: "Salah refers to the ritual prayer, the second pillar of Islam, performed five times a day.",
      },
      {
        question: "How many times a day is Salah obligatory for Muslims?",
        options: ["Three", "Four", "Five", "Seven"],
        correctAnswer: "Five",
        explanation: "Salah is obligatory five times daily: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
      },
      {
        question: "What is the first obligatory Salah of the day?",
        options: ["Dhuhr", "Fajr", "Maghrib", "Isha"],
        correctAnswer: "Fajr",
        explanation: "Fajr is the dawn prayer, the first of the five daily obligatory prayers.",
      },
      {
        question: "In which direction do Muslims face while performing Salah?",
        options: ["East", "North", "Qiblah", "Mecca"],
        correctAnswer: "Qiblah",
        explanation: "The Qiblah is the direction towards the Ka'bah in Mecca, Saudi Arabia.",
      },
      {
        question: "What is the prerequisite for performing Salah, involving washing body parts?",
        options: ["Ghusl", "Tayammum", "Wudu", "Istinja"],
        correctAnswer: "Wudu",
        explanation: "Wudu is the ritual ablution that purifies specific body parts before prayer.",
      },
      {
        question: "How many Rak'ahs are in the obligatory Fajr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Two",
        explanation: "Fajr consists of two Rak'ahs of obligatory prayer.",
      },
      {
        question: "What does the term 'Rak'ah' mean in Salah?",
        options: ["A unit of prayer", "A prostration", "A recitation", "A bow"],
        correctAnswer: "A unit of prayer",
        explanation: "A Rak'ah is a complete unit of prayer consisting of standing, bowing, prostrating, etc.",
      },
      {
        question: "Which pillar of Islam is Salah considered?",
        options: ["First", "Second", "Third", "Fifth"],
        correctAnswer: "Second",
        explanation: "Salah is the second pillar of Islam after the Shahadah.",
      },
      {
        question: "What is the punishment for missing an obligatory Salah intentionally?",
        options: ["Minor sin", "Major sin", "No punishment", "Only advice"],
        correctAnswer: "Major sin",
        explanation: "Intentionally missing an obligatory Salah is considered a major sin in Islam.",
      },
      {
        question: "What is the reward for performing Salah on time?",
        options: ["Forgiveness of sins", "Entry to Paradise", "Both A and B", "Nothing specific"],
        correctAnswer: "Both A and B",
        explanation: "Salah on time brings forgiveness of sins and is a means to enter Paradise.",
      },
      {
        question: "How many Rak'ahs are in the obligatory Dhuhr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Dhuhr, the noon prayer, consists of four obligatory Rak'ahs.",
      },
      {
        question: "What is the name of the prayer performed just after sunset?",
        options: ["Asr", "Maghrib", "Isha", "Fajr"],
        correctAnswer: "Maghrib",
        explanation: "Maghrib is the sunset prayer, consisting of three obligatory Rak'ahs.",
      },
      {
        question: "Can women lead men in congregational Salah?",
        options: ["Yes, always", "No", "Only in special cases", "Only if no men present"],
        correctAnswer: "No",
        explanation: "In orthodox fiqh, women do not lead men in mixed congregational prayers.",
      },
      {
        question: "What is 'Adhan' in the context of Salah?",
        options: ["The call to prayer", "The ablution", "The prostration", "The sermon"],
        correctAnswer: "The call to prayer",
        explanation: "Adhan is the Islamic call to prayer announced from the mosque.",
      },
      {
        question: "How many Rak'ahs are in the obligatory Asr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Asr, the afternoon prayer, consists of four obligatory Rak'ahs.",
      },
      {
        question: "What is the purpose of Salah according to the Quran?",
        options: ["To seek wealth", "To remember Allah", "To socialize", "To exercise"],
        correctAnswer: "To remember Allah",
        explanation: "The Quran states Salah is to remember Allah and establish prayer.",
      },
      {
        question: "What is 'Iqamah'?",
        options: ["The second call to prayer", "The first call", "The ablution call", "The end of prayer"],
        correctAnswer: "The second call to prayer",
        explanation: "Iqamah is the call immediately before starting congregational prayer.",
      },
      {
        question: "How many Rak'ahs are in the obligatory Isha prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Isha, the night prayer, consists of four obligatory Rak'ahs.",
      },
      {
        question: "What invalidates Wudu?",
        options: ["Eating", "Sleeping deeply", "Walking", "Talking"],
        correctAnswer: "Sleeping deeply",
        explanation: "Deep sleep invalidates Wudu, requiring renewal before Salah.",
      },
      {
        question: "What is 'Qunut' in Salah?",
        options: ["A supplication in Witr prayer", "A bow", "A prostration", "A recitation"],
        correctAnswer: "A supplication in Witr prayer",
        explanation: "Qunut is a special supplication recited in the Witr prayer.",
      },
      {
        question: "Is Salah obligatory on a traveler?",
        options: ["Yes, full", "Shortened", "Exempt", "Doubled"],
        correctAnswer: "Shortened",
        explanation: "Travelers shorten four-Rak'ah prayers to two Rak'ahs.",
      },
      {
        question: "What is the minimum number of people needed for congregational Salah reward?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two",
        explanation: "Congregational prayer with at least one other person multiplies the reward.",
      },
      {
        question: "What is 'Sujud' in Salah?",
        options: ["Standing", "Bowing", "Prostration", "Sitting"],
        correctAnswer: "Prostration",
        explanation: "Sujud is the prostration, a key pillar of Salah performed twice per Rak'ah.",
      },
      {
        question: "Can one pray Salah without Wudu if water is unavailable?",
        options: ["No", "Yes, with Tayammum", "Only at home", "Never"],
        correctAnswer: "Yes, with Tayammum",
        explanation: "Tayammum (dry ablution) is performed using clean earth when water is unavailable.",
      },
      {
        question: "What is the reward for the first row in congregational Salah?",
        options: ["Standard reward", "Highest reward", "No reward", "Half reward"],
        correctAnswer: "Highest reward",
        explanation: "The first row in congregational prayer receives the highest reward.",
      },
      {
        question: "How many pillars (Arkan) are there in Salah?",
        options: ["Five", "Six", "Seven", "Eight"],
        correctAnswer: "Sixteen",
        explanation: "Salah has fourteen major pillars according to most scholars, but varies slightly.",
      },
      {
        question: "What is 'Ruku' in Salah?",
        options: ["Prostration", "Bowing", "Standing", "Sitting"],
        correctAnswer: "Bowing",
        explanation: "Ruku is the bowing position in prayer, glorifying Allah.",
      },
      {
        question: "Is Jumu'ah prayer obligatory for women?",
        options: ["Yes", "No, but recommended", "Only if able", "Exempt"],
        correctAnswer: "No, but recommended",
        explanation: "Jumu'ah is obligatory for men but recommended for women.",
      },
      {
        question: "What is the rationale for Salah in Hadith?",
        options: ["To purify the soul", "To gain wealth", "To fight enemies", "To travel"],
        correctAnswer: "To purify the soul",
        explanation: "A Hadith states Salah prevents indecency and evil, purifying the soul.",
      },
      {
        question: "How many Rak'ahs in obligatory Maghrib?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three",
        explanation: "Maghrib consists of three obligatory Rak'ahs.",
      },
    ],
    advanced: [
      {
        question: "According to Hanafi fiqh, what is the ruling on delaying Salah without excuse?",
        options: ["Makruh", "Haram", "Mubah", "Wajib"],
        correctAnswer: "Haram",
        explanation: "In Hanafi school, delaying obligatory Salah beyond its time without valid excuse is haram.",
      },
      {
        question: "What is the Hadith regarding the reward of one Rak'ah in Fajr?",
        options: ["Equals one night fasting", "Equals 27 Rak'ahs", "Equals Hajj", "Equals charity"],
        correctAnswer: "Equals 27 Rak'ahs",
        explanation: "A Hadith states one Rak'ah of Fajr in congregation equals 27 Rak'ahs otherwise.",
      },
      {
        question: "In Shafi'i fiqh, how many essential pillars (Arkan) does Salah have?",
        options: ["12", "13", "14", "17"],
        correctAnswer: "17",
        explanation: "Shafi'i school lists 17 essential pillars for the validity of Salah.",
      },
      {
        question: "What is 'Masjid al-Haram' special ruling for Salah?",
        options: ["1000 times reward", "500 times", "27 times", "10 times"],
        correctAnswer: "1000 times",
        explanation: "Prayer in Masjid al-Haram multiplies reward by 100,000 times according to Hadith.",
      },
      {
        question: "What invalidates Salah according to most fuqaha?",
        options: ["Talking intentionally", "Coughing", "Yawning", "Moving slightly"],
        correctAnswer: "Talking intentionally",
        explanation: "Intentional speech invalidates Salah, as it breaks concentration and recitation.",
      },
      {
        question: "What is the punishment for abandoning Salah in Hadith?",
        options: ["Hypocrite", "Out of Islam", "Minor sin only", "No punishment"],
        correctAnswer: "Out of Islam",
        explanation: "A Hadith warns that abandoning prayer takes one out of the fold of Islam.",
      },
      {
        question: "In Maliki fiqh, is touching opposite gender invalidate Wudu?",
        options: ["Yes, always", "No, unless desire", "Only if lust", "Never"],
        correctAnswer: "No, unless desire",
        explanation: "Maliki school holds that touching opposite gender invalidates Wudu only with desire.",
      },
      {
        question: "What is 'Salat al-Duha'?",
        options: ["Fard prayer", "Sunnah Mu'akkadah", "Nawafil voluntary", "Witr"],
        correctAnswer: "Nawafil voluntary",
        explanation: "Salat al-Duha is a voluntary prayer performed in the forenoon, recommended in Sunnah.",
      },
      {
        question: "According to a Hadith, what is the key to Paradise?",
        options: ["Fasting", "Charity", "Salah", "Shahadah"],
        correctAnswer: "Salah",
        explanation: "The Prophet said the first thing judged on Judgment Day is Salah; it is the key to Paradise.",
      },
      {
        question: "In Hanbali fiqh, what is the ruling on praying behind a prostrating imam?",
        options: ["Invalid", "Valid if unavoidable", "Always valid", "Makruh"],
        correctAnswer: "Valid if unavoidable",
        explanation: "Hanbali allows following an imam in prostration if no choice, but prefers correction.",
      },
      {
        question: "What is 'Istisqa' prayer?",
        options: ["For rain", "For forgiveness", "For travel", "For illness"],
        correctAnswer: "For rain",
        explanation: "Salat al-Istisqa is a special congregational prayer seeking Allah's mercy for rain.",
      },
      {
        question: "How many Rak'ahs is Witr prayer according to Ahl al-Sunnah?",
        options: ["One only", "Three", "Eleven", "Thirteen"],
        correctAnswer: "Three",
        explanation: "Witr is typically three Rak'ahs with Qunut in the third, odd-numbered voluntary prayer.",
      },
      {
        question: "What is the fiqh ruling on combining Dhuhr and Asr?",
        options: ["Never allowed", "Only in travel", "In rain or hardship", "Always"],
        correctAnswer: "In rain or hardship",
        explanation: "Combining prayers is allowed in travel, rain, or excused hardship per most schools.",
      },
      {
        question: "In a Hadith, what did the Prophet say about Salah and Zina?",
        options: ["They are similar in prevention", "Salah causes Zina", "No relation", "Zina prevents Salah"],
        correctAnswer: "They are similar in prevention",
        explanation: "Just as Zina is prevented by veiling, Salah prevents immorality per a Hadith.",
      },
      {
        question: "What is 'Tashahhud' in Salah?",
        options: ["Testimony of faith in sitting", "Recitation of Fatiha", "Takbir", "Tasbih"],
        correctAnswer: "Testimony of faith in sitting",
        explanation: "Tashahhud is the sitting testimony reciting Shahadah and salutations on Prophet.",
      },
      {
        question: "According to Shafi'i, is covering ankles mandatory for men in Salah?",
        options: ["Yes", "No, recommended", "Only in congregation", "Never"],
        correctAnswer: "Yes",
        explanation: "Shafi'i requires men to cover from navel to knees, including ankles, for validity.",
      },
      {
        question: "What is the reward for 12 Rak'ahs of Sunnah daily per Hadith?",
        options: ["A house in Paradise", "Forgiveness", "10 years worship", "1000 good deeds"],
        correctAnswer: "A house in Paradise",
        explanation: "The Prophet promised a house in Paradise for consistent 12 voluntary Rak'ahs daily.",
      },
      {
        question: "In Hanafi fiqh, what breaks Wudu besides urine?",
        options: ["Laughter", "Blood flow", "Eating dates", "Walking"],
        correctAnswer: "Blood flow",
        explanation: "Hanafi holds that flowing blood or pus from body invalidates Wudu.",
      },
      {
        question: "What is 'Salat al-Tarawih'?",
        options: ["Ramadan night prayer", "Funeral prayer", "Eclipse prayer", "Fear prayer"],
        correctAnswer: "Ramadan night prayer",
        explanation: "Tarawih are voluntary night prayers performed in congregation during Ramadan.",
      },
      {
        question: "What is the ruling on animal skin rug for Salah?",
        options: ["Invalid unless tanned", "Always valid", "Only wool", "Never"],
        correctAnswer: "Invalid unless tanned",
        explanation: "Praying on untanned animal skin is invalid per Hadith prohibition.",
      },
      {
        question: "In a Hadith, how is Salah described as a light?",
        options: ["Believer's face light", "Prayer light in heart", "Path light", "All of above"],
        correctAnswer: "All of above",
        explanation: "Hadiths describe Salah as light for the believer's face, heart, and path to Paradise.",
      },
      {
        question: "What is 'Salat al-Kusuf'?",
        options: ["Eclipse prayer", "Rain prayer", "Victory prayer", "Illness prayer"],
        correctAnswer: "Eclipse prayer",
        explanation: "Salat al-Kusuf is a two-Rak'ah prayer performed during solar or lunar eclipses.",
      },
      {
        question: "According to Maliki, is intention verbal in Salah?",
        options: ["Yes", "No, in heart only", "Both", "Not needed"],
        correctAnswer: "No, in heart only",
        explanation: "Maliki school holds intention for Salah is in the heart, not verbalized.",
      },
      {
        question: "What is the fiqh on praying in a graveyard?",
        options: ["Prohibited", "Allowed silently", "Recommended", "Only funeral"],
        correctAnswer: "Prohibited",
        explanation: "Praying ritual Salah in graveyards is prohibited based on Hadith.",
      },
      {
        question: "In Hanbali fiqh, how many Tasbihs in Ruku and Sujud?",
        options: ["Three each", "Five each", "Seven in Sujud", "Ten total"],
        correctAnswer: "Three each",
        explanation: "Hanbali requires three 'Subhana Rabbiyal Adheem' in Ruku and 'Subhana Rabbiyal A'la' in Sujud.",
      },
      {
        question: "What Hadith mentions Salah as Mi'raj?",
        options: ["Night journey", "Daily ascension", "Prophet's miracle", "Believer's Mi'raj"],
        correctAnswer: "Believer's Mi'raj",
        explanation: "The Prophet called Salah the Mi'raj (ascension) for every believer.",
      },
      {
        question: "What is 'Qasr' prayer?",
        options: ["Shortened for travel", "Lengthened recitation", "Missed prayer", "Voluntary extra"],
        correctAnswer: "Shortened for travel",
        explanation: "Qasr is shortening four-Rak'ah fard to two during valid travel.",
      },
      {
        question: "What is the punishment for spying during Salah per Hadith?",
        options: ["Hypocrisy", "No reward", "Angels curse", "All above"],
        correctAnswer: "All above",
        explanation: "Hadith warns that looking around in prayer leads to hypocrisy and loss of reward.",
      },
      {
        question: "What is 'Salat al-Janaazah'?",
        options: ["Funeral prayer", "Congregational Friday", "Travel prayer", "Women's prayer"],
        correctAnswer: "Funeral prayer",
        explanation: "Janazah is the funeral prayer performed standing for the deceased.",
      },
      {
        question: "According to a Hadith, what equals 10 slaves freed for one Takbir?",
        options: ["In Salah", "In charity", "In fasting", "In Hajj"],
        correctAnswer: "In Salah",
        explanation: "Each Takbir in Salah frees a slave's equivalent reward per Hadith.",
      },
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!salahCategory.levels.intermediate) {
  salahCategory.levels.intermediate = [...salahCategory.levels.easy]
}

export default salahCategory
