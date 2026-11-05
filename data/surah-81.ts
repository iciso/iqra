import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah At-Takwir (81) — IQRA-compatible three-level question bank.
 *
 * Easy: the original 30 phrase-translation questions are retained from the
 * supplied source file, converted to IQRA format without modifying their content.
 *
 * Intermediate: 35 brand-new questions on the surah's themes, Makkan context,
 * tafsir, asbab al-nuzul, seerah events, and derived lessons from Surah At-Takwir.
 *
 * Advanced: 35 Arabic vocabulary questions drawn from words occurring in
 * Surah At-Takwir, testing lexical roots and meanings in context.
 */

const surah81EasyQuestions: QuizQuestion[] = [
  {
    "id": "q1",
    "question": "What does the Arabic phrase إِذَا الشَّمْسُ كُوِّرَتْ in the surah mean?",
    "options": [
      "When the stars are scattered",
      "When the mountains are moved",
      "When the oceans are set ablaze",
      "When the sun is folded up"
    ],
    "correctAnswer": "When the sun is folded up",
    "explanation": "إِذَا الشَّمْسُ كُوِّرَتْ means 'When the sun is folded up,' roots ش-م-س (sun) and ك-و-ر (fold) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q2",
    "question": "What does the Arabic phrase وَإِذَا النُّجُومُ انكَدَرَتْ mean?",
    "options": [
      "And when the stars fall",
      "And when the seas burst forth",
      "And when the graves are overturned",
      "And when the sky is torn"
    ],
    "correctAnswer": "And when the stars fall",
    "explanation": "وَإِذَا النُّجُومُ انكَدَرَتْ means 'And when the stars fall,' roots ن-ج-م (stars) and ك-د-ر (fall/dim) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q3",
    "question": "What does the Arabic phrase وَإِذَا الْجِبَالُ سُيِّرَتْ mean?",
    "options": [
      "And when the winds are unleashed",
      "And when the mountains are set moving",
      "And when the earth is shaken",
      "And when the sun is darkened"
    ],
    "correctAnswer": "And when the mountains are set moving",
    "explanation": "وَإِذَا الْجِبَالُ سُيِّرَتْ means 'And when the mountains are set moving,' roots ج-ب-ل (mountains) and س-ي-ر (move) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q4",
    "question": "What does the Arabic phrase وَإِذَا الْعِشَارُ عُطِّلَتْ mean?",
    "options": [
      "And when pregnant camels are neglected",
      "And when wild beasts are gathered",
      "And when the oceans boil",
      "And when the sky is stripped away"
    ],
    "correctAnswer": "And when pregnant camels are neglected",
    "explanation": "وَإِذَا الْعِشَارُ عُطِّلَتْ means 'And when pregnant camels are neglected,' roots ع-ش-ر (camels) and ع-ط-ل (neglect) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q5",
    "question": "What does the Arabic phrase وَإِذَا الْوُحُوشُ حُشِرَتْ mean?",
    "options": [
      "And when the birds fly away",
      "And when the wild beasts are gathered",
      "And when the cattle are slaughtered",
      "And when the oceans are filled"
    ],
    "correctAnswer": "And when the wild beasts are gathered",
    "explanation": "وَإِذَا الْوُحُوشُ حُشِرَتْ means 'And when the wild beasts are gathered,' roots و-ح-ش (beasts) and ح-ش-ر (gather) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q6",
    "question": "What does the Arabic phrase وَإِذَا الْبِحَارُ سُجِّرَتْ mean?",
    "options": [
      "And when the seas are frozen",
      "And when the oceans are set ablaze",
      "And when the rivers dry up",
      "And when the springs overflow"
    ],
    "correctAnswer": "And when the oceans are set ablaze",
    "explanation": "وَإِذَا الْبِحَارُ سُجِّرَتْ means 'And when the oceans are set ablaze,' roots ب-ح-ر (seas) and س-ج-ر (blaze/fill) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q7",
    "question": "What does the Arabic phrase وَإِذَا النُّفُوسُ زُوِّجَتْ mean?",
    "options": [
      "And when souls are separated",
      "And when souls are paired",
      "And when souls are judged",
      "And when souls are created"
    ],
    "correctAnswer": "And when souls are paired",
    "explanation": "وَإِذَا النُّفُوسُ زُوِّجَتْ means 'And when souls are paired,' roots ن-ف-س (souls) and ز-و-ج (paired) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q8",
    "question": "What does the Arabic phrase وَإِذَا الْمَوْءُودَةُ سُئِلَتْ mean?",
    "options": [
      "And when the buried daughter is asked",
      "And when the newborn child is questioned",
      "And when the mother is interrogated",
      "And when the orphan is recompensed"
    ],
    "correctAnswer": "And when the buried daughter is asked",
    "explanation": "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ means 'And when the buried daughter is asked,' roots و-أ-د (buried alive) and س-أ-ل (asked) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q9",
    "question": "What does the Arabic phrase بِأَيِّ ذَنْبٍ قُتِلَتْ mean?",
    "options": [
      "For what crime she was forgiven",
      "For what sin she was killed",
      "For what wealth she was exiled",
      "For what speech she was blamed"
    ],
    "correctAnswer": "For what sin she was killed",
    "explanation": "بِأَيِّ ذَنْبٍ قُتِلَتْ means 'For what sin she was killed,' roots ذ-ن-ب (sin) and ق-ت-ل (killed) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q10",
    "question": "What does the Arabic phrase وَإِذَا الصُّحُفُ نُشِرَتْ mean?",
    "options": [
      "And when the scrolls are hidden",
      "And when the records are rolled up",
      "And when the pages are spread open",
      "And when the books are burned"
    ],
    "correctAnswer": "And when the pages are spread open",
    "explanation": "وَإِذَا الصُّحُفُ نُشِرَتْ means 'And when the pages are spread open,' roots ص-ح-ف (pages) and ن-ش-ر (spread) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q11",
    "question": "What does the Arabic phrase وَإِذَا السَّمَاءُ كُشِطَتْ mean?",
    "options": [
      "And when the sky is stripped away",
      "And when the sky is painted",
      "And when the sky is rebuilt",
      "And when the sky is opened"
    ],
    "correctAnswer": "And when the sky is stripped away",
    "explanation": "وَإِذَا السَّمَاءُ كُشِطَتْ means 'And when the sky is stripped away,' roots س-م-و (sky) and ك-ش-ط (strip off) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q12",
    "question": "What does the Arabic phrase وَإِذَا الْجَحِيمُ سُعِّرَتْ mean?",
    "options": [
      "And when Hellfire is cooled",
      "And when Hellfire is ignited",
      "And when Hellfire is hidden",
      "And when Hellfire is guarded"
    ],
    "correctAnswer": "And when Hellfire is ignited",
    "explanation": "وَإِذَا الْجَحِيمُ سُعِّرَتْ means 'And when Hellfire is ignited/blazed,' roots ج-ح-م (Hell) and س-ع-ر (ignite) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q13",
    "question": "What does the Arabic phrase وَإِذَا الْجَنَّةُ أُزْلِفَتْ mean?",
    "options": [
      "And when Paradise is brought near",
      "And when Paradise is closed",
      "And when Paradise is expanded",
      "And when Paradise is described"
    ],
    "correctAnswer": "And when Paradise is brought near",
    "explanation": "وَإِذَا الْجَنَّةُ أُزْلِفَتْ means 'And when Paradise is brought near,' roots ج-ن-ن (Paradise) and ز-ل-ف (bring near) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q14",
    "question": "What does the Arabic phrase عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ mean?",
    "options": [
      "Every soul will know what it has left behind",
      "Every soul will know what it has brought forth",
      "Every soul will know what it has forgotten",
      "Every soul will know what it has inherited"
    ],
    "correctAnswer": "Every soul will know what it has brought forth",
    "explanation": "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ means 'Every soul will know what it has brought forth,' roots ع-ل-م (know), ن-ف-س (soul), ح-ض-ر (bring/present) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q15",
    "question": "What does the Arabic phrase فَلَا أُقْسِمُ بِالْخُنَّسِ mean?",
    "options": [
      "So I swear by the retreating stars",
      "So I swear by the bright morning",
      "So I swear by the soaring birds",
      "So I swear by the flowing rivers"
    ],
    "correctAnswer": "So I swear by the retreating stars",
    "explanation": "فَلَا أُقْسِمُ بِالْخُنَّسِ means 'So I swear by the retreating stars,' roots ق-س-م (swear) and خ-ن-س (retreat/hide) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q16",
    "question": "What does the Arabic phrase الْجَوَارِ الْكُنَّسِ mean?",
    "options": [
      "The rising and shining ones",
      "The running and hiding ones",
      "The fixed and glowing ones",
      "The fallen and scattered ones"
    ],
    "correctAnswer": "The running and hiding ones",
    "explanation": "الْجَوَارِ الْكُنَّسِ means 'The running and hiding/sweeping stars,' roots ج-ر-ي (run) and ك-ن-س (hide/sweep) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q17",
    "question": "What does the Arabic phrase وَاللَّيْلِ إِذَا عَسْعَسَ mean?",
    "options": [
      "And by the night when it departs/darkens",
      "And by the night when it is bright",
      "And by the night when it is short",
      "And by the night when it is calm"
    ],
    "correctAnswer": "And by the night when it departs/darkens",
    "explanation": "وَاللَّيْلِ إِذَا عَسْعَسَ means 'And by the night when it departs or darkens,' roots ل-ي-ل (night) and ع-س-ع-س (darken/retreat) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q18",
    "question": "What does the Arabic phrase وَالصُّبْحِ إِذَا تَنَفَّسَ mean?",
    "options": [
      "And by the dawn when it breathes/brightens",
      "And by the dawn when it fades",
      "And by the dawn when it is cold",
      "And by the dawn when it storms"
    ],
    "correctAnswer": "And by the dawn when it breathes/brightens",
    "explanation": "وَالصُّبْحِ إِذَا تَنَفَّسَ means 'And by the dawn when it breathes (begins to shine),' roots ص-ب-ح (morning) and ن-ف-س (breathe) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q19",
    "question": "What does the Arabic phrase إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ mean?",
    "options": [
      "Indeed, it is the word of a poet",
      "Indeed, it is the word of a noble messenger",
      "Indeed, it is the word of a soothsayer",
      "Indeed, it is the word of a wise king"
    ],
    "correctAnswer": "Indeed, it is the word of a noble messenger",
    "explanation": "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ means 'Indeed, it is the word of a noble messenger (Jibril),' roots ق-و-ل (word), ر-س-ل (messenger), ك-ر-م (noble) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q20",
    "question": "What does the Arabic phrase ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ mean?",
    "options": [
      "Possessor of power and high status with the Owner of the Throne",
      "Possessor of wealth and authority among men",
      "Possessor of knowledge and books on earth",
      "Possessor of strength and armies in battle"
    ],
    "correctAnswer": "Possessor of power and high status with the Owner of the Throne",
    "explanation": "ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ means 'Possessor of power, secure with the Owner of the Throne,' roots ق-و-ي (power), ع-ر-ش (throne), م-ك-ن (status) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q21",
    "question": "What does the Arabic phrase مُطَاعٍ ثَمَّ أَمِينٍ mean?",
    "options": [
      "Obeyed there and trustworthy",
      "Followed there and powerful",
      "Respected there and silent",
      "Honored there and swift"
    ],
    "correctAnswer": "Obeyed there and trustworthy",
    "explanation": "مُطَاعٍ ثَمَّ أَمِينٍ means 'Obeyed there (in the heavens) and trustworthy,' roots ط-و-ع (obeyed) and أ-م-ن (trustworthy) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q22",
    "question": "What does the Arabic phrase وَمَا صَاحِبُكُم بِمَجْنُونٍ mean?",
    "options": [
      "And your companion is not a poet",
      "And your companion is not mad",
      "And your companion is not a liar",
      "And your companion is not a sorcerer"
    ],
    "correctAnswer": "And your companion is not mad",
    "explanation": "وَمَا صَاحِبُكُم بِمَجْنُونٍ means 'And your companion (Prophet Muhammad) is not mad,' roots ص-ح-ب (companion) and ج-ن-ن (madness) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q23",
    "question": "What does the Arabic phrase وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ mean?",
    "options": [
      "And certainly he saw him in the clear horizon",
      "And certainly he heard him in the silent night",
      "And certainly he knew him in the city",
      "And certainly he followed him in the cave"
    ],
    "correctAnswer": "And certainly he saw him in the clear horizon",
    "explanation": "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ means 'And certainly he saw him (Jibril) in the clear horizon,' roots ر-ؤ-ي (see), أ-ف-ق (horizon), ب-ي-ن (clear) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q24",
    "question": "What does the Arabic phrase وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ mean?",
    "options": [
      "And he is not a keeper of secrets",
      "And he is not withholding concerning the unseen",
      "And he is not neglectful of the message",
      "And he is not doubtful of the revelation"
    ],
    "correctAnswer": "And he is not withholding concerning the unseen",
    "explanation": "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ means 'And he is not withholding/greedy concerning the unseen,' roots غ-ي-ب (unseen) and ض-ن-ن (withhold) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q25",
    "question": "What does the Arabic phrase وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ mean?",
    "options": [
      "And it is not the word of an expelled devil",
      "And it is not the word of an evil king",
      "And it is not the word of a false prophet",
      "And it is not the word of a straying poet"
    ],
    "correctAnswer": "And it is not the word of an expelled devil",
    "explanation": "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَّجِيمٍ means 'And it is not the word of an accursed/expelled devil,' roots ش-ي-ط (devil) and ر-ج-م (stoned/expelled) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q26",
    "question": "What does the Arabic phrase فَأَيْنَ تَذْهَبُونَ mean?",
    "options": [
      "So where are you traveling?",
      "So where are you going?",
      "So where are you hiding?",
      "So where are you fleeing?"
    ],
    "correctAnswer": "So where are you going?",
    "explanation": "فَأَيْنَ تَذْهَبُونَ means 'So where are you going?' roots ذ-ه-ب (go) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q27",
    "question": "What does the Arabic phrase إِنْ هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ mean?",
    "options": [
      "It is not except a warning for the inhabitants",
      "It is not except a reminder to the worlds",
      "It is not except a story for the nations",
      "It is not except a law for the believers"
    ],
    "correctAnswer": "It is not except a reminder to the worlds",
    "explanation": "إِنْ هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ means 'It is not except a reminder to the worlds,' roots ذ-ك-ر (reminder) and ع-ل-م (worlds) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q28",
    "question": "What does the Arabic phrase لِمَنْ شَاءَ مِنْكُمْ أَنْ يَسْتَقِيمَ mean?",
    "options": [
      "For whoever among you wills to be guided",
      "For whoever among you wills to take a right course",
      "For whoever among you wills to gain wealth",
      "For whoever among you wills to be patient"
    ],
    "correctAnswer": "For whoever among you wills to take a right course",
    "explanation": "لِمَنْ شَاءَ مِنْكُمْ أَنْ يَسْتَقِيمَ means 'For whoever among you wills to take a right course (be steadfast/straight),' roots ش-ي-ء (will) and ق-و-م (straight/steadfast) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q29",
    "question": "What does the Arabic phrase وَمَا تَشَاءُونَ إِلَّا أَنْ يَشَاءَ اللَّهُ mean?",
    "options": [
      "And you do not will except that Allah wills",
      "And you do not know except what Allah teaches",
      "And you do not act except what Allah commands",
      "And you do not speak except what Allah permits"
    ],
    "correctAnswer": "And you do not will except that Allah wills",
    "explanation": "وَمَا تَشَاءُونَ إِلَّا أَنْ يَشَاءَ اللَّهُ means 'And you do not will except that Allah wills,' roots ش-ي-ء (will) and أ-ل-ه (Allah) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q30",
    "question": "What does the Arabic phrase رَبُّ الْعَالَمِينَ mean?",
    "options": [
      "The Creator of the heavens",
      "The King of the universe",
      "The Lord of the worlds",
      "The Master of judgment"
    ],
    "correctAnswer": "The Lord of the worlds",
    "explanation": "رَبُّ الْعَالَمِينَ means 'The Lord of the worlds,' roots ر-ب-ب (Lord) and ع-ل-م (worlds) (MyIslam, Al-Maududi)."
  }
];

const surah81IntermediateQuestions: QuizQuestion[] = [
  {
    "id": "iq1",
    "question": "Surah At-Takwir is classified as which type of surah according to its place of revelation?",
    "options": [
      "Madinan",
      "Makkan",
      "Partially Makkan and partially Madinan",
      "Revealed during the migration to Abyssinia"
    ],
    "correctAnswer": "Makkan",
    "explanation": "Surah At-Takwir is a Makkan surah focusing on cosmic signs of the Day of Judgment, accountability, and the divine authenticity of the Quran."
  },
  {
    "id": "iq2",
    "question": "What is the primary theme of the first section (verses 1-14) of Surah At-Takwir?",
    "options": [
      "Detailed laws of inheritance and marriage",
      "The cataclysmic physical upheavals of the Day of Resurrection",
      "Praising the historical battles of early Muslims",
      "Instructions on daily prayer and fasting"
    ],
    "correctAnswer": "The cataclysmic physical upheavals of the Day of Resurrection",
    "explanation": "The opening verses vividly describe cosmic disruptions such as the sun folding up, stars falling, mountains moving, and oceans blazing."
  },
  {
    "id": "iq3",
    "question": "What pre-Islamic Arabian custom involving female children is specifically condemned and highlighted in verses 8-9?",
    "options": [
      "Denying daughters the right to education",
      "Burying newborn infant daughters alive (Al-Wa'd)",
      "Arranging marriages without consent",
      "Excluding women from inheritance"
    ],
    "correctAnswer": "Burying newborn infant daughters alive (Al-Wa'd)",
    "explanation": "Verse 8-9 mention the buried female infant being asked for what sin she was slain, powerfully rebuking the jahiliyyah practice of infanticide."
  },
  {
    "id": "iq4",
    "question": "According to Ibn Kathir, why is the buried infant questioned on the Day of Judgment?",
    "options": [
      "To punish her for parental disobedience",
      "To establish the utmost injustice done to her and to terrorize her murderer",
      "To test her knowledge of scripture",
      "To determine her placement in Purgatory"
    ],
    "correctAnswer": "To establish the utmost injustice done to her and to terrorize her murderer",
    "explanation": "Asking the innocent victim highlights the magnitude of the crime and shocks the conscience of the perpetrators."
  },
  {
    "id": "iq5",
    "question": "What oath does Allah swear in verses 15-16 using astronomical phenomena ('فَلَا أُقْسِمُ بِالْخُنَّسِ الْجَوَارِ الْكُنَّسِ')?",
    "options": [
      "By shooting stars and meteors",
      "By the retreating, running, and hiding stars/planets",
      "By the constellations of the zodiac",
      "By the phases of the moon"
    ],
    "correctAnswer": "By the retreating, running, and hiding stars/planets",
    "explanation": "Al-Khunnas and Al-Kunnas refer to celestial bodies that retreat during daylight and hide or sweep across their orbits."
  },
  {
    "id": "iq6",
    "question": "How do verses 17-18 poetically describe night and dawn?",
    "options": [
      "Night when it extends and dawn when it storms",
      "Night when it departs/darkens (as'asa) and dawn when it breathes/brightens (tanaffasa)",
      "Night when it freezes and dawn when it warms",
      "Night when it is silent and dawn when it speaks"
    ],
    "correctAnswer": "Night when it departs/darkens (as'asa) and dawn when it breathes/brightens (tanaffasa)",
    "explanation": "These vivid oaths emphasize the steady, majestic order of nature created by Allah."
  },
  {
    "id": "iq7",
    "question": "To whom does 'رَسُولٍ كَرِيمٍ' (A noble messenger) refer in verse 19?",
    "options": [
      "Prophet Muhammad ﷺ",
      "Angel Jibril (Gabriel)",
      "Prophet Ibrahim",
      "Prophet Musa"
    ],
    "correctAnswer": "Angel Jibril (Gabriel)",
    "explanation": "Exegetes agree that 'noble messenger' here refers to Angel Jibril, who brought the revelation from Allah."
  },
  {
    "id": "iq8",
    "question": "What prestigious attributes are ascribed to Angel Jibril in verses 20-21?",
    "options": [
      "Possessor of power, high rank with the Owner of the Throne, obeyed and trustworthy",
      "Leader of earthly armies and treasurer of rain",
      "Creator of celestial spheres and judge of nations",
      "Companion of Adam and intercessor for mankind"
    ],
    "correctAnswer": "Possessor of power, high rank with the Owner of the Throne, obeyed and trustworthy",
    "explanation": "Verses 20-21 highlight Jibril's supreme authority, station in the heavenly assembly, obedience among angels, and absolute trustworthiness."
  },
  {
    "id": "iq9",
    "question": "How does verse 22 defend Prophet Muhammad ﷺ against the accusations of the Quraysh?",
    "options": [
      "By declaring that he is a trained poet",
      "By affirming 'And your companion is not mad (bimahnoon)'",
      "By stating he is a wealthy king",
      "By claiming he is an angel"
    ],
    "correctAnswer": "By affirming 'And your companion is not mad (bimahnoon)'",
    "explanation": "The Quraysh accused the Prophet of being possessed by jinn or mad; Allah firmly refutes this slander."
  },
  {
    "id": "iq10",
    "question": "Where did the Prophet ﷺ see Angel Jibril in his true angelic form, as mentioned in verse 23?",
    "options": [
      "In a dream in Madinah",
      "On the clear horizon (bil-ufuq al-mubeen)",
      "Inside the Holy Kaaba",
      "At the summit of Mount Sinai"
    ],
    "correctAnswer": "On the clear horizon (bil-ufuq al-mubeen)",
    "explanation": "Verse 23 states that the Prophet saw Jibril clearly on the open horizon."
  },
  {
    "id": "iq11",
    "question": "What does 'وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ' (And he is not withholding concerning the unseen) mean regarding the Prophet ﷺ?",
    "options": [
      "He hides revelation from his followers",
      "He does not stingily withhold or alter the divine knowledge revealed to him",
      "He charges money for teaching scripture",
      "He predicts the future without divine permission"
    ],
    "correctAnswer": "He does not stingily withhold or alter the divine knowledge revealed to him",
    "explanation": "The Prophet faithfully conveys every part of the divine message without holding back or corrupting it."
  },
  {
    "id": "iq12",
    "question": "How does verse 25 protect the Quran from being associated with demonic forces?",
    "options": [
      "By stating it is protected by iron walls",
      "By affirming 'And it is not the word of an expelled devil (shaytan rajeem)'",
      "By commanding guards around reciters",
      "By forbidding it to be read at night"
    ],
    "correctAnswer": "By affirming 'And it is not the word of an expelled devil (shaytan rajeem)'",
    "explanation": "Pagans claimed the Quran was inspired by devils or poetry; Allah explicitly rejects this falsehood."
  },
  {
    "id": "iq13",
    "question": "What profound rhetorical challenge is posed in verse 26 ('فَأَيْنَ تَذْهَبُونَ')?",
    "options": [
      "So where are you traveling for trade?",
      "So where are you going in your disbelief after such clear proof?",
      "So where will you hide from the army?",
      "So where do souls migrate after death?"
    ],
    "correctAnswer": "So where are you going in your disbelief after such clear proof?",
    "explanation": "It challenges human intellect: having seen clear signs of truth, which misguided path could anyone possibly choose to follow?"
  },
  {
    "id": "iq14",
    "question": "How is the Quran characterized in verse 27 ('إِنْ هُوَ إِلَّا ذِكْرٌ لِلْعَالَمِينَ')?",
    "options": [
      "As a code of tribal law",
      "As a reminder to all the worlds (mankind and jinn)",
      "As a medical textbook",
      "As a historical chronicle of Arabia"
    ],
    "correctAnswer": "As a reminder to all the worlds (mankind and jinn)",
    "explanation": "The Quran serves as a universal admonition and guidance for all creation."
  },
  {
    "id": "iq15",
    "question": "What condition for receiving guidance is specified in verse 28 ('لِمَنْ شَاءَ مِنْكُمْ أَنْ يَسْتَقِيمَ')?",
    "options": [
      "Whoever possesses noble lineage",
      "Whoever among you wills to take the straight path / be steadfast",
      "Whoever holds political office",
      "Whoever completes a pilgrimage"
    ],
    "correctAnswer": "Whoever among you wills to take the straight path / be steadfast",
    "explanation": "Guidance is available for whoever genuinely desires righteousness and alignment with truth."
  },
  {
    "id": "iq16",
    "question": "What fundamental theological truth regarding human free will and divine sovereignty is established in verse 29 ('وَمَا تَشَاءُونَ إِلَّا أَنْ يَشَاءَ اللَّهُ')?",
    "options": [
      "Human beings possess absolute independence from God",
      "Human will operates within the overarching sovereign will and permission of Allah",
      "Everything happens purely by random chance",
      "Angels dictate human decisions"
    ],
    "correctAnswer": "Human will operates within the overarching sovereign will and permission of Allah",
    "explanation": "While humans have moral agency and choice, nothing can happen in creation except by Allah's sovereign decree and will."
  },
  {
    "id": "iq17",
    "question": "How does Surah At-Takwir conclude in verse 30?",
    "options": [
      "With a warning of immediate earthly punishment",
      "With the proclamation 'And you do not will except that Allah wills, the Lord of the worlds'",
      "With a prayer for prophetic success",
      "With a description of Paradise"
    ],
    "correctAnswer": "With the proclamation 'And you do not will except that Allah wills, the Lord of the worlds'",
    "explanation": "The surah ends by attributing all sovereignty, power, and lordship to Allah, the Lord of the worlds."
  },
  {
    "id": "iq18",
    "question": "What is the overarching connection between the first half of Surah At-Takwir and its second half?",
    "options": [
      "One half discusses law, the other economics",
      "The first half proves Allah's power over the physical universe on Judgment Day; the second half proves His authority over spiritual revelation",
      "One half describes animals, the other angels",
      "Both halves focus exclusively on the Battle of Badr"
    ],
    "correctAnswer": "The first half proves Allah's power over the physical universe on Judgment Day; the second half proves His authority over spiritual revelation",
    "explanation": "Both themes establish absolute divine power—over cosmic creation and over the preservation of His message."
  },
  {
    "id": "iq19",
    "question": "In the context of Asbab al-Nuzul, what prompted the revelation of verses defending the Prophet ﷺ against madness?",
    "options": [
      "The Prophet losing his voice during a speech",
      "The Quraysh mocking him as majnoon (mad) and accusing him of sorcery when he recited the Quran",
      "An attack by rival tribes in Taif",
      "A dispute over mosque construction"
    ],
    "correctAnswer": "The Quraysh mocking him as majnoon (mad) and accusing him of sorcery when he recited the Quran",
    "explanation": "Meccan elites resorted to slander to deter people from listening to the Quran, prompting divine refutation."
  },
  {
    "id": "iq20",
    "question": "What jurisprudential or ethical lesson is derived from the condemnation of female infanticide in Surah At-Takwir?",
    "options": [
      "Strict legal prohibition of murder and the upholding of the sanctity of innocent human life",
      "Tax regulations for cattle breeding",
      "Rules for burial ceremonies",
      "Guidelines for tribal alliances"
    ],
    "correctAnswer": "Strict legal prohibition of murder and the upholding of the sanctity of innocent human life",
    "explanation": "Islam eradicated barbaric pre-Islamic practices by establishing the sacred right to life for every human being, especially vulnerable children."
  },
  {
    "id": "iq21",
    "question": "What does 'إِذَا النُّفُوسُ زُوِّجَتْ' (When souls are paired) signify according to classical commentators?",
    "options": [
      "People marrying on earth",
      "Every person being reunited with their like-minded peers (righteous with righteous, wicked with wicked)",
      "Souls uniting with animal bodies",
      "Angels pairing with humans"
    ],
    "correctAnswer": "Every person being reunited with their like-minded peers (righteous with righteous, wicked with wicked)",
    "explanation": "Ibn Kathir and others explain that souls are joined with their counterparts or their deeds (e.g., believers with Houris or fellow believers, wrongdoers with devils)."
  },
  {
    "id": "iq22",
    "question": "What does 'وَإِذَا الْبِحَارُ سُجِّرَتْ' (When oceans are set ablaze) indicate about the final transformation of the earth?",
    "options": [
      "Oceans freezing into solid ice",
      "Oceans being heated until they turn into raging fire or overflowing",
      "Oceans evaporating completely into clouds",
      "Oceans turning into sweet drinking water"
    ],
    "correctAnswer": "Oceans being heated until they turn into raging fire or overflowing",
    "explanation": "Sujjirat means ignited into fire or filled to overflowing due to the tremendous heat and cataclysm of the Last Hour."
  },
  {
    "id": "iq23",
    "question": "Why are the stars described as 'انكَدَرَتْ' (inkadarat) in verse 2?",
    "options": [
      "They brighten up",
      "They lose their light, become dim, and fall scattered",
      "They multiply in number",
      "They form new galaxies"
    ],
    "correctAnswer": "They lose their light, become dim, and fall scattered",
    "explanation": "Inkadarat denotes losing light and falling down from the firmament."
  },
  {
    "id": "iq24",
    "question": "What is the significance of swearing by celestial phenomena ('وَاللَّيْلِ إِذَا عَسْعَسَ وَالصُّبْحِ إِذَا تَنَفَّسَ') in a Makkan surah?",
    "options": [
      "To teach astronomy to Arabs",
      "To direct attention to the precision of cosmic creation as evidence of the Creator's majesty and truth of resurrection",
      "To predict weather patterns for traders",
      "To establish calendar months"
    ],
    "correctAnswer": "To direct attention to the precision of cosmic creation as evidence of the Creator's majesty and truth of resurrection",
    "explanation": "Allah uses majestic signs of nature to validate the profound truth of His message."
  },
  {
    "id": "iq25",
    "question": "How does Surah At-Takwir reinforce the doctrine of individual accountability ('عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ')?",
    "options": [
      "By stating that families share sins",
      "By affirming that every soul will personally witness and recognize everything it prepared and brought forth",
      "By canceling past sins automatically",
      "By delegating judgment to tribal leaders"
    ],
    "correctAnswer": "By affirming that every soul will personally witness and recognize everything it prepared and brought forth",
    "explanation": "On Judgment Day, nothing remains hidden; every soul confronts its own recorded deeds."
  },
  {
    "id": "iq26",
    "question": "What does 'وَإِذَا الْجَنَّةُ أُزْلِفَتْ' (And when Paradise is brought near) signify for the believers?",
    "options": [
      "Paradise remains distant from humans",
      "Paradise is brought close so the righteous can witness and enter their ultimate reward",
      "Paradise is moved to the earthly realm",
      "Paradise is hidden behind barriers"
    ],
    "correctAnswer": "Paradise is brought close so the righteous can witness and enter their ultimate reward",
    "explanation": "Bringing Paradise near honors the believers and gladdens their hearts upon arrival."
  },
  {
    "id": "iq27",
    "question": "What emotional impact was the vivid imagery of Surah At-Takwir intended to produce on its initial Meccan audience?",
    "options": [
      "Complacency and relaxation",
      "Awakening from heedlessness, fear of accountability, and realization of the gravity of the Hereafter",
      "Desire for political revolution",
      "Interest in poetry competitions"
    ],
    "correctAnswer": "Awakening from heedlessness, fear of accountability, and realization of the gravity of the Hereafter",
    "explanation": "The apocalyptic descriptions shake listeners out of worldly distraction and focus their hearts on eternity."
  },
  {
    "id": "iq28",
    "question": "In verse 10, when the scrolls are spread open ('وَإِذَا الصُّحُفُ نُشِرَتْ'), what do these scrolls contain?",
    "options": [
      "Ancient poetry and folklore",
      "The recorded deeds of every human being",
      "Maps of the earth",
      "Laws of commerce"
    ],
    "correctAnswer": "The recorded deeds of every human being",
    "explanation": "The books of deeds compiled by recording angels are opened for public reckoning."
  },
  {
    "id": "iq29",
    "question": "What does 'كُشِطَتْ' (kushitat) imply regarding the sky in verse 11 ('وَإِذَا السَّمَاءُ كُشِطَتْ')?",
    "options": [
      "It is painted blue",
      "It is stripped away or rolled back like a hide",
      "It rains heavily",
      "It thickens with clouds"
    ],
    "correctAnswer": "It is stripped away or rolled back like a hide",
    "explanation": "Kushitat refers to removing or peeling back the sky, just as animal skin is stripped off."
  },
  {
    "id": "iq30",
    "question": "Why is Angel Jibril described as 'أَمِينٍ' (Trustworthy) in verse 21?",
    "options": [
      "Because he keeps financial accounts",
      "Because he faithfully delivers Allah's revelation without omission, addition, or alteration",
      "Because he guards the gates of Makkah",
      "Because he mediates tribal disputes"
    ],
    "correctAnswer": "Because he faithfully delivers Allah's revelation without omission, addition, or alteration",
    "explanation": "Trustworthiness is the essential qualification for conveying divine revelation intact."
  },
  {
    "id": "iq31",
    "question": "What is the significance of the rhetorical question 'بِأَيِّ ذَنْبٍ قُتِلَتْ' in highlighting social justice?",
    "options": [
      "It promotes capital punishment",
      "It champions the rights of the most defenseless members of society against brutal oppression",
      "It regulates inheritance shares",
      "It encourages tribal warfare"
    ],
    "correctAnswer": "It champions the rights of the most defenseless members of society against brutal oppression",
    "explanation": "By centering the inquiry on an innocent murdered infant, the Quran establishes an unyielding moral stance against injustice."
  },
  {
    "id": "iq32",
    "question": "How does Surah At-Takwir refute anyone claiming the Quran is authored by a human poet or sorcerer?",
    "options": [
      "By challenging them to produce a similar surah",
      "By describing the exalted angelic transmission through Jibril from the Lord of the worlds",
      "By punishing the poets physically",
      "By banning poetry in Makkah"
    ],
    "correctAnswer": "By describing the exalted angelic transmission through Jibril from the Lord of the worlds",
    "explanation": "The chain of custody—from Allah to Jibril to Muhammad ﷺ—proves its transcendent celestial origin."
  },
  {
    "id": "iq33",
    "question": "What does 'مَكِينٍ' (Makeen) mean when describing Angel Jibril in verse 20?",
    "options": [
      "Physically heavy",
      "Possessing high rank, authority, and established position with Allah",
      "Residing on earth",
      "Traveling in caravans"
    ],
    "correctAnswer": "Possessing high rank, authority, and established position with Allah",
    "explanation": "Makeen denotes high standing, prestige, and influence in the heavenly court."
  },
  {
    "id": "iq34",
    "question": "Why does the surah emphasize human free will paired with divine sovereignty in the final verses?",
    "options": [
      "To confuse disbelievers",
      "To remind people that while they have the choice to seek the straight path, ultimate control and success belong solely to Allah",
      "To abolish all laws",
      "To prove stars control human destiny"
    ],
    "correctAnswer": "To remind people that while they have the choice to seek the straight path, ultimate control and success belong solely to Allah",
    "explanation": "It balances moral responsibility (whoever wills to be steadfast) with total dependence on Allah's will."
  },
  {
    "id": "iq35",
    "question": "What is the overarching spiritual message of Surah At-Takwir for every reader?",
    "options": [
      "Material wealth is the ultimate goal",
      "The physical world is temporary, accountability is certain, and the Quran is divine truth guiding humanity to salvation",
      "Astronomy is the only useful science",
      "History repeats itself endlessly without purpose"
    ],
    "correctAnswer": "The physical world is temporary, accountability is certain, and the Quran is divine truth guiding humanity to salvation",
    "explanation": "The surah unites cosmic eschatology with prophetic truth to inspire sincere faith and righteous preparation for the Hereafter."
  }
];

const surah81AdvancedQuestions: QuizQuestion[] = [
  {
    "id": "aq1",
    "question": "What is the exact Arabic root (جذر) of the word 'كُوِّرَتْ' (Kowwirat - Folded up)?",
    "options": [
      "ك - و - ر",
      "ك - ر - ر",
      "ك - أ - ر",
      "ق - و - ر"
    ],
    "correctAnswer": "ك - و - ر",
    "explanation": "The root is ك-و-ر, meaning to fold up, wrap, or roll into a ball."
  },
  {
    "id": "aq2",
    "question": "What is the triliteral root of the verb 'انكَدَرَتْ' (Inkadarat - Fell / lost light)?",
    "options": [
      "ك - د - ر",
      "ن - ج - م",
      "ك - د - س",
      "ق- د - ر"
    ],
    "correctAnswer": "ك - د - ر",
    "explanation": "The root is ك-د-ر, relating to becoming turbid, dimmed, or falling down."
  },
  {
    "id": "aq3",
    "question": "What is the root of the verb 'سُيِّرَتْ' (Sayyirat - Set in motion / moved)?",
    "options": [
      "س - ي - ر",
      "س - ر - ع",
      "س - أ - ر",
      "ص - ي - ر"
    ],
    "correctAnswer": "س - ي - ر",
    "explanation": "The root is س-ي-ر, meaning to travel, walk, or cause to move."
  },
  {
    "id": "aq4",
    "question": "Identify the root letters for the noun 'الْعِشَارُ' (Al-'Ishar - Pregnant camels)?",
    "options": [
      "ع - ش - ر",
      "ع - ص - ر",
      "ع - ش - رة",
      "ح - ش - ر"
    ],
    "correctAnswer": "ع - ش - ر",
    "explanation": "The root is ع-ش-ر, referring to camels in their tenth month of pregnancy (highly prized in Arabia)."
  },
  {
    "id": "aq5",
    "question": "What is the root of the verb 'عُطِّلَتْ' (Uttilat - Neglected / left unattended)?",
    "options": [
      "ع - ط - ل",
      "ع - ط - ف",
      "ع - ت - ل",
      "ب - ط - ل"
    ],
    "correctAnswer": "ع - ط - ل",
    "explanation": "The root is ع-ط-ل, meaning to be neglected, idle, or devoid of caretakers."
  },
  {
    "id": "aq6",
    "question": "What is the root of the noun 'الْوُحُوشُ' (Al-Wuhush - Wild beasts)?",
    "options": [
      "و - ح - ش",
      "و - ح - د",
      "ح - ش - ر",
      "ب - ح - ث"
    ],
    "correctAnswer": "و - ح - ش",
    "explanation": "The root is و-ح-ش, referring to wild animals and beasts of the wilderness."
  },
  {
    "id": "aq7",
    "question": "What is the root of the verb 'سُجِّرَتْ' (Sujjirat - Set ablaze / filled)?",
    "options": [
      "س - ج - ر",
      "س - ج - ن",
      "ف - ج - ر",
      "س - ع - ر"
    ],
    "correctAnswer": "س - ج - ر",
    "explanation": "The root is س-ج-ر, meaning to kindle, set ablaze, or fill to overflowing."
  },
  {
    "id": "aq8",
    "question": "What is the root of the verb 'زُوِّجَتْ' (Zuwijat - Paired / joined)?",
    "options": [
      "ز - و - ج",
      "ز - ج - ج",
      "ز - ي - ج",
      "س - و - ج"
    ],
    "correctAnswer": "ز - و - ج",
    "explanation": "The root is ز-و-ج, relating to pairs, mates, or joining counterparts."
  },
  {
    "id": "aq9",
    "question": "What is the root of the noun 'الْمَوْءُودَةُ' (Al-Maw'udah - The buried girl)?",
    "options": [
      "و - أ - د",
      "و - ع - د",
      "أ - د - ي",
      "و - د - ع"
    ],
    "correctAnswer": "و - أ - د",
    "explanation": "The root is و-أ-د, meaning to bury alive."
  },
  {
    "id": "aq10",
    "question": "What is the root of the verb 'سُئِلَتْ' (Su'ilat - She is asked / questioned)?",
    "options": [
      "س - أ - ل",
      "س - ل - و",
      "س - أ - م",
      "س - و - ل"
    ],
    "correctAnswer": "س - أ - ل",
    "explanation": "The root is س-أ-ل, meaning to ask, inquire, or question."
  },
  {
    "id": "aq11",
    "question": "What is the root of the noun 'ذَنْبٍ' (Dhanbin - Sin / crime)?",
    "options": [
      "ذ - ن - ب",
      "ذ - ه - ب",
      "ذ - ك - ر",
      "ذ - م - م"
    ],
    "correctAnswer": "ذ - ن - ب",
    "explanation": "The root is ذ-ن-ب, meaning sin, fault, or crime."
  },
  {
    "id": "aq12",
    "question": "What is the root of the verb 'نُشِرَتْ' (Nushirat - Spread open / published)?",
    "options": [
      "ن - ش - ر",
      "ن - ش - أ",
      "ن - ط - ر",
      "ن - س - ر"
    ],
    "correctAnswer": "ن - ش - ر",
    "explanation": "The root is ن-ش-ر, meaning to spread out, unfold, or resurrect."
  },
  {
    "id": "aq13",
    "question": "What is the root of the verb 'كُشِطَتْ' (Kushitat - Stripped away / removed)?",
    "options": [
      "ك - ش - ط",
      "ك - ش - ف",
      "ق - ش - ط",
      "ك - س - ف"
    ],
    "correctAnswer": "ك - ش - ط",
    "explanation": "The root is ك-ش-ط, meaning to strip off a cover or skin."
  },
  {
    "id": "aq14",
    "question": "What is the root of the verb 'سُعِّرَتْ' (Su'irat - Ignited / made to blaze)?",
    "options": [
      "س - ع - ر",
      "س - ج - ر",
      "س - ع - د",
      "ش- ع - ل"
    ],
    "correctAnswer": "س - ع - ر",
    "explanation": "The root is س-ع-ر, meaning to kindle, flare up, or blaze."
  },
  {
    "id": "aq15",
    "question": "What is the root of the verb 'أُزْلِفَتْ' (Uzlifat - Brought near)?",
    "options": [
      "ز - ل - ف",
      "ز - ل - ز",
      "ز- ل - ق",
      "ظ - ل - م"
    ],
    "correctAnswer": "ز - ل - ف",
    "explanation": "The root is ز-ل-ف, meaning proximity, closeness, or bringing near."
  },
  {
    "id": "aq16",
    "question": "What is the root of the verb 'أَحْضَرَتْ' (Ahdarat - Brought / presented)?",
    "options": [
      "ح - ض - ر",
      "ح - ص - ر",
      "ح - ذ - ر",
      "ح - د - ر"
    ],
    "correctAnswer": "ح - ض - ر",
    "explanation": "The root is ح-ض-ر, meaning presence, readiness, or bringing forth."
  },
  {
    "id": "aq17",
    "question": "What is the root of the word 'الْخُنَّسِ' (Al-Khunnas - The retreating stars)?",
    "options": [
      "خ - ن - س",
      "خ - ن - ز",
      "ح - ن - س",
      "خ - م - س"
    ],
    "correctAnswer": "خ - ن - س",
    "explanation": "The root is خ-ن-س, meaning to withdraw, retreat, or hide."
  },
  {
    "id": "aq18",
    "question": "What is the root of the word 'الْكُنَّسِ' (Al-Kunnas - The hiding / sweeping stars)?",
    "options": [
      "ك - ن - س",
      "ك - ن - ز",
      "ك - و - ن",
      "ق - ن - س"
    ],
    "correctAnswer": "ك - ن - س",
    "explanation": "The root is ك-ن-س, meaning to sweep, retire into a lair, or hide."
  },
  {
    "id": "aq19",
    "question": "What is the root of the verb 'عَسْعَسَ' (As'asa - Departs / darkens)?",
    "options": [
      "ع - س - ع - س",
      "ع - س - ف",
      "ع - ص - ف",
      "ع - ك - س"
    ],
    "correctAnswer": "ع - س - ع - س",
    "explanation": "The root is ع-س-ع-س, a quadriteral root meaning to retreat, fade, or grow dark."
  },
  {
    "id": "aq20",
    "question": "What is the root of the verb 'تَنَفَّسَ' (Tanaffasa - Breathes / brightens)?",
    "options": [
      "ن - ف - س",
      "ن - ف - خ",
      "ن - ف - ذ",
      "ت - ن - ف"
    ],
    "correctAnswer": "ن - ف - س",
    "explanation": "The root is ن-ف-س, relating to breath, soul, or expanding/brightening."
  },
  {
    "id": "aq21",
    "question": "What is the root of the noun 'رَسُولٍ' (Rasoolin - Messenger)?",
    "options": [
      "ر - س - ل",
      "ر - س - خ",
      "ر - أ - س",
      "ر - ص - ل"
    ],
    "correctAnswer": "ر - س - ل",
    "explanation": "The root is ر-س-ل, meaning to send forth or dispatch a messenger."
  },
  {
    "id": "aq22",
    "question": "What is the root of the noun 'الْعَرْشِ' (Al-'Arshi - The Throne)?",
    "options": [
      "ع - ر - ش",
      "ع - ر - ف",
      "ع - ر - ض",
      "ع - ر - شش"
    ],
    "correctAnswer": "ع - ر - ش",
    "explanation": "The root is ع-ر-ش, referring to a royal throne or elevated structure."
  },
  {
    "id": "aq23",
    "question": "What is the root of the adjective 'مَكِينٍ' (Makeenin - Established / of high status)?",
    "options": [
      "م - ك - ن",
      "م - ك - ك",
      "ك - و - ن",
      "م - ك - ث"
    ],
    "correctAnswer": "م - ك - ن",
    "explanation": "The root is م-ك-ن, meaning to be firmly established, powerful, or of high station."
  },
  {
    "id": "aq24",
    "question": "What is the root of the adjective 'مُطَاعٍ' (Muta'in - Obeyed)?",
    "options": [
      "ط - و - ع",
      "ط - ع - م",
      "ط - ي - ع",
      "ط - ع - ن"
    ],
    "correctAnswer": "ط - و - ع",
    "explanation": "The root is ط-و-ع (or ط-ي-ع), meaning obedience, compliance, and willingness."
  },
  {
    "id": "aq25",
    "question": "What is the root of the adjective 'أَمِينٍ' (Ameenin - Trustworthy / faithful)?",
    "options": [
      "أ - م - ن",
      "م - ن - ي",
      "أ - م - م",
      "ي - م - ن"
    ],
    "correctAnswer": "أ - م - ن",
    "explanation": "The root is أ-م-ن, denoting safety, security, and trustworthiness."
  },
  {
    "id": "aq26",
    "question": "What is the root of the noun 'صَاحِبُكُم' (Sahibukum - Your companion)?",
    "options": [
      "ص - ح - ب",
      "ص - ح - ح",
      "ص - ح - بة",
      "ص - و - ب"
    ],
    "correctAnswer": "ص - ح - ب",
    "explanation": "The root is ص-ح-ب, meaning companionship, association, or company."
  },
  {
    "id": "aq27",
    "question": "What is the root of the adjective 'بِمَجْنُونٍ' (Bimahnoonin - Mad / possessed)?",
    "options": [
      "ج - ن - ن",
      "ج - ن - ب",
      "ج - ن - ح",
      "ج - ن - د"
    ],
    "correctAnswer": "ج - ن - ن",
    "explanation": "The root is ج-ن-ن, relating to covering, concealment, or madness/jinn."
  },
  {
    "id": "aq28",
    "question": "What is the root of the noun 'الْأُفُقِ' (Al-Ufuqi - The horizon)?",
    "options": [
      "أ - ف - ق",
      "ف - ق - أ",
      "أ - ف - ك",
      "ف - أ - ق"
    ],
    "correctAnswer": "أ - ف - ق",
    "explanation": "The root is أ-ف-ق, referring to horizons or expanses of the sky."
  },
  {
    "id": "aq29",
    "question": "What is the root of the adjective 'الْمُبِينِ' (Al-Mubeen - Clear / manifest)?",
    "options": [
      "ب - ي - ن",
      "ب - ن - ي",
      "ب - أ - ن",
      "ب - ن - أ"
    ],
    "correctAnswer": "ب - ي - ن",
    "explanation": "The root is ب-ي-ن, meaning clarity, distinctness, and manifestation."
  },
  {
    "id": "aq30",
    "question": "What is the root of the adjective 'بِضَنِينٍ' (Bidaneenin - Withholding / grudging)?",
    "options": [
      "ض - ن - ن",
      "ض - ن - ك",
      "ض - ي - ن",
      "ظ - ن - ن"
    ],
    "correctAnswer": "ض - ن - ن",
    "explanation": "The root is ض-ن-ن, meaning to be niggardly, stingy, or withholding."
  },
  {
    "id": "aq31",
    "question": "What is the root of the adjective 'رَّجِيمٍ' (Rajeemin - Accursed / stoned / expelled)?",
    "options": [
      "ر - ج - م",
      "ر - ج - ع",
      "ر - ح - م",
      "ر - ج - ف"
    ],
    "correctAnswer": "ر - ج - م",
    "explanation": "The root is ر-ج-م, meaning to pelt, stone, or expel with rejection."
  },
  {
    "id": "aq32",
    "question": "What is the root of the verb 'تَذْهَبُونَ' (Tadhhaboon - You go / depart)?",
    "options": [
      "ذ - ه - ب",
      "ذ - ح - ب",
      "ذ - ب - ب",
      "ه - ب - ط"
    ],
    "correctAnswer": "ذ - ه - ب",
    "explanation": "The root is ذ-ه-ب, meaning to go, walk, or depart."
  },
  {
    "id": "aq33",
    "question": "What is the root of the noun 'ذِكْرٌ' (Dhikrun - Reminder / remembrance)?",
    "options": [
      "ذ - ك - ر",
      "د - ك - ر",
      "ذ - ك - أ",
      "ذ - ك - ي"
    ],
    "correctAnswer": "ذ - ك - ر",
    "explanation": "The root is ذ-ك-ر, meaning remembrance, mention, or reminder."
  },
  {
    "id": "aq34",
    "question": "What is the root of the verb 'يَسْتَقِيمَ' (Yastaqeema - To take the straight path / be steadfast)?",
    "options": [
      "ق - و - م",
      "ق - ي - م",
      "ق - م - م",
      "س - ت - ق"
    ],
    "correctAnswer": "ق - و - م",
    "explanation": "The root is ق-و-م, relating to standing upright, being straight, or steadfastness."
  },
  {
    "id": "aq35",
    "question": "What is the root of the verb 'تَشَاءُونَ' (Tasha'oon - You will / desire)?",
    "options": [
      "ش - ي - ء",
      "ش - أ - ن",
      "ش - و - ه",
      "ش - ع - ر"
    ],
    "correctAnswer": "ش - ي - ء",
    "explanation": "The root is ش-ي-ء, relating to willing, desiring, or bringing something into being."
  }
];

const surah81Category: QuizCategory = {
  id: "surah-81",
  title: "Surah At-Takwir",
  description: "The Folding Up — Surah 81 (Three-Level Question Bank)",
  icon: "",
  levels: {
    easy: surah81EasyQuestions,
    intermediate: surah81IntermediateQuestions,
    advanced: surah81AdvancedQuestions,
  },
};

export default surah81Category;