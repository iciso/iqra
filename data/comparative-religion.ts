import type { QuizCategory } from "@/types/quiz"

// Comparative Religion category with questions
const comparativeReligionCategory: QuizCategory = {
  id: "comparative",
  title: "Comparative Religion",
  description: "Atheism, Science and Islamic Thought",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the Islamic view on the existence of other religions?",
        options: [
          "Islam rejects all other religions completely",
          "Islam acknowledges that Allah sent messengers to all nations",
          "Islam considers other religions as valid paths to salvation",
          "Islam has no specific view on other religions",
        ],
        correctAnswer: "Islam acknowledges that Allah sent messengers to all nations",
        explanation:
          "Islam teaches that Allah sent messengers to all nations throughout history with the same core message of monotheism, though the details of practice may have differed. The Quran states: 'And for every nation there is a messenger' (10:47).",
      },
      {
    question: "What does Islam teach about the original message of all prophets?",
    options: [
      "Each prophet brought a completely different religion",
      "All prophets taught the worship of One God (Tawhid)",
      "Prophets only taught moral values without theology",
      "Earlier prophets were not sent by Allah"
    ],
    correctAnswer: "All prophets taught the worship of One God (Tawhid)",
    explanation: "The Quran states: 'And We did not send any messenger before you except that We revealed to him that there is no deity except Me, so worship Me.' (21:25). This establishes that the core message of all prophets was monotheism."
  },
  {
    question: "How does Islam view the concept of the afterlife in other Abrahamic religions?",
    options: [
      "Islam completely rejects any concept of afterlife in other religions",
      "Islam affirms the concept but considers its details to have been altered over time",
      "Islam believes only Muslims will have an afterlife",
      "Islam has no position on this matter"
    ],
    correctAnswer: "Islam affirms the concept but considers its details to have been altered over time",
    explanation: "The Quran acknowledges that previous scriptures contained teachings about the afterlife (e.g., 2:4, 2:62), but maintains that these teachings were subject to distortion over time, while Islam presents the complete and preserved truth."
  },
  {
    question: "What is the Islamic view about the Bible?",
    options: [
      "It is completely false with no truth in it",
      "It was originally divine revelation but has been altered",
      "It is exactly the same as when it was revealed",
      "Muslims must follow the current Bible"
    ],
    correctAnswer: "It was originally divine revelation but has been altered",
    explanation: "The Quran recognizes the Torah and Gospel as previous revelations (3:3-4, 5:46), but states that their texts were subject to alteration (2:79). Muslims believe these scriptures contained truth when originally revealed but were not preserved perfectly."
  },
  {
    question: "How does Islam view the concept of original sin?",
    options: [
      "Islam fully accepts the Christian doctrine of original sin",
      "Islam rejects the concept of original sin entirely",
      "Islam has a similar but not identical concept called 'khati'a asliyya'",
      "Islam teaches that all humans are born sinful"
    ],
    correctAnswer: "Islam rejects the concept of original sin entirely",
    explanation: "Islam teaches that each person is born in a state of purity (fitrah) and is responsible only for their own sins. The Quran states: 'And no bearer of burdens will bear the burden of another' (35:18). Adam and Eve's story in Islam differs significantly from the Christian narrative."
  },
  {
    question: "What is the Islamic position on images of prophets?",
    options: [
      "Islam encourages artistic depictions of all prophets",
      "Islam prohibits visual representations of all prophets including Muhammad (pbuh)",
      "Only images of Prophet Muhammad (pbuh) are prohibited",
      "There are no restrictions on images of prophets"
    ],
    correctAnswer: "Islam prohibits visual representations of all prophets including Muhammad (pbuh)",
    explanation: "Islamic tradition strongly discourages visual representations of any prophets to prevent idolatry or exaggeration in their veneration. This is based on numerous hadiths warning against image-making that could lead to shirk (associating partners with Allah)."
  },
  {
    question: "How does Islam view monasticism?",
    options: [
      "Islam considers it the highest form of worship",
      "Islam rejects it completely as un-Islamic",
      "Islam acknowledges it was prescribed by God but later innovations were added",
      "Islam requires all pious people to become monks"
    ],
    correctAnswer: "Islam rejects it completely as un-Islamic",
    explanation: "The Quran states: '...But as for monasticism, they invented it - We had not prescribed it for them...' (57:27), indicating that while asceticism was originally part of divine guidance, later innovations distorted its practice."
  },
  {
    question: "What is the Islamic view about the crucifixion of Jesus (pbuh)?",
    options: [
      "Islam confirms the Christian account of crucifixion",
      "Islam believes Jesus (pbuh) was crucified but didn't die on the cross",
      "Islam teaches Jesus (pbuh) was not crucified but raised to heaven",
      "Islam has no position on this matter"
    ],
    correctAnswer: "Islam teaches Jesus (pbuh) was not crucified but raised to heaven",
    explanation: "The Quran states: 'And they did not kill him, nor did they crucify him; but another was made to resemble him to them... Rather, Allah raised him to Himself' (4:157-158). Muslims believe God saved Jesus (pbuh) from crucifixion and raised him to heaven."
  },
  {
    question: "How does Islam view the concept of divine incarnation?",
    options: [
      "Islam accepts it fully as in Christianity and Hinduism",
      "Islam completely rejects any notion of God becoming incarnate",
      "Islam accepts it only for Prophet Muhammad (pbuh)",
      "Islam teaches that all humans are incarnations of God"
    ],
    correctAnswer: "Islam completely rejects any notion of God becoming incarnate",
    explanation: "The Quran strongly emphasizes God's transcendence and uniqueness (112:1-4), rejecting any concept that God could take human form. This contrasts with Christian incarnation theology and Hindu avatar concepts."
  },
  {
    question: "What is the Islamic perspective on interfaith marriage?",
    options: [
      "Muslim men can marry Jewish or Christian women",
      "Muslim women can marry Jewish or Christian men",
      "Both Muslim men and women can marry from any religion",
      "Muslims can only marry other Muslims"
    ],
    correctAnswer: "Muslim men can marry Jewish or Christian women",
    explanation: "The Quran permits Muslim men to marry chaste women from the People of the Book (5:5), while Muslim women are generally restricted to marrying Muslim men to ensure the Islamic upbringing of children and maintain the woman's religious rights."
  },
  {
    question: "How does Islam view the concept of saints?",
    options: [
      "Islam rejects any concept of sainthood",
      "Islam has a similar concept (awliya Allah) but differs in important aspects",
      "Islam's concept of saints is identical to Christianity's",
      "Only prophets can be considered saints in Islam"
    ],
    correctAnswer: "Islam has a similar concept (awliya Allah) but differs in important aspects",
    explanation: "Islam recognizes righteous believers as 'awliya Allah' (friends of God, 10:62-64), but differs from Christian sainthood in that they are not intermediaries between God and humans, nor are they objects of worship or veneration."
  },
  {
    question: "What is the Islamic view on the concept of Trinity?",
    options: [
      "Islam fully accepts the Christian doctrine of Trinity",
      "Islam considers it a form of polytheism (shirk)",
      "Islam believes it refers to three separate gods",
      "Islam teaches that Trinity means three attributes of God"
    ],
    correctAnswer: "Islam considers it a form of polytheism (shirk)",
    explanation: "The Quran explicitly addresses the Trinity (5:73), considering it a deviation from pure monotheism. Islamic theology maintains strict monotheism (tawhid) and views the Trinity as compromising God's absolute oneness."
  },
  {
    question: "How does Islam view the concept of salvation?",
    options: [
      "Salvation comes only through formal conversion to Islam",
      "Salvation comes through belief in God and good deeds, with divine mercy",
      "Salvation is guaranteed for all people regardless of belief",
      "Salvation is only possible for prophets"
    ],
    correctAnswer: "Salvation comes through belief in God and good deeds, with divine mercy",
    explanation: "While Islam teaches that submission to God (Islam) is the ideal path, the Quran mentions that people of other faiths who believe in God and do righteous deeds may receive reward (2:62). Ultimately, salvation depends on God's mercy and justice."
  },
  {
    question: "What is the Islamic view about miracles performed by prophets of other religions?",
    options: [
      "Islam denies that any prophets performed miracles",
      "Islam acknowledges miracles by previous prophets as authentic",
      "Only Prophet Muhammad (pbuh) performed real miracles",
      "Miracles are actually magic tricks"
    ],
    correctAnswer: "Islam acknowledges miracles by previous prophets as authentic",
    explanation: "The Quran recounts numerous miracles by prophets like Moses (staff/snake, parting sea) and Jesus (healing, raising dead) (5:110). These are accepted as authentic signs from God to validate their prophethood."
  },
  {
    question: "How does Islam view the concept of religious conversion?",
    options: [
      "Forced conversion is mandatory in Islam",
      "Conversion must always be completely voluntary",
      "Only conversion to Islam is allowed, not from Islam",
      "Islam has no concept of religious conversion"
    ],
    correctAnswer: "Conversion must always be completely voluntary",
    explanation: "The Quran states: 'There is no compulsion in religion' (2:256). While Islam encourages people to accept its message, conversion must be by free choice. Forced conversions are invalid in Islamic law."
  },
  {
    question: "What is the Islamic perspective on the concept of divine revelation?",
    options: [
      "Only the Quran is considered divine revelation",
      "All authentic scriptures were originally divine revelation",
      "Revelation is just human philosophical ideas",
      "Only Jewish scriptures are considered revelation"
    ],
    correctAnswer: "All authentic scriptures were originally divine revelation",
    explanation: "Islam teaches that God sent revelations to all nations through their prophets (10:47, 35:24). The Torah, Psalms, and Gospel are specifically mentioned as previous revelations (3:3-4), though Muslims believe they were not perfectly preserved."
  },
  {
    question: "How does Islam view the concept of prophethood compared to other religions?",
    options: [
      "Only Muhammad (pbuh) was a real prophet",
      "All nations received prophets according to Islamic belief",
      "Prophethood is just a political leadership position",
      "Women cannot be prophets in Islam"
    ],
    correctAnswer: "All nations received prophets according to Islamic belief",
    explanation: "The Quran states: 'For every nation there is a messenger' (10:47), and mentions prophets sent to various civilizations including some not in the Bible. Islam recognizes thousands of prophets, with 25 specifically named in the Quran."
  },
  {
    question: "What is the Islamic view about the concept of angels in other religions?",
    options: [
      "Islam completely denies the existence of angels",
      "Islam's concept of angels is identical to all other religions",
      "Islam affirms angels but corrects misconceptions about them",
      "Angels are just symbolic concepts in Islam"
    ],
    correctAnswer: "Islam affirms angels but corrects misconceptions about them",
    explanation: "Islam affirms angels as spiritual beings created from light who serve God (2:285), but rejects any depiction of them as female (43:19) or as divine intermediaries who can be worshipped. They are God's obedient servants with specific roles."
  },
  {
    question: "How does Islam view the concept of religious rituals from other faiths?",
    options: [
      "All non-Islamic rituals are invalid",
      "Some rituals may have originated from divine guidance but were altered",
      "Muslims should adopt rituals from all religions",
      "Rituals are unimportant in all religions"
    ],
    correctAnswer: "Some rituals may have originated from divine guidance but were altered",
    explanation: "Islam teaches that previous prophets were given forms of worship (21:73), but many practices were changed over time. For example, Muslim pilgrimage shares some elements with Abrahamic tradition but differs in its details and interpretation."
  },
  {
    question: "What is the Islamic position on the concept of divine forgiveness in other religions?",
    options: [
      "Only Islam teaches that God can forgive sins",
      "The concept exists in other religions but Islam emphasizes both justice and mercy",
      "Forgiveness is automatic for all people in all religions",
      "God never forgives sins according to Islam"
    ],
    correctAnswer: "The concept exists in other religions but Islam emphasizes both justice and mercy",
    explanation: "While forgiveness is a theme in many religions, Islam balances God's mercy (39:53) with justice (4:48). True forgiveness requires repentance and amendment, not just verbal declaration, and God's mercy encompasses all things (7:156)."
  },
  {
    question: "How does Islam view the concept of religious leadership compared to other faiths?",
    options: [
      "Islam has no concept of religious leadership",
      "Islam rejects all forms of religious hierarchy",
      "Islam has religious scholars but no priestly class with special spiritual powers",
      "Only caliphs can interpret religion in Islam"
    ],
    correctAnswer: "Islam has religious scholars but no priestly class with special spiritual powers",
    explanation: "Unlike some religions with ordained priesthoods, Islam considers all believers equal before God. While there are religious scholars (ulama), they are not intermediaries between God and humans, and their authority comes from knowledge, not sacramental power."
  },
      {
        question: "What is the Islamic perspective on Jesus (peace be upon him)?",
        options: [
          "He was not a real historical figure",
          "He was the son of God",
          "He was a prophet and messenger of Allah",
          "He was just a wise teacher",
        ],
        correctAnswer: "He was a prophet and messenger of Allah",
        explanation:
          "In Islam, Jesus (Isa) peace be upon him is revered as one of the mightiest messengers of Allah. Muslims believe in his miraculous birth to the Virgin Mary, his miracles, and his message, but do not believe he was divine or the son of God.",
      },
      {
        question: "How does Islam view science and scientific inquiry?",
        options: [
          "Islam opposes scientific inquiry",
          "Islam encourages seeking knowledge, including scientific knowledge",
          "Islam is neutral about science",
          "Islam only accepts science that confirms religious texts",
        ],
        correctAnswer: "Islam encourages seeking knowledge, including scientific knowledge",
        explanation:
          "Islam strongly encourages the pursuit of knowledge, including scientific inquiry. The Prophet Muhammad (peace be upon him) said: 'Seeking knowledge is an obligation upon every Muslim.' The Quran also contains many verses encouraging observation and reflection on the natural world.",
      },
      {
        question: "What is the Islamic view on the relationship between faith and reason?",
        options: [
          "Faith and reason are completely opposed",
          "Faith is superior and reason should be rejected",
          "Reason is superior and faith should be rejected",
          "Faith and reason are complementary",
        ],
        correctAnswer: "Faith and reason are complementary",
        explanation:
          "In Islamic thought, faith (iman) and reason (aql) are seen as complementary rather than contradictory. The Quran repeatedly calls on people to use their reason, reflect, and ponder, suggesting that proper use of reason leads to faith.",
      },
      {
        question: "What is the concept of 'Fitrah' in Islam?",
        options: [
          "The Islamic calendar",
          "The natural predisposition to believe in God",
          "The five daily prayers",
          "The pilgrimage to Mecca",
        ],
        correctAnswer: "The natural predisposition to believe in God",
        explanation:
          "Fitrah refers to the natural, innate inclination of human beings to recognize and worship God. According to Islamic belief, every person is born with this natural disposition, though it may be altered by external influences.",
      },
      {
        question: "How does Islam view atheism?",
        options: [
          "As a valid philosophical position",
          "As a rejection of the natural human disposition (fitrah)",
          "As acceptable for non-Muslims only",
          "Islam has no position on atheism",
        ],
        correctAnswer: "As a rejection of the natural human disposition (fitrah)",
        explanation:
          "In Islamic thought, atheism is viewed as a rejection of the natural human disposition (fitrah) to recognize the Creator. The Quran addresses those who deny God's existence with arguments about the origins and design of the universe.",
      },
      {
        question: "What is the Islamic perspective on evolution?",
        options: [
          "Islam categorically rejects all aspects of evolution",
          "Islam accepts evolution completely, including human evolution",
          "Islamic scholars have diverse views, with many accepting microevolution while questioning macroevolution",
          "Islam has no position on evolution",
        ],
        correctAnswer:
          "Islamic scholars have diverse views, with many accepting microevolution while questioning macroevolution",
        explanation:
          "Contemporary Islamic scholars hold diverse views on evolution. Many accept microevolution (changes within species) while questioning macroevolution (one species evolving into another), particularly regarding human origins. Some scholars attempt to reconcile evolutionary science with Quranic accounts of creation.",
      },
      {
        question: "What is the Islamic view on the concept of 'People of the Book'?",
        options: [
          "It refers only to Muslims who read the Quran",
          "It refers to Jews and Christians who received revealed scriptures",
          "It refers to all religious people who have sacred texts",
          "It is not an Islamic concept",
        ],
        correctAnswer: "It refers to Jews and Christians who received revealed scriptures",
        explanation:
          "In Islam, 'People of the Book' (Ahl al-Kitab) primarily refers to Jews and Christians who received divine revelations through Moses and Jesus respectively. The Quran acknowledges their scriptures as having divine origin, though Muslims believe these texts were altered over time.",
      },
      {
        question: "How does Islam view religious pluralism?",
        options: [
          "Islam teaches that all religions are equally valid paths to God",
          "Islam rejects all other religions as completely false",
          "Islam acknowledges elements of truth in other faiths while maintaining that Islam is the complete and final revelation",
          "Islam has no position on other religions",
        ],
        correctAnswer:
          "Islam acknowledges elements of truth in other faiths while maintaining that Islam is the complete and final revelation",
        explanation:
          "Islam acknowledges that other religions, particularly monotheistic faiths, contain elements of truth as they originated from divine revelation. However, Islamic teaching holds that Islam represents the complete and final revelation from God, perfecting and superseding previous messages.",
      },
      {
        question: "What is the Islamic perspective on the relationship between religion and state?",
        options: [
          "Islam mandates a specific form of government",
          "Islam requires complete separation of religion and state",
          "Islam provides general principles for governance while allowing flexibility in implementation",
          "Islam has no teachings related to governance",
        ],
        correctAnswer: "Islam provides general principles for governance while allowing flexibility in implementation",
        explanation:
          "Islam provides general principles for governance such as justice, consultation (shura), and accountability, but does not mandate a specific form of government. Throughout history, Muslims have implemented these principles in various ways according to their time and context.",
      },
    ],
    advanced: [
      {
        question: "How does the Islamic concept of God (Allah) differ from the Christian concept of the Trinity?",
        options: [
          "There is no significant difference",
          "Islam emphasizes absolute oneness (Tawhid) while Christianity affirms a triune God",
          "Islam believes in multiple gods while Christianity believes in one",
          "Islam has no defined concept of God",
        ],
        correctAnswer: "Islam emphasizes absolute oneness (Tawhid) while Christianity affirms a triune God",
        explanation:
          "Islam emphasizes the absolute oneness of God (Tawhid), rejecting any division or plurality within the divine nature. This differs from mainstream Christianity's trinitarian concept of God as Father, Son, and Holy Spirit - three persons in one divine essence. The Quran explicitly addresses this difference in Surah Al-Ikhlas and 4:171.",
      },
      {
    question: "How does Islamic theology interpret the Quranic verse 'To you your religion, and to me mine' (109:6) in relation to religious pluralism?",
    options: [
      "It means all religions are equally true",
      "It establishes the principle of coexistence while maintaining theological differences",
      "It was only a temporary strategy for early Muslims",
      "It abrogates all previous verses about other religions"
    ],
    correctAnswer: "It establishes the principle of coexistence while maintaining theological differences",
    explanation: "This verse from Surah Al-Kafirun establishes a principle of peaceful coexistence while maintaining clear theological distinctions. Classical scholars interpreted it as defining Islam's relationship with persistent disbelief, not endorsing religious relativism. The verse's historical context shows it was revealed regarding pagan Quraysh's attempt to compromise Islamic monotheism."
  },
  {
    question: "What is the Islamic theological perspective on the concept of 'abrogation' (naskh) in relation to previous scriptures?",
    options: [
      "Islam rejects any concept of abrogation between revelations",
      "The Quran abrogates all previous scriptures completely and absolutely",
      "The Quran confirms, corrects, and supersedes previous revelations in a gradual process of divine guidance",
      "Abrogation only applies within the Quran, not to previous scriptures"
    ],
    correctAnswer: "The Quran confirms, corrects, and supersedes previous revelations in a gradual process of divine guidance",
    explanation: "Islamic theology teaches that divine revelation progressed through history, with each message suited to its time, culminating in the final revelation to Muhammad (pbuh). The Quran describes itself as 'confirming what came before it and as a guardian over it' (5:48). Abrogation (naskh) refers to this progressive revelation, not cancellation, where later revelations build upon and perfect earlier ones."
  },
  {
    question: "How does classical Islamic philosophy reconcile divine omniscience with human free will?",
    options: [
      "By adopting complete determinism (jabr)",
      "Through the concept of 'acquisition' (kasb) where human acts are created by God but earned by humans",
      "By denying divine foreknowledge to preserve human freedom",
      "By teaching that God's knowledge is limited by human choices"
    ],
    correctAnswer: "Through the concept of 'acquisition' (kasb) where human acts are created by God but earned by humans",
    explanation: "The Ash'ari school developed the theory of 'kasb' (acquisition) to balance divine omnipotence with human responsibility. God creates all acts, but humans 'acquire' them and are thus accountable. This differs from Mu'tazilite emphasis on complete human freedom and from pure determinism. The position maintains God's complete knowledge (including of future choices) without negating genuine human agency."
  },
  {
    question: "What is the Islamic theological response to the problem of suffering in light of divine justice (al-'adl)?",
    options: [
      "All suffering is punishment for sins",
      "Suffering is an illusion in Islamic theology",
      "Suffering serves multiple purposes including testing, purification, and divine wisdom beyond human comprehension",
      "God is not concerned with human suffering"
    ],
    correctAnswer: "Suffering serves multiple purposes including testing, purification, and divine wisdom beyond human comprehension",
    explanation: "Islamic theodicy addresses suffering through several lenses: 1) Test and trial (2:155-157); 2) Consequence of human actions (42:30); 3) Means of spiritual elevation; 4) Manifestation of divine names (e.g., The Healer); 5) Temporary in light of eternal justice. The concept of divine wisdom (hikma) acknowledges that not all purposes are immediately apparent to human understanding."
  },
  {
    question: "How does Islamic theology interpret the concept of 'Ummah' in relation to religious communities outside Islam?",
    options: [
      "The term applies exclusively to the Muslim community",
      "It includes all monotheistic believers regardless of formal religion",
      "It refers to all of humanity without religious distinction",
      "It only refers to Arabs regardless of religion"
    ],
    correctAnswer: "The term applies exclusively to the Muslim community",
    explanation: "While the Quran uses 'Ummah' in various contexts (e.g., 2:143 refers specifically to the Muslim community as the 'middle nation'), in classical Islamic discourse it primarily denotes the global Muslim community bound by shared beliefs and practices. Other faith communities are typically referred to by their specific names (e.g., Ahl al-Kitab). Modern reinterpretations sometimes expand this concept, but the classical usage maintains this distinction."
  },
  {
    question: "What is the Islamic theological perspective on the concept of 'natural law' in comparison to Western philosophical traditions?",
    options: [
      "Islam completely rejects any concept of natural law",
      "Islamic 'fitrah' corresponds somewhat to natural law but is more theologically grounded",
      "Natural law in Islam is identical to secular Western concepts",
      "Islam has no equivalent concepts to natural law"
    ],
    correctAnswer: "Islamic 'fitrah' corresponds somewhat to natural law but is more theologically grounded",
    explanation: "The Islamic concept of fitrah (30:30) shares similarities with natural law in positing an innate human recognition of moral truths, but differs by grounding this in divine creation rather than pure reason. Additionally, Islamic 'maqasid al-sharia' (higher objectives of law) identify universal principles like protection of life, religion, intellect, lineage, and property that resemble natural law categories but derive from revelation."
  },
  {
    question: "How does Islamic theology interpret the Quranic description of Jews and Christians as 'nearest in affection' to Muslims (5:82) in light of other verses that criticize them?",
    options: [
      "The verse was abrogated by later, more critical verses",
      "It refers only to a specific historical group with no contemporary application",
      "It establishes a principle of special relationship with People of the Book despite theological differences",
      "It was meant ironically and doesn't reflect real affection"
    ],
    correctAnswer: "It establishes a principle of special relationship with People of the Book despite theological differences",
    explanation: "Classical commentators like Al-Tabari and Ibn Kathir interpreted this verse as indicating a special relationship with monotheists who share many ethical values with Muslims. Other verses criticizing Jewish and Christian communities address specific historical incidents or theological errors, not blanket condemnation. The Islamic tradition maintains this nuanced approach - theological critique coexisting with social cooperation where possible."
  },
  {
    question: "What is the Islamic theological position on the concept of 'consensus' (ijma') in matters where other religions differ?",
    options: [
      "Muslims must conform to majority interfaith opinions",
      "Islamic consensus is independent and based on Quran, Sunnah and scholarly interpretation",
      "There is no concept of consensus in Islam",
      "Only early Muslim generations could form consensus"
    ],
    correctAnswer: "Islamic consensus is independent and based on Quran, Sunnah and scholarly interpretation",
    explanation: "Ijma' (consensus) in Islamic jurisprudence refers to agreement among qualified scholars on matters of interpretation, not conformity with other religious communities. While Islam acknowledges truths in other traditions, its theological and legal conclusions derive from its own revelatory sources. The principle of ijma' ensures continuity while allowing for legitimate diversity of opinion within Islamic parameters."
  },
  {
    question: "How does Islamic theology interpret the concept of 'covenant' in relation to other Abrahamic faiths?",
    options: [
      "Islam completely rejects any concept of covenant",
      "The Quran presents Islam as fulfilling the original covenant with all prophets (e.g., 3:81)",
      "Only the Jewish people have a valid covenant with God",
      "Covenants were only for ancient nations and don't apply today"
    ],
    correctAnswer: "The Quran presents Islam as fulfilling the original covenant with all prophets (e.g., 3:81)",
    explanation: "The Quranic concept of 'mithaq' (covenant) includes: 1) The primordial covenant with all humanity (7:172); 2) Covenants with various prophets and their communities; 3) A specific covenant with the People of the Book to recognize Muhammad (pbuh) when he came (3:81). Islamic theology sees these covenants as culminating in the final revelation, with Islam preserving the original monotheistic tradition."
  },
  {
    question: "What is the Islamic theological response to claims of particularism (e.g., 'chosen people' concepts) in other religions?",
    options: [
      "Islam makes identical claims of being the only chosen nation",
      "Islam rejects all concepts of chosenness as inherently unjust",
      "Islam redefines chosenness as based on piety rather than ethnicity or inherited status",
      "Islam accepts all other religions' chosenness claims"
    ],
    correctAnswer: "Islam redefines chosenness as based on piety rather than ethnicity or inherited status",
    explanation: "The Quran states: 'Indeed, the most noble of you in the sight of Allah is the most righteous of you' (49:13). While Islam considers the Muslim ummah as the 'best nation' (3:110), this is conditional on enjoining good and forbidding evil, not inherent or exclusive. This contrasts with ethnic or unconditional election concepts in some interpretations of other traditions."
  },
  {
    question: "How does Islamic theology interpret the concept of 'shirk' (associating partners with God) in relation to other monotheistic religions?",
    options: [
      "All non-Muslims automatically commit shirk",
      "Only polytheists commit shirk, People of the Book do not",
      "Some forms of shirk exist in theological concepts of other monotheisms (e.g., Trinity, divine incarnation)",
      "Shirk is an outdated concept not applicable today"
    ],
    correctAnswer: "Some forms of shirk exist in theological concepts of other monotheisms (e.g., Trinity, divine incarnation)",
    explanation: "Islamic theology makes careful distinctions in its critique of other monotheisms. While recognizing Jews and Christians as People of the Book, it identifies certain theological concepts (Trinity, divine incarnation, saint veneration) as compromising pure monotheism (tawhid). The Quran critiques these specifically (e.g., 5:72-73, 9:31) while acknowledging these communities' monotheistic roots."
  },
  {
    question: "What is the Islamic theological perspective on the concept of 'revelation' (wahy) compared to prophetic experience in other traditions?",
    options: [
      "Only Islamic revelation is real; other traditions merely have human inspiration",
      "All religions have identical concepts of revelation",
      "Islam recognizes genuine divine revelation to previous prophets but maintains the Quran's uniqueness in preservation and scope",
      "Revelation ended completely before Prophet Muhammad (pbuh)"
    ],
    correctAnswer: "Islam recognizes genuine divine revelation to previous prophets but maintains the Quran's uniqueness in preservation and scope",
    explanation: "Islamic theology distinguishes between: 1) Direct revelation (wahy) to prophets; 2) Inspiration (ilham) to saints; 3) Human philosophical insight. While affirming genuine revelation to previous prophets, Islam teaches the Quran is unique as the final, perfectly preserved, universal message (15:9). This creates a theological hierarchy recognizing truths in other traditions while asserting Islam's completeness."
  },
  {
    question: "How does Islamic theology interpret the concept of 'sacred history' in relation to other religious narratives?",
    options: [
      "Islamic sacred history completely contradicts all other religious histories",
      "Islam shares many historical narratives (e.g., prophets' stories) but differs in interpretation and details",
      "Only Islamic historical accounts are valid; others are completely false",
      "History is irrelevant in Islamic theology"
    ],
    correctAnswer: "Islam shares many historical narratives (e.g., prophets' stories) but differs in interpretation and details",
    explanation: "The Quran frequently references events known to Jewish and Christian traditions (e.g., stories of Moses, Jesus, etc.) but often with different emphases or corrections (e.g., 28:48). Islamic 'sacred history' serves theological purposes - demonstrating prophetic continuity, divine mercy and justice - rather than being purely chronological record. This creates both common ground and distinctiveness with other traditions."
  },
  {
    question: "What is the Islamic theological position on the concept of 'salvation history' as understood in Christianity?",
    options: [
      "Islam has an identical concept of salvation history",
      "Islam rejects the linear salvation history model, emphasizing individual accountability and direct divine-human relationship",
      "Only Islam has true salvation history; others have none",
      "Salvation history is irrelevant to Islamic theology"
    ],
    correctAnswer: "Islam rejects the linear salvation history model, emphasizing individual accountability and direct divine-human relationship",
    explanation: "Unlike Christianity's focus on salvation history culminating in Christ's sacrifice, Islam emphasizes: 1) Continuous prophetic guidance throughout history; 2) Each individual's direct accountability before God; 3) Final judgment based on belief and deeds rather than collective historical events. While Islam recognizes divine intervention in history, it doesn't center on a single salvific event."
  },
  {
    question: "How does Islamic theology interpret the concept of 'religious experience' compared to mystical traditions in other faiths?",
    options: [
      "Islam rejects all forms of religious experience as delusion",
      "Islamic Sufism shares some phenomenological similarities with other mysticism but maintains distinct theological boundaries",
      "Only Islamic religious experiences are valid",
      "Religious experience is identical across all traditions"
    ],
    correctAnswer: "Islamic Sufism shares some phenomenological similarities with other mysticism but maintains distinct theological boundaries",
    explanation: "Islamic Sufism developed sophisticated approaches to spiritual experience (kashf, dhawq) resembling other mystical traditions in practice (e.g., meditation, divine love). However, it remains grounded in Islamic theology - strict monotheism, prophetic finality, and sharia compliance. Scholars like Al-Ghazali systematized this balance between spiritual experience and orthodox doctrine."
  },
  {
    question: "What is the Islamic theological response to the concept of 'non-literal interpretation' of scripture as practiced in other traditions?",
    options: [
      "Islam rejects any non-literal interpretation as heresy",
      "Islamic ta'wil (interpretation) employs multi-layered exegesis within defined parameters",
      "Only non-Muslims may interpret scripture non-literally",
      "There is no tradition of scriptural interpretation in Islam"
    ],
    correctAnswer: "Islamic ta'wil (interpretation) employs multi-layered exegesis within defined parameters",
    explanation: "Islamic exegesis includes: 1) Literal (zahir) interpretation; 2) Allegorical (batin) for certain verses (3:7); 3) Contextual analysis. Schools differ on permissible interpretation boundaries, but all require rigorous methodology rooted in Arabic language, prophetic tradition, and scholarly consensus. This creates both parallels and distinctions with other hermeneutical traditions."
  },
  {
    question: "How does Islamic theology interpret the concept of 'religious language' compared to other traditions' approaches?",
    options: [
      "Religious language is purely symbolic in Islam",
      "The Quran's language is considered literally divine with careful attention to literal and metaphorical meanings",
      "Only scholars can understand religious language",
      "Religious language is unimportant in Islam"
    ],
    correctAnswer: "The Quran's language is considered literally divine with careful attention to literal and metaphorical meanings",
    explanation: "Islamic theology considers the Quran's Arabic text as divine speech (kalam Allah), with meticulous preservation of both form and content. Interpretation balances: 1) Literal meanings where applicable; 2) Recognized metaphorical usages; 3) Unseen matters (ghayb) taken at face value. This creates a distinctive approach to religious language compared to traditions with more fluid scripture concepts."
  },
  {
    question: "What is the Islamic theological position on the concept of 'secularism' as developed in Western thought?",
    options: [
      "Islam fully embraces secular separation of religion and state",
      "Islamic tradition integrates spiritual and temporal domains while distinguishing their proper spheres",
      "Islam rejects any role for religion in public life",
      "Only non-Muslim societies can be secular"
    ],
    correctAnswer: "Islamic tradition integrates spiritual and temporal domains while distinguishing their proper spheres",
    explanation: "Classical Islamic governance integrated religious values with statecraft without creating a 'theocracy' in the Western sense. The concept of 'siyasa shar'iyya' (governance according to sharia principles) allows flexibility in administrative matters while maintaining ethical foundations. This differs from both secularism and theocracy as commonly understood."
  },
  {
    question: "How does Islamic theology interpret the concept of 'human rights' in relation to modern Western conceptions?",
    options: [
      "Islamic human rights are identical to Western secular models",
      "Islam has no concept of human rights",
      "Islamic tradition has its own framework of rights (huquq) grounded in divine revelation rather than purely human reason",
      "Only Muslims have rights in Islamic theology"
    ],
    correctAnswer: "Islamic tradition has its own framework of rights (huquq) grounded in divine revelation rather than purely human reason",
    explanation: "Islamic law developed comprehensive rights concepts - rights of God (huquq Allah) and rights of humans (huquq al-'ibad) - covering individual, social, and spiritual dimensions. While sharing some common ground with modern human rights, the Islamic framework differs in its theological grounding, balance of rights and responsibilities, and specific applications (e.g., gender roles, religious expression)."
  },
  {
    question: "What is the Islamic theological perspective on the concept of 'religious reform' compared to reformation movements in other traditions?",
    options: [
      "Islam needs exactly the same kind of reformation as Christianity experienced",
      "Islamic tajdid (renewal) is an established concept but differs fundamentally from Western reformation models",
      "Islam prohibits any kind of change or reform",
      "Only non-Muslims can reform their religions"
    ],
    correctAnswer: "Islamic tajdid (renewal) is an established concept but differs fundamentally from Western reformation models",
    explanation: "Islamic tradition recognizes cyclical renewal (tajdid) as prophesied by Muhammad (pbuh), but this means reviving original teachings, not doctrinal revisionism. Reform occurs within parameters of established sources (Quran, Sunnah) and methodologies (ijtihad). This contrasts with Protestant-style reformation that challenged traditional authority structures and interpretations more fundamentally."
  },
      {
        question: "What is the epistemological framework for knowledge in Islamic thought?",
        options: [
          "Only revelation (wahy) is considered valid knowledge",
          "Only empirical observation is considered valid knowledge",
          "Knowledge comes through multiple channels: revelation, reason, sense perception, and intuition",
          "Islam has no epistemological framework",
        ],
        correctAnswer: "Knowledge comes through multiple channels: revelation, reason, sense perception, and intuition",
        explanation:
          "Islamic epistemology recognizes multiple sources of knowledge: revelation (wahy), reason (aql), sense perception (hawas), and intuition (ilham/kashf). These sources are seen as complementary, with revelation guiding reason and reason helping to understand revelation. This integrated approach was developed by scholars like Al-Ghazali, Ibn Rushd, and Ibn Sina.",
      },
      {
        question: "How does Islamic philosophy address the problem of evil?",
        options: [
          "Evil does not exist in Islamic theology",
          "Evil exists because humans have free will, and this world is a test; ultimate justice occurs in the afterlife",
          "Evil exists because God wills it without any wisdom behind it",
          "Islam has no philosophical position on evil",
        ],
        correctAnswer:
          "Evil exists because humans have free will, and this world is a test; ultimate justice occurs in the afterlife",
        explanation:
          "Islamic philosophy addresses the problem of evil through several approaches: 1) Evil is relative, not absolute; 2) Humans have free will, making moral choices possible; 3) This world is a test and temporary; 4) Suffering can lead to spiritual growth; 5) Ultimate justice will be established in the afterlife. Scholars like Ibn Sina and Al-Ghazali developed these theodicies in depth.",
      },
      {
        question: "What is the Islamic perspective on the historical development of religions?",
        options: [
          "All religions evolved naturally without divine intervention",
          "Only Islam was divinely revealed; all other religions are human inventions",
          "All religions began with pure monotheism but many gradually deviated through human intervention",
          "Islam has no perspective on religious history",
        ],
        correctAnswer:
          "All religions began with pure monotheism but many gradually deviated through human intervention",
        explanation:
          "According to Islamic theology, all authentic religions began with the same core message of monotheism (tawhid) delivered by divinely appointed messengers. Over time, human intervention led to alterations in many of these teachings, resulting in deviations from pure monotheism. This perspective is expressed in the Quran's narrative of progressive revelation culminating in the final message to Prophet Muhammad.",
      },
      {
        question: "How does Islam view the relationship between divine predestination (Qadar) and human free will?",
        options: [
          "Islam teaches absolute determinism with no human free will",
          "Islam teaches absolute free will with no divine predestination",
          "Islam teaches a nuanced position where Allah's knowledge encompasses all while humans have real moral responsibility",
          "Islam has no position on this philosophical question",
        ],
        correctAnswer:
          "Islam teaches a nuanced position where Allah's knowledge encompasses all while humans have real moral responsibility",
        explanation:
          "Islamic theology maintains a balanced position on predestination and free will. Allah's knowledge encompasses all events past and future, and nothing occurs outside His will. Simultaneously, humans have real moral agency and responsibility for their choices. This nuanced position avoids both absolute determinism (jabr) and the denial of divine foreknowledge (qadariyyah), positions rejected by mainstream Islamic theology.",
      },
      {
        question: "What is the Islamic approach to religious texts compared to modern historical-critical methods?",
        options: [
          "Islam rejects all historical-critical analysis of texts",
          "Islam fully embraces all aspects of modern historical-critical methods",
          "Islamic scholarship has its own tradition of textual analysis that shares some features with modern methods while maintaining the divine origin of revelation",
          "Islam has no methodology for textual analysis",
        ],
        correctAnswer:
          "Islamic scholarship has its own tradition of textual analysis that shares some features with modern methods while maintaining the divine origin of revelation",
        explanation:
          "Islamic scholarship developed sophisticated methods of textual analysis (usul al-tafsir, usul al-hadith) that share some features with modern historical-critical methods, such as contextual interpretation, linguistic analysis, and authentication of transmission chains. However, traditional Islamic approaches differ by maintaining the divine origin of the Quran and working within a framework that accepts supernatural intervention, while seeking to understand the text's meaning and application.",
      },
      {
        question:
          "How does Islamic philosophy address the cosmological argument for God's existence compared to Western philosophical traditions?",
        options: [
          "Islamic philosophy rejects cosmological arguments",
          "Islamic philosophy developed sophisticated cosmological arguments that influenced Western thought",
          "Islamic philosophy only borrowed cosmological arguments from Greek sources",
          "Islamic philosophy has no position on God's existence",
        ],
        correctAnswer:
          "Islamic philosophy developed sophisticated cosmological arguments that influenced Western thought",
        explanation:
          "Islamic philosophers like Al-Kindi, Al-Farabi, Ibn Sina (Avicenna), and Ibn Rushd (Averroes) developed sophisticated cosmological arguments for God's existence, particularly the argument from contingency. Ibn Sina's distinction between essence and existence and his necessary being argument significantly influenced Western scholastic philosophy, including Thomas Aquinas. These arguments were not mere borrowings from Greek sources but represented original developments within Islamic philosophical tradition.",
      },
      {
        question: "What is the Islamic perspective on religious diversity in light of Quranic verse 5:48?",
        options: [
          "Religious diversity is a mistake that should be eliminated",
          "Religious diversity is divinely intended to test humanity through competition in good deeds",
          "Religious diversity has no significance in Islamic thought",
          "Religious diversity is only tolerated as a practical necessity",
        ],
        correctAnswer: "Religious diversity is divinely intended to test humanity through competition in good deeds",
        explanation:
          "Quran 5:48 states: 'To each of you We have prescribed a law and a method. Had Allah willed, He would have made you one nation, but [He intended] to test you in what He has given you; so compete with one another in good deeds.' This verse suggests that religious diversity exists by divine will and serves the purpose of testing humanity through competition in righteousness and good deeds, rather than being a mistake or merely tolerated necessity.",
      },
      {
        question: "How does Islamic theology address the concept of religious exclusivism versus inclusivism?",
        options: [
          "Islam is purely exclusivist, teaching that only Muslims can attain salvation",
          "Islam is purely inclusivist, teaching that all religions lead to salvation",
          "Islamic theology contains elements of both exclusivism and inclusivism, with various scholarly positions",
          "Islam has no position on salvation of non-Muslims",
        ],
        correctAnswer:
          "Islamic theology contains elements of both exclusivism and inclusivism, with various scholarly positions",
        explanation:
          "Islamic theology presents a nuanced position on salvation. While affirming Islam as the final and complete revelation, the Quran also states: 'Indeed, those who believed and those who were Jews or Christians or Sabeans - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord' (2:62). Scholars have interpreted such verses differently, with some emphasizing the universal aspects of divine mercy and others focusing on the necessity of accepting the final revelation.",
      },
      {
        question:
          "What is the Islamic perspective on the relationship between religion and science compared to the historical Christian experience?",
        options: [
          "Both traditions have identical histories of conflict with science",
          "Unlike Christianity's historical conflicts with science, classical Islamic civilization integrated religious and scientific inquiry",
          "Islam rejected science while Christianity embraced it",
          "Neither tradition has any historical relationship with science",
        ],
        correctAnswer:
          "Unlike Christianity's historical conflicts with science, classical Islamic civilization integrated religious and scientific inquiry",
        explanation:
          "The relationship between religion and science developed differently in Islamic and Christian contexts. While Western Christianity experienced notable conflicts with scientific advancement (e.g., Galileo affair), classical Islamic civilization generally integrated religious and scientific inquiry. From the 8th to 14th centuries, Muslim scientists made significant contributions to mathematics, astronomy, medicine, and other fields, often motivated by religious values encouraging the pursuit of knowledge. This integration was facilitated by a worldview that saw natural phenomena as signs (ayat) pointing to divine wisdom.",
      },
    ],
  },
}

export default comparativeReligionCategory
