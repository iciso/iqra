import type { QuizCategory } from "@/types/quiz";

const parentingCategory: QuizCategory = {
  id: "parenting",
  title: "Islamic Parenting",
  description: "Islamic perspectives on parenting",
  icon: "",
  levels: {
    easy: [
        {
            question: "According to Islam, who is primarily responsible for teaching children basic manners?",
            options: ["Teachers at school", "Their peers", "Parents", "Imams at the mosque"],
            correctAnswer: "Parents",
            explanation: "The Prophet ﷺ said, 'Every one of you is a shepherd and is responsible for his flock.' (Sahih al-Bukhari 893, Sahih Muslim 1829). Parents are responsible for their children's upbringing."
          },
          {
            question: "Which Surah of the Quran contains Luqman's advice to his son?",
            options: ["Surah Yusuf", "Surah Luqman", "Surah Maryam", "Surah Nuh"],
            correctAnswer: "Surah Luqman",
            explanation: "Surah Luqman (31:12–19) contains practical wisdom on Islamic parenting, including advice on tawheed, prayer, humility, and behavior."
          },
          {
            question: "What is the first thing a parent should whisper into a newborn's ear in Islam?",
            options: ["Their name", "A lullaby", "Adhan (Call to Prayer)", "Surah Fatiha"],
            correctAnswer: "Adhan (Call to Prayer)",
            explanation: "It is Sunnah to recite the Adhan in the baby's right ear and Iqamah in the left ear (Abu Dawood 5105) to instill Tawheed from birth."
          },
          {
            question: "How important is showing love to children in Islam?",
            options: ["Not necessary", "Sometimes necessary", "Highly encouraged", "Only for daughters"],
            correctAnswer: "Highly encouraged",
            explanation: "The Prophet ﷺ would kiss children and show affection. When someone questioned this, he replied: 'He who does not show mercy will not be shown mercy.' (Sahih al-Bukhari 5997)"
          },
          {
            question: "What does Islam say about calling children by good names?",
            options: ["Any name is fine", "Only Arabic names allowed", "Good names are encouraged", "Name doesn’t matter in Islam"],
            correctAnswer: "Good names are encouraged",
            explanation: "The Prophet ﷺ said, 'You will be called on the Day of Resurrection by your names and by your father's names, so give yourselves good names.' (Abu Dawood 4948)"
          },
          {
            question: "Why should children be taught to pray from a young age?",
            options: ["So they don't forget", "To become scholars", "To earn money", "Because it is an Islamic obligation"],
            correctAnswer: "Because it is an Islamic obligation",
            explanation: "The Prophet ﷺ said: 'Instruct your children to pray when they are seven...' (Abu Dawood 495) - emphasizing early spiritual discipline."
          },
          {
            question: "What is the reward for raising righteous children?",
            options: ["None", "Only in this world", "Ongoing charity (sadaqah jariyah)", "One-time reward"],
            correctAnswer: "Ongoing charity (sadaqah jariyah)",
            explanation: "The Prophet ﷺ said: 'When a person dies, his deeds end except from three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.' (Sahih Muslim 1631)"
          },
          {
            question: "Why is fair treatment among children emphasized in Islam?",
            options: ["To avoid jealousy", "To avoid favoritism", "To uphold justice", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "The Prophet ﷺ forbade unfair preference between children (Sahih Muslim 1623). Justice prevents jealousy and promotes harmony."
          },
          {
            question: "How does Islam guide parents about disciplining children?",
            options: ["With anger", "By mocking", "With mercy and wisdom", "By ignoring them"],
            correctAnswer: "With mercy and wisdom",
            explanation: "The Prophet ﷺ said, 'There is no kindness in a thing except it beautifies it.' (Sahih Muslim 2594)"
          },
          {
            question: "What is the Islamic age for moral responsibility (taklif)?",
            options: ["5", "7", "Puberty", "18"],
            correctAnswer: "Puberty",
            explanation: "Children are accountable in Islamic law once they reach puberty (Buloogh). Before that, they are taught but not held accountable. (Fath al-Bari 2/545)"
          },
          {
            question: "What is the Islamic term for the natural disposition children are born with?",
            options: ["Taqwa", "Iman", "Fitrah", "Tawheed"],
            correctAnswer: "Fitrah",
            explanation: "The Prophet ﷺ said, 'Every child is born upon the Fitrah (natural inclination to believe in Allah)...' (Sahih Muslim 2658)."
          },
          {
            question: "Which parent is most responsible for breastfeeding in Islam?",
            options: ["Father", "Mother", "Grandmother", "Both equally"],
            correctAnswer: "Mother",
            explanation: "The Quran mentions: 'Mothers may breastfeed their children two complete years...' (Surah Al-Baqarah 2:233)."
          },
          {
            question: "Is physical abuse acceptable in Islamic parenting?",
            options: ["Yes", "Only if they disobey", "No", "Only for teens"],
            correctAnswer: "No",
            explanation: "Islam forbids harshness. The Prophet ﷺ never hit a child or servant. (Sahih Muslim 2328)"
          },
          {
            question: "Should parents make dua for their children?",
            options: ["No", "Yes", "Only for boys", "Only in Ramadan"],
            correctAnswer: "Yes",
            explanation: "Ibrahim عليه السلام prayed: 'My Lord, make me an establisher of prayer, and [many] from my descendants.' (Surah Ibrahim 14:40)"
          },
          {
            question: "Can both parents share in the reward of a righteous child?",
            options: ["No", "Only the father", "Yes", "Only the mother"],
            correctAnswer: "Yes",
            explanation: "Righteous children are a sadaqah jariyah for both parents. (Sahih Muslim 1631)"
          },
          {
            question: "How should Islamic parents speak to their children?",
            options: ["With anger", "With kindness", "With threats", "Like a boss"],
            correctAnswer: "With kindness",
            explanation: "Allah told Musa عليه السلام to speak kindly even to Pharaoh! (Surah Taha 20:44). How much more to our own children?"
          },
          {
            question: "At what age should a child be taught to pray regularly?",
            options: ["3", "7", "15", "10"],
            correctAnswer: "7",
            explanation: "The Prophet ﷺ said: 'Instruct your children to pray when they are seven.' (Abu Dawood 495)"
          },
          {
            question: "Should children be encouraged to recite Quran?",
            options: ["Yes", "No", "Only boys", "Only if they want"],
            correctAnswer: "Yes",
            explanation: "The Prophet ﷺ encouraged memorization of the Quran and said the best of you are those who learn and teach it. (Bukhari 5027)"
          },
          {
            question: "Why should parents avoid yelling at children constantly?",
            options: ["Because it's ineffective", "Because children get used to it", "Because it breaks their spirit", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "Harshness leads to rebellion. The Prophet ﷺ never shouted at children; he modeled patience and mercy. (Muslim 2328)"
          },
          {
            question: "What does Islam say about teaching children gratitude?",
            options: ["Not necessary", "Only to Allah", "Encouraged to both Allah and parents", "Just for special occasions"],
            correctAnswer: "Encouraged to both Allah and parents",
            explanation: "Allah says: 'Be grateful to Me and to your parents.' (Surah Luqman 31:14)"
          },
          {
            question: "Is favoritism between siblings discouraged in Islam?",
            options: ["Yes", "No", "Sometimes", "Only in gifts"],
            correctAnswer: "Yes",
            explanation: "The Prophet ﷺ forbade giving a gift to one child and not the others. (Sahih Muslim 1623)"
          },
          {
            question: "What is the best Islamic gift to a child?",
            options: ["Money", "Toys", "Education and good character", "Clothes"],
            correctAnswer: "Education and good character",
            explanation: "The Prophet ﷺ said: 'No father has given a better gift to his children than good manners.' (Tirmidhi 1952)"
          },
          {
            question: "Should parents force left-handed children to use their right hand?",
            options: ["Yes", "No", "Only for eating", "Only for writing"],
            correctAnswer: "Only for eating",
            explanation: "The Prophet ﷺ instructed to eat with the right hand. (Sahih Muslim 2020), but forcing natural habits outside worship is discouraged."
          },
          {
            question: "Is talking about the Prophet’s ﷺ childhood beneficial for kids?",
            options: ["No", "Only for scholars", "Yes", "Only during Eid"],
            correctAnswer: "Yes",
            explanation: "Stories of the Prophet’s ﷺ compassion and integrity even as a child inspire young Muslims to emulate him. (Ibn Hisham, Seerah)"
          },
          {
            question: "Can stories of the Sahabah help in parenting?",
            options: ["No", "Only for boys", "Yes", "Only in sermons"],
            correctAnswer: "Yes",
            explanation: "The Prophet ﷺ encouraged remembering the companions. Their love for parents and discipline inspire Islamic values. (Bukhari 3700)"
          },
          {
            question: "What’s the Islamic view on rewarding children?",
            options: ["Discouraged", "Only for boys", "Permissible with wisdom", "Against Sunnah"],
            correctAnswer: "Permissible with wisdom",
            explanation: "Positive reinforcement aligns with the Prophet’s ﷺ style of encouragement. (Tirmidhi 1989)"
          },
          {
            question: "Why should parents watch their own behavior in front of kids?",
            options: ["Because kids copy them", "Kids don’t understand", "To impress others", "It’s not important"],
            correctAnswer: "Because kids copy them",
            explanation: "Children imitate what they see. The Prophet ﷺ led by example even in private. (Bukhari 7278)"
          },
          {
            question: "Can chores be assigned to children in Islam?",
            options: ["No", "Yes", "Only to daughters", "Only boys"],
            correctAnswer: "Yes",
            explanation: "Fatimah رضي الله عنها did household work, and the Prophet ﷺ shared chores. (Bukhari 6761)"
          },
          {
            question: "What is an early Islamic value children should learn?",
            options: ["Patience", "Tawheed", "Cleanliness", "All of the above"],
            correctAnswer: "All of the above",
            explanation: "The Prophet ﷺ emphasized basic values from early age. (Bukhari 135)"
          },
          {
            question: "Can bedtime dua and stories nurture Islamic faith?",
            options: ["No", "Yes", "Only for girls", "Only in Ramadan"],
            correctAnswer: "Yes",
            explanation: "Establishing routines like dua before sleep instills faith and love of Allah. (Abu Dawood 5040)"
          },  
    ],
    advanced: [
      {
  question: "What was the Prophet’s ﷺ response when a Bedouin said he had never kissed his children?",
  options: ["He praised him for being strong", "He told him to continue", "He rebuked him", "He wept silently"],
  correctAnswer: "He rebuked him",
  explanation: "The Prophet ﷺ said, 'What can I do for you if Allah has removed mercy from your heart?' (Sahih al-Bukhari 5997)."
},
{
  question: "How can Islamic parenting deal with screen addiction in teens?",
  options: ["Ignore it", "Give unlimited screen time", "Model balanced behavior and encourage Quranic reflection", "Punish them harshly"],
  correctAnswer: "Model balanced behavior and encourage Quranic reflection",
  explanation: "Surah Al-Furqan (25:63–74) describes balanced believers. Parents must lead by example. (Tirmidhi 1919)"
},
{
  question: "What is the Islamic ruling on raising voices and cursing children?",
  options: ["It’s okay sometimes", "Permissible if angry", "Not allowed", "Rewardable"],
  correctAnswer: "Not allowed",
  explanation: "The Prophet ﷺ said: 'A believer is not a curser or one who utters obscene words.' (Tirmidhi 1977)"
},
{
  question: "How did the Prophet ﷺ show empathy to children experiencing loss?",
  options: ["Ignored them", "Told them to be strong", "Visited and comforted them", "Sent someone else"],
  correctAnswer: "Visited and comforted them",
  explanation: "He visited a boy whose bird died and offered kind words. (Abu Dawood 4969)"
},
{
  question: "What should be the Islamic response to teens struggling with identity and confidence?",
  options: ["Shame them", "Compare them to others", "Use stories of Prophets like Yusuf to uplift them", "Ignore it"],
  correctAnswer: "Use stories of Prophets like Yusuf to uplift them",
  explanation: "Surah Yusuf (12) teaches moral strength, resilience, and trusting Allah through hardship."
},
{
  question: "What does the Quran say about consulting children in family matters?",
  options: ["Not needed", "Only sons", "Encouraged if mature", "Strictly father's role"],
  correctAnswer: "Encouraged if mature",
  explanation: "Prophet Yaqub involved his sons in decisions (Surah Yusuf 12:5–6). Shura builds responsibility."
},
{
  question: "What is the best way to correct a teen's mistake in Islam?",
  options: ["Mock them", "Expose publicly", "Use private, kind advice", "Ignore it"],
  correctAnswer: "Use private, kind advice",
  explanation: "The Prophet ﷺ corrected mistakes with compassion and privacy. (Musnad Ahmad 20830)"
},
{
  question: "Why should children be trained to control anger?",
  options: ["For social skills", "To avoid yelling", "It is a Sunnah trait", "All of the above"],
  correctAnswer: "All of the above",
  explanation: "The Prophet ﷺ advised a man three times: 'Do not get angry.' (Sahih al-Bukhari 6116)"
},
{
  question: "What is the Islamic approach if a child rejects practicing Islam?",
  options: ["Cut ties", "Use force", "Approach with patience and dua", "Send them away"],
  correctAnswer: "Approach with patience and dua",
  explanation: "Nuh عليه السلام called his son persistently but kindly (Surah Hud 11:42–46)"
},
{
  question: "Is it Sunnah to play with children?",
  options: ["No", "Yes, occasionally", "Yes, frequently", "Only with boys"],
  correctAnswer: "Yes, frequently",
  explanation: "The Prophet ﷺ raced with Aisha and played with Hasan and Husain (Sunan Ibn Majah 193)."
},
{
    question: "What should parents do when children complain of boredom in worship?",
    options: ["Scold them", "Force them more", "Make worship interactive and loving", "Ignore them"],
    correctAnswer: "Make worship interactive and loving",
    explanation: "The Prophet ﷺ said: 'Make things easy and do not make them difficult.' (Bukhari 69). Islam promotes encouragement."
  },
  {
    question: "How can Muslim parents raise children in non-Muslim countries?",
    options: ["Assimilate fully", "Isolate completely", "Balance integration with identity preservation", "Avoid interaction"],
    correctAnswer: "Balance integration with identity preservation",
    explanation: "‘You are the best nation raised for mankind…’ (Surah Aal-Imran 3:110). Balancing deen and dunya is key."
  },
  {
    question: "How should Muslim parents handle gender identity confusion in teens?",
    options: ["Mock them", "Educate with compassion and Quranic guidance", "Ignore it", "Disown them"],
    correctAnswer: "Educate with compassion and Quranic guidance",
    explanation: "Teach the divine creation plan: ‘And He created them male and female.’ (Surah An-Najm 53:45). Approach with mercy and knowledge."
  },
  {
    question: "How should working Muslim parents balance career and children?",
    options: ["Quit job", "Leave children to others", "Prioritize family with barakah in time", "Ignore parenting"],
    correctAnswer: "Prioritize family with barakah in time",
    explanation: "The Prophet ﷺ divided his time wisely among family, worship, and people. (Shama'il Tirmidhi)"
  },
  {
    question: "What role does dua play in parenting challenges?",
    options: ["Not helpful", "Only for scholars", "Essential", "Only in Ramadan"],
    correctAnswer: "Essential",
    explanation: "Prophets constantly made dua for offspring (e.g., Zakariyya in Surah Maryam 19:5–6)."
  },
  {
    question: "What’s the Islamic guidance for teen rebellion?",
    options: ["Hit them", "Kick them out", "Address with mercy and consistency", "Ignore it"],
    correctAnswer: "Address with mercy and consistency",
    explanation: "Allah guided Nuh عليه السلام with sabr when his son disbelieved. (Surah Hud 11:42–46)"
  },
  {
    question: "Can extracurriculars be part of Islamic parenting?",
    options: ["No", "Only Quran classes", "Yes, with Islamic ethics", "Discouraged"],
    correctAnswer: "Yes, with Islamic ethics",
    explanation: "The Prophet ﷺ encouraged archery, horse-riding, swimming. (Musnad Ahmad 15645)"
  },
  {
    question: "How should Islamic parents address online dangers?",
    options: ["Ignore", "Block everything", "Monitor and guide with adab", "Trust blindly"],
    correctAnswer: "Monitor and guide with adab",
    explanation: "Parents are shepherds of their flocks (Bukhari 893). Digital shepherding is part of this responsibility."
  },
  {
    question: "How did the Prophet ﷺ respond to parenting stress?",
    options: ["Isolated", "Complained", "Turned to dua and patience", "Yelled"],
    correctAnswer: "Turned to dua and patience",
    explanation: "He would say, 'O Turner of hearts, keep our hearts firm on Your religion.' (Tirmidhi 2140)"
  },
  {
    question: "What role does emotional intelligence play in Islamic parenting?",
    options: ["No role", "Only for scholars", "Critical role", "Just for mothers"],
    correctAnswer: "Critical role",
    explanation: "The Prophet ﷺ showed awareness of children's feelings and emotions (e.g., bird story – Abu Dawood 4969)."
  },
  {
    question: "How did the Prophet ﷺ teach boundaries to children?",
    options: ["Through harshness", "Through storytelling", "By example and gentle correction", "Public lectures"],
    correctAnswer: "By example and gentle correction",
    explanation: "He said to Ibn Abbas: 'O young boy, I will teach you some words...' (Tirmidhi 2516)"
  },
  {
    question: "What is the Islamic perspective on gender equality in parenting?",
    options: ["Boys favored", "Equal rights and love", "Only girls honored", "Not mentioned"],
    correctAnswer: "Equal rights and love",
    explanation: "The Prophet ﷺ emphasized justice between children and showed love for daughters. (Sahih Muslim 2318)"
  },
  {
    question: "What does Islam say about scaring children to enforce discipline?",
    options: ["Permissible", "Recommended", "Not allowed", "Sunnah"],
    correctAnswer: "Not allowed",
    explanation: "The Prophet ﷺ never instilled fear as discipline but used compassion. (Muslim 2316)"
  },
  {
    question: "How does Islam handle cases of children with special needs?",
    options: ["Ignore them", "Hide them", "Honor and include them", "Only care in secret"],
    correctAnswer: "Honor and include them",
    explanation: "Islam honors all souls. Abdullah ibn Umm Maktum, a blind man, was honored and made mu’adhin. (Sahih Muslim 405)"
  },
  {
    question: "Which dua of Zakariyyah عليه السلام is a model for childless parents?",
    options: ["Surah Maryam 19:4", "Surah Yusuf 12:86", "Surah Taha 20:25", "Surah Fatiha"],
    correctAnswer: "Surah Maryam 19:4",
    explanation: "'My Lord, my bones have weakened… grant me an heir.' (Quran 19:4–5)"
  },
  {
    question: "What does Islam say about overburdening children with academics at the cost of deen?",
    options: ["Encouraged", "Neutral", "Balance both", "Ignore deen"],
    correctAnswer: "Balance both",
    explanation: "Allah warns against forgetting the Hereafter for worldly gain. (Quran 28:77)"
  },
  {
    question: "How can Islamic parenting address bullying behavior in children?",
    options: ["Encourage it", "Ignore it", "Teach empathy from Sunnah", "Punish severely"],
    correctAnswer: "Teach empathy from Sunnah",
    explanation: "The Prophet ﷺ taught kindness to animals and humans (Sahih al-Bukhari 5998)."
  },
  {
    question: "Can non-Muslim adoptive parenting align with Islamic parenting values?",
    options: ["Never", "Sometimes", "Yes, with shared morals", "Only if they convert"],
    correctAnswer: "Yes, with shared morals",
    explanation: "Islam values justice, mercy, and moral upbringing regardless of background. (Quran 49:13)"
  },
  {
    question: "What Prophet’s parenting story teaches us to never lose hope in disobedient children?",
    options: ["Ibrahim", "Musa", "Nuh", "Yusuf"],
    correctAnswer: "Nuh",
    explanation: "Nuh عليه السلام kept inviting his son until the very end. (Quran 11:42–46)"
  },  
  {
    question: "What’s the Islamic advice when children ask difficult questions about Islam?",
    options: ["Avoid", "Reprimand", "Welcome and answer wisely", "Redirect to scholars only"],
    correctAnswer: "Welcome and answer wisely",
    explanation: "Allah addresses questions in the Quran: 'They ask you… Say…' (Surah Al-Baqarah 2:189). Encourage open dialogue."
  },
    ],
    intermediate: [
      // Copy the first 10 questions from easy level.
      // This is a temporary solution until proper intermediate questions are created.
    ]
  }
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!parentingCategory.levels.intermediate || parentingCategory.levels.intermediate.length === 0) {
  parentingCategory.levels.intermediate = [...parentingCategory.levels.easy.slice(0, 10)]
}

export default parentingCategory
