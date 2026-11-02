import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah An-Naba (78) — IQRA three-level question bank.
 *
 * Easy: the original 35 phrase-translation questions are retained from the
 * supplied source file, without rewriting their question content.
 *
 * Intermediate: 35 questions on the surah's themes, structure, Makkan context,
 * tafsir and lessons, including the relevant report in Jamiʿ al-Tirmidhi 3297.
 *
 * Advanced: 35 Arabic vocabulary questions drawn from words occurring in
 * Surah An-Naba. Meanings follow the immediate Qur'anic context; rare words
 * with interpretive variation are identified as such in their explanations.
 *
 * The consulted Ibn Kathir introduction reports that no sound specific
 * sabab al-nuzul narration is established for the surah or individual verses.
 * The surah is Makkan; no unrelated seerah incident is presented as its cause
 * of revelation. The surah contains theological and ethical guidance rather
 * than a set of detailed procedural fiqh rulings, so none are invented here.
 */
const surah78EasyQuestions: QuizQuestion[] = [] = [
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
];

const surah78IntermediateQuestions: QuizQuestion[] = [
{
  "id": "q36",
  "question": "According to the opening verses, what is the 'great news' chiefly about?",
  "options": [
    "The coming of the Day of Resurrection",
    "The conquest of Makkah",
    "The migration to Madinah",
    "The appointment of the first caliph"
  ],
  "correctAnswer": "The coming of the Day of Resurrection",
  "explanation": "The opening passage concerns the momentous news of resurrection and the Hereafter. Classical tafsir identifies this as the central subject of the dispute. (78:1–5; Tafsir al-Tabari on 78:1)"
},
{
  "id": "q37",
  "question": "What historical setting is traditionally assigned to Surah An-Naba?",
  "options": [
    "A Madinan surah revealed after Badr",
    "A Makkan surah from the early preaching period",
    "A surah revealed during the Farewell Pilgrimage",
    "A surah revealed at Hudaybiyyah"
  ],
  "correctAnswer": "A Makkan surah from the early preaching period",
  "explanation": "The surah is classified as Makkan. Its emphasis on resurrection, accountability, and the signs of divine power fits the central themes of the Makkan period. (Tafsir Ibn Kathir, introduction to Surah 78)"
},
{
  "id": "q38",
  "question": "What does the opening question 'عَمَّ يَتَسَاءَلُونَ' convey in its context?",
  "options": [
    "A question about trade routes",
    "A question about inheritance",
    "A question exposing people's discussion and dispute over the great news",
    "A question about the direction of prayer"
  ],
  "correctAnswer": "A question exposing people's discussion and dispute over the great news",
  "explanation": "The opening draws attention to what the people were discussing and disputing: the great news, understood by the commentators as resurrection and judgement. (78:1–3; al-Tabari)"
},
{
  "id": "q39",
  "question": "Why does the surah repeat 'كَلَّا سَيَعْلَمُونَ' and then 'ثُمَّ كَلَّا سَيَعْلَمُونَ'?",
  "options": [
    "To indicate uncertainty about the Hereafter",
    "To deny that judgement will occur",
    "To mark two different creation stories",
    "To intensify the warning that they will soon know the truth"
  ],
  "correctAnswer": "To intensify the warning that they will soon know the truth",
  "explanation": "The repeated warning emphatically rejects their denial and stresses the certainty of the reality they will encounter. (78:4–5; Ibn Kathir)"
},
{
  "id": "q40",
  "question": "How do verses 6–16 support the argument for resurrection?",
  "options": [
    "They cite creation and recurring blessings as signs of Allah's power",
    "They describe the genealogy of the Quraysh",
    "They give a timetable for the Last Day",
    "They discuss rules of inheritance"
  ],
  "correctAnswer": "They cite creation and recurring blessings as signs of Allah's power",
  "explanation": "The earth, mountains, human pairs, sleep, night, day, heavens, sun, rain and vegetation are presented as signs of the Creator's power and wisdom. The One who created these can resurrect people. (78:6–16; Maududi, Tafhim al-Qur'an)"
},
{
  "id": "q41",
  "question": "What is the significance of describing the earth as 'مِهَادًا'?",
  "options": [
    "It means the earth is a temporary illusion",
    "It portrays the earth as a prepared resting place or cradle",
    "It means the earth is made of iron",
    "It refers only to the mountains"
  ],
  "correctAnswer": "It portrays the earth as a prepared resting place or cradle",
  "explanation": "Mihād conveys a spread-out or prepared resting place. The verse invites reflection on the earth as a provision made suitable for human life. (78:6; Qur'an 78:6)"
},
{
  "id": "q42",
  "question": "In verse 7, mountains are described as 'أَوْتَادًا' (stakes). What is the image conveyed?",
  "options": [
    "Mountains are buildings constructed by people",
    "Mountains are signs of the coming rain only",
    "The image compares mountains to pegs or stakes",
    "Mountains are described as clouds"
  ],
  "correctAnswer": "The image compares mountains to pegs or stakes",
  "explanation": "Awtād is the plural of watad, a peg or stake. The verse uses this image in describing the mountains as part of Allah's ordered creation. (78:7; Ibn Kathir)"
},
{
  "id": "q43",
  "question": "What does the pairing 'وَخَلَقْنَاكُمْ أَزْوَاجًا' most directly affirm?",
  "options": [
    "All people have identical personalities",
    "Human beings created themselves",
    "Every person has several souls",
    "Allah created human beings in pairs"
  ],
  "correctAnswer": "Allah created human beings in pairs",
  "explanation": "The verse points to Allah's creation of human beings as pairs. The wording is part of the sequence of blessings and signs in verses 6–16. (78:8)"
},
{
  "id": "q44",
  "question": "What does 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا' teach about sleep?",
  "options": [
    "Sleep is a divinely provided period of rest and cessation",
    "Sleep is a punishment for every person",
    "Sleep is forbidden during the night",
    "Sleep has no purpose"
  ],
  "correctAnswer": "Sleep is a divinely provided period of rest and cessation",
  "explanation": "Subāt conveys rest, cessation, or relief from activity. Sleep is presented as one of Allah's mercies and signs. (78:9; Ibn Kathir)"
},
{
  "id": "q45",
  "question": "How do verses 10–11 describe the complementary functions of night and day?",
  "options": [
    "Both are intended only for sleep",
    "Night is a covering, while day is made for livelihood",
    "Night is for trade and day for burial",
    "Both are described as permanent darkness"
  ],
  "correctAnswer": "Night is a covering, while day is made for livelihood",
  "explanation": "Night is likened to a garment or covering, while daylight is made a means for livelihood and activity. (78:10–11)"
},
{
  "id": "q46",
  "question": "What is the function of the sun in the description 'سِرَاجًا وَهَّاجًا'?",
  "options": [
    "A lamp that gives no heat or light",
    "A star that appears only at night",
    "A blazing, radiant lamp",
    "A metaphor for the moon"
  ],
  "correctAnswer": "A blazing, radiant lamp",
  "explanation": "Sirāj wahhāj depicts a brightly blazing lamp, commonly understood in the verse as the sun. It is another sign of Allah's creative power. (78:13; Ibn Kathir)"
},
{
  "id": "q47",
  "question": "What is the sequence described in verses 14–16?",
  "options": [
    "The sea dries up and mountains become gardens",
    "The stars fall and the earth becomes dark",
    "People plant gardens without rain",
    "Rain is sent down, bringing forth grain, plants and dense gardens"
  ],
  "correctAnswer": "Rain is sent down, bringing forth grain, plants and dense gardens",
  "explanation": "The passage describes abundant rain followed by the growth of grain, vegetation and lush gardens. It is an example of provision and a sign of divine power. (78:14–16)"
},
{
  "id": "q48",
  "question": "What does 'يَوْمَ الْفَصْلِ' mean in the context of verse 17?",
  "options": [
    "The Day of Decision and separation",
    "The day of harvest",
    "The day of migration",
    "The day of weekly congregation"
  ],
  "correctAnswer": "The Day of Decision and separation",
  "explanation": "Yawm al-Faṣl is the Day of Decision, when judgement separates people according to their deeds. (78:17; Ibn Kathir)"
},
{
  "id": "q49",
  "question": "What does 'فَتَأْتُونَ أَفْوَاجًا' indicate?",
  "options": [
    "People will remain in their graves",
    "Only one nation will be resurrected",
    "People will come forth in groups",
    "People will enter the world again as infants"
  ],
  "correctAnswer": "People will come forth in groups",
  "explanation": "Afwājan means groups or companies. The verse describes people coming in groups after the Trumpet is blown. (78:18)"
},
{
  "id": "q50",
  "question": "What happens to the mountains in verse 20?",
  "options": [
    "They become gardens",
    "They remain unchanged forever",
    "They turn into rivers",
    "They are set in motion and become like a mirage"
  ],
  "correctAnswer": "They are set in motion and become like a mirage",
  "explanation": "The surah describes the mountains being moved until they appear like a mirage. This is part of the cosmic upheaval of the Last Day. (78:20; compare 20:105–107)"
},
{
  "id": "q51",
  "question": "How is Hell described in verse 21?",
  "options": [
    "As a place lying in wait",
    "As a garden with rivers",
    "As a temporary resting place for everyone",
    "As a place that no one will approach"
  ],
  "correctAnswer": "As a place lying in wait",
  "explanation": "Mirṣād means a place of watch or ambush, conveying that Hell awaits those destined for it. (78:21; Ibn Kathir)"
},
{
  "id": "q52",
  "question": "Who are the people described as 'لِّلطَّاغِينَ مَآبًا'?",
  "options": [
    "Those who give charity secretly",
    "The transgressors, for whom it is a place of return",
    "The angels who record deeds",
    "The prophets who receive revelation"
  ],
  "correctAnswer": "The transgressors, for whom it is a place of return",
  "explanation": "Ṭāghīn refers to those who transgress the bounds. The passage describes Hell as their destination. (78:22)"
},
{
  "id": "q53",
  "question": "What does 'أَحْقَابًا' in verse 23 mean?",
  "options": [
    "A few moments",
    "A single afternoon",
    "Ages or successive long periods",
    "A measure of grain"
  ],
  "correctAnswer": "Ages or successive long periods",
  "explanation": "Aḥqāb is the plural of ḥuqb, referring to long periods or ages. The verse describes the duration of the punishment in the passage. (78:23; consult classical tafsir for the detailed discussion)"
},
{
  "id": "q54",
  "question": "What is the contrast in verses 24–25?",
  "options": [
    "Food is contrasted with clothing",
    "Night is contrasted with day",
    "Mountains are contrasted with valleys",
    "They will find no coolness or drink except scalding water and ghassaq"
  ],
  "correctAnswer": "They will find no coolness or drink except scalding water and ghassaq",
  "explanation": "The passage depicts the punishment of the people of Hell: they will not taste coolness or drink, except what is specified in verse 25. (78:24–25)"
},
{
  "id": "q55",
  "question": "What does 'جَزَاءً وِفَاقًا' emphasise?",
  "options": [
    "A recompense corresponding to what was earned",
    "A reward given without any relation to deeds",
    "A punishment imposed by people",
    "A worldly tax"
  ],
  "correctAnswer": "A recompense corresponding to what was earned",
  "explanation": "The phrase means a fitting or corresponding recompense. The context links the punishment to the people's deeds and denial. (78:26–28)"
},
{
  "id": "q56",
  "question": "According to verse 27, what attitude contributed to the transgressors' fate?",
  "options": [
    "They regularly expected the final account",
    "They did not expect an accounting",
    "They were unaware of ordinary daily events",
    "They had forgotten their family names"
  ],
  "correctAnswer": "They did not expect an accounting",
  "explanation": "The verse says they did not expect a reckoning. The following verse mentions their denial of Allah's signs. (78:27–28)"
},
{
  "id": "q57",
  "question": "What does verse 29 say about the recording of deeds?",
  "options": [
    "Only major deeds are recorded",
    "Deeds are recorded only after death by relatives",
    "Everything has been enumerated and recorded",
    "Human actions cannot be known"
  ],
  "correctAnswer": "Everything has been enumerated and recorded",
  "explanation": "The verse states that every thing has been enumerated in a record. This accords with other Qur'anic passages affirming the recording and preservation of deeds. (78:29; compare 18:49)"
},
{
  "id": "q58",
  "question": "What is the force of the command 'فَذُوقُوا' in verse 30?",
  "options": [
    "An invitation to taste a garden fruit",
    "A command to drink rainwater",
    "A description of worldly medicine",
    "A rebuke announcing the consequence of their deeds"
  ],
  "correctAnswer": "A rebuke announcing the consequence of their deeds",
  "explanation": "In context, 'Taste!' is a stern address to those receiving punishment. The verse continues by saying that they will be given no increase except in punishment. (78:30)"
},
{
  "id": "q59",
  "question": "What major contrast begins at verse 31?",
  "options": [
    "The passage turns from Hell's punishment to the success prepared for the mindful",
    "The passage returns to the creation of mountains",
    "The passage begins a story about a prophet",
    "The passage changes to laws of pilgrimage"
  ],
  "correctAnswer": "The passage turns from Hell's punishment to the success prepared for the mindful",
  "explanation": "Verse 31 begins the contrasting description of the success and reward of the muttaqīn after the preceding description of Hell. (78:31–36)"
},
{
  "id": "q60",
  "question": "Who are 'الْمُتَّقِينَ' in the context of this surah?",
  "options": [
    "Those who possess great wealth",
    "Those mindful of Allah who guard themselves against disobedience",
    "Those who never experience hardship",
    "Those who live only in the desert"
  ],
  "correctAnswer": "Those mindful of Allah who guard themselves against disobedience",
  "explanation": "Al-Muttaqīn refers to people of taqwā: those mindful of Allah and seeking to obey Him. The surah describes their reward in verses 31–36. (78:31)"
},
{
  "id": "q61",
  "question": "Which items are explicitly mentioned among the delights of Paradise in verses 32–34?",
  "options": [
    "Gold, silver and palaces only",
    "Ships, horses and weapons",
    "Gardens, grapevines and a full cup",
    "Mountains, clouds and rain"
  ],
  "correctAnswer": "Gardens, grapevines and a full cup",
  "explanation": "The verses mention gardens, grapevines, companions of equal age, and a cup filled abundantly. (78:32–34)"
},
{
  "id": "q62",
  "question": "What does verse 35 say will be absent from the gathering in Paradise?",
  "options": [
    "Light and shade",
    "Food and drink",
    "Companionship and conversation",
    "Laghw (idle/ill speech) and falsehood"
  ],
  "correctAnswer": "Laghw (idle/ill speech) and falsehood",
  "explanation": "The people of Paradise will not hear vain or false speech there. This highlights the purity and peace of the final abode. (78:35)"
},
{
  "id": "q63",
  "question": "What does 'عَطَاءً حِسَابًا' in verse 36 convey?",
  "options": [
    "A generous, sufficient gift from the Lord",
    "A loan that must be repaid",
    "A gift from one human ruler",
    "A reward whose amount is unknown to Allah"
  ],
  "correctAnswer": "A generous, sufficient gift from the Lord",
  "explanation": "The phrase describes the reward as a gift from the Lord, abundant and sufficient. Tafsir explains the expression in the context of the reward of the people of taqwā. (78:36; Ibn Kathir)"
},
{
  "id": "q64",
  "question": "What does verse 37 emphasise about Allah?",
  "options": [
    "He is limited to the heavens",
    "He is the Lord of the heavens, the earth and all between them, the Most Merciful",
    "He needs permission from creation",
    "He shares authority with the angels"
  ],
  "correctAnswer": "He is the Lord of the heavens, the earth and all between them, the Most Merciful",
  "explanation": "The verse declares Allah's lordship over the heavens, earth and everything between them, and names Him al-Raḥmān. (78:37)"
},
{
  "id": "q65",
  "question": "Why do the Spirit and angels stand in rows in verse 38?",
  "options": [
    "To celebrate a worldly victory",
    "To decide who will create the universe",
    "In awe and obedience before the Most Merciful on the Day of Standing",
    "To prevent people from entering Paradise"
  ],
  "correctAnswer": "In awe and obedience before the Most Merciful on the Day of Standing",
  "explanation": "The verse describes the Spirit and angels standing in rows; none speaks except one permitted by the Most Merciful who says what is right. (78:38)"
},
{
  "id": "q66",
  "question": "What condition is attached to speaking on that Day in verse 38?",
  "options": [
    "Anyone may speak whenever they wish",
    "Only wealthy people may speak",
    "Every person must speak at once",
    "Permission from the Most Merciful, and speaking rightly"
  ],
  "correctAnswer": "Permission from the Most Merciful, and speaking rightly",
  "explanation": "The verse restricts speech to one whom the Most Merciful permits and who speaks correctly. (78:38)"
},
{
  "id": "q67",
  "question": "What does verse 39 call the Day of Judgement?",
  "options": [
    "The True Day",
    "The day of human invention",
    "A symbolic dream",
    "A day that may never occur"
  ],
  "correctAnswer": "The True Day",
  "explanation": "Dhālika al-yawm al-ḥaqq means 'That is the True Day.' The surah concludes by affirming its certainty and urging people to take a return to their Lord. (78:39)"
},
{
  "id": "q68",
  "question": "What choice is presented in 'فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا'?",
  "options": [
    "People may choose whether Allah exists",
    "Whoever wills may take a path of return to their Lord",
    "People can choose to cancel the Day of Judgement",
    "Only angels can return to Allah"
  ],
  "correctAnswer": "Whoever wills may take a path of return to their Lord",
  "explanation": "The verse calls people to take a way of return to their Lord. Human choice and responsibility are emphasised, while the surrounding verses warn of the coming reality. (78:39)"
},
{
  "id": "q69",
  "question": "What is the 'near punishment' mentioned in verse 40?",
  "options": [
    "A punishment that occurred only in ancient times",
    "A metaphor for ordinary tiredness",
    "The punishment of the Hereafter, near in the certainty of its arrival",
    "A punishment that affects only one tribe"
  ],
  "correctAnswer": "The punishment of the Hereafter, near in the certainty of its arrival",
  "explanation": "The warning calls the punishment 'near' because the Hereafter is certain and approaching, not because its timing is disclosed to people. (78:40; compare 70:6–7)"
},
{
  "id": "q70",
  "question": "Which authentic/hasan report specifically names 'عَمَّ يَتَسَاءَلُونَ' among the surahs that deeply affected the Prophet ﷺ?",
  "options": [
    "The report in Jamiʿ al-Tirmidhi 3297, in which he says that Hud, al-Waqiʿah, al-Mursalat, An-Naba and at-Takwir made his hair turn grey",
    "A report that An-Naba was revealed during the Battle of Badr",
    "A report that An-Naba was the last surah revealed",
    "A report that An-Naba was recited only at weddings"
  ],
  "correctAnswer": "The report in Jamiʿ al-Tirmidhi 3297, in which he says that Hud, al-Waqiʿah, al-Mursalat, An-Naba and at-Takwir made his hair turn grey",
  "explanation": "In Jamiʿ al-Tirmidhi 3297, Abu Bakr asks the Prophet ﷺ about his greying hair; the Prophet names Hud, al-Waqiʿah, al-Mursalat, 'Amma yatasa'alun (An-Naba), and at-Takwir. Al-Tirmidhi grades the report hasan gharīb; Darussalam grades it sahih. The report highlights the weight of the warnings and descriptions of the Hereafter. (Jamiʿ al-Tirmidhi 3297)"
}
];

const surah78AdvancedQuestions: QuizQuestion[] = [
{
  "id": "q71",
  "question": "In verse 1, what is the grammatical and lexical sense of 'يَتَسَاءَلُونَ'?",
  "options": [
    "They ask one another",
    "They write down",
    "They travel at night",
    "They give thanks"
  ],
  "correctAnswer": "They ask one another",
  "explanation": "Yatasā'alūn is a Form VI imperfect verb from س-أ-ل, conveying reciprocal asking or questioning. (78:1)"
},
{
  "id": "q72",
  "question": "The word 'النَّبَإِ' is derived from which root and means what?",
  "options": [
    "ن-ص-ر; help",
    "ن-ب-أ; important news or tidings",
    "ن-ف-ق; spending",
    "ن-ز-ل; descent"
  ],
  "correctAnswer": "ن-ب-أ; important news or tidings",
  "explanation": "Al-naba' comes from ن-ب-أ and means news or tidings, especially momentous news in this context. (78:2)"
},
{
  "id": "q73",
  "question": "What does the adjective 'الْعَظِيمِ' mean?",
  "options": [
    "Hidden",
    "Distant",
    "Great or tremendous",
    "Small"
  ],
  "correctAnswer": "Great or tremendous",
  "explanation": "Al-ʿaẓīm is from ع-ظ-م and means great, tremendous or mighty. It describes the momentous news. (78:2)"
},
{
  "id": "q74",
  "question": "What is the meaning of 'مُخْتَلِفُونَ' in verse 3?",
  "options": [
    "United",
    "Grateful",
    "Silent",
    "Differing or disagreeing"
  ],
  "correctAnswer": "Differing or disagreeing",
  "explanation": "Mukhtalifūn is the active participle plural from خ-ل-ف, here meaning those who differ or disagree. (78:3)"
},
{
  "id": "q75",
  "question": "What does the emphatic particle 'كَلَّا' communicate here?",
  "options": [
    "No indeed; a strong rejection or rebuke",
    "Perhaps",
    "Certainly yes",
    "Only"
  ],
  "correctAnswer": "No indeed; a strong rejection or rebuke",
  "explanation": "Kallā is a particle used here to reject the denial and introduce a stern warning. (78:4)"
},
{
  "id": "q76",
  "question": "The verb 'سَيَعْلَمُونَ' contains the prefix 'سَـ'. What does it indicate?",
  "options": [
    "Past action",
    "Future: they will soon know",
    "A command",
    "A question"
  ],
  "correctAnswer": "Future: they will soon know",
  "explanation": "The prefix sa- marks the future. Sayaʿlamūn means 'they will know' or 'they shall soon know.' (78:4)"
},
{
  "id": "q77",
  "question": "What is the meaning of 'مِهَادًا' in verse 6?",
  "options": [
    "A mountain peak",
    "A storm",
    "A prepared resting place or cradle",
    "A riverbank"
  ],
  "correctAnswer": "A prepared resting place or cradle",
  "explanation": "Mihādan comes from م-ه-د and conveys a prepared resting place, cradle or spread-out bed. (78:6)"
},
{
  "id": "q78",
  "question": "What is the singular form related to 'أَوْتَادًا'?",
  "options": [
    "جبل",
    "كتاب",
    "باب",
    "وَتَد (peg or stake)"
  ],
  "correctAnswer": "وَتَد (peg or stake)",
  "explanation": "Awtād is the plural of watad, meaning a peg or stake. The verse compares mountains to stakes. (78:7)"
},
{
  "id": "q79",
  "question": "What does 'أَزْوَاجًا' mean in verse 8?",
  "options": [
    "Pairs",
    "Waves",
    "Paths",
    "Nations"
  ],
  "correctAnswer": "Pairs",
  "explanation": "Azwājan is the plural of zawj and means pairs, mates or spouses, according to context. (78:8)"
},
{
  "id": "q80",
  "question": "What is the meaning of 'سُبَاتًا'?",
  "options": [
    "A journey",
    "Rest, repose or cessation",
    "A punishment",
    "A covering"
  ],
  "correctAnswer": "Rest, repose or cessation",
  "explanation": "Subātan is associated with the root س-ب-ت and means rest or cessation from activity. (78:9)"
},
{
  "id": "q81",
  "question": "In verse 10, what does 'لِبَاسًا' mean literally?",
  "options": [
    "A lamp",
    "A garden",
    "A garment or covering",
    "A mountain"
  ],
  "correctAnswer": "A garment or covering",
  "explanation": "Libāsan means clothing or covering. Night is likened to a garment that covers. (78:10)"
},
{
  "id": "q82",
  "question": "What does 'مَعَاشًا' mean in verse 11?",
  "options": [
    "A burial place",
    "A trial",
    "A prayer direction",
    "A means or period of livelihood"
  ],
  "correctAnswer": "A means or period of livelihood",
  "explanation": "Maʿāshan is related to ع-ي-ش, life or living; it refers to the day as a time for livelihood and activity. (78:11)"
},
{
  "id": "q83",
  "question": "What is the meaning of 'شِدَادًا' in verse 12?",
  "options": [
    "Strong or firm",
    "Soft",
    "Narrow",
    "Temporary"
  ],
  "correctAnswer": "Strong or firm",
  "explanation": "Shidādan is the plural form conveying strength or firmness, describing the seven heavens. (78:12)"
},
{
  "id": "q84",
  "question": "What does 'سِرَاجًا' mean?",
  "options": [
    "A cloud",
    "A lamp",
    "A river",
    "A book"
  ],
  "correctAnswer": "A lamp",
  "explanation": "Sirājan means a lamp or source of light. In verse 13 it refers to the blazing sun. (78:13)"
},
{
  "id": "q85",
  "question": "What is the force of the intensive form 'وَهَّاجًا'?",
  "options": [
    "Very cold",
    "Hidden",
    "Blazing or intensely radiant",
    "Motionless"
  ],
  "correctAnswer": "Blazing or intensely radiant",
  "explanation": "Wahhājan is an intensive form from و-ه-ج, conveying intense brightness, blazing heat or radiance. (78:13)"
},
{
  "id": "q86",
  "question": "What does 'الْمُعْصِرَاتِ' refer to in the verse?",
  "options": [
    "The mountains",
    "The stars",
    "The seas",
    "Rain-bearing clouds (as explained by many commentators)"
  ],
  "correctAnswer": "Rain-bearing clouds (as explained by many commentators)",
  "explanation": "Al-muʿṣirāt is interpreted by many commentators as clouds from which rain is pressed or sent down; tafsir records linguistic and interpretive discussion. (78:14)"
},
{
  "id": "q87",
  "question": "What does 'ثَجَّاجًا' describe?",
  "options": [
    "Pouring abundantly",
    "Freezing",
    "Dripping slowly",
    "Evaporating"
  ],
  "correctAnswer": "Pouring abundantly",
  "explanation": "Thajjājan, from ث-ج-ج, describes water pouring forth abundantly. (78:14)"
},
{
  "id": "q88",
  "question": "What does 'حَبًّا' mean in verse 15?",
  "options": [
    "Mountains",
    "Grain or seeds",
    "Rainclouds",
    "Rivers"
  ],
  "correctAnswer": "Grain or seeds",
  "explanation": "Ḥabban refers to grain or seeds, brought forth by the rain. (78:15)"
},
{
  "id": "q89",
  "question": "What is the meaning of 'نَبَاتًا'?",
  "options": [
    "A garment",
    "A record",
    "Plant growth or vegetation",
    "A trumpet"
  ],
  "correctAnswer": "Plant growth or vegetation",
  "explanation": "Nabātan means plant growth or vegetation, from the root ن-ب-ت. (78:15)"
},
{
  "id": "q90",
  "question": "What does 'أَلْفَافًا' convey about the gardens?",
  "options": [
    "Empty and barren",
    "Dry and rocky",
    "Small and isolated",
    "Dense, luxuriant and intertwined"
  ],
  "correctAnswer": "Dense, luxuriant and intertwined",
  "explanation": "Alfāfan describes gardens with dense, intertwined growth. It is a rare Qur'anic form in this verse. (78:16)"
},
{
  "id": "q91",
  "question": "What is the meaning of 'الْفَصْلِ' in 'يَوْمَ الْفَصْلِ'?",
  "options": [
    "Decision, judgement or separation",
    "Sleep",
    "Rain",
    "Creation"
  ],
  "correctAnswer": "Decision, judgement or separation",
  "explanation": "Al-faṣl comes from ف-ص-ل and conveys separating, distinguishing or deciding. Yawm al-faṣl is the Day of Decision. (78:17)"
},
{
  "id": "q92",
  "question": "What does 'مِيقَاتًا' mean?",
  "options": [
    "A garden",
    "An appointed time",
    "A garment",
    "A companion"
  ],
  "correctAnswer": "An appointed time",
  "explanation": "Mīqātan is an appointed time or fixed appointment, from the root و-ق-ت. (78:17)"
},
{
  "id": "q93",
  "question": "What does the passive verb 'يُنفَخُ' mean in verse 18?",
  "options": [
    "They will write",
    "They will gather",
    "It is blown",
    "They will sleep"
  ],
  "correctAnswer": "It is blown",
  "explanation": "Yunfakhu is a passive imperfect verb from ن-ف-خ, meaning 'it is blown'; the verse refers to the Trumpet. (78:18)"
},
{
  "id": "q94",
  "question": "What does 'أَفْوَاجًا' mean?",
  "options": [
    "Individually",
    "Secretly",
    "In pairs",
    "In groups or companies"
  ],
  "correctAnswer": "In groups or companies",
  "explanation": "Afwājan is the plural of fawj, meaning a group, company or multitude. (78:18)"
},
{
  "id": "q95",
  "question": "What is the meaning of 'أَبْوَابًا' in verse 19?",
  "options": [
    "Gates or gateways",
    "Stakes",
    "Gardens",
    "Records"
  ],
  "correctAnswer": "Gates or gateways",
  "explanation": "Abwāban is the plural of bāb, meaning doors or gates. The heaven is described as becoming gateways. (78:19)"
},
{
  "id": "q96",
  "question": "What does 'سَرَابًا' mean in verse 20?",
  "options": [
    "A flowing river",
    "A mirage",
    "A mountain",
    "A cloudburst"
  ],
  "correctAnswer": "A mirage",
  "explanation": "Sarāban means a mirage, an appearance that seems real from a distance. The mountains are described as becoming like one. (78:20)"
},
{
  "id": "q97",
  "question": "What does 'مِرْصَادًا' convey?",
  "options": [
    "A resting place",
    "A marketplace",
    "A place of watch or ambush; lying in wait",
    "A garden path"
  ],
  "correctAnswer": "A place of watch or ambush; lying in wait",
  "explanation": "Mirṣādan is related to ر-ص-د and conveys a place of observation or ambush, hence 'lying in wait.' (78:21)"
},
{
  "id": "q98",
  "question": "What is the meaning of 'الطَّاغِينَ'?",
  "options": [
    "The grateful",
    "The travellers",
    "The patient",
    "The transgressors who exceed limits"
  ],
  "correctAnswer": "The transgressors who exceed limits",
  "explanation": "Al-ṭāghīn is the plural of ṭāghin, from ط-غ-ي/ط-غ-و, referring to those who transgress or exceed bounds. (78:22)"
},
{
  "id": "q99",
  "question": "What does 'مَآبًا' mean?",
  "options": [
    "A place of return or destination",
    "A garment",
    "A cup",
    "A question"
  ],
  "correctAnswer": "A place of return or destination",
  "explanation": "Ma'āban comes from أ-و-ب and means a place of return, resort or destination. (78:22)"
},
{
  "id": "q100",
  "question": "What is the meaning of 'لَابِثِينَ'?",
  "options": [
    "Departing",
    "Remaining or staying",
    "Speaking",
    "Running"
  ],
  "correctAnswer": "Remaining or staying",
  "explanation": "Lābithīna is an active participle plural from ل-ب-ث, meaning those who remain or stay. (78:23)"
},
{
  "id": "q101",
  "question": "What does 'أَحْقَابًا' refer to?",
  "options": [
    "Short moments",
    "A single night",
    "Ages or long successive periods",
    "A type of drink"
  ],
  "correctAnswer": "Ages or long successive periods",
  "explanation": "Aḥqāban is the plural of ḥuqb, a long period or age. Commentators discuss its precise scope in this context. (78:23)"
},
{
  "id": "q102",
  "question": "What does 'حَمِيمًا' mean in verse 25?",
  "options": [
    "Cool spring water",
    "Sweet milk",
    "A full cup",
    "Scalding or intensely hot water"
  ],
  "correctAnswer": "Scalding or intensely hot water",
  "explanation": "Ḥamīman means intensely hot or scalding water in this context. (78:25)"
},
{
  "id": "q103",
  "question": "What is the meaning of 'غَسَّاقًا'?",
  "options": [
    "A foul, intensely cold or purulent fluid (as explained in tafsir)",
    "A refreshing fruit",
    "A fragrant garden",
    "A bright lamp"
  ],
  "correctAnswer": "A foul, intensely cold or purulent fluid (as explained in tafsir)",
  "explanation": "Ghassāqan is a rare word. Classical tafsir gives explanations including foul fluid or intensely cold, noxious liquid; the verse places it among the punishments of Hell. (78:25)"
},
{
  "id": "q104",
  "question": "What does 'وِفَاقًا' mean in verse 26?",
  "options": [
    "Without measure",
    "Corresponding, fitting or matching",
    "By mistake",
    "In secret"
  ],
  "correctAnswer": "Corresponding, fitting or matching",
  "explanation": "Wifāqan comes from و-ف-ق and means in accordance, fitting or corresponding. The recompense corresponds to deeds. (78:26)"
},
{
  "id": "q105",
  "question": "What does 'يَرْجُونَ' mean in verse 27?",
  "options": [
    "They build",
    "They deny",
    "They expect or hope for",
    "They count"
  ],
  "correctAnswer": "They expect or hope for",
  "explanation": "Yarjūna is from ر-ج-و and means they hope for or expect. In context, they did not expect an accounting. (78:27)"
}
];

const surah78Category: QuizCategory = {
  id: "surah-78",
  title: "Surah An-Naba",
  description: "A three-level study of Surah An-Naba: phrase meanings, tafsir and themes, and Arabic vocabulary.",
  icon: "book-open",
  levels: {
    easy: surah78EasyQuestions,
    intermediate: surah78IntermediateQuestions,
    advanced: surah78AdvancedQuestions,
  },
};

export default surah78Category;
