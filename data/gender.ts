import type { QuizCategory } from "@/types/quiz";

const genderCategory: QuizCategory = {
  id: "gender",
  title: "Hinduism",
  description: "Explore the commonalities and differences between Islam and Hinduism",
  icon: "",
  levels: {
    easy: [
        {
    question: "What does the Quran say about the creation of men and women?",
    options: [
      "Women were created from men's ribs",
      "Both genders were created from a single soul (nafs wahidah)",
      "Men were created first, then women",
      "Women are a separate creation"
    ],
    correctAnswer: "Both genders were created from a single soul (nafs wahidah)",
    explanation: "The Quran states in Surah An-Nisa (4:1): 'O mankind, fear your Lord, who created you from one soul (nafs wahidah) and created from it its mate...' This emphasizes the equal origin of men and women."
  },
  {
    question: "In Islam, are women allowed to own property?",
    options: [
      "No, only men can own property",
      "Yes, women have full financial independence",
      "Only with their husband's permission",
      "Only if they are unmarried"
    ],
    correctAnswer: "Yes, women have full financial independence",
    explanation: "Islamic law grants women the right to own, inherit, and manage property independently. This was revolutionary compared to pre-Islamic societies. (Quran 4:7, 4:32)"
  },
  {
    question: "What did Prophet Muhammad (ﷺ) say about treating women?",
    options: [
      "Women should be obedient without question",
      "The best of you are those who are best to their women",
      "Women must always stay at home",
      "Women should not be educated"
    ],
    correctAnswer: "The best of you are those who are best to their women",
    explanation: "The Prophet (ﷺ) said: 'The best of you are the best to their women.' (Tirmidhi 1162, authenticated by Al-Albani). This highlights kindness and respect towards women."
  },
  {
    question: "In Islam, can a woman seek divorce?",
    options: [
      "No, only men can initiate divorce",
      "Yes, through Khula' (a woman's right to seek separation)",
      "Only if her father approves",
      "Only in cases of abuse"
    ],
    correctAnswer: "Yes, through Khula' (a woman's right to seek separation)",
    explanation: "A woman has the right to seek Khula' (dissolution of marriage) if she is unhappy. This is established in the Quran (2:229) and Sunnah (Bukhari 5273)."
  },
  {
    question: "What does the Quran say about a mother's status?",
    options: [
      "Mothers must obey their sons",
      "Paradise lies under the feet of mothers",
      "Mothers have no special status",
      "Only fathers are to be respected"
    ],
    correctAnswer: "Paradise lies under the feet of mothers",
    explanation: "A man asked the Prophet (ﷺ), 'Who deserves my best companionship?' He replied, 'Your mother' three times, then 'your father.' (Bukhari 5971). This shows a mother's unparalleled status."
  },
  {
    question: "Can women work outside the home in Islam?",
    options: [
      "No, women must stay at home",
      "Yes, if the work complies with Islamic guidelines",
      "Only in medical fields",
      "Only if they are poor"
    ],
    correctAnswer: "Yes, if the work complies with Islamic guidelines",
    explanation: "Khadija (RA), the Prophet's (ﷺ) wife, was a successful merchant. Islam permits women to work while observing modesty and Sharia principles. (Quran 28:23-26)"
  },
  {
    question: "What is the Islamic ruling on female education?",
    options: [
      "Women should not be educated",
      "Education is obligatory for both men and women",
      "Only religious education is allowed",
      "Only until puberty"
    ],
    correctAnswer: "Education is obligatory for both men and women",
    explanation: "The Prophet (ﷺ) said: 'Seeking knowledge is obligatory upon every Muslim.' (Ibn Majah 224, authenticated by Al-Albani). This includes women, as seen with scholars like Aisha (RA)."
  },
  {
    question: "How does Islam view women's consent in marriage?",
    options: [
      "A father can marry his daughter without her consent",
      "A woman's explicit consent is required",
      "Only widows need to consent",
      "Consent is optional"
    ],
    correctAnswer: "A woman's explicit consent is required",
    explanation: "The Prophet (ﷺ) said: 'A virgin cannot be married until her permission is sought.' (Bukhari 6968). Forced marriages are invalid in Islam."
  },
  {
    question: "What is the Quranic ruling on inheritance for women?",
    options: [
      "Women inherit half of what men inherit",
      "Women cannot inherit",
      "Women and men inherit equally",
      "Only sons inherit"
    ],
    correctAnswer: "Women inherit half of what men inherit",
    explanation: "Quran 4:11 specifies inheritance shares, where a daughter receives half of a son's share. This is because men are financially responsible for women in Islamic law."
  },
  {
    question: "Did the Prophet (ﷺ) have any female teachers?",
    options: [
      "No, he only learned from men",
      "Yes, he learned from his wife Khadija (RA)",
      "Only from his mother",
      "Only from angel Jibreel"
    ],
    correctAnswer: "Yes, he learned from his wife Khadija (RA)",
    explanation: "Khadija (RA) was the first to comfort and guide the Prophet (ﷺ) after the first revelation, showing her role as a mentor. (Bukhari 4953)"
  },
  {
    question: "What did the Prophet (ﷺ) say about raising daughters?",
    options: [
      "Daughters are a burden",
      "Whoever raises daughters well will enter Paradise",
      "Sons are preferable",
      "Daughters should not be educated"
    ],
    correctAnswer: "Whoever raises daughters well will enter Paradise",
    explanation: "The Prophet (ﷺ) said: 'Whoever takes care of two girls until they reach adulthood, he and I will come on the Day of Resurrection like this' (holding his fingers together). (Muslim 2631)"
  },
  {
    question: "Can women participate in Islamic scholarship?",
    options: [
      "No, only men can be scholars",
      "Yes, women can be scholars and jurists",
      "Only in teaching children",
      "Only if they are elderly"
    ],
    correctAnswer: "Yes, women can be scholars and jurists",
    explanation: "Aisha (RA) was one of the greatest Hadith narrators and jurists. Many female scholars, like Fatima al-Fihri, contributed to Islamic knowledge."
  },
  {
    question: "What is the Islamic ruling on dowry (mahr)?",
    options: [
      "It is optional",
      "It is a mandatory gift from the husband to the wife",
      "Only wealthy husbands must pay it",
      "It belongs to the wife's father"
    ],
    correctAnswer: "It is a mandatory gift from the husband to the wife",
    explanation: "The Quran says: 'And give the women their dowry as a free gift.' (4:4). The mahr is the wife's exclusive right."
  },
  {
    question: "Are women allowed to refuse marriage proposals?",
    options: [
      "No, fathers decide",
      "Yes, they have full veto power",
      "Only if the groom is poor",
      "Only if they are over 30"
    ],
    correctAnswer: "Yes, they have full veto power",
    explanation: "The Prophet (ﷺ) annulled a forced marriage when a girl objected, saying: 'She is not to be married without her consent.' (Ibn Majah 1873)"
  },
  {
    question: "What did the Prophet (ﷺ) say about a husband's treatment of his wife?",
    options: [
      "He can be harsh if she disobeys",
      "The best of you are the best to their wives",
      "Wives must serve husbands unconditionally",
      "A husband’s authority is absolute"
    ],
    correctAnswer: "The best of you are the best to their wives",
    explanation: "The Prophet (ﷺ) said: 'The best of you are those who are best to their wives.' (Tirmidhi 1162). Kindness is obligatory."
  },
  {
    question: "Can women lead prayers?",
    options: [
      "Yes, in all cases",
      "Only for other women",
      "Never",
      "Only at home"
    ],
    correctAnswer: "Only for other women",
    explanation: "Umm Waraqa (RA) was appointed by the Prophet (ﷺ) to lead her household in prayer (Abu Dawud 592). Women can lead women-only congregations."
  },
  {
    question: "What is the Quranic view on modesty for men and women?",
    options: [
      "Only women must be modest",
      "Both genders have modesty obligations",
      "Modesty is cultural, not Islamic",
      "Only in the mosque"
    ],
    correctAnswer: "Both genders have modesty obligations",
    explanation: "Quran 24:30-31 commands both men and women to lower their gaze and dress modestly. Modesty is a shared responsibility."
  },
  {
    question: "Did women participate in battles during the Prophet's (ﷺ) time?",
    options: [
      "No, warfare was men-only",
      "Yes, as fighters and medics",
      "Only as cooks",
      "Only in defensive battles"
    ],
    correctAnswer: "Yes, as fighters and medics",
    explanation: "Nusaybah bint Ka’ab (RA) fought in Uhud, and Rufayda al-Aslamiya (RA) ran a field hospital. Women actively supported jihad. (Musnad Ahmad 1855)"
  },
  {
    question: "Can women travel without a mahram?",
    options: [
      "Never",
      "Yes, if the journey is safe",
      "Only for Hajj",
      "Only with permission"
    ],
    correctAnswer: "Yes, if the journey is safe",
    explanation: "Classical scholars permitted women to travel alone if safety is ensured (e.g., group travel, secure transport). The mahram rule is for protection, not restriction. (Bukhari 1088)"
  },
  {
    question: "What is the Islamic ruling on women's voices in public?",
    options: [
      "Women must always whisper",
      "They can speak normally but with modesty",
      "Only elderly women may speak",
      "Women cannot speak to non-mahram men"
    ],
    correctAnswer: "They can speak normally but with modesty",
    explanation: "The Prophet (ﷺ) conversed with women directly (Bukhari 5766). Modesty in speech is required, not silence."
  },
  {
    question: "Are women allowed to refuse intimacy with their husbands?",
    options: [
      "No, it is obligatory",
      "Yes, with valid reasons",
      "Only during Ramadan",
      "Only if the husband agrees"
    ],
    correctAnswer: "Yes, with valid reasons",
    explanation: "The Prophet (ﷺ) said: 'When a man calls his wife to bed and she refuses, the angels curse her until morning.' (Bukhari 5193). However, valid reasons (illness, exhaustion) are exempt."
  },
  {
    question: "What is the Quranic ruling on polygyny?",
    options: [
      "Men can marry unlimited wives",
      "Up to four wives with strict justice conditions",
      "Only if the first wife approves",
      "Polygyny is discouraged"
    ],
    correctAnswer: "Up to four wives with strict justice conditions",
    explanation: "Quran 4:3 permits up to four wives but warns: 'If you fear you cannot be just, then only one.' Justice is mandatory."
  },
  {
    question: "Can women be judges in Islamic courts?",
    options: [
      "No, only men can judge",
      "Yes, in all cases",
      "Only in family law cases",
      "Only if no male judge is available"
    ],
    correctAnswer: "Only in family law cases",
    explanation: "Imam Abu Hanifa allowed female judges in civil matters. Some scholars restrict it due to Hadith on leadership, but historical examples exist."
  },
  {
    question: "What is the Islamic ruling on women's testimony in court?",
    options: [
      "Two women equal one man in all cases",
      "Women cannot testify",
      "Equal testimony in non-financial cases",
      "Only in women's issues"
    ],
    correctAnswer: "Equal testimony in non-financial cases",
    explanation: "Quran 2:282 specifies two female witnesses in financial contracts (for accuracy), but in other cases (e.g., marriage, crimes), women testify equally."
  },
  {
    question: "Did the Prophet (ﷺ) consult his wives on state matters?",
    options: [
      "No, he only consulted men",
      "Yes, frequently",
      "Only on household issues",
      "Only Khadija (RA)"
    ],
    correctAnswer: "Yes, frequently",
    explanation: "Umm Salamah (RA) advised the Prophet (ﷺ) during Hudaybiyyah, leading to a pivotal treaty. (Sunan Abu Dawud 2762)"
  },
  {
    question: "What is the Islamic ruling on women's mosque attendance?",
    options: [
      "Women should never go to mosques",
      "They can go but praying at home is better",
      "Only on Fridays",
      "Mosques are for men only"
    ],
    correctAnswer: "They can go but praying at home is better",
    explanation: "The Prophet (ﷺ) said: 'Do not prevent women from going to mosques, but their homes are better for them.' (Abu Dawud 567). It’s permitted but not obligatory."
  },
  {
    question: "Can women initiate marriage proposals?",
    options: [
      "No, only men can propose",
      "Yes, Khadija (RA) proposed to the Prophet (ﷺ)",
      "Only through a male guardian",
      "Only in secret"
    ],
    correctAnswer: "Yes, Khadija (RA) proposed to the Prophet (ﷺ)",
    explanation: "Khadija (RA) sent a marriage proposal to the Prophet (ﷺ) via her friend Nafisa. (Bukhari 4953). Women can express interest respectfully."
  },
  {
    question: "What is the Islamic ruling on domestic violence?",
    options: [
      "Husbands can discipline wives lightly",
      "All violence is prohibited",
      "Only in extreme cases",
      "It is a cultural norm"
    ],
    correctAnswer: "All violence is prohibited",
    explanation: "The Prophet (ﷺ) said: 'Do not strike the female servants of Allah.' (Abu Dawud 2146). Modern scholars condemn all abuse."
  },
  {
    question: "Can women be heads of households?",
    options: [
      "No, only men can lead",
      "Yes, if no male guardian is present",
      "Only if they are widowed",
      "Islam does not address this"
    ],
    correctAnswer: "Yes, if no male guardian is present",
    explanation: "Khadija (RA) managed her business independently. Women can lead households when necessary, especially in single-parent families."
  },
  {
    question: "What is the Islamic view on women's beauty?",
    options: [
      "Women must hide all beauty",
      "Beauty is permitted within modesty guidelines",
      "Only for husbands",
      "Beauty is discouraged"
    ],
    correctAnswer: "Beauty is permitted within modesty guidelines",
    explanation: "Quran 7:26 mentions clothing as a means of adornment and protection. Modesty doesn’t mean erasing beauty but presenting it appropriately."
   }
  ],
    advanced: [
        {
    question: "What is the ruling on female leadership in Islam according to classical scholars?",
    options: [
      "Women can lead in all positions, including head of state",
      "Women cannot lead in political roles but can in religious scholarship",
      "Women are completely barred from any leadership",
      "Only widowed women can lead"
    ],
    correctAnswer: "Women cannot lead in political roles but can in religious scholarship",
    explanation: "Classical scholars like Imam Abu Hanifa allowed female judges in civil cases, while others restricted political leadership based on the Hadith where the Prophet (ﷺ) said a people will not succeed if led by a woman (Bukhari 4425). However, women like Aisha (RA) were leading scholars of Hadith."
  },
  {
    question: "What is the Quranic stance on gender equity in testimony?",
    options: [
      "Two women equal one man in all testimonies",
      "Women's testimony is half in financial matters only",
      "Women cannot testify at all",
      "Testimony is equal regardless of gender"
    ],
    correctAnswer: "Two women equal one man in financial matters only",
    explanation: "Quran 2:282 specifies two women witnesses in financial transactions to ensure accuracy (due to societal context), but in other areas (like marital issues), women testify equally. This is situational, not a blanket rule."
  },
  {
    question: "Did the Prophet (ﷺ) ever take advice from women?",
    options: [
      "No, decisions were made only by men",
      "Yes, he consulted his wives and female companions",
      "Only in household matters",
      "Only from Khadija (RA)"
    ],
    correctAnswer: "Yes, he consulted his wives and female companions",
    explanation: "The Prophet (ﷺ) accepted Umm Salamah's advice during Hudaybiyyah (Sunan Abu Dawud 2762), and Khadija (RA) was his first confidante. This shows women's role in decision-making."
  },
  {
    question: "What was the first university in the world, and who founded it?",
    options: [
      "Al-Azhar, by Imam Ali",
      "University of Bologna, by Fatima al-Fihri",
      "University of Al-Qarawiyyin, by Fatima al-Fihri",
      "Nalanda, by Buddhist monks"
    ],
    correctAnswer: "University of Al-Qarawiyyin, by Fatima al-Fihri",
    explanation: "Fatima al-Fihri, a Muslim woman, founded Al-Qarawiyyin in 859 CE in Morocco, recognized by UNESCO as the oldest existing degree-granting university."
  },
  {
    question: "What does 'Wali Mujbir' (compulsory guardianship in marriage) mean in Islam?",
    options: [
      "A father can force his daughter to marry without consent",
      "A woman needs a guardian's approval but cannot be forced",
      "Only the Sultan can enforce marriage",
      "A widow doesn’t need a guardian"
    ],
    correctAnswer: "A woman needs a guardian's approval but cannot be forced",
    explanation: "The Prophet (ﷺ) said: 'A virgin must be consulted for her consent.' (Bukhari 6968). Forced marriages are invalid. The guardian’s role is protective, not dictatorial."
  },
  {
    question: "What is the fiqh ruling on women leading mixed-gender prayers?",
    options: [
      "Permissible in all cases",
      "Only permissible for women-only congregations",
      "Completely prohibited",
      "Only in emergencies"
    ],
    correctAnswer: "Only permissible for women-only congregations",
    explanation: "Classical scholars agree women can lead other women in prayer (Bukhari 684), but not mixed congregations due to Hadith prohibiting women from leading men (Abu Dawud 576)."
  },
  {
    question: "Which female companion was a renowned Hadith narrator?",
    options: [
      "Umm Habiba (RA)",
      "Aisha (RA)",
      "Fatima (RA)",
      "Zaynab (RA)"
    ],
    correctAnswer: "Aisha (RA)",
    explanation: "Aisha (RA) narrated over 2,200 Hadiths and was a leading jurist. Her scholarship is central to Sunni Islam. (Bukhari, Muslim)"
  },
  {
    question: "What is the Islamic ruling on women traveling alone?",
    options: [
      "Always prohibited",
      "Permitted if safety is ensured",
      "Only with a husband",
      "Only for Hajj"
    ],
    correctAnswer: "Permitted if safety is ensured",
    explanation: "The Prophet (ﷺ) allowed women to travel with a mahram for long distances (Bukhari 1088), but scholars permit solo travel today if safety measures exist (e.g., secure transport)."
  },
  {
    question: "What does the Quran say about gender equity in spiritual rewards?",
    options: [
      "Men receive more rewards",
      "Women receive more rewards",
      "Equal rewards for equal deeds",
      "Only men are accountable"
    ],
    correctAnswer: "Equal rewards for equal deeds",
    explanation: "Quran 3:195 states: 'I will not allow the deed of any worker among you to be lost, whether male or female.' Spiritual equality is unequivocal."
  },
  {
    question: "Which battle did Muslim women participate in as fighters?",
    options: [
      "Battle of Badr",
      "Battle of Uhud",
      "Battle of Khaybar",
      "Battle of the Trench"
    ],
    correctAnswer: "Battle of Uhud",
    explanation: "Women like Nusaybah bint Ka’ab (RA) fought at Uhud to defend the Prophet (ﷺ). (Musnad Ahmad 1855). Their bravery is well-documented."
  },
  {
    question: "What is the ruling on women's voices being 'awrah' (to be concealed)?",
    options: [
      "All women's voices are awrah",
      "Only singing is awrah",
      "The voice itself is not awrah, but content must be modest",
      "Only with non-mahram men"
    ],
    correctAnswer: "The voice itself is not awrah, but content must be modest",
    explanation: "Classical scholars like Ibn Taymiyyah ruled that the voice isn’t awrah, but speech should avoid softness/flirtation (Quran 33:32). Normal conversation is permitted."
  },
  {
    question: "Can women perform Dawah (Islamic preaching)?",
    options: [
      "No, only men can preach",
      "Yes, but only to women",
      "Yes, to both genders with modesty",
      "Only if they are scholars"
    ],
    correctAnswer: "Yes, to both genders with modesty",
    explanation: "The Prophet (ﷺ) praised women like Umm Waraqa (RA) for teaching. Women can do Dawah while observing hijab and gender interaction rules. (Abu Dawud 592)"
  },
  {
    question: "What is the fiqh ruling on women cutting their hair?",
    options: [
      "Completely prohibited",
      "Permitted if the husband agrees",
      "Permitted but not shorter than a fist's length",
      "Only if widowed"
    ],
    correctAnswer: "Permitted but not shorter than a fist's length",
    explanation: "Scholars permit trimming hair but discourage extreme shortening to avoid imitating men. (Abu Dawud 4187). Moderation is key."
  },
  {
    question: "Which Quranic verse explicitly addresses men and women as equal in faith?",
    options: [
      "Quran 4:34",
      "Quran 33:35",
      "Quran 2:228",
      "Quran 24:31"
    ],
    correctAnswer: "Quran 33:35",
    explanation: "Quran 33:35 lists identical rewards for 'Muslim men and women, believing men and women...' emphasizing spiritual equality."
  },
  {
    question: "What is the ruling on women attending funerals?",
    options: [
      "Prohibited",
      "Permitted but discouraged",
      "Encouraged",
      "Only for immediate family"
    ],
    correctAnswer: "Permitted but discouraged",
    explanation: "The Prophet (ﷺ) initially forbade women from graves but later allowed it (Tirmidhi 1056). Scholars discourage excessive wailing but permit attendance."
  },
  {
    question: "Can women refuse their husband's request to wear the niqab?",
    options: [
      "No, it is obligatory if he demands it",
      "Yes, unless stipulated in the marriage contract",
      "Only if her father supports her",
      "Niqab is mandatory regardless"
    ],
    correctAnswer: "Yes, unless stipulated in the marriage contract",
    explanation: "Niqab is a scholarly difference of opinion. A wife cannot be forced beyond Quranic hijab (24:31) unless agreed in the marriage contract."
  },
  {
    question: "What is the Islamic ruling on women's sports participation?",
    options: [
      "Completely prohibited",
      "Permitted in gender-segregated settings",
      "Only for Olympic athletes",
      "Only non-competitive sports"
    ],
    correctAnswer: "Permitted in gender-segregated settings",
    explanation: "Aisha (RA) raced the Prophet (ﷺ) (Abu Dawud 2578). Women can engage in sports while observing modesty and segregation rules."
  },
  {
    question: "Which female scholar wrote a famous Tafsir (Quranic exegesis)?",
    options: [
      "Aisha bint Talha",
      "Fatima al-Samarqandi",
      "Umm Ad-Darda",
      "Karima al-Marwaziyya"
    ],
    correctAnswer: "Karima al-Marwaziyya",
    explanation: "Karima al-Marwaziyya (d. 1076 CE) was a renowned muhaddithah and expert in Sahih al-Bukhari. Her works are still studied today."
  },
  {
    question: "What is the ruling on women shaking hands with non-mahram men?",
    options: [
      "Permitted if done respectfully",
      "Only in business settings",
      "Prohibited",
      "Only with gloves"
    ],
    correctAnswer: "Prohibited",
    explanation: "The Prophet (ﷺ) said: 'I do not shake hands with women.' (Muslim 1866). This applies to non-mahram interactions to prevent fitnah."
  },
  {
    question: "Can women inherit from their children in Islam?",
    options: [
      "No, only fathers inherit",
      "Yes, mothers inherit a fixed share",
      "Only if the child has no siblings",
      "Only if the father is deceased"
    ],
    correctAnswer: "Yes, mothers inherit a fixed share",
    explanation: "Quran 4:11 grants mothers 1/6 of the estate if the deceased has children, and 1/3 if no children exist. This is a protected right."
  },
  {
    question: "What is the ruling on women attending political councils (Shura)?",
    options: [
      "Prohibited",
      "Permitted if they are scholars",
      "Only in emergencies",
      "Islam has no stance on this"
    ],
    correctAnswer: "Permitted if they are scholars",
    explanation: "Umm Salamah (RA) advised the Prophet (ﷺ) on political matters. Qualified women can participate in Shura while observing modesty. (Sunan Abu Dawud 2762)"
  },
  {
    question: "Which Hadith highlights women's right to sexual satisfaction?",
    options: [
      "The Hadith of Hudhayfah",
      "The Hadith of Umm Salamah",
      "The Hadith of Jabir",
      "The Hadith of Asma bint Yazid"
    ],
    correctAnswer: "The Hadith of Asma bint Yazid",
    explanation: "Asma bint Yazid (RA) publicly asked the Prophet (ﷺ) about women's sexual rights, and he affirmed their entitlement to pleasure. (Musnad Ahmad 27555)"
  },
  {
    question: "What is the ruling on women wearing perfume in public?",
    options: [
      "Permitted in moderation",
      "Completely prohibited",
      "Only for married women",
      "Only if unscented"
    ],
    correctAnswer: "Completely prohibited",
    explanation: "The Prophet (ﷺ) said: 'If a woman wears perfume and passes by people, she is such-and-such' (meaning adulterous in intention). (Tirmidhi 2786). It attracts non-mahram attention."
  },
  {
    question: "Can women be witnesses to a marriage contract (Nikah)?",
    options: [
      "No, only men can witness",
      "Yes, but two women equal one man",
      "Yes, equally with men",
      "Only if related to the bride"
    ],
    correctAnswer: "Yes, equally with men",
    explanation: "Unlike financial contracts, marriage witnesses do not require gender ratios. Women can fully witness Nikah. (Sunan Ibn Majah 1881)"
  },
  {
    question: "What is the Islamic ruling on women riding horses/camels?",
    options: [
      "Prohibited as it is masculine",
      "Permitted if necessary",
      "Only with a mahram",
      "Only sidesaddle"
    ],
    correctAnswer: "Permitted if necessary",
    explanation: "Aisha (RA) rode camels during travel and battles. Women can ride animals for transport or sport while observing modesty. (Bukhari 2877)"
  },
  {
    question: "Which Quranic verse is often misused to justify domestic abuse?",
    options: [
      "Quran 4:34",
      "Quran 2:228",
      "Quran 24:31",
      "Quran 33:59"
    ],
    correctAnswer: "Quran 4:34",
    explanation: "Quran 4:34's term 'wadribuhunna' (often translated as 'beat lightly') is highly contested. Scholars like Ibn Abbas interpreted it as 'separate,' and modern jurists discourage physical discipline."
  },
  {
    question: "Can women perform Tawaf (circumambulation of the Kaaba) during menstruation?",
    options: [
      "Yes, without restrictions",
      "No, they must wait until pure",
      "Only if wearing sanitary products",
      "Only with a mahram"
    ],
    correctAnswer: "No, they must wait until pure",
    explanation: "The Prophet (ﷺ) told Aisha (RA) to delay Tawaf during her period (Bukhari 294). Menstruating women can perform all Hajj rites except Tawaf and Salah."
  },
  {
    question: "What is the ruling on women wearing gold jewelry?",
    options: [
      "Permitted in moderation",
      "Completely prohibited",
      "Only for married women",
      "Only silver is allowed"
    ],
    correctAnswer: "Permitted in moderation",
    explanation: "The Prophet (ﷺ) allowed women to wear gold and silk (Bukhari 5423), which are prohibited for men. Extravagance is discouraged."
  },
  {
    question: "Can women divorce their husbands without court intervention?",
    options: [
      "No, only men can divorce directly",
      "Yes, through Talaq-e-Tafweez (delegated divorce)",
      "Only in cases of abuse",
      "Only if stipulated in the marriage contract"
    ],
    correctAnswer: "Yes, through Talaq-e-Tafweez (delegated divorce)",
    explanation: "If the husband delegates the right of divorce to his wife (Tafweez), she can pronounce it without court. This is valid in Islamic law. (Quran 2:229)"
  },
  {
    question: "What is the ruling on women's laughter in public?",
    options: [
      "Prohibited as it attracts attention",
      "Permitted if not excessive",
      "Only with other women",
      "Only at home"
    ],
    correctAnswer: "Permitted if not excessive",
    explanation: "The Prophet (ﷺ) interacted with women who laughed in his presence (Bukhari 5766). Natural laughter is permitted, but loudness is discouraged."
  }
    ],
    intermediate: [
      // Copy the first 10 questions from easy level
      // This is a temporary solution until proper intermediate questions are created
    ]
  }
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!genderCategory.levels.intermediate || genderCategory.levels.intermediate.length === 0) {
  genderCategory.levels.intermediate = [...genderCategory.levels.easy.slice(0, 10)]
}

export default genderCategory
