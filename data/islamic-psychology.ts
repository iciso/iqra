import type { QuizCategory } from "@/types/quiz"

const islamicPsychologyCategory: QuizCategory = {
  id: "islamic-psychology",
  title: "Islamic Psychology",
  description: "Islamic perspectives on mental health and human psychology",
  icon: "🧠",
  levels: {
    easy: [
      {
        question: "What is the Islamic view on mental health?",
        options: [
          "Mental illness is a punishment from Allah",
          "Mental health is as important as physical health",
          "Mental illness is a sign of weak faith",
          "Only physical health matters in Islam",
        ],
        correctAnswer: "Mental health is as important as physical health",
        explanation:
          "Islam recognizes the importance of mental health and encourages seeking treatment for mental illness, just as one would for physical ailments.",
      },
      {
        question: "What is the concept of 'Nafs' in Islamic psychology?",
        options: ["The physical body", "The soul or self", "The mind only", "The heart organ"],
        correctAnswer: "The soul or self",
        explanation:
          "Nafs refers to the soul or self in Islamic psychology, encompassing desires, emotions, and the ego.",
      },
      {
        question: "What are the three levels of Nafs mentioned in Islamic teachings?",
        options: [
          "Good, bad, neutral",
          "Nafs al-Ammara, Nafs al-Lawwama, Nafs al-Mutma'inna",
          "Body, mind, spirit",
          "Conscious, subconscious, unconscious",
        ],
        correctAnswer: "Nafs al-Ammara, Nafs al-Lawwama, Nafs al-Mutma'inna",
        explanation:
          "The three levels are: the commanding self (Ammara), the self-reproaching self (Lawwama), and the peaceful self (Mutma'inna).",
      },
      {
        question: "What is the Islamic approach to treating depression?",
        options: [
          "Only through prayer",
          "Combination of spiritual practices and professional help",
          "Ignore it and it will go away",
          "It's not a real condition",
        ],
        correctAnswer: "Combination of spiritual practices and professional help",
        explanation:
          "Islam encourages both spiritual practices (prayer, dhikr, Quran recitation) and seeking professional medical help for depression.",
      },
      {
        question: "What is 'Dhikr' and its psychological benefits?",
        options: [
          "A type of prayer only",
          "Remembrance of Allah that brings peace to the heart",
          "A form of meditation from other religions",
          "A physical exercise",
        ],
        correctAnswer: "Remembrance of Allah that brings peace to the heart",
        explanation:
          "Dhikr (remembrance of Allah) is known to bring psychological peace and tranquility, as mentioned in the Quran: 'In the remembrance of Allah do hearts find rest' (13:28).",
      },
      {
        question: "What is the Islamic view on seeking therapy or counseling?",
        options: ["It shows lack of faith", "It is encouraged when needed", "Only for non-Muslims", "It is forbidden"],
        correctAnswer: "It is encouraged when needed",
        explanation:
          "Islam encourages seeking help when needed, including professional therapy and counseling for mental health issues.",
      },
      {
        question: "What is 'Sabr' in Islamic psychology?",
        options: [
          "Anger management",
          "Patience and perseverance in facing difficulties",
          "Avoiding problems",
          "Suppressing emotions",
        ],
        correctAnswer: "Patience and perseverance in facing difficulties",
        explanation:
          "Sabr (patience) is a key concept in Islamic psychology, referring to perseverance and maintaining faith during hardships.",
      },
      {
        question: "What is the role of community in Islamic mental health?",
        options: [
          "Community is not important",
          "Strong community support is essential for mental wellbeing",
          "Only individual effort matters",
          "Community can be harmful",
        ],
        correctAnswer: "Strong community support is essential for mental wellbeing",
        explanation:
          "Islam emphasizes the importance of community (Ummah) support for individual mental health and wellbeing.",
      },
      {
        question: "What is 'Tawakkul' and its psychological impact?",
        options: [
          "Giving up effort",
          "Trust in Allah after taking necessary action",
          "Blind faith without action",
          "Avoiding responsibility",
        ],
        correctAnswer: "Trust in Allah after taking necessary action",
        explanation:
          "Tawakkul (trust in Allah) involves taking necessary action and then trusting Allah with the outcome, which reduces anxiety and stress.",
      },
      {
        question: "What is the Islamic perspective on emotional expression?",
        options: [
          "Emotions should be suppressed",
          "Healthy emotional expression is encouraged",
          "Only positive emotions are allowed",
          "Emotions are signs of weakness",
        ],
        correctAnswer: "Healthy emotional expression is encouraged",
        explanation:
          "Islam encourages healthy emotional expression and acknowledges the full range of human emotions as natural and part of Allah's creation.",
      },
    ],
    advanced: [
      {
        question: "What is the concept of 'Fitrah' in Islamic psychology?",
        options: [
          "Learned behavior",
          "The natural, innate disposition of humans",
          "Cultural conditioning",
          "Genetic predisposition",
        ],
        correctAnswer: "The natural, innate disposition of humans",
        explanation:
          "Fitrah refers to the natural, pure state in which Allah created humans, including the innate inclination toward good and recognition of Allah.",
      },
      {
        question: "What is 'Tazkiyah' in Islamic spiritual psychology?",
        options: [
          "Physical cleansing",
          "Purification and development of the soul",
          "Intellectual learning",
          "Social interaction",
        ],
        correctAnswer: "Purification and development of the soul",
        explanation:
          "Tazkiyah refers to the process of purifying and developing the soul, removing negative traits and cultivating positive ones.",
      },
      {
        question: "What is the relationship between 'Aql' (intellect) and 'Qalb' (heart) in Islamic psychology?",
        options: [
          "They are completely separate",
          "They work together in understanding and decision-making",
          "Intellect is superior to heart",
          "Heart is superior to intellect",
        ],
        correctAnswer: "They work together in understanding and decision-making",
        explanation:
          "In Islamic psychology, both the intellect (Aql) and the heart (Qalb) work together in understanding truth and making proper decisions.",
      },
      {
        question: "What is 'Waswas' in Islamic psychology?",
        options: [
          "Divine inspiration",
          "Whispers or negative thoughts from Satan",
          "Positive self-talk",
          "Subconscious desires",
        ],
        correctAnswer: "Whispers or negative thoughts from Satan",
        explanation:
          "Waswas refers to the whispers or negative thoughts that Satan puts into human minds to lead them astray from the right path.",
      },
      {
        question: "What is the concept of 'Muraqaba' in Islamic spiritual practice?",
        options: ["Physical exercise", "Meditation and self-observation", "Social gathering", "Ritual prayer"],
        correctAnswer: "Meditation and self-observation",
        explanation:
          "Muraqaba is a form of Islamic meditation involving self-observation, mindfulness, and spiritual reflection.",
      },
      {
        question: "What is 'Ihsan' and its psychological significance?",
        options: ["Charity giving", "Worshipping Allah as if you see Him", "Good deeds only", "Social justice"],
        correctAnswer: "Worshipping Allah as if you see Him",
        explanation:
          "Ihsan represents the highest level of consciousness and spiritual awareness, creating psychological peace and purpose.",
      },
      {
        question: "What is the Islamic understanding of cognitive biases and self-deception?",
        options: [
          "They don't exist in Islam",
          "Humans are prone to self-deception and need constant self-examination",
          "Only non-believers have biases",
          "Biases are always beneficial",
        ],
        correctAnswer: "Humans are prone to self-deception and need constant self-examination",
        explanation:
          "Islam recognizes human tendency toward self-deception and emphasizes the need for constant self-examination and seeking Allah's guidance.",
      },
      {
        question: "What is 'Fana' in Islamic mystical psychology?",
        options: [
          "Physical death",
          "Annihilation of the ego in divine consciousness",
          "Mental illness",
          "Loss of memory",
        ],
        correctAnswer: "Annihilation of the ego in divine consciousness",
        explanation:
          "Fana refers to the mystical state where the ego is dissolved in divine consciousness, representing the highest spiritual achievement.",
      },
      {
        question: "What is the role of 'Taqwa' in psychological wellbeing?",
        options: [
          "It creates anxiety",
          "God-consciousness that provides inner peace and moral guidance",
          "It's only for scholars",
          "It limits personal freedom",
        ],
        correctAnswer: "God-consciousness that provides inner peace and moral guidance",
        explanation:
          "Taqwa (God-consciousness) provides psychological stability, moral guidance, and inner peace by maintaining awareness of Allah.",
      },
      {
        question: "What is the Islamic perspective on the unconscious mind?",
        options: [
          "It doesn't exist",
          "Allah knows what is hidden in the hearts and minds",
          "Only conscious thoughts matter",
          "The unconscious is evil",
        ],
        correctAnswer: "Allah knows what is hidden in the hearts and minds",
        explanation:
          "Islam acknowledges that Allah knows the hidden contents of hearts and minds, including unconscious thoughts and motivations.",
      },
    ],
  },
}

export default islamicPsychologyCategory
