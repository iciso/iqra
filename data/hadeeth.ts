import type { QuizCategory } from "@/types/quiz"

const hadeethCategory: QuizCategory = {
  id: "hadeeth",
  title: "Hadeeth",
  description: "Sayings and actions of Prophet Muhammad (PBUH)",
  icon: "",
  levels: {
    easy: [
      {
        question: "What does the term 'Hadith' mean?",
        options: ["Prayer", "Narration", "Book", "Law"],
        correctAnswer: "Narration",
        explanation:
          "Hadith literally means a narration, account, or report. In Islamic context, it refers to the sayings, actions, or approvals of Prophet Muhammad (PBUH).",
      },
      {
        question: "What are the two main components of a Hadith?",
        options: ["Quran and Sunnah", "Isnad and Matn", "Sahih and Daif", "Fiqh and Aqeedah"],
        correctAnswer: "Isnad and Matn",
        explanation:
          "A Hadith consists of the Isnad (chain of narrators) and the Matn (the actual text or content of the narration).",
      },
      {
        question: "Who compiled the collection of Hadiths known as 'Sahih Bukhari'?",
        options: ["Imam Muslim", "Imam Bukhari", "Imam Malik", "Imam Abu Dawud"],
        correctAnswer: "Imam Bukhari",
        explanation: "Sahih Bukhari was compiled by Imam Muhammad ibn Ismail al-Bukhari (810-870 CE).",
      },
      {
        question: "What is a 'Sahih' Hadith?",
        options: [
          "A Hadith narrated by a companion",
          "A Hadith found in the Quran",
          "A Hadith that is authentic and meets all criteria of acceptance",
          "A Hadith that is weak",
        ],
        correctAnswer: "A Hadith that is authentic and meets all criteria of acceptance",
        explanation:
          "A Sahih Hadith is one that is authentic and meets all the criteria of acceptance in terms of chain of narrators and content.",
      },
      {
        question: "What is the difference between Hadith and Sunnah?",
        options: [
          "They are the same",
          "Hadith is written, Sunnah is practiced",
          "Hadith is the narration, Sunnah is the practice or way",
          "Hadith is from the Quran, Sunnah is from the Prophet",
        ],
        correctAnswer: "Hadith is the narration, Sunnah is the practice or way",
        explanation:
          "Hadith refers to the narrations of the Prophet's sayings, actions, or approvals, while Sunnah refers to his established practice or way of life.",
      },
      {
        question: "What is the purpose of studying Hadith?",
        options: [
          "To replace the Quran",
          "To understand and implement the Quran and Islamic teachings correctly",
          "Only for historical interest",
          "Only for scholars, not regular Muslims",
        ],
        correctAnswer: "To understand and implement the Quran and Islamic teachings correctly",
        explanation:
          "Studying Hadith helps Muslims understand and implement the Quran and Islamic teachings correctly, as the Prophet Muhammad (PBUH) was the living example of the Quran in practice.",
      },
      {
        question: "What is a 'Daif' (weak) Hadith?",
        options: [
          "A Hadith with a short text",
          "A Hadith narrated by few people",
          "A Hadith that doesn't meet all criteria of authenticity",
          "A Hadith about minor issues",
        ],
        correctAnswer: "A Hadith that doesn't meet all criteria of authenticity",
        explanation:
          "A Daif (weak) Hadith is one that doesn't meet all the criteria of authenticity in terms of chain of narrators or content, making it less reliable than Sahih or Hasan Hadiths.",
      },
      {
        question: "Who is considered the 'Mother of the Believers' who narrated many Hadiths?",
        options: ["Fatimah", "Khadijah", "Aisha", "Zaynab"],
        correctAnswer: "Aisha",
        explanation:
          "Aisha, the wife of Prophet Muhammad (PBUH), is considered one of the 'Mothers of the Believers' and narrated approximately 2,210 Hadiths, making her one of the most prolific narrators.",
      },
      {
        question: "What is the meaning of 'Sunnah' in the context of Hadith studies?",
        options: [
          "The Quran",
          "The way or practice of the Prophet",
          "The consensus of scholars",
          "The legal rulings",
        ],
        correctAnswer: "The way or practice of the Prophet",
        explanation:
          "In the context of Hadith studies, Sunnah refers to the way or practice of Prophet Muhammad (PBUH), including his sayings, actions, and tacit approvals.",
      },
      {
        question: "What is the meaning of 'Matn' in Hadith terminology?",
        options: [
          "The chain of narrators",
          "The actual text/content of the Hadith",
          "The book containing Hadith",
          "The commentary on Hadith"
        ],
        correctAnswer: "The actual text/content of the Hadith",
        explanation: "Matn refers to the actual text or content of the Hadith, as opposed to the Isnad (chain of narrators)."
      },
      {
        question: "Which companion narrated the most Hadiths?",
        options: [
          "Abu Bakr",
          "Umar ibn al-Khattab",
          "Abu Huraira",
          "Ali ibn Abi Talib"
        ],
        correctAnswer: "Abu Huraira",
        explanation: "Abu Huraira narrated over 5,000 Hadiths, more than any other companion, as he devoted himself to learning from the Prophet (PBUH)."
      },
      {
        question: "What is 'Sahih Muslim'?",
        options: [
          "A book of Islamic history",
          "The second most authentic Hadith collection after Sahih Bukhari",
          "A book about Muslim nations",
          "A biography of Imam Muslim"
        ],
        correctAnswer: "The second most authentic Hadith collection after Sahih Bukhari",
        explanation: "Sahih Muslim, compiled by Imam Muslim ibn al-Hajjaj, is considered the second most authentic Hadith collection after Sahih Bukhari."
      },
      {
        question: "What is a 'Hasan' Hadith?",
        options: [
          "A Hadith with beautiful wording",
          "A good Hadith that doesn't reach the level of Sahih",
          "A Hadith about good manners",
          "A Hadith narrated by Hasan ibn Thabit"
        ],
        correctAnswer: "A good Hadith that doesn't reach the level of Sahih",
        explanation: "A Hasan Hadith is reliable and good, but doesn't meet all the strict conditions of a Sahih Hadith."
      },
      {
        question: "What is the purpose of the Isnad (chain of narrators)?",
        options: [
          "To make Hadith longer",
          "To verify the authenticity of Hadith",
          "To show who wrote the Hadith",
          "To count how many people narrated it"
        ],
        correctAnswer: "To verify the authenticity of Hadith",
        explanation: "The Isnad system allows scholars to verify each narrator's reliability and thus determine the Hadith's authenticity."
      },
      {
        question: "What is 'Sunan Abu Dawud'?",
        options: [
          "A book of Quranic commentary",
          "One of the six major Hadith collections",
          "A book about the Prophet's biography",
          "A book of Islamic law"
        ],
        correctAnswer: "One of the six major Hadith collections",
        explanation: "Sunan Abu Dawud, compiled by Abu Dawud al-Sijistani, is one of the Kutub al-Sittah (six canonical Hadith collections)."
      },
      {
        question: "What is a 'Mursal' Hadith?",
        options: [
          "A Hadith with a broken chain at the companion level",
          "A Hadith about inheritance",
          "A very long Hadith",
          "A Hadith found in multiple collections"
        ],
        correctAnswer: "A Hadith with a broken chain at the companion level",
        explanation: "A Mursal Hadith is one where a successor (Tabi'i) narrates directly from the Prophet (PBUH) without mentioning the companion."
      },
      {
        question: "What is 'Jami' al-Tirmidhi'?",
        options: [
          "A book of Islamic theology",
          "A collection that includes Hadith grading",
          "A book about the Prophet's miracles",
          "A book of supplications"
        ],
        correctAnswer: "A collection that includes Hadith grading",
        explanation: "Jami' al-Tirmidhi, compiled by al-Tirmidhi, is unique for including the author's grading of Hadith authenticity."
      },
      {
        question: "What is the minimum number of narrators required for a Mutawatir Hadith?",
        options: [
          "3",
          "5",
          "10",
          "No fixed number, but enough to preclude collusion"
        ],
        correctAnswer: "No fixed number, but enough to preclude collusion",
        explanation: "A Mutawatir Hadith requires enough narrators at each level to make collusion on a lie impossible, rather than a fixed number."
      },
      {
        question: "What is 'Musnad' in Hadith literature?",
        options: [
          "A Hadith collection arranged by narrator",
          "A very strong Hadith",
          "A Hadith about faith",
          "A supporting evidence"
        ],
        correctAnswer: "A Hadith collection arranged by narrator",
        explanation: "A Musnad is a Hadith collection organized by the names of the companions who narrated the Hadiths, like Musnad Ahmad."
      },
      {
        question: "What is 'Mawquf' in Hadith terminology?",
        options: [
          "A Hadith attributed to a companion",
          "A suspended Hadith",
          "A very famous Hadith",
          "A Hadith about stopping sins"
        ],
        correctAnswer: "A Hadith attributed to a companion",
        explanation: "A Mawquf Hadith is one whose chain stops at a companion and isn't attributed to the Prophet (PBUH)."
      },
      {
        question: "What is 'Sunan al-Nasa'i'?",
        options: [
          "A book about women's Hadith",
          "One of the six major Hadith collections",
          "A book about prayer times",
          "A collection of weak Hadith"
        ],
        correctAnswer: "One of the six major Hadith collections",
        explanation: "Sunan al-Nasa'i, compiled by al-Nasa'i, is one of the six canonical Hadith collections (Kutub al-Sittah)."
      },
      {
        question: "What is 'Shadh' in Hadith terminology?",
        options: [
          "A Hadith with a unique wording",
          "A Hadith that contradicts more reliable narrations",
          "A very short Hadith",
          "A Hadith about fasting"
        ],
        correctAnswer: "A Hadith that contradicts more reliable narrations",
        explanation: "A Shadh Hadith is one narrated by a reliable narrator but contradicts what more reliable narrators have reported."
      },
      {
        question: "What is 'Sunan Ibn Majah'?",
        options: [
          "The smallest of the six major Hadith collections",
          "A book about the Prophet's battles",
          "A collection of fabricated Hadith",
          "A book about Quran recitation"
        ],
        correctAnswer: "The smallest of the six major Hadith collections",
        explanation: "Sunan Ibn Majah is the sixth of the Kutub al-Sittah, containing about 4,000 Hadiths including some weak ones."
      },
      {
        question: "What is 'Munkar' in Hadith terminology?",
        options: [
          "A rejected Hadith",
          "A Hadith about prohibited matters",
          "A famous Hadith",
          "A Hadith with unknown narrators"
        ],
        correctAnswer: "A rejected Hadith",
        explanation: "A Munkar Hadith is one narrated by a weak narrator that contradicts authentic narrations."
      },
      {
        question: "What is 'Al-Adab al-Mufrad'?",
        options: [
          "A Hadith collection about manners and etiquette",
          "A book about Islamic finance",
          "A collection of Qudsi Hadith",
          "A book about Hajj rituals"
        ],
        correctAnswer: "A Hadith collection about manners and etiquette",
        explanation: "Al-Adab al-Mufrad, compiled by Imam Bukhari, focuses on Hadiths about good manners and social conduct."
      },
      {
        question: "What is 'Mu'allaq' in Hadith terminology?",
        options: [
          "A Hadith with one or more narrators missing at the beginning",
          "A very strong Hadith",
          "A Hadith about marriage",
          "A suspended Hadith"
        ],
        correctAnswer: "A Hadith with one or more narrators missing at the beginning",
        explanation: "A Mu'allaq Hadith has one or more narrators omitted at the beginning of its chain."
      },
      {
        question: "What is 'Riyad al-Salihin'?",
        options: [
          "A famous Hadith collection about piety and righteousness",
          "A book about gardens in Paradise",
          "A collection of weak Hadith",
          "A book about Islamic history"
        ],
        correctAnswer: "A famous Hadith collection about piety and righteousness",
        explanation: "Riyad al-Salihin, compiled by Imam Nawawi, is a popular collection of Hadiths about virtuous behavior."
      },
      {
        question: "What is 'Mudallis' in Hadith terminology?",
        options: [
          "A narrator who conceals defects in the chain",
          "A Hadith about tafsir",
          "A very clear Hadith",
          "A narrator with excellent memory"
        ],
        correctAnswer: "A narrator who conceals defects in the chain",
        explanation: "A Mudallis is a narrator who practices Tadlis - concealing defects in the chain of narration."
      },
      {
        question: "What is 'Al-Arba'in' (The Forty Hadith) collections?",
        options: [
          "Collections of forty selected Hadiths on various topics",
          "The forty most authentic Hadiths",
          "Hadiths about forty companions",
          "Forty books of Hadith"
        ],
        correctAnswer: "Collections of forty selected Hadiths on various topics",
        explanation: "Many scholars compiled collections of forty Hadiths on various themes, the most famous being Imam Nawawi's Forty Hadith."
      },  
      {
        question: "What is the role of Hadith in Islamic law?",
        options: [
          "It has no role",
          "It is the only source",
          "It is the second primary source after the Quran",
          "It is only used when the Quran is silent",
        ],
        correctAnswer: "It is the second primary source after the Quran",
        explanation:
          "Hadith serves as the second primary source of Islamic law after the Quran, providing detailed explanations, clarifications, and additional rulings not explicitly mentioned in the Quran.",
      },
    ],
    advanced: [
      {
        question: "What is the difference between Hadith and Sunnah?",
        options: [
          "They are the same thing",
          "Hadith is written, Sunnah is practiced",
          "Hadith is the narration, Sunnah is the practice or way",
          "Hadith is from companions, Sunnah is from the Prophet",
        ],
        correctAnswer: "Hadith is the narration, Sunnah is the practice or way",
        explanation:
          "Hadith refers to the narrations about the Prophet's sayings, actions, or approvals, while Sunnah refers to his way of life, practices, and traditions.",
      },
      {
        question: "What is a 'Mutawatir' Hadith?",
        options: [
          "A Hadith narrated by a single person",
          "A Hadith with a broken chain",
          "A Hadith transmitted by a large number of narrators at each level",
          "A Hadith that contradicts the Quran",
        ],
        correctAnswer: "A Hadith transmitted by a large number of narrators at each level",
        explanation:
          "A Mutawatir Hadith is one that has been narrated by such a large number of people at each level of the chain that it is impossible for them to have colluded in a lie.",
      },
      {
        question: "What are the 'Kutub al-Sittah'?",
        options: [
          "The six verses of the Quran",
          "The six pillars of faith",
          "The six canonical collections of Hadith",
          "The six schools of thought",
        ],
        correctAnswer: "The six canonical collections of Hadith",
        explanation:
          "Kutub al-Sittah refers to the six major collections of Hadith: Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami al-Tirmidhi, Sunan al-Nasa'i, and Sunan Ibn Majah.",
      },
      {
        question: "What is 'Ilm al-Jarh wa al-Ta'dil'?",
        options: [
          "The science of Quranic interpretation",
          "The science of evaluating Hadith narrators",
          "The science of Islamic law",
          "The science of Arabic grammar",
        ],
        correctAnswer: "The science of evaluating Hadith narrators",
        explanation:
          "Ilm al-Jarh wa al-Ta'dil is the science of critically evaluating Hadith narrators to determine their reliability and integrity.",
      },
      {
        question: "What is a 'Hadith Qudsi'?",
        options: [
          "A Hadith narrated by Qudsi, a companion",
          "A Hadith where the Prophet quotes Allah's words",
          "A Hadith about Jerusalem (Al-Quds)",
          "A Hadith that is extremely authentic",
        ],
        correctAnswer: "A Hadith where the Prophet quotes Allah's words",
        explanation:
          "A Hadith Qudsi is a narration where the Prophet Muhammad (PBUH) quotes Allah's words, but it is not part of the Quran.",
      },
      {
        question: "What is the difference between 'Hadith Sahih' and 'Hadith Hasan'?",
        options: [
          "They are the same",
          "Sahih is authentic, Hasan is good but slightly less authentic",
          "Sahih is from the Prophet, Hasan is from companions",
          "Sahih is in Arabic, Hasan is translated",
        ],
        correctAnswer: "Sahih is authentic, Hasan is good but slightly less authentic",
        explanation:
          "A Sahih Hadith meets all criteria of authenticity at the highest level, while a Hasan Hadith is reliable but doesn't reach the highest level of authenticity.",
      },
      {
        question: "What is 'Ilm Mustalah al-Hadith'?",
        options: [
          "The science of Hadith terminology and classification",
          "The science of Hadith narration",
          "The science of Hadith interpretation",
          "The science of Hadith collection",
        ],
        correctAnswer: "The science of Hadith terminology and classification",
        explanation:
          "Ilm Mustalah al-Hadith is the science that deals with the terminology, classification, and methodology of Hadith studies.",
      },
      {
        question: "What is a 'Mawdu' Hadith?",
        options: [
          "A Hadith with a complete chain",
          "A Hadith with multiple chains",
          "A fabricated or forged Hadith",
          "A Hadith with a single narrator",
        ],
        correctAnswer: "A fabricated or forged Hadith",
        explanation:
          "A Mawdu Hadith is one that has been fabricated or forged and falsely attributed to the Prophet Muhammad (PBUH).",
      },
      {
        question: "What is the concept of 'Isnad' in Hadith studies?",
        options: [
          "The text of the Hadith",
          "The chain of narrators",
          "The meaning of the Hadith",
          "The collection of Hadiths",
        ],
        correctAnswer: "The chain of narrators",
        explanation:
          "Isnad refers to the chain of narrators through which a Hadith has been transmitted, which is crucial for evaluating its authenticity.",
      },
      {
        question: "What is 'Al-Jarh wa al-Ta'dil' in Hadith sciences?",
        options: [
          "The science of criticizing and approving narrators",
          "The science of Hadith classification",
          "The science of Hadith interpretation",
          "The science of Hadith compilation"
        ],
        correctAnswer: "The science of criticizing and approving narrators",
        explanation: "Al-Jarh wa al-Ta'dil involves evaluating narrators' reliability through critical assessment of their character and memory."
      },
      {
        question: "What is 'Al-Mu'jam' in Hadith literature?",
        options: [
          "A dictionary-style Hadith collection organized by narrators' names",
          "A book of Hadith explanations",
          "A collection of rare Hadith",
          "A book about Hadith terminology"
        ],
        correctAnswer: "A dictionary-style Hadith collection organized by narrators' names",
        explanation: "Al-Mu'jam arranges Hadiths alphabetically by narrators' names, such as in Tabarani's three Mu'jams."
      },
      {
        question: "What is 'Al-'Ilal' in Hadith sciences?",
        options: [
          "The study of hidden defects in Hadith chains",
          "The study of Hadith meanings",
          "The study of abrogated Hadith",
          "The study of Qudsi Hadith"
        ],
        correctAnswer: "The study of hidden defects in Hadith chains",
        explanation: "Al-'Ilal involves identifying subtle, hidden defects that affect Hadith authenticity despite apparently sound chains."
      },
      {
        question: "What is 'Al-Mustadrak' by al-Hakim?",
        options: [
          "A collection claiming to meet Bukhari and Muslim's conditions",
          "A book of weak Hadith",
          "A commentary on Sahih Muslim",
          "A collection of fabricated Hadith"
        ],
        correctAnswer: "A collection claiming to meet Bukhari and Muslim's conditions",
        explanation: "Al-Mustadrak contains Hadiths al-Hakim claimed met Bukhari and Muslim's conditions though they weren't included in their Sahihs."
      },
      {
        question: "What is 'Al-Mudraj' in Hadith terminology?",
        options: [
          "Text inserted into a Hadith that isn't part of it",
          "A Hadith with a complete chain",
          "A Hadith about Hajj",
          "A continuous narration"
        ],
        correctAnswer: "Text inserted into a Hadith that isn't part of it",
        explanation: "Al-Mudraj refers to words inserted into a Hadith's text that aren't actually from the Prophet (PBUH)."
      },
      {
        question: "What is 'Al-Mashhur' in Hadith terminology?",
        options: [
          "A Hadith well-known among scholars though not Mutawatir",
          "A Hadith about famous battles",
          "A fabricated Hadith",
          "A Hadith narrated by famous companions"
        ],
        correctAnswer: "A Hadith well-known among scholars though not Mutawatir",
        explanation: "Al-Mashhur refers to Hadiths that became widely known among scholars though they don't meet Mutawatir criteria."
      },
      {
        question: "What is 'Al-Ahad' in Hadith classification?",
        options: [
          "Single-narrator Hadiths not reaching Mutawatir level",
          "Hadiths about divine unity",
          "The first Hadith in a collection",
          "Hadiths with very short chains"
        ],
        correctAnswer: "Single-narrator Hadiths not reaching Mutawatir level",
        explanation: "Al-Ahad are Hadiths narrated by a small number of people at each level, not reaching Mutawatir status."
      },
      {
        question: "What is 'Al-Mu'an'an' in Hadith terminology?",
        options: [
          "A Hadith using 'an' (from) between narrators",
          "A very difficult Hadith",
          "A Hadith about struggles",
          "A Hadith with named narrators"
        ],
        correctAnswer: "A Hadith using 'an' (from) between narrators",
        explanation: "Al-Mu'an'an is a Hadith where narrators use 'an' (from) rather than explicitly stating they heard it directly."
      },
      {
        question: "What is 'Al-Mu'allaqat' in Sahih Bukhari?",
        options: [
          "Hadiths with incomplete chains at the beginning",
          "The most authentic Hadiths",
          "Hadiths about hanging ornaments",
          "Suspended rulings"
        ],
        correctAnswer: "Hadiths with incomplete chains at the beginning",
        explanation: "Al-Mu'allaqat in Sahih Bukhari are Hadiths where Bukhari omitted part of the chain at the beginning."
      },
      {
        question: "What is 'Al-Gharib' in Hadith terminology?",
        options: [
          "A Hadith with only one narrator at any stage",
          "A strange Hadith",
          "A Hadith about strangers",
          "A rejected Hadith"
        ],
        correctAnswer: "A Hadith with only one narrator at any stage",
        explanation: "Al-Gharib refers to Hadiths with only one narrator at any stage of the chain, making them 'strange' in that sense."
      },
      {
        question: "What is 'Al-Mawdu'at' literature?",
        options: [
          "Books identifying fabricated Hadith",
          "Books of authentic Hadith",
          "Books of Qudsi Hadith",
          "Books of Hadith explanations"
        ],
        correctAnswer: "Books identifying fabricated Hadith",
        explanation: "Al-Mawdu'at books specialize in identifying and exposing fabricated Hadith, like Ibn al-Jawzi's 'Al-Mawdu'at'."
      },
      {
        question: "What is 'Al-Mutaba'ah' in Hadith verification?",
        options: [
          "Seeking supporting chains for a Hadith",
          "Memorizing Hadith perfectly",
          "Following the Prophet's actions",
          "The final check of a Hadith collection"
        ],
        correctAnswer: "Seeking supporting chains for a Hadith",
        explanation: "Al-Mutaba'ah involves finding supporting chains to strengthen a Hadith narrated through another chain."
      },
      {
        question: "What is 'Al-Mursal al-Khafi'?",
        options: [
          "A hidden break where a narrator omits someone he met",
          "A very weak Mursal",
          "A Hadith about hidden matters",
          "A special category in Malik's Muwatta"
        ],
        correctAnswer: "A hidden break where a narrator omits someone he met",
        explanation: "Al-Mursal al-Khafi occurs when a narrator omits someone he actually met, creating a hidden discontinuity."
      },
      {
        question: "What is 'Al-'Aziz' in Hadith terminology?",
        options: [
          "A Hadith with at least two narrators at every level",
          "A very strong Hadith",
          "A Hadith about Allah's might",
          "A rare Hadith"
        ],
        correctAnswer: "A Hadith with at least two narrators at every level",
        explanation: "Al-'Aziz is a Hadith with at least two narrators at every level of its chain, though not reaching Mutawatir."
      },
      {
        question: "What is 'Al-Mu'talif wa al-Mukhtalif' in narrator names?",
        options: [
          "Study of similar-looking names that are actually different",
          "Agreement and disagreement among scholars",
          "Matching chains of narration",
          "Similar Hadiths with different wordings"
        ],
        correctAnswer: "Study of similar-looking names that are actually different",
        explanation: "This science distinguishes between narrators whose names appear similar but are actually different people."
      },
      {
        question: "What is 'Al-Mudtarib' in Hadith terminology?",
        options: [
          "A Hadith with conflicting versions that can't be reconciled",
          "A Hadith about times of confusion",
          "A very long chain",
          "A Hadith causing scholarly disagreement"
        ],
        correctAnswer: "A Hadith with conflicting versions that can't be reconciled",
        explanation: "Al-Mudtarib is a Hadith reported in conflicting ways with no way to determine the correct version."
      },
      {
        question: "What is 'Al-Marfu' al-Hukmi'?",
        options: [
          "A companion's statement that can't be from personal opinion",
          "A highly elevated chain",
          "A Hadith about rulings",
          "A judgment about Hadith authenticity"
        ],
        correctAnswer: "A companion's statement that can't be from personal opinion",
        explanation: "Al-Marfu' al-Hukmi is a companion's statement on matters they couldn't have known except from the Prophet (PBUH)."
      },
      {
        question: "What is 'Al-Mawqif' in Hadith terminology?",
        options: [
          "A narration stopping at a companion without reaching the Prophet",
          "A Hadith about standing in prayer",
          "A well-established Hadith",
          "A Hadith with a complete chain"
        ],
        correctAnswer: "A narration stopping at a companion without reaching the Prophet",
        explanation: "Al-Mawqif is a narration attributed to a companion without being raised to the Prophet (PBUH)."
      },
      {
        question: "What is 'Al-Mu'allal' in Hadith criticism?",
        options: [
          "A Hadith with subtle defects affecting its authenticity",
          "A Hadith about causes and reasons",
          "A connected chain",
          "A Hadith with explicit defects"
        ],
        correctAnswer: "A Hadith with subtle defects affecting its authenticity",
        explanation: "Al-Mu'allal refers to Hadiths with subtle, often hidden defects that affect their reliability."
      },
      {
        question: "What is 'Al-Munkati'' in Hadith terminology?",
        options: [
          "A Hadith with a broken chain at any point",
          "A rejected Hadith",
          "A Hadith about prohibited matters",
          "A disconnected narration"
        ],
        correctAnswer: "A Hadith with a broken chain at any point",
        explanation: "Al-Munkati' is a Hadith with any discontinuity in its chain of narration, not just at the companion level."
      },
      {
        question: "What is the concept of 'Tadlis' in Hadith terminology?",
        options: [
          "Adding extra information to a Hadith",
          "Concealing a defect in the chain of narration",
          "Translating a Hadith incorrectly",
          "Fabricating a Hadith completely",
        ],
        correctAnswer: "Concealing a defect in the chain of narration",
        explanation:
          "Tadlis refers to the practice of concealing a defect in the chain of narration, such as when a narrator gives the impression that he heard the Hadith directly from someone he actually didn't meet or hear from directly. This is considered a form of misrepresentation that affects the authenticity of the Hadith.",
      },
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!hadeethCategory.levels.intermediate) {
  hadeethCategory.levels.intermediate = [...hadeethCategory.levels.easy]
}

export default hadeethCategory
