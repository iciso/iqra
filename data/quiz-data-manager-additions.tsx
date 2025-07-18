import type { QuizCategory } from "@/types/quiz"

// Only Seerah category with questions
const seerahCategory: QuizCategory = {
  id: "seerah",
  title: "Seerah",
  description: "Prophet's Biography",
  icon: "",
  levels: {
    easy: [
      {
        question: "In which year was Prophet Muhammad (peace be upon him) born?",
        options: ["570 CE", "571 CE", "610 CE", "622 CE"],
        correctAnswer: "570 CE",
        explanation:
          "Prophet Muhammad (peace be upon him) was born in the Year of the Elephant, corresponding to approximately 570 CE in Makkah.",
      },
      {
        question: "What was the name of Prophet Muhammad's (peace be upon him) mother?",
        options: ["Halimah", "Khadijah", "Aminah", "Fatimah"],
        correctAnswer: "Aminah",
        explanation: "Aminah bint Wahb was the mother of Prophet Muhammad (peace be upon him).",
      },
      {
        question: "Who was the first wife of Prophet Muhammad (peace be upon him)?",
        options: ["Aisha", "Khadijah", "Hafsa", "Zaynab"],
        correctAnswer: "Khadijah",
        explanation:
          "Khadijah bint Khuwaylid was the first wife of Prophet Muhammad (peace be upon him) and the first person to accept Islam.",
      },
      {
        question: "How old was Prophet Muhammad (peace be upon him) when he received his first revelation?",
        options: ["30 years", "40 years", "50 years", "60 years"],
        correctAnswer: "40 years",
        explanation:
          "Prophet Muhammad (peace be upon him) was 40 years old when he received his first revelation in the Cave of Hira through Angel Jibreel (Gabriel).",
      },
      {
        question:
          "What was the name of the mountain where Prophet Muhammad (peace be upon him) received his first revelation?",
        options: ["Mount Uhud", "Mount Hira", "Mount Thawr", "Mount Arafat"],
        correctAnswer: "Mount Hira",
        explanation:
          "Prophet Muhammad (peace be upon him) received his first revelation in a cave on Mount Hira (also known as Jabal al-Nour or Mountain of Light) near Makkah.",
      },
      {
        question: "Who was the first male to accept Islam?",
        options: ["Abu Bakr", "Ali ibn Abi Talib", "Umar ibn al-Khattab", "Uthman ibn Affan"],
        correctAnswer: "Ali ibn Abi Talib",
        explanation:
          "Ali ibn Abi Talib, the cousin and son-in-law of Prophet Muhammad (peace be upon him), was the first male to accept Islam. He was a young boy at that time, living in the Prophet's household.",
      },
      {
        question: "What is the name of the migration from Makkah to Madinah?",
        options: ["Hijrah", "Isra", "Mi'raj", "Fath"],
        correctAnswer: "Hijrah",
        explanation:
          "The migration of Prophet Muhammad (peace be upon him) and his followers from Makkah to Madinah in 622 CE is known as the Hijrah. This event marks the beginning of the Islamic calendar.",
      },
      {
        question: "Which battle is known as the 'Victory of Victories' in Islamic history?",
        options: ["Battle of Badr", "Battle of Uhud", "Battle of Khandaq (Trench)", "Conquest of Makkah"],
        correctAnswer: "Battle of Badr",
        explanation:
          "The Battle of Badr, fought in 624 CE (2 AH), is referred to as the 'Victory of Victories' due to its significance in establishing the early Muslim community against overwhelming odds.",
      },
      {
        question: "In which year did the Prophet Muhammad (peace be upon him) perform his farewell pilgrimage?",
        options: ["630 CE", "631 CE", "632 CE", "633 CE"],
        correctAnswer: "632 CE",
        explanation:
          "The Prophet performed his farewell pilgrimage (Hajjat al-Wada) in 632 CE, shortly before his death. During this pilgrimage, he delivered his famous farewell sermon.",
      },
          {
  question: "What was the name of Prophet Muhammad's (peace be upon him) wet nurse?",
  options: ["Aminah", "Khadijah", "Halimah", "Fatimah"],
  correctAnswer: "Halimah",
  explanation: "Halimah al-Sa'diyah was the wet nurse who cared for the young Muhammad (peace be upon him) in the desert, following Arab tradition.",
},
{
  question: "Which companion was known as the Prophet's (peace be upon him) scribe of revelation?",
  options: ["Abu Bakr", "Umar ibn al-Khattab", "Zayd ibn Thabit", "Ali ibn Abi Talib"],
  correctAnswer: "Zayd ibn Thabit",
  explanation: "Zayd ibn Thabit was one of the primary scribes who wrote down the Quranic revelations as dictated by the Prophet (peace be upon him).",
},
{
  question: "How many years did the Prophet (peace be upon him) spend in Makkah after receiving the first revelation?",
  options: ["10 years", "13 years", "15 years", "20 years"],
  correctAnswer: "13 years",
  explanation: "The Prophet (peace be upon him) spent 13 years calling people to Islam in Makkah before migrating to Madinah.",
},
{
  question: "What was the name of the Prophet's (peace be upon him) camel during the Hijrah?",
  options: ["Al-Qaswa", "Al-Adha", "Al-Buraq", "Al-Hijrah"],
  correctAnswer: "Al-Qaswa",
  explanation: "Al-Qaswa was the name of the Prophet's (peace be upon him) she-camel that he rode during the Hijrah from Makkah to Madinah.",
},
{
  question: "Who was the first martyr in Islam?",
  options: ["Sumayyah bint Khayyat", "Hamzah ibn Abdul-Muttalib", "Umar ibn al-Khattab", "Bilal ibn Rabah"],
  correctAnswer: "Sumayyah bint Khayyat",
  explanation: "Sumayyah bint Khayyat was the first martyr in Islam, killed by the Quraysh for refusing to renounce her faith.",
},
{
  question: "Which Surah was revealed first to Prophet Muhammad (peace be upon him)?",
  options: ["Surah Al-Fatihah", "Surah Al-Ikhlas", "Surah Al-Alaq", "Surah Yasin"],
  correctAnswer: "Surah Al-Alaq",
  explanation: "The first five verses of Surah Al-Alaq (96:1-5) were the first revelation received by the Prophet (peace be upon him) in Cave Hira.",
},
{
  question: "What was the age difference between Prophet Muhammad (peace be upon him) and Khadijah (RA)?",
  options: ["He was older by 5 years", "She was older by 15 years", "They were the same age", "She was older by 10 years"],
  correctAnswer: "She was older by 15 years",
  explanation: "Khadijah (RA) was approximately 40 years old when she married the 25-year-old Muhammad (peace be upon him), making her 15 years his senior.",
},
{
  question: "How many children did Prophet Muhammad (peace be upon him) have?",
  options: ["3", "5", "7", "9"],
  correctAnswer: "7",
  explanation: "The Prophet (peace be upon him) had 7 children: Qasim, Abdullah, Zainab, Ruqayyah, Umm Kulthum, Fatimah, and Ibrahim.",
},
{
  question: "What was the name of the Prophet's (peace be upon him) foster brother?",
  options: ["Hamzah", "Ali", "Zayd", "Abu Sufyan"],
  correctAnswer: "Zayd",
  explanation: "Zayd ibn Harithah was the Prophet's (peace be upon him) foster brother and later became his adopted son before adoption was prohibited in Islam.",
},
{
  question: "Which companion was known as the 'Sword of Allah'?",
  options: ["Umar ibn al-Khattab", "Khalid ibn al-Walid", "Ali ibn Abi Talib", "Hamzah ibn Abdul-Muttalib"],
  correctAnswer: "Khalid ibn al-Walid",
  explanation: "Khalid ibn al-Walid earned the title 'Sword of Allah' for his military prowess in defending and spreading Islam.",
},
{
  question: "What was the name of the Prophet's (peace be upon him) grandfather who raised him?",
  options: ["Abdul-Muttalib", "Abu Talib", "Hamzah", "Al-Abbas"],
  correctAnswer: "Abdul-Muttalib",
  explanation: "Abdul-Muttalib, the chief of Makkah, took care of the young Muhammad (peace be upon him) after his mother's death until his own passing.",
},
{
  question: "Which battle occurred first in Islamic history?",
  options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
  correctAnswer: "Battle of Badr",
  explanation: "The Battle of Badr (624 CE/2 AH) was the first major battle between the Muslims and the Quraysh of Makkah.",
},
{
  question: "What was the first mosque built in Islam?",
  options: ["Masjid al-Haram", "Masjid an-Nabawi", "Masjid Quba", "Masjid al-Aqsa"],
  correctAnswer: "Masjid Quba",
  explanation: "Masjid Quba, built shortly after the Hijrah, was the first mosque constructed in Islamic history.",
},
{
  question: "Who was the first person to call the Adhan (Islamic call to prayer)?",
  options: ["Bilal ibn Rabah", "Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib"],
  correctAnswer: "Bilal ibn Rabah",
  explanation: "Bilal ibn Rabah, a former Ethiopian slave, was the first muezzin appointed by the Prophet (peace be upon him).",
},
{
  question: "Which companion was known as the 'Possessor of Two Lights'?",
  options: ["Uthman ibn Affan", "Talhah ibn Ubaydullah", "Abdur-Rahman ibn Awf", "Zubayr ibn al-Awwam"],
  correctAnswer: "Uthman ibn Affan",
  explanation: "Uthman ibn Affan earned this title because he married two of the Prophet's daughters (Ruqayyah and after her death, Umm Kulthum).",
},
{
  question: "What was the name of the Prophet's (peace be upon him) uncle who initially opposed Islam but later accepted it?",
  options: ["Abu Talib", "Hamzah", "Al-Abbas", "Abu Lahab"],
  correctAnswer: "Al-Abbas",
  explanation: "Al-Abbas initially kept his Islam secret but later openly supported the Muslim community and participated in the conquest of Makkah.",
},
{
  question: "How many years after the Hijrah did the conquest of Makkah occur?",
  options: ["5 years", "8 years", "10 years", "12 years"],
  correctAnswer: "8 years",
  explanation: "The conquest of Makkah occurred in 8 AH (630 CE), eight years after the Hijrah to Madinah.",
},
{
  question: "What was the name of the Prophet's (peace be upon him) she-camel that was attacked at Uhud?",
  options: ["Al-Qaswa", "Al-Adba", "Al-Jadha", "Al-Aqwa"],
  correctAnswer: "Al-Adba",
  explanation: "Al-Adba was the Prophet's she-camel that was attacked during the Battle of Uhud, causing rumors of his death.",
},
{
  question: "Which companion was the first to memorize the entire Quran?",
  options: ["Abu Bakr", "Umar", "Uthman", "Ali"],
  correctAnswer: "Uthman",
  explanation: "Uthman ibn Affan was among the first to memorize the entire Quran during the Prophet's (peace be upon him) lifetime.",
},
{
  question: "What was the name of the Jewish tribe that broke their treaty with the Muslims during the Battle of Khandaq?",
  options: ["Banu Qurayza", "Banu Nadir", "Banu Qaynuqa", "Banu Hashim"],
  correctAnswer: "Banu Qurayza",
  explanation: "Banu Qurayza violated their treaty with the Muslims by conspiring with the Quraysh during the Battle of Khandaq (Trench).",
      },
      {
        question: "How old was Prophet Muhammad (peace be upon him) when he passed away?",
        options: ["60 years", "63 years", "65 years", "70 years"],
        correctAnswer: "63 years",
        explanation: "Prophet Muhammad (peace be upon him) passed away at the age of 63 in 632 CE in Madinah.",
      },
    ],
    advanced: [
      {
        question:
          "What was the 'Hilf al-Fudul' (League of the Virtuous) and what was Prophet Muhammad's (peace be upon him) involvement in it?",
        options: [
          "A military alliance that the Prophet formed after becoming a prophet",
          "A pre-Islamic pact to protect the oppressed that the Prophet participated in and later endorsed in Islam",
          "A treaty between Muslims and Jews in Madinah",
          "A group of scribes who wrote down the Quranic revelations",
        ],
        correctAnswer:
          "A pre-Islamic pact to protect the oppressed that the Prophet participated in and later endorsed in Islam",
        explanation:
          "Hilf al-Fudul was a pre-Islamic alliance formed by various Makkan clans to protect the rights of the weak and oppressed. Muhammad (peace be upon him) participated in this pact before prophethood and later stated that he would still uphold such a noble agreement even after Islam, showing Islam's commitment to justice regardless of religious boundaries.",
      },
      {
        question: "What was the significance of the 'Year of Grief' (Am al-Huzn) in the Prophet's life?",
        options: [
          "It marked the year of the Battle of Uhud where Muslims faced a setback",
          "It was the year when the Muslims were boycotted by the Quraysh",
          "It was the year when both the Prophet's uncle Abu Talib and his wife Khadijah died",
          "It was the year when the Prophet was rejected by the people of Ta'if",
        ],
        correctAnswer: "It was the year when both the Prophet's uncle Abu Talib and his wife Khadijah died",
        explanation:
          "The 'Year of Grief' (Am al-Huzn) refers to the 10th year of prophethood (619-620 CE) when Prophet Muhammad (peace be upon him) lost both his beloved wife Khadijah and his protective uncle Abu Talib within a short period. These losses were deeply personal and also had significant implications for the Prophet's security and emotional support.",
      },
      {
        question: "What was the Prophet's approach to leadership and governance in Madinah?",
        options: [
          "He ruled as an absolute monarch with complete authority",
          "He established a consultative leadership style, regularly seeking advice from companions",
          "He delegated all governance to appointed officials",
          "He focused only on spiritual matters and left governance to others",
        ],
        correctAnswer: "He established a consultative leadership style, regularly seeking advice from companions",
        explanation:
          "Prophet Muhammad (peace be upon him) established a consultative (shura) style of leadership in Madinah. Despite receiving divine revelation, he regularly consulted his companions on matters not explicitly addressed in revelation, demonstrating the importance of collective wisdom in governance. The Quran itself praises 'those who conduct their affairs by mutual consultation' (42:38).",
      },
      {
        question: "What was the significance of the Prophet's night journey (Isra) and ascension (Mi'raj)?",
        options: [
          "It was primarily a physical journey to Jerusalem to establish it as a holy site",
          "It was a spiritual experience with no historical significance",
          "It was a miraculous journey that provided spiritual strength during a difficult period and established the five daily prayers",
          "It was a diplomatic mission to meet with leaders of other faiths",
        ],
        correctAnswer:
          "It was a miraculous journey that provided spiritual strength during a difficult period and established the five daily prayers",
        explanation:
          "The Isra and Mi'raj was a miraculous journey that occurred during a particularly difficult period in the Prophet's mission, after the Year of Grief. It provided spiritual strength and reassurance. During this journey, the five daily prayers were prescribed, making it a pivotal event in Islamic worship. The journey also symbolically connected Islam with previous prophets and established Jerusalem as the third holiest site in Islam.",
      },
      {
        question: "How did the Prophet Muhammad (peace be upon him) treat his enemies after the conquest of Makkah?",
        options: [
          "He executed all those who had persecuted Muslims",
          "He forced them all to accept Islam or face exile",
          "He granted a general amnesty, saying 'Go, for you are free'",
          "He imprisoned the leaders and pardoned the common people",
        ],
        correctAnswer: "He granted a general amnesty, saying 'Go, for you are free'",
        explanation:
          "After the conquest of Makkah in 630 CE, despite having power over those who had persecuted him and his followers for years, Prophet Muhammad (peace be upon him) granted a general amnesty, telling the people of Makkah: 'Go, for you are free.' This remarkable act of forgiveness and mercy stands as one of history's greatest examples of reconciliation and demonstrates the Prophet's character and the nature of his mission.",
      },
      {
        question:
          "What was the Prophet's approach to interfaith relations as evidenced in his interactions with non-Muslims?",
        options: [
          "He avoided all contact with non-Muslims",
          "He engaged respectfully with people of other faiths, made treaties with them, and protected their rights to worship",
          "He only interacted with non-Muslims for the purpose of converting them",
          "He treated non-Muslims as second-class citizens with no rights",
        ],
        correctAnswer:
          "He engaged respectfully with people of other faiths, made treaties with them, and protected their rights to worship",
        explanation:
          "Prophet Muhammad's (peace be upon him) approach to interfaith relations was characterized by respect, engagement, and protection of rights. He made treaties with Jewish and Christian communities, sent and received emissaries to and from non-Muslim leaders, protected the right of non-Muslims to worship according to their faith, and engaged in respectful dialogue. His letter to the monks of St. Catherine's Monastery, guaranteeing protection for Christians, exemplifies this approach.",
      },
      {
        question:
          "What was the Prophet's teaching regarding racial equality, as demonstrated in his words and actions?",
        options: [
          "He taught that Arabs were superior to non-Arabs",
          "He did not address racial issues as they were not relevant in his time",
          "He explicitly rejected racial superiority, stating that no Arab has superiority over a non-Arab except in piety",
          "He taught that racial differences were divinely ordained hierarchies",
        ],
        correctAnswer:
          "He explicitly rejected racial superiority, stating that no Arab has superiority over a non-Arab except in piety",
        explanation:
          "Prophet Muhammad (peace be upon him) explicitly rejected racial superiority. In his farewell sermon, he stated: 'O people! Your Lord is one, and your father [Adam] is one. An Arab has no superiority over a non-Arab, nor does a non-Arab have superiority over an Arab. A white person has no superiority over a black person, nor does a black person have superiority over a white person. Superiority is only by piety and good action.' His close companions included people of various racial backgrounds, including Bilal (an Abyssinian), Salman (a Persian), and Suhayb (a Roman).",
      },
      {
        question: "What was the significance of the Treaty of Hudaybiyyah in Islamic history?",
        options: [
          "It marked the conquest of Makkah",
          "It was a military defeat for Muslims",
          "It was a strategic victory that allowed Islam to spread peacefully",
          "It ended all conflicts between Muslims and non-Muslims",
        ],
        correctAnswer: "It was a strategic victory that allowed Islam to spread peacefully",
        explanation:
          "Although initially appearing as a setback, the Treaty of Hudaybiyyah (628 CE) proved to be a strategic victory. It established a 10-year peace that allowed Muslims to freely preach Islam, resulting in many conversions. The Quran refers to it as 'a clear victory' (48:1).",
      },
      {
        question: "What was the 'Constitution of Madinah' and its historical significance?",
        options: [
          "A peace treaty between Muslims and Jews",
          "The first written constitution establishing a multi-religious state with common citizenship",
          "A document outlining rules of trade in Madinah",
          "A military alliance against the Quraysh",
        ],
        correctAnswer: "The first written constitution establishing a multi-religious state with common citizenship",
        explanation:
          "The Constitution of Madinah, established shortly after the Prophet's migration, is considered by many historians as the first written constitution in the world. It established a pluralistic state where different religious communities (Muslims, Jews, and pagans) were recognized as one community (ummah) with equal rights and responsibilities.",
      },
          {
  question: "What was the significance of the 'First Pledge of Aqabah' in Islamic history?",
  options: [
    "It marked the beginning of armed conflict with the Quraysh",
    "It was the first formal acceptance of Islam by a group from Madinah",
    "It established the first Islamic state",
    "It was the Prophet's first public declaration of prophethood"
  ],
  correctAnswer: "It was the first formal acceptance of Islam by a group from Madinah",
  explanation: "The First Pledge of Aqabah (621 CE) marked the first formal acceptance of Islam by twelve individuals from Yathrib (later Madinah), paving the way for the Hijrah and establishment of the first Muslim community."
},
{
  question: "What was the 'Sariyyah' system in the Prophet's military strategy?",
  options: [
    "Naval warfare tactics",
    "Small expeditionary forces sent for specific missions",
    "Cavalry units",
    "Defensive fortifications"
  ],
  correctAnswer: "Small expeditionary forces sent for specific missions",
  explanation: "The Sariyyah were small military expeditions (usually 5-300 men) sent by the Prophet (peace be upon him) for specific missions like intelligence gathering, treaty enforcement, or deterring enemy aggression."
},
{
  question: "What was the 'Mubahala' event and what does it demonstrate about the Prophet's confidence in his message?",
  options: [
    "A military challenge to the Quraysh",
    "A mutual curse challenge with Christian delegates from Najran",
    "A public debate with Jewish scholars",
    "A test of Quranic recitation"
  ],
  correctAnswer: "A mutual curse challenge with Christian delegates from Najran",
  explanation: "The Mubahala (10 AH) was a proposed mutual invocation of God's curse upon the liars between the Prophet and Christian delegates from Najran. The Prophet's willingness to engage in this ultimate truth test with his family demonstrates his absolute certainty in the truth of his message."
},
{
  question: "What was the Prophet's approach to slavery and emancipation?",
  options: [
    "He immediately abolished all slavery",
    "He maintained the status quo without change",
    "He instituted gradual reforms encouraging emancipation while regulating existing slavery",
    "He increased the practice to build Muslim armies"
  ],
  correctAnswer: "He instituted gradual reforms encouraging emancipation while regulating existing slavery",
  explanation: "The Prophet (peace be upon him) introduced reforms that encouraged emancipation (making it a virtuous act and sometimes a religious requirement) while improving conditions for slaves. He transformed slavery from a permanent condition to a temporary one, with multiple paths to freedom."
},
{
  question: "What was the 'Hudaybiyyah Companions' and their special status?",
  options: [
    "Those who fought at Hudaybiyyah",
    "Those who pledged allegiance under the tree at Hudaybiyyah",
    "Those who negotiated the treaty",
    "Those who opposed the treaty"
  ],
  correctAnswer: "Those who pledged allegiance under the tree at Hudaybiyyah",
  explanation: "The 1,400+ companions who pledged allegiance (Bay'ah al-Ridwan) under the tree at Hudaybiyyah are specially mentioned in the Quran (48:18) and were promised Paradise for their steadfastness during this tense negotiation."
},
{
  question: "What was the Prophet's approach to environmental conservation as evidenced in his teachings and practices?",
  options: [
    "He didn't address environmental issues",
    "He taught sustainable use of resources and prohibited wanton destruction",
    "He prioritized human needs over environmental concerns",
    "He encouraged deforestation for urban development"
  ],
  correctAnswer: "He taught sustainable use of resources and prohibited wanton destruction",
  explanation: "The Prophet (peace be upon him) taught numerous environmental principles: prohibiting overconsumption (israf), encouraging tree planting ('If the Hour is coming and you have a seedling, plant it'), forbidding pollution ('Don't urinate in stagnant water'), and establishing protected zones (hima)."
},
{
  question: "What was the 'Ghazwah' vs 'Sariyyah' distinction in the Prophet's military campaigns?",
  options: [
    "Ghazwah were defensive, Sariyyah were offensive",
    "Ghazwah were led by the Prophet, Sariyyah by companions",
    "Ghazwah were larger, Sariyyah smaller",
    "Ghazwah were against pagans, Sariyyah against People of the Book"
  ],
  correctAnswer: "Ghazwah were led by the Prophet, Sariyyah by companions",
  explanation: "Ghazwah refers to the 27 military expeditions personally led by the Prophet (peace be upon him), while Sariyyah were the 60+ expeditions he authorized but were led by companions. This distinction shows his leadership model and trust in capable companions."
},
{
  question: "What was the Prophet's policy regarding prisoners of war?",
  options: [
    "Always execution",
    "Always enslavement",
    "Case-by-case basis including release, ransom, or teaching literacy",
    "Forced conversion to Islam"
  ],
  correctAnswer: "Case-by-case basis including release, ransom, or teaching literacy",
  explanation: "The Prophet (peace be upon him) treated POWs variably: some were released (Badr prisoners who taught literacy), others ransomed, and some kept temporarily. This humane approach contrasted with contemporary norms of execution or permanent enslavement."
},
{
  question: "What was the 'People of the Bench' (Ashab al-Suffah) and their role in early Islam?",
  options: [
    "Judges in early Madinah",
    "Poor companions who lived in the mosque's courtyard and dedicated themselves to learning",
    "The scribes who recorded revelations",
    "The builders of the first mosque"
  ],
  correctAnswer: "Poor companions who lived in the mosque's courtyard and dedicated themselves to learning",
  explanation: "Ashab al-Suffah were about 70-80 poor companions (including Abu Huraira) who lived in the Prophet's Mosque's shaded area, dedicating themselves to learning Islam. They became key teachers and narrators of hadith, showing the Prophet's investment in education."
},
{
  question: "What was the Prophet's approach to non-Muslim relatives, as demonstrated with his uncle Abu Talib?",
  options: [
    "He cut all ties with non-Muslim relatives",
    "He maintained family bonds while inviting them to Islam",
    "He only interacted with them for conversion purposes",
    "He treated them as enemies"
  ],
  correctAnswer: "He maintained family bonds while inviting them to Islam",
  explanation: "Despite Abu Talib's rejection of Islam, the Prophet (peace be upon him) maintained close family ties, cared for him on his deathbed, and continued to pray for him. This shows Islam's emphasis on maintaining family bonds regardless of religious differences."
},
{
  question: "What was the 'Incident of Ifk' and how did the Prophet handle it?",
  options: [
    "A military defeat that he turned into a learning opportunity",
    "A false accusation against Aisha that he patiently investigated before divine revelation cleared her",
    "A financial dispute among companions that he mediated",
    "A challenge to his leadership that he confronted decisively"
  ],
  correctAnswer: "A false accusation against Aisha that he patiently investigated before divine revelation cleared her",
  explanation: "The Incident of Ifk (6 AH) involved false rumors about Aisha's (RA) chastity. The Prophet (peace be upon him) demonstrated exemplary patience, avoiding rash judgments, and waited for divine clarification (Surah An-Nur 24:11-20), establishing principles for handling accusations."
},
{
  question: "What was the Prophet's approach to inter-tribal conflicts among Muslims?",
  options: [
    "He ignored them as tribal matters",
    "He immediately took sides with the stronger tribe",
    "He mediated fairly based on Islamic principles, not tribal affiliations",
    "He punished all parties equally regardless of fault"
  ],
  correctAnswer: "He mediated fairly based on Islamic principles, not tribal affiliations",
  explanation: "The Prophet (peace be upon him) consistently judged conflicts based on justice, not tribal loyalties. His famous judgment between the Muhajirun and Ansar after the Battle of Banu Mustaliq (when he said 'Leave it, for it is rotten') demonstrates this principle."
},
{
  question: "What was the significance of the 'Farewell Sermon' in Islamic teachings?",
  options: [
    "It summarized all key Islamic principles including equality, sanctity of life/property, and women's rights",
    "It was primarily about inheritance laws",
    "It announced the completion of the Quran",
    "It designated Ali as successor"
  ],
  correctAnswer: "It summarized all key Islamic principles including equality, sanctity of life/property, and women's rights",
  explanation: "The Farewell Sermon (632 CE) delivered at Arafat during Hajj encapsulated Islam's core teachings: equality before Allah, sanctity of Muslim life/property, rights of women, prohibition of usury, and the completion of the divine message. It serves as a constitutional document for the Muslim ummah."
},
{
  question: "What was the Prophet's approach to cultural practices not explicitly addressed by revelation?",
  options: [
    "He rejected all pre-Islamic cultural practices",
    "He approved all cultural practices unless they contradicted Islamic principles",
    "He created entirely new cultural practices",
    "He only allowed Arab cultural practices"
  ],
  correctAnswer: "He approved all cultural practices unless they contradicted Islamic principles",
  explanation: "The Prophet (peace be upon him) maintained many pre-Islamic Arab customs (like dress, food, and business practices) that didn't contradict Islamic principles, demonstrating Islam's adaptability to different cultures while maintaining core values."
},
{
  question: "What was the 'Delegations Year' (9 AH) and its significance?",
  options: [
    "The year when all Arab tribes sent delegations to accept Islam",
    "The year when foreign ambassadors came to Madinah",
    "The year of military campaigns against remaining polytheists",
    "The year the Prophet sent emissaries to foreign rulers"
  ],
  correctAnswer: "The year when all Arab tribes sent delegations to accept Islam",
  explanation: "Following the conquest of Makkah and the Battle of Hunayn (8 AH), year 9 AH saw delegations from across Arabia coming to Madinah to accept Islam, marking the widespread acceptance of Islam in the Arabian Peninsula."
},
{
  question: "What was the Prophet's approach to medical treatment and healthcare?",
  options: [
    "He rejected all medical treatment relying only on prayer",
    "He encouraged seeking medical treatment alongside spiritual remedies",
    "He only allowed traditional Arab medicine",
    "He prohibited all forms of medicine"
  ],
  correctAnswer: "He encouraged seeking medical treatment alongside spiritual remedies",
  explanation: "The Prophet (peace be upon him) combined spiritual and physical healthcare, saying 'Use medical treatment, for Allah has not created a disease without creating its cure.' He recommended specific treatments (honey, cupping, black seed) while emphasizing divine healing."
},
{
  question: "What was the Prophet's policy regarding the People of the Book (Jews and Christians) in Islamic lands?",
  options: [
    "Forced conversion or expulsion",
    "Protected status with religious freedom under certain conditions",
    "Complete assimilation into Muslim society",
    "No interaction permitted"
  ],
  correctAnswer: "Protected status with religious freedom under certain conditions",
  explanation: "The Prophet (peace be upon him) established the dhimmi system, granting Jews and Christians protected status with religious freedom in exchange for jizyah (tax). His treaties with Jewish communities and letter to the monks of St. Catherine demonstrate this policy."
},
{
  question: "What was the Prophet's approach to urban planning in Madinah?",
  options: [
    "He didn't engage in urban planning",
    "He established principles of public spaces, sanitation, and community facilities",
    "He copied Roman city designs",
    "He prioritized military fortifications over civilian needs"
  ],
  correctAnswer: "He established principles of public spaces, sanitation, and community facilities",
  explanation: "The Prophet (peace be upon him) transformed Yathrib into Madinah with intentional urban planning: establishing the mosque as community center, creating public spaces (suffah), regulating construction (privacy rights), and emphasizing cleanliness ('Cleanliness is half of faith')."
},
{
  question: "What was the Prophet's approach to women's rights and status?",
  options: [
    "He maintained pre-Islamic Arab patriarchy",
    "He radically elevated women's status through inheritance, marriage, and property rights",
    "He excluded women from public life",
    "He treated women exactly like men in all matters"
  ],
  correctAnswer: "He radically elevated women's status through inheritance, marriage, and property rights",
  explanation: "The Prophet (peace be upon him) transformed women's status by granting inheritance rights, requiring consent in marriage, prohibiting female infanticide, establishing education rights, and recognizing women's legal/testimonial capacity - while acknowledging gender differences in roles and responsibilities."
},
{
  question: "What was the Prophet's approach to consultation (shura) in governance?",
  options: [
    "He made all decisions alone based on revelation",
    "He consulted widely on non-revealed matters including with women",
    "He only consulted senior male companions",
    "He considered consultation unnecessary"
  ],
  correctAnswer: "He consulted widely on non-revealed matters including with women",
  explanation: "While receiving divine guidance on religious matters, the Prophet (peace be upon him) regularly consulted companions (including women like Umm Salamah at Hudaybiyyah) on strategic, military, and administrative decisions, modeling the Islamic principle of shura (consultation)."
      },
      {
        question: "What was the economic system established by the Prophet in Madinah?",
        options: [
          "A purely capitalist free market with no regulations",
          "A communist system with no private property",
          "A balanced economic system with ethical guidelines and mechanisms for wealth redistribution",
          "A barter system with no monetary exchange",
        ],
        correctAnswer: "A balanced economic system with ethical guidelines and mechanisms for wealth redistribution",
        explanation:
          "Prophet Muhammad (peace be upon him) established a balanced economic system in Madinah that respected private ownership while implementing ethical guidelines to prevent exploitation. He prohibited usury (riba), monopolistic practices (ihtikar), and fraudulent transactions (gharar). He established mechanisms for wealth redistribution through zakat (obligatory charity) and encouraged voluntary charity (sadaqah).",
      },
    ],
  },
}

export default seerahCategory
