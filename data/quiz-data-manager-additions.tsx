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
    ],
  },
}

export default seerahCategory
