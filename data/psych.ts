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
        question: "How does Islam view depression?",
        options: [
          "As a sign of weak faith",
          "As a medical condition requiring treatment",
          "As divine punishment",
          "As imaginary illness"
        ],
        correctAnswer: "As a medical condition requiring treatment",
        explanation: "The Prophet (PBUH) advised treatment for sadness: 'Allah did not send down a disease without sending a cure' (Bukhari 5678). He supported medical intervention while emphasizing spiritual remedies like dua (25:78) and patience (2:155-156). Modern antidepressants are permissible when prescribed."
      },
      {
        question: "What is the Islamic approach to managing stress?",
        options: [
          "Ignore it completely",
          "Combine spiritual and practical solutions",
          "Only pray without taking action",
          "Consider it always harmful"
        ],
        correctAnswer: "Combine spiritual and practical solutions",
        explanation: "The Prophet (PBUH) taught: 'Trust in Allah but tie your camel' (Tirmidhi 2517). Effective stress management includes: 1) Tawakkul (reliance on Allah - 3:159), 2) Problem-solving (Hadith - Abu Dawud 1640), 3) Physical exercise (Hadith - Bukhari 6103), and 4) Social support (Hadith - Muslim 2628)."
      },
      {
        question: "How does Islam view seeking professional therapy?",
        options: [
          "Forbidden as it shows lack of faith",
          "Permitted when beneficial",
          "Only for severe mental illness",
          "Must be from Muslim therapists only"
        ],
        correctAnswer: "Permitted when beneficial",
        explanation: "Islam encourages seeking cures: 'Make use of medical treatment' (Abu Dawud 3855). Therapy is permissible if it doesn't contradict Islamic principles. The Quran mentions Allah sending down 'healing for what is in the breasts' (10:57), which scholars interpret to include psychological healing."
      },
      {
        question: "What is the Islamic concept of 'qalb' (heart) in mental health?",
        options: [
          "Only the physical organ",
          "The spiritual and emotional center of a person",
          "A metaphor with no real significance",
          "Identical to the brain"
        ],
        correctAnswer: "The spiritual and emotional center of a person",
        explanation: "The Quran describes the qalb as capable of being sick (2:10), hardened (2:74), or tranquil (13:28). It's the seat of understanding (7:179), faith (49:7), and moral decisions (22:46). Spiritual heart purification involves dhikr (13:28), Quran reflection (47:24), and avoiding sins (83:14)."
      },
      {
        question: "How does Islam view positive thinking?",
        explanation: "The Prophet (PBUH) taught: 'Strange are the ways of a believer... If good befalls him, he is thankful; and if evil befalls him, he is patient' (Muslim 2999). Quranic concepts like husn al-dhann (good assumption - 48:6) and tawakkul (3:159) foster optimism. Negative thoughts should be countered with 'la hawla wa la quwwata illa billah'."
      },
      {
        question: "What is the Islamic view on dreams?",
        options: [
          "All dreams are meaningless",
          "Only prophetic dreams matter",
          "Dreams can reflect psychological states",
          "Dream interpretation is shirk"
        ],
        correctAnswer: "Dreams can reflect psychological states",
        explanation: "The Prophet (PBUH) said: 'Good dreams are from Allah' (Bukhari 6983). Scholars classify dreams into: 1) True visions (ru'ya), 2) Psychological reflections (hadith nafs), and 3) Satanic whispers. Modern Islamic psychology recognizes dreams as revealing subconscious concerns while warning against superstition."
      },
      {
        question: "How does Islam address social anxiety?",
        options: [
          "By complete social isolation",
          "Through gradual exposure and faith",
          "Only medication can treat it",
          "Considering it a virtue"
        ],
        correctAnswer: "Through gradual exposure and faith",
        explanation: "The Prophet (PBUH) coached anxious companions like his advice to a nervous speaker: 'Take it easy... say what is in your mind' (Bukhari 6112). Islamic solutions combine: 1) Dhikr for calmness (13:28), 2) Social skill development (Hadith - Tirmidhi 2018), and 3) Cognitive restructuring through Quranic truths (65:3)."
      },
      {
        question: "What is the Islamic approach to addiction recovery?",
        options: [
          "Punishment without treatment",
          "Spiritual and medical intervention",
          "Only supplications are needed",
          "Addiction is incurable in Islam"
        ],
        correctAnswer: "Spiritual and medical intervention",
        explanation: "The Quran prohibits intoxicants (5:90) but emphasizes repentance (39:53). Effective treatment combines: 1) Taubah (sincere repentance - 66:8), 2) Professional rehab (Hadith - Ibn Majah 3466), 3) Community support (Hadith - Tirmidhi 1425), and 4) Alternative halal pleasures (2:172). Relapse doesn't negate Allah's mercy (12:87)."
      },
      {
        question: "How does Islam view childhood trauma?",
        options: [
          "Children don't experience trauma",
          "Parents are always to blame",
          "It affects development and requires healing",
          "Only physical trauma matters"
        ],
        correctAnswer: "It affects development and requires healing",
        explanation: "The Prophet (PBUH) showed exceptional care for orphans (93:6-9) and traumatized children like his treatment of young Usama (Bukhari 3730). Modern Islamic psychology recognizes ACEs (Adverse Childhood Experiences) and recommends: 1) Safe environments (4:127), 2) Emotional validation (Hadith - Bukhari 5999), and 3) Trauma-informed therapy."
      },
      {
        question: "What is the Islamic perspective on self-esteem?",
        options: [
          "Complete self-negation is ideal",
          "Balanced self-worth through Allah-consciousness",
          "Extreme pride is encouraged",
          "Only physical appearance matters"
        ],
        correctAnswer: "Balanced self-worth through Allah-consciousness",
        explanation: "Islam teaches moderation: 'Do not extol yourselves' (53:32) yet 'Allah has honored the children of Adam' (17:70). Healthy self-esteem comes from: 1) Knowing one's worth as Allah's creation (95:4), 2) Recognizing strengths as gifts (28:77), and 3) Improving weaknesses through tawbah (66:8)."
      },
      {
        question: "How does Islam view OCD (Obsessive-Compulsive Disorder)?",
        options: [
          "As a sign of deep piety",
          "As waswas (whispering) requiring treatment",
          "All rituals are OCD",
          "Only non-Muslims experience it"
        ],
        correctAnswer: "As waswas (whispering) requiring treatment",
        explanation: "The Prophet (PBUH) advised a man distressed by intrusive thoughts: 'Allah has forgiven you for the waswas' (Muslim 220). Modern treatment combines: 1) Cognitive therapy (recognizing thoughts as whispers - 114:4-5), 2) Exposure response prevention, and 3) Medication if needed (Hadith - Ibn Majah 3436)."
      },
      {
        question: "What is the Islamic approach to anger management?",
        options: [
          "Suppress all anger completely",
          "Express anger violently when needed",
          "Control through spiritual and behavioral methods",
          "Anger is always sinful"
        ],
        correctAnswer: "Control through spiritual and behavioral methods",
        explanation: "The Prophet (PBUH) taught: 'The strong is not the one who overcomes people by his strength, but the one who controls himself while in anger' (Bukhari 6114). Practical steps include: 1) Seeking refuge in Allah (Hadith - Bukhari 3282), 2) Changing positions (Hadith - Abu Dawud 4782), and 3) Delaying response (3:134)."
      },
      {
        question: "How does Islam view personality development?",
        options: [
          "Personality is fixed at birth",
          "It can be developed through conscious effort",
          "Only genetics determine personality",
          "Environment has no influence"
        ],
        correctAnswer: "It can be developed through conscious effort",
        explanation: "The Quran describes personality transformation through faith (13:28) and good deeds (29:69). The Prophet (PBUH) mentored companions' character development like his patient teaching of Bedouins (Hadith - Muslim 2316). Islamic personality pillars include: sincerity (98:5), patience (103:3), and gratitude (14:7)."
      },
      {
        question: "What is the Islamic view on grief counseling?",
        options: [
          "Forbidden as it interferes with qadr",
          "Permitted as emotional support",
          "Only imams can provide it",
          "Mourning beyond 3 days is shirk"
        ],
        correctAnswer: "Permitted as emotional support",
        explanation: "The Prophet (PBUH) comforted grieving people like his visit to Um Sulaim after her son's death (Muslim 923). Islam permits mourning (2:156) while discouraging extremes (Hadith - Bukhari 1296). Modern grief therapy aligns with Islamic principles when it helps process loss while affirming divine wisdom (2:216)."
      },
      {
        question: "How does Islam address work-life balance?",
        options: [
          "Work constantly without rest",
          "Prioritize salah even during work",
          "Complete separation of work and worship",
          "Integrated balance with scheduled worship"
        ],
        correctAnswer: "Integrated balance with scheduled worship",
        explanation: "The Prophet (PBUH) modeled balance - working (Hadith - Bukhari 2074), resting (Hadith - Ibn Majah 4100), and worshipping at fixed times (4:103). Quranic principles include: 1) Moderate work (28:77), 2) Family rights (30:21), and 3) Scheduled remembrance (20:130). Friday prayers enforce weekly breaks (62:9)."
      },
      {
        question: "What is the Islamic approach to phobias?",
        options: [
          "All fears are irrational",
          "Gradual exposure with tawakkul",
          "Only dua can cure phobias",
          "Avoid all feared situations"
        ],
        correctAnswer: "Gradual exposure with tawakkul",
        explanation: "The Prophet (PBUH) taught balanced courage: 'If plague comes...' (Bukhari 3473) showing neither reckless nor excessive fear. Treatment combines: 1) Trust in Allah's protection (3:175), 2) Systematic desensitization (Hadith - Muslim 2208), and 3) Cognitive restructuring (13:28). Professional help is permitted (Hadith - Ibn Majah 3466)."
      },
      {
        question: "How does Islam view emotional intelligence?",
        options: [
          "Irrelevant to faith",
          "Crucial for social relations",
          "Only for leaders",
          "Women naturally have more"
        ],
        correctAnswer: "Crucial for social relations",
        explanation: "The Prophet (PBUH) demonstrated exceptional EQ - sensing companions' moods (Hadith - Bukhari 6065), adjusting his approach (Hadith - Tirmidhi 2018). Quranic examples include: 1) Yusuf's prison counseling (12:36-42), 2) Luqman's advice (31:17-19). EQ helps fulfill social responsibilities (49:10-13)."
      },
      {
        question: "What is the Islamic perspective on ADHD?",
        options: [
          "A myth to excuse bad parenting",
          "A valid neurodevelopmental condition",
          "Caused by lack of discipline",
          "Only affects non-practicing Muslims"
        ],
        correctAnswer: "A valid neurodevelopmental condition",
        explanation: "Islam recognizes biological differences: 'Allah has not made two hearts in any one person' (33:4). ADHD management includes: 1) Structured routines (Hadith - Muslim 783), 2) Behavioral strategies (Hadith - Tirmidhi 2018), 3) Permissible medications (Hadith - Ibn Majah 3436), and 4) Leveraging strengths like energy for good deeds (Hadith - Bukhari 6103)."
      },
      {
        question: "How does Islam view marital counseling?",
        options: [
          "Forbidden as it exposes private matters",
          "Permitted to preserve marriages",
          "Only for non-Muslim couples",
          "Imams must decide without listening"
        ],
        correctAnswer: "Permitted to preserve marriages",
        explanation: "The Quran advises mediation for marital conflicts (4:35). The Prophet (PBUH) counseled couples (Hadith - Abu Dawud 2136). Conditions for Islamic counseling: 1) Privacy protection (Hadith - Bukhari 6069), 2) Sharia-compliant advice (65:6), 3) Reconciliation focus (4:128). Professional Muslim counselors are preferable."
      },
      {
        question: "What is the Islamic approach to burnout?",
        options: [
          "Push through exhaustion",
          "Recognize limits and rest",
          "Only weak people experience it",
          "Burnout doesn't exist in Islam"
        ],
        correctAnswer: "Recognize limits and rest",
        explanation: "The Prophet (PBUH) said: 'Your body has a right over you' (Bukhari 5199). Preventing burnout involves: 1) Scheduled rests (Hadith - Ibn Majah 4100), 2) Delegation (Hadith - Bukhari 2738), 3) Vacation (Hadith - Bukhari 1862), and 4) Spiritual recharging (13:28). Qiyam-ul-lail shouldn't cause exhaustion (73:20)."
      },
      {
        question: "How does Islam view positive psychology interventions?",
        options: [
          "All modern psychology is haram",
          "Permitted if aligned with Islamic values",
          "Only medication is allowed",
          "Identical to Islamic practices"
        ],
        correctAnswer: "Permitted if aligned with Islamic values",
        explanation: "Gratitude journals align with shukr (14:7), mindfulness with muraqaba (Hadith - Tirmidhi 2517). Permissible interventions include: 1) Strength spotting (28:77), 2) Acts of kindness (Hadith - Muslim 2328), 3) Forgiveness exercises (24:22). Avoid un-Islamic elements like self-deification."
      },
      {
        question: "What is the Islamic view on eating disorders?",
        options: [
          "Only Western problem",
          "Sign of weak iman",
          "Serious conditions requiring treatment",
          "Fasting cures all eating issues"
        ],
        correctAnswer: "Serious conditions requiring treatment",
        explanation: "The Quran condemns extremes: 'Eat and drink but waste not' (7:31). Treatment combines: 1) Medical care (Hadith - Ibn Majah 3436), 2) Body positivity as Allah's creation (40:64), 3) Balanced eating (Hadith - Ibn Majah 3349), and 4) Addressing underlying trauma (4:135). Ramadan exemptions apply (2:185)."
      },
      {
        question: "How does Islam view the impact of music on mental health?",
        options: [
          "All music is therapeutic",
          "Permissible music can have positive effects",
          "Only nasheeds are beneficial",
          "Music always causes depression"
        ],
        correctAnswer: "Permissible music can have positive effects",
        explanation: "The Prophet (PBUH) allowed the duff at weddings (Hadith - Abu Dawud 4921). Permissible music with positive lyrics may: 1) Uplift mood (Hadith - Bukhari 952), 2) Reduce stress (13:28), 3) Enhance productivity. Avoid excessive time waste (23:3) or haram content (31:6). Individual sensitivities vary."
      },
      {
        question: "What is the Islamic approach to dementia care?",
        options: [
          "Isolate patients for safety",
          "Compassionate support with dignity",
          "Stop all medical treatment",
          "Consider it possession"
        ],
        correctAnswer: "Compassionate support with dignity",
        explanation: "The Quran honors elders (17:23). Dementia care includes: 1) Patience (2:155), 2) Simplified worship (Hadith - Bukhari 1337), 3) Reminiscence therapy using Islamic memories (Hadith - Muslim 2247), and 4) Family responsibility (Hadith - Tirmidhi 1969). The Prophet excused forgetfulness (Hadith - Abu Dawud 4400)."
      },
      {
        question: "How does Islam view nature's impact on mental health?",
        options: [
          "Nature has no psychological benefit",
          "Natural environments promote tranquility",
          "Only deserts are spiritually beneficial",
          "Cities are always better"
        ],
        correctAnswer: "Natural environments promote tranquility",
        explanation: "The Quran describes nature as signs for reflection (3:190). The Prophet (PBUH) often retreated to mountains (Hadith - Muslim 1397). Benefits include: 1) Stress reduction (13:28), 2) Mindfulness (3:191), 3) Physical activity (Hadith - Bukhari 6103). Urban Muslims should seek green spaces (Hadith - Muslim 7082)."
      },
      {
        question: "What is the Islamic view on schizophrenia?",
        options: [
          "Always caused by jinn possession",
          "Medical condition requiring treatment",
          "Punishment for sins",
          "Doesn't exist in Muslim societies"
        ],
        correctAnswer: "Medical condition requiring treatment",
        explanation: "While jinn can cause symptoms (Hadith - Bukhari 2211), the Prophet (PBUH) distinguished medical conditions (Hadith - Abu Dawud 3855). Treatment includes: 1) Medication (Hadith - Ibn Majah 3436), 2) Spiritual protection (Hadith - Bukhari 3282), 3) Family support (Hadith - Muslim 4629). Ruqya is supplementary, not replacement."
      },
      {
        question: "How does Islam view the psychology of gratitude?",
        options: [
          "Optional virtue",
          "Core spiritual practice",
          "Only for material blessings",
          "Weakens ambition"
        ],
        correctAnswer: "Core spiritual practice",
        explanation: "The Quran states: 'If you are grateful, I will increase you' (14:7). Gratitude practices include: 1) Daily shukr (7:10), 2) Positive reframing (94:5-6), 3) Expressing thanks to people (Hadith - Tirmidhi 1954). The Prophet (PBUH) would thank Allah even after difficulties (Hadith - Muslim 2999)."
      },
      {
        question: "What is the Islamic approach to social media addiction?",
        options: [
          "All social media is haram",
          "Permitted without limits",
          "Balanced use with time management",
          "Only for da'wah purposes"
        ],
        correctAnswer: "Balanced use with time management",
        explanation: "Islam teaches moderation: 'Do not let your hand be chained to your neck' (17:29). Managing social media involves: 1) Time limits (Hadith - Tirmidhi 2416), 2) Content filtering (49:12), 3) Real-life connections (Hadith - Tirmidhi 2517), and 4) Productive usage (Hadith - Ibn Majah 224). Avoid vanity (102:1)."
      },
      {
        question: "How does Islam view the psychology of forgiveness?",
        options: [
          "Weakness of character",
          "Path to psychological freedom",
          "Only required for minor offenses",
          "All sins must be punished"
        ],
        correctAnswer: "Path to psychological freedom",
        explanation: "The Quran describes forgiveness as godly (3:134) and therapeutic (42:40). Benefits include: 1) Reduced anger (3:134), 2) Improved relationships (24:22), 3) Spiritual elevation (42:43). The Prophet (PBUH) forgave his persecutors (Hadith - Bukhari 3477). Forgiving doesn't negate justice-seeking rights (42:39)."
      }
    ],
    advanced: [
      {
        question: "How does Islamic psychology interpret defense mechanisms?",
        options: [
          "All are harmful and must be eliminated",
          "Some can be adaptive if used moderately",
          "Only projection is permitted",
          "Identical to Freudian theory"
        ],
        correctAnswer: "Some can be adaptive if used moderately",
        explanation: "Islam recognizes coping strategies: 1) Sublimation (channeling urges into worship - 29:45), 2) Altruism (Hadith - Muslim 2588) are positive. Denial of sins (83:14) or displacement aggression (Hadith - Bukhari 6116) are harmful. The middle path avoids both repression and complete emotional discharge."
      },
      {
        question: "What is the Islamic critique of unconditional positive regard?",
        options: [
          "Fully aligns with Islamic values",
          "Conflicts with accountability concepts",
          "Only applies to parent-child relationships",
          "Identical to rahma (mercy)"
        ],
        correctAnswer: "Conflicts with accountability concepts",
        explanation: "While Islam teaches compassion (21:107), it balances: 1) Loving acceptance (Hadith - Tirmidhi 1924) with 2) Righteous disapproval (5:105), and 3) Accountability (Hadith - Ibn Majah 4013). Unconditional regard may enable sin (5:105). Islamic counseling uses 'compassionate confrontation' (Hadith - Muslim 49)."
      },
      {
        question: "How does tazkiyatun-nafs differ from Western self-actualization?",
        options: [
          "Both aim for personal greatness",
          "Tazkiyah seeks Allah's pleasure above self-fulfillment",
          "Only Western psychology values growth",
          "Identical end goals"
        ],
        correctAnswer: "Tazkiyah seeks Allah's pleasure above self-fulfillment",
        explanation: "Maslow's self-actualization centers human potential; tazkiyah focuses on: 1) Allah-consciousness (2:197), 2) Servitude (51:56), 3) Community benefit (Hadith - Tabarani). The peak isn't self-expression but ihsan (excellence in worship - Hadith - Muslim 8). Ego dissolution (fana) replaces self-actualization in Sufi psychology."
      },
      {
        question: "What is the Islamic perspective on cognitive distortions?",
        options: [
          "Only non-believers experience them",
          "Waswas (whispering) can fuel them",
          "All negative thoughts are from shaytan",
          "Medication is the only solution"
        ],
        correctAnswer: "Waswas (whispering) can fuel them",
        explanation: "The Quran describes faulty thinking patterns: 1) Catastrophizing (12:87), 2) Mind-reading (49:12), 3) Overgeneralization (12:18). Treatment combines: 1) Cognitive restructuring with Quranic truths (13:28), 2) Dhikr for mindfulness (Hadith - Tirmidhi 2517), and 3) Behavioral experiments (Hadith - Muslim 1348)."
      },
      {
        question: "How does Islamic psychology approach trauma memory processing?",
        options: [
          "Suppress all painful memories",
          "Narrative exposure with tawakkul",
          "Only medication can help",
          "Trauma doesn't affect believers"
        ],
        correctAnswer: "Narrative exposure with tawakkul",
        explanation: "The Prophet (PBUH) helped process traumatic events through: 1) Controlled recall (Hadith - Bukhari 7283), 2) Meaning-making (94:5-6), 3) Spiritual framing (2:155-156). Modern techniques like EMDR are permitted if they don't contradict Islamic principles. The Quran recounts Yusuf's trauma narrative as healing model (12:100)."
      },
      {
        question: "What is the Islamic view on attachment theory?",
        options: [
          "Irrelevant to Islamic upbringing",
          "Secure attachment parallels prophetic parenting",
          "Only mothers affect attachment",
          "Western concept to reject"
        ],
        correctAnswer: "Secure attachment parallels prophetic parenting",
        explanation: "The Prophet (PBUH) modeled secure attachment through: 1) Responsiveness (Hadith - Abu Dawud 1604), 2) Physical affection (Hadith - Bukhari 5998), 3) Emotional availability (Hadith - Muslim 2318). Quranic parenting combines: 1) Love (17:24), 2) Boundaries (31:17), and 3) Spiritual connection (20:132)."
      },
      {
        question: "How does Islamic psychology interpret the unconscious mind?",
        options: [
          "Doesn't exist in Islamic theory",
          "Similar to Freud's id",
          "Includes both fitrah and waswas influences",
          "Only stores childhood memories"
        ],
        correctAnswer: "Includes both fitrah and waswas influences",
        explanation: "Islamic concepts of the unconscious include: 1) Fitrah (primordial God-consciousness - 30:30), 2) Waswas (devil's whispers - 114:4-5), 3) Latent knowledge (7:172). Dreams reveal unconscious content (Hadith - Bukhari 6983). Unlike psychoanalysis, Islamic therapy focuses more on conscious tazkiyah than unconscious excavation."
      },
      {
        question: "What is the Islamic critique of humanistic psychology?",
        options: [
          "Fully compatible with Islam",
          "Overemphasizes human autonomy",
          "Only Rogers' theory is acceptable",
          "Identical to Sufi psychology"
        ],
        correctAnswer: "Overemphasizes human autonomy",
        explanation: "While valuing human potential (95:4), Islam critiques: 1) Self-actualization as ultimate goal (vs. ibadah - 51:56), 2) Unconditional self-acceptance (vs. tawbah - 66:8), 3) Subjective truth (vs. divine revelation - 2:38). Islamic humanism balances dignity (17:70) with servitude (51:56)."
      },
      {
        question: "How does Islamic psychology explain personality disorders?",
        options: [
          "Result of weak iman only",
          "Complex biopsychosocial-spiritual causes",
          "Only non-Muslims develop them",
          "Caused solely by childhood trauma"
        ],
        correctAnswer: "Complex biopsychosocial-spiritual causes",
        explanation: "Islamic perspective considers: 1) Biological factors (Hadith - Ibn Majah 3436), 2) Childhood environment (Hadith - Bukhari 5999), 3) Spiritual health (26:89), and 4) Social influences (103:3). Treatment combines: 1) Therapy (Hadith - Ibn Majah 3466), 2) Medication if needed, 3) Tazkiyah (91:9-10)."
      },
      {
        question: "What is the Islamic approach to transpersonal psychology?",
        options: [
          "Rejects all spiritual experiences",
          "Aligns partially with Sufi psychology",
          "Only Buddhist methods are valid",
          "Considers it identical to shirk"
        ],
        correctAnswer: "Aligns partially with Sufi psychology",
        explanation: "Shared elements: 1) Spiritual growth stages (nafs levels - 89:27), 2) Altered states (Sufi hal - states). Differences: 1) Islamic experiences are Allah-centered (2:186), not self-deifying, 2) Validated by sharia (Hadith - Muslim 3438). Caution against mixing with non-Islamic mysticism (Hadith - Abu Dawud 4031)."
      },
      {
        question: "How does Islam view the therapeutic alliance?",
        options: [
          "Unnecessary in Islamic counseling",
          "Crucial for effective treatment",
          "Only permissible with same-gender therapists",
          "Must include physical touch"
        ],
        correctAnswer: "Crucial for effective treatment",
        explanation: "The Prophet (PBUH) built rapport before advising (Hadith - Tirmidhi 2018). Islamic therapeutic alliance includes: 1) Trust (amanah - 8:27), 2) Empathy (Hadith - Bukhari 6065), 3) Professional boundaries (Hadith - Bukhari 5232). Gender guidelines apply (Hadith - Bukhari 5232)."
      },
      {
        question: "What is the Islamic perspective on logotherapy?",
        options: [
          "Meaning-seeking aligns with Islamic purpose",
          "Only secular purposes matter",
          "Contradicts qadr (divine decree)",
          "Identical to Buddhist mindfulness"
        ],
        correctAnswer: "Meaning-seeking aligns with Islamic purpose",
        explanation: "Viktor Frankl's theory resonates with: 1) Life as test (67:2), 2) Suffering with purpose (2:155-156), 3) Ultimate meaning in Allah (51:56). Differences: Islamic meaning is revelation-based (45:20), not self-created. The Quran provides cosmic meaning (3:190-191) and personal purpose (94:5-6)."
      },
      {
        question: "How does Islamic psychology interpret archetypes?",
        options: [
          "As identical to Quranic prophets' roles",
          "Only Jungian shadow is valid",
          "Universal symbols with Islamic interpretations",
          "Pure imagination with no reality"
        ],
        correctAnswer: "Universal symbols with Islamic interpretations",
        explanation: "Quranic figures represent: 1) Wisdom (Luqman - 31:12), 2) Patience (Ayyub - 21:83), 3) Leadership (Yusuf - 12:55). The 'hero' archetype manifests in jihad (struggle - 29:69). Unlike Jung, Islamic archetypes are historical realities (12:111) not just collective unconscious symbols."
      },
      {
        question: "What is the Islamic view on positive reinforcement?",
        options: [
          "Spoils children and adults",
          "Effective when used appropriately",
          "Only punishment works",
          "Creates dependency on praise"
        ],
        correctAnswer: "Effective when used appropriately",
        explanation: "The Prophet (PBUH) used: 1) Verbal praise (Hadith - Bukhari 3749), 2) Physical rewards (Hadith - Bukhari 3483), 3) Social recognition (Hadith - Muslim 2318). Balance with: 1) Sincerity (Hadith - Muslim 1907), 2) Avoiding vanity (Hadith - Tirmidhi 2379), and 3) Corrective feedback (Hadith - Abu Dawud 4781)."
      },
      {
        question: "How does Islam view the psychology of color?",
        options: [
          "Colors have no psychological impact",
          "Certain colors affect mood and behavior",
          "Only black and white matter",
          "Color psychology is shirk"
        ],
        correctAnswer: "Certain colors affect mood and behavior",
        explanation: "The Prophet (PBUH) noted: 'White is best for living' (Hadith - Ibn Majah 3567). Green symbolizes paradise (76:21). Practical applications: 1) Calming colors for prayer spaces, 2) Avoiding overly stimulating hues in bedrooms (Hadith - Ibn Majah 4100). Avoid superstitions about colors (Hadith - Abu Dawud 3912)."
      },
      {
        question: "What is the Islamic approach to group therapy?",
        options: [
          "Forbidden due to privacy concerns",
          "Effective with Islamic guidelines",
          "Only for addiction recovery",
          "Must be gender-segregated"
        ],
        correctAnswer: "Effective with Islamic guidelines",
        explanation: "The Prophet's (PBUH) gatherings were therapeutic (Hadith - Tirmidhi 2517). Islamic group therapy requires: 1) Confidentiality (Hadith - Muslim 3000), 2) Modest speech (33:32), 3) Benefit focus (Hadith - Ibn Majah 224). Support groups for addiction (Hadith - Tirmidhi 1425) or grief (Hadith - Muslim 923) are models."
      },
      {
        question: "How does Islamic psychology interpret defense mechanisms?",
        options: [
          "All are harmful and must be eliminated",
          "Some can be adaptive if used moderately",
          "Only projection is permitted",
          "Identical to Freudian theory"
        ],
        correctAnswer: "Some can be adaptive if used moderately",
        explanation: "Islam recognizes coping strategies: 1) Sublimation (channeling urges into worship - 29:45), 2) Altruism (Hadith - Muslim 2588) are positive. Denial of sins (83:14) or displacement aggression (Hadith - Bukhari 6116) are harmful. The middle path avoids both repression and complete emotional discharge."
      },
      {
        question: "What is the Islamic perspective on virtual therapy?",
        options: [
          "Completely prohibited",
          "Permitted with privacy safeguards",
          "Only for male therapists",
          "Less effective than ruqya"
        ],
        correctAnswer: "Permitted with privacy safeguards",
        explanation: "Islamic conditions for teletherapy: 1) Secure platforms (Hadith - Muslim 3000), 2) Maintain hijab if opposite gender (33:59), 3) Technical competence (Hadith - Ibn Majah 224). Benefits include accessibility (Hadith - Ibn Majah 4169). In-person is preferable when possible (Hadith - Tirmidhi 2018)."
      },
      {
        question: "How does Islam view the psychology of architecture?",
        options: [
          "Buildings have no psychological impact",
          "Design affects worship and mental state",
          "Only mosque architecture matters",
          "Western designs are always better"
        ],
        correctAnswer: "Design affects worship and mental state",
        explanation: "Prophet's Mosque design promoted: 1) Community bonding (Hadith - Bukhari 469), 2) Natural ventilation (Hadith - Bukhari 6329), 3) Spiritual focus (Hadith - Muslim 850). Modern applications: 1) Prayer spaces at home (Hadith - Bukhari 432), 2) Minimizing distractions (Hadith - Muslim 1305), 3) Natural light (Hadith - Abu Dawud 4982)."
      },
      {
        question: "What is the Islamic approach to psychosomatic illnesses?",
        options: [
          "Imaginary and not real",
          "Mind-body connection is recognized",
          "Only ruqya can treat them",
          "Result of weak faith only"
        ],
        correctAnswer: "Mind-body connection is recognized",
        explanation: "The Prophet (PBUH) acknowledged psychosomatic effects (Hadith - Bukhari 5645). Treatment includes: 1) Medical care (Hadith - Ibn Majah 3436), 2) Stress reduction (13:28), 3) Spiritual healing (17:82). The Quran links hearts and bodies: 'In their hearts is disease...' (2:10). Balance physical and spiritual causes."
      },
      {
        question: "How does Islamic psychology view generational trauma?",
        options: [
          "Doesn't exist in Muslim families",
          "Recognizes cycles that need breaking",
          "Only affects non-practicing Muslims",
          "Parents are fully to blame"
        ],
        correctAnswer: "Recognizes cycles that need breaking",
        explanation: "The Quran notes family patterns (12:6) but emphasizes individual accountability (6:164). Breaking cycles involves: 1) Conscious parenting (Hadith - Abu Dawud 4951), 2) Forgiveness (24:22), 3) New scripts (13:11). Prophet Ibrahim broke his father's idolatry (6:74). Islamic counseling addresses both personal and familial roots."
      },
      {
        question: "What is the Islamic view on emotional repression?",
        options: [
          "Required for strong faith",
          "Healthy expression within limits",
          "Only men should repress emotions",
          "All emotions must be expressed freely"
        ],
        correctAnswer: "Healthy expression within limits",
        explanation: "The Prophet (PBUH) cried (Hadith - Bukhari 1302) and showed anger (Hadith - Muslim 2327) appropriately. Balance includes: 1) Avoiding public drama (31:19), 2) Private release (Hadith - Tirmidhi 2517), 3) Constructive channels (Hadith - Abu Dawud 4782). Extreme repression causes spiritual/psychological harm (Hadith - Ibn Majah 4169)."
      },
      {
        question: "How does Islam view the psychology of poverty?",
        options: [
          "Wealth is always better",
          "Poverty purifies but requires social action",
          "Poor people are closer to Allah automatically",
          "Material conditions don't affect mental health"
        ],
        correctAnswer: "Poverty purifies but requires social action",
        explanation: "The Prophet (PBUH) praised sabr in poverty (Hadith - Muslim 2963) but worked to alleviate it (Hadith - Bukhari 5359). Psychological effects are recognized: 'Poverty may lead to kufr' (Hadith - Bayhaqi). Zakat (9:60) and microfinance (Hadith - Ibn Majah 2439) address systemic causes while valuing spiritual benefits of simplicity."
      },
      {
        question: "What is the Islamic approach to seasonal affective disorder?",
        options: [
          "Only occurs in cold climates",
          "Light therapy is permissible if needed",
          "Result of not praying enough",
          "Doesn't affect believers"
        ],
        correctAnswer: "Light therapy is permissible if needed",
        explanation: "Islam acknowledges environmental effects: 'Allah's servants who walk gently on earth...' (25:63). Treatment includes: 1) Vitamin D (Hadith - Ibn Majah 3436), 2) Dawn prayers for light exposure (Hadith - Muslim 1196), 3) Social connection (Hadith - Tirmidhi 2517). The Quran describes seasonal mood variations (10:67)."
      },
      {
        question: "How does Islamic psychology interpret personality tests?",
        options: [
          "All are haram fortune-telling",
          "Useful tools with limitations",
          "Only for employment screening",
          "Replace spiritual self-knowledge"
        ],
        correctAnswer: "Useful tools with limitations",
        explanation: "Permissible if: 1) Avoid shirk elements (5:90), 2) Recognize only Allah knows fully (31:34), 3) Use for beneficial purposes (Hadith - Ibn Majah 224). The Prophet (PBUH) noted personality differences (Hadith - Bukhari 4778). Tests should complement, not replace, Quranic self-reflection (59:19)."
      },
      {
        question: "What is the Islamic view on the psychology of aging?",
        options: [
          "Elders lose cognitive abilities inevitably",
          "Active aging is encouraged",
          "Only physical health matters",
          "Dementia is divine punishment"
        ],
        correctAnswer: "Active aging is encouraged",
        explanation: "The Quran honors elders (17:23). Healthy aging includes: 1) Lifelong learning (Hadith - Ibn Majah 224), 2) Moderate activity (Hadith - Bukhari 6103), 3) Social engagement (Hadith - Tirmidhi 1919). Cognitive decline isn't inevitable - many sahabah remained sharp into old age (Hadith - Bukhari 3591)."
      },
      {
        question: "How does Islam view the placebo effect?",
        options: [
          "Deceptive and always haram",
          "Demonstrates mind-body connection",
          "Only works on non-Muslims",
          "Identical to ruqya"
        ],
        correctAnswer: "Demonstrates mind-body connection",
        explanation: "The Prophet (PBUH) used psychological healing methods (Hadith - Bukhari 5742). Permissible placebos require: 1) No deception about haram substances, 2) Real treatment also given if available (Hadith - Ibn Majah 3436), 3) Positive expectation aligned with tawakkul (3:159). The healing power of belief is recognized (17:82)."
      },
      {
        question: "What is the Islamic approach to sports psychology?",
        options: [
          "Sports are discouraged in Islam",
          "Mental training enhances halal competition",
          "Only for military preparation",
          "Visualization is shirk"
        ],
        correctAnswer: "Mental training enhances halal competition",
        explanation: "The Prophet (PBUH) raced with Aisha (Hadith - Ahmad 25663). Permissible techniques: 1) Goal-setting (Hadith - Bukhari 6103), 2) Stress management (13:28), 3) Team cohesion (Hadith - Bukhari 469). Avoid: 1) Excessive time waste (102:1), 2) Pride (Hadith - Muslim 2658), 3) Gender mixing (33:33)."
      },
      {
        question: "How does Islamic psychology view emotional intelligence in leadership?",
        options: [
          "Irrelevant to Islamic leadership",
          "Core quality of prophetic model",
          "Only for political leaders",
          "Western concept to avoid"
        ],
        correctAnswer: "Core quality of prophetic model",
        explanation: "The Prophet (PBUH) demonstrated exceptional EQ: 1) Empathy (Hadith - Bukhari 6065), 2) Conflict resolution (49:9), 3) Motivating others (Hadith - Muslim 4825). Quranic leadership requires: 1) Consultation (3:159), 2) Justice (4:58), 3) Humility (25:63). Modern EQ research confirms prophetic methods."
      },
      {
        question: "What is the Islamic perspective on peak performance psychology?",
        options: [
          "Only for worldly pursuits",
          "Applies to worship and halal endeavors",
          "Promotes unhealthy competition",
          "Rejects all performance enhancement"
        ],
        correctAnswer: "Applies to worship and halal endeavors",
        explanation: "The concept of ihsan (excellence) includes: 1) Focused presence in salah (Hadith - Muslim 1105), 2) Continuous improvement (Hadith - Ibn Majah 224), 3) Flow states in worship (2:45). Balance with: 1) Avoiding burnout (Hadith - Ibn Majah 4100), 2) Sincerity (Hadith - Muslim 1907), 3) Holistic priorities (28:77)."
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
