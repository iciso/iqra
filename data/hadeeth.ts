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
          "A Hadith that is authentic and meets all rigorous criteria of acceptance",
          "A Hadith that has been abrogated",
        ],
        correctAnswer: "A Hadith that is authentic and meets all rigorous criteria of acceptance",
        explanation:
          "A Sahih (authentic) Hadith is one with a continuous chain of trustworthy narrators, free from defects or irregularities.",
      },
      {
        question: "What is the famous Hadith collection compiled by Imam Muslim known as?",
        options: ["Sahih Muslim", "Sunan an-Nasa'i", "Jami at-Tirmidhi", "Muwatta Malik"],
        correctAnswer: "Sahih Muslim",
        explanation:
          "Sahih Muslim is one of the Kutub al-Sittah (six canonical Hadith books), compiled by Imam Muslim ibn al-Hajjaj.",
      },
      {
        question: "According to a famous Hadith, actions are judged by what?",
        options: ["Their outcomes", "Intentions", "Public perception", "Speed"],
        correctAnswer: "Intentions",
        explanation:
          "The famous opening Hadith of Imam Nawawi's collection states: 'Actions are but by intentions, and every person shall have what he intended.'",
      },
      {
        question: "Which of the following is NOT part of the 'Kutub al-Sittah' (Six Canonical Hadith Books)?",
        options: ["Sahih Bukhari", "Sunan Ibn Majah", "Musnad Ahmad", "Sunan Abu Dawud"],
        correctAnswer: "Musnad Ahmad",
        explanation:
          "Musnad Ahmad is a massive and foundational Hadith collection, but it is not traditionally included among the Kutub al-Sittah.",
      },
      {
        question: "What is a 'Da'if' Hadith?",
        options: ["A fabricated Hadith", "A weak Hadith", "A strongly authenticated Hadith", "A Hadith narrated by a Prophet"],
        correctAnswer: "A weak Hadith",
        explanation:
          "A Da'if (weak) Hadith is one that fails to meet the rigorous criteria of authenticity due to a break in the chain or unreliability of a narrator.",
      },
      {
        question: "What term is used for a Hadith whose chain of narration goes directly back to Prophet Muhammad (PBUH)?",
        options: ["Marfu'", "Mawquf", "Maqtu'", "Mursal"],
        correctAnswer: "Marfu'",
        explanation:
          "A Marfu' Hadith is a prophetic tradition whose chain of transmission is elevated directly to the Messenger of Allah (PBUH).",
      },
      {
        question: "What does 'Sunnah' refer to in Islamic terminology?",
        options: ["Only the Quranic verses", "The practices, traditions, and approvals of Prophet Muhammad (PBUH)", "Voluntary charity", "Legal verdicts of judges"],
        correctAnswer: "The practices, traditions, and approvals of Prophet Muhammad (PBUH)",
        explanation:
          "Sunnah encompasses the way, lifestyle, teachings, and approvals of Prophet Muhammad (PBUH) which serve as a primary source of guidance.",
      },
      {
        question: "Which companion of the Prophet narrated the highest number of Hadiths?",
        options: ["Abu Bakr as-Siddiq", "Umar ibn al-Khattab", "Abu Hurayrah", "Aisha bint Abi Bakr"],
        correctAnswer: "Abu Hurayrah",
        explanation:
          "Abu Hurayrah devoted his time entirely to in-depth companionship of the Prophet, memorizing and narrating over 5,300 Hadiths.",
      },
      {
        question: "What is a 'Mutawatir' Hadith?",
        options: [
          "A Hadith narrated by only one person",
          "A Hadith transmitted by such a massive number of narrators that collusion upon a lie is impossible",
          "A weak Hadith",
          "A fabricated report"
        ],
        correctAnswer: "A Hadith transmitted by such a massive number of narrators that collusion upon a lie is impossible",
        explanation:
          "A Mutawatir Hadith offers absolute certainty of authenticity because it was reported independently by numerous chains at every generation.",
      },
      {
        question: "Which companion compiled one of the earliest written collections of Hadith known as 'Al-Sahifah al-Sadiqah'?",
        options: ["Abdullah ibn Amr ibn al-Aas", "Ali ibn Abi Talib", "Anas ibn Malik", "Jabir ibn Abdullah"],
        correctAnswer: "Abdullah ibn Amr ibn al-Aas",
        explanation:
          "Abdullah ibn Amr wrote down sayings of the Prophet with the Prophet's explicit permission in his collection known as Al-Sahifah al-Sadiqah.",
      },
      {
        question: "What is a 'Mawdu' Hadith?",
        options: ["An authentic Hadith", "A fabricated or forged Hadith", "A Hadith with a missing link", "A Hadith narrated by a woman"],
        correctAnswer: "A fabricated or forged Hadith",
        explanation:
          "A Mawdu' Hadith is a falsehood falsely attributed to Prophet Muhammad (PBUH), which scholars worked tirelessly to identify and expose.",
      },
      {
        question: "In which city did Imam al-Bukhari spend a significant portion of his life studying and compiling Hadith?",
        options: ["Makkah and Madinah", "Cairo", "Bukhara and Samarkand", "Baghdad"],
        correctAnswer: "Bukhara and Samarkand",
        explanation:
          "Imam al-Bukhari hailed from Bukhara (in modern Uzbekistan) and traveled extensively across the Islamic world to collect Hadith.",
      },
      {
        question: "What does 'Isnad' mean in the science of Hadith?",
        options: ["The text of the Hadith", "The chain of narrators", "The grading of authenticity", "The commentary"],
        correctAnswer: "The chain of narrators",
        explanation:
          "Isnad is the chain of authorities who transmitted a specific report, linking the collector back to the Prophet (PBUH) or companion.",
      },
      {
        question: "What is the primary criteria Imam al-Bukhari used to verify that two narrators in a chain actually met each other?",
        options: ["Contemporaneousness only",
          "Definite proof of contemporary existence and proven personal meeting (Liqa)",
          "Living in the same city",
          "Sharing the same family name"
        ],
        correctAnswer: "Definite proof of contemporary existence and proven personal meeting (Liqa)",
        explanation:
          "Imam al-Bukhari introduced the stringent criterion that narrators must be proven to have actually met, ensuring true oral transmission.",
      },
      {
        question: "Which of the six canonical books is often referred to as 'Al-Jami al-Sahih'?",
        options: ["Sunan an-Nasa'i", "Sahih al-Bukhari", "Sunan Abu Dawud", "Sunan Ibn Majah"],
        correctAnswer: "Sahih al-Bukhari",
        explanation:
          "Imam al-Bukhari titled his work Al-Jami al-Sahih al-Musnad min Hadith Rasul Allah wa Sunanihi wa Ayyamihi.",
      },
      {
        question: "What is a 'Qudsi' Hadith (Sacred Hadith)?",
        options: [
          "A verse from the Quran",
          "A statement where the meaning is from Allah conveyed in the Prophet's own words",
          "A saying of Abu Bakr",
          "A ruling by an early jurist"
        ],
        correctAnswer: "A statement where the meaning is from Allah conveyed in the Prophet's own words",
        explanation:
          "Hadith Qudsi are revelations from Allah expressed in the wording of Prophet Muhammad (PBUH), distinct from the miraculous wording of the Quran.",
      },
      {
        question: "Which female companion narrated numerous Hadiths regarding the private and domestic life of Prophet Muhammad (PBUH)?",
        options: ["Fatimah bint Muhammad", "Aisha bint Abi Bakr", "Khadijah bint Khuwaylid", "Sumayyah bint Khayyat"],
        correctAnswer: "Aisha bint Abi Bakr",
        explanation:
          "Aisha is among the top narrators of Hadith, having transmitted over 2,200 narrations regarding Sunnah, jurisprudence, and daily life.",
      },
      {
        question: "What is a 'Hasan' Hadith?",
        options: [
          "A weak Hadith",
          "A sound and good Hadith whose narrators are trustworthy but slightly less rigorous than Sahih",
          "A fabricated narration",
          "A Quranic recitation rule"
        ],
        correctAnswer: "A sound and good Hadith whose narrators are trustworthy but slightly less rigorous than Sahih",
        explanation:
          "A Hasan Hadith is reliable and acceptable for establishing legal rulings and moral guidance, though its chain has slightly lighter precision than Sahih.",
      },
      {
        question: "Who compiled 'Al-Muwatta', one of the earliest surviving comprehensive collections of Islamic law and Hadith?",
        options: ["Imam Malik ibn Anas", "Imam Abu Hanifa", "Imam Shafi'i", "Imam Ahmad ibn Hanbal"],
        correctAnswer: "Imam Malik ibn Anas",
        explanation:
          "Imam Malik compiled Al-Muwatta in Madinah, combining Hadiths of the Prophet with legal verdicts of early Madinan jurists.",
      },
      {
        question: "What is the science dedicated to evaluating the trustworthiness, character, and memory of Hadith narrators called?",
        options: ["Ilm al-Tafsir", "Ilm al-Rijal (Jarh wa Ta'dil)", "Ilm al-Balagah", "Ilm al-Faraid"],
        correctAnswer: "Ilm al-Rijal (Jarh wa Ta'dil)",
        explanation:
          "Ilm al-Rijal (Science of Men) and Jarh wa Ta'dil (Invalidation and Accreditation) rigorously scrutinize the biographical profiles of all narrators.",
      },
      {
        question: "What is a 'Mawquf' Hadith?",
        options: [
          "A report ending at a Companion (statement or action of a Sahabi)",
          "A report going back to the Prophet",
          "A report attributed to a Tabi'i",
          "A fabricated story"
        ],
        correctAnswer: "A report ending at a Companion (statement or action of a Sahabi)",
        explanation:
          "A Mawquf Hadith is a narration attributed directly to a Companion rather than the Prophet himself.",
      },
      {
        question: "What is a 'Maqtu' Hadith?",
        options: [
          "A report attributed to a Tabi'i (successor) or later generation",
          "A broken chain",
          "A prophetic saying",
          "A Quranic verse"
        ],
        correctAnswer: "A report attributed to a Tabi'i (successor) or later generation",
        explanation:
          "A Maqtu' narration refers to statements or actions originating from the Tabi'un (successors to the companions).",
      },
      {
        question: "Which of the six canonical books is organized strictly according to legal topics (Fiqh chapters)?",
        options: ["Musnad Ahmad", "Sahih Bukhari", "Sunan collections (Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah)", "Al-Mustadrak"],
        correctAnswer: "Sunan collections (Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah)",
        explanation:
          "Sunan books are arranged according to legal chapters (Kitab al-Taharah, Kitab al-Salah, etc.) to assist jurists in finding relevant legal proofs.",
      },
      {
        question: "What does 'Matn' refer to in Hadith terminology?",
        options: ["The chain of narrators", "The actual spoken text or content of the Hadith", "The grading of the report", "The introduction of the book"],
        correctAnswer: "The actual spoken text or content of the Hadith",
        explanation:
          "The Matn is the core text or substance of the saying, action, or description attributed to the Prophet (PBUH).",
      },
      {
        question: "Which companion narrated the famous Hadith of Gabriel (Hadith Jibril) concerning Islam, Iman, and Ihsan?",
        options: ["Umar ibn al-Khattab", "Abu Hurayrah", "Anas ibn Malik", "Abdullah ibn Umar"],
        correctAnswer: "Umar ibn al-Khattab",
        explanation:
          "Umar ibn al-Khattab narrated how Angel Jibril appeared in human form to teach the Muslims the core pillars of Islam, Iman, and Ihsan.",
      },
      {
        question: "What is a 'Gharib' Hadith?",
        options: [
          "A Hadith narrated by a very large crowd",
          "A Hadith reported by only a single narrator at some point in its chain",
          "A fabricated saying",
          "A Quranic recitation style"
        ],
        correctAnswer: "A Hadith reported by only a single narrator at some point in its chain",
        explanation:
          "A Gharib (strange/isolated) Hadith is one where at least one stage of the chain features only a single transmitter.",
      },
      {
        question: "Who was the companion known as 'Tarjuman al-Quran' (The Interpreter of the Quran) who also narrated many Hadiths?",
        options: ["Abdullah ibn Abbas", "Abdullah ibn Masud", "Zayd ibn Thabit", "Ubayy ibn Ka'b"],
        correctAnswer: "Abdullah ibn Abbas",
        explanation:
          "Abdullah ibn Abbas was the cousin of the Prophet, renowned for his profound understanding of Quranic tafsir and prophetic traditions.",
      },
      {
        question: "What is a 'Mursal' Hadith?",
        options: [
          "A Hadith where a Tabi'i narrates directly from the Prophet without mentioning the intermediate companion",
          "A fully authentic narration",
          "A narration with multiple continuous chains",
          "A written document"
        ],
        correctAnswer: "A Hadith where a Tabi'i narrates directly from the Prophet without mentioning the intermediate companion",
        explanation:
          "A Mursal Hadith has a missing link at the level of the companion, which introduces a classification debate among jurists.",
      },
      {
        question: "Which early caliph officially ordered the systematic compilation and burning of unofficial divergent Hadith collections to prevent confusion after the Quran was standardized?",
        options: ["Umar ibn al-Khattab", "Uthman ibn Affan", "Umar ibn Abd al-Aziz", "Abu Bakr as-Siddiq"],
        correctAnswer: "Umar ibn Abd al-Aziz",
        explanation:
          "Umar ibn Abd al-Aziz (Umar II) officially commissioned scholars like Ibn Shihab al-Zuhri to compile and preserve authentic Hadiths systematically.",
      },
      {
        question: "What is the term for a Hadith that contains an apparent contradiction with another authentic text, which scholars attempt to resolve?",
        options: ["Mukhtalif al-Hadith", "Mawdu'", "Mudraj", "Maqlub"],
        correctAnswer: "Mukhtalif al-Hadith",
        explanation:
          "Mukhtalif al-Hadith refers to traditions that appear contradictory, prompting specialized scholars to reconcile or determine chronological abrogation.",
      },
      {
        question: "What is a 'Mudraj' Hadith?",
        options: [
          "A Hadith into which a narrator has inserted their own commentary or words",
          "A completely fabricated report",
          "A Hadith with a broken chain",
          "A very short narration"
        ],
        correctAnswer: "A Hadith into which a narrator has inserted their own commentary or words",
        explanation:
          "An interpolation (Mudraj) occurs when explanatory remarks from a narrator get accidentally blended into the prophetic text.",
      },
      {
        question: "Which collection is famous for being compiled by Imam Abu Dawud as-Sijistani?",
        options: ["Sunan Abu Dawud", "Sahih Abu Dawud", "Musnad Abu Dawud", "Jami Abu Dawud"],
        correctAnswer: "Sunan Abu Dawud",
        explanation:
          "Imam Abu Dawud compiled Sunan Abu Dawud, focusing primarily on legal traditions and Sunnahs related to jurisprudence.",
      },
      {
        question: "What does the term 'Musnad' mean when used as a title for a Hadith book?",
        options: [
          "A book arranged by the names of the companions who narrated each Hadith",
          "A book arranged by legal topics",
          "A book containing only weak narrations",
          "A commentary on the Quran"
        ],
        correctAnswer: "A book arranged by the names of the companions who narrated each Hadith",
        explanation:
          "A Musnad collection (such as Musnad Ahmad) groups all narrations transmitted by each companion together under their name.",
      },
      {
        question: "What is a 'Mudhtarib' (confused) Hadith?",
        options: [
          "A Hadith narrated in multiple conflicting ways with equal strength, making resolution impossible",
          "A Hadith with a missing narrator",
          "A universally accepted narration",
          "A very clear prophetic instruction"
        ],
        correctAnswer: "A Hadith narrated in multiple conflicting ways with equal strength, making resolution impossible",
        explanation:
          "A Mudhtarib Hadith fluctuates across various contradictory versions without a clear way to determine the correct original wording.",
      },
      {
        question: "Which of the six canonical books was compiled by Imam Muhammad ibn Isa at-Tirmidhi?",
        options: ["Jami at-Tirmidhi (Sunan at-Tirmidhi)", "Sahih at-Tirmidhi", "Musnad at-Tirmidhi", "Muwatta at-Tirmidhi"],
        correctAnswer: "Jami at-Tirmidhi (Sunan at-Tirmidhi)",
        explanation:
          "Imam at-Tirmidhi compiled Jami at-Tirmidhi, renowned for noting the grades of Hadiths and the legal views of various companion and madhhab schools.",
      },
      {
        question: "What is a 'Shadh' Hadith?",
        options: [
          "A reliable narration",
          "An anomalous Hadith narrated by a trustworthy person that contradicts reports from more reliable narrators",
          "A fabricated saying",
          "A prophetic prayer"
        ],
        correctAnswer: "An anomalous Hadith narrated by a trustworthy person that contradicts reports from more reliable narrators",
        explanation:
          "A Shadh (irregular) Hadith is considered defective because a trustworthy narrator contradicted a stronger consensus of reliable transmitters.",
      },
      {
        question: "Why is the study of Hadith (Ulum al-Hadith) considered critical alongside the Noble Quran?",
        options: [
          "It replaces the Quran",
          "It provides the practical application, explanation, and contextual framework for implementing Quranic injunctions",
          "It is only meant for historians",
          "It contains stories unrelated to worship"
        ],
        correctAnswer: "It provides the practical application, explanation, and contextual framework for implementing Quranic injunctions",
        explanation:
          "The Sunnah explains how to perform obligations like prayer and zakat mandated generally in the Quran, serving as the second primary source of Islam.",
      }
    ],
    intermediate: [
      {
        question: "Which famous 13th-century collection of forty (actually forty-two) foundational Hadiths was compiled by Imam an-Nawawi?",
        options: ["Al-Arba'in al-Nawawiyyah", "Riyad as-Salihin", "Bulugh al-Maram", "Al-Adab al-Mufrad"],
        correctAnswer: "Al-Arba'in al-Nawawiyyah",
        explanation:
          "Imam an-Nawawi's Forty Hadith is a celebrated concise compendium encapsulating the core principles, ethics, and legal foundations of Islam.",
      },
      {
        question: "What technical term describes a Hadith whose chain of narration is unbroken, with each narrator explicitly stating they heard it from the one above them (e.g., using 'Haddathana' or 'Sami'tu')?",
        options: ["Musnad / Muttasil", "Mursal", "Munqati", "Mu'allaq"],
        correctAnswer: "Musnad / Muttasil",
        explanation:
          "A Muttasil (continuous) Hadith is one with an uninterrupted chain from the final narrator back to the Prophet or companion.",
      },
      {
        question: "What is a 'Mu'allaq' Hadith in the terminology of Hadith sciences?",
        options: [
          "A Hadith with one or more narrators omitted from the beginning of the chain",
          "A Hadith with a missing narrator in the middle",
          "A fully authentic unbroken narration",
          "A fabricated saying"
        ],
        correctAnswer: "A Hadith with one or more narrators omitted from the beginning of the chain",
        explanation:
          "A Mu'allaq narration is one where the compiler omits the entire chain or the upper narrators from their side. (Though Imam al-Bukhari uses Mu'allaq reports in chapter headings, his main legal rulings rely on Muttasil chains).",
      },
      {
        question: "Which prominent companion and scribe of the Prophet compiled a major Mushaf and is famously quoted regarding the preservation of Hadith?",
        options: ["Zayd ibn Thabit", "Abu Hurayrah", "Abdullah ibn Umar", "Anas ibn Malik"],
        correctAnswer: "Zayd ibn Thabit",
        explanation:
          "Zayd ibn Thabit played a pivotal role in both Quranic compilation and transmitting precise prophetic traditions.",
      },
      {
        question: "What is a 'Munqati' Hadith?",
        options: [
          "A Hadith in which a single narrator is missing anywhere in the middle of the chain",
          "An uninterrupted continuous chain",
          "A narration with multiple parallel chains",
          "A Hadith attributed directly to the Prophet"
        ],
        correctAnswer: "A Hadith in which a single narrator is missing anywhere in the middle of the chain",
        explanation:
          "A Munqati (broken/disconnected) Hadith suffers from a discontinuity where a narrator is dropped at some point in the Isnad.",
      },
      {
        question: "Which of the six canonical books was compiled by Imam An-Nasa'i?",
        options: ["Sunan an-Nasa'i (Al-Sunan al-Sugra)", "Sahih an-Nasa'i", "Musnad an-Nasa'i", "Muwatta an-Nasa'i"],
        correctAnswer: "Sunan an-Nasa'i (Al-Sunan al-Sugra)",
        explanation:
          "Imam an-Nasa'i compiled Al-Sunan al-Sugra (commonly known as Sunan an-Nasa'i), renowned for having very strict criteria regarding narrator reliability.",
      },
      {
        question: "What is a 'Mu'dal' Hadith?",
        options: [
          "A Hadith where two or more consecutive narrators are missing from the chain",
          "A Hadith with a single missing narrator",
          "An authentic narration",
          "A fabricated report"
        ],
        correctAnswer: "A Hadith where two or more consecutive narrators are missing from the chain",
        explanation:
          "A Mu'dal narration is considered weaker than a Munqati or Mursal because multiple consecutive links are absent.",
      },
      {
        question: "Which classical scholar authored 'Bulugh al-Maram min Adillat al-Ahkam', a crucial reference book compiling Hadiths specifically related to Islamic jurisprudence?",
        options: ["Ibn Hajar al-Asqalani", "Imam an-Nawawi", "Ibn Qudamah", "Al-Mundhiri"],
        correctAnswer: "Ibn Hajar al-Asqalani",
        explanation:
          "Ibn Hajar al-Asqalani compiled Bulugh al-Maram, drawing legal proofs from the primary Hadith compendiums for Hanafi, Shafi'i, and other madhhab jurists.",
      },
      {
        question: "What is a 'Mudallis' (Tadlis) in the context of Hadith narrators?",
        options: [
          "A narrator who obscures a defect in the chain or masks the identity of their immediate teacher",
          "A narrator with exceptional memory",
          "A companion who narrated thousands of reports",
          "A scholar who graded Hadiths as Sahih"
        ],
        correctAnswer: "A narrator who obscures a defect in the chain or masks the identity of their immediate teacher",
        explanation:
          "Tadlis (concealment) involves subtly phrasing a transmission to imply direct hearing from someone when the narration actually came via an intermediary.",
      },
      {
        question: "Which companion served the Prophet for ten years from childhood and narrated 2,286 Hadiths?",
        options: ["Anas ibn Malik", "Abdullah ibn Umar", "Jabir ibn Abdullah", "Abu Sa'id al-Khudri"],
        correctAnswer: "Anas ibn Malik",
        explanation:
          "Anas ibn Malik lived in the Prophet's household from childhood until the Prophet's passing, providing intimate eyewitness accounts of his daily habits.",
      },
      {
        question: "What is a 'Musalsal' Hadith?",
        options: [
          "A Hadith where every narrator in the chain transmits it using the exact same phrase, state, or manner",
          "A weak narration with a broken chain",
          "A fabricated story",
          "A Hadith found only in Sahih Muslim"
        ],
        correctAnswer: "A Hadith where every narrator in the chain transmits it using the exact same phrase, state, or manner",
        explanation:
          "A Musalsal (chained) narration features uniform transmission conditions, such as all narrators performing a specific action or using an identical oath.",
      },
      {
        question: "Which scholar compiled 'Riyad as-Salihin' (Gardens of the Righteous), one of the most widely read ethical and spiritual Hadith compilations worldwide?",
        options: ["Imam an-Nawawi", "Imam al-Bukhari", "Imam at-Tirmidhi", "Ibn Hibban"],
        correctAnswer: "Imam an-Nawawi",
        explanation:
          "Riyad as-Salihin categorizes authentic Hadiths by moral, spiritual, and social themes to guide everyday Muslim character.",
      },
      {
        question: "What is a 'Maqlub' Hadith?",
        options: [
          "A Hadith where a narrator accidentally reverses parts of the text (Matn) or swaps the names in the chain (Isnad)",
          "An authentic and unbroken Hadith",
          "A Hadith with a missing link",
          "A universally accepted report"
        ],
        correctAnswer: "A Hadith where a narrator accidentally reverses parts of the text (Matn) or swaps the names in the chain (Isnad)",
        explanation:
          "A Maqlub (inverted/flipped) narration occurs due to a slip of memory by a narrator, which expert critics easily detect.",
      },
      {
        question: "Which of the six canonical books was compiled by Imam Ibn Majah al-Qazwini?",
        options: ["Sunan Ibn Majah", "Sahih Ibn Majah", "Musnad Ibn Majah", "Muwatta Ibn Majah"],
        correctAnswer: "Sunan Ibn Majah",
        explanation:
          "Imam Ibn Majah compiled Sunan Ibn Majah, completing the traditional six canonical books of Hadith literature.",
      },
      {
        question: "What is a 'Ziyadat al-Thiqah' in Hadith criticism?",
        options: [
          "An additional phrase or detail added to the text by a trustworthy narrator",
          "A fabricated addition by a liar",
          "A missing link in the chain",
          "A weak narrator"
        ],
        correctAnswer: "An additional phrase or detail added to the text by a trustworthy narrator",
        explanation:
          "When a reliable narrator adds extra wording to a Hadith not found in other narrations, Hadith critics evaluate whether the addition is acceptable (Ziyadat al-Thiqah Maqbulah).",
      },
      {
        question: "Which companion narrated the Hadith of the Seven People whom Allah will shade under His shade on the Day of Judgment?",
        options: ["Abu Hurayrah", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abdullah ibn Masud"],
        correctAnswer: "Abu Hurayrah",
        explanation:
          "Abu Hurayrah narrated the famous Sahih Bukhari and Muslim tradition detailing the seven categories of righteous individuals granted divine shade.",
      },
      {
        question: "What is an 'I'tilaf wa Ikhtilaf' in Hadith terminology?",
        options: [
          "The study of spelling, pronunciation, and disambiguation of narrator names that look similar in Arabic script",
          "The study of weak chains",
          "The grading of Hadith authenticity",
          "The comparison of Quranic verses"
        ],
        correctAnswer: "The study of spelling, pronunciation, and disambiguation of narrator names that look similar in Arabic script",
        explanation:
          "Because early Arabic script lacked diacritical dots, Ilm al-I'tilaf wa Ikhtilaf prevented scholars from confusing names like Sulayman and Salam.",
      },
      {
        question: "Which prominent Tabi'i and jurist from Madinah famously stated: 'This knowledge is religion, so look to whom you take your religion from'?",
        options: ["Muhammad ibn Sirin", "Hasan al-Basri", "Said ibn al-Musayyib", "Ata ibn Abi Rabah"],
        correctAnswer: "Muhammad ibn Sirin",
        explanation:
          "Muhammad ibn Sirin emphasized that the rigorous verification of chains (Isnad) became mandatory once the fitna (civil strife) began.",
      },
      {
        question: "What is a 'Mutabi'' in Hadith methodology?",
        options: [
          "A supporting narration where another narrator corroborates a weaker narrator by reporting the same meaning or text",
          "A fabricated report",
          "A broken chain",
          "A prophetic decree"
        ],
        correctAnswer: "A supporting narration where another narrator corroborates a weaker narrator by reporting the same meaning or text",
        explanation:
          "A Mutabi' (corroborating report) helps elevate a weak or single-strand Hadith by showing that another reliable chain supports it.",
      },
      {
        question: "Which monumental Hadith encyclopedia was compiled by Imam Al-Bayhaqi, gathering traditions supporting Shafi'i jurisprudence?",
        options: ["Al-Sunan al-Kubra (Sunan al-Bayhaqi)", "Sahih al-Bayhaqi", "Musnad al-Bayhaqi", "Al-Muwatta"],
        correctAnswer: "Al-Sunan al-Kubra (Sunan al-Bayhaqi)",
        explanation:
          "Imam Al-Bayhaqi's massive Al-Sunan al-Kubra is a cornerstone work demonstrating how Shafi'i legal principles align with authentic Sunnah.",
      },
      {
        question: "What is an 'Ahad' Hadith?",
        options: [
          "A Hadith narrated by individuals that does not reach the level of Mutawatir",
          "A Hadith narrated by thousands",
          "A fabricated narration",
          "A Quranic verse"
        ],
        correctAnswer: "A Hadith narrated by individuals that does not reach the level of Mutawatir",
        explanation:
          "An Ahad Hadith is transmitted by one or more narrators but fails to meet the massive multi-chain threshold of Mutawatir. It still establishes legal rulings if authentic.",
      },
      {
        question: "Which companion is famous for narrating the Hadith of the 'Three Who Stayed Behind' from the expedition of Tabuk?",
        options: ["Ka'b ibn Malik", "Abdullah ibn Ka'b", "Hassan ibn Thabit", "Abu Ayyub al-Ansari"],
        correctAnswer: "Ka'b ibn Malik",
        explanation:
          "Ka'b ibn Malik detailed his profound personal test of truthfulness and subsequent forgiveness revealed in Surah At-Tawbah.",
      },
      {
        question: "What is a 'Nasikh and Mansukh' in Hadith study?",
        options: [
          "The study of abrogating and abrogated texts",
          "The study of narrator biographies",
          "The verification of manuscript spelling",
          "The classification of weak chains"
        ],
        correctAnswer: "The study of abrogating and abrogated texts",
        explanation:
          "Nasikh (abrogating) and Mansukh (abrogated) rulings ensure jurists understand chronological legal developments in prophetic legislation.",
      },
      {
        question: "Which brilliant Hadith master and historian compiled 'Tarikh Baghdad' (History of Baghdad), containing biographical entries of thousands of scholars?",
        options: ["Al-Khatib al-Baghdadi", "Ibn Asakir", "Al-Dhahabi", "Ibn Khallikan"],
        correctAnswer: "Al-Khatib al-Baghdadi",
        explanation:
          "Al-Khatib al-Baghdadi authored monumental works in Hadith terminology, historiography, and biographical evaluation.",
      },
      {
        question: "What is a 'Mu'allal' (Ma'lul) Hadith?",
        options: [
          "A Hadith that appears sound on the surface but contains a subtle, hidden defect discovered only by expert critics",
          "A clearly fabricated lie",
          "A Hadith with multiple unbroken chains",
          "A Mutawatir narration"
        ],
        correctAnswer: "A Hadith that appears sound on the surface but contains a subtle, hidden defect discovered only by expert critics",
        explanation:
          "Illah (hidden defect) is considered one of the most challenging areas of Hadith criticism, mastered only by elite critics like Imam al-Bukhari and Daraqutni.",
      },
      {
        question: "Which companion narrated the Hadith stating: 'Cleanliness is half of faith' (Al-tahru shatru al-iman)?",
        options: ["Abu Malik al-Ash'ari", "Abu Hurayrah", "Abdullah ibn Umar", "Anas ibn Malik"],
        correctAnswer: "Abu Malik al-Ash'ari",
        explanation:
          "Abu Malik al-Ash'ari narrated this foundational Hadith recorded in Sahih Muslim emphasizing spiritual and physical purity.",
      },
      {
        question: "What is a 'Sahifah' in early Islamic literary history?",
        options: [
          "A written scroll or booklet containing collected Hadiths",
          "A legal court verdict",
          "A book of Quranic exegesis",
          "A military charter"
        ],
        correctAnswer: "A written scroll or booklet containing collected Hadiths",
        explanation:
          "Sahifahs were personal written sheets maintained by companions and early successors before comprehensive standardized books were compiled.",
      },
      {
        question: "Which great Andalusian Hadith scholar and jurist authored 'Al-Istidhkar' and 'Al-Tamhid', massive commentaries on Imam Malik's Muwatta?",
        options: ["Ibn Abd al-Barr", "Ibn Hazm", "Abu Bakr al-Arabi", "Qadi Ayyad"],
        correctAnswer: "Ibn Abd al-Barr",
        explanation:
          "Ibn Abd al-Barr was a towering Maliki scholar of Al-Andalus who analyzed the chains and legal implications of the Muwatta.",
      },
      {
        question: "What is a 'Musnad' narration versus a 'Mursal' narration?",
        options: [
          "Musnad has a connected chain to the Prophet, whereas Mursal misses the companion link at the end",
          "Musnad is weak, Mursal is Sahih",
          "Musnad is written in Makkah, Mursal in Madinah",
          "There is no difference"
        ],
        correctAnswer: "Musnad has a connected chain to the Prophet, whereas Mursal misses the companion link at the end",
        explanation:
          "A Musnad report links directly back to the Prophet through a continuous chain, while a Mursal report skips the companion level.",
      },
      {
        question: "Which companion narrated the famous Hadith: 'None of you truly believes until he loves for his brother what he loves for himself'?",
        options: ["Anas ibn Malik", "Abu Hurayrah", "Umar ibn al-Khattab", "Abdullah ibn Amr"],
        correctAnswer: "Anas ibn Malik",
        explanation:
          "Anas ibn Malik narrated this essential maxim of Islamic brotherhood and social ethics recorded in Bukhari and Muslim.",
      },
      {
        question: "What is a 'Matruk' Hadith?",
        options: [
          "A Hadith whose narrator is accused of outright lying or forgery, leading scholars to abandon it",
          "A fully authentic narration",
          "A Hadith with a minor memory slip",
          "A Mutawatir report"
        ],
        correctAnswer: "A Hadith whose narrator is accused of outright lying or forgery, leading scholars to abandon it",
        explanation:
          "Matruk (abandoned) describes a narration whose transmitter is heavily suspected of falsehood or extreme carelessness.",
      },
      {
        question: "Which classical dictionary of Hadith terminology was authored by Ibn al-Salah al-Shahrazuri?",
        options: ["Muqaddimah Ibn al-Salah (Ulum al-Hadith)", "Tadreeb al-Rawi", "Nukhbat al-Fikar", "Al-Kifayah"],
        correctAnswer: "Muqaddimah Ibn al-Salah (Ulum al-Hadith)",
        explanation:
          "Ibn al-Salah's Ulum al-Hadith became the standard foundational textbook for subsequent works on Hadith methodology.",
      },
      {
        question: "What is a 'Munafiq' or unmasked liar in Isnad terminology called?",
        options: ["Kadhdhab", "Thiqah", "Saduq", "Hafiz"],
        correctAnswer: "Kadhdhab",
        explanation:
          "Kadhdhab refers to a narrator proven to have fabricated reports, resulting in the instant rejection of any narration they transmitted.",
      },
      {
        question: "Which companion narrated the Hadith of Islam being built upon five pillars?",
        options: ["Abdullah ibn Umar", "Abu Hurayrah", "Anas ibn Malik", "Jabir ibn Abdullah"],
        correctAnswer: "Abdullah ibn Umar",
        explanation:
          "Abdullah ibn Umar narrated the famous tradition found in Bukhari and Muslim outlining the foundational five pillars of Islam.",
      },
      {
        question: "What is a 'Tabaqat' work in Islamic biographical literature?",
        options: [
          "Biographical dictionaries categorized by generations (layers) of scholars and narrators",
          "Books of legal verdicts",
          "Commentaries on Quranic chapters",
          "Poetry collections"
        ],
        correctAnswer: "Biographical dictionaries categorized by generations (layers) of scholars and narrators",
        explanation:
          "Tabaqat books (like Tabaqat al-Kubra by Ibn Sa'd) organize biographical data chronologically by generation to help verify teacher-student links.",
      },
      {
        question: "Which prominent Syrian Hadith scholar and historian authored 'Siyar A'lam al-Nubala' and 'Mizan al-I'tidal'?",
        options: ["Al-Dhahabi", "Ibn Kathir", "Ibn Hajar", "Al-Suyuti"],
        correctAnswer: "Al-Dhahabi",
        explanation:
          "Shams al-Din al-Dhahabi was a master of Hadith criticism and biographical evaluation, producing monumental historical compendiums.",
      },
      {
        question: "What is an 'Irfan' or individual uniqueness in narrator evaluation called when a single reliable narrator reports something unique?",
        options: ["Fard / Gharib", "Mutawatir", "Mudraj", "Maqlub"],
        correctAnswer: "Fard / Gharib",
        explanation:
          "A Fard or Gharib report represents an isolated narration where a single transmitter provides a unique detail.",
      },
      {
        question: "Which companion narrated the Hadith: 'Take advantage of five before five: your youth before your old age...'?",
        options: ["Abdullah ibn Abbas", "Abu Hurayrah", "Ali ibn Abi Talib", "Abdullah ibn Masud"],
        correctAnswer: "Abdullah ibn Abbas",
        explanation:
          "Abdullah ibn Abbas narrated this profound piece of prophetic counsel emphasizing the urgency of righteous deeds and valuing time.",
      },
      {
        question: "What is the primary difference between Sahih al-Bukhari and Sahih Muslim in terms of narrator connection criteria?",
        options: [
          "Muslim required proven contemporaneousness and potential meeting, whereas Bukhari strictly required proven physical meeting (Liqa)",
          "Bukhari had no criteria, Muslim was strict",
          "Muslim only included Mursal reports",
          "There is no difference"
        ],
        correctAnswer: "Muslim required proven contemporaneousness and potential meeting, whereas Bukhari strictly required proven physical meeting (Liqa)",
        explanation:
          "Imam al-Bukhari maintained a stricter condition requiring definitive proof that two narrators met, while Imam Muslim accepted contemporaneousness with established contact.",
      },
      {
        question: "Which great 15th-century polymath and Hadith master authored 'Al-Jami al-Saghir' and 'Tadreeb al-Rawi'?",
        options: ["Jalal al-Din al-Suyuti", "Ibn Hajar al-Asqalani", "Al-Sakhawi", "Zayn al-Din al-Iraqi"],
        correctAnswer: "Jalal al-Din al-Suyuti",
        explanation:
          "Al-Suyuti was an exceptionally prolific scholar who contributed extensively across Hadith classification, exegesis, and history.",
      }
    ],
    advanced: [
      {
        question: "Which scholar is credited with writing the first independent, systematic work exclusively dedicated to the science of Hadith terminology ('Al-Muhaddith al-Fasil bayn al-Rawi wal-Wai')?",
        options: ["Al-Ramhurmuzi", "Al-Hakim al-Nisaburi", "Ibn al-Salah", "Al-Khatib al-Baghdadi"],
        correctAnswer: "Al-Ramhurmuzi",
        explanation:
          "Qadi Al-Ramhurmuzi (d. 360 AH) authored 'Al-Muhaddith al-Fasil', establishing the foundational framework for the formal science of Hadith methodology.",
      },
      {
        question: "What methodological distinction does Imam al-Hakim al-Nisaburi's 'Al-Mustadrak 'ala al-Sahihayn' aim to achieve?",
        options: [
          "To collect authentic Hadiths meeting the criteria of Bukhari and/or Muslim that were omitted from their books",
          "To compile fabricated reports for study",
          "To grade weak traditions as Sahih",
          "To summarize Sahih al-Bukhari"
        ],
        correctAnswer: "To collect authentic Hadiths meeting the criteria of Bukhari and/or Muslim that were omitted from their books",
        explanation:
          "Al-Mustadrak attempts to supplement the Sahihayn, though later critics like Al-Dhahabi noted that many included reports actually lean towards Hasan or Da'if due to lax application of criteria.",
      },
      {
        question: "In the science of Jarh wa Ta'dil, how are conflicting evaluations resolved when one critic declares a narrator trustworthy (Mu'addil) and another declares them criticized (Jarih)?",
        options: [
          "Detailed, specific criticism (Jarh Mufassar) takes precedence over general praise (Ta'dil Mujmal) if the critic is qualified",
          "Praise always overrides criticism",
          "Both reports are automatically discarded",
          "Majority vote of all later historians"
        ],
        correctAnswer: "Detailed, specific criticism (Jarh Mufassar) takes precedence over general praise (Ta'dil Mujmal) if the critic is qualified",
        explanation:
          "Because specific criticism points to concrete defects (e.g., memory lapse or specific errors), a substantiated Jarh Mufassar supersedes general accolades unless refuted.",
      },
      {
        question: "What is the precise definition and legal standing of a 'Hadith Mursal Sahabi'?",
        options: [
          "A report where a younger companion narrates something they heard from the Prophet but were too young or absent to witness directly",
          "A fabricated report",
          "A broken chain involving a Tabi'i",
          "A report ending at a successor"
        ],
        correctAnswer: "A report where a younger companion narrates something they heard from the Prophet but were too young or absent to witness directly",
        explanation:
          "A Mursal Sahabi (such as narrations by Ibn Abbas or Anas regarding early Makkah events) is accepted as authentic because companions only narrate from other trustworthy companions or the Prophet.",
      },
      {
        question: "Which monumental 14th-century critical work by Al-Mizzi, later expanded by Ibn Hajar in 'Tahdhib al-Tahdhib', revolutionized biographical evaluation?",
        options: ["Tahdhib al-Kamal fi Asma al-Rijal", "Tarikh Madinat Dimashq", "Al-Jarh wa al-Ta'dil", "Mizan al-I'tidal"],
        correctAnswer: "Tahdhib al-Kamal fi Asma al-Rijal",
        explanation:
          "Al-Mizzi's 'Tahdhib al-Kamal' comprehensively analyzed every narrator found in the six canonical books, forming the basis for later masterworks.",
      },
      {
        question: "What is the critical methodology behind Ibn Hibban's categorization of narrators in his biographical work 'Al-Thiqat'?",
        options: [
          "He considered unknown narrators (Majhul) to be trustworthy by default unless proven otherwise, which challenged strict consensus",
          "He rejected all narrators from Kufa",
          "He required written diplomas for every narrator",
          "He only accepted narrators who memorized the Quran"
        ],
        correctAnswer: "He considered unknown narrators (Majhul) to be trustworthy by default unless proven otherwise, which challenged strict consensus",
        explanation:
          "Ibn Hibban's lenient stance on Majhul narrators meant his gradings of Sahih required rigorous cross-verification by other Hadith critics.",
      },
      {
        question: "Which classical work by Ibn al-Qayyim al-Jawziyya is considered the definitive authority on evaluating weak and fabricated Hadiths ('Al-Manar al-Munif fi al-Sahih wa al-Da'if')?",
        options: ["Al-Manar al-Munif", "Zad al-Ma'ad", "I'lam al-Muwaqqi'in", "Al-Wabil al-Sayyib"],
        correctAnswer: "Al-Manar al-Munif",
        explanation:
          "Ibn al-Qayyim outlined objective thematic rules to identify fabricated traditions based on historical impossibilities, contradictions with reason, or absurd promises.",
      },
      {
        question: "What is a 'Hadith Qudsi' distinguished from in terms of its divine nature and transmission?",
        options: [
          "Its meaning is inspired by Allah, but its wording is from the Prophet; whereas the Quran's exact wording and meaning are both directly from Allah",
          "Hadith Qudsi can be recited in prayers instead of Fatiha",
          "Hadith Qudsi does not require any chain of narration",
          "There is no functional distinction"
        ],
        correctAnswer: "Its meaning is inspired by Allah, but its wording is from the Prophet; whereas the Quran's exact wording and meaning are both directly from Allah",
        explanation:
          "While both originate from divine revelation (Wahy), the Quran possesses miraculous inimitability (I'jaz) in its precise Arabic wording, whereas Hadith Qudsi does not.",
      },
      {
        question: "Which scholar authored 'Nasb al-Rayah', an exhaustive critical study of the Hadiths utilized in Al-Zaylai's Hanafi jurisprudence work 'Al-Hidayah'?",
        options: ["Jamal al-Din al-Zaylai", "Ibn Hajar al-Asqalani", "Al-Daraqutni", "Al-Bayhaqi"],
        correctAnswer: "Jamal al-Din al-Zaylai",
        explanation:
          "Al-Zaylai rigorously investigated and graded all Hadiths cited within foundational Hanafi legal texts, establishing their Isnad strengths.",
      },
      {
        question: "What is the primary significance of Imam Al-Daraqutni's masterwork 'Al-Ilal al-Waridah fi al-Ahadith al-Nabawiyyah'?",
        options: [
          "It provides the most comprehensive analysis of hidden defects (Illal) in Hadith chains",
          "It lists all fabricated Hadiths",
          "It provides Quranic exegesis",
          "It compiles Mutawatir reports"
        ],
        correctAnswer: "It provides the most comprehensive analysis of hidden defects (Illal) in Hadith chains",
        explanation:
          "Al-Daraqutni's 'Al-Ilal' is an elite masterwork dissecting intricate discrepancies and covert flaws in chains that eluded ordinary scholars.",
      },
      {
        question: "How do Hadith masters define the condition of 'Irtifaa'' or 'Raf'' in evaluating whether a statement is Marfu' or Mawquf?",
        options: [
          "A statement by a companion concerning unseen matters of the afterlife or past prophets that cannot be deduced by independent reasoning (Ijtihad)",
          "A loud voice during recitation",
          "A direct physical contact with the Prophet",
          "A written manuscript"
        ],
        correctAnswer: "A statement by a companion concerning unseen matters of the afterlife or past prophets that cannot be deduced by independent reasoning (Ijtihad)",
        explanation:
          "A companion's statement regarding metaphysical realities (Mawquf lahu hukm al-Raf') is treated as effectively Marfu' because it must have been learned from the Prophet.",
      },
      {
        question: "Which foundational text by Ibn Abi Hatim al-Razi is one of the earliest and most authoritative biographical encyclopedias of Hadith critics and narrators?",
        options: ["Al-Jarh wa al-Ta'dil", "Tabaqat al-Kubra", "Tarikh Kabir", "Al-Thiqat"],
        correctAnswer: "Al-Jarh wa al-Ta'dil",
        explanation:
          "Ibn Abi Hatim's multi-volume 'Al-Jarh wa al-Ta'dil' compiles thousands of critical assessments by early Imams regarding narrator reliability.",
      },
      {
        question: "What is a 'Ziyadah' (addition) in a Hadith text evaluated by the consensus of critical Hadith masters like Al-Bukhari and Muslim?",
        options: [
          "It is accepted only if narrated by a more reliable transmitter whose addition does not contradict a stronger consensus or create an anomaly (Shadh)",
          "All additions are automatically rejected",
          "All additions are accepted as Sahih",
          "Additions only apply to Isnad, never Matn"
        ],
        correctAnswer: "It is accepted only if narrated by a more reliable transmitter whose addition does not contradict a stronger consensus or create an anomaly (Shadh)",
        explanation:
          "Hadith critics evaluate Ziyadat al-Thiqah meticulously to ensure the extra phrase does not distort the original meaning or contradict more established versions.",
      },
      {
        question: "Which prominent Andalusian jurist and Zahiri scholar authored 'Al-Muhalla bi al-Athar', rigorously debating legal rulings derived exclusively from Quran, Sahih Sunnah, and consensus?",
        options: ["Ibn Hazm al-Zahiri", "Ibn Abd al-Barr", "Averroes (Ibn Rushd)", "Al-Shatibi"],
        correctAnswer: "Ibn Hazm al-Zahiri",
        explanation:
          "Ibn Hazm's 'Al-Muhalla' is a masterwork of comparative jurisprudence rooted strictly in literalist Hadith interpretation and rejection of analogical deduction.",
      },
      {
        question: "What is the technical definition of an 'Idraj' occurring in the Isnad (chain) rather than the Matn (text)?",
        options: [
          "A narrator inserting the name of a teacher or linking chains together mistakenly or as an explanatory aside",
          "A complete fabrication of a report",
          "A missing narrator in the middle",
          "A reversal of narrator names"
        ],
        correctAnswer: "A narrator inserting the name of a teacher or linking chains together mistakenly or as an explanatory aside",
        explanation:
          "Isnad Idraj happens when a narrator conflates multiple chains or inserts a narrator name incorrectly, which expert critics identify through comparative analysis.",
      },
      {
        question: "Which classical scholar authored 'Kashf al-Khafa' wa Muzid al-Ilbas', a specialized dictionary identifying widespread popular proverbs and fabricated sayings mistaken for Hadiths?",
        options: ["Ismail al-Ajluni", "Al-Suyuti", "Al-Mulla Ali al-Qari", "Ibn al-Jawzi"],
        correctAnswer: "Ismail al-Ajluni",
        explanation:
          "Al-Ajluni's 'Kashf al-Khafa' meticulously categorizes common maxims circulating among people, verifying whether they have any authentic Hadith basis.",
      },
      {
        question: "What is the critical significance of Imam Malik's exclusive reliance on the 'Amal Ahl al-Madinah' (Practice of the People of Madinah) in legal methodology?",
        options: [
          "He considered the continuous practical consensus of Madinah's generations to be a form of mass-transmitted living Sunnah surpassing isolated Hadiths",
          "He rejected all Hadiths narrated outside Madinah",
          "He only accepted written documents",
          "He prohibited narrating Hadith"
        ],
        correctAnswer: "He considered the continuous practical consensus of Madinah's generations to be a form of mass-transmitted living Sunnah surpassing isolated Hadiths",
        explanation:
          "Imam Malik viewed the unbroken lifestyle practice of Madinah's community as a monumental practical transmission originating directly from the Prophet's era.",
      },
      {
        question: "Which scholarly work by Al-Khatib al-Baghdadi remains the definitive classical masterwork on the etiquette, methodology, and ethics of studying and narrating Hadith?",
        options: ["Al-Jami' li-Akhlaq al-Rawi wa Adab al-Sami'", "Kifayah fi Ilm al-Riwayah", "Tarikh Baghdad", "Sharaf Ashab al-Hadith"],
        correctAnswer: "Al-Jami' li-Akhlaq al-Rawi wa Adab al-Sami'",
        explanation:
          "Al-Khatib al-Baghdadi detailed the spiritual sincerity, moral integrity, and rigorous scholarly ethics required for anyone engaging in Hadith transmission.",
      },
      {
        question: "What does the term 'Taqreeb' signify in the title of works like Ibn Hajar's 'Taqreeb al-Tahdhib'?",
        options: [
          "Summarizing and bringing closer the biographical evaluations and final grades of narrators for easy reference",
          "A complete expansion of Isnad chains",
          "A collection of fabricated reports",
          "A commentary on the Quran"
        ],
        correctAnswer: "Summarizing and bringing closer the biographical evaluations and final grades of narrators for easy reference",
        explanation:
          "Ibn Hajar's 'Taqreeb al-Tahdhib' condenses massive biographical data into concise, definitive assessments of each narrator's reliability grade.",
      },
      {
        question: "In what manner did early Hadith compilers differentiate between 'Haddathana' (he narrated to us), 'Akhbarana' (he informed us), and 'An'ana' (from)?",
        options: [
          "Haddathana explicitly implies direct oral dictation in a teacher-student setting, whereas An'ana allows for indirect transmission provided contemporaneousness is proven",
          "They all mean the exact same thing without distinction",
          "An'ana indicates a fabricated report",
          "Akhbarana is only used for weak narrators"
        ],
        correctAnswer: "Haddathana explicitly implies direct oral dictation in a teacher-student setting, whereas An'ana allows for indirect transmission provided contemporaneousness is proven",
        explanation:
          "Terminology precision (Sighat al-Tahammul wal-Ada) is vital; explicit hearing terms guarantee direct transmission, while 'An'ana requires verifying that the narrator was not a mudallis.",
      },
      {
        question: "Which major 11th-century compendium by Al-Bayhaqi, 'Dala'il al-Nubuwwah', focuses specifically on what genre of prophetic traditions?",
        options: ["The proofs, miracles, and signs of prophethood", "Legal inheritance laws", "Rules of fasting", "Hadith Qudsi collections"],
        correctAnswer: "The proofs, miracles, and signs of prophethood",
        explanation:
          "Al-Bayhaqi compiled extensive historical and miraculous traditions verifying the truthfulness of Prophet Muhammad's mission.",
      },
      {
        question: "What is the underlying methodological premise of Imam Abu Hanifa's strict criteria regarding accepting Ahad Hadiths that contradict general legal principles (Qiyas or Quranic universals)?",
        options: [
          "He required that an Ahad narrator possess exceptional juristic precision (Fiqh) if the report conflicted with established analogical maxims",
          "He rejected all Ahad Hadiths entirely",
          "He accepted any narration regardless of its chain",
          "He only accepted reports narrated in Kufa"
        ],
        correctAnswer: "He required that an Ahad narrator possess exceptional juristic precision (Fiqh) if the report conflicted with established analogical maxims",
        explanation:
          "Hanafi legal theory incorporates nuanced harmonizations where solitary reports undergo rigorous cross-examination against broader Quranic principles and established legal norms.",
      },
      {
        question: "Which classical Andalusian scholar authored 'Al-I'tisham' and 'Al-Muwafaqat', foundational works discussing legal theory and distinguishing authentic Sunnah from unwarranted innovations (Bid'ah)?",
        options: ["Al-Shatibi", "Ibn Hazm", "Ibn Abd al-Barr", "Al-Arabi"],
        correctAnswer: "Al-Shatibi",
        explanation:
          "Imam Al-Shatibi's works established deep methodological clarity on the objectives of Shariah (Maqasid) and adherence to authentic Sunnah.",
      },
      {
        question: "What is a 'Wajadah' method of Hadith transmission and acquisition?",
        options: [
          "Finding a manuscript written in a known scholar's handwriting without receiving oral permission or direct dictation",
          "Hearing a Hadith directly in a mosque",
          "Memorizing a Hadith from a dream",
          "Receiving a verbal authorization via letter"
        ],
        correctAnswer: "Finding a manuscript written in a known scholar's handwriting without receiving oral permission or direct dictation",
        explanation:
          "Wajadah (finding) is a secondary method of transmission where a student discovers verified texts of a master, requiring specific cautious phrasing during narration.",
      },
      {
        question: "Which prominent 20th-century Hadith scholar and critic famously verified and published the massive multi-volume 'Silsilat al-Ahadith al-Sahihah' and 'Da'ifah'?",
        options: ["Muhammad Nasir al-Din al-Albani", "Ahmad Shakir", "Abd al-Rahman al-Mubarakpuri", "Habibur Rahman al-Azami"],
        correctAnswer: "Muhammad Nasir al-Din al-Albani",
        explanation:
          "Sheikh Al-Albani dedicated his life to grading, filtering, and publishing authentic and weak traditions across extensive Hadith compendiums.",
      },
      {
        question: "What is the critical distinction between 'Ilm al-Dirayah' and 'Ilm al-Riwayah' within the Islamic sciences?",
        options: [
          "Riwayah is the transmission and collection of texts and chains, whereas Dirayah is the critical analysis and methodology of evaluating their authenticity and meaning",
          "Dirayah is only for Quran, Riwayah is for poetry",
          "There is no difference between them",
          "Riwayah focuses solely on fabricated reports"
        ],
        correctAnswer: "Riwayah is the transmission and collection of texts and chains, whereas Dirayah is the critical analysis and methodology of evaluating their authenticity and meaning",
        explanation:
          "Ilm al-Riwayah preserves the wording of traditions, while Ilm al-Dirayah serves as the critical jurisprudence evaluating narrator reliability and textual soundness.",
      },
      {
        question: "Which classical commentary on Sahih Muslim, written by Imam an-Nawawi ('Al-Minhaj sharh Sahih Muslim'), is hailed as a masterpiece of Hadith exegesis and jurisprudence?",
        options: ["Al-Minhaj sharh Sahih Muslim", "Fath al-Bari", "Umdat al-Qari", "Tuhfat al-Ahwadhi"],
        correctAnswer: "Al-Minhaj sharh Sahih Muslim",
        explanation:
          "Imam an-Nawawi's exhaustive commentary on Sahih Muslim unpacks legal rulings, linguistic nuances, and theological positions across all schools of thought.",
      },
      {
        question: "What is a 'Mudraj al-Matn' occurring specifically at the beginning of a Hadith text?",
        options: ["A narrator inserting an introductory remark of their own before stating the actual prophetic text",
          "A complete fabrication",
          "A broken chain",
          "A reversal of words"
        ],
        correctAnswer: "A narrator inserting an introductory remark of their own before stating the actual prophetic text",
        explanation:
          "When a narrator begins speaking in their own words and seamlessly transitions into quoting the Prophet without a break, expert critics identify it as Mudraj.",
      },
      {
        question: "Which prominent Hadith master compiled 'Matalib al-'Aliyah', gathering extra Hadiths found in the larger Musnads that are absent from the standard six books?",
        options: ["Ibn Hajar al-Asqalani", "Al-Suyuti", "Al-Busiri", "Al-Haythami"],
        correctAnswer: "Ibn Hajar al-Asqalani",
        explanation:
          "Ibn Hajar compiled 'Matalib al-'Aliyah', organizing traditions from major Musnad collections to supplement the canonical books.",
      },
      {
        question: "What is the methodological rule regarding a Hadith classified as 'Hasan li-Ghayrihi' (Hasan due to external factors)?",
        options: [
          "It originates as a weak (Da'if) report with a minor defect, but gets elevated to acceptable Hasan status because it is corroborated by multiple independent chains",
          "It is automatically rejected as fabricated",
          "It is graded as absolute Sahih",
          "It can only be used for poetry"
        ],
        correctAnswer: "It originates as a weak (Da'if) report with a minor defect, but gets elevated to acceptable Hasan status because it is corroborated by multiple independent chains",
        explanation:
          "Corroboration can lift a mildly weak report (free of lying) into the category of Hasan li-Ghayrihi, making it valid for establishing legal and moral rulings.",
      },
      {
        question: "Which classical lexicon by Ibn Manzur, though primarily a linguistic dictionary ('Lisan al-Arab'), heavily incorporates terminology from Hadith and Quranic exegesis?",
        options: ["Lisan al-Arab", "Al-Qamus al-Muhit", "Taj al-Arus", "Maqayis al-Lughah"],
        correctAnswer: "Lisan al-Arab",
        explanation:
          "Lisan al-Arab is the premier classical Arabic dictionary, drawing extensively upon Hadith texts, Quranic verses, and classical poetry to define word usages.",
      },
      {
        question: "What does the term 'Munafaridah' signify in the evaluation of narrator reliability?",
        options: [
          "Unique reports transmitted by a single narrator that lack corroboration from peers",
          "Reports agreed upon by all scholars",
          "Fabricated lies",
          "Mutawatir chains"
        ],
        correctAnswer: "Unique reports transmitted by a single narrator that lack corroboration from peers",
        explanation:
          "When a narrator stands completely alone in reporting a specific tradition, Hadith critics scrutinize their precision and reliability meticulously.",
      },
      {
        question: "Which foundational work by Al-Khatib al-Baghdadi, 'Al-Kifayah fi Ilm al-Riwayah', serves as a comprehensive textbook on the technical rules of transmitting Hadith?",
        options: ["Al-Kifayah fi Ilm al-Riwayah", "Al-Jami' li-Akhlaq al-Rawi", "Taqyid al-Ilm", "Sharaf Ashab al-Hadith"],
        correctAnswer: "Al-Kifayah fi Ilm al-Riwayah",
        explanation:
          "Al-Kifayah is a premier theoretical textbook detailing the legal and technical requirements for accepting and transmitting prophetic traditions.",
      },
      {
        question: "What is the critical significance of Al-Busiri's 'Ithaf al-Khiyar al-Maharah' in Hadith literature?",
        options: ["It compiles and evaluates the extra Hadiths found in the major Musnads and Sunans not present in the standard six books",
          "It lists fabricated reports",
          "It provides Quranic tafsir",
          "It is a grammar book"
        ],
        correctAnswer: "It compiles and evaluates the extra Hadiths found in the major Musnads and Sunans not present in the standard six books",
        explanation:
          "Al-Busiri's works examine auxiliary Hadith collections to ensure no authentic tradition compiled by early Imams is overlooked.",
      },
      {
        question: "How do Hadith critics distinguish between a narrator's error due to 'Ikhtilat' (confusion/cognitive decline in old age) versus deliberate fabrication?",
        options: [
          "By examining whether the narrator transmitted the report before or after the onset of their memory decline, rejecting only what was narrated after",
          "By rejecting all narrations of anyone who ever grew old",
          "By accepting everything without checks",
          "By relying solely on dreams"
        ],
        correctAnswer: "By examining whether the narrator transmitted the report before or after the onset of their memory decline, rejecting only what was narrated after",
        explanation:
          "Hadith critics meticulously dated students' hearing sessions (e.g., distinguishing what students heard from Ibn Lahi'ah early versus late) to filter out post-Ikhtilat errors.",
      },
      {
        question: "Which classical scholar authored 'Tabaqat al-Huffaz', a biographical dictionary dedicated exclusively to master memorizers and critics of Hadith across Islamic history?",
        options: ["Al-Suyuti", "Al-Dhahabi", "Ibn Hajar", "Ibn al-Imad"],
        correctAnswer: "Al-Suyuti",
        explanation:
          "Al-Suyuti's 'Tabaqat al-Huffaz' chronicles the towering luminaries who dedicated their lives to preserving, memorizing, and defending prophetic traditions.",
      },
      {
        question: "What is the primary objective of studying 'Gharib al-Hadith' literature (such as the work by Ibn al-Athir)?",
        options: [
          "To explain rare, unfamiliar, or archaic Arabic vocabulary used in prophetic traditions",
          "To find weak narrators",
          "To count total Hadiths",
          "To study legal rulings"
        ],
        correctAnswer: "To explain rare, unfamiliar, or archaic Arabic vocabulary used in prophetic traditions",
        explanation:
          "Gharib al-Hadith lexicons clarify rare desert idioms and archaic terms spoken by the Prophet so scholars do not misinterpret the Matn.",
      },
      {
        question: "Which monumental encyclopedia of Hadith evaluation, 'Kanz al-Ummal', was compiled by Al-Muttaqi al-Hindi, organizing traditions by subject?",
        options: ["Kanz al-Ummal", "Jam al-Jawami", "Majma al-Zawaid", "Al-Mu'jam al-Kabir"],
        correctAnswer: "Kanz al-Ummal",
        explanation:
          "Al-Muttaqi al-Hindi organized Al-Suyuti's massive collections into 'Kanz al-Ummal', providing a comprehensive thematic subject index of Hadith literature.",
      },
      {
        question: "What ultimate standard do Hadith masters apply to determine whether a complex report is definitively established as a genuine prophetic statement?",
        options: [
          "Uninterrupted authentic chain, trustworthy and precise narrators, absence of hidden defects (Illah), and absence of anomalies (Shadh)",
          "Popularity among the general public",
          "Inclusion in modern textbooks",
          "Length of the narration text"
        ],
        correctAnswer: "Uninterrupted authentic chain, trustworthy and precise narrators, absence of hidden defects (Illah), and absence of anomalies (Shadh)",
        explanation:
          "The five rigorous conditions of Sahih guarantee that a tradition successfully passes both Isnad and Matn scrutiny before being accepted as authentic Sunnah.",
      }
    ]
  }
}

export default hadeethCategory;
