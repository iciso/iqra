import type { QuizCategory } from "@/types/quiz"

const marriageCategory: QuizCategory = {
  id: "marriage",
  title: "Marriage & Family Ties",
  description: "The importance of marriage in time, the sacred bond of spouses, rights and responsibilities, and maintaining family ties (Silat ar-Rahim) linked to Allah's Name Ar-Rahman",
  icon: "HeartHandshake",
  levels: {
    easy: [
      {
        question: "What is the Arabic term for the Islamic marriage contract?",
        options: ["Talaq", "Nikah", "Iddah", "Mahr"],
        correctAnswer: "Nikah",
        explanation: "Nikah is the sacred contract of marriage between a man and a woman in Islam.",
        references: "Surah An-Nisa 4:3; Sahih Bukhari"
      },
      {
        question: "According to the Quran, from what did Allah create the spouse of the first human?",
        options: ["From clay separately", "From the same soul (one soul)", "From light", "From fire"],
        correctAnswer: "From the same soul (one soul)",
        explanation: "Allah says He created you from a single soul and created from it its mate, then spread from them many men and women.",
        references: "Surah An-Nisa 4:1"
      },
      {
        question: "What is one of the main purposes of marriage mentioned in the Quran?",
        options: ["Only to increase wealth", "To find tranquillity, affection, and mercy between spouses", "To gain social status only", "To avoid work"],
        correctAnswer: "To find tranquillity, affection, and mercy between spouses",
        explanation: "Allah says: 'And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.'",
        references: "Surah Ar-Rum 30:21"
      },
      {
        question: "What did the Prophet ﷺ advise young people who are able to marry?",
        options: ["Delay marriage as long as possible", "Marry, because it helps lower the gaze and guard chastity", "Only marry after becoming wealthy", "Avoid marriage entirely"],
        correctAnswer: "Marry, because it helps lower the gaze and guard chastity",
        explanation: "The Prophet ﷺ said: 'O young people! Whoever among you is able to marry, let him marry, for it helps lower the gaze and guard the private parts.'",
        references: "Sahih Bukhari 5066; Sahih Muslim 1400"
      },
      {
        question: "What should a person do if they are unable to marry due to lack of means?",
        options: ["Despair", "Fast, as it is a shield (protection from desire)", "Seek haram means", "Blame others"],
        correctAnswer: "Fast, as it is a shield (protection from desire)",
        explanation: "The Prophet ﷺ said that whoever is not able to marry should fast, for fasting diminishes sexual desire and is a protection.",
        references: "Sahih Bukhari 5066"
      },
      {
        question: "What is the linguistic connection between 'Rahm' (womb/kinship) and Allah's Name?",
        options: ["No connection", "Rahm derives its name from Ar-Rahman (The Most Merciful)", "Rahm means power", "Rahm is unrelated to mercy"],
        correctAnswer: "Rahm derives its name from Ar-Rahman (The Most Merciful)",
        explanation: "The Prophet ﷺ reported that Allah said: 'I am Ar-Rahman. I created the rahm (womb) and derived its name from My Name.'",
        references: "Sahih Bukhari 5988; Sahih Muslim"
      },
      {
        question: "What is Silat ar-Rahim?",
        options: ["Cutting family ties", "Maintaining and upholding the ties of kinship", "Only visiting parents", "Giving charity to strangers only"],
        correctAnswer: "Maintaining and upholding the ties of kinship",
        explanation: "Silat ar-Rahim means joining and maintaining the bonds of kinship (the womb-ties), which is a major obligation in Islam.",
        references: "Surah An-Nisa 4:1; Sahih Bukhari"
      },
      {
        question: "What did the Prophet ﷺ say about the one who severs the ties of kinship?",
        options: ["He will enter Paradise easily", "He will not enter Paradise", "He is the best of people", "It has no consequence"],
        correctAnswer: "He will not enter Paradise",
        explanation: "The Prophet ﷺ said: 'The one who severs the ties of kinship will not enter Paradise.'",
        references: "Sahih Bukhari 5984; Sahih Muslim"
      },
      {
        question: "What is one of the rewards for maintaining family ties?",
        options: ["Decrease in provision", "Increase in provision and prolongation of life", "No worldly benefit", "Only reward in the Hereafter with no worldly effect"],
        correctAnswer: "Increase in provision and prolongation of life",
        explanation: "The Prophet ﷺ said: 'Whoever would like his provision to be increased and his life to be extended, should uphold the ties of kinship.'",
        references: "Sahih Bukhari 5986; Sahih Muslim 2557"
      },
      {
        question: "In the Friday sermon, which Quranic theme is often emphasized regarding creation and family?",
        options: ["Only the creation of the heavens", "Creation from one soul, its mate, and the spreading of many men and women, and the importance of the wombs (kinship)", "Only the stories of previous nations", "Only the Day of Judgment"],
        correctAnswer: "Creation from one soul, its mate, and the spreading of many men and women, and the importance of the wombs (kinship)",
        explanation: "Surah An-Nisa 4:1 is frequently referenced: Allah created you from a single soul, created from it its mate, and dispersed from both many men and women, and commanded fear of Allah and the wombs.",
        references: "Surah An-Nisa 4:1"
      },
      {
        question: "What is the mahr in Islamic marriage?",
        options: ["A tax paid to the state", "The obligatory gift given by the husband to the wife at the time of marriage", "A gift from the bride's family", "An optional present"],
        correctAnswer: "The obligatory gift given by the husband to the wife at the time of marriage",
        explanation: "Allah commands: 'And give the women their mahr (bridal gift) with a good heart.' It belongs solely to the wife.",
        references: "Surah An-Nisa 4:4"
      },
      {
        question: "Is forced marriage allowed in Islam?",
        options: ["Yes, if the parents insist", "No, both the man and the woman must give their free consent", "Only for young girls", "Only in certain cultures"],
        correctAnswer: "No, both the man and the woman must give their free consent",
        explanation: "The Prophet ﷺ said the previously married woman has more right to herself than her guardian, and the virgin's permission must be sought.",
        references: "Sahih Bukhari 5136; Sahih Muslim"
      },
      {
        question: "What is the best quality to seek in a spouse according to the Prophet ﷺ?",
        options: ["Wealth", "Beauty", "Family status", "Religion (deen)"],
        correctAnswer: "Religion (deen)",
        explanation: "The Prophet ﷺ said a woman is married for four things: wealth, lineage, beauty, and religion. So marry the one who is religious.",
        references: "Sahih Bukhari 5090; Sahih Muslim"
      },
      {
        question: "What did the Prophet ﷺ say about delaying three things?",
        options: ["Prayer, funeral, and marriage of a single woman when a suitable match is found", "Eating, sleeping, and traveling", "Work, study, and travel", "Only prayer"],
        correctAnswer: "Prayer, funeral, and marriage of a single woman when a suitable match is found",
        explanation: "The Prophet ﷺ said three things should not be delayed: the prayer when its time comes, the funeral when the body is ready, and the marriage of a single woman when a suitable match is found.",
        references: "Sunan at-Tirmidhi"
      },
      {
        question: "What is the status of marriage in Islam for the one who fears falling into sin?",
        options: ["Optional", "Obligatory (wajib)", "Disliked", "Forbidden"],
        correctAnswer: "Obligatory (wajib)",
        explanation: "If a person fears falling into zina or cannot control desire, marriage becomes obligatory upon them according to the scholars.",
        references: "Classical fiqh works; IslamQA"
      },
      {
        question: "What is the connection between the womb and mercy in Islam?",
        options: ["No connection", "The womb (rahm) is named from Ar-Rahman, embodying mercy as a mother shows to her child", "The womb is only a physical organ", "Mercy is only for the Hereafter"],
        correctAnswer: "The womb (rahm) is named from Ar-Rahman, embodying mercy as a mother shows to her child",
        explanation: "Allah derived the name of the womb from His Name Ar-Rahman, linking family bonds and maternal mercy to divine mercy.",
        references: "Sahih Bukhari 5988; Hadith Qudsi"
      },
      {
        question: "Does maintaining family ties require that relatives also maintain ties with you?",
        options: ["Yes, only reciprocate", "No, the true maintainer of ties is the one who upholds them even when others cut them off", "Only with parents", "Only with siblings"],
        correctAnswer: "No, the true maintainer of ties is the one who upholds them even when others cut them off",
        explanation: "The Prophet ﷺ said: 'The one who maintains ties of kinship is not the one who merely reciprocates; rather it is the one who maintains ties when his relatives cut him off.'",
        references: "Sahih Bukhari 5991"
      },
      {
        question: "What is one of the rights of the wife over her husband?",
        options: ["To provide for herself completely", "Financial maintenance (nafaqah), housing, and kind treatment", "To work and support the husband", "No rights"],
        correctAnswer: "Financial maintenance (nafaqah), housing, and kind treatment",
        explanation: "The husband is obliged to provide food, clothing, and housing according to his means, and to live with his wife in kindness.",
        references: "Surah An-Nisa 4:19; Surah At-Talaq 65:7"
      },
      {
        question: "What is one of the rights of the husband over his wife?",
        options: ["To take her wealth freely", "Respect, trust, and cooperation in guarding the home and family in a reasonable manner", "Absolute control without kindness", "No rights"],
        correctAnswer: "Respect, trust, and cooperation in guarding the home and family in a reasonable manner",
        explanation: "Spouses have mutual rights. The wife is expected to guard the home and her chastity, and to cooperate reasonably.",
        references: "Surah Al-Baqarah 2:228; Sahih Muslim"
      },
      {
        question: "What did Allah place between spouses as a sign?",
        options: ["Only hardship", "Affection (mawaddah) and mercy (rahmah)", "Only competition", "Only silence"],
        correctAnswer: "Affection (mawaddah) and mercy (rahmah)",
        explanation: "Allah placed between spouses affection and mercy so that they may find tranquillity in one another.",
        references: "Surah Ar-Rum 30:21"
      },
      {
        question: "Is it recommended to delay marriage until old age in Islam?",
        options: ["Yes, to gain more experience", "No, the Sunnah encourages marrying when one is able, especially the youth, and not delaying without valid reason", "Only for men", "Only for women"],
        correctAnswer: "No, the Sunnah encourages marrying when one is able, especially the youth, and not delaying without valid reason",
        explanation: "The Prophet ﷺ encouraged young people to marry when able and warned against delaying the marriage of a suitable match.",
        references: "Sahih Bukhari; Sunan at-Tirmidhi"
      },
      {
        question: "What is the minimum number of witnesses generally required for a valid nikah according to the majority?",
        options: ["None", "One", "Two", "Four"],
        correctAnswer: "Two",
        explanation: "The majority of scholars require two witnesses for the validity of the marriage contract.",
        references: "Classical fiqh; Hadith"
      },
      {
        question: "Who is the wali in the context of marriage?",
        options: ["The husband's friend", "The bride's guardian (usually her father) who is involved in the marriage contract", "The imam only", "Any relative"],
        correctAnswer: "The bride's guardian (usually her father) who is involved in the marriage contract",
        explanation: "The majority of scholars require the presence or permission of the bride's wali for a valid marriage.",
        references: "Sunan Abu Dawud; Tirmidhi"
      },
      {
        question: "What is the ruling on cutting off family ties deliberately?",
        options: ["It is a minor matter", "It is a major sin; Allah has cursed those who sever the ties of kinship", "It is recommended for peace", "It has no religious consequence"],
        correctAnswer: "It is a major sin; Allah has cursed those who sever the ties of kinship",
        explanation: "Allah says of those who sever what He commanded to be joined that upon them is the curse and an evil abode.",
        references: "Surah Ar-Ra'd 13:25; Surah Muhammad 47:22-23"
      },
      {
        question: "What did the Prophet ﷺ say about the best of people regarding their wives?",
        options: ["The best are those who are strictest", "The best of you are those who are best to their wives", "Wives have no rights", "Treatment does not matter"],
        correctAnswer: "The best of you are those who are best to their wives",
        explanation: "The Prophet ﷺ said: 'The best of you are those who are best to their wives, and I am the best of you to my wives.'",
        references: "Sunan at-Tirmidhi; Ibn Majah"
      },
      {
        question: "What is the purpose of the mahr?",
        options: ["To buy the wife", "An obligatory gift of honor from the husband to the wife that becomes her property", "A payment to the bride's father", "An optional gesture"],
        correctAnswer: "An obligatory gift of honor from the husband to the wife that becomes her property",
        explanation: "The mahr is a right of the wife given willingly; it is not a price but a gift of respect and commitment.",
        references: "Surah An-Nisa 4:4"
      },
      {
        question: "Can a poor person marry according to the Quran?",
        options: ["No, only the rich should marry", "Yes, Allah promises to enrich them from His bounty if they marry", "Only if they wait until wealthy", "Poverty prevents marriage permanently"],
        correctAnswer: "Yes, Allah promises to enrich them from His bounty if they marry",
        explanation: "Allah says: 'And marry the unmarried among you... If they should be poor, Allah will enrich them from His bounty.'",
        references: "Surah An-Nur 24:32"
      },
      {
        question: "What is the status of kindness to relatives in the Quran?",
        options: ["Optional", "Commanded immediately after the command to worship Allah alone and be good to parents", "Only for close family", "Not mentioned"],
        correctAnswer: "Commanded immediately after the command to worship Allah alone and be good to parents",
        explanation: "Allah says: 'Worship Allah and associate nothing with Him, and be good to parents and to relatives...'",
        references: "Surah An-Nisa 4:36"
      },
      {
        question: "What is the meaning of 'spouses are garments for one another'?",
        options: ["They cover each other's faults and provide comfort and protection", "They are only for appearance", "They have no deeper meaning", "It refers only to clothing"],
        correctAnswer: "They cover each other's faults and provide comfort and protection",
        explanation: "The Quran describes spouses as garments for one another, indicating closeness, protection, and covering of shortcomings.",
        references: "Surah Al-Baqarah 2:187"
      },
      {
        question: "Is marriage only for fulfilling desire according to Islam?",
        options: ["Yes, that is the only purpose", "No, it is also for tranquillity, building a family, protecting chastity, and completing half of one's religion", "Only for having children", "Only for social status"],
        correctAnswer: "No, it is also for tranquillity, building a family, protecting chastity, and completing half of one's religion",
        explanation: "Marriage serves multiple purposes: companionship, mercy, chastity, family, and is described as half of the deen in meaning.",
        references: "Surah Ar-Rum 30:21; Hadith"
      },
      {
        question: "What should a person do when a suitable, religious match is found?",
        options: ["Delay for years to be sure", "Not delay the marriage without valid reason", "Wait until old age", "Reject it to stay single"],
        correctAnswer: "Not delay the marriage without valid reason",
        explanation: "The Prophet ﷺ instructed not to delay the marriage of a single woman when a suitable match is found.",
        references: "Sunan at-Tirmidhi"
      },
      {
        question: "What is the consequence of breaking the ties of kinship according to the Hadith Qudsi?",
        options: ["Allah will still maintain ties with the person", "Allah will sever His connection with the one who severs the ties of kinship", "No consequence", "Only a small sin"],
        correctAnswer: "Allah will sever His connection with the one who severs the ties of kinship",
        explanation: "Allah said regarding the rahm: 'I will keep good relations with the one who keeps good relations with you, and I will sever relations with the one who severs relations with you.'",
        references: "Sahih Bukhari 5988"
      },
      {
        question: "What is the primary criterion for choosing a spouse emphasized by the Prophet ﷺ?",
        options: ["Wealth and beauty only", "Religion and character", "Family name only", "Physical strength only"],
        correctAnswer: "Religion and character",
        explanation: "While other qualities may be considered, the Prophet ﷺ emphasized choosing the one with religion so that one prospers.",
        references: "Sahih Bukhari 5090"
      },
      {
        question: "Is it permissible to marry for the sake of worldly benefits alone while ignoring religion?",
        options: ["Yes, completely fine", "It is disliked; the primary consideration should be religion", "It is obligatory", "It is the best approach"],
        correctAnswer: "It is disliked; the primary consideration should be religion",
        explanation: "The Prophet ﷺ warned that marrying solely for wealth, status, or beauty without regard to religion leads to loss.",
        references: "Sahih Bukhari 5090"
      },
      {
        question: "What does the Quran say about the relationship between fear of Allah and the wombs (kinship)?",
        options: ["They are unrelated", "Fear Allah and (respect) the wombs; Allah is ever Watchful over you", "Only fear Allah, ignore family", "Family ties are more important than Taqwa"],
        correctAnswer: "Fear Allah and (respect) the wombs; Allah is ever Watchful over you",
        explanation: "In Surah An-Nisa 4:1, Allah links Taqwa with the command regarding the wombs (family ties).",
        references: "Surah An-Nisa 4:1"
      },
      {
        question: "What is a practical way to maintain family ties?",
        options: ["Only when convenient", "Visiting, giving gifts, helping in need, speaking kindly, and keeping contact even if others cut off", "Only on Eid", "Only with those who visit you first"],
        correctAnswer: "Visiting, giving gifts, helping in need, speaking kindly, and keeping contact even if others cut off",
        explanation: "Silat ar-Rahim includes various acts of kindness, support, and maintaining contact according to one's ability and the closeness of the relation.",
        references: "Sahih Bukhari; classical explanations"
      }
    ],
    intermediate: [
      {
        question: "What is the ruling on delaying marriage when a suitable match is available and there is fear of falling into sin?",
        options: ["It is recommended to delay", "It is disliked or even sinful if it leads to haram; marriage should not be delayed without valid reason", "It is obligatory to delay", "Delay has no ruling"],
        correctAnswer: "It is disliked or even sinful if it leads to haram; marriage should not be delayed without valid reason",
        explanation: "Scholars state that if a person fears sin, marriage becomes obligatory. Delaying without justification when a suitable match is present is contrary to the Sunnah.",
        references: "Sunan at-Tirmidhi; classical fiqh"
      },
      {
        question: "What is the relationship between Silat ar-Rahim and Allah's Name Ar-Rahman?",
        options: ["No relationship", "The womb (rahm) is named from Ar-Rahman, and Allah maintains connection with those who maintain family ties", "Only a linguistic coincidence", "It applies only to mothers"],
        correctAnswer: "The womb (rahm) is named from Ar-Rahman, and Allah maintains connection with those who maintain family ties",
        explanation: "In the Hadith Qudsi, Allah states that He derived the name of the rahm from His Name Ar-Rahman and will join those who join it and cut off those who cut it off.",
        references: "Sahih Bukhari 5988; Sahih Muslim"
      },
      {
        question: "What is the minimum obligation in maintaining family ties according to many scholars?",
        options: ["Buying expensive gifts only", "At least exchanging the greeting of salam and not cutting off completely", "Living in the same house", "Giving all one's wealth"],
        correctAnswer: "At least exchanging the greeting of salam and not cutting off completely",
        explanation: "The basic level of maintaining ties includes not severing contact and offering the salam; higher levels include visiting, helping, and giving gifts according to ability.",
        references: "Classical fiqh works; IslamQA"
      },
      {
        question: "Does the obligation of Silat ar-Rahim apply only to Muslim relatives?",
        options: ["Yes, only Muslims", "No, it applies to blood relatives even if they are non-Muslims, though the manner may differ", "Only to parents", "Only to those who are kind"],
        correctAnswer: "No, it applies to blood relatives even if they are non-Muslims, though the manner may differ",
        explanation: "Kindness and maintaining ties are required even with non-Muslim relatives, while not compromising one's religion, as shown in the treatment of non-Muslim parents.",
        references: "Surah Luqman 31:15; classical rulings"
      },
      {
        question: "What is the ruling on a father delaying his daughter's marriage when a suitable, religious proposal is received?",
        options: ["He may delay indefinitely", "It is disliked; he should not delay without valid reason", "He must delay until she is 30", "He has complete free choice with no guidance"],
        correctAnswer: "It is disliked; he should not delay without valid reason",
        explanation: "The Prophet ﷺ instructed not to delay the marriage of a single woman when a well-suited man has proposed.",
        references: "Sunan at-Tirmidhi"
      },
      {
        question: "What are the main financial rights of the wife over her husband?",
        options: ["None", "Mahr, nafaqah (maintenance), and housing according to his means", "Only mahr", "Only clothing"],
        correctAnswer: "Mahr, nafaqah (maintenance), and housing according to his means",
        explanation: "The wife is entitled to her mahr, and the husband must provide food, clothing, and accommodation in a reasonable manner.",
        references: "Surah An-Nisa 4:4; Surah At-Talaq 65:7; Sahih Muslim"
      },
      {
        question: "What is the status of the wife's own wealth after marriage?",
        options: ["It becomes the husband's", "It remains her exclusive property; the husband has no right to take it without her consent", "It is shared equally", "It goes to the children"],
        correctAnswer: "It remains her exclusive property; the husband has no right to take it without her consent",
        explanation: "The wife's wealth, including her mahr and any earnings, remains hers. The husband is responsible for maintenance from his own resources.",
        references: "Surah An-Nisa 4:4; classical fiqh"
      },
      {
        question: "What is the meaning of the hadith that marriage is 'half of the religion'?",
        options: ["Marriage replaces all other acts of worship", "It helps complete and protect one's faith by safeguarding chastity and providing a lawful outlet, making the practice of the rest of the deen easier", "It is only a cultural saying", "It means marriage is more important than prayer"],
        correctAnswer: "It helps complete and protect one's faith by safeguarding chastity and providing a lawful outlet, making the practice of the rest of the deen easier",
        explanation: "The meaning is that marriage protects from major sins related to desire and helps a person focus on the rest of their religious obligations.",
        references: "Hadith narrated in various collections with similar meaning"
      },
      {
        question: "Is the consent of a mature woman required for her marriage?",
        options: ["No, the father decides alone", "Yes, her permission must be sought; a forced marriage is not valid in the proper sense", "Only if she is previously married", "Consent is never required"],
        correctAnswer: "Yes, her permission must be sought; a forced marriage is not valid in the proper sense",
        explanation: "The Prophet ﷺ said the virgin's permission must be sought, and the previously married woman has more right to herself than her guardian.",
        references: "Sahih Bukhari 5136; Sahih Muslim"
      },
      {
        question: "What is the ruling on maintaining ties with relatives who have cut off ties with you?",
        options: ["You may also cut them off", "You are still required to maintain ties from your side; the reward is greater", "Ignore them completely", "Only contact them once a year"],
        correctAnswer: "You are still required to maintain ties from your side; the reward is greater",
        explanation: "The true silat ar-rahim is to uphold the ties even when the other party severs them.",
        references: "Sahih Bukhari 5991"
      },
      {
        question: "What is the connection between the creation of spouses and the signs of Allah?",
        options: ["No connection", "The creation of mates from yourselves, with affection and mercy between them, is one of the signs of Allah for people who reflect", "It is only a biological fact", "It is not mentioned as a sign"],
        correctAnswer: "The creation of mates from yourselves, with affection and mercy between them, is one of the signs of Allah for people who reflect",
        explanation: "Surah Ar-Rum 30:21 presents the creation of spouses and the placement of love and mercy as a clear sign of Allah.",
        references: "Surah Ar-Rum 30:21"
      },
      {
        question: "What is the ruling on a man marrying a woman solely for her beauty while ignoring her religion?",
        options: ["It is the best choice", "It is contrary to the Prophetic advice; religion should be the primary criterion", "It is obligatory", "Beauty is the only criterion"],
        correctAnswer: "It is contrary to the Prophetic advice; religion should be the primary criterion",
        explanation: "The Prophet ﷺ listed four reasons people marry and specifically advised choosing the religious one for success.",
        references: "Sahih Bukhari 5090"
      },
      {
        question: "What is the role of the wali in the Hanafi school compared to the majority?",
        options: ["Identical in all schools", "The majority require the wali; the Hanafi school allows an adult sane woman to contract her own marriage (with conditions), while giving the wali a right to object in certain cases", "No school requires a wali", "Only the mother is the wali"],
        correctAnswer: "The majority require the wali; the Hanafi school allows an adult sane woman to contract her own marriage (with conditions), while giving the wali a right to object in certain cases",
        explanation: "There is a well-known difference of opinion; the majority require the wali, while the Hanafi position is more flexible for adult women.",
        references: "Classical fiqh comparisons"
      },
      {
        question: "What is the consequence of severing family ties in this world according to the Hadith?",
        options: ["No worldly consequence", "Allah may hasten the punishment in this world in addition to what is stored in the Hereafter", "Only loss of money", "Increase in wealth"],
        correctAnswer: "Allah may hasten the punishment in this world in addition to what is stored in the Hereafter",
        explanation: "The Prophet ﷺ said there is no sin more deserving that Allah hasten its punishment in this world, in addition to the Hereafter, than injustice and severing the ties of kinship.",
        references: "Sunan Abu Dawud; Ibn Majah"
      },
      {
        question: "What is the proper attitude toward the wife's family after marriage?",
        options: ["Cut them off completely", "Maintain good relations and kindness as part of Silat ar-Rahim and good character", "Only contact them for money", "Ignore them"],
        correctAnswer: "Maintain good relations and kindness as part of Silat ar-Rahim and good character",
        explanation: "Marriage joins two families. Kindness to the spouse's relatives is part of good character and maintaining broader ties.",
        references: "General principles of Silat ar-Rahim and good treatment"
      },
      {
        question: "What is the ruling on secret marriage (without witnesses or public knowledge) in the view of the majority?",
        options: ["It is preferred", "It is not valid according to the majority because witnesses are required", "It is the Sunnah", "It is only for the poor"],
        correctAnswer: "It is not valid according to the majority because witnesses are required",
        explanation: "The majority of scholars require two witnesses for the validity of the nikah; a completely secret marriage without witnesses is not accepted by them.",
        references: "Classical fiqh"
      },
      {
        question: "What is the meaning of living with wives 'in kindness' (bil-ma'ruf)?",
        options: ["Only providing money", "Treating them with good character, fairness, patience, and respect according to what is recognized as good", "Strict control only", "Ignoring their feelings"],
        correctAnswer: "Treating them with good character, fairness, patience, and respect according to what is recognized as good",
        explanation: "Allah commands: 'Live with them in kindness.' This includes good speech, fair treatment, and consideration.",
        references: "Surah An-Nisa 4:19"
      },
      {
        question: "Is it permissible for a woman to stipulate conditions in the marriage contract?",
        options: ["No, never", "Yes, she may stipulate conditions that are beneficial and not contrary to the Shariah (e.g., not to take another wife, or to live in a certain place), according to many scholars", "Only the man can stipulate", "Conditions invalidate the marriage"],
        correctAnswer: "Yes, she may stipulate conditions that are beneficial and not contrary to the Shariah (e.g., not to take another wife, or to live in a certain place), according to many scholars",
        explanation: "Conditions that do not contradict the purpose of marriage or the Shariah are generally upheld by many scholars.",
        references: "Classical fiqh discussions"
      },
      {
        question: "What is the relationship between marriage and lowering the gaze?",
        options: ["No relationship", "Marriage is a means that helps a person lower the gaze and protect chastity", "Marriage increases the need to look", "Only fasting helps"],
        correctAnswer: "Marriage is a means that helps a person lower the gaze and protect chastity",
        explanation: "The Prophet ﷺ explicitly linked marriage to lowering the gaze and guarding the private parts.",
        references: "Sahih Bukhari 5066"
      },
      {
        question: "What is the ruling on a person who is able to marry but deliberately remains single without valid reason while exposed to temptation?",
        options: ["It is recommended", "It is contrary to the Sunnah and may be sinful if it leads to haram", "It is the highest form of piety", "It has no ruling"],
        correctAnswer: "It is contrary to the Sunnah and may be sinful if it leads to haram",
        explanation: "The Prophet ﷺ encouraged marriage for those who are able, and remaining single while able and exposed to fitnah goes against that guidance.",
        references: "Sahih Bukhari; classical rulings"
      },
      {
        question: "What is the proper response when relatives treat you poorly?",
        options: ["Cut them off permanently", "Continue to maintain ties from your side for the sake of Allah, while protecting yourself from harm", "Seek revenge", "Ignore the command of Silat ar-Rahim"],
        correctAnswer: "Continue to maintain ties from your side for the sake of Allah, while protecting yourself from harm",
        explanation: "The obligation remains even if they cut off. One maintains ties for Allah's sake while taking reasonable measures to avoid harm.",
        references: "Sahih Bukhari 5991"
      },
      {
        question: "What is the significance of the verse 'He created for you from yourselves mates'?",
        options: ["Spouses are created from different species", "Spouses are of the same human nature, suited for companionship and tranquillity", "Only men are created", "It has no practical meaning"],
        correctAnswer: "Spouses are of the same human nature, suited for companionship and tranquillity",
        explanation: "The verse emphasizes that spouses are created from the same kind, so that they find rest and harmony in one another.",
        references: "Surah Ar-Rum 30:21; Surah An-Nahl 16:72"
      },
      {
        question: "What is the ruling on the husband's responsibility when he has more than one wife?",
        options: ["He may favor one completely", "He must maintain justice between them in material rights and time as much as possible", "Justice is not required", "He should neglect all"],
        correctAnswer: "He must maintain justice between them in material rights and time as much as possible",
        explanation: "Allah requires justice among wives. If one fears he cannot do justice, then one is sufficient.",
        references: "Surah An-Nisa 4:3"
      },
      {
        question: "What is the connection between family ties and the expansion of provision?",
        options: ["No connection", "Maintaining family ties is a cause for the expansion of provision and blessing in life, by the promise of the Prophet ﷺ", "Only work expands provision", "Family ties decrease provision"],
        correctAnswer: "Maintaining family ties is a cause for the expansion of provision and blessing in life, by the promise of the Prophet ﷺ",
        explanation: "The Prophet ﷺ explicitly linked upholding kinship ties with increased provision and prolonged life.",
        references: "Sahih Bukhari 5986"
      },
      {
        question: "What is the proper Islamic view on delaying marriage for the sake of lengthy education or career without balancing religious needs?",
        options: ["It is always better", "One should weigh the benefits against the risk of falling into sin; the Sunnah prioritizes protecting chastity", "Education always comes first without limit", "Marriage is never important"],
        correctAnswer: "One should weigh the benefits against the risk of falling into sin; the Sunnah prioritizes protecting chastity",
        explanation: "While seeking knowledge and livelihood is encouraged, deliberately delaying marriage when able and when there is risk of fitnah contradicts the Prophetic guidance.",
        references: "Sahih Bukhari; scholarly discussions"
      },
      {
        question: "What is the ruling on a woman working outside the home after marriage?",
        options: ["Absolutely forbidden", "Permissible with conditions: the work is lawful, her husband consents (or it does not conflict with his rights), and her religious obligations and family duties are not neglected", "Obligatory", "Only if the husband is poor"],
        correctAnswer: "Permissible with conditions: the work is lawful, her husband consents (or it does not conflict with his rights), and her religious obligations and family duties are not neglected",
        explanation: "There is no absolute prohibition, but the primary responsibilities of the home and the husband's rights must be considered.",
        references: "Classical and contemporary fatwas"
      },
      {
        question: "What is the meaning of the Quranic phrase 'and the wombs' in Surah An-Nisa 4:1?",
        options: ["Only the physical organ", "A command to respect and maintain the ties of kinship that originate from the womb", "Only mothers", "It is a metaphor for the earth"],
        correctAnswer: "A command to respect and maintain the ties of kinship that originate from the womb",
        explanation: "The phrase 'wal-arham' is understood by the scholars as a command to uphold the bonds of kinship.",
        references: "Surah An-Nisa 4:1; Tafsir Ibn Kathir and others"
      },
      {
        question: "What is the ruling on giving preference to wealthier relatives over poorer ones in maintaining ties?",
        options: ["It is correct", "One should maintain ties with all according to the closeness of relation and need; neglecting poor relatives while favoring the rich is blameworthy", "Only the rich deserve ties", "Poverty ends the obligation"],
        correctAnswer: "One should maintain ties with all according to the closeness of relation and need; neglecting poor relatives while favoring the rich is blameworthy",
        explanation: "Silat ar-Rahim includes helping relatives according to need. Preferring the wealthy while abandoning the needy among kin is contrary to the spirit of the command.",
        references: "General principles of Silat ar-Rahim and charity"
      },
      {
        question: "What is the Prophetic guidance regarding the treatment of wives during times of disagreement?",
        options: ["Harshness is always required", "Kindness, patience, and living with them in ma'ruf even in difficulty", "Immediate divorce", "Silence forever"],
        correctAnswer: "Kindness, patience, and living with them in ma'ruf even in difficulty",
        explanation: "Allah commands living with them in kindness, and the Prophet ﷺ set the example of patience and good treatment.",
        references: "Surah An-Nisa 4:19; Hadith"
      },
      {
        question: "What is the status of the marriage contract if the mahr is not specified at the time of the contract?",
        options: ["The marriage is invalid", "According to many scholars the marriage is still valid, and a proper mahr (mahr al-mithl) is due", "No mahr is ever due", "The wife loses all rights"],
        correctAnswer: "According to many scholars the marriage is still valid, and a proper mahr (mahr al-mithl) is due",
        explanation: "The majority hold that failure to specify the mahr does not invalidate the nikah; a suitable mahr becomes due.",
        references: "Classical fiqh"
      },
      {
        question: "What is the connection between mercy in the family and the Name of Allah Ar-Rahman?",
        options: ["No connection", "The womb is the embodiment of mercy, named from Ar-Rahman; family relationships should reflect that mercy", "Mercy is only for the poor", "Family is unrelated to divine names"],
        correctAnswer: "The womb is the embodiment of mercy, named from Ar-Rahman; family relationships should reflect that mercy",
        explanation: "The linguistic and hadith connection between rahm and Ar-Rahman teaches that family bonds are an earthly reflection of divine mercy.",
        references: "Sahih Bukhari 5988; linguistic analysis"
      },
      {
        question: "What is the ruling on a person who maintains ties only for worldly benefit (e.g., inheritance or gifts)?",
        options: ["It is the highest form", "The intention should be for the sake of Allah; maintaining ties purely for worldly gain diminishes the reward", "Intention does not matter", "It is forbidden"],
        correctAnswer: "The intention should be for the sake of Allah; maintaining ties purely for worldly gain diminishes the reward",
        explanation: "All acts of worship and obedience, including Silat ar-Rahim, should be done seeking the pleasure of Allah.",
        references: "General principles of ikhlas"
      },
      {
        question: "What is the proper Islamic approach to the modern trend of delaying marriage until late age for career or lifestyle reasons?",
        options: ["It is fully aligned with the Sunnah", "It often contradicts the Prophetic encouragement to marry when able and the warning against unnecessary delay", "It is obligatory in modern times", "The Sunnah has no guidance on timing"],
        correctAnswer: "It often contradicts the Prophetic encouragement to marry when able and the warning against unnecessary delay",
        explanation: "While individual circumstances vary, the general Prophetic guidance is to marry when able and not to delay without justification, especially when there is risk of fitnah.",
        references: "Sahih Bukhari; Sunan at-Tirmidhi; scholarly discussions"
      },
      {
        question: "What is the ruling on the one who severs ties with his parents?",
        options: ["It is a minor issue", "It is one of the major sins; disobedience to parents and severing ties with them is severely condemned", "It is allowed if they are strict", "It has no special ruling"],
        correctAnswer: "It is one of the major sins; disobedience to parents and severing ties with them is severely condemned",
        explanation: "Allah places kindness to parents immediately after the command to worship Him alone, and the Prophet ﷺ listed disobedience to parents among the major sins.",
        references: "Surah An-Nisa 4:36; Sahih Bukhari"
      },
      {
        question: "What is the wisdom behind the command to marry the 'loving and fertile' (wadud walud)?",
        options: ["Only for increasing numbers without purpose", "To build loving families and increase the ummah in a blessed way, as the Prophet ﷺ will boast of the numbers of his ummah", "Fertility is the only criterion", "Love is not important"],
        correctAnswer: "To build loving families and increase the ummah in a blessed way, as the Prophet ﷺ will boast of the numbers of his ummah",
        explanation: "The Prophet ﷺ encouraged marrying the loving and child-bearing so that he may boast of the large numbers of his ummah on the Day of Resurrection.",
        references: "Sunan Abu Dawud; Nasa'i"
      },
      {
        question: "What is the ruling on a person who is financially able and desires marriage but delays it solely for cultural trends of late marriage?",
        options: ["It is the preferred modern path", "It goes against the Prophetic encouragement to marry when able and the warning against unnecessary delay", "It is obligatory in all cases", "The Sunnah encourages maximum delay"],
        correctAnswer: "It goes against the Prophetic encouragement to marry when able and the warning against unnecessary delay",
        explanation: "While individual circumstances vary, following cultural trends of indefinite delay without valid Shariah reason contradicts the clear Prophetic guidance to the youth and the instruction not to delay a suitable match.",
        references: "Sahih Bukhari; Sunan at-Tirmidhi"
      }
    ],
    advanced: [
      {
        question: "What is the precise theological link between Ar-Rahman, the rahm (womb), and Silat ar-Rahim?",
        options: ["Only a linguistic curiosity", "Allah named the womb from His Name Ar-Rahman and pledged to join those who join the ties of kinship and cut off those who cut them off, making family ties a direct manifestation of divine mercy", "The womb has no link to Allah's Names", "It applies only to the physical act of birth"],
        correctAnswer: "Allah named the womb from His Name Ar-Rahman and pledged to join those who join the ties of kinship and cut off those who cut them off, making family ties a direct manifestation of divine mercy",
        explanation: "The Hadith Qudsi establishes that the rahm is derived from Ar-Rahman, and the maintenance or severance of kinship ties has a corresponding response from Allah.",
        references: "Sahih Bukhari 5988; Sahih Muslim; Tafsir"
      },
      {
        question: "How does Surah An-Nisa 4:1 integrate the themes of creation, marriage, and kinship?",
        options: ["It only mentions creation", "It begins with the creation of humanity from one soul, the creation of its mate, the spreading of many men and women, then commands Taqwa of Allah and of the wombs (kinship ties)", "It only discusses inheritance", "It has no link to family"],
        correctAnswer: "It begins with the creation of humanity from one soul, the creation of its mate, the spreading of many men and women, then commands Taqwa of Allah and of the wombs (kinship ties)",
        explanation: "The verse links the origin of the human family to the ongoing obligation of maintaining the ties that arise from that origin.",
        references: "Surah An-Nisa 4:1; Tafsir Ibn Kathir"
      },
      {
        question: "What is the ruling on a condition in the marriage contract that the husband will not take another wife?",
        options: ["It is invalid and the marriage is void", "According to many scholars it is a valid and binding condition; if he violates it, she may have the right to seek annulment or divorce", "It is always forbidden", "It has no legal effect"],
        correctAnswer: "According to many scholars it is a valid and binding condition; if he violates it, she may have the right to seek annulment or divorce",
        explanation: "Conditions that benefit the wife and do not contradict the Shariah are upheld by a significant number of scholars.",
        references: "Classical fiqh discussions (e.g., Hanbali and others)"
      },
      {
        question: "What is the precise understanding of justice (adl) required between wives?",
        options: ["Emotional equality in the heart is required", "Justice in material rights, time, and outward treatment is required; complete equality of the heart's inclination is not possible and not demanded", "No justice is required", "Only financial equality"],
        correctAnswer: "Justice in material rights, time, and outward treatment is required; complete equality of the heart's inclination is not possible and not demanded",
        explanation: "Allah says 'you will never be able to be equal between wives, even if you should strive,' yet commands not to incline completely away from one. Outward justice is obligatory.",
        references: "Surah An-Nisa 4:129"
      },
      {
        question: "What is the status of a marriage conducted without the bride's consent in the view of the majority of scholars?",
        options: ["Fully valid", "Invalid or at least the woman has the right to annul it; forced marriage is not the Islamic model", "Only valid if the father forces", "Valid only for minors"],
        correctAnswer: "Invalid or at least the woman has the right to annul it; forced marriage is not the Islamic model",
        explanation: "The Prophet ﷺ gave a woman who was married against her will the choice to accept or annul the marriage. Consent is fundamental.",
        references: "Sahih Bukhari; Sahih Muslim; classical rulings"
      },
      {
        question: "How does the concept of 'garments for one another' inform the mutual rights of spouses?",
        options: ["It has no practical implication", "It indicates closeness, protection, covering of faults, comfort, and mutual adornment — requiring kindness, privacy, and support from both sides", "It only means physical covering", "It means one spouse owns the other"],
        correctAnswer: "It indicates closeness, protection, covering of faults, comfort, and mutual adornment — requiring kindness, privacy, and support from both sides",
        explanation: "The metaphor of garments teaches that spouses protect, beautify, and conceal each other's shortcomings, forming the basis for mutual good treatment.",
        references: "Surah Al-Baqarah 2:187; Tafsir"
      },
      {
        question: "What is the ruling on the one who maintains outward family ties while harboring hatred and cutting off the spirit of the relationship?",
        options: ["It fully fulfills the obligation", "The outward acts are good, but the heart should also be reformed; complete Silat ar-Rahim includes good intention and avoidance of harm", "Intention is irrelevant", "Outward acts are forbidden"],
        correctAnswer: "The outward acts are good, but the heart should also be reformed; complete Silat ar-Rahim includes good intention and avoidance of harm",
        explanation: "While the minimum may be fulfilled by not severing contact, the complete and rewarded form includes sincerity and the spirit of mercy that the name rahm implies.",
        references: "General principles of ikhlas and Silat ar-Rahim"
      },
      {
        question: "What is the relationship between the fear of Allah (Taqwa) and the command regarding the wombs in Surah An-Nisa 4:1?",
        options: ["They are separate commands", "Taqwa of Allah is linked directly to reverence for the ties of kinship; the same watchfulness of Allah applies to both", "Only Taqwa matters", "Kinship is more important than Taqwa"],
        correctAnswer: "Taqwa of Allah is linked directly to reverence for the ties of kinship; the same watchfulness of Allah applies to both",
        explanation: "The verse joins 'fear Allah' with 'and the wombs,' and concludes that Allah is ever Watchful, applying to both domains.",
        references: "Surah An-Nisa 4:1; Tafsir"
      },
      {
        question: "What is the advanced understanding of why the Prophet ﷺ linked marriage to the protection of the private parts and lowering of the gaze?",
        options: ["Only a physical recommendation", "Marriage provides a lawful means for the fulfillment of desire, thereby protecting the individual and society from the widespread corruption of zina and its consequences", "It has no social dimension", "It is only for the weak"],
        correctAnswer: "Marriage provides a lawful means for the fulfillment of desire, thereby protecting the individual and society from the widespread corruption of zina and its consequences",
        explanation: "The hadith addresses both the individual (lowering gaze, guarding chastity) and the societal benefit of reducing fitnah and corruption.",
        references: "Sahih Bukhari 5066; scholarly explanations"
      },
      {
        question: "What is the ruling on a guardian who refuses a suitable, religious proposal for his daughter without valid Shariah reason?",
        options: ["He has absolute right", "He is sinful for preventing a suitable marriage; in some cases the authority may transfer to another guardian or the judge", "The daughter has no recourse", "It is recommended to refuse"],
        correctAnswer: "He is sinful for preventing a suitable marriage; in some cases the authority may transfer to another guardian or the judge",
        explanation: "Unjustified prevention of marriage when a suitable match is present is contrary to the Sunnah and may lead to the transfer of wilaya in some schools.",
        references: "Classical fiqh; Hadith on not delaying marriage"
      },
      {
        question: "How does the Quranic description of spouses as a source of 'tranquillity' (sakinah) inform the purpose of marriage beyond mere physical relation?",
        options: ["Tranquillity is only physical", "Marriage is intended to provide emotional, psychological, and spiritual rest and stability, making the home a place of peace", "Tranquillity is not important", "Only children provide tranquillity"],
        correctAnswer: "Marriage is intended to provide emotional, psychological, and spiritual rest and stability, making the home a place of peace",
        explanation: "The word 'litaskunu ilayha' indicates that the purpose is to find repose and calm in the spouse, a deeper objective than desire alone.",
        references: "Surah Ar-Rum 30:21; Tafsir"
      },
      {
        question: "What is the precise meaning of the hadith that the one who severs kinship will not enter Paradise?",
        options: ["He is permanently barred with no hope", "It refers to the one who persists in severing ties without repentance; the threat is severe but repentance is accepted", "It is only a metaphor", "It applies only to cutting parents"],
        correctAnswer: "It refers to the one who persists in severing ties without repentance; the threat is severe but repentance is accepted",
        explanation: "Scholars explain that the hadith warns of a major sin whose perpetrator is under threat of being barred from Paradise if he dies without repenting from the persistent severance of ties.",
        references: "Sahih Bukhari 5984; explanations of the scholars"
      },
      {
        question: "What is the advanced ruling on the mahr when the marriage is consummated and then ended?",
        options: ["The full mahr is always returned", "If the marriage is consummated, the full mahr is due to the wife; if divorced before consummation, half is due unless she or the one on her side waives it", "No mahr is ever due after divorce", "The husband keeps everything"],
        correctAnswer: "If the marriage is consummated, the full mahr is due to the wife; if divorced before consummation, half is due unless she or the one on her side waives it",
        explanation: "This is based on clear Quranic rulings in Surah Al-Baqarah regarding the mahr in cases of divorce before and after consummation.",
        references: "Surah Al-Baqarah 2:236-237"
      },
      {
        question: "What is the relationship between the command to marry and the protection of the broader society from fitnah?",
        options: ["No relationship", "When suitable marriages are facilitated and not delayed, it reduces the prevalence of zina and social corruption; when delayed without reason, temptation and corruption increase", "Marriage has no social effect", "Only individual piety matters"],
        correctAnswer: "When suitable marriages are facilitated and not delayed, it reduces the prevalence of zina and social corruption; when delayed without reason, temptation and corruption increase",
        explanation: "The Prophet ﷺ linked the refusal of a suitable proposal to the spread of fitnah and widespread corruption on earth.",
        references: "Sunan at-Tirmidhi; related narrations"
      },
      {
        question: "What is the correct understanding of the husband's degree (darajah) over the wife mentioned in the Quran?",
        options: ["It means absolute tyranny", "It refers to a degree of responsibility and leadership in the family, accompanied by greater obligations, not oppression", "It means the wife has no rights", "It is abrogated"],
        correctAnswer: "It refers to a degree of responsibility and leadership in the family, accompanied by greater obligations, not oppression",
        explanation: "The degree is one of responsibility (qiwamah), which comes with the duty of maintenance, protection, and kind treatment, not unrestricted power.",
        references: "Surah Al-Baqarah 2:228; Surah An-Nisa 4:34; Tafsir"
      },
      {
        question: "How should a Muslim balance the modern emphasis on prolonged single life for self-development with the Prophetic guidance on marriage?",
        options: ["Completely ignore the Sunnah", "Pursue beneficial education and stability while not unnecessarily delaying marriage when one is able and a suitable match is available, prioritizing the protection of chastity", "Never marry until age 40", "Marriage is only for the uneducated"],
        correctAnswer: "Pursue beneficial education and stability while not unnecessarily delaying marriage when one is able and a suitable match is available, prioritizing the protection of chastity",
        explanation: "Islam encourages both seeking knowledge and livelihood and marrying when able. The two should be balanced without falling into the extreme of indefinite delay that exposes one to fitnah.",
        references: "Sahih Bukhari; scholarly contemporary discussions"
      },
      {
        question: "What is the ruling on the one who maintains family ties selectively — only with those who benefit him — while neglecting others?",
        options: ["It fully fulfills Silat ar-Rahim", "It is deficient; true Silat ar-Rahim includes maintaining ties according to the degree of kinship and need, not only worldly benefit", "Selectivity is recommended", "Only the rich deserve ties"],
        correctAnswer: "It is deficient; true Silat ar-Rahim includes maintaining ties according to the degree of kinship and need, not only worldly benefit",
        explanation: "The obligation is based on the blood relationship and the command of Allah, not on the material benefit one receives.",
        references: "Principles of Silat ar-Rahim"
      },
      {
        question: "What is the advanced understanding of the phrase 'Allah will enrich them from His bounty' in the context of marriage for the poor?",
        options: ["It is a guarantee of sudden wealth", "It is a promise that Allah will provide sufficiency and blessing for those who marry seeking His pleasure, removing the fear of poverty as a barrier to marriage", "It means poverty is preferred", "It has no practical meaning"],
        correctAnswer: "It is a promise that Allah will provide sufficiency and blessing for those who marry seeking His pleasure, removing the fear of poverty as a barrier to marriage",
        explanation: "The verse encourages marriage even for the poor by promising that Allah will enrich them, countering the fear that poverty prevents marriage.",
        references: "Surah An-Nur 24:32; Tafsir"
      },
      {
        question: "What is the precise role of affection (mawaddah) and mercy (rahmah) in the Quranic vision of marriage?",
        options: ["They are optional feelings", "They are divinely placed components that make the marital relationship a source of tranquillity and a sign of Allah; spouses should nurture them", "They are only for the beginning of marriage", "They are unrelated to the purpose of marriage"],
        correctAnswer: "They are divinely placed components that make the marital relationship a source of tranquillity and a sign of Allah; spouses should nurture them",
        explanation: "Allah states that He placed affection and mercy between spouses. These are both a gift and a responsibility to cultivate.",
        references: "Surah Ar-Rum 30:21"
      },
      {
        question: "What is the ruling on a person who cuts off ties with relatives because of a worldly dispute over inheritance or property?",
        options: ["It is justified", "It is still a form of severing the ties of kinship and is sinful; worldly disputes do not cancel the religious obligation", "Inheritance ends all ties", "Only the one who is wronged may cut off"],
        correctAnswer: "It is still a form of severing the ties of kinship and is sinful; worldly disputes do not cancel the religious obligation",
        explanation: "Silat ar-Rahim is a religious duty independent of worldly agreements or disagreements. Disputes should be resolved without cutting the blood ties.",
        references: "General rulings on Silat ar-Rahim"
      },
      {
        question: "How does the Prophet's ﷺ own example of marriage inform the timing and approach to nikah?",
        options: ["He delayed all marriages until old age", "He married at various stages, encouraged the youth, and his household demonstrated kindness, patience, and fulfilment of rights", "He avoided marriage", "His example has no relevance today"],
        correctAnswer: "He married at various stages, encouraged the youth, and his household demonstrated kindness, patience, and fulfilment of rights",
        explanation: "The Prophet ﷺ married, encouraged marriage, and set the highest standard of treatment of wives, providing a complete model.",
        references: "Sahih Bukhari; Sahih Muslim; Seerah"
      },
      {
        question: "What is the advanced understanding of the mutual rights described as 'similar to what is reasonable' (bil-ma'ruf)?",
        options: ["Rights are identical in every detail", "Rights are reciprocal in the sense of fairness and kindness according to what is recognized as good, while acknowledging the different roles and responsibilities of each spouse", "The husband has all rights", "The wife has all rights"],
        correctAnswer: "Rights are reciprocal in the sense of fairness and kindness according to what is recognized as good, while acknowledging the different roles and responsibilities of each spouse",
        explanation: "Surah Al-Baqarah 2:228 establishes that women have rights similar to the obligations upon them, according to what is reasonable, while men have a degree of responsibility.",
        references: "Surah Al-Baqarah 2:228; Tafsir"
      },
      {
        question: "What is the ruling on the one who uses the excuse of 'modern life' or 'career first' to indefinitely postpone marriage while able and exposed to temptation?",
        options: ["It is fully Islamic", "It requires serious self-examination; the Prophetic guidance prioritizes protecting chastity and does not endorse indefinite delay without justification", "It is the only correct path", "The Sunnah is silent on the matter"],
        correctAnswer: "It requires serious self-examination; the Prophetic guidance prioritizes protecting chastity and does not endorse indefinite delay without justification",
        explanation: "While individual circumstances differ, the general thrust of the Sunnah is encouragement of marriage when able and warning against unnecessary delay that opens the door to fitnah.",
        references: "Sahih Bukhari; Sunan at-Tirmidhi; contemporary scholarly advice"
      },
      {
        question: "What is the comprehensive wisdom behind linking the womb to the Name of Allah Ar-Rahman in the context of family and society?",
        options: ["Only a linguistic note", "It teaches that the family bond is sacred, rooted in divine mercy, and that maintaining it is a way of connecting to Allah's mercy, while severing it is a way of being cut off from that mercy", "It has no social implication", "It only concerns mothers and children"],
        correctAnswer: "It teaches that the family bond is sacred, rooted in divine mercy, and that maintaining it is a way of connecting to Allah's mercy, while severing it is a way of being cut off from that mercy",
        explanation: "The naming of the rahm from Ar-Rahman elevates family ties from a social custom to a theological reality connected to the Most Merciful.",
        references: "Sahih Bukhari 5988; linguistic and theological analysis"
      },
      {
        question: "What is the final outcome promised to those who maintain family ties and fear Allah regarding the wombs?",
        options: ["Only worldly benefit", "Increase in provision, prolongation of life, connection with Allah's mercy, and ultimately Paradise, while the one who severs is under threat of being cut off from that mercy", "No special outcome", "Only punishment"],
        correctAnswer: "Increase in provision, prolongation of life, connection with Allah's mercy, and ultimately Paradise, while the one who severs is under threat of being cut off from that mercy",
        explanation: "The combined teachings of the Quran and Sunnah show both worldly and Hereafter consequences for maintaining or severing the ties of kinship.",
        references: "Sahih Bukhari 5986, 5988; Surah An-Nisa 4:1; Surah Ar-Ra'd 13:21, 13:25"
      },
      {
        question: "What is the advanced balance between the rights of the husband and the rights of the wife in light of the Quran and Sunnah?",
        options: ["One side has all rights", "Both have rights and responsibilities; the husband has a degree of leadership with greater financial and protective duties, while the wife has rights to kind treatment, maintenance, and dignity, and both are commanded to live in ma'ruf", "Rights are identical in every function", "The concept of rights is modern and not Islamic"],
        correctAnswer: "Both have rights and responsibilities; the husband has a degree of leadership with greater financial and protective duties, while the wife has rights to kind treatment, maintenance, and dignity, and both are commanded to live in ma'ruf",
        explanation: "The Quran and Sunnah establish a balanced system of mutual rights and complementary roles, not oppression or identical functions.",
        references: "Surah Al-Baqarah 2:228; Surah An-Nisa 4:19, 4:34; Hadith"
      },
      {
        question: "What is the ultimate purpose of marriage and family ties in the larger framework of Islamic life?",
        options: ["Only worldly comfort", "To achieve tranquillity, protect chastity, build a righteous family that worships Allah, maintain the sacred bonds of kinship that reflect divine mercy, and ultimately attain the pleasure of Allah and Paradise", "Only to increase population", "Only to fulfill social expectations"],
        correctAnswer: "To achieve tranquillity, protect chastity, build a righteous family that worships Allah, maintain the sacred bonds of kinship that reflect divine mercy, and ultimately attain the pleasure of Allah and Paradise",
        explanation: "Marriage and Silat ar-Rahim are not ends in themselves but means to individual purification, family righteousness, social cohesion, and nearness to Allah, the Most Merciful.",
        references: "Surah Ar-Rum 30:21; Surah An-Nisa 4:1; Sahih Bukhari; overall Quranic worldview"
      },
      {
        question: "What is the precise implication of the Hadith that kinship (rahm) stood up and sought protection from being cut off?",
        options: ["It is a metaphorical story only", "It establishes that the bond of kinship has a real status with Allah, who grants its request to maintain those who maintain it and cut off those who cut it off", "It has no practical ruling", "It only concerns mothers"],
        correctAnswer: "It establishes that the bond of kinship has a real status with Allah, who grants its request to maintain those who maintain it and cut off those who cut it off",
        explanation: "The authentic hadith personifies the rahm seeking refuge with Allah, and Allah's response makes the maintenance or severance of kinship ties a matter of direct divine reciprocal action.",
        references: "Sahih Bukhari; Sahih Muslim"
      },
      {
        question: "What is the ruling on a marriage in which the primary intention is solely worldly (status, wealth, or beauty) with no regard for religion?",
        options: ["It is the ideal", "It is valid as a contract if the pillars are present, but it is contrary to the Prophetic advice and likely to lack barakah", "It is invalid", "Intention has no effect"],
        correctAnswer: "It is valid as a contract if the pillars are present, but it is contrary to the Prophetic advice and likely to lack barakah",
        explanation: "The contract may be legally valid, but the Prophet ﷺ specifically directed believers to prioritize religion for true success and blessing.",
        references: "Sahih Bukhari 5090"
      },
      {
        question: "How does the Quranic command to 'live with them in kindness' interact with the husband's degree of responsibility?",
        options: ["The degree cancels kindness", "The degree of qiwamah (responsibility) is exercised through and limited by the obligation of kind treatment; it is not a license for harshness", "Kindness is only for the wife to show", "There is no interaction"],
        correctAnswer: "The degree of qiwamah (responsibility) is exercised through and limited by the obligation of kind treatment; it is not a license for harshness",
        explanation: "The Quran combines the degree given to men with the repeated command of living in ma'ruf and the Prophetic example of excellent treatment of wives.",
        references: "Surah An-Nisa 4:19, 4:34; Hadith"
      },
      {
        question: "What is the advanced understanding of why Allah links the command regarding the wombs immediately with the command to fear Him?",
        options: ["It is coincidental", "Because the ties of kinship are so important that reverence for them is placed alongside Taqwa, and both are under Allah's watchful observation", "Kinship is more important than Taqwa", "Taqwa cancels family obligations"],
        correctAnswer: "Because the ties of kinship are so important that reverence for them is placed alongside Taqwa, and both are under Allah's watchful observation",
        explanation: "The structure of Surah An-Nisa 4:1 elevates Silat ar-Rahim to a level where it is mentioned in the same breath as the fear of Allah.",
        references: "Surah An-Nisa 4:1; Tafsir"
      },
      {
        question: "What is the ruling on a person who fulfills the outward forms of Silat ar-Rahim (visits, gifts) but does so with arrogance or to seek praise?",
        options: ["It is the highest form", "The outward acts are still beneficial, but the lack of sincerity reduces or nullifies the spiritual reward; intention must be for Allah", "Outward acts are forbidden without perfect intention", "Intention is irrelevant"],
        correctAnswer: "The outward acts are still beneficial, but the lack of sincerity reduces or nullifies the spiritual reward; intention must be for Allah",
        explanation: "Like all acts of obedience, Silat ar-Rahim requires ikhlas. Showing off or arrogance contaminates the deed.",
        references: "General principles of ikhlas"
      },
      {
        question: "What is the precise balance between the encouragement of early marriage and the requirement of capability (ability to maintain and fulfill rights)?",
        options: ["Marry regardless of ability", "The encouragement is for those who are able; capability includes financial, physical, and mental readiness to fulfill the rights of marriage", "Ability is never considered", "Only age matters"],
        correctAnswer: "The encouragement is for those who are able; capability includes financial, physical, and mental readiness to fulfill the rights of marriage",
        explanation: "The Prophet ﷺ said 'whoever among you is able to marry.' Ability is a condition; marriage should not be entered in a way that leads to neglect of rights.",
        references: "Sahih Bukhari 5066; classical fiqh"
      },
      {
        question: "What is the ruling on cutting off a relative who is openly engaged in major sin or harm, while still maintaining the basic tie?",
        options: ["Complete severance is required", "One may limit interaction to protect oneself and one's family from harm, while not completely severing the blood tie and still offering the basic rights of kinship where possible", "No limitation is allowed", "One must support the sin"],
        correctAnswer: "One may limit interaction to protect oneself and one's family from harm, while not completely severing the blood tie and still offering the basic rights of kinship where possible",
        explanation: "Protecting oneself from harm is legitimate, but the blood relationship remains, and the basic obligation of not completely cutting off should be observed as much as possible.",
        references: "Scholarly discussions on Silat ar-Rahim with harmful relatives"
      },
      {
        question: "What is the comprehensive Quranic vision of the family as presented in the opening of Surah An-Nisa?",
        options: ["Only a social unit", "A divinely originated institution beginning from one soul, expanded through the spouse, multiplied into humanity, and bound by the sacred ties of the womb that must be revered under the watch of Allah", "Only about inheritance", "Only about gender roles"],
        correctAnswer: "A divinely originated institution beginning from one soul, expanded through the spouse, multiplied into humanity, and bound by the sacred ties of the womb that must be revered under the watch of Allah",
        explanation: "Surah An-Nisa 4:1 presents the entire human family as originating from a single act of creation and bound by the ongoing obligation of the arham.",
        references: "Surah An-Nisa 4:1; Tafsir"
      },
      {
        question: "What is the ultimate criterion for success in marriage and family life according to the combined teachings of the Quran and Sunnah?",
        options: ["Wealth and status", "Taqwa, kind treatment, fulfilment of mutual rights, maintenance of kinship ties for the sake of Allah, and seeking the tranquillity and mercy that Allah places between spouses", "Only the number of children", "Social appearance"],
        correctAnswer: "Taqwa, kind treatment, fulfilment of mutual rights, maintenance of kinship ties for the sake of Allah, and seeking the tranquillity and mercy that Allah places between spouses",
        explanation: "Success is measured by the degree to which the marriage and family relations fulfil the purposes outlined in the Quran and the example of the Prophet ﷺ — tranquillity, mercy, chastity, righteousness, and connection to Allah's mercy through the rahm.",
        references: "Surah Ar-Rum 30:21; Surah An-Nisa 4:1, 4:19; Sahih Bukhari; overall guidance"
      }
    ]
  }
}

export default marriageCategory

