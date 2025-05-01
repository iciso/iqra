import type { QuizCategory } from "@/types/quiz"

const islamicFinanceCategory: QuizCategory = {
  id: "islamic-finance",
  title: "Islamic Finance",
  description: "Principles and practices of Islamic economics",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the Arabic term for interest in Islamic finance?",
        options: ["Gharar", "Riba", "Maysir", "Zakat"],
        correctAnswer: "Riba",
        explanation:
          "Riba is the Arabic term for interest or usury. Its prohibition is one of the fundamental principles of Islamic finance, based on verses from the Quran Surah-Al-Bakara (2:279) and the teachings of Prophet Muhammad (PBUH). In Islamic finance, riba refers to interest charged on loans. Religious practice forbids riba, even at low interest rates, and it is considered both illegal and unethical or usurious. Islamic banking has provided workarounds to riba, including a profit-sharing system in which borrowers agree to return a portion of profits as payment for the loan.",
      },
      {
        question: "What is the primary source of Islamic finance principles?",
        options: ["Economic theories", "Quran and Sunnah", "Banking regulations", "Cultural traditions"],
        correctAnswer: "Quran and Sunnah",
        explanation:
          "The Quran and Sunnah (teachings and practices of Prophet Muhammad) are the primary sources of Islamic finance principles, providing guidance on financial transactions and ethical economic behavior.",
      },
      {
        question: "Which of the following is NOT one of the main prohibitions in Islamic finance?",
        options: ["Riba (interest)", "Gharar (excessive uncertainty)", "Maysir (gambling)", "Sadaqah (charity)"],
        correctAnswer: "Sadaqah (charity)",
        explanation:
          "Sadaqah refers to voluntary charity and is encouraged in Islam, not prohibited. The main prohibitions in Islamic finance are riba (interest), gharar (excessive uncertainty), and maysir (gambling).",
      },
      {
        question: "What type of Islamic financial contract involves a profit-sharing partnership?",
        options: ["Ijara", "Murabaha", "Musharakah", "Takaful"],
        correctAnswer: "Musharakah",
        explanation:
          "Musharakah is a joint venture partnership structure in Islamic finance where all partners contribute capital and share profits and losses according to a pre-agreed ratio.",
      },
      {
        question: "What is 'Sukuk' in Islamic finance?",
        options: ["Islamic currency", "Islamic credit card", "Islamic investment certificates", "Islamic loan"],
        correctAnswer: "Islamic investment certificates",
        explanation:
          "Sukuk are Islamic investment certificates that represent proportional ownership in an asset or business venture. They are sometimes referred to as 'Islamic bonds' though they differ from conventional bonds.",
      },
      {
        question: "What is 'Takaful'?",
        options: ["Islamic banking", "Islamic insurance", "Islamic loan", "Islamic tax"],
        correctAnswer: "Islamic insurance",
        explanation:
          "Takaful is a type of Islamic insurance based on the principle of mutual cooperation where participants contribute to a pool of funds to guarantee each other against loss or damage.",
      },
      {
        question: "Which Islamic finance concept refers to the sale of goods at a marked-up price?",
        options: ["Mudarabah", "Musharakah", "Murabaha", "Istisna"],
        correctAnswer: "Murabaha",
        explanation:
          "Murabaha is a cost-plus financing structure where the seller (typically a bank) explicitly declares the cost of the commodity and the profit margin, selling it to the buyer at a marked-up price.",
      },
      {
        question: "What is 'Ijara' in Islamic finance?",
        options: ["Profit-sharing", "Insurance", "Leasing arrangement", "Interest-free loan"],
        correctAnswer: "Leasing arrangement",
        explanation:
          "Ijara is similar to a conventional lease, where the bank purchases an asset and leases it to a customer for a specific period, with the ownership either remaining with the bank or transferring to the customer at the end of the lease period (Ijara wa Iqtina).",
      },
      {
        question: "What distinguishes an Islamic bank from a conventional bank?",
        options: [
          "Islamic banks only serve Muslim customers",
          "Islamic banks don't make profits",
          "Islamic banks operate based on Shariah principles",
          "Islamic banks don't provide loans",
        ],
        correctAnswer: "Islamic banks operate based on Shariah principles",
        explanation:
          "Islamic banks distinguish themselves by operating in accordance with Shariah (Islamic law) principles, avoiding interest, excessive uncertainty, and investments in prohibited industries, and using profit-and-loss sharing arrangements.",
      },
      {
        question: "What is the purpose of a Shariah board in Islamic financial institutions?",
        options: [
          "To manage the bank's daily operations",
          "To ensure compliance with Islamic principles",
          "To maximize profits for shareholders",
          "To handle customer complaints",
        ],
        correctAnswer: "To ensure compliance with Islamic principles",
        explanation:
          "A Shariah board comprises Islamic scholars who oversee the activities of Islamic financial institutions to ensure their products and operations comply with Islamic principles and provide guidance on Shariah-related matters.",
      },
    ],
    advanced: [
      {
        question: "What is 'Bai' al-Inah' and why is it controversial in Islamic finance?",
        options: [
          "A partnership contract that is universally accepted",
          "A sale and buy-back arrangement criticized as a potential riba circumvention",
          "A profit-sharing agreement with fixed returns",
          "A commodity trade that is always permitted",
        ],
        correctAnswer: "A sale and buy-back arrangement criticized as a potential riba circumvention",
        explanation:
          "Bai' al-Inah involves selling an asset and buying it back at a different price. It is controversial because it can be used to circumvent the prohibition of riba by creating a loan with a predetermined return through back-to-back sales. While accepted by some schools of thought, others consider it a legal fiction to bypass Shariah principles.",
      },
      {
        question: "How does 'Mudarabah' differ from 'Musharakah' in Islamic finance?",
        options: [
          "There is no difference; they are synonyms",
          "In Mudarabah, only one party provides capital while the other provides expertise; in Musharakah, all partners contribute capital",
          "Mudarabah is prohibited while Musharakah is permitted",
          "Mudarabah is for individuals while Musharakah is for corporations",
        ],
        correctAnswer:
          "In Mudarabah, only one party provides capital while the other provides expertise; in Musharakah, all partners contribute capital",
        explanation:
          "In a Mudarabah contract, one party (rab al-mal) provides capital while the other (mudarib) provides expertise and management. In Musharakah, all partners contribute capital and have the right to participate in management, sharing profits according to a pre-agreed ratio and losses proportionate to capital contribution.",
      },
      {
        question: "What is the Islamic concept of 'Maqasid al-Shariah' and how does it relate to finance?",
        options: [
          "It refers only to prayer requirements",
          "It is the higher objectives of Shariah, including the protection of wealth",
          "It is a type of Islamic bond",
          "It is a form of Islamic tax",
        ],
        correctAnswer: "It is the higher objectives of Shariah, including the protection of wealth",
        explanation:
          "Maqasid al-Shariah refers to the higher objectives of Islamic law, which include the protection of faith, life, intellect, lineage, and wealth. In finance, it provides a framework for evaluating whether financial practices align with the broader goals of Islamic law beyond mere technical compliance.",
      },
      {
        question: "What distinguishes 'Sukuk' from conventional bonds?",
        options: [
          "Sukuk always provides fixed returns",
          "Sukuk doesn't represent ownership in underlying assets",
          "Sukuk represents partial ownership in underlying assets, not just a debt obligation",
          "Sukuk can only be issued by Islamic banks",
        ],
        correctAnswer: "Sukuk represents partial ownership in underlying assets, not just a debt obligation",
        explanation:
          "Unlike conventional bonds which are pure debt obligations, sukuk represents undivided shares in ownership of tangible assets, usufruct, services, or business ventures. Returns to sukuk holders are derived from the performance of these assets, not from the obligation to pay interest.",
      },
      {
        question: "What is 'Istisna' in Islamic finance?",
        options: [
          "A contract of exchange with deferred delivery",
          "A manufacturing contract where payment can be made in advance and delivery in the future",
          "A profit-sharing agreement",
          "An Islamic insurance model",
        ],
        correctAnswer: "A manufacturing contract where payment can be made in advance and delivery in the future",
        explanation:
          "Istisna is a manufacturing contract where a party undertakes to produce a specific item with specified features at a predetermined price to be delivered at a future date. It allows for payment flexibility - it can be paid in installments or deferred, making it suitable for financing construction and manufacturing projects.",
      },
      {
        question: "How does Islamic finance approach the concept of 'time value of money'?",
        options: [
          "It fully accepts it in the same way as conventional finance",
          "It rejects the concept entirely",
          "It recognizes time value in real economic activities but not in pure monetary transactions",
          "It only applies to government transactions",
        ],
        correctAnswer: "It recognizes time value in real economic activities but not in pure monetary transactions",
        explanation:
          "Islamic finance recognizes the time value of money in real economic activities involving actual goods and services (e.g., allowing a higher price for deferred payment in trade), but rejects it in pure monetary transactions (money for money) as this would constitute riba.",
      },
      {
        question: "What is 'Tawarruq' and why is it controversial?",
        options: [
          "A direct interest-based loan that is always prohibited",
          "A commodity purchase and sale arrangement used to obtain cash financing",
          "A joint venture structure universally accepted by scholars",
          "An Islamic insurance contract",
        ],
        correctAnswer: "A commodity purchase and sale arrangement used to obtain cash financing",
        explanation:
          "Tawarruq is a transaction where a person buys a commodity on credit and immediately sells it to a third party for cash. While used by many Islamic banks for personal financing, it remains controversial as some scholars view it as synthetic and similar to interest-based lending in economic substance despite technical compliance with Shariah rules.",
      },
      {
        question: "How does 'Zakat' interact with modern corporate finance in Islam?",
        options: [
          "Corporations are exempt from Zakat",
          "Corporate Zakat is calculated at 10% of net profit",
          "Corporate Zakat is typically calculated at 2.5% of zakatable assets",
          "Zakat only applies to individuals, not to corporations",
        ],
        correctAnswer: "Corporate Zakat is typically calculated at 2.5% of zakatable assets",
        explanation:
          "In Islamic finance, corporations can be subject to Zakat, typically calculated at 2.5% of zakatable assets (working capital, net receivables, inventory meant for sale, etc.). The specific methodology may vary based on business type, ownership structure, and the accounting standards employed for Zakat calculation.",
      },
      {
        question: "What is the 'purification process' in Islamic investment?",
        options: [
          "The process of physically cleaning money before investment",
          "The removal of any impermissible earnings by donating them to charity",
          "The process of getting approval from a central bank",
          "The conversion of conventional bonds into sukuk",
        ],
        correctAnswer: "The removal of any impermissible earnings by donating them to charity",
        explanation:
          "The purification process in Islamic investment involves identifying and separating any portion of earnings derived from impermissible sources (e.g., interest income or income from prohibited business activities in a partially compliant company) and donating it to charity to 'purify' the remaining permissible returns.",
      },
      {
        question:
          "What is the principle of 'risk-sharing' in Islamic finance and how does it differ from conventional finance?",
        options: [
          "Risk-sharing means all investments must have government guarantees",
          "Risk-sharing means profits and losses should be shared among participants in financial transactions",
          "Risk-sharing is identical to interest-based risk transfer in conventional finance",
          "Risk-sharing only applies to Islamic insurance (takaful)",
        ],
        correctAnswer:
          "Risk-sharing means profits and losses should be shared among participants in financial transactions",
        explanation:
          "Risk-sharing is a fundamental principle in Islamic finance where financial transactions should involve the sharing of risks and rewards among all participants. This differs from conventional finance which often involves risk transfer through interest-based mechanisms where lenders are entitled to returns regardless of the outcome of the business venture being financed.",
      },
    ],
  },
}

export default islamicFinanceCategory
