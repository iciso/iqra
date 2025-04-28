import type { QuizCategory } from "@/types/quiz"

// Seerah category with questions
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
        question: "How old was Prophet Muhammad (peace be upon him) when he passed away?",
        options: ["60 years", "63 years", "65 years", "70 years"],
        correctAnswer: "63 years",
        explanation: "Prophet Muhammad (peace be upon him) passed away at the age of 63 in 632 CE in Madinah.",
      },
    ],
    advanced: [
      {
        question:
          "What was the significance of the Treaty of Hudaybiyyah in the Prophet's (peace be upon him) mission?",
        options: [
          "It marked the conquest of Makkah",
          "It established the first Islamic state",
          "It was a strategic victory that allowed Islam to spread peacefully and led to many conversions",
          "It ended all hostilities between Muslims and non-Muslims permanently",
        ],
        correctAnswer: "It was a strategic victory that allowed Islam to spread peacefully and led to many conversions",
        explanation:
          "Although initially appearing as a setback to the Muslims, the Treaty of Hudaybiyyah (628 CE) proved to be a strategic victory. It established a 10-year peace that allowed Muslims to freely preach Islam, resulting in many conversions. The Quran refers to it as 'a clear victory' (48:1).",
      },
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
        question: "What was the 'Constitution of Madinah' (Sahifat al-Madinah) and its historical significance?",
        options: [
          "It was merely a peace treaty between Muslims and Jews",
          "It was the first written constitution establishing a multi-religious, multi-tribal state with common citizenship",
          "It was a document outlining the rules of trade in Madinah",
          "It was a military alliance against the Quraysh of Makkah",
        ],
        correctAnswer:
          "It was the first written constitution establishing a multi-religious, multi-tribal state with common citizenship",
        explanation:
          "The Constitution of Madinah, established shortly after the Prophet's migration, is considered by many historians as the first written constitution in the world. It established a pluralistic state where different religious communities (Muslims, Jews, and pagans) and tribes were recognized as one community (ummah) with equal rights and responsibilities, while maintaining their religious autonomy.",
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
        question: "What was the economic system established by the Prophet in Madinah?",
        options: [
          "A purely capitalist free market with no regulations",
          "A communist system with no private property",
          "A balanced economic system with ethical guidelines, prohibitions against exploitation, and mechanisms for wealth redistribution",
          "A barter system with no monetary exchange",
        ],
        correctAnswer:
          "A balanced economic system with ethical guidelines, prohibitions against exploitation, and mechanisms for wealth redistribution",
        explanation:
          "Prophet Muhammad (peace be upon him) established a balanced economic system in Madinah that respected private ownership while implementing ethical guidelines to prevent exploitation. He prohibited usury (riba), monopolistic practices (ihtikar), and fraudulent transactions (gharar). He established mechanisms for wealth redistribution through zakat (obligatory charity), encouraged voluntary charity (sadaqah), and instituted inheritance laws that distributed wealth among multiple heirs. The marketplace of Madinah was regulated to ensure fair dealing but allowed for legitimate profit.",
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
        question: "What was the Prophet's approach to leadership and governance in Madinah?",
        options: [
          "He ruled as an absolute monarch",
          "He established a consultative leadership style, regularly seeking advice from companions",
          "He delegated all governance to appointed officials",
          "He focused only on spiritual matters, not governance",
        ],
        correctAnswer: "He established a consultative leadership style, regularly seeking advice from companions",
        explanation:
          "Prophet Muhammad (peace be upon him) established a consultative (shura) style of leadership in Madinah. Despite receiving divine revelation, he regularly consulted his companions on matters not explicitly addressed in revelation, demonstrating the importance of collective wisdom in governance.",
      },
      {
        question: "How did the Prophet Muhammad (peace be upon him) treat his enemies after the conquest of Makkah?",
        options: [
          "He executed those who had persecuted Muslims",
          "He forced them to accept Islam or face exile",
          "He granted a general amnesty, saying 'Go, for you are free'",
          "He imprisoned the leaders and pardoned the common people",
        ],
        correctAnswer: "He granted a general amnesty, saying 'Go, for you are free'",
        explanation:
          "After the conquest of Makkah in 630 CE, despite having power over those who had persecuted him and his followers for years, Prophet Muhammad (peace be upon him) granted a general amnesty, telling the people of Makkah: 'Go, for you are free.' This remarkable act of forgiveness demonstrates the Prophet's character and the nature of his mission.",
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
