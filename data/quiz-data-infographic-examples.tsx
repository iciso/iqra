import type { QuizQuestion } from "@/types/quiz"
import {
  quranRevelationTimeline,
  islamicFinanceComparison,
  hajjProcess,
  fivePillarsChart,
  islamicSitesMap,
} from "./infographic-examples"

// Example of quiz questions with infographics
export const infographicQuizExamples: QuizQuestion[] = [
  {
    question: "What is the correct order of revelation of the Quran?",
    options: [
      "All at once during Ramadan",
      "Gradually over 23 years",
      "In two parts: Meccan and Medinan",
      "Only during the Night of Power (Laylat al-Qadr)",
    ],
    correctAnswer: "Gradually over 23 years",
    explanation:
      "The Quran was revealed to Prophet Muhammad (PBUH) gradually over a period of 23 years, starting from 610 CE when he was 40 years old until his death in 632 CE. This gradual revelation helped in the proper understanding and implementation of the divine message.",
    hasInfographic: true,
    infographicType: "timeline",
    infographicData: quranRevelationTimeline,
  },
  {
    question: "Which of the following is NOT a type of Islamic finance contract?",
    options: ["Murabaha", "Musharakah", "Ribawi", "Ijarah"],
    correctAnswer: "Ribawi",
    explanation:
      "Ribawi refers to interest-based transactions which are prohibited in Islamic finance. The other options (Murabaha, Musharakah, and Ijarah) are all legitimate Islamic finance contracts that comply with Shariah principles.",
    hasInfographic: true,
    infographicType: "comparison",
    infographicData: islamicFinanceComparison,
  },
  {
    question: "What is the correct sequence of the main rituals of Hajj?",
    options: [
      "Ihram, Tawaf, Sa'i, Arafat, Muzdalifah, Jamarat, Sacrifice",
      "Ihram, Sa'i, Tawaf, Arafat, Jamarat, Muzdalifah, Sacrifice",
      "Tawaf, Ihram, Sa'i, Arafat, Muzdalifah, Sacrifice, Jamarat",
      "Ihram, Arafat, Muzdalifah, Jamarat, Sacrifice, Tawaf, Sa'i",
    ],
    correctAnswer: "Ihram, Tawaf, Sa'i, Arafat, Muzdalifah, Jamarat, Sacrifice",
    explanation:
      "The correct sequence of the main rituals of Hajj begins with entering Ihram (the sacred state), followed by Tawaf (circumambulation of the Kaaba), Sa'i (walking between Safa and Marwah), standing at Arafat, spending the night at Muzdalifah, stoning the Jamarat, and performing the animal sacrifice.",
    hasInfographic: true,
    infographicType: "process",
    infographicData: hajjProcess,
  },
  {
    question: "Which of the following is NOT one of the Five Pillars of Islam?",
    options: ["Salah (Prayer)", "Jihad (Struggle)", "Sawm (Fasting)", "Zakat (Charity)"],
    correctAnswer: "Jihad (Struggle)",
    explanation:
      "The Five Pillars of Islam are Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage). Jihad, while an important concept in Islam, is not one of the Five Pillars.",
    hasInfographic: true,
    infographicType: "chart",
    infographicData: fivePillarsChart,
  },
  {
    question: "Which of these is considered the third holiest site in Islam?",
    options: [
      "The Blue Mosque in Istanbul",
      "Al-Aqsa Mosque in Jerusalem",
      "The Great Mosque of Cordoba",
      "Imam Ali Shrine in Najaf",
    ],
    correctAnswer: "Al-Aqsa Mosque in Jerusalem",
    explanation:
      "Al-Aqsa Mosque in Jerusalem is considered the third holiest site in Islam, after Masjid al-Haram in Mecca and Masjid an-Nabawi in Medina. It is mentioned in the Quran in connection with the Night Journey of Prophet Muhammad (PBUH).",
    hasInfographic: true,
    infographicType: "map",
    infographicData: islamicSitesMap,
  },
]
