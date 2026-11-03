import type { QuizCategory } from "@/types/quiz";

export const madhabCategory: QuizCategory = {
  id: "madhab",
  title: "Madhabs (Schools of Jurisprudence)",
  description: "The Four Great Imams, Shared Fundamentals, and Methodology of Fiqh",
  icon: "book-open",
  levels: {
    easy: [
      {
        id: 1,
        question: "What is a Madhab in Islamic jurisprudence?",
        options: [
          "A school of thought or methodological framework for understanding Islamic law",
          "A separate sect in Islam",
          "A modern political movement",
          "A regional dialect of Arabic"
        ],
        correctAnswer: "A school of thought or methodological framework for understanding Islamic law",
        explanation: "A Madhab is a systematic, historically verified methodology established by scholarly Imams to deduce legal rulings from the Quran and authentic Sunnah."
      },
      {
        id: 2,
        question: "How many major Sunni schools of jurisprudence (Madhabs) are widely preserved and recognized today?",
        options: [
          "Two",
          "Four",
          "Seven",
          "Twelve"
        ],
        correctAnswer: "Four",
        explanation: "The four major recognized Sunni Madhabs are Hanafi, Maliki, Shafi'i, and Hanbali, named after their respective founder-scholars."
      },
      {
        id: 3,
        question: "Who was Imam Abu Hanifah, the founder of the Hanafi school of thought?",
        options: [
          "Al-Nu'man ibn Thabit, born in Kufa, Iraq",
          "Malik ibn Anas, born in Madinah",
          "Muhammad ibn Idris, born in Gaza",
          "Ahmad ibn Hanbal, born in Baghdad"
        ],
        correctAnswer: "Al-Nu'man ibn Thabit, born in Kufa, Iraq",
        explanation: "Imam Abu Hanifah (Al-Nu'man ibn Thabit, 80–150 AH) was a Tabi'i scholar based in Kufa who laid the groundwork for the Hanafi Madhab."
      },
      {
        id: 4,
        question: "Who was Imam Malik ibn Anas, the founder of the Maliki school?",
        options: [
          "The great scholar of Madinah (Imam Dar al-Hijrah)",
          "The Chief Justice of Baghdad",
          "The governor of Makkah",
          "A scholar born in Damascus"
        ],
        correctAnswer: "The great scholar of Madinah (Imam Dar al-Hijrah)",
        explanation: "Imam Malik (93–179 AH) spent his life in Madinah, compiling the famous Hadith work Al-Muwatta and serving as the city's foremost jurist."
      },
      {
        id: 5,
        question: "Who was Imam Muhammad ibn Idris al-Shafi'i?",
        options: [
          "The master jurist who synthesized the methodology of Hadith and legal deduction (Usool al-Fiqh)",
          "A ruler of the Abbasid empire",
          "A famous physician in Kufa",
          "The compiler of Sahih al-Bukhari"
        ],
        correctAnswer: "The master jurist who synthesized the methodology of Hadith and legal deduction (Usool al-Fiqh)",
        explanation: "Imam al-Shafi'i (150–204 AH) authored Al-Risalah, establishing the formal discipline of Usool al-Fiqh."
      },
      {
        id: 6,
        question: "Who was Imam Ahmad ibn Hanbal?",
        options: [
          "The great Imam of Ahl al-Sunnah and compiler of the massive Hadith collection Musnad Ahmad",
          "The founder of the Mu'tazilah school",
          "A judge in Umayyad Spain",
          "A scholar of philosophy in Basra"
        ],
        correctAnswer: "The great Imam of Ahl al-Sunnah and compiler of the massive Hadith collection Musnad Ahmad",
        explanation: "Imam Ahmad ibn Hanbal (164–241 AH) was renowned for his vast Hadith knowledge, piety, and steadfastness upon the Sunnah."
      },
      {
        id: 7,
        question: "Do all four major Imams agree on the primary sources of Islamic jurisprudence?",
        options: [
          "Yes, all four agree that the Noble Quran and authentic Sunnah are the primary foundation of law",
          "No, each Imam used a completely different religious text",
          "Only Imam Ahmad used the Quran",
          "They disagreed on the prophethood of Muhammad (PBUH)"
        ],
        correctAnswer: "Yes, all four agree that the Noble Quran and authentic Sunnah are the primary foundation of law",
        explanation: "All four Imams unanimously agree that the Quran and authentic Sunnah are the supreme, non-negotiable sources of Islamic guidance."
      },
      {
        id: 8,
        question: "What primary benefit does studying a traditional Madhab offer a new Muslim?",
        options: [
          "It provides a structured, step-by-step path for daily practice and protects against information overload",
          "It allows them to abandon daily prayers",
          "It mandates that they learn five languages immediately",
          "It teaches them to criticize other Muslims"
        ],
        correctAnswer: "It provides a structured, step-by-step path for daily practice and protects against information overload",
        explanation: "For beginners, a Madhab acts as a curated roadmap that prevents paralysis by choice when learning core duties like prayer and purification."
      },
      {
        id: 9,
        question: "What is the attitude of all four major Imams regarding religious innovations (Bid'ah) and Shirk?",
        options: [
          "They all strictly forbade Bid'ah and Shirk, upholding pure Monotheism (Tawheed)",
          "They encouraged creating new rituals",
          "They permitted praying to graves",
          "They considered Bid'ah superior to Sunnah"
        ],
        correctAnswer: "They all strictly forbade Bid'ah and Shirk, upholding pure Monotheism (Tawheed)",
        explanation: "Every single one of the four Imams fought against Bid'ah and Shirk, commanding strict adherence to authentic prophetic Sunnah."
      },
      {
        id: 10,
        question: "What did Imam Shafi'i famously say about authentic Hadith versus his own personal opinion?",
        options: [
          "'If a Hadith is authentic, that is my Madhab.'",
          "'Follow my word over any Hadith.'",
          "'Hadiths are only for historians.'",
          "'Ignore Hadiths that contradict local culture.'"
        ],
        correctAnswer: "'If a Hadith is authentic, that is my Madhab.'",
        explanation: "Imam al-Shafi'i explicitly stated: 'If a Hadith is sound, then it is my position,' showing total submission to authentic Sunnah."
      },
      {
        id: 11,
        question: "What did Imam Malik say while pointing to the grave of Prophet Muhammad (PBUH) in Madinah?",
        options: [
          "'Everyone's word can be accepted or rejected, except the inhabitant of this grave (PBUH).'",
          "'My books are error-free.'",
          "'Only scholars of Kufa have truth.'",
          "'Reject all previous traditions.'"
        ],
        correctAnswer: "'Everyone's word can be accepted or rejected, except the inhabitant of this grave (PBUH).'",
        explanation: "Imam Malik emphasized that no human being is infallible except the Messenger of Allah (peace be upon him)."
      },
      {
        id: 12,
        question: "What did Imam Abu Hanifah state regarding taking his legal rulings?",
        options: [
          "'It is not permissible for anyone to adopt our opinion without knowing where we derived it from.'",
          "'Accept my rulings without asking for proof.'",
          "'My rulings supersede prophetic Hadith.'",
          "'Do not read the Quran for evidence.'"
        ],
        correctAnswer: "'It is not permissible for anyone to adopt our opinion without knowing where we derived it from.'",
        explanation: "Imam Abu Hanifah warned against blind adherence, stressing that legal rulings must be rooted in textual proof."
      },
      {
        id: 13,
        question: "What did Imam Ahmad ibn Hanbal instruct his students concerning blind imitation (Taqlid)?",
        options: [
          "'Do not follow my opinion blindly, nor Malik's, nor Shafi'i's; take from where they took (Quran and Sunnah).'",
          "'Follow my book exclusively.'",
          "'Never study Hadith directly.'",
          "'Imitate local rulers without questioning.'"
        ],
        correctAnswer: "'Do not follow my opinion blindly, nor Malik's, nor Shafi'i's; take from where they took (Quran and Sunnah).'",
        explanation: "Imam Ahmad urged believers to return to the original sources—the Quran and authentic Hadith—rather than blindly imitating personalities."
      },
      {
        id: 14,
        question: "What key lesson does the study of valid scholarly differences (Ikhtilaf) teach veteran Muslims?",
        options: [
          "It cultivates deep humility and dismantles blind tribalism (Ta'assub)",
          "It proves that religion is arbitrary",
          "It encourages arrogance over beginners",
          "It promotes splitting into hostile groups"
        ],
        correctAnswer: "It cultivates deep humility and dismantles blind tribalism (Ta'assub)",
        explanation: "Understanding legitimate Ikhtilaf reveals the breadth of Islamic scholarship and cures intellectual stagnation and fanatical partisanship."
      },
      {
        id: 15,
        question: "What is the term for blind, fanatical adherence to a single opinion despite clear proof to the contrary?",
        options: [
          "Ta'assub",
          "Ijtihad",
          "Tawheed",
          "Tazkiyah"
        ],
        correctAnswer: "Ta'assub",
        explanation: "Ta'assub refers to rigid partisanship or fanaticism, which all four Imams explicitly condemned."
      },
      {
        id: 16,
        question: "What is 'Ijtihad' in Islamic law?",
        options: [
          "The total effort made by a qualified jurist to deduce a legal ruling from primary sources",
          "Memorizing the Quran without understanding",
          "Creating new religious practices",
          "Translating texts into foreign languages"
        ],
        correctAnswer: "The total effort made by a qualified jurist to deduce a legal ruling from primary sources",
        explanation: "Ijtihad is the rigorous process of legal deduction performed by scholars who possess the necessary linguistic and textual qualifications."
      },
      {
        id: 17,
        question: "What major compilation of Hadith was produced by Imam Malik?",
        options: [
          "Al-Muwatta",
          "Sahih al-Bukhari",
          "Sunan Abu Dawud",
          "Jami al-Tirmidhi"
        ],
        correctAnswer: "Al-Muwatta",
        explanation: "Al-Muwatta ('The Approved Path') is one of the earliest and most authentic collections of Hadith and legal rulings of the Madinah scholars."
      },
      {
        id: 18,
        question: "When evaluating which Madhab or opinion to follow, what logic should guide a Muslim?",
        options: [
          "Choosing the guidance most strictly aligned with authentic Sunnah and free from Bid'ah and Shirk",
          "Choosing whatever is most popular on social media",
          "Following whichever opinion requires the least effort",
          "Choosing based on political affiliation"
        ],
        correctAnswer: "Choosing the guidance most strictly aligned with authentic Sunnah and free from Bid'ah and Shirk",
        explanation: "The ultimate criterion for any Muslim is adherence to the unadulterated Sunnah of the Prophet (PBUH) and avoidance of innovation."
      },
      {
        id: 19,
        question: "Are the differences among the four major Madhabs based on fundamental creed (Aqeedah) or secondary practical rulings (Furu')?",
        options: [
          "Secondary practical rulings (Furu')",
          "Fundamental creed (Aqeedah)",
          "Belief in Allah's existence",
          "The pillars of Islam"
        ],
        correctAnswer: "Secondary practical rulings (Furu')",
        explanation: "The four Imams held the exact same core Islamic creed (Aqeedah); their minor differences were confined to legal applications and secondary matters (Furu')."
      },
      {
        id: 20,
        question: "What was the relationship between Imam al-Shafi'i and Imam Malik?",
        options: [
          "Imam al-Shafi'i was a devoted student of Imam Malik",
          "They were fierce enemies",
          "They lived 500 years apart",
          "Imam Malik was a student of Imam al-Shafi'i"
        ],
        correctAnswer: "Imam al-Shafi'i was a devoted student of Imam Malik",
        explanation: "Imam al-Shafi'i traveled to Madinah and studied Al-Muwatta directly under Imam Malik, holding him in immense respect."
      },
      {
        id: 21,
        question: "What was the relationship between Imam Ahmad ibn Hanbal and Imam al-Shafi'i?",
        options: [
          "Imam Ahmad was a prominent student of Imam al-Shafi'i",
          "They belonged to opposing non-Muslim sects",
          "They never met each other",
          "Imam al-Shafi'i rejected Imam Ahmad's Hadith knowledge"
        ],
        correctAnswer: "Imam Ahmad was a prominent student of Imam al-Shafi'i",
        explanation: "Imam Ahmad studied jurisprudence and Usul under Imam al-Shafi'i in Baghdad, and Shafi'i highly praised Ahmad's piety and Hadith mastery."
      },
      {
        id: 22,
        question: "How did the early Imams view one another despite their legal disagreements?",
        options: [
          "With immense mutual respect, brotherly love, and recognition of piety",
          "They declared each other to be outside Islam",
          "They refused to pray behind one another",
          "They wrote political attacks against each other"
        ],
        correctAnswer: "With immense mutual respect, brotherly love, and recognition of piety",
        explanation: "The Imams set a noble example of brotherhood, praying behind one another and praising each other's knowledge and devotion."
      },
      {
        id: 23,
        question: "What is 'Usool al-Fiqh'?",
        options: [
          "The principles and methodology of Islamic jurisprudence",
          "The history of Islamic architecture",
          "The rules of Arabic recitation (Tajweed)",
          "The science of astronomical calculation"
        ],
        correctAnswer: "The principles and methodology of Islamic jurisprudence",
        explanation: "Usool al-Fiqh is the methodology used by scholars to extract practical legal rules from textual sources."
      },
      {
        id: 24,
        question: "What is 'Consensus' (Ijma') in Islamic legal methodology?",
        options: [
          "The unanimous agreement of qualified Muslim jurists of a particular era on a religious ruling",
          "The vote of the general public",
          "An agreement between political rulers",
          "A decision made by a single town elder"
        ],
        correctAnswer: "The unanimous agreement of qualified Muslim jurists of a particular era on a religious ruling",
        explanation: "Ijma' is recognized by all four Madhabs as a binding third source of Islamic law after Quran and authentic Sunnah."
      },
      {
        id: 25,
        question: "What is 'Qiyas' in Islamic jurisprudence?",
        options: [
          "Analogical reasoning connecting a new case to an established text based on a shared effective cause ('Illah)",
          "Personal guesswork without evidence",
          "Customary village traditions",
          "Rejecting texts in favor of modern philosophy"
        ],
        correctAnswer: "Analogical reasoning connecting a new case to an established text based on a shared effective cause ('Illah)",
        explanation: "Qiyas is the structured method of applying existing Quranic or Hadith rulings to contemporary situations with identical underlying logic."
      },
      {
        id: 26,
        question: "Why is a structured Madhab helpful for preventing extremism in new Muslims?",
        options: [
          "It connects them to mainstream scholarly consensus and filters out radical, isolated modern interpretations",
          "It enforces total isolation from society",
          "It requires them to join political movements",
          "It teaches them to disregard classical texts"
        ],
        correctAnswer: "It connects them to mainstream scholarly consensus and filters out radical, isolated modern interpretations",
        explanation: "Traditional Madhabs anchor learners to centuries of balanced scholarly consensus, safeguarding them from fringe extremist rhetoric."
      },
      {
        id: 27,
        question: "Did any of the four Imams claim to be infallible?",
        options: [
          "No, none of them claimed infallibility; all emphasized returning to authentic Hadith",
          "Yes, Imam Abu Hanifah claimed infallibility",
          "Yes, Imam Malik claimed infallibility",
          "Yes, all four claimed to receive direct divine revelation"
        ],
        correctAnswer: "No, none of them claimed infallibility; all emphasized returning to authentic Hadith",
        explanation: "Infallibility ('Ismah) belongs exclusively to Prophets; the four Imams explicitly stated their rulings were open to correction by authentic proof."
      },
      {
        id: 28,
        question: "Which collection of Hadith is the primary Hadith source compiled directly by Imam Ahmad?",
        options: [
          "Musnad Ahmad",
          "Sahih al-Bukhari",
          "Sunan al-Nasa'i",
          "Sunan Ibn Majah"
        ],
        correctAnswer: "Musnad Ahmad",
        explanation: "Musnad Ahmad ibn Hanbal is one of the largest Hadith encyclopedias in history, containing over 27,000 narrations."
      },
      {
        id: 29,
        question: "What is the primary objective of Islamic legal rulings (Maqasid al-Shariah)?",
        options: [
          "To preserve religion, life, intellect, lineage, and wealth",
          "To accumulate national tax revenues",
          "To enforce cultural customs of Arabia",
          "To restrict human thought"
        ],
        correctAnswer: "To preserve religion, life, intellect, lineage, and wealth",
        explanation: "All four Madhabs operate within the framework of preserving the five essential human rights and needs (Maqasid al-Shariah)."
      },
      {
        id: 30,
        question: "Why should Muslims prioritize commonalities among Madhabs before focusing on minor differences?",
        options: [
          "Because 90%+ of core acts of worship and morals are identical, establishing unity upon Tawheed and Sunnah",
          "Because differences are illegal to discuss",
          "Because the Madhabs contradict each other entirely",
          "Because scholars forbid asking questions"
        ],
        correctAnswer: "Because 90%+ of core acts of worship and morals are identical, establishing unity upon Tawheed and Sunnah",
        explanation: "The Madhabs agree on all core fundamentals of Islam; focusing first on shared truths builds a strong foundation free from sectarian strife."
      },
      {
        id: 31,
        question: "What is 'Bid'ah' in Islamic terminology?",
        options: [
          "An invented practice introduced into the religion of Islam without textual authority from Quran or Sunnah",
          "Modern technological inventions like cars and phones",
          "Translating the Quran into English",
          "Building brick houses"
        ],
        correctAnswer: "An invented practice introduced into the religion of Islam without textual authority from Quran or Sunnah",
        explanation: "Bid'ah specifically refers to innovations added into religious worship (Ibadah) that lack backing from the Prophet (PBUH) or his Companions."
      },
      {
        id: 32,
        question: "What was the stance of Prophet Muhammad (PBUH) regarding religious innovations?",
        options: [
          "'Every innovation is misguidance, and every misguidance is in the Fire.'",
          "'Innovate whatever makes worship easier.'",
          "'Culture overrides religious text.'",
          "'Inventions in worship are praiseworthy.'"
        ],
        correctAnswer: "'Every innovation is misguidance, and every misguidance is in the Fire.'",
        explanation: "In Sahih Muslim 867, the Prophet (PBUH) delivered this warning in his Friday khutbahs, establishing the strict rejection of Bid'ah."
      },
      {
        id: 33,
        question: "Who was Abu Hanifah's primary student who served as the Chief Judge (Qadi al-Qudat) of the Abbasid Caliphate?",
        options: [
          "Qadi Abu Yusuf",
          "Imam al-Bukhari",
          "Imam al-Ghazali",
          "Imam al-Nawawi"
        ],
        correctAnswer: "Qadi Abu Yusuf",
        explanation: "Qadi Abu Yusuf (RA) was the top student of Abu Hanifah who codified and spread the Hanafi school across the Abbasid state."
      },
      {
        id: 34,
        question: "Who was Muhammad ibn al-Hasan al-Shaybani?",
        options: [
          "The key disciple of Abu Hanifah who also studied under Imam Malik and authored foundational Hanafi legal texts",
          "A ruler of Andalus",
          "A scholar of medicine in Cairo",
          "The governor of Makkah"
        ],
        correctAnswer: "The key disciple of Abu Hanifah who also studied under Imam Malik and authored foundational Hanafi legal texts",
        explanation: "Imam al-Shaybani played a central role in transmitting Hanafi fiqh and bridging Kufan and Madinan scholarship."
      },
      {
        id: 35,
        question: "Which city is famously known as the home of the Prophet's Sunnah and the foundation of Imam Malik's Madhab?",
        options: [
          "Madinah al-Munawwarah",
          "Baghdad",
          "Damascus",
          "Cairo"
        ],
        correctAnswer: "Madinah al-Munawwarah",
        explanation: "Madinah was the sanctuary where the Prophet (PBUH) lived and established the first Islamic society, serving as Imam Malik's reference point."
      },
      {
        id: 36,
        question: "What is 'Taqlid' in Islamic jurisprudence?",
        options: [
          "Following the legal rulings of a qualified jurist without personally performing independent text extraction",
          "Rejecting all historical scholars",
          "Creating new religious laws",
          "Converting to a new religion"
        ],
        correctAnswer: "Following the legal rulings of a qualified jurist without personally performing independent text extraction",
        explanation: "Taqlid is the standard practice for non-scholars who rely on expert jurists to guide their daily practice accurately."
      }
    ],
    intermediate: [
      {
        id: 37,
        question: "What was the historical context of Kufa that influenced Imam Abu Hanifah's legal methodology?",
        options: [
          "It was a rapid expansion zone with diverse new situations, requiring rigorous juristic reasoning (Ra'y) rooted in Hadith",
          "It was an isolated desert village with no trade",
          "It was ruled by Byzantine emperors",
          "It had no access to Arabic language"
        ],
        correctAnswer: "It was a rapid expansion zone with diverse new situations, requiring rigorous juristic reasoning (Ra'y) rooted in Hadith",
        explanation: "Kufa's complex urban environment required legal scholars to address emerging modern dilemmas using structured legal principles."
      },
      {
        id: 38,
        question: "What does 'Amal Ahl al-Madinah' mean in the methodology of Imam Malik?",
        options: [
          "The continuous living practice of the people of Madinah, considered by Malik as a powerful mass transmission of Sunnah",
          "The political laws of the governor of Madinah",
          "The market prices in Madinah",
          "The poetry written by Madinan poets"
        ],
        correctAnswer: "The continuous living practice of the people of Madinah, considered by Malik as a powerful mass transmission of Sunnah",
        explanation: "Imam Malik prioritized the widespread practical consensus of Madinah's scholars as a direct living reflection of prophetic practice."
      },
      {
        id: 39,
        question: "Why did Imam al-Shafi'i write his landmark book 'Al-Risalah'?",
        options: [
          "To codify the universal rules of Usool al-Fiqh and harmonize the School of Hadith with the School of Legal Reasoning",
          "To collect stories of past kings",
          "To record astronomical observations",
          "To refute Arabic grammar rules"
        ],
        correctAnswer: "To codify the universal rules of Usool al-Fiqh and harmonize the School of Hadith with the School of Legal Reasoning",
        explanation: "Al-Risalah was the first formal work in history to define how Quran, Sunnah, Ijma', and Qiyas interact systematically."
      },
      {
        id: 40,
        question: "What test of steadfastness did Imam Ahmad ibn Hanbal endure during the Mihnah (Inquisition)?",
        options: [
          "He was imprisoned and tortured for refusing to accept the Mu'tazilah heresy that the Quran was created",
          "He was exiled for refusing to collect taxes",
          "He was attacked for translating books",
          "He was jailed for trading in the market"
        ],
        correctAnswer: "He was imprisoned and tortured for refusing to accept the Mu'tazilah heresy that the Quran was created",
        explanation: "Imam Ahmad stood firm despite physical torture, maintaining that the Quran is the uncreated Word of Allah, preserving pure Sunni creed."
      },
      {
        id: 41,
        question: "What is 'Istihsan' in Hanafi legal theory?",
        options: [
          "Juristic preference to depart from a strict Qiyas to a stronger, more equitable proof or necessity",
          "Following personal desires without evidence",
          "Adopting non-Muslim laws",
          "Rejecting Quranic commands"
        ],
        correctAnswer: "Juristic preference to depart from a strict Qiyas to a stronger, more equitable proof or necessity",
        explanation: "Istihsan allows a jurist to choose a nuanced alternative ruling when strict analogy produces an impractical or harmful outcome."
      },
      {
        id: 42,
        question: "What is 'Maslahah Mursalah' in Maliki jurisprudence?",
        options: [
          "Consideration of public interest or welfare that aligns with Shariah principles where no specific text exists",
          "A tax levied on foreign merchants",
          "A type of military defense pact",
          "A financial interest rate"
        ],
        correctAnswer: "Consideration of public interest or welfare that aligns with Shariah principles where no specific text exists",
        explanation: "Imam Malik utilized public benefit (Maslahah) to solve societal issues, provided it did not violate explicit Quran or Sunnah texts."
      },
      {
        id: 43,
        question: "How does Islamic legal theory treat 'Sadd al-Dhara'i' (Blocking the Means to Evil)?",
        options: [
          "Preventing lawful actions if they inevitably lead to a prohibited harm or sin",
          "Allowing all actions regardless of consequences",
          "Encouraging suspicious behavior",
          "Restricting trade with foreign nations"
        ],
        correctAnswer: "Preventing lawful actions if they inevitably lead to a prohibited harm or sin",
        explanation: "Sadd al-Dhara'i is a principle recognized across Madhabs to prevent loopholes that lead to haram outcomes."
      },
      {
        id: 44,
        question: "What is 'Urf' (Customary Practice) as a secondary legal consideration in Fiqh?",
        options: [
          "Local societal customs that are accepted as long as they do not contradict divine revelation",
          "Pre-Islamic pagan rituals",
          "Foreign military practices",
          "Any modern fashion trend"
        ],
        correctAnswer: "Local societal customs that are accepted as long as they do not contradict divine revelation",
        explanation: "Valid local customs ('Urf) are respected in Islamic law to determine secondary details like contract standards and gift norms."
      },
      {
        id: 45,
        question: "Why did Imam al-Shafi'i develop an 'Old School' (in Iraq) and a 'New School' (in Egypt)?",
        options: [
          "He revised several legal rulings after encountering new Hadiths and social contexts in Egypt",
          "He changed his religious creed completely",
          "He lost his books in a flood",
          "He wanted to create two conflicting sects"
        ],
        correctAnswer: "He revised several legal rulings after encountering new Hadiths and social contexts in Egypt",
        explanation: "Imam al-Shafi'i demonstrated dynamic scholarship by updating rulings when presented with stronger evidence and context in Egypt."
      },
      {
        id: 46,
        question: "What major factor accounts for most differences in legal rulings between the early Imams?",
        options: [
          "Differences in Hadith authentication criteria, linguistic interpretation, and regional availability of narrations",
          "Personal rivalry and hatred",
          "Desire to appease political rulers",
          "Rejection of the Prophet's teachings"
        ],
        correctAnswer: "Differences in Hadith authentication criteria, linguistic interpretation, and regional availability of narrations",
        explanation: "Before Hadiths were compiled into centralized books, geographical spread meant Imams evaluated texts based on regional transmission."
      },
      {
        id: 47,
        question: "How does deep study of Usool al-Fiqh assist veteran Muslims facing modern complex dilemmas?",
        options: [
          "It equips them with foundational principles to understand how eternal Shariah values apply to novel situations",
          "It allows them to discard old rulings entirely",
          "It forces them to reject modern technology",
          "It turns them into political activists"
        ],
        correctAnswer: "It equips them with foundational principles to understand how eternal Shariah values apply to novel situations",
        explanation: "Usool provides the intellectual toolset to navigate contemporary bioethics, finance, and technology while remaining grounded in revelation."
      },
      {
        id: 48,
        question: "What is the status of a scholar who performs Ijtihad and makes a mistake, according to authentic Hadith?",
        options: [
          "He receives one reward for his sincere effort",
          "He receives ten punishments",
          "He is committed to the Fire",
          "His scholarship is revoked forever"
        ],
        correctAnswer: "He receives one reward for his sincere effort",
        explanation: "Sahih al-Bukhari 7352 states that a qualified judge who strives and reaches a correct verdict gets two rewards, while if he errs he gets one reward."
      },
      {
        id: 49,
        question: "What is the status of a scholar who performs Ijtihad and reaches the correct conclusion?",
        options: [
          "He receives two rewards (one for effort, one for accuracy)",
          "He receives a single reward",
          "He is crowned king",
          "He receives no spiritual reward"
        ],
        correctAnswer: "He receives two rewards (one for effort, one for accuracy)",
        explanation: "The Prophet (PBUH) explained that sound analysis yielding the correct truth earns a double reward from Allah."
      },
      {
        id: 50,
        question: "What is 'Istishab' in Islamic legal methodology?",
        options: [
          "Presumption of continuity: assuming a state of affairs remains valid until proven otherwise",
          "Canceling all existing laws",
          "Assuming everyone is guilty until proven innocent",
          "Creating new taxes"
        ],
        correctAnswer: "Presumption of continuity: assuming a state of affairs remains valid until proven otherwise",
        explanation: "Istishab establishes that original purity or innocence remains the default baseline unless clear evidence proves a change."
      },
      {
        id: 51,
        question: "What is the Hanbali Madhab's approach to weak (Da'if) Hadiths compared to pure personal opinion (Ra'y)?",
        options: [
          "Imam Ahmad preferred a weak Hadith (not fabricated) over pure unbacked human speculation",
          "He preferred human speculation over any Hadith",
          "He rejected all Hadiths except five",
          "He treated weak Hadiths as identical to Sahih"
        ],
        correctAnswer: "Imam Ahmad preferred a weak Hadith (not fabricated) over pure unbacked human speculation",
        explanation: "Imam Ahmad prioritized even mildly weak narrations over pure analytical deduction, preferring text over personal opinion."
      },
      {
        id: 52,
        question: "What was the famous stance of Ibn al-Qayyim regarding changes in legal verdicts (Fatwa)?",
        options: [
          "Fatwas can change according to time, place, customs, and circumstances, while foundational texts remain eternal",
          "Fatwas can never change under any circumstance",
          "The Quran changes every century",
          "Scholars should invent new creeds"
        ],
        correctAnswer: "Fatwas can change according to time, place, customs, and circumstances, while foundational texts remain eternal",
        explanation: "Ibn al-Qayyim highlighted that practical application (Fatwa) adapts to context while core Shariah principles remain fixed."
      },
      {
        id: 53,
        question: "Did any of the four major Imams permit breaking clear scholarly consensus (Ijma') on fundamental duties?",
        options: [
          "No, all four Imams considered breaking established Ijma' to be invalid",
          "Yes, Abu Hanifah rejected Ijma'",
          "Yes, Imam Shafi'i rejected Ijma'",
          "Yes, Imam Ahmad rejected Ijma'"
        ],
        correctAnswer: "No, all four Imams considered breaking established Ijma' to be invalid",
        explanation: "Consensus on fundamental obligations (like 5 daily prayers) is definitive and binding across all four Madhabs."
      },
      {
        id: 54,
        question: "What is the Hanafi distinction between 'Fard' and 'Wajib'?",
        options: [
          "Fard is proven by definitive textual proof (Qat'i); Wajib is proven by probabilistic proof (Dhanni)",
          "Fard is optional; Wajib is forbidden",
          "There is no difference between them",
          "Wajib is only for scholars"
        ],
        correctAnswer: "Fard is proven by definitive textual proof (Qat'i); Wajib is proven by probabilistic proof (Dhanni)",
        explanation: "Hanafis categorize duties based on textual certainty: Fard is established by absolute text (e.g. Quran), while Wajib is established by speculative text."
      },
      {
        id: 55,
        question: "What is the primary danger of 'Talfiq' (mixing rulings carelessly to pursue desires)?",
        options: [
          "Fatwa-shopping to satisfy personal passions rather than seeking Allah's truth",
          "It makes worship too difficult",
          "It forces people to learn Arabic",
          "It requires extra fasting"
        ],
        correctAnswer: "Fatwa-shopping to satisfy personal passions rather than seeking Allah's truth",
        explanation: "Talfiq refers to picking the easiest concessions from every school merely to follow desire (Hawa), which violates true servitude."
      },
      {
        id: 56,
        question: "How did the four Imams treat the opinions of the Companions (Sahabah)?",
        options: [
          "They held the Sahabah in highest esteem, considering their consensus authoritative and their statements highly persuasive",
          "They ignored the Sahabah completely",
          "They considered the Sahabah untrustworthy",
          "They placed modern opinions above the Sahabah"
        ],
        correctAnswer: "They held the Sahabah in highest esteem, considering their consensus authoritative and their statements highly persuasive",
        explanation: "The Companions were the direct students of the Prophet (PBUH); all four Imams gave immense weight to their legal precedents."
      },
      {
        id: 57,
        question: "Which legal maxim is universally shared by all four Madhabs regarding difficulty in worship?",
        options: [
          "'Hardship brings ease' (Al-Mashaqqah tajlib al-Taysir)",
          "'Difficulty increases obligation'",
          "'Custom overrides text'",
          "'Rulings never adapt'"
        ],
        correctAnswer: "'Hardship brings ease' (Al-Mashaqqah tajlib al-Taysir)",
        explanation: "This universal maxim is derived from Quran 2:185 and accepted by all four Madhabs to grant concessions during difficulty."
      },
      {
        id: 58,
        question: "What is the ruling in all four Madhabs on a person who denies the obligation of the five daily prayers?",
        options: [
          "Unanimously considered an act of disbelief (Kufr) that exits Islam, as it denies a definitive pillar",
          "Considered a minor mistake",
          "Recommended to fast three days",
          "Given a financial fine only"
        ],
        correctAnswer: "Unanimously considered an act of disbelief (Kufr) that exits Islam, as it denies a definitive pillar",
        explanation: "Denying explicit, self-evident pillars of Islam (Ma'lum min al-Din bi al-Darurah) violates core creed across all schools."
      },
      {
        id: 59,
        question: "What is the stance of the four Madhabs regarding seeking legal rulings from a non-qualified individual?",
        options: [
          "It is prohibited; Muslims must consult trustworthy, qualified scholars of revelation",
          "It is recommended for convenience",
          "It is mandatory",
          "It makes no difference who is consulted"
        ],
        correctAnswer: "It is prohibited; Muslims must consult trustworthy, qualified scholars of revelation",
        explanation: "Quran 16:43 states: 'Ask the people of the message if you do not know.' Seeking fatwas from unqualified people leads to misguidance."
      },
      {
        id: 60,
        question: "Which major Shafi'i scholar authored 'Al-Majmu'', a monumental comparative Fiqh encyclopedia?",
        options: [
          "Imam al-Nawawi",
          "Imam al-Ghazali",
          "Imam Ibn Hajar",
          "Imam al-Suyuti"
        ],
        correctAnswer: "Imam al-Nawawi",
        explanation: "Imam Yahya ibn Sharaf al-Nawawi compiled Al-Majmu', detailing Shafi'i positions alongside proofs of all other Madhabs."
      },
      {
        id: 61,
        question: "Which major Hanbali scholar wrote 'Al-Mughni', one of the greatest comparative jurisprudence manuals in Islamic history?",
        options: [
          "Imam Ibn Qudamah al-Maqdisi",
          "Imam Ibn Taymiyyah",
          "Imam Ibn al-Qayyim",
          "Imam al-Bahuti"
        ],
        correctAnswer: "Imam Ibn Qudamah al-Maqdisi",
        explanation: "Imam Ibn Qudamah's Al-Mughni is a masterpiece of comparative Fiqh, presenting evidences for all four Sunni Madhabs impartially."
      },
      {
        id: 62,
        question: "Which Hanafi scholar compiled 'Bada'i al-Sana'i', known for its exquisite systematic legal organization?",
        options: [
          "Imam al-Kasani",
          "Imam al-Marghinani",
          "Imam Ibn Abidin",
          "Imam al-Tahawi"
        ],
        correctAnswer: "Imam al-Kasani",
        explanation: "Imam Ala al-Din al-Kasani authored Bada'i al-Sana'i, celebrated for its logical structure and clarity of legal argument."
      },
      {
        id: 63,
        question: "Which Maliki scholar wrote 'Bidayat al-Mujtahid', a classic work explaining the causes of scholarly disagreement?",
        options: [
          "Ibn Rushd (Averroes)",
          "Imam al-Qarafi",
          "Ibn Abd al-Barr",
          "Imam al-Shatibi"
        ],
        correctAnswer: "Ibn Rushd (Averroes)",
        explanation: "Ibn Rushd al-Hafid wrote Bidayat al-Mujtahid specifically to teach students the underlying linguistic and textual causes of Ikhtilaf."
      },
      {
        id: 64,
        question: "What is the position of all four Imams on celebrating or participating in explicit acts of Shirk?",
        options: [
          "Unanimously strictly forbidden, as Shirk is the greatest sin in Islam",
          "Permitted if done for fun",
          "Disliked but not sinful",
          "Encouraged for social harmony"
        ],
        correctAnswer: "Unanimously strictly forbidden, as Shirk is the greatest sin in Islam",
        explanation: "Preserving Tawheed and avoiding Shirk is the absolute non-negotiable core of Islam agreed upon by every scholar."
      },
      {
        id: 65,
        question: "How does the study of Madhabs cure 'intellectual stagnation' in veteran Muslims?",
        options: [
          "By revealing the deep proofs behind different views and breaking rigid cultural assumptions",
          "By forcing them to memorize thousands of lines without understanding",
          "By declaring all historical books obsolete",
          "By encouraging them to abandon worship"
        ],
        correctAnswer: "By revealing the deep proofs behind different views and breaking rigid cultural assumptions",
        explanation: "Exploring juristic proofs opens veteran minds to the rich intellectual heritage of Islam, dismantling provincial misunderstandings."
      },
      {
        id: 66,
        question: "What is the primary condition for an act of worship (Ibadah) to be accepted by Allah according to all four Imams?",
        options: [
          "Sincerity for Allah alone (Ikhlas) and compliance with the Sunnah of the Prophet (Ittiba')",
          "High financial cost",
          "Public popularity",
          "Complex philosophical ritual"
        ],
        correctAnswer: "Sincerity for Allah alone (Ikhlas) and compliance with the Sunnah of the Prophet (Ittiba')",
        explanation: "Accepted worship requires two non-negotiable pillars: Ikhlas (doing it purely for Allah) and Ittiba' (following prophetic guidance)."
      },
      {
        id: 67,
        question: "What is the distinction between 'Dhanni' (probabilistic) and 'Qat'i' (definitive) evidence in Usool al-Fiqh?",
        options: [
          "Qat'i evidence is clear and unambiguous in meaning; Dhanni allows for multiple valid interpretations",
          "Qat'i is weak; Dhanni is strong",
          "Both mean exact same thing",
          "Dhanni evidence is found only in dreams"
        ],
        correctAnswer: "Qat'i evidence is clear and unambiguous in meaning; Dhanni allows for multiple valid interpretations",
        explanation: "Differences among Madhabs occur primarily in Dhanni texts, where Arabic wording or transmission allows for more than one sound understanding."
      },
      {
        id: 68,
        question: "How did the four Imams handle Hadiths that appeared to contradict one another?",
        options: [
          "They applied systematic reconciliation (Al-Jam'), searched for abrogation (Naskh), or performed preference evaluation (Tarjih)",
          "They threw both Hadiths away",
          "They picked based on a coin toss",
          "They invented a new Quranic verse"
        ],
        correctAnswer: "They applied systematic reconciliation (Al-Jam'), searched for abrogation (Naskh), or performed preference evaluation (Tarjih)",
        explanation: "Jurists employ rigorous legal methodologies to resolve apparent conflicts between authentic narrations without discarding text."
      },
      {
        id: 69,
        question: "What is 'Naskh' (Abrogation) in Quranic and Hadith sciences?",
        options: [
          "The divine repeal or replacement of a prior legal ruling by a later revealed ruling",
          "A typing error in manuscripts",
          "Forgetfulness of the narrator",
          "Translation into another language"
        ],
        correctAnswer: "The divine repeal or replacement of a prior legal ruling by a later revealed ruling",
        explanation: "Naskh represents progressive revelation during the Prophet's lifetime, such as the transition in the prohibition of alcohol."
      },
      {
        id: 70,
        question: "What did Imam al-Shatibi contribute to Islamic legal theory in his work 'Al-Muwafaqat'?",
        options: [
          "He systematically articulated the Higher Objectives of Islamic Law (Maqasid al-Shariah)",
          "He authored a book on astronomy",
          "He compiled a dictionary of regional slang",
          "He founded a new military doctrine"
        ],
        correctAnswer: "He systematically articulated the Higher Objectives of Islamic Law (Maqasid al-Shariah)",
        explanation: "Imam al-Shatibi's Al-Muwafaqat is the premier classical work detailing how legal rulings serve fundamental human benefits."
      },
      {
        id: 71,
        question: "Why is taking concessions (Rukhsah) from Madhabs permissible during genuine necessity?",
        options: [
          "Because Shariah explicitly built in ease for authentic hardship, as long as it does not follow mere whim",
          "Because law is meaningless",
          "Because necessity removes all religious duties permanently",
          "Because scholars want to abandon rules"
        ],
        correctAnswer: "Because Shariah explicitly built in ease for authentic hardship, as long as it does not follow mere whim",
        explanation: "Valid legal concessions (like shortening prayer during travel or Tayammum during illness) demonstrate the mercy of Islamic law."
      },
      {
        id: 72,
        question: "Did any of the four Imams permit inventing a fifth Madhab that contradicts all four on established consensus?",
        options: [
          "No, deviating from the collective consensus of the four Madhabs on established matters is rejected",
          "Yes, anyone can start a new Madhab anytime",
          "Yes, Imam Malik encouraged it",
          "Yes, Imam Ahmad mandated it"
        ],
        correctAnswer: "No, deviating from the collective consensus of the four Madhabs on established matters is rejected",
        explanation: "The four Madhabs represent the codified legacy of Sunni jurisprudence; straying into isolated opinions outside scholarly consensus is unguided."
      }
    ],
    advanced: [
      {
        id: 73,
        question: "In Hanafi Usool al-Fiqh, what is the precise distinction between a text that is 'Khabar al-Wahad' and one that is 'Mutawatir'?",
        options: [
          "Mutawatir is transmitted by such a vast number of narrators in every generation that collusion on a lie is impossible; Khabar al-Wahad is solitary",
          "Khabar al-Wahad is always weak; Mutawatir is always false",
          "Mutawatir refers only to modern books",
          "There is no legal difference between them"
        ],
        correctAnswer: "Mutawatir is transmitted by such a vast number of narrators in every generation that collusion on a lie is impossible; Khabar al-Wahad is solitary",
        explanation: "Hanafis require Mutawatir or Mashhur transmission to add an absolute obligation (Fard) to a general Quranic text."
      },
      {
        id: 74,
        question: "How does Imam Malik's concept of 'Amal Ahl al-Madinah' function when it appears to conflict with a solitary Hadith (Khabar al-Wahad)?",
        options: [
          "Imam Malik often prioritized the continuous practical action of Madinah over a solitary Hadith, viewing it as mass physical transmission",
          "He rejected both completely",
          "He prioritized the solitary Hadith in every case",
          "He referred the matter to Roman law"
        ],
        correctAnswer: "Imam Malik often prioritized the continuous practical action of Madinah over a solitary Hadith, viewing it as mass physical transmission",
        explanation: "Malik argued that thousands of Madinans inheriting a practice from their fathers from the Prophet outweighs a single chain of transmission."
      },
      {
        id: 75,
        question: "What was Imam al-Shafi'i's critique of Istihsan (juristic preference) as practiced by some early jurists?",
        options: [
          "He famously stated: 'Whoever practices Istihsan has legislated for himself,' demanding strict adherence to textual Qiyas",
          "He embraced Istihsan without limits",
          "He claimed Istihsan was part of the Quran",
          "He wrote five volumes in praise of Istihsan"
        ],
        correctAnswer: "He famously stated: 'Whoever practices Istihsan has legislated for himself,' demanding strict adherence to textual Qiyas",
        explanation: "Imam al-Shafi'i insisted that juristic deduction must strictly anchor to explicit textual indicators rather than unbacked preference."
      },
      {
        id: 76,
        question: "How does Imam Ahmad ibn Hanbal define the authority of a 'Mursal' Hadith (where a Tabi'i quotes the Prophet omitting the Sahabi)?",
        options: [
          "He accepted Mursal narrations if no superior authentic text contradicted them, placing them above unbacked human opinion",
          "He considered Mursal narrations completely fabricated",
          "He treated Mursal as superior to Quran",
          "He rejected all Hadiths from Tabi'in"
        ],
        correctAnswer: "He accepted Mursal narrations if no superior authentic text contradicted them, placing them above unbacked human opinion",
        explanation: "Imam Ahmad gave weight to Mursal Hadiths over pure legal analogy, reflecting his deep commitment to Hadith heritage."
      },
      {
        id: 77,
        question: "What is 'Al-Qawa'id al-Fiqhiyyah' (Legal Maxims) and how do they differ from Usool al-Fiqh?",
        options: [
          "Usool al-Fiqh provides tools to extract rules from texts; Legal Maxims are thematic summary principles distilled from existing Fiqh rulings",
          "Legal Maxims replace the Quran",
          "Usool al-Fiqh deals only with grammar",
          "They are identical in every aspect"
        ],
        correctAnswer: "Usool al-Fiqh provides tools to extract rules from texts; Legal Maxims are thematic summary principles distilled from existing Fiqh rulings",
        explanation: "Legal Maxims (like 'Certainty is not overruled by doubt') summarize broad patterns across thousands of individual rulings."
      },
      {
        id: 78,
        question: "What are the Five Major Universal Legal Maxims (Al-Qawa'id al-Khams al-Kubra) agreed upon by all four Madhabs?",
        options: [
          "Intentions matter; Certainty not overruled by doubt; Hardship brings ease; Harm must be removed; Custom is authoritative",
          "Only follow wealth; Avoid work; Ignore safety; Reject custom; Follow desires",
          "Pray once a day; Fast in winter; Give zero Zakat; Hajj is optional; Ignore truth",
          "There are no universal maxims in Fiqh"
        ],
        correctAnswer: "Intentions matter; Certainty not overruled by doubt; Hardship brings ease; Harm must be removed; Custom is authoritative",
        explanation: "These five foundational maxims encompass the spirit of Islamic jurisprudence across all valid schools."
      },
      {
        id: 79,
        question: "How does the maxim 'Al-Yaqin la yazulu bi al-Shakk' (Certainty is not overruled by doubt) apply in daily purification (Wudu)?",
        options: [
          "If a person is certain they made Wudu, mere lingering doubt about breaking it does not invalidate their purity",
          "Doubt always invalidates Wudu immediately",
          "One must repeat Wudu 10 times",
          "Wudu is unnecessary if you have doubt"
        ],
        correctAnswer: "If a person is certain they made Wudu, mere lingering doubt about breaking it does not invalidate their purity",
        explanation: "Rooted in Sahih Muslim 362, certainty of purity remains intact until definitive proof of invalidation occurs."
      },
      {
        id: 80,
        question: "What is the legal maxim 'Al-Darar Yuzal' derived from?",
        options: [
          "The famous Hadith: 'La darar wa la dirar' (There should be no harm nor reciprocating harm)",
          "A Greek philosophical poem",
          "Pre-Islamic Bedouin proverbs",
          "A modern legislative act"
        ],
        correctAnswer: "The famous Hadith: 'La darar wa la dirar' (There should be no harm nor reciprocating harm)",
        explanation: "This maxim forms the basis for removing medical, environmental, commercial, and social harms in Islamic law."
      },
      {
        id: 81,
        question: "In comparative Fiqh, what is the concept of 'Tahrir al-Niza'' (Pinpointing the precise point of dispute)?",
        options: [
          "Defining exactly where scholars agree and where they differ, preventing false arguments over misunderstood terms",
          "Starting a physical battle",
          "Canceling a legal contract",
          "Translating texts into Persian"
        ],
        correctAnswer: "Defining exactly where scholars agree and where they differ, preventing false arguments over misunderstood terms",
        explanation: "Tahrir al-Niza' is a critical scholastic technique that isolates real technical disagreement from superficial misunderstanding."
      },
      {
        id: 82,
        question: "Why is the study of 'Asbab al-Ikhtilaf' (Causes of Scholarly Disagreement) essential for advanced students of Islamic law?",
        options: [
          "It reveals that valid differences arise from linguistic nuances, Hadith verification, and hermeneutics, not personal whims",
          "It proves that scholars had no real evidence",
          "It encourages students to discard all four Madhabs",
          "It creates new sects"
        ],
        correctAnswer: "It reveals that valid differences arise from linguistic nuances, Hadith verification, and hermeneutics, not personal whims",
        explanation: "Understanding the objective causes of Ikhtilaf eliminates arrogance and builds profound respect for classical juristic rigor."
      },
      {
        id: 83,
        question: "What is the stance of the four Madhabs on an isolated Fatwa that violates clear, unambiguous Quranic verses or authentic Mutawatir Hadith?",
        options: [
          "The isolated Fatwa is rendered invalid (Batil) and must be discarded",
          "The Fatwa overrides the Quran",
          "The Fatwa must be followed by everyone",
          "The Quranic verse is deleted"
        ],
        correctAnswer: "The isolated Fatwa is rendered invalid (Batil) and must be discarded",
        explanation: "No individual opinion can stand if it directly contradicts explicit, unambiguous divine revelation."
      },
      {
        id: 84,
        question: "What is the condition for a scholar to reach the level of 'Mujtahid Mutlaq' (Absolute Independent Jurist)?",
        options: [
          "Mastery of Quranic sciences, Hadith verification, Arabic linguistics, Usool al-Fiqh, objectives of Shariah, and Ijma'",
          "Simply holding a university degree",
          "Memorizing one Hadith book",
          "Being appointed by a political ruler"
        ],
        correctAnswer: "Mastery of Quranic sciences, Hadith verification, Arabic linguistics, Usool al-Fiqh, objectives of Shariah, and Ijma'",
        explanation: "Mujtahid Mutlaq is an extraordinary academic rank requiring total mastery of all foundational Islamic sciences."
      },
      {
        id: 85,
        question: "What is a 'Mujtahid fi al-Madhab' (Jurist within a School)?",
        options: [
          "A scholar who applies the established Usool of a master Imam to derive rulings for unaddressed new issues",
          "A beginner who reads translations",
          "A scholar who rejects all four Imams",
          "A judge who only handles civil marriage"
        ],
        correctAnswer: "A scholar who applies the established Usool of a master Imam to derive rulings for unaddressed new issues",
        explanation: "Scholars like Nawawi or Ibn Qudamah operated within their Madhab's framework to deduce rulings for new cases."
      },
      {
        id: 86,
        question: "How did Imam al-Qarafi distinguish between the Prophet's (PBUH) actions as a Messenger, a Mufti, a Judge, and a Head of State?",
        options: [
          "Actions as Messenger/Mufti are universal law; actions as Judge apply to court cases; actions as Head of State are policy decisions",
          "He claimed all prophetic actions were purely political",
          "He said prophetic actions have no legal value",
          "He made no distinction between them"
        ],
        correctAnswer: "Actions as Messenger/Mufti are universal law; actions as Judge apply to court cases; actions as Head of State are policy decisions",
        explanation: "Imam al-Qarafi's brilliant breakdown in Al-Furuq established how different prophetic roles yield distinct legal classifications."
      },
      {
        id: 87,
        question: "What is the legal status of 'Shara' man qablana' (Laws of prior Prophets) in Islamic jurisprudence?",
        options: [
          "Considered valid law for Muslims if narrated in Quran/authentic Sunnah without explicit abrogation",
          "Completely binding in every detail regardless of Quran",
          "Forbidden to read or reference",
          "Treated as identical to modern civil law"
        ],
        correctAnswer: "Considered valid law for Muslims if narrated in Quran/authentic Sunnah without explicit abrogation",
        explanation: "Prior divine revelations confirmed by our Quran/Sunnah serve as secondary legal evidence when not abrogated."
      },
      {
        id: 88,
        question: "How do jurists handle the maxim 'Al-Asl fi al-Ashya' al-Ibahah' (The default state of non-ritual things is permissibility)?",
        options: [
          "All worldly items, foods, and transactions are permissible unless explicit proof proves prohibition",
          "Everything is forbidden until proven permissible",
          "Only water is permissible",
          "It applies only to acts of worship (Ibadah)"
        ],
        correctAnswer: "All worldly items, foods, and transactions are permissible unless explicit proof proves prohibition",
        explanation: "In worldly matters (Mu'amalat), everything is original halal until proven haram. In worship (Ibadah), everything is restricted until proven by Sunnah."
      },
      {
        id: 89,
        question: "What is the default baseline regarding acts of worship (Ibadah)?",
        options: [
          "Al-Asl fi al-Ibadat al-Man' (The default in worship is restriction/prohibition until text proves it)",
          "Everything is allowed in worship",
          "Culture dictates worship",
          "Worship is determined by personal feelings"
        ],
        correctAnswer: "Al-Asl fi al-Ibadat al-Man' (The default in worship is restriction/prohibition until text proves it)",
        explanation: "Worship must be strictly legislated by divine text (Tawqifiyyah); introducing unauthorized worship constitutes Bid'ah."
      },
      {
        id: 90,
        question: "What is the stance of all four Sunni Madhabs regarding the companions who fought at Siffin and Jamal?",
        options: [
          "We refrain from ill speech, recognize their immense virtues, and hold that all were seeking truth through Ijtihad",
          "We curse one side and elevate the other to divinity",
          "We reject all Sahabah involved",
          "We treat it as a pillar of faith to condemn them"
        ],
        correctAnswer: "We refrain from ill speech, recognize their immense virtues, and hold that all were seeking truth through Ijtihad",
        explanation: "Ahl al-Sunnah withhold judgment on disputes among the Sahabah, maintaining respect for all companions of the Messenger (PBUH)."
      },
      {
        id: 91,
        question: "What is the primary criteria for selecting an opinion when choosing among the valid positions of the four Madhabs?",
        options: [
          "Selecting the view backed by the strongest textual proof (Daleel) and closest to pure Tawheed and Sunnah",
          "Choosing whatever requires the least physical movement",
          "Choosing whatever is most profitable financially",
          "Following whatever one's local culture prefers"
        ],
        correctAnswer: "Selecting the view backed by the strongest textual proof (Daleel) and closest to pure Tawheed and Sunnah",
        explanation: "A seeker of truth prioritizes textual strength (Tarjih) and alignment with authentic Sunnah over regional or personal preference."
      },
      {
        id: 92,
        question: "What is 'Sadd al-Dhara'i'' and how does it safeguard pure Monotheism (Tawheed)?",
        options: [
          "It blocks acts that lead to Shirk, such as prohibiting building structures over graves to prevent grave-worship",
          "It encourages building shrines",
          "It permits making vows to deceased saints",
          "It allows images in places of worship"
        ],
        correctAnswer: "It blocks acts that lead to Shirk, such as prohibiting building structures over graves to prevent grave-worship",
        explanation: "By forbidding practices that historically lead to idolatry, Shariah guards the purity of Tawheed from corruption."
      },
      {
        id: 93,
        question: "Which classical scholar wrote 'Iqtida' al-Sirat al-Mustaqim' warning against imitating non-Islamic religious practices and innovations?",
        options: [
          "Shaykh al-Islam Ibn Taymiyyah",
          "Imam al-Nawawi",
          "Imam Abu Hanifah",
          "Imam Malik"
        ],
        correctAnswer: "Shaykh al-Islam Ibn Taymiyyah",
        explanation: "Ibn Taymiyyah authored this masterwork to preserve Islamic identity and purge Bid'ah and pagan customs from Muslim practice."
      },
      {
        id: 94,
        question: "What is the principle of 'Al-Khuruj min al-Khilaf Mustahabb' (Exiting scholarly disagreement is recommended)?",
        options: [
          "It is recommended to adopt a practice that satisfies the criteria of all four Madhabs whenever feasible",
          "It is mandatory to reject all Madhabs",
          "It requires starting arguments with other schools",
          "It means ignoring prayer when scholars disagree"
        ],
        correctAnswer: "It is recommended to adopt a practice that satisfies the criteria of all four Madhabs whenever feasible",
        explanation: "Jurists advise taking cautious precautions (Ihtiyat) that fulfill the validity requirements across all four schools."
      },
      {
        id: 95,
        question: "What is the relationship between Fiqh (jurisprudence) and Aqeedah (creed)?",
        options: [
          "Aqeedah is the foundational belief in Allah and His revelation; Fiqh is the practical application of laws derived from that revelation",
          "Fiqh comes before belief in Allah",
          "Aqeedah changes every year while Fiqh is fixed",
          "They are unrelated subjects"
        ],
        correctAnswer: "Aqeedah is the foundational belief in Allah and His revelation; Fiqh is the practical application of laws derived from that revelation",
        explanation: "Sound Aqeedah is the root tree; practical Fiqh represents the branches and fruit of correct submission."
      },
      {
        id: 96,
        question: "How did Imam Abu Hanifah define Fiqh in its broadest sense in his work 'Al-Fiqh al-Akbar'?",
        options: [
          "'Ma'rifat al-Nafs ma laha wa ma 'alayha' (The soul's knowledge of what is for it and what is against it)",
          "Memorizing legal books",
          "Winning arguments in court",
          "Collecting taxes for caliphs"
        ],
        correctAnswer: "'Ma'rifat al-Nafs ma laha wa ma 'alayha' (The soul's knowledge of what is for it and what is against it)",
        explanation: "Abu Hanifah's early definition encompassed both spiritual creed ('Al-Fiqh al-Akbar') and practical legal obligations."
      },
      {
        id: 97,
        question: "What is the ruling on adopting an isolated scholar's opinion that permits an explicit Haram (like interest or alcohol)?",
        options: [
          "Strictly forbidden; an isolated mistake (Zallat al-Alim) cannot render haram as halal",
          "Permissible if found in a book",
          "Recommended for financial growth",
          "Encouraged in modern times"
        ],
        correctAnswer: "Strictly forbidden; an isolated mistake (Zallat al-Alim) cannot render haram as halal",
        explanation: "Scholars warn against seeking out 'Zallat al-Ulama' (slips of scholars) to justify prohibited acts."
      },
      {
        id: 98,
        question: "What did the early Salaf mean by the statement: 'This knowledge is religion, so look to whom you take your religion from'?",
        options: [
          "Muslims must ensure their religious knowledge comes from authentic, upright, Sunnah-following scholars",
          "Take knowledge from anyone who claims to speak for God",
          "Only learn from internet forums",
          "Disregard scholarly qualifications"
        ],
        correctAnswer: "Muslims must ensure their religious knowledge comes from authentic, upright, Sunnah-following scholars",
        explanation: "Reported by Muhammad ibn Sirin (Sahih Muslim introduction), this principle mandates verifying scholarly integrity."
      },
      {
        id: 99,
        question: "What is the role of Arabic grammar (Nahu) and semantics (Balaaghah) in resolving juristic disputes?",
        options: [
          "Precise understanding of Arabic particles, commands, and prohibitions is essential to determine whether a text implies obligation or recommendation",
          "Arabic grammar has no bearing on legal rulings",
          "Scholars ignore Arabic and translate texts into Latin",
          "Grammar is used only for poetry"
        ],
        correctAnswer: "Precise understanding of Arabic particles, commands, and prohibitions is essential to determine whether a text implies obligation or recommendation",
        explanation: "Linguistic analysis of Quranic imperatives (Amr) and prohibitions (Nahy) directly dictates whether a legal act is Fard, Mustahabb, or Haram."
      },
      {
        id: 100,
        question: "What is the primary lesson a veteran Muslim learns regarding the Imams' dedication to truth?",
        options: [
          "They sacrificed wealth, health, and comfort to uphold authentic revelation and pure monotheism without innovation",
          "They sought worldly fame and fortune",
          "They created schools to compete with each other",
          "They compromised truth to please rulers"
        ],
        correctAnswer: "They sacrificed wealth, health, and comfort to uphold authentic revelation and pure monotheism without innovation",
        explanation: "The four Imams were exemplars of sincerity (Ikhlas), enduring imprisonment and trial to preserve pure Islamic knowledge for humanity."
      },
      {
        id: 101,
        question: "What is the ruling on praying behind an Imam who belongs to a different Madhab?",
        options: [
          "Fully valid and encouraged; the Sahabah and the four Imams all prayed behind one another",
          "Invalid; prayers must be repeated",
          "Forbidden unless in Makkah",
          "Disliked"
        ],
        correctAnswer: "Fully valid and encouraged; the Sahabah and the four Imams all prayed behind one another",
        explanation: "All four Imams agreed that Muslims should pray together in congregation regardless of minor Madhab differences in partial prayer acts."
      },
      {
        id: 102,
        question: "What is the primary role of a 'Mufti' in Islamic jurisprudence?",
        options: [
          "A qualified jurist who issues non-binding legal opinions (Fatwas) based on Shariah proofs for specific questions",
          "A political ruler who commands armies",
          "A mosque caretaker",
          "A collector of market taxes"
        ],
        correctAnswer: "A qualified jurist who issues non-binding legal opinions (Fatwas) based on Shariah proofs for specific questions",
        explanation: "A Mufti applies general Fiqh principles to specific personal or societal questions presented by individuals."
      },
      {
        id: 103,
        question: "What is the primary role of a 'Qadi' (Judge) compared to a Mufti?",
        options: [
          "A Qadi issues binding legal judgments enforced by the judicial authority of the state",
          "A Qadi only teaches children Quran",
          "A Qadi has no legal authority",
          "A Qadi issues spiritual advice only"
        ],
        correctAnswer: "A Qadi issues binding legal judgments enforced by the judicial authority of the state",
        explanation: "While a Mufti gives advisory fatwas, a Qadi's ruling settles disputes with binding legal force."
      },
      {
        id: 104,
        question: "Why is the preservation of the four Madhabs considered a blessing for the Muslim Ummah?",
        options: [
          "It provides a structured, verified, and unbroken chain of scholarly transmission preserving pure Islam across centuries",
          "It creates division among nations",
          "It eliminates the need for the Quran",
          "It allows individuals to change the religion at will"
        ],
        correctAnswer: "It provides a structured, verified, and unbroken chain of scholarly transmission preserving pure Islam across centuries",
        explanation: "The Madhab system preserved authentic prophetic knowledge through rigorous peer-reviewed methodology across generations."
      },
      {
        id: 105,
        question: "What is the ruling on choosing a Madhab strictly because it is free from Bid'ah and Shirk?",
        options: [
          "It is the soundest logic, as adherence to unadulterated Tawheed and Sunnah is the ultimate obligation",
          "It is forbidden to evaluate Madhabs",
          "It is considered cultural treason",
          "It is irrelevant to faith"
        ],
        correctAnswer: "It is the soundest logic, as adherence to unadulterated Tawheed and Sunnah is the ultimate obligation",
        explanation: "A believer's primary duty is to follow what is strictly supported by authentic evidence, avoiding innovations and idolatrous practices."
      },
      {
        id: 106,
        question: "How did the four Imams view the relationship between sound intellect ('Aql) and authentic text (Naql)?",
        options: [
          "Sound intellect always agrees with authentic text; revelation leads and intellect understands",
          "Intellect overrides divine revelation",
          "Revelation is irrational",
          "Intellect should be discarded completely"
        ],
        correctAnswer: "Sound intellect always agrees with authentic text; revelation leads and intellect understands",
        explanation: "As Ibn Taymiyyah demonstrated in Dar' Ta'arud al-'Aql wa al-Naql, authentic revelation never contradicts sound uncorrupted human reason."
      },
      {
        id: 107,
        question: "What is the stance of the four Madhabs on using weak Hadiths in establishing core beliefs (Aqeedah)?",
        options: [
          "Unanimously rejected; Aqeedah requires absolute certainty from Quran and Mutawatir or Sahih Sunnah",
          "Weak Hadiths are preferred in Aqeedah",
          "Aqeedah can be based on dreams",
          "Weak Hadiths override Quranic verses in Aqeedah"
        ],
        correctAnswer: "Unanimously rejected; Aqeedah requires absolute certainty from Quran and Mutawatir or Sahih Sunnah",
        explanation: "Creed (Aqeedah) requires absolute textual certainty; weak narrations cannot be used to establish fundamental articles of faith."
      },
      {
        id: 108,
        question: "What ultimate goal does a Muslim achieve by properly studying the Madhabs?",
        options: [
          "Attaining a grounded, humble, and evidence-based practice of Islam that units upon Tawheed and authentic Sunnah",
          "Winning debates on social media",
          "Achieving political office",
          "Boasting over other Muslims"
        ],
        correctAnswer: "Attaining a grounded, humble, and evidence-based practice of Islam that units upon Tawheed and authentic Sunnah",
        explanation: "Proper study of the Madhabs produces humble, educated believers who worship Allah with insight (Basirah) and unity."
      }
    ]
  }
};

export default madhabCategory;