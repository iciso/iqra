import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah Al-Infitar (82) — IQRA three-level question bank.
 */

const surah82EasyQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is the English meaning for the surah's title, Al-Infitar, الإنفطار?",
    options: [
      "The Overwhelming",
      "The Night Visitor",
      "The Splitting Open",
      "The Most High"
    ],
    correctAnswer: "The Splitting Open",
    explanation: "الإنفطار (Al-Infitar) means 'The Splitting Open,' derived from the root ف-ط-ر, referring to the sky splitting on the Day of Judgment (Ibn Kathir, Quran.com)."
  },
  {
    id: "q2",
    question: "What does the phrase 'إِذَا السَّمَاءُ انْفَطَرَتْ' mean in verse 1?",
    options: [
      "When the ocean boils over",
      "When the sky splits open",
      "When the mountains crumble",
      "When the earth is flattened"
    ],
    correctAnswer: "When the sky splits open",
    explanation: "إِذَا السَّمَاءُ انْفَطَرَتْ means 'When the sky splits open,' roots س-م-و (sky) and ف-ط-ر (split/cleave)."
  },
  {
    id: "q3",
    question: "What does the phrase 'وَإِذَا الْكَوَاكِبُ انْتَثَرَتْ' mean in verse 2?",
    options: [
      "And when the stars are scattered",
      "And when the sun is folded up",
      "And when the night falls",
      "And when the moon is darkened"
    ],
    correctAnswer: "And when the stars are scattered",
    explanation: "وَإِذَا الْكَوَاكِبُ انْتَثَرَتْ means 'And when the stars are scattered,' roots ك-و-ك-ب (star) and ن-ث-ر (scatter)."
  },
  {
    id: "q4",
    question: "What does the phrase 'وَإِذَا الْبِحَارُ فُجِّرَتْ' mean in verse 3?",
    options: [
      "And when the rivers stop flowing",
      "And when the mountains crumble",
      "And when the seas erupt or overflow",
      "And when the earth shakes"
    ],
    correctAnswer: "And when the seas erupt or overflow",
    explanation: "وَإِذَا الْبِحَارُ فُجِّرَتْ means 'And when the seas erupt/burst forth/overflow,' roots ب-ح-ر (sea) and ف-ج-ر (explode/burst)."
  },
  {
    id: "q5",
    question: "What does the phrase 'وَإِذَا الْقُبُورُ بُعْثِرَتْ' mean in verse 4?",
    options: [
      "And when the skies are cleared",
      "And when the graves are overturned",
      "And when the gates are opened",
      "And when the deeds are weighed"
    ],
    correctAnswer: "And when the graves are overturned",
    explanation: "وَإِذَا الْقُبُورُ بُعْثِرَتْ means 'And when the graves are overturned/scattered contents,' roots ق-ب-ر (grave) and ب-ع-ث-ر (turn over/scatter)."
  },
  {
    id: "q6",
    question: "What does the phrase 'عَلِمَتْ نَفْسٌ مَا قَدَّمَتْ وَأَخَّرَتْ' mean in verse 5?",
    options: [
      "A soul will know what it put forward and kept back",
      "A soul will hide its deeds",
      "A soul will forget what it did",
      "A soul will ask for more time"
    ],
    correctAnswer: "A soul will know what it put forward and kept back",
    explanation: "عَلِمَتْ نَفْسٌ مَا قَدَّمَتْ وَأَخَّرَتْ means 'A soul will know what it put forward and kept back,' roots ع-ل-م (know), ن-ف-س (soul), ق-د-م (forward), and أ-خ-ر (delay/back)."
  },
  {
    id: "q7",
    question: "What does the phrase 'يَا أَيُّهَا الْإِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ' mean in verse 6?",
    options: [
      "O man, what has deceived you concerning your Lord, the Noble?",
      "O man, what has guided you to your Lord?",
      "O man, who created you from clay?",
      "O man, why do you reject the truth?"
    ],
    correctAnswer: "O man, what has deceived you concerning your Lord, the Noble?",
    explanation: "يَا أَيُّهَا الْإِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ means 'O man, what has deceived you concerning your Lord, the Most Generous/Noble?' roots غ-ر-ر (deceive) and ك-ر-م (generous/noble)."
  },
  {
    id: "q8",
    question: "What does the phrase 'الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ' mean in verse 7?",
    options: [
      "Who created you, formed you, and proportioned you",
      "Who sustained you and enriched you",
      "Who guided you and taught you",
      "Who tested you and forgave you"
    ],
    correctAnswer: "Who created you, formed you, and proportioned you",
    explanation: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ means 'Who created you, then proportioned you, then balanced you,' roots خ-ل-ق (create), س-و-ي (proportion), and ع-د-ل (balance)."
  },
  {
    id: "q9",
    question: "What does the phrase 'فِي أَيِّ صُورَةٍ مَا شَاءَ رَكَّبَكَ' mean in verse 8?",
    options: [
      "In whatever form He willed, He assembled you",
      "In whatever land He willed, He placed you",
      "At whatever time He willed, He brought you",
      "With whatever wealth He willed, He gave you"
    ],
    correctAnswer: "In whatever form He willed, He assembled you",
    explanation: "فِي أَيِّ صُورَةٍ مَا شَاءَ رَكَّبَكَ means 'In whatever form He willed, He assembled you,' roots ص-و-ر (form), ش-ي-أ (will), and ر-ك-ب (assemble)."
  },
  {
    id: "q10",
    question: "What does the phrase 'كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ' mean in verse 9?",
    options: [
      "No! But you deny the Judgment",
      "No! But you seek the world",
      "No! But you follow desires",
      "No! But you doubt the Book"
    ],
    correctAnswer: "No! But you deny the Judgment",
    explanation: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ means 'No! But you deny the Judgment/Religion,' roots ك-ذ-ب (deny) and د-ي-ن (judgment/religion)."
  },
  {
    id: "q11",
    question: "What does the phrase 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ' mean in verse 10?",
    options: [
      "And indeed, over you are guardians",
      "And indeed, with you are angels of mercy",
      "And indeed, around you are shields",
      "And indeed, before you is a trial"
    ],
    correctAnswer: "And indeed, over you are guardians",
    explanation: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ means 'And indeed, over you are guardians/watchers,' root ح-ف-ظ (guard/preserve)."
  },
  {
    id: "q12",
    question: "What does the phrase 'كِرَامًا كَاتِبِينَ' mean in verse 11?",
    options: [
      "Noble recorders",
      "Powerful angels",
      "Silent witnesses",
      "Swift messengers"
    ],
    correctAnswer: "Noble recorders",
    explanation: "كِرَامًا كَاتِبِينَ means 'Noble recording [angels],' roots ك-ر-م (noble) and ك-ت-ب (write/record)."
  },
  {
    id: "q13",
    question: "What does the phrase 'يَعْلَمُونَ مَا تَفْعَلُونَ' mean in verse 12?",
    options: [
      "They know whatever you do",
      "They write what you say",
      "They see where you go",
      "They count your steps"
    ],
    correctAnswer: "They know whatever you do",
    explanation: "يَعْلَمُونَ مَا تَفْعَلُونَ means 'They know whatever you do,' roots ع-ل-م (know) and ف-ع-ل (do)."
  },
  {
    id: "q14",
    question: "What does the phrase 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ' mean in verse 13?",
    options: [
      "Indeed, the righteous will be in pleasure/bliss",
      "Indeed, the patient will be rewarded",
      "Indeed, the believers will succeed",
      "Indeed, the truthful will be safe"
    ],
    correctAnswer: "Indeed, the righteous will be in pleasure/bliss",
    explanation: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ means 'Indeed, the righteous will be in pleasure/bliss,' roots ب-ر-ر (righteous) and ن-ع-م (delight/bliss)."
  },
  {
    id: "q15",
    question: "What does the phrase 'وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ' mean in verse 14?",
    options: [
      "And indeed, the wicked will be in Hellfire",
      "And indeed, the arrogant will fall",
      "And indeed, the liars will be disgraced",
      "And indeed, the transgressors will regret"
    ],
    correctAnswer: "And indeed, the wicked will be in Hellfire",
    explanation: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ means 'And indeed, the wicked/wicked-doers will be in Hellfire,' roots ف-ج-ر (wicked) and ج-ح-م (blazing fire)."
  },
  {
    id: "q16",
    question: "What does the phrase 'يَصْلَوْنَهَا يَوْمَ الدِّينِ' mean in verse 15?",
    options: [
      "They will burn in it on the Day of Recompense",
      "They will enter it after the reckoning",
      "They will see it from afar",
      "They will taste it for ages"
    ],
    correctAnswer: "They will burn in it on the Day of Recompense",
    explanation: "يَصْلَوْنَهَا يَوْمَ الدِّينِ means 'They will burn in it on the Day of Recompense,' roots ص-ل-ي (burn/enter fire) and د-ي-ن (judgment/recompense)."
  },
  {
    id: "q17",
    question: "What does the phrase 'وَمَا هُمْ عَنْهَا بِغَائِبِينَ' mean in verse 16?",
    options: [
      "And they will not be absent from it",
      "And they will not be saved from it",
      "And they will not hide from it",
      "And they will not rest in it"
    ],
    correctAnswer: "And they will not be absent from it",
    explanation: "وَمَا هُمْ عَنْهَا بِغَائِبِينَ means 'And they will not be absent/removed from it,' root غ-ي-ب (absent)."
  },
  {
    id: "q18",
    question: "What does the phrase 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean in verse 17?",
    options: [
      "And what can make you know what the Day of Recompense is?",
      "And who told you about the Day of Recompense?",
      "And when will be the Day of Recompense?",
      "And how will come the Day of Recompense?"
    ],
    correctAnswer: "And what can make you know what the Day of Recompense is?",
    explanation: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ means 'And what can make you know what the Day of Recompense is?' roots د-ر-ي (know/make know) and د-ي-ن (recompense)."
  },
  {
    id: "q19",
    question: "What does the phrase 'ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean in verse 18?",
    options: [
      "Then again, what can make you know what the Day of Recompense is?",
      "Then who will save you on the Day of Recompense?",
      "Then how will you face the Day of Recompense?",
      "Then where will you go on the Day of Recompense?"
    ],
    correctAnswer: "Then again, what can make you know what the Day of Recompense is?",
    explanation: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ means 'Then again, what can make you know what the Day of Recompense is?' repeated for emphasis."
  },
  {
    id: "q20",
    question: "What does the phrase 'يَوْمَ لَا تَمْلِكُ نَفْسٌ لِنَفْسٍ شَيْئًا' mean in verse 19?",
    options: [
      "A Day when no soul will possess for another soul anything",
      "A Day when every soul will speak for itself",
      "A Day when no soul will bear another's burden",
      "A Day when all souls will be gathered together"
    ],
    correctAnswer: "A Day when no soul will possess for another soul anything",
    explanation: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِنَفْسٍ شَيْئًا means 'A Day when no soul will possess [power to do] anything for another soul,' roots م-ل-ك (possess/control) and ن-ف-س (soul)."
  },
  {
    id: "q21",
    question: "What does the phrase 'وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ' mean in verse 19?",
    options: [
      "And the command that Day is [entirely] for Allah",
      "And the judgment that Day belongs to the prophets",
      "And the mercy that Day encompasses all",
      "And the kingdom that Day will be restored"
    ],
    correctAnswer: "And the command that Day is [entirely] for Allah",
    explanation: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ means 'And the command/matter that Day belongs [entirely] to Allah,' root أ-م-ر (command/affair)."
  },
  {
    id: "q22",
    question: "What root does 'انْفَطَرَتْ' come from?",
    options: [
      "ف - ط - ر",
      "ف - ط - ن",
      "ف - ط - م",
      "ف - ط - ل"
    ],
    correctAnswer: "ف - ط - ر",
    explanation: "انْفَطَرَتْ comes from the root ف-ط-ر, which means to split, cleave, or break apart."
  },
  {
    id: "q23",
    question: "What root does 'الْكَوَاكِبُ' come from?",
    options: [
      "ك - و - ك - ب",
      "ك - ت - ب",
      "ك - س - ب",
      "ك - ل - م"
    ],
    correctAnswer: "ك - و - ك - ب",
    explanation: "الْكَوَاكِبُ comes from the quadriliteral root ك-و-ك-ب, meaning star or celestial body."
  },
  {
    id: "q24",
    question: "What root does 'انْتَثَرَتْ' come from?",
    options: [
      "ن - ث - ر",
      "ن - ش - ر",
      "ن - ص - ر",
      "ن - ظ - ر"
    ],
    correctAnswer: "ن - ث - ر",
    explanation: "انْتَثَرَتْ comes from the root ن-ث-ر, meaning to scatter, disperse, or strew."
  },
  {
    id: "q25",
    question: "What root does 'فُجِّرَتْ' come from?",
    options: [
      "ف - ج - ر",
      "ف - ج - أ",
      "ف - ر - ج",
      "ف - خ - ر"
    ],
    correctAnswer: "ف - ج - ر",
    explanation: "فُجِّرَتْ comes from the root ف-ج-ر, meaning to burst open, erupt, or flow abundantly."
  },
  {
    id: "q26",
    question: "What root does 'بُعْثِرَتْ' come from?",
    options: [
      "ب - ع - ث - ر",
      "ب - ع - ث",
      "ب - ث - ر",
      "ب - ع - د"
    ],
    correctAnswer: "ب - ع - ث - ر",
    explanation: "بُعْثِرَتْ comes from the quadriliteral root ب-ع-ث-ر, meaning to overturn, turn inside out, or scatter contents."
  },
  {
    id: "q27",
    question: "What root does 'غَرَّكَ' come from?",
    options: [
      "غ - ر - ر",
      "غ - ر - ب",
      "غ - ر - ق",
      "غ - ر - م"
    ],
    correctAnswer: "غ - ر - ر",
    explanation: "غَرَّكَ comes from the root غ-ر-ر, meaning to deceive, delude, or entice with false hopes."
  },
  {
    id: "q28",
    question: "What root does 'سَوَّاكَ' come from?",
    options: [
      "س - و - ي",
      "س - و - أ",
      "س - و - ق",
      "س - و - د"
    ],
    correctAnswer: "س - و - ي",
    explanation: "سَوَّاكَ comes from the root س-و-ي, meaning to fashion properly, proportion, or make level/even."
  },
  {
    id: "q29",
    question: "What root does 'فَعَدَلَكَ' come from?",
    options: [
      "ع - د - ل",
      "ع - د - د",
      "ع - د - و",
      "ع - د - م"
    ],
    correctAnswer: "ع - د - ل",
    explanation: "فَعَدَلَكَ comes from the root ع-د-ل, meaning to balance, proportion, or make straight/upright."
  },
  {
    id: "q30",
    question: "What root does 'رَكَّبَكَ' come from?",
    options: [
      "ر - ك - ب",
      "ر - ك - ز",
      "ر - ك - ع",
      "ر - ك - د"
    ],
    correctAnswer: "ر - ك - ب",
    explanation: "رَكَّبَكَ comes from the root ر-ك-ب, meaning to assemble, compose, put together, or mount."
  },
  {
    id: "q31",
    question: "What root does 'الْأَبْرَارَ' come from?",
    options: [
      "ب - ر - ر",
      "ب - ر - ك",
      "ب - ر - ق",
      "ب - ر - ز"
    ],
    correctAnswer: "ب - ر - ر",
    explanation: "الْأَبْرَارَ comes from the root ب-ر-ر, meaning righteousness, piety, or devotion."
  },
  {
    id: "q32",
    question: "What root does 'الْفُجَّارَ' come from?",
    options: [
      "ف - ج - ر",
      "ف - ج - أ",
      "ف - ر - ج",
      "ف - ق - ر"
    ],
    correctAnswer: "ف - ج - ر",
    explanation: "الْفُجَّارَ comes from the root ف-ج-ر, meaning wickedness, immorality, or breaking boundaries."
  },
  {
    id: "q33",
    question: "What root does 'جَحِيمٍ' come from?",
    options: [
      "ج - ح - م",
      "ج - ح - د",
      "ج - م - ع",
      "ج - ر - م"
    ],
    correctAnswer: "ج - ح - م",
    explanation: "جَحِيمٍ comes from the root ج-ح-م, meaning a fiercely burning fire or raging flame."
  },
  {
    id: "q34",
    question: "What root does 'بِغَائِبِينَ' come from?",
    options: [
      "غ - ي - ب",
      "غ - و - ب",
      "غ - ب - ر",
      "غ - ل - ب"
    ],
    correctAnswer: "غ - ي - ب",
    explanation: "بِغَائِبِينَ comes from the root غ-ي-ب, meaning to be absent, hidden, or far away."
  },
  {
    id: "q35",
    question: "What phrase in 82:19 summarizes the ultimate reality of Judgment Day?",
    options: [
      "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ",
      "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
      "كِرَامًا كَاتِبِينَ",
      "وَإِذَا الْقُبُورُ بُعْثِرَتْ"
    ],
    correctAnswer: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ",
    explanation: "This phrase summarizes the final declaration in 82:19, stating that the command and authority on that Day belong entirely to Allah."
  }
];

const surah82IntermediateQuestions: QuizQuestion[] = [
  {
    id: "q36",
    question: "What is the central subject linking the opening and closing of Surah Al-Infitar?",
    options: [
      "Day of Judgment and human accountability",
      "The laws of inheritance and trade",
      "The stories of previous prophets in detail",
      "Rules of warfare and treaties"
    ],
    correctAnswer: "Day of Judgment and human accountability",
    explanation: "The Surah opens with cosmic signs of Judgment Day and concludes by emphasizing that all command on that Day belongs solely to Allah."
  },
  {
    id: "q37",
    question: "In which period of revelation was Surah Al-Infitar revealed?",
    options: [
      "Early Makkan period",
      "Late Madinan period",
      "After the Treaty of Hudaybiyyah",
      "During the Farewell Pilgrimage"
    ],
    correctAnswer: "Early Makkan period",
    explanation: "Surah Al-Infitar is a Makkan Surah focusing on fundamental creeds of faith (Aqeedah), the Afterlife, and personal responsibility."
  },
  {
    id: "q38",
    question: "What cosmic event is described in the opening verse 'إِذَا السَّمَاءُ انْفَطَرَتْ'?",
    options: [
      "The splitting open of the sky",
      "The eclipse of the moon",
      "The setting of the sun in murky water",
      "The birth of a new star"
    ],
    correctAnswer: "The splitting open of the sky",
    explanation: "Infitar literally means splitting open or cleaving asunder, describing the dramatic upheaval of the heavens on Judgment Day."
  },
  {
    id: "q39",
    question: "What does the scattering of the stars ('انْتَثَرَتْ') symbolize in tafsir?",
    options: [
      "The total collapse of the cosmic system created by Allah",
      "The descent of rainwater",
      "A peaceful night in the desert",
      "The victory of believers in battle"
    ],
    correctAnswer: "The total collapse of the cosmic system created by Allah",
    explanation: "Classical commentators explain that the dispersion of stars highlights the breakdown of the current earthly and celestial order."
  },
  {
    id: "q40",
    question: "How do classical tafsir scholars explain 'وَإِذَا الْبِحَارُ فُجِّرَتْ'?",
    options: [
      "The seas will burst forth, mix together, or ignite",
      "The waters will permanently freeze into ice",
      "The oceans will disappear completely without trace",
      "The seas will become sweet drinking water"
    ],
    correctAnswer: "The seas will burst forth, mix together, or ignite",
    explanation: "Commentators like Ibn Kathir explain that the barriers between salty and fresh waters will break, flooding and merging the oceans."
  },
  {
    id: "q41",
    question: "What is meant by 'وَإِذَا الْقُبُورُ بُعْثِرَتْ' in the context of Resurrection?",
    options: [
      "The graves will be overturned and the dead brought back to life",
      "The dead will remain buried forever",
      "Graves will be decorated for celebration",
      "Tombs will be hidden from human sight"
    ],
    correctAnswer: "The graves will be overturned and the dead brought back to life",
    explanation: "The word 'bu'thirat' means overturned or brought inside-out, signifying the physical resurrection of human bodies from the earth."
  },
  {
    id: "q42",
    question: "What realization does every soul reach upon witnessing these events ('عَلِمَتْ نَفْسٌ مَا قَدَّمَتْ وَأَخَّرَتْ')?",
    options: [
      "Full awareness of all its past deeds, both sent ahead and left behind",
      "That it can barter wealth to save itself",
      "That worldly status guarantees salvation",
      "That deeds are forgotten with time"
    ],
    correctAnswer: "Full awareness of all its past deeds, both sent ahead and left behind",
    explanation: "On that Day, all veils are removed and each human being clearly recognizes what good or evil deeds they performed or neglected."
  },
  {
    id: "q43",
    question: "What direct rhetorical question does Allah ask humanity in verse 6?",
    options: [
      "What has deceived you concerning your Noble Lord?",
      "Why do you not build stronger houses?",
      "Who taught you how to read and write?",
      "When will you travel across the earth?"
    ],
    correctAnswer: "What has deceived you concerning your Noble Lord?",
    explanation: "Allah addresses human ungratefulness by asking what deluded man into disobeying his Creator, who is 'Al-Kareem' (The Most Generous)."
  },
  {
    id: "q44",
    question: "What divine attribute is highlighted in verse 6 to emphasize human ingratitude?",
    options: [
      "Al-Kareem (The Most Generous / Noble)",
      "Al-Qahhar (The Subduer)",
      "Al-Muntaqim (The Avenger)",
      "Al-Jabbar (The Compeller)"
    ],
    correctAnswer: "Al-Kareem (The Most Generous / Noble)",
    explanation: "Using 'Al-Kareem' emphasizes that humanity responds to God's continuous generosity with neglect and disobedience rather than gratitude."
  },
  {
    id: "q45",
    question: "What three stages of human creation are outlined in verse 7 ('خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ')?",
    options: [
      "Creation, proportioning/fashioning, and balancing",
      "Birth, wealth, and death",
      "Ignorance, knowledge, and wisdom",
      "Dust, water, and fire"
    ],
    correctAnswer: "Creation, proportioning/fashioning, and balancing",
    explanation: "Allah reminds man of His favors: creating him from nothing, forming his limbs in harmony, and balancing his posture and features."
  },
  {
    id: "q46",
    question: "What does 'فِي أَيِّ صُورَةٍ مَا شَاءَ رَكَّبَكَ' teach about divine power?",
    options: [
      "Allah uniquely fashions every human appearance according to His supreme will",
      "Humans can choose their physical form before birth",
      "Physical features are governed entirely by random chance",
      "Angels decide human appearances"
    ],
    correctAnswer: "Allah uniquely fashions every human appearance according to His supreme will",
    explanation: "This verse underscores Allah's absolute power to design every individual's shape, lineage, and physical characteristics as He wills."
  },
  {
    id: "q47",
    question: "What root cause of moral failure is identified in verse 9 ('كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ')?",
    options: [
      "Denial and disbelief in the Day of Recompense",
      "Lack of material wealth",
      "Inability to read ancient scripts",
      "Living far from cities"
    ],
    correctAnswer: "Denial and disbelief in the Day of Recompense",
    explanation: "The fundamental cause of sin and transgression mentioned here is the lack of genuine belief in ultimate divine judgment."
  },
  {
    id: "q48",
    question: "Who are the 'Hafizheen' (حَافِظِينَ) mentioned in verse 10?",
    options: [
      "Guardian angels assigned to record human actions",
      "Human guards protecting earthly castles",
      "Scholars who memorize scriptures",
      "The physical mountains on earth"
    ],
    correctAnswer: "Guardian angels assigned to record human actions",
    explanation: "Tafsir scholars agree that 'Hafizheen' refers to the honorable angels tasked with watching over and recording human conduct."
  },
  {
    id: "q49",
    question: "What description is given to the recording angels in verse 11 ('كِرَامًا كَاتِبِينَ')?",
    options: [
      "Noble and honorable recorders",
      "Harsh and stern tormentors",
      "Forgetful scribes",
      "Invisible spirits who do not write"
    ],
    correctAnswer: "Noble and honorable recorders",
    explanation: "They are called 'Kiraman' (noble/honorable) to show respect for their elevated station and impartiality in writing truth."
  },
  {
    id: "q50",
    question: "What comfort or warning does 'يَعْلَمُونَ مَا تَفْعَلُونَ' convey to believers and disbelievers?",
    options: [
      "Nothing is hidden from God's record; every action is known",
      "Angels only record major public sins",
      "Good deeds are erased if not spoken aloud",
      "Secrets in hearts are never documented"
    ],
    correctAnswer: "Nothing is hidden from God's record; every action is known",
    explanation: "It serves as a constant reminder of accountability: every open or hidden deed is known and recorded accurately by divine command."
  },
  {
    id: "q51",
    question: "What place of reward is promised to 'Al-Abrar' (الْأَبْرَارَ) in verse 13?",
    options: [
      "Na'eem (Eternal Bliss / Paradise)",
      "Earthly kingdoms",
      "Temporary rest in the grave",
      "A life of luxury in this world"
    ],
    correctAnswer: "Na'eem (Eternal Bliss / Paradise)",
    explanation: "'Al-Abrar' (the righteous who fulfill duties to God and creation) will dwell in 'Na'eem', an abode of perpetual delight."
  },
  {
    id: "q52",
    question: "Who are 'Al-Fujjar' (الْفُجَّارَ) described in verse 14?",
    options: [
      "The wicked who tear open sacred boundaries through sin and disbelief",
      "Poor people who struggle financially",
      "Travelers who lose their way",
      "Believers who commit minor mistakes"
    ],
    correctAnswer: "The wicked who tear open sacred boundaries through sin and disbelief",
    explanation: "'Fujjar' comes from 'fajara' (to tear open), describing those who openly break God's commandments and commit wickedness."
  },
  {
    id: "q53",
    question: "What destination awaits 'Al-Fujjar' according to verse 14?",
    options: [
      "Jaheem (Blazing Hellfire)",
      "Forgiveness without accounting",
      "Rebirth into another world",
      "Extinction into nothingness"
    ],
    correctAnswer: "Jaheem (Blazing Hellfire)",
    explanation: "The Quran explicitly states that the destination of unrepentant transgressors and wicked rejecters is 'Jaheem'."
  },
  {
    id: "q54",
    question: "When will the wicked burn in Hellfire according to verse 15 ('يَصْلَوْنَهَا يَوْمَ الدِّينِ')?",
    options: [
      "On the Day of Recompense / Judgment",
      "During their life on earth",
      "Only for a few numbered days before entering Paradise",
      "Before the creation of the universe"
    ],
    correctAnswer: "On the Day of Recompense / Judgment",
    explanation: "'Yawm ad-Deen' refers specifically to the Day of Recompense when final divine sentences are executed."
  },
  {
    id: "q55",
    question: "What does verse 16 ('وَمَا هُمْ عَنْهَا بِغَائِبِينَ') signify about the punishment of the wicked?",
    options: [
      "They will never be able to escape or absent themselves from it",
      "They will be allowed short leaves of absence",
      "They will watch Hell from a safe distance",
      "They can buy their way out with ransoms"
    ],
    correctAnswer: "They will never be able to escape or absent themselves from it",
    explanation: "The phrase emphasizes absolute confinement; none among the condemned can hide, flee, or be absent from their sentence."
  },
  {
    id: "q56",
    question: "Why is the question 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' repeated in verses 17 and 18?",
    options: [
      "To emphasize the immense awe, gravity, and mystery of Judgment Day",
      "Because the prophet forgot the answer",
      "To change the subject to another story",
      "To fill rhythmic meter in poetry"
    ],
    correctAnswer: "To emphasize the immense awe, gravity, and mystery of Judgment Day",
    explanation: "Repetition of 'Wa ma adraka' in Qur'anic style signifies supreme importance, grandeur, and terrifying reality beyond human imagination."
  },
  {
    id: "q57",
    question: "What core truth of Judgment Day is declared in verse 19 ('يَوْمَ لَا تَمْلِكُ نَفْسٌ لِنَفْسٍ شَيْئًا')?",
    options: [
      "No soul will have any power or intercession to benefit another independently",
      "Family members can take each other's punishments",
      "Tribal leaders can protect their followers",
      "Wealth can buy salvation from angels"
    ],
    correctAnswer: "No soul will have any power or intercession to benefit another independently",
    explanation: "All human inter-dependence and worldly authority vanish; no individual can help or redeem another on that Day."
  },
  {
    id: "q58",
    question: "What is the meaning of 'وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ' at the conclusion of Surah Al-Infitar?",
    options: [
      "All sovereignty, judgment, and authority belong exclusively to Allah alone",
      "Kings will rule over their nations once more",
      "Angels will make independent decisions",
      "Human courts will re-examine cases"
    ],
    correctAnswer: "All sovereignty, judgment, and authority belong exclusively to Allah alone",
    explanation: "Though Allah possesses all authority always, on Judgment Day even the illusion of human control is completely shattered."
  },
  {
    id: "q59",
    question: "Which of the following best describes the overall theme of Surah Al-Infitar?",
    options: [
      "Awakening human conscience to divine benevolence, recording angels, and final accountability",
      "Detailed instructions on legal contracts and interest",
      "Rules regarding pilgrimage rituals and animal sacrifice",
      "Military tactics for defending city borders"
    ],
    correctAnswer: "Awakening human conscience to divine benevolence, recording angels, and final accountability",
    explanation: "The Surah powerfully contrasts God's favors in creating man with man's heedlessness, warning of an inescapable accounting."
  },
  {
    id: "q60",
    question: "What lesson regarding human pride can be derived from 'مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ'?",
    options: [
      "Pride and self-delusion lead humans to abuse God's grace and neglect worship",
      "Generosity from God means sinning has no consequences",
      "Human intelligence is self-made without divine guidance",
      "Wealth is proof of divine favor regardless of faith"
    ],
    correctAnswer: "Pride and self-delusion lead humans to abuse God's grace and neglect worship",
    explanation: "Scholars note that deluded people misuse God's patience and kindness as an excuse to continue disobeying Him."
  },
  {
    id: "q61",
    question: "How does Surah Al-Infitar describe the record of deeds?",
    options: [
      "Accurately maintained by honorable angels who know everything humans do",
      "Rough estimates written down after death",
      "Recorded only when a person reaches old age",
      "Kept strictly by human community leaders"
    ],
    correctAnswer: "Accurately maintained by honorable angels who know everything humans do",
    explanation: "Verses 10-12 confirm that noble guardian angels continuously record every word and action with perfection."
  },
  {
    id: "q62",
    question: "What correlation exists between Surah At-Takwir (81) and Surah Al-Infitar (82)?",
    options: [
      "Both vividly depict cosmic destruction signaling the onset of Judgment Day",
      "Both focus on the history of Prophet Moses and Pharaoh",
      "Both deal primarily with financial transactions",
      "Both were revealed in Medina after Hijrah"
    ],
    correctAnswer: "Both vividly depict cosmic destruction signaling the onset of Judgment Day",
    explanation: "Surahs 81, 82, and 84 form a triad of early Makkan surahs describing the dramatic physical transformation of the universe."
  },
  {
    id: "q63",
    question: "What narration in Hadith literature connects Surah At-Takwir, Al-Infitar, and Al-Inshiqaq?",
    options: [
      "Whoever wishes to see the Day of Resurrection as if with their own eyes should recite them",
      "Reciting them guarantees wealth in this world",
      "They must only be recited during night prayers",
      "They were revealed on the same single day"
    ],
    correctAnswer: "Whoever wishes to see the Day of Resurrection as if with their own eyes should recite them",
    explanation: "In a authentic Hadith (Tirmidhi), the Prophet (ﷺ) recommended these three Surahs for visual clarity regarding Judgment Day."
  },
  {
    id: "q64",
    question: "What theological principle is affirmed by 'فِي أَيِّ صُورَةٍ مَا شَاءَ رَكَّبَكَ'?",
    options: [
      "Allah's absolute power and wisdom in fashioning creation without any partner",
      "That human beings evolved without divine intent",
      "That angels choose how human beings look",
      "That parents independently design their child's features"
    ],
    correctAnswer: "Allah's absolute power and wisdom in fashioning creation without any partner",
    explanation: "It affirms Tawheed in creation: Allah alone determines the physical structure, features, and destiny of every created being."
  },
  {
    id: "q65",
    question: "Why is the term 'Al-Abrar' plural in verse 13?",
    options: [
      "To include all righteous individuals across nations and times who remain faithful",
      "It refers only to the companions of the Prophet",
      "It refers exclusively to prophets and messengers",
      "It is a singular title for one specific king"
    ],
    correctAnswer: "To include all righteous individuals across nations and times who remain faithful",
    explanation: "'Al-Abrar' is the plural of 'Barr' or 'Baarr', encompassing all pious and dutiful servants of Allah throughout history."
  },
  {
    id: "q66",
    question: "What attitude should a believer adopt when reading Surah Al-Infitar?",
    options: [
      "Deep reflection, self-scrutiny, and gratitude for God's favors",
      "Arrogance and indifference toward the future",
      "Despair without hope in God's mercy",
      "Focusing only on worldly ambitions"
    ],
    correctAnswer: "Deep reflection, self-scrutiny, and gratitude for God's favors",
    explanation: "The Surah balances terrifying scenes of judgment with reminders of God's kindness, encouraging sincere repentance and action."
  },
  {
    id: "q67",
    question: "What does the phrase 'مَا قَدَّمَتْ وَأَخَّرَتْ' teach regarding human legacy?",
    options: [
      "Actions sent ahead during life and legacies/effects left behind after death",
      "Firstborn children versus younger children",
      "Morning prayers versus evening prayers",
      "Early conquests versus later treaties"
    ],
    correctAnswer: "Actions sent ahead during life and legacies/effects left behind after death",
    explanation: "Commentators explain 'mâ qaddamat' as deeds done in life, and 'âkharat' as good or bad sunnahs/habits left for others to follow."
  },
  {
    id: "q68",
    question: "In verse 7, what does 'فَسَوَّاكَ' signify regarding the human body?",
    options: [
      "Creating limbs, organs, and faculties in perfect symmetry and function",
      "Making all human beings identical in height and voice",
      "Giving humans wings like angels",
      "Protecting the physical body from disease permanently"
    ],
    correctAnswer: "Creating limbs, organs, and faculties in perfect symmetry and function",
    explanation: "'Taswiyah' refers to fashioning the human form with upright posture, balanced senses, and harmonious organs."
  },
  {
    id: "q69",
    question: "Does Surah Al-Infitar contain specific procedural jurisprudence (fiqh) rulings?",
    options: [
      "No; its main emphasis is belief, accountability, and moral warning",
      "Yes; it details inheritance calculation rules",
      "Yes; it outlines exact zakat percentages",
      "Yes; it prescribes steps for physical ablution"
    ],
    correctAnswer: "No; its main emphasis is belief, accountability, and moral warning",
    explanation: "As an early Makkan revelation, its goal is building foundational faith (Aqeedah) and moral consciousness rather than legal rulings."
  },
  {
    id: "q70",
    question: "What is a sound way to derive practical guidance from this Surah without inventing a legal ruling?",
    options: [
      "Strengthen faith in accountability and let it shape conduct",
      "Invent new ritual prayers for cosmic events",
      "Ignore daily obligations and focus only on the future",
      "Assume human actions have no permanent consequences"
    ],
    correctAnswer: "Strengthen faith in accountability and let it shape conduct",
    explanation: "Practical application involves living with mindfulness (Taqwa), recognizing recording angels, and preparing for the final accounting."
  }
];

const surah82AdvancedQuestions: QuizQuestion[] = [
  {
    id: "q71",
    question: "What does the verb 'انفَطَرَتْ' mean in 82:1?",
    options: [
      "It folded up into a ball",
      "It split open or cleft apart",
      "It shone brightly",
      "It rained heavily"
    ],
    correctAnswer: "It split open or cleft apart",
    explanation: "Infitar comes from root ف-ط-ر, meaning to cleave, split open, or break asunder. (82:1)"
  },
  {
    id: "q72",
    question: "What does 'الْكَوَاكِبُ' mean in 82:2?",
    options: [
      "The mountains",
      "The clouds",
      "The stars or celestial bodies",
      "The oceans"
    ],
    correctAnswer: "The stars or celestial bodies",
    explanation: "Kawakib (plural of Kawkab) means stars or planetary bodies. (82:2)"
  },
  {
    id: "q73",
    question: "What does 'انْتَثَرَتْ' mean in 82:2?",
    options: [
      "They fell in line",
      "They were scattered or dispersed",
      "They burned brightly",
      "They stopped moving"
    ],
    correctAnswer: "They were scattered or dispersed",
    explanation: "Intatharat comes from ن-ث-ر, meaning to strew, scatter, or disperse in disarray. (82:2)"
  },
  {
    id: "q74",
    question: "What does 'فُجِّرَتْ' mean in 82:3 regarding the seas?",
    options: [
      "They dried up completely",
      "They burst forth or overflowed",
      "They turned to ice",
      "They sank into the earth"
    ],
    correctAnswer: "They burst forth or overflowed",
    explanation: "Fujjirath comes from ف-ج-ر, meaning to cause water to gush, erupt, burst forth, or overflow barriers. (82:3)"
  },
  {
    id: "q75",
    question: "What does 'الْقُبُورُ' mean in 82:4?",
    options: [
      "The palaces",
      "The graves or tombs",
      "The mountains",
      "The secrets"
    ],
    correctAnswer: "The graves or tombs",
    explanation: "Qubur is the plural of Qabr, meaning graves or burial places. (82:4)"
  },
  {
    id: "q76",
    question: "What does 'بُعْثِرَتْ' mean in 82:4?",
    options: [
      "They were sealed tight",
      "They were overturned or turned inside out",
      "They were flooded with water",
      "They were hidden away"
    ],
    correctAnswer: "They were overturned or turned inside out",
    explanation: "Bu'thirat is a quadriliteral verb from ب-ع-ث-ر meaning to turn upside down, scatter, or bring contents to the surface. (82:4)"
  },
  {
    id: "q77",
    question: "What does 'قَدَّمَتْ' mean in 82:5 in relation to deeds?",
    options: [
      "What it sent ahead or performed earlier",
      "What it delayed until death",
      "What it forgot",
      "What it concealed from others"
    ],
    correctAnswer: "What it sent ahead or performed earlier",
    explanation: "Qaddamat is from ق-د-م, meaning to send forward or perform ahead for the future. (82:5)"
  },
  {
    id: "q78",
    question: "What does 'أَخَّرَتْ' mean in 82:5?",
    options: [
      "What it rushed to do",
      "What it kept back, delayed, or left behind",
      "What it hid in secret",
      "What it accomplished perfectly"
    ],
    correctAnswer: "What it kept back, delayed, or left behind",
    explanation: "Akhkharat is from أ-خ-ر, meaning to postpone, leave behind, or neglect. (82:5)"
  },
  {
    id: "q79",
    question: "What does 'غَرَّكَ' mean in 82:6?",
    options: [
      "What guided you",
      "What deceived or deluded you",
      "What angered you",
      "What enriched you"
    ],
    correctAnswer: "What deceived or deluded you",
    explanation: "Gharraka comes from غ-ر-ر, meaning to deceive, entice, or give false sense of security. (82:6)"
  },
  {
    id: "q80",
    question: "What does 'الْكَرِيمِ' mean in 82:6 as a divine attribute?",
    options: [
      "The All-Severe",
      "The Noble, Most Generous",
      "The All-Knowing",
      "The Ever-Living"
    ],
    correctAnswer: "The Noble, Most Generous",
    explanation: "Al-Kareem comes from ك-ر-م and means the Most Noble, Bountiful, and Generous. (82:6)"
  },
  {
    id: "q81",
    question: "What does 'سَوَّاكَ' mean in 82:7?",
    options: [
      "He destroyed you",
      "He fashioned/proportioned you properly",
      "He tested you with hardship",
      "He hid your flaws"
    ],
    correctAnswer: "He fashioned/proportioned you properly",
    explanation: "Sawwaka is from س-و-ي, meaning to fashion harmoniously, complete, or make upright. (82:7)"
  },
  {
    id: "q82",
    question: "What does 'فَعَدَلَكَ' mean in 82:7?",
    options: [
      "He punished you justly",
      "He balanced or proportioned your form",
      "He gave you wealth",
      "He changed your heart"
    ],
    correctAnswer: "He balanced or proportioned your form",
    explanation: "'Adalaka is from ع-د-ل, meaning to balance, make straight, or render symmetrical. (82:7)"
  },
  {
    id: "q83",
    question: "What does 'صُورَةٍ' mean in 82:8?",
    options: [
      "A voice or speech",
      "A form, image, or shape",
      "A city or place",
      "A time or age"
    ],
    correctAnswer: "A form, image, or shape",
    explanation: "Surah (plural Suwar) from ص-و-ر means form, shape, feature, or appearance. (82:8)"
  },
  {
    id: "q84",
    question: "What does 'رَكَّبَكَ' mean in 82:8?",
    options: [
      "He assembled or composed you",
      "He guided you to path",
      "He separated your parts",
      "He protected your health"
    ],
    correctAnswer: "He assembled or composed you",
    explanation: "Rakkabaka comes from ر-ك-ب, meaning to put together, assemble, or structure components. (82:8)"
  },
  {
    id: "q85",
    question: "What does 'تُكَذِّبُونَ' mean in 82:9?",
    options: [
      "You speak the truth",
      "You deny or reject as false",
      "You hesitate to act",
      "You ask questions"
    ],
    correctAnswer: "You deny or reject as false",
    explanation: "Tukaththibuna is from ك-ذ-ب, meaning you deny, reject, or declare to be a lie. (82:9)"
  },
  {
    id: "q86",
    question: "What does 'بِالدِّينِ' mean in the context of 82:9?",
    options: [
      "The physical laws of nature",
      "The Day of Judgment / Recompense",
      "Ancient stories of old",
      "Worldly business trade"
    ],
    correctAnswer: "The Day of Judgment / Recompense",
    explanation: "Ad-Deen in eschatological passages refers to the Day of Recompense and final accounting. (82:9)"
  },
  {
    id: "q87",
    question: "What does 'حَافِظِينَ' mean in 82:10?",
    options: [
      "Scholars of scriptures",
      "Guardians or watchers (angels)",
      "Soldiers in armor",
      "Keepers of wealth"
    ],
    correctAnswer: "Guardians or watchers (angels)",
    explanation: "Hafizheen is the plural active participle from ح-ف-ظ, meaning protectors, guardians, or watchers. (82:10)"
  },
  {
    id: "q88",
    question: "What does 'كِرَامًا' mean in 82:11?",
    options: [
      "Noble or honorable ones",
      "Strict and harsh ones",
      "Invisible spirits",
      "Numerous armies"
    ],
    correctAnswer: "Noble or honorable ones",
    explanation: "Kiraman is plural of Kareem from ك-ر-م, meaning noble, honorable, and dignified. (82:11)"
  },
  {
    id: "q89",
    question: "What does 'كَاتِبِينَ' mean in 82:11?",
    options: [
      "Recorders or writers",
      "Speakers of truth",
      "Witnesses in court",
      "Judges over people"
    ],
    correctAnswer: "Recorders or writers",
    explanation: "Katibeen is plural of Katib from ك-ت-ب, meaning scribes or recorders of deeds. (82:11)"
  },
  {
    id: "q90",
    question: "What does 'الْأَبْرَارَ' mean in 82:13?",
    options: [
      "The wealthy elite",
      "The righteous and pious ones",
      "The rulers and kings",
      "The martyrs of war"
    ],
    correctAnswer: "The righteous and pious ones",
    explanation: "Al-Abrar is plural of Barr/Baarr from ب-ر-ر, meaning the virtuous, righteous, and obedient. (82:13)"
  },
  {
    id: "q91",
    question: "What does 'نَعِيمٍ' mean in 82:13?",
    options: [
      "Delight, bliss, or luxury",
      "Safety from fear",
      "Knowledge and light",
      "Long physical life"
    ],
    correctAnswer: "Delight, bliss, or luxury",
    explanation: "Na'eem comes from ن-ع-م, meaning comfort, delight, ease, and heavenly bliss. (82:13)"
  },
  {
    id: "q92",
    question: "What does 'الْفُجَّارَ' mean in 82:14?",
    options: [
      "The wicked or transgressors",
      "The hypocrites in faith",
      "The ignorant people",
      "The poor and needy"
    ],
    correctAnswer: "The wicked or transgressors",
    explanation: "Al-Fujjar is plural of Fajir from ف-ج-ر, meaning wicked doers who break moral limits. (82:14)"
  },
  {
    id: "q93",
    question: "What does 'جَحِيمٍ' mean in 82:14?",
    options: [
      "A dark prison cell",
      "A fierce, blazing Hellfire",
      "A deep ocean abyss",
      "A barren hot desert"
    ],
    correctAnswer: "A fierce, blazing Hellfire",
    explanation: "Jaheem comes from ج-ح-م, referring to intense, fiercely burning fire. (82:14)"
  },
  {
    id: "q94",
    question: "What does 'يَصْلَوْنَهَا' mean in 82:15?",
    options: [
      "They will view it from outside",
      "They will burn in it or enter its heat",
      "They will pass over it quickly",
      "They will fear its roar"
    ],
    correctAnswer: "They will burn in it or enter its heat",
    explanation: "Yaslawnaha comes from ص-ل-ي, meaning to burn, roast, or suffer the heat of fire. (82:15)"
  },
  {
    id: "q95",
    question: "What does 'بِغَائِبِينَ' mean in 82:16?",
    options: [
      "Able to escape unnoticed",
      "Absent or hidden away from it",
      "Protected from its flames",
      "Pardoned from sentence"
    ],
    correctAnswer: "Absent or hidden away from it",
    explanation: "Gha'ibeen is plural of Gha'ib from غ-ي-ب, meaning absent, away, or hidden. (82:16)"
  },
  {
    id: "q96",
    question: "What does 'أَدْرَاكَ' mean in 82:17?",
    options: [
      "Made you know / comprehend",
      "Warned you of danger",
      "Saved you from harm",
      "Showed you vision"
    ],
    correctAnswer: "Made you know / comprehend",
    explanation: "Adraka comes from د-ر-ي, used in Quranic phrasing 'Ma adraka' meaning 'What can make you comprehend?' (82:17)"
  },
  {
    id: "q97",
    question: "What does 'لَا تَمْلِكُ' mean in 82:19?",
    options: [
      "Does not speak a word",
      "Does not possess power or control",
      "Does not remember its past",
      "Does not fear the punishment"
    ],
    correctAnswer: "Does not possess power or control",
    explanation: "La tamliku is from م-ل-ك, conveying lack of ownership, authority, or ability to benefit another. (82:19)"
  },
  {
    id: "q98",
    question: "What does 'شَيْئًا' mean in 82:19?",
    options: [
      "Any single thing or benefit",
      "A large fortune of wealth",
      "A small piece of advice",
      "A valid legal excuse"
    ],
    correctAnswer: "Any single thing or benefit",
    explanation: "Shay'an comes from ش-ي-أ, functioning as an indefinite noun meaning 'anything at all'. (82:19)"
  },
  {
    id: "q99",
    question: "What does 'الْأَمْرُ' mean in the final verse 82:19?",
    options: [
      "The wealth and land",
      "The command, authority, and affair",
      "The record of deeds",
      "The creation of angels"
    ],
    correctAnswer: "The command, authority, and affair",
    explanation: "Al-Amr comes from أ-م-ر, meaning the command, sovereignty, and supreme decision. (82:19)"
  },
  {
    id: "q100",
    question: "What does 'يَوْمَئِذٍ' mean in 82:19?",
    options: [
      "On that specific Day",
      "Every single morning",
      "In the past centuries",
      "During human lifetime"
    ],
    correctAnswer: "On that specific Day",
    explanation: "Yawma'ithin is a compound word (Yawm + Ith) meaning 'on that Day'. (82:19)"
  },
  {
    id: "q101",
    question: "What is the primary root of 'فَسَوَّاكَ'?",
    options: [
      "س - و - ي",
      "س - و - أ",
      "س - و - ق",
      "س - ا - و"
    ],
    correctAnswer: "س - و - ي",
    explanation: "The root is س-و-ي, conveying harmony, perfection, and equality of proportion."
  },
  {
    id: "q102",
    question: "What is the primary root of 'أَدْرَاكَ'?",
    options: [
      "د - ر - ي",
      "د - ر - ك",
      "د - ر - س",
      "د - و - ر"
    ],
    correctAnswer: "د - ر - ي",
    explanation: "The root is د-ر-ي, associated with knowing, perceiving, or making aware."
  },
  {
    id: "q103",
    question: "What is the primary root of 'تَمْلِكُ'?",
    options: [
      "م - ل - ك",
      "م - ل - أ",
      "م - ل - ح",
      "م - ل - س"
    ],
    correctAnswer: "م - ل - ك",
    explanation: "The root is م-ل-ك, conveying authority, possession, ownership, and power."
  },
  {
    id: "q104",
    question: "What is the primary root of 'شَيْئًا'?",
    options: [
      "ش - ي - أ",
      "ش - و - أ",
      "ش - ي - ع",
      "ش - و - ك"
    ],
    correctAnswer: "ش - ي - أ",
    explanation: "The root is ش-ي-أ, related to willing or existing as an entity/thing."
  },
  {
    id: "q105",
    question: "What is the primary root of 'الْأَمْرُ'?",
    options: [
      "أ - م - ر",
      "أ - م - ن",
      "أ - م - ل",
      "أ - م - م"
    ],
    correctAnswer: "أ - م - ر",
    explanation: "The root is أ-م-ر, conveying command, order, decree, or matter/affair."
  }
];

const surah82Category: QuizCategory = {
  id: "surah-82",
  title: "Surah Al-Infitar",
  description: "The Splitting Open — Surah 82 (Three-Level Question Bank)",
  icon: "book-open",
  levels: {
    easy: surah82EasyQuestions,
    intermediate: surah82IntermediateQuestions,
    advanced: surah82AdvancedQuestions,
  },
};

export default surah82Category;
