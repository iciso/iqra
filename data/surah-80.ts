import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah Abasa (80) — IQRA-compatible three-level question bank.
 *
 * Easy: the original 30 phrase-translation questions are retained from the
 * supplied source file, without modifying their question content.
 *
 * Intermediate: 35 brand-new questions on the surah's themes, Makkan context,
 * tafsir, asbab al-nuzul (the historical event regarding Abdullah ibn Umm Maktum),
 * seerah events, and derived lessons from Surah Abasa.
 *
 * Advanced: 35 Arabic vocabulary questions drawn from words occurring in
 * Surah Abasa, testing lexical roots and meanings in context.
 */

const surah80EasyQuestions: QuizQuestion[] = [
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
    "explanation": "فَأَنبَتْنَا فِيهَا حَبًّا (Fa'anbatna fiha habba) means 'And We cause to grow in it grain,' roots ن-ب-ت (grow) and ح-ب-ب (grain) (Quran.com, Ibn Kathir)."
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

const surah80IntermediateQuestions: QuizQuestion[] = [
  {
    "id": "iq1",
    "question": "Surah Abasa is classified as which type of surah according to its place of revelation?",
    "options": [
      "Madinan",
      "Makkan",
      "Partially Makkan and partially Madinan",
      "Revealed during the migration to Abyssinia"
    ],
    "correctAnswer": "Makkan",
    "explanation": "Surah Abasa is a Makkan surah, focusing on core Islamic beliefs, resurrection, accountability, and spiritual etiquette."
  },
  {
    "id": "iq2",
    "question": "Who was the blind companion whose interaction with the Prophet (PBUH) prompted the revelation of the opening verses of Surah Abasa?",
    "options": [
      "Abdullah ibn Mas'ud",
      "Amr ibn al-Jamuh",
      "Abdullah ibn Umm Maktum",
      "Bilal ibn Rabah"
    ],
    "correctAnswer": "Abdullah ibn Umm Maktum",
    "explanation": "The opening verses were revealed regarding Abdullah ibn Umm Maktum, who came eagerly seeking guidance while the Prophet was engaged with prominent Qurayshi leaders."
  },
  {
    "id": "iq3",
    "question": "What was the primary reason the Prophet (PBUH) was engaged with the elite leaders of Quraysh when Abdullah ibn Umm Maktum interrupted?",
    "options": [
      "Negotiating a commercial trade treaty",
      "Hoping to invite them to Islam so their followers might also embrace the faith",
      "Discussing terms of protection against neighboring tribes",
      "Resolving a tribal dispute over property"
    ],
    "correctAnswer": "Hoping to invite them to Islam so their followers might also embrace the faith",
    "explanation": "The Prophet (PBUH) was deeply invested in conveying Islam to influential Qurayshi chieftains like Utbah, Abu Jahl, and Al-Abbas, hoping their conversion would lead to widespread acceptance."
  },
  {
    "id": "iq4",
    "question": "How does Surah Abasa correct the Prophet's focus in a gentle manner?",
    "options": [
      "By reprimanding him for speaking harshly to the leaders",
      "By redirecting attention to the sincere seeker regardless of social status",
      "By instructing him to leave Makkah immediately",
      "By commanding him to levy taxes on the wealthy"
    ],
    "correctAnswer": "By redirecting attention to the sincere seeker regardless of social status",
    "explanation": "The surah establishes that spiritual worth is measured by sincerity and God-consciousness, not by worldly prestige or nobility."
  },
  {
    "id": "iq5",
    "question": "What foundational principle of Islamic da'wah and ethics is highlighted by the episode with Abdullah ibn Umm Maktum?",
    "options": [
      "Prioritizing financial donors in educational circles",
      "Treating all seekers of truth equally without bias toward worldly status",
      "Conducting secret meetings exclusively with tribal chiefs",
      "Avoiding public preaching in marketplaces"
    ],
    "correctAnswer": "Treating all seekers of truth equally without bias toward worldly status",
    "explanation": "Islam teaches that the poor sincere seeker is far more valuable in the sight of Allah than the arrogant aristocrat who turns away."
  },
  {
    "id": "iq6",
    "question": "What does the term 'التَّذْكِرَة' (Ad-Tadhkirah) signify in the context of Surah Abasa?",
    "options": [
      "A historical record of past civilizations",
      "A reminder and admonition from Allah contained in the Quran",
      "A legal code for commercial contracts",
      "A manual for military strategy"
    ],
    "correctAnswer": "A reminder and admonition from Allah contained in the Quran",
    "explanation": "The Quran is described as a reminder; whoever wills shall remember it and take heed."
  },
  {
    "id": "iq7",
    "question": "According to verse 13 and 14, where are these honored reminders recorded?",
    "options": [
      "In the memories of the poets",
      "In honored, elevated, and purified sheets (suhuf)",
      "In stone tablets kept in the Kaaba",
      "In the scrolls of previous prophets only"
    ],
    "correctAnswer": "In honored, elevated, and purified sheets (suhuf)",
    "explanation": "Verse 13-14 state that it is in honored sheets, elevated and purified, in the hands of noble scribes."
  },
  {
    "id": "iq8",
    "question": "Who are referred to as 'سَفَرَةٍ كِرَامٍ بَرَرَةٍ' (Safarah kiram bararah) in Surah Abasa?",
    "options": [
      "Merchants traveling along the trade routes",
      "The angels who convey revelation and record deeds, who are noble and dutiful",
      "The leaders of the Quraysh delegation",
      "The righteous scholars of Madinah"
    ],
    "correctAnswer": "The angels who convey revelation and record deeds, who are noble and dutiful",
    "explanation": "Safarah refers to the angelic scribes/ambassadors between Allah and His prophets who are noble (kiram) and dutiful/righteous (bararah)."
  },
  {
    "id": "iq9",
    "question": "What severe rhetorical question is posed in verse 17 regarding human ingratitude ('قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ')?",
    "options": [
      "Woe to man! How ungrateful and disbelieving he is!",
      "Praised is man for his industrial achievements!",
      "Blessed is man for his wisdom!",
      "Secure is man from divine judgment!"
    ],
    "correctAnswer": "Woe to man! How ungrateful and disbelieving he is!",
    "explanation": "'Qutila al-insanu ma akfarahu' expresses extreme astonishment and condemnation at human denial and ingratitude toward Allah despite clear signs."
  },
  {
    "id": "iq10",
    "question": "What stages of human biological origin does Surah Abasa cite as evidence of Allah's power?",
    "options": [
      "From aged dust and bones",
      "From a sperm-drop (nutfah) created and proportioned by Allah",
      "From clay molded over forty years",
      "From luminous light energy"
    ],
    "correctAnswer": "From a sperm-drop (nutfah) created and proportioned by Allah",
    "explanation": "Verse 18-19 prompt man to consider his humble origin from a drop of fluid out of which Allah fashioned and proportioned him."
  },
  {
    "id": "iq11",
    "question": "How does the surah describe the ease of life's path ordained for man?",
    "options": [
      "Then He made the path difficult for him to test his endurance",
      "Then He eased the way for him (fa-sabila yassarahu)",
      "Then He left man to wander without guidance",
      "Then He closed all doors of sustenance"
    ],
    "correctAnswer": "Then He eased the way for him (fa-sabila yassarahu)",
    "explanation": "Allah makes the path of life, birth, and moral guidance clear and accessible to human understanding."
  },
  {
    "id": "iq12",
    "question": "What natural cycle of life and death is mentioned in verse 21?",
    "options": [
      "Then He causes him to die and has him buried (aqbarahu)",
      "Then He causes him to sleep and wakes him at dawn",
      "Then He sends him on journeys across the earth",
      "Then He tests him with perpetual youth"
    ],
    "correctAnswer": "Then He causes him to die and has him buried (aqbarahu)",
    "explanation": "The surah outlines human destiny: creation, guidance, death, burial, and subsequent resurrection."
  },
  {
    "id": "iq13",
    "question": "What does 'أَنشَرَهُ' (ansharahu) signify in verse 22?",
    "options": [
      "When He wills, He disperses his wealth",
      "When He wills, He resurrects him for judgment",
      "When He wills, He grants him eternal health",
      "When He wills, He exiles him from his homeland"
    ],
    "correctAnswer": "When He wills, He resurrects him for judgment",
    "explanation": "Ansharahu means to bring back to life or resurrect after death."
  },
  {
    "id": "iq14",
    "question": "What theological point is emphasized by 'كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ' (No, man has not yet fulfilled what He commanded him)?",
    "options": [
      "Man has successfully completed all religious duties",
      "Man falls short of fully discharging his ultimate duty of obedience to Allah",
      "Angels have failed to record human actions",
      "Prophets have neglected their missions"
    ],
    "correctAnswer": "Man falls short of fully discharging his ultimate duty of obedience to Allah",
    "explanation": "Despite divine blessings, human beings consistently fail to fulfill all that Allah has commanded them."
  },
  {
    "id": "iq15",
    "question": "What specific reflection does verse 24 direct man to undertake regarding sustenance?",
    "options": [
      "Let man look at his food (ta'amihi) and how it is produced",
      "Let man count the coins in his treasury",
      "Let man examine the architecture of his house",
      "Let man study the weapons of defense"
    ],
    "correctAnswer": "Let man look at his food (ta'amihi) and how it is produced",
    "explanation": "Verse 24 invites contemplation on agriculture, water supply, and provision as proofs of Creator's providence."
  },
  {
    "id": "iq16",
    "question": "How does Allah describe the descent of water in verse 25?",
    "options": [
      "As a light morning mist",
      "As water poured down in abundance (sabban)",
      "As frozen ice crystals from the mountains",
      "As underground springs bubbling upward"
    ],
    "correctAnswer": "As water poured down in abundance (sabban)",
    "explanation": "Allah pours down rain in abundant quantities to revive the dead earth."
  },
  {
    "id": "iq17",
    "question": "What geological process follows the pouring of rain in verse 26?",
    "options": [
      "Volcanic eruptions and lava flows",
      "Splitting the earth in fissures (shaqaqna al-arda shaqqa) for plant growth",
      "Sinking of continents into the sea",
      "Formation of massive mountain ranges"
    ],
    "correctAnswer": "Splitting the earth in fissures (shaqaqna al-arda shaqqa) for plant growth",
    "explanation": "The earth splits open as seeds and roots push through the soil."
  },
  {
    "id": "iq18",
    "question": "Which specific crops and plants are explicitly enumerated in verses 27 through 31?",
    "options": [
      "Wheat, barley, oats, and rice",
      "Grain, grapes, herbage, olives, palm trees, enclosed gardens, and fruits/fodder",
      "Tea, coffee, sugarcane, and cotton",
      "Apples, pears, peaches, and plums"
    ],
    "correctAnswer": "Grain, grapes, herbage, olives, palm trees, enclosed gardens, and fruits/fodder",
    "explanation": "The surah lists diverse agricultural bounties (habba, inaba, qadba, zaytuna, nakhla, hadaiq ghulba, fakiha, abba) as sustenance for humans and cattle."
  },
  {
    "id": "iq19",
    "question": "What is the jurisprudential/theological lesson derived from the detailed listing of provisions in Surah Abasa?",
    "options": [
      "Detailed agricultural regulations for crop taxation",
      "Recognition of divine providence, gratitude (shukr), and the certainty of resurrection",
      "Prohibition of consuming certain fruits during drought",
      "Mandatory botanical sciences curriculum"
    ],
    "correctAnswer": "Recognition of divine providence, gratitude (shukr), and the certainty of resurrection",
    "explanation": "Reflecting on how food grows from dead earth proves that the One who gives life to plants can easily resurrect human beings."
  },
  {
    "id": "iq20",
    "question": "How does the second half of Surah Abasa transition in theme from the first half?",
    "options": [
      "From legal jurisprudence to inheritance laws",
      "From the rebuke regarding moral prioritization to the cosmic proofs of resurrection and the Day of Judgment",
      "From stories of past nations to future prophecies",
      "From rules of warfare to rules of fasting"
    ],
    "correctAnswer": "From the rebuke regarding moral prioritization to the cosmic proofs of resurrection and the Day of Judgment",
    "explanation": "The surah moves from the personal interaction with Ibn Umm Maktum to universal signs of creation and the terrifying reality of the Last Hour."
  },
  {
    "id": "iq21",
    "question": "What term is used in the concluding verses for the deafening, overwhelming blast of the Last Hour?",
    "options": [
      "Al-Qariah (The Striking Calamity)",
      "As-Sakhkhah (The Deafening Blast)",
      "At-Tammah (The Overwhelming Calamity)",
      "Al-Waqiah (The Inevitable Event)"
    ],
    "correctAnswer": "As-Sakhkhah (The Deafening Blast)",
    "explanation": "Verse 33 introduces 'As-Sakhkhah', the deafening trumpet blast of resurrection."
  },
  {
    "id": "iq22",
    "question": "According to verses 34–37, how will people react to their own family members on the Day of As-Sakhkhah?",
    "options": [
      "They will gather together to defend one another",
      "Each person will flee from his brother, mother, father, wife, and children, as everyone will be entirely occupied with their own state",
      "They will trade their good deeds for family members",
      "They will search frantically for lost children"
    ],
    "correctAnswer": "Each person will flee from his brother, mother, father, wife, and children, as everyone will be entirely occupied with their own state",
    "explanation": "The overwhelming terror of the Day causes individuals to escape from their closest loved ones because each soul has enough concerns of its own."
  },
  {
    "id": "iq23",
    "question": "How are human faces described on the Day of Judgment in verses 38–39?",
    "options": [
      "All faces will be dark and gloomy",
      "Some faces that Day will be bright, laughing, and rejoicing",
      "All faces will be indifferent and expressionless",
      "Some faces will be covered in iron masks"
    ],
    "correctAnswer": "Some faces that Day will be bright, laughing, and rejoicing",
    "explanation": "Verse 38–39 describe 'Wujuhun yawma-idhin musfirah, dahikatun mustabsirah' — faces on that Day bright, laughing, and rejoicing."
  },
  {
    "id": "iq24",
    "question": "How are the contrasting faces described in verses 40–42?",
    "options": [
      "Covered with dust (ghabarah), overwhelmed by darkness and gloom (qatarah), representing the disbelievers and wicked (al-fajarah)",
      "Covered with tears and sorrow",
      "Marked with stamps of judgment",
      "Pale from fasting"
    ],
    "correctAnswer": "Covered with dust (ghabarah), overwhelmed by darkness and gloom (qatarah), representing the disbelievers and wicked (al-fajarah)",
    "explanation": "The second category of faces will be stained with dust and darkness, belonging to the ungrateful disbelievers (al-kafarah al-fajarah)."
  },
  {
    "id": "iq25",
    "question": "What overarching lesson does the conclusion of Surah Abasa impart regarding human accountability?",
    "options": [
      "Fate is predetermined with no regard for human choice",
      "Every individual's ultimate destiny depends on their faith and deeds, separating the righteous from the wicked",
      "Wealth guarantees safety in the afterlife",
      "Family lineage protects against divine punishment"
    ],
    "correctAnswer": "Every individual's ultimate destiny depends on their faith and deeds, separating the righteous from the wicked",
    "explanation": "The contrast between the radiant faces of the believers and the dusty faces of the disbelievers underscores personal moral responsibility."
  },
  {
    "id": "iq26",
    "question": "Which major theme connects the opening event with Abdullah ibn Umm Maktum to the closing description of the Day of Judgment?",
    "options": [
      "The laws of inheritance",
      "The equality of human beings before Allah and the fallacy of judging worth by worldly status",
      "The rules of Islamic governance",
      "The geography of the Arabian Peninsula"
    ],
    "correctAnswer": "The equality of human beings before Allah and the fallacy of judging worth by worldly status",
    "explanation": "Both sections emphasize that true value lies in taqwa and faith, rendering worldly aristocracies irrelevant before Allah."
  },
  {
    "id": "iq27",
    "question": "In the context of Asbab al-Nuzul, what did the Prophet's reaction teach future generations of educators and leaders?",
    "options": [
      "To delegate teaching duties entirely to assistants",
      "That divine guidance corrects human oversight with mercy, and sincere seekers of truth must never be marginalized for political expediency",
      "To avoid wealthy individuals altogether",
      "To preach only in private gatherings"
    ],
    "correctAnswer": "That divine guidance corrects human oversight with mercy, and sincere seekers of truth must never be marginalized for political expediency",
    "explanation": "The revelation demonstrates prophetic infallibility in conveying the message, while showing how Allah lovingly guides His Messenger regarding social priorities."
  },
  {
    "id": "iq28",
    "question": "What does the word 'أَبَّا' (abba) in verse 31 refer to according to classical exegetes like Ibn Abbas?",
    "options": [
      "Water springs",
      "Fodder and pasture for livestock",
      "Precious metals",
      "Building materials"
    ],
    "correctAnswer": "Fodder and pasture for livestock",
    "explanation": "Exegesis explains 'abba' as herbage/pasture grazed by cattle, complementing the food grown for humans."
  },
  {
    "id": "iq29",
    "question": "Why is Surah Abasa considered a prime example of Quranic self-referential divine protection of the prophetic mission?",
    "options": [
      "Because it records the Prophet criticizing himself in public",
      "Because it openly documents an instance where Allah gently corrected the Prophet's human prioritization, proving the Quran's authentic divine origin",
      "Because it was written down by angels directly",
      "Because it forbids editing the text"
    ],
    "correctAnswer": "Because it openly documents an instance where Allah gently corrected the Prophet's human prioritization, proving the Quran's authentic divine origin",
    "explanation": "An author fabricating scripture would not invent a rebuke against themselves or their leader; its inclusion testifies to absolute prophetic honesty and divine authorship."
  },
  {
    "id": "iq30",
    "question": "What is the significance of the descriptor 'مُّكَرَّمَةٍ' (Mukarramah) applied to the heavenly sheets in verse 13?",
    "options": [
      "They are written in gold ink",
      "They are honored and held in high esteem in the presence of Allah",
      "They were preserved in the library of Alexandria",
      "They are restricted to Arab tribes"
    ],
    "correctAnswer": "They are honored and held in high esteem in the presence of Allah",
    "explanation": "Mukarramah denotes the supreme honor, sanctity, and exalted status of the divine records."
  },
  {
    "id": "iq31",
    "question": "How does the description of human creation in Surah Abasa ('مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ') refute arrogance?",
    "options": [
      "By reminding man of his initial weak and humble biological origin from a mere drop of fluid",
      "By proving that all humans have identical wealth",
      "By showing that humans cannot build cities",
      "By stating that humans live forever"
    ],
    "correctAnswer": "By reminding man of his initial weak and humble biological origin from a mere drop of fluid",
    "explanation": "Arrogance is baseless when man reflects that he originated from a despised fluid and depends entirely on Allah for existence."
  },
  {
    "id": "iq32",
    "question": "What does 'عَبَسَ' (Abasa) linguistically indicate regarding the facial expression of the Prophet?",
    "options": [
      "A deep smile of welcome",
      "A brief contraction of the facial muscles expressing displeasure or concentration",
      "A loud verbal rebuke",
      "A gesture of turning the back"
    ],
    "correctAnswer": "A brief contraction of the facial muscles expressing displeasure or concentration",
    "explanation": "Abasa denotes frowning or wrinkling the brow due to preoccupation or momentary dismay."
  },
  {
    "id": "iq33",
    "question": "What lesson on sincerity in da'wah is derived from comparing 'مَنِ اسْتَغْنَى' and 'مَنْ جَاءَكَ يَسْعَى'?",
    "options": [
      "Financial contributions determine spiritual priority",
      "Eagerness for spiritual truth and fear of Allah outweigh worldly status and wealth",
      "Preaching should only target the ruling class",
      "Blind individuals require less attention"
    ],
    "correctAnswer": "Eagerness for spiritual truth and fear of Allah outweigh worldly status and wealth",
    "explanation": "The seeker who strives and fears Allah is spiritually superior to the self-sufficient one who is indifferent to guidance."
  },
  {
    "id": "iq34",
    "question": "In what manner does Surah Abasa frame the inevitability of resurrection at the end of time?",
    "options": [
      "As an uncertain philosophical hypothesis",
      "As a direct logical continuation of Allah's power in creating human life and reviving the dead earth with rain",
      "As an event occurring only for specific nations",
      "As a metaphorical state of mind"
    ],
    "correctAnswer": "As a direct logical continuation of Allah's power in creating human life and reviving the dead earth with rain",
    "explanation": "The surah repeatedly bridges biological creation, botanical growth, death, and resurrection to prove that raising the dead is entirely effortless for Allah."
  },
  {
    "id": "iq35",
    "question": "What overall emotional tone is evoked by the transition from the private correction in Makkah to the cosmic realities of As-Sakhkhah?",
    "options": [
      "Relaxation and complacency",
      "Deep moral urgency, mindfulness of accountability, and awe of the Creator",
      "Indifference toward worldly actions",
      "Despair without hope"
    ],
    "correctAnswer": "Deep moral urgency, mindfulness of accountability, and awe of the Creator",
    "explanation": "The progression moves the listener from daily ethical conduct to ultimate existential accountability before Allah."
  }
];

const surah80AdvancedQuestions: QuizQuestion[] = [
  {
    "id": "aq1",
    "question": "What is the exact Arabic root (جذر) of the word 'عَبَسَ' (Abasa - He frowned)?",
    "options": [
      "ع - ب - س",
      "ت - و - ل",
      "ع - م - ي",
      "س - ع - ي"
    ],
    "correctAnswer": "ع - ب - س",
    "explanation": "The root of عَبَسَ is ع-ب-س, denoting frowning or contracting the brow."
  },
  {
    "id": "aq2",
    "question": "What is the triliteral root of the verb 'تَوَلَّى' (Tawalla - He turned away)?",
    "options": [
      "و - ل - ي",
      "ت - ل - و",
      "أ - خ - ذ",
      "ر - ج - ع"
    ],
    "correctAnswer": "و - ل - ي",
    "explanation": "The root of تَوَلَّى is و-ل-ي, relating to turning away, taking charge, or proximity."
  },
  {
    "id": "aq3",
    "question": "What is the root of the noun 'الْأَعْمَى' (Al-A'ma - The blind man)?",
    "options": [
      "ع - م - ي",
      "ب - ص - ر",
      "ح - د - ق",
      "ظ - ل - م"
    ],
    "correctAnswer": "ع - م - ي",
    "explanation": "The root is ع-م-ي, associated with blindness or obscurity."
  },
  {
    "id": "aq4",
    "question": "Identify the root letters for the verb 'يَزَّكَّى' (Yazzakka - He purifies himself).",
    "options": [
      "ز - ك - و",
      "ز - ي - د",
      "ز- ك - ر",
      "ت - ز - ك"
    ],
    "correctAnswer": "ز - ك - و",
    "explanation": "The root is ز-ك-و (or ز-ك-ي), meaning purity, growth, and betterment."
  },
  {
    "id": "aq5",
    "question": "What root forms the basis of 'يَذَّكَّرُ' (Yadhdhakkaru - He is reminded)?",
    "options": [
      "ذ - ك - ر",
      "د - ر - ي",
      "ن - ف - ع",
      "ش - ك - ر"
    ],
    "correctAnswer": "ذ - ك - ر",
    "explanation": "The root is ذ-ك-ر, relating to remembrance, mention, and recollection."
  },
  {
    "id": "aq6",
    "question": "What is the root of the word 'فَتَنفَعَهُ' (Fatanfa'uhu - And it benefits him)?",
    "options": [
      "ن - ف - ع",
      "ض - ر - ر",
      "ف - ع - ل",
      "ن - ف - ذ"
    ],
    "correctAnswer": "ن - ف - ع",
    "explanation": "The root is ن-ف-ع, signifying benefit, utility, and advantage."
  },
  {
    "id": "aq7",
    "question": "What is the triliteral root for 'اسْتَغْنَى' (Istaghna - Considers himself self-sufficient / independent)?",
    "options": [
      "غ - ن - ي",
      "ف - ق - ر",
      "ع - غ - ن",
      "س - ت - غ"
    ],
    "correctAnswer": "غ - ن - ي",
    "explanation": "The root is غ-ن-ي, relating to wealth, sufficiency, and freedom from need."
  },
  {
    "id": "aq8",
    "question": "What is the root of the verb 'تَصَدَّى' (Tasadda - You attend / give attention)?",
    "options": [
      "ص - د - ي",
      "ص - د - ر",
      "ق - ص - د",
      "ت - ص - د"
    ],
    "correctAnswer": "ص - د - ي",
    "explanation": "The root is ص-د-ي, meaning to face, attend to, or direct attention toward something."
  },
  {
    "id": "aq9",
    "question": "What is the root of the verb 'يَسْعَى' (Yas'a - He strives / comes running)?",
    "options": [
      "س - ع - ي",
      "س - م - ع",
      "س - ع - د",
      "س - ج - د"
    ],
    "correctAnswer": "س - ع - ي",
    "explanation": "The root is س-ع-ي, meaning to walk quickly, strive, or exert effort."
  },
  {
    "id": "aq10",
    "question": "What is the root of the verb 'يَخْشَى' (Yakhsha - He fears)?",
    "options": [
      "خ - ش - ي",
      "خ- و - ف",
      "ح - د - ر",
      "ر - ه - ب"
    ],
    "correctAnswer": "خ - ش - ي",
    "explanation": "The root is خ-ش-ي, denoting awe-filled fear, reverence, and apprehension."
  },
  {
    "id": "aq11",
    "question": "What is the root of the verb 'تَلَهَّى' (Talahha - You are distracted / amused)?",
    "options": [
      "ل - ه - و",
      "ل - ح - ظ",
      "ل - ع - ب",
      "ت - ل - ه"
    ],
    "correctAnswer": "ل - ه - و",
    "explanation": "The root is ل-ه-و, relating to play, distraction, amusement, and heedlessness."
  },
  {
    "id": "aq12",
    "question": "What root produces 'تَذْكِرَةٌ' (Tadhkirah - A reminder)?",
    "options": [
      "ذ - ك - ر",
      "د - ك - ر",
      "ت - ذ - ك",
      "ك - ر - م"
    ],
    "correctAnswer": "ذ - ك - ر",
    "explanation": "The root is ذ-ك-ر, meaning reminder or admonition."
  },
  {
    "id": "aq13",
    "question": "What is the root of the noun 'صُحُفٍ' (Suhuf - Sheets / pages)?",
    "options": [
      "ص - ح - ف",
      "ك - ت - ب",
      "س - ح - ف",
      "ص - ف - ح"
    ],
    "correctAnswer": "ص - ح - ف",
    "explanation": "The root is ص-ح-ف, referring to pages, scrolls, or sheets of writing."
  },
  {
    "id": "aq14",
    "question": "What is the root of the adjective 'مُّكَرَّمَةٍ' (Mukarramah - Honored / respected)?",
    "options": [
      "ك - ر - م",
      "ك - ر - ه",
      "ش - ر - ف",
      "ع - ز - ز"
    ],
    "correctAnswer": "ك - ر - م",
    "explanation": "The root is ك-ر-م, denoting nobility, generosity, and honor."
  },
  {
    "id": "aq15",
    "question": "What is the root of 'مَّرْفُوعَةٍ' (Marfu'ah - Elevated / exalted)?",
    "options": [
      "ر - ف - ع",
      "ع - ل - و",
      "ط - ه - ر",
      "ر - ف - د"
    ],
    "correctAnswer": "ر - ف - ع",
    "explanation": "The root is ر-ف-ع, meaning to raise, lift, or elevate."
  },
  {
    "id": "aq16",
    "question": "What is the root of 'مُّطَهَّرَةٍ' (Mutahharah - Purified)?",
    "options": [
      "ط - ه - ر",
      "ن - ظ - ف",
      "ز - ك - و",
      "ط - ي - ب"
    ],
    "correctAnswer": "ط - ه - ر",
    "explanation": "The root is ط-ه-ر, signifying cleanliness and ritual or spiritual purity."
  },
  {
    "id": "aq17",
    "question": "What is the root of 'سَفَرَةٍ' (Safarah - Scribes / ambassadors / emissaries)?",
    "options": [
      "س - ف - ر",
      "ك - ت - ب",
      "س - ف - ن",
      "ر - س - ل"
    ],
    "correctAnswer": "س - ف - ر",
    "explanation": "The root is س-ف-ر, relating to uncovering, traveling, or acting as an intermediary/ambassador/scribe."
  },
  {
    "id": "aq18",
    "question": "What is the root of 'بَرَرَةٍ' (Bararah - Dutiful / righteous)?",
    "options": [
      "ب - ر - ر",
      "ب - ر - ء",
      "ب - ر - ك",
      "ب - ص - ر"
    ],
    "correctAnswer": "ب - ر - ر",
    "explanation": "The root is ب-ر-ر, meaning righteousness, piety, and dutiful obedience."
  },
  {
    "id": "aq19",
    "question": "What is the root of the verb 'خَلَقَهُ' (Khalaqahu - He created him)?",
    "options": [
      "خ - ل - ق",
      "ص - ن - ع",
      "ف - ط - ر",
      "ب - د - أ"
    ],
    "correctAnswer": "خ - ل - ق",
    "explanation": "The root is خ-ل-ق, meaning creation, fashioning, or measuring out."
  },
  {
    "id": "aq20",
    "question": "What is the root of 'نُّطْفَةٍ' (Nutfah - A sperm-drop / small quantity of fluid)?",
    "options": [
      "ن - ط - ف",
      "ن - ط - ق",
      "ن - ظ - ف",
      "م - ا - ء"
    ],
    "correctAnswer": "ن - ط - ف",
    "explanation": "The root is ن-ط-ف, relating to clear dropping fluid."
  },
  {
    "id": "aq21",
    "question": "What is the root of 'فَقَدَّرَهُ' (Faqaddarahu - And proportioned him / destined him)?",
    "options": [
      "ق - د - ر",
      "ق - د - س",
      "ق - ض - ي",
      "ق - و - م"
    ],
    "correctAnswer": "ق - د - ر",
    "explanation": "The root is ق-د-ر, meaning measure, proportion, decree, or destiny."
  },
  {
    "id": "aq22",
    "question": "What is the root of 'يَسَّرَهُ' (Yassarahu - He eased it / made it easy)?",
    "options": [
      "ي - س - ر",
      "س - ه - ل",
      "ي - م - ن",
      "ع - س - ر"
    ],
    "correctAnswer": "ي - س - ر",
    "explanation": "The root is ي-س-ر, denoting ease, facility, and smoothness."
  },
  {
    "id": "aq23",
    "question": "What is the root of 'أَمَاتَهُ' (Amatahu - He caused him to die)?",
    "options": [
      "م - و - ت",
      "ه - ل - ك",
      "ق - ت - ل",
      "م - ت - ي"
    ],
    "correctAnswer": "م - و - ت",
    "explanation": "The root is م-و-ت, relating to death and cessation of life."
  },
  {
    "id": "aq24",
    "question": "What is the root of 'فَأَقْبَرَهُ' (Fa-aqbarahu - And had him buried)?",
    "options": [
      "ق - ب - ر",
      "د - ف - ن",
      "ق - د - ر",
      "ق- ب - ض"
    ],
    "correctAnswer": "ق - ب - ر",
    "explanation": "The root is ق-ب-ر, relating to graves and burial."
  },
  {
    "id": "aq25",
    "question": "What is the root of 'أَنشَرَهُ' (Ansharahu - He resurrected him / brought him forth)?",
    "options": [
      "ن - ش - ر",
      "ب - ع - ث",
      "ح - ي - ي",
      "ن - ش - ئ"
    ],
    "correctAnswer": "ن - ش - ر",
    "explanation": "The root is ن-ش-ر, meaning to spread out, revive, or resurrect."
  },
  {
    "id": "aq26",
    "question": "What is the root of 'يَقْضِ' (Yaqdi - He fulfills / decrees)?",
    "options": [
      "ق - ض - ي",
      "ق - د - ر",
      "ف - ع - ل",
      "ح - ك - م"
    ],
    "correctAnswer": "ق - ض - ي",
    "explanation": "The root is ق-ض-ي, relating to decreeing, executing, or fulfilling an obligation."
  },
  {
    "id": "aq27",
    "question": "What is the root of 'طَعَامِهِ' (Ta'amihi - His food)?",
    "options": [
      "ط - ع - م",
      "أ - ك - ل",
      "ش - ر - ب",
      "ق - وت"
    ],
    "correctAnswer": "ط - ع - م",
    "explanation": "The root is ط-ع-م, referring to food, taste, and nourishment."
  },
  {
    "id": "aq28",
    "question": "What is the root of 'صَبَبْنَا' (Sababna - We poured down)?",
    "options": [
      "ص - ب - ب",
      "س - ك - ب",
      "م - د - د",
      "ن - ز - ل"
    ],
    "correctAnswer": "ص - ب - ب",
    "explanation": "The root is ص-ب-ب, meaning to pour or flow down."
  },
  {
    "id": "aq29",
    "question": "What is the root of 'شَقَقْنَا' (Shaqaqna - We split / cleaved)?",
    "options": [
      "ش - ق - ق",
      "ف - ط - ر",
      "ص - د - ع",
      "ق - ط - ع"
    ],
    "correctAnswer": "ش - ق - ق",
    "explanation": "The root is ش-ق-ق, signifying splitting, cleaving, or cracking open."
  },
  {
    "id": "aq30",
    "question": "What is the root of 'حَبًّا' (Habba - Grain / seed)?",
    "options": [
      "ح - ب - ب",
      "ب - ذ - ر",
      "ن - ب - ت",
      "ح - ب - ش"
    ],
    "correctAnswer": "ح - ب - ب",
    "explanation": "The root is ح-ب-ب, referring to seeds, grains, or affection."
  },
  {
    "id": "aq31",
    "question": "What is the root of 'عِنَبًا' (Inaba - Grapes)?",
    "options": [
      "ع - ن - ب",
      "ت - ि - ن",
      "ز - ي - ت",
      "ف - ك - ه"
    ],
    "correctAnswer": "ع - ن - ب",
    "explanation": "The root is ع-ن-ب, specifically denoting grapes."
  },
  {
    "id": "aq32",
    "question": "What is the root of 'قَضْبًا' (Qadba - Herbage / fresh green forage)?",
    "options": [
      "ق - ض - ب",
      "ق - ط - ع",
      "ن - ب - ت",
      "خ - ض - ر"
    ],
    "correctAnswer": "ق - ض - ب",
    "explanation": "The root is ق-ض-ب, referring to fresh leafy herbage fed to animals."
  },
  {
    "id": "aq33",
    "question": "What is the root of 'زَيْتُونًا' (Zaytunan - Olives)?",
    "options": [
      "ز - ي - ت",
      "ز - ت - ن",
      "ن - خ - ل",
      "ر - م - ن"
    ],
    "correctAnswer": "ز - ي - ت",
    "explanation": "The root is ز-ي-ت, pertaining to olives and olive oil."
  },
  {
    "id": "aq34",
    "question": "What is the root of 'نَخْلًا' (Nakhla - Palm trees)?",
    "options": [
      "ن - خ - ل",
      "ش - ج - ر",
      "ن - خ - ר",
      "خ - ش - ب"
    ],
    "correctAnswer": "ن - خ - ل",
    "explanation": "The root is ن-خ-ل, denoting date-palm trees."
  },
  {
    "id": "aq35",
    "question": "What is the root of 'الصَّاخَّةُ' (As-Sakhkhah - The Deafening Blast / Trumpet Call)?",
    "options": [
      "ص - خ - خ",
      "ص - ح - و",
      "ص - و - ت",
      "س - خ - ن"
    ],
    "correctAnswer": "ص - خ - خ",
    "explanation": "The root is ص-خ-خ, referring to a sound so piercingly loud that it deafens the ears."
  }
];

const surah80Category: QuizCategory = {
  id: "surah-80",
  title: "Surah Abasa",
  description: "He Frowned — Surah 80 (Three-Level Question Bank)",
  icon: "",
  levels: {
    easy: surah80EasyQuestions,
    intermediate: surah80IntermediateQuestions,
    advanced: surah80AdvancedQuestions,
  },
};

export default sur80Category;
