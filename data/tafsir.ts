import type { QuizCategory } from "@/types/quiz"

const tafsirCategory: QuizCategory = {
    id: "tafsir",
    title: "Tafsir",
    description: "Quranic Interpretation",
    icon: "",
    levels: {
      easy: [
        {
          question: "What does 'Tafsir' mean?",
          options: ["Recitation", "Interpretation", "Translation", "Memorization"],
          correctAnswer: "Interpretation",
          explanation:
            "Tafsir refers to the exegesis or interpretation of the Quran, explaining its meanings, context, and implications.",
        },
        {
          question: "Who is considered the first interpreter (mufassir) of the Quran?",
          options: ["Abu Bakr", "Umar ibn al-Khattab", "Prophet Muhammad (PBUH)", "Ali ibn Abi Talib"],
          correctAnswer: "Prophet Muhammad (PBUH)",
          explanation: "Prophet Muhammad (PBUH) was the first to explain and interpret the Quran to his companions.",
        },
        {
          question: "What is the primary source for Tafsir?",
          options: ["The Quran itself", "Hadith", "Scholarly consensus", "Personal opinion"],
          correctAnswer: "The Quran itself",
          explanation:
            "The best interpretation of the Quran comes from the Quran itself, where one verse explains another.",
        },
        {
          question: "What is 'Tafsir bil-Ma'thur'?",
          options: [
            "Interpretation based on personal opinion",
            "Interpretation based on transmitted knowledge",
            "Interpretation based on linguistic analysis",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on transmitted knowledge",
          explanation:
            "Tafsir bil-Ma'thur is interpretation based on narrations from the Prophet, companions, and early Muslims.",
        },
        {
          question: "What is the difference between 'Tafsir' and 'Tarjama'?",
          options: [
            "They are the same",
            "Tafsir is interpretation, Tarjama is translation",
            "Tafsir is in Arabic, Tarjama is in other languages",
            "Tafsir is by scholars, Tarjama is by laypeople",
          ],
          correctAnswer: "Tafsir is interpretation, Tarjama is translation",
          explanation:
            "Tafsir refers to the detailed explanation and interpretation of the Quranic verses, while Tarjama refers to the translation of the Quran from Arabic to other languages.",
        },
        {
          question: "What is the role of context in Tafsir?",
          options: [
            "It is irrelevant",
            "It is essential for proper understanding",
            "It is only important for legal verses",
            "It is only considered by modern interpreters",
          ],
          correctAnswer: "It is essential for proper understanding",
          explanation:
            "Context, including the occasion of revelation (asbab al-nuzul), historical background, and the surrounding verses, is essential for proper understanding and interpretation of the Quranic verses.",
        },
        {
          question: "Who is Ibn Abbas in relation to Tafsir?",
          options: [
            "The first caliph",
            "The Prophet's cousin and a renowned interpreter of the Quran",
            "A modern Tafsir scholar",
            "The compiler of Sahih Bukhari",
          ],
          correctAnswer: "The Prophet's cousin and a renowned interpreter of the Quran",
          explanation:
            "Abdullah ibn Abbas was the Prophet Muhammad's cousin who became one of the most knowledgeable interpreters of the Quran. He is often referred to as 'Tarjuman al-Quran' (The Interpreter of the Quran).",
        },
        {
          question: "What is the importance of Arabic language in Tafsir?",
          options: [
            "It is not important",
            "It is essential as the Quran was revealed in Arabic",
            "It is only important for Arabs",
            "It was important in the past but not now",
          ],
          correctAnswer: "It is essential as the Quran was revealed in Arabic",
          explanation:
            "Knowledge of Arabic language, its grammar, rhetoric, and literary devices is essential for Tafsir as the Quran was revealed in Arabic, and many nuances and meanings can only be fully appreciated in the original language.",
        },
        {
          question: "What is 'Tafsir bil-Ra'y'?",
          options: [
            "Interpretation based on narrations",
            "Interpretation based on personal opinion",
            "Interpretation based on dreams",
            "Interpretation based on scientific facts",
          ],
          correctAnswer: "Interpretation based on personal opinion",
          explanation:
            "Tafsir bil-Ra'y refers to interpretation based on personal opinion or reasoning. It is considered acceptable if it is based on sound knowledge and does not contradict established principles.",
        },
        {
          question: "What is the first step in interpreting a verse according to classical Tafsir methodology?",
          options: [
            "Consulting historical context",
            "Looking at linguistic meaning",
            "Interpreting the Quran with the Quran",
            "Referring to scholarly opinions",
          ],
          correctAnswer: "Interpreting the Quran with the Quran",
          explanation:
            "The first step in classical Tafsir methodology is to interpret the Quran with the Quran itself, looking for explanations of a verse in other parts of the Quran before moving to other sources.",
        },
        {
            question: "What is 'Tafsir al-Muyassar'?",
            options: [
              "A simplified contemporary Tafsir",
              "A classical linguistic Tafsir",
              "A mystical interpretation",
              "A scientific interpretation"
            ],
            correctAnswer: "A simplified contemporary Tafsir",
            explanation: "Tafsir al-Muyassar is a modern, simplified exegesis approved by scholars at the King Fahd Quran Printing Complex, making Quranic meanings accessible to general readers."
          },
          {
            question: "Which companion was known as 'Tarjuman al-Quran' (Interpreter of the Quran)?",
            options: [
              "Abu Bakr",
              "Umar ibn al-Khattab",
              "Ibn Abbas",
              "Ali ibn Abi Talib"
            ],
            correctAnswer: "Ibn Abbas",
            explanation: "Abdullah ibn Abbas, the Prophet's cousin, earned this title due to his deep knowledge of Quranic interpretation, having learned directly from the Prophet (PBUH)."
          },
          {
            question: "What is 'Tafsir al-Jalalayn'?",
            options: [
              "A Tafsir by two scholars named Jalal",
              "A Tafsir about the two Jalals (glories)",
              "A Tafsir written in two languages",
              "A Tafsir completed in two years"
            ],
            correctAnswer: "A Tafsir by two scholars named Jalal",
            explanation: "Tafsir al-Jalalayn was started by Jalaluddin al-Mahalli and completed by Jalaluddin al-Suyuti, known for its concise yet comprehensive coverage."
          },
          {
            question: "What is the importance of 'Asbab al-Nuzul' in Tafsir?",
            options: [
              "It provides historical context for verses",
              "It lists all Quranic miracles",
              "It explains Arabic grammar rules",
              "It ranks verses by importance"
            ],
            correctAnswer: "It provides historical context for verses",
            explanation: "Knowing the occasions of revelation helps understand the context and intended meaning of verses, preventing misinterpretation."
          },
          {
            question: "What is 'Tafsir bi-l-Ma'thur' primarily based on?",
            options: [
              "Personal opinions of scholars",
              "Narrations from the Prophet and companions",
              "Scientific discoveries",
              "Philosophical reasoning"
            ],
            correctAnswer: "Narrations from the Prophet and companions",
            explanation: "This method relies on authentic transmissions from the Prophet (PBUH), his companions, and their successors."
          },
          {
            question: "Which of these is NOT a primary source for Tafsir?",
            options: [
              "The Quran itself",
              "Authentic Hadith",
              "Opinions of companions",
              "Personal dreams"
            ],
            correctAnswer: "Personal dreams",
            explanation: "While dreams may have spiritual value, they're not considered a valid source for Quranic interpretation."
          },
          {
            question: "What is 'Tafsir Ibn Kathir' known for?",
            options: [
              "Its extensive use of Hadith",
              "Its scientific explanations",
              "Its poetic style",
              "Its focus on grammar"
            ],
            correctAnswer: "Its extensive use of Hadith",
            explanation: "Ibn Kathir's Tafsir is renowned for interpreting the Quran with the Quran, then with Hadith, and then with companions' sayings."
          },
          {
            question: "What is the ruling on interpreting the Quran without proper knowledge?",
            options: [
              "Permissible if well-intentioned",
              "Forbidden as it leads to error",
              "Allowed for scholars only",
              "Recommended for everyone"
            ],
            correctAnswer: "Forbidden as it leads to error",
            explanation: "The Prophet (PBUH) warned against interpreting the Quran without knowledge, as it can lead to serious misinterpretations."
          },
          {
            question: "What is 'Tafsir al-Tabari' also known as?",
            options: [
              "Jami' al-Bayan",
              "Al-Kashshaf",
              "Fi Zilal al-Quran",
              "Ma'ariful Quran"
            ],
            correctAnswer: "Jami' al-Bayan",
            explanation: "Tafsir al-Tabari's full title is 'Jami' al-Bayan fi Ta'wil al-Quran', considered one of the most comprehensive classical Tafsirs."
          },
          {
            question: "What is the first step in proper Quranic interpretation?",
            options: [
              "Consulting scholarly opinions",
              "Understanding the Arabic text",
              "Looking at historical context",
              "Checking scientific correlations"
            ],
            correctAnswer: "Understanding the Arabic text",
            explanation: "Proper interpretation begins with understanding the Arabic words, their meanings, and linguistic structures."
          },
          {
            question: "What is 'Tafsir al-Qurtubi' famous for?",
            options: [
              "Focus on legal rulings (Ahkam)",
              "Scientific interpretations",
              "Mystical explanations",
              "Poetic commentary"
            ],
            correctAnswer: "Focus on legal rulings (Ahkam)",
            explanation: "Al-Jami' li-Ahkam al-Quran by al-Qurtubi specializes in deriving legal rulings from Quranic verses."
          },
          {
            question: "What is the meaning of 'Mufassir'?",
            options: [
              "Quran reciter",
              "Quran interpreter",
              "Quran memorizer",
              "Quran calligrapher"
            ],
            correctAnswer: "Quran interpreter",
            explanation: "A Mufassir is a scholar specialized in interpreting and explaining the meanings of the Quran."
          },
          {
            question: "Which of these is a condition for valid Tafsir bil-Ra'y?",
            options: [
              "It must agree with established principles",
              "It must be innovative",
              "It must contradict classical views",
              "It must be approved by all scholars"
            ],
            correctAnswer: "It must agree with established principles",
            explanation: "Opinion-based interpretation is only valid when grounded in proper knowledge and not contradicting established Islamic principles."
          },
          {
            question: "What is 'Tafsir Fi Zilal al-Quran' known for?",
            options: [
              "Its literary and thematic approach",
              "Its focus on grammatical analysis",
              "Its collection of weak narrations",
              "Its scientific interpretations"
            ],
            correctAnswer: "Its literary and thematic approach",
            explanation: "Sayyid Qutb's Tafsir approaches the Quran as a unified whole with interconnected themes and messages."
          },
          {
            question: "What is the role of Hadith in Tafsir?",
            options: [
              "Secondary after the Quran",
              "More important than the Quran",
              "Equal to the Quran",
              "Not important at all"
            ],
            correctAnswer: "Secondary after the Quran",
            explanation: "Authentic Hadith is the second primary source after the Quran itself for interpretation."
          },
          {
            question: "What is 'Tafsir al-Baghawi' also known as?",
            options: [
              "Ma'alim al-Tanzil",
              "Al-Kashshaf",
              "Jami' al-Bayan",
              "Tafsir al-Jalalayn"
            ],
            correctAnswer: "Ma'alim al-Tanzil",
            explanation: "Tafsir al-Baghawi, titled 'Ma'alim al-Tanzil', is a concise yet reliable classical Tafsir."
          },
          {
            question: "What is the danger of Isra'iliyyat in Tafsir?",
            options: [
              "They may contain fabricated stories",
              "They are always authentic",
              "They replace the Quran",
              "They are all acceptable"
            ],
            correctAnswer: "They may contain fabricated stories",
            explanation: "Many Isra'iliyyat narrations contain unreliable or fabricated material from Jewish/Christian sources."
          },
          {
            question: "What is 'Tafsir al-Sa'di' known for?",
            options: [
              "Simple language and avoiding complicated discussions",
              "Extensive philosophical debates",
              "Focus on scientific miracles",
              "Mystical interpretations"
            ],
            correctAnswer: "Simple language and avoiding complicated discussions",
            explanation: "Taysir al-Karim al-Rahman by al-Sa'di is known for its clear, straightforward explanations suitable for general readers."
          },
          {
            question: "What is the ruling on interpreting Mutashabihat verses?",
            options: [
              "Only Allah knows their true meanings",
              "They should be interpreted literally",
              "They should be ignored",
              "Anyone can interpret them"
            ],
            correctAnswer: "Only Allah knows their true meanings",
            explanation: "The Quran states that only Allah knows the true meanings of ambiguous (Mutashabih) verses (3:7)."
          },
           {
            question: "What is 'Tafsir al-Nukat wal-'Uyun' by al-Mawardi known for?",
            options: [
              "Presenting multiple scholarly opinions",
              "Focusing only on one school of thought",
              "Rejecting all classical interpretations",
              "Interpreting Quran scientifically"
            ],
            correctAnswer: "Presenting multiple scholarly opinions",
            explanation: "Al-Mawardi's Tafsir is notable for compiling various scholarly interpretations on each verse."
          },  
          {
          question: "Which Surah is referred to as 'Umm al-Kitab' (The Mother of the Book) by the Prophet (PBUH)?",
          options: ["Surah al-Baqarah", "Surah al-Fatihah", "Surah Yasin", "Surah al-Ikhlas"],
          correctAnswer: "Surah al-Fatihah",
          explanation:
            "In authentic hadith (Sahih al-Bukhari), the Prophet (PBUH) named Surah al-Fatihah 'Umm al-Quran' and 'Umm al-Kitab' because it encompasses the foundational themes and core objectives of the entire Quran.",
        },
        {
          question: "Which verse in the Quran was described by the Prophet (PBUH) as the greatest single verse (A'zam Ayah)?",
          options: ["Surah al-Baqarah, 2:255 (Ayat al-Kursi)", "Surah Ali 'Imran, 3:18", "Surah al-Ikhlas, 112:1", "Surah al-Fatihah, 1:1"],
          correctAnswer: "Surah al-Baqarah, 2:255 (Ayat al-Kursi)",
          explanation:
            "In Sahih Muslim, the Prophet (PBUH) confirmed to Ubayy ibn Ka'b that Ayat al-Kursi is the greatest verse in the Book of Allah because of its majestic exposition of Allah's Oneness, Sovereignty, and Eternal Attributes.",
        },
        {
          question: "According to authentic hadith in Sahih al-Bukhari, reciting Surah al-Ikhlas is equivalent in reward to what portion of the Quran?",
          options: ["One-half", "One-third", "One-fourth", "The entire Quran"],
          correctAnswer: "One-third",
          explanation:
            "The Prophet (PBUH) stated in Sahih al-Bukhari that Surah al-Ikhlas is equivalent to one-third of the Quran, as the Quran revolves around Tawheed (monotheism), Shariah (rulings), and Akhbar (stories/prophecies), and this Surah is purely devoted to Tawheed.",
        },
        {
          question: "What is the primary standard used by classical scholars to classify a Surah as Makki or Madani?",
          options: [
            "Whether it was revealed before or after the Hijrah to Madinah",
            "Whether it was revealed inside Makkah or inside Madinah",
            "Whether it addresses believers or all mankind",
            "The length and syllable count of the Surah",
          ],
          correctAnswer: "Whether it was revealed before or after the Hijrah to Madinah",
          explanation:
            "The consensus of scholars of Tafsir defines Makki revelations as those revealed before the Prophet's (PBUH) Hijrah (migration) to Madinah, and Madani as those revealed after the Hijrah, even if physically received in Makkah.",
        },
        {
          question: "What special supplication (Dua) did Prophet Muhammad (PBUH) make for Abdullah ibn Abbas?",
          options: [
            "\"O Allah, grant him vast wealth and long life\"",
            "\"O Allah, make him the military commander of the Muslims\"",
            "\"O Allah, teach him the Book and grant him deep understanding of religion\"",
            "\"O Allah, grant him the most melodious recitation of the Quran\"",
          ],
          correctAnswer: "\"O Allah, teach him the Book and grant him deep understanding of religion\"",
          explanation:
            "In Sahih al-Bukhari, the Prophet (PBUH) embraced Ibn Abbas and supplicated: 'Allahumma 'allimhul-Kitab' (O Allah, teach him the Book) and 'faqqihhu fid-deen' (grant him deep comprehension in religion).",
        },
        {
          question: "Which verses were the very first to be revealed to Prophet Muhammad (PBUH) in the cave of Hira?",
          options: ["Surah al-Fatihah (1:1-7)", "Surah al-Alaq (96:1-5)", "Surah al-Muddaththir (74:1-5)", "Surah al-Baqarah (2:1-5)"],
          correctAnswer: "Surah al-Alaq (96:1-5)",
          explanation:
            "As recorded in Sahih al-Bukhari on the authority of Aisha (RA), the first revelation brought by Angel Jibreel began with: 'Read! In the Name of your Lord, Who has created...' (Surah al-Alaq 96:1-5).",
        },
        {
          question: "Which is the longest Surah in the Noble Quran?",
          options: ["Surah Ali 'Imran", "Surah al-Nisa", "Surah al-Ma'idah", "Surah al-Baqarah"],
          correctAnswer: "Surah al-Baqarah",
          explanation:
            "Surah al-Baqarah is the longest Surah in the Quran with 286 verses, and it contains the single longest verse in the Quran, Ayat al-Dayn (2:282).",
        },
        {
          question: "Which is the shortest Surah in the Noble Quran by verse count?",
          options: ["Surah al-Ikhlas", "Surah al-Kawthar", "Surah al-Asr", "Surah al-Nasr"],
          correctAnswer: "Surah al-Kawthar",
          explanation:
            "Surah al-Kawthar (Chapter 108) is the shortest chapter in the Quran, consisting of only 3 brief verses and 10 words.",
        },
        {
          question: "Which two Surahs are known together as 'Al-Mu'awwidhatayn' (The Two Surahs of Refuge)?",
          options: ["Surah al-Falaq and Surah an-Nas", "Surah al-Ikhlas and Surah al-Falaq", "Surah al-Fatihah and Surah al-Baqarah", "Surah al-Kafirun and Surah al-Ikhlas"],
          correctAnswer: "Surah al-Falaq and Surah an-Nas",
          explanation:
            "Surah al-Falaq and Surah an-Nas are designated as Al-Mu'awwidhatayn because they begin with 'Say: I seek refuge in the Lord...', taught by the Prophet (PBUH) for divine protection against envy, sorcery, and whispers.",
        },
        {
          question: "What is the primary spiritual objective of the parables (Amthal) mentioned in the Quran?",
          options: [
            "Linguistic amusement",
            "To clarify spiritual realities and encourage reflection",
            "To obscure meanings from non-scholars",
            "Fictional storytelling",
          ],
          correctAnswer: "To clarify spiritual realities and encourage reflection",
          explanation:
            "Allah states in Surah al-Hashr (59:21): 'And these parables We present to the people that perhaps they will produce reflection.' Parables translate intangible truths into vivid, relatable lessons.",
        },
    ],
    intermediate: [
      {
        question: "According to the classical hierarchy of Tafsir established by scholars like Ibn Taymiyyah and Ibn Kathir, what is the best and highest form of Tafsir?",
        options: [
          "Tafsir of the Quran by modern science",
          "Tafsir of the Quran by the Quran itself",
          "Tafsir of the Quran through Arabic poetry",
          "Tafsir of the Quran by personal philosophical reflection",
        ],
        correctAnswer: "Tafsir of the Quran by the Quran itself",
        explanation:
          "Scholars agree that the highest method is interpreting the Quran by the Quran (Tafsir al-Quran bil-Quran), as what is stated briefly in one verse is often clarified and elaborated in another.",
      },
      {
        question: "When the companions were distressed by the verse 'Those who believe and do not mix their belief with Zulm (wrongdoing)' (6:82), how did the Prophet (PBUH) explain 'Zulm'?",
        options: [
          "As major sins like theft",
          "As minor mistakes",
          "As Shirk (associating partners with Allah), citing Luqman's advice to his son",
          "As harming neighbors",
        ],
        correctAnswer: "As Shirk (associating partners with Allah), citing Luqman's advice to his son",
        explanation:
          "In Sahih al-Bukhari, the Prophet (PBUH) clarified that 'Zulm' here means Shirk, quoting Luqman (31:13): 'Indeed, association [with Allah] is great injustice (Zulmun 'Adheem)'.",
      },
      {
        question: "How did the Prophet (PBUH) explain 'Al-Kawthar' in Surah al-Kawthar when asked by the Companions?",
        options: [
          "A mountain in Makkah",
          "A river in Paradise that Allah has granted him",
          "An abundance of worldly wealth",
          "The victory at Badr",
        ],
        correctAnswer: "A river in Paradise that Allah has granted him",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) said: 'It is a river in Paradise which my Lord, the Exalted and Glorious, has promised me, and there is abundant goodness in it.'",
      },
      {
        question: "When the verse '...until the white thread becomes distinct to you from the black thread of dawn' (2:187) was revealed, how did the Prophet (PBUH) correct Adi ibn Hatim's literal interpretation?",
        options: [
          "He praised him for his diligence",
          "He explained that it means the darkness of the night and the whiteness of the day (dawn)",
          "He commanded him to look at threads under the sun",
          "He told him to fast only during darkness",
        ],
        correctAnswer: "He explained that it means the darkness of the night and the whiteness of the day (dawn)",
        explanation:
          "Adi ibn Hatim placed two actual threads under his pillow. In Sahih al-Bukhari, the Prophet (PBUH) smiled and explained that the verse metaphorically denotes the darkness of the night separating from the light of dawn.",
      },
      {
        question: "Why are the interpretations of the Sahabah (Companions) given priority over later generations in Tafsir?",
        options: [
          "They were politically dominant",
          "They witnessed the revelation directly, understood the context, and possessed pure Arabic linguistic fluency",
          "They wrote the first printed tafsir books",
          "They memorized all world philosophies",
        ],
        correctAnswer: "They witnessed the revelation directly, understood the context, and possessed pure Arabic linguistic fluency",
        explanation:
          "The Sahabah directly witnessed the descent of revelation (Asbab al-Nuzul), learned directly from the Prophet (PBUH), and possessed unmatched mastery of Classical Arabic language and cultural idioms.",
      },
      {
        question: "Which prominent companion famously stated: 'By Allah, there is no verse revealed from the Book of Allah except that I know about whom it was revealed and where it was revealed'?",
        options: ["Abu Hurairah", "Abdullah ibn Mas'ud", "Khalid ibn al-Walid", "Salman al-Farsi"],
        correctAnswer: "Abdullah ibn Mas'ud",
        explanation:
          "Abdullah ibn Mas'ud made this statement recorded in Sahih al-Bukhari to highlight his close companionship with the Prophet (PBUH) and meticulous dedication to learning the context of every ayah.",
      },
      {
        question: "Which city became renowned as the primary center for the early school of Tafsir led by Abdullah ibn Abbas?",
        options: ["Damascus", "Makkah", "Basra", "Cairo"],
        correctAnswer: "Makkah",
        explanation:
          "Ibn Abbas settled in Makkah and trained great successors (Tabi'in) including Mujahid, Sa'id ibn Jubayr, Ikrimah, Ata ibn Abi Rabah, and Tawus, establishing the eminent Makkah school of Tafsir.",
      },
      {
        question: "Which student of Ibn Abbas famously said: 'I presented the Mushaf to Ibn Abbas three times from opening to end, pausing at each verse to ask him about its meaning'?",
        options: ["Mujahid ibn Jabr", "Al-Hasan al-Basri", "Qatadah ibn Di'amah", "Wahb ibn Munabbih"],
        correctAnswer: "Mujahid ibn Jabr",
        explanation:
          "Imam Mujahid ibn Jabr was one of the most distinguished students of Ibn Abbas; Sufyan al-Thawri remarked: 'If the tafsir of Mujahid reaches you, it is sufficient for you.'",
      },
      {
        question: "Which companion led the prominent school of Tafsir in Kufa (Iraq), heavily influencing scholars like Alqamah and Masruq?",
        options: ["Abu Musa al-Ash'ari", "Abdullah ibn Mas'ud", "Mu'adh ibn Jabal", "Hudhayfah ibn al-Yaman"],
        correctAnswer: "Abdullah ibn Mas'ud",
        explanation:
          "Abdullah ibn Mas'ud was sent to Kufa by Caliph Umar ibn al-Khattab as an educator and judge, where he founded the legendary Kufa school of Tafsir and jurisprudence.",
      },
      {
        question: "Into how many categories do classical scholars classify Isra'iliyyat (Judeo-Christian traditions found in Tafsir)?",
        options: ["Two categories", "Three categories", "Five categories", "Seven categories"],
        correctAnswer: "Three categories",
        explanation:
          "Scholars like Ibn Kathir and Ibn Taymiyyah categorized them into three: (1) what conforms to the Quran/Sunnah (accepted), (2) what contradicts Islamic revelation (rejected), and (3) what is silent/neutral (neither confirmed nor denied).",
      },
      {
        question: "What is the Prophet's guidance regarding neutral Isra'iliyyat narrations that neither confirm nor contradict Islamic texts?",
        options: [
          "Believe them firmly as part of Iman",
          "Neither believe them unconditionally nor declare them outright lies",
          "Immediately burn all books mentioning them",
          "Adopt them as foundations for Islamic law",
        ],
        correctAnswer: "Neither believe them unconditionally nor declare them outright lies",
        explanation:
          "In Sahih al-Bukhari, the Prophet (PBUH) instructed: 'Do not believe the people of the Scripture, nor disbelieve them; rather say: We believe in Allah and what was revealed to us.'",
      },
      {
        question: "What is the famous fundamental principle in Usul al-Tafsir regarding verses revealed for a specific incident?",
        options: [
          "The ruling is restricted only to the person involved in the cause",
          "The lesson is drawn from the generality of the wording, not the specificity of the cause",
          "Specific verses lose their legal authority after the incident passes",
          "Specific verses can only be applied by a court judge",
        ],
        correctAnswer: "The lesson is drawn from the generality of the wording, not the specificity of the cause",
        explanation:
          "The established rule is 'Al-'Ibratu bi-'Umum al-Lafdh la bi-Khusus al-Sabab', meaning the Quranic command or lesson applies to all similar circumstances across time, not just the initial person.",
      },
      {
        question: "How are authentic 'Asbab al-Nuzul' (occasions of revelation) established by scholars?",
        options: [
          "Through philosophical reasoning and personal speculation",
          "Only through authentic transmissions (Riwayah) traced back to the Prophet (PBUH) or Sahabah",
          "By consulting secular historical chronicles",
          "By matching verses to astrological alignments",
        ],
        correctAnswer: "Only through authentic transmissions (Riwayah) traced back to the Prophet (PBUH) or Sahabah",
        explanation:
          "Knowledge of Asbab al-Nuzul is strictly dependent on authentic narrations (Naql/Riwayah) from those who witnessed the revelation; it cannot be invented through personal ijtihad.",
      },
      {
        question: "What warning did the Prophet (PBUH) give regarding interpreting the Quran based on arbitrary personal conjecture (Ra'y mahd)?",
        options: [
          "\"He will be rewarded if he guesses correctly\"",
          "\"Whoever speaks of the Quran without knowledge, let him take his seat in the Fire\"",
          "\"There is no harm in personal speculation\"",
          "\"Personal opinion supersedes hadith\"",
        ],
        correctAnswer: "\"Whoever speaks of the Quran without knowledge, let him take his seat in the Fire\"",
        explanation:
          "Reported in Jami` at-Tirmidhi and authenticated by scholars: 'Whoever speaks about the Quran without knowledge, let him take his seat in Hellfire.' Unqualified speculation without linguistic and textual basis is strictly forbidden.",
      },
      {
        question: "What is the dominant stance of the majority of Ahl al-Sunnah regarding the Huruf al-Muqatta'at (isolated letters like Alif-Lam-Mim)?",
        options: [
          "They are code names for secret angels",
          "Allah alone knows their ultimate reality, though they demonstrate the miraculous inimitability (I'jaz) of the Quran",
          "They are abbreviations of Greek philosophy",
          "They have no grammatical significance and were added by scribes",
        ],
        correctAnswer: "Allah alone knows their ultimate reality, though they demonstrate the miraculous inimitability (I'jaz) of the Quran",
        explanation:
          "Most classical scholars (including Abu Bakr, Ibn Abbas, and al-Sha'bi) state that the exact reality is known to Allah, while highlighting that they demonstrate the Quran is composed of the very letters known to Arabs, yet none could compose the like thereof.",
      },
      {
        question: "What is the defining methodological feature of Imam Ibn Jarir al-Tabari's masterwork 'Jami' al-Bayan'?",
        options: [
          "Summarizing verses without citing chains of narration",
          "Providing chains of transmission (Isnad) for opinions and engaging in scholarly tarjih (weighing evidence)",
          "Focusing solely on medical and scientific marvels",
          "Restricting comments to brief Persian translations",
        ],
        correctAnswer: "Providing chains of transmission (Isnad) for opinions and engaging in scholarly tarjih (weighing evidence)",
        explanation:
          "Al-Tabari meticulously documents the chains of transmission (Isnad) back to the Sahabah and Tabi'in for each interpretation and uses rigorous Arabic grammar and hadith principles to weigh the strongest opinion (Tarjih).",
      },
      {
        question: "Why is 'Tafsir al-Quran al-Azim' by Ibn Kathir widely regarded as the pinnacle of Tafsir bil-Ma'thur?",
        options: [
          "It relies entirely on Greek logic",
          "It systematically explains Quran by Quran, then Sunnah with hadith grading, citing the Athar of the Salaf while critiquing Isra'iliyyat",
          "It avoids citing any Hadith or Companions",
          "It was the first Tafsir written in modern times",
        ],
        correctAnswer: "It systematically explains Quran by Quran, then Sunnah with hadith grading, citing the Athar of the Salaf while critiquing Isra'iliyyat",
        explanation:
          "Ibn Kathir implemented the classical orthodox methodology: verifying hadith authenticity, explaining cross-Quranic references, and weeding out unreliable Isra'iliyyat narrations.",
      },
      {
        question: "What is the distinctive legal focus of Imam al-Qurtubi's Tafsir 'Al-Jami' li-Ahkam al-Quran'?",
        options: [
          "Refuting astronomical claims",
          "Deriving Fiqh rulings (Ahkam) and comparing legal juristic viewpoints across the schools of thought",
          "Allegorical Sufi contemplation exclusively",
          "Focusing purely on Arabic rhyming schemes",
        ],
        correctAnswer: "Deriving Fiqh rulings (Ahkam) and comparing legal juristic viewpoints across the schools of thought",
        explanation:
          "Al-Qurtubi's monumental work focuses primarily on deriving legal rulings (Fiqh) from verses, objectively analyzing the arguments of various Madhahib with fairness and immense scholarship.",
      },
      {
        question: "Why did Ibn Taymiyyah highly praise Imam al-Baghawi's Tafsir 'Ma'alim al-Tanzeel' over Tha'labi's Tafsir?",
        options: [
          "Because it was written in verse form",
          "Because al-Baghawi purified it from fabricated hadiths and deviant theological innovations found in earlier compilations",
          "Because it contains no Arabic grammar analysis",
          "Because it was the shortest tafsir ever composed",
        ],
        correctAnswer: "Because al-Baghawi purified it from fabricated hadiths and deviant theological innovations found in earlier compilations",
        explanation:
          "Ibn Taymiyyah noted that al-Baghawi's work is an abridgment of Tha'labi's tafsir, but al-Baghawi safeguarded his book by excluding fabricated narrations and theological deviations.",
      },
      {
        question: "What distinguishes the contemporary Tafsir 'Taysir al-Karim al-Rahman' by Shaykh Abdur-Rahman al-Sa'di?",
        options: [
          "Lengthy polemical debates between sectarian groups",
          "Clear, accessible prose focusing on Tawheed, moral guidance, and practical spiritual application while avoiding weak narrations",
          "A collection of poetry devoid of Quranic verses",
          "Focus on astronomical constellations",
        ],
        correctAnswer: "Clear, accessible prose focusing on Tawheed, moral guidance, and practical spiritual application while avoiding weak narrations",
        explanation:
          "Shaykh al-Sa'di's Tafsir is renowned across the Muslim world for its lucidity, adherence to the methodology of the Salaf, sound creed, and direct spiritual insights without bogging the reader down in complex dialectics.",
      },
      {
        question: "According to Surah Ali 'Imran (3:7), what are 'Muhkam' verses?",
        options: [
          "Verses that have been entirely deleted from recitation",
          "Clear, decisive verses that form the foundation of the Book (Umm al-Kitab)",
          "Verses whose meanings are known only to prophets",
          "Verses dealing solely with inherited wealth",
        ],
        correctAnswer: "Clear, decisive verses that form the foundation of the Book (Umm al-Kitab)",
        explanation:
          "Allah states: 'He it is Who has sent down to you the Book: in it are verses that are Muhkamat (clear and definitive), they are the foundations of the Book.' Their meanings are unambiguous and clear.",
      },
      {
        question: "How do those firmly grounded in knowledge (Al-Rasikhuna fil-'Ilm) respond to Mutashabih (ambiguous/allegorical) verses according to 3:7?",
        options: [
          "They reject them outright",
          "They follow their whims trying to uncover hidden dates of the Day of Judgment",
          "They say: 'We believe in it; all [of it] is from our Lord'",
          "They rewrite the verses in simpler terms",
        ],
        correctAnswer: "They say: 'We believe in it; all [of it] is from our Lord'",
        explanation:
          "The Quran praises those firmly grounded in knowledge who affirm faith in all of Allah's revelation, interpreting the ambiguous in light of the clear (Muhkam) and submitting what is beyond human grasp to Allah.",
      },
      {
        question: "What is 'Naskh al-Hukm wa Baqa' al-Tilawah' in the science of Quranic abrogation?",
        options: [
          "Abrogation of both the recitation and the ruling",
          "Abrogation of the legal ruling while the verse continues to be recited in the Quran",
          "Abrogation of the recitation while the legal ruling remains in force",
          "Adding new words to an existing verse",
        ],
        correctAnswer: "Abrogation of the legal ruling while the verse continues to be recited in the Quran",
        explanation:
          "This is the most common form of Naskh in the Quran, such as the verse ordaining a year of waiting for widows (2:240), whose ruling was superseded by the four months and ten days ruling (2:234), yet both verses remain recited.",
      },
      {
        question: "Which historic event in the life of the early Muslim community is a classic example of Naskh (abrogation)?",
        options: [
          "The shifting of the Qiblah direction from Jerusalem (Bayt al-Maqdis) to the Ka'bah in Makkah",
          "The migration to Abyssinia",
          "The signing of the Treaty of Hudaybiyyah",
          "The conquering of Khaybar",
        ],
        correctAnswer: "The shifting of the Qiblah direction from Jerusalem (Bayt al-Maqdis) to the Ka'bah in Makkah",
        explanation:
          "Early Muslims prayed towards Jerusalem for approximately sixteen to seventeen months in Madinah until Allah revealed Surah al-Baqarah (2:144), commanding the turn towards the Sacred Mosque (Ka'bah).",
      },
      {
        question: "How does the gradual prohibition of Khamr (intoxicants) across three stages demonstrate divine wisdom in revelation?",
        options: [
          "It shows that rulings were random",
          "It reflects pedagogical wisdom (Tadarruj), easing people away from deeply entrenched societal addiction",
          "It proves intoxicants were never truly forbidden",
          "It allowed scholars to drink in private",
        ],
        correctAnswer: "It reflects pedagogical wisdom (Tadarruj), easing people away from deeply entrenched societal addiction",
        explanation:
          "Allah phased the prohibition: first noting harm outweighs benefit (2:219), then prohibiting prayer while intoxicated (4:43), and finally issuing a total decisive prohibition (5:90-91), demonstrating compassionate legislative progression.",
      },
      {
        question: "What does the sub-discipline of 'Gharib al-Quran' specifically study?",
        options: [
          "Verses that discuss foreign planets",
          "Uncommon, rare, or archaic lexical vocabulary in the Quranic text",
          "Hadiths that have unusual chains of transmission",
          "Historical events not confirmed by archeology",
        ],
        correctAnswer: "Uncommon, rare, or archaic lexical vocabulary in the Quranic text",
        explanation:
          "Gharib al-Quran addresses rare or less commonly used Arabic words within the Quran, explaining their precise meanings through Classical Arabic lexicography and pre-Islamic poetry.",
      },
      {
        question: "What resource did Abdullah ibn Abbas famously refer to as 'Diwan al-Arab' to verify the meaning of rare Quranic words?",
        options: ["Pre-Islamic Arabic poetry", "Roman historical archives", "Persian royal edicts", "Coptic translations"],
        correctAnswer: "Pre-Islamic Arabic poetry",
        explanation:
          "Ibn Abbas stated: 'Arabic poetry is the record (Diwan) of the Arabs. If an unusual word in the Quran is obscure to us, we consult poetry where it is preserved in authentic usage.'",
      },
      {
        question: "What is the foundational interpretive rule regarding the 'Dhahir' (apparent/manifest meaning) of Quranic texts?",
        options: [
          "Every verse must be given an allegorical, non-literal meaning",
          "Verses must be taken upon their apparent meaning unless established textual evidence indicates otherwise",
          "Only the inner esoteric meaning is valid",
          "Scholars should disregard grammar",
        ],
        correctAnswer: "Verses must be taken upon their apparent meaning unless established textual evidence indicates otherwise",
        explanation:
          "The fundamental principle across Usul al-Fiqh and Tafsir is 'Al-Asl fil-Kalam al-Haqiqah' (The default in speech is the literal/apparent meaning); diverting from it requires definitive proof (Qarinah / Daleel).",
      },
      {
        question: "In classical terminology of the Salaf (early generations), what did the word 'Ta'wil' primarily mean?",
        options: [
          "Distorting words away from their meanings",
          "Tafsir (exegesis/explanation) or the actual realization of an event in reality",
          "Fabricating new stories about prophets",
          "Converting prose into poetry",
        ],
        correctAnswer: "Tafsir (exegesis/explanation) or the actual realization of an event in reality",
        explanation:
          "In the language of the Salaf and Quranic usage (e.g., Yusuf 12:100), Ta'wil means either Tafsir (clarifying the meaning) or the actual physical fulfillment of what was foretold. The negative connotation of distorting meanings developed later.",
      },
      {
        question: "Which verse is the longest single verse in the entire Quran, and what is its primary theme?",
        options: [
          "Ayat al-Kursi (2:255); Tawheed",
          "Ayat al-Dayn (2:282); financial contracts, debt documentation, and witnessing",
          "Ayat al-Nur (24:35); divine illumination",
          "Ayat al-Sayf (9:5); warfare rules",
        ],
        correctAnswer: "Ayat al-Dayn (2:282); financial contracts, debt documentation, and witnessing",
        explanation:
          "Ayat al-Dayn (the verse of loan/debt) in Surah al-Baqarah (2:282) is the longest verse in the Quran, meticulously laying down commercial guidelines for documenting loans, writing contracts, and securing witnesses.",
      },
      {
        question: "What was the context of revelation (Sabab al-Nuzul) for Surah al-Duha?",
        options: [
          "The Prophet's victory at Khaybar",
          "A temporary pause in divine revelation, after which polytheists mocked that his Lord had forsaken him",
          "The construction of the Prophet's Mosque in Madinah",
          "The conquest of Makkah",
        ],
        correctAnswer: "A temporary pause in divine revelation, after which polytheists mocked that his Lord had forsaken him",
        explanation:
          "In Sahih al-Bukhari, Jundub ibn Sufyan narrated that when revelation was delayed for a short period, a pagan woman said, 'Your Lord has abandoned you!' Whereupon Allah revealed: 'By the morning brightness... Your Lord has not taken leave of you, nor has He detested [you].'",
      },
      {
        question: "What prompted the revelation of Surah al-Masad (Chapter 111)?",
        options: [
          "Abu Lahab's insolent reply when the Prophet (PBUH) gathered the Quraysh at Mount Safa to proclaim the message",
          "A debate about inheritance laws in Madinah",
          "The breaking of the Treaty of Hudaybiyyah",
          "The migration to Yathrib",
        ],
        correctAnswer: "Abu Lahab's insolent reply when the Prophet (PBUH) gathered the Quraysh at Mount Safa to proclaim the message",
        explanation:
          "In Sahih al-Bukhari, when the Prophet (PBUH) called the Quraysh clans atop Mount Safa, Abu Lahab shouted: 'May you perish for the rest of the day! Is this what you gathered us for?' Allah revealed Surah al-Masad in response.",
      },
      {
        question: "Which Surah contains the definitive revelation declaring the complete innocence of Aisha (RA) from the malicious slander (Hadith al-Ifk)?",
        options: ["Surah al-Ahzab", "Surah al-Nur (24:11-20)", "Surah al-Tawbah", "Surah al-Tahrim"],
        correctAnswer: "Surah al-Nur (24:11-20)",
        explanation:
          "Allah revealed ten verses in Surah al-Nur (24:11-20) exonerating the Mother of the Believers, Aisha (RA), and harshly reprimanding those who initiated and spread the libelous slander.",
      },
      {
        question: "Can a translation of the Quran into English or any other language be considered the actual 'Quran' in Islamic theology and jurisprudence?",
        options: [
          "Yes, all translations have the exact same status as the Arabic text",
          "No, it is a human translation of the meanings; the Quran is exclusively the verbatim Arabic word of Allah",
          "Yes, provided the translator was a native speaker",
          "No, unless certified by the United Nations",
        ],
        correctAnswer: "No, it is a human translation of the meanings; the Quran is exclusively the verbatim Arabic word of Allah",
        explanation:
          "Islamic consensus affirms that the Quran is the verbatim, inimitable word of Allah revealed in the Arabic tongue. Translations are human attempts to convey the meanings, not the divine Quran itself.",
      },
      {
        question: "Which prominent companion did Caliph Abu Bakr (RA) appoint to lead the committee responsible for collecting and compiling the Quran into a single Mushaf?",
        options: ["Zayd ibn Thabit", "Abu Hurairah", "Umar ibn al-Khattab", "Mu'adh ibn Jabal"],
        correctAnswer: "Zayd ibn Thabit",
        explanation:
          "Abu Bakr entrusted Zayd ibn Thabit (RA) because he was young, intelligent, trustworthy, and one of the primary scribes who wrote down revelation directly in the presence of the Prophet (PBUH).",
      },
      {
        question: "What is the authentic hadith regarding the revelation of the Quran in 'Seven Ahruf' (modes/dialects)?",
        options: [
          "\"This Quran has been revealed in seven ahruf, so recite whichever is easy from it\"",
          "\"The Quran was revealed only in one single letter\"",
          "\"Seven different Qurans exist in heaven\"",
          "\"The Quran must be translated into seven world languages\"",
        ],
        correctAnswer: "\"This Quran has been revealed in seven ahruf, so recite whichever is easy from it\"",
        explanation:
          "In Sahih al-Bukhari and Sahih Muslim, the Prophet (PBUH) stated: 'Indeed, this Quran was revealed according to seven ahruf, so recite whatever is easy thereof.' This divine concession accommodated various Arab dialects.",
      },
      {
        question: "What is 'Tafsir Mawdu'i' (Thematic Tafsir)?",
        options: [
          "Translating the Quran into rhyming English poetry",
          "An interpretive approach that examines a specific theme, term, or concept across all relevant verses of the Quran",
          "Interpreting verses solely in chronological sequence of revelation",
          "Reading only one Juz per month",
        ],
        correctAnswer: "An interpretive approach that examines a specific theme, term, or concept across all relevant verses of the Quran",
        explanation:
          "Tafsir Mawdu'i gathers all verses discussing a particular topic (e.g., patience, justice, women's rights) from different chapters to deduce the comprehensive Quranic worldview on that topic.",
      },
      {
        question: "Why did the Prophet (PBUH) prevent the writing of his hadiths alongside the Quran in the earliest period of revelation?",
        options: [
          "Because writing was forbidden in Islam",
          "To prevent the words of the Prophet from being confused or intermixed with the verbatim text of the Quran",
          "Because paper was non-existent in Arabia",
          "Because Companions could not write",
        ],
        correctAnswer: "To prevent the words of the Prophet from being confused or intermixed with the verbatim text of the Quran",
        explanation:
          "As recorded in Sahih Muslim, the Prophet (PBUH) said: 'Do not write down anything from me except the Quran...' to ensure that prophetic statements were not accidentally blended into the transcribed verses of the Quran.",
      },
      {
        question: "When interpreting a Quranic verse, what is the role of 'Siyaq al-Kalam' (textual and rhetorical context)?",
        options: [
          "It is completely negligible and ignored by scholars",
          "It is crucial for determining the intended meaning and preventing verses from being quoted out of context",
          "It is only considered in legal courts of appeal",
          "It applies only to Mecca-era revelations",
        ],
        correctAnswer: "It is crucial for determining the intended meaning and preventing verses from being quoted out of context",
        explanation:
          "Context (Siyaq) is one of the most vital interpretive tools. Scholars of Usul emphasize that taking a verse out of its textual preceding and succeeding context often leads to grave misinterpretation.",
      },
      {
        question: "Which celebrated scholar wrote the renowned classical manual 'Muqaddimah fi Usul al-Tafsir' (Introduction to the Principles of Tafsir)?",
        options: ["Ibn Hajar al-Asqalani", "Shaykh al-Islam Ibn Taymiyyah", "Imam al-Nawawi", "Imam Malik"],
        correctAnswer: "Shaykh al-Islam Ibn Taymiyyah",
        explanation:
          "Ibn Taymiyyah authored this foundational epistle on the methodology of Tafsir, laying out the guidelines for Tafsir bil-Ma'thur, the schools of the Sahabah, types of interpretive differences, and how to assess Isra'iliyyat.",
      },
    ],
    advanced: [
        {
            question: "Who authored the famous Tafsir 'Fi Zilal al-Quran' (In the Shade of the Quran)?",
            options: ["Ibn Kathir", "Sayyid Qutb", "Al-Tabari", "Al-Qurtubi"],
            correctAnswer: "Sayyid Qutb",
            explanation: "'Fi Zilal al-Quran' was written by Sayyid Qutb while he was in prison in Egypt.",
          },
          {
            question: "What is 'Tafsir bil-Ra'y'?",
            options: [
              "Interpretation based on narrations",
              "Interpretation based on personal opinion",
              "Interpretation based on dreams",
              "Interpretation based on consensus",
            ],
            correctAnswer: "Interpretation based on personal opinion",
            explanation:
              "Tafsir bil-Ra'y is interpretation based on personal opinion or reasoning, which must be grounded in sound knowledge.",
          },
          {
            question: "Which famous Tafsir is known for its comprehensive linguistic analysis?",
            options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Kashshaf by Zamakhshari", "Tafsir al-Qurtubi"],
            correctAnswer: "Tafsir al-Kashshaf by Zamakhshari",
            explanation:
              "Al-Kashshaf by Zamakhshari is renowned for its detailed linguistic and rhetorical analysis of the Quran.",
          },
          {
            question: "What is 'Asbab al-Nuzul'?",
            options: [
              "The order of revelation",
              "The occasions or circumstances of revelation",
              "The place of revelation",
              "The time of revelation",
            ],
            correctAnswer: "The occasions or circumstances of revelation",
            explanation:
              "Asbab al-Nuzul refers to the historical contexts and occasions that led to the revelation of specific verses.",
          },
          {
            question: "What is the difference between 'Tafsir' and 'Ta'wil'?",
            options: [
              "They are synonyms",
              "Tafsir is literal explanation, Ta'wil is deeper interpretation",
              "Tafsir is for scholars, Ta'wil is for laypeople",
              "Tafsir is based on narrations, Ta'wil on reasoning",
            ],
            correctAnswer: "Tafsir is literal explanation, Ta'wil is deeper interpretation",
            explanation:
              "Traditionally, Tafsir refers to the apparent or literal explanation, while Ta'wil refers to the deeper or allegorical interpretation.",
          },
          {
            question: "What is 'Isra'iliyyat' in Tafsir literature?",
            options: [
              "Interpretations from Israeli scholars",
              "Stories about Bani Israel in the Quran",
              "Narrations from Jewish and Christian sources",
              "References to the Night Journey (Isra)",
            ],
            correctAnswer: "Narrations from Jewish and Christian sources",
            explanation:
              "Isra'iliyyat refers to narrations and stories from Jewish and Christian sources that were incorporated into some Tafsir works.",
          },
          {
            question: "Which Tafsir is known for its focus on legal rulings (Ahkam)?",
            options: ["Tafsir Ibn Kathir", "Tafsir al-Tabari", "Tafsir al-Qurtubi", "Tafsir al-Kashshaf"],
            correctAnswer: "Tafsir al-Qurtubi",
            explanation:
              "Tafsir al-Qurtubi (Al-Jami' li-Ahkam al-Quran) is famous for its detailed discussion of legal rulings derived from the Quran.",
          },
          {
            question: "What is 'Tafsir al-Ishari'?",
            options: [
              "Interpretation based on historical context",
              "Interpretation based on mystical or spiritual insights",
              "Interpretation based on scientific discoveries",
              "Interpretation based on linguistic analysis",
            ],
            correctAnswer: "Interpretation based on mystical or spiritual insights",
            explanation:
              "Tafsir al-Ishari refers to mystical or spiritual interpretations that go beyond the apparent meaning, often associated with Sufi traditions.",
          },
          {
            question: "What is the concept of 'Muhkam and Mutashabih' verses in the Quran?",
            options: [
              "Abrogating and abrogated verses",
              "Clear and ambiguous verses",
              "Long and short verses",
              "Early and late revelations",
            ],
            correctAnswer: "Clear and ambiguous verses",
            explanation:
              "Muhkam refers to verses with clear and definitive meanings, while Mutashabih refers to verses that are ambiguous or open to multiple interpretations.",
          },
          {
            question: "What is 'Al-Wujuh wal-Naza'ir' in Tafsir sciences?",
            options: [
              "Study of Quranic words with multiple meanings",
              "Analysis of Quranic stories",
              "Classification of Hadith",
              "Rules of Tajweed"
            ],
            correctAnswer: "Study of Quranic words with multiple meanings",
            explanation: "This science examines words that appear in different contexts with different meanings throughout the Quran."
          },
          {
            question: "What is 'Al-Itqan fi Ulum al-Quran' by al-Suyuti about?",
            options: [
              "Comprehensive work on Quranic sciences",
              "Tafsir of selected Surahs",
              "Refutation of other Tafsirs",
              "History of Quran compilation"
            ],
            correctAnswer: "Comprehensive work on Quranic sciences",
            explanation: "Al-Itqan is a masterpiece covering 80 different sciences related to the Quran's interpretation and history."
          },
          {
            question: "What is 'Tafsir al-Maturidi' known for?",
            options: [
              "Theological approach from Hanafi school",
              "Shafi'i legal perspective",
              "Literalist interpretations",
              "Exclusive focus on grammar"
            ],
            correctAnswer: "Theological approach from Hanafi school",
            explanation: "Al-Maturidi's Tafsir reflects the theological perspectives of the Hanafi school of thought."
          },
          {
            question: "What is 'Al-Durr al-Manthur' by al-Suyuti?",
            options: [
              "Compilation of narrations about each verse",
              "Poetic interpretation",
              "Scientific Tafsir",
              "Refutation of Isra'iliyyat"
            ],
            correctAnswer: "Compilation of narrations about each verse",
            explanation: "This work collects Hadiths and narrations related to each Quranic verse without much analysis."
          },
          {
            question: "What is 'Tafsir al-Kashshaf' controversial for?",
            options: [
              "Including Mu'tazili theological views",
              "Rejecting all Hadith",
              "Adding biblical stories",
              "Creating new Arabic grammar"
            ],
            correctAnswer: "Including Mu'tazili theological views",
            explanation: "While brilliant linguistically, Zamakhshari's Tafsir contains Mu'tazili theological perspectives rejected by mainstream Sunni Islam."
          },
          {
            question: "What is 'Tafsir al-Mazhari' named after?",
            options: [
              "The author's teacher Qutbuddin al-Mazhar",
              "Its focus on luminous verses",
              "The mosque where it was written",
              "Its publication during dawn (mazhar)"
            ],
            correctAnswer: "The author's teacher Qutbuddin al-Mazhar",
            explanation: "Named to honor his teacher, this 18th century Tafsir combines traditional and rational approaches."
          },
          {
            question: "What is unique about 'Tafsir al-Alusi' (Ruh al-Ma'ani)?",
            options: [
              "Balancing traditional and rational approaches",
              "Focusing only on Sufi interpretations",
              "Rejecting all classical Tafsirs",
              "Interpreting Quran chronologically"
            ],
            correctAnswer: "Balancing traditional and rational approaches",
            explanation: "Al-Alusi's Tafsir uniquely blends traditional interpretation with philosophical and theological insights."
          },
          {
            question: "What is 'Tafsir al-Tahrir wal-Tanwir' by Ibn Ashur known for?",
            options: [
              "Modern linguistic and social approach",
              "Exclusive focus on abrogation",
              "Reinterpreting Quran scientifically",
              "Collecting weak narrations"
            ],
            correctAnswer: "Modern linguistic and social approach",
            explanation: "This 20th century Tafsir offers fresh linguistic analysis while addressing contemporary social issues."
          },
          {
            question: "What is 'Tafsir al-Manar' controversial for?",
            options: [
              "Including modernist interpretations",
              "Rejecting all Hadith",
              "Adding biblical stories",
              "Creating new Arabic grammar"
            ],
            correctAnswer: "Including modernist interpretations",
            explanation: "Muhammad Abduh and Rashid Rida's Tafsir introduced modernist perspectives that some traditional scholars criticized."
          },
          {
            question: "What is 'Al-Tibyan fi Aqsam al-Quran' about?",
            options: [
              "Study of oaths in the Quran",
              "Classification of verses",
              "Abrogation in the Quran",
              "Quranic miracles"
            ],
            correctAnswer: "Study of oaths in the Quran",
            explanation: "Ibn Qayyim's work systematically analyzes the many oaths found throughout the Quran."
          },
          {
            question: "What is 'I'rab al-Quran' in Tafsir studies?",
            options: [
              "Grammatical analysis of Quranic verses",
              "Collection of rare recitations",
              "Study of abrogation",
              "Classification of narrators"
            ],
            correctAnswer: "Grammatical analysis of Quranic verses",
            explanation: "This specialized field examines the grammatical structures and syntactic relationships in the Quran."
          },
          {
            question: "What is 'Tafsir al-Muharrar al-Wajiz' by Ibn Atiyyah known for?",
            options: [
              "Concise yet comprehensive coverage",
              "Extensive philosophical discussions",
              "Focus on scientific miracles",
              "Rejection of all classical Tafsirs"
            ],
            correctAnswer: "Concise yet comprehensive coverage",
            explanation: "This Andalusian Tafsir is praised for its brevity while maintaining scholarly depth and accuracy."
          },
          {
            question: "What is 'Nazm al-Quran' in Tafsir methodology?",
            options: [
              "Study of the Quran's structural coherence",
              "Rules of Quranic recitation",
              "Classification of verses by length",
              "Counting words in the Quran"
            ],
            correctAnswer: "Study of the Quran's structural coherence",
            explanation: "This approach examines how Quranic verses and Surahs relate to each other thematically and structurally."
          },
          {
            question: "What is 'Tafsir al-Baydawi' influenced by?",
            options: [
              "Al-Zamakhshari's Kashshaf (without Mu'tazili views)",
              "Ibn Taymiyyah's teachings",
              "Exclusively Maliki jurisprudence",
              "Sufi interpretations only"
            ],
            correctAnswer: "Al-Zamakhshari's Kashshaf (without Mu'tazili views)",
            explanation: "Baydawi's Tafsir builds on al-Kashshaf's linguistic excellence while removing Mu'tazili theology."
          },
          {
            question: "What is 'Tafsir al-Wasit' by al-Wahidi known for?",
            options: [
              "Balanced middle-length approach",
              "Being the shortest Tafsir",
              "Focus only on legal verses",
              "Rejecting all previous Tafsirs"
            ],
            correctAnswer: "Balanced middle-length approach",
            explanation: "As the name suggests, this Tafsir takes a middle approach between brevity and comprehensiveness."
          },
          {
            question: "What is 'Tafsir al-Maraghi' known for?",
            options: [
              "Modern language addressing contemporary issues",
              "Exclusive focus on classical Arabic",
              "Rejection of all Hadith",
              "Interpretation through dreams"
            ],
            correctAnswer: "Modern language addressing contemporary issues",
            explanation: "This 20th century Egyptian Tafsir explains the Quran in modern Arabic while addressing current concerns."
          },
          {
            question: "What is 'Al-Burhan fi Ulum al-Quran' by al-Zarkashi about?",
            options: [
              "Comprehensive Quranic sciences",
              "Selected verse commentary",
              "Only abrogation studies",
              "History of compilation"
            ],
            correctAnswer: "Comprehensive Quranic sciences",
            explanation: "Zarkashi's work systematically covers various disciplines related to Quranic studies and interpretation."
          },
          {
            question: "What is 'Tafsir al-Shinqiti' (Adwa' al-Bayan) known for?",
            options: [
              "Interpreting Quran with Quran",
              "Exclusive focus on grammar",
              "Rejecting all classical Tafsirs",
              "Scientific interpretations only"
            ],
            correctAnswer: "Interpreting Quran with Quran",
            explanation: "This modern Tafsir emphasizes explaining Quranic verses by cross-referencing other relevant verses."
          },
          {
            question: "What is 'Tafsir al-Samarqandi' known for?",
            options: [
              "Incorporating Hanafi legal perspectives",
              "Shafi'i exclusive approach",
              "Rejecting all Hadith",
              "Modern scientific approach"
            ],
            correctAnswer: "Incorporating Hanafi legal perspectives",
            explanation: "This classical Tafsir reflects Hanafi school interpretations while drawing on traditional sources."
          },
          {
            question: "What is 'Al-Fawz al-Kabir' by Shah Waliullah about?",
            options: [
              "Principles of Quranic interpretation",
              "Collection of rare Hadith",
              "History of caliphates",
              "Refutation of other religions"
            ],
            correctAnswer: "Principles of Quranic interpretation",
            explanation: "This work outlines fundamental principles and methodologies for proper Quranic exegesis."
          },
          {
            question: "What is the concept of 'Nasikh and Mansukh' in Quranic interpretation?",
            options: [
              "Different styles of recitation",
              "Abrogating and abrogated verses",
              "Clear and ambiguous verses",
              "Literal and metaphorical meanings",
            ],
            correctAnswer: "Abrogating and abrogated verses",
            explanation:
              "Nasikh refers to verses that abrogate or supersede earlier rulings, while Mansukh refers to verses whose rulings have been abrogated or replaced by later revelations. This concept addresses the apparent contradictions in the Quran by recognizing the progressive nature of revelation.",
          },  
            {
          question: "In his 'Muqaddimah fi Usul al-Tafsir', how did Ibn Taymiyyah classify the vast majority of differences (Ikhtilaf) among the early Salaf in Tafsir?",
          options: [
            "As irreconcilable contradictions (Ikhtilaf al-Tadadd)",
            "As diversity of varied expressions or illustrative examples (Ikhtilaf al-Tanawwu')",
            "As political fabrications",
            "As theological heresy",
          ],
          correctAnswer: "As diversity of varied expressions or illustrative examples (Ikhtilaf al-Tanawwu')",
          explanation:
            "Ibn Taymiyyah demonstrated that early mufassirun frequently described different facets or examples of the same general concept rather than contradicting one another, terming this 'Ikhtilaf Tanawwu'' (diversity of expression) rather than 'Tadadd' (contradiction).",
        },
        {
          question: "How do authentic Mutawatir Qira'at (canonical variant readings) function in the derivation of Tafsir and Fiqh?",
          options: [
            "They abrogate each other completely",
            "They function like two distinct verses that complement and enrich legal and semantic understanding without contradiction",
            "Only the Hafs reading is legally actionable",
            "They represent scribal errors preserved for historical novelty",
          ],
          correctAnswer: "They function like two distinct verses that complement and enrich legal and semantic understanding without contradiction",
          explanation:
            "Scholars of Usul and Tafsir (such as Ibn al-Jazari and al-Zarkashi) note that authentic Qira'at are complementary revelations; varying vowelings or wordings provide expanded nuances, like two verses revealed on the same matter.",
        },
        {
          question: "What is a 'Lafz Mushtarak' (homonymous word) in Quranic linguistics and Usul al-Tafsir?",
          options: [
            "A word with only one clear grammatical meaning",
            "A single lexical term that carries two or more distinct meanings with equal probability in language, such as 'Qur''",
            "A foreign loanword not found in the Arabic dictionary",
            "A word that has no vowels",
          ],
          correctAnswer: "A single lexical term that carries two or more distinct meanings with equal probability in language, such as 'Qur''",
          explanation:
            "A Mushtarak is a word possessing multiple meanings established in lexicography, such as 'Qur'' in Surah al-Baqarah (2:228), which can signify either a woman's menstrual period or period of purity, leading to varying juristic conclusions.",
        },
        {
          question: "What are the strict conditions set by classical authorities like al-Shatibi and al-Suyuti for accepting 'Tafsir Ishari' (allusive/esoteric contemplation)?",
          options: [
            "It must replace the literal meaning entirely",
            "It must not contradict the literal/exoteric meaning, must have independent Shariah textual support, and not claim to be the exclusive meaning",
            "It must be received in a dream without linguistic evidence",
            "It is accepted only if authored by Persian poets",
          ],
          correctAnswer: "It must not contradict the literal/exoteric meaning, must have independent Shariah textual support, and not claim to be the exclusive meaning",
          explanation:
            "Orthodox scholarship strictly confines acceptable Ishari reflections: they must never negate the apparent linguistic meaning, must harmonize with Quranic and Sunnah principles, and must not be claimed as the sole divine intent.",
        },
        {
          question: "When the Tabi'in (successors) hold differing views on the interpretation of a verse and no statement from a Companion exists, what is the methodological rule?",
          options: [
            "The opinion of the oldest Tabi'i is deemed an infallible binding proof (Hujjah)",
            "The statement of one Tabi'i is not a definitive proof over another; scholars resolve the matter using language, context, and Quranic parallels",
            "The verse is declared non-functional and removed",
            "Any Tabi'i view must be immediately discarded",
          ],
          correctAnswer: "The statement of one Tabi'i is not a definitive proof over another; scholars resolve the matter using language, context, and Quranic parallels",
          explanation:
            "Scholars of Usul al-Tafsir state that while the consensus of the Tabi'in is an authoritative proof, their differing views are not binding upon one another. A scholar must exercise Tarjih using Arabic linguistics, context, and the Sunnah.",
        },
        {
          question: "In Quranic legal hermeneutics, what is the default legal indication (Dalaalah) of an imperative verb (Amr) in the absence of diversionary context?",
          options: ["Mere recommendation (Istihbab)", "Obligation (Wujub)", "Permissibility (Ibahah)", "Dislike (Karahah)"],
          correctAnswer: "Obligation (Wujub)",
          explanation:
            "In Usul al-Fiqh and legal Tafsir, the established principle is 'Al-Amru lil-Wujub' (An imperative command denotes mandatory obligation) unless external contextual evidence (Qarinah) downgrades it to recommendation or permissibility.",
        },
        {
          question: "Who authored the seminal rhetorical treatise 'Dala'il al-I'jaz' (Proofs of Inimitability), which established the theory of 'Nazm' (syntactic arrangement) in Quranic exegesis?",
          options: ["Abd al-Qahir al-Jurjani", "Abu Ubaydah", "Al-Farabi", "Ibn Sina"],
          correctAnswer: "Abd al-Qahir al-Jurjani",
          explanation:
            "Abd al-Qahir al-Jurjani (d. 471 AH) pioneered the profound theory of 'Nazm' in 'Dala'il al-I'jaz', arguing that the Quran's inimitability resides in its flawless structural, grammatical, and rhetorical composition.",
        },
        {
          question: "In the science of Quranic terminology, what is the precise distinction between 'Al-Wujuh' and 'Al-Naza'ir'?",
          options: [
            "They are exact synonyms with no distinction",
            "'Al-Wujuh' refers to a single word having multiple meanings across different contexts, while 'Al-Naza'ir' refers to different words having identical meanings",
            "'Al-Wujuh' relates to hadith while 'Al-Naza'ir' relates to grammar",
            "'Al-Wujuh' applies only to Makki verses",
          ],
          correctAnswer: "'Al-Wujuh' refers to a single word having multiple meanings across different contexts, while 'Al-Naza'ir' refers to different words having identical meanings",
          explanation:
            "In 'Ulum al-Quran, 'Al-Wujuh' signifies homonyms—a single term used in diverse senses throughout the Quran (e.g., Al-Huda meaning guidance, revelation, or steadfastness)—whereas 'Al-Naza'ir' refers to recurring parallel themes or synonymous expressions.",
        },
        {
          question: "What is the primary methodological distinction of 'Adwa' al-Bayan fi Idah al-Quran bil-Quran' by Shaykh Muhammad al-Amin al-Shinqiti?",
          options: [
            "Exclusively analyzing astronomical data",
            "A strict methodological commitment to explaining the Quran through the Quran first, followed by deep Usul al-Fiqh and linguistic analysis",
            "Translating the Quran into rhyming prose",
            "Ignoring classical Hadith compilations",
          ],
          correctAnswer: "A strict methodological commitment to explaining the Quran through the Quran first, followed by deep Usul al-Fiqh and linguistic analysis",
          explanation:
            "Shaykh al-Shinqiti devoted his monumental multi-volume Tafsir to the highest form of exegesis: interpreting verses by matching them with complementary Quranic verses, corroborated by authentic Hadith, Arabic poetry, and profound Usul al-Fiqh deductions.",
        },
        {
          question: "What is 'Dilalat al-Manthuq' versus 'Dilalat al-Mafhum' when deriving meanings from Quranic verses?",
          options: [
            "Spoken recitation versus silent reflection",
            "The meaning indicated by the explicit uttered words versus the meaning inferred from what is unstated/implied",
            "Verses revealed during day versus night",
            "Verses regarding men versus women",
          ],
          correctAnswer: "The meaning indicated by the explicit uttered words versus the meaning inferred from what is unstated/implied",
          explanation:
            "In Quranic hermeneutics, 'Manthuq' is the explicit pronounced text (e.g., 'Say not to them [parents] uff'), while 'Mafhum' is the implied understanding (e.g., if uttering 'uff' is forbidden, physical striking is forbidden a fortiori - Mafhum al-Muwafaqah).",
        },
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!tafsirCategory.levels.intermediate) {
  tafsirCategory.levels.intermediate = [...tafsirCategory.levels.easy]
}

export default tafsirCategory
