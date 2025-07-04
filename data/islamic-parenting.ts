import type { QuizCategory } from "@/types/quiz"

const islamicParentingCategory: QuizCategory = {
  id: "islamic-parenting",
  title: "Islamic Parenting",
  description: "Islamic guidance on raising children",
  icon: "👨‍👩‍👧‍👦",
  levels: {
    easy: [
      {
        question: "What is the first thing a Muslim parent should do when a child is born?",
        options: [
          "Give the child a name",
          "Recite the Adhan in the child's ear",
          "Take the child to the mosque",
          "Celebrate with a feast",
        ],
        correctAnswer: "Recite the Adhan in the child's ear",
        explanation:
          "It is recommended to recite the Adhan (call to prayer) in the newborn's right ear and Iqama in the left ear.",
      },
      {
        question: "What did the Prophet (PBUH) say about treating children?",
        options: [
          "Children should be seen but not heard",
          "Be strict with children at all times",
          "Whoever does not show mercy to our young ones is not one of us",
          "Children are a burden",
        ],
        correctAnswer: "Whoever does not show mercy to our young ones is not one of us",
        explanation:
          "The Prophet (PBUH) emphasized showing mercy and kindness to children as an essential quality of a believer.",
      },
      {
        question: "At what age should children be taught to pray?",
        options: ["At birth", "At age 7", "At puberty", "When they ask"],
        correctAnswer: "At age 7",
        explanation: "The Prophet (PBUH) said: 'Command your children to pray when they are seven years old.'",
      },
      {
        question: "What is the Islamic view on education for children?",
        options: [
          "Only religious education is important",
          "Both religious and worldly education are important",
          "Education is not necessary",
          "Only boys need education",
        ],
        correctAnswer: "Both religious and worldly education are important",
        explanation:
          "Islam emphasizes the importance of both religious and worldly education for all children, boys and girls.",
      },
      {
        question: "What is the concept of 'Aqiqah'?",
        options: ["Naming ceremony", "Sacrifice performed for a newborn", "First haircut", "Circumcision"],
        correctAnswer: "Sacrifice performed for a newborn",
        explanation:
          "Aqiqah is the sacrifice of an animal (usually a goat or sheep) performed to thank Allah for the blessing of a child.",
      },
      {
        question: "What is the Islamic guidance on disciplining children?",
        options: [
          "Never discipline children",
          "Use gentle correction and avoid harshness",
          "Physical punishment is always required",
          "Only fathers can discipline children",
        ],
        correctAnswer: "Use gentle correction and avoid harshness",
        explanation:
          "Islam teaches gentle correction and guidance, avoiding harshness while maintaining proper discipline.",
      },
      {
        question: "What is the importance of being a good role model for children?",
        options: [
          "It's not important",
          "Children learn more from what they see than what they're told",
          "Only mothers need to be role models",
          "Role modeling is only for teachers",
        ],
        correctAnswer: "Children learn more from what they see than what they're told",
        explanation:
          "Islam emphasizes that parents should be good role models as children learn primarily through observation and imitation.",
      },
      {
        question: "What is the Islamic view on showing affection to children?",
        options: [
          "Affection makes children weak",
          "Showing love and affection is encouraged",
          "Only mothers should show affection",
          "Affection should be hidden",
        ],
        correctAnswer: "Showing love and affection is encouraged",
        explanation:
          "The Prophet (PBUH) showed great love and affection to children, setting an example for all parents.",
      },
      {
        question: "What is the responsibility of parents regarding their children's Islamic education?",
        options: [
          "It's only the mosque's responsibility",
          "Parents are primarily responsible for their children's Islamic education",
          "Children will learn on their own",
          "Only fathers are responsible",
        ],
        correctAnswer: "Parents are primarily responsible for their children's Islamic education",
        explanation:
          "Parents have the primary responsibility to teach their children about Islam and guide them in their faith.",
      },
      {
        question: "What is the Islamic guidance on treating all children equally?",
        options: [
          "Boys should be favored over girls",
          "All children should be treated with equal love and fairness",
          "Older children deserve more attention",
          "Gifted children should be favored",
        ],
        correctAnswer: "All children should be treated with equal love and fairness",
        explanation:
          "Islam teaches that parents should treat all their children with equal love, fairness, and justice.",
      },
    ],
    advanced: [
      {
        question: "What is the concept of 'Amanah' in relation to children?",
        options: [
          "Children are property of parents",
          "Children are a trust from Allah",
          "Children belong to the community",
          "Children are independent beings",
        ],
        correctAnswer: "Children are a trust from Allah",
        explanation:
          "Children are considered an Amanah (trust) from Allah, and parents will be held accountable for how they raise and guide them.",
      },
      {
        question: "What is the Islamic approach to developing a child's character (Akhlaq)?",
        options: [
          "Focus only on academic achievement",
          "Emphasize both knowledge and moral character development",
          "Character develops naturally",
          "Only religious knowledge matters",
        ],
        correctAnswer: "Emphasize both knowledge and moral character development",
        explanation:
          "Islam emphasizes the development of both knowledge and moral character (Akhlaq) as essential for a child's complete development.",
      },
      {
        question: "What is the significance of Du'a (supplication) for children?",
        options: [
          "Parents should regularly make Du'a for their children's guidance and success",
          "Du'a is not necessary for children",
          "Only children should make Du'a for themselves",
          "Du'a should only be made when children are in trouble",
        ],
        correctAnswer: "Parents should regularly make Du'a for their children's guidance and success",
        explanation:
          "Making Du'a for children is a continuous responsibility of parents and one of the most powerful tools for their spiritual and worldly success.",
      },
      {
        question: "What is the Islamic guidance on balancing firmness and gentleness in parenting?",
        options: [
          "Always be firm",
          "Always be gentle",
          "Balance firmness with gentleness according to the situation",
          "Let children do whatever they want",
        ],
        correctAnswer: "Balance firmness with gentleness according to the situation",
        explanation:
          "Islamic parenting requires wisdom in balancing firmness when necessary with gentleness and compassion, following the example of the Prophet (PBUH).",
      },
      {
        question: "What is the concept of 'Birr al-Walidayn' and how should parents prepare children for it?",
        options: [
          "It's not important to teach",
          "Parents should model and teach respect and kindness to prepare children to be dutiful",
          "Children will naturally learn it",
          "It only applies to adult children",
        ],
        correctAnswer: "Parents should model and teach respect and kindness to prepare children to be dutiful",
        explanation:
          "Birr al-Walidayn (kindness to parents) should be taught by example and instruction, preparing children to fulfill this important Islamic obligation.",
      },
      {
        question: "What is the Islamic approach to handling a child's mistakes and sins?",
        options: [
          "Punish severely to prevent repetition",
          "Ignore mistakes completely",
          "Guide with wisdom, teach repentance, and emphasize Allah's mercy",
          "Shame the child publicly",
        ],
        correctAnswer: "Guide with wisdom, teach repentance, and emphasize Allah's mercy",
        explanation:
          "Islamic parenting emphasizes guiding children through their mistakes with wisdom, teaching them about repentance (Tawbah), and Allah's mercy and forgiveness.",
      },
      {
        question: "What is the role of consultation (Shura) in Islamic parenting?",
        options: [
          "Parents should make all decisions alone",
          "Children should make their own decisions",
          "Age-appropriate consultation helps develop decision-making skills",
          "Only fathers should be consulted",
        ],
        correctAnswer: "Age-appropriate consultation helps develop decision-making skills",
        explanation:
          "Islam encourages age-appropriate consultation with children to develop their decision-making skills and sense of responsibility.",
      },
      {
        question: "What is the Islamic guidance on preparing children for adult responsibilities?",
        options: [
          "Keep children dependent as long as possible",
          "Gradually increase responsibilities and prepare them for independence",
          "Suddenly give all responsibilities at age 18",
          "Responsibilities are not important",
        ],
        correctAnswer: "Gradually increase responsibilities and prepare them for independence",
        explanation:
          "Islamic parenting involves gradually preparing children for adult responsibilities, teaching them skills and values needed for independent, righteous living.",
      },
      {
        question: "What is the importance of teaching children about Allah's names and attributes?",
        options: [
          "It's too complex for children",
          "It helps develop proper understanding of Allah and strengthens faith",
          "Only scholars should teach this",
          "It's not necessary until adulthood",
        ],
        correctAnswer: "It helps develop proper understanding of Allah and strengthens faith",
        explanation:
          "Teaching children about Allah's beautiful names and attributes helps them develop a proper understanding of Allah and strengthens their faith and relationship with Him.",
      },
      {
        question: "What is the Islamic approach to dealing with peer pressure and negative influences on children?",
        options: [
          "Isolate children from all social contact",
          "Let children handle it themselves",
          "Provide guidance, teach Islamic values, and help choose good companions",
          "Move to a different location",
        ],
        correctAnswer: "Provide guidance, teach Islamic values, and help choose good companions",
        explanation:
          "Islamic parenting involves actively guiding children, strengthening their Islamic identity, and helping them choose righteous companions while teaching them to resist negative influences.",
      },
    ],
  },
}

export default islamicParentingCategory
