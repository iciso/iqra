import type { QuizCategory } from "@/types/quiz"

export const datingCategory: QuizCategory = {
  id: "dating",
  title: "Dating",
  description: "Islamic rulings on pre-marital relationships, modesty, and courtship",
  icon: "heart",
  levels: {
    easy: [
      {
         id: 1,
         question: "What is the direct ruling of Islamic Shariah regarding modern pre-marital 'dating' and romantic boyfriend-girlfriend relationships?",
         options: [
            "Permissible if both individuals have good intentions",
            "Strictly prohibited as it opens doors to major sins like Zina",
            "Encouraged only if parents are aware of the meetings",
            "Permissible provided there is no physical intimacy"
         ],
         correctAnswer: "Strictly prohibited as it opens doors to major sins like Zina",
         explanation: "Islam strictly prohibits pre-marital romantic dating because it violates boundaries set by Allah and serves as a pathway ('sad ad-dharaai') to unlawful intimacy (Zina). Reference: Quran 17:32."
      },
      {
         id: 2,
         question: "Which specific verse in the Noble Quran commands believers to completely avoid the pathways leading to unlawful sexual relations?",
         options: [
            "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way. (Al-Isra 17:32)",
            "Marry off the unmarried among you... (An-Nur 24:32)",
            "Tell the believing men to lower their gaze... (An-Nur 24:30)",
            "O you who have believed, do not enter houses other than your own... (An-Nur 24:27)"
         ],
         correctAnswer: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way. (Al-Isra 17:32)",
         explanation: "Surah Al-Isra 17:32 does not merely say 'do not commit Zina', it commands 'do not approach it', forbidding all preliminary steps like dating, inappropriate touching, and seclusion."
      },
      {
         id: 3,
         question: "According to a famous Hadith in Sahih Muslim, what is considered the 'zina of the eyes' during interactions between unrelated men and women?",
         options: [
            "Speaking with a soft voice",
            "Looking with lustful desire at what is forbidden",
            "Thinking about marriage constantly",
            "Meeting in a public marketplace"
         ],
         correctAnswer: "Looking with lustful desire at what is forbidden",
         explanation: "The Prophet Muhammad (peace be upon him) taught that the eyes commit Zina through a lustful glance, the ears through listening, the tongue through speech, the hand through seizing, and the foot through walking towards sin."
      },
      {
         id: 4,
         question: "What is the Islamic ruling regarding a man and a non-Mahram woman being alone together (Khlwah) in a closed room or isolated place?",
         options: [
            "Permissible if they are discussing marriage plans",
            "Permissible if they keep the door slightly open",
            "Strictly forbidden unless accompanied by a Mahram",
            "Permissible during daylight hours only"
         ],
         correctAnswer: "Strictly forbidden unless accompanied by a Mahram",
         explanation: "The Prophet (ﷺ) stated: 'No man is alone with a woman but the Shaytan is the third among them' (Tirmidhi). Seclusion (Khlwah) with a non-Mahram is strictly forbidden in Islam."
      },
      {
         id: 5,
         question: "When a Muslim man intends to propose marriage to a woman, what does Islamic law permit him to look at regarding her?",
         options: [
            "Her entire body except her face and hands",
            "Her face and hands only, to evaluate what encourages him to marry her",
            "Nothing until after the formal wedding contract (Nikah)",
            "Whatever he desires as long as they are in a public space"
         ],
         correctAnswer: "Her face and hands only, to evaluate what encourages him to marry her",
         explanation: "Sunan accounts indicate the Prophet (ﷺ) instructed prospective grooms to look at what will encourage him to proceed with marriage, which mainstream scholars define as the face and hands."
      },
      {
         id: 6,
         question: "Which of the following describes the proper Islamic process of getting to know someone for marriage (Khuthbah)?",
         options: [
            "Dating privately for several months to test compatibility",
            "Meeting in the presence of a Mahram or in a safe public environment with clear boundaries",
            "Living together under trial conditions for a week",
            "Exchanging intimate text messages late at night"
         ],
         correctAnswer: "Meeting in the presence of a Mahram or in a safe public environment with clear boundaries",
         explanation: "Meeting for marriage assessment must respect Shariah limits—ensuring no seclusion, no physical touch, and maintaining lowered gazes while discussing core compatibility values."
      },
      {
         id: 7,
         question: "What advice did the Prophet Muhammad (ﷺ) give regarding youth who have the physical and financial ability to marry?",
         options: [
            "Delay marriage until completing all life goals and career milestones",
            "Engage in long-term dating to ensure absolute perfection",
            "Marry early, as it guards the gaze and preserves chastity",
            "Avoid marriage entirely to focus solely on voluntary worship"
         ],
         correctAnswer: "Marry early, as it guards the gaze and preserves chastity",
         explanation: "The Prophet (ﷺ) said: 'O young people, whoever among you can afford the ba'ah (marriage), let him marry, for it is more effective in lowering the gaze and guarding chastity...' (Bukhari & Muslim)."
      },
      {
         id: 8,
         question: "How does Islam view 'falling in love' before marriage through unguided, unregulated emotional attachments?",
         options: [
            "As the highest form of spiritual devotion",
            "As a natural trap that often leads individuals to compromise Islamic morals and ethics",
            "As an obligatory prerequisite for a valid marriage",
            "As completely harmless as long as it remains online"
         ],
         correctAnswer: "As a natural trap that often leads individuals to compromise Islamic morals and ethics",
         explanation: "Unregulated emotional attachments before marriage cloud sound judgment, often lead to emotional heartbreak or disobedience to Allah, and bypass parental and familial safeguards."
      },
      {
         id: 9,
         question: "What is the ruling on prolonged private phone calls, text messaging, or video chatting between an unmarried man and woman under the guise of 'getting to know each other'?",
         options: [
            "Permissible without restriction if they are honest with each other",
            "Haram (prohibited) if it involves soft speech, flirtation, or leads to emotional attachment without a Mahram's oversight",
            "Encouraged to build modern relationship chemistry",
            "Permissible if they promise to marry each other eventually"
         ],
         correctAnswer: "Haram (prohibited) if it involves soft speech, flirtation, or leads to emotional attachment without a Mahram's oversight",
         explanation: "Communication between non-Mahrams must remain formal, objective, necessary, and free of flirtatious or alluring speech, as warned in Quran 33:32 ('...then do not be soft in speech [to men]...')."
      },
      {
         id: 10,
         question: "What does Surah An-Nur (24:30-31) emphasize first to both believing men and women before addressing modesty in dress and conduct?",
         options: [
            "To memorize the Quran daily",
            "To lower their gazes and guard their private parts",
            "To fast every Monday and Thursday",
            "To give generous charity to orphans"
         ],
         correctAnswer: "To lower their gazes and guard their private parts",
         explanation: "Allah commands both men and women to lower their gazes first, because the eyes are the gateway to desire and the primary instigator of inappropriate pre-marital attachments."
      },
      {
         id: 11,
         question: "Is parental consent or involvement considered essential when a Muslim woman enters into marriage?",
         options: [
            "No, she can marry herself without a guardian (Wali)",
            "Yes, the presence of a Wali (guardian) is a required condition for a valid marriage in mainstream jurisprudence",
            "It is optional and only cultural tradition",
            "Only if she is under the age of 18"
         ],
         correctAnswer: "Yes, the presence of a Wali (guardian) is a required condition for a valid marriage in mainstream jurisprudence",
         explanation: "The Prophet (ﷺ) said: 'There is no marriage without a Wali' (Abu Dawud, Tirmidhi). Protecting family involvement prevents secret, impulsive relationships."
      },
      {
         id: 12,
         question: "How does Islam classify Zina (fornication/adultery) in terms of major sins?",
         options: [
            "A minor sin that is easily expiated by daily prayers",
            "One of the greatest destructive major sins (Kaba'ir)",
            "Only a sin if society condemns it",
            "A cultural transgression rather than a religious one"
         ],
         correctAnswer: "One of the greatest destructive major sins (Kaba'ir)",
         explanation: "Zina is ranked among the gravest major sins right after shirk and unjustified murder, due to its devastating impact on lineage, family structures, and spiritual purity."
      },
      {
         id: 13,
         question: "What should a person do if they previously engaged in unlawful pre-marital dating or relationships and feel genuine remorse?",
         options: [
            "Publicly confess their sins to their entire community",
            "Turn to Allah in sincere repentance (Tawbah Nasuha), resolve never to return, and cover their sins",
            "Continue the relationship secretly until marriage is finalized",
            "Abandon all religious practices as they are beyond forgiveness"
         ],
         correctAnswer: "Turn to Allah in sincere repentance (Tawbah Nasuha), resolve never to return, and cover their sins",
         explanation: "Allah loves those who repent. Sincere Tawbah requires regret, stopping the sin immediately, and resolving never to repeat it, while concealing what Allah has concealed."
      },
      {
         id: 14,
         question: "Can a couple hold hands, hug, or kiss before the official marriage contract (Nikah) is executed?",
         options: [
            "Yes, if they are formally engaged (Khuthbah)",
            "Yes, as long as their parents give permission",
            "No, physical touch between non-Mahrams is strictly haram under all circumstances before Nikah",
            "Permissible if they intend to marry within a month"
         ],
         correctAnswer: "No, physical touch between non-Mahrams is strictly haram under all circumstances before Nikah",
         explanation: "An engagement (Khuthbah) is merely a promise to marry; it does not change the status of the man and woman to Mahrams. All rules of modesty and prohibitions of touching remain in full effect."
      },
      {
         id: 15,
         question: "What did the Prophet (ﷺ) warn about Satan's role when an unrelated man and woman are alone together?",
         options: [
            "Satan will leave them alone if they have pure intentions",
            "Satan is their third companion, whispering and pushing them toward immorality",
            "Satan has no power over people who are in love",
            "Satan only influences married couples"
         ],
         correctAnswer: "Satan is their third companion, whispering and pushing them toward immorality",
         explanation: "As stated in authentic narrations, when a man and woman are secluded, Satan acts as their third companion, working to break down their moral boundaries."
      },
      {
         id: 16,
         question: "Why does Islamic law forbid free mixing and dating between genders?",
         options: [
            "To isolate Muslims from modern society completely",
            "To protect individual honor, uphold family stability, and block the avenues leading to indecency",
            "Because human beings are incapable of talking to each other",
            "To make marriage unnecessarily difficult"
         ],
         correctAnswer: "To protect individual honor, uphold family stability, and block the avenues leading to indecency",
         explanation: "Islamic rulings are designed to protect human dignity, prevent emotional and physical harm, and safeguard the sanctity of family lineage."
      },
      {
         id: 17,
         question: "What is the status of an engagement ring ceremony or party in Islamic law?",
         options: [
            "It is a mandatory pillar of Islamic marriage",
            "It is strictly forbidden (Haram) innovation",
            "It is culturally permissible as a custom as long as it does not involve un-Islamic practices like free mixing or touching",
            "It replaces the Nikah contract legally"
         ],
         correctAnswer: "It is culturally permissible as a custom as long as it does not involve un-Islamic practices like free mixing or touching",
         explanation: "An engagement is simply an announcement of a mutual promise to marry. Customs surrounding it are permissible provided they avoid extravagance, unlawful mixing, and physical intimacy."
      },
      {
         id: 18,
         question: "If a person falls into unlawful pre-marital emotional attachments, what remedy does Islam prescribe to regain spiritual balance?",
         options: [
            "Fast frequently and busy oneself with righteous deeds and lawful companionship",
            "Immerse oneself deeper into romance novels and movies",
            "Isolate completely from society forever",
            "Force an immediate marriage regardless of compatibility"
         ],
         correctAnswer: "Fast frequently and busy oneself with righteous deeds and lawful companionship",
         explanation: "Fasting curbs physical desires, and replacing bad habits with righteous company and acts of worship helps cleanse the heart from unlawful attachments."
      },
      {
         id: 19,
         question: "What does the term 'Khuthbah' mean in Islamic jurisprudence?",
         options: [
            "A Friday sermon",
            "A formal marriage proposal and mutual agreement to marry",
            "A secret romantic relationship",
            "A divorce settlement agreement"
         ],
         correctAnswer: "A formal marriage proposal and mutual agreement to marry",
         explanation: "Khuthbah refers to a marriage proposal where a man asks a woman (or her guardian) for her hand in marriage, which forms the precursor to the Nikah contract."
      },
      {
         id: 20,
         question: "How does Islam view modesty (Haya') regarding relationships between men and women?",
         options: [
            "As an outdated cultural restraint",
            "As an essential branch of faith that protects character and dignity",
            "As something required only for women",
            "As optional for modern youth"
         ],
         correctAnswer: "As an essential branch of faith that protects character and dignity",
         explanation: "The Prophet (ﷺ) said: 'Modesty is part of faith' (Bukhari & Muslim). Haya' restrains both men and women from immodest speech, dress, and behavior."
      },
      {
         id: 21,
         question: "What is the ruling on a man proposing to a woman who is already officially engaged to someone else?",
         options: [
            "Permissible at any time",
            "Forbidden, unless the first suitor has withdrawn or given explicit permission",
            "Encouraged if the second suitor is wealthier",
            "Permissible if they met secretly"
         ],
         correctAnswer: "Forbidden, unless the first suitor has withdrawn or given explicit permission",
         explanation: "The Prophet (ﷺ) prohibited a Muslim from proposing over the proposal of his brother until the first suitor gives up or withdraws (Bukhari)."
      },
      {
         id: 22,
         question: "Which Quranic chapter contains detailed guidelines regarding modesty, chastity, lowering gazes, and the prohibition of Zina?",
         options: [
            "Surah Al-Baqarah",
            "Surah An-Nur",
            "Surah Al-Imran",
            "Surah At-Tawbah"
         ],
         correctAnswer: "Surah An-Nur",
         explanation: "Surah An-Nur (Chapter 24) is foundational for Islamic social ethics, family law, modesty, and the protection of chastity."
      },
      {
         id: 23,
         question: "What should guide a believer when choosing a lifelong spouse, according to the advice of the Prophet (ﷺ)?",
         options: [
            "Wealth and social status alone",
            "Religious commitment and character (Deen)",
            "Physical appearance and popularity",
            "Family political background"
         ],
         correctAnswer: "Religious commitment and character (Deen)",
         explanation: "The Prophet (ﷺ) advised: 'A woman is married for four things: her wealth, her family status, her beauty and her religion. So you should marry the religious woman; otherwise you will be a loser' (Bukhari & Muslim)."
      },
      {
         id: 24,
         question: "Is it permissible for a man and woman to exchange love poetry or romantic messages before marriage?",
         options: [
            "Yes, it builds deep romantic love",
            "No, because it stirs desires and opens doors to unlawful temptation and emotional dependency",
            "Yes, if they plan to marry within a year",
            "Permissible only during daytime"
         ],
         correctAnswer: "No, because it stirs desires and opens doors to unlawful temptation and emotional dependency",
         explanation: "Engaging in romantic or flirtatious correspondence before marriage violates the boundaries of modest speech and incites desires that cannot lawfully be fulfilled yet."
      },
      {
         id: 25,
         question: "What is the Islamic status of a 'common-law marriage' or boyfriend-girlfriend cohabitation without a formal Nikah contract?",
         options: [
            "Fully valid after living together for one year",
            "Valid if both partners intend to remain faithful",
            "Null, void, and tantamount to living in sin (Zina)",
            "Permissible in Western countries"
         ],
         correctAnswer: "Null, void, and tantamount to living in sin (Zina)",
         explanation: "A valid Islamic marriage requires specific pillars: mutual consent, the Wali (guardian), witnesses, and the Mahr (dowry). Cohabitation without Nikah is forbidden Zina."
      },
      {
         id: 26,
         question: "How does the story of Prophet Yusuf (AS) in Surah Yusuf illustrate guarding oneself against unlawful temptation?",
         options: [
            "He embraced the opportunity when alone in a secure room",
            "He immediately sought refuge in Allah and fled from unlawful temptation when approached",
            "He negotiated terms with the woman",
            "He ignored the situation completely"
         ],
         correctAnswer: "He immediately sought refuge in Allah and fled from unlawful temptation when approached",
         explanation: "Prophet Yusuf (AS) declared 'I seek refuge in Allah' and rushed toward the door when faced with unlawful seduction, exemplifying supreme moral fortitude."
      },
      {
         id: 27,
         question: "What is the purpose of the Mahr (dowry) in an Islamic marriage contract?",
         options: [
            "A fee paid to the bride's father for upbringing",
            "A mandatory financial gift given by the groom to the bride as a token of respect and security",
            "A refundable deposit for the wedding venue",
            "A cultural tax on marriage"
         ],
         correctAnswer: "A mandatory financial gift given by the groom to the bride as a token of respect and security",
         explanation: "The Mahr is an obligation from Allah given directly to the bride to honor her and provide her with financial independence and security."
      },
      {
         id: 28,
         question: "What should a person do if they suspect someone they know is engaging in secret haram relationships?",
         options: [
            "Spread the news across social media to warn others",
            "Advise them privately with wisdom, kindness, and gentle admonition",
            "Harass them publicly",
            "Ignore it and participate in the sin"
         ],
         correctAnswer: "Advise them privately with wisdom, kindness, and gentle admonition",
         explanation: "Islam encourages concealing faults where possible and giving sincere, confidential advice (Nasihah) with wisdom and good counsel rather than public exposure."
      },
      {
         id: 29,
         question: "Which of the following best defines Islamic modesty (Haya') for both men and women in public spaces?",
         options: [
            "Wearing fashionable tight clothing",
            "Lowering the gaze, dressing modestly, and avoiding unnecessary familiarity with non-Mahrams",
            "Refusing to speak to anyone of the opposite gender ever",
            "Covering the face under all circumstances"
         ],
         correctAnswer: "Lowering the gaze, dressing modestly, and avoiding unnecessary familiarity with non-Mahrams",
         explanation: "Modesty encompasses behavior, speech, interactions, and attire for both genders, fostering a pure and respectful societal environment."
      },
      {
         id: 30,
         question: "What is the ruling on a man and woman traveling together on a long journey without a Mahram?",
         options: [
            "Permissible if they stay in separate hotel rooms",
            "Strictly prohibited based on authentic Hadith prohibitions",
            "Permissible if booked through a registered travel agency",
            "Permissible if they are engaged"
         ],
         correctAnswer: "Strictly prohibited based on authentic Hadith prohibitions",
         explanation: "The Prophet (ﷺ) stated that a woman should not travel except with a Mahram (Bukhari & Muslim), closing doors to temptation and ensuring her safety."
      },
      {
         id: 31,
         question: "How does Islam view internet matchmaking and matrimonial websites when used correctly?",
         options: [
            "Forbidden because technology cannot be trusted",
            "Permissible and useful as a modern tool, provided Islamic boundaries of modesty and guardian involvement are maintained",
            "Encouraged even if it involves secret chatting without family knowledge",
            "Mandatory for all youth"
         ],
         correctAnswer: "Permissible and useful as a modern tool, provided Islamic boundaries of modesty and guardian involvement are maintained",
         explanation: "Using modern platforms to find compatible spouses is permissible as a means, provided interactions remain public, respectful, and observant of Shariah limits."
      },
      {
         id: 32,
         question: "What is the spiritual consequence of repeatedly engaging in minor breaches of modesty that lead toward unlawful relationships?",
         options: [
            "It hardens the heart and makes major sins feel acceptable over time",
            "It increases spiritual reward",
            "It has no impact on faith",
            "It purifies the soul"
         ],
         correctAnswer: "It hardens the heart and makes major sins feel acceptable over time",
         explanation: "Satan leads people astray in steps ( خطوات الشياطين ). Small compromises pave the way for bigger sins until moral barriers collapse entirely."
      },
      {
         id: 33,
         question: "When evaluating a potential marriage partner, what did the Prophet (ﷺ) suggest prioritizing above beauty and wealth?",
         options: [
            "Their taste in music",
            "Their religious commitment, character, and integrity",
            "Their professional career title",
            "Their physical fitness level"
         ],
         correctAnswer: "Their religious commitment, character, and integrity",
         explanation: "Character and religious devotion ensure a stable, respectful, and loving home environment based on mutual rights and responsibilities."
      }
    ],
    intermediate: [
      {
         id: 34,
         question: "Is it permissible for a man to shake hands with an unrelated (non-Mahram) woman during courtship or general meetings?",
         options: [
            "Yes, as a sign of modern polite greeting",
            "No, physical contact between unrelated men and women is strictly prohibited in authentic traditions",
            "Permissible if they are engaged",
            "Permissible in professional environments only"
         ],
         correctAnswer: "No, physical contact between unrelated men and women is strictly prohibited in authentic traditions",
         explanation: "The Prophet (ﷺ) never touched the hand of a non-Mahram woman, even when taking pledges of allegiance (Bukhari), establishing a clear prohibition on non-Mahram handshakes."
      },
      {
         id: 35,
         question: "What does the concept of 'Gheerah' (healthy protective jealousy) mean in an Islamic family context?",
         options: [
            "Toxic control and abuse over a spouse",
            "A natural, noble protective zeal for the honor and modesty of one's family members",
            "Jealousy over wealth and material possessions",
            "Complete indifference to moral conduct"
         ],
         correctAnswer: "A natural, noble protective zeal for the honor and modesty of one's family members",
         explanation: "Gheerah in Islam is a praiseworthy trait meaning a believer cares deeply about protecting their family's modesty and dignity from indecency."
      },
      {
         id: 36,
         question: "What is the Islamic view on 'platonic friendship' between unrelated men and women?",
         options: [
            "Encouraged to foster social understanding",
            "Not recognized in Islamic framework, as close personal friendships between non-Mahrams invariably lead to emotional or physical transgression",
            "Permissible if childhood friends",
            "Mandatory in university settings"
         ],
         correctAnswer: "Not recognized in Islamic framework, as close personal friendships between non-Mahrams invariably lead to emotional or physical transgression",
         explanation: "Human nature is such that prolonged close association between unrelated genders naturally breeds romantic and physical inclinations, which Islam preemptively blocks."
      },
      {
         id: 37,
         question: "What is the ruling on a couple marrying solely for legal citizenship or visa convenience without intending to fulfill marital duties?",
         options: [
            "Valid and rewarded",
            "Invalid (Batil) or unlawful deception if entered into as a fraudulent contract",
            "Encouraged to help fellow Muslims",
            "Permissible under emergency laws"
         ],
         correctAnswer: "Invalid (Batil) or unlawful deception if entered into as a fraudulent contract",
         explanation: "Marriage in Islam is a sacred covenant with serious rights and responsibilities, not a legal loophole for administrative convenience."
      },
      {
         id: 38,
         question: "How does the Quran describe the institution of marriage in Surah Ar-Rum (30:21)?",
         options: [
            "As a temporary business contract",
            "As a sign of Allah where He placed between spouses love (Mawaddah) and mercy (Rahmah)",
            "As an optional burden",
            "As a trial without reward"
         ],
         correctAnswer: "As a sign of Allah where He placed between spouses love (Mawaddah) and mercy (Rahmah)",
         explanation: "Allah states: 'And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy...' (30:21)."
      },
      {
         id: 39,
         question: "What is the correct Islamic attitude towards past sins after a person makes sincere Tawbah?",
         options: [
            "Constantly remind oneself and others of the sin in public",
            "Trust in Allah's infinite forgiveness, conceal the sin, and focus on righteous good deeds",
            "Despair of Allah's mercy",
            "Repeat the sin to test forgiveness"
         ],
         correctAnswer: "Trust in Allah's infinite forgiveness, conceal the sin, and focus on righteous good deeds",
         explanation: "Once sincere repentance is made, the sin is wiped clean. Allah conceals the repentant believer, and one must move forward in hope and righteousness."
      },
      {
         id: 40,
         question: "Why does Islamic law place strict parameters on interactions before marriage instead of leaving matters to modern personal freedom?",
         options: [
            "To suppress human happiness completely",
            "Because Allah, as the Creator, knows human psychology and legislates what protects individuals from emotional trauma, broken families, and societal corruption",
            "To enforce ancient tribal customs",
            "To eliminate all social gatherings"
         ],
         correctAnswer: "Because Allah, as the Creator, knows human psychology and legislates what protects individuals from emotional trauma, broken families, and societal corruption",
         explanation: "Divine laws are designed for human welfare, protecting society from the psychological, social, and spiritual harms associated with unrestrained desires."
      },
      {
         id: 41,
         question: "What is the ruling on parents forcing their children into marriages against their clear consent?",
         options: [
            "Completely valid under all circumstances",
            "Harand unlawful; forced marriage contradicts Islamic law which requires the explicit consent of both bride and groom",
            "Permissible if the family is wealthy",
            "Encouraged to maintain tribal alliances"
         ],
         correctAnswer: "Harand unlawful; forced marriage contradicts Islamic law which requires the explicit consent of both bride and groom",
         explanation: "The Prophet (ﷺ) invalidated a forced marriage when a woman complained that her father married her off without her consent (Bukhari)."
      },
      {
         id: 42,
         question: "How should a believer react when facing strong temptations toward unlawful relationships?",
         options: [
            "Yield immediately as resistance is futile",
            "Seek refuge in Allah, remember His watchfulness, and distract oneself with righteous actions",
            "Post about it on social media",
            "Blame destiny for the temptation"
         ],
         correctAnswer: "Seek refuge in Allah, remember His watchfulness, and distract oneself with righteous actions",
         explanation: "Consciousness of Allah (Taqwa) and seeking His refuge empower a believer to overcome base desires and satanic whispers."
      },
      {
         id: 43,
         question: "What is the significance of the Istikharah prayer when considering a potential marriage proposal?",
         options: [
            "It acts as a magical fortune-telling device",
            "It is a supplication asking Allah to guide one's decision toward what is best in religious and worldly matters",
            "It replaces the need to check the person's character",
            "It is only performed after the wedding"
         ],
         correctAnswer: "It is a supplication asking Allah to guide one's decision toward what is best in religious and worldly matters",
         explanation: "Istikharah is seeking divine guidance when making important life decisions like marriage, entrusting the outcome to Allah's infinite wisdom."
      },
      {
         id: 44,
         question: "Can a Muslim woman travel to meet an online romantic interest in another city or country without a Mahram?",
         options: [
            "Yes, if they have known each other online for years",
            "No, traveling without a Mahram violates established prohibitions in prophetic traditions",
            "Yes, if flights are expensive",
            "Permissible during holiday seasons"
         ],
         correctAnswer: "No, traveling without a Mahram violates established prohibitions in prophetic traditions",
         explanation: "The rule regarding Mahram accompaniment during travel applies strictly, preventing vulnerability to exploitation and safeguarding personal safety."
      },
      {
         id: 45,
         question: "What does the term 'Kafa'ah' mean in Islamic jurisprudence regarding marriage?",
         options: [
            "Only financial net worth matters",
            "Religious commitment and moral integrity are the primary and most important standards of compatibility",
            "Race and nationality are absolute barriers to marriage",
            "Compatibility is completely irrelevant"
         ],
         correctAnswer: "Religious commitment and moral integrity are the primary and most important standards of compatibility",
         explanation: "While various factors can be considered, Islam places primary emphasis on religious compatibility and character to ensure harmony."
      },
      {
         id: 46,
         question: "What is the Islamic ruling on spreading rumors or exposing others who have fallen into pre-marital illicit relationships?",
         options: [
            "Encouraged as public warning",
            "Forbidden (Gheebah/Scandal); Muslims are commanded to conceal faults and guide sinners privately",
            "Mandatory for community leaders",
            "Permissible if done anonymously"
         ],
         correctAnswer: "Forbidden (Gheebah/Scandal); Muslims are commanded to conceal faults and guide sinners privately",
         explanation: "Spreading indecency or exposing people's private sins is a major sin. The Prophet (ﷺ) taught that whoever conceals a Muslim's fault, Allah will conceal his faults on the Day of Resurrection."
      },
      {
         id: 47,
         question: "How does the Quran characterize individuals who love to see immorality spread among the believers?",
         options: [
            "As progressive thinkers",
            "With a severe painful punishment in this world and the hereafter (Surah An-Nur 24:19)",
            "As innocent bystanders",
            "As leaders of society"
         ],
         correctAnswer: "With a severe painful punishment in this world and the hereafter (Surah An-Nur 24:19)",
         explanation: "Surah An-Nur 24:19 warns: 'Indeed, those who like that immorality should be spread [or publicized] among those who have believed will have a painful punishment in this world and the Hereafter.'"
      },
      {
         id: 48,
         question: "What is the proper Islamic protocol if a marriage proposal is rejected by either party?",
         options: [
            "Hold a grudge and retaliate socially",
            "Accept it with grace, maintain dignity, and strictly keep confidential any personal matters discussed",
            "Demand public explanations",
            "Harass the family until they reconsider"
         ],
         correctAnswer: "Accept it with grace, maintain dignity, and strictly keep confidential any personal matters discussed",
         explanation: "Dignity, respect, and the confidentiality of private meetings must be maintained by both sides even if the proposal does not move forward."
      },
      {
         id: 49,
         question: "What role do family and community play in safeguarding healthy relationships in Islam?",
         options: [
            "They act as an intrusive barrier to personal freedom",
            "They provide a supportive safety net of accountability, guidance, and emotional stability",
            "They have no role whatsoever",
            "They are responsible only for wedding financing"
         ],
         correctAnswer: "They provide a supportive safety net of accountability, guidance, and emotional stability",
         explanation: "Family involvement ensures that marriages are built on transparent foundations with community and familial support rather than isolation."
      },
      {
         id: 50,
         question: "What is the ultimate goal of all Islamic guidelines governing male-female interactions and marriage?",
         options: [
            "To create a pure, righteous society where individuals, families, and morality are protected and flourish",
            "To make daily life as difficult as possible",
            "To eliminate all social interaction",
            "To focus exclusively on material wealth"
         ],
         correctAnswer: "To create a pure, righteous society where individuals, families, and morality are protected and flourish",
         explanation: "Every ruling in Shariah regarding modesty and marriage aims to protect human dignity, foster spiritual growth, and build strong, peaceful families."
      },
      {
         id: 51,
         question: "What is the ruling on a man proposing to a woman during her 'Iddah (waiting period after divorce or husband's death)?",
         options: [
            "Explicit proposals are forbidden during 'Iddah, though indirect allusions may be permissible in certain divorce cases",
            "Fully permissible at any moment",
            "Mandatory for all widows",
            "Forbidden under any circumstance forever"
         ],
         correctAnswer: "Explicit proposals are forbidden during 'Iddah, though indirect allusions may be permissible in certain divorce cases",
         explanation: "Islamic law protects the sanctity of the waiting period by forbidding direct marriage proposals while a woman is in 'Iddah, avoiding confusion regarding lineage."
      },
      {
         id: 52,
         question: "How does the Quran describe the clothing and outer garments of believing women in Surah Al-Ahzab (33:59) regarding protection and modesty?",
         options: [
            "As a means to be recognized and protected from molestation or annoyance",
            "As a heavy burden with no purpose",
            "As a seasonal fashion choice",
            "As optional advice"
         ],
         correctAnswer: "As a means to be recognized and protected from molestation or annoyance",
         explanation: "Modest dress and Hijab serve as a shield of dignity, signaling modesty and protecting women from disrespectful advances."
      },
      {
         id: 53,
         question: "What should be the primary motivation when a Muslim decides to seek marriage?",
         options: [
            "Complying with societal pressure",
            "Completing half of one's religion, seeking chastity, and building a righteous family for the sake of Allah",
            "Acquiring free labor in the household",
            "Gaining social media attention"
         ],
         correctAnswer: "Completing half of one's religion, seeking chastity, and building a righteous family for the sake of Allah",
         explanation: "Marriage in Islam is an act of worship and spiritual completion, undertaken to please Allah, protect chastity, and nurture future generations of believers."
      },
      {
         id: 54,
         question: "Is it permissible for a suitor to gift expensive gifts to a woman he is not yet married to?",
         options: [
            "Yes, without restriction",
            "Scholars advise avoiding lavish or intimate gifts before Nikah to prevent emotional obligation or complications if the marriage does not happen",
            "Mandatory in all cultures",
            "Forbidden under all conditions"
         ],
         correctAnswer: "Scholars advise avoiding lavish or intimate gifts before Nikah to prevent emotional obligation or complications if the marriage does not happen",
         explanation: "While small tokens of mutual respect can occur with family knowledge, excessive gifting before marriage creates undue pressure and blurs proper boundaries."
      },
      {
         id: 55,
         question: "What did the Prophet (ﷺ) say about the blessing and ease of marriage when intentions are pure?",
         options: [
            "That Allah assists those who marry seeking to keep themselves chaste",
            "That marriage brings certain poverty",
            "That it should be delayed until old age",
            "That it requires massive worldly debt"
         ],
         correctAnswer: "That Allah assists those who marry seeking to keep themselves chaste",
         explanation: "The Prophet (ﷺ) noted that three types of people have a specific promise of help from Allah, including the one who marries desiring to maintain chastity (Tirmidhi)."
      },
      {
         id: 56,
         question: "How does Islam view flirting in public or online forums between strangers?",
         options: [
            "As harmless entertainment",
            "As a violation of Islamic modesty and a stepping stone toward moral corruption",
            "As a sign of good communication skills",
            "As encouraged for singles"
         ],
         correctAnswer: "As a violation of Islamic modesty and a stepping stone toward moral corruption",
         explanation: "Flirtatious banter between non-Mahrams crosses the boundaries of respectful speech and stirs desires outside the lawful bond of marriage."
      },
      {
         id: 57,
         question: "What is the status of a secret marriage (Nikah performed without witnesses or guardian consent where required)?",
         options: [
            "Valid in all schools of thought",
            "Invalid (Batil) in mainstream jurisprudence, as publicity and witnesses are required to protect rights and lineage",
            "Encouraged for young couples",
            "Permissible if kept secret for a month"
         ],
         correctAnswer: "Invalid (Batil) in mainstream jurisprudence, as publicity and witnesses are required to protect rights and lineage",
         explanation: "Islam rejects clandestine relationships and secret marriages without proper witnesses and guardian oversight, as publicity distinguishes legitimate marriage from illicit affairs."
      },
      {
         id: 58,
         question: "What advice is given to youth who cannot afford to marry immediately due to financial constraints?",
         options: [
            "Engage in dating until finances improve",
            "Fast frequently, as fasting acts as a shield against overwhelming desires, alongside focusing on righteous endeavors",
            "Despair of God's provision",
            "Ignore moral bounds completely"
         ],
         correctAnswer: "Fast frequently, as fasting acts as a shield against overwhelming desires, alongside focusing on righteous endeavors",
         explanation: "The Prophet (ﷺ) advised those unable to marry to observe fasting, which subdues physical passions and strengthens self-control."
      },
      {
         id: 59,
         question: "What is the danger of relying purely on physical chemistry or pre-marital dating when selecting a spouse?",
         options: [
            "It guarantees eternal happiness",
            "Physical attraction fades; without shared faith, character, and values, the marriage often collapses under pressure",
            "It makes weddings cheaper",
            "It eliminates all future disagreements"
         ],
         correctAnswer: "Physical attraction fades; without shared faith, character, and values, the marriage often collapses under pressure",
         explanation: "While physical compatibility matters, lasting marriages depend primarily on moral character, shared spiritual values, and emotional maturity."
      },
      {
         id: 60,
         question: "How should a Muslim handle feelings of loneliness or romantic desire outside of marriage?",
         options: [
            "Turn to Allah in supplication, engage in community service, focus on self-improvement, and maintain patience",
            "Initiate secret online relationships",
            "Complain against divine decrees",
            "Isolate from all human contact"
         ],
         correctAnswer: "Turn to Allah in supplication, engage in community service, focus on self-improvement, and maintain patience",
         explanation: "Patience (Sabr), prayer, productive activity, and reliance on Allah are the prophetic remedies for navigating times of loneliness before marriage."
      },
      {
         id: 61,
         question: "What is the ruling on a man looking repeatedly at a non-Mahram woman on the street or social media out of attraction?",
         options: [
            "Permissible if he admires beauty",
            "Forbidden; the first accidental glance is pardoned, but subsequent intentional glances are sinful",
            "Encouraged for inspiration",
            "Permissible if online"
         ],
         correctAnswer: "Forbidden; the first accidental glance is pardoned, but subsequent intentional glances are sinful",
         explanation: "The Prophet (ﷺ) told Ali (ra): 'Do not follow a glance with another, for the first is for you [forgiven if accidental] and the second is against you' (Tirmidhi)."
      },
      {
         id: 62,
         question: "What is the consequence of abandoning Islamic moral boundaries regarding gender interactions within a society?",
         options: [
            "Strengthened family bonds",
            "Erosion of family structures, rise in broken homes, loss of modesty, and spread of social ills",
            "Economic prosperity",
            "Universal peace"
         ],
         correctAnswer: "Erosion of family structures, rise in broken homes, loss of modesty, and spread of social ills",
         explanation: "When societal guardrails of modesty and chastity are discarded, social breakdown, broken trust, and emotional trauma inevitably follow."
      },
      {
         id: 63,
         question: "Can a marriage contract be validated if either the bride or groom is coerced or forced into it?",
         options: [
            "Yes, family authority overrides personal consent",
            "No, consent is an absolute pillar of Islamic marriage; a forced marriage is invalid",
            "Yes, if approved by local judges",
            "Permissible in emergency cases"
         ],
         correctAnswer: "No, consent is an absolute pillar of Islamic marriage; a forced marriage is invalid",
         explanation: "Consent is mandatory in Islam. Any marriage contracted without the free and clear consent of both parties lacks legal and moral validity."
      },
      {
         id: 64,
         question: "What is the Islamic ruling regarding a man and woman communicating privately through encrypted messaging apps without any supervision?",
         options: [
            "Permissible if they use disappearing messages",
            "Equivalent to virtual Khlwah (seclusion) and discouraged or prohibited as it invites temptation",
            "Mandatory for modern dating",
            "Encouraged for speed"
         ],
         correctAnswer: "Equivalent to virtual Khlwah (seclusion) and discouraged or prohibited as it invites temptation",
         explanation: "Private, unmonitored digital communication mirrors physical seclusion (Khlwah) and opens doors to whispering doubts and inappropriate intimacy."
      },
      {
         id: 65,
         question: "How does the Quran describe the character of true servants of the Most Merciful (Ibad ar-Rahman) regarding illicit sexual relationships?",
         options: [
            "They engage in them moderately",
            "They do not commit Zina, knowing the grave consequences (Furqan 25:68)",
            "They consider them a personal choice",
            "They ignore moral laws"
         ],
         correctAnswer: "They do not commit Zina, knowing the grave consequences (Furqan 25:68)",
         explanation: "Surah Al-Furqan 25:68 praises those who do not invoke any other deity alongside Allah, do not take life unjustly, and do not commit Zina."
      },
      {
         id: 66,
         question: "What is the proper protocol when a man visits a woman's home to discuss a marriage proposal?",
         options: [
            "They should sit alone in her bedroom to talk freely",
            "They must meet in a shared family space in the presence of her guardian or family members",
            "They should meet outside the house secretly",
            "The suitor should only speak to the father"
         ],
         correctAnswer: "They must meet in a shared family space in the presence of her guardian or family members",
         explanation: "Meetings for marriage must be respectful and transparent, taking place in family settings to maintain proper Islamic boundaries."
      },
      {
         id: 67,
         question: "Why does Islam forbid looking at pornography or sexually explicit media?",
         options: [
            "Because it is expensive",
            "It corrupts the heart, devalues human beings, normalizes indecency, and ruins real marital intimacy",
            "It consumes internet data",
            "It is culturally unpopular"
         ],
         correctAnswer: "It corrupts the heart, devalues human beings, normalizes indecency, and ruins real marital intimacy",
         explanation: "Explicit media violates the command to lower the gaze, feeds lustful desires unlawfully, and creates unrealistic, harmful expectations."
      }
    ],
    advanced: [
      {
         id: 68,
         question: "What does the phrase 'Prevention is better than cure' reflect in Islamic jurisprudence regarding Zina?",
         options: [
            "Islam bans all preliminary steps (dating, seclusion, immodesty) to prevent people from ever falling into Zina",
            "Punishment should precede crime",
            "Medicine is more important than law",
            "Prevention is a modern Western concept"
         ],
         correctAnswer: "Islam bans all preliminary steps (dating, seclusion, immodesty) to prevent people from ever falling into Zina",
         explanation: "Islamic law blocks every avenue leading to major sins—establishing a preventative framework rather than just punishing outcomes."
      },
      {
         id: 69,
         question: "What is the status of love that develops purely through obedience to Allah and lawful interaction?",
         options: [
            "Blessed, enduring, and a source of tranquility in this life and the hereafter",
            "Unstable and fragile",
            "Discouraged by scholars",
            "Temporary"
         ],
         correctAnswer: "Blessed, enduring, and a source of tranquility in this life and the hereafter",
         explanation: "Love built upon faith, purity, and lawful marriage is blessed by Allah and yields lasting peace and mutual mercy."
      },
      {
         id: 70,
         question: "How should a parent approach talking to their children about modesty, marriage, and relationship boundaries?",
         options: [
            "With openness, wisdom, Islamic guidance, and proactive mentorship",
            "By ignoring the topic entirely until adulthood",
            "By using harsh insults and threats",
            "By encouraging modern dating habits"
         ],
         correctAnswer: "With openness, wisdom, Islamic guidance, and proactive mentorship",
         explanation: "Parents have a duty to guide their children with wisdom and care, equipping them with spiritual knowledge to navigate worldly temptations successfully."
      },
      {
         id: 71,
         question: "What is the Islamic perspective on a man and woman working together in a professional environment?",
         options: [
            "Strictly forbidden under all conditions",
            "Permissible when necessary, provided professional boundaries, modest dress, lowered gazes, and absence of seclusion are maintained",
            "Encouraged to date coworkers",
            "Forbidden for women only"
         ],
         correctAnswer: "Permissible when necessary, provided professional boundaries, modest dress, lowered gazes, and absence of seclusion are maintained",
         explanation: "Professional and public interactions are permissible out of necessity, provided Islamic etiquette regarding modesty and boundaries is strictly observed."
      },
      {
         id: 72,
         question: "What is the spiritual impact of guarding one's chastity (Iffah) in youth?",
         options: [
            "It brings immense reward and places the believer under the shade of Allah's throne on Judgment Day",
            "It leads to depression",
            "It has no spiritual weight",
            "It is only valued culturally"
         ],
         correctAnswer: "It brings immense reward and places the believer under the shade of Allah's throne on Judgment Day",
         explanation: "A youth who grows up worshipping Allah and guarding chastity is among the seven categories of people promised shade under Allah's throne on the Day of Judgment (Bukhari & Muslim)."
      },
      {
         id: 73,
         question: "Is it permissible to marry someone of a different ethnic or cultural background in Islam?",
         options: [
            "No, cultural mixing is forbidden",
            "Yes, Islam emphasizes piety and character over race, ethnicity, or nationality",
            "Only if approved by tribal elders",
            "Permissible only within the same city"
         ],
         correctAnswer: "Yes, Islam emphasizes piety and character over race, ethnicity, or nationality",
         explanation: "The Quran affirms: 'Indeed, the most noble of you in the sight of Allah is the most righteous of you' (49:13). Piety and character outweigh ethnicity."
      },
      {
         id: 74,
         question: "What does the Quran advise regarding those who wish to marry but lack the financial means to do so?",
         options: [
            "Steal money for the wedding",
            "Keep chaste until Allah enriches them from His bounty (An-Nur 24:33)",
            "Enter into illegal loans with high interest",
            "Abandon all hope of marriage"
         ],
         correctAnswer: "Keep chaste until Allah enriches them from His bounty (An-Nur 24:33)",
         explanation: "Surah An-Nur 24:33 instructs: 'And let those who find not the financial means for marriage keep themselves chaste until Allah enriches them of His bounty.'"
      },
      {
         id: 75,
         question: "What is the ruling on breaking a formal marriage engagement (Khuthbah)?",
         options: [
            "It is a capital crime",
            "It is permissible if valid reasons arise (e.g., incompatibility, lack of religious commitment), though it should be done respectfully",
            "It requires a formal court divorce decree",
            "It is strictly forbidden under all circumstances"
         ],
         correctAnswer: "It is permissible if valid reasons arise (e.g., incompatibility, lack of religious commitment), though it should be done respectfully",
         explanation: "An engagement is a promise, not a binding marriage contract. Either party may withdraw if legitimate concerns about compatibility or character emerge."
      },
      {
         id: 76,
         question: "How does Islam view the concept of soulmates or destiny (Qadar) in marriage?",
         options: [
            "Everything is written in Al-Lawh al-Mahfuz, while individuals still exercise free will and responsibility in choosing righteous partners",
            "Destiny means human choice plays no part",
            "Soulmates never encounter obstacles",
            "Destiny applies only to wealth"
         ],
         correctAnswer: "Everything is written in Al-Lawh al-Mahfuz, while individuals still exercise free will and responsibility in choosing righteous partners",
         explanation: "While spouses are decreed by Allah's infinite knowledge, individuals are accountable for their choices, efforts, and adherence to moral laws."
      },
      {
         id: 77,
         question: "What is the Islamic ruling on women wearing perfume or strong scents when going out in public where unrelated men are present?",
         options: [
            "Encouraged in all settings",
            "Discouraged or prohibited if intended to attract attention, as highlighted in prophetic warnings",
            "Mandatory for social etiquette",
            "Permissible at all times"
         ],
         correctAnswer: "Discouraged or prohibited if intended to attract attention, as highlighted in prophetic warnings",
         explanation: "Prophetic traditions caution against women wearing strong perfumes in public spaces in ways that attract unlawful attention."
      },
      {
         id: 78,
         question: "What is the primary objective of the Islamic family system?",
         options: [
            "Financial competition",
            "To cultivate a nurturing environment of faith, love, mutual respect, and moral upbringing for children",
            "Political alliance",
            "Social isolation"
         ],
         correctAnswer: "To cultivate a nurturing environment of faith, love, mutual respect, and moral upbringing for children",
         explanation: "The Islamic family is the foundational brick of a healthy society, designed to foster spiritual peace, moral training, and emotional security."
      },
      {
         id: 79,
         question: "How should a believer respond if tempted by peer pressure to engage in modern dating culture?",
         options: [
            "Conform immediately to fit in",
            "Stand firm in Islamic identity, prioritize pleasing Allah over peer approval, and seek righteous companionship",
            "Isolate from all humans permanently",
            "Mock religious teachings"
         ],
         correctAnswer: "Stand firm in Islamic identity, prioritize pleasing Allah over peer approval, and seek righteous companionship",
         explanation: "A Muslim's primary allegiance is to Allah. Standing firm against peer pressure in matters of modesty is a hallmark of true faith and character."
      },
      {
         id: 80,
         question: "What is the significance of reciting Du'a before intimate marital relations after marriage?",
         options: [
            "It protects the union and any resulting offspring from harmful influences",
            "It is a legal formality with no meaning",
            "It is required only once in a lifetime",
            "It replaces the wedding ceremony"
         ],
         correctAnswer: "It protects the union and any resulting offspring from harmful influences",
         explanation: "The Prophet (ﷺ) taught a specific supplication before marital intimacy seeking protection from Satan, sanctifying the act as an act of worship."
      },
      {
         id: 81,
         question: "What is the ruling on a man and woman meeting alone in a parked car or secluded public corner for romantic conversations?",
         options: [
            "Permissible if doors are unlocked",
            "Forbidden as it constitutes Khlwah (seclusion) with a non-Mahram",
            "Encouraged for privacy",
            "Permissible after sunset"
         ],
         correctAnswer: "Forbidden as it constitutes Khlwah (seclusion) with a non-Mahram",
         explanation: "Seclusion is determined by isolation from public view or access, regardless of whether the location is a room, a car, or an isolated outdoor spot."
      },
      {
         id: 82,
         question: "How does the Quran describe the ideal emotional relationship between spouses after Nikah?",
         options: [
            "As cold business partners",
            "As garments for one another—providing comfort, protection, warmth, and concealment (Al-Baqarah 2:187)",
            "As temporary roommates",
            "As rivals in competition"
         ],
         correctAnswer: "As garments for one another—providing comfort, protection, warmth, and concealment (Al-Baqarah 2:187)",
         explanation: "Quran 2:187 states: 'They are clothing for you and you are clothing for them,' illustrating deep emotional closeness, mutual protection, and intimacy."
      },
      {
         id: 83,
         question: "What is the Islamic view on lifelong celibacy or monasticism (Rahbaniyah) as a preferred lifestyle?",
         options: [
            "Encouraged for all pious believers",
            "Not legislated in Islam; the Prophet (ﷺ) encouraged marriage and rejected permanent monastic isolation",
            "Mandatory for scholars",
            "A requirement for spiritual purity"
         ],
         correctAnswer: "Not legislated in Islam; the Prophet (ﷺ) encouraged marriage and rejected permanent monastic isolation",
         explanation: "The Prophet (ﷺ) explicitly corrected those who vowed lifelong celibacy, affirming that marriage is his Sunnah and practice."
      },
      {
         id: 84,
         question: "What is the correct approach if a person discovers their fiancé(e) has hidden major sins or deceitful habits?",
         options: [
            "Ignore it and proceed blindly",
            "Investigate with wisdom, seek counsel, and seriously reevaluate the compatibility and trustworthiness of the individual before contracting Nikah",
            "Publicly defame them",
            "Accept betrayal as normal"
         ],
         correctAnswer: "Investigate with wisdom, seek counsel, and seriously reevaluate the compatibility and trustworthiness of the individual before contracting Nikah",
         explanation: "Trust and honesty are pillars of a successful marriage. Discovering major deception before Nikah is a vital warning sign to reassess suitability."
      },
      {
         id: 85,
         question: "What is the reward promised to a person who resists a forbidden temptation out of fear of Allah?",
         options: [
            "Immediate worldly wealth",
            "Peace of heart, spiritual elevation, and immense reward in the hereafter",
            "Total isolation from society",
            "Loss of happiness"
         ],
         correctAnswer: "Peace of heart, spiritual elevation, and immense reward in the hereafter",
         explanation: "Refraining from sin out of Taqwa (consciousness of Allah) purifies the heart and draws immense divine reward and inner tranquility."
      },
      {
         id: 86,
         question: "How does Islam regulate looking at images of unrelated people on social media with romantic or lustful intent?",
         options: [
            "Fully encouraged for entertainment",
            "Forbidden, as it violates the command to lower the gaze and feeds unlawful desires",
            "Permissible if accounts are public",
            "Required for networking"
         ],
         correctAnswer: "Forbidden, as it violates the command to lower the gaze and feeds unlawful desires",
         explanation: "Digital gaze is subject to the same moral principles as physical gaze. Lustful browsing of unrelated individuals online violates modesty."
      },
      {
         id: 87,
         question: "What is the significance of consulting experienced family members or elders when choosing a spouse?",
         options: [
            "It eliminates personal responsibility",
            "It brings wisdom, objectivity, and life experience to help evaluate character beyond superficial attraction",
            "It is an outdated tradition with no value",
            "It slows down decision making unnecessarily"
         ],
         correctAnswer: "It brings wisdom, objectivity, and life experience to help evaluate character beyond superficial attraction",
         explanation: "Elders often spot compatibility red flags or character traits that youth blinded by infatuation might overlook."
      },
      {
         id: 88,
         question: "What is the Islamic ruling on a man and woman exchanging physical affection before marriage to 'test compatibility'?",
         options: [
            "Encouraged to prevent future divorce",
            "Strictly forbidden (Haram) as pre-marital intimacy is a major sin",
            "Permissible if they are engaged for over a year",
            "Permissible in private"
         ],
         correctAnswer: "Strictly forbidden (Haram) as pre-marital intimacy is a major sin",
         explanation: "Testing compatibility through physical touch or intimacy before marriage is entirely forbidden in Shariah."
      },
      {
         id: 89,
         question: "What does the term 'Iffah' mean in Islamic ethics?",
         options: [
            "Reckless adventure",
            "Chastity, moral restraint, and self-preservation from unlawful desires",
            "Financial accumulation",
            "Public speaking eloquence"
         ],
         correctAnswer: "Chastity, moral restraint, and self-preservation from unlawful desires",
         explanation: "Iffah is a noble virtue representing moral purity, dignity, and self-restraint against illicit temptations."
      },
      {
         id: 90,
         question: "Why does Islamic law prohibit the free mixing of sexes without boundaries?",
         options: [
            "To prevent moral decay, preserve family sanctity, and maintain a respectful public sphere",
            "To make socializing impossible",
            "To enforce tribal isolation",
            "Because human beings cannot speak to each other"
         ],
         correctAnswer: "To prevent moral decay, preserve family sanctity, and maintain a respectful public sphere",
         explanation: "Unregulated mixing naturally leads to emotional and physical entanglements that undermine personal chastity and family stability."
      },
      {
         id: 91,
         question: "What is the ruling on a man proposing to a woman without her guardian's knowledge or consent where a Wali is required?",
         options: [
            "Encouraged for independence",
            "Improper and invalid in schools of law that mandate the Wali, as proposals should go through proper family channels",
            "Mandatory in modern law",
            "Permissible if done online"
         ],
         correctAnswer: "Improper and invalid in schools of law that mandate the Wali, as proposals should go through proper family channels",
         explanation: "Proper marriage procedures respect family oversight and guardian involvement to protect the rights and well-being of the bride."
      },
      {
         id: 92,
         question: "How should a believer view past mistakes once they have turned to Allah in sincere repentance?",
         options: [
            "As permanent stains that ruin all future potential",
            "As closed chapters forgiven by the Most Merciful, motivating them to walk forward in righteousness",
            "As badges of honor to share publicly",
            "As proof that religion is too difficult"
         ],
         correctAnswer: "As closed chapters forgiven by the Most Merciful, motivating them to walk forward in righteousness",
         explanation: "Allah's mercy encompasses all sins for those who truly repent. A believer should look forward with hope and righteous deeds."
      },
      {
         id: 93,
         question: "What is the primary purpose of the rules governing the interaction between men and women in Islam?",
         options: [
            "To protect human dignity, hearts, and society from corruption while facilitating lawful, blessed families",
            "To restrict personal freedom arbitrarily",
            "To eliminate joy",
            "To enforce ancient folklore"
         ],
         correctAnswer: "To protect human dignity, hearts, and society from corruption while facilitating lawful, blessed families",
         explanation: "Shariah boundaries protect individuals from the emotional and societal damage of illicit relationships while promoting healthy, stable families."
      },
      {
         id: 94,
         question: "What is the ruling on spreading gossip about someone's private romantic life?",
         options: [
            "A minor indiscretion",
            "A major sin involving backbiting and spreading indecency, strictly forbidden in Islam",
            "Encouraged as community news",
            "Permissible if true"
         ],
         correctAnswer: "A major sin involving backbiting and spreading indecency, strictly forbidden in Islam",
         explanation: "Backbiting (Gheebah) and spreading scandals violate the honor and privacy of fellow believers, which Islam guards fiercely."
      },
      {
         id: 95,
         question: "What advice does the Quran give in Surah Al-Ma'idah (5:5) regarding chastity and marriage?",
         options: [
            "Chaste women from among the believers and chaste women from among those who were given the Scripture before you are lawful when wed with proper dowries and chastity",
            "Chastity is optional for modern society",
            "Marriage requires no lawful contract",
            "All restrictions on relationships are lifted"
         ],
         correctAnswer: "Chaste women from among the believers and chaste women from among those who were given the Scripture before you are lawful when wed with proper dowries and chastity",
         explanation: "Surah Al-Ma'idah highlights the lawfulness of chaste believing women and chaste women of the People of the Book under proper lawful marriage contracts with Mahr."
      },
      {
         id: 96,
         question: "What is the ruling on a man and woman traveling in a private elevator or locked room together?",
         options: [
            "Permissible if quick",
            "Avoidable as it constitutes temporary seclusion (Khlwah)",
            "Mandatory in office buildings",
            "Encouraged for business"
         ],
         correctAnswer: "Avoidable as it constitutes temporary seclusion (Khlwah)",
         explanation: "Being enclosed alone in a private space where no one else can enter constitutes Khlwah, which should be avoided."
      },
      {
         id: 97,
         question: "How does genuine faith (Iman) affect a person's behavior regarding temptation?",
         options: [
            "It strengthens self-control and instills awareness that Allah sees all hidden and open actions",
            "It has no bearing on daily actions",
            "It makes temptation impossible to feel",
            "It encourages testing limits"
         ],
         correctAnswer: "It strengthens self-control and instills awareness that Allah sees all hidden and open actions",
         explanation: "Ihsan—worshiping Allah as though you see Him, for even if you do not see Him, He sees you—deters believers from secret sins."
      },
      {
         id: 98,
         question: "What is the proper response when someone receives an improper or unlawful romantic advance?",
         options: [
            "Reciprocate casually",
            "Turn away, respond with firm dignity or polite refusal, and avoid unnecessary further engagement",
            "Post it online for fame",
            "Encouraged to test options"
         ],
         correctAnswer: "Turn away, respond with firm dignity or polite refusal, and avoid unnecessary further engagement",
         explanation: "Believers maintain dignity and modesty, rejecting improper advances firmly and avoiding situations that compromise their character."
      },
      {
         id: 99,
         question: "What is the spiritual benefit of marrying someone who helps draw you closer to Allah?",
         options: [
            "It makes worldly life harder",
            "It creates a partnership of mutual spiritual growth, making the journey to Jannah easier and more joyful",
            "It has no impact on the hereafter",
            "It guarantees financial wealth"
         ],
         correctAnswer: "It creates a partnership of mutual spiritual growth, making the journey to Jannah easier and more joyful",
         explanation: "A righteous spouse is one of the greatest blessings in this world, supporting their partner in faith, worship, and moral excellence."
      },
      {
         id: 100,
         question: "What is the ultimate conclusion of Islamic guidance regarding love, dating, and marriage?",
         options: [
            "True love and romance are fully honored and fulfilled within the sacred, protected bond of lawful marriage, guarded by modesty and faith",
            "Romance is forbidden in all forms",
            "Pre-marital dating is required for happiness",
            "Marriage has no spiritual significance"
         ],
         correctAnswer: "True love and romance are fully honored and fulfilled within the sacred, protected bond of lawful marriage, guarded by modesty and faith",
         explanation: "Islam does not suppress love; rather, it channels romantic love into its proper, dignified, and blessed container—marriage—protecting hearts, families, and society."
      }
    ]
  }
}

export default datingCategory;
