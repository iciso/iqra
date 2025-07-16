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
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!tafsirCategory.levels.intermediate) {
  tafsirCategory.levels.intermediate = [...tafsirCategory.levels.easy]
}

export default tafsirCategory
