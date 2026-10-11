import type { QuizCategory } from "@/types/quiz"

const musicCategory: QuizCategory = {
  id: "music",
  title: "Music",
  description: "Music in Islam",
  icon: "music",
  levels: {
    easy: [
      {
        question: "According to the majority of scholars, what is the ruling on musical instruments in Islam?",
        options: [
          "Permissible in all cases",
          "Prohibited (haram)",
          "Only disliked (makruh)",
          "Recommended",
        ],
        correctAnswer: "Prohibited (haram)",
        explanation:
          "The four Imams (Abu Hanifah, Malik, al-Shafi'i and Ahmad) and the majority of scholars hold that all musical instruments are prohibited. This is based on authentic Hadith and the interpretation of Quranic verses.",
      },
      {
        question: "Which Quranic verse is most commonly cited regarding 'idle talk' (lahw al-hadith) in the context of music?",
        options: [
          "Surah Al-Baqarah 2:255",
          "Surah Luqman 31:6",
          "Surah Al-Ikhlas 112:1",
          "Surah An-Nas 114:1",
        ],
        correctAnswer: "Surah Luqman 31:6",
        explanation:
          "Allah says: 'And of mankind is he who purchases idle talks (lahw al-hadith) to mislead (men) from the path of Allah...' (31:6). The majority of the early scholars interpreted this as referring to singing and musical instruments.",
      },
      {
        question: "What did Abdullah ibn Mas'ud (RA) say about the meaning of 'lahw al-hadith' in Surah Luqman 31:6?",
        options: [
          "It means business transactions",
          "By Allah, it means singing (music)",
          "It means poetry only",
          "It means storytelling",
        ],
        correctAnswer: "By Allah, it means singing (music)",
        explanation:
          "Abdullah ibn Mas'ud (RA) swore by Allah that 'lahw al-hadith' refers to singing. Similar interpretations were reported from Ibn Abbas and other Companions.",
      },
      {
        question: "In the famous Hadith narrated in Sahih al-Bukhari, which four things will some people from the Ummah regard as permissible?",
        options: [
          "Prayer, fasting, zakat and Hajj",
          "Zina (adultery), silk, alcohol and musical instruments (ma'azif)",
          "Trade, travel, marriage and work",
          "Reciting Quran, Hadith, fiqh and Arabic",
        ],
        correctAnswer: "Zina (adultery), silk, alcohol and musical instruments (ma'azif)",
        explanation:
          "The Prophet (PBUH) said: 'There will be among my ummah people who will regard as permissible zina, silk, alcohol and musical instruments (ma'azif).' (Sahih al-Bukhari, narrated as mu'allaq and authenticated by major Hadith scholars).",
      },
      {
        question: "What does the Arabic term 'ma'azif' refer to in the Hadith?",
        options: [
          "Only stringed instruments",
          "Musical instruments in general (including singing with instruments)",
          "Only drums",
          "Only wind instruments",
        ],
        correctAnswer: "Musical instruments in general (including singing with instruments)",
        explanation:
          "According to the scholars of the Arabic language and the early commentators, ma'azif is a term that includes all musical instruments used for entertainment.",
      },
      {
        question: "According to Shaykh al-Islam Ibn Taymiyyah, what is the view of the four Imams regarding musical instruments?",
        options: [
          "They differed greatly",
          "All four Imams held that musical instruments are prohibited",
          "Only one Imam prohibited them",
          "They all permitted them",
        ],
        correctAnswer: "All four Imams held that musical instruments are prohibited",
        explanation:
          "Ibn Taymiyyah stated: 'The view of the four Imams is that all musical instruments are prohibited.' He further noted that none of their followers mentioned any dispute on this matter.",
      },
      {
        question: "Which musical instrument is generally excepted by scholars for certain occasions?",
        options: [
          "The flute",
          "The duff (simple hand-drum without rings)",
          "The oud (lute)",
          "The violin",
        ],
        correctAnswer: "The duff (simple hand-drum without rings)",
        explanation:
          "The majority of scholars allow the duff (a simple tambourine-like drum without metal rings) for women at weddings and Eids, based on authentic narrations from the time of the Prophet (PBUH).",
      },
      {
        question: "What is the ruling on listening to songs that contain musical instruments?",
        options: [
          "Permissible if the lyrics are good",
          "Prohibited, because the instruments themselves are forbidden",
          "Only disliked",
          "Recommended for relaxation",
        ],
        correctAnswer: "Prohibited, because the instruments themselves are forbidden",
        explanation:
          "Since musical instruments are prohibited according to the authentic Hadith and the consensus of the four schools, listening to songs that include them is also prohibited, regardless of the lyrical content.",
      },
      {
        question: "What negative effect did Ibn Mas'ud (RA) attribute to music regarding the heart?",
        options: [
          "It strengthens faith",
          "Music grows hypocrisy in the heart just as water grows crops",
          "It has no effect",
          "It only affects the ears",
        ],
        correctAnswer: "Music grows hypocrisy in the heart just as water grows crops",
        explanation:
          "It is reported from Abdullah ibn Mas'ud (RA) that singing and musical instruments plant hypocrisy in the heart just as water causes plants to grow.",
      },
      {
        question: "Is singing without any musical instruments always prohibited?",
        options: [
          "Yes, always prohibited",
          "No – it is permissible if the lyrics are good, it does not distract from religious duties, and it is not performed by a non-mahram woman in front of men",
          "Only prohibited for men",
          "Only prohibited on Fridays",
        ],
        correctAnswer: "No – it is permissible if the lyrics are good, it does not distract from religious duties, and it is not performed by a non-mahram woman in front of men",
        explanation:
          "The basic ruling on pure singing (without instruments) is permissibility when the content is wholesome, it does not lead to neglect of obligations, and the proper Islamic etiquette of gender interaction is observed.",
      },
      {
        question: "What did the Prophet (PBUH) say about two types of voices that are cursed?",
        options: [
          "Loud prayer and quiet prayer",
          "Musical instruments at times of blessing and wailing at times of calamity",
          "Reciting Quran and giving lectures",
          "Calling the Adhan and giving the Khutbah",
        ],
        correctAnswer: "Musical instruments at times of blessing and wailing at times of calamity",
        explanation:
          "Anas ibn Malik (RA) reported that the Prophet (PBUH) said there are two cursed sounds: the sound of musical instruments at the time of joy and the sound of wailing at the time of calamity. (Classed as hasan by al-Albani).",
      },
      {
        question: "According to many scholars, what happens when a person prefers music over the Quran?",
        options: [
          "It is a sign of strong faith",
          "It indicates that the heart has been affected and is drifting from guidance",
          "It has no spiritual consequence",
          "It is recommended for balance",
        ],
        correctAnswer: "It indicates that the heart has been affected and is drifting from guidance",
        explanation:
          "Scholars note that a person who loves music and finds the Quran burdensome when given the choice between them has been affected by the distraction of lahw, as warned in the Quran and explained by the early scholars.",
      },
      {
        question: "What is the ruling on so-called 'Islamic nasheeds' that contain musical instruments?",
        options: [
          "Fully permissible because they are Islamic",
          "Prohibited because the instruments remain haram regardless of the lyrics",
          "Only allowed in Ramadan",
          "Recommended for dawah",
        ],
        correctAnswer: "Prohibited because the instruments remain haram regardless of the lyrics",
        explanation:
          "Islamqa and the majority of scholars state that adding the label 'Islamic' does not make musical instruments permissible. The prohibition applies to the instruments themselves.",
      },
      {
        question: "In the Hadith of the two young girls singing on Eid in Aisha's house, what did Abu Bakr (RA) call their singing?",
        options: [
          "Beautiful poetry",
          "The singing (or flutes) of Shaytan",
          "Recommended worship",
          "A form of dhikr",
        ],
        correctAnswer: "The singing (or flutes) of Shaytan",
        explanation:
          "Abu Bakr (RA) said: 'Musical instruments of Shaytan in the presence of the Messenger of Allah?' The Prophet (PBUH) did not correct this description; he only allowed the young girls to continue because it was the days of Eid.",
      },
      {
        question: "What is the correct Islamic alternative to music for filling one's time with beneficial sound?",
        options: [
          "Any form of entertainment",
          "Listening to and reciting the Quran, authentic nasheeds without instruments, and beneficial lectures",
          "Silence only",
          "Nature sounds exclusively",
        ],
        correctAnswer: "Listening to and reciting the Quran, authentic nasheeds without instruments, and beneficial lectures",
        explanation:
          "The Prophet (PBUH) and the righteous predecessors filled their time with the Quran and beneficial speech. This is the prescribed replacement for the idle talk condemned in the Quran.",
      },
      {
        question: "According to the Standing Committee for Academic Research and Issuing Fatwas, is there any text in the Quran that forbids singing and music?",
        options: [
          "No text exists",
          "Yes – Surah Luqman 31:6 and its interpretation by the majority of the Salaf",
          "Only in the Hadith",
          "Only in later books",
        ],
        correctAnswer: "Yes – Surah Luqman 31:6 and its interpretation by the majority of the Salaf",
        explanation:
          "The Standing Committee affirmed that the claim of 'no Quranic text' reflects ignorance of the Quran, because 31:6 was understood by the majority of the early scholars as referring to singing and musical instruments.",
      },
      {
        question: "What is the ruling on a man listening to a non-mahram woman singing?",
        options: [
          "Permissible if the voice is beautiful",
          "Prohibited, as a woman's voice in this context can be a source of fitnah",
          "Only disliked",
          "Recommended",
        ],
        correctAnswer: "Prohibited, as a woman's voice in this context can be a source of fitnah",
        explanation:
          "Scholars prohibit a man listening to a non-mahram woman singing because the voice in a melodious, entertaining manner is considered a means of temptation, in addition to any instrumental accompaniment.",
      },
      {
        question: "Did the Prophet (PBUH) ever command the destruction of musical instruments?",
        options: [
          "No, never",
          "Yes – there are narrations that he was sent to destroy musical instruments (though some chains are weak, the overall prohibition is authentic)",
          "Only stringed ones",
          "Only in Makkah",
        ],
        correctAnswer: "Yes – there are narrations that he was sent to destroy musical instruments (though some chains are weak, the overall prohibition is authentic)",
        explanation:
          "There are reports in which the Prophet (PBUH) stated that he was sent to destroy musical instruments. While some specific chains are discussed for strength, the general prohibition of instruments is established by stronger authentic texts.",
      },
      {
        question: "What is the position of Imam al-Shafi'i regarding a type of singing that diverts people from the Quran?",
        options: [
          "He encouraged it",
          "He regarded it as one of the innovations of the heretics (zindiqs) that diverts people from the Quran",
          "He was silent",
          "He made it obligatory",
        ],
        correctAnswer: "He regarded it as one of the innovations of the heretics (zindiqs) that diverts people from the Quran",
        explanation:
          "Imam al-Shafi'i said about a form of singing (taghbeer) that he left behind in Baghdad: it was innovated by the heretics and diverts people from the Quran.",
      },
      {
        question: "Is the prohibition of music limited only to 'bad' or immoral lyrics?",
        options: [
          "Yes, only immoral lyrics are forbidden",
          "No – the instruments themselves are prohibited even if the lyrics are clean",
          "Only modern music is forbidden",
          "Only Western music is forbidden",
        ],
        correctAnswer: "No – the instruments themselves are prohibited even if the lyrics are clean",
        explanation:
          "The authentic Hadith and the statements of the Imams prohibit the instruments (ma'azif) as such. Clean lyrics do not make the forbidden instruments permissible.",
      },
      {
        question: "What did the Prophet (PBUH) allow the young girls to do on the days of Eid?",
        options: [
          "Play any musical instrument",
          "Sing the verses of the Ansar about the day of Bu'ath while using the duff, because it was Eid",
          "Perform concerts",
          "Nothing related to sound",
        ],
        correctAnswer: "Sing the verses of the Ansar about the day of Bu'ath while using the duff, because it was Eid",
        explanation:
          "Aisha (RA) reported that two young girls were singing the poetry of the Ansar about Bu'ath. When Abu Bakr objected, the Prophet (PBUH) said to let them, because they were the days of Eid.",
      },
      {
        question: "According to scholars, why is music considered harmful to one's relationship with the Quran?",
        options: [
          "It has no effect",
          "It distracts the heart and makes a person prefer it over the Quran when given the choice",
          "It improves Quran memorization",
          "It is required for proper tajweed",
        ],
        correctAnswer: "It distracts the heart and makes a person prefer it over the Quran when given the choice",
        explanation:
          "Ibn al-Qayyim and others explained that you will not find a person who loves music and instrumental entertainment except that he is somewhat distant from the path of guidance and prefers music to the Quran.",
      },
      {
        question: "What is the ruling on making or selling musical instruments?",
        options: [
          "Fully permissible",
          "Prohibited according to the majority, as it is assisting in sin",
          "Only selling is allowed",
          "Only making is allowed",
        ],
        correctAnswer: "Prohibited according to the majority, as it is assisting in sin",
        explanation:
          "Ibn Taymiyyah and other scholars stated that it is not permissible to manufacture musical instruments, and it is permissible to destroy them. Selling them is assisting in what is prohibited.",
      },
      {
        question: "In the view of the majority, does the prohibition of musical instruments include modern electronic instruments?",
        options: [
          "No, only ancient ones",
          "Yes – the prohibition is general and covers all instruments used for entertainment",
          "Only electric guitars",
          "Only synthesizers",
        ],
        correctAnswer: "Yes – the prohibition is general and covers all instruments used for entertainment",
        explanation:
          "Scholars state that the prohibition of ma'azif is not limited to the instruments known in the 7th century; it includes every instrument that serves the same purpose of entertainment and distraction.",
      },
      {
        question: "What did the Prophet (PBUH) say would happen to some of those who regard musical instruments as permissible?",
        options: [
          "They will be rewarded",
          "Allah will transform some of them into monkeys and pigs",
          "They will become scholars",
          "Nothing will happen",
        ],
        correctAnswer: "Allah will transform some of them into monkeys and pigs",
        explanation:
          "In the authentic Hadith, the Prophet (PBUH) mentioned that Allah will destroy some of those people and transform others into monkeys and pigs until the Day of Resurrection.",
      },
      {
        question: "Is poetry itself prohibited in Islam?",
        options: [
          "Yes, all poetry is haram",
          "No – poetry is words; if the words are good it is good, and if they are bad it is bad",
          "Only Arabic poetry is allowed",
          "Only love poetry is forbidden",
        ],
        correctAnswer: "No – poetry is words; if the words are good it is good, and if they are bad it is bad",
        explanation:
          "The Prophet (PBUH) listened to and sometimes requested poetry that contained good meanings. The prohibition relates to musical accompaniment and immoral content, not to poetry as such.",
      },
      {
        question: "What is the ruling on beatboxing that imitates the sound of musical instruments?",
        options: [
          "Fully permissible",
          "Prohibited because it imitates and takes the place of forbidden musical instruments",
          "Only allowed for children",
          "Recommended for dawah",
        ],
        correctAnswer: "Prohibited because it imitates and takes the place of forbidden musical instruments",
        explanation:
          "Islamqa and contemporary scholars have ruled that producing sounds from the mouth that resemble musical instruments is prohibited, as it falls under the same meaning and effect as the forbidden instruments.",
      },
      {
        question: "According to the majority, is there scholarly consensus (ijma') on the prohibition of musical instruments?",
        options: [
          "No consensus exists",
          "Yes – many leading scholars narrated consensus of the early generations and the four schools",
          "Only the Hanbali school has consensus",
          "Only modern scholars agree",
        ],
        correctAnswer: "Yes – many leading scholars narrated consensus of the early generations and the four schools",
        explanation:
          "Scholars such as Ibn Taymiyyah, Ibn al-Qayyim, al-Qurtubi and others reported that the four Imams and the early generations were agreed on the prohibition of musical instruments.",
      },
      {
        question: "What should a Muslim do if he has become accustomed to listening to music?",
        options: [
          "Continue because it is hard to stop",
          "Sincerely repent, remove the means (delete files, avoid triggers), and replace it with Quran and beneficial alternatives",
          "Listen only on weekends",
          "Listen only to classical music",
        ],
        correctAnswer: "Sincerely repent, remove the means (delete files, avoid triggers), and replace it with Quran and beneficial alternatives",
        explanation:
          "The path of repentance includes stopping the sin, removing the means that lead to it, and filling the void with what Allah loves – especially the Quran, which softens the heart that music hardens.",
      },
      {
        question: "Is the duff allowed for men according to the majority of scholars?",
        options: [
          "Yes, freely",
          "The stronger view of many scholars is that the concession of the duff is primarily for women at weddings and Eids",
          "Only in the mosque",
          "Only with singing",
        ],
        correctAnswer: "The stronger view of many scholars is that the concession of the duff is primarily for women at weddings and Eids",
        explanation:
          "While some allow limited use, the more cautious and widely held position is that the explicit concession in the Sunnah was for women on the occasions of Eid and marriage celebrations.",
      },
      {
        question: "What is the linguistic meaning of 'lahw' that appears in the Quranic verse about idle talk?",
        options: [
          "Serious discussion",
          "Amusement, diversion, or idle entertainment that distracts from what is important",
          "Obligatory worship",
          "Business only",
        ],
        correctAnswer: "Amusement, diversion, or idle entertainment that distracts from what is important",
        explanation:
          "Lahw means that which distracts and diverts a person from what is more important. In 31:6 it is linked to speech or sound that misleads from the path of Allah.",
      },
      {
        question: "Did any of the righteous early generations gather regularly to listen to musical entertainment for 'purifying the hearts'?",
        options: [
          "Yes, it was common",
          "No – Ibn Taymiyyah noted that in the best three generations no people of goodness gathered for such innovated singing",
          "Only in Iraq",
          "Only the Sufis of that time",
        ],
        correctAnswer: "No – Ibn Taymiyyah noted that in the best three generations no people of goodness gathered for such innovated singing",
        explanation:
          "Ibn Taymiyyah stated that during the best three generations there was no practice among the people of knowledge and religion of gathering to listen to this type of singing for the purpose of purifying the hearts.",
      },
      {
        question: "What is the ruling on music that is used in the background of lectures or videos?",
        options: [
          "Permissible if the lecture is Islamic",
          "Still prohibited because the musical instruments remain forbidden",
          "Only allowed if volume is low",
          "Recommended to attract listeners",
        ],
        correctAnswer: "Still prohibited because the musical instruments remain forbidden",
        explanation:
          "The presence of an Islamic lecture does not cancel the prohibition of the instruments. Scholars advise removing background music from beneficial content.",
      },
      {
        question: "According to the Hadith, what will some people do with alcohol and musical instruments at the end of time?",
        options: [
          "They will abandon them",
          "They will regard them as permissible (and be punished)",
          "They will ban them completely",
          "They will use them only for medicine",
        ],
        correctAnswer: "They will regard them as permissible (and be punished)",
        explanation:
          "The Prophet (PBUH) foretold that people would declare these prohibited things lawful, and he mentioned the severe consequences that would follow.",
      },
      {
        question: "Is there a difference between 'music' and 'singing' in the classical Islamic terminology?",
        options: [
          "No difference at all",
          "Yes – ma'azif usually refers to instruments, while ghina' refers to singing; the rulings can differ when singing is free of instruments",
          "Only modern scholars distinguish them",
          "Singing is always worse",
        ],
        correctAnswer: "Yes – ma'azif usually refers to instruments, while ghina' refers to singing; the rulings can differ when singing is free of instruments",
        explanation:
          "Classical texts distinguish between musical instruments (ma'azif) which are prohibited, and pure singing (ghina') which may be permissible under conditions.",
      },
      {
        question: "What did Imam Ahmad ibn Hanbal say about the narration claiming molten lead will be poured into the ears of music listeners?",
        options: [
          "He authenticated it fully",
          "He considered a similar narration baseless (batil)",
          "He made it the main proof",
          "He never commented",
        ],
        correctAnswer: "He considered a similar narration baseless (batil)",
        explanation:
          "While music is prohibited on stronger evidence, specific narrations about molten lead have been declared baseless by Imam Ahmad and other Hadith critics. The prohibition does not rest on weak reports.",
      },
      {
        question: "Can a person who listens to music still be a Muslim?",
        options: [
          "No, it takes one out of Islam",
          "Yes – it is a major sin but does not by itself constitute disbelief unless one declares it permissible against clear knowledge",
          "Only if they repent immediately",
          "It is not a sin at all",
        ],
        correctAnswer: "Yes – it is a major sin but does not by itself constitute disbelief unless one declares it permissible against clear knowledge",
        explanation:
          "Listening to music is a serious sin according to the majority, but it does not expel a person from Islam. Declaring it lawful while knowing the evidence can be more severe.",
      },
      {
        question: "What is the recommended way to celebrate a wedding according to the Sunnah regarding sound?",
        options: [
          "Loud music and dancing",
          "The duff and permissible singing by women among themselves, announcing the marriage",
          "Complete silence",
          "Professional bands",
        ],
        correctAnswer: "The duff and permissible singing by women among themselves, announcing the marriage",
        explanation:
          "The Sunnah encourages making the marriage public. The duff and appropriate singing by women were practiced and allowed, while other instruments were not.",
      },
      {
        question: "Why do scholars say that music and the Quran cannot share the same heart comfortably?",
        options: [
          "Because both use the same notes",
          "Because one softens the heart toward Allah while the other distracts and hardens it toward obedience",
          "Because the Quran is only in Arabic",
          "There is no such statement",
        ],
        correctAnswer: "Because one softens the heart toward Allah while the other distracts and hardens it toward obedience",
        explanation:
          "Ibn al-Qayyim and others explained that the Quran and the 'recitation of Shaytan' (songs) cannot be combined in a balanced way in the heart of the believer; one will dominate.",
      },
      {
        question: "What is the first practical step a person should take if they want to leave music?",
        options: [
          "Listen to more of it to get bored",
          "Make sincere tawbah, delete the music files and apps, and immediately replace the habit with Quran recitation",
          "Switch only to classical music",
          "Wait until they feel ready",
        ],
        correctAnswer: "Make sincere tawbah, delete the music files and apps, and immediately replace the habit with Quran recitation",
        explanation:
          "Repentance requires stopping the sin and removing its means. Replacing the habit with the Quran is the prophetic and scholarly advice for healing the heart.",
      },
    ],
    intermediate: [
      {
        question: "What is the status of the Hadith about musical instruments in Sahih al-Bukhari (the mu'allaq report)?",
        options: [
          "It is weak and rejected",
          "It is a mu'allaq report that has been authenticated by major Hadith scholars such as Ibn Hajar and al-Albani when the connecting chains are considered",
          "It was fabricated",
          "It only applies to the past",
        ],
        correctAnswer: "It is a mu'allaq report that has been authenticated by major Hadith scholars such as Ibn Hajar and al-Albani when the connecting chains are considered",
        explanation:
          "Although recorded by al-Bukhari in mu'allaq form, the Hadith has been narrated with connected chains by al-Tabarani, al-Bayhaqi and others, and was graded sahih by Ibn Hajar, Ibn al-Qayyim and al-Albani.",
      },
      {
        question: "How did the early mufassirun (Quran commentators) interpret 'lahw al-hadith' in 31:6?",
        options: [
          "Only as business",
          "The majority said it means singing and musical instruments; some said every sound of entertainment that misleads",
          "Only as poetry competitions",
          "They left it unexplained",
        ],
        correctAnswer: "The majority said it means singing and musical instruments; some said every sound of entertainment that misleads",
        explanation:
          "Al-Tabari, Ibn Abi al-Dunya, Ibn al-Jawzi and many others reported that the Companions and Tabi'in understood the verse as referring to singing and the instruments that accompany it.",
      },
      {
        question: "What distinction did classical scholars make between the duff and other drums?",
        options: [
          "No distinction",
          "The duff without rings is allowed on specific occasions; other drums (tabl, etc.) remain prohibited",
          "All drums are allowed",
          "Only large drums are allowed",
        ],
        correctAnswer: "The duff without rings is allowed on specific occasions; other drums (tabl, etc.) remain prohibited",
        explanation:
          "The concession is specific to the simple duff. Other percussion instruments that produce stronger entertainment sounds remain under the general prohibition of ma'azif.",
      },
      {
        question: "According to Ibn Hajar al-Haytami, is there any difference of opinion among reliable scholars on stringed instruments?",
        options: [
          "Yes, many allowed them",
          "No – he stated there is no difference of scholarly opinion that stringed instruments are prohibited",
          "Only the Hanafis differed",
          "Only modern scholars differ",
        ],
        correctAnswer: "No – he stated there is no difference of scholarly opinion that stringed instruments are prohibited",
        explanation:
          "Ibn Hajar al-Haytami explicitly said that stringed instruments such as the tanbur, oud and similar instruments are prohibited with no difference of opinion among the scholars whose views carry weight.",
      },
      {
        question: "What is the ruling on a woman singing in front of other women without instruments?",
        options: [
          "Always prohibited",
          "Permissible if the content is appropriate and it does not lead to excess or neglect of duties",
          "Only allowed on Eid",
          "Only allowed if men can hear",
        ],
        correctAnswer: "Permissible if the content is appropriate and it does not lead to excess or neglect of duties",
        explanation:
          "When free of instruments and immoral content, and performed in a private setting among women, singing is generally allowed within the limits of moderation.",
      },
      {
        question: "Why did the Prophet (PBUH) not object to Abu Bakr calling the girls' singing 'of Shaytan'?",
        options: [
          "Because he disagreed but stayed silent",
          "Because the description was correct in principle; he only granted a concession due to the occasion of Eid",
          "Because Abu Bakr was wrong",
          "Because it was not important",
        ],
        correctAnswer: "Because the description was correct in principle; he only granted a concession due to the occasion of Eid",
        explanation:
          "Scholars explain that the Prophet's approval of the description shows the blameworthy nature of such singing in general, while the concession was specific to the young girls and the days of Eid.",
      },
      {
        question: "What is the view of the majority regarding the use of the duff by men?",
        options: [
          "Completely unrestricted",
          "Many scholars restrict the concession primarily to women; some allow limited use by men on the same occasions",
          "Completely forbidden for men in all cases",
          "Only allowed in the Haram",
        ],
        correctAnswer: "Many scholars restrict the concession primarily to women; some allow limited use by men on the same occasions",
        explanation:
          "The authentic reports involve women. Some later scholars extended a limited concession to men, but the more cautious view keeps the primary ruling for women.",
      },
      {
        question: "How does music create hypocrisy in the heart according to the reports from the Salaf?",
        options: [
          "It has no such effect",
          "It makes the person show outward religiosity while the heart prefers entertainment over obedience and the Quran",
          "It only affects non-Muslims",
          "It strengthens sincerity",
        ],
        correctAnswer: "It makes the person show outward religiosity while the heart prefers entertainment over obedience and the Quran",
        explanation:
          "The Salaf explained that constant exposure to music weakens the heart's attachment to the Quran and remembrance of Allah, producing a form of practical hypocrisy.",
      },
      {
        question: "What is the ruling on attending a wedding where prohibited musical instruments are being played?",
        options: [
          "Fully permissible",
          "One should avoid remaining in a place where sin is being committed openly if one has the ability to leave or change it",
          "It is obligatory to stay",
          "Only the host is responsible",
        ],
        correctAnswer: "One should avoid remaining in a place where sin is being committed openly if one has the ability to leave or change it",
        explanation:
          "The principle of forbidding evil includes not sitting in a gathering where Allah's limits are violated when one has the ability to remove oneself.",
      },
      {
        question: "Did Imam Malik consider music and singing as something that the people of knowledge practiced?",
        options: [
          "Yes, he encouraged it",
          "No – the people of knowledge and religion in the early generations did not gather for such entertainment",
          "Only in Madinah",
          "Only for students",
        ],
        correctAnswer: "No – the people of knowledge and religion in the early generations did not gather for such entertainment",
        explanation:
          "The reports from the early Imams show that the practice of gathering for musical entertainment was foreign to the way of the scholars of the first generations.",
      },
      {
        question: "What is the correct understanding of the Hadith in which the Prophet (PBUH) told Anjashah to slow down because of the 'glass vessels'?",
        options: [
          "It prohibits all beautiful voices",
          "It shows that a beautiful voice used in a permissible context (driving camels) is not forbidden; the concern was not to harm the women riders",
          "It prohibits camel drivers",
          "It has no relevance",
        ],
        correctAnswer: "It shows that a beautiful voice used in a permissible context (driving camels) is not forbidden; the concern was not to harm the women riders",
        explanation:
          "The Hadith demonstrates that a pleasant voice in a non-entertaining, functional context is not the same as the prohibited singing with instruments or seductive performance.",
      },
      {
        question: "According to Ibn al-Qayyim, what is the relationship between music and the remembrance of Allah?",
        options: [
          "They support each other",
          "Music is a barrier that prevents the heart from tasting the sweetness of the Quran and dhikr",
          "Music is a form of dhikr",
          "There is no relationship",
        ],
        correctAnswer: "Music is a barrier that prevents the heart from tasting the sweetness of the Quran and dhikr",
        explanation:
          "Ibn al-Qayyim explained in detail that the love of music and the love of the Quran cannot fully coexist; one will push the other out of the heart.",
      },
      {
        question: "Is there a difference between listening to music intentionally and hearing it unintentionally in the street?",
        options: [
          "No difference",
          "Yes – intentional listening is the sin; unintentional hearing while one dislikes it and tries to avoid it is not held against the person",
          "Both are equal major sins",
          "Unintentional is worse",
        ],
        correctAnswer: "Yes – intentional listening is the sin; unintentional hearing while one dislikes it and tries to avoid it is not held against the person",
        explanation:
          "Scholars distinguish between the one who seeks out music and the one who hears it without choice and turns away from it in his heart.",
      },
      {
        question: "What was the reaction of the Companions when they heard musical instruments or singing that was blameworthy?",
        options: [
          "They joined in",
          "They objected and described it as belonging to Shaytan, as Abu Bakr did",
          "They were indifferent",
          "They recorded it for history",
        ],
        correctAnswer: "They objected and described it as belonging to Shaytan, as Abu Bakr did",
        explanation:
          "The natural reaction of the Companions was to reject and denounce such sounds, showing that the prohibition was understood early in Islam.",
      },
      {
        question: "How do scholars respond to the claim that 'there is no clear text prohibiting music'?",
        options: [
          "They agree with the claim",
          "They point to Quran 31:6 with the interpretation of the Salaf, the authentic Hadith of ma'azif, and the consensus of the four schools",
          "They say only weak Hadith exist",
          "They say it is only makruh",
        ],
        correctAnswer: "They point to Quran 31:6 with the interpretation of the Salaf, the authentic Hadith of ma'azif, and the consensus of the four schools",
        explanation:
          "The claim of 'no text' is rejected by the major fatwa bodies and classical scholars who list the Quranic verse, the authentic Hadith, and the ijma' of the Imams.",
      },
      {
        question: "What is the ruling on using musical ringtones on a phone?",
        options: [
          "Permissible because it is short",
          "Prohibited if the sound is that of a musical instrument; one should use a simple tone or Quranic recitation instead",
          "Recommended",
          "Only allowed for work phones",
        ],
        correctAnswer: "Prohibited if the sound is that of a musical instrument; one should use a simple tone or Quranic recitation instead",
        explanation:
          "The prohibition applies to the nature of the sound. Replacing musical ringtones with permissible alternatives is the consistent application of the ruling.",
      },
      {
        question: "Did any of the four Imams permit the use of the flute or wind instruments for entertainment?",
        options: [
          "Yes, all of them",
          "No – the reports indicate they regarded wind instruments and similar tools of entertainment as prohibited",
          "Only Imam Malik",
          "Only Imam Abu Hanifah",
        ],
        correctAnswer: "No – the reports indicate they regarded wind instruments and similar tools of entertainment as prohibited",
        explanation:
          "The statements collected by later scholars from the four schools show a consistent prohibition of the instruments of entertainment, including wind instruments.",
      },
      {
        question: "What is the wisdom mentioned by scholars behind the prohibition of music?",
        options: [
          "There is no wisdom",
          "It protects the heart from distraction, prevents neglect of the Quran and prayer, and closes the door to further sins that often accompany entertainment gatherings",
          "It is only to make life difficult",
          "It is only for the Arabs of that time",
        ],
        correctAnswer: "It protects the heart from distraction, prevents neglect of the Quran and prayer, and closes the door to further sins that often accompany entertainment gatherings",
        explanation:
          "The scholars of the heart (Ibn al-Qayyim, Ibn Taymiyyah and others) explained that the prohibition is a mercy that preserves the spiritual health of the believer.",
      },
      {
        question: "Is it permissible to listen to the human voice alone if it is imitating the melody and style of famous singers of entertainment?",
        options: [
          "Yes, freely",
          "It is disliked or prohibited if it involves imitating the style of immoral entertainers and leads to the same effect",
          "Only if the words are changed",
          "Only for children",
        ],
        correctAnswer: "It is disliked or prohibited if it involves imitating the style of immoral entertainers and leads to the same effect",
        explanation:
          "Even without instruments, imitating the manner of those known for sin and entertainment can fall under the principle of not resembling the disobedient and avoiding the means that lead to fitnah.",
      },
      {
        question: "What did the Prophet (PBUH) say about the two foolish and sinful voices?",
        options: [
          "The Adhan and the Iqamah",
          "The voice of entertainment and play (flutes of Shaytan) and the voice of wailing and screaming at calamity",
          "Loud and soft speech",
          "Arabic and non-Arabic",
        ],
        correctAnswer: "The voice of entertainment and play (flutes of Shaytan) and the voice of wailing and screaming at calamity",
        explanation:
          "In the Hadith concerning the death of his son Ibrahim, the Prophet (PBUH) clarified that he did not forbid weeping itself, but forbade the two foolish voices: those of entertainment and those of excessive mourning.",
      },
      {
        question: "According to the majority, can the presence of good intentions make musical instruments permissible?",
        options: [
          "Yes, intention changes the ruling",
          "No – good intentions do not make a prohibited means permissible",
          "Only for dawah",
          "Only for education",
        ],
        correctAnswer: "No – good intentions do not make a prohibited means permissible",
        explanation:
          "The principle is that the ends do not justify the means when the means are explicitly prohibited. Using haram instruments for a 'good' purpose does not lift the prohibition.",
      },
      {
        question: "What is the ruling on teaching or learning to play musical instruments?",
        options: [
          "Recommended as a skill",
          "Prohibited, because it is learning and promoting what is forbidden",
          "Only allowed for theory",
          "Only for women",
        ],
        correctAnswer: "Prohibited, because it is learning and promoting what is forbidden",
        explanation:
          "Since playing the instruments is prohibited, teaching and learning them falls under assisting in sin and is likewise forbidden according to the majority.",
      },
      {
        question: "How should a Muslim respond when invited to a gathering that will feature prohibited music?",
        options: [
          "Attend and enjoy",
          "Politely decline, or if already present and unable to change the evil, leave if possible",
          "Attend but wear headphones",
          "Attend and dance moderately",
        ],
        correctAnswer: "Politely decline, or if already present and unable to change the evil, leave if possible",
        explanation:
          "The duty of enjoining good and forbidding evil, and the prohibition of sitting in a gathering of sin, require a Muslim to avoid or leave such environments when able.",
      },
      {
        question: "Is there an authentic report that the Prophet (PBUH) covered his ears when he heard a shepherd's flute?",
        options: [
          "Yes, and it is used as evidence of prohibition",
          "There is a report, though its chain is discussed; the stronger evidences for prohibition are the Hadith of ma'azif and the Quranic verse",
          "No such report exists",
          "It is fabricated according to all",
        ],
        correctAnswer: "There is a report, though its chain is discussed; the stronger evidences for prohibition are the Hadith of ma'azif and the Quranic verse",
        explanation:
          "A narration about the Prophet covering his ears from a flute exists, but Hadith scholars differ on its strength. The primary evidences remain the authentic texts already cited.",
      },
      {
        question: "What is the position of the Standing Committee (Saudi) on singing accompanied by musical instruments?",
        options: [
          "They permit it",
          "They affirm the prohibition based on Quran, Sunnah and the understanding of the Salaf",
          "They say it is only makruh",
          "They have no position",
        ],
        correctAnswer: "They affirm the prohibition based on Quran, Sunnah and the understanding of the Salaf",
        explanation:
          "The Standing Committee has issued clear statements confirming that singing with musical instruments is prohibited, citing 31:6 and the Hadith of ma'azif.",
      },
      {
        question: "Can nasheeds that praise Allah or the Prophet be accompanied by the duff according to some scholars?",
        options: [
          "Never",
          "Some scholars allow the duff with nasheeds on the occasions where the duff itself is permitted (weddings, Eids)",
          "Always, without restriction",
          "Only in the mosque",
        ],
        correctAnswer: "Some scholars allow the duff with nasheeds on the occasions where the duff itself is permitted (weddings, Eids)",
        explanation:
          "The concession of the duff is tied to specific occasions. Extending it beyond those occasions is where scholarly discussion occurs; unrestricted use is not the majority view.",
      },
      {
        question: "What is the danger of becoming attached to music according to the spiritual insights of the scholars?",
        options: [
          "No danger",
          "It can become a rival to the love of Allah and the Quran in the heart, leading to spiritual dryness",
          "It only affects the body",
          "It increases productivity",
        ],
        correctAnswer: "It can become a rival to the love of Allah and the Quran in the heart, leading to spiritual dryness",
        explanation:
          "The scholars of the heart warned that what a person loves to listen to repeatedly shapes the heart. Preferring music over the Quran is a sign of a heart that needs purification.",
      },
      {
        question: "Is the prohibition of music considered one of the matters on which the Ummah has a clear majority position?",
        options: [
          "No, it is highly disputed",
          "Yes – the four schools and the vast majority of classical and contemporary traditional scholars hold the prohibition of instruments",
          "Only the Salafi movement holds it",
          "Only the Sufis hold it",
        ],
        correctAnswer: "Yes – the four schools and the vast majority of classical and contemporary traditional scholars hold the prohibition of instruments",
        explanation:
          "While isolated voices have differed, the dominant and continuous position across the madhhabs is the prohibition of musical instruments.",
      },
      {
        question: "What should be done with musical instruments that a person already owns?",
        options: [
          "Keep them for decoration",
          "Destroy them or render them unusable for music, as the scholars permitted destroying instruments of sin",
          "Sell them to non-Muslims",
          "Gift them to friends",
        ],
        correctAnswer: "Destroy them or render them unusable for music, as the scholars permitted destroying instruments of sin",
        explanation:
          "Ibn Taymiyyah and others stated that it is permissible to destroy musical instruments. Selling them would be assisting others in sin.",
      },
      {
        question: "In the context of the Hadith of ma'azif, why is the comparison with zina and alcohol significant?",
        options: [
          "It shows they are all minor issues",
          "It shows that musical instruments are listed alongside things that are definitively prohibited, indicating the same category of prohibition",
          "It shows only alcohol is serious",
          "It has no significance",
        ],
        correctAnswer: "It shows that musical instruments are listed alongside things that are definitively prohibited, indicating the same category of prohibition",
        explanation:
          "The Prophet (PBUH) grouped ma'azif with zina, silk (for men) and alcohol – all of which are clearly forbidden. This rhetorical structure is used by scholars as strong evidence of prohibition.",
      },
    ],
    advanced: [
      {
        question: "What is the precise technical meaning of 'ma'azif' according to the scholars of the Arabic language and Hadith commentators?",
        options: [
          "Only the voice",
          "Instruments of entertainment that are played; the term is inclusive of various types of musical instruments",
          "Only the duff",
          "Only stringed instruments from Persia",
        ],
        correctAnswer: "Instruments of entertainment that are played; the term is inclusive of various types of musical instruments",
        explanation:
          "The linguistic authorities and the Hadith scholars (including Ibn Hajar and others) explain that ma'azif is a generic term for the instruments used for lahw (entertainment).",
      },
      {
        question: "How did Ibn Hazm's position on the Hadith of ma'azif differ from the majority, and how was it answered?",
        options: [
          "He fully accepted it",
          "He claimed the Hadith is munqati' (interrupted); the majority of Hadith masters rejected this claim and authenticated the report through other connected chains",
          "He said it is fabricated",
          "He never discussed it",
        ],
        correctAnswer: "He claimed the Hadith is munqati' (interrupted); the majority of Hadith masters rejected this claim and authenticated the report through other connected chains",
        explanation:
          "Ibn Hazm's criticism was answered by Ibn al-Qayyim, Ibn Hajar and al-Albani, who demonstrated that the Hadith is established through multiple routes and the mu'allaq form in Bukhari is not a weakness in this case.",
      },
      {
        question: "What is the Usuli (legal-theory) status of the prohibition of musical instruments according to the majority?",
        options: [
          "It is only a weak opinion",
          "It is established by a combination of Quranic indication (with Salaf interpretation), authentic Sunnah, and the consensus of the four schools – reaching a high level of certainty for practical purposes",
          "It is pure speculation",
          "It is only cultural",
        ],
        correctAnswer: "It is established by a combination of Quranic indication (with Salaf interpretation), authentic Sunnah, and the consensus of the four schools – reaching a high level of certainty for practical purposes",
        explanation:
          "Although some debate the strength of individual evidences, the cumulative case and the continuous practice of the schools give the prohibition a firm standing in traditional Islamic law.",
      },
      {
        question: "How did the scholars reconcile the Hadith of the two young girls on Eid with the general prohibition?",
        options: [
          "They said the prohibition was abrogated",
          "They limited the concession to young girls, the use of the duff, and the specific days of Eid (or weddings), while maintaining the general prohibition outside those limits",
          "They said the Hadith is weak",
          "They said all singing is allowed",
        ],
        correctAnswer: "They limited the concession to young girls, the use of the duff, and the specific days of Eid (or weddings), while maintaining the general prohibition outside those limits",
        explanation:
          "This is the classical method of reconciliation: the specific permission does not cancel the general rule; it creates a limited exception.",
      },
      {
        question: "What was Imam al-Shafi'i's reported statement about the 'taghbeer' that he encountered in Baghdad?",
        options: [
          "He recommended it",
          "He described it as an innovation of the heretics that diverts people from the Quran",
          "He said it was obligatory",
          "He never mentioned it",
        ],
        correctAnswer: "He described it as an innovation of the heretics that diverts people from the Quran",
        explanation:
          "This statement is frequently cited to show that even forms of singing claimed to be spiritual were rejected by the early Imams when they diverted from the Quran.",
      },
      {
        question: "In the works of Ibn al-Qayyim (especially Ighathat al-Lahfan), what extensive treatment does music receive?",
        options: [
          "He defends it",
          "He dedicates significant portions to proving its prohibition, listing Hadiths, Athar of the Salaf, and the spiritual harms it causes",
          "He is silent",
          "He only discusses instruments of war",
        ],
        correctAnswer: "He dedicates significant portions to proving its prohibition, listing Hadiths, Athar of the Salaf, and the spiritual harms it causes",
        explanation:
          "Ighathat al-Lahfan contains one of the most detailed classical discussions on the prohibition of singing and musical instruments and their effect on the heart.",
      },
      {
        question: "What is the difference between the Hanafi school's approach to the illah of the prohibition and a purely textualist approach?",
        options: [
          "There is no difference",
          "Some Hanafi discussions focus on the instrument being designed for lahw; the textualist approach relies primarily on the explicit Hadith and the Salaf's understanding of the Quran",
          "Hanafis permit all music",
          "Textualists permit all music",
        ],
        correctAnswer: "Some Hanafi discussions focus on the instrument being designed for lahw; the textualist approach relies primarily on the explicit Hadith and the Salaf's understanding of the Quran",
        explanation:
          "While the practical ruling is the same (prohibition), the legal reasoning can differ in emphasis between those who stress the effective cause of entertainment and those who stress the explicit textual prohibition.",
      },
      {
        question: "How do contemporary fatwa bodies such as islamqa.info treat the minority opinions that permit musical instruments?",
        options: [
          "They adopt them",
          "They regard them as anomalous (shadh) and not to be followed in the face of the stronger evidences and the majority position of the four schools",
          "They say both are equal",
          "They have no view",
        ],
        correctAnswer: "They regard them as anomalous (shadh) and not to be followed in the face of the stronger evidences and the majority position of the four schools",
        explanation:
          "Islamqa and similar traditional fatwa sites consistently state that the minority views do not override the clear Hadith and the agreement of the four Imams.",
      },
      {
        question: "What is the ruling on 'digital' or software-generated music that has no physical instrument?",
        options: [
          "Fully permissible because no physical instrument is used",
          "Still prohibited because the sound and the effect are the same as the forbidden instruments; the means of production does not change the ruling",
          "Only allowed if free",
          "Only allowed for video games",
        ],
        correctAnswer: "Still prohibited because the sound and the effect are the same as the forbidden instruments; the means of production does not change the ruling",
        explanation:
          "Scholars apply the prohibition to the resulting sound and its effect on the heart, not merely to the physical object that produces it. Digital music falls under the same ruling.",
      },
      {
        question: "In Usul al-Fiqh terms, is the prohibition of music considered 'ta'abbudi' (purely devotional) or is there an discernible wisdom?",
        options: [
          "Purely ta'abbudi with no wisdom",
          "While the ruling is based on text, scholars have elaborated clear wisdoms related to protection of the heart, preservation of the Quran's place, and prevention of associated sins",
          "Only wisdom, no text",
          "Neither",
        ],
        correctAnswer: "While the ruling is based on text, scholars have elaborated clear wisdoms related to protection of the heart, preservation of the Quran's place, and prevention of associated sins",
        explanation:
          "The prohibition is textually grounded, yet the scholars of the heart and the jurists have consistently explained the beneficial purposes behind it.",
      },
      {
        question: "What is the status of the narration 'I was sent to destroy musical instruments'?",
        options: [
          "Sahih according to all",
          "It exists with a weak chain in Musnad Ahmad; the overall prohibition does not depend on it because stronger evidences exist",
          "It is fabricated according to all",
          "It is the strongest evidence",
        ],
        correctAnswer: "It exists with a weak chain in Musnad Ahmad; the overall prohibition does not depend on it because stronger evidences exist",
        explanation:
          "Hadith specialists note the weakness of this particular wording, while affirming the prohibition on the basis of the authentic Hadith of ma'azif and other evidences.",
      },
      {
        question: "How did the scholars of the four schools treat the claim that music is permissible because 'everything is permissible until proven otherwise'?",
        options: [
          "They accepted the claim fully",
          "They responded that the proof of prohibition has been established through the Quranic verse (with Salaf tafsir), the authentic Hadith, and consensus, so the default no longer applies",
          "They said the default is prohibition",
          "They ignored the principle",
        ],
        correctAnswer: "They responded that the proof of prohibition has been established through the Quranic verse (with Salaf tafsir), the authentic Hadith, and consensus, so the default no longer applies",
        explanation:
          "The principle of original permissibility is acknowledged, but once clear evidence of prohibition is present, the matter is removed from the realm of the default.",
      },
      {
        question: "What is the advanced scholarly discussion regarding the 'voice of a non-mahram woman' in the context of singing?",
        options: [
          "The voice is never a fitnah",
          "Many scholars consider a woman's singing voice in particular to be a greater source of fitnah than ordinary speech, and therefore prohibit men from listening to it",
          "Only the face is a fitnah",
          "Only the Hanafis discuss it",
        ],
        correctAnswer: "Many scholars consider a woman's singing voice in particular to be a greater source of fitnah than ordinary speech, and therefore prohibit men from listening to it",
        explanation:
          "The distinction between ordinary speech (which may be necessary) and melodious singing (which is for entertainment and more affecting) is made by numerous jurists.",
      },
      {
        question: "In the methodology of the Salaf, how was the interpretation of 'lahw al-hadith' given weight?",
        options: [
          "It was ignored",
          "The statements of the Companions and major Tabi'in were treated as the primary explanation of the verse, carrying significant authority",
          "Only linguistic analysis mattered",
          "Only later scholars mattered",
        ],
        correctAnswer: "The statements of the Companions and major Tabi'in were treated as the primary explanation of the verse, carrying significant authority",
        explanation:
          "In traditional tafsir methodology, the understanding of the Companions regarding the meaning of a verse is given strong precedence, especially when they are numerous and agree.",
      },
      {
        question: "What is the ruling on music therapy or using music for medical purposes according to traditional fatwa bodies?",
        options: [
          "Fully encouraged",
          "If a genuine medical need is established and no permissible alternative exists, some contemporary scholars discuss limited exceptions under necessity; the default remains prohibition",
          "Always prohibited with no exception",
          "Only for mental health",
        ],
        correctAnswer: "If a genuine medical need is established and no permissible alternative exists, some contemporary scholars discuss limited exceptions under necessity; the default remains prohibition",
        explanation:
          "Necessity (darurah) can lift a prohibition temporarily when the conditions are strictly met. Most traditional bodies still emphasise seeking alternatives first.",
      },
      {
        question: "How does the prohibition of music relate to the broader Maqasid of protecting the intellect and religion?",
        options: [
          "It has no relation",
          "It serves the protection of religion (by keeping the heart attached to the Quran) and the intellect (by preventing the heedlessness and associated excesses that music often accompanies)",
          "It only protects wealth",
          "It only protects lineage",
        ],
        correctAnswer: "It serves the protection of religion (by keeping the heart attached to the Quran) and the intellect (by preventing the heedlessness and associated excesses that music often accompanies)",
        explanation:
          "Although not always listed as a primary maqsad in the classical five, the scholars link the ruling to the preservation of the religious state of the heart and clarity of mind.",
      },
      {
        question: "What was the position of the early Hanbali scholars regarding the destruction of musical instruments?",
        options: [
          "They forbade destroying them",
          "They permitted destroying them as a way of removing the means of sin",
          "They required selling them first",
          "They had no position",
        ],
        correctAnswer: "They permitted destroying them as a way of removing the means of sin",
        explanation:
          "Consistent with the view that the instruments are prohibited, the Hanbali tradition (and others) allowed their destruction so they could not be used for the forbidden purpose.",
      },
      {
        question: "In advanced discussions, what is the difference between 'sama'' in the Sufi tradition and the general ruling on music?",
        options: [
          "There is no difference",
          "Classical jurists often criticised forms of sama' that involved instruments or led to ecstasy that took people away from the Shariah; the general prohibition of instruments still applies",
          "Sama' is always permitted",
          "Sama' is always prohibited even without instruments",
        ],
        correctAnswer: "Classical jurists often criticised forms of sama' that involved instruments or led to ecstasy that took people away from the Shariah; the general prohibition of instruments still applies",
        explanation:
          "While some Sufi orders developed practices of listening, the major jurists of the four schools maintained the prohibition of instruments and cautioned against any practice that contradicted the Sunnah.",
      },
      {
        question: "What is the strongest single textual evidence used by the majority for the prohibition of musical instruments?",
        options: [
          "A weak Hadith about molten lead",
          "The Hadith of Abu Malik al-Ash'ari regarding those who will regard ma'azif as permissible, supported by the Quranic verse 31:6 and the consensus of the schools",
          "Only the practice of later scholars",
          "Only cultural custom",
        ],
        correctAnswer: "The Hadith of Abu Malik al-Ash'ari regarding those who will regard ma'azif as permissible, supported by the Quranic verse 31:6 and the consensus of the schools",
        explanation:
          "This combination – a Hadith graded authentic by major authorities, a Quranic verse explained by the Companions, and the agreement of the four Imams – forms the core of the majority position.",
      },
      {
        question: "How should a student of knowledge approach the minority opinions that permit music when advising the general public?",
        options: [
          "Present both as equal options",
          "Present the stronger, majority position based on the evidence, while acknowledging that some differed, without giving the impression that the matter is open to personal choice against the weight of evidence",
          "Hide the majority view",
          "Only mention the minority view",
        ],
        correctAnswer: "Present the stronger, majority position based on the evidence, while acknowledging that some differed, without giving the impression that the matter is open to personal choice against the weight of evidence",
        explanation:
          "The responsibility of the advisor is to convey the most correct view according to the evidence, not to create artificial equality between the established position and anomalous views.",
      },
      {
        question: "What is the relationship between the prohibition of music and the prohibition of 'lahw' in general in Islamic ethics?",
        options: [
          "They are unrelated",
          "Music is a major form of the lahw that the Quran and Sunnah warn against when it distracts from the remembrance of Allah and the Hereafter",
          "Lahw is only about games",
          "Music is the only form of lahw",
        ],
        correctAnswer: "Music is a major form of the lahw that the Quran and Sunnah warn against when it distracts from the remembrance of Allah and the Hereafter",
        explanation:
          "The Quranic condemnation of lahw al-hadith is part of a broader ethic that prioritises the remembrance of Allah over idle entertainment that hardens the heart.",
      },
      {
        question: "In the advanced fiqh of the duff, what conditions do the strictest scholars place on its use?",
        options: [
          "No conditions",
          "It should be without rings, used by women, on the occasions of wedding or Eid, and not accompanied by other prohibited elements",
          "Only the presence of rings matters",
          "Only the size matters",
        ],
        correctAnswer: "It should be without rings, used by women, on the occasions of wedding or Eid, and not accompanied by other prohibited elements",
        explanation:
          "The more restrictive scholarly position keeps the concession tightly bound to the conditions found in the authentic reports.",
      },
      {
        question: "What is the final practical advice given by traditional scholars to a person struggling to leave music?",
        options: [
          "Continue until it becomes easy",
          "Cut the means immediately, fill the time with Quran and beneficial knowledge, make constant du'a, and seek the company of those who remind one of Allah",
          "Replace it with other entertainment",
          "Only reduce the volume",
        ],
        correctAnswer: "Cut the means immediately, fill the time with Quran and beneficial knowledge, make constant du'a, and seek the company of those who remind one of Allah",
        explanation:
          "The path of change in the Sunnah and the advice of the scholars of the heart combines decisive action, replacement with good, and reliance upon Allah through du'a and good company.",
      },
      {
        question: "Why do the scholars consider the love of music a possible sign of hypocrisy in the heart?",
        options: [
          "Because it is listed as a minor sin",
          "Because the reports of the Salaf link it to the growth of hypocrisy, and because a heart that prefers it to the Quran is showing a preference contrary to true faith",
          "Because all entertainment is hypocrisy",
          "There is no such link",
        ],
        correctAnswer: "Because the reports of the Salaf link it to the growth of hypocrisy, and because a heart that prefers it to the Quran is showing a preference contrary to true faith",
        explanation:
          "The statement of Ibn Mas'ud and the explanations of later scholars treat the attachment to music as a symptom of a deeper spiritual disease that needs treatment through the Quran.",
      },
      {
        question: "What is the comprehensive conclusion of the majority of traditional scholars on the topic of music?",
        options: [
          "Music is fully permissible",
          "Musical instruments are prohibited; pure singing is permissible under strict conditions; the duff has a limited concession; the believer should fill his hearing with the Quran",
          "Only modern music is prohibited",
          "Only singing is prohibited, instruments are allowed",
        ],
        correctAnswer: "Musical instruments are prohibited; pure singing is permissible under strict conditions; the duff has a limited concession; the believer should fill his hearing with the Quran",
        explanation:
          "This summary reflects the balanced yet firm position derived from the Quran, the authentic Sunnah, the understanding of the Companions, and the continuous teaching of the four schools of law.",
      },
      {
        question: "According to the detailed analysis of Ibn al-Qayyim, what happens to the heart that is constantly exposed to music?",
        options: [
          "It becomes stronger in faith",
          "It becomes veiled from the sweetness of the Quran and develops a preference for lahw over the remembrance of Allah",
          "It remains unchanged",
          "It only affects the ears",
        ],
        correctAnswer: "It becomes veiled from the sweetness of the Quran and develops a preference for lahw over the remembrance of Allah",
        explanation:
          "Ibn al-Qayyim explains that the heart has a limited capacity; when it is filled with the love of music, the love of the Quran is diminished, and the person finds the Quran heavy while finding music light and enjoyable.",
      },
      {
        question: "What is the ruling on a person who defends musical instruments by saying 'the Hadith is only about people who declare them lawful, not about those who listen while knowing they are haram'?",
        options: [
          "This is a valid distinction that makes listening permissible",
          "This is a misunderstanding; the Hadith establishes the prohibition, and those who listen while knowing the ruling are still committing a sin, though declaring it lawful is an additional act of disobedience",
          "Listening becomes recommended",
          "The Hadith has no relevance to individuals",
        ],
        correctAnswer: "This is a misunderstanding; the Hadith establishes the prohibition, and those who listen while knowing the ruling are still committing a sin, though declaring it lawful is an additional act of disobedience",
        explanation:
          "The Hadith shows the severity by mentioning those who will go further and declare the prohibited as lawful. The underlying prohibition of the instruments themselves remains, and acting upon a known prohibition is sinful.",
      },
      {
        question: "In the works of the major Hadith commentators, how is the mu'allaq Hadith of ma'azif in Sahih al-Bukhari treated for practical legal purposes?",
        options: [
          "It is ignored completely",
          "It is accepted as authentic for establishing the ruling because supporting connected chains exist and the major critics authenticated it",
          "It is considered fabricated",
          "It is only used for historical interest",
        ],
        correctAnswer: "It is accepted as authentic for establishing the ruling because supporting connected chains exist and the major critics authenticated it",
        explanation:
          "Although presented in mu'allaq form by al-Bukhari, the Hadith is corroborated by connected narrations and has been judged sahih by Ibn Hajar, Ibn al-Qayyim, al-Albani and others for the purpose of deriving the legal ruling.",
      },
      {
        question: "What is the final counsel of the traditional scholars regarding the competition between the Quran and music in a Muslim's life?",
        options: [
          "Balance both equally",
          "Give the Quran the highest place in one's hearing and heart; remove music so that the heart can be polished by the speech of Allah",
          "Prefer music for emotional health",
          "Use music to understand the Quran better",
        ],
        correctAnswer: "Give the Quran the highest place in one's hearing and heart; remove music so that the heart can be polished by the speech of Allah",
        explanation:
          "The consistent advice of the scholars of the heart is that the Quran is the true polish of the heart. Whatever competes with it should be removed so that the believer can taste the sweetness that Allah has placed in His Book.",
      },
      {
        question: "How do the scholars view the claim that 'music is a universal language that brings people together' in light of the Islamic sources?",
        options: [
          "They fully accept it as a justification",
          "They respond that true unity and purification of the heart come through the Quran and the Sunnah; any tool that distracts from that cannot be justified by social claims",
          "They say music is the best form of dawah",
          "They consider the claim irrelevant to the ruling",
        ],
        correctAnswer: "They respond that true unity and purification of the heart come through the Quran and the Sunnah; any tool that distracts from that cannot be justified by social claims",
        explanation:
          "While human beings share emotions, the Shariah judges actions by their conformity to revelation. Social benefits claimed for a prohibited act do not override the textual prohibition and the observed spiritual harms.",
      },
    ],
  },
}

export default musicCategory
