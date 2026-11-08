type AlInfitarQuizDataWithLevels = Omit<SurahQuizData, "questions"> & {
  levels: {
    easy: NonNullable<SurahQuizData["questions"]>;
    intermediate: NonNullable<SurahQuizData["questions"]>;
    advanced: NonNullable<SurahQuizData["questions"]>;
  };
};

export const alInfitarQuizData: AlInfitarQuizDataWithLevels = {
  surahId: 82,
  surahName: "Al-Infitar",
  surahArabicName: "الإنفطار",
  totalVerses: 19,
  levels: {
    easy: [
{
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Infitar, الإنفطار?",
      arabic: "الإنفطار",
      rootLetters: "ف ط ر",
      options: [
        { id: "a", text: "The Overwhelming", isCorrect: false },
        { id: "b", text: "The Night Visitor", isCorrect: false },
        { id: "c", text: "The Splitting Open", isCorrect: true },
        { id: "d", text: "The Most High", isCorrect: false },
      ],
      explanation: "الإنفطار (Al-Infitar) means 'The Splitting Open,' derived from the root ف-ط-ر, referring to the sky splitting on the Day of Judgment (Ibn Kathir, Quran.com).",
    },
{
      id: "q2",
      question: "What does the Arabic phrase 'إِذَا السَّمَاءُ انفَطَرَتْ' mean?",
      arabic: "إِذَا السَّمَاءُ انفَطَرَتْ",
      rootLetters: "س م و | ف ط ر",
      options: [
        { id: "a", text: "When the stars scatter", isCorrect: false },
        { id: "b", text: "When the seas burst forth", isCorrect: false },
        { id: "c", text: "When the graves are overturned", isCorrect: false },
        { id: "d", text: "When the sky splits open", isCorrect: true },
      ],
      explanation: "إِذَا السَّمَاءُ انفَطَرَتْ (Idha as-sama’u infatarat) means 'When the sky splits open,' roots س-م-و (sky) and ف-ط-ر (split) (Quran.com, Ibn Kathir).",
    },
{
      id: "q3",
      question: "What does the Arabic phrase 'وَإِذَا الْكَوَاكِبُ انتَثَرَتْ' mean?",
      arabic: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
      rootLetters: "ك و ك ب | ن ث ر",
      options: [
        { id: "a", text: "And when the seas are made to gush", isCorrect: false },
        { id: "b", text: "And when the stars scatter", isCorrect: true },
        { id: "c", text: "And when the graves are overturned", isCorrect: false },
        { id: "d", text: "And when the sky is cleaved", isCorrect: false },
      ],
      explanation: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ (Wa idha al-kawakibu intatharat) means 'And when the stars scatter,' roots ك-و-ك-ب (stars) and ن-ث-ر (scatter) (MyIslam, Al-Maududi).",
    },
{
      id: "q4",
      question: "What does the Arabic phrase 'وَإِذَا الْبِحَارُ فُجِّرَتْ' mean?",
      arabic: "وَإِذَا الْبِحَارُ فُجِّرَتْ",
      rootLetters: "ب ح ر | ف ج ر",
      options: [
        { id: "a", text: "And when the stars fall", isCorrect: false },
        { id: "b", text: "And when the graves are turned", isCorrect: false },
        { id: "c", text: "And when the seas burst forth", isCorrect: true },
        { id: "d", text: "And when the sky splits", isCorrect: false },
      ],
      explanation: "وَإِذَا الْبِحَارُ فُجِّرَتْ (Wa idha al-biharu fujjirat) means 'And when the seas burst forth,' roots ب-ح-ر (seas) and ف-ج-ر (burst) (Quran.com, Ibn Kathir).",
    },
{
      id: "q5",
      question: "What does the Arabic phrase 'وَإِذَا الْقُبُورُ بُعْثِرَتْ' mean?",
      arabic: "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
      rootLetters: "ق ب ر | ب ع ث ر",
      options: [
        { id: "a", text: "And when the graves are overturned", isCorrect: true },
        { id: "b", text: "And when the seas are flooded", isCorrect: false },
        { id: "c", text: "And when the stars are scattered", isCorrect: false },
        { id: "d", text: "And when the sky is torn", isCorrect: false },
      ],
      explanation: "وَإِذَا الْقُبُورُ بُعْثِرَتْ (Wa idha al-quburu bu’thirat) means 'And when the graves are overturned,' roots ق-ب-ر (graves) and ب-ع-ث-ر (overturned) (MyIslam, Al-Maududi).",
    },
{
      id: "q6",
      question: "What does the Arabic phrase 'عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ' mean?",
      arabic: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ",
      rootLetters: "ع ل م | ن ف س | ح ض ر",
      options: [
        { id: "a", text: "A soul will know what it has hidden", isCorrect: false },
        { id: "b", text: "A soul will know what it has brought", isCorrect: true },
        { id: "c", text: "A soul will know what it has forgotten", isCorrect: false },
        { id: "d", text: "A soul will know what it has earned", isCorrect: false },
      ],
      explanation: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ (‘Alimat nafsun ma ahdarat) means 'A soul will know what it has brought,' roots ع-ل-م (know), ن-ف-س (soul), ح-ض-ر (brought) (Quran.com, Ibn Kathir).",
    },
{
      id: "q7",
      question: "What does the Arabic phrase 'يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ' mean?",
      arabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
      rootLetters: "أ ن س | غ ر ر | ر ب ب | ك ر م",
      options: [
        { id: "a", text: "O mankind, what has deceived you concerning your Generous Lord?", isCorrect: true },
        { id: "b", text: "O mankind, what has guided you to your Mighty Lord?", isCorrect: false },
        { id: "c", text: "O mankind, what has pleased you with your Eternal Lord?", isCorrect: false },
        { id: "d", text: "O mankind, what has saved you from your Just Lord?", isCorrect: false },
      ],
      explanation: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ (Ya ayyuha al-insanu ma gharraka birabbika al-karim) means 'O mankind, what has deceived you concerning your Generous Lord?' roots أ-ن-س (mankind), غ-ر-ر (deceived), ر-ب-ب (Lord), ك-ر-م (generous) (MyIslam, Al-Maududi).",
    },
{
      id: "q8",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ' mean?",
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      rootLetters: "خ ل ق | س و ي | ع د ل",
      options: [
        { id: "a", text: "Who guided you, shaped you, and led you", isCorrect: false },
        { id: "b", text: "Who created you, forgave you, and saved you", isCorrect: false },
        { id: "c", text: "Who made you, blessed you, and honored you", isCorrect: false },
        { id: "d", text: "Who created you, proportioned you, and balanced you", isCorrect: true },
      ],
      explanation: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ (Alladhi khalaqaka fasawwaka fa‘adalak) means 'Who created you, proportioned you, and balanced you,' roots خ-ل-ق (created), س-و-ي (proportioned), ع-د-ل (balanced) (Quran.com, Ibn Kathir).",
    },
{
      id: "q9",
      question: "What does the Arabic phrase 'فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ' mean?",
      arabic: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ",
      rootLetters: "ص و ر | ش ي ء | ر ك ب",
      options: [
        { id: "a", text: "In whatever path He willed, He guided you", isCorrect: false },
        { id: "b", text: "In whatever place He willed, He placed you", isCorrect: false },
        { id: "c", text: "In whatever form He willed, He assembled you", isCorrect: true },
        { id: "d", text: "In whatever time He willed, He created you", isCorrect: false },
      ],
      explanation: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ (Fi ayyi suratin ma sha’a rakkabak) means 'In whatever form He willed, He assembled you,' roots ص-و-ر (form), ش-ي-ء (will), ر-ك-ب (assembled) (MyIslam, Al-Maududi).",
    },
{
      id: "q10",
      question: "What does the Arabic phrase 'كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ' mean?",
      arabic: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ",
      rootLetters: "ك ذ ب | د ي ن",
      options: [
        { id: "a", text: "No, but you believe in the Judgment", isCorrect: false },
        { id: "b", text: "No, but you seek the Judgment", isCorrect: false },
        { id: "c", text: "No, but you fear the Judgment", isCorrect: false },
        { id: "d", text: "No, but you deny the Judgment", isCorrect: true },
      ],
      explanation: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ (Kalla bal tukadhdhibuna bid-din) means 'No, but you deny the Judgment,' roots ك-ذ-ب (deny) and د-ي-ن (Judgment/religion) (Quran.com, Ibn Kathir).",
    },
{
      id: "q11",
      question: "What does the Arabic phrase 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ' mean?",
      arabic: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ",
      rootLetters: "ح ف ظ",
      options: [
        { id: "a", text: "And indeed, over you are guardians", isCorrect: true },
        { id: "b", text: "And indeed, over you are judges", isCorrect: false },
        { id: "c", text: "And indeed, over you are guides", isCorrect: false },
        { id: "d", text: "And indeed, over you are saviors", isCorrect: false },
      ],
      explanation: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ (Wa inna ‘alaykum lahafizhin) means 'And indeed, over you are guardians,' root ح-ف-ظ (guardians) (MyIslam, Al-Maududi).",
    },
{
      id: "q12",
      question: "What does the Arabic phrase 'كِرَامًا كَاتِبِينَ' mean?",
      arabic: "كِرَامًا كَاتِبِينَ",
      rootLetters: "ك ر م | ك ت ب",
      options: [
        { id: "a", text: "Merciful protectors", isCorrect: false },
        { id: "b", text: "Honest judges", isCorrect: false },
        { id: "c", text: "Righteous guides", isCorrect: false },
        { id: "d", text: "Noble recorders", isCorrect: true },
      ],
      explanation: "كِرَامًا كَاتِبِينَ (Kiraman katibin) means 'Noble recorders,' roots ك-ر-م (noble) and ك-ت-ب (recorders) (Quran.com, Ibn Kathir).",
    },
{
      id: "q13",
      question: "What does the Arabic phrase 'يَعْلَمُونَ مَا تَفْعَلُونَ' mean?",
      arabic: "يَعْلَمُونَ مَا تَفْعَلُونَ",
      rootLetters: "ع ل م | ف ع ل",
      options: [
        { id: "a", text: "They know what you do", isCorrect: true },
        { id: "b", text: "They guide what you do", isCorrect: false },
        { id: "c", text: "They judge what you do", isCorrect: false },
        { id: "d", text: "They hide what you do", isCorrect: false },
      ],
      explanation: "يَعْلَمُونَ مَا تَفْعَلُونَ (Ya‘lamuna ma taf‘alun) means 'They know what you do,' roots ع-ل-م (know) and ف-ع-ل (do) (MyIslam, Al-Maududi).",
    },
{
      id: "q14",
      question: "What does the Arabic phrase 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ' mean?",
      arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
      rootLetters: "ب ر ر | ن ع م",
      options: [
        { id: "a", text: "Indeed, the wicked are in punishment", isCorrect: false },
        { id: "b", text: "Indeed, the sinners are in loss", isCorrect: false },
        { id: "c", text: "Indeed, the righteous are in bliss", isCorrect: true },
        { id: "d", text: "Indeed, the disbelievers are in regret", isCorrect: false },
      ],
      explanation: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ (Inna al-abrara lafi na‘im) means 'Indeed, the righteous are in bliss,' roots ب-ر-ر (righteous) and ن-ع-م (bliss) (Quran.com, Ibn Kathir).",
    },
{
      id: "q15",
      question: "What does the Arabic phrase 'وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ' mean?",
      arabic: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ",
      rootLetters: "ف ج ر | ج ح م",
      options: [
        { id: "a", text: "And indeed, the righteous are in paradise", isCorrect: false },
        { id: "b", text: "And indeed, the wicked are in hellfire", isCorrect: true },
        { id: "c", text: "And indeed, the believers are in bliss", isCorrect: false },
        { id: "d", text: "And indeed, the sinners are in peace", isCorrect: false },
      ],
      explanation: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ (Wa inna al-fujjara lafi jahim) means 'And indeed, the wicked are in hellfire,' roots ف-ج-ر (wicked) and ج-ح-م (hellfire) (MyIslam, Al-Maududi).",
    },
{
      id: "q16",
      question: "What does the Arabic phrase 'يَصْلَوْنَهَا يَوْمَ الدِّينِ' mean?",
      arabic: "يَصْلَوْنَهَا يَوْمَ الدِّينِ",
      rootLetters: "ص ل و | ي و م | د ي ن",
      options: [
        { id: "a", text: "They will enter it on the Day of Peace", isCorrect: false },
        { id: "b", text: "They will burn in it on the Day of Judgment", isCorrect: true },
        { id: "c", text: "They will escape it on the Day of Mercy", isCorrect: false },
        { id: "d", text: "They will see it on the Day of Reckoning", isCorrect: false },
      ],
      explanation: "يَصْلَوْنَهَا يَوْمَ الدِّينِ (Yaslawna ha yawma ad-din) means 'They will burn in it on the Day of Judgment,' roots ص-ل-و (burn), ي-و-م (day), د-ي-ن (Judgment) (Quran.com, Ibn Kathir).",
    },
{
      id: "q17",
      question: "What does the Arabic phrase 'وَمَا هُمْ عَنْهَا بِغَائِبِينَ' mean?",
      arabic: "وَمَا هُمْ عَنْهَا بِغَائِبِينَ",
      rootLetters: "غ ي ب",
      options: [
        { id: "a", text: "And never therefrom will they be absent", isCorrect: true },
        { id: "b", text: "And they will not be able to enter it", isCorrect: false },
        { id: "c", text: "And they will not be able to see it", isCorrect: false },
        { id: "d", text: "And they will not be able to avoid it", isCorrect: false },
      ],
      explanation: "وَمَا هُمْ عَنْهَا بِغَائِبِينَ (Wa ma hum ʿanha bi-ghaʾibin) means 'And never therefrom will they be absent,' root غ-ي-ب (be absent or unseen) (MyIslam, Al-Maududi).",
    },
{
      id: "q18",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
      rootLetters: "د ر ي | ي و م | د ي ن",
      options: [
        { id: "a", text: "And what can make you know what the Day of Peace is?", isCorrect: false },
        { id: "b", text: "And what can make you know what the Day of Mercy is?", isCorrect: false },
        { id: "c", text: "And what can make you know what the Day of Bliss is?", isCorrect: false },
        { id: "d", text: "And what can make you know what the Day of Judgment is?", isCorrect: true },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ (Wa ma adraka ma yawmu ad-din) means 'And what can make you know what the Day of Judgment is?' roots د-ر-ي (know), ي-و-م (day), د-ي-ن (Judgment) (Quran.com, Ibn Kathir).",
    },
{
      id: "q19",
      question: "What does the Arabic phrase 'ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean?",
      arabic: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
      rootLetters: "د ر ي | ي و م | د ي ن",
      options: [
        { id: "a", text: "Then, what can make you know what the Day of Mercy is?", isCorrect: false },
        { id: "b", text: "Then, what can make you know what the Day of Bliss is?", isCorrect: false },
        { id: "c", text: "Then, what can make you know what the Day of Judgment is?", isCorrect: true },
        { id: "d", text: "Then, what can make you know what the Day of Peace is?", isCorrect: false },
      ],
      explanation: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ (Thumma ma adraka ma yawmu ad-din) means 'Then, what can make you know what the Day of Judgment is?' roots د-ر-ي (know), ي-و-م (day), د-ي-ن (Judgment) (MyIslam, Al-Maududi).",
    },
{
      id: "q20",
      question: "What does the Arabic phrase 'يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا' mean?",
      arabic: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا",
      rootLetters: "ي و م | م ل ك | ن ف س | ش ي ء",
      options: [
        { id: "a", text: "A day when no soul will guide another soul", isCorrect: false },
        { id: "b", text: "A day when no soul will save another soul", isCorrect: false },
        { id: "c", text: "A day when no soul will judge another soul", isCorrect: false },
        { id: "d", text: "A day when no soul will avail another soul anything", isCorrect: true },
      ],
      explanation: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا (Yawma la tamliku nafsun linafsin shay’an) means 'A day when no soul will avail another soul anything,' roots ي-و-م (day), م-ل-ك (avail/possess), ن-ف-س (soul), ش-ي-ء (anything) (Quran.com, Ibn Kathir).",
    },
{
      id: "q21",
      question: "What does the Arabic phrase 'وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ' mean?",
      arabic: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ",
      rootLetters: "أ م ر | ي و م",
      options: [
        { id: "a", text: "And the command that day is with Allah", isCorrect: true },
        { id: "b", text: "And the command that day is with the angels", isCorrect: false },
        { id: "c", text: "And the command that day is with mankind", isCorrect: false },
        { id: "d", text: "And the command that day is with the prophets", isCorrect: false },
      ],
      explanation: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ (Wal-amru yawma’idhin lillah) means 'And the command that day is with Allah,' roots أ-م-ر (command) and ي-و-م (day) (MyIslam, Al-Maududi).",
    },
    {
      id: "q22",
      question: "What does the phrase 'رَبِّكَ الْكَرِيمِ' mean?",
      arabic: "رَبِّكَ الْكَرِيمِ",
      rootLetters: "ر ب ب | ك ر م",
      options: [
        { id: "a", text: "Your Powerful angel", isCorrect: false },
        { id: "b", text: "Your final destination", isCorrect: false },
        { id: "c", text: "Your Generous Lord", isCorrect: true },
        { id: "d", text: "Your hidden record", isCorrect: false }
      ],
      explanation: "رَبّ means Lord, and الكريم means Generous or Noble. Together the phrase means 'your Generous Lord' (82:6).",
    },
    {
      id: "q23",
      question: "What does 'الَّذِي خَلَقَكَ' mean?",
      arabic: "الَّذِي خَلَقَكَ",
      rootLetters: "خ ل ق",
      options: [
        { id: "a", text: "Who guided you", isCorrect: false },
        { id: "b", text: "Who created you", isCorrect: true },
        { id: "c", text: "Who forgave you", isCorrect: false },
        { id: "d", text: "Who called you", isCorrect: false }
      ],
      explanation: "This phrase from 82:7 refers to Allah as the One who created the human being.",
    },
    {
      id: "q24",
      question: "What is the meaning of 'فَسَوَّاكَ فَعَدَلَكَ'?",
      arabic: "فَسَوَّاكَ فَعَدَلَكَ",
      rootLetters: "س و ي | ع د ل",
      options: [
        { id: "a", text: "Then He proportioned you and made you balanced", isCorrect: true },
        { id: "b", text: "Then He tested you and forgave you", isCorrect: false },
        { id: "c", text: "Then He raised you and gave you wealth", isCorrect: false },
        { id: "d", text: "Then He concealed you and protected you", isCorrect: false }
      ],
      explanation: "The two verbs in 82:7 describe Allah's proportioning and balancing of the human form.",
    },
    {
      id: "q25",
      question: "What does 'فِي أَيِّ صُورَةٍ' mean?",
      arabic: "فِي أَيِّ صُورَةٍ",
      rootLetters: "ص و ر",
      options: [
        { id: "a", text: "In every place", isCorrect: false },
        { id: "b", text: "At the appointed time", isCorrect: false },
        { id: "c", text: "Among the angels", isCorrect: false },
        { id: "d", text: "In whatever form", isCorrect: true }
      ],
      explanation: "صورة means form or shape. The phrase begins the statement in 82:8 about the form in which Allah fashioned the human being.",
    },
    {
      id: "q26",
      question: "What is the meaning of 'مَا شَاءَ رَكَّبَكَ'?",
      arabic: "مَا شَاءَ رَكَّبَكَ",
      rootLetters: "ش ي ء | ر ك ب",
      options: [
        { id: "a", text: "As you wished, He guided you", isCorrect: false },
        { id: "b", text: "When you called, He answered you", isCorrect: false },
        { id: "c", text: "As He willed, He assembled or fashioned you", isCorrect: true },
        { id: "d", text: "As you worked, He rewarded you", isCorrect: false }
      ],
      explanation: "The phrase completes verse 8, affirming that Allah fashioned the human being in the form He willed.",
    },
    {
      id: "q27",
      question: "What does 'وَإِنَّ عَلَيْكُمْ' mean?",
      arabic: "وَإِنَّ عَلَيْكُمْ",
      rootLetters: "ع ل ي",
      options: [
        { id: "a", text: "And indeed, within you", isCorrect: false },
        { id: "b", text: "And indeed, over you", isCorrect: true },
        { id: "c", text: "And indeed, before you", isCorrect: false },
        { id: "d", text: "And indeed, beneath you", isCorrect: false }
      ],
      explanation: "This phrase begins verse 10, introducing the guardians or recorders appointed over people.",
    },
    {
      id: "q28",
      question: "What is the meaning of 'مَا تَفْعَلُونَ'?",
      arabic: "مَا تَفْعَلُونَ",
      rootLetters: "ف ع ل",
      options: [
        { id: "a", text: "What you do", isCorrect: true },
        { id: "b", text: "What you forget", isCorrect: false },
        { id: "c", text: "What you conceal", isCorrect: false },
        { id: "d", text: "What you desire", isCorrect: false }
      ],
      explanation: "The phrase occurs at the end of verse 12: the recording angels know what people do.",
    },
    {
      id: "q29",
      question: "What does 'لَفِي نَعِيمٍ' mean?",
      arabic: "لَفِي نَعِيمٍ",
      rootLetters: "ن ع م",
      options: [
        { id: "a", text: "Surely in darkness", isCorrect: false },
        { id: "b", text: "Surely in the grave", isCorrect: false },
        { id: "c", text: "Surely in regret", isCorrect: false },
        { id: "d", text: "Surely in bliss", isCorrect: true }
      ],
      explanation: "This phrase from 82:13 describes the state of the righteous; لَـ adds emphasis, and نعيم means bliss.",
    },
    {
      id: "q30",
      question: "What is the meaning of 'لَفِي جَحِيمٍ'?",
      arabic: "لَفِي جَحِيمٍ",
      rootLetters: "ج ح م",
      options: [
        { id: "a", text: "Surely in a garden", isCorrect: false },
        { id: "b", text: "Surely in a gathering", isCorrect: false },
        { id: "c", text: "Surely in a blazing Fire", isCorrect: true },
        { id: "d", text: "Surely in a place of safety", isCorrect: false }
      ],
      explanation: "This phrase from 82:14 describes the fate of the wicked; جحيم means a blazing Fire.",
    },
    {
      id: "q31",
      question: "What does 'يَصْلَوْنَهَا' mean?",
      arabic: "يَصْلَوْنَهَا",
      rootLetters: "ص ل ي",
      options: [
        { id: "a", text: "They will leave it", isCorrect: false },
        { id: "b", text: "They will burn in it", isCorrect: true },
        { id: "c", text: "They will enter the gardens", isCorrect: false },
        { id: "d", text: "They will be absent from it", isCorrect: false }
      ],
      explanation: "The verb in 82:15 refers to experiencing the heat of the Fire; the attached pronoun ها refers to it.",
    },
    {
      id: "q32",
      question: "What does 'يَوْمَ الدِّينِ' mean?",
      arabic: "يَوْمَ الدِّينِ",
      rootLetters: "ي و م | د ي ن",
      options: [
        { id: "a", text: "The Day of Recompense or Judgment", isCorrect: true },
        { id: "b", text: "The day of migration", isCorrect: false },
        { id: "c", text: "The day of harvest", isCorrect: false },
        { id: "d", text: "The day of worldly provision", isCorrect: false }
      ],
      explanation: "In verses 15–19, يوم الدين refers to the Day of Judgment and recompense.",
    },
    {
      id: "q33",
      question: "What is the meaning of 'ثُمَّ مَا أَدْرَاكَ'?",
      arabic: "ثُمَّ مَا أَدْرَاكَ",
      rootLetters: "ث م م | د ر ي",
      options: [
        { id: "a", text: "Then what have you forgotten", isCorrect: false },
        { id: "b", text: "Then where will you travel", isCorrect: false },
        { id: "c", text: "Then whom will you meet", isCorrect: false },
        { id: "d", text: "Then what can make you know", isCorrect: true }
      ],
      explanation: "This phrase begins the repeated rhetorical question in 82:18, intensifying the warning about the Day of Judgment.",
    },
    {
      id: "q34",
      question: "What does 'لِنَفْسٍ شَيْئًا' mean in the final verse?",
      arabic: "لِنَفْسٍ شَيْئًا",
      rootLetters: "ن ف س | ش ي ء",
      options: [
        { id: "a", text: "A record for every angel", isCorrect: false },
        { id: "b", text: "A reward from every person", isCorrect: false },
        { id: "c", text: "Anything for a soul", isCorrect: true },
        { id: "d", text: "A place for every nation", isCorrect: false }
      ],
      explanation: "The phrase appears in 82:19: no soul will possess or control anything for another soul.",
    },
    {
      id: "q35",
      question: "What is the meaning of 'وَالْأَمْرُ'?",
      arabic: "وَالْأَمْرُ",
      rootLetters: "أ م ر",
      options: [
        { id: "a", text: "And the gathering", isCorrect: false },
        { id: "b", text: "And the command or authority", isCorrect: true },
        { id: "c", text: "And the record", isCorrect: false },
        { id: "d", text: "And the reward", isCorrect: false }
      ],
      explanation: "This phrase begins the final declaration in 82:19, stating that the command and authority on that Day belong to Allah.",
    }
    ],
    intermediate: [
    {
      id: "q36",
      question: "What is the central subject linking the opening and closing of Surah Al-Infitar?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Day of Judgment and human accountability", isCorrect: true },
        { id: "b", text: "The splitting open of the sky", isCorrect: false },
        { id: "c", text: "Nineteen verses", isCorrect: false },
        { id: "d", text: "In Mecca; it is a Makkan surah", isCorrect: false }
      ],
      explanation: "The Day of Judgment, the upheaval of creation, and the record of deeds frame the entire Surah (82:1–19).",
    },
    {
      id: "q37",
      question: "What does the title Al-Infitar refer to?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Nineteen verses", isCorrect: false },
        { id: "b", text: "In Mecca; it is a Makkan surah", isCorrect: false },
        { id: "c", text: "The sky splits, stars scatter, seas burst forth, and graves are overturned", isCorrect: false },
        { id: "d", text: "The splitting open of the sky", isCorrect: true }
      ],
      explanation: "The title comes from the opening words إِذَا السَّمَاءُ انفَطَرَتْ (82:1), describing the sky splitting open at the onset of the Last Day.",
    },
    {
      id: "q38",
      question: "How many verses are in Surah Al-Infitar?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "In Mecca; it is a Makkan surah", isCorrect: false },
        { id: "b", text: "The sky splits, stars scatter, seas burst forth, and graves are overturned", isCorrect: false },
        { id: "c", text: "Nineteen verses", isCorrect: true },
        { id: "d", text: "Every soul will know what it has brought forward", isCorrect: false }
      ],
      explanation: "Surah Al-Infitar is chapter 82 and contains 19 verses. This is also stated in the supplied source-file introduction.",
    },
    {
      id: "q39",
      question: "Where was Surah Al-Infitar revealed according to the standard classification?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The sky splits, stars scatter, seas burst forth, and graves are overturned", isCorrect: false },
        { id: "b", text: "In Mecca; it is a Makkan surah", isCorrect: true },
        { id: "c", text: "Every soul will know what it has brought forward", isCorrect: false },
        { id: "d", text: "To awaken people from heedlessness and make them reflect on their ingratitude", isCorrect: false }
      ],
      explanation: "The supplied source identifies it as Meccan. Its focus on resurrection, judgment, and accountability is characteristic of the Makkan message.",
    },
    {
      id: "q40",
      question: "Which sequence of cosmic events opens the Surah?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The sky splits, stars scatter, seas burst forth, and graves are overturned", isCorrect: true },
        { id: "b", text: "Every soul will know what it has brought forward", isCorrect: false },
        { id: "c", text: "To awaken people from heedlessness and make them reflect on their ingratitude", isCorrect: false },
        { id: "d", text: "Creation, proportioning, and balancing", isCorrect: false }
      ],
      explanation: "Verses 1–4 present a sequence of upheavals that announce the Day of Judgment.",
    },
    {
      id: "q41",
      question: "What happens immediately after the four opening signs in the Surah's sequence?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "To awaken people from heedlessness and make them reflect on their ingratitude", isCorrect: false },
        { id: "b", text: "Creation, proportioning, and balancing", isCorrect: false },
        { id: "c", text: "Allah fashioned each person in the form He willed", isCorrect: false },
        { id: "d", text: "Every soul will know what it has brought forward", isCorrect: true }
      ],
      explanation: "Verse 5 follows the cosmic signs with the disclosure of each soul's deeds: عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ.",
    },
    {
      id: "q42",
      question: "What is the purpose of the question 'What has deceived you concerning your Generous Lord?' (82:6)?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Creation, proportioning, and balancing", isCorrect: false },
        { id: "b", text: "Allah fashioned each person in the form He willed", isCorrect: false },
        { id: "c", text: "To awaken people from heedlessness and make them reflect on their ingratitude", isCorrect: true },
        { id: "d", text: "Denial of the Day of Recompense and Judgment", isCorrect: false }
      ],
      explanation: "The question rebukes human negligence despite Allah's creation, care, and generosity. It is a call to reflection, not a denial of divine mercy.",
    },
    {
      id: "q43",
      question: "Which three aspects of human formation are mentioned in 82:7?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Allah fashioned each person in the form He willed", isCorrect: false },
        { id: "b", text: "Creation, proportioning, and balancing", isCorrect: true },
        { id: "c", text: "Denial of the Day of Recompense and Judgment", isCorrect: false },
        { id: "d", text: "Human deeds are recorded and accountability is real", isCorrect: false }
      ],
      explanation: "Verse 7 says Allah created the human being, proportioned them, and made them balanced: خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ.",
    },
    {
      id: "q44",
      question: "What does verse 8 teach about the diversity of human forms?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Allah fashioned each person in the form He willed", isCorrect: true },
        { id: "b", text: "Denial of the Day of Recompense and Judgment", isCorrect: false },
        { id: "c", text: "Human deeds are recorded and accountability is real", isCorrect: false },
        { id: "d", text: "They are noble and they write or record", isCorrect: false }
      ],
      explanation: "Verse 8 attributes the human form to Allah's will. It invites gratitude and humility rather than arrogance about appearance.",
    },
    {
      id: "q45",
      question: "What does the phrase 'بَلْ تُكَذِّبُونَ بِالدِّينِ' identify as the core denial?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Human deeds are recorded and accountability is real", isCorrect: false },
        { id: "b", text: "They are noble and they write or record", isCorrect: false },
        { id: "c", text: "No; the passage broadly says they know what people do", isCorrect: false },
        { id: "d", text: "Denial of the Day of Recompense and Judgment", isCorrect: true }
      ],
      explanation: "Verse 9 moves from the reminder of creation to the human denial of الدين, understood here in context as the Day of Judgment and recompense.",
    },
    {
      id: "q46",
      question: "What does the Surah teach through the description of 'noble recorders'?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They are noble and they write or record", isCorrect: false },
        { id: "b", text: "No; the passage broadly says they know what people do", isCorrect: false },
        { id: "c", text: "Human deeds are recorded and accountability is real", isCorrect: true },
        { id: "d", text: "The righteous are in bliss, while the wicked are in Hellfire", isCorrect: false }
      ],
      explanation: "Verses 10–12 describe guardians and noble recording angels who know what people do. The passage underscores that deeds are not lost.",
    },
    {
      id: "q47",
      question: "Which two qualities are explicitly given to the recording angels in 82:11?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No; the passage broadly says they know what people do", isCorrect: false },
        { id: "b", text: "They are noble and they write or record", isCorrect: true },
        { id: "c", text: "The righteous are in bliss, while the wicked are in Hellfire", isCorrect: false },
        { id: "d", text: "They will enter and experience it on the Day of Judgment", isCorrect: false }
      ],
      explanation: "The expression كِرَامًا كَاتِبِينَ means noble recorders or honourable scribes (82:11).",
    },
    {
      id: "q48",
      question: "Does the Surah say the recording angels know only public actions?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No; the passage broadly says they know what people do", isCorrect: true },
        { id: "b", text: "The righteous are in bliss, while the wicked are in Hellfire", isCorrect: false },
        { id: "c", text: "They will enter and experience it on the Day of Judgment", isCorrect: false },
        { id: "d", text: "To magnify the seriousness and enormity of that Day", isCorrect: false }
      ],
      explanation: "Verse 12 states يَعْلَمُونَ مَا تَفْعَلُونَ without limiting the statement to public deeds. The verse establishes comprehensive recording by Allah's appointed angels.",
    },
    {
      id: "q49",
      question: "How does the Surah contrast the final outcomes of people?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They will enter and experience it on the Day of Judgment", isCorrect: false },
        { id: "b", text: "To magnify the seriousness and enormity of that Day", isCorrect: false },
        { id: "c", text: "No soul can independently avail another soul anything", isCorrect: false },
        { id: "d", text: "The righteous are in bliss, while the wicked are in Hellfire", isCorrect: true }
      ],
      explanation: "Verses 13–14 set out a concise contrast: الْأَبْرَارَ in نعيم and الْفُجَّارَ in جحيم.",
    },
    {
      id: "q50",
      question: "What does verse 15 say about the wicked and the Fire?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "To magnify the seriousness and enormity of that Day", isCorrect: false },
        { id: "b", text: "No soul can independently avail another soul anything", isCorrect: false },
        { id: "c", text: "They will enter and experience it on the Day of Judgment", isCorrect: true },
        { id: "d", text: "The command and authority that Day belong to Allah", isCorrect: false }
      ],
      explanation: "Verse 15 says they will burn in it on the Day of Recompense. Verse 16 adds that they will not be absent from it.",
    },
    {
      id: "q51",
      question: "Why is the question 'And what can make you know what the Day of Judgment is?' repeated?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No soul can independently avail another soul anything", isCorrect: false },
        { id: "b", text: "To magnify the seriousness and enormity of that Day", isCorrect: true },
        { id: "c", text: "The command and authority that Day belong to Allah", isCorrect: false },
        { id: "d", text: "The Makkan audience's rejection of resurrection and accountability", isCorrect: false }
      ],
      explanation: "The repeated rhetorical question in verses 17–18 emphasizes that the reality of the Day exceeds ordinary human estimation.",
    },
    {
      id: "q52",
      question: "What limitation of created beings is stated in the final verse?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No soul can independently avail another soul anything", isCorrect: true },
        { id: "b", text: "The command and authority that Day belong to Allah", isCorrect: false },
        { id: "c", text: "The Makkan audience's rejection of resurrection and accountability", isCorrect: false },
        { id: "d", text: "No specific sound occasion of revelation is established in the source material", isCorrect: false }
      ],
      explanation: "Verse 19 denies independent power of one soul to benefit another on that Day; all authority belongs to Allah.",
    },
    {
      id: "q53",
      question: "What is the final declaration of Surah Al-Infitar?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The Makkan audience's rejection of resurrection and accountability", isCorrect: false },
        { id: "b", text: "No specific sound occasion of revelation is established in the source material", isCorrect: false },
        { id: "c", text: "Jamiʿ at-Tirmidhi 3333", isCorrect: false },
        { id: "d", text: "The command and authority that Day belong to Allah", isCorrect: true }
      ],
      explanation: "The final words وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ close the Surah with Allah's absolute sovereignty (82:19).",
    },
    {
      id: "q54",
      question: "What historical setting is associated with the Surah's message?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No specific sound occasion of revelation is established in the source material", isCorrect: false },
        { id: "b", text: "Jamiʿ at-Tirmidhi 3333", isCorrect: false },
        { id: "c", text: "The Makkan audience's rejection of resurrection and accountability", isCorrect: true },
        { id: "d", text: "Recite the Surahs that vividly portray the Day of Resurrection", isCorrect: false }
      ],
      explanation: "The supplied source's context describes the Surah as addressing Quraysh's denial of resurrection. This is a broad historical context, not a claim about a specific incident of revelation.",
    },
    {
      id: "q55",
      question: "Is there a firmly established, authentic report naming a single incident as the specific cause of revelation for the whole Surah?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Jamiʿ at-Tirmidhi 3333", isCorrect: false },
        { id: "b", text: "No specific sound occasion of revelation is established in the source material", isCorrect: true },
        { id: "c", text: "Recite the Surahs that vividly portray the Day of Resurrection", isCorrect: false },
        { id: "d", text: "The relevant narration is in Jamiʿ at-Tirmidhi 3333, not Sahih Muslim", isCorrect: false }
      ],
      explanation: "The Surah's Makkan setting and its response to denial of resurrection can be discussed, but a particular sabab al-nuzul should not be invented without a sound report.",
    },
    {
      id: "q56",
      question: "Which hadith explicitly mentions Al-Infitar together with two other short Surahs depicting the Resurrection?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Jamiʿ at-Tirmidhi 3333", isCorrect: true },
        { id: "b", text: "Recite the Surahs that vividly portray the Day of Resurrection", isCorrect: false },
        { id: "c", text: "The relevant narration is in Jamiʿ at-Tirmidhi 3333, not Sahih Muslim", isCorrect: false },
        { id: "d", text: "At-Takwir (81) and Al-Inshiqaq (84)", isCorrect: false }
      ],
      explanation: "The report from Ibn ʿUmar mentions At-Takwir, Al-Infitar, and Al-Inshiqaq. At-Tirmidhi calls it Hasan Gharib; Darussalam grades it Hasan. Some routes mention At-Takwir alone.",
    },
    {
      id: "q57",
      question: "What does the hadith in Jamiʿ at-Tirmidhi 3333 encourage the reader to do?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The relevant narration is in Jamiʿ at-Tirmidhi 3333, not Sahih Muslim", isCorrect: false },
        { id: "b", text: "At-Takwir (81) and Al-Inshiqaq (84)", isCorrect: false },
        { id: "c", text: "The signs of cosmic change lead directly to disclosure and recording of human deeds", isCorrect: false },
        { id: "d", text: "Recite the Surahs that vividly portray the Day of Resurrection", isCorrect: true }
      ],
      explanation: "The narration says that whoever wishes to see the Day of Resurrection as though witnessing it should recite At-Takwir, Al-Infitar, and Al-Inshiqaq. The grading is stated with the hadith reference.",
    },
    {
      id: "q58",
      question: "What correction should be made to the supplied context's hadith attribution?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "At-Takwir (81) and Al-Inshiqaq (84)", isCorrect: false },
        { id: "b", text: "The signs of cosmic change lead directly to disclosure and recording of human deeds", isCorrect: false },
        { id: "c", text: "The relevant narration is in Jamiʿ at-Tirmidhi 3333, not Sahih Muslim", isCorrect: true },
        { id: "d", text: "Gratitude, humility, and obedience rather than arrogance", isCorrect: false }
      ],
      explanation: "The source context attributes a recitation report to Sahih Muslim, but the well-known narration specifically naming Al-Infitar with At-Takwir and Al-Inshiqaq is Jamiʿ at-Tirmidhi 3333.",
    },
    {
      id: "q59",
      question: "Which other Surahs have closely related scenes of cosmic upheaval?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The signs of cosmic change lead directly to disclosure and recording of human deeds", isCorrect: false },
        { id: "b", text: "At-Takwir (81) and Al-Inshiqaq (84)", isCorrect: true },
        { id: "c", text: "Gratitude, humility, and obedience rather than arrogance", isCorrect: false },
        { id: "d", text: "No; it pairs Allah's generosity with a warning against denial and negligence", isCorrect: false }
      ],
      explanation: "These Surahs are linked by their vivid descriptions of the Last Day. Tirmidhi 3333 itself names these three Surahs together.",
    },
    {
      id: "q60",
      question: "How does Al-Infitar connect the created world with moral responsibility?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The signs of cosmic change lead directly to disclosure and recording of human deeds", isCorrect: true },
        { id: "b", text: "Gratitude, humility, and obedience rather than arrogance", isCorrect: false },
        { id: "c", text: "No; it pairs Allah's generosity with a warning against denial and negligence", isCorrect: false },
        { id: "d", text: "Live with awareness that actions are known and recorded", isCorrect: false }
      ],
      explanation: "The transition from verses 1–4 to verses 5 and 10–12 connects the upheaval of the universe with personal accountability.",
    },
    {
      id: "q61",
      question: "What lesson follows from the statement that Allah created and proportioned the human being?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No; it pairs Allah's generosity with a warning against denial and negligence", isCorrect: false },
        { id: "b", text: "Live with awareness that actions are known and recorded", isCorrect: false },
        { id: "c", text: "Choices and moral character have different final consequences", isCorrect: false },
        { id: "d", text: "Gratitude, humility, and obedience rather than arrogance", isCorrect: true }
      ],
      explanation: "Verses 6–8 remind people of their dependence on their Creator. The ethical response is gratitude and humility.",
    },
    {
      id: "q62",
      question: "Does the Surah teach that Allah's generosity makes wrongdoing consequence-free?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Live with awareness that actions are known and recorded", isCorrect: false },
        { id: "b", text: "Choices and moral character have different final consequences", isCorrect: false },
        { id: "c", text: "No; it pairs Allah's generosity with a warning against denial and negligence", isCorrect: true },
        { id: "d", text: "No created being has independent power to control another's outcome", isCorrect: false }
      ],
      explanation: "The question in verse 6 is followed by the rebuke in verse 9 and the description of recorded deeds and final outcomes.",
    },
    {
      id: "q63",
      question: "What is the most direct ethical application of the recording angels passage?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Choices and moral character have different final consequences", isCorrect: false },
        { id: "b", text: "Live with awareness that actions are known and recorded", isCorrect: true },
        { id: "c", text: "No created being has independent power to control another's outcome", isCorrect: false },
        { id: "d", text: "Surah Qaf 50:17–18", isCorrect: false }
      ],
      explanation: "Verses 10–12 encourage moral vigilance because deeds are not hidden from Allah's appointed recorders.",
    },
    {
      id: "q64",
      question: "What does the contrast between al-abrar and al-fujjar teach?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Choices and moral character have different final consequences", isCorrect: true },
        { id: "b", text: "No created being has independent power to control another's outcome", isCorrect: false },
        { id: "c", text: "Surah Qaf 50:17–18", isCorrect: false },
        { id: "d", text: "Surah Al-Mutaffifin 83:7–9 and 83:18–20", isCorrect: false }
      ],
      explanation: "Verses 13–14 distinguish the righteous from the wicked and describe contrasting outcomes.",
    },
    {
      id: "q65",
      question: "What does verse 19 teach about seeking help from created beings on the Last Day?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Surah Qaf 50:17–18", isCorrect: false },
        { id: "b", text: "Surah Al-Mutaffifin 83:7–9 and 83:18–20", isCorrect: false },
        { id: "c", text: "The Creator who made the world can bring about its transformation and resurrection", isCorrect: false },
        { id: "d", text: "No created being has independent power to control another's outcome", isCorrect: true }
      ],
      explanation: "The verse teaches the limits of created power. It does not deny that intercession occurs only by Allah's permission as explained elsewhere in the Qur'an.",
    },
    {
      id: "q66",
      question: "Which Qur'anic passage gives a parallel description of angels recording human speech and deeds?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Surah Al-Mutaffifin 83:7–9 and 83:18–20", isCorrect: false },
        { id: "b", text: "The Creator who made the world can bring about its transformation and resurrection", isCorrect: false },
        { id: "c", text: "Surah Qaf 50:17–18", isCorrect: true },
        { id: "d", text: "No; its main emphasis is belief, accountability, and moral warning", isCorrect: false }
      ],
      explanation: "Qaf 50:17–18 describes two receivers and states that no word is uttered except that a watcher is ready to record it, paralleling Al-Infitar 82:10–12.",
    },
    {
      id: "q67",
      question: "Which Qur'anic passage gives a parallel warning that deeds are recorded in a register?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The Creator who made the world can bring about its transformation and resurrection", isCorrect: false },
        { id: "b", text: "Surah Al-Mutaffifin 83:7–9 and 83:18–20", isCorrect: true },
        { id: "c", text: "No; its main emphasis is belief, accountability, and moral warning", isCorrect: false },
        { id: "d", text: "Strengthen faith in accountability and let it shape conduct", isCorrect: false }
      ],
      explanation: "Al-Mutaffifin describes the records of the wicked and the righteous, complementing Al-Infitar's description of noble recording angels.",
    },
    {
      id: "q68",
      question: "What does the Surah imply about the certainty of resurrection through the opening cosmic signs?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The Creator who made the world can bring about its transformation and resurrection", isCorrect: true },
        { id: "b", text: "No; its main emphasis is belief, accountability, and moral warning", isCorrect: false },
        { id: "c", text: "Strengthen faith in accountability and let it shape conduct", isCorrect: false },
        { id: "d", text: "Day of Judgment and human accountability", isCorrect: false }
      ],
      explanation: "The cosmic scenes in 82:1–4 demonstrate Allah's power; the following verses connect them to the resurrection and disclosure of deeds.",
    },
    {
      id: "q69",
      question: "Does Al-Infitar lay out detailed procedural rulings for prayer, fasting, or inheritance?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Strengthen faith in accountability and let it shape conduct", isCorrect: false },
        { id: "b", text: "Day of Judgment and human accountability", isCorrect: false },
        { id: "c", text: "The splitting open of the sky", isCorrect: false },
        { id: "d", text: "No; its main emphasis is belief, accountability, and moral warning", isCorrect: true }
      ],
      explanation: "The Surah is concise and eschatological. Ethical duties can be reinforced from it, but detailed legal procedures should not be attributed to it where it does not state them.",
    },
    {
      id: "q70",
      question: "What is a sound way to derive practical guidance from this Surah without inventing a legal ruling?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Day of Judgment and human accountability", isCorrect: false },
        { id: "b", text: "The splitting open of the sky", isCorrect: false },
        { id: "c", text: "Strengthen faith in accountability and let it shape conduct", isCorrect: true },
        { id: "d", text: "Nineteen verses", isCorrect: false }
      ],
      explanation: "The text clearly teaches creation, resurrection, recording, judgment, and divine sovereignty. These support moral vigilance, but not a fabricated specific fiqh rule.",
    }
    ],
    advanced: [
    {
      id: "q71",
      question: "What does the verb 'انفَطَرَتْ' mean in 82:1?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The stars or celestial bodies", isCorrect: false },
        { id: "b", text: "They scattered or were dispersed", isCorrect: false },
        { id: "c", text: "The seas", isCorrect: false },
        { id: "d", text: "It split open or cleft apart", isCorrect: true }
      ],
      explanation: "انفطرت is from the root ف ط ر and describes the sky splitting open at the onset of the Last Day.",
    },
    {
      id: "q72",
      question: "What is the meaning of 'الْكَوَاكِبُ' in 82:2?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They scattered or were dispersed", isCorrect: false },
        { id: "b", text: "The seas", isCorrect: false },
        { id: "c", text: "The stars or celestial bodies", isCorrect: true },
        { id: "d", text: "They were burst open or made to gush forth", isCorrect: false }
      ],
      explanation: "الكواكب refers to stars or heavenly bodies; the verse says they will scatter.",
    },
    {
      id: "q73",
      question: "What does the verb 'انتَثَرَتْ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The seas", isCorrect: false },
        { id: "b", text: "They scattered or were dispersed", isCorrect: true },
        { id: "c", text: "They were burst open or made to gush forth", isCorrect: false },
        { id: "d", text: "The graves", isCorrect: false }
      ],
      explanation: "انتثرت is from ن ث ر, conveying scattering or dispersal; it describes the stars in 82:2.",
    },
    {
      id: "q74",
      question: "What is the meaning of 'الْبِحَارُ'?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The seas", isCorrect: true },
        { id: "b", text: "They were burst open or made to gush forth", isCorrect: false },
        { id: "c", text: "The graves", isCorrect: false },
        { id: "d", text: "They were overturned or turned inside out", isCorrect: false }
      ],
      explanation: "البحار is the plural of بحر, meaning sea; it appears in 82:3.",
    },
    {
      id: "q75",
      question: "What does 'فُجِّرَتْ' convey in 82:3?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The graves", isCorrect: false },
        { id: "b", text: "They were overturned or turned inside out", isCorrect: false },
        { id: "c", text: "It brought forward or presented", isCorrect: false },
        { id: "d", text: "They were burst open or made to gush forth", isCorrect: true }
      ],
      explanation: "فجرت is from ف ج ر and in this context describes the seas being burst forth or made to overflow.",
    },
    {
      id: "q76",
      question: "What is the meaning of 'الْقُبُورُ'?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They were overturned or turned inside out", isCorrect: false },
        { id: "b", text: "It brought forward or presented", isCorrect: false },
        { id: "c", text: "The graves", isCorrect: true },
        { id: "d", text: "A soul or self", isCorrect: false }
      ],
      explanation: "القبور is the plural of قبر, meaning grave; it appears in 82:4.",
    },
    {
      id: "q77",
      question: "What does 'بُعْثِرَتْ' mean in the context of the graves?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "It brought forward or presented", isCorrect: false },
        { id: "b", text: "They were overturned or turned inside out", isCorrect: true },
        { id: "c", text: "A soul or self", isCorrect: false },
        { id: "d", text: "It deceived or deluded you", isCorrect: false }
      ],
      explanation: "بعثرت is a vivid verb for overturning or scattering what is inside; it describes the graves in 82:4.",
    },
    {
      id: "q78",
      question: "What is the meaning of 'أَحْضَرَتْ' in 82:5?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "It brought forward or presented", isCorrect: true },
        { id: "b", text: "A soul or self", isCorrect: false },
        { id: "c", text: "It deceived or deluded you", isCorrect: false },
        { id: "d", text: "The Generous or Noble", isCorrect: false }
      ],
      explanation: "أحضرت comes from ح ض ر, to be present or bring; each soul will know what it has brought forward.",
    },
    {
      id: "q79",
      question: "What does 'نَفْسٌ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "It deceived or deluded you", isCorrect: false },
        { id: "b", text: "The Generous or Noble", isCorrect: false },
        { id: "c", text: "He created you", isCorrect: false },
        { id: "d", text: "A soul or self", isCorrect: true }
      ],
      explanation: "نفس can mean soul, self, or person; in 82:5 it refers to each individual soul.",
    },
    {
      id: "q80",
      question: "What is the meaning of 'غَرَّكَ' in 82:6?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The Generous or Noble", isCorrect: false },
        { id: "b", text: "He created you", isCorrect: false },
        { id: "c", text: "It deceived or deluded you", isCorrect: true },
        { id: "d", text: "Then He proportioned you or made you well-formed", isCorrect: false }
      ],
      explanation: "غرّك comes from غ ر ر, conveying deception or delusion; the verse asks what deluded the human being concerning the Generous Lord.",
    },
    {
      id: "q81",
      question: "What does 'الْكَرِيمِ' mean as an attribute of the Lord in 82:6?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "He created you", isCorrect: false },
        { id: "b", text: "The Generous or Noble", isCorrect: true },
        { id: "c", text: "Then He proportioned you or made you well-formed", isCorrect: false },
        { id: "d", text: "Then He balanced or proportioned you", isCorrect: false }
      ],
      explanation: "الكريم is from ك ر م and conveys generosity, nobility, and honour. In the verse it describes the Lord.",
    },
    {
      id: "q82",
      question: "What is the meaning of 'خَلَقَكَ'?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "He created you", isCorrect: true },
        { id: "b", text: "Then He proportioned you or made you well-formed", isCorrect: false },
        { id: "c", text: "Then He balanced or proportioned you", isCorrect: false },
        { id: "d", text: "Form or shape", isCorrect: false }
      ],
      explanation: "خلقك is from خ ل ق, to create; verse 7 reminds the human being of Allah's act of creation.",
    },
    {
      id: "q83",
      question: "What does 'فَسَوَّاكَ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Then He balanced or proportioned you", isCorrect: false },
        { id: "b", text: "Form or shape", isCorrect: false },
        { id: "c", text: "He willed or desired", isCorrect: false },
        { id: "d", text: "Then He proportioned you or made you well-formed", isCorrect: true }
      ],
      explanation: "سوّى is from س و ي and carries the sense of making even, proportionate, or well-formed.",
    },
    {
      id: "q84",
      question: "What is the meaning of 'فَعَدَلَكَ' in 82:7?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Form or shape", isCorrect: false },
        { id: "b", text: "He willed or desired", isCorrect: false },
        { id: "c", text: "Then He balanced or proportioned you", isCorrect: true },
        { id: "d", text: "He assembled or fashioned you", isCorrect: false }
      ],
      explanation: "عدل is from ع د ل, associated with balance, proportion, and setting something aright; here it describes the human form.",
    },
    {
      id: "q85",
      question: "What does 'صُورَةٍ' mean in 82:8?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "He willed or desired", isCorrect: false },
        { id: "b", text: "Form or shape", isCorrect: true },
        { id: "c", text: "He assembled or fashioned you", isCorrect: false },
        { id: "d", text: "No indeed; a strong rebuke or rejection", isCorrect: false }
      ],
      explanation: "صورة comes from ص و ر and means form, shape, or image; the verse refers to the form in which Allah fashioned the human being.",
    },
    {
      id: "q86",
      question: "What is the meaning of 'شَاءَ'?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "He willed or desired", isCorrect: true },
        { id: "b", text: "He assembled or fashioned you", isCorrect: false },
        { id: "c", text: "No indeed; a strong rebuke or rejection", isCorrect: false },
        { id: "d", text: "You deny or declare to be false", isCorrect: false }
      ],
      explanation: "شاء is from ش ي ء and is the verb 'to will'; in 82:8 it refers to Allah's will in fashioning the human being.",
    },
    {
      id: "q87",
      question: "What does 'رَكَّبَكَ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "No indeed; a strong rebuke or rejection", isCorrect: false },
        { id: "b", text: "You deny or declare to be false", isCorrect: false },
        { id: "c", text: "Recompense, judgment, or the final accounting", isCorrect: false },
        { id: "d", text: "He assembled or fashioned you", isCorrect: true }
      ],
      explanation: "ركب is from ر ك ب, with the sense of joining or composing parts; in 82:8 it describes the formation of the human being.",
    },
    {
      id: "q88",
      question: "What is the meaning of 'كَلَّا' at the beginning of 82:9?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "You deny or declare to be false", isCorrect: false },
        { id: "b", text: "Recompense, judgment, or the final accounting", isCorrect: false },
        { id: "c", text: "No indeed; a strong rebuke or rejection", isCorrect: true },
        { id: "d", text: "Guardians or keepers", isCorrect: false }
      ],
      explanation: "كلا is a particle used for emphatic rejection or rebuke; it marks a forceful turn in the discourse.",
    },
    {
      id: "q89",
      question: "What does 'تُكَذِّبُونَ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Recompense, judgment, or the final accounting", isCorrect: false },
        { id: "b", text: "You deny or declare to be false", isCorrect: true },
        { id: "c", text: "Guardians or keepers", isCorrect: false },
        { id: "d", text: "Noble or honourable", isCorrect: false }
      ],
      explanation: "تكذبون is from ك ذ ب in Form II and means to deny or call something false; here it refers to denying the Day of Recompense.",
    },
    {
      id: "q90",
      question: "What is the contextual meaning of 'الدِّينِ' in 82:9?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Recompense, judgment, or the final accounting", isCorrect: true },
        { id: "b", text: "Guardians or keepers", isCorrect: false },
        { id: "c", text: "Noble or honourable", isCorrect: false },
        { id: "d", text: "Writers or recorders", isCorrect: false }
      ],
      explanation: "دين can have several meanings, including religion, obedience, and recompense. In this context, the Day of Recompense is intended.",
    },
    {
      id: "q91",
      question: "What does 'حَافِظِينَ' mean in 82:10?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Noble or honourable", isCorrect: false },
        { id: "b", text: "Writers or recorders", isCorrect: false },
        { id: "c", text: "They know", isCorrect: false },
        { id: "d", text: "Guardians or keepers", isCorrect: true }
      ],
      explanation: "حافظين is the plural of حافظ, from ح ف ظ, meaning one who guards, preserves, or keeps watch.",
    },
    {
      id: "q92",
      question: "What is the meaning of 'كِرَامًا' in 82:11?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Writers or recorders", isCorrect: false },
        { id: "b", text: "They know", isCorrect: false },
        { id: "c", text: "Noble or honourable", isCorrect: true },
        { id: "d", text: "You do or perform", isCorrect: false }
      ],
      explanation: "كراماً is the plural form related to كريم, from ك ر م; it describes the honourable status of the recording angels.",
    },
    {
      id: "q93",
      question: "What does 'كَاتِبِينَ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They know", isCorrect: false },
        { id: "b", text: "Writers or recorders", isCorrect: true },
        { id: "c", text: "You do or perform", isCorrect: false },
        { id: "d", text: "The righteous and dutiful", isCorrect: false }
      ],
      explanation: "كاتبين is the plural active participle of كاتب, from ك ت ب, meaning those who write or record.",
    },
    {
      id: "q94",
      question: "What is the meaning of 'يَعْلَمُونَ' in 82:12?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They know", isCorrect: true },
        { id: "b", text: "You do or perform", isCorrect: false },
        { id: "c", text: "The righteous and dutiful", isCorrect: false },
        { id: "d", text: "Bliss, comfort, or abundant delight", isCorrect: false }
      ],
      explanation: "يعلمون is from ع ل م, to know; the verse states that the recording angels know what people do.",
    },
    {
      id: "q95",
      question: "What does 'تَفْعَلُونَ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The righteous and dutiful", isCorrect: false },
        { id: "b", text: "Bliss, comfort, or abundant delight", isCorrect: false },
        { id: "c", text: "The wicked or persistently sinful", isCorrect: false },
        { id: "d", text: "You do or perform", isCorrect: true }
      ],
      explanation: "تفعلون is from ف ع ل, to do or perform; it refers broadly to people's actions in 82:12.",
    },
    {
      id: "q96",
      question: "What is the meaning of 'الْأَبْرَارَ' in 82:13?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Bliss, comfort, or abundant delight", isCorrect: false },
        { id: "b", text: "The wicked or persistently sinful", isCorrect: false },
        { id: "c", text: "The righteous and dutiful", isCorrect: true },
        { id: "d", text: "A blazing Fire", isCorrect: false }
      ],
      explanation: "الأبرار is the plural of بارّ, associated with ب ر ر; it describes people of righteousness and goodness.",
    },
    {
      id: "q97",
      question: "What does 'نَعِيمٍ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The wicked or persistently sinful", isCorrect: false },
        { id: "b", text: "Bliss, comfort, or abundant delight", isCorrect: true },
        { id: "c", text: "A blazing Fire", isCorrect: false },
        { id: "d", text: "They will burn in it or suffer its heat", isCorrect: false }
      ],
      explanation: "نعيم is from ن ع م and denotes blessing, ease, and bliss; it describes the righteous' outcome in 82:13.",
    },
    {
      id: "q98",
      question: "What is the meaning of 'الْفُجَّارَ' in 82:14?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The wicked or persistently sinful", isCorrect: true },
        { id: "b", text: "A blazing Fire", isCorrect: false },
        { id: "c", text: "They will burn in it or suffer its heat", isCorrect: false },
        { id: "d", text: "Absent or missing", isCorrect: false }
      ],
      explanation: "الفجار is the plural of فاجر, from ف ج ر; in this context it describes those who transgress and reject the truth.",
    },
    {
      id: "q99",
      question: "What does 'جَحِيمٍ' mean?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "They will burn in it or suffer its heat", isCorrect: false },
        { id: "b", text: "Absent or missing", isCorrect: false },
        { id: "c", text: "Made you know or informed you", isCorrect: false },
        { id: "d", text: "A blazing Fire", isCorrect: true }
      ],
      explanation: "جحيم denotes a fiercely blazing fire; it describes the destination of the wicked in 82:14.",
    },
    {
      id: "q100",
      question: "What is the meaning of 'يَصْلَوْنَهَا' in 82:15?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Absent or missing", isCorrect: false },
        { id: "b", text: "Made you know or informed you", isCorrect: false },
        { id: "c", text: "They will burn in it or suffer its heat", isCorrect: true },
        { id: "d", text: "You possess, control, or have power over", isCorrect: false }
      ],
      explanation: "يصلونها is from ص ل ي, used for entering or experiencing the heat of the Fire; the pronoun refers to Hellfire.",
    },
    {
      id: "q101",
      question: "What does 'غَائِبِينَ' mean in 82:16?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Made you know or informed you", isCorrect: false },
        { id: "b", text: "Absent or missing", isCorrect: true },
        { id: "c", text: "You possess, control, or have power over", isCorrect: false },
        { id: "d", text: "Anything or a thing", isCorrect: false }
      ],
      explanation: "غائبين is the plural of غائب, from غ ي ب, meaning absent; the verse says they will not be absent from it.",
    },
    {
      id: "q102",
      question: "What is the meaning of 'أَدْرَاكَ' in the repeated question of 82:17–18?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Made you know or informed you", isCorrect: true },
        { id: "b", text: "You possess, control, or have power over", isCorrect: false },
        { id: "c", text: "Anything or a thing", isCorrect: false },
        { id: "d", text: "The command, affair, or authority", isCorrect: false }
      ],
      explanation: "أدرى is from د ر ي and occurs in the Qur'anic expression وما أدراك, asking what could make the listener comprehend the reality of the matter.",
    },
    {
      id: "q103",
      question: "What does 'تَمْلِكُ' mean in 82:19?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "Anything or a thing", isCorrect: false },
        { id: "b", text: "The command, affair, or authority", isCorrect: false },
        { id: "c", text: "It split open or cleft apart", isCorrect: false },
        { id: "d", text: "You possess, control, or have power over", isCorrect: true }
      ],
      explanation: "تملك is from م ل ك, conveying possession, authority, or control; the verse denies that one soul has power to avail another.",
    },
    {
      id: "q104",
      question: "What is the meaning of 'شَيْئًا' in 82:19?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "The command, affair, or authority", isCorrect: false },
        { id: "b", text: "It split open or cleft apart", isCorrect: false },
        { id: "c", text: "Anything or a thing", isCorrect: true },
        { id: "d", text: "The stars or celestial bodies", isCorrect: false }
      ],
      explanation: "شيئاً is from ش ي ء and means a thing or anything; the verse says no soul can avail another anything.",
    },
    {
      id: "q105",
      question: "What does 'الْأَمْرُ' mean in the final phrase of the Surah?",
      arabic: "",
      rootLetters: "",
      options: [
        { id: "a", text: "It split open or cleft apart", isCorrect: false },
        { id: "b", text: "The command, affair, or authority", isCorrect: true },
        { id: "c", text: "The stars or celestial bodies", isCorrect: false },
        { id: "d", text: "They scattered or were dispersed", isCorrect: false }
      ],
      explanation: "الأمر is from أ م ر and can mean command, affair, or matter; in 82:19 it points to Allah's sole authority on that Day.",
    }
    ],
  },
};
