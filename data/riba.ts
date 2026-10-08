import type { QuizCategory } from "@/types/quiz"

const ribaCategory: QuizCategory = {
  id: "riba",
  title: "Riba",
  description: "Islamic Prohibition of Interest and Usury",
  icon: "ban",
  levels: {
    easy: [
      {
        question: "What does the Arabic word 'Riba' literally mean?",
        options: ["Trade", "Increase or excess", "Charity", "Loan"],
        correctAnswer: "Increase or excess",
        explanation:
          "Riba comes from the root r-b-w meaning to grow, increase, or exceed. In Shariah it refers to any unjustified excess in a loan or certain exchanges without due consideration.",
      },
      {
        question: "Which Quranic verse states that Allah has permitted trade and forbidden Riba?",
        options: [
          "Surah Al-Baqarah 2:275",
          "Surah Al-Ikhlas 112:1",
          "Surah Al-Fatiha 1:1",
          "Surah An-Nas 114:1",
        ],
        correctAnswer: "Surah Al-Baqarah 2:275",
        explanation:
          "Allah says: 'Those who consume interest will not stand [on Judgment Day] except as one stands who is being beaten by Satan into insanity... But Allah has permitted trade and has forbidden interest.' (2:275)",
      },
      {
        question: "According to authentic Hadith, who did the Prophet (PBUH) curse regarding Riba transactions?",
        options: [
          "Only the one who takes Riba",
          "The taker, the giver, the recorder, and the two witnesses",
          "Only the witnesses",
          "Only the one who records it",
        ],
        correctAnswer: "The taker, the giver, the recorder, and the two witnesses",
        explanation:
          "Jabir (RA) reported that the Messenger of Allah (PBUH) cursed the one who consumes Riba, the one who pays it, the one who records it, and the two witnesses, saying: 'They are all alike [in guilt].' (Sahih Muslim)",
      },
      {
        question: "What is the primary type of Riba mentioned directly in the Quran?",
        options: [
          "Riba al-Fadl",
          "Riba al-Nasi'ah (interest on loans/deferred payment)",
          "Riba of commodities only",
          "Riba of currency exchange only",
        ],
        correctAnswer: "Riba al-Nasi'ah (interest on loans/deferred payment)",
        explanation:
          "Riba al-Nasi'ah (also called Riba al-Jahiliyyah or Riba al-Quran) is the excess charged for the deferment of a debt or loan. It is the form explicitly addressed in the Quranic verses.",
      },
      {
        question: "In Surah Al-Baqarah 2:278, what does Allah command the believers to do regarding remaining Riba?",
        options: [
          "Continue collecting it",
          "Give up what remains of Riba if they are true believers",
          "Increase it",
          "Ignore it",
        ],
        correctAnswer: "Give up what remains of Riba if they are true believers",
        explanation:
          "Allah says: 'O you who have believed, fear Allah and give up what remains [due to you] of interest, if you should be believers.' (2:278)",
      },
      {
        question: "What warning does Allah give in Surah Al-Baqarah 2:279 if people do not abandon Riba?",
        options: [
          "A minor fine",
          "A declaration of war from Allah and His Messenger",
          "Temporary social isolation",
          "No consequence",
        ],
        correctAnswer: "A declaration of war from Allah and His Messenger",
        explanation:
          "Allah says: 'And if you do not, then be informed of a war [against you] from Allah and His Messenger. But if you repent, you may have your principal...' (2:279)",
      },
      {
        question: "Which of the following is one of the six commodities mentioned in the famous Hadith on Riba al-Fadl?",
        options: ["Gold", "Iron", "Cloth", "Oil"],
        correctAnswer: "Gold",
        explanation:
          "The Prophet (PBUH) said: 'Gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, and salt for salt – like for like, equal for equal, and hand to hand...' (Sahih Muslim)",
      },
      {
        question: "According to the Hadith of the six commodities, when is exchanging the same commodity considered Riba?",
        options: [
          "Only if delayed by one year",
          "If there is any increase or if not hand-to-hand",
          "Only if the quality differs",
          "Never",
        ],
        correctAnswer: "If there is any increase or if not hand-to-hand",
        explanation:
          "The Prophet (PBUH) said that whoever adds or asks for an addition deals in Riba, and the exchange must be equal and hand-to-hand. (Sahih Muslim)",
      },
      {
        question: "What did the Prophet (PBUH) do with the pre-Islamic Riba on the day of the Conquest of Makkah?",
        options: [
          "He allowed it to continue",
          "He annulled all Riba of Jahiliyyah, starting with that of his uncle Abbas",
          "He increased the rates",
          "He ignored it",
        ],
        correctAnswer: "He annulled all Riba of Jahiliyyah, starting with that of his uncle Abbas",
        explanation:
          "The Prophet (PBUH) declared: 'All Riba of Jahiliyyah is annulled. The first Riba I annul is our Riba, that of Abbas ibn Abd al-Muttalib; it is cancelled completely.'",
      },
      {
        question: "In Surah Ar-Rum 30:39, how does Allah describe the increase from Riba versus charity?",
        options: [
          "Riba multiplies with Allah, charity does not",
          "That which is given as Riba does not increase with Allah, while charity multiplies",
          "Both are equal",
          "Neither increases",
        ],
        correctAnswer: "That which is given as Riba does not increase with Allah, while charity multiplies",
        explanation:
          "Allah says: 'And whatever you give for interest to increase within the wealth of people will not increase with Allah; but what you give in charity, seeking the countenance of Allah – those are the multipliers.' (30:39)",
      },
      {
        question: "Riba is listed among which category of sins in the Hadith of the seven destructive sins?",
        options: [
          "Minor sins",
          "The seven destructive (mortal) sins",
          "Recommended acts",
          "Permissible acts",
        ],
        correctAnswer: "The seven destructive (mortal) sins",
        explanation:
          "Abu Hurairah (RA) reported that the Prophet (PBUH) said: 'Avoid the seven destructive sins...' and among them is 'consuming Riba' (Sahih Bukhari and Muslim).",
      },
      {
        question: "What is the ruling on a loan that stipulates any excess (interest) to be returned?",
        options: [
          "Permissible if the rate is low",
          "It is Riba and prohibited",
          "Recommended",
          "Only disliked (makruh)",
        ],
        correctAnswer: "It is Riba and prohibited",
        explanation:
          "The principle derived from Quran and Sunnah is: 'Every loan that draws an excess is Riba.' Any predetermined increase on a loan is forbidden.",
      },
      {
        question: "In Surah Al-Imran 3:130, what specific form of Riba is warned against?",
        options: [
          "Simple interest only",
          "Doubled and redoubled (multiplied) Riba",
          "Commodity exchange only",
          "Charity-related increase",
        ],
        correctAnswer: "Doubled and redoubled (multiplied) Riba",
        explanation:
          "Allah says: 'O you who have believed, do not consume usury, doubled and multiplied, but fear Allah that you may be successful.' (3:130)",
      },
      {
        question: "What happens to the blessings of wealth involved in Riba according to Surah Al-Baqarah 2:276?",
        options: [
          "Allah increases it",
          "Allah destroys (blights) Riba and increases charities",
          "It remains the same",
          "It is protected",
        ],
        correctAnswer: "Allah destroys (blights) Riba and increases charities",
        explanation:
          "Allah says: 'Allah destroys interest and gives increase for charities. And Allah does not like every sinning disbeliever.' (2:276)",
      },
      {
        question: "According to the Prophet (PBUH), what is the least form of Riba compared to in severity?",
        options: [
          "A minor lie",
          "A man having intercourse with his own mother",
          "Skipping a voluntary prayer",
          "Eating non-halal food",
        ],
        correctAnswer: "A man having intercourse with his own mother",
        explanation:
          "Abu Hurairah (RA) reported that the Messenger of Allah (PBUH) said: 'Riba has seventy degrees, the least of which is equivalent to a man having intercourse with his mother.' (Ibn Majah; graded authentic by many scholars)",
      },
      {
        question: "What is Riba al-Fadl?",
        options: [
          "Interest charged on delayed loans",
          "Unequal exchange of the same type of commodity (spot transaction)",
          "Profit from legitimate trade",
          "Zakat payment",
        ],
        correctAnswer: "Unequal exchange of the same type of commodity (spot transaction)",
        explanation:
          "Riba al-Fadl is the excess that occurs when the same ribawi commodity is exchanged in unequal quantities or qualities, even if hand-to-hand. It is prohibited by authentic Hadith.",
      },
      {
        question: "If gold is exchanged for gold, what conditions must be met to avoid Riba?",
        options: [
          "Any amount is fine if delayed",
          "Equal weight and hand-to-hand (immediate)",
          "Only quality matters",
          "No conditions",
        ],
        correctAnswer: "Equal weight and hand-to-hand (immediate)",
        explanation:
          "The Prophet (PBUH) said gold must be exchanged for gold like for like, equal for equal, and hand to hand. Any addition or delay constitutes Riba. (Sahih Muslim)",
      },
      {
        question: "What did the Prophet (PBUH) say will happen in a time when Riba becomes widespread?",
        options: [
          "Everyone will be protected from it",
          "A time will come when everyone will take Riba, and even if one does not, its dust will reach him",
          "It will become permissible",
          "Only the rich will be affected",
        ],
        correctAnswer: "A time will come when everyone will take Riba, and even if one does not, its dust will reach him",
        explanation:
          "Abu Hurairah (RA) reported that the Prophet (PBUH) said: 'A time will surely come upon the people when none will remain but that he consumes Riba. If he does not consume it, its dust will reach him.' (Ahmad, Abu Dawud)",
      },
      {
        question: "In Surah An-Nisa 4:161, what is mentioned regarding the people of the Book and Riba?",
        options: [
          "They were allowed Riba",
          "They took Riba although it was forbidden to them, and consumed people's wealth unjustly",
          "They invented Riba",
          "They avoided it completely",
        ],
        correctAnswer: "They took Riba although it was forbidden to them, and consumed people's wealth unjustly",
        explanation:
          "Allah says: 'And [for] their taking of usury while they had been forbidden from it, and their consuming of the people's wealth unjustly. And We have prepared for the disbelievers among them a painful punishment.' (4:161)",
      },
      {
        question: "What is the correct Islamic alternative to interest-based loans?",
        options: [
          "Hidden interest contracts",
          "Interest-free loans (Qard Hasan) or profit-and-loss sharing (Mudarabah, Musharakah)",
          "Higher interest rates",
          "No financial dealings at all",
        ],
        correctAnswer: "Interest-free loans (Qard Hasan) or profit-and-loss sharing (Mudarabah, Musharakah)",
        explanation:
          "Islam encourages Qard Hasan (benevolent interest-free loans) and partnership contracts based on real economic activity and risk-sharing, which are free from Riba.",
      },
      {
        question: "Who is responsible for the sin of Riba according to the Hadith of Jabir?",
        options: [
          "Only the lender",
          "Only the borrower",
          "All parties involved: taker, giver, recorder, and witnesses equally",
          "Only the one who benefits most",
        ],
        correctAnswer: "All parties involved: taker, giver, recorder, and witnesses equally",
        explanation:
          "The Prophet (PBUH) said they are all alike in guilt. This shows the comprehensive prohibition covering every participant in a Riba contract. (Sahih Muslim)",
      },
      {
        question: "What does Allah promise those who repent from Riba in Surah Al-Baqarah 2:279?",
        options: [
          "They keep all previous interest",
          "They may have their principal (capital) back – neither wronging nor being wronged",
          "They must pay double",
          "Their wealth is confiscated",
        ],
        correctAnswer: "They may have their principal (capital) back – neither wronging nor being wronged",
        explanation:
          "Allah says: 'But if you repent, you may have your principal – [thus] you do no wrong, nor are you wronged.' (2:279)",
      },
      {
        question: "Is there any distinction in Islam between 'interest' and 'usury' regarding prohibition?",
        options: [
          "Yes, only high rates are forbidden",
          "No – any predetermined excess on a loan is Riba and forbidden",
          "Only bank interest is forbidden",
          "Only personal loans are affected",
        ],
        correctAnswer: "No – any predetermined excess on a loan is Riba and forbidden",
        explanation:
          "Classical and contemporary scholars agree that Islam makes no distinction: any guaranteed, predetermined return on a loan of money is Riba, regardless of the rate.",
      },
      {
        question: "What is the first chronological mention of Riba in the Quran according to the sequence of revelation?",
        options: [
          "Surah Al-Baqarah 2:275",
          "Surah Ar-Rum 30:39",
          "Surah Al-Imran 3:130",
          "Surah An-Nisa 4:161",
        ],
        correctAnswer: "Surah Ar-Rum 30:39",
        explanation:
          "The first revelation regarding Riba is considered Surah Ar-Rum 30:39, which disapproves of it by stating it does not increase with Allah, while charity does.",
      },
      {
        question: "According to authentic narration, what did the Prophet (PBUH) say about a person whose wealth increases through Riba?",
        options: [
          "It will continue to grow forever",
          "There is no one who increases his wealth by Riba except that his outcome will be decrease",
          "It is a sign of blessing",
          "It is neutral",
        ],
        correctAnswer: "There is no one who increases his wealth by Riba except that his outcome will be decrease",
        explanation:
          "Ibn Mas'ud (RA) reported that the Prophet (PBUH) said: 'There is no one who increases (his wealth) by usury who will not end up with little.' (Ibn Majah)",
      },
      {
        question: "What is the status of a contract that contains a Riba condition?",
        options: [
          "Valid and enforceable",
          "Invalid (batil) or the Riba condition is void",
          "Recommended",
          "Only partially valid",
        ],
        correctAnswer: "Invalid (batil) or the Riba condition is void",
        explanation:
          "Conditions that contradict the Book of Allah are invalid. The Prophet (PBUH) said any condition not in the Book of Allah is void. Riba conditions render the transaction prohibited.",
      },
      {
        question: "In the Hadith of the six commodities, if the types differ (e.g., gold for silver), what is required?",
        options: [
          "They must still be equal in weight",
          "They may be sold as desired provided the exchange is hand-to-hand (spot)",
          "Delay is allowed",
          "No exchange is permitted",
        ],
        correctAnswer: "They may be sold as desired provided the exchange is hand-to-hand (spot)",
        explanation:
          "The Prophet (PBUH) said: 'If these types differ, then sell however you wish as long as it is hand to hand.' (Sahih Muslim)",
      },
      {
        question: "What is Qard Hasan in relation to avoiding Riba?",
        options: [
          "A high-interest loan",
          "A benevolent interest-free loan given for the sake of Allah",
          "A commercial partnership",
          "A form of Riba",
        ],
        correctAnswer: "A benevolent interest-free loan given for the sake of Allah",
        explanation:
          "Qard Hasan is the Islamic alternative to interest-bearing loans. It is a pure loan without any stipulated excess, encouraged as an act of charity and brotherhood.",
      },
      {
        question: "According to Surah Al-Baqarah 2:275, how will those who consume Riba stand on the Day of Resurrection?",
        options: [
          "In honor",
          "Like one who is being beaten by Satan into insanity",
          "Among the prophets",
          "Unaffected",
        ],
        correctAnswer: "Like one who is being beaten by Satan into insanity",
        explanation:
          "Allah describes: 'Those who consume interest cannot stand [on the Day of Resurrection] except as one stands who is being beaten by Satan into insanity.' (2:275)",
      },
      {
        question: "What is the fundamental reason Riba is prohibited according to Islamic teachings?",
        options: [
          "It is merely a cultural preference",
          "It involves unjust enrichment without risk or real economic contribution, leading to oppression",
          "It is only for certain nations",
          "It increases GDP",
        ],
        correctAnswer: "It involves unjust enrichment without risk or real economic contribution, leading to oppression",
        explanation:
          "Riba creates a guaranteed return without sharing risk or engaging in productive activity, concentrating wealth and causing injustice – contrary to the Quranic emphasis on fairness and mutual benefit.",
      },
      {
        question: "Which companion's Riba was specifically mentioned by the Prophet (PBUH) as the first to be annulled?",
        options: [
          "Abu Bakr (RA)",
          "Abbas ibn Abd al-Muttalib (RA)",
          "Umar (RA)",
          "Uthman (RA)",
        ],
        correctAnswer: "Abbas ibn Abd al-Muttalib (RA)",
        explanation:
          "On the day of the Conquest, the Prophet (PBUH) said the first Riba he was cancelling was that of his uncle Abbas ibn Abd al-Muttalib.",
      },
      {
        question: "Is Riba prohibited only in cash loans or also in other forms?",
        options: [
          "Only in cash loans",
          "In both loans (Nasi'ah) and certain commodity exchanges (Fadl)",
          "Only in international trade",
          "Only in modern banking",
        ],
        correctAnswer: "In both loans (Nasi'ah) and certain commodity exchanges (Fadl)",
        explanation:
          "Classical scholars identify two main types: Riba al-Nasi'ah (deferred/loan interest) prohibited by the Quran, and Riba al-Fadl (unequal spot exchange of ribawi items) prohibited by the Sunnah.",
      },
      {
        question: "What did the Prophet (PBUH) say about the one who consumes Riba and the one who pays it?",
        options: [
          "Only the consumer is sinful",
          "Both are equal in the curse and guilt",
          "Only the payer is sinful",
          "Neither is accountable",
        ],
        correctAnswer: "Both are equal in the curse and guilt",
        explanation:
          "Multiple authentic narrations state that the consumer and the one who pays Riba are both cursed and equal in sin. (Sahih Muslim, etc.)",
      },
      {
        question: "In the context of Riba, what does 'hand to hand' (yadan bi yadin) mean?",
        options: [
          "Payment within one year",
          "Immediate spot exchange without delay",
          "Payment in installments",
          "Written contract only",
        ],
        correctAnswer: "Immediate spot exchange without delay",
        explanation:
          "In the Hadith of the six commodities, 'hand to hand' means the exchange must be completed on the spot with no deferment of either counter-value.",
      },
      {
        question: "What is the Islamic ruling on modern bank interest?",
        options: [
          "Permissible if the bank is Islamic-named",
          "It falls under Riba al-Nasi'ah and is prohibited",
          "Only haram for Muslims in Muslim countries",
          "Recommended for savings",
        ],
        correctAnswer: "It falls under Riba al-Nasi'ah and is prohibited",
        explanation:
          "Contemporary scholarly consensus (including major Fiqh academies) holds that conventional bank interest is the classic form of Riba al-Nasi'ah forbidden by the Quran and Sunnah.",
      },
      {
        question: "According to the Quran, what is the fate of those who persist in consuming Riba after the warning?",
        options: [
          "They will be forgiven automatically",
          "They are the residents of the Fire, abiding therein forever",
          "They receive only a light punishment",
          "No specific mention",
        ],
        correctAnswer: "They are the residents of the Fire, abiding therein forever",
        explanation:
          "Allah says in 2:275: 'As for those who persist, it is they who will be the residents of the Fire. They will be there forever.'",
      },
      {
        question: "What is the difference between legitimate profit from trade and Riba?",
        options: [
          "There is no difference",
          "Trade involves risk, effort, and exchange of goods/services; Riba is a guaranteed excess without such consideration",
          "Profit is always higher",
          "Riba is only in cash",
        ],
        correctAnswer: "Trade involves risk, effort, and exchange of goods/services; Riba is a guaranteed excess without such consideration",
        explanation:
          "The Quran explicitly distinguishes: 'Allah has permitted trade and forbidden Riba' (2:275). Legitimate trade has uncertainty and real economic activity; Riba does not.",
      },
      {
        question: "Which of the following is NOT one of the six ribawi commodities in the Hadith?",
        options: ["Dates", "Salt", "Wheat", "Rice"],
        correctAnswer: "Rice",
        explanation:
          "The six items explicitly named by the Prophet (PBUH) are gold, silver, wheat, barley, dates, and salt. Other items may be analogized by scholars, but rice is not among the original six.",
      },
      {
        question: "What should a Muslim do if he has previously taken Riba before knowing the ruling?",
        options: [
          "Continue taking it",
          "Repent, give up future Riba, and keep only the principal of past amounts as per 2:279",
          "Pay it all back with extra",
          "Donate the interest only",
        ],
        correctAnswer: "Repent, give up future Riba, and keep only the principal of past amounts as per 2:279",
        explanation:
          "The Quran allows those who desist after the warning to keep what has already passed (their principal), while future Riba must be abandoned. (2:275, 2:279)",
      },
      {
        question: "Is the prohibition of Riba limited to Muslims dealing with other Muslims?",
        options: [
          "Yes",
          "No – the prohibition is general and applies in all dealings",
          "Only in Muslim lands",
          "Only for large amounts",
        ],
        correctAnswer: "No – the prohibition is general and applies in all dealings",
        explanation:
          "The Quranic and Prophetic texts prohibit Riba without restricting it to intra-Muslim transactions. The sin attaches to the act itself.",
      },
    ],
    intermediate: [
      {
        question: "What is the linguistic root of the word Riba and its core meaning in Arabic?",
        options: [
          "R-B-W meaning to grow or increase",
          "R-B-A meaning to trade",
          "R-Y-B meaning to doubt",
          "R-B-H meaning to profit",
        ],
        correctAnswer: "R-B-W meaning to grow or increase",
        explanation:
          "The root r-b-w appears in the Quran in contexts of growth (e.g., the earth swelling with rain). In financial terms it denotes an unjustified increase.",
      },
      {
        question: "How do classical scholars classify the two main types of Riba?",
        options: [
          "Riba of the rich and Riba of the poor",
          "Riba al-Nasi'ah (of deferment) and Riba al-Fadl (of excess in exchange)",
          "Riba of gold and Riba of silver only",
          "Major and minor Riba only by amount",
        ],
        correctAnswer: "Riba al-Nasi'ah (of deferment) and Riba al-Fadl (of excess in exchange)",
        explanation:
          "Riba al-Nasi'ah is the excess for time/deferment (Quranic); Riba al-Fadl is the excess in quantity/quality in spot exchanges of ribawi items (Sunnah).",
      },
      {
        question: "What is the full statement of the Hadith regarding gold for gold attributed to Ubadah ibn al-Samit?",
        options: [
          "Gold may be exchanged in any amount",
          "Gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, salt for salt – like for like, equal for equal, hand to hand. If the types differ, sell as you wish provided it is hand to hand",
          "Only gold and silver are restricted",
          "Delay is always allowed",
        ],
        correctAnswer: "Gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, salt for salt – like for like, equal for equal, hand to hand. If the types differ, sell as you wish provided it is hand to hand",
        explanation:
          "This is the authentic wording in Sahih Muslim from Ubadah ibn al-Samit (RA). It forms the basis for the rules of Riba al-Fadl.",
      },
      {
        question: "Why did the Prophet (PBUH) prohibit Riba al-Fadl even in spot transactions of the same commodity?",
        options: [
          "To prevent any form of unjust enrichment and close the door to potential Riba",
          "Because the commodities were scarce",
          "Only for the people of Makkah",
          "It was a temporary ruling",
        ],
        correctAnswer: "To prevent any form of unjust enrichment and close the door to potential Riba",
        explanation:
          "Scholars explain that the prohibition blocks avenues that could lead to Riba al-Nasi'ah and ensures fairness and equality in exchanges of fungible items.",
      },
      {
        question: "In the gradual revelation of the prohibition of Riba, what was the third stage?",
        options: [
          "Complete permission",
          "Prohibition of doubled and redoubled Riba (3:130)",
          "Only advice against it",
          "Restriction to non-Muslims",
        ],
        correctAnswer: "Prohibition of doubled and redoubled Riba (3:130)",
        explanation:
          "The stages are commonly described as: (1) disapproval (30:39), (2) condemnation of the practice of the people of the Book (4:161), (3) prohibition of multiplied Riba (3:130), (4) total prohibition with severe warning (2:275-281).",
      },
      {
        question: "What is the meaning of 'Riba al-Jahiliyyah'?",
        options: [
          "A modern banking product",
          "The pre-Islamic practice where a debt was increased if the debtor could not pay on time",
          "Only commodity Riba",
          "Charitable increase",
        ],
        correctAnswer: "The pre-Islamic practice where a debt was increased if the debtor could not pay on time",
        explanation:
          "In Jahiliyyah, when a debt became due and the debtor could not pay, the creditor would say 'Pay or increase,' doubling the amount. This is the classic Riba al-Nasi'ah annulled by the Prophet (PBUH).",
      },
      {
        question: "According to the Hadith, what is the relationship between the taker and giver of Riba in terms of sin?",
        options: [
          "The taker bears more sin",
          "They are equal",
          "The giver bears more sin",
          "Only if they are Muslim",
        ],
        correctAnswer: "They are equal",
        explanation:
          "The Prophet (PBUH) explicitly stated regarding the consumer, the payer, the scribe, and the witnesses: 'They are all the same.' (Sahih Muslim)",
      },
      {
        question: "What principle regarding loans is derived from the statement 'Every loan that draws an excess is Riba'?",
        options: [
          "Only excess above 10% is Riba",
          "Any stipulated increase on a pure loan is prohibited",
          "Excess is allowed if both agree",
          "Only excess in kind is forbidden",
        ],
        correctAnswer: "Any stipulated increase on a pure loan is prohibited",
        explanation:
          "This maxim, supported by the overall Quranic and Prophetic evidence, establishes that a pure loan (Qard) cannot carry any contractual excess.",
      },
      {
        question: "How does the Quran contrast Riba with Sadaqah (charity) in 2:276?",
        options: [
          "Both are destroyed",
          "Allah destroys Riba and gives increase (growth) to charities",
          "Riba is increased, charity is destroyed",
          "They are treated the same",
        ],
        correctAnswer: "Allah destroys Riba and gives increase (growth) to charities",
        explanation:
          "The verse uses the verbs 'yamhaqu' (destroys/blights) for Riba and 'yurbi' (increases/grows) for Sadaqat, showing the opposite outcomes in the sight of Allah.",
      },
      {
        question: "What is the ruling on exchanging wheat for barley?",
        options: [
          "Must be equal in weight and hand-to-hand",
          "May be exchanged in any amounts provided it is hand-to-hand (because types differ)",
          "Completely forbidden",
          "Only allowed if delayed",
        ],
        correctAnswer: "May be exchanged in any amounts provided it is hand-to-hand (because types differ)",
        explanation:
          "Since wheat and barley are different types among the six, the Hadith allows unequal quantities as long as the exchange is immediate (hand to hand).",
      },
      {
        question: "In Islamic jurisprudence, what is the status of a sale in which the price is deferred and an extra amount is charged solely for the deferment?",
        options: [
          "Valid trade",
          "It constitutes Riba al-Nasi'ah",
          "Recommended",
          "Only makruh",
        ],
        correctAnswer: "It constitutes Riba al-Nasi'ah",
        explanation:
          "When an excess is stipulated purely in return for the time given to pay, it falls under Riba of deferment, which is prohibited.",
      },
      {
        question: "What did Ibn Abbas (RA) report about the people who consumed Riba on the Day of Resurrection?",
        options: [
          "They will be honored",
          "It will be said to them: 'Take your weapon for war' (referring to 2:279)",
          "They will enter Paradise first",
          "Nothing special",
        ],
        correctAnswer: "It will be said to them: 'Take your weapon for war' (referring to 2:279)",
        explanation:
          "Ibn Abbas (RA) said that those who consumed Riba will be told on the Day of Resurrection to take up their weapons for war, in reference to the Quranic declaration of war. (Reported by al-Tabari and others)",
      },
      {
        question: "Why is the prohibition of Riba considered one of the most emphatic in the Shariah?",
        options: [
          "Because it is mentioned only once",
          "Because of the severe language (war from Allah), the curse on all participants, and its inclusion among the destructive sins",
          "Because it is only a recommendation",
          "Because it applies only to Arabs",
        ],
        correctAnswer: "Because of the severe language (war from Allah), the curse on all participants, and its inclusion among the destructive sins",
        explanation:
          "Few prohibitions are accompanied by a declaration of war from Allah and His Messenger, a comprehensive curse, and listing among the seven major destructive sins.",
      },
      {
        question: "What is the correct approach when a Muslim is forced into a situation involving Riba (e.g., unavoidable bank account)?",
        options: [
          "Embrace it fully",
          "Minimize involvement, avoid benefiting from the interest, and give any accrued interest to charity without intending reward",
          "Take maximum interest",
          "Ignore the issue",
        ],
        correctAnswer: "Minimize involvement, avoid benefiting from the interest, and give any accrued interest to charity without intending reward",
        explanation:
          "Scholars advise necessity (darurah) allows limited engagement, but one must not consume the interest; it should be disposed of to the poor without seeking reward, while seeking halal alternatives.",
      },
      {
        question: "In the Hadith about the Night Journey (Isra), what did the Prophet (PBUH) see regarding people who consumed Riba?",
        options: [
          "People in gardens",
          "People whose stomachs were like houses filled with snakes visible from the outside",
          "People praying",
          "Nothing related",
        ],
        correctAnswer: "People whose stomachs were like houses filled with snakes visible from the outside",
        explanation:
          "Abu Hurairah (RA) reported that during the Isra the Prophet (PBUH) saw people with stomachs like houses containing snakes, and Jibril informed him they were the consumers of Riba. (Ibn Majah)",
      },
      {
        question: "What is the relationship between Riba and oppression (zulm) in Islamic teachings?",
        options: [
          "There is no connection",
          "Riba is a form of oppression because it transfers wealth unjustly without reciprocal benefit or risk-sharing",
          "Riba reduces oppression",
          "Only high rates are oppressive",
        ],
        correctAnswer: "Riba is a form of oppression because it transfers wealth unjustly without reciprocal benefit or risk-sharing",
        explanation:
          "The Quran links the prohibition to justice. Riba allows the strong to exploit the weak by guaranteeing gain while transferring all risk to the borrower.",
      },
      {
        question: "According to scholars, what is the wisdom behind requiring equality and spot exchange for the six commodities?",
        options: [
          "To make trade difficult",
          "To prevent hidden Riba, ensure fairness, and maintain the integrity of money and staple foods",
          "Only for historical reasons",
          "To favor certain merchants",
        ],
        correctAnswer: "To prevent hidden Riba, ensure fairness, and maintain the integrity of money and staple foods",
        explanation:
          "These items functioned as money or essential staples. The rules protect against manipulation of value and ensure transparent, just exchange.",
      },
      {
        question: "What is the status of 'Bay' al-Inah' (sale and buy-back) when used to circumvent Riba?",
        options: [
          "Fully permissible",
          "Prohibited by many scholars as a legal trick (hilah) leading to Riba",
          "Recommended",
          "Only allowed in necessity",
        ],
        correctAnswer: "Prohibited by many scholars as a legal trick (hilah) leading to Riba",
        explanation:
          "Bay' al-Inah (selling an item on credit then buying it back at a lower cash price) is viewed by a large body of scholars as a device that results in a Riba-like outcome and is therefore forbidden.",
      },
      {
        question: "How does the Quran describe the standing of Riba-consumers on the Day of Judgment in relation to Satan?",
        options: [
          "They stand with the angels",
          "They stand as one whom Satan has prostrated by his touch (driven to madness)",
          "They stand normally",
          "They do not stand",
        ],
        correctAnswer: "They stand as one whom Satan has prostrated by his touch (driven to madness)",
        explanation:
          "The vivid description in 2:275 likens their resurrection to a person beaten into insanity by Satan's touch, indicating the severe spiritual and psychological consequence.",
      },
      {
        question: "What is the Islamic view on the time value of money in the context of pure loans?",
        options: [
          "Time value may be charged as interest",
          "Time alone does not justify a predetermined excess on a pure loan; any such excess is Riba",
          "Time value is the basis of all finance",
          "It is irrelevant",
        ],
        correctAnswer: "Time alone does not justify a predetermined excess on a pure loan; any such excess is Riba",
        explanation:
          "While Islam recognizes that money can be used productively, a pure loan (Qard) is an act of benevolence; charging for time alone without risk-sharing is the essence of prohibited Riba.",
      },
      {
        question: "In Surah Al-Baqarah 2:280, what does Allah encourage regarding a debtor in difficulty?",
        options: [
          "Increase the debt",
          "If the debtor is in hardship, grant a delay until ease, and if you remit it as charity it is better for you",
          "Seize all assets immediately",
          "Ignore the debt",
        ],
        correctAnswer: "If the debtor is in hardship, grant a delay until ease, and if you remit it as charity it is better for you",
        explanation:
          "Allah says: 'And if someone is in hardship, then [let there be] postponement until [a time of] ease. But if you give [from your right as] charity, then it is better for you, if you only knew.' (2:280)",
      },
      {
        question: "What is the difference between Riba and legitimate profit-sharing (Mudarabah)?",
        options: [
          "There is no difference",
          "In Mudarabah profit is shared based on actual outcome and risk is shared; in Riba the return is fixed and risk is borne solely by the borrower",
          "Mudarabah always has fixed returns",
          "Riba involves goods",
        ],
        correctAnswer: "In Mudarabah profit is shared based on actual outcome and risk is shared; in Riba the return is fixed and risk is borne solely by the borrower",
        explanation:
          "Mudarabah is a partnership where capital provider and entrepreneur share profit according to agreement and loss is borne by capital (unless negligence). Riba guarantees a return regardless of outcome.",
      },
      {
        question: "According to the Sunnah, is the prohibition of Riba limited to gold and silver or does it extend by analogy?",
        options: [
          "Only gold and silver",
          "The six items are explicit; scholars extend the ruling by analogy (qiyas) to other currencies and similar fungible items",
          "No extension is allowed",
          "Only food items",
        ],
        correctAnswer: "The six items are explicit; scholars extend the ruling by analogy (qiyas) to other currencies and similar fungible items",
        explanation:
          "The majority of scholars apply the illah (effective cause) of the Hadith – medium of exchange or measurability by weight/volume – to modern currencies and similar commodities.",
      },
      {
        question: "What did the Prophet (PBUH) say about the prevalence of Riba and adultery together?",
        options: [
          "They have no effect",
          "When Riba and zina become widespread among people, they become vulnerable to the punishment of Allah",
          "They bring prosperity",
          "Only one of them matters",
        ],
        correctAnswer: "When Riba and zina become widespread among people, they become vulnerable to the punishment of Allah",
        explanation:
          "Abdullah ibn Mas'ud (RA) reported that the Prophet (PBUH) said that when usury and adultery become prevalent, the people become deserving of Allah's punishment. (Ahmad and others)",
      },
      {
        question: "Is it permissible to give a gift to a lender after repaying a loan if no such gift was stipulated?",
        options: [
          "Completely forbidden",
          "Permissible and even praised if it is voluntary and not a condition of the loan",
          "Only if the gift is large",
          "Only for non-Muslims",
        ],
        correctAnswer: "Permissible and even praised if it is voluntary and not a condition of the loan",
        explanation:
          "The Prophet (PBUH) himself returned a loan with an extra amount as a gift on occasion, showing that voluntary, non-stipulated excess is not Riba. The key is the absence of a prior condition.",
      },
      {
        question: "What is the ruling on insurance contracts that involve Riba elements (e.g., conventional life insurance with guaranteed interest)?",
        options: [
          "Fully permissible",
          "Prohibited due to the presence of Riba, gharar (excessive uncertainty), and often maysir (gambling)",
          "Only the interest portion is problematic",
          "Recommended",
        ],
        correctAnswer: "Prohibited due to the presence of Riba, gharar (excessive uncertainty), and often maysir (gambling)",
        explanation:
          "Conventional insurance typically contains Riba (interest on reserves or guaranteed returns), excessive uncertainty, and elements of gambling, rendering it impermissible according to the majority of contemporary scholars.",
      },
      {
        question: "How should a Muslim treat interest that has already been credited to his conventional bank account?",
        options: [
          "Spend it freely",
          "Do not consume it; dispose of it by giving to the poor or public welfare without intending sadaqah reward",
          "Reinvest it",
          "Return it to the bank only",
        ],
        correctAnswer: "Do not consume it; dispose of it by giving to the poor or public welfare without intending sadaqah reward",
        explanation:
          "Scholarly consensus is that one must purify the wealth by removing the Riba portion and channeling it to those in need, while not claiming the reward of charity for oneself.",
      },
      {
        question: "What is the significance of the Prophet (PBUH) placing the Riba of Abbas under his feet?",
        options: [
          "It was a personal favor",
          "It demonstrated that the prohibition applied even to his closest relatives and that no one was exempt",
          "It was symbolic only for Abbas",
          "It allowed Abbas to keep it",
        ],
        correctAnswer: "It demonstrated that the prohibition applied even to his closest relatives and that no one was exempt",
        explanation:
          "By annulling his own uncle's Riba first, the Prophet (PBUH) showed the universality and seriousness of the ruling – no favoritism, even for family.",
      },
      {
        question: "In the context of currency exchange (sarf), what are the two conditions to avoid Riba?",
        options: [
          "Any rate and any delay",
          "Equality (if same currency) or mutual consent on rate (if different), and immediate hand-to-hand exchange",
          "Only written contracts",
          "Only bank approval",
        ],
        correctAnswer: "Equality (if same currency) or mutual consent on rate (if different), and immediate hand-to-hand exchange",
        explanation:
          "Currency exchange is governed by the rules of the six commodities Hadith. Same currency must be equal and spot; different currencies may differ in amount but must still be spot.",
      },
      {
        question: "What does the term 'Ras al-Mal' refer to in the verses about Riba?",
        options: [
          "The interest amount",
          "The principal capital that may be retained upon repentance",
          "The total debt including interest",
          "Charity money",
        ],
        correctAnswer: "The principal capital that may be retained upon repentance",
        explanation:
          "In 2:279 Allah says that those who repent may have their 'ru'us amwalikum' (heads of their wealth / principal), neither wronging nor being wronged.",
      },
    ],
    advanced: [
      {
        question: "What is the precise definition of Riba according to classical fiqh terminology?",
        options: [
          "Any increase in wealth",
          "An increase in one of two homogeneous equivalents being exchanged without this increase being accompanied by a counter-value (iwad)",
          "Only bank interest",
          "Profit from any sale",
        ],
        correctAnswer: "An increase in one of two homogeneous equivalents being exchanged without this increase being accompanied by a counter-value (iwad)",
        explanation:
          "This is the technical definition used by the jurists: Riba is an unjustified excess in an exchange of like for like without a corresponding counter-value.",
      },
      {
        question: "How did Imam Abu Hanifa and the Hanafi school approach the illah (effective cause) of Riba in the six commodities?",
        options: [
          "Only the named items are covered",
          "The illah is genus + measurability by weight or volume; thus the ruling extends to all items sharing that illah",
          "Only gold and silver",
          "No analogy is permitted",
        ],
        correctAnswer: "The illah is genus + measurability by weight or volume; thus the ruling extends to all items sharing that illah",
        explanation:
          "The Hanafi school identifies the effective cause as being of the same genus and measurable by weight or volume, allowing qiyas to other similar items.",
      },
      {
        question: "What is the position of the Maliki and Shafi'i schools regarding the illah of Riba al-Fadl in foodstuffs?",
        options: [
          "No extension beyond the six",
          "The illah is being a foodstuff that is stored (or similar); thus it applies to other staple foods",
          "Only monetary items",
          "Only if the food is cooked",
        ],
        correctAnswer: "The illah is being a foodstuff that is stored (or similar); thus it applies to other staple foods",
        explanation:
          "Malikis and Shafi'is generally take the cause as being edible and storable (or being a staple food), thereby extending the prohibition to other food items by analogy.",
      },
      {
        question: "What is 'Riba al-Qard' and how does it relate to Riba al-Nasi'ah?",
        options: [
          "A different type altogether",
          "It is the form of Riba al-Nasi'ah that occurs specifically in loan contracts (every loan that draws benefit is Riba)",
          "Only applicable to commodities",
          "A recommended practice",
        ],
        correctAnswer: "It is the form of Riba al-Nasi'ah that occurs specifically in loan contracts (every loan that draws benefit is Riba)",
        explanation:
          "Riba al-Qard is the excess stipulated in a loan contract. It is the most common manifestation of Riba al-Nasi'ah in modern times.",
      },
      {
        question: "How did Ibn Taymiyyah view legal stratagems (hiyal) designed to achieve the outcome of Riba?",
        options: [
          "He fully permitted them",
          "He strongly rejected them, arguing that the intention and outcome matter and that such tricks do not remove the prohibition",
          "He was silent",
          "He recommended them for necessity",
        ],
        correctAnswer: "He strongly rejected them, arguing that the intention and outcome matter and that such tricks do not remove the prohibition",
        explanation:
          "Ibn Taymiyyah and Ibn al-Qayyim were among the most vocal critics of hiyal that simulate a sale to achieve a Riba result, insisting on the substance over the form.",
      },
      {
        question: "What is the concept of 'Sadd al-Dhara'i' (blocking the means) in relation to Riba al-Fadl?",
        options: [
          "Allowing all means",
          "The prohibition of unequal spot exchanges of ribawi items serves as a means to block the path to Riba al-Nasi'ah",
          "Only for non-Muslims",
          "A modern invention",
        ],
        correctAnswer: "The prohibition of unequal spot exchanges of ribawi items serves as a means to block the path to Riba al-Nasi'ah",
        explanation:
          "Many scholars explain that Riba al-Fadl was prohibited as a preventive measure (sadd al-dhara'i) so that people would not gradually move toward deferred unequal exchanges.",
      },
      {
        question: "In the debate over whether modern paper currency is subject to the rules of gold and silver, what is the dominant contemporary position?",
        options: [
          "Paper currency is not subject to Riba rules",
          "Paper currency takes the ruling of gold and silver (thamaniyyah – monetary quality), so exchanging different currencies must be spot",
          "Only if backed by gold",
          "Only for large amounts",
        ],
        correctAnswer: "Paper currency takes the ruling of gold and silver (thamaniyyah – monetary quality), so exchanging different currencies must be spot",
        explanation:
          "The majority of contemporary Fiqh academies (OIC, AAOIFI, etc.) hold that fiat currencies possess the monetary characteristic (thamaniyyah) and are therefore subject to the rules of sarf (currency exchange).",
      },
      {
        question: "What is the ruling on 'Tawarruq' (monetization) as practiced in some Islamic banks when it involves organized, pre-arranged buy-back?",
        options: [
          "Unanimously accepted",
          "Highly controversial; many scholars (including the OIC Fiqh Academy in later resolutions) have prohibited organized Tawarruq as a disguised Riba transaction",
          "Recommended as the best product",
          "Only for individuals, not banks",
        ],
        correctAnswer: "Highly controversial; many scholars (including the OIC Fiqh Academy in later resolutions) have prohibited organized Tawarruq as a disguised Riba transaction",
        explanation:
          "While classical individual Tawarruq has some basis, the organized, bank-intermediated version that creates a cash loan with fixed return has been declared impermissible by major academies because it replicates Riba.",
      },
      {
        question: "How does the concept of 'Maqasid al-Shariah' (higher objectives) relate to the prohibition of Riba?",
        options: [
          "It has no relation",
          "The prohibition protects the objectives of wealth (mal) by preventing injustice, concentration of wealth, and economic exploitation",
          "It only protects religion",
          "It allows Riba for public interest",
        ],
        correctAnswer: "The prohibition protects the objectives of wealth (mal) by preventing injustice, concentration of wealth, and economic exploitation",
        explanation:
          "One of the five essential maqasid is the preservation of wealth. Riba undermines this by enabling exploitation and unequal distribution without productive contribution.",
      },
      {
        question: "What was the view of Imam al-Ghazali on the wisdom behind the prohibition of Riba?",
        options: [
          "He saw no wisdom",
          "He explained that Riba removes the necessity of work and trade, leads to the concentration of wealth, and destroys mutual cooperation",
          "He considered it only a test",
          "He limited it to the six items without wisdom",
        ],
        correctAnswer: "He explained that Riba removes the necessity of work and trade, leads to the concentration of wealth, and destroys mutual cooperation",
        explanation:
          "In his works, al-Ghazali highlighted that Riba allows wealth to grow without effort or risk, discouraging productive enterprise and harming social solidarity.",
      },
      {
        question: "In the Hadith literature, what is the grading of the narration that Riba has seventy degrees, the lowest being like incest with one's mother?",
        options: [
          "Fabricated",
          "Hasan or Sahih according to a number of Hadith scholars (reported in Ibn Majah and others)",
          "Only in non-canonical books",
          "Rejected by all",
        ],
        correctAnswer: "Hasan or Sahih according to a number of Hadith scholars (reported in Ibn Majah and others)",
        explanation:
          "Although some scholars discuss the chain, many Hadith experts (including al-Albani in some of his works) have graded versions of this meaning as authentic or hasan, and it is widely cited for the severity of the sin.",
      },
      {
        question: "What is the difference between 'Riba al-Duyun' and 'Riba al-Buyu' in classical terminology?",
        options: [
          "There is no difference",
          "Riba al-Duyun is Riba of debts/loans (Nasi'ah); Riba al-Buyu is Riba occurring in sales (primarily Fadl)",
          "One is modern, one is ancient",
          "Only one is prohibited",
        ],
        correctAnswer: "Riba al-Duyun is Riba of debts/loans (Nasi'ah); Riba al-Buyu is Riba occurring in sales (primarily Fadl)",
        explanation:
          "Classical texts often use Riba al-Duyun for the loan-related form and Riba al-Buyu for the exchange-related form prohibited by the Hadith of the six commodities.",
      },
      {
        question: "How did the Andalusian scholar Ibn Rushd (Averroes) contribute to the understanding of Riba?",
        options: [
          "He rejected the prohibition",
          "In Bidayat al-Mujtahid he systematically compared the positions of the schools on the illah of Riba and the scope of the six commodities",
          "He only wrote on philosophy",
          "He limited Riba to gold",
        ],
        correctAnswer: "In Bidayat al-Mujtahid he systematically compared the positions of the schools on the illah of Riba and the scope of the six commodities",
        explanation:
          "Ibn Rushd's comparative fiqh work remains a primary reference for understanding the different juristic approaches to the causes and applications of the Riba prohibition.",
      },
      {
        question: "What is the contemporary scholarly consensus (as reflected in AAOIFI and OIC Fiqh Academy) on late payment penalties in Islamic financing?",
        options: [
          "Any penalty is Riba",
          "A penalty clause is allowed to deter late payment, but the amount must be channeled to charity and cannot be taken as income by the financier",
          "The financier may keep the full penalty",
          "No penalty is ever allowed",
        ],
        correctAnswer: "A penalty clause is allowed to deter late payment, but the amount must be channeled to charity and cannot be taken as income by the financier",
        explanation:
          "To avoid Riba, Islamic financial institutions may stipulate a penalty for delay, but the proceeds are given to charity; the institution itself cannot benefit from the excess.",
      },
      {
        question: "What is the ruling on 'Bay' al-Wafa' (sale with a right of redemption) when it functions as a secured loan with interest?",
        options: [
          "Fully valid",
          "Prohibited by the majority of scholars when it is a disguised Riba loan",
          "Recommended",
          "Only for real estate",
        ],
        correctAnswer: "Prohibited by the majority of scholars when it is a disguised Riba loan",
        explanation:
          "Bay' al-Wafa' was historically used as a way to give a loan secured by property while charging an excess. Most scholars rejected it as a hilah leading to Riba.",
      },
      {
        question: "In the methodology of Usul al-Fiqh, why is the prohibition of Riba considered 'qat'i' (definitive) rather than 'zanni' (speculative)?",
        options: [
          "Because it is mentioned only in Hadith",
          "Because it is established by multiple decisive Quranic verses and mass-transmitted (mutawatir) or widely authenticated Hadith, with consensus (ijma') of the Ummah",
          "Because it is a modern ruling",
          "Because only one school accepts it",
        ],
        correctAnswer: "Because it is established by multiple decisive Quranic verses and mass-transmitted (mutawatir) or widely authenticated Hadith, with consensus (ijma') of the Ummah",
        explanation:
          "The prohibition reaches the level of certainty (qat'i) due to the clarity and repetition in the Quran, the strength of the Sunnah, and the unanimous agreement of Muslim scholars throughout history.",
      },
      {
        question: "What is the position of the Zahiri school (Ibn Hazm) regarding the extension of Riba rules beyond the six commodities?",
        options: [
          "They freely analogize",
          "They restrict the ruling strictly to the six items named in the Hadith and reject qiyas in this matter",
          "They prohibit all trade",
          "They allow all excesses",
        ],
        correctAnswer: "They restrict the ruling strictly to the six items named in the Hadith and reject qiyas in this matter",
        explanation:
          "Ibn Hazm and the Zahiris, consistent with their rejection of analogy in many areas, limited Riba al-Fadl to the explicitly mentioned six commodities.",
      },
      {
        question: "How does the concept of 'Ghunm bi al-Ghurm' (entitlement to profit is linked to liability for loss) relate to the prohibition of Riba?",
        options: [
          "It has no relation",
          "It is a foundational principle: one cannot claim a guaranteed return (Riba) without bearing the corresponding risk of loss",
          "It allows Riba in partnerships",
          "It only applies to labor",
        ],
        correctAnswer: "It is a foundational principle: one cannot claim a guaranteed return (Riba) without bearing the corresponding risk of loss",
        explanation:
          "This maxim, derived from Hadith, underpins why a pure lender cannot stipulate a fixed excess: profit is justified only when one is exposed to the possibility of loss.",
      },
      {
        question: "What was the approach of the early Hanafi scholars (such as Imam Muhammad al-Shaybani) to transactions that combine sale and loan in a way that produces Riba?",
        options: [
          "They permitted all combinations",
          "They prohibited combining a sale and a loan in one contract when it leads to an excess benefit for the lender",
          "They ignored the issue",
          "They required written approval",
        ],
        correctAnswer: "They prohibited combining a sale and a loan in one contract when it leads to an excess benefit for the lender",
        explanation:
          "The classic maxim 'every loan that draws a benefit is Riba' was applied by early Hanafis to invalidate contracts that package a loan with a sale or other benefit for the creditor.",
      },
      {
        question: "In contemporary Islamic finance, what is the status of 'profit rate' benchmarking against conventional interest rates?",
        options: [
          "Fully prohibited in all cases",
          "Permissible as a pricing benchmark provided the actual contract is structured as a genuine sale, lease, or partnership free from Riba",
          "Required for all products",
          "Only allowed for sovereign deals",
        ],
        correctAnswer: "Permissible as a pricing benchmark provided the actual contract is structured as a genuine sale, lease, or partnership free from Riba",
        explanation:
          "Major standards bodies allow the use of conventional rates (e.g., LIBOR historically) purely as a reference for pricing Islamic contracts, as long as the underlying contract itself is Shariah-compliant and does not contain Riba.",
      },
      {
        question: "What is the theological implication of Allah declaring war on those who do not abandon Riba (2:279)?",
        options: [
          "It is merely rhetorical",
          "It elevates the sin of persistent Riba consumption to a level of direct confrontation with Allah and His Messenger, indicating extreme gravity",
          "It applies only to states",
          "It is limited to the time of revelation",
        ],
        correctAnswer: "It elevates the sin of persistent Riba consumption to a level of direct confrontation with Allah and His Messenger, indicating extreme gravity",
        explanation:
          "No other financial sin is described with the language of a declaration of war from Allah. This underscores that continuing in Riba after clear knowledge is an act of open defiance.",
      },
      {
        question: "How did classical scholars reconcile the apparent tension between the Hadith 'There is no Riba except in nasi'ah' and the Hadith of the six commodities?",
        options: [
          "They discarded one of them",
          "They understood 'no Riba except in nasi'ah' as referring to the primary and most severe form, while the six-commodities Hadith established an additional preventive form (Fadl)",
          "They said the six-commodities Hadith is weak",
          "They limited everything to deferment",
        ],
        correctAnswer: "They understood 'no Riba except in nasi'ah' as referring to the primary and most severe form, while the six-commodities Hadith established an additional preventive form (Fadl)",
        explanation:
          "The majority reconciled the texts by noting that the primary Riba condemned in the Quran is that of deferment, while the Sunnah added the prohibition of excess in spot exchanges of specific items as a further safeguard.",
      },
      {
        question: "What is the ruling on a Muslim working in a conventional bank in a role directly involved in interest-based transactions?",
        options: [
          "Fully permissible",
          "Prohibited according to the majority, because it involves assisting in Riba; alternative employment should be sought",
          "Recommended for learning",
          "Only the salary is haram",
        ],
        correctAnswer: "Prohibited according to the majority, because it involves assisting in Riba; alternative employment should be sought",
        explanation:
          "Based on the Hadith cursing the recorder and witnesses of Riba, scholars generally forbid employment that directly facilitates interest transactions, while allowing roles clearly separated from such activities under necessity with conditions.",
      },
      {
        question: "In the Maqasid framework, how does the prohibition of Riba support the objective of preserving the intellect ('aql)?",
        options: [
          "It has no relation",
          "By preventing the economic insanity and social instability that widespread usury historically produces, thereby protecting sound societal reasoning and order",
          "It only protects wealth",
          "It restricts education",
        ],
        correctAnswer: "By preventing the economic insanity and social instability that widespread usury historically produces, thereby protecting sound societal reasoning and order",
        explanation:
          "Although the primary link is to the preservation of wealth, the Quranic description of Riba-consumers as those driven to madness also points to the broader social and intellectual corruption that systemic Riba engenders.",
      },
      {
        question: "What is the position of contemporary Fiqh academies on sovereign bonds that pay fixed interest?",
        options: [
          "Permissible if issued by a Muslim government",
          "Prohibited as clear Riba; alternatives such as Sukuk based on real assets or partnerships are required",
          "Only the interest is problematic, the principal is fine",
          "Recommended for diversification",
        ],
        correctAnswer: "Prohibited as clear Riba; alternatives such as Sukuk based on real assets or partnerships are required",
        explanation:
          "Fixed-interest government bonds are classic Riba instruments. Islamic alternatives (Sukuk) must be structured around tangible assets, usufruct, or partnership interests to remain compliant.",
      },
      {
        question: "How does the Quranic pairing of Riba prohibition with the encouragement of charity (2:276-280) reflect a broader economic vision?",
        options: [
          "It has no broader meaning",
          "It contrasts an extractive, zero-sum system (Riba) with a circulatory, solidarity-based system (Sadaqah and Qard Hasan), aiming at equitable circulation of wealth",
          "It only concerns individual piety",
          "It favors the wealthy",
        ],
        correctAnswer: "It contrasts an extractive, zero-sum system (Riba) with a circulatory, solidarity-based system (Sadaqah and Qard Hasan), aiming at equitable circulation of wealth",
        explanation:
          "The sequential verses move from destroying Riba, increasing charity, commanding the abandonment of remaining Riba, warning of war, and finally urging leniency and remission for the debtor – presenting a coherent vision of economic justice.",
      },
      {
        question: "What is the classical ruling on a sale in which the price is increased solely because payment is deferred, without any change in the commodity?",
        options: [
          "Valid as ordinary trade",
          "It is Riba al-Nasi'ah if the increase is purely for the time factor",
          "Recommended for merchants",
          "Only disliked",
        ],
        correctAnswer: "It is Riba al-Nasi'ah if the increase is purely for the time factor",
        explanation:
          "When two prices are quoted – one for cash and a higher one for credit – and the difference is solely compensation for deferment, the majority of scholars consider the excess to be Riba.",
      },
      {
        question: "In the writings of Ibn al-Qayyim, what is the relationship between Riba and the closing of the doors of goodness?",
        options: [
          "Riba opens doors of goodness",
          "Riba is described as sealing seventy doors of goodness, with the lowest degree comparable to a major immoral act",
          "No such statement exists",
          "It only affects the giver",
        ],
        correctAnswer: "Riba is described as sealing seventy doors of goodness, with the lowest degree comparable to a major immoral act",
        explanation:
          "Ibn al-Qayyim and other scholars transmitted and elaborated on the prophetic meaning that Riba blocks numerous avenues of blessing and good, underscoring its comprehensive harm.",
      },
      {
        question: "What methodological principle did the majority of scholars use to extend the Riba rules of gold and silver to modern fiat currencies?",
        options: [
          "Strict literalism only",
          "Qiyas (analogy) based on the shared effective cause of 'thamaniyyah' (being a medium of exchange / monetary quality)",
          "Personal preference",
          "Governmental decree only",
        ],
        correctAnswer: "Qiyas (analogy) based on the shared effective cause of 'thamaniyyah' (being a medium of exchange / monetary quality)",
        explanation:
          "Because modern currencies serve the same monetary function that gold and silver served, the majority apply the same exchange rules (spot transaction when currencies differ) by analogical reasoning.",
      },
      {
        question: "What is the ultimate spiritual consequence highlighted by the Prophet (PBUH) for a society in which Riba becomes ubiquitous?",
        options: [
          "Guaranteed prosperity",
          "Even those who do not directly consume it will be affected by its 'dust,' indicating pervasive moral and economic corruption",
          "No consequence",
          "Only individual accountability",
        ],
        correctAnswer: "Even those who do not directly consume it will be affected by its 'dust,' indicating pervasive moral and economic corruption",
        explanation:
          "The Hadith that a time will come when everyone will take Riba, and if not, its dust will reach him, warns that systemic Riba corrupts the entire economic environment, making complete avoidance extremely difficult.",
      },
    ],
  },
}

// Ensure intermediate level is populated (already complete above)
if (!ribaCategory.levels.intermediate || ribaCategory.levels.intermediate.length === 0) {
  ribaCategory.levels.intermediate = [...ribaCategory.levels.easy]
}

export default ribaCategory
