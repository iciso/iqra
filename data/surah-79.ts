import type { QuizCategory, QuizQuestion } from "@/types/quiz";

/**
 * Surah An-Nazi'at (79) — IQRA-compatible question bank.
 *
 * Converted from KALAM's surah-79-quiz-data.ts:
 * - KALAM option objects become IQRA option strings.
 * - The option marked isCorrect: true becomes correctAnswer.
 * - Arabic/root-letter fields are omitted to match IQRA QuizQuestion shape.
 * The source provides 30 questions. They are exposed under each
 * difficulty until the questions are separately reviewed and graded; this
 * does not imply that the bank has been pedagogically differentiated.
 */
const surah79Questions: QuizQuestion[] = [
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
    "explanation": "النَّازِعَاتِ (An-Nazi'at) means 'Those Who Drag Forth,' derived from the root ن-ز-ع, referring to the angels who forcefully extract the souls of the wicked.",
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
    "explanation": "وَالنَّازِعَاتِ غَرْقًا (Wan-nazi'ati gharqa) means 'By those who drag forth violently,' roots ن-ز-ع (drag forth) and غ-ر-ق (violently/drowning).",
  },
  {
    "id": "q3",
    "question": "What does the Arabic phrase 'وَالنَّاشِطَاتِ نَشْطًا' mean?",
    "options": [
      "By those who bind tightly",
      "By those who move slowly",
      "By those who remain still",
      "By those who draw out gently"
    ],
    "correctAnswer": "By those who draw out gently",
    "explanation": "وَالنَّاشِطَاتِ نَشْطًا (Wan-nashitati nashta) means 'By those who draw out gently,' root ن-ش-ط (draw out actively/gently).",
  },
  {
    "id": "q4",
    "question": "What does the Arabic phrase 'وَالسَّابِحَاتِ سَبْحًا' mean?",
    "options": [
      "By those who stand still",
      "By those who move backwards",
      "By those who glide swiftly",
      "By those who descend slowly"
    ],
    "correctAnswer": "By those who glide swiftly",
    "explanation": "وَالسَّابِحَاتِ سَبْحًا (Was-sabihati sabha) means 'By those who glide swiftly,' root س-ب-ح (swim/glide swiftly through space).",
  },
  {
    "id": "q5",
    "question": "What does the Arabic phrase 'فَالسَّابِقَاتِ سَبْقًا' mean?",
    "options": [
      "Then those who lag behind",
      "Then those who move slowly",
      "Then those who race ahead",
      "Then those who stay in place"
    ],
    "correctAnswer": "Then those who race ahead",
    "explanation": "فَالسَّابِقَاتِ سَبْقًا (Fas-sabiqati sabqa) means 'Then those who race ahead,' root س-ب-ق (precede/race ahead).",
  },
  {
    "id": "q6",
    "question": "What does the Arabic phrase 'فَالْمُدَبِّرَاتِ أَمْرًا' mean?",
    "options": [
      "Then those who destroy affairs",
      "Then those who ignore commands",
      "Then those who neglect duties",
      "Then those who arrange each matter"
    ],
    "correctAnswer": "Then those who arrange each matter",
    "explanation": "فَالْمُدَبِّرَاتِ أَمْرًا (Fal-mudabbiratī amra) means 'Then those who arrange each matter,' roots د-ب-ر (arrange/manage) and أ-م-ر (matter/affair).",
  },
  {
    "id": "q7",
    "question": "What does the Arabic phrase 'يَوْمَ تَرْجُفُ الرَّاجِفَةُ' mean?",
    "options": [
      "On the Day the stable one becomes firm",
      "On the Day the peaceful one rests",
      "On the Day the quaking one quakes",
      "On the Day the silent one speaks"
    ],
    "correctAnswer": "On the Day the quaking one quakes",
    "explanation": "يَوْمَ تَرْجُفُ الرَّاجِفَةُ (Yawma tarjufu ar-rajifa) means 'On the Day the quaking one quakes,' roots ي-و-م (day) and ر-ج-ف (quake/tremble).",
  },
  {
    "id": "q8",
    "question": "What does the Arabic phrase 'تَتْبَعُهَا الرَّادِفَةُ' mean?",
    "options": [
      "Preceded by the first one",
      "Followed by the second one",
      "Accompanied by the gentle one",
      "Replaced by the peaceful one"
    ],
    "correctAnswer": "Followed by the second one",
    "explanation": "تَتْبَعُهَا الرَّادِفَةُ (Tatba'uha ar-radifa) means 'Followed by the second one,' roots ت-ب-ع (follow) and ر-د-ف (follow after/succeed).",
  },
  {
    "id": "q9",
    "question": "What does the Arabic phrase 'قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ' mean?",
    "options": [
      "Hearts, that Day, will be pounding",
      "Hearts, that Day, will be peaceful",
      "Hearts, that Day, will be joyful",
      "Hearts, that Day, will be grateful"
    ],
    "correctAnswer": "Hearts, that Day, will be pounding",
    "explanation": "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ (Qulubun yawma'idhin wajifa) means 'Hearts, that Day, will be pounding,' roots ق-ل-ب (hearts), ي-و-م (day), و-ج-ف (pounding with fear).",
  },
  {
    "id": "q10",
    "question": "What does the Arabic phrase 'أَبْصَارُهَا خَاشِعَةٌ' mean?",
    "options": [
      "Their eyes will be arrogant",
      "Their eyes will be downcast",
      "Their eyes will be bright",
      "Their eyes will be closed"
    ],
    "correctAnswer": "Their eyes will be downcast",
    "explanation": "أَبْصَارُهَا خَاشِعَةٌ (Absaruha khashi'a) means 'Their eyes will be downcast,' roots ب-ص-ر (sight/eyes) and خ-ش-ع (humble/downcast).",
  },
  {
    "id": "q11",
    "question": "What does the Arabic phrase 'يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ' mean?",
    "options": [
      "They say: 'Will we be given eternal life?'",
      "They say: 'Will we be granted paradise?'",
      "They say: 'Will we indeed be returned to our former state?'",
      "They say: 'Will we be given another chance?'"
    ],
    "correctAnswer": "They say: 'Will we indeed be returned to our former state?'",
    "explanation": "يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ (Yaquluna a'inna lamarduduna fi al-hafira) means 'They say: 'Will we indeed be returned to our former state?' roots ق-و-ل (say), ر-د-د (return), ح-ف-ر (former state).",
  },
  {
    "id": "q12",
    "question": "What does the Arabic phrase 'أَإِذَا كُنَّا عِظَامًا نَّخِرَةً' mean?",
    "options": [
      "When we have become fresh bones?",
      "When we have become decayed bones?",
      "When we have become strong bones?",
      "When we have become whole bones?"
    ],
    "correctAnswer": "When we have become decayed bones?",
    "explanation": "أَإِذَا كُنَّا عِظَامًا نَّخِرَةً (A'idha kunna 'izaman nakhira) means 'When we have become decayed bones?' roots ك-و-ن (become), ع-ظ-م (bones), ن-خ-ر (decayed/rotten).",
  },
  {
    "id": "q13",
    "question": "What does the Arabic phrase 'قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ' mean?",
    "options": [
      "They said: 'That then would be a profitable return'",
      "They said: 'That then would be a blessed return'",
      "They said: 'That then would be a losing return'",
      "They said: 'That then would be an impossible return'"
    ],
    "correctAnswer": "They said: 'That then would be a losing return'",
    "explanation": "قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ (Qalu tilka idhan karratun khasira) means 'They said: 'That then would be a losing return,' roots ق-و-ل (say), ك-ر-ر (return), خ-س-ر (losing).",
  },
  {
    "id": "q14",
    "question": "What does the Arabic phrase 'فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ' mean?",
    "options": [
      "It will be but one shout",
      "It will be many voices",
      "It will be a long process",
      "It will be a gentle whisper"
    ],
    "correctAnswer": "It will be but one shout",
    "explanation": "فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ (Fa'innama hiya zajratun wahida) means 'It will be but one shout,' roots ز-ج-ر (shout/rebuke) and و-ح-د (one).",
  },
  {
    "id": "q15",
    "question": "What does the Arabic phrase 'فَإِذَا هُم بِالسَّاهِرَةِ' mean?",
    "options": [
      "And suddenly they will be in the depths",
      "And suddenly they will be underground",
      "And suddenly they will be in darkness",
      "And suddenly they will be on the earth's surface"
    ],
    "correctAnswer": "And suddenly they will be on the earth's surface",
    "explanation": "فَإِذَا هُم بِالسَّاهِرَةِ (Fa'idha hum bis-sahira) means 'And suddenly they will be on the earth's surface,' root س-ه-ر (surface/wakefulness).",
  },
  {
    "id": "q16",
    "question": "What does the Arabic phrase 'هَلْ أَتَاكَ حَدِيثُ مُوسَىٰ' mean?",
    "options": [
      "Has there reached you the story of Ibrahim?",
      "Has there reached you the story of Isa?",
      "Has there reached you the story of Nuh?",
      "Has there reached you the story of Musa?"
    ],
    "correctAnswer": "Has there reached you the story of Musa?",
    "explanation": "هَلْ أَتَاكَ حَدِيثُ مُوسَىٰ (Hal ataka hadithu Musa) means 'Has there reached you the story of Musa?' roots أ-ت-ي (come/reach), ح-د-ث (story/narration), م-و-س (Musa/Moses).",
  },
  {
    "id": "q17",
    "question": "What does the Arabic phrase 'إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى' mean?",
    "options": [
      "When his Lord called to him in the cursed valley",
      "When his Lord called to him in the distant valley",
      "When his Lord called to him in the sacred valley of Tuwa",
      "When his Lord called to him in the hidden valley"
    ],
    "correctAnswer": "When his Lord called to him in the sacred valley of Tuwa",
    "explanation": "إِذْ نَادَاهُ رَبُّهُ بِالْوَادِ الْمُقَدَّسِ طُوًى (Idh nadahu rabbuhu bil-wadi al-muqaddasi Tuwa) means 'When his Lord called to him in the sacred valley of Tuwa,' roots ن-د-و (call), ر-ب-ب (Lord), و-د-ي (valley), ق-د-س (sacred), ط-و-ي (Tuwa).",
  },
  {
    "id": "q18",
    "question": "What does the Arabic phrase 'اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ' mean?",
    "options": [
      "Go to Pharaoh; indeed, he has been humble",
      "Go to Pharaoh; indeed, he has transgressed",
      "Go to Pharaoh; indeed, he has repented",
      "Go to Pharaoh; indeed, he has believed"
    ],
    "correctAnswer": "Go to Pharaoh; indeed, he has transgressed",
    "explanation": "اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ (Idhhab ila Fir'awna innahu tagha) means 'Go to Pharaoh; indeed, he has transgressed,' roots ذ-ه-ب (go), ف-ر-ع (Pharaoh), ط-غ-و (transgress).",
  },
  {
    "id": "q19",
    "question": "What does the Arabic phrase 'فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ' mean?",
    "options": [
      "And say: 'Would you [be willing] to purify yourself?'",
      "And say: 'Would you [be willing] to corrupt yourself?'",
      "And say: 'Would you [be willing] to harm yourself?'",
      "And say: 'Would you [be willing] to deceive yourself?'"
    ],
    "correctAnswer": "And say: 'Would you [be willing] to purify yourself?'",
    "explanation": "فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ (Faqul hal laka ila an tazakka) means 'And say: 'Would you [be willing] to purify yourself?' roots ق-و-ل (say) and ز-ك-و (purify).",
  },
  {
    "id": "q20",
    "question": "What does the Arabic phrase 'وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ' mean?",
    "options": [
      "And I will misguide you to your Lord so you may rebel",
      "And I will guide you to your Lord so you may fear [Him]",
      "And I will hide you from your Lord so you may escape",
      "And I will turn you from your Lord so you may forget"
    ],
    "correctAnswer": "And I will guide you to your Lord so you may fear [Him]",
    "explanation": "وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ (Wa ahdika ila rabbika fatakhsha) means 'And I will guide you to your Lord so you may fear [Him],' roots ه-د-ي (guide), ر-ب-ب (Lord), خ-ش-ي (fear).",
  },
  {
    "id": "q21",
    "question": "What does the Arabic phrase 'فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ' mean?",
    "options": [
      "And he showed him the minor sign",
      "And he showed him the hidden sign",
      "And he showed him the greatest sign",
      "And he showed him the false sign"
    ],
    "correctAnswer": "And he showed him the greatest sign",
    "explanation": "فَأَرَاهُ الْآيَةَ الْكُبْرَىٰ (Fa'arahu al-ayata al-kubra) means 'And he showed him the greatest sign,' roots ر-أ-ي (show), آ-ي-ت (sign), ك-ب-ر (great/greatest).",
  },
  {
    "id": "q22",
    "question": "What does the Arabic phrase 'فَكَذَّبَ وَعَصَىٰ' mean?",
    "options": [
      "But he believed and obeyed",
      "But he denied and disobeyed",
      "But he accepted and submitted",
      "But he pondered and reflected"
    ],
    "correctAnswer": "But he denied and disobeyed",
    "explanation": "فَكَذَّبَ وَعَصَىٰ (Fakadhdhaba wa 'asa) means 'But he denied and disobeyed,' roots ك-ذ-ب (deny) and ع-ص-ي (disobey).",
  },
  {
    "id": "q23",
    "question": "What does the Arabic phrase 'ثُمَّ أَدْبَرَ يَسْعَىٰ' mean?",
    "options": [
      "Then he turned away and advanced",
      "Then he stayed and pondered",
      "Then he turned his back, striving",
      "Then he approached and listened"
    ],
    "correctAnswer": "Then he turned his back, striving",
    "explanation": "ثُمَّ أَدْبَرَ يَسْعَىٰ (Thumma adbara yas'a) means 'Then he turned his back, striving,' roots د-ب-ر (turn back) and س-ع-ي (strive/hasten).",
  },
  {
    "id": "q24",
    "question": "What does the Arabic phrase 'فَحَشَرَ فَنَادَىٰ' mean?",
    "options": [
      "And he gathered and called out",
      "And he scattered and whispered",
      "And he hid and remained silent",
      "And he fled and cried"
    ],
    "correctAnswer": "And he gathered and called out",
    "explanation": "فَحَشَرَ فَنَادَىٰ (Fahashara fanada) means 'And he gathered and called out,' roots ح-ش-ر (gather) and ن-د-ي (call out).",
  },
  {
    "id": "q25",
    "question": "What does the Arabic phrase 'فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَىٰ' mean?",
    "options": [
      "And said: 'I am your servant, the humble'",
      "And said: 'I am your follower, the obedient'",
      "And said: 'I am your equal, the peer'",
      "And said: 'I am your lord, most high'"
    ],
    "correctAnswer": "And said: 'I am your lord, most high'",
    "explanation": "فَقَالَ أَنَا رَبُّكُمُ الْأَعْلَىٰ (Faqala ana rabbukumu al-a'la) means 'And said: 'I am your lord, most high,' roots ق-و-ل (say), ر-ب-ب (lord), ع-ل-و (high/most high).",
  },
  {
    "id": "q26",
    "question": "What does the Arabic phrase 'فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ' mean?",
    "options": [
      "So Allah blessed him with rewards of this life and the next",
      "So Allah forgave him for his past and future sins",
      "So Allah guided him to the truth of first and last",
      "So Allah seized him with punishment of the last and the first"
    ],
    "correctAnswer": "So Allah seized him with punishment of the last and the first",
    "explanation": "فَأَخَذَهُ اللَّهُ نَكَالَ الْآخِرَةِ وَالْأُولَىٰ (Fa'akhadhahu Allahu nakala al-akhirati wal-ula) means 'So Allah seized him with punishment of the last and the first,' roots أ-خ-ذ (seize), ن-ك-ل (punishment), آ-خ-ر (last), أ-و-ل (first).",
  },
  {
    "id": "q27",
    "question": "What does the Arabic phrase 'إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ' mean?",
    "options": [
      "Indeed in that is a distraction for whoever seeks pleasure",
      "Indeed in that is confusion for whoever doubts",
      "Indeed in that is a lesson for whoever fears [Allah]",
      "Indeed in that is entertainment for whoever is idle"
    ],
    "correctAnswer": "Indeed in that is a lesson for whoever fears [Allah]",
    "explanation": "إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ (Inna fi dhalika la'ibratan liman yakhsha) means 'Indeed in that is a lesson for whoever fears [Allah],' roots ع-ب-ر (lesson/consideration) and خ-ش-ي (fear).",
  },
  {
    "id": "q28",
    "question": "What does the Arabic phrase 'أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ' mean?",
    "options": [
      "Are you weaker in creation or is the heaven?",
      "Are you a more difficult creation or is the heaven?",
      "Are you smaller in creation or is the heaven?",
      "Are you simpler in creation or is the heaven?"
    ],
    "correctAnswer": "Are you a more difficult creation or is the heaven?",
    "explanation": "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ (A'antum ashaddu khalqan ami as-sama') means 'Are you a more difficult creation or is the heaven?' roots ش-د-د (difficult/strong), خ-ل-ق (creation), س-م-و (heaven).",
  },
  {
    "id": "q29",
    "question": "What does the Arabic phrase 'بَنَاهَا فَسَوَّاهَا' mean?",
    "options": [
      "He constructed it and proportioned it",
      "He destroyed it and scattered it",
      "He ignored it and abandoned it",
      "He divided it and separated it"
    ],
    "correctAnswer": "He constructed it and proportioned it",
    "explanation": "بَنَاهَا فَسَوَّاهَا (Banaha fasawwaha) means 'He constructed it and proportioned it,' roots ب-ن-ي (build/construct) and س-و-ي (make equal/proportion).",
  },
  {
    "id": "q30",
    "question": "What does the Arabic phrase 'وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا' mean?",
    "options": [
      "And He brightened its night and concealed its morning",
      "And He darkened its night and extracted its brightness",
      "And He mixed its night and confused its day",
      "And He shortened its night and lengthened its day"
    ],
    "correctAnswer": "And He darkened its night and extracted its brightness",
    "explanation": "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَاهَا (Wa aghtasha laylaha wa akhraja duhaha) means 'And He darkened its night and extracted its brightness,' roots غ-ط-ش (darken), ل-ي-ل (night), خ-ر-ج (extract), ض-ح-و (brightness/forenoon).",
  },
];

const surah79Category: QuizCategory = {
  id: "surah-79",
  title: "Surah An-Nazi’at",
  description: "Those Who Drag Forth — Surah 79",
  icon: "",
  levels: {
    easy: [...surah79Questions],
    intermediate: [...surah79Questions],
    advanced: [...surah79Questions],
  },
};

export default surah79Category;
