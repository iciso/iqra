import type { QuizCategory } from "@/types/quiz";

const tazkiyahCategory: QuizCategory = {
  id: "tazkiyah",
  title: "Tazkiyah",
  description: "Spiritual Purification",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the meaning of 'Tazkiyah'?",
        options: ["Physical cleanliness", "Spiritual purification", "Financial charity", "Ritual prayer"],
        correctAnswer: "Spiritual purification",
        explanation:
          "Tazkiyah refers to the purification of the soul, which involves cleansing the heart from spiritual diseases and cultivating virtuous qualities.",
      },
      {
        question: "Which of the following is NOT considered a spiritual disease of the heart?",
        options: ["Envy (Hasad)", "Pride (Kibr)", "Generosity (Sakha)", "Showing off (Riya)"],
        correctAnswer: "Generosity (Sakha)",
        explanation:
          "Generosity (Sakha) is a virtuous quality, while envy, pride, and showing off are spiritual diseases that need to be purified from the heart.",
      },
      {
        question: "What is 'Taqwa'?",
        options: ["Fasting during Ramadan", "Consciousness and fear of Allah", "Giving charity", "Performing Hajj"],
        correctAnswer: "Consciousness and fear of Allah",
        explanation:
          "Taqwa refers to God-consciousness, being aware of Allah's presence and fearing His displeasure, which leads to righteous actions.",
      },
      {
        question: "What is 'Dhikr'?",
        options: ["Fasting", "Remembrance of Allah", "Charity", "Pilgrimage"],
        correctAnswer: "Remembrance of Allah",
        explanation:
          "Dhikr is the practice of remembering Allah through various forms of glorification, such as reciting His names, praising Him, and supplicating to Him.",
      },
      {
        question: "What is 'Sabr'?",
        options: ["Patience", "Generosity", "Knowledge", "Wisdom"],
        correctAnswer: "Patience",
        explanation:
          "Sabr refers to patience and perseverance in the face of difficulties, an essential quality for spiritual purification.",
      },
      {
        question: "What is 'Istighfar'?",
        options: ["Seeking knowledge", "Seeking forgiveness", "Giving charity", "Performing extra prayers"],
        correctAnswer: "Seeking forgiveness",
        explanation:
          "Istighfar is the act of seeking forgiveness from Allah for one's sins, an essential practice for purifying the soul.",
      },
      {
        question: "What is 'Tawbah'?",
        options: ["Charity", "Repentance", "Fasting", "Pilgrimage"],
        correctAnswer: "Repentance",
        explanation:
          "Tawbah is the act of repenting for one's sins, turning back to Allah with sincere regret and a firm resolve not to repeat the sin.",
      },
      {
        question: "What is 'Muraqabah'?",
        options: ["Self-criticism", "Self-awareness and vigilance", "Self-praise", "Self-indulgence"],
        correctAnswer: "Self-awareness and vigilance",
        explanation:
          "Muraqabah is the practice of being constantly aware that Allah is watching over us, leading to vigilance in one's actions and thoughts.",
      },
      {
        question: "What is 'Ikhlas'?",
        options: ["Showing off", "Sincerity", "Hypocrisy", "Jealousy"],
        correctAnswer: "Sincerity",
        explanation:
          "Ikhlas refers to sincerity of intention, performing acts of worship solely for the sake of Allah, not for recognition or praise from others.",
      },
      {
        question: "What is 'Riya'?",
        options: ["Sincerity", "Showing off in worship", "Patience", "Gratitude"],
        correctAnswer: "Showing off in worship",
        explanation:
          "Riya refers to performing acts of worship or good deeds with the intention of gaining praise or recognition from others, rather than seeking Allah's pleasure.",
      },
      // Additional 20 Easy Questions
      {
        question: "What is the role of gratitude (Shukr) in Tazkiyah?",
        options: [
          "It is unimportant",
          "It purifies the heart by recognizing Allah’s blessings",
          "It is only for material blessings",
          "It replaces prayer",
        ],
        correctAnswer: "It purifies the heart by recognizing Allah’s blessings",
        explanation:
          "Shukr (gratitude) fosters contentment and purifies the heart by acknowledging Allah’s blessings, as emphasized in Surah Ibrahim (14:7).",
      },
      {
        question: "Which Quranic verse emphasizes the importance of purifying the soul?",
        options: [
          "Surah Al-Baqarah (2:222)",
          "Surah Ash-Sharh (94:1-3)",
          "Surah Ash-Shams (91:9-10)",
          "Surah Al-Fatiha (1:5)",
        ],
        correctAnswer: "Surah Ash-Shams (91:9-10)",
        explanation:
          "Surah Ash-Shams (91:9-10) states, 'He has succeeded who purifies it, and he has failed who instills it with corruption,' highlighting Tazkiyah’s importance.",
      },
      {
        question: "What is the opposite of hypocrisy (Nifaq) in Tazkiyah?",
        options: ["Pride", "Sincerity (Ikhlas)", "Envy", "Greed"],
        correctAnswer: "Sincerity (Ikhlas)",
        explanation:
          "Hypocrisy (Nifaq) involves insincere intentions, while Ikhlas (sincerity) ensures actions are for Allah alone, purifying the heart.",
      },
      {
        question: "What is the benefit of regular Salah in Tazkiyah?",
        options: [
          "It is only for physical exercise",
          "It prevents indecency and evil",
          "It is optional for spiritual growth",
          "It replaces other worship",
        ],
        correctAnswer: "It prevents indecency and evil",
        explanation:
          "Surah Al-Ankabut (29:45) states, 'Indeed, prayer prohibits immorality and wrongdoing,' making Salah vital for spiritual purification.",
      },
      {
        question: "What is ‘Tawakkul’ in Tazkiyah?",
        options: [
          "Relying on oneself completely",
          "Trusting in Allah while taking action",
          "Avoiding effort and hoping for results",
          "Seeking help from others",
        ],
        correctAnswer: "Trusting in Allah while taking action",
        explanation:
          "Tawakkul involves trusting Allah while making effort, strengthening reliance on Him and aiding Tazkiyah (Surah Al-Imran 3:159).",
      },
      {
        question: "What is the significance of fasting in Tazkiyah?",
        options: [
          "It is only for physical health",
          "It develops self-control and Taqwa",
          "It is optional for spiritual growth",
          "It replaces prayer",
        ],
        correctAnswer: "It develops self-control and Taqwa",
        explanation:
          "Fasting fosters Taqwa and self-discipline, as stated in Surah Al-Baqarah (2:183), making it essential for Tazkiyah.",
      },
      {
        question: "What is the role of charity (Sadaqah) in Tazkiyah?",
        options: [
          "It is only for the poor",
          "It purifies wealth and the heart",
          "It is a minor act",
          "It is unrelated to Tazkiyah",
        ],
        correctAnswer: "It purifies wealth and the heart",
        explanation:
          "Sadaqah purifies wealth and the heart by fostering generosity, as mentioned in Surah At-Tawbah (9:103).",
      },
      {
        question: "What does the Quran say about a sound heart in Tazkiyah?",
        options: [
          "The heart is unimportant",
          "A sound heart is essential for success",
          "The heart cannot be purified",
          "The heart is only physical",
        ],
        correctAnswer: "A sound heart is essential for success",
        explanation:
          "Surah Ash-Shu’ara (26:89) states, 'The Day when neither wealth nor children will avail, but only one who comes to Allah with a sound heart.'",
      },
      {
        question: "What is the role of good company in Tazkiyah?",
        options: [
          "It has no impact",
          "It encourages righteous behavior",
          "It distracts from worship",
          "It is only for scholars",
        ],
        correctAnswer: "It encourages righteous behavior",
        explanation:
          "The Prophet (PBUH) said, 'A person is likely to follow the faith of his friend' (Abu Dawud), emphasizing good company’s role in Tazkiyah.",
      },
      {
        question: "What is ‘Hubb al-Dunya’ in Tazkiyah?",
        options: [
          "Love for charity",
          "Love for the world over the Hereafter",
          "Love for knowledge",
          "Love for prayer",
        ],
        correctAnswer: "Love for the world over the Hereafter",
        explanation:
          "Hubb al-Dunya (excessive love for worldly matters) corrupts the heart, hindering Tazkiyah (Hadith: Muslim).",
      },
      {
        question: "What is the importance of seeking knowledge in Tazkiyah?",
        options: [
          "It is optional",
          "It strengthens faith and purifies intentions",
          "It is only for scholars",
          "It replaces worship",
        ],
        correctAnswer: "It strengthens faith and purifies intentions",
        explanation:
          "Islamic knowledge clarifies obligations and purifies intentions, vital for Tazkiyah (Hadith: 'Seeking knowledge is obligatory' - Ibn Majah).",
      },
      {
        question: "What is the role of supplication (Dua) in Tazkiyah?",
        options: [
          "It is irrelevant",
          "It connects the heart to Allah",
          "It is only for emergencies",
          "It replaces obligatory acts",
        ],
        correctAnswer: "It connects the heart to Allah",
        explanation:
          "Dua fosters humility and reliance on Allah, as the Prophet (PBUH) said, 'Dua is the essence of worship' (Tirmidhi).",
      },
      {
        question: "What is ‘Hilm’ in Tazkiyah?",
        options: ["Anger", "Forbearance", "Pride", "Jealousy"],
        correctAnswer: "Forbearance",
        explanation:
          "Hilm refers to forbearance and gentleness, a quality that purifies the heart by controlling anger (Hadith: Bukhari).",
      },
      {
        question: "What is the role of reflection (Tafakkur) in Tazkiyah?",
        options: [
          "It is unnecessary",
          "It deepens understanding of Allah’s signs",
          "It is only for scholars",
          "It replaces Salah",
        ],
        correctAnswer: "It deepens understanding of Allah’s signs",
        explanation:
          "Tafakkur (reflection) on Allah’s creation strengthens faith, as encouraged in Surah Al-Imran (3:191).",
      },
      {
        question: "What is the harm of backbiting (Gheebah) in Tazkiyah?",
        options: [
          "It purifies the heart",
          "It corrupts the heart and nullifies good deeds",
          "It is a minor sin",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart and nullifies good deeds",
        explanation:
          "Gheebah is forbidden in Surah Al-Hujurat (49:12) and corrupts the heart by fostering negativity.",
      },
      {
        question: "What is the role of humility (Tawadu) in Tazkiyah?",
        options: [
          "It increases pride",
          "It purifies the heart by removing arrogance",
          "It is irrelevant",
          "It is only for leaders",
        ],
        correctAnswer: "It purifies the heart by removing arrogance",
        explanation:
          "Tawadu (humility) purifies the heart, as the Prophet (PBUH) said, 'He who humbles himself for Allah’s sake, Allah elevates him' (Muslim).",
      },
      {
        question: "What is the effect of excessive speech in Tazkiyah?",
        options: [
          "It strengthens the heart",
          "It leads to sins like lying or backbiting",
          "It is always beneficial",
          "It replaces Dhikr",
        ],
        correctAnswer: "It leads to sins like lying or backbiting",
        explanation:
          "The Prophet (PBUH) warned that excessive speech can lead to sins, harming Tazkiyah (Hadith: Tirmidhi).",
      },
      {
        question: "What is the role of Quran recitation in Tazkiyah?",
        options: [
          "It is only for scholars",
          "It purifies the heart and brings tranquility",
          "It is optional",
          "It replaces Salah",
        ],
        correctAnswer: "It purifies the heart and brings tranquility",
        explanation:
          "Reciting the Quran purifies the heart, as it is described as a healing and mercy (Surah Al-Isra 17:82).",
      },
      {
        question: "What is the concept of ‘Zuhd’ in Tazkiyah?",
        options: [
          "Excessive love for wealth",
          "Detachment from worldly desires",
          "Seeking fame",
          "Avoiding worship",
        ],
        correctAnswer: "Detachment from worldly desires",
        explanation:
          "Zuhd is detachment from worldly desires, focusing on the Hereafter, which purifies the heart (Hadith: Ibn Majah).",
      },
      {
        question: "What is the benefit of night prayer (Qiyam al-Layl) in Tazkiyah?",
        options: [
          "It is only for Ramadan",
          "It strengthens connection with Allah",
          "It is unnecessary",
          "It replaces daily prayers",
        ],
        correctAnswer: "It strengthens connection with Allah",
        explanation:
          "Qiyam al-Layl fosters closeness to Allah, purifying the heart (Hadith: 'The best prayer after obligatory ones is the night prayer' - Muslim).",
      },
    ],
    advanced: [
      {
        question: "According to Imam Al-Ghazali, what is the key to purifying the heart?",
        options: [
          "Accumulating wealth",
          "Removing spiritual diseases and cultivating virtues",
          "Performing more rituals",
          "Avoiding all social interactions",
        ],
        correctAnswer: "Removing spiritual diseases and cultivating virtues",
        explanation:
          "Imam Al-Ghazali, in 'Ihya Ulum al-Din,' emphasizes that Tazkiyah involves removing diseases like envy and pride while cultivating virtues like sincerity and humility.",
      },
      {
        question: "What is the difference between ‘Tawbah’ and ‘Istighfar’?",
        options: [
          "They are the same",
          "Tawbah is repentance with resolve, Istighfar is seeking forgiveness",
          "Tawbah is for minor sins, Istighfar for major sins",
          "Tawbah is verbal, Istighfar is in the heart",
        ],
        correctAnswer: "Tawbah is repentance with resolve, Istighfar is seeking forgiveness",
        explanation:
          "Tawbah involves sincere regret and resolve not to sin again, while Istighfar is the act of seeking Allah’s forgiveness, often as a general practice.",
      },
      {
        question: "What is the role of ‘Muhasabah’ (self-accountability) in Tazkiyah?",
        options: [
          "Judging others",
          "Reflecting on one’s actions and intentions",
          "Ignoring one’s faults",
          "Focusing only on good deeds",
        ],
        correctAnswer: "Reflecting on one’s actions and intentions",
        explanation:
          "Muhasabah involves regularly assessing one’s actions and intentions to identify and correct faults, a key practice in Tazkiyah.",
      },
      {
        question: "What is the impact of ‘Hasad’ (envy) on the heart according to Islamic teachings?",
        options: [
          "It strengthens faith",
          "It consumes good deeds and corrupts the heart",
          "It is a minor sin",
          "It is permissible in some cases",
        ],
        correctAnswer: "It consumes good deeds and corrupts the heart",
        explanation:
          "The Prophet (PBUH) said, 'Beware of envy, for it consumes good deeds like fire consumes wood' (Abu Dawud), showing its harm to Tazkiyah.",
      },
      {
        question: "What is the concept of ‘Tawheed’ in relation to Tazkiyah?",
        options: [
          "It is unrelated to Tazkiyah",
          "It ensures sincerity in worship, purifying intentions",
          "It is only about belief in Allah",
          "It replaces other acts of worship",
        ],
        correctAnswer: "It ensures sincerity in worship, purifying intentions",
        explanation:
          "Tawheed, particularly Tawheed al-Uluhiyyah, ensures that worship is directed solely to Allah, purifying intentions and aiding Tazkiyah.",
      },
      {
        question: "What is the significance of ‘Sidq’ (truthfulness) in Tazkiyah?",
        options: [
          "It is only about speech",
          "It purifies the heart by aligning actions with faith",
          "It is optional",
          "It is only for prophets",
        ],
        correctAnswer: "It purifies the heart by aligning actions with faith",
        explanation:
          "Sidq (truthfulness) in speech, actions, and intentions purifies the heart, as emphasized in Surah Al-Ahzab (33:35).",
      },
      {
        question: "What is the role of ‘Adl’ (justice) in Tazkiyah?",
        options: [
          "It is only for judges",
          "It purifies the heart by ensuring fairness",
          "It is irrelevant to Tazkiyah",
          "It replaces charity",
        ],
        correctAnswer: "It purifies the heart by ensuring fairness",
        explanation:
          "Adl (justice) in dealings purifies the heart by fostering fairness and integrity, as commanded in Surah An-Nisa (4:135).",
      },
      {
        question: "What is the impact of ‘Kibr’ (pride) on Tazkiyah?",
        options: [
          "It enhances spiritual growth",
          "It corrupts the heart and leads to rejection by Allah",
          "It is a minor flaw",
          "It is permissible for scholars",
        ],
        correctAnswer: "It corrupts the heart and leads to rejection by Allah",
        explanation:
          "The Prophet (PBUH) said, 'He who has an atom’s weight of pride in his heart will not enter Paradise' (Muslim), showing Kibr’s harm to Tazkiyah.",
      },
      {
        question: "What is the role of ‘Ihsan’ in Tazkiyah?",
        options: [
          "Worshipping as if you see Allah",
          "Performing minimal worship",
          "Focusing only on outward actions",
          "Ignoring intentions",
        ],
        correctAnswer: "Worshipping as if you see Allah",
        explanation:
          "Ihsan, as defined in Hadith Jibril (Bukhari), is to worship Allah as if you see Him, purifying the heart through heightened awareness.",
      },
      {
        question: "What is the concept of ‘Qalb Saleem’ (sound heart) in Tazkiyah?",
        options: [
          "A heart free of physical disease",
          "A heart free of spiritual diseases",
          "A heart that avoids worship",
          "A heart focused on wealth",
        ],
        correctAnswer: "A heart free of spiritual diseases",
        explanation:
          "A Qalb Saleem is a heart purified of spiritual diseases like envy and pride, as mentioned in Surah Ash-Shu’ara (26:89).",
      },
      // Additional 20 Advanced Questions
      {
        question: "How does ‘Rida’ (contentment) contribute to Tazkiyah?",
        options: [
          "It increases desire for wealth",
          "It purifies the heart by accepting Allah’s decree",
          "It is irrelevant",
          "It leads to laziness",
        ],
        correctAnswer: "It purifies the heart by accepting Allah’s decree",
        explanation:
          "Rida involves accepting Allah’s decree with contentment, purifying the heart from discontent (Hadith: Muslim).",
      },
      {
        question: "What is the role of ‘Khushu’ (humility in prayer) in Tazkiyah?",
        options: [
          "It is only for scholars",
          "It deepens spiritual connection in worship",
          "It is unnecessary",
          "It replaces other prayers",
        ],
        correctAnswer: "It deepens spiritual connection in worship",
        explanation:
          "Khushu ensures focus and humility in prayer, purifying the heart (Surah Al-Mu’minun 23:2).",
      },
      {
        question: "What is the impact of ‘Ghaflah’ (heedlessness) on Tazkiyah?",
        options: [
          "It enhances focus on Allah",
          "It corrupts the heart by forgetting Allah",
          "It is a minor issue",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart by forgetting Allah",
        explanation:
          "Ghaflah leads to spiritual neglect, as warned in Surah Al-A’raf (7:205), harming Tazkiyah.",
      },
      {
        question: "What is the role of ‘Haya’ (modesty) in Tazkiyah?",
        options: [
          "It is only for women",
          "It purifies the heart by fostering shame in sin",
          "It is irrelevant",
          "It leads to pride",
        ],
        correctAnswer: "It purifies the heart by fostering shame in sin",
        explanation:
          "Haya is a branch of faith that prevents sin, purifying the heart (Hadith: Bukhari).",
      },
      {
        question: "How does ‘Tawadud’ (love and friendliness) aid Tazkiyah?",
        options: [
          "It distracts from worship",
          "It purifies the heart by fostering good relations",
          "It is only for leaders",
          "It is unnecessary",
        ],
        correctAnswer: "It purifies the heart by fostering good relations",
        explanation:
          "Tawadud fosters love and unity, purifying the heart (Hadith: 'None of you truly believes until he loves for his brother what he loves for himself' - Bukhari).",
      },
      {
        question: "What is the danger of ‘Ujb’ (self-admiration) in Tazkiyah?",
        options: [
          "It enhances self-esteem",
          "It corrupts the heart by attributing success to oneself",
          "It is a minor flaw",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart by attributing success to oneself",
        explanation:
          "Ujb leads to arrogance by attributing blessings to oneself, harming Tazkiyah (Al-Ghazali, Ihya).",
      },
      {
        question: "What is the role of ‘Sabr’ in facing trials for Tazkiyah?",
        options: [
          "It is irrelevant",
          "It purifies the heart through perseverance",
          "It leads to despair",
          "It is only for prophets",
        ],
        correctAnswer: "It purifies the heart through perseverance",
        explanation:
          "Sabr in trials purifies the heart, as Allah says, 'We will surely test you… but give good tidings to the patient' (Surah Al-Baqarah 2:155).",
      },
      {
        question: "What is the role of ‘Adab’ (good manners) in Tazkiyah?",
        options: [
          "It is only for social settings",
          "It purifies the heart through respectful behavior",
          "It is unnecessary",
          "It replaces worship",
        ],
        correctAnswer: "It purifies the heart through respectful behavior",
        explanation:
          "Adab reflects a purified heart, as the Prophet (PBUH) said, 'The best of you are those with the best manners' (Bukhari).",
      },
      {
        question: "What is the impact of ‘Raghbah’ (excessive desire) on Tazkiyah?",
        options: [
          "It strengthens faith",
          "It corrupts the heart by prioritizing worldly gains",
          "It is a minor issue",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart by prioritizing worldly gains",
        explanation:
          "Raghbah distracts from the Hereafter, harming Tazkiyah (Surah Al-Takathur 102:1-2).",
      },
      {
        question: "What is the role of ‘Tafwid’ (delegating affairs to Allah) in Tazkiyah?",
        options: [
          "It leads to laziness",
          "It purifies the heart by trusting Allah’s plan",
          "It is only for scholars",
          "It replaces effort",
        ],
        correctAnswer: "It purifies the heart by trusting Allah’s plan",
        explanation:
          "Tafwid involves entrusting outcomes to Allah, purifying the heart from worry (Hadith: Tirmidhi).",
      },
      {
        question: "How does ‘Qana’ah’ (contentment with sufficiency) aid Tazkiyah?",
        options: [
          "It increases greed",
          "It purifies the heart by reducing worldly attachment",
          "It is irrelevant",
          "It leads to poverty",
        ],
        correctAnswer: "It purifies the heart by reducing worldly attachment",
        explanation:
          "Qana’ah fosters satisfaction with what Allah provides, purifying the heart (Hadith: Muslim).",
      },
      {
        question: "What is the role of ‘Tadabbur’ (contemplation of the Quran) in Tazkiyah?",
        options: [
          "It is only for scholars",
          "It deepens understanding and purifies the heart",
          "It is unnecessary",
          "It replaces Salah",
        ],
        correctAnswer: "It deepens understanding and purifies the heart",
        explanation:
          "Tadabbur involves reflecting on the Quran’s meanings, purifying the heart (Surah Sad 38:29).",
      },
      {
        question: "What is the danger of ‘Takabbur’ (arrogance) in Tazkiyah?",
        options: [
          "It enhances status",
          "It corrupts the heart and distances one from Allah",
          "It is a minor flaw",
          "It is permissible",
        ],
        correctAnswer: "It corrupts the heart and distances one from Allah",
        explanation:
          "Takabbur is a major sin that corrupts the heart, as Allah says, 'I will turn away from My signs those who are arrogant' (Surah Al-A’raf 7:146).",
      },
      {
        question: "What is the role of ‘Suhbah’ (companionship) in Tazkiyah?",
        options: [
          "It distracts from worship",
          "It purifies the heart through righteous company",
          "It is only for scholars",
          "It is unnecessary",
        ],
        correctAnswer: "It purifies the heart through righteous company",
        explanation:
          "Righteous companionship purifies the heart, as the Prophet (PBUH) said, 'A good friend is like a perfume seller' (Muslim).",
      },
      {
        question: "What is the impact of ‘Hirs’ (greed) on Tazkiyah?",
        options: [
          "It strengthens faith",
          "It corrupts the heart by prioritizing wealth",
          "It is a minor issue",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart by prioritizing wealth",
        explanation:
          "Hirs leads to spiritual corruption by focusing on wealth, harming Tazkiyah (Hadith: Bukhari).",
      },
      {
        question: "What is the role of ‘Istiqamah’ (steadfastness) in Tazkiyah?",
        options: [
          "It is irrelevant",
          "It purifies the heart through consistency in worship",
          "It is only for prophets",
          "It leads to extremism",
        ],
        correctAnswer: "It purifies the heart through consistency in worship",
        explanation:
          "Istiqamah ensures consistent righteousness, purifying the heart (Surah Fussilat 41:30).",
      },
      {
        question: "What is the role of ‘Wara’ (scrupulousness) in Tazkiyah?",
        options: [
          "It leads to doubt",
          "It purifies the heart by avoiding doubtful matters",
          "It is unnecessary",
          "It replaces obligatory acts",
        ],
        correctAnswer: "It purifies the heart by avoiding doubtful matters",
        explanation:
          "Wara involves avoiding doubtful matters to protect faith, aiding Tazkiyah (Hadith: Bukhari).",
      },
      {
        question: "What is the impact of ‘Rancor’ (holding grudges) on Tazkiyah?",
        options: [
          "It strengthens bonds",
          "It corrupts the heart by fostering hatred",
          "It is a minor issue",
          "It is encouraged",
        ],
        correctAnswer: "It corrupts the heart by fostering hatred",
        explanation:
          "Holding grudges corrupts the heart, as the Prophet (PBUH) encouraged forgiveness (Hadith: Muslim).",
      },
      {
        question: "What is the role of ‘Ta’ah’ (obedience to Allah) in Tazkiyah?",
        options: [
          "It is optional",
          "It purifies the heart through submission",
          "It is only for scholars",
          "It replaces good deeds",
        ],
        correctAnswer: "It purifies the heart through submission",
        explanation:
          "Ta’ah ensures submission to Allah’s commands, purifying the heart (Surah Al-Nur 24:54).",
      },
      {
        question: "What is the role of ‘Khawf’ (fear of Allah) in Tazkiyah?",
        options: [
          "It leads to despair",
          "It purifies the heart by preventing sin",
          "It is unnecessary",
          "It replaces hope",
        ],
        correctAnswer: "It purifies the heart by preventing sin",
        explanation:
          "Khawf, balanced with hope, prevents sin and purifies the heart (Surah Al-Zumar 39:9).",
      },
    ],
  },
};

export default tazkiyahCategory;
