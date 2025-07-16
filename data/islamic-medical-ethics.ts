import type { QuizCategory } from "@/types/quiz";

const  islamicMedicalEthicsCategory: QuizCategory = {
  id: " islamic-medical-ethics",
  title: " Islamic Medical Ethics",
  description: "Islamic Perspectives of Medical Ethics",
  icon: "BriefcaseMedical"
  levels: {
    easy: [
      {
        question: "What is the primary principle in Islamic medical ethics?",
        options: ["Profit maximization", "Preserving life (Hifz al-Nafs)", "Personal convenience", "Social status"],
        correctAnswer: "Preserving life (Hifz al-Nafs)",
        explanation: "Preserving life (Hifz al-Nafs) is one of the five essential values (Maqasid) in Islamic law and the foundation of medical ethics."
      },
      {
        question: "What does Islam say about seeking medical treatment?",
        options: ["It is forbidden", "It is optional", "It is recommended and sometimes obligatory", "It shows lack of faith"],
        correctAnswer: "It is recommended and sometimes obligatory",
        explanation: "The Prophet (PBUH) said 'Allah has not created a disease without creating a cure for it.' Seeking treatment is encouraged and can be obligatory."
      },
      {
        question: "What is the Islamic view on patient confidentiality?",
        options: ["Not important", "Only for wealthy patients", "Highly emphasized and protected", "Optional for doctors"],
        correctAnswer: "Highly emphasized and protected",
        explanation: "Islam strongly emphasizes protecting people's privacy and secrets. Medical confidentiality is a sacred trust."
      },
      {
        question: "What should a Muslim doctor prioritize when treating patients?",
        options: ["Payment first", "Patient's wellbeing regardless of background", "Only Muslim patients", "Personal relationships"],
        correctAnswer: "Patient's wellbeing regardless of background",
        explanation: "Islam teaches justice and compassion for all humanity. Medical care should be provided based on need, not discrimination."
      },
      {
        question: "What is the Islamic ruling on autopsy?",
        options: ["Always forbidden", "Allowed when there is a legitimate need", "Only for non-Muslims", "Only with family consent"],
        correctAnswer: "Allowed when there is a legitimate need",
        explanation: "While respecting the deceased is important, autopsy is permitted when there's a legitimate medical or legal need that serves the greater good."
      },
      {
        question: "What does Islam teach about informed consent?",
        options: ["Not necessary", "Only for major surgeries", "Essential for all medical procedures", "Only for experimental treatments"],
        correctAnswer: "Essential for all medical procedures",
        explanation: "Islam emphasizes the importance of knowledge and consent. Patients have the right to understand their treatment."
      },
      {
        question: "How should Muslim healthcare providers approach end-of-life care?",
        options: ["Extend life at any cost", "Focus on comfort and dignity while accepting Allah's decree", "Avoid the topic entirely", "Leave decisions to family only"],
        correctAnswer: "Focus on comfort and dignity while accepting Allah's decree",
        explanation: "Islam teaches to provide compassionate care while accepting that life and death are in Allah's hands."
      },
      {
        question: "What is the Islamic view on organ donation?",
        options: ["Completely forbidden", "Allowed to save lives with proper conditions", "Only between family members", "Only after death"],
        correctAnswer: "Allowed to save lives with proper conditions",
        explanation: "Many Islamic scholars permit organ donation to save lives, following the principle that saving one life is like saving all humanity."
      },
      {
        question: "What should guide a Muslim doctor's treatment decisions?",
        options: ["Personal profit", "Hospital policies only", "Islamic ethics and medical best practices", "Patient's wealth"],
        correctAnswer: "Islamic ethics and medical best practices",
        explanation: "Muslim doctors should integrate Islamic ethical principles with sound medical practice for the best patient care."
      },
      {
        question: "What is the Islamic approach to medical research?",
        options: ["Forbidden entirely", "Encouraged when it benefits humanity", "Only for Muslim researchers", "Only theoretical research"],
        correctAnswer: "Encouraged when it benefits humanity",
        explanation: "Islam encourages seeking knowledge and research that benefits humanity, following ethical guidelines."
      },
      {
        question: "What is the Islamic ruling on abortion?",
        options: ["Always permitted", "Permitted only to save mother's life", "Permitted in first 120 days with valid reasons", "Never permitted under any circumstances"],
        correctAnswer: "Permitted in first 120 days with valid reasons",
        explanation: "Most scholars allow abortion before ensoulment (120 days) for serious reasons, with stricter conditions afterward."
      },
      {
        question: "How should Muslim doctors handle patients of the opposite gender?",
        options: ["Avoid treating them", "Treat with necessary medical care while observing modesty", "Only treat with family present", "No special considerations needed"],
        correctAnswer: "Treat with necessary medical care while observing modesty",
        explanation: "Medical necessity overrides gender restrictions, but modesty should be maintained through proper conduct and chaperones when possible."
      },
      {
        question: "What is the Islamic view on alternative medicine?",
        options: ["Completely forbidden", "Permitted if proven effective and safe", "Only prophetic medicine allowed", "Preferred over modern medicine"],
        correctAnswer: "Permitted if proven effective and safe",
        explanation: "Islam permits any treatment that is beneficial and not harmful, whether modern or traditional, as long as it doesn't involve prohibited elements."
      },
      {
        question: "What is the Islamic perspective on pain management?",
        options: ["Pain should be endured as test from Allah", "Pain relief is encouraged within safe limits", "Only natural pain relief allowed", "Pain medication is forbidden"],
        correctAnswer: "Pain relief is encouraged within safe limits",
        explanation: "Alleviating suffering is a noble goal in Islam, and pain management is encouraged while avoiding harmful substances."
      },
      {
        question: "How does Islam view the doctor-patient relationship?",
        options: ["Purely business transaction", "Sacred trust (Amanah)", "Doctor has absolute authority", "Patient has no rights"],
        correctAnswer: "Sacred trust (Amanah)",
        explanation: "The doctor-patient relationship is considered an Amanah (trust) in Islam, carrying great responsibility and accountability."
      },
      {
        question: "What is the Islamic ruling on cosmetic surgery?",
        options: ["Always forbidden", "Permitted for correcting deformities", "Allowed for any aesthetic improvement", "Only for women"],
        correctAnswer: "Permitted for correcting deformities",
        explanation: "Cosmetic surgery is permitted for correcting genuine deformities or injuries, but generally prohibited for mere vanity without medical need."
      },
      {
        question: "What is the Islamic view on vaccination?",
        options: ["Forbidden as it alters Allah's creation", "Obligatory for all Muslims", "Permitted when benefits outweigh risks", "Only for children"],
        correctAnswer: "Permitted when benefits outweigh risks",
        explanation: "Vaccination is generally permitted in Islam as a means of disease prevention, following the principle of 'no harm, no harassment'."
      },
      {
        question: "How should Muslim doctors handle mistakes in treatment?",
        options: ["Cover them up", "Disclose and take responsibility", "Blame the hospital", "Only admit if caught"],
        correctAnswer: "Disclose and take responsibility",
        explanation: "Islam emphasizes honesty and accountability. Medical errors should be disclosed to learn from them and prevent future harm."
      },
      {
        question: "What is the Islamic perspective on mental health treatment?",
        options: ["Mental illness isn't real", "Only spiritual treatment allowed", "Integrated spiritual and medical approach", "Medication is forbidden"],
        correctAnswer: "Integrated spiritual and medical approach",
        explanation: "Islam recognizes mental health conditions and supports treatment combining medical care with spiritual support like prayer and patience."
      },
      {
        question: "What is the Islamic ruling on fertility treatments?",
        options: ["All forms forbidden", "Permitted for married couples using their own gametes", "Any method is acceptable", "Only natural methods allowed"],
        correctAnswer: "Permitted for married couples using their own gametes",
        explanation: "Assisted reproduction is generally permitted for married couples as long as it doesn't involve third-party genetic material."
      },
      {
        question: "How should Muslim doctors handle terminal illness disclosure?",
        options: ["Never tell the patient", "Always tell bluntly", "Disclose with wisdom and compassion", "Let family decide"],
        correctAnswer: "Disclose with wisdom and compassion",
        explanation: "Islamic ethics encourages truthful communication while considering the patient's emotional state and need for hope."
      },
      {
        question: "What is the Islamic view on palliative care?",
        options: ["Forbidden as it hastens death", "Highly recommended to relieve suffering", "Only for Muslims", "Only pain medication allowed"],
        correctAnswer: "Highly recommended to relieve suffering",
        explanation: "Palliative care aligns with Islamic values of mercy and dignity in end-of-life care."
      },
      {
        question: "What is the Islamic ruling on breastfeeding in Islam?",
        options: ["Only biological mothers can breastfeed", "Permitted through milk kinship with conditions", "Only for first two years", "Not regulated in Islam"],
        correctAnswer: "Permitted through milk kinship with conditions",
        explanation: "Islam recognizes milk kinship with specific regulations about who can breastfeed and the resulting familial relationships."
      },
      {
        question: "How does Islam view the use of animal-derived medications?",
        options: ["Completely forbidden", "Permitted if no alternatives exist", "Only from halal animals", "Permitted if beneficial and from permissible sources"],
        correctAnswer: "Permitted if beneficial and from permissible sources",
        explanation: "Medicines derived from permissible animals are allowed, especially when needed for treatment and no alternatives exist."
      },
      {
        question: "What is the Islamic perspective on doctor's fees?",
        options: ["Should be exorbitant", "Should be reasonable and just", "Free service only", "Depends on patient's wealth"],
        correctAnswer: "Should be reasonable and just",
        explanation: "Islam encourages fair compensation for services while discouraging exploitation of patients' needs."
      },
      {
        question: "What is the Islamic ruling on treating non-Muslim patients?",
        options: ["Forbidden", "Optional", "Obligatory when needed", "Only if they convert"],
        correctAnswer: "Obligatory when needed",
        explanation: "Islamic medical ethics requires treating all patients equally regardless of faith, as the Prophet treated non-Muslims."
      },
      {
        question: "How should Muslim doctors handle time management?",
        options: ["Prioritize quantity over quality", "Give each patient full attention needed", "See as many patients as possible", "Only during certain hours"],
        correctAnswer: "Give each patient full attention needed",
        explanation: "Islam teaches thoroughness and excellence in all work, including giving proper time and attention to each patient."
      },
      {
        question: "What is the Islamic view on medical confidentiality after death?",
        options: ["No longer applies", "Still binding unless public interest requires", "Family can access all records", "Only for Muslim patients"],
        correctAnswer: "Still binding unless public interest requires",
        explanation: "The ethical obligation of confidentiality generally continues after death unless there's an overriding benefit to disclosure."
      },
      {
        question: "What is the Islamic approach to medical education?",
        options: ["Forbidden for women", "Obligatory on capable Muslims", "Only for those from medical families", "Permitted but discouraged"],
        correctAnswer: "Obligatory on capable Muslims",
        explanation: "Seeking medical knowledge is a communal obligation (Fard Kifayah) in Islam to ensure healthcare needs are met."
      },
      {
        question: "What is the Islamic ruling on using human stem cells for research?",
        options: ["Completely forbidden", "Permitted from permissible sources with ethical guidelines", "Only from adults", "No restrictions"],
        correctAnswer: "Permitted from permissible sources with ethical guidelines",
        explanation: "Stem cell research is generally permitted when using ethically obtained sources like adult stem cells or umbilical cord blood."
      },
    ],
    advanced: [
      {
        question: "What are the key considerations in Islamic bioethics regarding genetic engineering?",
        options: ["Completely prohibited", "Allowed for therapeutic purposes with ethical safeguards", "Only for cosmetic improvements", "No Islamic guidance exists"],
        correctAnswer: "Allowed for therapeutic purposes with ethical safeguards",
        explanation: "Islamic bioethics generally supports therapeutic genetic interventions while prohibiting enhancements that alter Allah's creation unnecessarily."
      },
      {
        question: "How does the concept of Maslaha (public interest) apply to medical ethics?",
        options: ["Individual needs always come first", "Public health can override individual preferences when necessary", "It doesn't apply to medicine", "Only applies to infectious diseases"],
        correctAnswer: "Public health can override individual preferences when necessary",
        explanation: "Maslaha allows for prioritizing public health interests while respecting individual rights, such as in pandemic responses."
      },
      {
        question: "What is the Islamic ruling on withdrawing life support?",
        options: ["Never permitted", "Permitted when treatment is futile and causes more harm", "Only family can decide", "Always required to continue"],
        correctAnswer: "Permitted when treatment is futile and causes more harm",
        explanation: "Islamic ethics permits withdrawing futile treatment that causes more harm than benefit, distinguishing between ordinary and extraordinary means."
      },
      {
        question: "How should Muslim healthcare providers handle conflicts between Islamic values and secular medical ethics?",
        options: ["Always follow secular ethics", "Always follow Islamic ethics exclusively", "Seek consultation and find compatible solutions", "Avoid treating such patients"],
        correctAnswer: "Seek consultation and find compatible solutions",
        explanation: "Muslim healthcare providers should seek scholarly consultation and find solutions that honor both Islamic principles and professional obligations."
      },
      {
        question: "What is the Islamic perspective on clinical trials and human experimentation?",
        options: ["Completely forbidden", "Permitted with informed consent and potential benefit", "Only on volunteers", "Only observational studies allowed"],
        correctAnswer: "Permitted with informed consent and potential benefit",
        explanation: "Clinical trials are permitted when they follow ethical guidelines, have potential benefits, and participants give informed consent."
      },
      {
        question: "How does Islamic medical ethics address healthcare resource allocation during scarcity?",
        options: ["First come, first served only", "Based on ability to pay", "Consider medical need, prognosis, and social benefit", "Random selection"],
        correctAnswer: "Consider medical need, prognosis, and social benefit",
        explanation: "Islamic ethics considers multiple factors including medical need, likelihood of benefit, and broader social considerations in resource allocation."
      },
      {
        question: "What is the Islamic ruling on surrogate pregnancy?",
        options: ["Universally accepted", "Universally forbidden", "Scholarly disagreement with conditions", "Only for married couples"],
        correctAnswer: "Scholarly disagreement with conditions",
        explanation: "There is scholarly disagreement on surrogacy, with some permitting it under strict conditions while others prohibit it entirely."
      },
      {
        question: "How should Muslim doctors approach patients who refuse treatment for religious reasons?",
        options: ["Force treatment anyway", "Respect autonomy while providing education", "Discharge immediately", "Ignore religious concerns"],
        correctAnswer: "Respect autonomy while providing education",
        explanation: "Islamic ethics emphasizes respecting patient autonomy while providing education and exploring religiously acceptable alternatives."
      },
      {
        question: "What is the Islamic approach to mental health treatment?",
        options: ["Only spiritual healing", "Only medical treatment", "Integrated spiritual and medical approach", "Mental illness doesn't exist in Islam"],
        correctAnswer: "Integrated spiritual and medical approach",
        explanation: "Islam recognizes mental health as important and supports integrated approaches combining spiritual guidance with medical treatment."
      },
      {
        question: "How does Islamic medical ethics address conflicts of interest in healthcare?",
        options: ["Conflicts are acceptable", "Must be disclosed and managed ethically", "Only financial conflicts matter", "Doctors can ignore conflicts"],
        correctAnswer: "Must be disclosed and managed ethically",
        explanation: "Islamic ethics emphasizes honesty and trustworthiness, requiring disclosure and ethical management of all conflicts of interest."
      },
      {
        question: "What is the Islamic ruling on gender reassignment surgery?",
        options: ["Permitted without conditions", "Forbidden entirely", "Permitted for intersex individuals", "Only male-to-female allowed"],
        correctAnswer: "Permitted for intersex individuals",
        explanation: "Most scholars permit gender reassignment only for intersex cases where biological sex is ambiguous, not for psychological gender dysphoria."
      },
      {
        question: "How does Islam view the use of AI in medical decision-making?",
        options: ["Completely forbidden", "Permitted as assistive tool with human oversight", "Should replace human doctors", "Only for diagnosis"],
        correctAnswer: "Permitted as assistive tool with human oversight",
        explanation: "AI can be used as a tool in medicine as long as final decisions remain with qualified human doctors who maintain ethical responsibility."
      },
      {
        question: "What is the Islamic perspective on physician-assisted suicide?",
        options: ["Permitted in terminal cases", "Completely forbidden", "Patient's choice only", "Permitted with family consent"],
        correctAnswer: "Completely forbidden",
        explanation: "Islam prohibits active euthanasia and physician-assisted suicide as they constitute taking life, which is Allah's exclusive right."
      },
      {
        question: "How should Islamic medical ethics approach transhumanism?",
        options: ["Fully embrace all enhancements", "Reject all technological enhancements", "Evaluate based on therapeutic benefit vs. altering creation", "Only for prolonging life"],
        correctAnswer: "Evaluate based on therapeutic benefit vs. altering creation",
        explanation: "Islamic ethics cautiously evaluates transhumanist technologies, permitting therapeutic uses while rejecting unnecessary alterations to human nature."
      },
      {
        question: "What is the Islamic ruling on three-parent IVF?",
        options: ["Completely permitted", "Permitted only to prevent mitochondrial diseases", "Forbidden entirely", "Only for married couples over 40"],
        correctAnswer: "Permitted only to prevent mitochondrial diseases",
        explanation: "Some scholars conditionally permit three-parent IVF when strictly necessary to prevent serious genetic diseases, not for routine use."
      },
      {
        question: "How does Islamic ethics view the concept of brain death?",
        options: ["Equivalent to clinical death", "Not recognized as death", "Only with family consent", "Requires two doctors' confirmation"],
        correctAnswer: "Equivalent to clinical death",
        explanation: "Many Islamic scholars recognize brain death as actual death when properly diagnosed, permitting organ donation and cessation of life support."
      },
      {
        question: "What is the Islamic approach to allocating scarce COVID vaccines?",
        options: ["First come first served", "Prioritize based on medical need and social benefit", "Only for Muslims", "Sell to highest bidders"],
        correctAnswer: "Prioritize based on medical need and social benefit",
        explanation: "Islamic ethics would prioritize healthcare workers, high-risk individuals, and those essential for societal functioning during a pandemic."
      },
      {
        question: "How does Islam view the use of CRISPR gene editing?",
        options: ["Forbidden as playing God", "Permitted for somatic cell therapy", "Allowed for all applications", "Only for research purposes"],
        correctAnswer: "Permitted for somatic cell therapy",
        explanation: "Most scholars permit therapeutic gene editing of somatic (non-reproductive) cells to treat diseases, while prohibiting germline modifications."
      },
      {
        question: "What is the Islamic perspective on medical patents?",
        options: ["Completely forbidden", "Permitted with reasonable limits", "Only for Muslim inventors", "No time restrictions"],
        correctAnswer: "Permitted with reasonable limits",
        explanation: "While knowledge should be shared, Islam permits reasonable intellectual property rights that don't prevent access to essential medicines."
      },
      {
        question: "How should Muslim doctors handle requests for virginity certificates?",
        options: ["Always provide", "Refuse entirely", "Provide only medically accurate information", "Only for legal cases"],
        correctAnswer: "Provide only medically accurate information",
        explanation: "Doctors should provide factual medical information without moral judgments, while counseling patients about Islamic values regarding chastity."
      },
      {
        question: "What is the Islamic ruling on face transplants?",
        options: ["Forbidden as altering Allah's creation", "Permitted for severe disfigurement", "Only partial transplants allowed", "Only for burn victims"],
        correctAnswer: "Permitted for severe disfigurement",
        explanation: "Most scholars permit face transplants when medically necessary to restore normal function and relieve severe psychological distress."
      },
      {
        question: "How does Islamic ethics view the sale of human organs?",
        options: ["Permitted free market", "Completely forbidden", "Allowed with government regulation", "Only between family members"],
        correctAnswer: "Completely forbidden",
        explanation: "Islam prohibits commercial trade in human organs as it commodifies the human body, though altruistic donation is encouraged."
      },
      {
        question: "What is the Islamic approach to psychedelic therapy?",
        options: ["Completely forbidden", "Permitted for treatment-resistant conditions", "Only natural psychedelics allowed", "No restrictions"],
        correctAnswer: "Permitted for treatment-resistant conditions",
        explanation: "Under strict medical supervision, some scholars permit psychedelic therapy for severe mental health conditions when conventional treatments fail."
      },
      {
        question: "How should Islamic medical ethics approach artificial wombs?",
        options: ["Fully embrace the technology", "Reject entirely", "Evaluate based on medical necessity and ethical impact", "Only for research"],
        correctAnswer: "Evaluate based on medical necessity and ethical impact",
        explanation: "Islamic scholars would carefully evaluate artificial womb technology considering its impact on family structure and necessity for saving premature babies."
      },
      {
        question: "What is the Islamic ruling on using pig-derived medical products?",
        options: ["Completely forbidden", "Permitted if no alternatives exist", "Only external use allowed", "Permitted if chemically transformed"],
        correctAnswer: "Permitted if no alternatives exist",
        explanation: "The principle of necessity (darura) allows using prohibited substances like porcine products when no alternatives exist to save life or health."
      },
      {
        question: "How does Islam view the use of blockchain in medical records?",
        options: ["Forbidden as too complex", "Permitted if it enhances security and privacy", "Only for Muslim patients", "No need for such technology"],
        correctAnswer: "Permitted if it enhances security and privacy",
        explanation: "Islam encourages technologies that improve healthcare delivery and protect patient confidentiality, as long as they're ethically implemented."
      },
      {
        question: "What is the Islamic perspective on neuroenhancement for healthy individuals?",
        options: ["Encouraged", "Permitted with limits", "Forbidden as unnecessary alteration", "Only for students"],
        correctAnswer: "Forbidden as unnecessary alteration",
        explanation: "Islamic ethics generally prohibits cognitive enhancement for healthy individuals as it constitutes unnecessary tampering with Allah's creation."
      },
      {
        question: "How should Muslim doctors approach cultural competency training?",
        options: ["Unnecessary", "Essential part of medical education", "Only about Muslim cultures", "Only for doctors abroad"],
        correctAnswer: "Essential part of medical education",
        explanation: "Islam teaches respect for all people, making cultural competency essential for providing sensitive, effective care to diverse populations."
      },
    ],
  },
};

export default  islamicMedicalEthicsCategory;
