import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah An-Nazi'at (79) — IQRA three-level question bank.
 *
 * Easy: Phrase-translation questions covering the foundational vocabulary
 * and verses of Surah An-Nazi'at (35 questions).
 *
 * Intermediate: 35 questions on the surah's themes, Makkan context, tafsir
 * insights, structural flow (oaths by celestial/angelic forces, resurrection,
 * the narrative of Musa and Pharaoh, and the final inquiry regarding the Hour).
 *
 * Advanced: 35 Arabic vocabulary questions drawn from terms occurring in
 * Surah An-Nazi'at, analyzing roots, morphological derivations, and precise
 * classical Qur'anic meanings.
 */

const surah79EasyQuestions: QuizQuestion[] = [
  {
    "id": "q1",
    "question": "What is the English meaning for the surah's title, An-Nazi'at, النَّازِعَاتِ?",
    "options": [
      "Those Who Drag Forth",
      "Those Who Ascend",
      "Those Who Descend",
      "Those Who Gather"
    ],
    "correctAnswer": "Those Who Drag Forth",
    "explanation": "النَّازِعَاتِ (An-Nazi'at) means 'Those Who Drag Forth,' derived from the root ن-ز-ع, referring to the angels who forcefully extract the souls of the wicked."
  },
  {
    "id": "q2",
    "question": "What does the Arabic phrase 'وَالنَّازِعَاتِ غَرْقًا' mean?",
    "options": [
      "By those who ascend gently",
      "By those who drag forth violently",
      "By those who descend slowly",
      "By those who gather peacefully"
    ],
    "correctAnswer": "By those who drag forth violently",
    "explanation": "وَالنَّازِعَاتِ غَرْقًا (Wan-nazi'ati gharqa) means 'By those who drag forth violently,' describing angels drawing out souls with great force."
  },
  {
    "id": "q3",
    "question": "What does the Arabic phrase 'وَالنَّاشِطَاتِ نَشْطًا' mean?",
    "options": [
      "And by those who release with ease",
      "And by those who pull tightly",
      "And by those who swim swiftly",
      "And by those who precede rapidly"
    ],
    "correctAnswer": "And by those who release with ease",
    "explanation": "وَالنَّاشِطَاتِ نَشْطًا (Wan-nashitati nashta) refers to the angels who gently release or draw out the souls of the believers with ease."
  },
  {
    "id": "q4",
    "question": "What does 'وَالسَّابِحَاتِ سَبْحًا' mean in verse 3?",
    "options": [
      "And by those who glide or swim along smoothly",
      "And by those who run quickly",
      "And by those who fly downward",
      "And by those who rise high"
    ],
    "correctAnswer": "And by those who glide or swim along smoothly",
    "explanation": "وَالسَّابِحَاتِ سَبْحًا (Was-sabihati sabha) means 'And by those who glide/swim along smoothly,' referring to angels descending swiftly through the heavens."
  },
  {
    "id": "q5",
    "question": "What does 'فَالسَّابِقَاتِ سَبْقًا' mean in verse 4?",
    "options": [
      "Then those who race ahead instantly",
      "Then those who lag behind",
      "Then those who wait patiently",
      "Then those who turn away"
    ],
    "correctAnswer": "Then those who race ahead instantly",
    "explanation": "فَالسَّابِقَاتِ سَبْقًا (Fas-sabiqati sabqa) means 'Then those who race ahead in competing/preceding,' taking Allah's commands swiftly to their destinations."
  },
  {
    "id": "q6",
    "question": "What does 'فَالْمُدَبِّرَاتِ أَمْرًا' mean in verse 5?",
    "options": [
      "And those who govern or execute the command",
      "And those who question the decree",
      "And those who create the universe",
      "And those who record deeds"
    ],
    "correctAnswer": "And those who govern or execute the command",
    "explanation": "فَالْمُدَبِّرَاتِ أَمْرًا (Fal-mudabbirati amra) means 'And those who conduct/execute the affair,' referring to the angels entrusted with managing cosmic matters by Allah's leave."
  },
  {
    "id": "q7",
    "question": "What does 'يَوْمَ تَرْجُفُ الرَّاجِفَةُ' mean in verse 6?",
    "options": [
      "The Day the earth will quake and tremble",
      "The Day the sun will rise from the west",
      "The Day the stars will scatter",
      "The Day the oceans will boil over"
    ],
    "correctAnswer": "The Day the earth will quake and tremble",
    "explanation": "يَوْمَ تَرْجُفُ الرَّاجِفَةُ (Yawma tarjufu ar-rajifa) means 'The Day the quaking earth quakes,' referring to the first blowing of the Trumpet (the great tremor)."
  },
  {
    "id": "q8",
    "question": "What does 'تَتْبَعُهَا الرَّادِفَةُ' mean in verse 7?",
    "options": [
      "Followed by the subsequent blast or event",
      "Preceded by a gentle breeze",
      "Accompanied by heavy rain",
      "Succeeded by utter silence"
    ],
    "correctAnswer": "Followed by the subsequent blast or event",
    "explanation": "تَتْبَعُهَا الرَّادِفَةُ (Tatbaugha ar-radifa) means 'There follows it the subsequent/second blast,' referring to the second blowing of the Trumpet for resurrection."
  },
  {
    "id": "q9",
    "question": "What does 'قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ' mean in verse 8?",
    "options": [
      "Hearts that day will be palpitating with fear",
      "Hearts that day will be joyful and calm",
      "Hearts that day will be sealed",
      "Hearts that day will be hardened"
    ],
    "correctAnswer": "Hearts that day will be palpitating with fear",
    "explanation": "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ (Qulubun yawma'idhin wajifa) means 'Hearts that Day will be throbbing with intense fear and anxiety.'"
  },
  {
    "id": "q10",
    "question": "What does 'أَبْصَارُهَا خَاشِعَةٌ' mean in verse 9?",
    "options": [
      "Their eyes humbled and downcast",
      "Their eyes brightly shining",
      "Their eyes closed in sleep",
      "Their eyes turned upward proudly"
    ],
    "correctAnswer": "Their eyes humbled and downcast",
    "explanation": "أَبْصَارُهَا خَاشِعَةٌ (Absaruha khashi'ah) means 'Their gazes/eyes humbled,' overwhelmed by the terror and majesty of Judgment Day."
  },
  {
    "id": "q11",
    "question": "What do the disbelievers ask mockingly in verse 10 ('يَقُولُونَ أَإِنَّ لَمَرْدُودُونَ فِي الْحَافِرَةِ')?",
    "options": [
      "Will we indeed be restored to our former state?",
      "Will we ever see wealth again?",
      "Will our houses be rebuilt?",
      "Will the sky fall upon us?"
    ],
    "correctAnswer": "Will we indeed be restored to our former state?",
    "explanation": "Al-Hafirah (الْحَافِرَةِ) refers to the original state of life or being restored to existence after death."
  },
  {
    "id": "q12",
    "question": "What does 'أَإِذَا كُنَّا عِظَامًا نَّخِرَةً' mean in verse 11?",
    "options": [
      "What! When we are decayed, hollow bones?",
      "What! When we are sleeping peacefully?",
      "What! When our wealth is gone?",
      "What! When our cities are ruined?"
    ],
    "correctAnswer": "What! When we are decayed, hollow bones?",
    "explanation": "عِظَامًا نَّخِرَةً ('izaman nakhira) means decayed, rotten, or hollow bones, expressing disbelief in bodily resurrection."
  },
  {
    "id": "q13",
    "question": "What does the cynical statement 'تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ' (verse 12) mean?",
    "options": [
      "That would then be a losing return!",
      "That would be a profitable journey!",
      "That would be an impossible dream!",
      "That would be a joyous reunion!"
    ],
    "correctAnswer": "That would then be a losing return!",
    "explanation": "كَرَّةٌ خَاسِرَةٌ (Karratun khasira) means a disastrous or losing return to life, spoken mockingly by deniers."
  },
  {
    "id": "q14",
    "question": "What does 'فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ' mean in verse 13?",
    "options": [
      "Then it will be only a single shout or blast",
      "Then it will be a long process",
      "Then it will happen in complete silence",
      "Then it will occur after many years"
    ],
    "correctAnswer": "Then it will be only a single shout or blast",
    "explanation": "زَجْرَةٌ وَاحِدَةٌ (Zajratun wahidah) refers to the single decisive cry or blast that brings about resurrection."
  },
  {
    "id": "q15",
    "question": "What does 'فَإِذَا هُم بِالسَّاهِرَةِ' mean in verse 14?",
    "options": [
      "And behold, they are upon the surface / awakened earth",
      "And behold, they are fast asleep",
      "And behold, they are in complete darkness",
      "And behold, they are wandering lost"
    ],
    "correctAnswer": "And behold, they are upon the surface / awakened earth",
    "explanation": "السَّاهِرَةِ (As-Sahirah) refers to the earth's surface or plain where all humanity is gathered for judgment."
  },
  {
    "id": "q16",
    "question": "How does verse 15 introduce the story of Musa (Moses)?",
    "options": [
      "Has there reached you the story of Moses?",
      "Did you hear about the journey of Moses?",
      "Remember when Moses spoke to Pharaoh?",
      "Have you seen what happened to Moses?"
    ],
    "correctAnswer": "Has there reached you the story of Moses?",
    "explanation": "هَلْ أَتَاكَ حَدِيثُ مُوسَى (Hal ataka hadithu Musa) is a rhetorical prompt introducing the historical account of Musa and Pharaoh."
  },
  {
    "id": "q17",
    "question": "Where did Allah call out to Musa, according to verse 16?",
    "options": [
      "In the sacred valley of Tuwa",
      "On Mount Sinai during the night",
      "In the land of Midian",
      "By the banks of the Nile"
    ],
    "correctAnswer": "In the sacred valley of Tuwa",
    "explanation": "بِالْوَادِ الْمُقَدَّسِ طُوًى (Bil-wadil-muqaddasi Tuwa) refers to the blessed valley of Tuwa where Musa received revelation."
  },
  {
    "id": "q18",
    "question": "What instruction was given to Musa regarding Pharaoh in verse 17?",
    "options": [
      "Go to Pharaoh, indeed he has transgressed",
      "Invite Pharaoh to a feast",
      "Leave Egypt with your people immediately",
      "Ask Pharaoh for assistance"
    ],
    "correctAnswer": "Go to Pharaoh, indeed he has transgressed",
    "explanation": "اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى (Idhab ila Fir'awna innahu tagha) directs Musa to confront Pharaoh's tyranny."
  },
  {
    "id": "q19",
    "question": "What question did Musa pose to Pharaoh in verse 18?",
    "options": [
      "Would you [be willing to] purify yourself?",
      "Why do you oppress the Israelites?",
      "Where is your mighty kingdom?",
      "Do you believe in the Creator?"
    ],
    "correctAnswer": "Would you [be willing to] purify yourself?",
    "explanation": "هَل لَّكَ إِلَى أَن تَزَكَّى (Hal laka ila an tazakka) means 'Would you be willing to purify yourself [from disbelief and sin]?'"
  },
  {
    "id": "q20",
    "question": "What did Musa say he would guide Pharaoh toward in verse 19?",
    "options": [
      "To your Lord so you would fear Him",
      "To immeasurable earthly treasure",
      "To eternal worldly rule",
      "To peace with neighboring lands"
    ],
    "correctAnswer": "To your Lord so you would fear Him",
    "explanation": "وَأَهْدِيَكَ إِلَى رَبِّكَ فَتَخْشَى (Wa ahdiyaka ila rabbika fatakhsha) expresses guiding Pharaoh to recognize his Creator."
  },
  {
    "id": "q21",
    "question": "What did Pharaoh show Musa in verse 20?",
    "options": [
      "The greatest sign / miracle",
      "His royal treasury",
      "His vast army",
      "A forged decree"
    ],
    "correctAnswer": "The greatest sign / miracle",
    "explanation": "فَأَرَاهُ الْآيَةَ الْكُبْرَى (Fa arahu al-ayatal-kubra) refers to Pharaoh being shown the supreme sign (such as the staff turning into a serpent or the shining hand)."
  },
  {
    "id": "q22",
    "question": "How did Pharaoh respond to the sign, as stated in verse 21?",
    "options": [
      "He denied and disobeyed",
      "He wept in remorse",
      "He consulted his ministers in secret",
      "He immediately accepted faith"
    ],
    "correctAnswer": "He denied and disobeyed",
    "explanation": "فَكَذَّبَ وَعَصَى (Fakadhdhaba wa 'asa) encapsulates Pharaoh's rejection of truth and rebellion against divine guidance."
  },
  {
    "id": "q23",
    "question": "What did Pharaoh do next, according to verse 22?",
    "options": [
      "Then he turned his back, striving [in opposition]",
      "Then he fled into the desert",
      "Then he abdicated his throne",
      "Then he surrendered to Musa"
    ],
    "correctAnswer": "Then he turned his back, striving [in opposition]",
    "explanation": "ثُمَّ أَدْبَرَ يَسْعَى (Thumma adbara yas'a) describes Pharaoh turning away and actively scheming against Musa."
  },
  {
    "id": "q24",
    "question": "What proclamation did Pharaoh make to his people in verse 24?",
    "options": [
      "I am your lord, the most high",
      "There is no god except Egypt's gods",
      "I am a messenger to you all",
      "We must worship the sun"
    ],
    "correctAnswer": "I am your lord, the most high",
    "explanation": "فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَى (Faqala ana rabbukumul-a'la) represents Pharaoh's ultimate arrogance and claim to divinity."
  },
  {
    "id": "q25",
    "question": "How did Allah seize Pharaoh in verse 25?",
    "options": [
      "So Allah seized him in exemplary punishment for the hereafter and this world",
      "So Allah sent a famine upon his land",
      "So Allah caused his palace to collapse",
      "So Allah struck him with a sudden illness"
    ],
    "correctAnswer": "So Allah seized him in exemplary punishment for the hereafter and this world",
    "explanation": "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَى (Fa akhadahu Allahu nakalal-akhirati wal-ula) refers to Allah's retribution in both worlds."
  },
  {
    "id": "q26",
    "question": "What lesson does verse 26 draw from Pharaoh's end?",
    "options": [
      "Indeed in that is a warning for whoever fears [Allah]",
      "Indeed in that is wealth for the seeker",
      "Indeed in that is a victory for the strong",
      "Indeed in that is proof of human power"
    ],
    "correctAnswer": "Indeed in that is a warning for whoever fears [Allah]",
    "explanation": "إِنَّ فِي ذَلِكَ لَعِبْرَةً لِّمَن يَخْشَى (Inna fi dhalika la'ibratan liman yakhsha) highlights that stories of destruction serve as lessons for the God-conscious."
  },
  {
    "id": "q27",
    "question": "What skeptical argument do the disbelievers raise in verse 27 regarding creation?",
    "options": [
      "Are you a more difficult creation or is the heaven?",
      "Can man create a single fly?",
      "Who made the mountains firm?",
      "Did the stars create themselves?"
    ],
    "correctAnswer": "Are you a more difficult creation or is the heaven?",
    "explanation": "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ (A-antum ashaddu khalqan amis-sama') argues that creating the vast heavens is far greater than resurrecting man."
  },
  {
    "id": "q28",
    "question": "How does verse 28 describe the construction of the heaven?",
    "options": [
      "He constructed it, raised its ceiling high, and proportioned it",
      "He built it without pillars and left it open",
      "He decorated it temporarily and destroyed it",
      "He hung it with ropes of light"
    ],
    "correctAnswer": "He constructed it, raised its ceiling high, and proportioned it",
    "explanation": "بَنَاهَا رَفَعَ سَمْكَهَا فَسَوَّاهَا (Banaha rafa'a samkaha fasawwaha) details the magnificent architecture and balance of the cosmos."
  },
  {
    "id": "q29",
    "question": "What does verse 29 mention about the night and day?",
    "options": [
      "And He darkened its night and brought forth its daylight",
      "And He made the night endless and day short",
      "And He equalized all seasons",
      "And He removed the darkness entirely"
    ],
    "correctAnswer": "And He darkened its night and brought forth its daylight",
    "explanation": "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا (Wa aghtasha laylaha wa akhraja duhaha) describes the alternation of night and bright morning."
  },
  {
    "id": "q30",
    "question": "What does verse 30 state about the earth after its creation?",
    "options": [
      "And the earth after that He spread out",
      "And the earth He left barren and dry",
      "And the earth He anchored with iron",
      "And the earth He set adrift in space"
    ],
    "correctAnswer": "And the earth after that He spread out",
    "explanation": "وَالْأَرْضَ بَعْدَ ذَلِكَ دَحَاهَا (Wal-arda ba'da dhalika dahaha) means He spread out the earth, making it habitable for living beings."
  },
  {
    "id": "q31",
    "question": "What provisions did Allah bring forth from the earth, according to verse 31?",
    "options": [
      "He extracted from it its water and its pasture",
      "He brought forth gold and precious stones",
      "He produced fire and minerals",
      "He extracted salt and oil"
    ],
    "correctAnswer": "He extracted from it its water and its pasture",
    "explanation": "أَخْرَجَ مِنْهَا مَاءَهَا وَمَرْعَاهَا (Akhraja minha ma'aha wa mar'aha) refers to water springs and vegetation."
  },
  {
    "id": "q32",
    "question": "What is stated about the mountains in verse 32?",
    "options": [
      "And the mountains He set firmly in place",
      "And the mountains He made hollow",
      "And the mountains He caused to melt",
      "And the mountains He scattered as dust"
    ],
    "correctAnswer": "And the mountains He set firmly in place",
    "explanation": "وَالْجِبَالَ أَرْسَاهَا (Wal-jibala arsaha) means He anchored the mountains to stabilize the earth."
  },
  {
    "id": "q33",
    "question": "What is the purpose of these provisions mentioned in verse 33?",
    "options": [
      "As provision for you and your grazing livestock",
      "As a temporary test of endurance",
      "As ornaments for the angels",
      "As a warning against greed"
    ],
    "correctAnswer": "As provision for you and your grazing livestock",
    "explanation": "مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ (Matā'an lakum wa li-an'amikum) highlights divine mercy in sustaining humans and animals."
  },
  {
    "id": "q34",
    "question": "What major event is introduced in verse 34 ('فَإِذَا جَاءَتِ الطَّامَّةُ الْكُبْرَى')?",
    "options": [
      "When the Greatest Overwhelming Calamity (Judgment Day) arrives",
      "When the great flood covers the earth",
      "When the final battle is fought",
      "When the sun collapses"
    ],
    "correctAnswer": "When the Greatest Overwhelming Calamity (Judgment Day) arrives",
    "explanation": "الطَّامَّةُ الْكُبْرَى (At-Tammatul-Kubra) is one of the names of Judgment Day, meaning the overwhelming calamity that eclipses all others."
  },
  {
    "id": "q35",
    "question": "How does the surah conclude regarding the realization of the Hour (verses 42-46)?",
    "options": [
      "They ask you about the Hour: when is its appointment? ... You are only a warner for those who fear it",
      "They ask you about the Hour: it will occur tomorrow",
      "They ask you about the Hour: no one will witness it",
      "They ask you about the Hour: it has already passed"
    ],
    "correctAnswer": "They ask you about the Hour: when is its appointment? ... You are only a warner for those who fear it",
    "explanation": "يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ... إِنَّمَا أَنتَ مُنذِرُ مَن يَخْشَى (79:42-45) emphasizes that knowledge of its timing rests with Allah alone, while the Prophet's role is to warn those who fear it."
  }
];

const surah79IntermediateQuestions: QuizQuestion[] = [
  {
    "id": "q36",
    "question": "What is the primary historical context and classification of Surah An-Nazi'at?",
    "options": [
      "It is a Makkan surah focusing heavily on resurrection, accountability, and confronting deniers of the afterlife.",
      "It is a Madinan surah revealed after the Battle of Badr regarding legislation.",
      "It is a transitional surah revealed during the migration to Abyssinia.",
      "It is a short Makkan surah focused exclusively on fasting rules."
    ],
    "correctAnswer": "It is a Makkan surah focusing heavily on resurrection, accountability, and confronting deniers of the afterlife.",
    "explanation": "Like most surahs of Juz' Amma, Surah An-Nazi'at was revealed in Makkah, addressing core creedal themes: Tawhid, the reality of resurrection, and the fate of those who reject divine messengers."
  },
  {
    "id": "q37",
    "question": "In classical tafsir, what do the oaths at the opening of the surah (verses 1-5) primarily refer to?",
    "options": [
      "The various categories of angels executing Allah's cosmic decrees and extracting souls.",
      "The movement of celestial planets in fixed orbits.",
      "The migration of believers from Makkah to Madinah.",
      "The varying speeds of Arabian horses in battle."
    ],
    "correctAnswer": "The various categories of angels executing Allah's cosmic decrees and extracting souls.",
    "explanation": "Ibn Kathir and other classical exegetes explain that An-Nazi'at, Nashitat, Sabihat, Sabiqat, and Mudabbirat describe different classes or functions of angels carrying out death and divine administration."
  },
  {
    "id": "q38",
    "question": "What is the significance of the two blasts mentioned in verses 6 and 7 ('Ar-Rajifa' and 'Ar-Radifa')?",
    "options": [
      "They represent the first Trumpet blast (causing universal shock/death) and the second blast (resurrection/gathering).",
      "They represent two consecutive earthquakes in the Arabian peninsula.",
      "They represent the beginning and end of the worldly life.",
      "They represent thunder and lightning preceding a rainstorm."
    ],
    "correctAnswer": "They represent the first Trumpet blast (causing universal shock/death) and the second blast (resurrection/gathering).",
    "explanation": "Exegesis explains 'Ar-Rajifa' as the initial terrifying tremor that destroys creation, and 'Ar-Radifa' as the subsequent blast that immediately follows to resurrect all souls."
  },
  {
    "id": "q39",
    "question": "What psychological and physical state of disbelievers is depicted by 'Qulubun yawma'idhin wajifa, absaruha khashi'ah' (verses 8-9)?",
    "options": [
      "Their hearts will be pounding with intense dread, and their eyes will be cast down in utter humiliation.",
      "Their hearts will be filled with pride, and their eyes will gaze defiantly upward.",
      "Their hearts will be numb with indifference.",
      "Their eyes will be blinded by physical sunlight."
    ],
    "correctAnswer": "Their hearts will be pounding with intense dread, and their eyes will be cast down in utter humiliation.",
    "explanation": "These verses paint a vivid picture of the psychological devastation faced on Judgment Day by those who mocked bodily resurrection."
  },
  {
    "id": "q40",
    "question": "What was the cynical attitude of the Makkan disbelievers regarding life after death as quoted in verses 10-12?",
    "options": [
      "They mocked the idea of being brought back to life after becoming decayed bones, calling such a return a 'losing return.'",
      "They believed they would return as animals in reincarnation.",
      "They argued that their ancestors were already dwelling in paradise.",
      "They claimed that death was the permanent end with no consciousness."
    ],
    "correctAnswer": "They mocked the idea of being brought back to life after becoming decayed bones, calling such a return a 'لَّخِسَارَةٌ' (losing return).",
    "explanation": "The disbelievers used sarcastic rhetorical questions ('Shall we be restored to Al-Hafirah when we are decayed bones?') to ridicule the prophetic message of resurrection."
  },
  {
    "id": "q41",
    "question": "How does verse 13 ('Fa-innama hiya zajratun wahidah') refute the disbelievers' doubt regarding resurrection?",
    "options": [
      "It emphasizes that resurrecting humanity does not require a lengthy process; a single divine command or shout brings everyone forth instantly.",
      "It proves that resurrection happens gradually over millions of years.",
      "It explains that resurrection is achieved through human scientific advancement.",
      "It states that resurrection occurs only during the winter solstice."
    ],
    "correctAnswer": "It emphasizes that resurrecting humanity does not require a lengthy process; a single divine command or shout brings everyone forth instantly.",
    "explanation": "Allah demonstrates that what the disbelievers deem impossible is effortless for the Creator—a single command ('Zajrah') suffices for all to stand alive."
  },
  {
    "id": "q42",
    "question": "What is the exegetical meaning of 'As-Sahirah' in verse 14 ('Fa-idha hum bis-sahirah')?",
    "options": [
      "The surface of the earth or the open plain where humanity is assembled for judgment.",
      "A subterranean fiery pit for wrongdoers.",
      "The gardens of paradise prepared for the righteous.",
      "A mystical mountain in the Middle East."
    ],
    "correctAnswer": "The surface of the earth or the open plain where humanity is assembled for judgment.",
    "explanation": "Ibn Abbas and classical scholars explain As-Sahirah as the level white earth/plain to which all created beings are transferred after resurrection."
  },
  {
    "id": "q43",
    "question": "Why does Surah An-Nazi'at transition abruptly into the story of Musa and Pharaoh in verse 15?",
    "options": [
      "To serve as a historical precedent and warning to Quraysh that rejecting a messenger who confronts tyranny leads to severe divine retribution.",
      "To provide a detailed genealogical record of the Israelites in Egypt.",
      "To establish legal inheritance laws for desert dwellers.",
      "To recount the geography of the Nile River valley."
    ],
    "correctAnswer": "To serve as a historical precedent and warning to Quraysh that rejecting a messenger who confronts tyranny leads to severe divine retribution.",
    "explanation": "The narrative of Pharaoh—who possessed immense power yet was utterly destroyed—serves as a direct parallel and warning to the arrogant leaders of Makkah who opposed Prophet Muhammad (ﷺ)."
  },
  {
    "id": "q44",
    "question": "What was the significance of the Valley of Tuwa (مَكَانٌ مُقَدَّسٌ طُوًى) mentioned in verse 16?",
    "options": [
      "It was the sacred valley where Allah spoke directly to Musa and commissioned him with prophethood.",
      "It was the battlefield where Pharaoh's army was drowned.",
      "It was the sanctuary where the Torah was inscribed on stone tablets.",
      "It was the resting place of Prophet Abraham."
    ],
    "correctAnswer": "It was the sacred valley where Allah spoke directly to Musa and commissioned him with prophethood.",
    "explanation": "Tuwa is the sanctified valley where Musa removed his shoes and received his foundational revelation and mission."
  },
  {
    "id": "q45",
    "question": "What underlying da'wah principle is reflected in Musa's gentle invitation to Pharaoh ('Hal laka ila an tazakka') in verse 18?",
    "options": [
      "Even the most tyrannical and oppressive rulers should be approached with a clear, reasonable call toward moral purification and truth.",
      "Prophets should use physical force immediately against tyrants.",
      "Religious dialogue should be avoided with political leaders.",
      "Warning should only be given to the impoverished classes."
    ],
    "correctAnswer": "Even the most tyrannical and oppressive rulers should be approached with a clear, reasonable call toward moral purification and truth.",
    "explanation": "Musa addressed Pharaoh with immense wisdom, inviting him first to spiritual self-betterment and recognition of his Creator rather than immediate condemnation."
  },
  {
    "id": "q46",
    "question": "What was Pharaoh's ultimate expression of rebellion and spiritual blindness after witnessing the supreme sign?",
    "options": [
      "He rejected the message, turned away striving in opposition, gathered his people, and proclaimed 'I am your lord, the most high.'",
      "He abdicated his throne and sought asylum in neighboring lands.",
      "He secretly believed in private while publicly opposing Musa.",
      "He demanded a financial tribute from the Israelites instead."
    ],
    "correctAnswer": "He rejected the message, turned away striving in opposition, gathered his people, and proclaimed 'I am your lord, the most high.'",
    "explanation": "Pharaoh's extreme arrogance culminated in claiming absolute divinity ('Ana rabbukumul-a'la'), embodying the pinnacle of human rebellion against Allah."
  },
  {
    "id": "q47",
    "question": "What lesson is derived from Allah's punishment of Pharaoh ('Nakalal-akhirati wal-ula') in verse 25?",
    "options": [
      "Allah punished him in this world by drowning in the Red Sea and prepared severe punishment for him in the Hereafter.",
      "Pharaoh was forgiven at the final moment of his drowning.",
      "Pharaoh's kingdom was peacefully transitioned to Musa.",
      "Pharaoh escaped punishment by fleeing into the African interior."
    ],
    "correctAnswer": "Allah punished him in this world by drowning in the Red Sea and prepared severe punishment for him in the Hereafter.",
    "explanation": "Classical tafsir explains 'the first and the last' punishment as his worldly chastisement (drowning) coupled with the eternal torment of Hellfire."
  },
  {
    "id": "q48",
    "question": "How do verses 27-33 ('A-antum ashaddu khalqan amis-sama'...') dismantle the argument of those who deny resurrection?",
    "options": [
      "By pointing to the magnificent, complex creation of the towering heavens, earth, water, pastures, and mountains as proof that recreating human life is trivial for the Creator.",
      "By proving that human beings possess eternal souls by biological nature.",
      "By asserting that scientific technology will eventually conquer death.",
      "By arguing that history repeats itself in cycles."
    ],
    "correctAnswer": "By pointing to the magnificent, complex creation of the towering heavens, earth, water, pastures, and mountains as proof that recreating human life is trivial for the Creator.",
    "explanation": "Allah uses cosmic engineering (raising the sky, spreading the earth, anchoring mountains) to silence skeptics: He who built the universe can easily resurrect man."
  },
  {
    "id": "q49",
    "question": "What linguistic and theological significance does the term 'Dahahaa' (دَحَاهَا) hold regarding the earth in verse 30?",
    "options": [
      "It refers to spreading out, expanding, or fashioning the earth into an egg-like or globe shape suited for human habitation and sustenance.",
      "It means making the earth completely flat with sharp edges.",
      "It signifies that the earth is stationary at the center of a revolving universe.",
      "It denotes a dry desert devoid of water resources."
    ],
    "correctAnswer": "It refers to spreading out, expanding, or fashioning the earth into an egg-like or globe shape suited for human habitation and sustenance.",
    "explanation": "Classical lexicographers and exegetes note that 'Dahaha' derives from roots associated with expanding and smoothing out, providing a stable biosphere for living creatures."
  },
  {
    "id": "q50",
    "question": "What contrast is established between the two types of people in verses 37-41 ('Fa-amma man tagha...' vs. 'Wa amma man khafa maqaama rabbihi...')?",
    "options": [
      "Those who preferred worldly life and transgressed will have Hell as their refuge, whereas those who feared standing before their Lord and restrained their ego will have Paradise.",
      "Those who were wealthy inherit the earth, while the poor enter Hell.",
      "Those who studied philosophy succeed, while believers struggle.",
      "Those who traveled widely are rewarded, while the sedentary are punished."
    ],
    "correctAnswer": "Those who preferred worldly life and transgressed will have Hell as their refuge, whereas those who feared standing before their Lord and restrained their ego will have Paradise.",
    "explanation": "This ethical bifurcation forms the core moral framework of Juz' Amma: accountability determined by whether one prioritized transient desires or divine accountability."
  },
  {
    "id": "q51",
    "question": "What does 'Nahwa-ha' (نَهْوَهَا / مُنْتَهَاهَا) mean in the context of the disbelievers asking about the Hour (verse 44)?",
    "options": [
      "To your Lord belongs the ultimate knowledge and final determination of its appointed time.",
      "The Prophet (ﷺ) has full knowledge of the exact year of the Hour.",
      "The angels determine the exact hour independently.",
      "The Hour will occur when humanity achieves space travel."
    ],
    "correctAnswer": "To your Lord belongs the ultimate knowledge and final determination of its appointed time.",
    "explanation": "When asked 'Ayyana mursaha' (when is its fixed time?), the response emphasizes that knowledge of the unseen Hour belongs exclusively to Allah."
  },
  {
    "id": "q52",
    "question": "How does the final verse (verse 46) describe the subjective experience of resurrection for the wicked?",
    "options": [
      "When they see it, it will appear to them as though they had not remained in the world except for an afternoon or a morning thereof.",
      "They will feel as though they lived for thousands of years in the grave.",
      "They will experience eternal sleep without consciousness.",
      "They will wander in darkness for centuries before judgment."
    ],
    "correctAnswer": "When they see it, it will appear to them as though they had not remained in the world except for an afternoon or a morning thereof.",
    "explanation": "This verse highlights the extreme brevity of worldly life when juxtaposed against the vast eternity of the afterlife."
  },
  {
    "id": "q53",
    "question": "Which prominent Companion or early Muslim report provides contextual depth regarding the tone and impact of Makkan surahs like An-Nazi'at?",
    "options": [
      "Reports highlighting how the early Makkan surahs with vivid descriptions of the Day of Judgment softened hearts and drew people to Islam.",
      "Reports detailing civil administration in Madinah.",
      "Reports concerning wartime treaties with Byzantine rulers.",
      "Reports detailing agricultural zakat calculations."
    ],
    "correctAnswer": "Reports highlighting how the early Makkan surahs with vivid descriptions of the Day of Judgment softened hearts and drew people to Islam.",
    "explanation": "The powerful imagery of earthquakes, trembling hearts, and divine majesty was central to awakening the moral conscience of early Makkah."
  },
  {
    "id": "q54",
    "question": "In the thematic structure of Surah An-Nazi'at, how do the opening oaths connect to the final verses?",
    "options": [
      "They establish the certainty of angelic execution of decrees, leading directly to the ultimate reality of accountability and the Day of Judgment.",
      "They provide agricultural advice for farming seasons.",
      "They outline rules for commercial trade contracts.",
      "They establish genealogical trees of Arabian tribes."
    ],
    "correctAnswer": "They establish the certainty of angelic execution of decrees, leading directly to the ultimate reality of accountability and the Day of Judgment.",
    "explanation": "The surah opens with divine swearing by forces executing commands to prove that order, command, and ultimate accountability are absolute realities."
  },
  {
    "id": "q55",
    "question": "What is the primary spiritual takeaway from the confrontation between Musa and Pharaoh as narrated in this surah?",
    "options": [
      "Truth invariably overcomes tyranny, and human arrogance before the Creator inevitably results in total destruction.",
      "Political power always supersedes divine law.",
      "Miracles are no longer relevant in human history.",
      "Wealth guarantees safety from divine punishment."
    ],
    "correctAnswer": "Truth invariably overcomes tyranny, and human arrogance before the Creator inevitably results in total destruction.",
    "explanation": "The narrative reassures the Prophet (ﷺ) and believers that even the most powerful tyrant (Pharaoh) was humbled instantly when facing divine decree."
  },
  {
    "id": "q56",
    "question": "How does Surah An-Nazi'at reinforce the concept of Tawhid ar-Rububiyyah (Lordship)?",
    "options": [
      "By detailing Allah's mastery over cosmic creation—raising the heavens, spreading the earth, producing water, and anchoring mountains.",
      "By listing the names of pagan deities and forbidding them.",
      "By establishing inheritance shares for family members.",
      "By prescribing specific rituals for pilgrimage."
    ],
    "correctAnswer": "By detailing Allah's mastery over cosmic creation—raising the heavens, spreading the earth, producing water, and anchoring mountains.",
    "explanation": "Tawhid ar-Rububiyyah is proven throughout the surah by highlighting Allah's exclusive agency in creating and sustaining the universe."
  },
  {
    "id": "q57",
    "question": "What pedagogical objective is served by repeating rhetorical questions about creation in verses 27-33?",
    "options": [
      "To awaken human intellect and force logical acknowledgment that the One who engineered the cosmos can easily resurrect mortal flesh.",
      "To test memorization skills of Arabic grammar students.",
      "To provide scientific blueprints for architecture.",
      "To entertain listeners with poetic descriptions."
    ],
    "correctAnswer": "To awaken human intellect and force logical acknowledgment that the One who engineered the cosmos can easily resurrect mortal flesh.",
    "explanation": "The rhetorical contrast between building galaxies and resurrecting man shatters the intellectual excuses of skeptics."
  },
  {
    "id": "q58",
    "question": "What does the term 'Al-Muntaha' (مُنتَهَاهَا) signify regarding knowledge of the Hour in verse 44?",
    "options": [
      "That the final boundary and ultimate knowledge of its timing rests solely with Allah.",
      "That the Hour will occur at the end of the solar year.",
      "That human beings will discover the date through astronomy.",
      "That angels will announce the date one week prior."
    ],
    "correctAnswer": "That the final boundary and ultimate knowledge of its timing rests solely with Allah.",
    "explanation": "Ila rabbika muntaha-ha means the final endpoint of knowledge regarding the Hour belongs to Allah alone."
  },
  {
    "id": "q59",
    "question": "Why is restraining one's soul from evil desires highlighted in verse 40 ('wa naha an-nafsa 'anil-hawa') as the path to Paradise?",
    "options": [
      "Because unchecked desires drive human beings toward rebellion, whereas moral self-restraint aligns human action with divine guidance.",
      "Because physical exercise guarantees spiritual purity.",
      "Because avoiding all food leads to higher spiritual states.",
      "Because isolation from society is mandatory for salvation."
    ],
    "correctAnswer": "Because unchecked desires drive human beings toward rebellion, whereas moral self-restraint aligns human action with divine guidance.",
    "explanation": "The battle against base egoistic desires (*hawa*) is framed as the defining spiritual struggle determining one's eternal abode."
  },
  {
    "id": "q60",
    "question": "How does Surah An-Nazi'at address the psychological barrier of arrogance (*istikbar*)?",
    "options": [
      "By holding up Pharaoh as the archetype of arrogant rebellion and contrasting his humiliating demise with the reward of the God-conscious.",
      "By praising wealthy merchants for their philanthropy.",
      "By commanding believers to practice false humility.",
      "By ignoring arrogant individuals completely."
    ],
    "correctAnswer": "By holding up Pharaoh as the archetype of arrogant rebellion and contrasting his humiliating demise with the reward of the God-conscious.",
    "explanation": "Pharaoh's claim of supreme lordship serves as a timeless warning against human pride and arrogance."
  },
  {
    "id": "q61",
    "question": "What is the relationship between 'Khashi'ah' (humbled/downcast) eyes on Judgment Day and worldly behavior?",
    "options": [
      "Those who refused to humble themselves before Allah in worldly life will be forced into absolute, humiliating submission on Judgment Day.",
      "Those who closed their eyes to poverty in this world will be blinded.",
      "Those who studied science will have bright eyes.",
      "Those who wept in prayer will have downcast eyes."
    ],
    "correctAnswer": "Those who refused to humble themselves before Allah in worldly life will be forced into absolute, humiliating submission on Judgment Day.",
    "explanation": "Spiritual pride in this life results in profound humiliation and subjugation when ultimate reality is unveiled."
  },
  {
    "id": "q62",
    "question": "How do classical commentators interpret 'Al-Hafirah' in the disbelievers' mocking statement?",
    "options": [
      "Our initial state of living existence from which we were created and decomposed into dust.",
      "A deep well dug in the desert sands.",
      "The royal tombs of Egyptian pharaohs.",
      "The underground caverns where the dead sleep."
    ],
    "correctAnswer": "Our initial state of living existence from which we were created and decomposed into dust.",
    "explanation": "Al-Hafirah means the starting point or original state of being alive on earth."
  },
  {
    "id": "q63",
    "question": "What thematic continuity exists across the Surahs of Juz' Amma, particularly Surahs 78, 79, and 80?",
    "options": [
      "An intense, unyielding focus on awakening human consciousness to the reality of the Day of Judgment and moral responsibility.",
      "Detailed legal codes governing commercial contracts and banking.",
      "Histories of European and Asian civilizations.",
      "Detailed medical treatises on human anatomy."
    ],
    "correctAnswer": "An intense, unyielding focus on awakening human consciousness to the reality of the Day of Judgment and moral responsibility.",
    "explanation": "The early Makkan surahs share a cohesive mission: shattering denial of the afterlife and establishing vibrant God-consciousness."
  },
  {
    "id": "q64",
    "question": "What does the title of the surah ('An-Nazi'at') teach believers about the moment of death?",
    "options": [
      "That death is an objective, highly organized transition overseen by divine agents executing strict justice according to one's faith and deeds.",
      "That death occurs entirely by random biological chance.",
      "That souls remain trapped in graves permanently.",
      "That angels do not interact with dying humans."
    ],
    "correctAnswer": "That death is an objective, highly organized transition overseen by divine agents executing strict justice according to one's faith and deeds.",
    "explanation": "The opening oaths remind believers that every soul's departure is meticulously managed by angelic forces."
  },
  {
    "id": "q65",
    "question": "Why is the confrontation of Musa and Pharaoh recounted with such concentrated brevity in verses 15-26?",
    "options": [
      "To distill the core conflict between divine guidance and tyrannical ego into a punchy, unforgettable lesson for the audience.",
      "Because the Prophet Muhammad forgot the full details of the story.",
      "To fit standard poetic meter requirements.",
      "Because the Torah was not fully known in Makkah."
    ],
    "correctAnswer": "To distill the core conflict between divine guidance and tyrannical ego into a punchy, unforgettable lesson for the audience.",
    "explanation": "The concise narrative captures the essential dynamic of revelation versus tyranny without getting bogged down in secondary historical subplots."
  },
  {
    "id": "q66",
    "question": "What is the significance of the phrase 'Inna fi dhalika la'ibratan liman yakhsha' (verse 26)?",
    "options": [
      "It marks historical narratives not as mere stories, but as moral laboratories meant to cultivate awe and fear of Allah in the thoughtful observer.",
      "It instructs believers to memorize historical dates.",
      "It proves that kingdoms never collapse.",
      "It serves as a legal ruling on property inheritance."
    ],
    "correctAnswer": "It marks historical narratives not as mere stories, but as moral laboratories meant to cultivate awe and fear of Allah in the thoughtful observer.",
    "explanation": "History in the Qur'an is always pedagogical—meant to awaken *khashyah* (reverential awe)."
  },
  {
    "id": "q67",
    "question": "How does Surah An-Nazi'at address existential anxiety regarding death and decay?",
    "options": [
      "By asserting that the Creator of the vast universe is infinitely capable of reassembling decayed bones with a single command.",
      "By advising people to ignore the reality of death.",
      "By promising eternal worldly youth through medicine.",
      "By teaching that souls dissolve into the cosmos."
    ],
    "correctAnswer": "By asserting that the Creator of the vast universe is infinitely capable of reassembling decayed bones with a single command.",
    "explanation": "The surah replaces existential despair with absolute confidence in divine creative power and justice."
  },
  {
    "id": "q68",
    "question": "What role do natural phenomena (water, pasture, mountains, night, day) play in the argumentative structure of the surah?",
    "options": [
      "They serve as tangible, observable empirical proofs of divine providence and resurrection capability.",
      "They are decorative elements with no deeper meaning.",
      "They represent pagan deities worshipped by ancients.",
      "They are illusions created to test human sanity."
    ],
    "correctAnswer": "They serve as tangible, observable empirical proofs of divine providence and resurrection capability.",
    "explanation": "Empirical observation of nature (*mashahud*) is constantly invoked in the Qur'an as evidence for unseen truths (*ghaib*)."
  },
  {
    "id": "q69",
    "question": "What is the psychological impact of describing 'At-Tammatul-Kubra' (The Greatest Overwhelming Calamity) on the listener?",
    "options": [
      "It dwarfs all worldly trials and ambitions, reorienting human focus entirely toward eternal accountability.",
      "It induces permanent despair without hope.",
      "It encourages withdrawal from economic activity.",
      "It promotes fatalism regarding social injustice."
    ],
    "correctAnswer": "It dwarfs all worldly trials and ambitions, reorienting human focus entirely toward eternal accountability.",
    "explanation": "Naming the Day 'Al-Tammah' (that which overwhelms and supersedes all other events) recalibrates human priorities."
  },
  {
    "id": "q70",
    "question": "How does Surah An-Nazi'at encapsulate the ultimate standard of human success at its conclusion?",
    "options": [
      "Success belongs exclusively to the one who feared standing before his Lord and reined in his selfish desires.",
      "Success belongs to those who amassed vast dynastic wealth.",
      "Success belongs to military conquerors.",
      "Success belongs to eloquent poets and philosophers."
    ],
    "correctAnswer": "Success belongs exclusively to the one who feared standing before his Lord and reined in his selfish desires.",
    "explanation": "The surah concludes with a timeless moral yardstick: the ultimate victor is the one governed by God-consciousness and moral self-discipline."
  }
];

const surah79AdvancedQuestions: QuizQuestion[] = [
  {
    "id": "q71",
    "question": "What is the root letter derivation and precise morphological form of 'النَّازِعَاتِ' (An-Nazi'at)?",
    "options": [
      "Root ن-ز-ع; active participle feminine plural, meaning 'those who pull out or extract violently.'",
      "Root ن-ز-ل; passive participle meaning 'those who descend.'",
      "Root ن-ص-ر; meaning 'those who grant victory.'",
      "Root ن-ز-ه; meaning 'those who declare perfection.'"
    ],
    "correctAnswer": "Root ن-ز-ع; active participle feminine plural, meaning 'those who pull out or extract violently.'",
    "explanation": "Nāzi'āt is the feminine plural active participle from na-za-'a (ن-ز-ع), signifying forceful extraction."
  },
  {
    "id": "q72",
    "question": "What is the linguistic meaning and grammatical role of 'غَرْقًا' (gharqa) in verse 1 ('وَالنَّازِعَاتِ غَرْقًا')?",
    "options": [
      "It is a verbal noun (*maf'ul mutlaq*) emphasizing the intensity or depth of the extraction process.",
      "It means 'drowning' in a literal ocean.",
      "It is an adjective describing peaceful sleep.",
      "It indicates a geographical location in Arabia."
    ],
    "correctAnswer": "It is a verbal noun (*maf'ul mutlaq*) emphasizing the intensity or depth of extraction.",
    "explanation": "Gharqa emphasizes pulling something out from the very depths (as an arrow is drawn out from a bow with full force)."
  },
  {
    "id": "q73",
    "question": "What is the root and meaning of 'النَّاشِطَاتِ' (An-Nashitat) in verse 2?",
    "options": [
      "Root ن-ش-ط; active participle meaning 'those who untie, draw out gently, or briskly release.'",
      "Root ن-ش-ر; meaning 'those who spread out.'",
      "Root ن-ص-ش; meaning 'those who listen closely.'",
      "Root ن-ط-ق; meaning 'those who speak clearly.'"
    ],
    "correctAnswer": "Root ن-ش-ط; active participle meaning 'those who untie, draw out gently, or briskly release.'",
    "explanation": "Nashitāt comes from na-sha-ta (ن-ش-ط), used for untying a knot or drawing a bucket smoothly from a well."
  },
  {
    "id": "q74",
    "question": "Explain the root and significance of 'السَّابِحَاتِ' (As-Sabihat) in verse 3.",
    "options": [
      "Root س-ب-ح; meaning those who swim, glide, or float swiftly through a medium (like angels through the sky).",
      "Root س-ب-ق; meaning those who arrive first.",
      "Root س-ب-ت; meaning those who observe sabbath.",
      "Root س-ب-ل; meaning those who pave roads."
    ],
    "correctAnswer": "Root س-ب-ح; meaning those who swim, glide, or float swiftly through a medium (like angels through the sky).",
    "explanation": "Sabihāt denotes smooth, swift motion through space, applied to celestial bodies or descending angels."
  },
  {
    "id": "q75",
    "question": "What does the term 'الْمُدَبِّرَاتِ' (Al-Mudabbirat) mean in verse 5?",
    "options": [
      "Those who manage, arrange, or administer affairs.",
      "Those who destroy settlements.",
      "Those who record written documents.",
      "Those who calculate numbers."
    ],
    "correctAnswer": "Those who manage, arrange, or administer affairs.",
    "explanation": "Mudabbirat comes from root د-ب-ر (d-b-r), denoting administration, planning, and executing affairs according to divine mandate."
  },
  {
    "id": "q76",
    "question": "What is the morphological pattern and meaning of 'تَرْجُفُ' (tarjufu) in verse 6 ('تَرْجُفُ الرَّاجِفَةُ')?",
    "options": [
      "Imperfect verb (Mudhari') from ر-ج-ف, meaning to quake, tremble, or shake violently.",
      "Perfect verb meaning to remain stationary.",
      "Noun meaning a severe storm.",
      "Adjective meaning silent and calm."
    ],
    "correctAnswer": "Imperfect verb (Mudhari') from ر-ج-ف, meaning to quake, tremble, or shake violently.",
    "explanation": "Tarjufu conveys continuous violent trembling, describing the seismic shock of the first Trumpet blast."
  },
  {
    "id": "q77",
    "question": "What is the linguistic derivation of 'الرَّادِفَةُ' (Ar-Radifa) in verse 7?",
    "options": [
      "Active participle from ر-د-ف, meaning that which follows closely behind or succeeds another event.",
      "Derived from ر-د-م, meaning a barrier or wall.",
      "Derived from ر-د-ي, meaning destruction.",
      "Derived from ر-ف-ع, meaning elevation."
    ],
    "correctAnswer": "Active participle from ر-د-ف, meaning that which follows closely behind or succeeds another event.",
    "explanation": "Radifa means a follower; here it refers to the second Trumpet blast that immediately follows the first."
  },
  {
    "id": "q78",
    "question": "What is the root and meaning of 'وَاجِفَةٌ' (wajifah) in verse 8 ('قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ')?",
    "options": [
      "Root و-ج-ف; active participle meaning throbbing, beating violently, or palpitating with fear.",
      "Root و-ج-د; meaning finding something lost.",
      "Root و-ج-ع; meaning experiencing physical pain.",
      "Root و-ه-ن; meaning weak and frail."
    ],
    "correctAnswer": "Root و-ج-ف; active participle meaning throbbing, beating violently, or palpitating with fear.",
    "explanation": "Wajifah describes a heart convulsing or beating erratically due to overwhelming terror."
  },
  {
    "id": "q79",
    "question": "What does 'خَاشِعَةٌ' (khashi'ah) signify in verse 9 ('أَبْصَارُهَا خَاشِعَةٌ')?",
    "options": [
      "Root خ-ش-ع; humble, submissive, downcast, or cowed in absolute humiliation.",
      "Root خ-ش-ي; fearing an external enemy.",
      "Root خ-س-ر; suffering financial ruin.",
      "Root خ-م-د; extinguished or lifeless."
    ],
    "correctAnswer": "Root خ-ش-ع; humble, submissive, downcast, or cowed in absolute humiliation.",
    "explanation": "Khashi'ah denotes physical and ocular submissiveness born of awe and terror before divine majesty."
  },
  {
    "id": "q80",
    "question": "What is the lexical explanation of 'الْحَافِرَةِ' (Al-Hafirah) in verse 10?",
    "options": [
      "Root ح-ف-ر; referring to the starting point, original state, or digging back to one's initial worldly existence.",
      "A deep subterranean trench.",
      "A golden chalice used by kings.",
      "A mountainous path in Makkah."
    ],
    "correctAnswer": "Root ح-ف-ر; referring to the starting point, original state, or digging back to one's initial worldly existence.",
    "explanation": "Al-Hafirah originates from digging a track; idiomatically, it means returning to the state from which one started (life on earth)."
  },
  {
    "id": "q81",
    "question": "What is the morphological meaning of 'نَّخِرَةً' (nakhira) in verse 11 ('عِظَامًا نَّخِرَةً')?",
    "options": [
      "Root ن-خ-ر; worn out, decayed, hollow, or rotten bones filled with holes.",
      "Root ن-ك-ر; denied or unrecognized.",
      "Root ن-ث-ر; scattered like dust.",
      "Root ن-ظ-ر; polished and clean."
    ],
    "correctAnswer": "Root ن-خ-ر; worn out, decayed, hollow, or rotten bones filled with holes.",
    "explanation": "Nakhira describes bones that have deteriorated completely inside the earth until they are porous and fragile."
  },
  {
    "id": "q82",
    "question": "What is the grammatical form and meaning of 'كَرَّةٌ' (karrah) in verse 12 ('كَرَّةٌ خَاسِرَةٌ')?",
    "options": [
      "Noun of instance (*ism marrah*) from ك-ر-ر, meaning a return, charge, or recurrence.",
      "Adjective meaning impossible.",
      "Verb meaning to flee.",
      "Adverb meaning permanently."
    ],
    "correctAnswer": "Noun of instance (*ism marrah*) from ك-ر-ر, meaning a return, charge, or recurrence.",
    "explanation": "Karrah signifies a single return or repeat occurrence; the disbelievers mockingly call any return to life a 'losing return'."
  },
  {
    "id": "q83",
    "question": "What is the root and meaning of 'زَجْرَةٌ' (zajrah) in verse 13 ('زَجْرَةٌ وَاحِدَةٌ')?",
    "options": [
      "Root ز-ج-ر; a sharp shout, rebuke, driving away, or a single commanding blast.",
      "Root ز-ج-ل; a loud musical melody.",
      "Root ز-ه-ر; a bright blooming flower.",
      "Root ز-ل-ز; a severe earthquake."
    ],
    "correctAnswer": "Root ز-ج-ر; a sharp shout, rebuke, driving away, or a single commanding blast.",
    "explanation": "Zajrah is a forceful shout or cry used to herd or drive livestock; here it denotes the single commanding cry of resurrection."
  },
  {
    "id": "q84",
    "question": "What is the linguistic derivation of 'السَّاهِرَةِ' (As-Sahirah) in verse 14?",
    "options": [
      "Root س-ه-ر (associated with sleeplessness or wakefulness); denoting the earth plain because people wake up or stay awake upon it in terror.",
      "Root س-ح-ر; meaning magic or illusion.",
      "Root س-ي-ر; meaning a traveling caravan.",
      "Root س-ه-ل; meaning a flat valley."
    ],
    "correctAnswer": "Root س-ه-ر (associated with sleeplessness or wakefulness); denoting the earth plain because people wake up or stay awake upon it in terror.",
    "explanation": "Classical linguists note As-Sahirah is named thus because sleep is banished from the eyes of those gathered there in awe."
  },
  {
    "id": "q85",
    "question": "What is the grammatical construction and meaning of 'طُوًى' (Tuwa) in verse 16?",
    "options": [
      "A proper geographical noun (diptote / mamnu' min al-sarf) representing the sacred valley.",
      "A common noun meaning 'twice blessed.'",
      "A verb meaning 'to fold or wrap.'",
      "An adjective meaning 'hidden.'"
    ],
    "correctAnswer": "A proper geographical noun (diptote / mamnu' min al-sarf) representing the sacred valley.",
    "explanation": "Tuwa is the name of the sacred valley where Musa was addressed by Allah."
  },
  {
    "id": "q86",
    "question": "What is the root and meaning of 'طَغَى' (tagha) in verse 17 ('إِنَّهُ طَغَى')?",
    "options": [
      "Root ط-غ-ي; to exceed all bounds, transgress, or act with tyrannical lawlessness.",
      "Root ط-ع-م; to consume excessive food.",
      "Root ط-و-ف; to wander aimlessly.",
      "Root ط-ل-ب; to make excessive demands."
    ],
    "correctAnswer": "Root ط-غ-ي; to exceed all bounds, transgress, or act with tyrannical lawlessness.",
    "explanation": "Taghyan refers to crossing every moral and spiritual boundary, perfectly capturing Pharaoh's tyranny."
  },
  {
    "id": "q87",
    "question": "What is the morphological form and meaning of 'تَزَكَّى' (tazakka) in verse 18?",
    "options": [
      "Verb Form V (Tafa'ala) from ز-ك-و; meaning to purify oneself, grow in righteousness, or cleanse from sin.",
      "Verb Form I meaning to give charity.",
      "Verb Form IV meaning to become wealthy.",
      "Verb Form VIII meaning to dispute."
    ],
    "correctAnswer": "Verb Form V (Tafa'ala) from ز-ك-و; meaning to purify oneself, grow in righteousness, or cleanse from sin.",
    "explanation": "Tazakka implies active self-purification and moral refinement."
  },
  {
    "id": "q88",
    "question": "What is the root and meaning of 'الْآيَةَ' (al-ayah) in verse 20 ('فَأَرَاهُ الْآيَةَ الْكُبْرَى')?",
    "options": [
      "Root أ-ي-ي or أ-و-ي; meaning a sign, miracle, or evident proof.",
      "Root أ-ج-ر; meaning a financial reward.",
      "Root أ-م-ر; meaning a royal decree.",
      "Root أ-ذ-ن; meaning permission."
    ],
    "correctAnswer": "Root أ-ي-ي or أ-و-ي; meaning a sign, miracle, or evident proof.",
    "explanation": "Ayah refers to a miraculous proof demonstrating divine authority."
  },
  {
    "id": "q89",
    "question": "What is the morphological relationship between 'كَذَّبَ' (kadhdhaba) and 'عَصَى' ('asa) in verse 21?",
    "options": [
      "Both are past tense verbs (Madhi); kadhdhaba is Form II (intensive denial), and 'asa is Form I (disobedience).",
      "Both are nouns indicating rebellion.",
      "Both are imperative verbs commanding action.",
      "Both are passive participles."
    ],
    "correctAnswer": "Both are past tense verbs (Madhi); kadhdhaba is Form II (intensive denial), and 'asa is Form I (disobedience).",
    "explanation": "They highlight Pharaoh's two-fold rejection: denying the truth of the message and actively disobeying the command."
  },
  {
    "id": "q90",
    "question": "What is the root and meaning of 'يَسْعَى' (yas'a) in verse 22 ('أَدْبَرَ يَسْعَى')?",
    "options": [
      "Root س-ع-ي; to walk briskly, strive, endeavor, or hustle in opposition.",
      "Root س-ع-د; to experience happiness.",
      "Root س-ع-ر; to ignite a fire.",
      "Root س-م-ع; to listen secretly."
    ],
    "correctAnswer": "Root س-ع-ي; to walk briskly, strive, endeavor, or hustle in opposition.",
    "explanation": "Yas'a here denotes frantic scurrying and scheming against Musa."
  },
  {
    "id": "q91",
    "question": "What is the linguistic meaning of 'نَكَالَ' (nakala) in verse 25 ('نَكَالَ الْآخِرَةِ وَالْأُولَى')?",
    "options": [
      "Root ن-ك-ل; an exemplary punishment or deterrent that restrains others from committing similar crimes.",
      "Root ن-ك-ر; an unrecognizable disguise.",
      "Root ن-ق-ل; a geographical migration.",
      "Root ن-ح-ل; a physical gift."
    ],
    "correctAnswer": "Root ن-ك-ل; an exemplary punishment or deterrent that restrains others from committing similar crimes.",
    "explanation": "Nakal is a punishment so severe it serves as a deterrent to onlookers."
  },
  {
    "id": "q92",
    "question": "What is the root and meaning of 'عِبْرَةً' ('ibratan) in verse 26 ('لَعِبْرَةً لِّمَن يَخْشَى')?",
    "options": [
      "Root ع-ب-ر; a lesson, warning, or emotional crossing from an observable event to an abstract spiritual truth.",
      "Root ع-ب-د; a religious ritual.",
      "Root ع-ط-ر; a pleasant fragrance.",
      "Root ع-ج-ل; a hurried action."
    ],
    "correctAnswer": "Root ع-ب-ر; a lesson, warning, or emotional crossing from an observable event to an abstract spiritual truth.",
    "explanation": "'Ibra derives from crossing over (crossing from historical observation to inner realization)."
  },
  {
    "id": "q93",
    "question": "What is the morphological form and meaning of 'سَمْكَهَا' (samkaha) in verse 28 ('رَفَعَ سَمْكَهَا')?",
    "options": [
      "Noun derived from س-م-ك; meaning its ceiling, height, elevation, or vertical dimension.",
      "Adjective meaning its width.",
      "Verb meaning its creation.",
      "Noun meaning its foundation."
    ],
    "correctAnswer": "Noun derived from س-م-ك; meaning its ceiling, height, elevation, or vertical dimension.",
    "explanation": "Samk refers to the height or roof-like structure of the sky."
  },
  {
    "id": "q94",
    "question": "What is the root and meaning of 'أَغْطَشَ' (aghtasha) in verse 29 ('وَأَغْطَشَ لَيْلَهَا')?",
    "options": [
      "Root غ-ط-ش; to make dark, gloomy, or obscure.",
      "Root غ-ط-ي; to cover completely.",
      "Root غ-م-ر; to flood with water.",
      "Root ع-ط-ش; to cause thirst."
    ],
    "correctAnswer": "Root غ-ط-ش; to make dark, gloomy, or obscure.",
    "explanation": "Aghtasha means to plunge in darkness, referring to bringing forth the night."
  },
  {
    "id": "q95",
    "question": "What is the precise root debate regarding 'دَحَاهَا' (dahaha) in verse 30 ('دَحَاهَا')?",
    "options": [
      "Root د-ح-و; meaning to spread out, expand, or level, with classical scholars also noting connections to ostrich egg shapes.",
      "Root د-م-ر; meaning to demolish.",
      "Root د-ف-ع; meaning to push forward.",
      "Root د-ه-ش; meaning to astonish."
    ],
    "correctAnswer": "Root د-ح-و; meaning to spread out, expand, or level, with classical scholars also noting connections to ostrich egg shapes.",
    "explanation": "Dahaha combines the concepts of expansive smoothing and roundness."
  },
  {
    "id": "q96",
    "question": "What is the root and meaning of 'أَرْسَاهَا' (arsaha) in verse 32 ('وَالْجِبَالَ أَرْسَاهَا')?",
    "options": [
      "Root ر-س-و; to anchor, fix firmly, or stabilize.",
      "Root ر-س-ل; to send a messenger.",
      "Root ر-ف-ع; to elevate high.",
      "Root ر-ك-ب; to assemble parts."
    ],
    "correctAnswer": "Root ر-س-و; to anchor, fix firmly, or stabilize.",
    "explanation": "Arsaha means He anchored the mountains so the earth remains steady."
  },
  {
    "id": "q97",
    "question": "What is the morphological category and meaning of 'مَّتَاعًا' (mata'an) in verse 33 ('مَّتَاعًا لَّكُمْ')?",
    "options": [
      "Accusative noun of purpose/provision (*maf'ul li-ajlihi* or *hal*) from م-ت-ع; meaning enjoyment, utility, or provision.",
      "Verb meaning to destroy.",
      "Adjective meaning temporary.",
      "Noun meaning heavy burden."
    ],
    "correctAnswer": "Accusative noun of purpose/provision from م-ت-ع; meaning enjoyment, utility, or provision.",
    "explanation": "Mata' denotes provision and utility granted for temporary benefit."
  },
  {
    "id": "q98",
    "question": "What is the linguistic root and meaning of 'الطَّامَّةُ' (At-Tammah) in verse 34?",
    "options": [
      "Root ط-م-م; an overwhelming calamity or flood that rises above and eclipses all other catastrophes.",
      "Root ط-ع-م; a feast or banquet.",
      "Root ط-ي-ر; a soaring bird.",
      "Root ط-ه-ر; purity and cleanliness."
    ],
    "correctAnswer": "Root ط-م-م; an overwhelming calamity or flood that rises above and eclipses all other catastrophes.",
    "explanation": "Tamma describes something that overwhelms everything else (originally used for floodwaters covering high ground)."
  },
  {
    "id": "q99",
    "question": "What is the root and meaning of 'يَتَذَكَّرُ' (yatadhakkaru) in verse 35 ('يَوْمَ يَتَذَكَّرُ الْإِنسَانُ مَا سَعَى')?",
    "options": [
      "Root ذ-ك-ر; Form V verb meaning to remember, reflect upon, or take heed of.",
      "Root ذ-ك-ي; to slaughter an animal.",
      "Root ذ-ه-ب; to depart permanently.",
      "Root ذ-ل-ل; to become humiliated."
    ],
    "correctAnswer": "Root ذ-ك-ر; Form V verb meaning to remember, reflect upon, or take heed of.",
    "explanation": "Yatadhakkaru denotes active recollection where man reviews every deed he performed."
  },
  {
    "id": "q100",
    "question": "What is the morphological form and meaning of 'بُرِّزَتِ' (burrizati) in verse 36 ('وَبُرِّزَتِ الْجَحِيمُ لِمَن يَرَى')?",
    "options": [
      "Verb Form II passive (Majhul) from ب-ر-ز; meaning made fully apparent, exposed, or brought into plain view.",
      "Verb Form I active meaning to hide underground.",
      "Noun meaning a fiery furnace.",
      "Adjective meaning extinguished."
    ],
    "correctAnswer": "Verb Form II passive (Majhul) from ب-ر-ز; meaning made fully apparent, exposed, or brought into plain view.",
    "explanation": "Burrizat indicates Hellfire being brought out into open visibility for every observer."
  },
  {
    "id": "q101",
    "question": "What is the root and meaning of 'آثَرَ' (athara) in verse 38 ('وَآثَرَ الْحَيَاةَ الدُّنْيَا')?",
    "options": [
      "Root أَثَرَ (or ء-ث-ر); Form IV verb meaning to prefer, put first, or choose worldly life over the hereafter.",
      "Root أَثِرَ; meaning to inherit wealth.",
      "Root أَثَرَ; meaning to leave footprints.",
      "Root أَثِرَ; meaning to become impoverished."
    ],
    "correctAnswer": "Root أَثَرَ; Form IV verb meaning to prefer, put first, or choose worldly life over the hereafter.",
    "explanation": "Athara al-hayat ad-dunya means prioritizing transient worldly existence over eternal divine reward."
  },
  {
    "id": "q102",
    "question": "What is the linguistic meaning of 'مَأْوَى' (ma'wa) in verse 39 ('فَإِنَّ الْجَحِيمَ هِيَ الْمَأْوَى')?",
    "options": [
      "Root أ-و-ي; a dwelling place, refuge, shelter, or final abode.",
      "Root و-أ-د; a burial pit.",
      "Root م-ي-ز; a sorting station.",
      "Root و-ه-ي; a crumbling ruin."
    ],
    "correctAnswer": "Root أ-و-ي; a dwelling place, refuge, shelter, or final abode.",
    "explanation": "Ma'wa is where one retreats and settles permanently."
  },
  {
    "id": "q103",
    "question": "What is the root and meaning of 'نَهَى' (naha) in verse 40 ('وَنَهَى النَّفْسَ عَنِ الْهَوَى')?",
    "options": [
      "Root ن-ه-ي; to forbid, restrain, or prohibit.",
      "Root ن-ه-ر; to flow as a river.",
      "Root ن-ج-و; to escape safely.",
      "Root ن-ف-خ; to blow air."
    ],
    "correctAnswer": "Root ن-ه-ي; to forbid, restrain, or prohibit.",
    "explanation": "Naha an-nafsa means restraining the soul from following base whims and desires (*hawa*)."
  },
  {
    "id": "q104",
    "question": "What is the root and meaning of 'أَيَّانَ' (ayyana) in verse 42 ('أَيَّانَ مُرْسَاهَا')?",
    "options": [
      "Interrogative particle meaning 'when?' or 'at what time?'",
      "Adverb meaning 'where?'",
      "Pronoun meaning 'who?'",
      "Condition meaning 'how?'"
    ],
    "correctAnswer": "Interrogative particle meaning 'when?' or 'at what time?'",
    "explanation": "Ayyana is an inquiry denoting temporal timing, used by skeptics mocking the Hour."
  },
  {
    "id": "q105",
    "question": "What is the morphological structure of 'مُنتَهَاهَا' (muntaha-ha) in verse 44 ('إِلَى رَبِّكَ مُنتَهَاهَا')?",
    "options": [
      "Noun of place/time (*ism makan/zaman*) from ن-ه-ي (Form VIII istanha / muntaha) attached to a pronoun; meaning 'its final terminus, goal, or ultimate knowledge boundary.'",
      "Verb meaning 'it has begun.'",
      "Adjective meaning 'infinite.'",
      "Particle meaning 'never.'"
    ],
    "correctAnswer": "Noun of place/time (*ism makan/zaman*) from ن-ه-ي attached to a pronoun; meaning 'its final terminus, goal, or ultimate knowledge boundary.'",
    "explanation": "Muntaha signifies the absolute endpoint; knowledge of the Hour's timing terminates with Allah alone."
  }
];

const surah79Category: QuizCategory = {
  id: "surah-79",
  title: "Surah An-Nazi’at",
  description: "A three-level study of Surah An-Nazi’at: phrase-translation questions, tafsir and thematic insights, and Arabic vocabulary analysis.",
  icon: "book-open",
  levels: {
    easy: surah79EasyQuestions,
    intermediate: surah79IntermediateQuestions,
    advanced: surah79AdvancedQuestions,
  },
};

export default surah79Category;
