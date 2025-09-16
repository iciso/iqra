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
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "How many times a day is Salah obligatory for Muslims?",
        options: ["Three", "Four", "Five", "Seven"],
        correctAnswer: "Five",
        explanation: "Salah is obligatory five times daily: Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        references: "Fiqh us-Sunnah: Volume 1, Page 77"
      },
      {
        question: "What is the first obligatory Salah of the day?",
        options: ["Dhuhr", "Fajr", "Maghrib", "Isha"],
        correctAnswer: "Fajr",
        explanation: "Fajr is the dawn prayer, the first of the five daily obligatory prayers.",
        references: "Fiqh us-Sunnah: Volume 1, Page 79"
      },
      {
        question: "In which direction do Muslims face while performing Salah?",
        options: ["East", "North", "Qiblah", "Mecca"],
        correctAnswer: "Qiblah",
        explanation: "The Qiblah is the direction towards the Ka'bah in Mecca, Saudi Arabia.",
        references: "Fiqh us-Sunnah: Volume 1, Page 89"
      },
      {
        question: "What is the prerequisite for performing Salah, involving washing body parts?",
        options: ["Ghusl", "Tayammum", "Wudu", "Istinja"],
        correctAnswer: "Wudu",
        explanation: "Wudu is the ritual ablution that purifies specific body parts before prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 21"
      },
      {
        question: "How many Rak'ahs are in the obligatory Fajr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Two",
        explanation: "Fajr consists of two Rak'ahs of obligatory prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
      {
        question: "What does the term 'Rak'ah' mean in Salah?",
        options: ["A unit of prayer", "A prostration", "A recitation", "A bow"],
        correctAnswer: "A unit of prayer",
        explanation: "A Rak'ah is a complete unit of prayer consisting of standing, bowing, prostrating, etc.",
        references: "Fiqh us-Sunnah: Volume 1, Page 95"
      },
      {
        question: "Which pillar of Islam is Salah considered?",
        options: ["First", "Second", "Third", "Fifth"],
        correctAnswer: "Second",
        explanation: "Salah is the second pillar of Islam after the Shahadah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "What is the punishment for missing an obligatory Salah intentionally?",
        options: ["Minor sin", "Major sin", "No punishment", "Only advice"],
        correctAnswer: "Major sin",
        explanation: "Intentionally missing an obligatory Salah is considered a major sin in Islam.",
        references: "Fiqh us-Sunnah: Volume 1, Page 83"
      },
      {
        question: "What is the reward for performing Salah on time?",
        options: ["Forgiveness of sins", "Entry to Paradise", "Both A and B", "Nothing specific"],
        correctAnswer: "Both A and B",
        explanation: "Salah on time brings forgiveness of sins and is a means to enter Paradise.",
        references: "Fiqh us-Sunnah: Volume 1, Page 85"
      },
      {
        question: "How many Rak'ahs are in the obligatory Dhuhr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Dhuhr, the noon prayer, consists of four obligatory Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
      {
        question: "What is the name of the prayer performed just after sunset?",
        options: ["Asr", "Maghrib", "Isha", "Fajr"],
        correctAnswer: "Maghrib",
        explanation: "Maghrib is the sunset prayer, consisting of three obligatory Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 79"
      },
      {
        question: "Can women lead men in congregational Salah?",
        options: ["Yes, always", "No", "Only in special cases", "Only if no men present"],
        correctAnswer: "No",
        explanation: "In orthodox fiqh, women do not lead men in mixed congregational prayers.",
        references: "Fiqh us-Sunnah: Volume 1, Page 121"
      },
      {
        question: "What is 'Adhan' in the context of Salah?",
        options: ["The call to prayer", "The ablution", "The prostration", "The sermon"],
        correctAnswer: "The call to prayer",
        explanation: "Adhan is the Islamic call to prayer announced from the mosque.",
        references: "Fiqh us-Sunnah: Volume 1, Page 151"
      },
      {
        question: "How many Rak'ahs are in the obligatory Asr prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Asr, the afternoon prayer, consists of four obligatory Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
      {
        question: "What is the purpose of Salah according to the Quran?",
        options: ["To seek wealth", "To remember Allah", "To socialize", "To exercise"],
        correctAnswer: "To remember Allah",
        explanation: "The Quran states Salah is to remember Allah and establish prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "What is 'Iqamah'?",
        options: ["The second call to prayer", "The first call", "The ablution call", "The end of prayer"],
        correctAnswer: "The second call to prayer",
        explanation: "Iqamah is the call immediately before starting congregational prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 155"
      },
      {
        question: "How many Rak'ahs are in the obligatory Isha prayer?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Four",
        explanation: "Isha, the night prayer, consists of four obligatory Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
      {
        question: "What invalidates Wudu?",
        options: ["Eating", "Sleeping deeply", "Walking", "Talking"],
        correctAnswer: "Sleeping deeply",
        explanation: "Deep sleep invalidates Wudu, requiring renewal before Salah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 35"
      },
      {
        question: "What is 'Qunut' in Salah?",
        options: ["A supplication in Witr prayer", "A bow", "A prostration", "A recitation"],
        correctAnswer: "A supplication in Witr prayer",
        explanation: "Qunut is a special supplication recited in the Witr prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 143"
      },
      {
        question: "Is Salah obligatory on a traveler?",
        options: ["Yes, full", "Shortened", "Exempt", "Doubled"],
        correctAnswer: "Shortened",
        explanation: "Travelers shorten four-Rak'ah prayers to two Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 169"
      },
      {
        question: "What is the minimum number of people needed for congregational Salah reward?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: "Two",
        explanation: "Congregational prayer with at least one other person multiplies the reward.",
        references: "Fiqh us-Sunnah: Volume 1, Page 117"
      },
      {
        question: "What is 'Sujud' in Salah?",
        options: ["Standing", "Bowing", "Prostration", "Sitting"],
        correctAnswer: "Prostration",
        explanation: "Sujud is the prostration, a key pillar of Salah performed twice per Rak'ah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 105"
      },
      {
        question: "Can one pray Salah without Wudu if water is unavailable?",
        options: ["No", "Yes, with Tayammum", "Only at home", "Never"],
        correctAnswer: "Yes, with Tayammum",
        explanation: "Tayammum (dry ablution) is performed using clean earth when water is unavailable.",
        references: "Fiqh us-Sunnah: Volume 1, Page 65"
      },
      {
        question: "What is the reward for the first row in congregational Salah?",
        options: ["Standard reward", "Highest reward", "No reward", "Half reward"],
        correctAnswer: "Highest reward",
        explanation: "The first row in congregational prayer receives the highest reward.",
        references: "Fiqh us-Sunnah: Volume 1, Page 119"
      },
      {
        question: "How many pillars (Arkan) are there in Salah?",
        options: ["Five", "Six", "Seven", "Eight"],
        correctAnswer: "Sixteen",
        explanation: "Salah has fourteen major pillars according to most scholars, but varies slightly.",
        references: "Fiqh us-Sunnah: Volume 1, Page 95"
      },
      {
        question: "What is 'Ruku' in Salah?",
        options: ["Prostration", "Bowing", "Standing", "Sitting"],
        correctAnswer: "Bowing",
        explanation: "Ruku is the bowing position in prayer, glorifying Allah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 103"
      },
      {
        question: "Is Jumu'ah prayer obligatory for women?",
        options: ["Yes", "No, but recommended", "Only if able", "Exempt"],
        correctAnswer: "No, but recommended",
        explanation: "Jumu'ah is obligatory for men but recommended for women.",
        references: "Fiqh us-Sunnah: Volume 1, Page 193"
      },
      {
        question: "What is the rationale for Salah in Hadith?",
        options: ["To purify the soul", "To gain wealth", "To fight enemies", "To travel"],
        correctAnswer: "To purify the soul",
        explanation: "A Hadith states Salah prevents indecency and evil, purifying the soul.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "How many Rak'ahs in obligatory Maghrib?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three",
        explanation: "Maghrib consists of three obligatory Rak'ahs.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
    ],
    intermediate: [
      {
        question: "What is the ruling on performing Salah while wearing shoes?",
        options: ["Completely prohibited", "Permissible if clean", "Only for men", "Only outside mosque"],
        correctAnswer: "Permissible if clean",
        explanation: "It is permissible to pray with shoes if they are clean and free from impurities.",
        references: "Fiqh us-Sunnah: Volume 1, Page 91"
      },
      {
        question: "What is the minimum amount of body that must be covered during Salah for men?",
        options: ["From navel to knees", "Entire body except face", "Only private parts", "From shoulders to ankles"],
        correctAnswer: "From navel to knees",
        explanation: "The minimum requirement for men is to cover from the navel to the knees.",
        references: "Fiqh us-Sunnah: Volume 1, Page 87"
      },
      {
        question: "What is the ruling on reciting Quran during Ruku and Sujud?",
        options: ["Permissible", "Prohibited", "Recommended", "Obligatory"],
        correctAnswer: "Prohibited",
        explanation: "Reciting Quran during Ruku and Sujud is prohibited; instead, specific tasbih should be recited.",
        references: "Fiqh us-Sunnah: Volume 1, Page 103"
      },
      {
        question: "What is the ruling on praying in a moving vehicle?",
        options: ["Invalid", "Valid with conditions", "Only for travelers", "Permissible anytime"],
        correctAnswer: "Valid with conditions",
        explanation: "It is valid to pray in a moving vehicle if facing the Qiblah is not possible, by making gestures.",
        references: "Fiqh us-Sunnah: Volume 1, Page 91"
      },
      {
        question: "What is the time period for Dhuhr prayer?",
        options: ["From sunrise to noon", "From noon until shadow equals object", "From noon until Asr", "From midday to sunset"],
        correctAnswer: "From noon until shadow equals object",
        explanation: "Dhuhr time begins when the sun passes its zenith and continues until the shadow of an object equals its length.",
        references: "Fiqh us-Sunnah: Volume 1, Page 79"
      },
      {
        question: "What is the ruling on combining prayers during travel?",
        options: ["Not permitted", "Permitted for Dhuhr and Asr only", "Permitted for Maghrib and Isha only", "Permitted for Dhuhr-Asr and Maghrib-Isha"],
        correctAnswer: "Permitted for Dhuhr-Asr and Maghrib-Isha",
        explanation: "Travelers may combine Dhuhr with Asr and Maghrib with Isha either by advancing or delaying.",
        references: "Fiqh us-Sunnah: Volume 1, Page 171"
      },
      {
        question: "What is the ruling on praying Sunnah prayers while traveling?",
        options: ["Obligatory", "Recommended", "Not recommended", "Prohibited"],
        correctAnswer: "Recommended",
        explanation: "Sunnah prayers are recommended but not obligatory while traveling.",
        references: "Fiqh us-Sunnah: Volume 1, Page 173"
      },
      {
        question: "What invalidates Tayammum?",
        options: ["Eating", "Sleeping", "Seeing water", "All of the above"],
        correctAnswer: "Seeing water",
        explanation: "Tayammum becomes invalid when water becomes available and can be used for Wudu.",
        references: "Fiqh us-Sunnah: Volume 1, Page 71"
      },
      {
        question: "What is the ruling on praying with the intention of following the Imam?",
        options: ["Not necessary", "Obligatory", "Recommended", "Invalidates prayer"],
        correctAnswer: "Obligatory",
        explanation: "It is obligatory to have the intention of following the Imam when praying in congregation.",
        references: "Fiqh us-Sunnah: Volume 1, Page 117"
      },
      {
        question: "What is the ruling on making up missed prayers?",
        options: ["Not required", "Required only for recent ones", "Always required", "Only for Fajr prayer"],
        correctAnswer: "Always required",
        explanation: "Missed obligatory prayers must be made up as soon as possible, regardless of how long they were delayed.",
        references: "Fiqh us-Sunnah: Volume 1, Page 185"
      },
      {
        question: "What is the minimum recitation required in each Rak'ah?",
        options: ["Surah Al-Fatihah only", "Any verse of Quran", "Surah Al-Fatihah and another Surah", "No specific requirement"],
        correctAnswer: "Surah Al-Fatihah only",
        explanation: "The minimum requirement is recitation of Surah Al-Fatihah in each Rak'ah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 99"
      },
      {
        question: "What is the ruling on praying while sitting due to illness?",
        options: ["Invalid", "Valid with conditions", "Only for elderly", "Permissible only for Fard prayers"],
        correctAnswer: "Valid with conditions",
        explanation: "One may pray sitting if unable to stand, and if unable to sit, then lying down.",
        references: "Fiqh us-Sunnah: Volume 1, Page 93"
      },
      {
        question: "What is the time period for Fajr prayer?",
        options: ["From dawn to sunrise", "From midnight to sunrise", "From dawn until full daylight", "From early morning to noon"],
        correctAnswer: "From dawn to sunrise",
        explanation: "Fajr time begins at true dawn and continues until just before sunrise.",
        references: "Fiqh us-Sunnah: Volume 1, Page 79"
      },
      {
        question: "What is the ruling on reciting aloud in Fajr, Maghrib, and Isha prayers?",
        options: ["Obligatory", "Recommended", "Optional", "Prohibited"],
        correctAnswer: "Recommended",
        explanation: "It is Sunnah to recite aloud in Fajr, first two Rak'ahs of Maghrib and Isha for the Imam.",
        references: "Fiqh us-Sunnah: Volume 1, Page 101"
      },
      {
        question: "What is the ruling on praying behind someone whose prayer is valid but whose Wudu is doubtful?",
        options: ["Valid", "Invalid", "Makruh", "Only if no other Imam available"],
        correctAnswer: "Valid",
        explanation: "The prayer is valid as long as the Imam's prayer is valid, even if there are doubts about his Wudu.",
        references: "Fiqh us-Sunnah: Volume 1, Page 123"
      },
      {
        question: "What is the ruling on praying in a language other than Arabic?",
        options: ["Permissible for non-Arabs", "Only for new Muslims", "Not permissible", "Only for voluntary prayers"],
        correctAnswer: "Not permissible",
        explanation: "The recitation in Salah must be in Arabic, even for non-Arabic speakers.",
        references: "Fiqh us-Sunnah: Volume 1, Page 99"
      },
      {
        question: "What is the ruling on praying with impurities on one's clothing?",
        options: ["Invalid", "Valid if small amount", "Valid if unaware", "Valid if difficult to remove"],
        correctAnswer: "Invalid",
        explanation: "Prayer is invalid if performed with Najasah (impurities) on one's clothing or body.",
        references: "Fiqh us-Sunnah: Volume 1, Page 89"
      },
      {
        question: "What is the ruling on delaying Asr prayer until the sun turns yellow?",
        options: ["Permissible", "Makruh", "Recommended", "Prohibited"],
        correctAnswer: "Makruh",
        explanation: "It is disliked to delay Asr prayer until the sun becomes yellow; it should be prayed earlier in its time.",
        references: "Fiqh us-Sunnah: Volume 1, Page 81"
      },
      {
        question: "What is the ruling on praying voluntary prayers at sunrise, zenith, and sunset?",
        options: ["Permissible", "Recommended", "Makruh", "Prohibited"],
        correctAnswer: "Prohibited",
        explanation: "It is prohibited to pray voluntary prayers at sunrise, when the sun is at its zenith, and at sunset.",
        references: "Fiqh us-Sunnah: Volume 1, Page 147"
      },
      {
        question: "What is the minimum number of people required for Jumu'ah prayer?",
        options: ["Three", "Five", "Forty", "No specific number"],
        correctAnswer: "No specific number",
        explanation: "There is no specific number mentioned in authentic sources; it requires a congregation.",
        references: "Fiqh us-Sunnah: Volume 1, Page 191"
      },
      {
        question: "What is the ruling on praying while hungry when food is served?",
        options: ["Continue prayer", "Break prayer to eat", "Only if very hungry", "Finish quickly then eat"],
        correctAnswer: "Break prayer to eat",
        explanation: "If food is served and one is hungry, it is recommended to break the voluntary prayer to eat.",
        references: "Fiqh us-Sunnah: Volume 1, Page 149"
      },
      {
        question: "What is the ruling on praying in a built-up graveyard?",
        options: ["Permissible", "Makruh", "Prohibited", "Only for funeral prayers"],
        correctAnswer: "Prohibited",
        explanation: "It is prohibited to pray in graveyards, except for the funeral prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 91"
      },
      {
        question: "What is the ruling on making Sujud on something attached to the earth?",
        options: ["Obligatory", "Recommended", "Permissible", "Not required"],
        correctAnswer: "Obligatory",
        explanation: "It is obligatory to make Sujud on something attached to the earth, like the ground or a prayer mat.",
        references: "Fiqh us-Sunnah: Volume 1, Page 105"
      },
      {
        question: "What is the ruling on praying with an imitation of an animal on clothing?",
        options: ["Permissible", "Makruh", "Prohibited", "Only if small"],
        correctAnswer: "Makruh",
        explanation: "It is disliked to pray with clothing containing images of animate beings.",
        references: "Fiqh us-Sunnah: Volume 1, Page 89"
      },
      {
        question: "What is the ruling on reciting Bismillah aloud in prayer?",
        options: ["Obligatory", "Recommended", "Optional", "Prohibited"],
        correctAnswer: "Optional",
        explanation: "Reciting Bismillah aloud is optional; it may be recited silently or aloud.",
        references: "Fiqh us-Sunnah: Volume 1, Page 101"
      },
      {
        question: "What is the ruling on praying while needing to use the restroom?",
        options: ["Valid", "Invalid", "Makruh", "Only if urgent"],
        correctAnswer: "Makruh",
        explanation: "It is disliked to pray while needing to relieve oneself as it distracts from concentration.",
        references: "Fiqh us-Sunnah: Volume 1, Page 93"
      },
      {
        question: "What is the ruling on raising hands during Takbiratul Ihram?",
        options: ["Obligatory", "Recommended", "Optional", "Prohibited"],
        correctAnswer: "Recommended",
        explanation: "Raising hands during the opening Takbir is a recommended Sunnah, not obligatory.",
        references: "Fiqh us-Sunnah: Volume 1, Page 97"
      },
      {
        question: "What is the ruling on praying voluntary prayers at night while sitting?",
        options: ["Permissible", "Invalid", "Only if sick", "With half reward"],
        correctAnswer: "Permissible",
        explanation: "It is permissible to pray voluntary prayers while sitting, even if one can stand, with full reward.",
        references: "Fiqh us-Sunnah: Volume 1, Page 93"
      },
      {
        question: "What is the ruling on saying 'Ameen' after Al-Fatihah?",
        options: ["Obligatory", "Recommended", "Optional", "Prohibited"],
        correctAnswer: "Recommended",
        explanation: "Saying 'Ameen' after Al-Fatihah is a recommended Sunnah for both Imam and followers.",
        references: "Fiqh us-Sunnah: Volume 1, Page 101"
      },
      {
        question: "What is the ruling on making Tasleem at the end of prayer?",
        options: ["Obligatory", "Recommended", "Optional", "Prohibited"],
        correctAnswer: "Obligatory",
        explanation: "Making Tasleem (saying As-salamu alaykum) to both sides is an obligatory part of Salah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 113"
      },
    ],
    advanced: [
      {
        question: "According to Hanafi fiqh, what is the ruling on delaying Salah without excuse?",
        options: ["Makruh", "Haram", "Mubah", "Wajib"],
        correctAnswer: "Haram",
        explanation: "In Hanafi school, delaying obligatory Salah beyond its time without valid excuse is haram.",
        references: "Fiqh us-Sunnah: Volume 1, Page 83"
      },
      {
        question: "What is the Hadith regarding the reward of one Rak'ah in Fajr?",
        options: ["Equals one night fasting", "Equals 27 Rak'ahs", "Equals Hajj", "Equals charity"],
        correctAnswer: "Equals 27 Rak'ahs",
        explanation: "A Hadith states one Rak'ah of Fajr in congregation equals 27 Rak'ahs otherwise.",
        references: "Fiqh us-Sunnah: Volume 1, Page 119"
      },
      {
        question: "In Shafi'i fiqh, how many essential pillars (Arkan) does Salah have?",
        options: ["12", "13", "14", "17"],
        correctAnswer: "17",
        explanation: "Shafi'i school lists 17 essential pillars for the validity of Salah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 95"
      },
      {
        question: "What is 'Masjid al-Haram' special ruling for Salah?",
        options: ["1000 times reward", "500 times", "27 times", "10 times"],
        correctAnswer: "1000 times",
        explanation: "Prayer in Masjid al-Haram multiplies reward by 100,000 times according to Hadith.",
        references: "Fiqh us-Sunnah: Volume 1, Page 91"
      },
      {
        question: "What invalidates Salah according to most fuqaha?",
        options: ["Talking intentionally", "Coughing", "Yawning", "Moving slightly"],
        correctAnswer: "Talking intentionally",
        explanation: "Intentional speech invalidates Salah, as it breaks concentration and recitation.",
        references: "Fiqh us-Sunnah: Volume 1, Page 115"
      },
      {
        question: "What is the punishment for abandoning Salah in Hadith?",
        options: ["Hypocrite", "Out of Islam", "Minor sin only", "No punishment"],
        correctAnswer: "Out of Islam",
        explanation: "A Hadith warns that abandoning prayer takes one out of the fold of Islam.",
        references: "Fiqh us-Sunnah: Volume 1, Page 83"
      },
      {
        question: "In Maliki fiqh, is touching opposite gender invalidate Wudu?",
        options: ["Yes, always", "No, unless desire", "Only if lust", "Never"],
        correctAnswer: "No, unless desire",
        explanation: "Maliki school holds that touching opposite gender invalidates Wudu only with desire.",
        references: "Fiqh us-Sunnah: Volume 1, Page 35"
      },
      {
        question: "What is 'Salat al-Duha'?",
        options: ["Fard prayer", "Sunnah Mu'akkadah", "Nawafil voluntary", "Witr"],
        correctAnswer: "Nawafil voluntary",
        explanation: "Salat al-Duha is a voluntary prayer performed in the forenoon, recommended in Sunnah.",
        references: "Fiqh us-Sunnah: Volume 1, Page 145"
      },
      {
        question: "According to a Hadith, what is the key to Paradise?",
        options: ["Fasting", "Charity", "Salah", "Shahadah"],
        correctAnswer: "Salah",
        explanation: "The Prophet said the first thing judged on Judgment Day is Salah; it is the key to Paradise.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "In Hanbali fiqh, what is the ruling on praying behind a prostrating imam?",
        options: ["Invalid", "Valid if unavoidable", "Always valid", "Makruh"],
        correctAnswer: "Valid if unavoidable",
        explanation: "Hanbali allows following an imam in prostration if no choice, but prefers correction.",
        references: "Fiqh us-Sunnah: Volume 1, Page 123"
      },
      {
        question: "What is 'Istisqa' prayer?",
        options: ["For rain", "For forgiveness", "For travel", "For illness"],
        correctAnswer: "For rain",
        explanation: "Salat al-Istisqa is a special congregational prayer seeking Allah's mercy for rain.",
        references: "Fiqh us-Sunnah: Volume 1, Page 209"
      },
      {
        question: "How many Rak'ahs is Witr prayer according to Ahl al-Sunnah?",
        options: ["One only", "Three", "Eleven", "Thirteen"],
        correctAnswer: "Three",
        explanation: "Witr is typically three Rak'ahs with Qunut in the third, odd-numbered voluntary prayer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 141"
      },
      {
        question: "What is the fiqh ruling on combining Dhuhr and Asr?",
        options: ["Never allowed", "Only in travel", "In rain or hardship", "Always"],
        correctAnswer: "In rain or hardship",
        explanation: "Combining prayers is allowed in travel, rain, or excused hardship per most schools.",
        references: "Fiqh us-Sunnah: Volume 1, Page 171"
      },
      {
        question: "In a Hadith, what did the Prophet say about Salah and Zina?",
        options: ["They are similar in prevention", "Salah causes Zina", "No relation", "Zina prevents Salah"],
        correctAnswer: "They are similar in prevention",
        explanation: "Just as Zina is prevented by veiling, Salah prevents immorality per a Hadith.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "What is 'Tashahhud' in Salah?",
        options: ["Testimony of faith in sitting", "Recitation of Fatiha", "Takbir", "Tasbih"],
        correctAnswer: "Testimony of faith in sitting",
        explanation: "Tashahhud is the sitting testimony reciting Shahadah and salutations on Prophet.",
        references: "Fiqh us-Sunnah: Volume 1, Page 109"
      },
      {
        question: "According to Shafi'i, is covering ankles mandatory for men in Salah?",
        options: ["Yes", "No, recommended", "Only in congregation", "Never"],
        correctAnswer: "Yes",
        explanation: "Shafi'i requires men to cover from navel to knees, including ankles, for validity.",
        references: "Fiqh us-Sunnah: Volume 1, Page 87"
      },
      {
        question: "What is the reward for 12 Rak'ahs of Sunnah daily per Hadith?",
        options: ["A house in Paradise", "Forgiveness", "10 years worship", "1000 good deeds"],
        correctAnswer: "A house in Paradise",
        explanation: "The Prophet promised a house in Paradise for consistent 12 voluntary Rak'ahs daily.",
        references: "Fiqh us-Sunnah: Volume 1, Page 145"
      },
      {
        question: "In Hanafi fiqh, what breaks Wudu besides urine?",
        options: ["Laughter", "Blood flow", "Eating dates", "Walking"],
        correctAnswer: "Blood flow",
        explanation: "Hanafi holds that flowing blood or pus from body invalidates Wudu.",
        references: "Fiqh us-Sunnah: Volume 1, Page 35"
      },
      {
        question: "What is 'Salat al-Tarawih'?",
        options: ["Ramadan night prayer", "Funeral prayer", "Eclipse prayer", "Fear prayer"],
        correctAnswer: "Ramadan night prayer",
        explanation: "Tarawih are voluntary night prayers performed in congregation during Ramadan.",
        references: "Fiqh us-Sunnah: Volume 1, Page 143"
      },
      {
        question: "What is the ruling on animal skin rug for Salah?",
        options: ["Invalid unless tanned", "Always valid", "Only wool", "Never"],
        correctAnswer: "Invalid unless tanned",
        explanation: "Praying on untanned animal skin is invalid per Hadith prohibition.",
        references: "Fiqh us-Sunnah: Volume 1, Page 89"
      },
      {
        question: "In a Hadith, how is Salah described as a light?",
        options: ["Believer's face light", "Prayer light in heart", "Path light", "All of above"],
        correctAnswer: "All of above",
        explanation: "Hadiths describe Salah as light for the believer's face, heart, and path to Paradise.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "What is 'Salat al-Kusuf'?",
        options: ["Eclipse prayer", "Rain prayer", "Victory prayer", "Illness prayer"],
        correctAnswer: "Eclipse prayer",
        explanation: "Salat al-Kusuf is a two-Rak'ah prayer performed during solar or lunar eclipses.",
        references: "Fiqh us-Sunnah: Volume 1, Page 207"
      },
      {
        question: "According to Maliki, is intention verbal in Salah?",
        options: ["Yes", "No, in heart only", "Both", "Not needed"],
        correctAnswer: "No, in heart only",
        explanation: "Maliki school holds intention for Salah is in the heart, not verbalized.",
        references: "Fiqh us-Sunnah: Volume 1, Page 95"
      },
      {
        question: "What is the fiqh on praying in a graveyard?",
        options: ["Prohibited", "Allowed silently", "Recommended", "Only funeral"],
        correctAnswer: "Prohibited",
        explanation: "Praying ritual Salah in graveyards is prohibited based on Hadith.",
        references: "Fiqh us-Sunnah: Volume 1, Page 91"
      },
      {
        question: "In Hanbali fiqh, how many Tasbihs in Ruku and Sujud?",
        options: ["Three each", "Five each", "Seven in Sujud", "Ten total"],
        correctAnswer: "Three each",
        explanation: "Hanbali requires three 'Subhana Rabbiyal Adheem' in Ruku and 'Subhana Rabbiyal A'la' in Sujud.",
        references: "Fiqh us-Sunnah: Volume 1, Page 103"
      },
      {
        question: "What Hadith mentions Salah as Mi'raj?",
        options: ["Night journey", "Daily ascension", "Prophet's miracle", "Believer's Mi'raj"],
        correctAnswer: "Believer's Mi'raj",
        explanation: "The Prophet called Salah the Mi'raj (ascension) for every believer.",
        references: "Fiqh us-Sunnah: Volume 1, Page 75"
      },
      {
        question: "What is 'Salat al-Istikhara'?",
        options: ["Guidance prayer", "Forgiveness prayer", "Rain prayer", "Victory prayer"],
        correctAnswer: "Guidance prayer",
        explanation: "Istikhara is a two-Rak'ah voluntary prayer seeking Allah's guidance in decisions.",
        references: "Fiqh us-Sunnah: Volume 1, Page 147"
      },
      {
        question: "In Shafi'i, is Qunut in Fajr obligatory?",
        options: ["Yes", "No, Sunnah", "Only in hardship", "Never"],
        correctAnswer: "No, Sunnah",
        explanation: "Shafi'i holds Qunut in Fajr as Sunnah Mu'akkadah, not obligatory.",
        references: "Fiqh us-Sunnah: Volume 1, Page 143"
      },
      {
        question: "What is the fiqh on praying with crossed arms?",
        options: ["Obligatory", "Sunnah", "Makruh", "Prohibited"],
        correctAnswer: "Sunnah",
        explanation: "Placing right hand over left on chest is Sunnah in standing position.",
        references: "Fiqh us-Sunnah: Volume 1, Page 97"
      },
      {
        question: "According to Hadith, what is the best prayer after obligatory?",
        options: ["Tahajjud", "Witr", "Duha", "Tasbih"],
        correctAnswer: "Tahajjud",
        explanation: "The Prophet said the best voluntary prayer is night prayer (Tahajjud).",
        references: "Fiqh us-Sunnah: Volume 1, Page 141"
      },
    ]
  }
}

export default salahCategory
