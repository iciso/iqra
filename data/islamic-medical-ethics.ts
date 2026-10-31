import type { QuizCategory } from "@/types/quiz";

const  medicalEthicsCategory: QuizCategory = {
  id: "islamic-medical-ethics",
  title: "Islamic Medical Ethics",
  description: "Islamic Perspectives of Medical Ethics",
  icon: "BriefcaseMedical",
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
      {
        question: "What does the Quran state in Surah al-Ma'idah (5:32) regarding the immense moral value of saving a single human life?",
        options: [
          "It is equivalent to donating half of one's wealth",
          "It is as if he has saved the whole of mankind",
          "It is rewarded only if the patient is a relative",
          "It excuses the doctor from daily prayers",
        ],
        correctAnswer: "It is as if he has saved the whole of mankind",
        explanation:
          "Surah al-Ma'idah (5:32) establishes the foundational sanctity of human life in Islamic medical ethics: 'Whoever kills a soul... it is as if he had slain mankind entirely, and whoever saves one life, it is as if he had saved mankind entirely.'",
      },
      {
        question: "According to the authentic hadith in Sunan Abi Dawood, what single condition did the Prophet (PBUH) mention that has no medical cure?",
        options: ["Leprosy", "Blindness", "Old age (Al-Haram)", "Fever"],
        correctAnswer: "Old age (Al-Haram)",
        explanation:
          "The Prophet (PBUH) said: 'Make use of medical treatment, for Allah has not made a disease without appointing a remedy for it, with the exception of one disease, namely old age' (Abu Dawood, at-Tirmidhi).",
      },
      {
        question: "What groundbreaking epidemiological guideline did Prophet Muhammad (PBUH) establish regarding pandemic quarantine in Sahih al-Bukhari?",
        options: [
          "Travel to healthy towns to seek refuge",
          "If you hear of a plague in a land, do not enter it; and if it breaks out in a land where you are, do not leave it",
          "Ignore the disease and gather in crowded markets",
          "Isolate only the elderly and children",
        ],
        correctAnswer: "If you hear of a plague in a land, do not enter it; and if it breaks out in a land where you are, do not leave it",
        explanation:
          "Recorded in Sahih al-Bukhari and Muslim, the Prophet (PBUH) laid down the foundational protocol of modern public health quarantine: restricting travel into and out of contagion zones to curb disease transmission.",
      },
      {
        question: "According to authentic hadith in Sahih al-Bukhari, what spiritual benefit does a Muslim derive when afflicted with physical illness, pain, or fatigue?",
        options: [
          "Immediate elevation to worldly political leadership",
          "Allah expiates and erases their sins and errors, even for the prick of a thorn",
          "Immunity from all future physical ailments",
          "An automatic exemption from all moral accountability",
        ],
        correctAnswer: "Allah expiates and erases their sins and errors, even for the prick of a thorn",
        explanation:
          "The Prophet (PBUH) said: 'No fatigue, illness, anxiety, grief, hurt, or sorrow afflicts a Muslim, even the prick of a thorn, except that Allah expiates some of his sins thereby' (Sahih al-Bukhari).",
      },
      {
        question: "What is the legal status and importance of visiting the sick (Iyadah al-Marid) in Islamic medical culture?",
        options: [
          "A prohibited distraction for medical staff",
          "An established right of a Muslim upon fellow Muslims and a highly meritorious communal deed",
          "Obligatory only on doctors and nurses",
          "A ritual performed only on Eid mornings",
        ],
        correctAnswer: "An established right of a Muslim upon fellow Muslims and a highly meritorious communal deed",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) declared visiting the sick as one of the essential rights of a Muslim upon fellow Muslims, bringing comfort to the ailing and carrying immense divine rewards.",
      },
      {
        question: "Which verse in Surah an-Nisa explicitly forbids taking one's own life, forming the basis for the prohibition of suicide and active euthanasia?",
        options: [
          "Surah an-Nisa (4:29)",
          "Surah an-Nisa (4:1)",
          "Surah an-Nisa (4:103)",
          "Surah an-Nisa (4:160)",
        ],
        correctAnswer: "Surah an-Nisa (4:29)",
        explanation:
          "Allah commands in Surah an-Nisa (4:29): 'And do not kill yourselves [or one another]. Indeed, Allah is to you ever Merciful.' Because life is a divine trust (Amanah), taking one's life is strictly unlawful.",
      },
      {
        question: "What is the Shariah ruling regarding an ill patient who is medically advised that fasting during Ramadan will worsen their sickness or delay recovery?",
        options: [
          "They must fast regardless of health consequences",
          "They are permitted—and often religiously obliged—to break the fast and make up missed days when recovered (Surah al-Baqarah 2:185)",
          "They must pay a heavy penalty to the hospital",
          "They must give up their faith",
        ],
        correctAnswer: "They are permitted—and often religiously obliged—to break the fast and make up missed days when recovered (Surah al-Baqarah 2:185)",
        explanation:
          "Allah states in Surah al-Baqarah (2:185): 'Whoever is ill or on a journey, then an equal number of other days.' Causing self-harm by fasting during dangerous illness violates the objective of preserving life.",
      },
      {
        question: "What are the three essential conditions agreed upon by scholars for faith-healing (Ruqyah) to be lawful in Islam?",
        options: [
          "It must use Quran/authentic supplications, in understandable language, and with conviction that cure comes solely from Allah",
          "It must be performed in complete darkness, using strange symbols, for an exorbitant fee",
          "It must invoke names of angels, written on talismans, burned in oil",
          "It must be done exclusively by licensed surgeons",
        ],
        correctAnswer: "It must use Quran/authentic supplications, in understandable language, and with conviction that cure comes solely from Allah",
        explanation:
          "As summarized by Ibn Hajar al-Asqalani, Ruqyah is permissible only if: (1) it uses the Word of Allah or His Names/Attributes; (2) in clear, intelligible Arabic or understood words; and (3) one believes the cure is from Allah alone, not the healer or words themselves.",
      },
      {
        question: "What is the Islamic ruling on seeking medical cures or diagnostics from fortune-tellers, astrologers, or practitioners of black magic (Sihr)?",
        options: [
          "Recommended when modern medicine fails",
          "Strictly prohibited (Haram) and compromises one's creed (Tawheed)",
          "Permitted if the practitioner recites Arabic poetry",
          "Permissible during weekends",
        ],
        correctAnswer: "Strictly prohibited (Haram) and compromises one's creed (Tawheed)",
        explanation:
          "The Prophet (PBUH) severely condemned visiting soothsayers or occultists: 'Whoever goes to a fortune-teller and believes what he says has disbelieved in what was revealed to Muhammad' (Abu Dawood).",
      },
      {
        question: "What is the Prophetic tradition regarding honey, cupping (Hijama), and black seed (Habbah al-Sawda)?",
        options: [
          "They were condemned as pagan superstitions",
          "They were highlighted in authentic Hadith as beneficial natural remedies while acknowledging Allah as the ultimate healer",
          "They were declared the only treatments allowed in Islam",
          "They were reserved exclusively for political leaders",
        ],
        correctAnswer: "They were highlighted in authentic Hadith as beneficial natural remedies while acknowledging Allah as the ultimate healer",
        explanation:
          "In Sahih al-Bukhari, the Prophet (PBUH) commended cupping and honey, and stated that the black seed is a cure for every disease except death, encouraging the integration of proven natural remedies with faith in divine cure.",
      },
      ],
    intermediate: [
      {
        question: "What foundational Islamic legal maxim (Qawa'id Fiqhiyyah) forms the primary basis for the clinical principle of 'primum non nocere' (first, do no harm)?",
        options: [
          "Al-Umur bi-Maqasidiha (Matters are judged by their intentions)",
          "La Darar wa la Dirar (There shall be no infliction of harm, nor reciprocal harm)",
          "Al-Mashaqqatu tajlib al-taysir (Hardship brings forth ease)",
          "Al-Adatu muhakkamah (Custom is the arbiter of law)",
        ],
        correctAnswer: "La Darar wa la Dirar (There shall be no infliction of harm, nor reciprocal harm)",
        explanation:
          "Derived from the authentic hadith in Sunan Ibn Majah, 'La Darar wa la Dirar' is a core legal maxim in Islamic bioethics requiring healthcare providers to eliminate harm, prevent harmful side effects, and never subject patients to needless risks.",
      },
      {
        question: "How does the legal maxim 'Al-Darurah tuqaddaru bi-qadariha' (Necessity is measured by its proportion) apply to clinical examinations?",
        options: [
          "A physician may expose the patient's entire body regardless of the affected area",
          "A physician is permitted to uncover and view only the specific anatomical area strictly necessary for diagnosis or treatment",
          "The patient must be examined through thick blankets without physical inspection",
          "Examinations can only occur if three consultants are present",
        ],
        correctAnswer: "A physician is permitted to uncover and view only the specific anatomical area strictly necessary for diagnosis or treatment",
        explanation:
          "While medical examination permits looking at parts of the body normally considered Awrah under the rule of necessity, this necessity is strictly confined to what the medical procedure directly requires, maintaining modesty as much as possible.",
      },
      {
        question: "What did the Prophet (PBUH) rule regarding medical malpractice and unqualified practitioners in Sunan Abi Dawood?",
        options: [
          "Unqualified practitioners are exempt from blame if they intended well",
          "Whoever practices medicine without known and recognized medical qualification is financially liable (Damin) for harm caused",
          "Medical mistakes cannot be legally questioned under any circumstances",
          "Only religious courts may license surgeons",
        ],
        correctAnswer: "Whoever practices medicine without known and recognized medical qualification is financially liable (Damin) for harm caused",
        explanation:
          "The Prophet (PBUH) stated: 'Whoever practices medicine when he is not known to possess medical knowledge, and causes harm, is liable' (Abu Dawood, an-Nasa'i). This establishes strict medical liability, malpractice standards, and professional licensing in Islam.",
      },
      {
        question: "According to the International Islamic Fiqh Academy, what is the legal ruling regarding deceased organ donation?",
        options: [
          "Strictly prohibited under all circumstances as desecration of the body",
          "Permissible under strict conditions: verified death, donor consent or next-of-kin permission, saving a vital life or restoring bodily function, and absolute prohibition of financial sale",
          "Mandatory upon every citizen by governmental decree",
          "Permissible only for non-vital tissues like fingernails and hair",
        ],
        correctAnswer: "Permissible under strict conditions: verified death, donor consent or next-of-kin permission, saving a vital life or restoring bodily function, and absolute prohibition of financial sale",
        explanation:
          "Resolution No. 26 of the Islamic Fiqh Academy permits deceased organ donation as an altruistic act of perpetual charity (Ihsan), provided proper consent is secured, medical death is certified, and human organs are never commercialized.",
      },
      {
        question: "Why is the commercial buying and selling of human organs unanimously prohibited in Islamic bioethics?",
        options: [
          "Because organs have no cash value in market economics",
          "Because human beings and their body parts are dignified creations of Allah (Karamat al-Insan) and cannot be treated as commodified trade items",
          "Because currency exchange rates fluctuate too frequently",
          "To keep organ harvesting exclusively for public hospitals",
        ],
        correctAnswer: "Because human beings and their body parts are dignified creations of Allah (Karamat al-Insan) and cannot be treated as commodified trade items",
        explanation:
          "Allah states: 'And We have certainly honored the children of Adam' (Surah al-Isra 17:70). Islamic jurisprudence affirms that the human body is a divine trust, not commercial property (Mal), protecting the poor from predatory exploitation.",
      },
      {
        question: "According to authentic Hadith in Sahih al-Bukhari, when is the soul (Ruh) breathed into the human embryo (Nafkh al-Ruh)?",
        options: [
          "At the moment of fertilization (conception)",
          "At 40 days of gestation",
          "At 120 days of gestation (after successive 40-day stages of Nutfah, Alaqa, and Mudghah)",
          "At the moment of physical birth",
        ],
        correctAnswer: "At 120 days of gestation (after successive 40-day stages of Nutfah, Alaqa, and Mudghah)",
        explanation:
          "In Sahih al-Bukhari, Abdullah ibn Mas'ud narrated that the Prophet (PBUH) described the creation of a human in the mother's womb in 40-day intervals, after which the angel is sent to breathe the soul into it at 120 days.",
      },
      {
        question: "What is the consensus of Islamic Fiqh councils regarding abortion after 120 days of pregnancy?",
        options: [
          "Permissible for any family planning reason",
          "Strictly prohibited (Haram) because ensoulment has occurred, equating it to taking a living soul, unless continuing the pregnancy definitively threatens the mother's life",
          "Permissible if parents prefer a different gender",
          "Permissible up to the ninth month if the fetus has Down syndrome",
        ],
        correctAnswer: "Strictly prohibited (Haram) because ensoulment has occurred, equating it to taking a living soul, unless continuing the pregnancy definitively threatens the mother's life",
        explanation:
          "After 120 days (ensoulment), abortion is treated as homicide in Shariah. The sole exception recognized by jurists is when reliable medical experts verify that carrying the pregnancy will result in the mother's death, prioritizing the mother's established life.",
      },
      {
        question: "What is the established Islamic preference regarding the gender of the examining healthcare provider for a female patient?",
        options: [
          "Any doctor is identical without any preference",
          "First a female Muslim physician; if unavailable, a qualified female non-Muslim; then a trustworthy male Muslim physician; and lastly a male non-Muslim physician",
          "Male physicians are strictly preferred in all circumstances",
          "Only male surgeons are legally recognized in Shariah",
        ],
        correctAnswer: "First a female Muslim physician; if unavailable, a qualified female non-Muslim; then a trustworthy male Muslim physician; and lastly a male non-Muslim physician",
        explanation:
          "Classical jurists formulated this sequence to balance modesty (Awrah) with health preservation: same-gender care is preferred first, but when medical competence or emergencies demand, cross-gender care is completely lawful.",
      },
      {
        question: "Why is the presence of a chaperone (such as a female nurse or Mahram) required when a male doctor examines a female patient in a closed room?",
        options: [
          "To take administrative payment notes",
          "To prevent unlawful seclusion (Khalwah) and protect both the patient's modesty and the physician from false accusations",
          "To assist in translating foreign languages",
          "To perform the physical surgery on behalf of the doctor",
        ],
        correctAnswer: "To prevent unlawful seclusion (Khalwah) and protect both the patient's modesty and the physician from false accusations",
        explanation:
          "The Prophet (PBUH) warned: 'No man is alone with a woman except that Satan is the third among them' (at-Tirmidhi). Having a professional chaperone present fulfills clinical ethics, eliminates suspicion, and adheres to Islamic law.",
      },
      {
        question: "What is the Shariah ruling on a 'Do Not Resuscitate' (DNR) order for a terminally ill patient in irreversible multi-organ failure?",
        options: [
          "Strictly prohibited as it constitutes active murder",
          "Permissible when certified by at least three qualified, competent specialist physicians that cardiopulmonary resuscitation is medically futile and merely prolongs dying agony",
          "Mandatory for all elderly patients above 70 years",
          "Permissible only if the patient's insurance coverage has run out",
        ],
        correctAnswer: "Permissible when certified by at least three qualified, competent specialist physicians that cardiopulmonary resuscitation is medically futile and merely prolongs dying agony",
        explanation:
          "Islamic Fiqh Academy Resolution No. 120 and Saudi Senior Scholars Council Fatwa No. 12086 permit DNR orders when multiple specialists determine resuscitation is medically futile, distinguishing withholding futile interventions from active euthanasia.",
      },
      {
        question: "How does Islamic bioethics view palliative sedation and high-dose opioid analgesia for terminally ill patients experiencing intractable suffering?",
        options: [
          "Prohibited because all pain medications cloud the intellect",
          "Permissible to relieve unbearable pain, applying the principle of 'actions are judged by intentions', even if it inadvertently suppresses respiration as a foreseeable secondary effect",
          "Permissible only if the patient remains fully standing",
          "Classified as assisted suicide under all conditions",
        ],
        correctAnswer: "Permissible to relieve unbearable pain, applying the principle of 'actions are judged by intentions', even if it inadvertently suppresses respiration as a foreseeable secondary effect",
        explanation:
          "Under the principle 'Innama al-a'malu bin-niyyat' and the doctrine of double effect recognized in Fiqh, administering analgesics with the sole intention of alleviating severe distress is lawful, distinct from administering lethal doses intending death.",
      },
      {
        question: "What is the Islamic ruling regarding In-Vitro Fertilization (IVF) to overcome infertility between married couples?",
        options: [
          "Completely forbidden as artificial interference in divine decree",
          "Permissible provided it utilizes exclusively the husband's sperm and the wife's ovum, implanted into the wife's own uterus, during an active legal marriage",
          "Permissible even with third-party anonymous sperm or egg donors",
          "Permitted only if triplets are guaranteed",
        ],
        correctAnswer: "Permissible provided it utilizes exclusively the husband's sperm and the wife's ovum, implanted into the wife's own uterus, during an active legal marriage",
        explanation:
          "The Islamic Fiqh Academy declared IVF lawful to assist married couples, provided there is zero introduction of third-party genetic material (donor sperm, donor eggs, or surrogate wombs) to protect the purity of lineage (Hifz al-Nasl).",
      },
      {
        question: "Why has the Islamic Fiqh Academy unanimously ruled commercial and gestational surrogacy to be impermissible in Islam?",
        options: [
          "Because hospitals charge high maintenance fees",
          "Because it confuses motherhood and lineage (Ansab), introduces a third party into the sacred procreative marital relationship, and risks legal disputes over the child",
          "Because pregnancy should never involve modern medicine",
          "Because surrogates are underpaid",
        ],
        correctAnswer: "Because it confuses motherhood and lineage (Ansab), introduces a third party into the sacred procreative marital relationship, and risks legal disputes over the child",
        explanation:
          "Surrogacy introduces profound ethical and legal confusion regarding the real mother (the genetic egg provider vs. the carrying birth mother who experiences labor, Surah Luqman 31:14), violating Islamic principles of lineage and family sanctity.",
      },
      {
        question: "What is the authentic hadith precedent regarding contraception, and what is the modern ruling on temporary family planning?",
        options: [
          "The Prophet (PBUH) prohibited all contraception under penalty of law",
          "The Sahabah practiced coitus interruptus ('Azl) during the Prophet's lifetime with his knowledge (Sahih al-Bukhari), establishing the permissibility of temporary contraception with mutual spousal consent",
          "Contraception is only permitted after having ten children",
          "Contraception is exclusively decided by the husband without consulting the wife",
        ],
        correctAnswer: "The Sahabah practiced coitus interruptus ('Azl) during the Prophet's lifetime with his knowledge (Sahih al-Bukhari), establishing the permissibility of temporary contraception with mutual spousal consent",
        explanation:
          "Jabir (RA) narrated in Sahih al-Bukhari: 'We used to practice 'Azl during the time of the Prophet while the Quran was being revealed.' Scholars derive that reversible contraception for spacing or health is lawful with mutual agreement.",
      },
      {
        question: "What is the Islamic ruling on permanent surgical sterilization (e.g., vasectomy or tubal ligation) for purely lifestyle or convenience reasons?",
        options: [
          "Permissible without restriction",
          "Impermissible (Haram) because it permanently destroys procreative ability (Taghyir khalq Allah), unless a competent medical specialist verifies that future pregnancy poses a grave threat to the woman's life",
          "Recommended for all married couples",
          "Permitted only if performed before the age of thirty",
        ],
        correctAnswer: "Impermissible (Haram) because it permanently destroys procreative ability (Taghyir khalq Allah), unless a competent medical specialist verifies that future pregnancy poses a grave threat to the woman's life",
        explanation:
          "Islamic jurisprudence prohibits irreversible destruction of bodily organs and faculties without compelling health necessity. If a mother's life is endangered by pregnancy and other contraceptives fail, tubal ligation is permitted.",
      },
      {
        question: "What is the historical and religious basis for male circumcision (Khitan) in Islamic medical practice?",
        options: [
          "A medieval cultural invention",
          "An established Sunnah from the legacy of Prophet Ibrahim (AS) and an integral component of the natural human disposition (Sunan al-Fitrah) reported in Sahih al-Bukhari",
          "A punitive measure for misconduct",
          "A procedure reserved exclusively for converts",
        ],
        correctAnswer: "An established Sunnah from the legacy of Prophet Ibrahim (AS) and an integral component of the natural human disposition (Sunan al-Fitrah) reported in Sahih al-Bukhari",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) listed circumcision among the five innate virtues of human purity (Sunan al-Fitrah), promoting hygiene and preventing various urinary tract and penile pathologies.",
      },
      {
        question: "In what circumstances is a physician religiously and ethically required to breach patient confidentiality under Islamic law?",
        options: [
          "To share medical gossip with coworkers",
          "When mandatory public health reporting protects society from communicable epidemic outbreaks, or prevents imminent violent crime, child abuse, or physical harm to others",
          "Whenever an employer demands medical files",
          "Confidentiality must never be breached under any circumstances whatsoever",
        ],
        correctAnswer: "When mandatory public health reporting protects society from communicable epidemic outbreaks, or prevents imminent violent crime, child abuse, or physical harm to others",
        explanation:
          "While medical privacy is a sacred trust (Amanah), Islamic legal maxims dictate that public societal harm (Darar 'Amm) takes precedence over individual private harm (Darar Khass). Preventing harm to innocent third parties overrides secrecy.",
      },
      {
        question: "What is the classical hadith foundation that governs the reverence and sanctity due to a deceased human body during post-mortem handling and autopsies?",
        options: [
          "\"Dead bodies have no rights in Islam\"",
          "\"Breaking the bone of a deceased person is like breaking it while he is alive\" (Sunan Abi Dawood)",
          "\"The dead must be cremated within 24 hours\"",
          "\"Medical students may dissect corpses for recreation\"",
        ],
        correctAnswer: "\"Breaking the bone of a deceased person is like breaking it while he is alive\" (Sunan Abi Dawood)",
        explanation:
          "Recorded in Sunan Abi Dawood and Ibn Majah, this authentic hadith establishes that human dignity persists after death. Post-mortem examinations are only tolerated for compelling judicial crime investigation or vital pathology, and must minimize bodily desecration.",
      },
      {
        question: "How does the chemical transformation concept of 'Istihalah' apply to pharmaceuticals derived from porcine or non-halal origins?",
        options: [
          "It has no bearing on Islamic law",
          "If an impure substance undergoes complete chemical and structural metamorphosis into an entirely new, pure chemical compound, it becomes Halal and pure according to many classical and modern scholars",
          "It allows eating non-halal meat at restaurants",
          "It applies exclusively to liquid beverages",
        ],
        correctAnswer: "If an impure substance undergoes complete chemical and structural metamorphosis into an entirely new, pure chemical compound, it becomes Halal and pure according to many classical and modern scholars",
        explanation:
          "Istihalah is the complete chemical transmutation of an impure substance into a totally distinct compound with different properties. The Islamic Organization for Medical Sciences (IOMS) applied this to substances like highly processed gelatin and insulin.",
      },
      {
        question: "What is the ruling on using ethyl alcohol as a topical antiseptic and disinfectant in healthcare settings?",
        options: [
          "Prohibited because all forms of alcohol are physical filth (Najasah)",
          "Permissible because topical rubbing alcohol is non-potable, used for essential hygiene and infection control, and external alcohol is not ritually impure according to the majority of contemporary jurists",
          "Permitted only if diluted with holy water",
          "Forbidden for surgeons during daytime hours",
        ],
        correctAnswer: "Permissible because topical rubbing alcohol is non-potable, used for essential hygiene and infection control, and external alcohol is not ritually impure according to the majority of contemporary jurists",
        explanation:
          "Contemporary scholars and Fiqh councils distinguish between intoxicating beverages meant for ingestion and synthetic topical alcohols used for sterilization. External medical application does not invalidate ritual purity (Taharah).",
      },
      {
        question: "What is the authentic Prophetic precedent regarding reconstructive surgery for physical defects, as recorded in Sunan Abi Dawood?",
        options: [
          "The Prophet forbade repairing any battlefield injury",
          "The Prophet (PBUH) permitted Arfajah ibn As'ad, whose nose was severed at the Battle of Kulab, to wear a replacement nose crafted from gold",
          "The Prophet commanded soldiers to leave broken bones untreated",
          "The Prophet ordered cosmetic tattoos for injured fighters",
        ],
        correctAnswer: "The Prophet (PBUH) permitted Arfajah ibn As'ad, whose nose was severed at the Battle of Kulab, to wear a replacement nose crafted from gold",
        explanation:
          "When Arfajah's artificial silver nose caused an offensive odor, the Prophet (PBUH) explicitly authorized him to replace it with a prosthesis fashioned of gold (Sunan Abi Dawood, at-Tirmidhi), proving the lawfulness of reconstructive surgery to restore natural function and appearance.",
      },
      {
        question: "How does Islamic jurisprudence distinguish between lawful reconstructive surgery and impermissible aesthetic cosmetic surgery?",
        options: [
          "By the financial cost of the hospital bill",
          "Reconstructive surgery rectifies an abnormal defect, deformity, or restores lost function; purely cosmetic surgery alters normal creation purely for vanity or conformity to fashion trends (Taghyir khalq Allah)",
          "By whether the patient is male or female",
          "By the age of the attending surgeon",
        ],
        correctAnswer: "Reconstructive surgery rectifies an abnormal defect, deformity, or restores lost function; purely cosmetic surgery alters normal creation purely for vanity or conformity to fashion trends (Taghyir khalq Allah)",
        explanation:
          "Correcting congenital anomalies (e.g., cleft palate), burns, or accident trauma is restorative and permissible (I'adat al-khalq). Conversely, elective surgery aimed at altering normal anatomy solely for youthful appearance or fashion is condemned as altering Allah's creation (Surah an-Nisa 4:119).",
      },
      {
        question: "What is the Islamic bioethical stance on premarital genetic screening for inherited disorders such as Thalassemia or Sickle Cell Anemia?",
        options: [
          "Forbidden as a form of fortune-telling",
          "Permissible and strongly encouraged as a preventive healthcare measure to protect prospective children from debilitating genetic suffering",
          "Mandatory only for foreign expatriates",
          "Condemned because Muslims should avoid all blood tests",
        ],
        correctAnswer: "Permissible and strongly encouraged as a preventive healthcare measure to protect prospective children from debilitating genetic suffering",
        explanation:
          "Scholarly bodies endorse premarital genetic screening under the objectives of Shariah (Maqasid) to protect offspring (Hifz al-Nasl) and prevent severe hereditary suffering, exemplifying the maxim 'prevention is better than cure' (Dir' al-mafasid).",
      },
      {
        question: "Can Pre-implantation Genetic Diagnosis (PGD) be utilized during IVF for non-medical family balancing (sex selection) in Islamic law?",
        options: [
          "Freely permitted for any parents wanting a boy or girl",
          "Impermissible when done purely for non-medical sex selection, though permitted to screen out severe sex-linked genetic diseases",
          "Mandatory for all couples undergoing fertility treatment",
          "Permissible only for the first-born child",
        ],
        correctAnswer: "Impermissible when done purely for non-medical sex selection, though permitted to screen out severe sex-linked genetic diseases",
        explanation:
          "The Islamic Fiqh Academy prohibited using PGD solely for gender preference because it encourages gender discrimination, commodifies reproduction, and alters natural societal sex ratios, allowing it only to prevent transmission of severe genetic pathologies.",
      },
      {
        question: "What is the authentic Islamic perspective on clinical psychiatric disorders like major depression and schizophrenia?",
        options: [
          "They are exclusively signs of weak faith and demon possession, and medical treatment is forbidden",
          "They are genuine neurobiological and psychosocial medical illnesses that require evidence-based psychiatric and psychotherapeutic care alongside spiritual supplication",
          "They can only be cured by spending 40 days in total isolation",
          "They are imaginary illnesses manufactured by Western psychologists",
        ],
        correctAnswer: "They are genuine neurobiological and psychosocial medical illnesses that require evidence-based psychiatric and psychotherapeutic care alongside spiritual supplication",
        explanation:
          "Islam rejects the harmful stigma that mental illness is merely a lack of piety. The mind (Aql) is one of the five essential values protected by Shariah, and seeking psychiatric therapy and pharmacotherapy falls under the Prophetic command: 'Seek treatment, O servants of Allah.'",
      },
      {
        question: "Which types of medical injections are recognized by the Islamic Fiqh Academy as NOT invalidating the Ramadan fast?",
        options: [
          "Total parenteral nutrition (TPN) glucose infusions",
          "Non-nutritional injections such as intramuscular antibiotics, subcutaneous insulin, and local anesthetics",
          "Liquid protein meal replacement IV drips",
          "All injections without exception break the fast",
        ],
        correctAnswer: "Non-nutritional injections such as intramuscular antibiotics, subcutaneous insulin, and local anesthetics",
        explanation:
          "The International Islamic Fiqh Academy affirmed that non-nutritional injections (such as insulin, pain relievers, vaccines, and antibiotics) do not invalidate the fast because they do not enter the stomach through the normal alimentary canal and do not serve as food or drink.",
      },
      {
        question: "What is the contemporary scholarly consensus regarding asthma inhalers and oxygen therapy during the Ramadan fast?",
        options: [
          "They permanently nullify the fast and require a major penalty (Kaffarah)",
          "The majority of contemporary scholars and Fiqh councils rule that therapeutic inhalers and supplemental oxygen do not break the fast because the aerosolized medicine targets the respiratory tract, not the digestive stomach",
          "Inhalers can only be used during nighttime hours",
          "Patients using inhalers are excommunicated from the mosque",
        ],
        correctAnswer: "The majority of contemporary scholars and Fiqh councils rule that therapeutic inhalers and supplemental oxygen do not break the fast because the aerosolized medicine targets the respiratory tract, not the digestive stomach",
        explanation:
          "Because pressurized gas from an inhaler expands primarily into the bronchial tree rather than acting as food or beverage, scholars (including the Islamic Fiqh Academy and IslamQA) rule that patients in need may use their inhalers without breaking their fast.",
      },
      {
        question: "What is the ethical duty of a Muslim doctor when communicating a terminal, incurable diagnosis to a patient?",
        options: [
          "Deceive the patient completely and tell them they are perfectly healthy",
          "Communicate the diagnostic truth with profound empathy, sensitivity, and gradual clarity, sustaining spiritual hope while assisting the patient and family to prepare spiritually and legally",
          "Deliver the news bluntly and abandon all medical contact",
          "Only inform the patient's creditors",
        ],
        correctAnswer: "Communicate the diagnostic truth with profound empathy, sensitivity, and gradual clarity, sustaining spiritual hope while assisting the patient and family to prepare spiritually and legally",
        explanation:
          "Islamic ethics forbids lying while mandating compassion and wisdom (Hikmah). A doctor gently informs the patient of their prognosis so they can make informed medical choices, seek repentance, fulfill debts, and prepare spiritually for meeting Allah.",
      },
      {
        question: "What is the Islamic ruling regarding blood transfusions between individuals of different religious beliefs?",
        options: [
          "Prohibited; a Muslim can only receive blood from another practicing Muslim",
          "Completely permissible; human blood can be donated to and received from any human to preserve life, and blood transfusion does not establish familial foster relations (Rada'ah)",
          "Permissible only during wartime battles",
          "Requires changing one's name after the transfusion",
        ],
        correctAnswer: "Completely permissible; human blood can be donated to and received from any human to preserve life, and blood transfusion does not establish familial foster relations (Rada'ah)",
        explanation:
          "Saving human life is universal in Shariah. Unlike wet-nursing (breast milk), blood transfusions do not transfer genealogical prohibitions or create foster relationships, and receiving blood from non-Muslims is universally permitted.",
      },
      {
        question: "Why did the Council of the Islamic Fiqh Academy reject the establishment of human milk banks (Bunuk al-Laban) for premature infants in Muslim countries?",
        options: [
          "Because human milk expires too quickly",
          "Because pooled anonymous human breast milk leads to confusion of foster kinship (Rada'ah) and the risk of inadvertent incestuous marriages between foster siblings",
          "Because infant formula is superior in nutrition",
          "Because mothers refused to pump milk",
        ],
        correctAnswer: "Because pooled anonymous human breast milk leads to confusion of foster kinship (Rada'ah) and the risk of inadvertent incestuous marriages between foster siblings",
        explanation:
          "In Islamic jurisprudence, consuming breast milk from a woman creates marital prohibitions (Mahram status) between the child and the foster mother's lineage. Mixing anonymous donor milk makes tracking foster relations impossible, risking unlawful marriages.",
      },
      {
        question: "How does Islamic medical ethics evaluate the use of Placebos in double-blind randomized clinical drug trials?",
        options: [
          "Placebos are considered malicious lying and are universally banned",
          "Permissible provided patients give informed consent to the trial protocol and the placebo does not withhold established, life-saving standard treatments from sick patients",
          "Mandatory for all medical diagnoses",
          "Permitted only if the placebo pill contains pure honey",
        ],
        correctAnswer: "Permissible provided patients give informed consent to the trial protocol and the placebo does not withhold established, life-saving standard treatments from sick patients",
        explanation:
          "Placebo-controlled trials are ethically acceptable in Islam when evaluating new interventions against non-life-threatening conditions, provided participants are informed that they may receive a control, and no standard life-saving therapy is withheld.",
      },
      {
        question: "What is the legal standing of dental orthodontics (braces) and corrective dental implants in Islamic jurisprudence?",
        options: [
          "Impermissible because it changes the teeth",
          "Permissible because it serves a corrective and functional therapeutic purpose, rectifying dental misalignment, difficulty in chewing, or physical disfigurement",
          "Prohibited for anyone over eighteen years old",
          "Permissible only if made of silver wire",
        ],
        correctAnswer: "Permissible because it serves a corrective and functional therapeutic purpose, rectifying dental misalignment, difficulty in chewing, or physical disfigurement",
        explanation:
          "Hadiths condemning filing spaces between teeth (Washr) specifically target vain cosmetic alteration of normal teeth. Orthodontic treatment to align crooked teeth or fix malocclusion is considered restorative medical treatment (Tadawi).",
      },
      {
        question: "What is the Islamic humanitarian principle regarding treating wounded enemy combatants during armed conflicts?",
        options: [
          "Deny medical treatment to captured soldiers",
          "Provide impartial, professional medical care and humanitarian treatment without discrimination, honoring human dignity and fulfilling the ethics of war",
          "Charge wounded prisoners double fees",
          "Abandon wounded enemies on the battlefield",
        ],
        correctAnswer: "Provide impartial, professional medical care and humanitarian treatment without discrimination, honoring human dignity and fulfilling the ethics of war",
        explanation:
          "Islamic warfare ethics strictly mandate humane treatment of prisoners: 'And they give food in spite of love for it to the needy, the orphan, and the captive' (Surah al-Insan 76:8). Denying medical attention to wounded captives is prohibited in Shariah.",
      },
      {
        question: "Can a Muslim healthcare professional exercise 'conscientious objection' when asked to participate in procedures that violate Islamic law (such as elective abortion or euthanasia)?",
        options: [
          "No, a doctor must perform any legal procedure requested by a secular employer",
          "Yes, a Muslim has the moral and ethical right to conscientiously object, provided the patient is safely transferred to another provider without acute life-threatening abandonment",
          "Yes, but they must immediately resign from medical practice forever",
          "No, religious conscience is unrecognized in modern medicine",
        ],
        correctAnswer: "Yes, a Muslim has the moral and ethical right to conscientiously object, provided the patient is safely transferred to another provider without acute life-threatening abandonment",
        explanation:
          "The Prophet (PBUH) stated: 'There is no obedience to creation in disobedience to the Creator' (Ahmad). A physician may refuse participation in un-Islamic procedures while ensuring professional handover so that emergency care is not abandoned.",
      },
      {
        question: "What is an Islamic 'Advance Medical Directive' or Living Will (Wasiyyah Tibbiyyah)?",
        options: [
          "A document demanding active euthanasia when one becomes tired of life",
          "A legally documented statement specifying a person's medical treatment wishes for future incapacity, such as refusing futile life-prolonging resuscitation, consistent with Shariah guidelines",
          "A financial contract transferring hospital ownership to the patient's heirs",
          "An irrevocable refusal of all future medicines",
        ],
        correctAnswer: "A legally documented statement specifying a person's medical treatment wishes for future incapacity, such as refusing futile life-prolonging resuscitation, consistent with Shariah guidelines",
        explanation:
          "A Muslim may author an advance directive appointing a trusted healthcare proxy (Wakil) and expressing wishes against futile interventions, provided the document does not request suicide or active euthanasia.",
      },
      {
        question: "What is the ruling on clinical autopsy performed for forensic, judicial crime investigation (Tashrih Jinai)?",
        options: [
          "Strictly prohibited even if murderers escape justice",
          "Permissible by consensus of modern Fiqh bodies because the public benefit of administering justice, vindicating the innocent, and apprehending murderers outweighs the temporary incision of the corpse",
          "Permitted only if the family pays a court fine",
          "Mandatory for every person who dies in a hospital",
        ],
        correctAnswer: "Permissible by consensus of modern Fiqh bodies because the public benefit of administering justice, vindicating the innocent, and apprehending murderers outweighs the temporary incision of the corpse",
        explanation:
          "The Islamic Fiqh Academy ruled that forensic autopsies ordered by judicial authorities are permissible under the principle of balancing harms, ensuring justice and community safety while treating the deceased with care.",
      },
      {
        question: "How does Islamic law view taking medications containing porcine-derived gelatin (such as certain vaccine stabilizers or capsule casings) when no synthetic or bovine halal alternative exists?",
        options: [
          "Patients must refuse treatment and accept death",
          "Permissible under the rule of Darurah (compelling medical necessity) to preserve life or health, especially if chemical alteration (Istihalah) has occurred",
          "Treated as an unforgivable sin",
          "Permissible only for non-Muslims",
        ],
        correctAnswer: "Permissible under the rule of Darurah (compelling medical necessity) to preserve life or health, especially if chemical alteration (Istihalah) has occurred",
        explanation:
          "Surah al-Baqarah (2:173) states: 'Whoever is forced by necessity, neither desiring [it] nor transgressing... there is no sin upon him.' When life or vital health is at stake and halal substitutes are unavailable, Shariah permits such medications.",
      },
      {
        question: "What is the Shariah principle regarding a physician's moral duty when a patient's family demands that the patient NOT be told about their cancer diagnosis?",
        options: [
          "The doctor must always obey the family and lie to the patient",
          "The doctor's primary fiduciary duty is to the competent patient; the doctor should counsel the family and respectfully, honestly inform the patient to honor their autonomy and legal rights",
          "The doctor must discharge the patient immediately",
          "The doctor must inform only government authorities",
        ],
        correctAnswer: "The doctor's primary fiduciary duty is to the competent patient; the doctor should counsel the family and respectfully, honestly inform the patient to honor their autonomy and legal rights",
        explanation:
          "In Islamic ethics, a competent adult possesses personal autonomy and financial/religious obligations that require knowing the truth of their health. Collusion with family to deceive a competent patient violates Amanah (trust).",
      },
      {
        question: "Can a living person donate an essential, single vital organ (such as their heart or entire liver) to save another person's life?",
        options: [
          "Yes, it is the highest form of martyrdom",
          "Strictly prohibited (Haram) because it causes the immediate death of the donor, which constitutes self-destruction and suicide in violation of Surah al-Baqarah (2:195)",
          "Permitted if the recipient is a close friend",
          "Permitted only if approved by the hospital board",
        ],
        correctAnswer: "Strictly prohibited (Haram) because it causes the immediate death of the donor, which constitutes self-destruction and suicide in violation of Surah al-Baqarah (2:195)",
        explanation:
          "Islamic jurisprudence permits live organ donation only for paired organs (e.g., one kidney) or regenerable tissues (e.g., partial liver) where the donor can survive safely. Donating a single vital organ while alive is suicide, which is strictly forbidden.",
      },
      {
        question: "What is the Islamic ethical principle governing medical research on vulnerable populations (such as prisoners, orphans, or refugees)?",
        options: [
          "They should be prioritized for risky experiments because they have less social value",
          "They must be strictly safeguarded from medical exploitation, ensuring voluntary non-coerced consent and preventing trials that take advantage of their dependent status",
          "They cannot receive any medical care",
          "Clinical research on them requires no consent",
        ],
        correctAnswer: "They must be strictly safeguarded from medical exploitation, ensuring voluntary non-coerced consent and preventing trials that take advantage of their dependent status",
        explanation:
          "Islamic justice (Adl) requires special protection for the vulnerable (Al-Mustad'afin). Subjecting prisoners, orphans, or the destitute to coercive or high-risk medical trials violates their God-given rights and Islamic bioethics.",
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
        question: "What is the Islamic ruling on using human-animal chimeras for organ transplantation?",
        options: [
          "Completely permitted without restrictions",
          "Permitted only for vital organs with strict ethical oversight",
          "Forbidden as it violates the boundaries between species",
          "Only allowed for non-human primates"
        ],
        correctAnswer: "Permitted only for vital organs with strict ethical oversight",
        explanation: "Some Islamic scholars conditionally permit human-animal chimeras for organ transplantation when there's critical need and no alternatives exist, provided strict ethical guidelines prevent the mixing of human and animal reproductive cells or neural tissues."
      },
      {
        question: "How does Islamic medical ethics view the use of nanotechnology in targeted drug delivery?",
        options: [
          "Forbidden as it alters the body at molecular level",
          "Permitted with safety testing and ethical review",
          "Only allowed for cancer treatment",
          "Considered makruh (disliked) but not haram"
        ],
        correctAnswer: "Permitted with safety testing and ethical review",
        explanation: "Islamic ethics generally permits nanotechnology in medicine when it demonstrates clear therapeutic benefits, undergoes rigorous safety testing, and receives proper ethical review, following the principle of 'bringing benefit and preventing harm' (jalb al-masalih wa dar' al-mafasid)."
      },
      {
        question: "How should Muslim doctors approach cultural competency training?",
        options: ["Unnecessary", "Essential part of medical education", "Only about Muslim cultures", "Only for doctors abroad"],
        correctAnswer: "Essential part of medical education",
        explanation: "Islam teaches respect for all people, making cultural competency essential for providing sensitive, effective care to diverse populations."
      },
        {
        question: "What is the official resolution of the International Islamic Fiqh Academy regarding human reproductive cloning via somatic cell nuclear transfer (SCNT)?",
        options: [
          "Permissible to help infertile couples have children",
          "Strictly prohibited (Haram) because it eliminates the natural biological father-mother family structure, destroys lineage (Nasl), and commodifies human creation",
          "Mandatory to replace deceased individuals",
          "Permissible if approved by a panel of geneticists",
        ],
        correctAnswer: "Strictly prohibited (Haram) because it eliminates the natural biological father-mother family structure, destroys lineage (Nasl), and commodifies human creation",
        explanation:
          "In Resolution No. 100 (10/3), the Islamic Fiqh Academy categorically prohibited all forms of human reproductive cloning, affirming that it contradicts the divine design of spousal procreation (Surah an-Najm 53:45-46) and dismantles the foundational concept of kinship and parenthood.",
      },
      {
        question: "In Islamic bioethics, what is the critical legal distinction between somatic cell gene editing and human germline (heritable) gene editing?",
        options: [
          "There is no legal difference between them",
          "Somatic gene therapy treating disease in non-reproductive cells of a patient is permissible as medical cure (Tadawi), whereas germline editing altering embryonic DNA that passes to future generations is prohibited due to unknown transgenerational harms and tampering with human creation (Taghyir khalq Allah)",
          "Germline editing is encouraged for cosmetic enhancements",
          "Somatic gene therapy is strictly prohibited",
        ],
        correctAnswer: "Somatic gene therapy treating disease in non-reproductive cells of a patient is permissible as medical cure (Tadawi), whereas germline editing altering embryonic DNA that passes to future generations is prohibited due to unknown transgenerational harms and tampering with human creation (Taghyir khalq Allah)",
        explanation:
          "Islamic scholars permit gene therapy targeting somatic cells to cure illnesses like sickle cell disease. However, editing germline embryos intended for gestation is prohibited because it permanently alters the human genome across generations, opening the door to eugenics and designer babies.",
      },
      {
        question: "Why did major Islamic Fiqh councils prohibit Mitochondrial Replacement Therapy (the 'three-parent baby' IVF technique)?",
        options: [
          "Because mitochondria contain no biological function",
          "Because introducing third-party donor mitochondrial DNA introduces genetic material from an external woman into the embryo, violating the Shariah principle of strictly bilateral parental lineage (Hifz al-Nasb)",
          "Because electricity is used in the laboratory",
          "Because three-parent IVF is too inexpensive",
        ],
        correctAnswer: "Because introducing third-party donor mitochondrial DNA introduces genetic material from an external woman into the embryo, violating the Shariah principle of strictly bilateral parental lineage (Hifz al-Nasb)",
        explanation:
          "Islamic jurisprudence requires that an embryo's genetic makeup derive exclusively from the legal husband and wife. Introducing donor mitochondrial DNA creates ethical ambiguities over maternal genetic contribution and lineage integrity.",
      },
      {
        question: "What is the stance of the Islamic Fiqh Academy regarding anencephalic infants (babies born without higher cerebral cortex) as prospective organ donors?",
        options: [
          "Their organs may be harvested immediately at birth regardless of vital signs",
          "They are living human beings with full sanctity; organs cannot be retrieved until spontaneous complete cessation of brainstem function or cardiac death occurs naturally",
          "They are classified as non-human in Islamic law",
          "Physicians are legally required to actively terminate them",
        ],
        correctAnswer: "They are living human beings with full sanctity; organs cannot be retrieved until spontaneous complete cessation of brainstem function or cardiac death occurs naturally",
        explanation:
          "Islamic Fiqh Academy Resolution No. 46 affirmed that anencephalic babies cannot have their lives prematurely ended or organs harvested while their brainstem maintains spontaneous breathing and heartbeat, preserving human sanctity until confirmed death.",
      },
      {
        question: "Under what jurisprudential criteria may Artificial Nutrition and Hydration (ANH) via feeding tubes be withdrawn or withheld from a patient in an irreversible persistent vegetative state (PVS)?",
        options: [
          "It must always be maintained forever, even if the body is decaying",
          "When certified by a multidisciplinary medical committee that the intervention is medically futile, provides no therapeutic benefit, and merely prolongs the biological process of dying rather than sustaining meaningful life",
          "Whenever the family expresses financial hardship",
          "Whenever hospital bed occupancy reaches 100%",
        ],
        correctAnswer: "When certified by a multidisciplinary medical committee that the intervention is medically futile, provides no therapeutic benefit, and merely prolongs the biological process of dying rather than sustaining meaningful life",
        explanation:
          "Many contemporary jurists (including the Islamic Organization for Medical Sciences) classify artificial enteral/parenteral tube feeding as a medical intervention rather than basic sustenance. If physicians verify it causes harm or futilely prolongs dying, withholding it is permissible.",
      },
      {
        question: "In bioethical triage during extreme disaster scenarios (such as ventilator shortages during a pandemic), which Islamic legal maxim guides resource allocation?",
        options: [
          "Al-Ghurmu bil-Ghunm (Risk belongs to the gainer)",
          "Irtikab akhaf al-dararayn (Choosing the lesser of two evils to ward off the greater harm) by allocating resources based on clinical prognosis and maximum lives saved rather than wealth or social status",
          "Al-Bay'atan fi bay'ah (Two sales in one contract)",
          "Al-Aslu fil-ashya' al-Ibahah (The default in objects is permissibility)",
        ],
        correctAnswer: "Irtikab akhaf al-dararayn (Choosing the lesser of two evils to ward off the greater harm) by allocating resources based on clinical prognosis and maximum lives saved rather than wealth or social status",
        explanation:
          "When medical supplies cannot treat all patients, Islamic law applies 'Akhaf al-Dararayn' and 'Dir' al-Mafasid': triage must strictly rely on objective medical clinical indicators (survival likelihood and maximizing lives saved), strictly prohibiting discrimination by age, social rank, or wealth.",
      },
      {
        question: "What is the Shariah ruling on pharmaceutical companies providing monetary kickbacks, luxury gifts, or sponsored recreational trips to physicians to incentivize prescribing their brand medications?",
        options: [
          "Permissible as customary commercial marketing discounts",
          "Strictly prohibited (Haram) as a form of bribery (Rishwah) and breach of trust (Khiyanat al-Amanah), based on the hadith: 'Gifts to employees/officials are fraud/embezzlement'",
          "Permissible if the physician donates half to charity",
          "Permissible if the drug is manufactured in a Muslim country",
        ],
        correctAnswer: "Strictly prohibited (Haram) as a form of bribery (Rishwah) and breach of trust (Khiyanat al-Amanah), based on the hadith: 'Gifts to employees/officials are fraud/embezzlement'",
        explanation:
          "In Musnad Ahmad, the Prophet (PBUH) declared: 'Gifts given to officials are bribery (Ghulul).' Such incentives corrupt medical impartiality, violate fiduciary duties to patients, and artificially increase healthcare costs, rendering them strictly unlawful.",
      },
      {
        question: "What is the Islamic bioethical ruling regarding Xenotransplantation (transplanting animal organs or tissues, such as porcine bioprosthetic heart valves, into humans)?",
        options: [
          "Universally prohibited under all circumstances because all animals are impure",
          "Permissible under clinical necessity (Darurah) when no viable human donor organ or biocompatible synthetic alternative exists, as preserving human life overrides the prohibition of using impure substances",
          "Permitted only if the animal was slaughtered facing the Qiblah",
          "Permissible for entertainment purposes",
        ],
        correctAnswer: "Permissible under clinical necessity (Darurah) when no viable human donor organ or biocompatible synthetic alternative exists, as preserving human life overrides the prohibition of using impure substances",
        explanation:
          "Under the principle 'Necessities make permissible what is forbidden' (Al-Darurat tubih al-mahzurat), the Islamic Organization for Medical Sciences (IOMS) and major Fiqh academies ruled that animal valves/tissues are lawful to save human life when no alternative is available.",
      },
      {
        question: "What is the juristic controversy regarding the definition of 'Death' between whole-brain death criteria and traditional cardiopulmonary cessation in Islamic jurisprudence?",
        options: [
          "There has never been any scholarly debate",
          "While major international Fiqh councils recognize total irreversible brainstem cessation as legal death, some classical-oriented scholars require permanent cessation of heartbeat and respiration before declaring death or removing organs",
          "Brain death is accepted only for non-Muslims",
          "Traditional scholars declare death solely through astrology",
        ],
        correctAnswer: "While major international Fiqh councils recognize total irreversible brainstem cessation as legal death, some classical-oriented scholars require permanent cessation of heartbeat and respiration before declaring death or removing organs",
        explanation:
          "While the OIC Fiqh Academy (1986) affirmed brain death as legal death, eminent scholars (including Shaykh Ibn Uthaymeen and certain juristic assemblies) maintained caution, requiring complete cessation of the cardiovascular system before treating the person as deceased for inheritance and organ retrieval.",
      },
      {
        question: "What is the Islamic bioethical view on 'Transhumanism' and radical technological cognitive/physical enhancements for healthy humans?",
        options: [
          "Fully embraced as an obligatory religious goal",
          "Critiqued and rejected as hubristic attempts to transcend human nature (Fitrah), alter Allah's creation (Taghyir khalq Allah), and create profound social inequalities, distinguishing therapy (Tadawi) from unnatural enhancement",
          "Permitted provided the computer chips run open-source software",
          "Viewed as an established Sunnah of previous prophets",
        ],
        correctAnswer: "Critiqued and rejected as hubristic attempts to transcend human nature (Fitrah), alter Allah's creation (Taghyir khalq Allah), and create profound social inequalities, distinguishing therapy (Tadawi) from unnatural enhancement",
        explanation:
          "Islamic bioethics draws a firm line between restorative therapy (treating illness, correcting disability, restoring health) and radical transhumanist enhancements (cyborgization, defeating natural mortality). The latter violates the concept of human creatureliness and the divine design.",
      },
    ],
  },
}

export default  medicalEthicsCategory;
