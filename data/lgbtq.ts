import type { QuizCategory } from "@/types/quiz";

const lgbtqCategory: QuizCategory = {
  id: "lgbtq",
  title: "Islam and LGBTQIA+",
  description: "Islamic perspective of LGBTQIA+",
  icon: "",
  levels: {
    easy: [
      {
              question: "Which Surah in the Quran mentions the story of the people of Lut (Lot)?",
              options: [
                "Surah Al-Baqarah",
                "Surah An-Nisa",
                "Surah Hud",
                "Surah Al-Ikhlas"
              ],
              correctAnswer: "Surah Hud",
              explanation: "The story of the people of Lut is narrated in several surahs, including Surah Hud (11:77-83), Surah Al-A'raf (7:80-84), and Surah An-Naml (27:54-58). These narrations describe the condemnation of their actions.",
              references: "Quran 11:77-83"
            },
            {
              question: "In the story of Lut, what was the primary sin for which his people were condemned?",
              options: [
                "Worshipping idols",
                "Stealing from travelers",
                "Committing male-on-male sexual acts",
                "Disrespecting their elders"
              ],
              correctAnswer: "Committing male-on-male sexual acts",
              explanation: "The Quran mentions that the people of Lut were condemned for engaging in indecent acts, specifically approaching men with desire instead of women, which was a perversion of the natural order.",
              references: "Quran 27:55"
            },
            {
              question: "The term 'liwat' in Islamic jurisprudence is commonly used to refer to what?",
              options: [
                "Lying",
                "The act of sodomy, specifically male-on-male sexual acts",
                "Stealing",
                "Adultery"
              ],
              correctAnswer: "The act of sodomy, specifically male-on-male sexual acts",
              explanation: "The term 'liwat' is derived from the name of Prophet Lut and is used in Islamic legal discourse to refer to the homosexual act of sodomy, based on the story of his people.",
              references: "Al-Mawsu’ah Al-Fiqhiyyah Al-Kuwaitiyyah"
            },
            {
              question: "According to the Quran, how did the people of Lut react when Prophet Lut advised them to abandon their practices?",
              options: [
                "They listened and repented",
                "They ignored him but did not harm him",
                "They mocked him and threatened to expel him and his family",
                "They asked him to leave their city peacefully"
              ],
              correctAnswer: "They mocked him and threatened to expel him and his family",
              explanation: "The Quran states that the people of Lut responded to his call for righteousness by mocking him and threatening to expel him and his followers from the city.",
              references: "Quran 27:56"
            },
            {
              question: "What is the Islamic legal term for illicit sexual relations outside of marriage?",
              options: [
                "Zina",
                "Riba",
                "Gheebah",
                "Shirk"
              ],
              correctAnswer: "Zina",
              explanation: "Zina is a term in Islamic jurisprudence referring to all sexual acts outside of a valid marriage, and its prohibition is a foundational aspect of Islamic law.",
              references: "Quran 17:32"
            },
            {
              question: "In the Islamic tradition, the concept of gender is generally understood to be what?",
              options: [
                "A social construct",
                "Binary, male and female, as a sign of Allah's creation",
                "Fluid and interchangeable",
                "Irrelevant to a person's identity"
              ],
              correctAnswer: "Binary, male and female, as a sign of Allah's creation",
              explanation: "The Quran mentions the creation of male and female as a sign of Allah's power and wisdom, indicating a binary understanding of gender.",
              references: "Quran 49:13, 53:45"
            },
            {
              question: "What term is used in hadith to describe men who imitate women?",
              options: [
                "Mukhannathun",
                "Mutashabihun",
                "Mubtada'un",
                "Munaafiqun"
              ],
              correctAnswer: "Mukhannathun",
              explanation: "The term 'mukhannathun' refers to men who imitate women in their mannerisms, speech, and appearance. Several hadiths mention a prohibition against this, and also against women who imitate men.",
              references: "Sahih al-Bukhari, Book of Dress, Hadith 5885"
            },
            {
              question: "The Quran mentions the creation of spouses (azwaj) for what purpose?",
              options: [
                "To gain wealth",
                "To live in discord",
                "To find tranquility and mercy",
                "To compete with each other"
              ],
              correctAnswer: "To find tranquility and mercy",
              explanation: "The Quran says, 'And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.' This verse is foundational to the Islamic understanding of marriage.",
              references: "Quran 30:21"
            },
            {
              question: "What is the general Islamic ruling on changing one's gender, as a matter of jurisprudence?",
              options: [
                "It is encouraged for personal happiness",
                "It is considered permissible if a doctor recommends it",
                "It is generally prohibited as it interferes with Allah's creation",
                "There is no consensus, and it is a matter of personal choice"
              ],
              correctAnswer: "It is generally prohibited as it interferes with Allah's creation",
              explanation: "Islamic scholars generally hold that gender reassignment surgery is prohibited, as it is seen as an alteration of Allah’s creation. The exception would be for intersex individuals (khuntha) to correct their biological sex.",
              references: "See Tafsir of Quran 4:119 regarding changing the creation of Allah; Fatwas from Al-Azhar"
            },
            {
              question: "Which term is used for individuals who are born with ambiguous genitalia, having both male and female characteristics?",
              options: [
                "Mutashabih",
                "Mukhannath",
                "Khuntha",
                "Mujannas"
              ],
              correctAnswer: "Khuntha",
              explanation: "In Islamic jurisprudence, 'khuntha' refers to an intersex person. There are specific rulings concerning their identity and rights, and a distinction is made between a person born intersex and a person seeking to change their gender.",
              references: "Fiqh literature on Khuntha"
            },
            {
              question: "The prohibition of 'Zina' (fornication and adultery) in Islam is intended to protect what?",
              options: [
                "The economic stability of a society",
                "The institution of family and lineage",
                "The political power of a state",
                "The freedom of personal choice"
              ],
              correctAnswer: "The institution of family and lineage",
              explanation: "The prohibition of Zina is primarily to preserve the sanctity of the family unit, the clarity of lineage, and the moral fabric of society. Marriage is seen as the only valid framework for sexual relations.",
              references: "Quran 17:32; Tafsir of Ibn Kathir"
            },
            {
              question: "What is the general Islamic stance on showing compassion and kindness to all people, regardless of their background?",
              options: [
                "It is only for Muslims",
                "It is a fundamental principle of Islam",
                "It is discouraged if they are not righteous",
                "It is only for one's family"
              ],
              correctAnswer: "It is a fundamental principle of Islam",
              explanation: "The Prophet Muhammad (PBUH) was described as a 'mercy to the worlds' and compassion for all of Allah’s creation is a core Islamic teaching, which includes treating all individuals with dignity and respect.",
              references: "Quran 21:107; Hadith on being kind to all of Allah's creation"
            },
            {
              question: "According to the Quran, what is the role of Prophet Lut's wife in his story?",
              options: [
                "She was a devout believer",
                "She was a compassionate helper to her husband",
                "She was a supporter of her people's actions",
                "She was neutral and did not take a side"
              ],
              correctAnswer: "She was a supporter of her people's actions",
              explanation: "The Quran mentions that Prophet Lut's wife was among those who were destroyed because she was unfaithful and sided with her people in their perversion.",
              references: "Quran 66:10"
            },
            {
              question: "The story of the people of Lut is mentioned in the Quran as a warning against what?",
              options: [
                "Disobedience to parents",
                "Consuming alcohol",
                "Rebellion against Allah's laws and the natural order of creation",
                "Accumulating wealth unjustly"
              ],
              correctAnswer: "Rebellion against Allah's laws and the natural order of creation",
              explanation: "The story serves as a clear example of the consequences of rejecting Allah's commands and engaging in acts that are contrary to the natural purpose of creation.",
              references: "Quran 29:34"
            },
            {
              question: "What is the primary purpose of marriage in Islam?",
              options: [
                "For political alliances",
                "For procreation and emotional companionship",
                "To gain social status",
                "To increase one's wealth"
              ],
              correctAnswer: "For procreation and emotional companionship",
              explanation: "The Quran highlights marriage as a way to find peace, affection, and mercy, and to continue the human lineage through lawful means.",
              references: "Quran 30:21"
            },
            {
              question: "What is a general principle in Islam regarding a person's private life and sins?",
              options: [
                "They should be publicly exposed",
                "It is obligatory to spy on people to discover their sins",
                "A person's private sins should not be exposed or gossiped about",
                "All sins must be reported to the authorities"
              ],
              correctAnswer: "A person's private sins should not be exposed or gossiped about",
              explanation: "Islam places a strong emphasis on protecting the privacy and honor of individuals. The Prophet (PBUH) taught that whoever conceals the fault of a Muslim, Allah will conceal his fault on the Day of Judgment.",
              references: "Sahih Muslim, Hadith 2590"
            },
            {
              question: "What is the concept of fitrah (natural disposition) in Islam?",
              options: [
                "A person's social status",
                "The inherent state of purity and innate inclination towards Islam with which all people are born",
                "A person's financial situation",
                "A person's intellectual capacity"
              ],
              correctAnswer: "The inherent state of purity and innate inclination towards Islam with which all people are born",
              explanation: "The Prophet Muhammad (PBUH) said, 'Every child is born upon the fitrah, but his parents make him a Jew, a Christian, or a Magian.' This concept is used in Islamic discourse to explain the natural inclination towards certain values, including marriage between a man and a woman.",
              references: "Sahih al-Bukhari, Hadith 1385"
            },
            {
              question: "According to the Quran, what is the fate of those who repent for their sins?",
              options: [
                "They will be punished regardless",
                "Their repentance is not accepted",
                "Allah is forgiving and accepts their repentance",
                "They must be publicly shamed"
              ],
              correctAnswer: "Allah is forgiving and accepts their repentance",
              explanation: "The Quran emphasizes Allah's attributes of being Most Merciful (Ar-Rahman) and Oft-Forgiving (Al-Ghaffar), and encourages believers to turn to Him in sincere repentance for all sins.",
              references: "Quran 39:53"
            },
            {
              question: "What is the Islamic perspective on gender roles and responsibilities in marriage?",
              options: [
                "They are identical for both husband and wife",
                "They are distinct but complementary",
                "They are determined solely by social norms",
                "The wife is solely responsible for all household duties"
              ],
              correctAnswer: "They are distinct but complementary",
              explanation: "The Quran describes men as protectors and maintainers of women, while women are described as guardians of the household and their husbands' secrets, indicating a complementary partnership.",
              references: "Quran 4:34"
            },
            {
              question: "In the story of Lut, what was the reason for the punishment that befell his people?",
              options: [
                "A natural disaster",
                "A plague that spread among them",
                "It was a divine punishment for their transgression",
                "They were conquered by a stronger army"
              ],
              correctAnswer: "It was a divine punishment for their transgression",
              explanation: "The Quran clearly states that the punishment was a direct consequence of their rejection of Prophet Lut's message and their indecent acts, sent by Allah.",
              references: "Quran 26:173"
            },
            {
              question: "According to the Quran, how is the act of sexual intimacy between a husband and wife described?",
              options: [
                "As a necessary evil",
                "As a source of spiritual and emotional peace",
                "As a purely biological function",
                "As something to be avoided"
              ],
              correctAnswer: "As a source of spiritual and emotional peace",
              explanation: "The Quran describes the marital relationship as a source of mutual affection, mercy, and tranquility, which includes the physical and emotional intimacy between spouses.",
              references: "Quran 30:21"
            },
            {
              question: "What is the primary reason why Islamic law prohibits marriage between individuals of the same gender?",
              options: [
                "Because it is a recent social development",
                "Because it goes against the purposes of marriage in Islam, such as procreation",
                "Because it causes economic instability",
                "Because it is not a part of any other religion"
              ],
              correctAnswer: "Because it goes against the purposes of marriage in Islam, such as procreation",
              explanation: "Islamic legal theory holds that marriage is a divine institution designed for the continuation of humanity through procreation and for the companionship of a man and a woman. Same-sex unions do not fulfill these primary purposes.",
              references: "Fiqh literature on marriage (Nikah)"
            },
            {
              question: "In the story of Lut, which phrase is used by his people to describe their actions?",
              options: [
                "It is a new religion",
                "It is a necessity",
                "It is a custom of our fathers",
                "It is the way we enjoy ourselves"
              ],
              correctAnswer: "It is the way we enjoy ourselves",
              explanation: "The Quran describes the people of Lut as having a 'lust' that was directed towards men, indicating that their actions were driven by desire, which they considered to be a form of enjoyment.",
              references: "Quran 7:81"
            },
            {
              question: "What is the general Islamic teaching on the responsibility of a ruler or authority?",
              options: [
                "To punish all wrongdoers publicly",
                "To enforce Islamic law and maintain order",
                "To ignore all social issues",
                "To allow all citizens to do as they please"
              ],
              correctAnswer: "To enforce Islamic law and maintain order",
              explanation: "In Islam, a ruler's primary duty is to govern justly, uphold the law of Allah, and protect the moral and social well-being of the community, which includes addressing sins that become widespread.",
              references: "Quran 4:58-59"
            },
            {
              question: "What is the concept of 'tawbah' (repentance) in Islam?",
              options: [
                "A single act of asking for forgiveness",
                "A sincere and permanent turning away from sin",
                "A ritual performed once a year",
                "An act only for major sins"
              ],
              correctAnswer: "A sincere and permanent turning away from sin",
              explanation: "Tawbah involves feeling remorse, leaving the sin, and having a firm intention not to return to it. It is a continuous process for believers and Allah has promised to forgive those who sincerely repent.",
              references: "Quran 66:8"
            },
            {
              question: "In Islamic law, what is the status of the 'khuntha mushkil' (intersex person with ambiguous gender)?",
              options: [
                "They are considered to be of a third gender",
                "They are treated as male in all matters",
                "They are treated as female in all matters",
                "Their gender is determined based on certain physical characteristics and legal procedures"
              ],
              correctAnswer: "Their gender is determined based on certain physical characteristics and legal procedures",
              explanation: "Islamic jurisprudence has a detailed body of law concerning intersex individuals, with a focus on determining their predominant gender based on physical signs to establish their legal rights and obligations, such as inheritance and marriage.",
              references: "Fiqh literature on inheritance and gender"
            },
            {
              question: "What is the primary role of the institution of marriage in Islam?",
              options: [
                "To fulfill carnal desires",
                "To establish a legal and social framework for procreation and family life",
                "To gain wealth and status",
                "To restrict personal freedoms"
              ],
              correctAnswer: "To establish a legal and social framework for procreation and family life",
              explanation: "Marriage is not merely a contract but a sacred institution in Islam that provides a lawful context for a man and a woman to build a family and a foundation for society.",
              references: "Quran 4:1"
            },
            {
              question: "According to Islamic teachings, what is the proper form of attraction and love between two people?",
              options: [
                "Any form of attraction is valid",
                "Love and attraction should be directed towards a spouse of the opposite gender within a marital framework",
                "Love and attraction are irrelevant in Islam",
                "Love is only for Allah and not for people"
              ],
              correctAnswer: "Love and attraction should be directed towards a spouse of the opposite gender within a marital framework",
              explanation: "The Quran and Sunnah emphasize that romantic love and attraction, which are natural human emotions, are sanctified and protected within the institution of marriage between a man and a woman.",
              references: "Quran 30:21"
            },
            {
              question: "What is the general Islamic position on gender identity, as distinct from biological sex?",
              options: [
                "Gender identity is a matter of personal feeling",
                "There is a strict adherence to biological sex as the basis for legal and social gender",
                "Gender identity can be chosen by the individual",
                "There are no clear rulings on this issue"
              ],
              correctAnswer: "There is a strict adherence to biological sex as the basis for legal and social gender",
              explanation: "Islamic law and theology generally do not recognize a distinction between biological sex and gender identity. A person’s legal and social gender is determined by their biological sex at birth, with the exception of intersex individuals.",
              references: "Islamic Fiqh Council resolutions"
            },
            {
              question: "What is the Islamic teaching on the responsibility of a believer towards a person struggling with sin?",
              options: [
                "To ostracize them completely",
                "To offer them guidance with wisdom and kindness",
                "To ignore them and their struggles",
                "To expose their sins to others"
              ],
              correctAnswer: "To offer them guidance with wisdom and kindness",
              explanation: "The Quran instructs believers to invite to the way of their Lord with wisdom and good counsel. It also emphasizes the importance of not judging others, as only Allah knows the true state of a person's heart.",
              references: "Quran 16:125"
            },
            {
              question: "What is the meaning of the Quranic term 'al-Fahsha'?",
              options: [
                "A type of food",
                "An act of charity",
                "Indecency or lewdness",
                "A form of prayer"
              ],
              correctAnswer: "Indecency or lewdness",
              explanation: "The Quran uses 'al-Fahsha' to refer to a variety of immoral and indecent acts, including those committed by the people of Lut. It is a broad term for actions that are considered morally reprehensible.",
              references: "Quran 7:80, 27:54"
            },
            {
              question: "The prohibition of 'Tashabbuh' (imitation of the opposite sex) is mentioned in which source of Islamic law?",
              options: [
                "The Quran",
                "The Sunnah",
                "The Ijma (consensus of scholars)",
                "All of the above"
              ],
              correctAnswer: "The Sunnah",
              explanation: "The prohibition of men imitating women and vice versa is explicitly mentioned in several authentic hadith of the Prophet Muhammad (PBUH).",
              references: "Sahih al-Bukhari, Hadith 5885"
            },
            {
              question: "In the story of Lut, who was saved from the divine punishment?",
              options: [
                "Prophet Lut and his entire family",
                "Only Prophet Lut",
                "Prophet Lut and his family, except for his wife",
                "No one was saved"
              ],
              correctAnswer: "Prophet Lut and his family, except for his wife",
              explanation: "The Quran states that Allah saved Prophet Lut and his family from the destruction, but his wife was among those who were condemned.",
              references: "Quran 27:57"
            },
            {
              question: "What is the Islamic teaching on a person's inner thoughts and feelings?",
              options: [
                "They are all considered sins",
                "They will be punished if not acted upon",
                "They are not considered sins unless they are acted upon or spoken about",
                "They are irrelevant"
              ],
              correctAnswer: "They are not considered sins unless they are acted upon or spoken about",
              explanation: "A well-known hadith states that Allah has forgiven my Ummah for what crosses their minds so long as they do not act on it or speak of it. This highlights the importance of actions over passing thoughts.",
              references: "Sahih al-Bukhari, Hadith 5269"
            },
            {
              question: "According to Islamic ethics, what is the responsibility of a person with same-sex attraction?",
              options: [
                "To act on those attractions",
                "To suppress those desires and seek a way of life in line with Islamic teachings",
                "To leave Islam",
                "To pretend the attractions do not exist"
              ],
              correctAnswer: "To suppress those desires and seek a way of life in line with Islamic teachings",
              explanation: "Islamic teachings emphasize that while a person may have involuntary feelings or attractions, they are accountable for their actions and choices. The focus is on abstaining from prohibited acts and striving for righteousness, a concept that applies to all forms of temptation.",
              references: "General principles of sin and repentance in Islam"
            },
            {
              question: "The story of Lut is often used in Islamic discourse to teach about what?",
              options: [
                "The importance of social gatherings",
                "The consequences of rejecting a Prophet's message and divine law",
                "The need for strong military defense",
                "The value of architecture"
              ],
              correctAnswer: "The consequences of rejecting a Prophet's message and divine law",
              explanation: "The story of Lut is a key narrative in the Quran used to warn against moral depravity, disobedience to Allah's messengers, and the divine consequences of widespread sin.",
              references: "Quran 29:34-35"
            },
            {
              question: "What is the concept of 'Haya' in Islam?",
              options: [
                "Pride and arrogance",
                "Modesty, shyness, and a sense of shame before Allah",
                "Physical strength",
                "Intellectual prowess"
              ],
              correctAnswer: "Modesty, shyness, and a sense of shame before Allah",
              explanation: "Haya is a key virtue in Islam, described by the Prophet (PBUH) as a branch of faith. It is an internal sense of modesty and shame that restrains a person from committing indecent acts.",
              references: "Sahih al-Bukhari, Hadith 24"
            },
            {
              question: "What is the Islamic legal principle of 'al-daroorat tubeeh al-mahthoorat'?",
              options: [
                "The forbidden is always forbidden",
                "Necessity makes the unlawful permissible",
                "All things are permissible unless prohibited",
                "The unlawful is always necessary"
              ],
              correctAnswer: "Necessity makes the unlawful permissible",
              explanation: "This principle is used in Islamic jurisprudence to allow for exceptions to prohibitions in cases of extreme necessity or duress. However, it is not used to justify actions that are clearly and absolutely forbidden in the Quran and Sunnah.",
              references: "Islamic Legal Maxims (al-Qawa'id al-Fiqhiyyah)"
            },
            {
              question: "What does the Quran say about the nature of Allah's creation?",
              options: [
                "It is random and without order",
                "It is perfected and in a balance",
                "It is full of errors and flaws",
                "It is constantly changing to fit human desires"
              ],
              correctAnswer: "It is perfected and in a balance",
              explanation: "The Quran frequently refers to the perfect and balanced nature of Allah's creation as a sign for those who reflect. This concept is used by scholars to argue against deliberate changes to one's natural state.",
              references: "Quran 67:3"
            },
            {
              question: "The story of Prophet Yusuf (Joseph) is sometimes referenced in discussions about homosexuality. Why?",
              options: [
                "His brothers were condemned for it",
                "He was attracted to another man",
                "His story highlights the strength of resisting temptation, specifically illicit desires",
                "He had multiple wives"
              ],
              correctAnswer: "His story highlights the strength of resisting temptation, specifically illicit desires",
              explanation: "While the story of Yusuf (AS) is not directly about homosexuality, it serves as a powerful example of resisting intense temptation and unlawful sexual desire, as he resisted the advances of the wife of the noble of Egypt.",
              references: "Quran 12:23-24"
            },
            {
              question: "What is the broader Islamic purpose of all prohibitions (haram)?",
              options: [
                "To make life difficult for believers",
                "To establish a legal system and protect human welfare",
                "To test people's loyalty to the state",
                "To demonstrate a person's intelligence"
              ],
              correctAnswer: "To establish a legal system and protect human welfare",
              explanation: "Islamic law, or Sharia, is based on the principle of 'maslahah' (public interest). The prohibitions are believed to be for the protection of five core values: religion, life, intellect, lineage, and property.",
              references: "General principles of Maqasid al-Shari'ah (Objectives of Islamic Law)"
            },
            {
              question: "How does Islam view the concept of love and relationships outside of marriage?",
              options: [
                "They are encouraged as a form of social bonding",
                "They are seen as a natural precursor to marriage",
                "Any form of intimate relationship outside of marriage is forbidden",
                "Love is not a concept in Islam"
              ],
              correctAnswer: "Any form of intimate relationship outside of marriage is forbidden",
              explanation: "Islam provides the institution of marriage as the sole framework for sexual and intimate relationships. All other forms are considered unlawful (haram) and are viewed as undermining the family unit.",
              references: "Quran 17:32"
            },
            {
              question: "In the story of Lut, the angels appeared in what form?",
              options: [
                "As birds",
                "As beautiful young men",
                "As old, wise men",
                "As children"
              ],
              correctAnswer: "As beautiful young men",
              explanation: "The Quran mentions that the angels who came to Lut appeared as young men, which caused the people of the city to desire them, thus sealing their fate.",
              references: "Quran 11:78"
            },
            {
              question: "What is the general Islamic position on intersex individuals seeking surgery?",
              options: [
                "It is forbidden in all cases",
                "It is permissible to correct the biological gender to one that is predominant",
                "It is mandatory for all intersex people",
                "It is only allowed for medical reasons that have no religious basis"
              ],
              correctAnswer: "It is permissible to correct the biological gender to one that is predominant",
              explanation: "Scholars have differentiated between gender-affirming surgery for intersex individuals (khuntha), which is permitted to establish their natural sex, and for transgender individuals, which is generally considered an impermissible alteration of creation.",
              references: "Al-Mawsu'ah Al-Fiqhiyyah Al-Kuwaitiyyah"
            },
            {
              question: "Which term is used for a man who is effeminate in his mannerisms?",
              options: [
                "Dayaath",
                "Mukhannath",
                "Murtadd",
                "Zaani"
              ],
              correctAnswer: "Mukhannath",
              explanation: "The term 'mukhannath' has a specific meaning in the Sunnah and refers to men who act like women. This is a behavior that was explicitly condemned by the Prophet (PBUH).",
              references: "Sahih al-Bukhari, Hadith 5886"
            }
    ],
    advanced: [
      {
        question: "Which of the following is not a primary source for the prohibition of homosexuality in Islam?",
        options: [
          "The story of the people of Lut in the Quran",
          "Hadith of the Prophet Muhammad",
          "The story of Prophet Yusuf's brothers",
          "Consensus of classical scholars (Ijma')"
        ],
        correctAnswer: "The story of Prophet Yusuf's brothers",
        explanation: "The story of Prophet Yusuf's brothers is not related to the prohibition of homosexuality. The primary sources for this prohibition are the Quranic accounts of the people of Lut, the authentic Sunnah, and the consensus of Islamic jurists throughout history.",
        references: "Quran 12:7-101; Quran 7:80-84; Sahih al-Bukhari 5885"
      },
      {
        question: "According to classical Islamic jurisprudence, what is the legal category of the act of 'liwat'?",
        options: [
          "It is considered a minor sin (saghira)",
          "It is considered one of the major sins (kabair)",
          "It is a recommended act (mustahab)",
          "It is a permissible act (mubah)"
        ],
        correctAnswer: "It is considered one of the major sins (kabair)",
        explanation: "Islamic scholars unanimously classify the act of sodomy ('liwat') as one of the major sins (kabair) based on the severe condemnation in the Quran and the punishments mentioned in some narrations.",
        references: "Ibn Hajar al-Haytami, Al-Zawaajir 'an Iqtiraaf al-Kaba'ir"
      },
      {
        question: "Which of the following is a primary legal text (fiqh) that discusses the rules and categories of intersex individuals (khuntha)?",
        options: [
          "Fath al-Bari",
          "Al-Mughni",
          "Riyad as-Salihin",
          "Al-Ihya 'Ulum al-Din"
        ],
        correctAnswer: "Al-Mughni",
        explanation: "Al-Mughni by Ibn Qudamah is a comprehensive Hanbali fiqh book that discusses the legal rulings pertaining to intersex individuals in great detail, covering issues like inheritance, prayer, and marriage.",
        references: "Al-Mughni by Ibn Qudamah"
      },
      {
        question: "In the context of the story of Lut, the Quran mentions the 'fiqh' of the people of Lut. What does 'fiqh' mean in this context?",
        options: [
          "Their understanding of Islamic law",
          "Their perverted act, as 'fiqh' can also mean a wicked or immoral act in some contexts",
          "Their political system",
          "Their economic system"
        ],
        correctAnswer: "Their perverted act, as 'fiqh' can also mean a wicked or immoral act in some contexts",
        explanation: "The term 'fiqh' in the verse (27:54) is used to describe the nature of their perverse and immoral actions, indicating the extent of their sin.",
        references: "Quran 27:54; Tafsir al-Tabari"
      },
      {
        question: "According to tafsir, why did the people of Lut reject his message, even though he was a prophet?",
        options: [
          "They did not understand his language",
          "They were too busy with business",
          "Their desires had overpowered their reason and natural inclination",
          "They were a peaceful people who disliked conflict"
        ],
        correctAnswer: "Their desires had overpowered their reason and natural inclination",
        explanation: "Commentators on the Quran (mufassirun) explain that the people of Lut had become so entrenched in their perverted desires that they were unable to accept the clear message of a prophet, and their natural human disposition (fitrah) had been corrupted.",
        references: "Tafsir of Ibn Kathir on Quran 29:28-29"
      },
      {
        question: "What is the scholarly consensus (ijma) on the punishment for homosexual acts in Islam?",
        options: [
          "There is no punishment",
          "The punishment is a fine",
          "The punishment is the same as for Zina, but there is no consensus on its precise nature",
          "There is no punishment in this life, only in the hereafter"
        ],
        correctAnswer: "The punishment is the same as for Zina, but there is no consensus on its precise nature",
        explanation: "While there is a consensus among classical scholars that homosexual acts are a major sin requiring a severe punishment, there are different views on the specific form of that punishment based on varying interpretations of prophetic narrations.",
        references: "Fiqh literature on Hudud penalties; Al-Mawsu’ah Al-Fiqhiyyah Al-Kuwaitiyyah"
      },
      {
        question: "How does the hadith tradition distinguish between a 'mukhannath' (effeminate man) who is naturally effeminate versus one who does it intentionally?",
        options: [
          "Both are punished equally",
          "The one who does it intentionally is condemned, while the one who is naturally effeminate is not blamed, but should be advised to make an effort to change",
          "Both are considered a sin",
          "There is no distinction made"
        ],
        correctAnswer: "The one who does it intentionally is condemned, while the one who is naturally effeminate is not blamed, but should be advised to make an effort to change",
        explanation: "Scholars distinguish between a natural disposition, which is not sinful in itself, and a deliberate imitation of the opposite sex. The latter is condemned, while the former is a matter of seeking spiritual and behavioral rectification.",
        references: "Ibn Hajar al-'Asqalani, Fath al-Bari"
      },
      {
        question: "What is the concept of 'Ibn al-Sabil' (the traveler) in the context of the people of Lut's actions?",
        options: [
          "A prophet who traveled to their city",
          "A specific person who was spared",
          "The people of Lut would harm and assault travelers, which was another of their sins",
          "A group of people who aided Prophet Lut"
        ],
        correctAnswer: "The people of Lut would harm and assault travelers, which was another of their sins",
        explanation: "The Quran mentions that the people of Lut would ambush and assault travelers. This was one of the many sins that accumulated, leading to their destruction.",
        references: "Quran 29:29; Tafsir al-Tabari"
      },
      {
        question: "What is the Islamic legal principle concerning a person's physical appearance and clothing?",
        options: [
          "There are no rules, it is a personal choice",
          "It is a social matter and not a religious one",
          "Men should not imitate women, and women should not imitate men",
          "Everyone must dress the same way"
        ],
        correctAnswer: "Men should not imitate women, and women should not imitate men",
        explanation: "The prohibition of 'tashabbuh' (imitation) is a key principle in Islamic jurisprudence, found in the Sunnah. This applies to clothing, mannerisms, and other outward appearances that are specific to the opposite gender.",
        references: "Sahih al-Bukhari, Hadith 5885"
      },
      {
        question: "In the Quran, what phrase is used to describe the people of Lut's actions?",
        options: [
          "A simple mistake",
          "A new invention",
          "A great transgression beyond all bounds",
          "An act of passion"
        ],
        correctAnswer: "A great transgression beyond all bounds",
        explanation: "The Quran describes their actions as 'al-fahsha' (indecency) and mentions that they were 'transgressing the limits' set by Allah, signifying the severity of their sin.",
        references: "Quran 7:80-81"
      },
      {
        question: "The prohibition of 'tahawwul al-jinsi' (gender reassignment) is primarily based on which Islamic legal source?",
        options: [
          "The Quran's condemnation of changing Allah's creation",
          "The consensus of contemporary scholars",
          "A specific hadith about it",
          "It is a modern ruling with no classical basis"
        ],
        correctAnswer: "The Quran's condemnation of changing Allah's creation",
        explanation: "The prohibition of gender reassignment is rooted in the Quranic verse that quotes Satan as saying, 'I will surely command them so they will change the creation of Allah.' This verse is used as a basis for the prohibition of altering one's natural state.",
        references: "Quran 4:119; Fatwas of Islamic Fiqh Academies"
      },
      {
        question: "How do Islamic scholars distinguish between a 'khuntha' (intersex) and a 'mukhannath' (effeminate man)?",
        options: [
          "There is no distinction, they are the same",
          "Khuntha is a biological condition, while mukhannath is a behavior",
          "Khuntha is a type of mukhannath",
          "Mukhannath is a type of khuntha"
        ],
        correctAnswer: "Khuntha is a biological condition, while mukhannath is a behavior",
        explanation: "Khuntha is a term for a person born with ambiguous sexual organs. Mukhannath, on the other hand, is a behavioral term for a man who deliberately imitates women in appearance and mannerisms. The legal rulings for each are different.",
        references: "Al-Mawsu’ah Al-Fiqhiyyah Al-Kuwaitiyyah"
      },
      {
        question: "The legal responsibility and rights of a person in Islam are based on what?",
        options: [
          "Their self-declared gender identity",
          "Their emotional state",
          "Their biological sex, with specific rulings for intersex individuals",
          "Their wealth and social status"
        ],
        correctAnswer: "Their biological sex, with specific rulings for intersex individuals",
        explanation: "Islamic legal obligations (takleef) and rights (huquq), such as those related to prayer, dress, inheritance, and marriage, are determined by one's biological sex. Intersex individuals have specific legal procedures to determine their predominant sex.",
        references: "Fiqh literature on legal capacity and rights"
      },
      {
        question: "The Quran uses the story of the people of Lut as an example of a specific type of societal decline. What is it?",
        options: [
          "Economic greed",
          "Moral and social collapse caused by the rejection of natural order",
          "Military weakness",
          "Intellectual laziness"
        ],
        correctAnswer: "Moral and social collapse caused by the rejection of natural order",
        explanation: "The story is presented in the Quran as a powerful lesson on how a society's rejection of the divine moral order, particularly the natural pairing of male and female, leads to its complete destruction.",
        references: "Quran 26:165-166"
      },
      {
        question: "What is the position of some contemporary Islamic scholars on homosexual feelings versus homosexual acts?",
        options: [
          "Both feelings and acts are sinful",
          "Neither are sinful",
          "Feelings are not a sin, but acting upon them is forbidden",
          "Only feelings are sinful"
        ],
        correctAnswer: "Feelings are not a sin, but acting upon them is forbidden",
        explanation: "Many scholars have distinguished between involuntary feelings or attractions and the deliberate choice to act on those feelings. They argue that a person is not held accountable for their thoughts or attractions but for their chosen actions.",
        references: "Fatwas by contemporary scholars like Shaykh al-Qaradawi"
      },
      {
        question: "Which of the following phrases from the Quran is often cited in discussions on gender and creation?",
        options: [
          "\"He created from water a human being\"",
          "\"He created you from a single soul, and from it He created its mate\"",
          "\"He created the heavens and the earth\"",
          "\"He created the sun and the moon\""
        ],
        correctAnswer: "\"He created you from a single soul, and from it He created its mate\"",
        explanation: "This verse is a key reference for the divine wisdom in the creation of humanity as male and female and for the purpose of procreation and companionship within the marital bond.",
        references: "Quran 4:1"
      },
      {
        question: "In tafsir, what is the significance of the people of Lut being described as 'al-musrifun' (the transgressors)?",
        options: [
          "It means they were wealthy",
          "It signifies they exceeded all limits and boundaries of proper conduct",
          "It refers to their lack of intelligence",
          "It means they were too religious"
        ],
        correctAnswer: "It signifies they exceeded all limits and boundaries of proper conduct",
        explanation: "The term 'musrifun' emphasizes that the people of Lut went beyond all moral and ethical boundaries set by Allah, including their rejection of natural sexual relationships and their immoral behavior with travelers.",
        references: "Tafsir al-Jalalayn on Quran 7:81"
      },
      {
        question: "What is the Islamic ethical principle of 'sitr al-muslim' (covering the sins of a Muslim)?",
        options: [
          "It is mandatory to expose all sins",
          "It is a sin to conceal any wrongdoing",
          "One should conceal the private sins of a fellow Muslim and not expose them publicly",
          "It only applies to minor sins"
        ],
        correctAnswer: "One should conceal the private sins of a fellow Muslim and not expose them publicly",
        explanation: "This principle, based on a hadith of the Prophet (PBUH), encourages believers to maintain privacy and not to expose the private faults of others. This is meant to foster a compassionate and forgiving community.",
        references: "Sahih Muslim, Hadith 2590"
      },
      {
        question: "The Quran mentions the creation of pairs for a specific reason. What is it?",
        options: [
          "To cause conflict and war",
          "To make society complex",
          "For mutual tranquility, affection, and mercy",
          "To allow for personal self-expression"
        ],
        correctAnswer: "For mutual tranquility, affection, and mercy",
        explanation: "The Quran states that Allah created spouses so that people may find tranquility and that He placed affection and mercy between them. This verse is central to understanding the Islamic purpose of relationships.",
        references: "Quran 30:21"
      },
      {
        question: "What does the Quran mention about the final outcome for the people of Lut?",
        options: [
          "They were given a second chance",
          "They repented and were forgiven",
          "Their entire city was destroyed and remains as a sign for others",
          "They were exiled to another land"
        ],
        correctAnswer: "Their entire city was destroyed and remains as a sign for others",
        explanation: "The Quran is explicit that the people of Lut and their city were utterly destroyed by a divine punishment and that the ruins of their city serve as a sign for those who reflect.",
        references: "Quran 26:173-174"
      },
      {
        question: "The Quran mentions the story of the people of Lut to address which specific vice?",
        options: [
          "Lying and deceit",
          "Homosexuality and its perversion of the natural order",
          "Stealing and corruption",
          "Worshipping idols"
        ],
        correctAnswer: "Homosexuality and its perversion of the natural order",
        explanation: "The story of Lut is primarily a warning against the act of sodomy and the broader societal moral decay that stems from it, as it is presented as a novel and reprehensible act for which the people were destroyed.",
        references: "Quran 27:54-55"
      },
      {
        question: "According to the Sunnah, what is the role of modesty (Haya) in a Muslim's life?",
        options: [
          "It is a sign of weakness",
          "It is a core component of faith (iman)",
          "It is only for women",
          "It is an outdated concept"
        ],
        correctAnswer: "It is a core component of faith (iman)",
        explanation: "The Prophet Muhammad (PBUH) said, 'Faith has sixty-odd branches, and modesty (haya) is a branch of faith.' This highlights its fundamental importance in a believer's life.",
        references: "Sahih al-Bukhari, Hadith 9"
      },
      {
        question: "What is the general Islamic position on the distinction between a 'sin' and a 'sinner'?",
        options: [
          "There is no distinction, the person is defined by their sin",
          "The person is a sinner, but their individual sin can be forgiven through repentance",
          "All sins are equal in severity",
          "Sins are permanent and unchangeable"
        ],
        correctAnswer: "The person is a sinner, but their individual sin can be forgiven through repentance",
        explanation: "Islamic theology holds that while certain acts are sins, the person who commits them is not necessarily beyond the mercy of Allah, as long as they sincerely repent and turn back to Him. The focus is on the act, not the person's identity as a 'sinner'.",
        references: "Quran 39:53"
      },
      {
        question: "What is the primary objective of Islamic law regarding gender relations?",
        options: [
          "To establish dominance of one gender over the other",
          "To ensure a just and harmonious society by defining the roles and rights of men and women",
          "To eliminate all forms of interaction between genders",
          "To encourage competition between genders"
        ],
        correctAnswer: "To ensure a just and harmonious society by defining the roles and rights of men and women",
        explanation: "Islamic law aims to create a stable social order by providing clear guidelines for the relationship between men and women, with mutual respect, rights, and responsibilities, all within the framework of marriage.",
        references: "Quran 4:34"
      },
      {
        question: "The Quran describes the people of Lut's actions as 'al-fahsha'. What does this term imply about the act itself?",
        options: [
          "It was a new and innovative act",
          "It was a private matter with no public implications",
          "It was a heinous and repulsive act",
          "It was a harmless act"
        ],
        correctAnswer: "It was a heinous and repulsive act",
        explanation: "The term 'al-fahsha' carries connotations of extreme indecency, wickedness, and a repulsive nature, indicating that the acts were not just sins but a profound violation of morality.",
        references: "Tafsir al-Tabari on Quran 7:80"
      },
      {
        question: "According to the Quran, what is the purpose of gender differentiation in creation?",
        options: [
          "To create a division in society",
          "To create a sense of balance and complementarity",
          "To establish superiority of one gender over another",
          "To demonstrate the randomness of creation"
        ],
        correctAnswer: "To create a sense of balance and complementarity",
        explanation: "The Quran emphasizes the creation of men and women from a single soul and their complementary roles, highlighting a partnership designed for mutual support and the continuation of humanity.",
        references: "Quran 4:1"
      },
      {
        question: "How do Islamic scholars deal with gender identity issues in the modern context?",
        options: [
          "They have completely adopted modern secular views",
          "They continue to adhere to the classical rulings based on biological sex while offering pastoral care for individuals struggling with their identity",
          "They have no official position",
          "They have formed a new branch of Islamic law to deal with it"
        ],
        correctAnswer: "They continue to adhere to the classical rulings based on biological sex while offering pastoral care for individuals struggling with their identity",
        explanation: "The majority of Islamic scholars maintain the classical fiqh rulings on the immutability of biological sex but have also acknowledged the need for compassionate and empathetic pastoral care for individuals who experience gender dysphoria.",
        references: "Fatwas from various contemporary Islamic councils"
      },
      {
        question: "The story of the people of Lut serves as a warning against which of the following?",
        options: [
          "Pride and arrogance",
          "Stealing and usury",
          "Publicly committing forbidden acts and rejecting the message of a prophet",
          "Gossip and backbiting"
        ],
        correctAnswer: "Publicly committing forbidden acts and rejecting the message of a prophet",
        explanation: "The destruction of the people of Lut was a consequence of their persistent and public engagement in a grave sin, coupled with their rejection and mockery of a prophet of Allah.",
        references: "Quran 26:167-173"
      },
      {
        question: "What is the concept of 'Ibtila' (trial) in Islam, and how does it relate to personal struggles?",
        options: [
          "It is a sign of Allah's punishment",
          "It is a test from Allah that can involve various forms of hardship, including internal struggles",
          "It is a sign of a person's weakness",
          "It is a concept only for prophets"
        ],
        correctAnswer: "It is a test from Allah that can involve various forms of hardship, including internal struggles",
        explanation: "The Quran mentions that all people will be tested in various ways. This includes internal struggles with desires and temptations, and a person's faith is measured by their ability to remain steadfast and seek Allah's help during such trials.",
        references: "Quran 2:155-157"
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
