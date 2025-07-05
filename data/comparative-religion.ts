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
        question: "What does the Quran say about previous scriptures like the Torah and Gospel?",
        options: [
          "They are completely corrupted and worthless",
          "They were originally divine revelations but have been altered",
          "They are exactly the same as when revealed",
          "The Quran doesn't mention previous scriptures",
        ],
        correctAnswer: "They were originally divine revelations but have been altered",
        explanation:
          "The Quran acknowledges the divine origin of previous scriptures but states they have been altered over time. 'So woe to those who write the Scripture with their own hands, then say, This is from Allah' (2:79).",
      },
      {
        question: "How does Islam view the concept of original sin?",
        options: [
          "Islam fully accepts the Christian doctrine of original sin",
          "Islam rejects the concept of original sin entirely",
          "Islam believes in original sin but only for non-Muslims",
          "Islam has no position on original sin",
        ],
        correctAnswer: "Islam rejects the concept of original sin entirely",
        explanation:
          "Islam teaches that each person is born pure and accountable only for their own actions. The Quran states: 'No soul bears the burden of another' (6:164).",
      },
      {
        question: "What is the Islamic view on monasticism?",
        options: [
          "Islam encourages monastic life as the highest form of worship",
          "Islam rejects monasticism as an innovation not prescribed by God",
          "Islam allows monasticism only for women",
          "Islam requires monasticism for all believers",
        ],
        correctAnswer: "Islam rejects monasticism as an innovation not prescribed by God",
        explanation:
          "The Quran states: 'But monasticism, they invented it - We did not prescribe it for them' (57:27). Islam promotes a balanced life between worship and worldly responsibilities.",
      },
      {
        question: "How does Islam view the concept of divine incarnation?",
        options: [
          "Islam accepts divine incarnation in certain special cases",
          "Islam completely rejects any notion of God taking human form",
          "Islam believes God incarnates in every generation",
          "Islam has no position on divine incarnation",
        ],
        correctAnswer: "Islam completely rejects any notion of God taking human form",
        explanation:
          "Islamic theology strongly maintains God's transcendence. The Quran states: 'There is nothing like unto Him' (42:11) and rejects any notion of God becoming human or taking physical form.",
      },
      {
        question: "What is the Islamic perspective on salvation?",
        options: [
          "Salvation comes only through formal conversion to Islam",
          "Salvation comes through faith and righteous deeds",
          "Salvation is guaranteed for all people regardless of belief",
          "Salvation is impossible for most people",
        ],
        correctAnswer: "Salvation comes through faith and righteous deeds",
        explanation:
          "Islam teaches that salvation comes through correct belief in God combined with righteous actions. The Quran states: 'Indeed, those who believe and do righteous deeds - they are the best of creatures' (98:7).",
      },
      {
        question: "How does Islam view the concept of intercession on Judgment Day?",
        options: [
          "Islam rejects any form of intercession",
          "Islam allows intercession only by Prophet Muhammad (PBUH)",
          "Intercession is permitted but ultimately subject to Allah's permission",
          "Everyone can intercede for their family members",
        ],
        correctAnswer: "Intercession is permitted but ultimately subject to Allah's permission",
        explanation:
          "The Quran states: 'Who is there that can intercede with Him except by His permission?' (2:255). Islamic belief holds that prophets and righteous people may intercede, but only by Allah's leave.",
      },
      {
        question: "What is the Islamic view on images of prophets?",
        options: [
          "Islam encourages artistic depictions of all prophets",
          "Islam strictly prohibits any visual representations of prophets",
          "Islam allows images of prophets except Muhammad (PBUH)",
          "Islam has no position on this matter",
        ],
        correctAnswer: "Islam strictly prohibits any visual representations of prophets",
        explanation:
          "To prevent idolatry and maintain respect, Islam prohibits visual representations of all prophets. This is based on numerous authentic hadiths warning against image-making.",
      },
      {
        question: "How does Islam view the concept of predestination compared to Christianity?",
        options: [
          "Islam and Christianity have identical views on predestination",
          "Islam emphasizes predestination more strongly than most Christian denominations",
          "Christianity emphasizes predestination more than Islam",
          "Neither religion believes in predestination",
        ],
        correctAnswer: "Islam emphasizes predestination more strongly than most Christian denominations",
        explanation:
          "While both religions acknowledge God's sovereignty, Islamic theology (especially Sunni Islam) places stronger emphasis on divine decree (qadar) while maintaining human responsibility.",
      },
      {
        question: "What is the Islamic view on the status of women compared to other religions?",
        options: [
          "Islam considers women spiritually inferior to men",
          "Islam grants women equal spiritual status but different roles",
          "Islam views women as superior to men spiritually",
          "Islam has no specific teachings about women",
        ],
        correctAnswer: "Islam grants women equal spiritual status but different roles",
        explanation:
          "The Quran states: 'Whoever does righteousness, whether male or female, while believing - We will surely grant them a good life' (16:97). Islam teaches spiritual equality while recognizing gender differences in roles and responsibilities.",
      },
      {
        question: "How does Islamic prayer differ from prayer in other Abrahamic faiths?",
        options: [
          "Islamic prayer involves physical postures and set timings",
          "Islamic prayer is always silent and private",
          "Islamic prayer requires musical instruments",
          "Islamic prayer is identical to Jewish and Christian prayer",
        ],
        correctAnswer: "Islamic prayer involves physical postures and set timings",
        explanation:
          "Islamic salah involves specific physical postures (standing, bowing, prostrating) at five set times daily, distinguishing it from prayer in other traditions. The Prophet (PBUH) said: 'Pray as you have seen me praying' (Bukhari).",
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
         // NEW questions (11-30)
      {
        question: "What does the Quran say about previous scriptures like the Torah and Gospel?",
        options: [
          "They are completely corrupted and worthless",
          "They were originally divine revelations but have been altered",
          "They are exactly the same as when revealed",
          "The Quran doesn't mention previous scriptures",
        ],
        correctAnswer: "They were originally divine revelations but have been altered",
        explanation:
          "The Quran acknowledges the divine origin of previous scriptures but states they have been altered over time. 'So woe to those who write the Scripture with their own hands, then say, This is from Allah' (2:79).",
      },
      {
        question: "How does Islam view the concept of original sin?",
        options: [
          "Islam fully accepts the Christian doctrine of original sin",
          "Islam rejects the concept of original sin entirely",
          "Islam believes in original sin but only for non-Muslims",
          "Islam has no position on original sin",
        ],
        correctAnswer: "Islam rejects the concept of original sin entirely",
        explanation:
          "Islam teaches that each person is born pure and accountable only for their own actions. The Quran states: 'No soul bears the burden of another' (6:164).",
      },
      {
        question: "What is the Islamic view on monasticism?",
        options: [
          "Islam encourages monastic life as the highest form of worship",
          "Islam rejects monasticism as an innovation not prescribed by God",
          "Islam allows monasticism only for women",
          "Islam requires monasticism for all believers",
        ],
        correctAnswer: "Islam rejects monasticism as an innovation not prescribed by God",
        explanation:
          "The Quran states: 'But monasticism, they invented it - We did not prescribe it for them' (57:27). Islam promotes a balanced life between worship and worldly responsibilities.",
      },
      {
        question: "How does Islam view the concept of divine incarnation?",
        options: [
          "Islam accepts divine incarnation in certain special cases",
          "Islam completely rejects any notion of God taking human form",
          "Islam believes God incarnates in every generation",
          "Islam has no position on divine incarnation",
        ],
        correctAnswer: "Islam completely rejects any notion of God taking human form",
        explanation:
          "Islamic theology strongly maintains God's transcendence. The Quran states: 'There is nothing like unto Him' (42:11) and rejects any notion of God becoming human or taking physical form.",
      },
      {
        question: "What is the Islamic perspective on salvation?",
        options: [
          "Salvation comes only through formal conversion to Islam",
          "Salvation comes through faith and righteous deeds",
          "Salvation is guaranteed for all people regardless of belief",
          "Salvation is impossible for most people",
        ],
        correctAnswer: "Salvation comes through faith and righteous deeds",
        explanation:
          "Islam teaches that salvation comes through correct belief in God combined with righteous actions. The Quran states: 'Indeed, those who believe and do righteous deeds - they are the best of creatures' (98:7).",
      },
      {
        question: "How does Islam view the concept of intercession on Judgment Day?",
        options: [
          "Islam rejects any form of intercession",
          "Islam allows intercession only by Prophet Muhammad (PBUH)",
          "Intercession is permitted but ultimately subject to Allah's permission",
          "Everyone can intercede for their family members",
        ],
        correctAnswer: "Intercession is permitted but ultimately subject to Allah's permission",
        explanation:
          "The Quran states: 'Who is there that can intercede with Him except by His permission?' (2:255). Islamic belief holds that prophets and righteous people may intercede, but only by Allah's leave.",
      },
      {
        question: "What is the Islamic view on images of prophets?",
        options: [
          "Islam encourages artistic depictions of all prophets",
          "Islam strictly prohibits any visual representations of prophets",
          "Islam allows images of prophets except Muhammad (PBUH)",
          "Islam has no position on this matter",
        ],
        correctAnswer: "Islam strictly prohibits any visual representations of prophets",
        explanation:
          "To prevent idolatry and maintain respect, Islam prohibits visual representations of all prophets. This is based on numerous authentic hadiths warning against image-making.",
      },
      {
        question: "How does Islam view the concept of predestination compared to Christianity?",
        options: [
          "Islam and Christianity have identical views on predestination",
          "Islam emphasizes predestination more strongly than most Christian denominations",
          "Christianity emphasizes predestination more than Islam",
          "Neither religion believes in predestination",
        ],
        correctAnswer: "Islam emphasizes predestination more strongly than most Christian denominations",
        explanation:
          "While both religions acknowledge God's sovereignty, Islamic theology (especially Sunni Islam) places stronger emphasis on divine decree (qadar) while maintaining human responsibility.",
      },
      {
        question: "What is the Islamic view on the status of women compared to other religions?",
        options: [
          "Islam considers women spiritually inferior to men",
          "Islam grants women equal spiritual status but different roles",
          "Islam views women as superior to men spiritually",
          "Islam has no specific teachings about women",
        ],
        correctAnswer: "Islam grants women equal spiritual status but different roles",
        explanation:
          "The Quran states: 'Whoever does righteousness, whether male or female, while believing - We will surely grant them a good life' (16:97). Islam teaches spiritual equality while recognizing gender differences in roles and responsibilities.",
      },
      {
        question: "How does Islamic prayer differ from prayer in other Abrahamic faiths?",
        options: [
          "Islamic prayer involves physical postures and set timings",
          "Islamic prayer is always silent and private",
          "Islamic prayer requires musical instruments",
          "Islamic prayer is identical to Jewish and Christian prayer",
        ],
        correctAnswer: "Islamic prayer involves physical postures and set timings",
        explanation:
          "Islamic salah involves specific physical postures (standing, bowing, prostrating) at five set times daily, distinguishing it from prayer in other traditions. The Prophet (PBUH) said: 'Pray as you have seen me praying' (Bukhari).",
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
