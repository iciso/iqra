import type { QuizCategory } from "@/types/quiz";
  // validated till line 220
const sawmCategory: QuizCategory = {
  id: "sawm",
  title: "Fasting and Ramadan",
  description: "Islamic perspective on Sawm (Fasting) and Ramadan",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the reward multiplier for good deeds according to a hadith on fasting?",
        options: [
          "From one to ten times",
          "From ten to seven hundred times",
          "Exactly one hundred times",
          "Unlimited times"
        ],
        correctAnswer: "From ten to seven hundred times",
        explanation: "The Prophet (PBUH) said that every good deed is multiplied from ten to seven hundred times, with fasting being specially rewarded by Allah.",
        references: "Sahih al-Bukhari 1904"
      },
      {
        question: "Which gate in Paradise is exclusively for those who fast?",
        options: [
          "Bab al-Jannah",
          "Bab al-Rayyan",
          "Bab al-Salat",
          "Bab al-Jihad"
        ],
        correctAnswer: "Bab al-Rayyan",
        explanation: "The Prophet (PBUH) mentioned that those who fast will enter through the gate of al-Rayyan on the Day of Resurrection.",
        references: "Sahih al-Bukhari 1896"
      },
      {
        question: "What does fasting expiate according to a hadith narrated by Hudhayfah?",
        options: [
          "Only major sins",
          "Afflictions in property, family, and neighbors",
          "Debts only",
          "Illness alone"
        ],
        correctAnswer: "Afflictions in property, family, and neighbors",
        explanation: "Fasting, along with prayer and charity, expiates afflictions in property, family, and neighbors.",
        references: "Sahih Muslim 2750"
      },
      {
        question: "When are the gates of mercy opened according to Abu Hurairah?",
        options: [
          "During Hajj",
          "In the month of Ramadan",
          "On Fridays",
          "During Dhul-Hijjah"
        ],
        correctAnswer: "In the month of Ramadan",
        explanation: "The gates of mercy are opened, gates of Hell closed, and devils chained in Ramadan.",
        references: "Sahih al-Bukhari 1899"
      },
      {
        question: "What is the reward for fasting Ramadan and six days of Shawwal?",
        options: [
          "Equivalent to fasting one month",
          "As if fasted the whole year",
          "Forgiveness of minor sins only",
          "A house in Paradise"
        ],
        correctAnswer: "As if fasted the whole year",
        explanation: "The Prophet (PBUH) said it is like fasting the entire year.",
        references: "Sahih Muslim 1164"
      },
      {
        question: "In which month did the Prophet (PBUH) fast the most besides Ramadan?",
        options: [
          "Muharram",
          "Rabi' al-Awwal",
          "Sha'ban",
          "Rajab"
        ],
        correctAnswer: "Sha'ban",
        explanation: "Narrated by 'Aisha, the Prophet fasted most of Sha'ban.",
        references: "Sahih al-Bukhari 1970"
      },
      {
        question: "What are the Noble Prophet's advice for suhur according to Anas bin Malik?",
        options: [
          "Skip it to fast longer",
          "Take it as there is blessing in it",
          "Eat heavily",
          "Only drink water"
        ],
        correctAnswer: "Take it as there is blessing in it",
        explanation: "The Prophet (PBUH) encouraged taking suhur for its blessing.",
        references: "Sahih al-Bukhari 1923"
      },
      {
        question: "What should those who fast hasten according to Sahl bin Sa'd?",
        options: [
          "Starting the fast",
          "Breaking the fast",
          "Prayer after iftar",
          "Going to sleep"
        ],
        correctAnswer: "Breaking the fast",
        explanation: "People remain on the right path as long as they hasten iftar.",
        references: "Sahih al-Bukhari 1957"
      },
      {
        question: "What if a faster forgets and eats during the day?",
        options: [
          "The fast is invalid",
          "Continue fasting",
          "Make up the day later",
          "Pay kaffarah"
        ],
        correctAnswer: "Continue fasting",
        explanation: "The Prophet (PBUH) said Allah feeds him and gives him drink.",
        references: "Sahih al-Bukhari 1933"
      },
      {
        question: "On which days did the Prophet (PBUH) fast regularly besides Ramadan?",
        options: [
          "Tuesdays and Fridays",
          "Mondays and Thursdays",
          "Wednesdays and Saturdays",
          "Sundays and Wednesdays"
        ],
        correctAnswer: "Mondays and Thursdays",
        explanation: "Deeds are presented on those days, so he fasted them.",
        references: "Sunan at-Tirmidhi 747"
      },
      {
        question: "What is the Night of Decree better than?",
        options: [
          "One month",
          "A thousand months",
          "Hajj",
          "One year"
        ],
        correctAnswer: "A thousand months",
        explanation: "Laylat al-Qadr is better than a thousand months.",
        references: "Surah al-Qadr 97:3"
      },
      {
        question: "Complete the hadeeth: In it Allah has a night which is better than a thousand months; whoever...?",
        options: [
          "is sick is deprived of its goodness",
          "is deprived of its goodness is indeed deprived.",
          "is travelling is deprived of its goodness",
          "Women"
        ],
        correctAnswer: "is deprived of its goodness is indeed deprived.",
        explanation: "The Messenger of Allah said: 'There has come to you Ramadan, a blessed month, which Allah, the Mighty and Sublime, has enjoined you to fast. In it the gates of heavens are opened and the gates of Hell are closed, and every devil is chained up. In it Allah has a night which is better than a thousand months; whoever is deprived of its goodness is indeed deprived.",
        references: "Sunan an-Nasa'i 2106"
      },
      {
        question: "What is fasting described as in a hadith?",
        options: [
          "A pillar of Islam",
          "A shield",
          "A form of jihad",
          "An act of charity"
        ],
        correctAnswer: "A shield",
        explanation: "Fasting is a shield against sin and fire.",
        references: "Sahih Muslim 1151"
      },
      {
        question: "What should the one who is fasting say if some one begins to quarrel with him or her?",
        options: [
          "I am right",
          "I am fasting",
          "Leave me alone",
          "Allah forgive you"
        ],
        correctAnswer: "I am fasting",
        explanation: "To remind others and protect the fast.",
        references: "Sahih Muslim 1151"
      },
      {
        question: "What is sweeter to Allah than musk on the Day of Judgment?",
        options: [
          "The breath of those who fast",
          "Good deeds done by the pious",
          "Prayers",
          "Charity"
        ],
        correctAnswer: "The breath of those who fast",
        explanation: "The smell of the faster's mouth is better than musk.",
        references: "Sahih al-Bukhari 1904"
      },
      {
        question: "How many joyous occasions does the faster have?",
        options: [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        correctAnswer: "Two",
        explanation: "At breaking fast and meeting his Lord.",
        references: "Sahih al-Bukhari 1904"
      },
      {
        question: "What is forbidden during fasting besides food and drink?",
        options: [
          "Prayer",
          "Forged speech and evil actions",
          "Reading Quran",
          "Sleeping"
        ],
        correctAnswer: "Forged speech and evil actions",
        explanation: "Allah does not need one to leave food if they don't leave sins.",
        references: "Sahih al-Bukhari 1903"
      },
      {
        question: "What month are the gates of Heaven opened?",
        options: [
          "Dhu al-Hijjah",
          "Ramadan",
          "Muharram",
          "Rabi al-Awwal"
        ],
        correctAnswer: "Ramadan",
        explanation: "Gates of Heaven opened, Hell closed in Ramadan.",
        references: "Sahih al-Bukhari 1899"
      },
      {
        question: "What is the perpetual fast?",
        options: [
          "Fasting three days a month",
          "Fasting every other day",
          "Fasting Ramadan only",
          "Fasting Mondays only"
        ],
        correctAnswer: "Fasting three days a month",
        explanation: "Three days every month and Ramadan is perpetual.",
        references: "Sahih Muslim 1160"
      },
      {
        question: "What day expiates sins of two years?",
        options: [
          "Ashura",
          "Arafah",
          "Friday",
          "Monday"
        ],
        correctAnswer: "Arafah",
        explanation: "Fasting Arafah expiates the sins of the preceding and coming year.",
        references: "Sahih Muslim 1162"
      },
      {
        question: "Why did the Prophet fast Mondays?",
        options: [
          "He was born on Monday, and revealation was sent to him first on that day",
          "Deeds presented that day, so maximum rewards",
          "It is sunnah only for the prophets",
          "To make up missed fasts, and prepare for the next year"
        ],
        correctAnswer: "He was born on Monday, and revealation was sent to him first on that day",
        explanation: "It was the day on which I was born. on which I was commissioned with prophethood or revelation was sent to me,",
        references: "Sahih Muslim 1162"
      },
      {
        question: "What is the ruling on kissing without lust during fasting?",
        options: [
          "Always haram",
          "Permissible if there is no fear of ejaculation",
          "Only for married",
          "Prohibited for all"
        ],
        correctAnswer: "Permissible if there is no fear of ejaculation",
        explanation: "For those who have self-control.",
        references: "Sunan Abi Dawud 2380"
      },
      {
        question: "Who is exempt from fasting in Ramadan?",
        options: [
          "Everyone must fast",
          "The sick and travelers",
          "Children only",
          "Women during menses"
        ],
        correctAnswer: "The sick and travelers",
        explanation: "They can make up later.",
        references: "Sahih al-Bukhari 1854"
      },
      {
        question: "What is Zakat al-Fitr?",
        options: [
          "Optional charity",
          "Obligatory to purify fast",
          "For travelers",
          "Only for poor"
        ],
        correctAnswer: "Obligatory to purify fast",
        explanation: "Paid at end of Ramadan to allow poor to celebrate.",
        references: "Sahih al-Bukhari 1503"
      },
      {
        question: "When is the best time for suhur?",
        options: [
          "At dawn",
          "Just before Fajr",
          "Midnight",
          "After Maghrib"
        ],
        correctAnswer: "Just before Fajr",
        explanation: "Delay it as much as possible.",
        references: "Sahih Muslim 1097"
      },
      {
        question: "What invalidates the fast besides eating?",
        options: [
          "Smoking and vomiting intentionally",
          "Walking",
          "Talking",
          "Praying"
        ],
        correctAnswer: "Smoking and vomiting intentionally",
        explanation: "Intentional acts that reach throat or smoke.",
        references: "Sahih al-Bukhari 1931"
      },
      {
        question: "What is the punishment for missing fast without excuse?",
        options: [
          "Nothing",
          "Make up and feed poor",
          "Only make up",
          "Kaffarah"
        ],
        correctAnswer: "Make up and feed poor",
        explanation: "For missed fasts in Ramadan.",
        references: "Sahih al-Bukhari 1936"
      },
      {
        question: "Which night to seek Laylat al-Qadr?",
        options: [
          "First ten days",
          "Odd nights of last ten",
          "Even nights",
          "Last night only"
        ],
        correctAnswer: "Odd nights of last ten",
        explanation: "Search in odd nights of last ten days of Ramadan.",
        references: "Sahih al-Bukhari 2017"
      },
      {
        question: "What is the sign of Laylat al-Qadr?",
        options: [
          "Rain",
          "Peace until dawn",
          "Thunder",
          "Wind"
        ],
        correctAnswer: "Peace until dawn",
        explanation: "It is peaceful, no one hears a voice until dawn.",
        references: "Sahih Muslim 762"
      }
    ],
    intermediate: [
      {
        question: "According to the hadith, what is exclusively for Allah in reward?",
        options: [
          "Prayer",
          "Charity",
          "Fasting",
          "Hajj"
        ],
        correctAnswer: "Fasting",
        explanation: "Fasting is done for Allah, and He alone gives its reward.",
        references: "Sahih al-Bukhari 1904"
      },
      {
        question: "What happens to devils in Ramadan?",
        options: [
          "They are freed",
          "They are chained",
          "They increase",
          "They repent"
        ],
        correctAnswer: "They are chained",
        explanation: "Gates of Hell closed, devils chained in Ramadan.",
        references: "Sahih Muslim 1079"
      },
      {
        question: "How many branches of faith include haya, related to fasting modesty?",
        options: [
          "Seventy",
          "Sixty-odd",
          "One hundred",
          "Fifty"
        ],
        correctAnswer: "Sixty-odd",
        explanation: "Faith has over sixty branches, haya being one, important for fasters.",
        references: "Sahih al-Bukhari 8"
      },
      {
        question: "What is the kaffarah for breaking fast intentionally?",
        options: [
          "Feed ten poor",
          "Free slave and fast two months",
          "One month fast",
          "Nothing"
        ],
        correctAnswer: "Free slave and fast two months",
        explanation: "Kaffarah is freeing a slave, or fasting two consecutive months, or feeding sixty poor.",
        references: "Sahih al-Bukhari 1936"
      },
      {
        question: "Can a fasting person use miswak?",
        options: [
          "No, it invalidates",
          "Yes, but not flavored",
          "Yes, anytime",
          "Only at night"
        ],
        correctAnswer: "Yes, anytime",
        explanation: "The Prophet used miswak while fasting.",
        references: "Sahih al-Bukhari 1931"
      },
      {
        question: "What is the time for iftar?",
        options: [
          "After sunset prayer",
          "At sunset",
          "When Maghrib starts",
          "After eating"
        ],
        correctAnswer: "At sunset",
        explanation: "Break fast as soon as sun sets.",
        references: "Sahih al-Bukhari 1952"
      },
      {
        question: "Is fasting on Ashura obligatory?",
        options: [
          "Yes",
          "Recommended",
          "Haram",
          "Makruh"
        ],
        correctAnswer: "Recommended",
        explanation: "It is sunnah, expiates previous year.",
        references: "Sahih Muslim 1162"
      },
      {
        question: "What is i'tikaf?",
        options: [
          "Fasting",
          "Seclusion in mosque",
          "Charity",
          "Prayer only"
        ],
        correctAnswer: "Seclusion in mosque",
        explanation: "Recommended in last ten days of Ramadan.",
        references: "Sahih al-Bukhari 2029"
      },
      {
        question: "Who can give Zakat al-Fitr?",
        options: [
          "Only rich",
          "Every Muslim who can",
          "Imam only",
          "Poor only"
        ],
        correctAnswer: "Every Muslim who can",
        explanation: "On behalf of self and dependents.",
        references: "Sahih al-Bukhari 1509"
      },
      {
        question: "When must Zakat al-Fitr be paid by?",
        options: [
          "Before Fajr of Eid",
          "After Eid prayer",
          "During Ramadan",
          "Anytime"
        ],
        correctAnswer: "Before Fajr of Eid",
        explanation: "Paid before Eid prayer.",
        references: "Sahih al-Bukhari 1509"
      },
      {
        question: "What amount for Zakat al-Fitr?",
        options: [
          "One sa' of food",
          "One dirham",
          "One camel",
          "One sheep"
        ],
        correctAnswer: "One sa' of food",
        explanation: "One sa' of staple food like dates or barley.",
        references: "Sahih al-Bukhari 1503"
      },
      {
        question: "Is voluntary fasting allowed in Ramadan?",
        options: [
          "Yes, extra",
          "No, only obligatory",
          "Only on weekends",
          "Haram"
        ],
        correctAnswer: "No, only obligatory",
        explanation: "Ramadan fast is obligatory, no extra nafl in it.",
        references: "Sahih al-Bukhari 1975"
      },
      {
        question: "What if menstruating during Ramadan?",
        options: [
          "Fast anyway",
          "Make up later",
          "No need",
          "Pay fine"
        ],
        correctAnswer: "Make up later",
        explanation: "Women make up missed days after purity.",
        references: "Sahih al-Bukhari 1971"
      },
      {
        question: "Can a traveler fast in Ramadan?",
        options: [
          "Must fast",
          "Allowed to break",
          "Haram to break",
          "Always fast"
        ],
        correctAnswer: "Allowed to break",
        explanation: "Traveler can break and make up later.",
        references: "Sahih al-Bukhari 1854"
      },
      {
        question: "What is the dua for iftar?",
        options: [
          "Allahumma inni laka sumtu",
          "Any dua",
          "Specific only",
          "No dua needed"
        ],
        correctAnswer: "Any dua",
        explanation: "Dua at breaking fast is not rejected.",
        references: "Sunan Abi Dawud 2357"
      },
      {
        question: "How long is the fast?",
        options: [
          "12 hours",
          "From dawn to sunset",
          "24 hours",
          "Till Zuhr"
        ],
        correctAnswer: "From dawn to sunset",
        explanation: "From Fajr to Maghrib.",
        references: "Sahih al-Bukhari 1894"
      },
      {
        question: "Is honey allowed while fasting?",
        options: [
          "Yes, external",
          "No, invalidates",
          "Only at night",
          "For sick only"
        ],
        correctAnswer: "No, invalidates",
        explanation: "Honey swallowed invalidates fast.",
        references: "Sahih al-Bukhari 1931"
      },
      {
        question: "What is Tarawih?",
        options: [
          "Obligatory prayer",
          "Optional night prayer in Ramadan",
          "Eid prayer",
          "Fajr sunnah"
        ],
        correctAnswer: "Optional night prayer in Ramadan",
        explanation: "Prayed in congregation in Ramadan.",
        references: "Sahih al-Bukhari 2010"
      },
      {
        question: "How many rak'ahs in Tarawih?",
        options: [
          "8",
          "20",
          "4",
          "11"
        ],
        correctAnswer: "20",
        explanation: "Traditionally 20 rak'ahs with Witr.",
        references: "Sahih al-Bukhari 2010"
      },
      {
        question: "When to perform i'tikaf?",
        options: [
          "First ten days",
          "Last ten days",
          "Whole month",
          "Eid day"
        ],
        correctAnswer: "Last ten days",
        explanation: "Sunnah in last ten of Ramadan.",
        references: "Sahih Muslim 1173"
      },
      {
        question: "Can one leave mosque in i'tikaf for Jumu'ah?",
        options: [
          "No",
          "Yes",
          "Only if close",
          "Haram"
        ],
        correctAnswer: "Yes",
        explanation: "Allowed for obligatory prayers.",
        references: "Sahih Muslim 1184"
      },
      {
        question: "What is the virtue of fasting Arafah?",
        options: [
          "One year sins",
          "Two years sins",
          "Ramadan equivalent",
          "Hajj reward"
        ],
        correctAnswer: "Two years sins",
        explanation: "Preceding and coming year.",
        references: "Sahih Muslim 1162"
      },
      {
        question: "Is fasting on Friday alone recommended?",
        options: [
          "Yes",
          "No, makruh",
          "Obligatory",
          "Haram"
        ],
        correctAnswer: "No, makruh",
        explanation: "Fasting only Friday is disliked unless with Thursday or Saturday.",
        references: "Sahih Muslim 1144"
      },
      {
        question: "What is the month of patience?",
        options: [
          "Muharram",
          "Ramadan",
          "Sha'ban",
          "Dhul-Hijjah"
        ],
        correctAnswer: "Ramadan",
        explanation: "Ramadan is the month of patience.",
        references: "Sunan Abi Dawud 2437"
      },
      {
        question: "Who narrated about suhur blessing?",
        options: [
          "Abu Hurairah",
          "Anas bin Malik",
          "Ibn Umar",
          "Aisha"
        ],
        correctAnswer: "Anas bin Malik",
        explanation: "Anas narrated 'Take suhur, blessing in it.'",
        references: "Sahih al-Bukhari 1923"
      },
      {
        question: "What invalidates fast but no kaffarah?",
        options: [
          "Eating",
          "Vomiting intentionally",
          "Sexual intercourse",
          "All require kaffarah"
        ],
        correctAnswer: "Vomiting intentionally",
        explanation: "Only make up, no kaffarah.",
        references: "Sahih al-Bukhari 1931"
      },
      {
        question: "Is blood donation allowed while fasting?",
        options: [
          "No",
          "Yes, if not weakening",
          "Only small amount",
          "Haram"
        ],
        correctAnswer: "Yes, if not weakening",
        explanation: "Cupping was allowed, similar.",
        references: "Sahih al-Bukhari 1933"
      },
      {
        question: "What is the best dua time during fast?",
        options: [
          "Suhur",
          "Between adhan and iqamah",
          "Iftar",
          "All times"
        ],
        correctAnswer: "Between adhan and iqamah",
        explanation: "Supplication not rejected then.",
        references: "Sunan Abi Dawud 521"
      },
      {
        question: "Can a faster swim?",
        options: [
          "No",
          "Yes, if no water swallowed",
          "Only bath",
          "Haram"
        ],
        correctAnswer: "Yes, if no water swallowed",
        explanation: "As long as no intake.",
        references: "Fatwa from scholars"
      },
      {
        question: "What is witr prayer?",
        options: [
          "Fard",
          "Sunnah after Tarawih",
          "Nafl only",
          "Eid"
        ],
        correctAnswer: "Sunnah after Tarawih",
        explanation: "Odd prayer closing night prayers.",
        references: "Sahih al-Bukhari 998"
      },
      {
        question: "How to confirm moon sighting for Ramadan?",
        options: [
          "Calculator",
          "Testimony of one upright Muslim",
          "Two witnesses",
          "Global announcement"
        ],
        correctAnswer: "Two witnesses",
        explanation: "Sighting by two upright Muslims.",
        references: "Sahih al-Bukhari 1902"
      },
      {
        question: "Is it allowed to fast for deceased?",
        options: [
          "Yes",
          "No",
          "Only if willed",
          "Haram"
        ],
        correctAnswer: "No",
        explanation: "Fasting cannot be done on behalf of dead.",
        references: "Sahih al-Bukhari 1937"
      }
    ],
    advanced: [
      {
        question: "In the hadith of Abu Bakr, which gates call the righteous?",
        options: [
          "Prayer, fasting, charity, jihad",
          "Only fasting and prayer",
          "All gates same",
          "No gates mentioned"
        ],
        correctAnswer: "Prayer, fasting, charity, jihad",
        explanation: "Gates of Prayer, Rayyan for fasting, Charity, Jihad.",
        references: "Sahih al-Bukhari 1895"
      },
      {
        question: "What is the grading of the hadith on devils chained in Ramadan?",
        options: [
          "Da'if",
          "Sahih",
          "Hasan",
          "Mawdu'"
        ],
        correctAnswer: "Sahih",
        explanation: "Narrated by Bukhari and Muslim.",
        references: "Sahih al-Bukhari 1899"
      },
      {
        question: "According to fiqh, does smelling perfume invalidate fast?",
        options: [
          "Yes",
          "No",
          "If inhaled deeply",
          "Only liquid"
        ],
        correctAnswer: "No",
        explanation: "External scents do not invalidate.",
        references: "Al-Mughni by Ibn Qudamah"
      },
      {
        question: "What is the difference between sawm and siyam?",
        options: [
          "Same",
          "Sawm is obligatory, siyam voluntary",
          "Siyam is total abstinence",
          "No difference"
        ],
        correctAnswer: "Same",
        explanation: "Synonyms for fasting in Arabic.",
        references: "Lisan al-Arab"
      },
      {
        question: "In which madhhab is kissing allowed for fasting young man?",
        options: [
          "All",
          "Hanafi, if no desire",
          "Shafi'i only",
          "Maliki no"
        ],
        correctAnswer: "Hanafi, if no desire",
        explanation: "Hanafi allows if strong self-control.",
        references: "Bada'i al-Sana'i"
      },
      {
        question: "What is the evidence for Zakat al-Fitr being fard?",
        options: [
          "Quran",
          "Hadith of Ibn Umar",
          "Ijma",
          "Qiyas"
        ],
        correctAnswer: "Hadith of Ibn Umar",
        explanation: "Prophet made it obligatory.",
        references: "Sahih al-Bukhari 1503"
      },
      {
        question: "Can i'tikaf be done outside mosque?",
        options: [
          "Yes",
          "No, must in masjid",
          "At home",
          "In any place"
        ],
        correctAnswer: "No, must in masjid",
        explanation: "Seclusion in mosque.",
        references: "Sahih Muslim 1173"
      },
      {
        question: "What is bid'ah in Tarawih?",
        options: [
          "Praying 8 rak'ahs",
          "20 rak'ahs",
          "Congregation",
          "Witr"
        ],
        correctAnswer: "None, all sunnah",
        explanation: "Both 8 and 20 reported, no bid'ah.",
        references: "Fath al-Bari"
      },
      {
        question: "Grading of hadith 'fasting and Quran intercede'?",
        options: [
          "Sahih",
          "Hasan",
          "Da'if",
          "Mawdu"
        ],
        correctAnswer: "Sahih",
        explanation: "Narrated by Ahmad, sahih chain.",
        references: "Musnad Ahmad 7454"
      },
      {
        question: "Fiqh ruling on fasting while ill with medicine?",
        options: [
          "Break if necessary",
          "Always fast",
          "Only oral",
          "Injection ok"
        ],
        correctAnswer: "Break if necessary",
        explanation: "If medicine nourishes, breaks fast.",
        references: "Fatwa from Fiqh Council"
      },
      {
        question: "What is the tafsir of 'fasting shield'?",
        options: [
          "Protects from fire",
          "From sin",
          "Both",
          "Health only"
        ],
        correctAnswer: "Both",
        explanation: "Shield from Hell and sins.",
        references: "Tafsir Ibn Kathir"
      },
      {
        question: "Hadith on three whose fast not accepted?",
        options: [
          "Liar, oath breaker, poor payer",
          "Adulterer, usurer, drinker",
          "All above",
          "No such hadith"
        ],
        correctAnswer: "Adulterer, usurer, drinker",
        explanation: "Their fast not accepted until repent.",
        references: "Sunan Ibn Majah 1756"
      },
      {
        question: "Is voluntary fast on doubted day allowed?",
        options: [
          "Yes",
          "No",
          "Only if sure",
          "Makruh"
        ],
        correctAnswer: "No",
        explanation: "Do not fast day of doubt.",
        references: "Sahih al-Bukhari 1909"
      },
      {
        question: "What is the wisdom of suhur?",
        options: [
          "Strength for day",
          "Blessing and mercy",
          "Both",
          "Night prayer"
        ],
        correctAnswer: "Both",
        explanation: "Provides strength and has blessing.",
        references: "Sahih al-Bukhari 1921"
      },
      {
        question: "Ruling on using eye drops while fasting?",
        options: [
          "Invalidates",
          "Does not",
          "If tastes in throat",
          "Haram"
        ],
        correctAnswer: "Does not",
        explanation: "Unless reaches stomach with amount.",
        references: "Majmu' al-Fatawa"
      },
      {
        question: "Hadith narrator for 'Ramadan comes as mercy'?",
        options: [
          "Abu Hurairah",
          "Ibn Abbas",
          "Anas",
          "Salman al-Farisi"
        ],
        correctAnswer: "Salman al-Farisi",
        explanation: "O people of faith, month of Ramadan.",
        references: "Al-Mustadrak 4591"
      },
      {
        question: "What is consensus on fasting for pregnant?",
        options: [
          "Exempt if harm",
          "Always fast",
          "No exemption",
          "Feed only"
        ],
        correctAnswer: "Exempt if harm",
        explanation: "Fear harm to self or child.",
        references: "Ijma of scholars"
      },
      {
        question: "Advanced: Difference in madhhabs on ghusl time?",
        options: [
          "Before Fajr",
          "After Fajr",
          "At true dawn",
          "Flexible"
        ],
        correctAnswer: "Before Fajr",
        explanation: "Ghusl before Fajr for fast.",
        references: "Al-Majmu' by Nawawi"
      },
      {
        question: "Grading of 'fasting expiates oath'?",
        options: [
          "Sahih",
          "Hasan li ghayrihi",
          "Da'if",
          "Sahih li ghayrihi"
        ],
        correctAnswer: "Da'if",
        explanation: "Weak chain.",
        references: "Al-Albani grading"
      },
      {
        question: "What is the hadith on fasting and Quran on Judgment Day?",
        options: [
          "They say to owner",
          "Intercede for him",
          "Both",
          "No intercession"
        ],
        correctAnswer: "Intercede for him",
        explanation: "Fasting and Quran intercede.",
        references: "Musnad Ahmad 7454"
      },
      {
        question: "Ruling on fasting Arafah for non-Hajji?",
        options: [
          "Sunnah mu'akkadah",
          "Mustahabb",
          "Wajib",
          "Makruh"
        ],
        correctAnswer: "Sunnah mu'akkadah",
        explanation: "Highly recommended for expiation.",
        references: "Fath al-Bari"
      },
      {
        question: "Can one intend fast after sunrise?",
        options: [
          "Yes, if not eaten",
          "No",
          "Only nafl",
          "Haram"
        ],
        correctAnswer: "No",
        explanation: "Intention must be before dawn.",
        references: "Sahih al-Bukhari 1921"
      },
      {
        question: "What is the evidence for 20 rak'ahs Tarawih?",
        options: [
          "Hadith of Aisha",
          "Practice of Umar",
          "Ibn Abbas",
          "All"
        ],
        correctAnswer: "Practice of Umar",
        explanation: "Umar revived it as sunnah.",
        references: "Sahih al-Bukhari 2010"
      },
      {
        question: "Fiqh: Does brushing teeth invalidate?",
        options: [
          "Yes",
          "No, if no swallow",
          "Only paste",
          "Siwak only"
        ],
        correctAnswer: "No, if no swallow",
        explanation: "Toothpaste ok if not swallowed.",
        references: "Fatawa Ibn Baz"
      },
      {
        question: "Hadith on 'month of Quran'?",
        options: [
          "Ramadan",
          "Sha'ban",
          "Rajab",
          "Muharram"
        ],
        correctAnswer: "Ramadan",
        explanation: "Gabriel reviews Quran with Prophet in Ramadan.",
        references: "Sahih Muslim 1075"
      },
      {
        question: "What if vomit returns to mouth?",
        options: [
          "Break fast",
          "Swallow if unavoidable",
          "Spit always",
          "Invalidates"
        ],
        correctAnswer: "Swallow if unavoidable",
        explanation: "If cannot spit, swallow doesn't break.",
        references: "Al-Mughni"
      },
      {
        question: "Grading of 'suhur is blessing from Allah'?",
        options: [
          "Sahih",
          "Hasan",
          "Da'if",
          "Mawdu"
        ],
        correctAnswer: "Sahih",
        explanation: "Bukhari and Muslim.",
        references: "Sahih al-Bukhari 1923"
      },
      {
        question: "Ruling on fasting for breastfeeding mother?",
        options: [
          "Exempt if harm to milk",
          "Always fast",
          "No milk during fast",
          "Feed child only"
        ],
        correctAnswer: "Exempt if harm to milk",
        explanation: "Similar to pregnant.",
        references: "Majmu' al-Fatawa"
      },
      {
        question: "What is the hadith on three fasts a month?",
        options: [
          "White days",
          "Any three",
          "Consecutive",
          "Mondays"
        ],
        correctAnswer: "White days",
        explanation: "13th, 14th, 15th lunar.",
        references: "Sahih Muslim 1160"
      },
      {
        question: "Advanced: Consensus on intention for fast?",
        options: [
          "Nightly",
          "Daily",
          "Once for Ramadan",
          "Flexible"
        ],
        correctAnswer: "Once for Ramadan",
        explanation: "Intention once at beginning for whole month.",
        references: "Ijma"
      },
      {
        question: "What is the position of Ash'aris on reward of fast?",
        options: [
          "Creation of Allah",
          "Not created",
          "Same as deeds",
          "Unknown"
        ],
        correctAnswer: "Creation of Allah",
        explanation: "Rewards are created.",
        references: "Aqidah Tahawiyyah"
      },
      {
        question: "Hadith on 'fasting most beloved to Allah'?",
        options: [
          "Yes, from deeds",
          "Prayer more",
          "Charity",
          "No"
        ],
        correctAnswer: "Yes, from deeds",
        explanation: "Fasting most beloved deed to Allah.",
        references: "Sunan Ibn Majah 1599"
      },
      {
        question: "Fiqh difference on blood test during fast?",
        options: [
          "All agree no break",
          "Some say breaks",
          "Injection breaks",
          "All break"
        ],
        correctAnswer: "All agree no break",
        explanation: "Taking blood doesn't nourish.",
        references: "Contemporary fatwas"
      },
      {
        question: "What is the chain for Rayyan hadith?",
        options: [
          "From Sahl to Bukhari",
          "Abu Hurairah",
          "Anas",
          "Umar"
        ],
        correctAnswer: "From Sahl to Bukhari",
        explanation: "Sahl bin Sa'd narrated it.",
        references: "Sahih al-Bukhari 1896"
      },
      {
        question: "Ruling on dental work during fast?",
        options: [
          "Avoid if possible",
          "Allowed if no swallow",
          "Breaks fast",
          "Haram"
        ],
        correctAnswer: "Allowed if no swallow",
        explanation: "If water swallowed, breaks.",
        references: "Fatawa Lajnah"
      }
    ]
  }
};

export default sawmCategory;
