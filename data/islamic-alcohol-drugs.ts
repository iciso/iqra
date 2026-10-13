import type { QuizCategory } from "@/types/quiz";

export const islamicAlcoholDrugsCategory: QuizCategory = {
  id: "islamic-alcohol-drugs",
  name: "Alcohol and Drugs in Islam",
  description: "Examine the Islamic rulings, wisdom, prohibitions, and spiritual impacts surrounding intoxicants, alcohol, and addictive substances.",
  icon: "ShieldAlert",
  levels: {
    easy: [
      {
        id: "alcohol-drugs-e-1",
        question: "What is the general ruling on consuming alcohol and intoxicants in Islam?",
        options: ["Permissible in moderation", "Strictly prohibited (Haram)", "Discouraged but not sinful", "Permissible only for medical purposes"],
        correctAnswer: "Strictly prohibited (Haram)",
        explanation: "All forms of intoxicants that cloud the mind are strictly prohibited (Haram) in Islamic law."
      },
      {
        id: "alcohol-drugs-e-2",
        question: "What Arabic term is used in Islamic jurisprudence for intoxicants or anything that clouds the intellect?",
        options: ["Riba", "Khamr", "Zina", "Ghibah"],
        correctAnswer: "Khamr",
        explanation: "Khamr linguistically means something that covers or clouds the intellect, commonly translated as wine or intoxicants."
      },
      {
        id: "alcohol-drugs-e-3",
        question: "In which chapter (Surah) of the Quran is alcohol explicitly described as 'handiwork of Satan'?",
        options: ["Surah Al-Baqarah", "Surah Al-Ma'idah", "Surah An-Nisa", "Surah Al-Imran"],
        correctAnswer: "Surah Al-Ma'idah",
        explanation: "Surah Al-Ma'idah (5:90) commands believers to avoid intoxicants, gambling, stone altars, and divining arrows as abominations of Satan's handiwork."
      },
      {
        id: "alcohol-drugs-e-4",
        question: "According to a famous Hadith, what did the Prophet (PBUH) say about a large amount of a substance that intoxicates in small amounts?",
        options: ["It is permissible", "Whatever intoxicates in large amounts, its small amount is also Haram", "It is disliked (Makruh)", "It depends on user intent"],
        correctAnswer: "Whatever intoxicates in large amounts, its small amount is also Haram",
        explanation: "The Prophet Muhammad (PBUH) established a universal rule: any substance that causes intoxication in heavy doses is completely forbidden even in small drops."
      },
      {
        id: "alcohol-drugs-e-5",
        question: "What is the primary wisdom behind the prohibition of intoxicants in Islam?",
        options: ["To save financial expenses", "To protect the intellect (Aql), health, and faith", "To prevent social gatherings", "To encourage strict dieting"],
        correctAnswer: "To protect the intellect (Aql), health, and faith",
        explanation: "Preserving the intellect (Hifz al-Aql) is one of the highest objectives of Islamic law (Maqasid al-Shariah), as the mind is the instrument of moral accountability."
      },
      {
        id: "alcohol-drugs-e-6",
        question: "How does Islam view recreational drug use or illicit narcotics (like cannabis, cocaine, or heroin)?",
        options: ["Permissible if natural", "Prohibited because they alter the mind and cause harm", "Permissible on weekends", "Not mentioned in texts, hence allowed"],
        correctAnswer: "Prohibited because they alter the mind and cause harm",
        explanation: "Since narcotics intoxicate, debilitate health, and create harmful addictions, they fall under the general prohibition of Khamr."
      },
      {
        id: "alcohol-drugs-e-7",
        question: "What did the Prophet (PBUH) curse regarding alcohol, according to authentic traditions?",
        options: ["Only the person who drinks it", "Ten categories including the brewer, seller, carrier, and consumer", "Only those who sell it commercially", "Only those who bottle it"],
        correctAnswer: "Ten categories including the brewer, seller, carrier, and consumer",
        explanation: "The Prophet cursed the wine itself, its presser, the one for whom it is pressed, its drinker, its bearer, the one it is brought to, its server, its seller, the consumer of its price, and its buyer."
      },
      {
        id: "alcohol-drugs-e-8",
        question: "Can alcohol be used as a medicine or cure in Islamic teachings?",
        options: ["Yes, for any chronic illness", "No, the Prophet stated it is a disease, not a medicine", "Yes, if prescribed by a non-Muslim doctor", "Only when mixed with honey"],
        correctAnswer: "No, the Prophet stated it is a disease, not a medicine",
        explanation: "When asked about using alcohol as medicine, the Prophet (PBUH) explicitly replied: 'Indeed, it is not a cure, but a disease.'"
      },
      {
        id: "alcohol-drugs-e-9",
        question: "What effect do intoxicants have on regular acts of worship, such as prayer (Salah)?",
        options: ["They invalidate prayers until one is fully sober and conscious", "They make prayers rewardable twice over", "They have no effect on Salah", "They replace ritual ablution"],
        correctAnswer: "They invalidate prayers until one is fully sober and conscious",
        explanation: "The Quran commands believers not to approach prayer while intoxicated until they know what they are saying."
      },
      {
        id: "alcohol-drugs-e-10",
        question: "What is the social consequence highlighted in the Quran regarding alcohol and gambling?",
        options: ["They build strong community bonds", "They foster enmity and hatred among people and block remembrance of Allah", "They improve economic distribution", "They increase charitable donations"],
        correctAnswer: "They foster enmity and hatred among people and block remembrance of Allah",
        explanation: "Surah Al-Ma'idah notes that Satan wants to sow animosity and hatred between people through intoxicants and gambling."
      },
      {
        id: "alcohol-drugs-e-11",
        question: "Were intoxicants banned all at once when Islam first started?",
        options: ["Yes, on Day One of revelation", "No, they were prohibited in gradual stages", "They were never banned in Makkah", "They were banned only after the Prophet's death"],
        correctAnswer: "No, they were prohibited in gradual stages",
        explanation: "The prohibition of alcohol was implemented in progressive stages to ease society away from deep-rooted pre-Islamic habits."
      },
      {
        id: "alcohol-drugs-e-12",
        question: "What was the final, definitive verse revealed regarding the complete ban on alcohol?",
        options: ["Surah Al-Baqarah 2:219", "Surah An-Nisa 4:43", "Surah Al-Ma'idah 5:91", "Surah Al-Mudathir"],
        correctAnswer: "Surah Al-Ma'idah 5:91",
        explanation: "Upon the revelation of Surah Al-Ma'idah 91 ('So will you not then desist?'), barrels of wine in Madinah were poured out onto the streets."
      },
      {
        id: "alcohol-drugs-e-13",
        question: "How does Islam view addiction and substance abuse from a recovery perspective?",
        options: ["As an unpardonable sin with no hope", "As a trial, illness, or struggle that requires repentance, medical help, and divine mercy", "As a permanent state that cannot change", "As something to be ignored"],
        correctAnswer: "As a trial, illness, or struggle that requires repentance, medical help, and divine mercy",
        explanation: "Islam encourages seeking treatment, offers endless hope through sincere repentance (Tawbah), and views struggle against addiction with compassion."
      },
      {
        id: "alcohol-drugs-e-14",
        question: "Is working in an establishment that primarily sells alcohol (like a bar or liquor store) permissible for a Muslim?",
        options: ["Yes, if the pay is high", "No, because it involves assisting in sin and profiting from haram", "Yes, if working as a security guard", "Permissible during emergencies"],
        correctAnswer: "No, because it involves assisting in sin and profiting from haram",
        explanation: "Collaborating in, transporting, or earning a living directly from the sale of intoxicants is prohibited due to aiding in prohibited acts."
      },
      {
        id: "alcohol-drugs-e-15",
        question: "What is the ruling on perfumes or colognes containing synthetic alcohol used externally?",
        options: ["Strictly haram like drinking wine", "Generally considered permissible for external use by many contemporary scholars since it is denatured / not consumable Khamr", "Required to wash off with soap 7 times", "Causes immediate invalidation of wudu"],
        correctAnswer: "Generally considered permissible for external use by many contemporary scholars since it is denatured / not consumable Khamr",
        explanation: "Industrial or denatured alcohol used in rubbing alcohol, sanitizers, and perfumes is treated differently from consumable intoxicants by most contemporary jurists."
      },
      {
        id: "alcohol-drugs-e-16",
        question: "What moral responsibility does a Muslim have regarding peers who abuse drugs or alcohol?",
        options: ["To isolate and mock them", "To advise them with wisdom, offer support, and guide them toward help", "To report them immediately to authorities without care", "To join them socially"],
        correctAnswer: "To advise them with wisdom, offer support, and guide them toward help",
        explanation: "Compassionate advice (Nasihah), moral encouragement, and fostering a clean environment are core components of Islamic brotherhood and sisterhood."
      },
      {
        id: "alcohol-drugs-e-17",
        question: "How does Islam categorize self-harm through chemical abuse or overdose?",
        options: ["As a form of personal freedom", "As prohibited, because the human body is a trust (Amanah) from Allah", "As encouraged for stress relief", "As neutral"],
        correctAnswer: "As prohibited, because the human body is a trust (Amanah) from Allah",
        explanation: "Islam forbids destroying one's health, mind, or life, explicitly commanding believers not to throw themselves into destruction with their own hands."
      },
      {
        id: "alcohol-drugs-e-18",
        question: "What role does intentional intoxication play regarding legal culpability for crimes committed under its influence?",
        options: ["It completely excuses all crimes", "It does not absolve the person of responsibility; they are held accountable for both intoxication and the crimes committed", "It reduces punishments by half", "It is rewarded"],
        correctAnswer: "It does not absolve the person of responsibility; they are held accountable for both intoxication and the crimes committed",
        explanation: "In Islamic jurisprudence, choosing to intoxicate oneself means the individual remains legally and morally liable for actions committed while impaired."
      },
      {
        id: "alcohol-drugs-e-19",
        question: "Which term describes the prophetic guidance to stay away from doubtful matters, such as suspicious drinks or ambiguous substances?",
        options: ["Taqwa and leaving Al-Shubuhat (doubtful things)", "Bid'ah", "Riya", "Israf"],
        correctAnswer: "Taqwa and leaving Al-Shubuhat (doubtful things)",
        explanation: "The Prophet advised that whoever guards against doubtful matters has protected their religion and honor."
      },
      {
        id: "alcohol-drugs-e-20",
        question: "What is the spiritual antidote to relying on temporary intoxicants for emotional relief or anxiety?",
        options: ["Listening to loud music", "Zikr (remembrance of Allah), prayer, and reliance on Allah (Tawakkul)", "Isolation from society", "Total silence"],
        correctAnswer: "Zikr (remembrance of Allah), prayer, and reliance on Allah (Tawakkul)",
        explanation: "The Quran states: 'Verily, in the remembrance of Allah do hearts find rest.'"
      },
      {
        id: "alcohol-drugs-e-21",
        question: "Can food cooked with wine or liquor be consumed if the alcohol appears to 'cook off' or evaporate?",
        options: ["Yes, completely halal", "No, traditional Islamic law considers it impermissible due to the original ingredient and residual presence", "Only if eaten in small portions", "Allowed for non-Muslim guests only"],
        correctAnswer: "No, traditional Islamic law considers it impermissible due to the original ingredient and residual presence",
        explanation: "Even when heated or baked, foods prepared with wine are avoided as a precaution and due to the prohibition of using the substance in cooking."
      },
      {
        id: "alcohol-drugs-e-22",
        question: "What is the Islamic view on smoking tobacco (cigarettes, vape products, etc.) among contemporary scholars?",
        options: ["Mandatory for adults", "Prohibited (Haram) or strongly disliked/discouraged (Makruh) due to proven medical harm and waste of wealth", "Highly encouraged for relaxation", "Completely neutral"],
        correctAnswer: "Prohibited (Haram) or strongly disliked/discouraged (Makruh) due to proven medical harm and waste of wealth",
        explanation: "Because modern medicine proves tobacco causes cancer and severe respiratory damage, most contemporary fatwas classify smoking as impermissible due to self-harm and wasting money."
      },
      {
        id: "alcohol-drugs-e-23",
        question: "How does Islam view the economic trade of cultivating or manufacturing illegal narcotics?",
        options: ["A legitimate agricultural business", "Prohibited, because wealth earned from harmful intoxicants is impure (Haram)", "Encouraged for export", "Permissible if taxed"],
        correctAnswer: "Prohibited, because wealth earned from harmful intoxicants is impure (Haram)",
        explanation: "Profits generated from the supply chain of intoxicants and narcotics are considered tainted and unlawful."
      },
      {
        id: "alcohol-drugs-e-24",
        question: "What protection does Islamic family law provide in cases where substance abuse threatens family welfare?",
        options: ["No legal recourse", "Grounds for protective intervention, custody protection, and financial support obligations", "Mandatory divorce without rights", "Financial penalties only"],
        correctAnswer: "Grounds for protective intervention, custody protection, and financial support obligations",
        explanation: "Protecting family well-being, safety, and rights allows legal measures to safeguard dependents from harm caused by addiction."
      },
      {
        id: "alcohol-drugs-e-25",
        question: "What did the Prophet (PBUH) say regarding moderation in general consumption?",
        options: ["Eat and drink without any limits", "The son of Adam fills no vessel worse than his stomach", "Fasting is prohibited permanently", "Luxury is mandatory"],
        correctAnswer: "The son of Adam fills no vessel worse than his stomach",
        explanation: "Islam teaches discipline and moderation in all aspects of consumption, avoiding excess or loss of control."
      },
      {
        id: "alcohol-drugs-e-26",
        question: "How should a Muslim treat someone recovering from drug or alcohol addiction?",
        options: ["With judgment and ostracization", "With empathy, encouragement, dignity, and support", "By ignoring their past completely without offering help", "By testing them constantly"],
        correctAnswer: "With empathy, encouragement, dignity, and support",
        explanation: "Prophetic teachings emphasize mercy, rehabilitation, and welcoming those who turn back to righteousness with open arms."
      },
      {
        id: "alcohol-drugs-e-27",
        question: "What is the primary spiritual danger of becoming dependent on substances rather than prayer during hardships?",
        options: ["Financial debt", "Shifting reliance away from the Creator to a temporary created substance", "Loss of clothing", "Traveling too much"],
        correctAnswer: "Shifting reliance away from the Creator to a temporary created substance",
        explanation: "Addiction can become a form of psychological bondage or idolization of temporary relief, distracting the heart from Allah."
      },
      {
        id: "alcohol-drugs-e-28",
        question: "What is the ruling on attending gatherings where alcohol is openly consumed and served?",
        options: ["Mandatory to attend for social networking", "Forbidden to sit at tables where alcohol is served, unless working to remove the evil or unable to leave", "Encouraged if you only drink water", "Completely rewardable"],
        correctAnswer: "Forbidden to sit at tables where alcohol is served, unless working to remove the evil or unable to leave",
        explanation: "Hadiths explicitly curse the one who sits at a table where alcohol is being circulated."
      },
      {
        id: "alcohol-drugs-e-29",
        question: "Why did Islamic law place such severe emphasis on eliminating intoxicants from society?",
        options: ["To control agricultural markets", "To safeguard human life, sanity, family stability, and moral clarity", "To reduce water consumption", "To encourage fasting year-round"],
        correctAnswer: "To safeguard human life, sanity, family stability, and moral clarity",
        explanation: "Intoxicants erode the foundational pillars of a healthy civilization, making their prevention a paramount objective."
      },
      {
        id: "alcohol-drugs-e-30",
        question: "What is the ultimate message of Islamic ethics regarding mind-altering substances?",
        options: ["Explore all substances freely", "Keep the mind clear, honor the body as a trust, and seek joy through righteous living", "Only use drugs in winter", "Avoid all liquids except water"],
        correctAnswer: "Keep the mind clear, honor the body as a trust, and seek joy through righteous living",
        explanation: "Islam champions a lucid, alert consciousness capable of fulfilling human purpose and recognizing divine blessings."
      },
      {
        id: "alcohol-drugs-e-31",
        question: "What does the Quran contrast alcohol with when discussing lawful nourishment in Surah An-Nahl?",
        options: ["Pure honey that heals people", "Dates and olives", "Spring water", "Wheat and barley"],
        correctAnswer: "Pure honey that heals people",
        explanation: "In Surah An-Nahl, Allah contrasts the intoxicants derived from dates/grapes with the pure honey that emerges from bees as a healing for mankind."
      },
      {
        id: "alcohol-drugs-e-32",
        question: "How did early Muslims respond immediately when the prohibition verse of alcohol was announced in the streets of Madinah?",
        options: ["They hid their supplies", "They spilled all remaining wine into the streets instantly", "They debated it for months", "They finished what they had first"],
        correctAnswer: "They spilled all remaining wine into the streets instantly",
        explanation: "Companions poured their wine out immediately upon hearing the announcement, showing total obedience to divine command."
      },
      {
        id: "alcohol-drugs-e-33",
        question: "What is the Islamic ruling on pharmaceutical painkillers or anesthesia administered during medical operations?",
        options: ["Strictly forbidden", "Permissible and necessary when supervised by qualified medical professionals for healing", "Permissible only without a doctor", "Disliked"],
        correctAnswer: "Permissible and necessary when supervised by qualified medical professionals for healing",
        explanation: "Medications used legitimately for pain relief, surgery, or therapeutic treatment do not fall under forbidden intoxicants."
      },
      {
        id: "alcohol-drugs-e-34",
        question: "What does the Arabic concept of 'Hifz al-Nafs' (Preservation of Life) entail regarding substance abuse?",
        options: ["Promoting extreme sports", "Protecting oneself from physical destruction, overdose, and self-harm", "Living in isolation", "Fasting continuously"],
        correctAnswer: "Protecting oneself from physical destruction, overdose, and self-harm",
        explanation: "Hifz al-Nafs requires avoiding anything that jeopardizes physical or mental survival, including harmful drugs."
      }
    ],
    intermediate: [
      {
        id: "alcohol-drugs-i-1",
        question: "What was the first stage of the Quranic addressing of alcohol found in Surah Al-Baqarah (2:219)?",
        options: ["Total immediate ban with severe penalties", "Acknowledging that they contain some utility for people, but their sin is greater than their benefit", "Mandatory consumption for warriors", "Complete approval"],
        correctAnswer: "Acknowledging that they contain some utility for people, but their sin is greater than their benefit",
        explanation: "This verse marked the first psychological step in weaning society off intoxicants by highlighting that spiritual and moral harm outweighs any worldly utility."
      },
      {
        id: "alcohol-drugs-i-2",
        question: "What was the second stage of prohibition implemented before the total ban?",
        options: ["Banning drinking right before prayer times (Surah An-Nisa 4:43)", "Banning alcohol only during Ramadan", "Banning alcohol only for women", "Banning the trade of grapes"],
        correctAnswer: "Banning drinking right before prayer times (Surah An-Nisa 4:43)",
        explanation: "Muslims were prohibited from approaching prayer while intoxicated, ensuring clarity of mind during daily worship before the absolute prohibition."
      },
      {
        id: "alcohol-drugs-i-3",
        question: "What is the legal categorization of synthetic designer drugs (e.g., bath salts, synthetic cannabis) under Islamic law?",
        options: ["Halal because they are laboratory-made", "Haram by analogical deduction (Qiyas) because they achieve the exact same intoxicating/harmful effect as Khamr", "Permissible for adults", "Neutral"],
        correctAnswer: "Haram by analogical deduction (Qiyas) because they achieve the exact same intoxicating/harmful effect as Khamr",
        explanation: "Islamic jurists use Qiyas (analogy); since the effective cause (Illah) of prohibition is intoxication and mental impairment, any synthetic drug sharing this effect is strictly forbidden."
      },
      {
        id: "alcohol-drugs-i-4",
        question: "How does the punishment for drinking alcohol (Hadd al-Shurb) function in classical Islamic penal law?",
        options: ["It requires absolute proof, such as confession or reliable Muslim eyewitnesses testifying to voluntary consumption", "It is enforced based on suspicion", "It carries capital punishment automatically", "It is left entirely undocumented"],
        correctAnswer: "It requires absolute proof, such as confession or reliable Muslim eyewitnesses testifying to voluntary consumption",
        explanation: "Islamic law establishes rigorous evidentiary standards before any corporal penalty for public intoxication can be applied."
      },
      {
        id: "alcohol-drugs-i-5",
        question: "What is the ruling on natural fermentation where trace amounts of alcohol occur naturally in foods (like ripe fruit or fruit juices)?",
        options: ["Completely forbidden", "Permissible, as trace natural occurrences that do not intoxicate in any quantity are excused", "Must be boiled down 10 times", "Forbidden if it smells sweet"],
        correctAnswer: "Permissible, as trace natural occurrences that do not intoxicate in any quantity are excused",
        explanation: "Microscopic or natural trace fermentation in foods like yogurt, ripe bananas, or bread does not render them Khamr or unlawful."
      },
      {
        id: "alcohol-drugs-i-6",
        question: "What is the spiritual significance of the heart being 'sealed' or rusted through persistent sin, including substance abuse?",
        options: ["It has no spiritual meaning", "Persistent disobedience clouds spiritual perception, making it harder to recognize truth and feel remorse", "It grants superhuman abilities", "It purifies the soul"],
        correctAnswer: "Persistent disobedience clouds spiritual perception, making it harder to recognize truth and feel remorse",
        explanation: "Repeated sin acts like rust over the heart, dulling spiritual sensitivity and turning a person away from divine guidance."
      },
      {
        id: "alcohol-drugs-i-7",
        question: "How do Islamic ethics address the argument that personal autonomy permits consuming any substance to one's own body?",
        options: ["The body belongs to the individual unconditionally", "The body is an Amanah (trust) from Allah, meaning humans are custodians, not absolute owners, with no right to self-destruction", "Autonomy overrides all laws", "Self-harm is encouraged"],
        correctAnswer: "The body is an Amanah (trust) from Allah, meaning humans are custodians, not absolute owners, with no right to self-destruction",
        explanation: "In Islamic worldview, human life and physical well-being are trusts granted by the Creator, carrying ethical duties of preservation."
      },
      {
        id: "alcohol-drugs-i-8",
        question: "What is the ruling regarding a person who consumes alcohol unknowingly, believing it to be a lawful drink?",
        options: ["They are sinful and must face penalties", "They are excused from sin due to lack of intent or knowledge, though they must stop immediately upon discovery", "Their prayers are invalid for 40 days", "They must fast for two months"],
        correctAnswer: "They are excused from sin due to lack of intent or knowledge, though they must stop immediately upon discovery",
        explanation: "Actions in Islam are judged by intentions (niyyah). An accidental or deceived consumption carries no sin or liability."
      },
      {
        id: "alcohol-drugs-i-9",
        question: "What is the jurisprudential rule regarding 'Sadd al-Dhara'i' (blocking the means to evil) in relation to alcohol and drugs?",
        options: ["Opening all doors to trade", "Prohibiting preliminary actions that lead to haram (e.g., attending parties known for heavy drinking or associating with drug dens)", "Encouraging experimentation", "Ignoring minor sins"],
        correctAnswer: "Prohibiting preliminary actions that lead to haram (e.g., attending parties known for heavy drinking or associating with drug dens)",
        explanation: "Sadd al-Dhara'i is a legal principle ensuring that pathways leading directly to major sins are preemptively closed."
      },
      {
        id: "alcohol-drugs-i-10",
        question: "How does Islam view the psychological dependency and tolerance cycles of drug addiction?",
        options: ["As a permanent spiritual doom", "As a physiological and spiritual affliction that requires a comprehensive approach of medical rehabilitation, psychological support, and spiritual renewal", "As an illusion", "As something curable only by travel"],
        correctAnswer: "As a physiological and spiritual affliction that requires a comprehensive approach of medical rehabilitation, psychological support, and spiritual renewal",
        explanation: "Islamic healing embraces holistic recovery—combining professional medical treatment with sincere spiritual repentance and community backing."
      },
      {
        id: "alcohol-drugs-i-11",
        question: "What is the Islamic perspective on non-alcoholic beers or beverages formulated to taste like alcohol?",
        options: ["Mandatory to drink", "Disliked (Makruh) or discouraged by some scholars to avoid resembling sinful habits, though permissible if completely non-intoxicating and free of haram ingredients", "Strictly haram in all cases", "Equal to wine"],
        correctAnswer: "Disliked (Makruh) or discouraged by some scholars to avoid resembling sinful habits, though permissible if completely non-intoxicating and free of haram ingredients",
        explanation: "While legally permissible if they contain 0.0% alcohol and cause no intoxication, many scholars advise avoiding them to steer clear of likeness to vice."
      },
      {
        id: "alcohol-drugs-i-12",
        question: "What does Islamic law say about investing in companies whose primary revenue comes from alcohol production or distribution?",
        options: ["Highly encouraged", "Prohibited, because financial investments make the investor a partner in the sinful enterprise", "Permissible if shares are small", "Neutral"],
        correctAnswer: "Prohibited, because financial investments make the investor a partner in the sinful enterprise",
        explanation: "Halal investing screens out companies involved in alcohol, gambling, and adult entertainment to keep wealth pure."
      },
      {
        id: "alcohol-drugs-i-13",
        question: "How does the concept of 'Ijtihad' (independent legal reasoning) apply to newly invented chemical substances and narcotics?",
        options: ["Scholars analyze their chemical properties and intoxicating effects to issue contemporary rulings (Fatwas)", "Scholars ignore new drugs", "Only ancient texts apply", "Anyone can make up rules"],
        correctAnswer: "Scholars analyze their chemical properties and intoxicating effects to issue contemporary rulings (Fatwas)",
        explanation: "Qualified contemporary jurists collaborate with medical experts to apply core Shariah principles to modern synthetic narcotics."
      },
      {
        id: "alcohol-drugs-i-14",
        question: "What is the spiritual significance of purity (Taharah) in Islam, and how does it relate to intoxicants?",
        options: ["Purity is only about washing hands", "Taharah encompasses physical, moral, and spiritual cleanliness, making the consumption of impure and mind-clouding substances a contradiction to clean faith", "Purity has no connection to food", "Purity applies only to clothing"],
        correctAnswer: "Taharah encompasses physical, moral, and spiritual cleanliness, making the consumption of impure and moral-clouding substances a contradiction to clean faith",
        explanation: "Islam places immense emphasis on purity inside and out; intoxicants contaminate both the physical body and the clarity of the soul."
      },
      {
        id: "alcohol-drugs-i-15",
        question: "What is the ruling on working as a delivery driver or logistics worker transporting sealed boxes that happen to contain alcohol?",
        options: ["Completely fine with no restriction", "Strongly discouraged or impermissible by many scholars due to direct involvement in the distribution chain of Khamr", "Mandatory career path", "Encouraged for charity"],
        correctAnswer: "Strongly discouraged or impermissible by many scholars due to direct involvement in the distribution chain of Khamr",
        explanation: "Because the Prophet cursed the carrier and transporter of alcohol, logistics involving its direct supply chain are avoided by pious believers."
      },
      {
        id: "alcohol-drugs-i-16",
        question: "How does Islamic ethics view peer pressure leading to substance experimentation among youth?",
        options: ["As acceptable social integration", "As a major test of character where believers are commanded to stand firm in values and choose righteous company", "As encouraged", "As legally required"],
        correctAnswer: "As a major test of character where believers are commanded to stand firm in values and choose righteous company",
        explanation: "Islam places great emphasis on choosing good friends, warning that companionship heavily influences personal morals and habits."
      },
      {
        id: "alcohol-drugs-i-17",
        question: "What is the legal status of properties or income acquired through the narcotics trade?",
        options: ["Clean and lawful wealth", "Khhabith (impure/unlawful wealth) that must be disposed of in charity without expecting reward, or returned if possible", "Tax-free income", "Inherited legally"],
        correctAnswer: "Khhabith (impure/unlawful wealth) that must be disposed of in charity without expecting reward, or returned if possible",
        explanation: "Unlawful earnings cannot be kept for personal use and must be purged from one's wealth by giving them away for public welfare."
      },
      {
        id: "alcohol-drugs-i-18",
        question: "What is the psychological and spiritual impact of regret and sincere repentance (Tawbah) for someone struggling with substance abuse?",
        options: ["It is rejected because of past sins", "It opens the door of divine mercy, wiping away past transgressions when accompanied by firm resolve to change", "It requires public confession in a court", "It has no effect"],
        correctAnswer: "It opens the door of divine mercy, wiping away past transgressions when accompanied by firm resolve to change",
        explanation: "Allah's mercy is vast; whoever repents sincerely from any sin is like one who has no sin at all."
      },
      {
        id: "alcohol-drugs-i-19",
        question: "How does Islamic jurisprudence view medications containing small percentages of alcohol used as a preservative, when no alternative exists?",
        options: ["Strictly forbidden under all circumstances", "Permissible under the principle of necessity (Darurah) when certified by medical necessity and no alcohol-free substitute is available", "Encouraged for daily use", "Ignored by scholars"],
        correctAnswer: "Permissible under the principle of necessity (Darurah) when certified by medical necessity and no alcohol-free substitute is available",
        explanation: "When health preservation or vital medical treatment depends on it and no alternative exists, necessity permits its use in measured quantities."
      },
      {
        id: "alcohol-drugs-i-20",
        question: "What does the Quran mean when it refers to intoxicants as an 'abomination' (Rijs)?",
        options: ["Physically expensive", "Spiritually and morally repulsive filth that corrupts human dignity and purity", "A symbol of royalty", "A medical term for digestion"],
        correctAnswer: "Spiritually and morally repulsive filth that corrupts human dignity and purity",
        explanation: "Rijs denotes impurity or filth, highlighting how intoxicants degrade human nobility and spiritual cleanliness."
      },
      {
        id: "alcohol-drugs-i-21",
        question: "What is the ruling on growing grapes or grain with the explicit intention that they will be sold to wineries?",
        options: ["Halal farming", "Haram, because it constitutes direct cooperation in sin (Ta'awun 'ala al-ithm)", "Encouraged agriculture", "Neutral"],
        correctAnswer: "Haram, because it constitutes direct cooperation in sin (Ta'awun 'ala al-ithm)",
        explanation: "Contributing raw materials specifically intended for alcohol production aids directly in the prohibited process."
      },
      {
        id: "alcohol-drugs-i-22",
        question: "How do Islamic teachings address generational cycles of addiction within families?",
        options: ["By ignoring family history", "Through proactive emotional nurturing, breaking harmful habits, providing strong spiritual roots, and fostering supportive community networks", "By penalizing children", "By isolating families"],
        correctAnswer: "Through proactive emotional nurturing, breaking harmful habits, providing strong spiritual roots, and fostering supportive community networks",
        explanation: "Islam emphasizes breaking negative cycles through conscious upbringing, emotional support, and protective environments."
      },
      {
        id: "alcohol-drugs-i-23",
        question: "What is the legal status of public drunkenness or intoxication in an Islamic governance framework?",
        options: ["Protected under free speech", "An offense subject to disciplinary or legal penalties designed to protect public safety and morality", "Rewarded", "Ignored"],
        correctAnswer: "An offense subject to disciplinary or legal penalties designed to protect public safety and morality",
        explanation: "Public intoxication creates disorder and endangers community safety, making it subject to legal deterrence."
      },
      {
        id: "alcohol-drugs-i-24",
        question: "How does the principle of 'No harm and no reciprocating harm' (La darara wa la dirara) apply to drug abuse?",
        options: ["It supports drug use", "It completely forbids substance abuse because it harms one's own body, mind, family, and society", "It applies only to business contracts", "It is unrelated"],
        correctAnswer: "It completely forbids substance abuse because it harms one's own body, mind, family, and society",
        explanation: "This foundational legal maxim of Islam prohibits inflicting harm upon oneself or others in any form."
      },
      {
        id: "alcohol-drugs-i-25",
        question: "What is the Islamic perspective on emotional escapism through chemical alteration vs. patience (Sabr)?",
        options: ["Chemical escapism is superior", "Sabr (perseverance) combined with action and prayer builds resilience, whereas chemical escapism worsens problems and violates divine law", "Both are identical", "Escapism is required during trials"],
        correctAnswer: "Sabr (perseverance) combined with action and prayer builds resilience, whereas chemical escapism worsens problems and violates divine law",
        explanation: "Islam teaches facing life's hardships through patience, trust in Allah, and practical problem-solving rather than numbing the mind."
      },
      {
        id: "alcohol-drugs-i-26",
        question: "What role does community accountability (Hisbah) play regarding open drug distribution in neighborhoods?",
        options: ["To encourage illegal trades", "To advocate for community safety, support rehabilitation, and oppose unlawful harms with wisdom and lawful means", "To remain silent", "To punish individuals arbitrarily"],
        correctAnswer: "To advocate for community safety, support rehabilitation, and oppose unlawful harms with wisdom and lawful means",
        explanation: "Communities are encouraged to promote good, prevent evil peacefully, and protect their vulnerable members from destructive elements."
      },
      {
        id: "alcohol-drugs-i-27",
        question: "How do Islamic scholars differentiate between medicinal herbs and illicit narcotic plants?",
        options: ["There is no difference", "Medicinal plants yield healing without intoxication or destructive addiction, whereas illicit narcotics impair intellect and cause societal destruction", "All plants are haram", "All plants are halal"],
        correctAnswer: "Medicinal plants yield healing without intoxication or destructive addiction, whereas illicit narcotics impair intellect and cause societal destruction",
        explanation: "The distinction lies in utility, safety, absence of harmful intoxication, and alignment with health preservation."
      },
      {
        id: "alcohol-drugs-i-28",
        question: "What is the spiritual danger of trivializing minor sins like a single sip of alcohol or experimenting with drugs?",
        options: ["None", "It desensitizes the conscience, often acting as a slippery slope leading to major spiritual decline", "It increases faith", "It is required for maturity"],
        correctAnswer: "It desensitizes the conscience, often acting as a slippery slope leading to major spiritual decline",
        explanation: "Treating small prohibitions lightly dulls moral alertness, making it easier to fall into graver transgressions over time."
      },
      {
        id: "alcohol-drugs-i-29",
        question: "What does Islamic law dictate regarding contracts or business partnerships centered around nightlife venues selling alcohol?",
        options: ["Valid and blessed", "Null, void, and unlawful due to being built upon a prohibited foundation", "Encouraged", "Subject to personal choice"],
        correctAnswer: "Null, void, and unlawful due to being built upon a prohibited foundation",
        explanation: "Financial arrangements built directly on haram commodities are invalid in Islamic commercial law."
      },
      {
        id: "alcohol-drugs-i-30",
        question: "How does the Quran describe the immediate mental clarity of those who successfully abstain from intoxicants?",
        options: ["As confusion", "As a state of mindfulness, awareness, and spiritual attunement where prayer and remembrance of Allah become fulfilling", "As a punishment", "As temporary"],
        correctAnswer: "As a state of mindfulness, awareness, and spiritual attunement where prayer and remembrance of Allah become fulfilling",
        explanation: "Clearing the mind from intoxicants allows spiritual focus and connection with the Divine to flourish."
      },
      {
        id: "alcohol-drugs-i-31",
        question: "What is the ruling on renting out a commercial building to a tenant who intends to open a liquor store?",
        options: ["Permissible and profitable", "Impermissible, because leasing property for a haram purpose facilitates sin and taints rental income", "Mandatory if rent is high", "Neutral"],
        correctAnswer: "Impermissible, because leasing property for a haram purpose facilitates sin and taints rental income",
        explanation: "Assisting someone directly in setting up a prohibited business constitutes cooperation in sin."
      },
      {
        id: "alcohol-drugs-i-32",
        question: "Why does Islamic ethics view intoxication as a gateway to other major sins (like violence, theft, or indecency)?",
        options: ["It is a medical coincidence", "Because loss of intellect removes moral restraints and self-control, leading easily to reckless actions", "It makes people sleep", "It has no connection to behavior"],
        correctAnswer: "Because loss of intellect removes moral restraints and self-control, leading easily to reckless actions",
        explanation: "The intellect is the brake that stops humans from committing atrocities; removing it leaves the door open to every evil."
      },
      {
        id: "alcohol-drugs-i-33",
        question: "What is the ultimate Islamic perspective on human dignity in relation to sobriety?",
        options: ["Dignity requires altered states", "True human dignity is preserved through a clear, conscious mind capable of honoring moral duties and recognizing truth", "Dignity is unrelated to the mind", "Dignity comes from wealth"],
        correctAnswer: "True human dignity is preserved through a clear, conscious mind capable of honoring moral duties and recognizing truth",
        explanation: "God honored humankind by granting intellect; maintaining and protecting that intellect preserves true human nobility."
      }
    ],
    advanced: [
      {
        id: "alcohol-drugs-a-1",
        question: "In Maqasid al-Shariah (Objectives of Islamic Law), where does the prohibition of intoxicants rank in terms of fundamental protections?",
        options: ["It ranks among the lowest priorities", "It is vital for the preservation of the Intellect (Aql), which is one of the five absolute universal necessities", "It is purely cultural", "It is secondary to fashion"],
        correctAnswer: "It is vital for the preservation of the Intellect (Aql), which is one of the five absolute universal necessities",
        explanation: "The preservation of faith, life, intellect, lineage, and property forms the bedrock of Islamic jurisprudence; protecting the intellect directly guards against intoxicants."
      },
      {
        id: "alcohol-drugs-a-2",
        question: "How do classical Hanafi, Maliki, Shafi'i, and Hanbali jurists differ on whether non-grape/non-date intoxicants (like fermented grain or honey beverages) carry the exact same legal prohibition as grape Khamr?",
        options: ["Hanafis distinguish between grape wine (haram by text) and other intoxicants (haram by interpretation/speculative proof), while others rule all intoxicants equally haram by explicit analogy", "Only grape wine is forbidden", "All other intoxicants are halal", "There is no scholarly agreement whatsoever"],
        correctAnswer: "Hanafis distinguish between grape wine (haram by text) and other intoxicants (haram by interpretation/speculative proof), while others rule all intoxicants equally haram by explicit analogy",
        explanation: "While all schools agree that consuming any intoxicant is strictly forbidden (Haram), classical Hanafi terminology maintains a technical distinction in proof sources between absolute text (Nas) and deductive certainty, though both lead to strict prohibition."
      },
      {
        id: "alcohol-drugs-a-3",
        question: "What is the jurisprudential mechanism of 'Istihalah' (transformation of substance) and how does it apply to vinegar produced from fermented wine?",
        options: ["It remains haram forever", "If wine naturally or chemically transforms completely into vinegar on its own, the resulting substance becomes pure and halal for consumption", "It must be burned", "It can only be used for cleaning"],
        correctAnswer: "If wine naturally or chemically transforms completely into vinegar on its own, the resulting substance becomes pure and halal for consumption",
        explanation: "According to majority consensus, when the chemical nature of wine alters entirely into vinegar (Istihalah), its legal ruling and impurity status change."
      },
      {
        id: "alcohol-drugs-a-4",
        question: "What is the ruling in Usul al-Fiqh regarding 'Illah' (effective cause) when analyzing new synthetic narcotics and designer drugs?",
        options: ["The effective cause is intoxication/impairment of the mind, so any substance sharing this Illah shares the ruling of Khamr regardless of chemical structure", "Only plant-based drugs matter", "Synthetic drugs are unregulated", "Illah does not apply to modern science"],
        correctAnswer: "The effective cause is intoxication/impairment of the mind, so any substance sharing this Illah shares the ruling of Khamr regardless of chemical structure",
        explanation: "Jurists identify the operative legal cause (Illah) of Khamr's prohibition as 'intoxication of the intellect,' automatically extending the prohibition to any substance that replicates this effect."
      },
      {
        id: "alcohol-drugs-a-5",
        question: "How do contemporary Islamic medical ethicists address the administration of addictive narcotic painkillers to terminally ill patients experiencing severe pain?",
        options: ["Forbidden under all circumstances", "Permissible under the principle of alleviating severe suffering, even if it carries secondary risks of dependency or hastened expiration, provided intention is pain relief", "Mandatory for all patients", "Illegal in all countries"],
        correctAnswer: "Permissible under the principle of alleviating severe suffering, even if it carries secondary risks of dependency or hastened expiration, provided intention is pain relief",
        explanation: "Palliative care ethics in Islam prioritize pain management and comfort for terminal patients, overriding routine restrictions when necessity and compassion dictate."
      },
      {
        id: "alcohol-drugs-a-6",
        question: "What is the philosophical and theological stance of Islam regarding the dual nature of human free will when tested with addictive substances?",
        options: ["Free will is an illusion", "Human free will entails moral responsibility; temptation is a test of character, and surrendering to addiction compromises the voluntary agency required for accountability", "Humans have no duties", "Substances control human destiny entirely"],
        correctAnswer: "Human free will entails moral responsibility; temptation is a test of character, and surrendering to addiction compromises the voluntary agency required for accountability",
        explanation: "Islam views earthly life as a moral testing ground where conscious choices define spiritual standing, making self-restraint a supreme virtue."
      },
      {
        id: "alcohol-drugs-a-7",
        question: "How do Islamic courts or jurists handle cases where an addict commits financial crimes or theft specifically to fund their addiction?",
        options: ["Addiction excuses all financial crimes", "Addiction does not waive criminal liability or property rights violations; restitution and legal penalties apply while addressing the root addiction", "Theft is legalized for addicts", "Crimes are ignored"],
        correctAnswer: "Addiction does not waive criminal liability or property rights violations; restitution and legal penalties apply while addressing the root addiction",
        explanation: "Self-induced impairment does not grant immunity from criminal justice or civil liability regarding the rights of other citizens."
      },
      {
        id: "alcohol-drugs-a-8",
        question: "What is the classical ruling on perfume containing alcohol that evaporates upon application, regarding the purity (Tahir vs. Najis) of garments?",
        options: ["Garments become permanently impure", "Most contemporary scholars and several classical opinions hold that modern industrial alcohol is not ritually impure (Najis) and does not invalidate prayer", "Garments must be buried", "Prayers are voided instantly"],
        correctAnswer: "Most contemporary scholars and several classical opinions hold that modern industrial alcohol is not ritually impure (Najis) and does not invalidate prayer",
        explanation: "Since industrial alcohol is derived from petroleum or synthesized rather than fermented drinking wine, and evaporates quickly, it is deemed pure (Tahir) by major contemporary councils."
      },
      {
        id: "alcohol-drugs-a-9",
        question: "How does the Quranic terminology 'Rijs' (filth) applied to Khamr differ from physical impurities like blood or urine?",
        options: ["It is a physical liquid stain", "It represents spiritual and moral filth (Rijs ma'nawi) rather than solely physical filth, reflecting its corruption of human character", "There is zero difference", "It refers only to bad smells"],
        correctAnswer: "It represents spiritual and moral filth (Rijs ma'nawi) rather than solely physical filth, reflecting its corruption of human character",
        explanation: "While jurists debate whether wine is physically Najis (impure to touch), 'Rijs' heavily emphasizes its spiritual and ethical repulsiveness."
      },
      {
        id: "alcohol-drugs-a-10",
        question: "What is the dynamic between 'Tawbah' (repentance) and divine forgiveness in cases of severe, long-term substance abuse and societal harm?",
        options: ["Forgiveness is impossible for major addicts", "Sincere Tawbah that rectifies wrongs, seeks treatment, and turns back to Allah opens the floodgates of absolute forgiveness", "Repentance must be certified by a judge", "Forgiveness requires financial payment to scholars"],
        correctAnswer: "Sincere Tawbah that rectifies wrongs, seeks treatment, and turns back to Allah opens the floodgates of absolute forgiveness",
        explanation: "Allah declares in the Quran that He forgives all sins for those who repent sincerely, emphasizing that despair of divine mercy is itself a grave error."
      },
      {
        id: "alcohol-drugs-a-11",
        question: "How do Islamic bioethicists evaluate gene-therapy or biological research investigating genetic predispositions toward alcoholism and addiction?",
        options: ["As interference with destiny", "As a valid scientific exploration of biological vulnerabilities that helps society implement preventative care and compassionate treatment", "As forbidden experimentation", "As irrelevant to religion"],
        correctAnswer: "As a valid scientific exploration of biological vulnerabilities that helps society implement preventative care and compassionate treatment",
        explanation: "Islam encourages medical research and understanding biological factors to better heal, protect, and support vulnerable individuals."
      },
      {
        id: "alcohol-drugs-a-12",
        question: "What is the legal implication of 'Takhfif' (mitigation or easing of rulings) in Islamic jurisprudence when treating recovering addicts in crisis?",
        options: ["Relaxing prohibitions on alcohol", "Applying compassionate legal and social support, encouraging gradual recovery, and removing undue hardship while maintaining absolute clarity on core prohibitions", "Abandoning all religious rules", "Permitting recreational drug use"],
        correctAnswer: "Applying compassionate legal and social support, encouraging gradual recovery, and removing undue hardship while maintaining absolute clarity on core prohibitions",
        explanation: "While the rule prohibiting intoxicants remains uncompromised, the methodology of helping individuals heal incorporates patience, easing rehabilitation paths, and pastoral care."
      },
      {
        id: "alcohol-drugs-a-13",
        question: "How does Islamic sociology analyze the correlation between widespread availability of intoxicants and societal breakdown?",
        options: ["No correlation exists", "Intoxicants dismantle family cohesion, elevate crime rates, drain economic productivity, and erode community trust, which justifies strict preventive laws", "Alcohol improves societal harmony", "Society is unaffected by drugs"],
        correctAnswer: "Intoxicants dismantle family cohesion, elevate crime rates, drain economic productivity, and erode community trust, which justifies strict preventive laws",
        explanation: "Sociological observations in Islamic philosophy align directly with divine prohibitions designed to safeguard communal welfare."
      },
      {
        id: "alcohol-drugs-a-14",
        question: "What is the ruling on utilizing profits from a mixed business portfolio where a negligible fraction of income derives indirectly from prohibited investments?",
        options: ["Keep all profits without review", "Purify the portfolio by calculating and cleansing the percentage of haram earnings through charity", "Close the business immediately", "Donate the entire company assets"],
        correctAnswer: "Purify the portfolio by calculating and cleansing the percentage of haram earnings through charity",
        explanation: "Contemporary Islamic finance rules mandate 'income purification'—calculating any incidental tainted fraction and purging it from one's earnings."
      },
      {
        id: "alcohol-drugs-a-15",
        question: "How do classical commentaries (Tafsir) explain the phrasing 'Satan only wants to sow enmity and hatred among you through intoxicants'?",
        options: ["As a poetic metaphor with no reality", "As a profound psychological insight into how chemical impairment dissolves inhibition, triggers irrational anger, and shatters community bonds", "As a political alliance", "As a reference to weather"],
        correctAnswer: "As a profound psychological insight into how chemical impairment dissolves inhibition, triggers irrational anger, and shatters community bonds",
        explanation: "The Quran pinpoints the precise social mechanism by which alcohol destroys interpersonal peace by fostering hostility and uninhibited conflict."
      },
      {
        id: "alcohol-drugs-a-16",
        question: "What is the jurisprudential stance on exporting alcoholic beverages produced in a Muslim-majority country by non-Muslim citizens under minority protection (Dhimmah/Mu'ahid)?",
        options: ["Permissible universally", "Classical jurisprudence generally prohibited Muslim involvement in producing or trading Khamr regardless of consumer demographics, though minority legal exemptions within specific historical caliphate models varied", "Encouraged for trade deficits", "Mandatory"],
        correctAnswer: "Classical jurisprudence generally prohibited Muslim involvement in producing or trading Khamr regardless of consumer demographics, though minority legal exemptions within specific historical caliphate models varied",
        explanation: "The overarching injunction against handling or profiting from Khamr applies to Muslim citizens, maintaining ethical integrity across trade frameworks."
      },
      {
        id: "alcohol-drugs-a-17",
        question: "How does the concept of 'Siyasah Shar'iyyah' (Islamic governance and public policy) empower authorities to combat drug trafficking cartels?",
        options: ["By legalizing drugs", "By permitting governments to enact stringent border security, severe penalties for traffickers, and robust public health rehabilitation programs to protect public welfare", "By ignoring cartels", "By taxing cartels"],
        correctAnswer: "By permitting governments to enact stringent border security, severe penalties for traffickers, and robust public health rehabilitation programs to protect public welfare",
        explanation: "Siyasah Shar'iyyah grants rulers the administrative discretion to protect society from organized crimes like large-scale drug smuggling."
      },
      {
        id: "alcohol-drugs-a-18",
        question: "What is the theological relationship between 'Shukr' (gratitude for blessings) and abstaining from substances that ruin mental health?",
        options: ["Gratitude requires consuming everything", "Maintaining a healthy, sound mind and body is an act of profound gratitude to Allah for the supreme gift of consciousness and intellect", "Gratitude is unrelated to health", "Gratitude is expressed through indulgence"],
        correctAnswer: "Maintaining a healthy, sound mind and body is an act of profound gratitude to Allah for the supreme gift of consciousness and intellect",
        explanation: "Using Allah's blessings—especially the intellect—in ways that honor and preserve them constitutes true Shukr."
      },
      {
        id: "alcohol-drugs-a-19",
        question: "How do Islamic legal maxims view 'Darurat tubih al-mahzurat' (Necessities make prohibited things permissible) when applied to synthetic drugs or alcohol?",
        options: ["Any drug is allowed anytime", "Necessity is strictly measured by its exact proportion (e.g., life-saving medical emergency), and recreational use or minor discomfort never triggers this exception", "Necessity cancels all Islamic laws permanently", "Necessity applies to financial debt only"],
        correctAnswer: "Necessity is strictly measured by its exact proportion (e.g., life-saving medical emergency), and recreational use or minor discomfort never triggers this exception",
        explanation: "The legal maxim of necessity is tightly constrained—it permits only what is strictly required to save life or prevent severe physical catastrophe."
      },
      {
        id: "alcohol-drugs-a-20",
        question: "What is the psychological and spiritual depth behind the prohibition of 'Rafath' and foul behavior often triggered by intoxicants?",
        options: ["Encouraging polite speech only", "Intoxicants strip away civilized restraint, leading to obscenity, loss of modesty (Haya), and moral degradation, which Islam preemptively blocks", "Foul speech is rewarded", "Modesty is discouraged"],
        correctAnswer: "Intoxicants strip away civilized restraint, leading to obscenity, loss of modesty (Haya), and moral degradation, which Islam preemptively blocks",
        explanation: "Modesty (Haya) is described as half of faith; anything like intoxicants that dissolves modesty is strictly guarded against."
      },
      {
        id: "alcohol-drugs-a-21",
        question: "How do Islamic scholars evaluate the argument that alcohol in moderation has cardiovascular health benefits?",
        options: ["It mandates daily consumption", "Even if minor health benefits exist in specific compounds, the overarching harms, societal destruction, addiction risks, and explicit divine prohibition outweigh minor worldly benefits", "It invalidates all medical science", "It makes alcohol mandatory"],
        correctAnswer: "Even if minor health benefits exist in specific compounds, the overarching harms, societal destruction, addiction risks, and explicit divine prohibition outweigh minor worldly benefits",
        explanation: "Jurisprudence weighs net outcomes; the overwhelming harms of alcohol and addiction eclipse any isolated biochemical benefit."
      },
      {
        id: "alcohol-drugs-a-22",
        question: "What is the significance of the prophetic metaphor comparing a good companion vs. a bad companion to a musk seller vs. a blacksmith (often applied to substance environments)?",
        options: ["It is about metalwork", "It illustrates how surrounding oneself with environments free of vice protects one's faith, whereas environments of intoxicants inevitably burn or taint character", "It is about perfume sales", "It has no moral lesson"],
        correctAnswer: "It illustrates how surrounding oneself with environments free of vice protects one's faith, whereas environments of intoxicants inevitably burn or taint character",
        explanation: "The prophetic parable highlights the profound influence of peer groups and environments on moral and spiritual wellbeing."
      },
      {
        id: "alcohol-drugs-a-23",
        question: "How do Islamic jurists rule on the use of mind-altering psychedelics or entheogens used historically in spiritual rituals of other traditions?",
        options: ["Permissible for interfaith dialogue", "Prohibited, because all mind-altering intoxicants that cloud the intellect fall under the universal prohibition of Khamr regardless of cultural or ritual context", "Encouraged for meditation", "Required for scholars"],
        correctAnswer: "Prohibited, because all mind-altering intoxicants that cloud the intellect fall under the universal prohibition of Khamr regardless of cultural or ritual context",
        explanation: "The prohibition of Khamr is broad and absolute regarding any substance that induces intoxication or alters mental clarity."
      },
      {
        id: "alcohol-drugs-a-24",
        question: "What is the ethical implication of corporate marketing that targets vulnerable demographics with alcoholic beverages or vaping products?",
        options: ["A brilliant business strategy", "Unethical exploitation of human weakness and addiction for profit, condemned under Islamic principles of fair, honest commerce that prohibits causing harm", "Encouraged philanthropy", "Protected speech"],
        correctAnswer: "Unethical exploitation of human weakness and addiction for profit, condemned under Islamic principles of fair, honest commerce that prohibits causing harm",
        explanation: "Exploiting human vulnerability and promoting harmful addictions for financial gain violates foundational Islamic commercial ethics."
      },
      {
        id: "alcohol-drugs-a-25",
        question: "How does Islamic theology view the concept of 'Qadar' (divine decree) when an individual faces trials of addiction?",
        options: ["Destiny forces people to sin", "While trials occur by divine decree, humans possess moral agency and accountability to seek help, exercise patience, and make righteous choices", "Destiny eliminates all personal choice", "Trials never happen to believers"],
        correctAnswer: "While trials occur by divine decree, humans possess moral agency and accountability to seek help, exercise patience, and make righteous choices",
        explanation: "Belief in destiny does not negate human responsibility; rather, it encourages turning to Allah for strength to overcome trials."
      },
      {
        id: "alcohol-drugs-a-26",
        question: "What is the jurisprudential weight of 'Urf' (custom) when evaluating local cultural traditions that normalize drinking?",
        options: ["Cultural custom overrides divine text", "Divine text and universal Shariah principles supersede local customs; harmful cultural practices like widespread drinking are classified as corrupt customs (Urf fasid)", "Custom creates new halal laws", "Custom is ignored by scholars"],
        correctAnswer: "Divine text and universal Shariah principles supersede local customs; harmful cultural practices like widespread drinking are classified as corrupt customs (Urf fasid)",
        explanation: "While custom is a source of secondary rulings in Islamic law, it can never legitimize something explicitly forbidden by divine revelation."
      },
      {
        id: "alcohol-drugs-a-27",
        question: "How do Islamic legal systems reconcile the requirement of medical confidentiality with reporting dangerous drug dealers who threaten public safety?",
        options: ["Medical confidentiality is absolute", "Preventing widespread harm and protecting public safety (Maslahahammah) permits breaching confidentiality when imminent danger to life or society exists", "Reporting is illegal", "Doctors decide based on mood"],
        correctAnswer: "Preventing widespread harm and protecting public safety (Maslahahammah) permits breaching confidentiality when imminent danger to life or society exists",
        explanation: "When individual privacy conflicts with catastrophic public harm, Islamic ethics prioritize safeguarding the wider community."
      },
      {
        id: "alcohol-drugs-a-28",
        question: "What is the spiritual significance of 'Dhikr' (remembrance of Allah) as a protective psychological barrier against substance abuse?",
        options: ["It is a physical exercise", "It anchors the heart in divine consciousness, reducing anxiety, depression, and the emotional emptiness that often drives individuals toward chemical escapism", "It replaces eating", "It has no psychological impact"],
        correctAnswer: "It anchors the heart in divine consciousness, reducing anxiety, depression, and the emotional emptiness that often drives individuals toward chemical escapism",
        explanation: "Constant remembrance of the Creator fills the spiritual void, providing inner peace and genuine contentment that artificial substances mimic falsely."
      },
      {
        id: "alcohol-drugs-a-29",
        question: "How do classical scholars evaluate the testimony or legal validity of a judge, witness, or notary who openly consumes intoxicants?",
        options: ["Their testimony is fully accepted", "Their integrity (Adalah) is compromised, rendering them legally disqualified from serving as witnesses or judges until sincere repentance is established", "They receive a promotion", "They are exempt from rules"],
        correctAnswer: "Their integrity (Adalah) is compromised, rendering them legally disqualified from serving as witnesses or judges until sincere repentance is established",
        explanation: "Moral integrity and trustworthiness are strict prerequisites for holding public office or legal testimony in classical Islamic jurisprudence."
      },
      {
        id: "alcohol-drugs-a-30",
        question: "What is the ultimate teleological purpose (Hikmah) behind the strict Islamic framework governing alcohol and drugs?",
        options: ["To restrict human joy", "To cultivate a spiritually awakened, physically healthy, intellectually lucid, and morally upright human civilization capable of fulfilling its divine trust on earth", "To test memory skills", "To enforce uniformity"],
        correctAnswer: "To cultivate a spiritually awakened, physically healthy, intellectually lucid, and morally upright human civilization capable of fulfilling its divine trust on earth",
        explanation: "Every prohibition in Islam ultimately serves to elevate human beings, protecting their dignity, minds, and souls for eternal success."
      },
      {
        id: "alcohol-drugs-a-31",
        question: "How do contemporary Islamic scholars view harm reduction programs (such as clean needle exchanges or supervised rehab facilities) for drug addicts?",
        options: ["As promoting sin", "As compassionate humanitarian initiatives that save lives, reduce disease, and create a pathway toward ultimate rehabilitation and spiritual recovery", "As illegal", "As unnecessary"],
        correctAnswer: "As compassionate humanitarian initiatives that save lives, reduce disease, and create a pathway toward ultimate rehabilitation and spiritual recovery",
        explanation: "Saving human life and mitigating destructive harm align perfectly with prophetic mercy and the overarching objectives of Islamic law."
      },
      {
        id: "alcohol-drugs-a-32",
        question: "What is the theological distinction between 'Waswasah' (whispers of Satan) encouraging substance experimentation and human accountability?",
        options: ["Satan forces people to drink", "Satan initiates temptation through whispers, but human free will chooses whether to yield or resist, establishing full personal accountability", "Whispers carry no blame", "Humans have no free will"],
        correctAnswer: "Satan initiates temptation through whispers, but human free will chooses whether to yield or resist, establishing full personal accountability",
        explanation: "External temptation does not excuse bad choices; individuals retain moral agency and responsibility for their actions."
      },
      {
        id: "alcohol-drugs-a-33",
        question: "What ultimate message does the Quranic prohibition of intoxicants impart regarding human freedom and divine law?",
        options: ["Divine law enslaves humanity", "True freedom is achieved not by surrendering to chemical addictions, but by liberating the soul from base desires and anchoring it in obedience to the Creator", "Freedom means doing whatever feels good", "Law has no role in freedom"],
        correctAnswer: "True freedom is achieved not by surrendering to chemical addictions, but by liberating the soul from base desires and anchoring it in obedience to the Creator",
        explanation: "Islam teaches that true spiritual liberation is found in mastering one's impulses and living in alignment with divine wisdom."
      }
    ]
  }
};

export default islamicAlcoholDrugsCategory;