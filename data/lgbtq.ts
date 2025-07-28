import type { QuizCategory } from "@/types/quiz";

const lgbtqCategory: QuizCategory = {
  id: "lgbtq",
  title: "Islam and LGBTQIA+",
  description: "Islamic perspective of LGBTQIA+",
  icon: "",
  levels: {
    easy: [
      {
        question: "Which Prophet's story is most prominently cited in the Quran regarding homosexual acts?",
        options: [
          "Prophet Musa (Moses)",
          "Prophet Yusuf (Joseph)",
          "Prophet Lut (Lot)",
          "Prophet Ibrahim (Abraham)"
        ],
        correctAnswer: "Prophet Lut (Lot)",
        explanation: "The story of Prophet Lut (Lot) and the destruction of his people (Sodom and Gomorrah) due to their engagement in homosexual acts is detailed in several chapters of the Quran, including Surah Hud (11:77-83), Surah Al-A'raf (7:80-84), and Surah Al-Hijr (15:57-77). This narrative is the primary scriptural basis for the prohibition of homosexual acts in Islam. [Quran 7:80-84, 11:77-83, 15:57-77]"
      },
      {
        question: "According to the Quran, what was the primary transgression of the people of Prophet Lut (Lot)?",
        options: [
          "Idol worship",
          "Theft and corruption",
          "Homosexual acts and rejection of prophets",
          "Disbelief in God"
        ],
        correctAnswer: "Homosexual acts and rejection of prophets",
        explanation: "The Quran explicitly states that the people of Lut engaged in an abominable act, referring to male homosexual intercourse, and were the first to do so. They also rejected Prophet Lut's message and warnings. Allah describes their act as 'fahisha' (indecency/abomination). [Quran 7:80-81, 29:28-29]"
      },
      {
        question: "The term 'fahisha' (فاحشة) is used in the Quran to describe the actions of Lut's people. What does it generally mean in this context?",
        options: [
          "Minor sin",
          "Innovation in religion",
          "Gross indecency or abomination",
          "Hypocrisy"
        ],
        correctAnswer: "Gross indecency or abomination",
        explanation: "In the context of Lut's people, 'fahisha' refers to a gross indecency, an abominable and unlawful act. This term is used in the Quran for various grave sins, including adultery and certain forms of sexual immorality. [Quran 7:80, 29:28]"
      },
      {
        question: "Does the Quran mention female homosexual acts explicitly?",
        options: [
          "Yes, in detail",
          "No, only male homosexual acts",
          "Indirectly, through general prohibitions on indecency",
          "It encourages such acts for pleasure"
        ],
        correctAnswer: "Indirectly, through general prohibitions on indecency",
        explanation: "While the Quran explicitly details the story of Lut's people concerning male homosexual acts, it does not have a parallel narrative explicitly detailing female homosexual acts. However, Islamic scholars derive their prohibition from broader Quranic principles condemning all forms of sexual promiscuity and indecency outside of lawful marriage, as well as general prohibitions against 'fahisha' (indecent acts) and deviation from natural inclinations. [Quran 7:80-81, 23:5-7 (general prohibition on unlawful sexual relations), Tafsir of Ibn Kathir on relevant verses]"
      },
      {
        question: "What is the general Islamic teaching regarding sexual relations outside of marriage?",
        options: [
          "Permitted for all",
          "Discouraged but not forbidden",
          "Strictly forbidden and considered a major sin",
          "Permitted with mutual consent"
        ],
        correctAnswer: "Strictly forbidden and considered a major sin",
        explanation: "Islam strictly limits sexual relations to within the bounds of a legal marriage between a man and a woman. Any sexual activity outside this framework, including fornication, adultery, and homosexual acts, is unequivocally forbidden and considered a major sin (haram). [Quran 17:32, 23:5-7, Sahih al-Bukhari 6878]"
      },
      {
        question: "What is the Islamic concept of 'fitra' in relation to human nature and sexuality?",
        options: [
          "Humanity's innate inclination towards evil",
          "The natural, pure, and uncorrupted state of human beings created by Allah",
          "The desire for worldly possessions",
          "The pursuit of personal desires without restraint"
        ],
        correctAnswer: "The natural, pure, and uncorrupted state of human beings created by Allah",
        explanation: "Fitra refers to the natural, primordial inclination or disposition with which Allah created humanity. In matters of sexuality, the fitra is understood to correspond to heterosexual relations within marriage for procreation and companionship. Acts deviating from this are considered against fitra by Islamic scholars. [Sahih al-Bukhari 5889 (on fitra in general), and scholarly consensus regarding its application to sexual norms]"
      },
      {
        question: "Which type of marriage is permitted in Islam?",
        options: [
          "Same-sex marriage",
          "Marriage between a man and a woman",
          "Temporary marriage for pleasure",
          "Marriage to multiple partners without limit"
        ],
        correctAnswer: "Marriage between a man and a woman",
        explanation: "Islamic law (Sharia) explicitly defines marriage (nikah) as a legal contract between a man and a woman, forming the foundation of a family and society. This is the only form of sexual union permitted and encouraged in Islam. [Quran 4:1, 30:21]"
      },
      {
        question: "What is the Islamic stance on a Muslim having compassion and kindness towards all people, regardless of their sins?",
        options: [
          "Compassion should only be shown to fellow Muslims",
          "Compassion is encouraged for all, but without condoning sin",
          "One should completely shun those who commit sins",
          "It is irrelevant to a person's faith"
        ],
        correctAnswer: "Compassion is encouraged for all, but without condoning sin",
        explanation: "Islam teaches compassion, justice, and kindness towards all of humanity, as evidenced in many Quranic verses and Prophetic traditions. While certain acts are prohibited, the individual's dignity and the general call to good conduct remain. This means showing kindness and justice to people, even while maintaining the religious stance on certain actions. [Quran 21:107 (Prophet Muhammad as mercy to all), Hadith on showing mercy (Sahih Muslim 2590)]"
      },
      {
        question: "What is the Islamic view on changing one's biological sex through surgery?",
        options: [
          "It is always permissible as a personal choice",
          "It is generally forbidden as an alteration of Allah's creation, except in cases of genuine intersex conditions",
          "It is encouraged for those who feel uncomfortable with their assigned sex",
          "The Quran and Sunnah remain silent on the matter"
        ],
        correctAnswer: "It is generally forbidden as an alteration of Allah's creation, except in cases of genuine intersex conditions",
        explanation: "Mainstream Islamic scholarship views sex reassignment surgery as prohibited, classifying it as an alteration of Allah's creation, based on Quranic verses like Surah An-Nisa (4:119) where Satan vows to command people to 'change the creation of Allah'. However, surgery to correct or clarify ambiguous genitalia in intersex individuals (khuntha) is generally permitted, as this is seen as restoring natural form or establishing clarity, not altering a clear biological sex. [Quran 4:119, Fiqh councils' rulings on gender reassignment, e.g., Islamic Fiqh Council (OIC) resolution]"
      },
      {
        question: "How does Islam approach individuals who are born with ambiguous genitalia (intersex)?",
        options: [
          "They are considered to have no gender",
          "They are assigned male gender by default",
          "Islamic law provides specific rulings for them, acknowledging their unique situation",
          "They are forced to choose a gender at birth"
        ],
        correctAnswer: "Islamic law provides specific rulings for them, acknowledging their unique situation",
        explanation: "Islamic jurisprudence has historically recognized and addressed individuals born with ambiguous genitalia, known as 'khuntha'. Fiqh (Islamic law) provides detailed rulings concerning their gender assignment (based on prevalent characteristics or medical clarification), inheritance, prayer, and other legal matters, acknowledging their distinct biological reality. This is not seen as 'gender transition' but rather as a process of clarifying an indeterminate biological sex. [Al-Mawardi, Al-Ahkam as-Sultaniyyah; various Fiqh texts on Khuntha]"
      },
      {
        question: "What is the significance of the story of Lut (Lot) in Islamic jurisprudence regarding homosexuality?",
        options: [
          "It serves as a historical anecdote only",
          "It defines the severity and prohibition of homosexual acts",
          "It encourages debate on alternative lifestyles",
          "It promotes tolerance for all sexual practices"
        ],
        correctAnswer: "It defines the severity and prohibition of homosexual acts",
        explanation: "The story of Lut is foundational in Islamic jurisprudence for establishing the unequivocal prohibition and severe condemnation of homosexual acts, specifically male-on-male intercourse. The Quranic narrative details divine punishment for this transgression, making it a clear lesson and legal precedent. [Quran 7:80-84, 11:77-83, 29:28-29, all classical Tafasir]"
      },
      {
        question: "What does the Quran emphasize about sexual purity and modesty?",
        options: [
          "It is a minor aspect of faith",
          "It applies only to women",
          "It is a fundamental principle for both men and women",
          "It is outdated in modern times"
        ],
        correctAnswer: "It is a fundamental principle for both men and women",
        explanation: "The Quran repeatedly emphasizes the importance of sexual purity (chastity) and modesty for both believing men and women. This includes lowering gaze, guarding private parts, and avoiding acts that lead to illicit sexual relations. [Quran 24:30-31]"
      },
      {
        question: "In Islam, what is the purpose of marriage?",
        options: [
          "Primarily for financial gain",
          "To fulfill desires without restraint",
          "For procreation, companionship, and spiritual tranquility",
          "To increase social status"
        ],
        correctAnswer: "For procreation, companionship, and spiritual tranquility",
        explanation: "The Quran describes marriage as a sign of Allah, providing tranquility, love, and mercy between spouses, and it is also the legitimate means for procreation and the continuation of humanity. [Quran 30:21]"
      },
      {
        question: "Is there any concept in Islam that allows for relationships outside of a male-female marriage?",
        options: [
          "Yes, as long as there is mutual consent",
          "No, all sexual relationships are strictly confined to the bounds of legal marriage between a man and a woman",
          "Only for specific circumstances",
          "It is a matter of personal interpretation"
        ],
        correctAnswer: "No, all sexual relationships are strictly confined to the bounds of legal marriage between a man and a woman",
        explanation: "Islamic teachings are clear that all sexual relationships must occur within the confines of a valid marriage contract between a man and a woman. Any sexual activity outside of this is considered unlawful (haram). [Quran 23:5-7, 70:29-31]"
      },
      {
        question: "What is the primary role of the Quran and Sunnah in defining sexual ethics in Islam?",
        options: [
          "To provide loose guidelines for personal interpretation",
          "To strictly define what is permissible and impermissible",
          "To focus only on ritual worship",
          "To promote a flexible approach to sexual morality"
        ],
        correctAnswer: "To strictly define what is permissible and impermissible",
        explanation: "The Quran and Sunnah (Prophet Muhammad's teachings and practices) serve as the primary sources of Islamic law, providing clear and strict definitions for all aspects of life, including sexual ethics. They outline what is permissible (halal) and impermissible (haram) based on divine revelation. [Quran 5:3, 59:7]"
      },
      {
        question: "The punishment for homosexual acts, as discussed in Islamic jurisprudence, is derived from where?",
        options: [
          "Local customs",
          "Philosophical reasoning",
          "The story of Lut's people and interpretations of relevant Hadith",
          "Modern human rights treaties"
        ],
        correctAnswer: "The story of Lut's people and interpretations of relevant Hadith",
        explanation: "The juristic rulings regarding the punishment for homosexual acts are primarily derived from the Quranic accounts of the people of Lut and various Prophetic traditions (Hadith) that address the severity of such acts. Different schools of thought may vary on the exact prescribed punishment, but the prohibition is universally agreed upon. [Sunan Abi Dawud 4462, Jami` at-Tirmidhi 1456, classical Fiqh texts on Hadd punishments]"
      },
      {
        question: "How does Islam encourage individuals to deal with sexual desires if they cannot marry or find themselves attracted to forbidden acts?",
        options: [
          "To act on those desires secretly",
          "To suppress them entirely without spiritual guidance",
          "To practice self-restraint (abstinence) and seek closeness to Allah",
          "To seek unconventional partnerships"
        ],
        correctAnswer: "To practice self-restraint (abstinence) and seek closeness to Allah",
        explanation: "Islam encourages those who cannot marry to maintain chastity and practice self-restraint, advising them to fast and seek help from Allah. The emphasis is on controlling desires and seeking lawful avenues, rather than acting on forbidden ones. [Quran 24:33, Sahih al-Bukhari 5066 (Hadith on marriage and fasting)]"
      },
      {
        question: "Is there a concept of 'conversion therapy' in classical Islamic texts for homosexual inclinations?",
        options: [
          "Yes, it is explicitly prescribed",
          "No, the concept as understood today is not found, but emphasis is on controlling desires and seeking spiritual reform",
          "It is a modern invention to justify discrimination",
          "Islam encourages changing one's sexual orientation"
        ],
        correctAnswer: "No, the concept as understood today is not found, but emphasis is on controlling desires and seeking spiritual reform",
        explanation: "Classical Islamic texts do not describe 'conversion therapy' in the modern psychological sense. However, they emphasize the importance of striving to adhere to divine commands, which would include controlling forbidden desires through spiritual means (prayer, fasting, remembrance of Allah) and seeking Allah's guidance and strength. The focus is on individual accountability for actions and internal spiritual struggle (jihad an-nafs). [General Islamic principles of tazkiyah an-nafs (purification of the soul)]"
      },
      {
        question: "What is the ruling on openly promoting or normalizing homosexual acts in Islam?",
        options: [
          "It is a duty to promote all lifestyles",
          "It is considered a grave sin and a transgression against Islamic teachings",
          "It is permissible if done peacefully",
          "It depends on cultural context"
        ],
        correctAnswer: "It is considered a grave sin and a transgression against Islamic teachings",
        explanation: "Islam forbids not only the act of homosexuality but also its public promotion or normalization, viewing it as a clear violation of divine boundaries and an encouragement of immorality. This is derived from the condemnation of Lut's people who 'publicly commit indecency'. [Quran 29:29, and scholarly consensus on forbidding promotion of vice (munkar)]"
      },
      {
        question: "How does Islam view the concept of 'gender fluidity' as a social construct?",
        options: [
          "It aligns perfectly with Islamic teachings",
          "It is widely accepted within Islamic communities",
          "It generally contradicts the Islamic understanding of a divinely created binary gender system (male/female)",
          "It is a complex issue with varied interpretations"
        ],
        correctAnswer: "It generally contradicts the Islamic understanding of a divinely created binary gender system (male/female)",
        explanation: "Islamic theology and jurisprudence are founded on the understanding of humanity being created in two distinct biological sexes: male and female. The concept of 'gender fluidity' as a social construct, distinct from biological sex, generally contradicts this foundational binary understanding in mainstream Islamic thought. While acknowledging intersex conditions, Islam does not typically recognize gender identities independent of biological sex. [Quran 49:13, 4:1 (on creation of male and female), classical Fiqh regarding the fixed nature of gender aside from anomalies]"
      },
      {
        question: "What is the Islamic teaching on respecting individual privacy?",
        options: [
          "It is not important in Islam",
          "It is a fundamental right, but does not extend to concealing forbidden acts",
          "It applies only to public figures",
          "One should always expose others' private sins"
        ],
        correctAnswer: "It is a fundamental right, but does not extend to concealing forbidden acts",
        explanation: "Islam places high importance on privacy and forbids spying on others or revealing their private sins. However, this does not mean that sinful acts are condoned, especially if they become public or harm society. The emphasis is on concealing personal sins and advising in private, rather than public shaming. [Quran 49:12, Sahih Muslim 2590 (Hadith on concealing faults)]"
      },
      {
        question: "What is the role of regret (tawbah) and seeking forgiveness in Islam for any sin?",
        options: [
          "It is only for minor sins",
          "It is a path to purification and forgiveness from Allah for all sins, including major ones",
          "It is unnecessary if no one knows about the sin",
          "It is only for those who commit acts of disbelief"
        ],
        correctAnswer: "It is a path to purification and forgiveness from Allah for all sins, including major ones",
        explanation: "Tawbah (sincere repentance) and seeking forgiveness from Allah are central tenets of Islam. Allah is Most Forgiving and accepts the repentance of His servants for all sins, no matter how grave, provided the repentance is sincere, accompanied by regret, cessation of the sin, and a firm intention not to return to it. [Quran 39:53, Sahih Muslim 2703 (Hadith on repentance)]"
      },
      {
        question: "Is there a concept of 'gender identity' distinct from biological sex in classical Islamic texts?",
        options: [
          "Yes, it is extensively discussed",
          "No, the primary focus is on biological sex and its associated roles",
          "It is a topic of ongoing debate among early scholars",
          "It is a modern concept alien to Islam"
        ],
        correctAnswer: "No, the primary focus is on biological sex and its associated roles",
        explanation: "Classical Islamic texts do not contain a distinct concept of 'gender identity' as understood in contemporary discourse, separate from biological sex. Islamic law and social norms are primarily built upon the binary distinction of male and female as determined by biology at birth, with associated roles and responsibilities. Discussions around *mukhannath* (effeminate men) were about their behavior and physical characteristics, not a separate 'gender identity'. [General Islamic anthropological understanding from Quran and Sunnah, and Fiqh texts]"
      },
      {
        question: "What is the Islamic principle regarding 'enjoining good and forbidding evil' (Amr bil Ma'ruf wa Nahi anil Munkar)?",
        options: [
          "It applies only to rulers and scholars",
          "It is a collective responsibility to uphold Islamic morality, done with wisdom and good counsel",
          "It means violently confronting all sin",
          "It is a personal choice to ignore societal wrongs"
        ],
        correctAnswer: "It is a collective responsibility to uphold Islamic morality, done with wisdom and good counsel",
        explanation: "This is a fundamental principle in Islam, encouraging Muslims to promote what is good and discourage what is evil. It is a communal obligation, to be exercised with wisdom, good exhortation, and according to one's capacity, ranging from heart disapproval to verbal counsel and, for those in authority, taking action. [Quran 3:104, Sahih Muslim 49 (Hadith on changing munkar)]"
      },
      {
        question: "What is the Islamic stance on treating individuals with respect and dignity, even if their actions are considered sinful?",
        options: [
          "Respect is reserved only for the pious",
          "All humans are worthy of dignity as creations of Allah, while sin is condemned",
          "One should publicly shame sinners",
          "Respect is not a primary Islamic value"
        ],
        correctAnswer: "All humans are worthy of dignity as creations of Allah, while sin is condemned",
        explanation: "Islam upholds the inherent dignity of every human being as a creation of Allah. While sinful acts are condemned, the individual should be treated with respect and dignity. The Prophet Muhammad (peace be upon him) showed compassion even to non-Muslims and sinners, focusing on conveying the message and advising rather than humiliating. [Quran 17:70, various Prophetic traditions on good conduct (Akhlaq)]"
      },
      {
        question: "Does Islam permit same-sex romantic relationships without physical acts?",
        options: [
          "Yes, as long as there is no physical contact",
          "No, even romantic attachments between the same sex are discouraged as they can lead to prohibited acts",
          "It is a personal matter with no religious ruling",
          "Only if they lead to marriage"
        ],
        correctAnswer: "No, even romantic attachments between the same sex are discouraged as they can lead to prohibited acts",
        explanation: "While the explicit prohibition in Islamic law is on homosexual acts, Islamic teachings generally discourage and forbid any romantic or intimate attachments between individuals of the same sex, as these are seen as avenues leading to forbidden acts and as deviating from the natural order established by Allah for human relationships. The focus is on preventing sins and maintaining societal morality. [Derived from general principles of 'sadd al-dhara'i' (blocking the means to evil) and the sanctity of marriage]"
      },
      {
        question: "What is the general Islamic view on effeminate men (*mukhannathun*) or masculinized women (*mutarajjilat*)?",
        options: [
          "They are encouraged as expressions of diversity",
          "They are considered blessed individuals",
          "If it is a natural disposition without imitation of the opposite gender's prohibited characteristics, it is tolerated, but imitation is forbidden",
          "They are immediately excommunicated from the community"
        ],
        correctAnswer: "If it is a natural disposition without imitation of the opposite gender's prohibited characteristics, it is tolerated, but imitation is forbidden",
        explanation: "Islamic tradition distinguishes between natural effeminacy/masculinity and deliberate imitation of the opposite sex. If a person is naturally effeminate (*mukhannath*) without attempting to imitate women's forbidden characteristics (e.g., in dress, speech, or mannerisms that are specifically feminine by religious command), they were historically tolerated. However, deliberate imitation (tashabbuh) of the opposite sex in ways that contravene Islamic gender norms (e.g., men dressing as women or vice-versa) is explicitly forbidden. [Sahih al-Bukhari 5885, Sunan Abi Dawud 4928 (Hadith on Allah cursing men who imitate women and women who imitate men)]"
      },
      {
        question: "According to Islamic principles, what is the role of modesty (hayah) in society?",
        options: [
          "It is a sign of weakness",
          "It promotes social disorder",
          "It is a core value that helps maintain moral boundaries and societal well-being",
          "It restricts personal freedom excessively"
        ],
        correctAnswer: "It is a core value that helps maintain moral boundaries and societal well-being",
        explanation: "Modesty (hayah) is a central virtue in Islam, encompassing humility, shame, and a sense of propriety. It is considered part of faith and plays a crucial role in maintaining individual and societal morality, promoting chastity, and preventing immorality. [Sahih al-Bukhari 9 (Hadith: Faith has over sixty branches, and modesty is a branch of faith)]"
      },
      {
        question: "Does Islamic law distinguish between homosexual inclination and homosexual acts?",
        options: [
          "No, they are treated identically",
          "Yes, inclination is a test from Allah, while the act is a sin",
          "Islamic law does not acknowledge inclination",
          "Inclination is always a sin"
        ],
        correctAnswer: "Yes, inclination is a test from Allah, while the act is a sin",
        explanation: "Islamic scholarship generally distinguishes between having an inclination or attraction (which is not sinful in itself, as feelings are often not within one's full control) and acting upon that inclination in a way that is forbidden. The sin lies in the forbidden act, not in the internal feeling. This aligns with the broader Islamic principle that one is accountable for their actions and intentions, but not for involuntary thoughts or feelings. [Based on general Islamic principles: 'No blame on you for what you unintentionally do...' Quran 33:5, and Hadith 'Allah has forgiven my Ummah for what crosses their minds, as long as they do not act upon it or speak of it.' Sahih al-Bukhari 5269]"
      },
      {
        question: "What is the general Islamic teaching about divine wisdom behind prohibitions?",
        options: [
          "Prohibitions are arbitrary and serve no purpose",
          "Prohibitions are meant to test obedience, and often contain wisdom for human well-being",
          "Prohibitions are only for ancient times",
          "Humans can fully comprehend all divine wisdom"
        ],
        correctAnswer: "Prohibitions are meant to test obedience, and often contain wisdom for human well-being",
        explanation: "In Islam, all divine commands and prohibitions are believed to be rooted in Allah's ultimate wisdom and knowledge, aiming for the well-being and benefit of humanity, both in this life and the hereafter. While humans may not always fully grasp the underlying wisdom, the primary duty is obedience, with faith that Allah's laws are just and beneficial. [Quran 2:216, 24:30-31 (on benefits of lowering gaze and guarding private parts)]"
      },
      {
        question: "How should Muslims interact with individuals who engage in sinful acts, including those related to homosexuality?",
        options: [
          "With hatred and condemnation",
          "With complete social boycott and shunning",
          "With a balance of upholding Islamic principles and treating individuals with general human dignity, advising with wisdom",
          "By ignoring their presence"
        ],
        correctAnswer: "With a balance of upholding Islamic principles and treating individuals with general human dignity, advising with wisdom",
        explanation: "Islam mandates upholding its principles and forbidding evil, but also emphasizes wisdom, good counsel, and mercy in dealing with people. This means condemning sinful acts but not necessarily shunning or humiliating the individual. The approach should be balanced: firm on principles, but compassionate in person-to-person interaction, seeking to guide towards good. [Quran 16:125, 21:107, Sahih Muslim 2590]"
      },
      {
        question: "What does the Quran say about Allah's knowledge of all things, including human inclinations?",
        options: [
          "Allah is unaware of human inclinations",
          "Allah knows everything hidden and apparent",
          "Allah only knows what humans reveal",
          "Human inclinations are outside Allah's knowledge"
        ],
        correctAnswer: "Allah knows everything hidden and apparent",
        explanation: "The Quran frequently asserts Allah's comprehensive knowledge of all things, including the innermost thoughts, feelings, and inclinations of human beings. This reinforces the concept that nothing is hidden from Him, and one's intentions and struggles are known to Him. [Quran 6:59, 20:7, 67:13]"
      },
      {
        question: "Is there an Islamic concept of an 'LGBTQ identity' as a fixed, inherent trait that exempts one from religious obligations?",
        options: [
          "Yes, it is explicitly mentioned",
          "No, Islamic teachings focus on accountability for actions and adherence to divine law, regardless of inclinations",
          "It is a modern concept that aligns with traditional Islamic views",
          "Only for those born intersex"
        ],
        correctAnswer: "No, Islamic teachings focus on accountability for actions and adherence to divine law, regardless of inclinations",
        explanation: "Islamic theology emphasizes individual accountability for choices and actions. While inclinations or temptations may exist, they do not negate one's religious obligations or make permissible what is forbidden. The focus is on righteous conduct and striving to overcome challenges in adherence to Allah's commands. [General Islamic principles of accountability (taklif) and human free will]"
      },
      {
        question: "What is the punishment for false accusation of indecency in Islam?",
        options: [
          "No punishment",
          "A severe punishment of lashing, designed to protect honor and deter slander",
          "Excommunication from the community",
          "A simple apology"
        ],
        correctAnswer: "A severe punishment of lashing, designed to protect honor and deter slander",
        explanation: "Islamic law prescribes a severe punishment (hadd) of lashing for those who falsely accuse chaste individuals of indecency (qadhf), if they cannot bring four witnesses. This highlights the immense importance of protecting a person's honor and reputation in Islam and deterring slander. [Quran 24:4]"
      },
      {
        question: "What is the Islamic teaching on guarding one's chastity?",
        options: [
          "It is only for married people",
          "It is a virtue for all believers, highly encouraged for spiritual and societal well-being",
          "It is irrelevant in modern society",
          "It is a burden to be avoided"
        ],
        correctAnswer: "It is a virtue for all believers, highly encouraged for spiritual and societal well-being",
        explanation: "Guarding one's chastity (hifz al-furuj) is a fundamental commandment in Islam for both men and women, directly linked to piety and a righteous life. It involves abstaining from unlawful sexual relations and avoiding anything that leads to them. [Quran 23:5-7, 70:29-31, 24:30-31]"
      },
      {
        question: "What is the Islamic stance on gender segregation in public spaces when practical?",
        options: [
          "It is always strictly enforced everywhere",
          "It is encouraged to minimize temptation and promote modesty, especially in mixed gatherings where interaction is not necessary",
          "It is forbidden as it promotes discrimination",
          "It has no basis in Islamic texts"
        ],
        correctAnswer: "It is encouraged to minimize temptation and promote modesty, especially in mixed gatherings where interaction is not necessary",
        explanation: "While not absolute in all contexts (e.g., in markets or during Hajj), the general Islamic principle, derived from Quranic verses on lowering gaze and modesty, encourages a degree of gender segregation or separation in public and social gatherings where men and women are not direct mahrams or engaged in necessary interactions. This is seen as a means to prevent temptation (fitna) and maintain modesty. [Quran 24:30-31, 33:53 (on interacting with wives of the Prophet behind a screen), scholarly interpretations of these verses]"
      },
      {
        question: "How does the concept of 'patience' (sabr) apply to dealing with forbidden desires?",
        options: [
          "It means ignoring the desires",
          "It means suppressing them temporarily",
          "It involves steadfastness in abstaining from forbidden acts and seeking Allah's help",
          "It is only for physical hardships"
        ],
        correctAnswer: "It involves steadfastness in abstaining from forbidden acts and seeking Allah's help",
        explanation: "Patience (sabr) is a highly valued virtue in Islam, encompassing steadfastness in obedience to Allah, abstaining from sins, and enduring hardships. It applies directly to the struggle against forbidden desires, where one exercises self-control and seeks Allah's assistance to remain chaste and avoid unlawful acts. [Quran 2:153, 3:200]"
      },
      {
        question: "What is the Islamic understanding of natural inclinations vs. moral choice?",
        options: [
          "All inclinations are innate and cannot be controlled",
          "Humans have innate inclinations, but are given free will to choose between right and wrong based on divine guidance",
          "Inclinations dictate moral choices",
          "There is no distinction between inclination and choice"
        ],
        correctAnswer: "Humans have innate inclinations, but are given free will to choose between right and wrong based on divine guidance",
        explanation: "Islam acknowledges human inclinations and desires, but asserts that Allah has granted humans free will and intellect to distinguish between good and evil, and to choose their actions. Therefore, while inclinations may exist, individuals are accountable for their conscious choices and actions, guided by revelation. [Quran 76:3, 90:10]"
      },
      {
        question: "What is the Islamic view on transgender identity, where a person identifies with a gender different from their biological sex at birth?",
        options: [
          "It is fully accepted and affirmed as a valid identity",
          "Mainstream Islamic scholarship generally does not recognize gender identity as separate from biological sex and views attempts to change it (e.g., through reassignment) as altering Allah's creation, with exceptions for intersex conditions.",
          "It is encouraged as a form of self-expression",
          "There are no Islamic teachings on this matter"
        ],
        correctAnswer: "Mainstream Islamic scholarship generally does not recognize gender identity as separate from biological sex and views attempts to change it (e.g., through reassignment) as altering Allah's creation, with exceptions for intersex conditions.",
        explanation: "Mainstream Islamic jurisprudence and theology are based on a binary understanding of male and female corresponding to biological sex. While intersex conditions (*khuntha*) are addressed with specific rulings, the concept of a 'gender identity' distinct from biological sex, and subsequent transition, is generally seen as contrary to the natural order of creation ('fitra') and an alteration of Allah's creation, which is forbidden. [Quran 4:119, Tafsir of relevant verses, contemporary fatwas from major Islamic jurisprudential bodies]"
      },
      {
        question: "What is the Islamic perspective on a 'third gender' beyond male and female?",
        options: [
          "It is recognized and celebrated in classical texts",
          "Islamic texts primarily operate within a binary male/female framework, with specific categories for intersex individuals (khuntha) but not a distinct 'third gender' identity",
          "It is a forbidden concept altogether",
          "It is a modern concept with no religious relevance"
        ],
        correctAnswer: "Islamic texts primarily operate within a binary male/female framework, with specific categories for intersex individuals (khuntha) but not a distinct 'third gender' identity",
        explanation: "Classical Islamic jurisprudence categorizes human beings primarily as male or female. The unique case of intersex individuals (*khuntha*) is extensively discussed, with rulings aimed at determining their predominant biological sex. However, this does not establish a 'third gender' as a social or identity category independent of biological sex in the way it is understood in some modern contexts. [Quran 49:13, and extensive fiqh discussions on Khuntha in texts like 'Al-Mughni' by Ibn Qudamah and 'Bada'i' al-Sana'i' by Al-Kasani]"
      },
    ],
    advanced: [
        {
            question: "Elaborate on the significance of the phrase 'Do you commit the worst of indecencies such as no people in the world have ever done before you?' (Quran 7:80) regarding the people of Lut.",
            options: [
              "It emphasizes the unique nature and unprecedented gravity of their homosexual acts.",
              "It refers to their disbelief in God only.",
              "It is a general statement about their evil deeds, not specifically sexual.",
              "It suggests they were merely innovative."
            ],
            correctAnswer: "It emphasizes the unique nature and unprecedented gravity of their homosexual acts.",
            explanation: "This verse highlights the unprecedented nature and severe abominable character of the homosexual acts committed by Lut's people. Tafsir scholars like Al-Tabari and Ibn Kathir explain that this refers specifically to their practice of male-on-male sexual intercourse, which was unheard of prior to them. It underscores that their transgression was not just any sin, but a unique and grave deviation from natural human conduct and divine law. [Quran 7:80, Tafsir al-Tabari on 7:80, Tafsir Ibn Kathir on 7:80]"
          },
          {
            question: "Discuss the interpretations of the word 'rijal' (رجال - men) and 'nisa' (نساء - women) in Quranic contexts related to sexual prohibitions.",
            options: [
              "They refer to social roles only.",
              "They consistently refer to biological males and females, establishing the binary nature of permissible sexual relationships.",
              "Their meaning is fluid and open to modern interpretations of gender.",
              "They are interchangeable terms without specific biological connotations."
            ],
            correctAnswer: "They consistently refer to biological males and females, establishing the binary nature of permissible sexual relationships.",
            explanation: "In the Quran, 'rijal' and 'nisa' consistently refer to biological men and women, respectively. When discussing permissible sexual relations, the Quran explicitly defines them as being between these two distinct biological sexes within the bounds of marriage (e.g., Quran 4:1, 30:21). The linguistic and jurisprudential consensus is that these terms denote the biological binary, which forms the basis for all rulings related to marriage, divorce, inheritance, and sexual ethics. [Quran 4:1, 30:21, all classical Arabic lexicons and Tafasir]"
          },
          {
            question: "How do classical Tafsir works interpret the destruction of Lut's people in relation to their acts?",
            options: [
              "As a random natural disaster.",
              "As a direct divine punishment for their rejection of Lut's message and their specific abhorrent sexual practices.",
              "As a metaphor for societal decline.",
              "As a cautionary tale about economic inequality."
            ],
            correctAnswer: "As a direct divine punishment for their rejection of Lut's message and their specific abhorrent sexual practices.",
            explanation: "Classical Tafsir works unanimously interpret the destruction of Lut's people (Sodom and Gomorrah) by stones and an overturned city as a direct and severe divine punishment (azab) specifically for their defiance of Prophet Lut's call to monotheism and, critically, their persistence in committing male homosexual acts, which the Quran condemns as 'fahisha' (abomination) and 'isrâf' (transgression). [Tafsir al-Jalalayn on 7:80-84, Tafsir al-Qurtubi on 7:80-84, Tafsir al-Tabari on 11:77-83]"
          },
          {
            question: "Discuss the fiqh (Islamic jurisprudence) categories for individuals with ambiguous genitalia (*khuntha*) and their implications.",
            options: [
              "Khuntha are considered a third gender with separate legal rights.",
              "Fiqh aims to determine if a Khuntha is predominantly male or female based on physical signs or functionality, assigning them the corresponding rulings.",
              "They are excluded from all religious obligations.",
              "Their gender is left entirely up to personal choice."
            ],
            correctAnswer: "Fiqh aims to determine if a Khuntha is predominantly male or female based on physical signs or functionality, assigning them the corresponding rulings.",
            explanation: "Islamic fiqh extensively discusses *khuntha* (intersex individuals), acknowledging their biological ambiguity. The primary goal of fiqh is to determine whether such an individual is legally male or female based on clearer physical signs (e.g., urination, presence of male or female reproductive organs) or, if ambiguity persists, through their predominant behavior or later-developing secondary characteristics. Once assigned, they are subject to the rulings of that gender (e.g., in prayer, inheritance, marriage). This is a recognition of a biological anomaly, not a 'third gender' or a fluid identity. [Al-Mawardi's *Al-Ahkam as-Sultaniyyah*, Ibn Qudamah's *Al-Mughni*, extensive chapters in Fiqh encyclopedias on 'khuntha']."
          },
          {
            question: "How does the Hadith regarding 'mukhannathun' (effeminate men) and 'mutarajjilat' (masculinized women) contribute to the Islamic understanding of gender roles and behavior?",
            options: [
              "It promotes cross-dressing and gender role reversal.",
              "It curses men who imitate women and women who imitate men in aspects specific to the opposite gender, emphasizing distinct gender roles and appearances.",
              "It is only applicable to a specific historical context.",
              "It promotes individual self-expression without limitations."
            ],
            correctAnswer: "It curses men who imitate women and women who imitate men in aspects specific to the opposite gender, emphasizing distinct gender roles and appearances.",
            explanation: "Several authentic Hadith condemn *tashabbuh* (imitation) of the opposite gender. For example, 'Allah has cursed the men who imitate women and the women who imitate men.' (Sahih al-Bukhari 5885). Scholars explain this refers to imitation in matters specific to the opposite gender in dress, mannerisms, or appearance that are not natural dispositions, emphasizing the Islamic value of distinct gender roles and appearances as part of Allah's creation. However, naturally effeminate men (*mukhannathun ghayr uli 'irba*) who do not imitate or intend to deceive were treated differently. [Sahih al-Bukhari 5885, Sunan Abi Dawud 4928, Fath al-Bari by Ibn Hajar al-Asqalani on Hadith 5885]"
          },
          {
            question: "Analyze the broader Quranic principle of 'fasaad fil ard' (corruption in the land) and how scholars relate it to practices like homosexuality.",
            options: [
              "It only refers to environmental pollution.",
              "It encompasses all forms of moral, social, and environmental corruption, and is often applied by scholars to grave sexual sins that undermine societal fabric.",
              "It is a legal term unrelated to morality.",
              "It is a concept specific to economic injustice."
            ],
            correctAnswer: "It encompasses all forms of moral, social, and environmental corruption, and is often applied by scholars to grave sexual sins that undermine societal fabric.",
            explanation: "'Fasaad fil ard' (corruption in the land) is a broad Quranic concept referring to any act that causes imbalance, disorder, or destruction in society or the environment. Scholars like Al-Qurtubi and Al-Tabari, in their exegesis of verses mentioning Lut's people, connect their sexual transgressions to this concept of 'corruption on earth', arguing that such acts lead to moral decay and social breakdown. It signifies that moral deviations, especially those impacting the family unit and natural order, are seen as forms of corruption that invite divine displeasure. [Quran 2:205, 5:64, Tafsir al-Qurtubi on 7:80-84]"
          },
          {
            question: "How does the Islamic legal principle of 'sadd al-dhara'i' (blocking the means to evil) apply to interactions between the same sexes that could lead to homosexual acts?",
            options: [
              "It encourages such interactions.",
              "It mandates strict segregation in all scenarios.",
              "It requires avoiding situations or behaviors that are likely to lead to forbidden acts, thus discouraging intimate or romantic interactions between same-sex individuals.",
              "It only applies to economic transactions."
            ],
            correctAnswer: "It requires avoiding situations or behaviors that are likely to lead to forbidden acts, thus discouraging intimate or romantic interactions between same-sex individuals.",
            explanation: "'Sadd al-dhara'i' is a jurisprudential principle that involves blocking the means that lead to evil or harm. In the context of sexual morality, this principle is applied to discourage or prohibit actions, interactions, or environments that, while not forbidden in themselves, are highly likely to facilitate or lead to forbidden sexual acts (e.g., intimacy between same-sex individuals that could lead to homosexual acts, or inappropriate seclusion between opposite sexes). This principle aims to safeguard societal morality and prevent transgression. [Ibn Taymiyyah, Al-Fatawa al-Kubra; various Fiqh works discussing the prevention of means to haram]"
          },
          {
            question: "Discuss the concept of 'jihad an-nafs' (struggle against the self) in relation to dealing with forbidden inclinations, including homosexual desires.",
            options: [
              "It means physically fighting against others who hold different views.",
              "It refers to the spiritual struggle to control one's desires and impulses in accordance with Islamic teachings, aiming for self-purification and adherence to Allah's commands.",
              "It is a concept applicable only in times of war.",
              "It implies complete denial of one's inner feelings."
            ],
            correctAnswer: "It refers to the spiritual struggle to control one's desires and impulses in accordance with Islamic teachings, aiming for self-purification and adherence to Allah's commands.",
            explanation: "Jihad an-nafs, or the greater jihad, is the internal spiritual struggle against one's lower self (nafs), its desires, and temptations that contradict divine commands. This applies directly to individuals who may experience inclinations towards forbidden acts, including homosexual desires. Islam teaches that one is not sinful for the inclination itself, but is rewarded for the sincere struggle (jihad) to control those desires and to abstain from forbidden acts, seeking closeness to Allah through patience, prayer, and remembrance. [Hadith on Greater Jihad (related to striving against desires), Ibn al-Qayyim, Madarij al-Salikin]"
          },
          {
            question: "How do Quranic verses on creation, specifically 49:13 and 4:1, contribute to the Islamic understanding of human gender and diversity?",
            options: [
              "They promote limitless gender identities.",
              "They establish a divinely ordained binary creation of male and female, from which all humanity descends, emphasizing diversity within this binary.",
              "They refer only to racial diversity.",
              "They suggest that gender is a social construct with no biological basis."
            ],
            correctAnswer: "They establish a divinely ordained binary creation of male and female, from which all humanity descends, emphasizing diversity within this binary.",
            explanation: "Quran 49:13 ('O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another') and 4:1 ('O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women') are foundational. They underscore Allah's creation of humanity in two distinct biological sexes (male and female) as the origin point of all human diversity (tribes, nations). This reinforces the Islamic understanding of a divinely ordained gender binary, with diversity existing within the multitude of peoples and nations, not in gender identity itself as distinct from biological sex. [Quran 4:1, 49:13, Tafsir al-Tabari and Ibn Kathir on these verses]"
          },
          {
            question: "Discuss the theological arguments against same-sex marriage in Islam, drawing from Quranic concepts of marriage and creation.",
            options: [
              "The arguments are purely cultural.",
              "Theological arguments center on marriage as a divinely instituted bond exclusively between male and female, designed for procreation, companionship, and adhering to the natural order (fitra) of creation, as exemplified by the story of Adam and Eve.",
              "Arguments are based on a misunderstanding of ancient texts.",
              "Theology is silent on same-sex unions."
            ],
            correctAnswer: "Theological arguments center on marriage as a divinely instituted bond exclusively between male and female, designed for procreation, companionship, and adhering to the natural order (fitra) of creation, as exemplified by the story of Adam and Eve.",
            explanation: "Islamic theology views marriage (nikah) as a sacred covenant between a man and a woman, based on the Quranic account of Adam and Eve (e.g., Quran 7:189, 30:21) created as complementary pairs for companionship and procreation. This aligns with the 'fitra' (natural disposition) of humanity. Same-sex unions are considered a deviation from this divinely ordained pattern and purpose of marriage, hence prohibited. [Quran 7:189, 30:21, 23:5-7, Tafsir of these verses, Fiqh books on Nikah]"
          },
          {
            question: "What is the scholarly consensus (ijma') on the prohibition of homosexual acts in Islam?",
            options: [
              "There is no consensus.",
              "There is a unanimous and undisputed consensus among all schools of Islamic thought throughout history on the prohibition of homosexual acts (liwat and sihaq).",
              "Consensus exists only in certain regions.",
              "It is a modern interpretation."
            ],
            correctAnswer: "There is a unanimous and undisputed consensus among all schools of Islamic thought throughout history on the prohibition of homosexual acts (liwat and sihaq).",
            explanation: "The prohibition of homosexual acts (liwat for male, sihaq for female) is one of the very few issues in Islamic law on which there is an absolute and undisputed scholarly consensus (ijma') across all major Sunni and Shia schools of thought throughout Islamic history. This consensus is based on clear Quranic verses (especially the story of Lut) and authentic Prophetic traditions. [All classical Fiqh texts, e.g., Al-Kasani's Bada'i' al-Sana'i', Ibn Rushd's Bidayat al-Mujtahid, and scholarly compilations on Ijma']"
          },
          {
            question: "Explain the concept of 'Ibn Mukhannath' from historical Islamic contexts. How was he distinct from a 'mukhannath' (effeminate man)?",
            options: [
              "Ibn Mukhannath was a gender-fluid individual.",
              "Ibn Mukhannath was a specific historical person known for his effeminacy, distinguished by his natural disposition as opposed to one who deliberately imitated women.",
              "He was a male who performed female roles on stage.",
              "The terms are interchangeable."
            ],
            correctAnswer: "Ibn Mukhannath was a specific historical person known for his effeminacy, distinguished by his natural disposition as opposed to one who deliberately imitated women.",
            explanation: "Ibn Mukhannath was a known individual during the time of the Prophet Muhammad, famous for his natural effeminacy and lack of sexual desire for women. The Prophet did not banish him initially, acknowledging his natural disposition. However, when it was later reported that he could describe women's physical attributes, suggesting a sexual interest, he was exiled. This case distinguishes between natural effeminacy (where there's no deliberate imitation or sexual intent towards men) and deliberate imitation or potential for illicit sexual activity. The general prohibition is on *tashabbuh* (imitation) of the opposite sex and forbidden sexual acts, not on a natural effeminate disposition itself, unless it leads to forbidden actions. [Sahih al-Bukhari 5886, Hadith on 'Ibn Mukhannath']"
          },
          {
            question: "What are the varying jurisprudential opinions regarding the specific punishments for homosexual acts in different schools of Islamic law?",
            options: [
              "All schools agree on a single, fixed punishment.",
              "While all schools agree on prohibition, punishments vary, ranging from death (for active and passive parties, or for repeat offenders) to lashing or discretionary punishments (ta'zir), depending on the school and specific scenario.",
              "There are no prescribed punishments.",
              "Only social ostracization is recommended."
            ],
            correctAnswer: "While all schools agree on prohibition, punishments vary, ranging from death (for active and passive parties, or for repeat offenders) to lashing or discretionary punishments (ta'zir), depending on the school and specific scenario.",
            explanation: "All major schools of Islamic jurisprudence (Hanafi, Maliki, Shafi'i, Hanbali) unanimously agree that homosexual acts are forbidden (haram) and a major sin. However, there are differences in the prescribed legal punishment (hadd or ta'zir). Some scholars and schools (e.g., Hanbali, and a view in Shafi'i and Maliki schools) mandate the death penalty for both active and passive participants, citing certain Hadith. Others (e.g., Hanafi school) prescribe lashing (similar to fornication) or discretionary punishments (ta'zir), considering it a lesser offense than adultery (zina) if it does not meet the evidentiary requirements of zina. All agree that it is a serious crime. It's important to note these are legal punishments applicable in an Islamic state, not vigilante actions. [Al-Mawardi, Al-Ahkam as-Sultaniyyah; Ibn Qudamah, Al-Mughni; various Fiqh encyclopedias on 'hudud' and 'liwat']"
          },
          {
            question: "How does the Quranic emphasis on 'purification' (tazkiyah) relate to dealing with forbidden desires, including homosexual inclinations?",
            options: [
              "It means denying the existence of such desires.",
              "Tazkiyah involves actively striving to purify the soul, control lusts, and align one's conduct with divine commands, often through spiritual discipline and seeking Allah's help.",
              "It is a concept exclusively for ritual purity.",
              "It applies only to external cleanliness."
            ],
            correctAnswer: "Tazkiyah involves actively striving to purify the soul, control lusts, and align one's conduct with divine commands, often through spiritual discipline and seeking Allah's help.",
            explanation: "Tazkiyah (purification of the soul) is a central theme in the Quran, where believers are exhorted to cleanse themselves from sins and moral impurities. This concept is crucial in addressing forbidden desires. It involves conscious effort, spiritual practices (like prayer, fasting, Dhikr), reflecting on Quranic verses, and seeking divine assistance to redirect or control inclinations that lead to unlawful acts, striving for inner peace and righteousness. [Quran 91:9-10, 87:14, 13:28]"
          },
          {
            question: "Discuss the concept of 'ghirah' (protective jealousy/honor) in Islam and its relevance to preserving family structures and sexual morality.",
            options: [
              "It is a negative trait that leads to oppression.",
              "Ghirah is a commendable quality for both men and women, signifying a protective instinct over one's honor, family, and religious boundaries, including safeguarding against illicit sexual relations and preserving lineage.",
              "It applies only to material possessions.",
              "It encourages promiscuity."
            ],
            correctAnswer: "Ghirah is a commendable quality for both men and women, signifying a protective instinct over one's honor, family, and religious boundaries, including safeguarding against illicit sexual relations and preserving lineage.",
            explanation: "Ghirah is a commendable Islamic concept referring to a sense of protective jealousy or honor, particularly regarding one's family, spouse, and religious values. It manifests in safeguarding chastity, family lineage, and the sanctity of marriage. It is a natural human trait affirmed in Islam that motivates believers to protect against moral decay and illicit sexual relations, reflecting the divine attribute of Ghayur (the Most Jealous/Protective). [Sahih al-Bukhari 6846, Sahih Muslim 2755 (Hadith on Allah's Ghiirah), and classical discussions on preserving lineage (hifz al-nasl) as one of the objectives of Sharia (Maqasid al-Shari'ah)]"
          },
          {
            question: "Analyze the Quranic injunction in Surah An-Nisa (4:19) regarding treating women with kindness and fairness, even if one dislikes something about them. How might this broader principle be applied to interactions with individuals whose lifestyles may differ from Islamic norms, without condoning their actions?",
            options: [
              "It implies condoning all actions.",
              "It highlights the importance of fair and compassionate treatment of all individuals, even when disapproving of certain behaviors, focusing on justice and wisdom in interactions rather than hate or abuse.",
              "It only applies to marital disputes.",
              "It has no relevance to contemporary social issues."
            ],
            correctAnswer: "It highlights the importance of fair and compassionate treatment of all individuals, even when disapproving of certain behaviors, focusing on justice and wisdom in interactions rather than hate or abuse.",
            explanation: "Quran 4:19 states, 'Live with them in kindness. For if you dislike them - perhaps you dislike a thing and Allah makes therein much good.' This verse, though primarily about marital relations, reflects a broader Islamic principle of dealing with others with kindness, fairness, and justice, even when personal disapproval or dislike exists. Applied generally, this principle suggests that while Muslims must adhere to and uphold Islamic moral codes (e.g., forbidding homosexual acts), their interaction with individuals who transgress these codes should still be characterized by justice, compassion, wisdom, and respect for human dignity, avoiding abuse, hatred, or unjust discrimination. [Quran 4:19, Tafsir al-Tabari on 4:19, and general Islamic ethics of good conduct (Akhlaq)]"
          },
          {
            question: "How does the concept of 'bala' (trial/test) in Islam apply to individuals who experience forbidden inclinations, such as same-sex attraction?",
            options: [
              "It means the inclination is a punishment for past sins.",
              "It means the inclination is a trial from Allah, and steadfastness in abstaining from the forbidden act is a source of immense reward and spiritual growth.",
              "It implies that they are destined to commit the sin.",
              "It is a concept unrelated to personal desires."
            ],
            correctAnswer: "It means the inclination is a trial from Allah, and steadfastness in abstaining from the forbidden act is a source of immense reward and spiritual growth.",
            explanation: "In Islam, life is understood as a test (*bala*) from Allah, encompassing various challenges, difficulties, and temptations. For individuals who experience inclinations towards forbidden acts, including same-sex attraction, this can be viewed as a particular trial. The Islamic response to such a trial is to seek Allah's help, exercise patience (*sabr*), and strive to abstain from the forbidden act, knowing that steadfastness in this struggle is a source of great reward and spiritual elevation in the sight of Allah. The sin is in the action, not the involuntary inclination. [Quran 2:155, 29:2-3, 67:2]"
          },
          {
            question: "Discuss the role of community ('ummah') in upholding Islamic sexual morality and how it contrasts with individualism in this regard.",
            options: [
              "The community has no role in individual morality.",
              "The 'ummah' has a collective responsibility to uphold Islamic moral norms, encourage good, and forbid evil, fostering an environment that supports righteous living, which contrasts with extreme individualism where personal desires are prioritized over divine law.",
              "Community rules are irrelevant to personal choices.",
              "Individual desires always supersede community well-being."
            ],
            correctAnswer: "The 'ummah' has a collective responsibility to uphold Islamic moral norms, encourage good, and forbid evil, fostering an environment that supports righteous living, which contrasts with extreme individualism where personal desires are prioritized over divine law.",
            explanation: "The Islamic concept of 'ummah' (community) emphasizes a collective responsibility for upholding morality, including sexual ethics, through 'enjoining good and forbidding evil' (Amr bil Ma'ruf wa Nahi anil Munkar). This means creating a social environment that encourages adherence to Islamic values, discourages sin, and supports individuals in their striving for righteousness. This communal aspect stands in contrast to pure individualism, where personal desires are seen as paramount, irrespective of divine commands or societal well-being. [Quran 3:104, 9:71, Sahih Muslim 49]"
          },
          {
            question: "How does the Islamic understanding of 'shirk' (associating partners with Allah) indirectly relate to issues of human autonomy in defining fundamental aspects of creation like gender?",
            options: [
              "It means idolizing human gender categories.",
              "Shirk primarily relates to worship. However, in a broader sense, it can imply that asserting human autonomy to redefine divinely ordained fundamental aspects of creation, such as the male/female binary, might be seen as overstepping divine boundaries, if interpreted as attributing to oneself attributes or power belonging only to the Creator.",
              "It has no bearing on matters of gender.",
              "It encourages humans to redefine creation."
            ],
            correctAnswer: "Shirk primarily relates to worship. However, in a broader sense, it can imply that asserting human autonomy to redefine divinely ordained fundamental aspects of creation, such as the male/female binary, might be seen as overstepping divine boundaries, if interpreted as attributing to oneself attributes or power belonging only to the Creator.",
            explanation: "Shirk is the gravest sin in Islam, involving associating partners with Allah in His divinity, attributes, or worship. While not directly about gender, some contemporary Islamic scholars argue that attempts to redefine fundamental, divinely established aspects of creation, such as the inherent male/female binary and their roles, might subtly encroach upon Allah's exclusive right as the Creator and Ordainer. This is a nuanced interpretation that extends the concept of divine authority beyond worship to the very fabric of existence, implying that humans should not seek to alter what Allah has fundamentally established. [Quran 2:28, 4:116 (on Shirk), and contemporary scholarly discussions on 'altering Allah's creation' in the context of gender identity]"
          },
          {
            question: "Discuss the concept of 'darurah' (necessity) in Islamic law and whether it applies to permitting homosexual acts under any circumstances.",
            options: [
              "Yes, necessity permits anything.",
              "Darurah allows exceptions to prohibitions only under extreme duress threatening life, but it does not apply to permitting consensual homosexual acts, which are considered major sins.",
              "It applies to emotional needs.",
              "It only applies to dietary restrictions."
            ],
            correctAnswer: "Darurah allows exceptions to prohibitions only under extreme duress threatening life, but it does not apply to permitting consensual homosexual acts, which are considered major sins.",
            explanation: "The principle of 'darurah' (necessity) in Islamic law allows for certain prohibitions to be lifted in dire circumstances where human life or essential needs are genuinely threatened (e.g., eating forbidden food to avoid starvation). However, this principle is strictly defined and does not extend to permitting major sins like homosexual acts, as they are not considered a 'necessity' for survival or the preservation of life, and their prohibition is deemed absolute. [Al-Qawa'id al-Fiqhiyyah (Maxims of Islamic Jurisprudence) 'Necessities make the prohibited permissible' - with strict conditions, and scholarly consensus on the non-applicability to sexual sins]"
          },
          {
            question: "How does the concept of 'maslaha' (public interest/welfare) guide Islamic rulings regarding sexual morality and societal stability?",
            options: [
              "Maslaha dictates that whatever benefits individuals is allowed.",
              "Maslaha supports rulings that safeguard the family unit, lineage, and public morality, seeing prohibitions on illicit sexual acts, including homosexuality, as essential for societal stability and welfare.",
              "It promotes individual freedom above all else.",
              "It is a concept only relevant to economic policy."
            ],
            correctAnswer: "Maslaha supports rulings that safeguard the family unit, lineage, and public morality, seeing prohibitions on illicit sexual acts, including homosexuality, as essential for societal stability and welfare.",
            explanation: "Maslaha (public interest or welfare) is a guiding principle in Islamic jurisprudence. Scholars argue that the prohibitions on illicit sexual acts, including homosexuality, are not arbitrary but serve the 'maslaha' of preserving lineage (*hifz al-nasl*), protecting honor (*hifz al-irdh*), and maintaining public morality and social stability. Deviations from lawful marriage are seen as undermining these essential societal interests. [Al-Shatibi, Al-Muwafaqat fi Usul al-Shari'ah (on Maqasid al-Shari'ah - Objectives of Islamic Law)]"
          },
          {
            question: "Discuss the role of divine attributes like Al-Ghaffar (The Forgiving) and Ar-Rahim (The Merciful) in the context of Muslims struggling with forbidden inclinations.",
            options: [
              "They imply that sins are irrelevant.",
              "They emphasize that Allah is infinitely forgiving and merciful to those who sincerely repent, providing hope and encouragement for individuals to strive against sin and seek His forgiveness, regardless of the nature of their struggles.",
              "They mean Allah will forgive without repentance.",
              "These attributes apply only to minor sins."
            ],
            correctAnswer: "They emphasize that Allah is infinitely forgiving and merciful to those who sincerely repent, providing hope and encouragement for individuals to strive against sin and seek His forgiveness, regardless of the nature of their struggles.",
            explanation: "Allah's attributes of Al-Ghaffar (The Ever-Forgiving) and Ar-Rahim (The Especially Merciful) are central to the Islamic understanding of repentance and hope. For individuals struggling with forbidden inclinations, these attributes are a source of immense comfort and motivation. They highlight that Allah accepts sincere repentance from any sin, offering a path to purification and spiritual peace, provided one strives to abstain from the forbidden act and seeks His forgiveness with a sincere heart. [Quran 39:53, 2:222, Sahih Muslim 2703]"
          },
          {
            question: "How is the concept of 'fitna' (trial/temptation/discord) applied in Islamic teachings regarding gender mixing and illicit relationships?",
            options: [
              "It applies only to political unrest.",
              "It refers to trials or temptations that lead to sin, particularly illicit sexual relations and moral corruption, thereby encouraging caution in unnecessary gender mixing and promoting modesty.",
              "It means any form of social interaction.",
              "It is a concept that promotes chaos."
            ],
            correctAnswer: "It refers to trials or temptations that lead to sin, particularly illicit sexual relations and moral corruption, thereby encouraging caution in unnecessary gender mixing and promoting modesty.",
            explanation: "In Islamic contexts, 'fitna' often refers to trials, temptations, or discord that can lead to moral transgression and societal breakdown. In the realm of gender relations, 'fitna' is a primary concern, leading to injunctions regarding modesty (hijab), lowering the gaze, and minimizing unnecessary free mixing between non-mahram men and women, as these are seen as potential avenues leading to illicit relationships and moral corruption within society. [Quran 24:30-31, Sunan Abi Dawud 4103 (Hadith on avoiding fitna), Ibn Taymiyyah's discussions on fitna and gender interaction]"
          },
          {
            question: "What is the scholarly understanding of 'altering Allah's creation' (taghyir khalqillah) in the context of modern gender transitions?",
            options: [
              "It refers to all forms of innovation.",
              "It is understood as physically changing one's inherent biological sex, which is generally forbidden as it challenges the divine blueprint of creation, with exceptions for correction of intersex conditions.",
              "It only applies to tattooing and piercing.",
              "It is a flexible concept that allows for self-identification."
            ],
            correctAnswer: "It is understood as physically changing one's inherent biological sex, which is generally forbidden as it challenges the divine blueprint of creation, with exceptions for correction of intersex conditions.",
            explanation: "The Quran mentions Satan's vow to 'command them to change the creation of Allah' (Quran 4:119). Scholars interpret this verse, along with other texts, as prohibiting significant, non-medical alterations to the human body that fundamentally change its natural form or function without valid Sharia reason. This applies to modern sex reassignment surgeries when performed on individuals who are not intersex, as it's seen as an attempt to alter the divinely established biological sex. However, corrective surgeries for intersex conditions (khuntha) are generally permissible as they aim to restore or clarify the original, intended form. [Quran 4:119, Tafsir al-Qurtubi on 4:119, various contemporary fatwas from reputable Islamic bodies on gender reassignment surgery]"
          },
          {
            question: "How does Islamic eschatology (teachings about the end of times) sometimes refer to an increase in certain sexual transgressions?",
            options: [
              "It predicts a future where all sexual acts become permissible.",
              "Prophetic traditions (Hadith) mention the proliferation of illicit sexual acts and moral decay as signs of the Last Hour, implicitly including acts like homosexuality as part of widespread immorality.",
              "It only focuses on major wars.",
              "Eschatology is silent on moral issues."
            ],
            correctAnswer: "Prophetic traditions (Hadith) mention the proliferation of illicit sexual acts and moral decay as signs of the Last Hour, implicitly including acts like homosexuality as part of widespread immorality.",
            explanation: "Many authentic Hadith describe various signs of the Last Hour, including the widespread increase of 'zina' (fornication/adultery) and general 'fahisha' (indecency/abomination) in society. While not always explicitly naming homosexuality, these prophecies about widespread sexual immorality are understood by scholars to encompass all forms of illicit sexual relations and deviations from Islamic sexual ethics as signs of moral decay preceding the end of times. [Sahih al-Bukhari 80 (Hadith on increase of Haraj/killing and other sins), Musnad Ahmad 3:347 (Hadith on signs of the Hour including fornication), and general books on Signs of Qiyamah]"
          },
          {
            question: "Discuss the concept of 'haraam' (forbidden) in Islam, emphasizing that it applies to actions, not inherently to individuals' existence or thoughts.",
            options: [
              "Haraam means the individual is inherently evil.",
              "Haraam refers to actions or things that are forbidden by Allah; having an inclination or being tested with a desire is not haram, but acting upon it or promoting it is.",
              "Haraam is a label for people.",
              "All thoughts are considered haram."
            ],
            correctAnswer: "Haraam refers to actions or things that are forbidden by Allah; having an inclination or being tested with a desire is not haram, but acting upon it or promoting it is.",
            explanation: "In Islam, 'haram' designates actions, objects, or behaviors that are strictly forbidden by divine law. It is crucial to understand that 'haram' applies to *acts* (e.g., liwat - homosexual intercourse), not to an individual's inherent being or their involuntary inclinations. A person may experience a forbidden inclination, but they are not sinful for the inclination itself. The sin occurs when one deliberately chooses to act upon that forbidden inclination or actively promotes it. This distinction emphasizes personal accountability for choices while recognizing human vulnerability to desires. [General principles of Fiqh, Hadith on thoughts not being counted as sins if not acted upon (Sahih al-Bukhari 5269)]"
          },
          {
            question: "How do Sufi traditions, known for their emphasis on purifying the soul, approach the struggle against unlawful desires, including those related to sexuality?",
            options: [
              "They encourage indulging in all desires.",
              "Sufi traditions emphasize rigorous spiritual discipline, asceticism, remembrance of Allah (dhikr), and complete submission to divine will as means to purify the 'nafs' (self) and transcend unlawful desires, guiding them towards spiritual perfection.",
              "They promote a detached, intellectual approach.",
              "Sufism has no practical application in managing desires."
            ],
            correctAnswer: "Sufi traditions emphasize rigorous spiritual discipline, asceticism, remembrance of Allah (dhikr), and complete submission to divine will as means to purify the 'nafs' (self) and transcend unlawful desires, guiding them towards spiritual perfection.",
            explanation: "Sufism, the mystical dimension of Islam, places immense emphasis on *tazkiyah an-nafs* (purification of the soul) and *mujahadah* (striving against the self's lower impulses). Sufi masters teach various spiritual disciplines—such as prolonged prayer, fasting, contemplation, solitude, and constant remembrance of Allah (dhikr)—as methods to control and ultimately transcend unlawful desires, including those related to sexuality. The goal is to redirect one's inclinations from the ephemeral to the divine, achieving inner peace and complete submission to God's commands. [Al-Ghazali, Ihya' 'Ulum al-Din; Ibn al-Qayyim, Madarij al-Salikin]"
          },
          {
            question: "What is the historical and jurisprudential stance on 'zawaj al-mut'ah' (temporary marriage) in Sunni and Shia Islam, and how does it relate to the broader discussion of legitimate sexual unions?",
            options: [
              "It is universally accepted by all schools as a form of same-sex marriage.",
              "It is permitted in Twelver Shia Islam as a legitimate, time-bound contract between a man and a woman, distinct from permanent marriage. It is forbidden (haram) in Sunni Islam. Neither form permits same-sex unions.",
              "It is a form of concubinage for homosexuals.",
              "It has been completely abolished by all Islamic schools."
            ],
            correctAnswer: "It is permitted in Twelver Shia Islam as a legitimate, time-bound contract between a man and a woman, distinct from permanent marriage. It is forbidden (haram) in Sunni Islam. Neither form permits same-sex unions.",
            explanation: "Zawaj al-mut'ah (temporary marriage) is a contractual marriage with a predetermined duration. It is recognized as valid and permissible in Twelver Shia Islam (derived from their interpretation of Quran 4:24 and certain narrations), strictly between a man and a woman, with clear conditions including a specified period and dowry. Conversely, it is considered forbidden (haram) and invalid in Sunni Islam, based on Prophetic traditions that indicate its prohibition after a period of initial permissibility. Crucially, neither Sunni nor Shia interpretations of *mut'ah* permit same-sex unions; it remains exclusively a male-female contract. [Quran 4:24, Sahih Muslim 1406 (Hadith on prohibition of Mut'ah in Sunni view), Fiqh books of Sunni and Shia schools on Nikah and Mut'ah]"
          },
          {
            question: "Analyze the concept of 'istihsan' (juristic preference) or 'qiyas' (analogical reasoning) in deriving rulings where direct textual evidence on a specific modern issue might be absent or indirect.",
            options: [
              "These principles allow for the creation of new religious laws without basis.",
              "These are methods used by jurists to derive rulings for novel issues by preferring a stronger evidence or extending a ruling from a similar case in the Quran/Sunnah. In the context of LGBTQ issues, they are used to reinforce existing prohibitions based on broader principles rather than creating exceptions.",
              "They are irrelevant in contemporary fiqh.",
              "They exclusively support lenient interpretations."
            ],
            correctAnswer: "These are methods used by jurists to derive rulings for novel issues by preferring a stronger evidence or extending a ruling from a similar case in the Quran/Sunnah. In the context of LGBTQ issues, they are used to reinforce existing prohibitions based on broader principles rather than creating exceptions.",
            explanation: "Istihsan and Qiyas are important tools in Usul al-Fiqh (principles of Islamic jurisprudence). Qiyas (analogical reasoning) is used to apply a ruling from an existing text (Quran/Sunnah) to a new case based on a common effective cause. For example, some scholars use qiyas to extend the prohibition of male homosexuality to female homosexuality (sihaq) or to other forms of sexual immorality. Istihsan (juristic preference) allows a jurist to prefer a stronger, more equitable ruling over a stricter one if there's a strong reason. However, neither principle is used by mainstream scholars to legitimize what is clearly prohibited by direct textual evidence (nass). Instead, they are used to ensure the consistency and application of established prohibitions to new or indirectly addressed scenarios, rather than creating exceptions or permissions for acts universally recognized as forbidden. [Imam Shafi'i, Al-Risala; Al-Sarakhsi, Usul al-Sarakhsi; discussions on these principles in Usul al-Fiqh texts]"
          },
          {
            question: "How does the Islamic understanding of 'adl' (justice) guide the treatment of individuals, including those who may hold different beliefs or engage in actions considered sinful?",
            options: [
              "Adl requires harsh treatment for all sinners.",
              "Adl mandates fairness, equity, and justice in all interactions, irrespective of a person's beliefs or actions, ensuring that even in upholding Islamic law, no injustice or oppression is committed.",
              "Adl means ignoring religious law.",
              "Justice is solely for Muslims."
            ],
            correctAnswer: "Adl mandates fairness, equity, and justice in all interactions, irrespective of a person's beliefs or actions, ensuring that even in upholding Islamic law, no injustice or oppression is committed.",
            explanation: "Justice ('adl) is a paramount principle in Islam, a divine attribute, and a fundamental requirement for all human interactions. The Quran repeatedly commands Muslims to be just, even towards their enemies or those they dislike. This principle dictates that even when condemning actions or upholding Islamic law, justice must be applied to the individual. This means refraining from oppression, slander, or any unjust treatment, and ensuring due process and human dignity are maintained for all. [Quran 5:8, 4:135, 16:90]"
          },
          {
            question: "Discuss the nuance between the general prohibition of imitation (*tashabbuh*) of the opposite sex and cases of inherent effeminacy or masculinity. How is this dealt with in fiqh?",
            options: [
              "All forms of effeminacy are cursed.",
              "Fiqh distinguishes between deliberate imitation (forbidden) and natural effeminacy/masculinity (tolerated, but still with expectations of adherence to gender norms for actions), emphasizing intent and the absence of sexual deviance.",
              "There is no distinction, all are equally condemned.",
              "Imitation is always encouraged for self-expression."
            ],
            correctAnswer: "Fiqh distinguishes between deliberate imitation (forbidden) and natural effeminacy/masculinity (tolerated, but still with expectations of adherence to gender norms for actions), emphasizing intent and the absence of sexual deviance.",
            explanation: "Islamic fiqh draws a crucial distinction between *mukhannath ghayr uli 'irba* (a naturally effeminate man who has no sexual desire for women) and a *mukhannath* who deliberately imitates women or engages in homosexual acts. The former was historically tolerated and even allowed into women's gatherings (if truly without desire), while the latter, and any deliberate *tashabbuh* (imitation) of the opposite sex in dress, voice, or mannerisms specific to that gender, is prohibited and cursed in Hadith. The emphasis is on the intent behind the imitation and whether it leads to forbidden actions or violates established gender norms in a deliberate way. [Sahih al-Bukhari 5885, Fath al-Bari by Ibn Hajar al-Asqalani on Hadith 5885]"
          },
          {
            question: "How do the 'Maqasid al-Shari'ah' (Objectives of Islamic Law) relate to the preservation of family and lineage in the context of sexual morality?",
            options: [
              "They promote individualism in family matters.",
              "The preservation of lineage (*hifz al-nasl*) is a primary objective of Islamic law, which necessitates the sanctity of marriage between a man and a woman and the prohibition of all forms of illicit sexual relations, including homosexuality, as they undermine this objective.",
              "They are outdated concepts irrelevant to modern families.",
              "They prioritize personal desires over family structure."
            ],
            correctAnswer: "The preservation of lineage (*hifz al-nasl*) is a primary objective of Islamic law, which necessitates the sanctity of marriage between a man and a woman and the prohibition of all forms of illicit sexual relations, including homosexuality, as they undermine this objective.",
            explanation: "The Maqasid al-Shari'ah are the higher objectives or purposes of Islamic law. Among the universally recognized five (or six) essential objectives is *hifz al-nasl* (preservation of lineage/progeny). This objective is secured through legal marriage between a man and a woman, which provides a legitimate framework for procreation and the continuity of the human race. All forms of illicit sexual relations, including homosexual acts, are seen as undermining this fundamental objective because they do not lead to legitimate progeny and disrupt the divinely ordained family structure. [Al-Shatibi, Al-Muwafaqat fi Usul al-Shari'ah, and contemporary works on Maqasid al-Shari'ah]"
          },
          {
            question: "Discuss the principle of 'al-umur bi maqasidiha' (matters are judged by their intentions) in the context of personal struggles with forbidden inclinations.",
            options: [
              "It means intentions justify any action.",
              "It means that Allah judges individuals based on their intentions. While acting on a forbidden inclination is sinful, the mere existence of the inclination, if not acted upon, is not sinful, and the sincere struggle to control it with good intention is rewarded.",
              "Intentions are irrelevant to actions.",
              "Only external actions matter."
            ],
            correctAnswer: "It means that Allah judges individuals based on their intentions. While acting on a forbidden inclination is sinful, the mere existence of the inclination, if not acted upon, is not sinful, and the sincere struggle to control it with good intention is rewarded.",
            explanation: "This is a fundamental maxim in Islamic jurisprudence. It signifies that the spiritual and legal ruling on an act is largely determined by the intention behind it. In the context of forbidden inclinations, such as same-sex attraction, this principle is crucial: the inclination itself, being involuntary, is not sinful. However, the intention to act upon it, or the conscious choice to abstain from it for Allah's sake, is what garners reward or sin. A sincere struggle to control these inclinations out of obedience to Allah is considered a form of worship and is highly rewarded. [Hadith: 'Actions are but by intentions' (Sahih al-Bukhari 1), and discussions in Usul al-Fiqh on 'al-niyyah']"
          },
          {
            question: "How does the Quranic concept of 'azwaj' (pairs/spouses) reinforce the binary nature of creation in relation to marriage and gender?",
            options: [
              "It suggests multiple types of pairings.",
              "The Quran consistently uses 'azwaj' to refer to complementary pairs within creation, particularly highlighting the male and female as the natural pairing for human reproduction and companionship, reinforcing the heterosexual nature of marriage.",
              "It supports non-binary gender identities.",
              "It is a vague term with no specific meaning."
            ],
            correctAnswer: "The Quran consistently uses 'azwaj' to refer to complementary pairs within creation, particularly highlighting the male and female as the natural pairing for human reproduction and companionship, reinforcing the heterosexual nature of marriage.",
            explanation: "The Quran frequently uses the term 'azwaj' (pairs/spouses) to describe creation, emphasizing the complementary nature of things created in pairs. In the context of human beings, it highlights the creation of male and female as natural and complementary spouses, intended for reproduction and tranquility. For example, 'And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.' (Quran 30:21). This reinforces the Islamic understanding of marriage as exclusively between a male and a female, mirroring the divine design in creation. [Quran 30:21, 51:49, 13:3, Tafsir of these verses]"
          },
          {
            question: "What is the Islamic perspective on societal pressure to conform to modern notions of sexual orientation and gender identity?",
            options: [
              "Muslims must always conform to societal norms.",
              "Muslims are obligated to adhere to Islamic principles, even if it means going against prevailing societal norms that contradict divine law, while engaging with society respectfully.",
              "Societal pressure invalidates religious beliefs.",
              "Islam has no stance on societal pressure."
            ],
            correctAnswer: "Muslims are obligated to adhere to Islamic principles, even if it means going against prevailing societal norms that contradict divine law, while engaging with society respectfully.",
            explanation: "Islam prioritizes obedience to Allah's commands over societal pressures or cultural trends when they contradict divine law. Muslims are enjoined to uphold their faith and moral principles, even if it means being distinct from prevailing norms. This doesn't imply isolation or aggression, but a steadfastness in belief and practice, while maintaining respectful interaction with diverse societies. The Quran praises those who 'do not follow the desires of those who disbelieve.' [Quran 5:48, 49:13, and general principles of 'al-wala' wal-bara' (loyalty and disavowal) concerning obedience to Allah's commands]"
          },
          {
            question: "Discuss the concept of 'Ibtila' (trial) and 'Istiqamah' (steadfastness) for Muslims in contemporary contexts where adherence to Islamic sexual ethics might be challenging.",
            options: [
              "Ibtila means giving up on religious principles.",
              "Ibtila is the recognition that life is full of tests, including those concerning desires. Istiqamah is the spiritual resolve to remain steadfast on the straight path, enduring these trials by adhering to Islamic teachings, and seeking strength from Allah.",
              "Istiqamah means compromising on principles.",
              "These concepts are only for ancient times."
            ],
            correctAnswer: "Ibtila is the recognition that life is full of tests, including those concerning desires. Istiqamah is the spiritual resolve to remain steadfast on the straight path, enduring these trials by adhering to Islamic teachings, and seeking strength from Allah.",
            explanation: "Ibtila (trial or test) is a fundamental part of the human experience in Islam, often involving challenges to one's faith and adherence to divine commands. For Muslims in contemporary societies, this can include challenges related to sexual ethics. Istiqamah (steadfastness) is the virtue of remaining firm and upright on the path of Allah despite difficulties and temptations. This involves consistent adherence to Islamic principles, patience in the face of desires, and seeking Allah's help to maintain moral integrity. [Quran 2:155, 11:112, 46:13, Hadith on Istiqamah (Sahih Muslim 38)]"
          },
          {
            question: "What is the significance of the Quranic injunction to 'lower your gaze' (ghadd al-basar) for both men and women, in relation to overall sexual morality?",
            options: [
              "It promotes social isolation.",
              "It is a preventive measure to safeguard against illicit desires and acts, promoting modesty and purity by controlling visual exposure to what is forbidden.",
              "It applies only to the blind.",
              "It is an outdated social custom."
            ],
            correctAnswer: "It is a preventive measure to safeguard against illicit desires and acts, promoting modesty and purity by controlling visual exposure to what is forbidden.",
            explanation: "The command to 'lower your gaze' (Quran 24:30 for men, 24:31 for women) is a crucial preventative measure (sadd al-dhara'i) in Islamic sexual ethics. It aims to reduce temptation, promote modesty, and protect individuals from falling into illicit thoughts or actions that begin with unchecked visual stimuli. This injunction contributes significantly to the overall framework of chastity and moral purity in Muslim societies. [Quran 24:30-31, Tafsir al-Qurtubi and Ibn Kathir on these verses]"
          },
          {
            question: "How does the concept of 'al-Amr bil Ma'ruf wa an-Nahy anil Munkar' (enjoining good and forbidding evil) apply to the community's responsibility regarding issues of sexual morality?",
            options: [
              "It means vigilante enforcement of all rules.",
              "It means that the Muslim community has a collective obligation to uphold and promote Islamic moral standards, including those pertaining to sexual conduct, through gentle admonition, education, and by establishing a supportive environment for virtuous living.",
              "It is solely the government's responsibility.",
              "It is a private matter with no communal dimension."
            ],
            correctAnswer: "It means that the Muslim community has a collective obligation to uphold and promote Islamic moral standards, including those pertaining to sexual conduct, through gentle admonition, education, and by establishing a supportive environment for virtuous living.",
            explanation: "This fundamental Islamic principle (Quran 3:104, 9:71) signifies the community's collective duty to encourage adherence to Islamic values and discourage forbidden acts. In matters of sexual morality, this translates to promoting lawful marriage, chastity, modesty, and educating about the prohibitions against illicit sexual relations, including homosexuality. This is done with wisdom and good counsel, and according to one's capacity, aiming to preserve the moral fabric of society. [Quran 3:104, 9:71, Sahih Muslim 49 (Hadith on changing munkar)]"
          },
          {
            question: "Discuss the role of 'ijtihaad' (independent legal reasoning) in addressing contemporary issues not explicitly detailed in classical texts, while maintaining adherence to core Islamic principles regarding LGBTQ issues.",
            options: [
              "Ijtihaad allows for any new interpretation regardless of textual evidence.",
              "Ijtihaad is the scholarly effort to derive rulings for new issues based on the Quran, Sunnah, and established legal principles. It is used to apply existing prohibitions to new manifestations of similar acts or to address novel situations like medical intersex conditions, but it does not overturn clear and established prohibitions.",
              "Ijtihaad is no longer permissible in modern times.",
              "It is a tool for secularization of Islamic law."
            ],
            correctAnswer: "Ijtihaad is the scholarly effort to derive rulings for new issues based on the Quran, Sunnah, and established legal principles. It is used to apply existing prohibitions to new manifestations of similar acts or to address novel situations like medical intersex conditions, but it does not overturn clear and established prohibitions.",
            explanation: "Ijtihaad is the rigorous intellectual effort by qualified scholars to derive Islamic legal rulings on new or complex issues for which there is no direct, explicit text in the Quran or authentic Sunnah. In the context of contemporary LGBTQ issues, *ijtihaad* is used to understand how existing Islamic principles (like the sanctity of marriage, prohibition of fahisha, preserving lineage, and rulings on gender binary) apply to modern concepts like 'gender identity' or specific medical interventions. However, *ijtihaad* cannot overturn clear and unambiguous textual prohibitions or unanimous scholarly consensus (ijma'). Therefore, it is used to elaborate on how existing prohibitions apply to new contexts rather than to legitimize what is clearly forbidden. [Al-Ghazali, Al-Mustasfa; Al-Shatibi, Al-Muwafaqat fi Usul al-Shari'ah, and contemporary Fiqh academies' methods]"
          },
          {
            question: "How does the emphasis on marriage as a 'mithaqan ghalizan' (solemn covenant) in the Quran underscore its foundational role in Islamic society and its contrast with other forms of relationships?",
            options: [
              "It implies marriage is merely a social contract.",
              "It highlights the profound, sacred, and divinely sanctioned nature of marriage between a man and a woman, making it the exclusive legitimate framework for sexual relations, family formation, and societal stability, distinct from any other relationship.",
              "It promotes short-term commitments only.",
              "It has no bearing on societal structure."
            ],
            correctAnswer: "It highlights the profound, sacred, and divinely sanctioned nature of marriage between a man and a woman, making it the exclusive legitimate framework for sexual relations, family formation, and societal stability, distinct from any other relationship.",
            explanation: "The Quran describes the marriage bond as a 'mithaqan ghalizan' (a solemn covenant or strong pledge) (Quran 4:21). This term signifies the immense weight and sanctity of the marriage contract in the sight of Allah. It elevates marriage beyond a mere civil agreement to a sacred institution between a man and a woman, ordained by God, which serves as the sole legitimate avenue for sexual relations, procreation, and the establishment of family units. This solemnity underscores why any sexual relationship outside this divinely sanctioned framework is deemed unlawful and disruptive to the social and moral order. [Quran 4:21, Tafsir al-Tabari and Ibn Kathir on 4:21]"
          },
          {
            question: "In what ways do scholars interpret the 'fitra' (natural disposition) in relation to sexual orientation, and what are the implications for Islamic ethics?",
            options: [
              "Fitra implies all sexual orientations are natural.",
              "Scholars widely interpret 'fitra' to include a natural inclination towards heterosexual relations, considering homosexual acts as a deviation from this divinely created norm, which informs the ethical prohibition.",
              "Fitra is irrelevant to sexual ethics.",
              "It encourages deviation from natural norms."
            ],
            correctAnswer: "Scholars widely interpret 'fitra' to include a natural inclination towards heterosexual relations, considering homosexual acts as a deviation from this divinely created norm, which informs the ethical prohibition.",
            explanation: "The concept of 'fitra' (innate, pure, natural disposition) is foundational in Islamic anthropology. Scholars consistently interpret the 'fitra' in relation to sexuality as an inclination towards male-female pairing for companionship and procreation, as divinely established. Consequently, homosexual acts are viewed as a deviation from this natural human disposition. This understanding forms a significant ethical underpinning for the prohibition of homosexual acts in Islamic law, viewing them as going against the natural order of creation. [Sahih al-Bukhari 5889 (general Hadith on fitra), and classical Tafasir and Fiqh texts applying fitra to sexual norms]"
          },
          {
            question: "Analyze the Quranic verses that command believers to guard their private parts (e.g., Quran 23:5-7, 70:29-31) and how they establish a comprehensive framework for chastity.",
            options: [
              "They apply only to specific situations.",
              "These verses establish a universal obligation for believers to protect their chastity by abstaining from all unlawful sexual relations, including all forms of illicit intercourse and promiscuity, thus defining sexual morality exclusively within the bounds of marriage.",
              "They are suggestions, not commands.",
              "They primarily refer to physical hygiene."
            ],
            correctAnswer: "These verses establish a universal obligation for believers to protect their chastity by abstaining from all unlawful sexual relations, including all forms of illicit intercourse and promiscuity, thus defining sexual morality exclusively within the bounds of marriage.",
            explanation: "Quran 23:5-7 ('And who guard their private parts / Except from their wives or those their right hands possess, for indeed, they are not to be blamed / But whoever seeks beyond that - then those are the transgressors') and 70:29-31 convey a comprehensive command for believers to guard their chastity. This explicitly limits permissible sexual relations to spouses within legal marriage. The phrase 'whoever seeks beyond that - then those are the transgressors' serves as a definitive prohibition against all forms of sexual activity outside of this defined marital framework, encompassing fornication, adultery, and homosexual acts, thereby establishing a strict and clear code for sexual morality. [Quran 23:5-7, 70:29-31, Tafsir al-Qurtubi and Ibn Kathir on these verses]"
          },
          {
            question: "Discuss the concept of 'Haqq al-Nas' (rights of people) and 'Haqq Allah' (rights of Allah) in relation to sins, particularly those that may be considered private vs. public.",
            options: [
              "All sins are only against Allah.",
              "Sins can be against Allah (e.g., not praying) or against people (e.g., theft). Homosexual acts are primarily 'Haqq Allah' as they transgress divine boundaries, but if public, they can also become 'Haqq al-Nas' by harming public morality, requiring both divine forgiveness and potentially communal redress.",
              "There is no distinction between rights of Allah and rights of people.",
              "Private sins are always irrelevant."
            ],
            correctAnswer: "Sins can be against Allah (e.g., not praying) or against people (e.g., theft). Homosexual acts are primarily 'Haqq Allah' as they transgress divine boundaries, but if public, they can also become 'Haqq al-Nas' by harming public morality, requiring both divine forgiveness and potentially communal redress.",
            explanation: "Islamic jurisprudence distinguishes between 'Haqq Allah' (rights of Allah), which are transgressions primarily against divine commands (e.g., shirk, not observing prayer), and 'Haqq al-Nas' (rights of people), which involve harming others (e.g., theft, murder, slander). Homosexual acts are fundamentally a 'Haqq Allah' because they violate divine prohibitions on sexual immorality. However, if these acts are committed openly, they also impinge on 'Haqq al-Nas' by harming public morality, promoting indecency, and potentially undermining societal values, thereby requiring communal intervention (e.g., through 'Amr bil Ma'ruf' or legal action in an Islamic state). Repentance for 'Haqq Allah' is between the individual and God, while 'Haqq al-Nas' often requires seeking forgiveness from the affected party or making amends. [Al-Ghazali, Ihya' 'Ulum al-Din (on rights), various Fiqh texts on categories of sins]"
          },
          {
            question: "How does the Quranic narrative of the punishment of previous nations (e.g., people of Thamud, 'Ad, Lut) serve as a moral lesson for Muslims regarding deviance from divine law?",
            options: [
              "It is simply historical storytelling.",
              "These narratives serve as stern warnings against defying divine commands, particularly against arrogance, injustice, and sexual immorality, emphasizing that such deviance leads to divine wrath and destruction, both for individuals and societies.",
              "It encourages fatalism.",
              "It implies that sins are inconsequential."
            ],
            correctAnswer: "These narratives serve as stern warnings against defying divine commands, particularly against arrogance, injustice, and sexual immorality, emphasizing that such deviance leads to divine wrath and destruction, both for individuals and societies.",
            explanation: "The Quran recounts the stories of numerous past nations (e.g., 'Ad, Thamud, Lut) who were destroyed for their defiance of their prophets and their engagement in widespread corruption and sin. The story of Lut's people is particularly explicit regarding sexual immorality. These narratives serve as powerful moral lessons (*'ibrah*) and warnings for all of humanity, underscoring that defiance of Allah's laws, especially in matters of social justice and sexual morality, can lead to severe divine punishment and societal ruin. They emphasize accountability and the consequences of moral decay. [Quran 7:59-99, 11:50-84, 26:123-175]"
          },
          {
            question: "Discuss the Islamic legal concept of 'zakhrafa' (beautification/adornment) and how it relates to gender expression, particularly for men.",
            options: [
              "Zakhrafa encourages excessive adornment for all.",
              "Zakhrafa, when referring to certain forms of excessive beautification or adornment specific to women, is generally discouraged for men, reinforcing distinct gender expressions within Islamic norms to avoid effeminacy and promote masculine appearance.",
              "It is irrelevant to gender expression.",
              "It promotes gender neutrality."
            ],
            correctAnswer: "Zakhrafa, when referring to certain forms of excessive beautification or adornment specific to women, is generally discouraged for men, reinforcing distinct gender expressions within Islamic norms to avoid effeminacy and promote masculine appearance.",
            explanation: "In Islamic ethics, particularly for men, there is a concept related to avoiding *zakhrafa* (excessive or effeminate adornment/beautification) that is typically associated with women. While cleanliness and appropriate adornment are encouraged for men, *tashabbuh* (imitation) of women's specific forms of beautification (e.g., certain types of jewelry, perfumes, makeup, clothing styles explicitly feminine) is discouraged or forbidden. This reinforces the Islamic emphasis on distinct gender expressions and roles, discouraging effeminacy in men. [Sunan Abi Dawud 4099 (Hadith on men wearing silk and gold), and discussions in Fiqh books on adornment (zinah) and imitation (tashabbuh)]"
          },
          {
            question: "How does Islamic charity ('sadaqah') and social welfare ('zakat') extend to helping individuals in need, irrespective of their personal lifestyle choices, provided they are not engaging in public defiance of Islamic norms?",
            options: [
              "Charity is only for the pious.",
              "Islamic charity and social welfare are broad concepts aimed at helping the needy, poor, and vulnerable. While Islam condemns sinful acts, assistance is generally extended to individuals in need, provided they are not openly promoting or engaging in defiance of Islamic public morality, demonstrating compassion alongside upholding principles.",
              "Charity should be withheld from all sinners.",
              "It applies only to family members."
            ],
            correctAnswer: "Islamic charity and social welfare are broad concepts aimed at helping the needy, poor, and vulnerable. While Islam condemns sinful acts, assistance is generally extended to individuals in need, provided they are not openly promoting or engaging in defiance of Islamic public morality, demonstrating compassion alongside upholding principles.",
            explanation: "Islam strongly emphasizes charity (sadaqah) and social welfare (zakat) as means of supporting the less fortunate and maintaining social justice. The recipients of zakat and general sadaqah are defined by their needs (e.g., the poor, the needy, the indebted), not their personal moral failings, as long as they are not openly defying or promoting immorality that harms the public. This reflects the Islamic emphasis on compassion and human dignity for all, even while maintaining condemnation for sinful acts. [Quran 9:60 (recipients of Zakat), general Hadith on charity and compassion to all creatures (e.g., Sahih Muslim 2244)]"
          },
          {
            question: "Explain the concept of 'al-Wala' wal-Bara'' (Loyalty and Disavowal) and how it applies to Muslim identity in relation to prevailing non-Islamic ideologies concerning sexuality.",
            options: [
              "It means disavowing all non-Muslims.",
              "It means loyalty to Allah and His commands, and disavowal of false deities and ideologies. In the context of sexuality, it means remaining loyal to Islamic sexual ethics and disavowing ideologies that contradict them, without necessarily advocating hatred or aggression towards individuals.",
              "It promotes blind adherence to tradition.",
              "It is an outdated concept of tribalism."
            ],
            correctAnswer: "It means loyalty to Allah and His commands, and disavowal of false deities and ideologies. In the context of sexuality, it means remaining loyal to Islamic sexual ethics and disavowing ideologies that contradict them, without necessarily advocating hatred or aggression towards individuals.",
            explanation: "'Al-Wala' wal-Bara'' is a theological concept meaning loyalty to Allah, His Messenger, and the believers, and disavowal of false gods and their systems. In contemporary contexts, it applies to ideologies that contradict fundamental Islamic tenets. Regarding sexual ethics, it means upholding Islamic principles of marriage and sexuality as divinely ordained, and intellectually and morally disavowing (not necessarily hating the person but rejecting the ideology/action) beliefs or practices (like same-sex marriage or gender fluidity as identities distinct from biological sex) that are seen to contradict clear Islamic teachings. This disavowal is primarily ideological and not a call for aggression or injustice towards individuals. [Quran 58:22, and scholarly discussions on Wala' wal-Bara' in Aqeedah (creed) books]"
          },
          {
            question: "What is the role of 'Tadbir' (planning/management) and 'Hikmah' (wisdom) in addressing challenges related to upholding Islamic sexual ethics in a diverse society?",
            options: [
              "Tadbir means forceful imposition, and Hikmah is irrelevant.",
              "Tadbir involves careful planning and strategic approaches, while Hikmah emphasizes acting with wisdom, good counsel, and foresight in upholding Islamic principles in diverse contexts, avoiding confrontation and prioritizing effective communication.",
              "These are concepts only for personal piety.",
              "They encourage silence on moral issues."
            ],
            correctAnswer: "Tadbir involves careful planning and strategic approaches, while Hikmah emphasizes acting with wisdom, good counsel, and foresight in upholding Islamic principles in diverse contexts, avoiding confrontation and prioritizing effective communication.",
            explanation: "Tadbir (planning) and Hikmah (wisdom) are essential for Muslims navigating challenges related to Islamic sexual ethics in diverse societies. Tadbir involves carefully considering the context, consequences, and best methods for upholding and conveying Islamic principles. Hikmah (as enjoined in Quran 16:125, 'Invite to the way of your Lord with wisdom and good instruction...') implies acting with prudence, compassion, and understanding, prioritizing education and dialogue over harshness or confrontation. This approach allows Muslims to adhere to their faith while engaging respectfully and constructively within society. [Quran 16:125, general Islamic ethics of Dawah (invitation to Islam)]"
          },
          {
            question: "How does the Islamic prohibition on 'muthla' (mutilation/disfigurement) relate to contemporary discussions around certain types of body modifications, including those for gender transition?",
            options: [
              "Muthla permits any body modification.",
              "Muthla generally prohibits severe disfigurement or alteration of the body without a valid Islamic reason (e.g., medical necessity). This principle is often invoked by scholars to consider sex reassignment surgeries (outside of intersex conditions) as prohibited alteration of Allah's creation.",
              "It applies only to ancient punishments.",
              "It is irrelevant to medical procedures."
            ],
            correctAnswer: "Muthla generally prohibits severe disfigurement or alteration of the body without a valid Islamic reason (e.g., medical necessity). This principle is often invoked by scholars to consider sex reassignment surgeries (outside of intersex conditions) as prohibited alteration of Allah's creation.",
            explanation: "Muthla is the act of mutilating or disfiguring a body, which is generally prohibited in Islam, even in warfare or for punishment, unless there is a very specific and justified reason (e.g., medical necessity to save a life). This principle is extended by many contemporary scholars to prohibit sex reassignment surgeries for individuals who are not intersex, viewing them as an unnecessary and forbidden alteration of the body's natural form as created by Allah, aligning with the broader prohibition on 'changing the creation of Allah' (Quran 4:119). [Hadith on prohibition of Muthla (Sahih al-Bukhari 5516), contemporary Fiqh rulings on sex reassignment surgery]"
          },
          {
            question: "What is the Islamic view on marriage for individuals who experience same-sex attraction but choose to adhere to Islamic law by marrying a person of the opposite sex?",
            options: [
              "Such marriages are invalid and sinful.",
              "Such a marriage is valid and encouraged, as it is the only permissible avenue for sexual fulfillment in Islam, and the individual's struggle to adhere to divine law is highly rewarded.",
              "It is considered hypocrisy.",
              "It is a form of 'conversion therapy' that is forbidden."
            ],
            correctAnswer: "Such a marriage is valid and encouraged, as it is the only permissible avenue for sexual fulfillment in Islam, and the individual's struggle to adhere to divine law is highly rewarded.",
            explanation: "For Muslims who experience same-sex attraction but choose to abide by Islamic law, marriage to a person of the opposite sex is the only legitimate and religiously sanctioned path for sexual relations and family formation. Such a marriage is considered valid and encouraged. The individual's struggle to overcome forbidden inclinations and adhere to Allah's commands by choosing a lawful marriage is seen as an act of great piety and is highly rewarded in Islam. It is a manifestation of *jihad an-nafs* and *istiqamah*. [General principles of Nikah, and emphasis on rewards for striving against desires for Allah's sake]"
          },
          {
            question: "Discuss the concept of 'haya' (modesty/shame) as a central virtue in Islam and its comprehensive application to personal conduct, including sexual morality.",
            options: [
              "Haya means shyness and avoiding all social interaction.",
              "Haya is an integral part of faith, encompassing self-respect, moral consciousness, and a sense of shame that prevents one from engaging in inappropriate speech, actions, or appearances, and is foundational to upholding sexual purity and avoiding indecency.",
              "Haya is only for women.",
              "It is an outdated cultural concept."
            ],
            correctAnswer: "Haya is an integral part of faith, encompassing self-respect, moral consciousness, and a sense of shame that prevents one from engaging in inappropriate speech, actions, or appearances, and is foundational to upholding sexual purity and avoiding indecency.",
            explanation: "Haya (modesty, shame, bashfulness) is a cardinal virtue in Islam, described by the Prophet Muhammad (PBUH) as a 'branch of faith' (Sahih al-Bukhari 9). It is a comprehensive concept that influences all aspects of a Muslim's life, including speech, dress, interactions, and particularly sexual morality. It serves as an internal guardian, preventing individuals from engaging in acts or behaviors that are immodest, indecent, or violate divine commands. It underpins the Islamic emphasis on chastity, privacy, and the avoidance of all forms of promiscuity, including homosexual acts. [Sahih al-Bukhari 9, Sahih Muslim 36, and classical texts on Islamic ethics (Akhlaq)]"
          },
          {
            question: "How does the Quranic emphasis on 'Taqwa' (God-consciousness/piety) serve as a protective mechanism against unlawful desires and actions?",
            options: [
              "Taqwa means suppressing all emotions.",
              "Taqwa is the state of being conscious of Allah, fearing His displeasure, and striving to obey His commands. It acts as an inner moral compass and restraint, enabling individuals to resist unlawful desires and abstain from forbidden actions, including those related to sexual immorality.",
              "Taqwa leads to extremism.",
              "It is only for ritual worship."
            ],
            correctAnswer: "Taqwa is the state of being conscious of Allah, fearing His displeasure, and striving to obey His commands. It acts as an inner moral compass and restraint, enabling individuals to resist unlawful desires and abstain from forbidden actions, including those related to sexual immorality.",
            explanation: "Taqwa (God-consciousness, piety, awe of Allah) is repeatedly emphasized in the Quran as the highest virtue and the path to success and salvation. It is an inner spiritual state that motivates a believer to obey Allah's commands and abstain from His prohibitions, out of love, reverence, and fear of His punishment. For individuals facing temptations, Taqwa acts as a powerful internal barrier, enabling them to control unlawful desires and remain steadfast on the straight path, knowing that Allah is Ever-Watching. [Quran 2:2-5, 3:102, 65:2-3]"
          },
          {
            question: "What is the scholarly position on the interpretation of the story of Lut's people as primarily a condemnation of homosexual acts, as opposed to other interpretations (e.g., lack of hospitality, economic injustice)?",
            options: [
              "Scholars primarily focus on their lack of hospitality.",
              "The overwhelming scholarly consensus throughout Islamic history is that the primary and specific transgression leading to the destruction of Lut's people was their engagement in male homosexual acts, as explicitly stated in the Quran, while other sins were secondary.",
              "The interpretations are widely varied, with no clear consensus.",
              "The story is purely allegorical."
            ],
            correctAnswer: "The overwhelming scholarly consensus throughout Islamic history is that the primary and specific transgression leading to the destruction of Lut's people was their engagement in male homosexual acts, as explicitly stated in the Quran, while other sins were secondary.",
            explanation: "While the people of Lut committed other sins like highway robbery and rejecting a prophet, the Quranic verses specifically condemn their unique sexual transgression with strong and explicit language ('fahisha', 'isrâf', 'do you approach males?'). Classical Tafsir (exegesis) works and Fiqh (jurisprudence) across all schools of thought unanimously identify male homosexual acts as the *primary* and defining reason for their divine punishment. Attempts to reinterpret the story as solely about lack of hospitality or other generalized sins are not supported by the vast body of classical Islamic scholarship. [Quran 7:80-84, 11:77-83, 29:28-29, and unanimous interpretation in classical Tafasir such as Al-Tabari, Ibn Kathir, Al-Qurtubi, Al-Razi]"
          },
          {
            question: "How does the concept of 'Ummah Wasat' (Middle Nation/Balanced Community) influence the Muslim approach to moral issues, including those related to sexuality, avoiding extremes?",
            options: [
              "It implies radical positions on all issues.",
              "It encourages a balanced approach, adhering firmly to Islamic principles while avoiding extremism, fanaticism, or excessive laxity, applying wisdom and context in addressing moral challenges.",
              "It means compromising on core beliefs.",
              "It is only relevant to political systems."
            ],
            correctAnswer: "It encourages a balanced approach, adhering firmly to Islamic principles while avoiding extremism, fanaticism, or excessive laxity, applying wisdom and context in addressing moral challenges.",
            explanation: "The Quran describes the Muslim community as 'Ummah Wasat' (a justly balanced nation) (Quran 2:143). This principle encourages moderation and balance in all aspects of life, including moral issues. In addressing matters of sexuality, it means adhering firmly to the clear prohibitions and injunctions of Islam without falling into extremes of harshness, vigilantism, or hatred towards individuals, nor into excessive laxity or unwarranted reinterpretation of foundational texts. It calls for upholding divine law with wisdom, compassion, and justice, and for conveying truth in a dignified manner. [Quran 2:143, and scholarly discussions on moderation in Islam]"
          },
          {
            question: "What is the ethical implication of the Quranic injunction against 'following whims and desires' (ittibaa' al-ahwa') in the context of sexual morality?",
            options: [
              "It means suppressing all desires.",
              "It means prioritizing divine guidance over personal or societal desires that contradict Allah's commands, recognizing that unchecked whims can lead to deviation and corruption.",
              "It is an outdated command.",
              "It only applies to religious leaders."
            ],
            correctAnswer: "It means prioritizing divine guidance over personal or societal desires that contradict Allah's commands, recognizing that unchecked whims can lead to deviation and corruption.",
            explanation: "The Quran repeatedly warns against 'following whims and desires' (e.g., Quran 4:135, 25:43, 45:23). In the context of sexual morality, this injunction is crucial. It means that individual preferences, societal trends, or personal inclinations that contradict the clear prohibitions and guidelines set by Allah must be resisted. Instead, believers are commanded to submit to divine law, understanding that true guidance and well-being come from adhering to Allah's will, not from unchecked desires that can lead to moral corruption and societal breakdown. [Quran 4:135, 25:43, 45:23, and Tafsir of these verses]"
          },
          {
            question: "How does the concept of 'sabr' (patience) and 'shukr' (gratitude) play a role for individuals who experience same-sex attraction and choose to remain chaste in adherence to Islamic teachings?",
            options: [
              "Sabr means succumbing to desires, and Shukr means complaining.",
              "Sabr involves steadfastness in abstaining from forbidden acts despite inclinations, viewing it as a test. Shukr involves gratitude to Allah for giving them the strength to uphold His commands and for the promise of immense reward for their struggle.",
              "These are irrelevant to personal struggles.",
              "They only apply to material blessings."
            ],
            correctAnswer: "Sabr involves steadfastness in abstaining from forbidden acts despite inclinations, viewing it as a test. Shukr involves gratitude to Allah for giving them the strength to uphold His commands and for the promise of immense reward for their struggle.",
            explanation: "For individuals who experience same-sex attraction but strive to live according to Islamic principles, *sabr* (patience and steadfastness) in abstaining from forbidden acts is paramount. This struggle is viewed as a test from Allah, and endurance in it earns immense reward. *Shukr* (gratitude) plays a role in being grateful to Allah for His guidance, for the strength He provides to overcome desires, and for the promise of Paradise for those who patiently strive in His path. Both virtues foster spiritual resilience and inner peace. [Quran 2:153, 3:200 (on Sabr), Quran 14:7 (on Shukr), and general Islamic principles on trials and rewards]"
          },
          {
            question: "What is the understanding of 'ridda' (apostasy) in Islamic law regarding individuals who reject fundamental tenets, including those on marriage and sexual ethics?",
            options: [
              "Ridda applies to any minor disagreement.",
              "Ridda refers to consciously and explicitly renouncing Islam by rejecting a fundamental, established tenet of the religion. Publicly rejecting universally agreed-upon prohibitions like those on homosexuality or the male-female binary of marriage, if done with full knowledge and intent, can fall under this category according to classical Islamic law.",
              "It is a concept that encourages diversity of belief.",
              "Ridda is a solely political concept."
            ],
            correctAnswer: "Ridda refers to consciously and explicitly renouncing Islam by rejecting a fundamental, established tenet of the religion. Publicly rejecting universally agreed-upon prohibitions like those on homosexuality or the male-female binary of marriage, if done with full knowledge and intent, can fall under this category according to classical Islamic law.",
            explanation: "Ridda (apostasy) is the act of renouncing Islam after having accepted it. In Islamic law, it involves rejecting a fundamental, known, and universally agreed-upon tenet of the religion (e.g., belief in Allah, the Prophethood of Muhammad, or clear Quranic prohibitions). While personal inclinations are not ridda, a conscious and public rejection or legalization of prohibitions (like those on homosexuality) that are established by clear texts (nass) and scholarly consensus (ijma') can, according to classical fiqh, be considered an act of disbelief that may lead to apostasy if done with full knowledge and intent, as it rejects a core part of the faith. The legal consequences of ridda are severe in classical Islamic states. [Sahih al-Bukhari 6922 (Hadith on punishment for changing religion), various Fiqh books on Ridda, e.g., Al-Mawardi's *Al-Ahkam as-Sultaniyyah*]"
          },
          {
            question: "How does the Islamic legal principle of 'al-ḍarar yuzāl' (harm must be removed) apply to preventing practices that destabilize society, such as widespread sexual immorality?",
            options: [
              "It means removing all restrictions.",
              "It is a broad principle emphasizing that any form of harm, including moral and social decay caused by illicit practices like widespread sexual immorality, must be prevented or removed to safeguard societal well-being.",
              "It applies only to physical harm.",
              "It is a principle of individualism."
            ],
            correctAnswer: "It is a broad principle emphasizing that any form of harm, including moral and social decay caused by illicit practices like widespread sexual immorality, must be prevented or removed to safeguard societal well-being.",
            explanation: "'Al-ḍarar yuzāl' is a key maxim in Islamic jurisprudence, meaning that harm must be removed. This principle underpins many Islamic laws designed to protect individuals and society from various forms of harm, including moral and social corruption. Widespread sexual immorality, including homosexual acts, is viewed in Islam as a form of moral harm that destabilizes the family unit, corrupts society, and invites divine displeasure. Therefore, laws and communal efforts to prevent and discourage such practices are justified under this principle to preserve public order and well-being. [Al-Qawa'id al-Fiqhiyyah (Maxim: 'Harm must be removed'), and discussions on 'Hifz al-Nafs' and 'Hifz al-Nasl' in Maqasid al-Shari'ah]"
          },
          {
            question: "Discuss the role of 'istighfar' (seeking forgiveness) and 'tawbah' (repentance) as a pathway for individuals who have committed forbidden acts, including those related to homosexuality.",
            options: [
              "These are only for minor sins.",
              "Istighfar and tawbah are open to all Muslims for any sin, including major ones. They offer a sincere path to Allah's forgiveness and purification, emphasizing remorse, cessation of the sin, and a firm resolve not to return to it, providing hope for spiritual renewal.",
              "They are rituals without real effect.",
              "They are irrelevant to past actions."
            ],
            correctAnswer: "Istighfar and tawbah are open to all Muslims for any sin, including major ones. They offer a sincere path to Allah's forgiveness and purification, emphasizing remorse, cessation of the sin, and a firm resolve not to return to it, providing hope for spiritual renewal.",
            explanation: "Istighfar (seeking forgiveness from Allah) and Tawbah (sincere repentance) are cornerstone concepts in Islam, offering a profound pathway for spiritual purification and forgiveness. Allah is described as Al-Ghaffar (The Ever-Forgiving) and At-Tawwab (The Acceptor of Repentance). This applies to all sins, including those related to homosexuality. The conditions for sincere repentance include feeling remorse, immediately ceasing the sinful act, and having a firm intention never to return to it. This provides immense hope and a means for any individual who has transgressed to return to Allah and seek His mercy. [Quran 39:53, 66:8, Sahih Muslim 2703 (Hadith on Allah's pleasure with repentance)]"
          },
          {
            question: "How does the Islamic understanding of 'al-Qada' wal-Qadar' (Divine Decree and Predestination) reconcile with human free will and accountability for actions, including sinful ones?",
            options: [
              "It implies humans have no free will, thus no accountability.",
              "It means Allah has foreknowledge of all events, but humans are given free will to choose their actions, for which they are accountable. This applies to inclinations and actions, meaning one is accountable for choices made despite inclinations.",
              "It is a concept that promotes fatalism.",
              "It denies divine knowledge of human choices."
            ],
            correctAnswer: "It means Allah has foreknowledge of all events, but humans are given free will to choose their actions, for which they are accountable. This applies to inclinations and actions, meaning one is accountable for choices made despite inclinations.",
            explanation: "Al-Qada' wal-Qadar is a fundamental tenet of Islamic belief, signifying Allah's pre-knowledge and decree of all events. However, this does not negate human free will and accountability. Islamic theology teaches that while Allah knows what will happen, He has granted humans the ability to choose their actions. Therefore, individuals are accountable for their choices, including acting upon or abstaining from forbidden desires. This reconciliation ensures both divine sovereignty and human responsibility. [Quran 76:3, 90:10 (on human choice), and scholarly discussions on Qada' and Qadar in Aqeedah books]"
          },
          {
            question: "Discuss the Islamic legal concept of 'al-darurah tukallif' (necessity makes the forbidden permissible) and its strict limitations, particularly in sexual matters.",
            options: [
              "It permits any forbidden act if desired.",
              "This principle allows exceptions to prohibitions only under extreme and genuine duress, such as threat to life or limb. It does not apply to emotional or psychological desires, and specifically does not permit major sexual sins like homosexual acts.",
              "It is a broad license for exceptions.",
              "It applies to minor inconveniences."
            ],
            correctAnswer: "This principle allows exceptions to prohibitions only under extreme and genuine duress, such as threat to life or limb. It does not apply to emotional or psychological desires, and specifically does not permit major sexual sins like homosexual acts.",
            explanation: "The Islamic legal maxim 'al-darurah tukallif' (necessity makes the forbidden permissible) is a precise and limited exception. It applies only when there is an immediate and unavoidable threat to one's life or an essential necessity (e.g., eating pork to avoid starvation). It does *not* extend to fulfilling desires, emotional needs, or avoiding psychological discomfort. Importantly, it has no application in legitimizing major sins like homosexual acts, as their prohibition is absolute and they are not considered a 'necessity' that justifies violating divine law. [Al-Qawa'id al-Fiqhiyyah: 'Necessities make the prohibited permissible, but not beyond the extent of necessity', and general consensus of Fiqh schools]"
          },
          {
            question: "What is the understanding of 'fitna' (trials/temptations) in Islam for individuals, and how does righteous conduct serve as a defense?",
            options: [
              "Fitna means inevitable sin.",
              "Fitna represents tests and temptations that challenge one's faith and morality. Righteous conduct, including adherence to Islamic sexual ethics, patience, and seeking Allah's protection, serves as the primary defense and a means of navigating these trials successfully.",
              "It is an external force only.",
              "It implies giving up on divine commands."
            ],
            correctAnswer: "Fitna represents tests and temptations that challenge one's faith and morality. Righteous conduct, including adherence to Islamic sexual ethics, patience, and seeking Allah's protection, serves as the primary defense and a means of navigating these trials successfully.",
            explanation: "Life in Islam is understood as a continuous series of 'fitna' (trials and temptations) designed to test one's faith and resolve. These can include internal desires and external societal pressures. Righteous conduct (amal salih), which encompasses adherence to all Islamic teachings including sexual ethics, serves as the primary defense against succumbing to fitna. By striving for piety, exercising patience (*sabr*), and constantly seeking Allah's guidance and protection, believers are able to navigate these trials successfully and avoid falling into sin. [Quran 2:155, 29:2-3, 67:2, and general Quranic and Hadith emphasis on righteous deeds and seeking refuge in Allah from fitan]"
          },
    ],
    intermediate: [
      // Copy the first 10 questions from easy level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
};

// Initialize intermediate level with first 10 easy questions if empty
if (!lgbtqCategory.levels.intermediate || lgbtqCategory.levels.intermediate.length === 0) {
  lgbtqCategory.levels.intermediate = [...lgbtqCategory.levels.easy.slice(0, 10)];
}

export default lgbtqCategory;