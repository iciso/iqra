import type { QuizCategory } from "@/types/quiz"

const dawahCategory: QuizCategory = {
  id: "dawah",
  title: "Dawah",
  description: "Islamic Outreach and Invitation",
  icon: "message-circle",
  levels: {
    easy: [
      {
        question: "What does the term 'Dawah' mean?",
        options: ["Prayer", "Charity", "Invitation or Call", "Pilgrimage"],
        correctAnswer: "Invitation or Call",
        explanation:
          "Dawah literally means 'invitation' or 'call' in Arabic. In Islamic context, it refers to inviting people to understand and embrace Islam.",
      },
      {
        question: "Which Quranic verse mentions 'calling to the way of your Lord with wisdom and good instruction'?",
        options: ["Surah Al-Baqarah 2:256", "Surah An-Nahl 16:125", "Surah Al-Ikhlas 112:1", "Surah Al-Fatiha 1:5"],
        correctAnswer: "Surah An-Nahl 16:125",
        explanation:
          "Surah An-Nahl 16:125 states: 'Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.'",
      },
      {
        question: "What is the primary purpose of Dawah?",
        options: [
          "To convert as many people as possible",
          "To convey the message of Islam and invite to the truth",
          "To win arguments against other religions",
          "To establish Islamic rule",
        ],
        correctAnswer: "To convey the message of Islam and invite to the truth",
        explanation:
          "The primary purpose of Dawah is to convey the message of Islam and invite people to the truth. The guidance is ultimately from Allah, and there is no compulsion in religion.",
      },
      {
        question: "Which of the following is NOT one of the key principles of effective Dawah?",
        options: [
          "Wisdom (Hikmah)",
          "Good instruction (Maw'izah Hasanah)",
          "Arguing in the best manner",
          "Forcing others to accept your viewpoint",
        ],
        correctAnswer: "Forcing others to accept your viewpoint",
        explanation:
          "Forcing others contradicts the Quranic principle 'There is no compulsion in religion' (2:256). The key principles are wisdom, good instruction, and arguing in the best manner.",
      },
      {
        question: "What is the meaning of 'Hikmah' in the context of Dawah?",
        options: ["Speaking loudly", "Wisdom and sound judgment", "Memorizing many Quranic verses", "Debating skills"],
        correctAnswer: "Wisdom and sound judgment",
        explanation:
          "Hikmah refers to wisdom, sound judgment, and understanding. It involves knowing what to say, when to say it, and how to say it in the most effective manner.",
      },
      {
        question: "What should be the primary source of information when giving Dawah?",
        options: [
          "Personal opinions",
          "Cultural traditions",
          "The Quran and authentic Sunnah",
          "Modern interpretations",
        ],
        correctAnswer: "The Quran and authentic Sunnah",
        explanation:
          "The Quran and authentic Sunnah (teachings and practices of Prophet Muhammad) should be the primary sources of information when giving Dawah to ensure accuracy and authenticity.",
      },
      {
        question: "What is the importance of good character (akhlaq) in Dawah?",
        options: [
          "It's not important as long as the information is correct",
          "It's essential as it reflects the beauty of Islamic teachings",
          "It only matters when speaking to non-Muslims",
          "It's less important than knowledge",
        ],
        correctAnswer: "It's essential as it reflects the beauty of Islamic teachings",
        explanation:
          "Good character is essential in Dawah as it practically demonstrates the beauty of Islamic teachings. Prophet Muhammad (PBUH) said, 'I have been sent to perfect good character.'",
      },
      {
        question: "What is the concept of 'Tabligh' in relation to Dawah?",
        options: [
          "Forcing others to accept Islam",
          "Conveying or transmitting the message",
          "Debating with non-Muslims",
          "Establishing Islamic institutions",
        ],
        correctAnswer: "Conveying or transmitting the message",
        explanation:
          "Tabligh means conveying or transmitting the message. It emphasizes the duty of Muslims to convey the message of Islam to others, without being responsible for the outcome.",
      },
      {
        question: "What did Prophet Muhammad (PBUH) say about conveying his message?",
        options: [
          "Only scholars should convey the message",
          "Convey from me, even if it is one verse",
          "Only convey to those who will accept",
          "Convey only to family members",
        ],
        correctAnswer: "Convey from me, even if it is one verse",
        explanation:
          "Prophet Muhammad (PBUH) said, 'Convey from me, even if it is one verse.' This encourages all Muslims to share whatever knowledge they have, even if it's limited.",
      },
      {
        question: "What is the role of patience (sabr) in Dawah?",
        options: [
          "It's not necessary if you have knowledge",
          "It's crucial as guidance may take time and face resistance",
          "It's only needed when dealing with difficult people",
          "It's less important than eloquence",
        ],
        correctAnswer: "It's crucial as guidance may take time and face resistance",
        explanation:
          "Patience is crucial in Dawah as guidance may take time and face resistance. The prophets exemplified great patience in their dawah efforts despite facing severe opposition.",
      },
    ],
    advanced: [
      {
        question: "What is the difference between 'Dawah bil-Hal' and 'Dawah bil-Lisan'?",
        options: [
          "There is no difference",
          "Dawah bil-Hal is invitation through actions and conduct, while Dawah bil-Lisan is invitation through speech",
          "Dawah bil-Hal is for Muslims, while Dawah bil-Lisan is for non-Muslims",
          "Dawah bil-Hal is obligatory, while Dawah bil-Lisan is optional",
        ],
        correctAnswer:
          "Dawah bil-Hal is invitation through actions and conduct, while Dawah bil-Lisan is invitation through speech",
        explanation:
          "Dawah bil-Hal refers to invitation through one's actions, conduct, and example, while Dawah bil-Lisan refers to invitation through speech, explanation, and verbal communication.",
      },
      {
        question: "What is the concept of 'Mujadalah bil-lati hiya ahsan' in Dawah?",
        options: [
          "Arguing in any way to win the debate",
          "Avoiding all forms of debate",
          "Debating in a manner that is best and most gracious",
          "Using complex theological arguments",
        ],
        correctAnswer: "Debating in a manner that is best and most gracious",
        explanation:
          "'Mujadalah bil-lati hiya ahsan' means debating or arguing in a manner that is best and most gracious. It emphasizes respectful dialogue that aims to reach truth rather than win arguments.",
      },
      {
        question: "What is the importance of understanding the audience in Dawah?",
        options: [
          "It's not important as the message is universal",
          "It helps tailor the approach to be more effective and relevant",
          "It's only important when speaking to scholars",
          "It's less important than memorizing texts",
        ],
        correctAnswer: "It helps tailor the approach to be more effective and relevant",
        explanation:
          "Understanding the audience helps tailor the approach to be more effective and relevant. Prophet Muhammad (PBUH) would address people according to their level of understanding and background.",
      },
      {
        question: "What is the concept of 'Daruriyyat' (necessities) in prioritizing Dawah topics?",
        options: [
          "Focusing only on prayer and fasting",
          "Prioritizing essential beliefs and practices before secondary matters",
          "Teaching only what people want to hear",
          "Focusing exclusively on theological debates",
        ],
        correctAnswer: "Prioritizing essential beliefs and practices before secondary matters",
        explanation:
          "Daruriyyat refers to necessities or essentials. In Dawah, it means prioritizing fundamental beliefs (like Tawhid) and practices before moving to secondary or detailed matters.",
      },
      {
        question:
          "What was Prophet Muhammad's (PBUH) instruction to Mu'adh ibn Jabal when sending him to Yemen for Dawah?",
        options: [
          "To focus on collecting taxes",
          "To first call to Tawhid, then prayer, then zakat",
          "To build a mosque immediately",
          "To enforce Islamic law strictly",
        ],
        correctAnswer: "To first call to Tawhid, then prayer, then zakat",
        explanation:
          "Prophet Muhammad (PBUH) instructed Mu'adh to first call people to testify that there is no god but Allah (Tawhid), then to establish prayer, and then to give zakat, showing a step-by-step approach to Dawah.",
      },
      {
        question: "What is the concept of 'Maslaha' (public interest) in relation to Dawah?",
        options: [
          "Ignoring Islamic principles to please others",
          "Considering the welfare and benefit of the audience in the approach",
          "Focusing only on what's easy to explain",
          "Avoiding controversial topics entirely",
        ],
        correctAnswer: "Considering the welfare and benefit of the audience in the approach",
        explanation:
          "Maslaha refers to public interest or welfare. In Dawah, it means considering what approach would be most beneficial for the audience's understanding and acceptance of the message.",
      },
      {
        question: "What is the importance of cultural sensitivity in Dawah?",
        options: [
          "It's not important as Islam transcends culture",
          "It helps distinguish between cultural practices and Islamic teachings",
          "It means accepting all cultural practices",
          "It's only relevant in Western countries",
        ],
        correctAnswer: "It helps distinguish between cultural practices and Islamic teachings",
        explanation:
          "Cultural sensitivity helps distinguish between cultural practices and Islamic teachings, making Dawah more effective by addressing genuine Islamic principles without unnecessary cultural barriers.",
      },
      {
        question: "What is the concept of 'Tadahhul Hadari' (cultural engagement) in contemporary Dawah?",
        options: [
          "Complete isolation from other cultures",
          "Positive engagement with other cultures while maintaining Islamic identity",
          "Adopting all aspects of other cultures",
          "Focusing only on Muslim communities",
        ],
        correctAnswer: "Positive engagement with other cultures while maintaining Islamic identity",
        explanation:
          "Tadahhul Hadari refers to positive cultural engagement, where Muslims interact constructively with other cultures while maintaining their Islamic identity and principles.",
      },
      {
        question: "What is the role of 'Urf' (custom) consideration in Dawah?",
        options: [
          "Rejecting all local customs",
          "Accepting customs that don't contradict Islamic principles",
          "Following only Arab customs",
          "Ignoring customs entirely",
        ],
        correctAnswer: "Accepting customs that don't contradict Islamic principles",
        explanation:
          "Urf refers to custom or convention. In Dawah, considering urf means accepting and working within local customs that don't contradict Islamic principles, making Islam more accessible.",
      },
      {
        question: "What is the concept of 'Fiqh al-Waqi' (understanding reality) in Dawah?",
        options: [
          "Focusing only on theoretical aspects of Islam",
          "Understanding the current reality and context of the audience",
          "Ignoring modern challenges",
          "Studying only classical texts",
        ],
        correctAnswer: "Understanding the current reality and context of the audience",
        explanation:
          "Fiqh al-Waqi refers to understanding reality. In Dawah, it means having a deep understanding of the current reality and context of the audience to make the message relevant and effective.",
      },
    ],
    intermediate: [
      // Copy the first 10 questions from easy or advanced level
      // This is a temporary solution until proper intermediate questions are created
    ],
  },
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!dawahCategory.levels.intermediate) {
  dawahCategory.levels.intermediate = [...dawahCategory.levels.easy]
}

export default dawahCategory
