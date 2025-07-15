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
    ],
  },
}

export default islamicFinanceCategory
