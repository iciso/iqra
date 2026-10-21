import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah Abasa (80) — IQRA-compatible question bank.
 *
 * Converted from KALAM's surah-80-quiz-data.ts:
 * - KALAM option objects become IQRA option strings.
 * - The option marked isCorrect: true becomes correctAnswer.
 * - Arabic/root-letter fields are omitted to match IQRA QuizQuestion shape.
 * The source provides 30 questions. They are exposed under each
 * difficulty until the questions are separately reviewed and graded; this
 * does not imply that the bank has been pedagogically differentiated.
 */
const surah80Questions: QuizQuestion[] = [
  {
    "id": "q1",
    "question": "What is the English meaning for the surah's title, Abasa, عبس?",
    "options": [
      "He Frowned",
      "He Smiled",
      "He Turned Away",
      "He Listened"
    ],
    "correctAnswer": "He Frowned",
    "explanation": "عبس (Abasa) means 'He Frowned,' derived from the root ع-ب-س, referring to the Prophet's momentary expression (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q2",
    "question": "What does the Arabic phrase 'عَبَسَ وَتَوَلَّى' mean?",
    "options": [
      "He smiled and turned toward",
      "He frowned and turned away",
      "He listened and approached",
      "He spoke and engaged"
    ],
    "correctAnswer": "He frowned and turned away",
    "explanation": "عَبَسَ وَتَوَلَّى ('Abasa wa tawalla) means 'He frowned and turned away,' roots ع-ب-س (frowned) and و-ل-ي (turned away) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q3",
    "question": "What does the Arabic phrase 'أَن جَاءَهُ الْأَعْمَى' mean?",
    "options": [
      "Because the wealthy came to him",
      "Because the poor came to him",
      "Because the sighted came to him",
      "Because the blind man came to him"
    ],
    "correctAnswer": "Because the blind man came to him",
    "explanation": "أَن جَاءَهُ الْأَعْمَى (An ja'ahu al-a'ma) means 'Because the blind man came to him,' roots ج-ي-ء (came) and ع-م-ي (blind) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q4",
    "question": "What does the Arabic phrase 'وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّى' mean?",
    "options": [
      "And what would make you know that he might repent",
      "And what would make you know that he might believe",
      "And what would make you know that he might purify himself",
      "And what would make you know that he might sin"
    ],
    "correctAnswer": "And what would make you know that he might purify himself",
    "explanation": "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّى (Wa ma yudrika la'allahu yazzakka) means 'And what would make you know that he might purify himself,' roots د-ر-ي (know) and ز-ك-و (purify) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q5",
    "question": "What does the Arabic phrase 'أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَى' mean?",
    "options": [
      "Or be awakened and the awakening would hurt him",
      "Or be warned and the warning would scare him",
      "Or be reminded and the reminder would benefit him",
      "Or be taught and the teaching would guide him"
    ],
    "correctAnswer": "Or be reminded and the reminder would benefit him",
    "explanation": "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَى (Aw yadhdhakkaru fatanfa'uhu adh-dhikra) means 'Or be reminded and the reminder would benefit him,' roots ذ-ك-ر (reminded) and ن-ف-ع (benefit) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q6",
    "question": "What does the Arabic phrase 'أَمَّا مَنِ اسْتَغْنَى' mean?",
    "options": [
      "As for he who is poor",
      "As for he who is needy",
      "As for he who is humble",
      "As for he who considers himself self-sufficient"
    ],
    "correctAnswer": "As for he who considers himself self-sufficient",
    "explanation": "أَمَّا مَنِ اسْتَغْنَى (Amma mani istaghna) means 'As for he who considers himself self-sufficient,' root غ-ن-ي (self-sufficient) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q7",
    "question": "What does the Arabic phrase 'فَأَنتَ لَهُ تَصَدَّى' mean?",
    "options": [
      "You agree to him",
      "You ignore him",
      "You attend to him",
      "You turn from him"
    ],
    "correctAnswer": "You attend to him",
    "explanation": "فَأَنتَ لَهُ تَصَدَّى (Fa anta lahu tasadda) means 'You attend to him,' root ص-د-ي (attend) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q8",
    "question": "What does the Arabic phrase 'وَمَا عَلَيْكَ أَلَّا يَزَّكَّى' mean?",
    "options": [
      "And not upon you is it if he believes",
      "And not upon you is it if he purifies himself",
      "And not upon you is it if he repents",
      "And not upon you is it if he sins"
    ],
    "correctAnswer": "And not upon you is it if he purifies himself",
    "explanation": "وَمَا عَلَيْكَ أَلَّا يَزَّكَّى (Wa ma 'alayka alla yazzakka) means 'And not upon you is it if he purifies himself,' root ز-ك-و (purify) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q9",
    "question": "What does the Arabic phrase 'وَأَمَّا مَن جَاءَكَ يَسْعَى' mean?",
    "options": [
      "But as for he who came to you striving",
      "But as for he who came to you lazily",
      "But as for he who came to you doubting",
      "But as for he who came to you arrogantly"
    ],
    "correctAnswer": "But as for he who came to you striving",
    "explanation": "وَأَمَّا مَن جَاءَكَ يَسْعَى (Wa amma man ja'aka yas'a) means 'But as for he who came to you striving,' roots ج-ي-ء (came) and س-ع-ي (striving) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q10",
    "question": "What does the Arabic phrase 'وَهُوَ يَخْشَى' mean?",
    "options": [
      "And he is doubting",
      "And he is fearing",
      "And he is arrogant",
      "And he is careless"
    ],
    "correctAnswer": "And he is fearing",
    "explanation": "وَهُوَ يَخْشَى (Wa huwa yakhsha) means 'And he is fearing,' root خ-ش-ي (fear) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q11",
    "question": "What does the Arabic phrase 'فَأَنتَ عَنْهُ تَلَهَّى' mean?",
    "options": [
      "You are attending to him",
      "You are guiding him",
      "You are distracted from him",
      "You are turning toward him"
    ],
    "correctAnswer": "You are distracted from him",
    "explanation": "فَأَنتَ عَنْهُ تَلَهَّى (Fa anta 'anhu talahha) means 'You are distracted from him,' root ل-ه-و (distracted) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q12",
    "question": "What does the Arabic phrase 'كَلَّا إِنَّهَا تَذْكِرَةٌ' mean?",
    "options": [
      "No, indeed, it is a guidance",
      "No, indeed, it is a reminder",
      "No, indeed, it is a warning",
      "No, indeed, it is a revelation"
    ],
    "correctAnswer": "No, indeed, it is a reminder",
    "explanation": "كَلَّا إِنَّهَا تَذْكِرَةٌ (Kalla innaha tadhkirah) means 'No, indeed, it is a reminder,' root ذ-ك-ر (reminder) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q13",
    "question": "What does the Arabic phrase 'فَمَن شَاءَ ذَكَرَهُ' mean?",
    "options": [
      "So whoever wills may read it",
      "So whoever wills may forget it",
      "So whoever wills may remember it",
      "So whoever wills may deny it"
    ],
    "correctAnswer": "So whoever wills may remember it",
    "explanation": "فَمَن شَاءَ ذَكَرَهُ (Faman sha'a dhakarahu) means 'So whoever wills may remember it,' roots ش-ي-ء (wills) and ذ-ك-ر (remember) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q14",
    "question": "What does the Arabic phrase 'فِي صُحُفٍ مُّكَرَّمَةٍ' mean?",
    "options": [
      "In honored sheets",
      "In hidden books",
      "In sacred scrolls",
      "In exalted tablets"
    ],
    "correctAnswer": "In honored sheets",
    "explanation": "فِي صُحُفٍ مُّكَرَّمَةٍ (Fi suhufin mukarramah) means 'In honored sheets,' roots ص-ح-ف (sheets) and ك-ر-م (honored) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q15",
    "question": "What does the Arabic phrase 'مَّرْفُوعَةٍ مُّطَهَّرَةٍ' mean?",
    "options": [
      "Elevated and pure",
      "Hidden and protected",
      "Sacred and honored",
      "Exalted and purified"
    ],
    "correctAnswer": "Exalted and purified",
    "explanation": "مَّرْفُوعَةٍ مُّطَهَّرَةٍ (Marfu'atin mutahharah) means 'Exalted and purified,' roots ر-ف-ع (exalted) and ط-ه-ر (purified) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q16",
    "question": "What does the Arabic phrase 'بِأَيْدِي سَفَرَةٍ' mean?",
    "options": [
      "In the hands of travelers",
      "In the hands of followers",
      "In the hands of messengers",
      "In the hands of scribes"
    ],
    "correctAnswer": "In the hands of scribes",
    "explanation": "بِأَيْدِي سَفَرَةٍ (Bi'aydi safarah) means 'In the hands of scribes or ambassadors,' root س-ف-ر (ambassadors/scribes) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q17",
    "question": "What does the Arabic phrase 'كِرَامٍ بَرَرَةٍ' mean?",
    "options": [
      "Respected and diligent",
      "Honored and righteous",
      "Noble and dutiful",
      "Exalted and pure"
    ],
    "correctAnswer": "Noble and dutiful",
    "explanation": "كِرَامٍ بَرَرَةٍ (Kiram bararah) means 'Noble and dutiful,' roots ك-ر-م (noble) and ب-ر-ر (dutiful) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q18",
    "question": "What does the Arabic phrase 'قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ' mean?",
    "options": [
      "Cursed is man; how faithful he is",
      "Cursed is man; how ungrateful he is",
      "Blessed is man; how grateful he is",
      "Praised is man; how believing he is"
    ],
    "correctAnswer": "Cursed is man; how ungrateful he is",
    "explanation": "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ (Qutila al-insanu ma akfarahu) means 'Cursed is man; how ungrateful he is,' roots ق-ت-ل (cursed), أ-ن-س (man), ك-ف-ر (ungrateful) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q19",
    "question": "What does the Arabic phrase 'مِنْ أَيِّ شَيْءٍ خَلَقَهُ' mean?",
    "options": [
      "From what thing did He create him?",
      "From what place did He guide him?",
      "From what time did He honor him?",
      "From what way did He provide for him?"
    ],
    "correctAnswer": "From what thing did He create him?",
    "explanation": "مِنْ أَيِّ شَيْءٍ خَلَقَهُ (Min ayyi shay'in khalaqahu) means 'From what thing did He create him?' roots ش-ي-ء (thing) and خ-ل-ق (create) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q20",
    "question": "What does the Arabic phrase 'مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ' mean?",
    "options": [
      "From clay He created him and proportioned him",
      "From a sperm-drop He created him and destined him",
      "From blood He created him and guided him",
      "From dust He created him and honored him"
    ],
    "correctAnswer": "From a sperm-drop He created him and destined him",
    "explanation": "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ (Min nutfatin khalaqahu faqaddarahu) means 'From a sperm-drop He created him and destined him,' roots ن-ط-ف (sperm-drop), خ-ل-ق (created), ق-د-ر (destined) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q21",
    "question": "What does the Arabic phrase 'ثُمَّ السَّبِيلَ يَسَّرَهُ' mean?",
    "options": [
      "Then He showed the way for him",
      "Then He made the path difficult for him",
      "Then He eased the way for him",
      "Then He closed the path for him"
    ],
    "correctAnswer": "Then He eased the way for him",
    "explanation": "ثُمَّ السَّبِيلَ يَسَّرَهُ (Thumma as-sabila yassarahu) means 'Then He eased the way for him,' roots س-ب-ل (way) and ي-س-ر (eased) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q22",
    "question": "What does the Arabic phrase 'ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ' mean?",
    "options": [
      "Then He gave him life and resurrected him",
      "Then He granted favours and rewarded him",
      "Then He honored him and exalted him",
      "Then He caused him to die and had him buried"
    ],
    "correctAnswer": "Then He caused him to die and had him buried",
    "explanation": "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ (Thumma amatahu fa-aqbarahu) means 'Then He caused him to die and had him buried,' roots م-و-ت (die) and ق-ب-ر (buried) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q23",
    "question": "What does the Arabic phrase 'ثُمَّ إِذَا شَاءَ أَنشَرَهُ' mean?",
    "options": [
      "Then when He wills, He resurrects him",
      "Then when He wills, He destroys him",
      "Then when He wills, He forgets him",
      "Then when He wills, He punishes him"
    ],
    "correctAnswer": "Then when He wills, He resurrects him",
    "explanation": "ثُمَّ إِذَا شَاءَ أَنشَرَهُ (Thumma idha sha'a ansharahu) means 'Then when He wills, He resurrects him,' roots ش-ي-ء (wills) and ن-ش-ر (resurrects) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q24",
    "question": "What does the Arabic phrase 'كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ' mean?",
    "options": [
      "No, he has not fulfilled what He commanded him",
      "No, he has fulfilled what He commanded him",
      "No, he has forgotten what He commanded him",
      "No, he has denied what He commanded him"
    ],
    "correctAnswer": "No, he has not fulfilled what He commanded him",
    "explanation": "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ (Kalla lamma yaqdi ma amarahu) means 'No, he has not fulfilled what He commanded him,' roots ق-ض-ي (fulfilled) and أ-م-ر (commanded) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q25",
    "question": "What does the Arabic phrase 'فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ' mean?",
    "options": [
      "Let man look at his deeds",
      "Let man look at his creation",
      "Let man look at his family",
      "Let man look at his food"
    ],
    "correctAnswer": "Let man look at his food",
    "explanation": "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ (Falyanzuri al-insanu ila ta'amihi) means 'Let man look at his food,' roots ن-ظ-ر (look), أ-ن-س (man), ط-ع-م (food) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q26",
    "question": "What does the Arabic phrase 'أَنَّا صَبَبْنَا الْمَاءَ صَبًّا' mean?",
    "options": [
      "That We pour down our blessings and mercies",
      "That We pour down the water in abundance",
      "That We send down the fire in torrents",
      "That We scatter the seeds in plenty"
    ],
    "correctAnswer": "That We pour down the water in abundance",
    "explanation": "أَنَّا صَبَبْنَا الْمَاءَ صَبًّا (Anna sababna al-ma'a sabba) means 'That We pour down the water in abundance,' root ص-ب-ب (pour) and م-و-ء (water) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q27",
    "question": "What does the Arabic phrase 'ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا' mean?",
    "options": [
      "Then We flatten the earth completely",
      "Then We shake the earth violently",
      "Then We cover the earth with plants",
      "Then We split the earth in fissures"
    ],
    "correctAnswer": "Then We split the earth in fissures",
    "explanation": "ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا (Thumma shaqaqna al-arda shaqqa) means 'Then We split the earth in fissures,' root ش-ق-ق (split) and أ-ر-ض (earth) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q28",
    "question": "What does the Arabic phrase 'فَأَنبَتْنَا فِيهَا حَبًّا' mean?",
    "options": [
      "And We cause to grow in it fruits",
      "And We cause to grow in it grain",
      "And We cause to grow in it trees",
      "And We cause to grow in it vegetables"
    ],
    "correctAnswer": "And We cause to grow in it grain",
    "explanation": "فَأَنبَتْنَا فِيهَا حَبًّا (Fa'anbatna fiha habba) means 'And We cause to grow in it grain,' roots ن-ب-ت (grow) and ح-ب-ب (grain) (MyIslam, Al-Maududi)."
  },
  {
    "id": "q29",
    "question": "What does the Arabic phrase 'وَعِنَبًا وَقَضْبًا' mean?",
    "options": [
      "And grapes and herbage",
      "And olives and dates",
      "And gardens and fruits",
      "And rivers and springs"
    ],
    "correctAnswer": "And grapes and herbage",
    "explanation": "وَعِنَبًا وَقَضْبًا (Wa 'inaban wa qadba) means 'And grapes and herbage,' roots ع-ن-ب (grapes) and ق-ض-ب (herbage) (Quran.com, Ibn Kathir)."
  },
  {
    "id": "q30",
    "question": "What does the Arabic phrase 'وَزَيْتُونًا وَنَخْلًا' mean?",
    "options": [
      "And grapes and dates",
      "And olives and palm trees",
      "And gardens and fruits",
      "And rivers and springs"
    ],
    "correctAnswer": "And olives and palm trees",
    "explanation": "وَزَيْتُونًا وَنَخْلًا (Wa zaytunan wa nakhla) means 'And olives and palm trees,' roots ز-ي-ت (olives) and ن-خ-ل (palm trees) (MyIslam, Al-Maududi)."
  }
];

const surah80Category: QuizCategory = {
  id: "surah-80",
  title: "Surah Abasa",
  description: "He Frowned — Surah 80",
  icon: "",
  levels: {
    easy: [...surah80Questions],
    intermediate: [...surah80Questions],
    advanced: [...surah80Questions],
  },
};

export default surah80Category;
