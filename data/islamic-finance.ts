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
    question: "What is 'Halal' income in Islamic finance?",
    options: [
      "Income from any source",
      "Income earned through permissible means according to Shariah",
      "Only income from Islamic banks",
      "Income from government jobs"
    ],
    correctAnswer: "Income earned through permissible means according to Shariah",
    explanation: "Halal income refers to earnings from sources and methods that comply with Islamic principles, avoiding prohibited activities like interest, gambling, or trade in forbidden items."
  },
  {
    question: "What is 'Haraj' in Islamic financial transactions?",
    options: [
      "Excessive difficulty or hardship",
      "A type of Islamic loan",
      "The profit margin in Murabaha",
      "Islamic banking fees"
    ],
    correctAnswer: "Excessive difficulty or hardship",
    explanation: "Haraj refers to undue hardship in financial transactions. Islamic law seeks to remove haraj, as the Quran states: 'Allah wishes to lighten your burden, for man was created weak' (4:28)."
  },
  {
    question: "Which Islamic financial contract is used for home financing?",
    options: [
      "Murabaha",
      "Ijara wa Iqtina",
      "Salam",
      "Istisna"
    ],
    correctAnswer: "Ijara wa Iqtina",
    explanation: "Ijara wa Iqtina (lease-to-own) is commonly used for home financing, where the bank purchases the property and leases it to the customer with an option to own at the end of the lease term."
  },
  {
    question: "What is 'Qard Hasan' in Islamic finance?",
    options: [
      "An interest-free loan",
      "A business partnership",
      "Islamic credit card",
      "Profit-sharing investment"
    ],
    correctAnswer: "An interest-free loan",
    explanation: "Qard Hasan is a benevolent loan given without any interest or profit. The borrower only returns the principal amount, though they may voluntarily pay extra as gratitude."
  },
  {
    question: "Which Islamic financial principle prohibits 'Maysir'?",
    options: [
      "Prohibition of gambling",
      "Prohibition of pork",
      "Prohibition of gold trading",
      "Prohibition of long-term contracts"
    ],
    correctAnswer: "Prohibition of gambling",
    explanation: "Maysir refers to gambling or games of chance, which are prohibited in Islam (Quran 5:90). This extends to financial transactions based on uncertainty or chance outcomes."
  },
  {
    question: "What is 'Wakalah' in Islamic finance?",
    options: [
      "Agency contract where one party acts on behalf of another",
      "Joint business venture",
      "Islamic insurance",
      "Currency exchange"
    ],
    correctAnswer: "Agency contract where one party acts on behalf of another",
    explanation: "Wakalah is an agency agreement where one party authorizes another to perform specific financial tasks on their behalf, commonly used in Islamic fund management and banking services."
  },
  {
    question: "Which Islamic financial concept ensures transparency in transactions?",
    options: [
      "Gharar",
      "Bay al-Gharar",
      "Al-Bay' al-Mu'ajjal",
      "Al-Bay' al-Mubashir"
    ],
    correctAnswer: "Al-Bay' al-Mubashir",
    explanation: "Al-Bay' al-Mubashir refers to direct, transparent sales where all terms are clearly disclosed, contrasting with Bay al-Gharar (uncertain transactions) which are prohibited."
  },
  {
    question: "What is 'Sarf' in Islamic finance?",
    options: [
      "Currency exchange",
      "Agricultural financing",
      "Islamic bonds",
      "Charitable endowment"
    ],
    correctAnswer: "Currency exchange",
    explanation: "Sarf refers to the exchange of monetary values (currency trading), which must be done spot (immediate delivery) and with equal amounts if exchanging the same currencies to avoid riba."
  },
  {
    question: "What is the Islamic ruling on conventional insurance?",
    options: [
      "Permissible if affordable",
      "Prohibited due to elements of gharar and maysir",
      "Permissible for Muslims in non-Muslim countries",
      "Only prohibited for life insurance"
    ],
    correctAnswer: "Prohibited due to elements of gharar and maysir",
    explanation: "Conventional insurance contains excessive uncertainty (gharar) and elements of gambling (maysir), making it prohibited. Islamic alternative is Takaful based on mutual cooperation."
  },
  {
    question: "What is 'Waqf' in Islamic finance?",
    options: [
      "Islamic will",
      "Charitable endowment",
      "Business partnership",
      "Islamic credit system"
    ],
    correctAnswer: "Charitable endowment",
    explanation: "Waqf is a permanent charitable endowment where assets are dedicated to religious or charitable purposes, generating ongoing benefits for the community while preserving the principal."
  },
  {
    question: "Which Islamic financial contract is suitable for agricultural financing?",
    options: [
      "Murabaha",
      "Salam",
      "Ijara",
      "Musharakah"
    ],
    correctAnswer: "Salam",
    explanation: "Salam is a forward sale contract where payment is made in advance for goods to be delivered later, often used in agricultural financing to provide farmers with upfront capital."
  },
  {
    question: "What is 'Rahn' in Islamic finance?",
    options: [
      "Islamic mortgage",
      "Collateral or pledge",
      "Profit-sharing ratio",
      "Islamic credit score"
    ],
    correctAnswer: "Collateral or pledge",
    explanation: "Rahn refers to collateral provided as security for a financial obligation, permissible in Islam to secure Qard Hasan or other transactions while protecting both parties' interests."
  },
  {
    question: "Which Islamic financial principle requires asset-backing?",
    options: [
      "All financial transactions must be backed by tangible assets",
      "Only sukuk need asset backing",
      "Only for business partnerships",
      "Islamic finance doesn't require asset backing"
    ],
    correctAnswer: "All financial transactions must be backed by tangible assets",
    explanation: "Islamic finance requires transactions to be tied to real economic activities with tangible assets or services, preventing purely monetary transactions that could involve riba."
  },
  {
    question: "What is 'Dayn' in Islamic finance?",
    options: [
      "Debt or financial obligation",
      "Islamic credit card",
      "Profit margin",
      "Charitable donation"
    ],
    correctAnswer: "Debt or financial obligation",
    explanation: "Dayn refers to debt or financial obligation. While permissible, its trade is heavily restricted in Islamic finance to prevent riba, requiring strict conditions if transferred."
  },
  {
    question: "Which Islamic financial contract is closest to a conventional loan?",
    options: [
      "Murabaha",
      "Qard Hasan",
      "Musharakah",
      "Takaful"
    ],
    correctAnswer: "Qard Hasan",
    explanation: "Qard Hasan is the closest to a conventional loan but without interest. It's a benevolent loan where only the principal amount needs to be repaid."
  },
  {
    question: "What is 'Khiyar' in Islamic contracts?",
    options: [
      "Option to cancel or confirm a contract within a specified period",
      "Islamic arbitration",
      "Penalty for late payment",
      "Profit distribution method"
    ],
    correctAnswer: "Option to cancel or confirm a contract within a specified period",
    explanation: "Khiyar refers to options in contracts allowing parties to rescind or confirm agreements under certain conditions, protecting against gharar (excessive uncertainty)."
  },
  {
    question: "What is 'Jua'alah' in Islamic finance?",
    options: [
      "Service fee contract",
      "Penalty clause",
      "Interest payment",
      "Insurance premium"
    ],
    correctAnswer: "Service fee contract",
    explanation: "Jua'alah is a contract where one party offers a specified reward for completing a particular task or service, permissible when the work is clearly defined."
  },
  {
    question: "Which Islamic financial principle prohibits 'Bay al-Gharar'?",
    options: [
      "Prohibition of uncertain transactions",
      "Prohibition of late payments",
      "Prohibition of written contracts",
      "Prohibition of long-term investments"
    ],
    correctAnswer: "Prohibition of uncertain transactions",
    explanation: "Bay al-Gharar refers to sales involving excessive uncertainty or ambiguity about the subject matter or terms, which are prohibited in Islamic finance to ensure fairness."
  },
  {
    question: "What is 'Arbun' in Islamic finance?",
    options: [
      "Down payment with option to cancel",
      "Islamic mortgage",
      "Penalty for breach of contract",
      "Currency exchange fee"
    ],
    correctAnswer: "Down payment with option to cancel",
    explanation: "Arbun is a non-refundable deposit paid in advance to secure the right to complete a purchase, with the understanding the deposit is forfeited if the buyer doesn't proceed."
  },
  {
    question: "Which Islamic financial contract is used for project financing?",
    options: [
      "Istisna",
      "Tawarruq",
      "Wakalah",
      "Qard Hasan"
    ],
    correctAnswer: "Istisna",
    explanation: "Istisna is a manufacturing contract where payment is made in stages for large projects like construction, allowing financing while ensuring Shariah compliance."
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
    question: "What is the difference between 'Sukuk al-Ijara' and conventional bonds?",
    options: [
      "Sukuk represent ownership in assets while bonds are debt obligations",
      "There is no substantial difference",
      "Sukuk always yield higher returns",
      "Only institutions can buy sukuk"
    ],
    correctAnswer: "Sukuk represent ownership in assets while bonds are debt obligations",
    explanation: "Sukuk al-Ijara provide investors with ownership shares in leased assets and rental income, while conventional bonds represent pure debt with interest payments, making their structures fundamentally different."
  },
  {
    question: "How does 'Musharakah Mutanaqisah' work in Islamic home financing?",
    options: [
      "Bank and customer co-own property with customer gradually buying bank's share",
      "Customer leases property with no ownership rights",
      "Bank provides interest-free loan for full purchase",
      "Customer pays fixed rent forever"
    ],
    correctAnswer: "Bank and customer co-own property with customer gradually buying bank's share",
    explanation: "In Musharakah Mutanaqisah (diminishing partnership), bank and customer jointly purchase property. The customer uses part of periodic payments to acquire the bank's share until becoming sole owner."
  },
  {
    question: "What is 'Tawarruq Munazzam' and why is it controversial?",
    options: [
      "Organized tawarruq involving multiple parties to obtain cash, criticized as synthetic riba",
      "A universally accepted form of Islamic financing",
      "A type of Islamic credit card",
      "An early Islamic banking practice"
    ],
    correctAnswer: "Organized tawarruq involving multiple parties to obtain cash, criticized as synthetic riba",
    explanation: "Tawarruq Munazzam involves pre-arranged commodity transactions to generate cash liquidity. Many scholars reject it as a legal trick to circumvent riba prohibition despite technical Shariah compliance."
  },
  {
    question: "What is the 'Two Tier Mudarabah' model in Islamic banking?",
    options: [
      "Bank acts as mudarib for depositors and as rabb-ul-mal for investors",
      "Two separate mudarabah contracts for the same transaction",
      "A prohibited form of double financing",
      "An outdated historical practice"
    ],
    correctAnswer: "Bank acts as mudarib for depositors and as rabb-ul-mal for investors",
    explanation: "In this model, banks receive funds from depositors under Mudarabah (acting as entrepreneurs), then invest these funds in other ventures (acting as capital providers), creating two-tier profit-sharing."
  },
  {
    question: "How does 'Bay al-Dayn' differ from conventional debt trading?",
    options: [
      "Bay al-Dayn has strict conditions to prevent riba while conventional debt trading doesn't",
      "There is no difference",
      "Bay al-Dayn yields higher returns",
      "Only governments can practice Bay al-Dayn"
    ],
    correctAnswer: "Bay al-Dayn has strict conditions to prevent riba while conventional debt trading doesn't",
    explanation: "Bay al-Dayn (debt trading) is only permitted under strict conditions: debt must be non-interest bearing, traded at face value, and not used as a riba workaround - unlike conventional debt markets."
  },
  {
    question: "What is the 'Commodity Murabaha' controversy in Islamic finance?",
    options: [
      "Use of commodity trades merely as cash financing mechanisms, raising substance-over-form concerns",
      "Trading essential commodities at high prices",
      "A universally accepted practice with no issues",
      "Using pork products in Murabaha"
    ],
    correctAnswer: "Use of commodity trades merely as cash financing mechanisms, raising substance-over-form concerns",
    explanation: "Commodity Murabaha involves back-to-back trades often with no actual commodity transfer, leading critics to argue it replicates interest-based lending despite technical Shariah compliance."
  },
  {
    question: "How does Islamic microfinance differ from conventional microfinance?",
    options: [
      "Uses Shariah-compliant contracts like Qard Hasan and diminishing Musharakah",
      "Only serves Muslim clients",
      "Doesn't aim for sustainability",
      "Gives interest-free loans without expecting repayment"
    ],
    correctAnswer: "Uses Shariah-compliant contracts like Qard Hasan and diminishing Musharakah",
    explanation: "Islamic microfinance employs contracts like Qard Hasan (benevolent loans), Musharakah (partnership), and Salam (advance purchase) to provide financial services while avoiding riba and gharar."
  },
  {
    question: "What is 'Hibah' in Islamic banking and how does it relate to deposits?",
    options: [
      "Voluntary gift from bank to depositors, sometimes used as profit substitute",
      "Mandatory interest payment",
      "Penalty for early withdrawal",
      "Account maintenance fee"
    ],
    correctAnswer: "Voluntary gift from bank to depositors, sometimes used as profit substitute",
    explanation: "Some Islamic banks give Hibah (gifts) to depositors as a Shariah-compliant alternative to interest, though scholars debate whether this becomes de facto riba if predictable and systematic."
  },
  {
    question: "What is the 'Wakalah bi-l-Istithmar' model in Islamic funds?",
    options: [
      "Investment agency where fund manager acts as wakeel for investors",
      "A prohibited form of speculation",
      "Joint business venture between bank and client",
      "Islamic hedge fund strategy"
    ],
    correctAnswer: "Investment agency where fund manager acts as wakeel for investors",
    explanation: "In Wakalah bi-l-Istithmar, investors appoint the fund manager as their agent (wakeel) to invest funds according to agreed terms, with the manager receiving a fee rather than profit share."
  },
  {
    question: "How does 'Sukuk al-Musharakah' differ from 'Sukuk al-Ijara'?",
    options: [
      "Musharakah sukuk represent equity participation while Ijara sukuk represent asset ownership",
      "Only institutions can buy Musharakah sukuk",
      "Ijara sukuk have higher risk",
      "There is no meaningful difference"
    ],
    correctAnswer: "Musharakah sukuk represent equity participation while Ijara sukuk represent asset ownership",
    explanation: "Sukuk al-Musharakah provide profit/loss sharing in a business venture, while Sukuk al-Ijara provide returns from leased assets, representing different risk-return profiles and Shariah structures."
  },
  {
    question: "What is 'Fatwa shopping' in Islamic finance?",
    options: [
      "Seeking multiple scholarly opinions to find the most lenient ruling",
      "A prohibited practice in all cases",
      "The process of establishing new Islamic banks",
      "A type of Islamic financial product"
    ],
    correctAnswer: "Seeking multiple scholarly opinions to find the most lenient ruling",
    explanation: "Fatwa shopping refers to institutions seeking out the most permissive scholarly opinions to justify controversial practices, potentially undermining Shariah compliance integrity in Islamic finance."
  },
  {
    question: "What is the 'Islamic Windows' controversy in conventional banks?",
    options: [
      "Concerns about mixing Islamic and conventional funds and operations",
      "Architectural requirements for Islamic banks",
      "A type of Islamic financial software",
      "A universally accepted practice"
    ],
    correctAnswer: "Concerns about mixing Islamic and conventional funds and operations",
    explanation: "Islamic Windows (Shariah-compliant services offered by conventional banks) raise concerns about fund co-mingling, purification of impermissible income, and whether they truly maintain Shariah standards."
  },
  {
    question: "How does 'Zakat' calculation differ for various Islamic financial instruments?",
    options: [
      "Zakatable assets vary by instrument type (e.g., trade assets vs investment assets)",
      "All Islamic financial products have identical Zakat treatment",
      "Only cash accounts are subject to Zakat",
      "Zakat doesn't apply to Islamic finance products"
    ],
    correctAnswer: "Zakatable assets vary by instrument type (e.g., trade assets vs investment assets)",
    explanation: "Zakat calculation differs based on the nature of assets: trade assets (2.5%), agricultural output (5-10%), long-term investments (varies), requiring specific methodologies for different Islamic financial products."
  },
  {
    question: "What is 'Shariah Arbitrage' in Islamic finance?",
    options: [
      "Structuring similar economic outcomes through different Shariah-compliant forms",
      "A prohibited form of speculation",
      "Arbitration in Islamic financial disputes",
      "Profit differences between Islamic and conventional banks"
    ],
    correctAnswer: "Structuring similar economic outcomes through different Shariah-compliant forms",
    explanation: "Shariah arbitrage refers to designing Islamic financial products that replicate conventional products' economic effects through technically Shariah-compliant structures, raising substance-over-form concerns."
  },
  {
    question: "What is the 'AAOIFI' and its role in Islamic finance?",
    options: [
      "Accounting and Auditing Organization for Islamic Financial Institutions setting standards",
      "An Islamic credit rating agency",
      "A type of Islamic investment fund",
      "An international Islamic banking network"
    ],
    correctAnswer: "Accounting and Auditing Organization for Islamic Financial Institutions setting standards",
    explanation: "AAOIFI develops and issues Shariah, accounting, auditing, ethics and governance standards for the international Islamic finance industry, promoting harmonization and best practices."
  },
  {
    question: "How does 'Islamic REIT' (Real Estate Investment Trust) differ from conventional REIT?",
    options: [
      "Islamic REITs comply with Shariah screening and income purification requirements",
      "Only Muslims can invest in Islamic REITs",
      "Islamic REITs don't own physical properties",
      "There are no significant differences"
    ],
    correctAnswer: "Islamic REITs comply with Shariah screening and income purification requirements",
    explanation: "Islamic REITs invest in Shariah-compliant properties, avoid interest-based financing, and purify any impermissible income, while maintaining the REIT structure's core benefits."
  },
  {
    question: "What is 'Tahawwut' (Islamic hedging) and how does it differ from conventional hedging?",
    options: [
      "Permissible risk mitigation using Shariah-compliant contracts like Salam and Arbun",
      "A prohibited form of speculation",
      "Identical to conventional derivatives",
      "Only applicable to currency risks"
    ],
    correctAnswer: "Permissible risk mitigation using Shariah-compliant contracts like Salam and Arbun",
    explanation: "Tahawwut refers to Shariah-compliant risk management using contracts like parallel Salam, Wa'd (promise), and Arbun that avoid excessive gharar and maysir present in conventional derivatives."
  },
  {
    question: "What is the 'Islamic Interbank Money Market' and how does it operate?",
    options: [
      "A system for banks to manage liquidity using Shariah-compliant instruments like Commodity Murabaha",
      "A conventional money market for Islamic banks",
      "A prohibited practice in Islamic finance",
      "An unregulated peer-to-peer lending network"
    ],
    correctAnswer: "A system for banks to manage liquidity using Shariah-compliant instruments like Commodity Murabaha",
    explanation: "Islamic interbank markets facilitate short-term liquidity management among Islamic financial institutions using Shariah-compliant mechanisms like Commodity Murabaha and Wakalah placements."
  },
  {
    question: "What is 'Fintech's impact on Islamic finance?",
    options: [
      "Enabling innovative Shariah-compliant solutions like P2P financing and blockchain-based sukuk",
      "Making Islamic finance identical to conventional finance",
      "Eliminating the need for Shariah boards",
      "Only relevant for Muslim-majority countries"
    ],
    correctAnswer: "Enabling innovative Shariah-compliant solutions like P2P financing and blockchain-based sukuk",
    explanation: "Fintech facilitates Islamic finance through crowdfunding platforms, digital Islamic banks, smart contract-based products, and greater financial inclusion while maintaining Shariah compliance."
  },
  {
    question: "What is the 'Islamic ESG Investing' approach?",
    options: [
      "Combining Shariah screening with environmental, social and governance criteria",
      "A prohibited form of speculative investment",
      "Only focusing on religious activities",
      "Ignoring financial returns for ethical purity"
    ],
    correctAnswer: "Combining Shariah screening with environmental, social and governance criteria",
    explanation: "Islamic ESG investing integrates Shariah compliance with additional ethical filters, aligning Islamic finance's inherent ethical dimensions with contemporary sustainable development goals."
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
        {
        question: "What is the annual rate of Zakat payable on qualifying wealth and business merchandise that has reached the Nisab and completed one lunar year (Hawl)?",
        options: ["1.5%", "2.5%", "5.0%", "10.0%"],
        correctAnswer: "2.5%",
        explanation:
          "According to the authentic Sunnah established by Prophet Muhammad (PBUH), the Zakat rate on gold, silver, cash currency, and commercial trading goods is one-fortieth (quarter of a tenth), which equals 2.5% per lunar year.",
      },
      {
        question: "Which verse in Surah al-Baqarah explicitly establishes that Allah has made commerce lawful while strictly prohibiting interest?",
        options: ["Surah al-Baqarah (2:275)", "Surah al-Baqarah (2:183)", "Surah al-Baqarah (2:255)", "Surah al-Baqarah (2:286)"],
        correctAnswer: "Surah al-Baqarah (2:275)",
        explanation:
          "Allah the Almighty declares in Surah al-Baqarah (2:275): 'Allah has permitted trade and forbidden usury (Riba).' This verse forms the constitutional cornerstone of Islamic commercial jurisprudence.",
      },
      {
        question: "In Islamic business ethics, what does the term 'Amanah' mean?",
        options: ["Monopoly", "Trustworthiness and honesty", "Speculation", "Discounting"],
        correctAnswer: "Trustworthiness and honesty",
        explanation:
          "Amanah refers to honesty, integrity, and fulfilling trust. The Prophet (PBUH) emphasized that the trustworthy and honest merchant (al-Tajir al-Amin) will be with the prophets, truthful, and martyrs on the Day of Resurrection (at-Tirmidhi).",
      },
      {
        question: "What is the term for the minimum threshold of wealth upon which Zakat becomes obligatory?",
        options: ["Nisab", "Hawl", "Ushr", "Kaffarah"],
        correctAnswer: "Nisab",
        explanation:
          "Nisab is the specific minimum qualifying amount of wealth prescribed by Shariah (equivalent to 85 grams of fine gold or 595 grams of pure silver) below which a Muslim is exempt from paying Zakat.",
      },
      {
        question: "What does 'Hawl' refer to in the context of Islamic wealth and Zakat?",
        options: [
          "A commercial fee",
          "The passage of one full lunar year over the ownership of Nisab",
          "A tax penalty",
          "A barter exchange",
        ],
        correctAnswer: "The passage of one full lunar year over the ownership of Nisab",
        explanation:
          "Hawl refers to the completion of one Islamic lunar year (approximately 354 days) of possessing wealth at or above the Nisab threshold, as stipulated in the hadith: 'No Zakat is due on property until a year has passed over it' (Abu Dawood).",
      },
      {
        question: "What does 'Ghabn Fahish' refer to in Islamic commercial law?",
        options: ["Prompt cash payment", "Gross and excessive overpricing or deception", "Mutual gift giving", "Joint partnership"],
        correctAnswer: "Gross and excessive overpricing or deception",
        explanation:
          "Ghabn Fahish refers to exorbitant overpricing or unfair valuation that exceeds normal market fluctuations, giving the defrauded party the legal option (Khiyar al-Ghabn) to annul the contract.",
      },
      {
        question: "What is 'Sadaqah Jariyah' in Islamic charitable finance?",
        options: [
          "A temporary emergency loan",
          "Ongoing, continuous charity that yields recurring rewards even after death",
          "Mandatory pilgrimage tax",
          "Commercial interest on bank deposits",
        ],
        correctAnswer: "Ongoing, continuous charity that yields recurring rewards even after death",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) taught that when a person dies, all their deeds cease except three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them.",
      },
      {
        question: "What is 'Iqalah' in Islamic sales law?",
        options: [
          "Mutual consent between buyer and seller to cancel a contract and return the payment and goods",
          "Charging compound interest for late payment",
          "Forced confiscation of merchandise",
          "Unilateral breach of contract",
        ],
        correctAnswer: "Mutual consent between buyer and seller to cancel a contract and return the payment and goods",
        explanation:
          "Iqalah is the voluntary cancellation of a concluded sale by mutual agreement. The Prophet (PBUH) highly encouraged it, saying: 'Whoever cancels a sale with a Muslim who regrets it, Allah will forgive his sins on the Day of Resurrection' (Abu Dawood).",
      },
      {
        question: "What is the Islamic legal ruling on dealing in, buying, or selling alcohol and pork?",
        options: [
          "Permissible if profits are given to charity",
          "Strictly prohibited (Haram) under all circumstances",
          "Permissible in non-Muslim countries",
          "Disliked (Makruh) but legally valid",
        ],
        correctAnswer: "Strictly prohibited (Haram) under all circumstances",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) stated: 'Indeed, Allah and His Messenger have forbidden the sale of alcohol, dead animals, pork, and idols.' Any commercial trade in unlawful goods is inherently invalid.",
      },
      {
        question: "What is the primary condition for an Islamic trade transaction to be fundamentally binding and valid?",
        options: [
          "Government registration only",
          "Mutual consent and agreement between the contracting parties ('An Taradin)",
          "The presence of three bankers",
          "Payment in gold coins only",
        ],
        correctAnswer: "Mutual consent and agreement between the contracting parties ('An Taradin)",
        explanation:
          "Allah commands in Surah an-Nisa (4:29): 'Do not consume one another's wealth unjustly, but let there be trade among you by mutual consent.' The Prophet (PBUH) affirmed: 'Transactions are only valid by mutual consent' (Ibn Majah).",
      },      
    ],
    intermediate: [
      {
        question: "Which are the six specific commodities explicitly enumerated in the authentic hadith of Ubadah ibn al-Samit regarding Riba al-Fadl (usury in direct exchange)?",
        options: [
          "Gold, silver, dates, wheat, barley, and salt",
          "Gold, copper, milk, honey, olives, and wool",
          "Silver, camels, sheep, horses, garments, and swords",
          "Wheat, corn, rice, cotton, iron, and dates",
        ],
        correctAnswer: "Gold, silver, dates, wheat, barley, and salt",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) ruled: 'Gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, and salt for salt, like for like, equal for equal, hand to hand. If these commodities differ, then sell as you wish, provided it is hand to hand.'",
      },
      {
        question: "What is 'Riba al-Fadl' in classical Islamic jurisprudence?",
        options: [
          "Unlawful excess or disparity in quantity when exchanging two items of the same ribawi commodity simultaneously",
          "An interest fee charged exclusively for delaying debt payment",
          "A voluntary gift given by a borrower to a lender upon repayment",
          "A fee paid to a currency broker for money exchange",
        ],
        correctAnswer: "Unlawful excess or disparity in quantity when exchanging two items of the same ribawi commodity simultaneously",
        explanation:
          "Riba al-Fadl occurs when exchanging homogeneous ribawi goods (e.g., gold for gold or dates for dates) in unequal quantities, even if quality differs, as forbidden in the authentic hadiths.",
      },
      {
        question: "What is 'Riba al-Nasi'ah' in Islamic jurisprudence?",
        options: [
          "Trading currencies at market spot rates",
          "An increase, penalty, or interest charged in consideration for deferral or delay in debt repayment",
          "A fee paid for physical warehouse storage",
          "A discount given for paying in advance",
        ],
        correctAnswer: "An increase, penalty, or interest charged in consideration for deferral or delay in debt repayment",
        explanation:
          "Riba al-Nasi'ah is the usury of deferment, where a creditor charges extra money in return for granting additional time to repay a loan or debt, which was the prevalent form of Riba in pre-Islamic Arabia.",
      },
      {
        question: "What is the authentic hadith ruling concerning selling an item that a seller does not possess or own?",
        options: [
          "\"Sell whatever people demand, even if you do not have it\"",
          "\"Do not sell what you do not possess\" (La tabi' ma laysa 'indak)",
          "\"Selling unowned items is commendable as long as you deliver within one month\"",
          "\"Any transaction signed in writing is lawful regardless of ownership\"",
        ],
        correctAnswer: "\"Do not sell what you do not possess\" (La tabi' ma laysa 'indak)",
        explanation:
          "Hakim ibn Hizam asked the Prophet (PBUH) about selling items he did not own and later purchasing them from the market to deliver. The Prophet (PBUH) explicitly forbade it: 'Do not sell what you do not possess' (Sunan Abi Dawood, at-Tirmidhi).",
      },
      {
        question: "What is 'Salam' (or Salaf) forward sale, and what essential conditions must be fulfilled according to the hadith in Sahih al-Bukhari?",
        options: [
          "Sale of an unknown quantity with undefined payment terms",
          "Sale where full payment is made immediately upfront for goods of specified weight, measure, and delivery date",
          "Exchanging money after five years without specifying currency",
          "Leasing land in exchange for a percentage of uncertain wild game",
        ],
        correctAnswer: "Sale where full payment is made immediately upfront for goods of specified weight, measure, and delivery date",
        explanation:
          "In Sahih al-Bukhari, Ibn Abbas narrated that when the Prophet (PBUH) came to Madinah, he regulated Salam: 'Whoever pays in advance for dates must do so for a specified measure, a specified weight, and a specified delivery time,' with price paid upfront.",
      },
      {
        question: "What is 'Ihtikar' (hoarding/monopoly) in Islamic commercial ethics, and what is its ruling?",
        options: [
          "Stocking goods to ensure public food security; highly recommended",
          "Withholding essential foodstuffs and goods from the market to artificially drive up prices; strictly forbidden (Haram)",
          "Selling goods at a steep discount to help the destitute; permitted",
          "Importing foreign goods into a free market; rewarded",
        ],
        correctAnswer: "Withholding essential foodstuffs and goods from the market to artificially drive up prices; strictly forbidden (Haram)",
        explanation:
          "In Sahih Muslim, the Prophet (PBUH) declared: 'None hoards except a wrongdoer (sinner).' Artificially creating scarcity of essential commodities to exploit buyers is severely condemned in Islam.",
      },
      {
        question: "What is 'Najash' in Islamic auction and marketplace ethics?",
        options: [
          "Offering a prompt cash discount to a needy customer",
          "Outbidding on an item without intention to buy, merely to inflate the price and deceive other buyers",
          "Selling agricultural produce in an open wholesale market",
          "Paying the seller before inspecting the merchandise",
        ],
        correctAnswer: "Outbidding on an item without intention to buy, merely to inflate the price and deceive other buyers",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) strictly prohibited Al-Najash (shill bidding or fake bids), where someone artificially bids up an item's price to trap authentic buyers into paying more.",
      },
      {
        question: "What is 'Talaqqi al-Jalab' (or Talaqqi al-Rukban) and why did the Prophet (PBUH) forbid it?",
        options: [
          "Meeting merchants outside the city market to buy their goods cheaply before they know fair market prices",
          "Charging rent for commercial booths inside the market",
          "Trading with nomadic travelers at agreed fair retail rates",
          "Establishing public weights and measures for merchants",
        ],
        correctAnswer: "Meeting merchants outside the city market to buy their goods cheaply before they know fair market prices",
        explanation:
          "The Prophet (PBUH) forbade intercepting merchant caravans before they reached the open market (Sahih al-Bukhari), safeguarding rural sellers from being exploited due to ignorance of prevailing market prices.",
      },
      {
        question: "What is the famous legal maxim regarding the financial liability of a business partner or borrower in Islamic law: 'Al-Kharaj bil-Daman'?",
        options: [
          "Revenue belongs to the government tax collector",
          "Entitlement to profit or return is justified by bearing the accompanying risk and liability of loss",
          "Debts must always be cleared before marriage",
          "Any loss must be fully borne by the customer",
        ],
        correctAnswer: "Entitlement to profit or return is justified by bearing the accompanying risk and liability of loss",
        explanation:
          "Established by an authentic prophetic hadith (Sunan Abi Dawood, at-Tirmidhi), 'Al-Kharaju bid-Daman' means that whoever bears the risk of loss or destruction of an asset has the lawful right to enjoy its yield and yield-derived profits.",
      },
      {
        question: "What is the legal maxim 'Al-Ghunm bil-Ghurm' in Islamic economic jurisprudence?",
        options: [
          "Gain comes with corresponding risk and liability",
          "Guaranteed profits are mandatory for all bank deposits",
          "Profits can be taken without accepting any liability",
          "Government subsidies must offset business losses",
        ],
        correctAnswer: "Gain comes with corresponding risk and liability",
        explanation:
          "'Al-Ghunmu bil-Ghurm' establishes that financial benefit or profit is legally and ethically indivisible from responsibility and potential loss. One cannot demand guaranteed profit without bearing risk.",
      },
      {
        question: "In a classical 'Mudarabah' partnership, who bears the monetary/capital loss if the venture incurs an unpreventable financial deficit?",
        options: [
          "The working partner (Mudarib) alone pays from personal savings",
          "The capital provider (Rab al-Mal) alone bears the financial loss, while the Mudarib loses their time and effort",
          "The financial loss is split equally in cash regardless of agreement",
          "A third-party guarantor is legally forced to cover the loss",
        ],
        correctAnswer: "The capital provider (Rab al-Mal) alone bears the financial loss, while the Mudarib loses their time and effort",
        explanation:
          "Unless caused by negligence, misconduct, or breach of contract by the manager, financial loss in Mudarabah falls strictly upon the Rab al-Mal's capital, while the Mudarib loses their invested labor and compensation.",
      },
      {
        question: "In a standard 'Musharakah' partnership, how must financial capital losses be allocated among partners according to Shariah consensus?",
        options: [
          "Strictly in proportion to each partner's capital contribution",
          "Divided equally among all partners regardless of contribution",
          "Borne entirely by the partner who manages day-to-day operations",
          "Determined by whatever arbitrary percentage was negotiated in the contract",
        ],
        correctAnswer: "Strictly in proportion to each partner's capital contribution",
        explanation:
          "Jurists across all schools of Islamic jurisprudence agree upon the foundational rule: 'Profit is according to mutual agreement, but loss is strictly according to capital contribution (Al-Wadi'ah 'ala qadr al-mal).'",
      },
      {
        question: "Can an Islamic bank or Rab al-Mal stipulate a guaranteed fixed percentage return on capital in a Mudarabah contract?",
        options: [
          "Yes, if agreed upon in writing by both parties",
          "No, profit must be a determined ratio/percentage of actual earned profit, not a fixed return on principal",
          "Yes, provided the central bank mandates it",
          "Yes, if the business operates in international markets",
        ],
        correctAnswer: "No, profit must be a determined ratio/percentage of actual earned profit, not a fixed return on principal",
        explanation:
          "Stipulating a fixed lump sum or fixed percentage of capital converts the partnership into a loan with interest (Riba). The agreement must stipulate a known percentage share of the realized profit (e.g., 60/40).",
      },
      {
        question: "What is 'Bay al-Inah' and why did Prophet Muhammad (PBUH) severely condemn it?",
        options: [
          "Exporting fruits before they are ripe",
          "A fictitious double-sale where an item is sold on credit and immediately bought back for a lower cash price to disguise a usurious loan",
          "Selling livestock through a public auction",
          "Exchanging paper currency for gold ornaments",
        ],
        correctAnswer: "A fictitious double-sale where an item is sold on credit and immediately bought back for a lower cash price to disguise a usurious loan",
        explanation:
          "In Sunan Abi Dawood, the Prophet (PBUH) warned: 'If you trade with al-Inah... Allah will inflict humiliation upon you until you return to your religion.' It is a legal trick (hilah) used to disguise interest-bearing lending.",
      },
      {
        question: "What is the primary Shariah flaw in conventional vehicle or equipment leasing compared to an authentic Islamic 'Ijara'?",
        options: [
          "Using computers to print the agreement",
          "Transferring the risk of structural ownership, loss, and primary insurance to the lessee while collecting rent",
          "Allowing the tenant to drive the vehicle outside city limits",
          "Requiring monthly payments instead of weekly payments",
        ],
        correctAnswer: "Transferring the risk of structural ownership, loss, and primary insurance to the lessee while collecting rent",
        explanation:
          "In true Islamic Ijara, the lessor (owner) must retain the ownership risk, liabilities of ownership, and total destruction risk of the leased asset. Conventional leases often unfairly push asset risk onto the lessee.",
      },
      {
        question: "What is 'Ijara Muntahia Bittamleek' (or Ijara wa Iqtina)?",
        options: [
          "A lease contract that concludes with the transfer of ownership of the leased asset to the lessee through a separate gift or sale",
          "A lease contract with an unending term and permanent debt",
          "A sub-lease forbidden by Islamic commercial courts",
          "A loan given to buy perishable commodities",
        ],
        correctAnswer: "A lease contract that concludes with the transfer of ownership of the leased asset to the lessee through a separate gift or sale",
        explanation:
          "Ijara Muntahia Bittamleek is an Islamic lease-ending-in-ownership structure where the client leases an asset, and upon paying all rental installments, ownership is transferred via a distinct gift (Hibah) or nominal sale contract.",
      },
      {
        question: "Why must the promise to transfer ownership in 'Ijara Muntahia Bittamleek' be executed via a separate undertaking rather than embedded in the lease itself?",
        options: [
          "To save money on governmental notary public fees",
          "To prevent combining two mutually inconsistent and contingent contracts into one (Sifqatayn fi Sifqah)",
          "To allow the bank to double the rent halfway through",
          "Because leasing is discouraged in Islamic jurisprudence",
        ],
        correctAnswer: "To prevent combining two mutually inconsistent and contingent contracts into one (Sifqatayn fi Sifqah)",
        explanation:
          "The Prophet (PBUH) forbade combining two contracts into a single transaction (Ahmad, at-Tirmidhi). Shariah standards require the lease agreement and the subsequent transfer of title to be independent legal undertakings.",
      },
      {
        question: "What is 'Bay al-Kali bil-Kali' in Islamic contract law, and what is its legal status?",
        options: [
          "Exchanging deferred debt for deferred debt (sale of credit for credit); strictly prohibited by consensus",
          "Cash purchase with spot physical delivery; lawful",
          "Trading gold for silver hand to hand; lawful",
          "Selling agricultural dates on the tree; permitted",
        ],
        correctAnswer: "Exchanging deferred debt for deferred debt (sale of credit for credit); strictly prohibited by consensus",
        explanation:
          "Bay al-Kali bil-Kali involves exchanging delayed delivery of goods for deferred payment of price without either taking place at the contract session. Scholars unanimously prohibit this as pure speculation with no underlying substance.",
      },
      {
        question: "What is 'Gharar Yasir' (minor uncertainty) and how does Islamic commercial law treat it?",
        options: [
          "It automatically nullifies any contract it touches",
          "It is tolerated and excused because complete elimination of all uncertainty from daily life is impossible and creates severe hardship",
          "It requires the buyer to pay an additional religious fine",
          "It is strictly treated identically to gambling (Maysir)",
        ],
        correctAnswer: "It is tolerated and excused because complete elimination of all uncertainty from daily life is impossible and creates severe hardship",
        explanation:
          "Islamic jurisprudence distinguishes between Gharar Fahish (excessive ambiguity, which invalidates contracts) and Gharar Yasir (minor, negligible ambiguity, such as the foundation of a house), which is excused to prevent hardship.",
      },
      {
        question: "What is the authentic hadith ruling concerning the sale of unripe fruit still on the tree before its soundness becomes apparent?",
        options: [
          "Permissible under any circumstances",
          "Forbidden by the Prophet (PBUH) until it ripens and is safe from blight",
          "Recommended to give farmers early cash",
          "Permitted only if sold to international buyers",
        ],
        correctAnswer: "Forbidden by the Prophet (PBUH) until it ripens and is safe from blight",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) forbade selling fruits until they become evidently ripe (Hatta yabduw salahahu) to prevent taking people's wealth unjustly if blight destroys the crop.",
      },
      {
        question: "What is 'Khiyar al-Majlis' in Islamic transaction law?",
        options: [
          "The right of either party to cancel or confirm the sale as long as they have not parted from the contract gathering",
          "The right to renegotiate interest terms annually",
          "The council of scholars who approve new banking products",
          "The seller's right to repossess goods after one year",
        ],
        correctAnswer: "The right of either party to cancel or confirm the sale as long as they have not parted from the contract gathering",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) stated: 'The buyer and seller have the option to revoke the contract as long as they have not separated.' This ensures transactions are concluded without duress.",
      },
      {
        question: "What is 'Khiyar al-Ayb' in Islamic consumer protection?",
        options: [
          "The buyer's legal option to return merchandise and obtain a full refund if a hidden defect is discovered",
          "The seller's right to demand double price for high quality goods",
          "The bank's right to seize customer collateral without notice",
          "The option to delay debt repayment indefinitely",
        ],
        correctAnswer: "The buyer's legal option to return merchandise and obtain a full refund if a hidden defect is discovered",
        explanation:
          "Khiyar al-Ayb provides that if a buyer discovers a pre-existing hidden defect in purchased goods that depreciates its value, they possess the Shariah right to return it for a full refund.",
      },
      {
        question: "What is 'Khiyar al-Shart' in contractual stipulations?",
        options: [
          "A stipulated condition granting one or both parties a specified trial period during which they can cancel the contract",
          "An irrevocable lifetime sales warranty",
          "A condition imposing late payment penalties",
          "A clause transferring religious obligations to the seller",
        ],
        correctAnswer: "A stipulated condition granting one or both parties a specified trial period during which they can cancel the contract",
        explanation:
          "Khiyar al-Shart is an agreed-upon option giving either party (or both) a specific designated time frame (e.g., three days) to reflect, test the product, and decide whether to ratify or annul the sale.",
      },
      {
        question: "What was the Prophet's instruction when Bilal (RA) brought high-quality dates obtained by exchanging two measures of low-quality dates for one measure of high-quality dates?",
        options: [
          "He praised Bilal for making a clever bargain",
          "He exclaimed 'Ah, the very essence of Riba!' and instructed him to sell the low-quality dates for cash and then purchase the high-quality dates with that cash",
          "He told Bilal to distribute the dates to the poor immediately",
          "He remained silent, indicating tacit approval",
        ],
        correctAnswer: "He exclaimed 'Ah, the very essence of Riba!' and instructed him to sell the low-quality dates for cash and then purchase the high-quality dates with that cash",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) pointed out that unequal direct barter of the same ribawi commodity constitutes Riba al-Fadl, teaching the proper market mechanism: monetize first with currency, then buy desired quality.",
      },
      {
        question: "What is the Islamic legal ruling on a lender stipulating a mandatory gift or service from the borrower as a condition of a loan?",
        options: [
          "It is fully recommended to show gratitude",
          "It is unlawful and constitutes Riba, as every loan that brings a conditional benefit is usury",
          "Permissible if value is under one hundred dollars",
          "Permissible if requested after the loan is issued",
        ],
        correctAnswer: "It is unlawful and constitutes Riba, as every loan that brings a conditional benefit is usury",
        explanation:
          "The established jurisprudential maxim, supported by Athar of the Sahabah (such as Ibn Mas'ud and Ubayy ibn Ka'b), dictates: 'Every loan that draws a stipulated benefit or increase is a form of Riba.'",
      },
      {
        question: "What did the Prophet (PBUH) do when paying back a camel he had borrowed from a companion, and what principle did he establish regarding non-stipulated repayment excellence (Husn al-Qada)?",
        options: [
          "He returned a smaller, younger camel",
          "He returned an older, superior camel and stated: 'The best among you are those who are best in paying off debts'",
          "He refused to pay interest because it is forbidden",
          "He told the companion to forgive the loan as Sadaqah",
        ],
        correctAnswer: "He returned an older, superior camel and stated: 'The best among you are those who are best in paying off debts'",
        explanation:
          "In Sahih al-Bukhari and Muslim, when repaying a borrowed camel, the Prophet (PBUH) gave a better one, teaching that voluntary generosity or repayment in better quality without prior agreement is meritorious (Husn al-Qada).",
      },
      {
        question: "What is the Shariah ruling on conventional financial options, swaps, and futures contracts according to the International Islamic Fiqh Academy?",
        options: [
          "They are completely permissible standard trade tools",
          "They are impermissible (Haram) because they involve sales of unowned assets, pure Gharar, speculation, and trading debt for debt",
          "Permissible only during Ramadan",
          "Permissible if traded in small amounts by students",
        ],
        correctAnswer: "They are impermissible (Haram) because they involve sales of unowned assets, pure Gharar, speculation, and trading debt for debt",
        explanation:
          "The OIC International Islamic Fiqh Academy (Resolution No. 63) ruled that conventional options and futures are not permissible because the subject matter is not tangible property (Mal) and they involve excessive Gharar and gambling.",
      },
      {
        question: "What is 'Hawalah' in classical Islamic financial jurisprudence?",
        options: [
          "Transfer or assignment of a debt from the liability of the original debtor to a willing third party",
          "A speculative currency trade in international markets",
          "A mandatory donation to an Islamic endowment",
          "An irrevocable penalty imposed on bankrupt firms",
        ],
        correctAnswer: "Transfer or assignment of a debt from the liability of the original debtor to a willing third party",
        explanation:
          "Hawalah is the formal legal transfer of a debt liability from one debtor to another. The Prophet (PBUH) stated in Sahih al-Bukhari: 'Delay in repayment on the part of a rich debtor is injustice; if your debt is transferred to a solvent party, accept it.'",
      },
      {
        question: "What is 'Daman' (or Kafalah) in Islamic law?",
        options: [
          "A commercial leasing arrangement",
          "Suretyship or personal guarantee whereby a guarantor pledges to fulfill another party's obligation or debt upon default",
          "Arbitrary discount on damaged goods",
          "Currency exchange between foreign travelers",
        ],
        correctAnswer: "Suretyship or personal guarantee whereby a guarantor pledges to fulfill another party's obligation or debt upon default",
        explanation:
          "Kafalah/Daman is a contract of suretyship where a guarantor joins their liability with the debtor to assure the creditor that the claim or debt will be satisfied (Sunan Abi Dawood).",
      },
      {
        question: "Can a guarantor (Kafil) charge a monetary fee merely for providing a financial guarantee (Kafalah) in Islamic finance?",
        options: [
          "Yes, banks may charge any percentage they see fit",
          "No, charging a fee for a pure financial guarantee is impermissible because Kafalah is a benevolent contract of gratuitous security",
          "Yes, provided it exceeds the principal loan amount",
          "Yes, if approved by a commercial notary",
        ],
        correctAnswer: "No, charging a fee for a pure financial guarantee is impermissible because Kafalah is a benevolent contract of gratuitous security",
        explanation:
          "Under classical jurisprudence and AAOIFI standards, taking a fee for a financial guarantee is prohibited because if the guarantor pays the debt, it becomes a loan, and the fee becomes interest on that loan (Riba). Only actual administrative costs may be recovered.",
      },
      {
        question: "What are the eight designated Quranic categories of Zakat recipients specified in Surah at-Tawbah (9:60)?",
        options: [
          "Mosque building, roads, bridges, schools, orphanages, hospitals, parks, and libraries",
          "The poor, the needy, Zakat administrators, hearts to be reconciled, freeing slaves, debt-ridden debtors, in the cause of Allah, and the wayfarer",
          "Relatives, neighbors, business partners, employees, teachers, judges, soldiers, and doctors",
          "Monarchs, government ministers, foreign ambassadors, landlords, farmers, miners, builders, and merchants",
        ],
        correctAnswer: "The poor, the needy, Zakat administrators, hearts to be reconciled, freeing slaves, debt-ridden debtors, in the cause of Allah, and the wayfarer",
        explanation:
          "Surah at-Tawbah (9:60) strictly confines the distribution of Zakat to eight divine categories: Fuqara, Masakin, Amilina alayha, Mu'allafati qulubuhum, Fir-Riqab, Gharimin, Fi Sabilillah, and Ibn al-Sabil.",
      },
      {
        question: "What is the Quranic directive regarding a debtor experiencing genuine financial distress and insolvency?",
        options: [
          "Immediate imprisonment until family pays",
          "Granting postponement until a time of ease, and forgiving it as charity is even better (Surah al-Baqarah 2:280)",
          "Doubling the debt amount each month of delay",
          "Confiscating all their family's clothing and basic food",
        ],
        correctAnswer: "Granting postponement until a time of ease, and forgiving it as charity is even better (Surah al-Baqarah 2:280)",
        explanation:
          "Allah commands in Surah al-Baqarah (2:280): 'And if someone is in hardship, then let there be postponement until [a time of] ease. And if you give [it as] charity, then it is better for you, if you only knew.'",
      },
      {
        question: "What constitutes 'Bay al-Gharar' that was explicitly prohibited by the Messenger of Allah (PBUH)?",
        options: [
          "Any transaction with mutual written contracts",
          "Sales involving excessive uncertainty, hazard, or risk where the consequence, quantity, or existence of the subject matter is hidden",
          "Selling groceries during broad daylight",
          "Purchasing cattle after physical veterinary inspection",
        ],
        correctAnswer: "Sales involving excessive uncertainty, hazard, or risk where the consequence, quantity, or existence of the subject matter is hidden",
        explanation:
          "In Sahih Muslim, Abu Hurairah narrated that the Prophet (PBUH) prohibited Bay al-Gharar. Classic examples include selling fish swimming uncaught in the sea, birds in the air, or an unborn calf without its mother.",
      },
      {
        question: "What is 'Bay al-Hasah' and 'Bay al-Munabadhah' which the Prophet (PBUH) outlawed in the marketplace?",
        options: [
          "Standard currency trades settled immediately",
          "Pre-Islamic sales based on tossing pebbles or throwing garments at merchandise without inspection or clear consent",
          "Agricultural contracts approved by city councils",
          "Exporting spices across overseas sea routes",
        ],
        correctAnswer: "Pre-Islamic sales based on tossing pebbles or throwing garments at merchandise without inspection or clear consent",
        explanation:
          "In Sahih al-Bukhari and Muslim, the Prophet (PBUH) prohibited these pre-Islamic sales practices because they introduced gambling elements and lack of clear inspection/consent into trade transactions.",
      },
      {
        question: "What is the Shariah status of combining a sales contract with a loan contract (Bay wa Salaf) in a single deal?",
        options: [
          "Highly recommended in Islamic banking",
          "Strictly prohibited based on the clear prohibition by the Prophet (PBUH)",
          "Permitted if the loan is interest-free",
          "Obligatory for real estate purchases",
        ],
        correctAnswer: "Strictly prohibited based on the clear prohibition by the Prophet (PBUH)",
        explanation:
          "The Prophet (PBUH) explicitly ruled: 'A sale and a loan combined are not lawful' (La yahillu salafun wa bay') (Abu Dawood, at-Tirmidhi), as it creates an indirect route to usury (Riba).",
      },
      {
        question: "What is 'Muqassah' (debt netting/offsetting) in Islamic commercial law?",
        options: [
          "Setting off mutual debts between two parties who owe equal debts to each other",
          "Charging late fees on delinquent credit card balances",
          "Auctioning off pawned jewelry without consent",
          "A loan given to finance foreign military hardware",
        ],
        correctAnswer: "Setting off mutual debts between two parties who owe equal debts to each other",
        explanation:
          "Muqassah is the lawful cancellation or netting of reciprocal debts between two counter-parties when conditions of maturity and currency match, eliminating unnecessary cash transfers.",
      },
      {
        question: "In the context of modern Islamic banking, what happens to late payment penalties collected from defaulting clients?",
        options: [
          "They are booked directly into the bank's operational revenue and profit",
          "They are credited to the bank's executive bonus pool",
          "They cannot be kept as income by the bank; they must be channeled directly into approved public charities",
          "They are converted into bank shares",
        ],
        correctAnswer: "They cannot be kept as income by the bank; they must be channeled directly into approved public charities",
        explanation:
          "Under AAOIFI Shariah standards, to prevent the penalty from resembling Riba al-Jahiliyyah, an Islamic financial institution cannot recognize late payment fines as income; they must be disbursed entirely to charity.",
      },
      {
        question: "What is 'Urbun' (down payment) and what is the classical scholarly position regarding keeping it if the buyer defaults?",
        options: [
          "It is universally considered interest by all scholars",
          "Imam Ahmad and the Hanbali school permit the seller to keep it if the buyer revokes the sale, while the majority (Jamhur) historically viewed keeping it as consuming wealth unjustly",
          "It must always be doubled upon refund",
          "It is strictly permitted only in agricultural sales",
        ],
        correctAnswer: "Imam Ahmad and the Hanbali school permit the seller to keep it if the buyer revokes the sale, while the majority (Jamhur) historically viewed keeping it as consuming wealth unjustly",
        explanation:
          "The Hanbali school (supported by practice attributed to Umar ibn al-Khattab) permits retaining Urbun if the buyer backs out, which forms the basis for modern Islamic banking resolutions allowing non-refundable earnest money.",
      },
      {
        question: "What is 'Ghabn' in contract law and what protects the vulnerable party against it?",
        options: [
          "The physical delivery of goods; protected by shipping insurance",
          "Economic misrepresentation or discrepancy between price and market value; protected by 'Khiyar al-Ghabn' (the option of deception)",
          "A currency exchange fee; protected by central banks",
          "An agricultural grant; protected by the sovereign treasury",
        ],
        correctAnswer: "Economic misrepresentation or discrepancy between price and market value; protected by 'Khiyar al-Ghabn' (the option of deception)",
        explanation:
          "Ghabn refers to purchasing or selling at a price drastically diverging from fair market valuation through exploitation or deception. The victim has Khiyar al-Ghabn to nullify the contract or seek price rectification.",
      },
      {
        question: "What is 'Waqf Ahli' (family endowment) in Islamic estate and asset management?",
        options: [
          "A public cemetery managed by municipal workers",
          "An endowment established specifically for the perpetual benefit of the founder's children, descendants, and family lineage",
          "An interest-bearing mortgage account",
          "A short-term commercial trading trust that expires upon the founder's death",
        ],
        correctAnswer: "An endowment established specifically for the perpetual benefit of the founder's children, descendants, and family lineage",
        explanation:
          "Waqf Ahli (or Dhurri) is a dedicated family trust where the principal asset is preserved in perpetuity and its yields or revenues are dedicated exclusively to support the founder's family and descendants across generations.",
      },
        {
        question: "What is the critical 'Illah' (underlying effective legal cause) for Riba in gold and silver according to the majority Shafi'i, Maliki, and contemporary juristic consensus?",
        options: [
          "Weighability by physical balance (Al-Wazn) exclusively",
          "Absolute monetary value and medium of exchange (Al-Thamaniyyah al-Mutlaqah)",
          "Scarcity as mineral elements in the earth's crust",
          "Shine and ornamental value for jewelry",
        ],
        correctAnswer: "Absolute monetary value and medium of exchange (Al-Thamaniyyah al-Mutlaqah)",
        explanation:
          "The Maliki and Shafi'i schools, followed by the International Islamic Fiqh Academy, identify 'Thamaniyyah' (functioning as money/medium of exchange) as the effective cause in gold and silver, which directly extends the rules of Riba to modern fiat paper currencies.",
      },
      {
        question: "What is the foundational Shariah ruling on trading modern fiat paper currencies (e.g., USD for EUR or SAR) established by the OIC Islamic Fiqh Academy?",
        options: [
          "They can be traded on credit with settlement up to six months later",
          "Paper currencies possess independent Thamaniyyah (monetary genus); when exchanging different currencies, mutual exchange and receipt (Qabd) must occur in the contract session",
          "They are not recognized as legitimate property (Mal) in Islamic law",
          "Paper currencies can only be traded if backed 100% by physical gold bars in bank vaults",
        ],
        correctAnswer: "Paper currencies possess independent Thamaniyyah (monetary genus); when exchanging different currencies, mutual exchange and receipt (Qabd) must occur in the contract session",
        explanation:
          "Resolution No. 21 of the International Islamic Fiqh Academy confirmed that modern banknotes possess full monetary character (Thamaniyyah) as distinct genera. Exchanging one currency for another is Bay al-Sarf, necessitating immediate hand-to-hand exchange (Taqabud).",
      },
      {
        question: "How did classical jurists resolve the question of 'Qabd al-Hukmi' (constructive possession) in modern digital transactions and wire transfers?",
        options: [
          "Constructive possession is rejected; physical cash notes must always be touched by hand",
          "Crediting a bank account or providing irrevocable financial settlement functions as valid constructive possession fulfilling the requirement of Taqabud",
          "Wire transfers are considered forms of Riba al-Fadl",
          "Constructive possession is valid only for agricultural produce",
        ],
        correctAnswer: "Crediting a bank account or providing irrevocable financial settlement functions as valid constructive possession fulfilling the requirement of Taqabud",
        explanation:
          "The Fiqh Academy and AAOIFI recognize 'Qabd Hukmi' (constructive possession), ruling that crediting a recipient's bank account or issuing a certified cashier's check legally constitutes valid possession equivalent to physical handover.",
      },
      {
        question: "What is the key Shariah controversy surrounding 'Sukuk al-Istithmar' where the issuer promises to repurchase underlying assets at face value at maturity?",
        options: [
          "Face-value capital guarantees by the manager or obligor convert the equity-based investment certificate into a debt instrument with guaranteed interest, violating Musharakah principles",
          "Sukuk cannot be owned by international corporations",
          "Sukuk certificates must be printed in gold ink",
          "Face-value buybacks are prohibited because assets must always depreciate to zero",
        ],
        correctAnswer: "Face-value capital guarantees by the manager or obligor convert the equity-based investment certificate into a debt instrument with guaranteed interest, violating Musharakah principles",
        explanation:
          "In 2008, the AAOIFI Shariah Board issued a historic resolution declaring that capital guarantees at nominal face value by the issuer in partnership Sukuk (Musharakah/Mudarabah) violate Shariah because capital cannot be guaranteed by an investment partner.",
      },
      {
        question: "What is the primary distinction between 'Istisna' and 'Salam' regarding price payment timing and subject matter?",
        options: [
          "Istisna strictly requires 100% upfront payment, whereas Salam permits payment on delivery",
          "Salam strictly requires 100% upfront payment and applies to fungible goods, whereas Istisna applies specifically to manufactured goods and allows flexible deferred payment terms",
          "Istisna is forbidden by all four schools, whereas Salam is recommended",
          "Salam is used only for real estate development",
        ],
        correctAnswer: "Salam strictly requires 100% upfront payment and applies to fungible goods, whereas Istisna applies specifically to manufactured goods and allows flexible deferred payment terms",
        explanation:
          "Unlike Salam (which mandates complete advance payment at the contract session to avoid debt-for-debt), Istisna (manufacturing contract) uniquely permits advance, staggered, or fully deferred payment upon delivery by juristic consensus.",
      },
      {
        question: "What is 'Da' wa Ta'ajjal' (discount for early debt settlement) and what is the authoritative contemporary juristic ruling regarding it?",
        options: [
          "It is universally considered major Riba without any exception",
          "It is permissible provided it is not contractually pre-stipulated at the inception of the debt and is mutually agreed upon at settlement without duress",
          "It is obligatory upon all commercial banks",
          "It is permitted only for sovereign governments",
        ],
        correctAnswer: "It is permissible provided it is not contractually pre-stipulated at the inception of the debt and is mutually agreed upon at settlement without duress",
        explanation:
          "The International Islamic Fiqh Academy and Ibn Abbas held that reducing a debt balance in exchange for early cash settlement is lawful, provided it was not an enforceable pre-condition in the original credit agreement.",
      },
      {
        question: "In the Islamic screening of corporate equities, what is the standard AAOIFI financial threshold benchmark for impermissible debt-to-market-capitalization?",
        options: [
          "Interest-bearing debt must not exceed 30% of market capitalization (or 33% depending on standard)",
          "Interest-bearing debt must be exactly 0% with no exceptions tolerated",
          "Debt can reach up to 90% if the company donates to charity",
          "There is no limit on debt as long as the core business is halal",
        ],
        correctAnswer: "Interest-bearing debt must not exceed 30% of market capitalization (or 33% depending on standard)",
        explanation:
          "Under AAOIFI Shariah Standard No. 21 (and similar benchmarks by Dow Jones Islamic Market / FTSE), total interest-bearing debt must not exceed 30% (or 33%) of the company's average market capitalization over a 12-month period.",
      },
      {
        question: "What is the principle of 'Tabarru'' in Takaful (Islamic cooperative insurance) and how does it resolve the issue of Gharar?",
        options: [
          "It guarantees that every policyholder receives their full premium back with interest",
          "Participants make gratuitous donations (Tabarru') into a mutual risk pool to assist fellow participants in distress, transforming commercial Gharar into permissible mutual aid",
          "It requires insurance companies to invest exclusively in cryptocurrency",
          "It eliminates the need to file claims for auto accidents",
        ],
        correctAnswer: "Participants make gratuitous donations (Tabarru') into a mutual risk pool to assist fellow participants in distress, transforming commercial Gharar into permissible mutual aid",
        explanation:
          "In Takaful, contributions are treated as voluntary donations (Tabarru') to a collective pool. In Shariah, contracts of donation tolerate ambiguity (Gharar) because they are acts of charity and mutual cooperation, not commercial profit-making sales.",
      },
      {
        question: "What is the Shariah mechanism known as 'Wa'd Mulzim' (unilaterally binding promise) and how is it applied in modern Islamic financial structures?",
        options: [
          "A bilateral contract that forces both parties into usury",
          "A unilateral promise made by one party that becomes legally enforceable in Shariah courts when the promissee incurs liabilities based on that promise",
          "An informal promise with zero legal or moral consequence",
          "A promise made by an Islamic bank to pay interest every quarter",
        ],
        correctAnswer: "A unilateral promise made by one party that becomes legally enforceable in Shariah courts when the promissee incurs liabilities based on that promise",
        explanation:
          "Adopted by the Islamic Fiqh Academy and AAOIFI, a unilateral promise (Wa'd) can be legally and religiously binding (Mulzim) on the promisor if the promisee has entered into obligations relying on it, essential for Murabaha and foreign exchange forward alternatives.",
      },
      {
        question: "What is 'Tawarruq Masrafi' (organized/monetized tawarruq) and why did the OIC Islamic Fiqh Academy issue a strong resolution prohibiting it in 2009?",
        options: [
          "It involves genuine physical commodities delivered to the customer's personal home",
          "The bank acts as an agent in a synchronized series of paper commodity trades where the client never takes delivery or bears genuine ownership risk, resulting in a synthesized interest-bearing cash loan",
          "It requires the customer to work as an agricultural laborer",
          "It was rejected because it only dealt with international real estate",
        ],
        correctAnswer: "The bank acts as an agent in a synchronized series of paper commodity trades where the client never takes delivery or bears genuine ownership risk, resulting in a synthesized interest-bearing cash loan",
        explanation:
          "In Resolution 179 (19/5), the International Fiqh Academy prohibited organized/banking Tawarruq because the financial institution arranges the sale and buyback through international commodity brokers, acting as a mere legal pretense (Hilah) to generate cash for cash with an increase (Riba).",
      },
    ],
  },
}

export default islamicFinanceCategory
