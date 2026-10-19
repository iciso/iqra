import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah An-Naba (78) — IQRA-compatible question bank.
 *
 * Converted from KALAM's surah-78-quiz-data.ts:
 * - KALAM option objects become IQRA option strings.
 * - The option marked isCorrect: true becomes correctAnswer.
 * - Arabic/root-letter fields are not included because IQRA's established
 *   QuizQuestion shape uses question, options, correctAnswer, and explanation.
 *
 * The source provides 35 questions, all primarily phrase-translation questions.
 * Until they are separately reviewed and graded by difficulty, the same bank
 * is available under each IQRA difficulty so challenges don't return an empty
 * question list. This does not imply that the questions have been pedagogically
 * differentiated into easy, intermediate, and advanced levels.
 */
const surah78Questions: QuizQuestion[] = [
  {
    "id": "q1",
    "question": "What is the English meaning for the surah's title, An-Naba, النَّبَإِ?",
    "options": [
      "The Warning",
      "The Thunder",
      "The Great News",
      "The Mountains"
    ],
    "correctAnswer": "The Great News",
    "explanation": "النَّبَإِ (An-Naba) means 'The Great News' or 'The Tidings,' derived from the root ن-ب-أ, referring to the momentous news of the Day of Resurrection."
  },
  {
    "id": "q2",
    "question": "What does the Arabic phrase 'عَمَّ يَتَسَاءَلُونَ' mean?",
    "options": [
      "What are they believing in?",
      "What are they asking one another about?",
      "What are they worshipping?",
      "What are they rejecting?"
    ],
    "correctAnswer": "What are they asking one another about?",
    "explanation": "عَمَّ يَتَسَاءَلُونَ ('Amma yatasaa'alun) means 'What are they asking one another about?' root س-أ-ل (ask/question)."
  },
  {
    "id": "q3",
    "question": "What does the Arabic phrase 'عَنِ النَّبَإِ الْعَظِيمِ' mean?",
    "options": [
      "About the small matter",
      "About the hidden secret",
      "About the forgotten news",
      "About the great news"
    ],
    "correctAnswer": "About the great news",
    "explanation": "عَنِ النَّبَإِ الْعَظِيمِ ('Ani an-naba'i al-'azim) means 'About the great news,' roots ن-ب-أ (news) and ع-ظ-م (great)."
  },
  {
    "id": "q4",
    "question": "What does the Arabic phrase 'الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ' mean?",
    "options": [
      "That about which they are in disagreement",
      "That about which they are in agreement",
      "That about which they are certain",
      "That about which they are united"
    ],
    "correctAnswer": "That about which they are in disagreement",
    "explanation": "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ (Alladhi hum fihi mukhtalifun) means 'That about which they are in disagreement,' root خ-ل-ف (differ/disagree)."
  },
  {
    "id": "q5",
    "question": "What does the Arabic phrase 'كَلَّا سَيَعْلَمُونَ' mean?",
    "options": [
      "No! They are going to know",
      "Yes! They already know",
      "Perhaps they will forget",
      "Maybe they will doubt"
    ],
    "correctAnswer": "No! They are going to know",
    "explanation": "كَلَّا سَيَعْلَمُونَ (Kalla saya'lamun) means 'No! They are going to know,' root ع-ل-م (know), expressing certainty about future knowledge."
  },
  {
    "id": "q6",
    "question": "What does the Arabic phrase 'أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا' mean?",
    "options": [
      "Have We not made the earth unstable?",
      "Have We not made the earth spherical?",
      "Have We not made the earth motionless?",
      "Have We not made the earth a resting place?"
    ],
    "correctAnswer": "Have We not made the earth a resting place?",
    "explanation": "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا (Alam naj'ali al-arda mihada) means 'Have We not made the earth a resting place?' roots ج-ع-ل (make), أ-ر-ض (earth), م-ه-د (cradle/resting place)."
  },
  {
    "id": "q7",
    "question": "What does the Arabic phrase 'وَالْجِبَالَ أَوْتَادًا' mean?",
    "options": [
      "And the mountains as stakes",
      "And the mountains as clouds",
      "And the mountains as decorations",
      "And the mountains as barriers"
    ],
    "correctAnswer": "And the mountains as stakes",
    "explanation": "وَالْجِبَالَ أَوْتَادًا (Wal-jibala awtada) means 'And the mountains as stakes,' roots ج-ب-ل (mountains) and و-ت-د (pegs/stakes)."
  },
  {
    "id": "q8",
    "question": "What does the Arabic phrase 'وَخَلَقْنَاكُمْ أَزْوَاجًا' mean?",
    "options": [
      "And We created you individually",
      "And We created you in pairs",
      "And We created you separately",
      "And We created you alone"
    ],
    "correctAnswer": "And We created you in pairs",
    "explanation": "وَخَلَقْنَاكُمْ أَزْوَاجًا (Wa khalaqnakum azwaja) means 'And We created you in pairs,' roots خ-ل-ق (create) and ز-و-ج (pairs/spouses)."
  },
  {
    "id": "q9",
    "question": "What does the Arabic phrase 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا' mean?",
    "options": [
      "And We made your sleep an activity",
      "And We made your sleep a punishment",
      "And We made your sleep rest",
      "And We made your sleep a burden"
    ],
    "correctAnswer": "And We made your sleep rest",
    "explanation": "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا (Wa ja'alna nawmakum subata) means 'And We made your sleep rest,' roots ج-ع-ل (make), ن-و-م (sleep), س-ب-ت (rest/repose)."
  },
  {
    "id": "q10",
    "question": "What does the Arabic phrase 'وَجَعَلْنَا اللَّيْلَ لِبَاسًا' mean?",
    "options": [
      "And We made the night bright",
      "And We made the night covering",
      "And We made the night short",
      "And We made the night warm"
    ],
    "correctAnswer": "And We made the night covering",
    "explanation": "وَجَعَلْنَا اللَّيْلَ لِبَاسًا (Wa ja'alna al-layla libasa) means 'And We made the night covering,' roots ج-ع-ل (make), ل-ي-ل (night), ل-ب-س (covering/garment)."
  },
  {
    "id": "q11",
    "question": "What does the Arabic phrase 'وَجَعَلْنَا النَّهَارَ مَعَاشًا' mean?",
    "options": [
      "And We made the day for livelihood",
      "And We made the day for sleep",
      "And We made the day for rest",
      "And We made the day for darkness"
    ],
    "correctAnswer": "And We made the day for livelihood",
    "explanation": "وَجَعَلْنَا النَّهَارَ مَعَاشًا (Wa ja'alna an-nahara ma'asha) means 'And We made the day for livelihood,' roots ج-ع-ل (make), ن-ه-ر (day), ع-ي-ش (livelihood)."
  },
  {
    "id": "q12",
    "question": "What does the Arabic phrase 'وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا' mean?",
    "options": [
      "And We constructed beneath you seven weak layers",
      "And We constructed above you seven strong",
      "And We constructed beside you seven fragile",
      "And We constructed within you seven soft"
    ],
    "correctAnswer": "And We constructed above you seven strong",
    "explanation": "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا (Wa banayna fawqakum sab'an shidada) means 'And We constructed above you seven strong [heavens],' roots ب-ن-ي (build), س-ب-ع (seven), ش-د-د (strong)."
  },
  {
    "id": "q13",
    "question": "What does the Arabic phrase 'وَجَعَلْنَا سِرَاجًا وَهَّاجًا' mean?",
    "options": [
      "And We made a burning lamp",
      "And We made a dim light",
      "And We made a cold star",
      "And We made a hidden moon"
    ],
    "correctAnswer": "And We made a burning lamp",
    "explanation": "وَجَعَلْنَا سِرَاجًا وَهَّاجًا (Wa ja'alna sirajan wahhaja) means 'And We made a burning lamp,' roots ج-ع-ل (make), س-ر-ج (lamp), و-ه-ج (blazing/burning)."
  },
  {
    "id": "q14",
    "question": "What does the Arabic phrase 'وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا' mean?",
    "options": [
      "And We sent down from the clouds a little water",
      "And We sent down from the mountains dry dust",
      "And We sent down from the rainclouds pouring water",
      "And We sent down from the sky frozen ice"
    ],
    "correctAnswer": "And We sent down from the rainclouds pouring water",
    "explanation": "وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا (Wa anzalna mina al-mu'sirati ma'an thajjaja) means 'And We sent down from the rainclouds pouring water,' roots ن-ز-ل (send down), ع-ص-ر (squeeze/clouds), م-و-ء (water), ث-ج-ج (pouring)."
  },
  {
    "id": "q15",
    "question": "What does the Arabic phrase 'لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا' mean?",
    "options": [
      "That We may destroy grain and plants",
      "That We may hide grain and plants",
      "That We may forget grain and plants",
      "That We may bring forth thereby grain and plants"
    ],
    "correctAnswer": "That We may bring forth thereby grain and plants",
    "explanation": "لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا (Linukhrija bihi habban wanabata) means 'That We may bring forth thereby grain and plants,' roots خ-ر-ج (bring forth), ح-ب-ب (grain), ن-ب-ت (plants)."
  },
  {
    "id": "q16",
    "question": "What does the Arabic phrase 'وَجَنَّاتٍ أَلْفَافًا' mean?",
    "options": [
      "And sparse gardens",
      "And barren gardens",
      "And empty gardens",
      "And gardens of dense greenery"
    ],
    "correctAnswer": "And gardens of dense greenery",
    "explanation": "وَجَنَّاتٍ أَلْفَافًا (Wa jannatin alfafa) means 'And gardens of dense greenery,' roots ج-ن-ن (gardens) and ل-ف-ف (intertwined/dense)."
  },
  {
    "id": "q17",
    "question": "What does the Arabic phrase 'إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا' mean?",
    "options": [
      "Indeed, the Day of Decision is an appointed time",
      "Indeed, the Day of Decision is uncertain",
      "Indeed, the Day of Decision is forgotten",
      "Indeed, the Day of Decision is cancelled"
    ],
    "correctAnswer": "Indeed, the Day of Decision is an appointed time",
    "explanation": "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا (Inna yawma al-fasli kana miqata) means 'Indeed, the Day of Decision is an appointed time,' roots ي-و-م (day), ف-ص-ل (decision/separation), و-ق-ت (appointed time)."
  },
  {
    "id": "q18",
    "question": "What does the Arabic phrase 'يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا' mean?",
    "options": [
      "The Day the Horn is blown and you come individually",
      "The Day the Horn is blown and you come in companies",
      "The Day the Horn is blown and you come willingly",
      "The Day the Horn is blown and you come unknowingly"
    ],
    "correctAnswer": "The Day the Horn is blown and you come in companies",
    "explanation": "'يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا'  (Yawma unfahu fisuri fatau thuna afwaja) means 'The Day the Horn is blown and you come in companies,' roots ي-و-م (day), ف-ص-ل (decision/separation), و-ق-ت (appointed time)."
  },
  {
    "id": "q19",
    "question": "What does the Arabic phrase 'وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا' mean?",
    "options": [
      "And the heaven is closed and becomes sealed",
      "And the heaven is hidden and becomes dark",
      "And the heaven is opened and becomes gateways",
      "And the heaven is covered and becomes solid"
    ],
    "correctAnswer": "And the heaven is opened and becomes gateways",
    "explanation": "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا (Wa futihati as-sama'u fakanat abwaba) means 'And the heaven is opened and becomes gateways,' roots ف-ت-ح (open), س-م-و (heaven), ب-و-ب (doors/gateways)."
  },
  {
    "id": "q20",
    "question": "What does the Arabic phrase 'وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا' mean?",
    "options": [
      "And the mountains are made firm and become solid",
      "And the mountains are removed and become a mirage",
      "And the mountains are raised and become tall",
      "And the mountains are planted and become green"
    ],
    "correctAnswer": "And the mountains are removed and become a mirage",
    "explanation": "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا (Wa suyyirati al-jibalu fakanat saraba) means 'And the mountains are removed and become a mirage,' roots س-ي-ر (move/set in motion), ج-ب-ل (mountains), س-ر-ب (mirage)."
  },
  {
    "id": "q21",
    "question": "What does the Arabic phrase 'إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا' mean?",
    "options": [
      "Indeed, Hell has been lying in wait",
      "Indeed, Hell has been closed",
      "Indeed, Hell has been forgotten",
      "Indeed, Hell has been extinguished"
    ],
    "correctAnswer": "Indeed, Hell has been lying in wait",
    "explanation": "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا (Inna jahannama kanat mirsada) means 'Indeed, Hell has been lying in wait,' roots ج-ه-ن-م (Hell/Gehenna) and ر-ص-د (lying in wait/ambush)."
  },
  {
    "id": "q22",
    "question": "What does the Arabic phrase 'لِّلطَّاغِينَ مَآبًا' mean?",
    "options": [
      "For the righteous a destination",
      "For the transgressors a place of return",
      "For the believers a refuge",
      "For the pious a reward"
    ],
    "correctAnswer": "For the transgressors a place of return",
    "explanation": "لِّلطَّاغِينَ مَآبًا (Littaghina ma'aba) means 'For the transgressors a place of return,' roots ط-غ-و (transgress) and أ-و-ب (return/resort)."
  },
  {
    "id": "q23",
    "question": "What does the Arabic phrase 'لَابِثِينَ فِيهَا أَحْقَابًا' mean?",
    "options": [
      "In which they will remain for ages",
      "In which they will remain for moments",
      "In which they will remain for days",
      "In which they will remain for hours"
    ],
    "correctAnswer": "In which they will remain for ages",
    "explanation": "لَابِثِينَ فِيهَا أَحْقَابًا (Labithina fiha ahqaba) means 'In which they will remain for ages,' roots ل-ب-ث (remain/stay) and ح-ق-ب (ages/long periods)."
  },
  {
    "id": "q24",
    "question": "What does the Arabic phrase 'لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا' mean?",
    "options": [
      "They will taste therein warmth and food",
      "They will taste therein comfort and pleasure",
      "They will not taste therein coolness or drink",
      "They will taste therein sweetness and nectar"
    ],
    "correctAnswer": "They will not taste therein coolness or drink",
    "explanation": "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا (La yadhquqna fiha bardan wala sharaba) means 'They will not taste therein coolness or drink,' roots ذ-و-ق (taste), ب-ر-د (coolness), ش-ر-ب (drink)."
  },
  {
    "id": "q25",
    "question": "What does the Arabic phrase 'إِلَّا حَمِيمًا وَغَسَّاقًا' mean?",
    "options": [
      "Except sweet water and honey",
      "Except cool water and juice",
      "Except pure water and milk",
      "Except scalding water and purulent fluid"
    ],
    "correctAnswer": "Except scalding water and purulent fluid",
    "explanation": "إِلَّا حَمِيمًا وَغَسَّاقًا (Illa hamiman waghassaqa) means 'Except scalding water and purulent fluid,' roots ح-م-م (scalding/hot) and غ-س-ق (purulent/discharge)."
  },
  {
    "id": "q26",
    "question": "What does the Arabic phrase 'جَزَاءً وِفَاقًا' mean?",
    "options": [
      "An unjust recompense",
      "An excessive reward",
      "An insufficient punishment",
      "An appropriate recompense"
    ],
    "correctAnswer": "An appropriate recompense",
    "explanation": "جَزَاءً وِفَاقًا (Jaza'an wifaqa) means 'An appropriate recompense,' roots ج-ز-ي (recompense) and و-ف-ق (fitting/appropriate)."
  },
  {
    "id": "q27",
    "question": "What does the Arabic phrase 'إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا' mean?",
    "options": [
      "Indeed, they were not expecting an account",
      "Indeed, they were expecting a reward",
      "Indeed, they were hoping for mercy",
      "Indeed, they were fearing punishment"
    ],
    "correctAnswer": "Indeed, they were not expecting an account",
    "explanation": "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا (Innahum kanu la yarjuna hisaba) means 'Indeed, they were not expecting an account,' roots ك-و-ن (were), ر-ج-و (expect/hope), ح-س-ب (account/reckoning)."
  },
  {
    "id": "q28",
    "question": "What does the Arabic phrase 'وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا' mean?",
    "options": [
      "And they believed in Our verses completely",
      "And they denied Our verses with denial",
      "And they accepted Our verses with acceptance",
      "And they pondered Our verses with thought"
    ],
    "correctAnswer": "And they denied Our verses with denial",
    "explanation": "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا (Wa kadhhabu bi'ayatina kidhdhaba) means 'And they denied Our verses with denial,' roots ك-ذ-ب (deny/lie) and آ-ي-ت (verses/signs)."
  },
  {
    "id": "q29",
    "question": "What does the Arabic phrase 'وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا' mean?",
    "options": [
      "And all things We have enumerated in writing",
      "And all things We have hidden away",
      "And all things We have destroyed completely",
      "And all things We have forgotten entirely"
    ],
    "correctAnswer": "And all things We have enumerated in writing",
    "explanation": "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا (Wa kulla shay'in ahsaynahu kitaba) means 'And all things We have enumerated in writing,' roots ش-ي-ء (thing), ح-ص-ي (enumerate/count), ك-ت-ب (writing/book)."
  },
  {
    "id": "q30",
    "question": "What does the Arabic phrase 'إِنَّ لِلْمُتَّقِينَ مَفَازًا' mean?",
    "options": [
      "Indeed, for the sinners is loss",
      "Indeed, for the righteous is success",
      "Indeed, for the wicked is failure",
      "Indeed, for the disbelievers is punishment"
    ],
    "correctAnswer": "Indeed, for the righteous is success",
    "explanation": "إِنَّ لِلْمُتَّقِينَ مَفَازًا (Inna lilmuttaqina mafaza) means 'Indeed, for the righteous is success,' roots ت-ق-ي (be righteous/God-fearing) and ف-و-ز (success/attainment)."
  },
  {
    "id": "q31",
    "question": "What does the Arabic phrase 'حَدَائِقَ وَأَعْنَابًا' mean?",
    "options": [
      "Gardens and grapevines",
      "Deserts and thorns",
      "Valleys and rocks",
      "Mountains and caves"
    ],
    "correctAnswer": "Gardens and grapevines",
    "explanation": "حَدَائِقَ وَأَعْنَابًا (Hada'iqa wa a'naba) means 'Gardens and grapevines,' roots ح-د-ق (gardens) and ع-ن-ب (grapes/grapevines)."
  },
  {
    "id": "q32",
    "question": "What does the Arabic phrase 'وَكَوَاعِبَ أَتْرَابًا' mean?",
    "options": [
      "And old women of different ages",
      "And young men of various sizes",
      "And companions of equal age",
      "And servants of mixed backgrounds"
    ],
    "correctAnswer": "And companions of equal age",
    "explanation": "وَكَوَاعِبَ أَتْرَابًا (Wa kawa'iba atraba) means 'And companions of equal age,' roots ك-ع-ب (full-breasted/youthful) and ت-ر-ب (of equal age)."
  },
  {
    "id": "q33",
    "question": "What does the Arabic phrase 'وَكَأْسًا دِهَاقًا' mean?",
    "options": [
      "And an empty cup",
      "And a broken cup",
      "And a small cup",
      "And a full cup"
    ],
    "correctAnswer": "And a full cup",
    "explanation": "وَكَأْسًا دِهَاقًا (Wa ka'san dihaqa) means 'And a full cup,' roots ك-أ-س (cup) and د-ه-ق (full/overflowing)."
  },
  {
    "id": "q34",
    "question": "What does the Arabic phrase 'لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا' mean?",
    "options": [
      "They will hear therein gossip and lies",
      "They will not hear therein ill speech or falsehood",
      "They will hear therein music and singing",
      "They will hear therein arguments and debates"
    ],
    "correctAnswer": "They will not hear therein ill speech or falsehood",
    "explanation": "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا (La yasma'una fiha laghwan wala kidhdhaba) means 'They will not hear therein ill speech or falsehood,' roots س-م-ع (hear), ل-غ-و (vain/idle talk), ك-ذ-ب (falsehood)."
  },
  {
    "id": "q35",
    "question": "What does the Arabic phrase 'جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا' mean?",
    "options": [
      "[As] punishment from your Lord, a meager withholding",
      "[As] trial from your Lord, a difficult test",
      "[As] warning from your Lord, a stern reminder",
      "[As] reward from your Lord, a calculated gift"
    ],
    "correctAnswer": "[As] reward from your Lord, a calculated gift",
    "explanation": "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا (Jaza'an min rabbika 'ata'an hisaba) means '[As] reward from your Lord, a calculated gift,' roots ج-ز-ي (reward), ر-ب-ب (Lord), ع-ط-و (gift/bestowal), ح-س-ب (calculated/sufficient)."
  }
]

const surah78Category: QuizCategory = {
  id: "surah-78",
  title: "Surah An-Naba",
  description: "A quiz on the meanings and vocabulary of Surah An-Naba (The Great News), the 78th chapter of the Quran.",
  icon: "",
  levels: {
    easy: [...surah78Questions],
    intermediate: [...surah78Questions],
    advanced: [...surah78Questions],
  },
};

export default surah78Category;
