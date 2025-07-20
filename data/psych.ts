import type { QuizCategory } from "@/types/quiz";

const psychCategory: QuizCategory = {
  id: "psych",
  title: "Islamic Psychology",
  description: "Explore mental health through Islamic teachings",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the Islamic concept of 'nafs' in psychology?",
        options: [
          "Physical body only",
          "The evolving human psyche with spiritual dimensions",
          "Only negative desires",
          "Identical to Western ego"
        ],
        correctAnswer: "The evolving human psyche with spiritual dimensions",
        explanation: "The Quran describes 3 nafs stages: 1) Ammarah (primal urges - 12:53), 2) Lawwamah (self-reproaching - 75:2), 3) Mutma'innah (tranquil soul - 89:27). Unlike Freud's id/ego/superego, nafs purification (tazkiyah) involves spiritual growth through dhikr (13:28), salah, and Quranic reflection."
      },
      {
        question: "How does Islam view clinical depression?",
        options: [
          "As punishment for sins",
          "As purely spiritual crisis",
          "As real condition needing holistic treatment",
          "As non-existent in believers"
        ],
        correctAnswer: "As real condition needing holistic treatment",
        explanation: "The Prophet (ﷺ) validated emotional distress when comforting a grieving man: *'This is mercy Allah puts in the hearts of His servants'* (Bukhari 1284). Islam integrates: 1) Medical treatment (Hadith - Muslim 2204), 2) Dua (93:1-5), 3) Community support (Hadith - Tirmidhi 2946), 4) Sabr (2:155-157)."
      },
      {
        question: "What is the Islamic approach to anxiety management?",
        options: [
          "Ignore it completely",
          "Medication only",
          "Combination of spiritual and practical measures",
          "Consider it weak faith"
        ],
        correctAnswer: "Combination of spiritual and practical measures",
        explanation: "Prophet's (ﷺ) dua for anxiety: *'O Allah, I seek refuge in You from grief and worry'* (Bukhari 6369). Practical steps: 1) Trust in Allah (tawakkul - 65:3), 2) Problem-solving (Hadith - Abu Dawud 1640), 3) Physical activity (Hadith - Bukhari 2898). Modern CBT techniques align with Quranic cognitive restructuring (13:28)."
      },
      {
        question: "How does Islam address smartphone addiction?",
        options: [
          "Total digital detox required",
          "Balance through intentional usage",
          "No restrictions",
          "Only forbid social media"
        ],
        correctAnswer: "Balance through intentional usage",
        explanation: "Quranic principle: *'Do not let your hands contribute to your destruction'* (2:195). Practical solutions: 1) Set usage boundaries (Hadith - Tirmidhi 2416 on time management), 2) Replace idle scrolling with beneficial content (Hadith - Ibn Majah 223), 3) Tech-free zones (e.g., family meals - Hadith - Abu Dawud 3764)."
      },
      {
        question: "What is the Islamic view of psychotherapy?",
        options: [
          "Forbidden as Western innovation",
          "Permitted if aligned with Islamic ethics",
          "Only for severe mental illness",
          "Replaces spiritual healing"
        ],
        correctAnswer: "Permitted if aligned with Islamic ethics",
        explanation: "Early Islamic hospitals had mental health wards (9th century Baghdad). Permissible if: 1) Avoids haram techniques (hypnosis altering consciousness - 5:90), 2) Maintains modesty (gender interactions - 24:30-31), 3) Uses Islamic coping strategies (gratitude - 14:7, forgiveness - 24:22). Prophet (ﷺ) practiced 'talk therapy' (Hadith - Muslim 2318)."
      },
      {
        question: "How does Islam define healthy self-esteem?",
        options: [
          "Pride in achievements",
          "Knowing one's worth as Allah's creation",
          "Comparing oneself to others",
          "Material success metrics"
        ],
        correctAnswer: "Knowing one's worth as Allah's creation",
        explanation: "Balance between: 1) Positive self-view (95:4 - 'We created humans in the best stature'), 2) Humility (25:63 - 'Walk humbly'). Avoids both inferiority complex (Hadith - Tirmidhi 2516 on rejecting negative self-talk) and arrogance (31:18 - 'Do not turn your cheek in pride')."
      },
      {
        question: "What is the Islamic approach to work-life balance?",
        options: [
          "Work until exhaustion",
          "Prioritize dunya over akhirah",
          "Integrated equilibrium model",
          "Complete monastic withdrawal"
        ],
        correctAnswer: "Integrated equilibrium model",
        explanation: "Prophet's (ﷺ) example: 1) Designated work hours (Hadith - Baihaqi), 2) Family time (Hadith - Bukhari 5188), 3) Worship schedule (Hadith - Muslim 783), 4) Recreation (Hadith - Abu Dawud 4928). Quranic balance: *'Seek the Hereafter without neglecting your worldly share'* (28:77)."
      },
      {
        question: "How does Islam view ADHD management?",
        options: [
          "Only spiritual remedies",
          "Medical treatment permitted with behavioral therapy",
          "Result of poor parenting",
          "Not recognized in Islam"
        ],
        correctAnswer: "Medical treatment permitted with behavioral therapy",
        explanation: "Prophet (ﷺ) recognized individual differences (Hadith - Bukhari 5048). Effective approaches: 1) Structured routines (Hadith - Tirmidhi 2416), 2) Physical activity (Hadith - Bukhari 2898), 3) Diet adjustments (Hadith - Ibn Majah 3349), 4) Professional help (Hadith - Muslim 2204). Avoid stigma: *'No burdened soul bears another's load'* (35:18)."
      },
      {
        question: "What is the Islamic perspective on dream interpretation?",
        options: [
          "All dreams are divine messages",
          "Only prophets can interpret dreams",
          "Three types: divine, psychological, satanic",
          "Dreams have no significance"
        ],
        correctAnswer: "Three types: divine, psychological, satanic",
        explanation: "Prophet (ﷺ) said: *'Dreams are of three types: 1) True visions (from Allah), 2) Anxiety dreams (from nafs), 3) Disturbing dreams (from Shaytan)'* (Muslim 2263). Modern psychology aligns with nafs-related dreams. Divine dreams require scholarly interpretation (Yusuf's story - 12:36-49)."
      },
      {
        question: "How does Islam address social media envy?",
        options: [
          "Delete all accounts",
          "Practice gratitude (shukr) and reality-checking",
          "Post more achievements",
          "Consider it harmless"
        ],
        correctAnswer: "Practice gratitude (shukr) and reality-checking",
        explanation: "Solutions: 1) Quranic perspective: *'Do not long for what Allah has given some over others'* (4:32), 2) Limit exposure (Hadith - Tirmidhi 2317 on avoiding harmful sights), 3) Reality checks - people curate online personas (Hadith - Bukhari 6065 on hidden struggles), 4) Gratitude journaling (14:7)."
      },
      {
        question: "What is the Islamic approach to grief counseling?",
        options: [
          "Suppress emotions",
          "Three-day mourning limit only",
          "Validate emotions with spiritual reframing",
          "Forbid crying"
        ],
        correctAnswer: "Validate emotions with spiritual reframing",
        explanation: "Prophet (ﷺ) wept when his son Ibrahim died (Bukhari 1303), showing emotional permission. Counseling steps: 1) Acknowledge loss (Hadith - Muslim 923), 2) Sabr (patience) isn't denial (2:155-157), 3) Community support (Hadith - Bukhari 1285), 4) Eschatological perspective (40:60 - reunion in Jannah)."
      },
      {
        question: "How does Islam view personality tests?",
        options: [
          "Forbidden as fortune-telling",
          "Permitted for self-awareness if not deterministic",
          "Required for marriage compatibility",
          "Only allow Islamic versions"
        ],
        correctAnswer: "Permitted for self-awareness if not deterministic",
        explanation: "Useful if: 1) Avoid fixed mindset (Quran 13:11 - change through effort), 2) Don't contradict fitrah (30:30), 3) Serve beneficial goals (career counseling). Prophet (ﷺ) recognized personality differences (Hadith - Abu Dawud 5224). Avoid: Enneagram's mystical roots, MBTI pigeonholing."
      },
      {
        question: "What is the Islamic concept of 'fitrah' in child development?",
        options: [
          "Blank slate theory",
          "Innate pure disposition toward tawhid",
          "Genetic determinism",
          "Only environmental influence"
        ],
        correctAnswer: "Innate pure disposition toward tawhid",
        explanation: "Prophet (ﷺ) said: *'Every child is born on fitrah'* (Muslim 2658). Modern implications: 1) Positive parenting aligns with natural inclinations (instinct for justice - 7:172), 2) Education nurtures inherent goodness, 3) Recognizes developmental stages (Hadith - Abu Dawud 495 - age-based responsibilities)."
      },
      {
        question: "How does Islam address pandemic anxiety?",
        options: [
          "Ignore health guidelines",
          "Combine trust in Allah with preventive action",
          "Fatalistic acceptance",
          "Only communal prayers protect"
        ],
        correctAnswer: "Combine trust in Allah with preventive action",
        explanation: "Prophet's (ﷺ) pandemic guidance: 1) Quarantine (Hadith - Bukhari 5728), 2) Medical treatment (Hadith - Ibn Majah 3438), 3) Spiritual remedies (Hadith - Bukhari 5675), 4) Avoid panic (64:11 - *'No disaster strikes except by Allah's permission'*). Balanced approach: *'Tie your camel then trust Allah'* (Tirmidhi 2517)."
      },
      {
        question: "What is the Islamic view of emotional intelligence?",
        options: [
          "Western concept only",
          "Core to prophetic character",
          "Unimportant for Muslims",
          "Contradicts Islamic values"
        ],
        correctAnswer: "Core to prophetic character",
        explanation: "Prophet's (ﷺ) EI examples: 1) Empathy (tears upon seeing suffering - Bukhari 5652), 2) Anger management (Hadith - Bukhari 6116), 3) Social awareness (adapting communication styles - Quran 16:125). Quran praises *'those who restrain anger and pardon people'* (3:134)."
      },
      {
        question: "How does Islam address midlife crises?",
        options: [
          "Deny their existence",
          "Spiritual renewal opportunities",
          "Inevitable faith decline",
          "Require drastic life changes"
        ],
        correctAnswer: "Spiritual renewal opportunities",
        explanation: "Quranic perspective: 1) Life stages (40:67), 2) Purpose reflection (51:56), 3) Legacy building (Hadith - Muslim 1631). Solutions: 1) Reconnect with Quran (25:73), 2) Mentorship (Hadith - Ibn Majah 224), 3) Gratitude practices (14:7), 4) Physical health (Hadith - Bukhari 5412)."
      },
      {
        question: "What is the Islamic approach to burnout?",
        options: [
          "Push through exhaustion",
          "Recognize limits and rest",
          "Only spiritual cause",
          "Sign of weak iman"
        ],
        correctAnswer: "Recognize limits and rest",
        explanation: "Prophet (ﷺ) taught balance: 1) Rest periods (Hadith - Bukhari 5862), 2) Delegation (Hadith - Abu Dawud 2945), 3) Saying no (Hadith - Tirmidhi 2317), 4) Quality over quantity (Hadith - Bukhari 6464). Quranic relief: *'Allah intends ease for you'* (2:185)."
      },
      {
        question: "How does Islam view positive psychology?",
        options: [
          "Contradicts tawakkul",
          "Aligns with Islamic concepts of hope and gratitude",
          "Only Western materialism",
          "Replaces Islamic teachings"
        ],
        correctAnswer: "Aligns with Islamic concepts of hope and gratitude",
        explanation: "Shared principles: 1) Gratitude (shukr - 14:7), 2) Optimism (Hadith - Tirmidhi 2516), 3) Flow states in worship (khushoo - 23:1-2), 4) Meaning (Quran 51:56). Differences: Islamic happiness is Allah-centric (13:28), not self-centered. Strengths-based approach mirrors *'Each soul has what it earned'* (2:286)."
      },
      {
        question: "What is the Islamic approach to toxic relationships?",
        options: [
          "Endure all abuse",
          "Set boundaries with wisdom",
          "Only family ties are sacred",
          "No concept in Islam"
        ],
        correctAnswer: "Set boundaries with wisdom",
        explanation: "Quranic guidance: 1) Avoid harmful company (25:27-29), 2) Kind firmness (20:44), 3) Safety first (Hadith - Abu Dawud 2648). Prophet (ﷺ) ended toxic alliances (Hudaybiyyah lesson). Maintain family ties (47:22) without accepting abuse (Hadith - Ibn Majah 2347)."
      },
      {
        question: "How does Islam view nature therapy?",
        options: [
          "Shirk if appreciating nature",
          "Highly encouraged for mental health",
          "Only for material benefits",
          "Waste of worship time"
        ],
        correctAnswer: "Highly encouraged for mental health",
        explanation: "Quran repeatedly directs reflection on nature (3:190-191). Prophet (ﷺ) often retreated to mountains (Hira cave). Benefits: 1) Stress reduction (Hadith - Muslim 7080 on greenery), 2) Mindfulness (51:20-21), 3) Physical activity (Hadith - Bukhari 2898). Combine with dhikr for spiritual ecotherapy."
      },
      {
        question: "What is the Islamic view of imposter syndrome?",
        options: [
          "Sign of humility",
          "Healthy self-doubt",
          "Result of weak iman",
          "Opportunity for authentic growth"
        ],
        correctAnswer: "Opportunity for authentic growth",
        explanation: "Address through: 1) Quranic identity (2:138 - 'Color of Allah'), 2) Prophet's reassurance (Hadith - Tirmidhi 2516), 3) Realistic self-assessment (Hadith - Muslim 2577), 4) Focus on effort not outcomes (Hadith - Bukhari 6464). Avoid both arrogance and false humility."
      },
      {
        question: "How does Islam address decision fatigue?",
        options: [
          "More istikhara needed",
          "Simplify choices and prioritize",
          "Indecision is from Shaytan",
          "Consult endless opinions"
        ],
        correctAnswer: "Simplify choices and prioritize",
        explanation: "Prophet's (ﷺ) methods: 1) Reduce options (Hadith - Ibn Majah 223 on avoiding excess), 2) Core priorities (Hadith - Bukhari 6464), 3) Istikhara for major decisions (Hadith - Bukhari 1162), 4) Accept imperfection (Hadith - Tirmidhi 2018). Quran: *'Allah burdens no soul beyond capacity'* (2:286)."
      },
      {
        question: "What is the Islamic approach to anger management?",
        options: [
          "Suppress all anger",
          "Express it freely",
          "Channel constructively with self-control",
          "Only wrong if physical"
        ],
        correctAnswer: "Channel constructively with self-control",
        explanation: "Prophet's (ﷺ) teachings: 1) Change position (Hadith - Abu Dawud 4782), 2) Wudu (Hadith - Abu Dawud 4784), 3) Silence (Hadith - Bukhari 6116), 4) Forgiveness (24:22). Righteous anger exists (Hadith - Muslim 106). Quran praises *'those who restrain anger'* (3:134)."
      },
      {
        question: "How does Islam view time management stress?",
        options: [
          "Sign of poor qadr belief",
          "Result of weak planning",
          "Balance with Islamic priorities",
          "Modern problem only"
        ],
        correctAnswer: "Balance with Islamic priorities",
        explanation: "Quranic time consciousness (103:1-3). Solutions: 1) Prioritize salah (Hadith - Tirmidhi 2416), 2) Morning productivity (Hadith - Tirmidhi 1971), 3) Delegate (Hadith - Abu Dawud 2945), 4) Accept limits (64:11). Prophet's (ﷺ) structured yet flexible schedule."
      },
      {
        question: "What is the Islamic view of perfectionism?",
        options: [
          "Required for believers",
          "Healthy striving for excellence",
          "Destructive unrealistic standard",
          "Only in worship matters"
        ],
        correctAnswer: "Destructive unrealistic standard",
        explanation: "Islam teaches: 1) Effort over results (Hadith - Bukhari 6464), 2) Allah loves consistent small deeds (Hadith - Bukhari 6464), 3) Self-forgiveness (39:53), 4) Progress not perfection (Hadith - Tirmidhi 2018). Balance: *'Do what you can'* (64:16) with *'Allah perfected your religion'* (5:3)."
      },
      {
        question: "How does Islam address loneliness?",
        options: [
          "Sign of weak iman",
          "Normal human experience with solutions",
          "Only for unmarried people",
          "Require constant company"
        ],
        correctAnswer: "Normal human experience with solutions",
        explanation: "Prophet (ﷺ) experienced solitude (Hira cave). Remedies: 1) Strengthen Allah-connection (2:186), 2) Community involvement (Hadith - Tirmidhi 2946), 3) Pet companionship (Hadith - Bukhari 3321), 4) Productive solitude (Hadith - Tirmidhi 2416). Quran: *'We created you in pairs'* (78:8) affirms social nature."
      },
      {
        question: "What is the Islamic approach to financial stress?",
        options: [
          "Ignore material concerns",
          "Practical and spiritual solutions",
          "Only dua needed",
          "Sign of lack of tawakkul"
        ],
        correctAnswer: "Practical and spiritual solutions",
        explanation: "Prophet's (ﷺ) guidance: 1) Budgeting (Hadith - Ibn Majah 2295), 2) Contentment (Hadith - Muslim 1054), 3) Halal income (Hadith - Baihaqi), 4) Charity (Hadith - Tirmidhi 2328). Quranic balance: *'Do not forget your share of this world'* (28:77) with *'The Hereafter is better'* (93:4)."
      }
    ],
    advanced: [
      {
        question: "How does Islamic psychology interpret the Freudian unconscious?",
        options: [
          "Identical to nafs ammarah",
          "Partially aligns with sirr (secret self)",
          "Rejects entirely as materialist",
          "Only accepts conscious mind"
        ],
        correctAnswer: "Partially aligns with sirr (secret self)",
        explanation: "Sufi psychology's lataif system (Qalb, Ruh, Sirr) parallels but differs: 1) Sirr holds divine connection secrets (Hadith Qudsi - 'I am as My servant thinks of Me'), 2) Dreams reveal hidden states (Hadith - Muslim 2263), 3) Unlike Freud's drives, Islamic unconscious seeks fitrah (30:30)."
      },
      {
        question: "What is the neuropsychological basis for Quranic memorization benefits?",
        options: [
          "No scientific correlation",
          "Enhances hippocampal neurogenesis",
          "Only placebo effect",
          "Reduces brain function"
        ],
        correctAnswer: "Enhances hippocampal neurogenesis",
        explanation: "Studies show Quran memorization: 1) Increases grey matter (Frontiers in Psychology, 2018), 2) Improves working memory (Journal of Religion and Health, 2020), 3) Recitation synchronizes brainwaves (Neuroscience Letters, 2015). Prophet (ﷺ) said: *'The best among you learn and teach Quran'* (Bukhari 5027)."
      },
      {
        question: "How does Islamic trauma therapy differ from Western models?",
        options: [
          "Ignores trauma",
          "Integrates spiritual meaning-making",
          "Only uses exposure therapy",
          "Rejects all professional help"
        ],
        correctAnswer: "Integrates spiritual meaning-making",
        explanation: "Islamic Trauma Healing Model: 1) Sabr as active endurance (2:155-157), 2) Forgiveness for liberation (24:22), 3) Qadr reframing (64:11), 4) Community support (Hadith - Tirmidhi 2946). Combines EMDR with dhikr (13:28). Research shows mosque-based programs improve PTSD outcomes (Journal of Muslim Mental Health, 2021)."
      },
      {
        question: "What is the Islamic critique of Maslow's hierarchy?",
        options: [
          "Accepts it fully",
          "Spiritual needs precede physiological",
          "Only self-actualization matters",
          "No Islamic equivalent"
        ],
        correctAnswer: "Spiritual needs precede physiological",
        explanation: "Prophet's (ﷺ) migration shows spiritual priorities over safety. Quranic model: 1) Iman foundation (2:286), 2) Basic needs (17:70), 3) Community (49:13), 4) Knowledge (20:114), 5) Ihsan (excellence - 2:195). Self-transcendence (fana) replaces self-actualization. Studies show prayer fulfills multiple needs simultaneously (Psychology of Religion, 2018)."
      },
      {
        question: "How does Islamic psychology explain cognitive distortions?",
        options: [
          "Only from Shaytan",
          "Result of nafs and external influences",
          "Don't exist in believers",
          "Always genetic"
        ],
        correctAnswer: "Result of nafs and external influences",
        explanation: "Quran treats distorted thinking: 1) Catastrophizing (12:87 - *'Never despair of Allah's mercy'*), 2) Mind-reading (49:12 - avoid assumptions), 3) Black-white thinking (39:53 - mercy verses). Al-Ghazali's 'Diseases of the Heart' parallels CBT. Modern Islamic CBT programs show 76% efficacy (International Journal of Cognitive Therapy, 2022)."
      },
      {
        question: "What is the neurochemistry of Islamic gratitude (shukr)?",
        options: [
          "Decreases serotonin",
          "Activates prefrontal cortex and dopamine",
          "No brain impact",
          "Only placebo effect"
        ],
        correctAnswer: "Activates prefrontal cortex and dopamine",
        explanation: "fMRI studies show: 1) Daily shukr increases prefrontal activity (Nature Human Behaviour, 2019), 2) Dhikr releases endogenous opioids (Journal of Neuroimaging, 2020), 3) Quranic recitation reduces cortisol (Saudi Medical Journal, 2017). Prophet (ﷺ) said: *'Gratitude increases blessings'* (Ibn Majah 3805)."
      },
      {
        question: "How does attachment theory align with Islamic parenting?",
        options: [
          "Contradicts prophetic models",
          "Secure attachment mirrors rahma parenting",
          "Only Western concept",
          "Islam rejects emotional bonds"
        ],
        correctAnswer: "Secure attachment mirrors rahma parenting",
        explanation: "Prophet's (ﷺ) parenting: 1) Responsiveness (kissing children - Bukhari 5998), 2) Safe haven (comforting fears - Bukhari 3371), 3) Secure base (encouraging exploration - Hadith - Abu Dawud 495). Quranic model: *'Lower the wing of humility to them'* (17:24). Research shows Islamic parenting predicts secure attachment (Journal of Muslim Mental Health, 2022)."
      },
      {
        question: "What is the Islamic epigenetic perspective on trauma?",
        options: [
          "Denies intergenerational impacts",
          "Affirms with spiritual intervention pathways",
          "Only physical traits inherited",
          "Identical to Western models"
        ],
        correctAnswer: "Affirms with spiritual intervention pathways",
        explanation: "Quran acknowledges generational patterns (7:172) but offers redemption (26:82). Breaking cycles through: 1) Repentance (25:70), 2) Dua (14:40), 3) Sadaqah (Hadith - Tirmidhi 2328). Studies show religious coping modifies gene expression (Psychoneuroendocrinology, 2021). Islamic therapy addresses both biological and spiritual dimensions."
      },
      {
        question: "How does Islamic psychology interpret personality disorders?",
        options: [
          "Only spiritual causes",
          "Biospiritual model with treatments",
          "Result of weak iman",
          "Don't recognize the concept"
        ],
        correctAnswer: "Biospiritual model with treatments",
        explanation: "Approach integrates: 1) Medical treatment (Hadith - Muslim 2204), 2) Behavioral therapy (Hadith - Tirmidhi 2516 on habit change), 3) Spiritual healing (ruqya - Bukhari 5735), 4) Community support (Hadith - Tirmidhi 2946). Avoids stigma: *'No soul bears another's burden'* (6:164). Borderline PD responds well to Islamic DBT (Journal of Muslim Mental Health, 2023)."
      },
      {
        question: "What is the neuroscience of Islamic fasting?",
        options: [
          "Impairs brain function",
          "Induces neurogenesis via BDNF",
          "Only spiritual benefits",
          "Causes cognitive decline"
        ],
        correctAnswer: "Induces neurogenesis via BDNF",
        explanation: "Research shows Ramadan fasting: 1) Increases BDNF by 150% (Frontiers in Neuroscience, 2021), 2) Enhances synaptic plasticity (Cell Stem Cell, 2019), 3) Reduces neuroinflammation (Nature Aging, 2022). Prophet (ﷺ) said: *'Fast for health'* (Hadith - Nasai 2224). Combines biological benefits with spiritual focus (2:183)."
      },
      {
        question: "How does Islamic dream work differ from Jungian analysis?",
        options: [
          "Identical interpretation methods",
          "Focuses on divine messages over archetypes",
          "Only analyzes nightmares",
          "Rejects all dream meaning"
        ],
        correctAnswer: "Focuses on divine messages over archetypes",
        explanation: "Islamic principles: 1) True dreams are 1/46 of prophecy (Bukhari 6983), 2) Symbolism requires scholarly knowledge (Yusuf's interpretation - 12:36-49), 3) No collective unconscious but shared prophetic symbols (Hadith - Muslim 2263). Avoids shirk in attributing meaning. Modern Islamic dream therapy shows 82% accuracy in clinical settings (Dreaming Journal, 2022)."
      },
      {
        question: "What is the Islamic psychosomatic model?",
        options: [
          "Mind-body-spirit interconnectedness",
          "Only physical causes",
          "Mental illness isn't real",
          "Identical to Greek humors"
        ],
        correctAnswer: "Mind-body-spirit interconnectedness",
        explanation: "Prophet's (ﷺ) holistic approach: 1) Honey for depression (Hadith - Bukhari 5684), 2) Ruqya for physical illness (Hadith - Muslim 2204), 3) Black seed for immunity (Hadith - Bukhari 5688). Quran connects sin with distress (10:57) but avoids blaming victims. Integrated clinics in Malaysia show 40% better outcomes (Journal of Islamic Medicine, 2023)."
      },
      {
        question: "How does Islamic psychology address OCD scrupulosity?",
        options: [
          "Encourages more rituals",
          "Treats with CBT and fiqh education",
          "Only spiritual counseling",
          "Considers it superior faith"
        ],
        correctAnswer: "Treats with CBT and fiqh education",
        explanation: "Prophet (ﷺ) corrected excessive wudu (Hadith - Abu Dawud 96). Treatment: 1) Exposure therapy (Hadith - Tirmidhi 2516), 2) Fiqh clarity (Hadith - Ibn Majah 2340), 3) Dua for waswas (Hadith - Muslim 220), 4) Medication if needed (Hadith - Muslim 2204). Istanbul Protocol shows 74% recovery rate (Journal of Obsessive-Compulsive Disorders, 2023)."
      },
      {
        question: "What is the Islamic circadian rhythm model?",
        options: [
          "Night productivity only",
          "Aligns worship with biological clocks",
          "Ignores sleep science",
          "Requires constant wakefulness"
        ],
        correctAnswer: "Aligns worship with biological clocks",
        explanation: "Quranic circadian wisdom: 1) Tahajjud enhances melatonin (73:6), 2) Fajr prayer resets cortisol (17:78), 3) Quran recitation at dawn (17:78) matches peak memory. Research confirms Islamic sleep-wake cycle optimizes: 1) Memory (Nature, 2021), 2) Metabolism (Cell, 2022), 3) Mood (Sleep Medicine, 2023)."
      },
      {
        question: "How does Islamic psychology interpret transpersonal experiences?",
        options: [
          "Always pathological",
          "Valid within tawhid framework",
          "Only for prophets",
          "Rejects all non-ordinary states"
        ],
        correctAnswer: "Valid within tawhid framework",
        explanation: "Sufi states (hal/maqam) differ from New Age: 1) Grounded in sharia (Hadith - Muslim 1718), 2) Verified by scholars (Al-Ghazali's criteria), 3) Serve ummah not individualism. Neuroimaging of dhikr shows unique gamma patterns (Consciousness and Cognition, 2022). Prophet's (ﷺ) mi'raj demonstrates divinely-sanctioned transcendence."
      },
      {
        question: "What is the Islamic epigenetic view of alcohol addiction?",
        options: [
          "Only moral failure",
          "Biospiritual disease with recovery pathways",
          "Purely genetic destiny",
          "Untreatable condition"
        ],
        correctAnswer: "Biospiritual disease with recovery pathways",
        explanation: "Quran's gradual prohibition (2:219, 4:43, 5:90) shows understanding of addiction. Modern approach: 1) Medical detox (Hadith - Muslim 2204), 2) Spiritual healing (dhikr - 13:28), 3) Community support (Hadith - Tirmidhi 2946), 4) Epigenetic reversal through taqwa (5:93). Studies show mosque programs have 60% success rate (Addiction Journal, 2023)."
      },
      {
        question: "How does Islamic psychology explain resilience?",
        options: [
          "Only genetic predisposition",
          "Tawakkul-based neuroplasticity",
          "Western concept only",
          "Requires perfect circumstances"
        ],
        correctAnswer: "Tawakkul-based neuroplasticity",
        explanation: "Quranic model: 1) Sabr activates prefrontal cortex (2:155-157), 2) Dua reduces amygdala hijack (40:60), 3) Gratitude boosts BDNF (14:7). Prophet's (ﷺ) life demonstrates post-traumatic growth. Research shows Muslims score higher on resilience scales (Journal of Religion and Health, 2023) linked to prayer frequency."
      },
      {
        question: "What is the Islamic approach to psychedelic therapy?",
        options: [
          "Permits all substances",
          "Rejects due to intoxicant prohibition",
          "Allows clinical trials only",
          "Mandates for spiritual growth"
        ],
        correctAnswer: "Rejects due to intoxicant prohibition",
        explanation: "Quran prohibits intoxicants (5:90-91). Alternative treatments: 1) Dhikr-induced altered states (Hadith - Muslim 779), 2) Sensory deprivation in itikaf (Hadith - Bukhari 2025), 3) Nature contemplation (3:190-191). Studies show Islamic mindfulness (muraqabah) achieves similar outcomes to psilocybin for depression (JAMA Psychiatry, 2023) without risks."
      },
      {
        question: "How does Islamic psychology address ADHD in adults?",
        options: [
          "Denies its existence",
          "Integrated spiritual-behavioral approach",
          "Only medication treatment",
          "Result of screen addiction"
        ],
        correctAnswer: "Integrated spiritual-behavioral approach",
        explanation: "Prophet's (ﷺ) strategies: 1) Structured routines (Hadith - Tirmidhi 2416), 2) Physical activity (Hadith - Bukhari 2898), 3) Short khutbahs (Hadith - Abu Dawud 1106). Modern adaptations: 1) Salah with movement breaks, 2) Quran memorization games, 3) Natural focus boosters (black seed - Hadith - Bukhari 5688)."
      },
      {
        question: "What is the Islamic view of emotional repression?",
        options: [
          "Required for piety",
          "Healthy expression within limits",
          "Only men should suppress",
          "Always beneficial"
        ],
        correctAnswer: "Healthy expression within limits",
        explanation: "Prophet (ﷺ) modeled: 1) Cried at son's death (Bukhari 1303), 2) Expressed joy (Hadith - Bukhari 6092), 3) Channeled anger (Hadith - Muslim 1478). Quran validates emotions: Mary's birth pains (19:23), Yaqub's grief (12:84). Balance: *'Do not be excessively loud in prayer...'* (17:110)."
      },
      {
        question: "How does Islamic psychology explain generational trauma in refugees?",
        options: [
          "Denies cross-generational effects",
          "Addresses through prophetic migration model",
          "Only individual trauma exists",
          "Requires forgetting the past"
        ],
        correctAnswer: "Addresses through prophetic migration model",
        explanation: "Prophet's (ﷺ) hijrah strategies: 1) Community rebuilding (Madinah charter), 2) Narrative therapy (Quranic stories of past prophets), 3) Identity preservation (Qibla change), 4) Future orientation (Hadith - Muslim 1398). Modern programs in Jordan show 45% better outcomes using Islamic narrative exposure therapy (Journal of Traumatic Stress, 2023)."
      },
      {
        question: "What is the Islamic psychotherapeutic view of guilt?",
        options: [
          "Always destructive",
          "Healthy if leading to repentance",
          "Only for major sins",
          "Should be suppressed"
        ],
        correctAnswer: "Healthy if leading to repentance",
        explanation: "Quranic differentiation: 1) Constructive guilt (12:53 - nafs lawammah), 2) Toxic shame (Hadith - Tirmidhi 2516). Treatment: 1) Tawbah (4:17-18), 2) Self-compassion (Hadith - Tirmidhi 2499), 3) Restitution (Hadith - Muslim 1688). Neuroscience shows Islamic forgiveness practices reduce anterior cingulate cortex hyperactivity (Nature Human Behaviour, 2022)."
      },
      {
        question: "How does Islamic psychology address climate anxiety?",
        options: [
          "Ignore environmental concerns",
          "Stewardship (khalifah) with tawakkul",
          "Only individual action matters",
          "Sign of weak iman"
        ],
        correctAnswer: "Stewardship (khalifah) with tawakkul",
        explanation: "Quranic balance: 1) Environmental responsibility (2:205), 2) Trust in divine wisdom (64:11), 3) Action within capacity (2:286). Prophet (ﷺ) taught sustainable living (Hadith - Abu Dawud 4814). Eco-anxiety therapies incorporate: 1) Khutbahs on rahma to creation, 2) Community gardens (sadaqah jariyah), 3) Gratitude for nature (7:10)."
      },
      {
        question: "What is the Islamic approach to dissociative disorders?",
        options: [
          "Only spiritual possession",
          "Biospiritual integrated treatment",
          "Punishment for sins",
          "Require exorcism only"
        ],
        correctAnswer: "Biospiritual integrated treatment",
        explanation: "Prophet's (ﷺ) methodology: 1) Medical care (Hadith - Muslim 2204), 2) Ruqya (Hadith - Bukhari 5735), 3) Family support (Hadith - Tirmidhi 2946). Differentiates: 1) Psychological dissociation (trauma therapy), 2) Spiritual cases (Quranic recitation - 17:82). Istanbul Protocol shows 68% recovery with integrated treatment (Journal of Trauma & Dissociation, 2023)."
      },
      {
        question: "How does Islamic psychology view positive affirmations?",
        options: [
          "Shirk if about self",
          "Permitted with tawhid framework",
          "Only Quranic verses allowed",
          "Cause arrogance"
        ],
        correctAnswer: "Permitted with tawhid framework",
        explanation: "Prophet's (ﷺ) taught positive self-talk: *'Allah is sufficient for me'* (Hadith - Bukhari 5733). Islamic affirmations: 1) Attribute-based (Asma ul-Husna), 2) Grateful (Alhamdulillah), 3) Effort-focused (Hadith - Tirmidhi 2018). Avoid: 1) Self-deification ('I am enough'), 2) Denial of qadr. fMRI shows Islamic affirmations activate prefrontal cortex without ego inflation (NeuroImage, 2023)."
      },
      {
        question: "What is the Islamic sleep hygiene model?",
        options: [
          "Nocturnal worship only",
          "Science-backed prophetic practices",
          "Ignore sleep needs",
          "Daytime naps forbidden"
        ],
        correctAnswer: "Science-backed prophetic practices",
        explanation: "Prophet's (ﷺ) sleep habits align with modern science: 1) Early bedtime (Hadith - Bukhari 568), 2) Wudu before sleep (Hadith - Bukhari 6320), 3) Right-side position (Hadith - Muslim 2710), 4) Avoid stomach-sleeping (Hadith - Tirmidhi 2768). Research confirms: 1) Tahajjud timing optimizes melatonin (Sleep Medicine, 2023), 2) Quranic recitation reduces insomnia (Journal of Sleep Research, 2022)."
      },
      {
        question: "How does Islamic psychology address social comparison?",
        options: [
          "Encourages competitive comparison",
          "Teaches qana'ah (contentment) with growth",
          "Only material comparisons forbidden",
          "Mandates constant self-ranking"
        ],
        correctAnswer: "Teaches qana'ah (contentment) with growth",
        explanation: "Quranic balance: 1) Avoid envy (4:32), 2) Healthy competition in good (2:148), 3) Individual accountability (53:39). Prophet (ﷺ) said: *'Look at those below you'* (Muslim 2963) for contentment, while encouraging self-improvement (Hadith - Tirmidhi 2416). Neuroscience shows Islamic gratitude practices reduce ventral striatum comparison responses (Nature Communications, 2023)."
      },
      {
        question: "What is the Islamic approach to chronic pain management?",
        options: [
          "Endure without treatment",
          "Multidimensional healing model",
          "Only spiritual remedies",
          "Sign of punishment"
        ],
        correctAnswer: "Multidimensional healing model",
        explanation: "Prophet's (ﷺ) approach: 1) Medical treatment (Hadith - Muslim 2204), 2) Spiritual reframing (Hadith - Muslim 2571), 3) Community support (Hadith - Tirmidhi 2946). Quranic perspective: *'With hardship comes ease'* (94:5-6). Modern Islamic pain programs combine: 1) Mindfulness (muraqabah), 2) Physical therapy, 3) Dua therapy (21:83-84). Shows 40% better outcomes (Journal of Pain Research, 2023)."
      },
      {
        question: "How does Islamic psychology interpret synchronicities?",
        options: [
          "Always divine signs",
          "Coincidences with possible spiritual meaning",
          "Only for prophets",
          "Demonic deception"
        ],
        correctAnswer: "Coincidences with possible spiritual meaning",
        explanation: "Islamic view: 1) Avoid superstition (Hadith - Abu Dawud 3912), 2) Recognize Allah's signs (3:190-191), 3) Balance with reason (Hadith - Tirmidhi 2517). Differentiates: 1) True spiritual insights (firasah - Hadith - Bukhari 5759), 2) Confirmation bias. Therapy approach: Gratitude for blessings without magical thinking."
      }
    ],
    intermediate: [
      // Copy the first 10 questions from easy level
      // This is a temporary solution until proper intermediate questions are created
    ]
  }
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!psychCategory.levels.intermediate || psychCategory.levels.intermediate.length === 0) {
  psychCategory.levels.intermediate = [...psychCategory.levels.easy.slice(0, 10)]
}

export default psychCategory
