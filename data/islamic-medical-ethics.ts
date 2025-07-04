import type { QuizCategory } from "@/types/quiz"

const islamicMedicalEthicsCategory: QuizCategory = {
  id: "islamic-medical-ethics",
  title: "Islamic Medical Ethics",
  description: "Islamic perspectives on medical practice and bioethics",
  icon: "🏥",
  levels: {
    easy: [
      {
        question: "What is the Islamic view on seeking medical treatment?",
        options: [
          "It is forbidden as it shows lack of faith",
          "It is recommended and encouraged",
          "It is only for non-Muslims",
          "It is optional and not important",
        ],
        correctAnswer: "It is recommended and encouraged",
        explanation:
          "Islam encourages seeking medical treatment. The Prophet (PBUH) said: 'Allah has not created a disease without creating a cure for it.'",
      },
      {
        question: "What is the Islamic principle regarding saving human life?",
        options: [
          "It is less important than religious obligations",
          "Saving one life is like saving all of humanity",
          "Only Muslim lives should be saved",
          "It depends on the person's social status",
        ],
        correctAnswer: "Saving one life is like saving all of humanity",
        explanation: "The Quran states: 'Whoever saves a life, it is as if he has saved all of humanity' (5:32).",
      },
      {
        question: "What is the Islamic view on organ donation?",
        options: [
          "It is completely forbidden",
          "It is permissible to save lives",
          "Only between family members",
          "Only after death",
        ],
        correctAnswer: "It is permissible to save lives",
        explanation:
          "Most Islamic scholars permit organ donation when it can save lives, based on the principle of preserving life.",
      },
      {
        question: "What is the Islamic position on euthanasia?",
        options: [
          "It is encouraged for terminally ill patients",
          "It is forbidden as life belongs to Allah",
          "It is permitted in all cases",
          "It is only for non-Muslims",
        ],
        correctAnswer: "It is forbidden as life belongs to Allah",
        explanation: "Islam prohibits euthanasia as life is considered sacred and belongs to Allah alone.",
      },
      {
        question: "What is the Islamic view on medical research?",
        options: [
          "It is discouraged",
          "It is encouraged for the benefit of humanity",
          "Only religious scholars can conduct it",
          "It is forbidden",
        ],
        correctAnswer: "It is encouraged for the benefit of humanity",
        explanation: "Islam encourages medical research and scientific advancement for the benefit of humanity.",
      },
      {
        question: "What is the Islamic principle regarding patient confidentiality?",
        options: [
          "Doctors can share information freely",
          "Patient privacy must be respected",
          "Only family members can know",
          "Information should be public",
        ],
        correctAnswer: "Patient privacy must be respected",
        explanation: "Islam emphasizes the importance of maintaining trust and confidentiality in medical practice.",
      },
      {
        question: "What is the Islamic view on vaccination?",
        options: [
          "It is forbidden",
          "It is permissible and recommended for public health",
          "Only for children",
          "Only during epidemics",
        ],
        correctAnswer: "It is permissible and recommended for public health",
        explanation:
          "Vaccination is generally accepted in Islam as a means of preventing disease and protecting public health.",
      },
      {
        question: "What is the Islamic position on informed consent in medical treatment?",
        options: [
          "Doctors decide everything",
          "Patients have the right to know and decide",
          "Only family members can consent",
          "Consent is not necessary",
        ],
        correctAnswer: "Patients have the right to know and decide",
        explanation: "Islam emphasizes the importance of informed consent and patient autonomy in medical decisions.",
      },
      {
        question: "What is the Islamic view on treating patients regardless of their background?",
        options: [
          "Only Muslims should be treated",
          "All patients should be treated equally",
          "Treatment depends on social status",
          "Religious background determines treatment",
        ],
        correctAnswer: "All patients should be treated equally",
        explanation:
          "Islam teaches that medical care should be provided to all people regardless of their religion, race, or social status.",
      },
      {
        question: "What is the Islamic principle regarding medical ethics and compassion?",
        options: [
          "Efficiency is more important than compassion",
          "Compassion and mercy are essential in medical practice",
          "Only technical skills matter",
          "Emotional detachment is preferred",
        ],
        correctAnswer: "Compassion and mercy are essential in medical practice",
        explanation:
          "Islam emphasizes compassion (rahma) and mercy as fundamental qualities for those in medical practice.",
      },
    ],
    advanced: [
      {
        question: "What is the Islamic ruling on genetic engineering for therapeutic purposes?",
        options: [
          "It is completely forbidden",
          "It is permissible if it prevents or treats disease",
          "Only for cosmetic purposes",
          "Only for animals",
        ],
        correctAnswer: "It is permissible if it prevents or treats disease",
        explanation:
          "Islamic scholars generally permit genetic engineering for therapeutic purposes that prevent or treat diseases, based on the principle of maslaha (public interest).",
      },
      {
        question: "What is the concept of 'La darar wa la dirar' in medical ethics?",
        options: [
          "Harm is sometimes necessary",
          "No harm should be inflicted or reciprocated",
          "Harm is permitted for greater good",
          "Harm is natural and acceptable",
        ],
        correctAnswer: "No harm should be inflicted or reciprocated",
        explanation:
          "This principle means 'no harm and no reciprocating harm' and is fundamental in Islamic medical ethics.",
      },
      {
        question: "What is the Islamic position on stem cell research?",
        options: [
          "All stem cell research is forbidden",
          "Embryonic stem cell research is permitted with conditions",
          "Only adult stem cell research is allowed",
          "No restrictions apply",
        ],
        correctAnswer: "Only adult stem cell research is allowed",
        explanation:
          "Most Islamic scholars permit adult stem cell research but have restrictions on embryonic stem cell research due to the sanctity of human life.",
      },
      {
        question: "What is the Islamic view on artificial life support?",
        options: [
          "It should never be used",
          "It can be withdrawn when there is no hope of recovery",
          "It must always be continued",
          "Only family can decide",
        ],
        correctAnswer: "It can be withdrawn when there is no hope of recovery",
        explanation:
          "Islamic scholars generally permit withdrawal of artificial life support when there is no reasonable hope of recovery and the patient is brain dead.",
      },
      {
        question: "What is the principle of 'Maslaha' in Islamic medical ethics?",
        options: [
          "Personal benefit only",
          "Public interest and welfare",
          "Economic considerations",
          "Religious obligations only",
        ],
        correctAnswer: "Public interest and welfare",
        explanation:
          "Maslaha refers to public interest and welfare, which is a key principle in determining the permissibility of medical procedures.",
      },
      {
        question: "What is the Islamic ruling on autopsy?",
        options: [
          "It is always forbidden",
          "It is permitted for legal or medical necessity",
          "Only for non-Muslims",
          "Only with family consent",
        ],
        correctAnswer: "It is permitted for legal or medical necessity",
        explanation:
          "Autopsy is generally permitted in Islam when there is a legal necessity or when it serves a greater medical purpose.",
      },
      {
        question: "What is the Islamic position on clinical trials and human experimentation?",
        options: [
          "All human experimentation is forbidden",
          "It is permitted with proper consent and ethical oversight",
          "Only on volunteers",
          "Only for terminal patients",
        ],
        correctAnswer: "It is permitted with proper consent and ethical oversight",
        explanation:
          "Clinical trials are permitted in Islam when conducted ethically with proper informed consent and oversight to benefit humanity.",
      },
      {
        question: "What is the concept of 'Haram li-ghayrihi' in medical context?",
        options: [
          "Something inherently forbidden",
          "Something forbidden due to external circumstances",
          "Something always permissible",
          "Something conditionally allowed",
        ],
        correctAnswer: "Something forbidden due to external circumstances",
        explanation:
          "This refers to actions that are not inherently forbidden but become forbidden due to external circumstances or consequences.",
      },
      {
        question: "What is the Islamic view on palliative care?",
        options: [
          "It is discouraged",
          "It is highly recommended to ease suffering",
          "Only pain medication is allowed",
          "It interferes with divine will",
        ],
        correctAnswer: "It is highly recommended to ease suffering",
        explanation:
          "Islam strongly encourages palliative care to ease suffering and provide comfort to patients and their families.",
      },
      {
        question: "What is the principle of 'Darura' in Islamic medical ethics?",
        options: [
          "Luxury and comfort",
          "Necessity that permits normally forbidden acts",
          "Optional procedures",
          "Preventive measures",
        ],
        correctAnswer: "Necessity that permits normally forbidden acts",
        explanation:
          "Darura (necessity) is a principle that may permit normally forbidden acts when there is a genuine necessity, such as saving life.",
      },
    ],
  },
}

export default islamicMedicalEthicsCategory
