import type { QuizCategory } from "@/types/quiz"

const islamicHistoryCategory: QuizCategory = {
  id: "history",
  title: "Islamic History & Civilization",
  description: "Explore the golden ages of Islamic civilization, scientific achievements, and cultural contributions",
  icon: "landmark",
  levels: {
    easy: [
      {
        question: "Which city was the first capital of the Islamic state under Prophet Muhammad (PBUH)?",
        options: ["Makkah", "Madinah", "Jerusalem", "Damascus"],
        correctAnswer: "Madinah",
        explanation:
          "After the Hijrah (migration) from Makkah, Prophet Muhammad (PBUH) established the first Islamic state in Madinah, making it the first capital.",
      },
      {
        question: "Who was the first Caliph after the death of Prophet Muhammad (PBUH)?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Abu Bakr",
        explanation:
          "Abu Bakr was elected as the first Caliph (successor) after the death of Prophet Muhammad (PBUH) in 632 CE.",
      },
      {
        question: "During which Caliph's rule was the Quran compiled into a single manuscript?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Abu Bakr",
        explanation:
          "The Quran was first compiled into a single manuscript during Abu Bakr's caliphate, after many memorizers (Hafiz) were martyred in the Battle of Yamamah.",
      },
      {
        question: "Which companion was given the title 'As-Siddiq' (The Truthful) by Prophet Muhammad (PBUH)?",
        options: ["Umar ibn al-Khattab", "Abu Bakr", "Ali ibn Abi Talib", "Uthman ibn Affan"],
        correctAnswer: "Abu Bakr",
        explanation:
          "Abu Bakr was given the title As-Siddiq because of his immediate and unwavering belief in the Prophet's Night Journey (Isra and Mi'raj) and all his other teachings.",
      },
      {
        question: "What is the name of the migration of Prophet Muhammad (PBUH) and his companions from Makkah to Madinah?",
        options: ["Isra", "Mi'raj", "Hijrah", "Ghazwah"],
        correctAnswer: "Hijrah",
        explanation:
          "The Hijrah marks the migration of the Muslims from Makkah to Madinah in 622 CE, which also serves as the starting point of the Islamic lunar calendar.",
      },
      {
        question: "Who was the first martyr (Shaheed) in Islam?",
        options: ["Sumayyah bint Khayyat", "Yasir ibn Amir", "Hamza ibn Abdul-Muttalib", "Bilal ibn Rabah"],
        correctAnswer: "Sumayyah bint Khayyat",
        explanation:
          "Sumayyah bint Khayyat was the first person to be martyred for Islam, tortured to death by the disbelievers of Makkah.",
      },
      {
        question: "In which month of the Islamic calendar do Muslims fast during daylight hours?",
        options: ["Shawwal", "Ramadan", "Dhul-Hijjah", "Muharram"],
        correctAnswer: "Ramadan",
        explanation:
          "Ramadan is the ninth month of the Islamic calendar and is the month of fasting, during which the Quran was first revealed.",
      },
      {
        question: "Which battle was the first major military confrontation between Muslims and the Quraysh of Makkah?",
        options: ["Battle of Uhud", "Battle of the Trench", "Battle of Badr", "Battle of Khaybar"],
        correctAnswer: "Battle of Badr",
        explanation:
          "The Battle of Badr took place in 624 CE (2 AH) and resulted in a decisive victory for the small Muslim force against the Quraysh.",
      },
      {
        question: "What was the relationship between Prophet Muhammad (PBUH) and Ali ibn Abi Talib?",
        options: ["Father and son", "Cousin and son-in-law", "Brother", "Uncle and nephew"],
        correctAnswer: "Cousin and son-in-law",
        explanation:
          "Ali ibn Abi Talib was the cousin of Prophet Muhammad (PBUH) and married the Prophet's daughter, Fatimah.",
      },
      {
        question: "Which bird delivered the message from Prophet Sulaiman (Solomon) to the Queen of Sheba?",
        options: ["A pigeon", "An eagle", "A hoopoe (Hud-hud)", "A falcon"],
        correctAnswer: "A hoopoe (Hud-hud)",
        explanation:
          "As mentioned in Surah An-Naml, the hoopoe bird brought news of Queen Bilqis (Sheba) and her people worshipping the sun.",
      },
      {
        question: "Which angel is responsible for bringing revelation from Allah to the Prophets?",
        options: ["Israfil", "Mikail", "Jibril (Gabriel)", "Malik"],
        correctAnswer: "Jibril (Gabriel)",
        explanation:
          "Angel Jibril is entrusted with delivering the divine revelations from Allah to His prophets and messengers.",
      },
      {
        question: "How many obligatory daily prayers (Salah) are prescribed for Muslims?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: "Five",
        explanation:
          "The five daily prayers—Fajr, Dhuhr, Asr, Maghrib, and Isha—are one of the core pillars of Islam.",
      },
      {
        question: "Who was the second Caliph of Islam?",
        options: ["Uthman ibn Affan", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abu Bakr"],
        correctAnswer: "Umar ibn al-Khattab",
        explanation:
          "Umar ibn al-Khattab succeeded Abu Bakr as the second Caliph, ruling from 634 to 644 CE.",
      },
      {
        question: "Which city is home to Al-Masjid an-Nabawi (The Prophet's Mosque)?",
        options: ["Makkah", "Madinah", "Jerusalem", "Cairo"],
        correctAnswer: "Madinah",
        explanation:
          "Al-Masjid an-Nabawi is located in Madinah and is the second holiest site in Islam.",
      },
      {
        question: "What is the direction (Qiblah) that Muslims face when performing prayers?",
        options: ["The Kaaba in Makkah", "Al-Aqsa Mosque in Jerusalem", "The Prophet's Mosque in Madinah", "Mount Sinai"],
        correctAnswer: "The Kaaba in Makkah",
        explanation:
          "Muslims worldwide face the Kaaba located inside Al-Masjid al-Haram in Makkah during their prayers.",
      },
      {
        question: "Which prophet is known in Islamic tradition as 'Khalilullah' (The Friend of Allah)?",
        options: ["Musa", "Ibrahim", "Isa", "Nuh"],
        correctAnswer: "Ibrahim",
        explanation:
          "Prophet Ibrahim (Abraham) holds the esteemed title of Khalilullah, meaning the Friend of Allah.",
      },
      {
        question: "What is the name of the well in Makkah that miraculously sprang forth for Hajar and her son Ismail?",
        options: ["Zamzam", "Badr", "Tabuk", "Kausar"],
        correctAnswer: "Zamzam",
        explanation:
          "The Zamzam well is a blessed water source in Makkah that miraculous gushed forth when Hajar was searching for water for baby Ismail.",
      },
      {
        question: "Which companion of the Prophet was known for having a beautiful and powerful voice for the Adhan (call to prayer)?",
        options: ["Ali ibn Abi Talib", "Bilal ibn Rabah", "Uthman ibn Affan", "Zayd ibn Harithah"],
        correctAnswer: "Bilal ibn Rabah",
        explanation:
          "Bilal ibn Rabah, a freed slave of Abyssinian descent, was chosen by the Prophet to be the first Mu'adhdhin in Islam.",
      },
      {
        question: "What is the literal meaning of the Arabic word 'Islam'?",
        options: ["Peace and Submission", "Faith and Knowledge", "Strength and Honor", "Charity and Fasting"],
        correctAnswer: "Peace and Submission",
        explanation:
          "Islam derives from a root word meaning peace, purity, and submission to the will of Allah.",
      },
      {
        question: "How many chapters (Surahs) are there in the Noble Quran?",
        options: ["114", "110", "120", "99"],
        correctAnswer: "114",
        explanation:
          "The Noble Quran consists of 114 Surahs, spanning from Surah Al-Fatihah to Surah An-Nas.",
      },
      {
        question: "Who was the mother of Prophet Isa (Jesus)?",
        options: ["Aasiya", "Khadijah", "Maryam (Mary)", "Fatimah"],
        correctAnswer: "Maryam (Mary)",
        explanation:
          "Maryam, daughter of Imran, is honored as a righteous and chaste woman, with an entire chapter of the Quran named after her.",
      },
      {
        question: "In which cave did Prophet Muhammad (PBUH) receive the first revelation from Angel Jibril?",
        options: ["Cave of Thawr", "Cave of Hira", "Cave of Uhud", "Cave of Safa"],
        correctAnswer: "Cave of Hira",
        explanation:
          "Prophet Muhammad (PBUH) received the first verses of Surah Al-Alaq while meditating in the Cave of Hira on Jabal an-Nur.",
      },
      {
        question: "What is the pilgrimage to Makkah performed during the month of Dhul-Hijjah called?",
        options: ["Umrah", "Hajj", "Tawaf", "Ziyarah"],
        correctAnswer: "Hajj",
        explanation:
          "Hajj is the major annual pilgrimage to Makkah and is the fifth pillar of Islam, mandatory once in a lifetime for those able.",
      },
      {
        question: "Which Caliph standardized the dialect of the Quran and distributed official copies to major Islamic provinces?",
        options: ["Abu Bakr", "Umar ibn al-Khattab", "Uthman ibn Affan", "Ali ibn Abi Talib"],
        correctAnswer: "Uthman ibn Affan",
        explanation:
          "Uthman ibn Affan ordered the compilation of a standardized Qurannic text based on the dialect of the Quraysh to prevent recitation discrepancies.",
      },
      {
        question: "Which of the Prophet's wives was a successful merchant and the first person to accept Islam?",
        options: ["Aisha bint Abi Bakr", "Khadijah bint Khuwaylid", "Hafsah bint Umar", "Zaynab bint Jahsh"],
        correctAnswer: "Khadijah bint Khuwaylid",
        explanation:
          "Khadijah bint Khuwaylid was the Prophet's first wife, a noble merchant, and provided immense emotional and financial support during early Islam.",
      },
      {
        question: "What is the annual obligatory charity that wealthy Muslims must pay to support the needy?",
        options: ["Sadaqah", "Zakat", "Jizyah", "Fidya"],
        correctAnswer: "Zakat",
        explanation:
          "Zakat is a mandatory financial due levied on wealth above a certain threshold (Nisab), serving as the third pillar of Islam.",
      },
      {
        question: "Which battle saw a setback for Muslims due to archers leaving their designated post on Mount Uhud?",
        options: ["Battle of Badr", "Battle of Uhud", "Battle of Trench", "Battle of Mu'tah"],
        correctAnswer: "Battle of Uhud",
        explanation:
          "In the Battle of Uhud (3 AH), archers left the hill to collect spoils of war prematurely, leading to a counterattack by the Quraysh cavalry.",
      },
      {
        question: "What is the name of the night journey during which Prophet Muhammad (PBUH) traveled from Makkah to Jerusalem and ascended to the heavens?",
        options: ["Hijrah", "Isra and Mi'raj", "Badr", "Laylat al-Qadr"],
        correctAnswer: "Isra and Mi'raj",
        explanation:
          "Isra and Mi'raj was the miraculous night journey where the Prophet traveled to Al-Aqsa Mosque and ascended through the heavens.",
      },
      {
        question: "Who was the foster mother who nursed Prophet Muhammad (PBUH) during his infancy?",
        options: ["Halimah al-Sa'diyah", "Thuwaybah", "Aminah bint Wahb", "Barakah (Umm Ayman)"],
        correctAnswer: "Halimah al-Sa'diyah",
        explanation:
          "Halimah al-Sa'diyah from the Banu Sa'd tribe nursed and cared for Prophet Muhammad (PBUH) during his early childhood in the desert.",
      },
      {
        question: "Which prophet built the Ark by the command of Allah to save believers and pairs of animals from the great flood?",
        options: ["Ibrahim", "Nuh (Noah)", "Hud", "Salih"],
        correctAnswer: "Nuh (Noah)",
        explanation:
          "Prophet Nuh preached for centuries and built the Ark by divine inspiration to survive the worldwide deluge.",
      },
      {
        question: "What is the term for voluntary charity given outside of mandatory Zakat?",
        options: ["Sadaqah", "Riba", "Ghanimah", "Waqf"],
        correctAnswer: "Sadaqah",
        explanation:
          "Sadaqah encompasses any voluntary act of charity or kindness, including financial donations, smiling, or helping others.",
      },
      {
        question: "Which uncle of Prophet Muhammad (PBUH) famously opposed Islam and had Surah Al-Masad revealed about him?",
        options: ["Hamza ibn Abdul-Muttalib", "Abu Talib", "Abu Lahab", "Al-Abbas"],
        correctAnswer: "Abu Lahab",
        explanation:
          "Abu Lahab fiercely opposed Islam and harassed the Prophet, leading to the revelation of Surah Al-Masad condemning him and his wife.",
      },
      {
        question: "What is the name of the treaty signed between Muslims and the Quraysh in 6 AH that established a ten-year truce?",
        options: ["Treaty of Hudaybiyyah", "Constitution of Madinah", "Pact of Najran", "Treaty of Taif"],
        correctAnswer: "Treaty of Hudaybiyyah",
        explanation:
          "The Treaty of Hudaybiyyah was a pivotal diplomatic agreement that paved the way for the eventual peaceful conquest of Makkah.",
      },
      {
        question: "Which angel is tasked with blowing the trumpet to signal the Day of Judgment?",
        options: ["Jibril", "Mikail", "Israfil", "Izrail"],
        correctAnswer: "Israfil",
        explanation:
          "Angel Israfil holds the trumpet, waiting for the command of Allah to blow it, marking the end of the world and resurrection.",
      },
      {
        question: "Who was the father of Prophet Muhammad (PBUH)?",
        options: ["Abdul-Muttalib", "Abdullah", "Abu Talib", "Al-Abbas"],
        correctAnswer: "Abdullah",
        explanation:
          "Abdullah ibn Abdul-Muttalib passed away shortly before the birth of his son, Prophet Muhammad (PBUH).",
      },
      {
        question: "Which companion was given the title 'Saifullah' (The Sword of Allah) by the Prophet?",
        options: ["Ali ibn Abi Talib", "Hamza ibn Abdul-Muttalib", "Khalid ibn al-Walid", "Umar ibn al-Khattab"],
        correctAnswer: "Khalid ibn al-Walid",
        explanation:
          "Khalid ibn al-Walid received the title Saifullah for his exceptional tactical brilliance and bravery in military leadership.",
      },
      {
        question: "What is the Islamic term for the declaration of faith: 'There is no god but Allah, and Muhammad is His messenger'?",
        options: ["Salah", "Shahadah", "Sawm", "Hajj"],
        correctAnswer: "Shahadah",
        explanation:
          "Shahadah is the foundational testimony of faith and the very first pillar of Islam.",
      },
      {
        question: "Which city did Muslims peacefully conquer in 8 AH (630 CE)?",
        options: ["Jerusalem", "Damascus", "Makkah", "Cairo"],
        correctAnswer: "Makkah",
        explanation:
          "Muslims entered Makkah in a historic peaceful conquest, after which idol worship inside the Kaaba was cleared.",
      },
      {
        question: "Who was the first male to accept Islam outside of the Prophet's household?",
        options: ["Ali ibn Abi Talib", "Abu Bakr as-Siddiq", "Uthman ibn Affan", "Zayd ibn Harithah"],
        correctAnswer: "Abu Bakr as-Siddiq",
        explanation:
          "Abu Bakr was the first adult free male to embrace Islam without hesitation.",
      },
      {
        question: "What is the name of the Islamic code of law derived from the Quran and Sunnah?",
        options: ["Shariah", "Hadith", "Fiqh", "Sunnah"],
        correctAnswer: "Shariah",
        explanation:
          "Shariah represents the moral and legal framework of Islam derived from divine revelation and Prophetic tradition.",
      }
    ],
    intermediate: [
      {
        question: "In which year of the Islamic calendar did the Battle of Badr take place?",
        options: ["1 AH", "2 AH", "3 AH", "4 AH"],
        correctAnswer: "2 AH",
        explanation:
          "The Battle of Badr took place on the 17th of Ramadan in 2 AH (624 CE), marking the first major military victory for Muslims.",
      },
      {
        question: "Who commanded the Muslim army during the decisive Battle of Yarmouk against the Byzantine Empire?",
        options: ["Khalid ibn al-Walid", "Abu Ubaidah ibn al-Jarrah", "Amr ibn al-Aas", "Sa'd ibn Abi Waqqas"],
        correctAnswer: "Abu Ubaidah ibn al-Jarrah",
        explanation:
          "While Khalid ibn al-Walid played a crucial tactical role, Abu Ubaidah ibn al-Jarrah was the supreme commander of the Muslim forces at Yarmouk.",
      },
      {
        question: "Which Umayyad Caliph is credited with ordering the construction of the Dome of the Rock in Jerusalem?",
        options: ["Muawiyah I", "Abd al-Malik ibn Marwan", "Al-Walid I", "Umar ibn Abd al-Aziz"],
        correctAnswer: "Abd al-Malik ibn Marwan",
        explanation:
          "Abd al-Malik ibn Marwan commissioned the majestic Dome of the Rock (Qubbat al-Sakhrah), completed in 691–692 CE.",
      },
      {
        question: "Which Abbasid Caliph established the famous 'Bayt al-Hikmah' (House of Wisdom) in Baghdad?",
        options: ["Al-Mansur", "Harun al-Rashid", "Al-Ma'mun", "Al-Mu'tasim"],
        correctAnswer: "Al-Ma'mun",
        explanation:
          "Though initiated earlier, Al-Ma'mun greatly expanded the House of Wisdom, turning Baghdad into the premier global center for scientific translation and research.",
      },
      {
        question: "What was the primary political and religious capital of the Islamic state established by Muawiyah ibn Abi Sufyan?",
        options: ["Madinah", "Kufa", "Damascus", "Baghdad"],
        correctAnswer: "Damascus",
        explanation:
          "Muawiyah ibn Abi Sufyan moved the capital of the Islamic Caliphate from Kufa to Damascus, establishing the Umayyad dynasty.",
      },
      {
        question: "Which battle in 36 AH (656 CE) was fought between the forces of Caliph Ali ibn Abi Talib and those led by Aisha, Talhah, and Zubayr?",
        options: ["Battle of Siffin", "Battle of the Camel", "Battle of Nahrawan", "Battle of Yarmouk"],
        correctAnswer: "Battle of the Camel",
        explanation:
          "The Battle of the Camel took place near Basra and derived its name from the camel ridden by Aisha during the confrontation.",
      },
      {
        question: "Who was the brilliant Muslim naval commander who established the first Muslim naval fleet and defeated the Byzantine navy at the Battle of the Masts (Dhat al-Sawari)?",
        options: ["Tariq ibn Ziyad", "Abdullah ibn Abi Sarh", "Musa ibn Nusayr", "Uqba ibn Nafi"],
        correctAnswer: "Abdullah ibn Abi Sarh",
        explanation:
          "Abdullah ibn Abi Sarh, governor of Egypt, commanded the historic naval victory in 655 CE that broke Byzantine naval dominance in the Mediterranean.",
      },
      {
        question: "Which Umayyad ruler is widely celebrated for his exceptional piety, justice, and is sometimes referred to as the fifth Rightly Guided Caliph?",
        options: ["Muawiyah II", "Yazid I", "Umar ibn Abd al-Aziz", "Hisham ibn Abd al-Malik"],
        correctAnswer: "Umar ibn Abd al-Aziz",
        explanation:
          "Umar ibn Abd al-Aziz (Umar II) is renowned across Islamic history for his profound righteousness, administrative reforms, and revival of prophetic governance.",
      },
      {
        question: "In what year did Tariq ibn Ziyad cross the strait into Iberian Peninsula (Spain), giving his name to Jabal Tariq (Gibraltar)?",
        options: ["711 CE", "732 CE", "750 CE", "680 CE"],
        correctAnswer: "711 CE",
        explanation:
          "Tariq ibn Ziyad led the Islamic conquest of Hispania in 711 CE, initiating nearly eight centuries of Islamic civilization in Al-Andalus.",
      },
      {
        question: "Which dynasty overthrew the Umayyad Caliphate in 750 CE and shifted the capital from Damascus to Baghdad?",
        options: ["Fatimid Dynasty", "Abbasid Dynasty", "Ottoman Dynasty", "Buyid Dynasty"],
        correctAnswer: "Abbasid Dynasty",
        explanation:
          "The Abbasids, descendants of the Prophet's uncle Al-Abbas, defeated the Umayyads in the Battle of the Zab and established the Abbasid Caliphate.",
      },
      {
        question: "Who was the founder of the Umayyad Emirate of Cordoba in Al-Andalus, escaping the Abbasid purge of his family?",
        options: ["Abd al-Rahman I", "Abd al-Rahman III", "Al-Hakam II", "Muhammad I"],
        correctAnswer: "Abd al-Rahman I",
        explanation:
          "Abd al-Rahman I ('The Falcon of Quraysh') fled the Abbasids, crossed North Africa, and established an independent Umayyad rule in Spain in 756 CE.",
      },
      {
        question: "Which legendary Salah ad-Din (Saladin) defeated the Crusaders in 1187 CE, reclaiming Jerusalem for Muslims?",
        options: ["Battle of Hattin", "Battle of Dorylaeum", "Siege of Antioch", "Battle of Mansurah"],
        correctAnswer: "Battle of Hattin",
        explanation:
          "Saladin's decisive victory at the Battle of Hattin shattered Crusader military strength and led directly to the recapture of Jerusalem.",
      },
      {
        question: "What was the name of the famous intellectual movement and translation center in Abbasid Baghdad where Greek, Persian, and Indian texts were translated into Arabic?",
        options: ["Dar al-Ilm", "Bayt al-Hikmah", "Al-Azhar", "Nizamiyyah"],
        correctAnswer: "Bayt al-Hikmah",
        explanation:
          "Bayt al-Hikmah (The House of Wisdom) served as a massive library, academy, and translation bureau during the Islamic Golden Age.",
      },
      {
        question: "Who was the founder of the Fatimid Caliphate in North Africa, which later founded Cairo and Al-Azhar Mosque?",
        options: ["Ubayd Allah al-Mahdi", "Al-Mu'izz li-Din Allah", "Al-Hakim bi-Amr Allah", "Jawhar al-Siqilli"],
        correctAnswer: "Ubayd Allah al-Mahdi",
        explanation:
          "Ubayd Allah al-Mahdi Billah proclaimed the Fatimid Caliphate in Ifriqiya (modern Tunisia) in 909 CE.",
      },
      {
        question: "Which Ottoman Sultan conquered Constantinople in 1453 CE, fulfilling the prophecy of the Prophet (PBUH)?",
        options: ["Bayezid I", "Murad II", "Mehmed II (Al-Fatih)", "Selim I"],
        correctAnswer: "Mehmed II (Al-Fatih)",
        explanation:
          "Mehmed II, known as Al-Fatih (The Conqueror), successfully besieged and conquered Constantinople in 1453 CE, turning it into Istanbul.",
      },
      {
        question: "Which brilliant polymath wrote 'The Canon of Medicine' (Al-Qanun fi al-Tibb), which served as a primary medical textbook in Europe and Islamic lands for centuries?",
        options: ["Al-Razi", "Ibn Sina (Avicenna)", "Ibn al-Nafis", "Al-Zahrawi"],
        correctAnswer: "Ibn Sina (Avicenna)",
        explanation:
          "Ibn Sina's monumental medical encyclopaedia, The Canon of Medicine, synthesized Greek, Islamic, and Indian medical knowledge.",
      },
      {
        question: "What devastating event in 1258 CE marked the end of the Abbasid Caliphate in Baghdad?",
        options: ["Crusader siege", "Mongol invasion led by Hulagu Khan", "Internal civil war", "Byzantine counter-offensive"],
        correctAnswer: "Mongol invasion led by Hulagu Khan",
        explanation:
          "Hulagu Khan sacked Baghdad in 1258 CE, executing the last Abbasid Caliph Al-Musta'sim and destroying much of the city's legendary libraries.",
      },
      {
        question: "Which Mamluk Sultan decisively defeated the Mongol army at the Battle of Ain Jalut in 1260 CE, halting their advance into Egypt and North Africa?",
        options: ["Baibars", "Qutuz", "Qalawun", "Aybak"],
        correctAnswer: "Qutuz",
        explanation:
          "Sultan Qutuz, alongside commander Baibars, led the Mamluks to a historic victory at Ain Jalut, saving the Islamic world from total Mongol destruction.",
      },
      {
        question: "Who was the founder of the Ghaznavid Empire, known for his numerous military campaigns into the Indian subcontinent?",
        options: ["Alp Tigin", "Sabuktigin", "Mahmud of Ghazni", "Mas'ud I"],
        correctAnswer: "Mahmud of Ghazni",
        explanation:
          "Sultan Mahmud of Ghazni ruled from 998 to 1030 CE, establishing a powerful Turko-Persian empire spanning from Iran to northern India.",
      },
      {
        question: "Which great Muslim traveler and scholar spent nearly 30 years journeying across Africa, the Middle East, India, China, and beyond, dictating the famous 'Rihla'?",
        options: ["Ibn Battuta", "Ibn Jubayr", "Al-Masudi", "Ibn Fadlan"],
        correctAnswer: "Ibn Battuta",
        explanation:
          "Ibn Battuta travelled over 120,000 kilometers across the Afro-Eurasian world, recording invaluable historical and cultural observations.",
      },
      {
        question: "What was the capital of the great Mali Empire during the reign of Mansa Musa, renowned for its scholarship and mosques like Sankore?",
        options: ["Timbuktu", "Gao", "Djenne", "Koumbi Saleh"],
        correctAnswer: "Timbuktu",
        explanation:
          "Timbuktu flourished as a legendary center of Islamic learning, trade, and culture under the Mali Empire, housing thousands of scholarly manuscripts.",
      },
      {
        question: "Which Seljuk Turk victory over the Byzantine Empire in 1071 CE opened up Anatolia for Turkish settlement and triggered the Crusades?",
        options: ["Battle of Manzikert", "Battle of Dorylaeum", "Battle of Myriokephalon", "Battle of Yarmouk"],
        correctAnswer: "Battle of Manzikert",
        explanation:
          "Sultan Alp Arslan led the Seljuk forces to a stunning victory at Manzikert over Byzantine Emperor Romanos IV Diogenes.",
      },
      {
        question: "Who was the founder of the Almoravid dynasty, which united Northwest Africa and Al-Andalus?",
        options: ["Yusuf ibn Tashfin", "Ibn Tumart", "Abd al-Mu'min", "Abu Bakr ibn Umar"],
        correctAnswer: "Yusuf ibn Tashfin",
        explanation:
          "Yusuf ibn Tashfin founded Marrakech and crossed into Spain to rescue Andalusian Muslims from Christian reconquista forces at the Battle of Sagrajas.",
      },
      {
        question: "Which Mughal Emperor commissioned the construction of the Taj Mahal in Agra as a mausoleum for his beloved wife Mumtaz Mahal?",
        options: ["Akbar the Great", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: "Shah Jahan",
        explanation:
          "Shah Jahan ruled during the architectural peak of the Mughal Empire, building world-renowned masterpieces including the Taj Mahal.",
      },
      {
        question: "What was the name of the treaty signed between Caliph Ali and Muawiyah after the arbitration at Siffin failed to produce a unified agreement?",
        options: ["There was no treaty; arbitration ended inconclusively", "Treaty of Madinah", "Pact of Kufa", "Damascus Accord"],
        correctAnswer: "There was no treaty; arbitration ended inconclusively",
        explanation:
          "The arbitration at Adhruh following Siffin broke down without a definitive resolution, leaving the political landscape divided.",
      },
      {
        question: "Which famous Muslim scholar and jurist authored 'Al-Muwatta', one of the earliest and most authoritative collections of Hadith and Islamic law?",
        options: ["Imam Abu Hanifa", "Imam Malik ibn Anas", "Imam al-Shafi'i", "Imam Ahmad ibn Hanbal"],
        correctAnswer: "Imam Malik ibn Anas",
        explanation:
          "Imam Malik compiled Al-Muwatta in Madinah, anchoring his legal rulings in the traditions and practices of the people of Madinah.",
      },
      {
        question: "Which Sufi master and philosopher founded the Mevlevi Order (famous for the Whirling Dervishes) in Konya?",
        options: ["Al-Ghazali", "Abdul Qadir Jilani", "Jalal al-Din Muhammad Rumi", "Ibn Arabi"],
        correctAnswer: "Jalal al-Din Muhammad Rumi",
        explanation:
          "Mawlana Rumi was a towering poet and mystic whose spiritual works deeply influenced Islamic literature and mystical thought.",
      },
      {
        question: "Which Islamic empire, founded by Ismail I in 1501 CE, established Twelver Shia Islam as the state religion in Persia?",
        options: ["Ottoman Empire", "Safavid Empire", "Mughal Empire", "Qajar Empire"],
        correctAnswer: "Safavid Empire",
        explanation:
          "The Safavid Empire unified Iran and established Twelver Shia Islam, creating a major geopolitical powerhouse alongside the Ottomans.",
      },
      {
        question: "Who was the brilliant Andalusian philosopher and physician known in the West as Averroes, famous for his commentaries on Aristotle?",
        options: ["Ibn Tufayl", "Ibn Rushd", "Maimonides", "Al-Farabi"],
        correctAnswer: "Ibn Rushd",
        explanation:
          "Ibn Rushd (Averroes) of Cordoba made immense contributions to philosophy, theology, astronomy, and jurisprudence.",
      },
      {
        question: "What major administrative institution was established by Umar ibn al-Khattab to manage state revenues, stipends, and military records?",
        options: ["Diwan", "Bayt al-Mal", "Hisbah", "Waqf"],
        correctAnswer: "Diwan",
        explanation:
          "Umar established the Diwan system inspired by Persian administrative practices to organize stipends for soldiers and citizens.",
      },
      {
        question: "Which Muslim commander led the conquest of Sindh in 712 CE, opening the Indian subcontinent to Islamic influence?",
        options: ["Mahmud of Ghazni", "Muhammad bin Qasim", "Qutb-ud-din Aibak", "Alauddin Khalji"],
        correctAnswer: "Muhammad bin Qasim",
        explanation:
          "At just 17 years old, Muhammad bin Qasim led the Umayyad campaign into Sindh, ensuring fair treatment of local populations and religious freedom.",
      },
      {
        question: "Which prominent companion served as the personal secretary of the Prophet and was head of the committee that compiled Uthman's Quranic codex?",
        options: ["Ubayy ibn Ka'b", "Zayd ibn Thabit", "Abdullah ibn Masud", "Abu Musa al-Ash'ari"],
        correctAnswer: "Zayd ibn Thabit",
        explanation:
          "Zayd ibn Thabit was entrusted by Abu Bakr and Uthman with compiling the scattered revelations of the Quran into authorized written manuscripts.",
      },
      {
        question: "Which Fatimid foundation in Cairo became one of the oldest degree-granting universities in the world?",
        options: ["Al-Qarawiyyin University", "Al-Azhar University", "Nizamiyyah Madrasah", "Mustansiriya University"],
        correctAnswer: "Al-Azhar University",
        explanation:
          "Founded in 970–972 CE by Jawhar al-Siqilli, Al-Azhar has remained a premier center of Islamic learning for over a millennium.",
      },
      {
        question: "Who was the founder of the Delhi Sultanate in 1206 CE, marking the formal establishment of Muslim rule in northern India?",
        options: ["Muhammad Ghori", "Qutb-ud-din Aibak", "Iltutmish", "Balban"],
        correctAnswer: "Qutb-ud-din Aibak",
        explanation:
          "Qutb-ud-din Aibak established the Mamluk dynasty of Delhi, initiating the Delhi Sultanate era.",
      },
      {
        question: "Which brilliant astronomer and mathematician from Cairo wrote the 'Kitab al-Manazir' (Book of Optics) and discovered the principles of camera obscura?",
        options: ["Al-Battani", "Al-Khazini", "Ibn al-Haytham (Alhazen)", "Nasir al-Din al-Tusi"],
        correctAnswer: "Ibn al-Haytham (Alhazen)",
        explanation:
          "Ibn al-Haytham revolutionized physics and optics, pioneering the modern scientific method centuries before European Enlightenment.",
      },
      {
        question: "What was the name of the great naval battle in 1538 CE where the Ottoman fleet under Hayreddin Barbarossa defeated the Holy League fleet led by Andrea Doria?",
        options: ["Battle of Lepanto", "Battle of Preveza", "Siege of Rhodes", "Battle of Djerba"],
        correctAnswer: "Battle of Preveza",
        explanation:
          "Hayreddin Barbarossa secured undisputed Ottoman naval supremacy in the Mediterranean with his brilliant tactics at Preveza.",
      },
      {
        question: "Which Berber kingdom in Morocco succeeded the Almoravids and founded the magnificent Koutoubia Mosque?",
        options: ["Marinid Sultanate", "Almohad Caliphate", "Saadi Dynasty", "Idrisid Dynasty"],
        correctAnswer: "Almohad Caliphate",
        explanation:
          "The Almohad movement, founded by Ibn Tumart and led by Abd al-Mu'min, built a vast empire across North Africa and Al-Andalus.",
      },
      {
        question: "Who was the renowned founder of the Hanbali school of jurisprudence and a fierce defender of orthodox creed during the Mihna (inquisition)?",
        options: ["Imam Abu Hanifa", "Imam Malik", "Imam al-Shafi'i", "Imam Ahmad ibn Hanbal"],
        correctAnswer: "Imam Ahmad ibn Hanbal",
        explanation:
          "Imam Ahmad ibn Hanbal endured imprisonment and torture during the Abbasid inquisitions rather than compromise on traditional Islamic doctrine.",
      },
      {
        question: "Which city served as the magnificent capital of the Umayyad Emirate and Caliphate of Cordoba, renowned for its street lighting, libraries, and grand mosque?",
        options: ["Granada", "Seville", "Cordoba", "Toledo"],
        correctAnswer: "Cordoba",
        explanation:
          "Under Abd al-Rahman III and his successors, Cordoba became the intellectual jewel of Europe, rivalling Baghdad and Constantinople.",
      },
      {
        question: "Which visionary Ottoman architect designed over 300 structures, including the masterpieces Suleymaniye Mosque and Selimiye Mosque?",
        options: ["Mimar Sinan", "Davud Ağa", "Sedefkar Mehmed Agha", "Hayreddin",],
        correctAnswer: "Mimar Sinan",
        explanation:
          "Mimar Sinan served as the chief Ottoman architect for nearly 50 years under sultans Suleiman the Magnificent, Selim II, and Murad III.",
      }
    ],
    advanced: [
      {
        question: "Which Muslim scientist is known as the 'Father of Algebra'?",
        options: ["Ibn Sina (Avicenna)", "Al-Khwarizmi", "Ibn al-Haytham", "Al-Biruni"],
        correctAnswer: "Al-Khwarizmi",
        explanation:
          "Muhammad ibn Musa al-Khwarizmi (c. 780–850) wrote 'Kitab al-Jabr wa-l-Muqabala', which laid down the foundations of algebra and introduced Hindu-Arabic numerals to the West.",
      },
      {
        question: "What was the primary political crisis that led to the formation of the Kharijite sect in early Islamic history?",
        options: [
          "Dispute over the inheritance of Prophet Muhammad (PBUH)",
          "Rejection of the arbitration agreement between Ali and Muawiyah at Siffin",
          "The assassination of Uthman ibn Affan",
          "The succession of Yazid ibn Muawiyah"
        ],
        correctAnswer: "Rejection of the arbitration agreement between Ali and Muawiyah at Siffin",
        explanation:
          "Kharijites broke away from Caliph Ali's camp after protesting that human arbitration at Siffin violated the Quranic dictum 'Judgment belongs to Allah alone'.",
      },
      {
        question: "Which foundational work of Usul al-Fiqh (Islamic jurisprudence) was authored by Imam al-Shafi'i?",
        options: ["Al-Muwatta", "Al-Umm", "Al-Risalah", "Kitab al-Kharaj"],
        correctAnswer: "Al-Risalah",
        explanation:
          "Imam al-Shafi'i's 'Al-Risalah' is widely recognized as the first systematic treatise establishing the classical methodology of Islamic legal theory and sources of law.",
      },
      {
        question: "Who was the brilliant astronomer and polymath who accurately calculated the Earth's circumference and discussed the possibility of Earth's rotation around the sun in the 11th century?",
        options: ["Al-Battani", "Al-Biruni", "Omar Khayyam", "Al-Zarqali"],
        correctAnswer: "Al-Biruni",
        explanation:
          "Abu Rayhan al-Biruni calculated the Earth's radius with astonishing accuracy using trigonometric methods and discussed geocentric versus heliocentric models.",
      },
      {
        question: "What was the official theological doctrine enforced by Caliph Al-Ma'mun during the period known as the 'Mihna'?",
        options: [
          "The eternity of the Quran",
          "The createdness of the Quran (Khalq al-Quran)",
          "Absolute predestination without human free will",
          "The political supremacy of the Ahl al-Bayt"
        ],
        correctAnswer: "The createdness of the Quran (Khalq al-Quran)",
        explanation:
          "Influenced by Mu'tazilite theology, Al-Ma'mun instituted the Mihna (inquisition) compelling scholars to state that the Quran was created by God rather than being eternal.",
      },
      {
        question: "Which Andalusian polymath wrote 'Fusus al-Hikam' (The Bezels of Wisdom) and 'Futuhat al-Makkiyya', leaving an indelible mark on Islamic mysticism (Tasawwuf)?",
        options: ["Al-Ghazali", "Ibn Arabi", "Suhrawardi", "Ibn al-Farid"],
        correctAnswer: "Ibn Arabi",
        explanation:
          "Sheikh al-Akbar Ibn Arabi was a towering Sufi metaphysician whose comprehensive ontological doctrines shaped centuries of Islamic philosophical thought.",
      },
      {
        question: "In Ismaili Shia history, what was the ideological schism that occurred after the death of Caliph Al-Mustansir bi-llah in 1094 CE?",
        options: [
          "The split between Nizari and Musta'li branches",
          "The emergence of the Druze movement",
          "The separation of Qarmatians from mainstream Fatimids",
          "The acceptance of Abbasid suzerainty"
        ],
        correctAnswer: "The split between Nizari and Musta'li branches",
        explanation:
          "The succession dispute between Al-Mustansir's sons Nizar and Al-A'li led to a permanent schism creating the Nizari and Musta'li Ismaili communities.",
      },
      {
        question: "Which treaty or pact concluded between Muslims and the Christian population of Jerusalem under Caliph Umar established terms of security and religious freedom?",
        options: ["Pact of Najran", "Umariyya Covenant (Covenant of Umar)", "Treaty of Hudaybiyyah", "Constitution of Madinah"],
        correctAnswer: "Umariyya Covenant (Covenant of Umar)",
        explanation:
          "The Umariyya Covenant granted safety to the lives, property, and churches of Jerusalem's inhabitants in exchange for Jizyah upon the city's peaceful surrender.",
      },
      {
        question: "Who authored 'Ihya Ulum al-Din' (The Revival of the Religious Sciences), successfully reconciling orthodox jurisprudence with mystical Sufism?",
        options: ["Abu Hamid al-Ghazali", "Fakhr al-Din al-Razi", "Ibn Hazm", "Al-Juwayni"],
        correctAnswer: "Abu Hamid al-Ghazali",
        explanation:
          "Imam al-Ghazali's masterpiece, Ihya Ulum al-Din, revitalized spiritual practices within Islamic scholarship and critiqued extreme rationalist philosophies.",
      },
      {
        question: "Which prominent Mu'tazilite theologian and philosopher wrote 'Kitab al-Mughni' and served as the chief Qadi of Rayy?",
        options: ["Wasil ibn Ata", "Abu al-Hasan al-Ash'ari", "Abd al-Jabbar ibn Ahmad", "Al-Nazzam"],
        correctAnswer: "Abd al-Jabbar ibn Ahmad",
        explanation:
          "Qadi Abd al-Jabbar was the foremost systematic theologian of the late Mu'tazilite school, preserving vast historical insights into their doctrines.",
      },
      {
        question: "What major institutional reform was introduced by the Seljuk Vizier Nizam al-Mulk to train administrators and scholars in Sunni theology?",
        options: ["Establishment of the Bayt al-Hikmah", "Creation of the Nizamiya Madrasahs", "Reorganization of the Diwan system", "Foundation of the Dar al-Ilm"],
        correctAnswer: "Creation of the Nizamiya Madrasahs",
        explanation:
          "Nizam al-Mulk founded the prestigious network of Nizamiya madrasahs across Iraq and Persia to counter sectarian polarization and train state officials.",
      },
      {
        question: "Which brilliant Muslim historian and sociologist authored the 'Muqaddimah', introducing groundbreaking concepts in historiography, economics, and sociology?",
        options: ["Al-Tabari", "Ibn Khaldun", "Al-Masudi", "Ibn al-Athir"],
        correctAnswer: "Ibn Khaldun",
        explanation:
          "Ibn Khaldun's 14th-century Muqaddimah analyzed the rise and fall of civilizations through 'Asabiyyah (social cohesion) centuries before modern social sciences.",
      },
      {
        question: "What was the primary doctrinal point of contention between the Ash'arite school of theology and the Hanbali/Athari school?",
        options: [
          "The validity of analogical deduction (Qiyas)",
          "The interpretation of metaphorical divine attributes (Sifat)",
          "The political legitimacy of the Caliphate",
          "The necessity of paying Zakat to unjust rulers"
        ],
        correctAnswer: "The interpretation of metaphorical divine attributes (Sifat)",
        explanation:
          "While Atharis affirmed divine attributes without assigning modality (Bila Kayfa), Ash'arites utilized metaphorical interpretation (Ta'wil) for certain anthropomorphic expressions.",
      },
      {
        question: "Which Muslim physician and philosopher discovered pulmonary circulation centuries before William Harvey?",
        options: ["Ibn Sina", "Al-Razi", "Ibn al-Nafis", "Ibn Zuhr"],
        correctAnswer: "Ibn al-Nafis",
        explanation:
          "In his commentary on Ibn Sina's anatomy, 13th-century polymath Ibn al-Nafis accurately described the pulmonary transit of blood through the lungs.",
      },
      {
        question: "Which treaty signed in 1479 CE between the Ottoman Empire and the Republic of Venice ended a long war and granted Ottomans commercial privileges in the Adriatic?",
        options: ["Treaty of Constantinople", "Treaty of Adrianople", "Treaty of Karlowitz", "Treaty of Passarowitz"],
        correctAnswer: "Treaty of Constantinople",
        explanation:
          "The 1479 treaty regularized Venetian-Ottoman commercial relations and acknowledged Ottoman territorial gains in the Balkans and Aegean.",
      },
      {
        question: "Who was the founder of the Zahiri school of jurisprudence, known for his strict adherence to literal textual meanings (Zahir) and rejection of Qiyas?",
        options: ["Dawud al-Zahiri", "Ibn Hazm", "Al-Tabari", "Al-Dhahabi"],
        correctAnswer: "Dawud al-Zahiri",
        explanation:
          "Dawud al-Zahiri established the Zahiri madhhab, which was later refined and expanded by the brilliant Andalusian polymath Ibn Hazm.",
      },
      {
        question: "Which prominent astronomer at the Maragheh Observatory developed the mathematical model known as the 'Tusi Couple', later utilized by Copernicus?",
        options: ["Al-Battani", "Nasir al-Din al-Tusi", "Ibn al-Shatir", "Ghiyath al-Din al-Kashi"],
        correctAnswer: "Nasir al-Din al-Tusi",
        explanation:
          "Nasir al-Din al-Tusi formulated the Tusi Couple—a geometric device where a small circle rolls inside a larger circle—solving orbital anomalies.",
      },
      {
        question: "What was the significance of the Battle of Tours (Poitiers) in 732 CE in Islamic historiography and European history?",
        options: [
          "It permanently expelled Muslims from Spain",
          "It marked the northernmost limit of Umayyad expansion into Western Europe",
          "It established the Abbasid capital in France",
          "It destroyed the Frankish kingdom completely"
        ],
        correctAnswer: "It marked the northernmost limit of Umayyad expansion into Western Europe",
        explanation:
          "Abdul Rahman al-Ghafiqi's forces clashed with Charles Martel's Frankish army near Tours, halting Islamic military expansion into Frankish territories.",
      },
      {
        question: "Which prominent Hadith master (Hafiz) authored 'Fath al-Bari', the most authoritative commentary on Sahih al-Bukhari?",
        options: ["Imam an-Nawawi", "Ibn Hajar al-Asqalani", "Jalal al-Din al-Suyuti", "Ibn Kathir"],
        correctAnswer: "Ibn Hajar al-Asqalani",
        explanation:
          "Ibn Hajar al-Asqalani spent decades compiling 'Fath al-Bari', an unmatched encyclopedic commentary unpacking the legal and historical contexts of Sahih al-Bukhari.",
      },
      {
        question: "What was the primary cause of the civil war between Al-Amin and Al-Ma'mun following the death of Harun al-Rashid?",
        options: [
          "Dispute over succession terms set by their father Harun al-Rashid",
          "Religious disagreements regarding the creation of the Quran",
          "Invasion by the Byzantine Empire",
          "Rebellion in the Khorasan province"
        ],
        correctAnswer: "Dispute over succession terms set by their father Harun al-Rashid",
        explanation:
          "Harun al-Rashid had divided the empire between his sons Al-Amin and Al-Ma'mun, leading to inevitable political friction and the Fourth Fitna.",
      },
      {
        question: "Which influential 14th-century scholar from Damascus critiqued prevalent cultural innovations and theological deviations, deeply influencing later reformist movements?",
        options: ["Ibn Taymiyyah", "Ibn Qayyim al-Jawziyya", "Al-Dhahabi", "Ibn Kathir"],
        correctAnswer: "Ibn Taymiyyah",
        explanation:
          "Taqi al-Din Ibn Taymiyyah was a prolific jurist and reformer who vigorously defended traditional Sunni creed against philosophical and Mongol incursions.",
      },
      {
        question: "Which monumental geographical and cartographic work was produced by Al-Idrisi for King Roger II of Sicily in 1154 CE?",
        options: ["Kitab al-Masalik wal-Mamalik", "Tabula Rogeriana (Nuzhat al-mushtaq)", "Kitab al-Buldan", "Rihlat Ibn Battuta"],
        correctAnswer: "Tabula Rogeriana (Nuzhat al-mushtaq)",
        explanation:
          "Al-Idrisi created the Tabula Rogeriana, one of the most advanced and accurate medieval world maps accompanied by detailed geographical descriptions.",
      },
      {
        question: "What was the primary legal mechanism used in Islamic endowments to protect properties from division among heirs and ensure perpetual charity?",
        options: ["Waqf (Habus)", "Mahr", "Hibah", "Wasiyyah"],
        correctAnswer: "Waqf (Habus)",
        explanation:
          "A Waqf is an irrevocable endowment of property or assets dedicated for religious, educational, or charitable purposes in perpetuity.",
      },
      {
        question: "Which prominent Hanafi jurist and philosopher authored 'Kashf al-Asrar' and contributed profoundly to Islamic legal theory (Usul al-Fiqh)?",
        options: ["Al-Sarakhsi", "Al-Pazdawi", "Ala al-Din al-Kasani", "Ibn Abidin"],
        correctAnswer: "Al-Pazdawi",
        explanation:
          "Ali ibn Muhammad al-Pazdawi wrote authoritative works on Hanafi jurisprudence and legal hermeneutics.",
      },
      {
        question: "Which Zaydi Shia state established in Yemen lasted for nearly a millennium from the 9th to the mid-20th century?",
        options: ["Rasulid Dynasty", "Imamate of Yemen", "Sulayhid Dynasty", "Tahirid Sultanate"],
        correctAnswer: "Imamate of Yemen",
        explanation:
          "Founded by Yahya al-Hadi ila al-Haqq in 897 CE, the Zaydi Imamate endured as a political and religious institution in the highlands of Yemen.",
      },
      {
        question: "Who was the renowned founder of the Maturidi school of theology, which developed alongside Ash'arism within Sunni Islam?",
        options: ["Abu Mansur al-Maturidi", "Abu al-Hasan al-Ash'ari", "Al-Tahawi", "Al-Baqillani"],
        correctAnswer: "Abu Mansur al-Maturidi",
        explanation:
          "Abu Mansur al-Maturidi of Samarkand formulated a robust theological system synthesizing rational proofs with traditional Hanafi jurisprudence.",
      },
      {
        question: "Which famous 10th-century encyclopaedic project was compiled by the Brethren of Purity (Ikhwan al-Safa), blending philosophy, science, and esoteric theology?",
        options: ["Rasail Ikhwan al-Safa", "Kitab al-Shifa", "Fihrist of Ibn al-Nadim", "Maqamat of Al-Hariri"],
        correctAnswer: "Rasail Ikhwan al-Safa",
        explanation:
          "The Epistles of the Brethren of Purity were 52 comprehensive philosophical and scientific treatises influential across medieval intellectual circles.",
      },
      {
        question: "Which battle in 1514 CE saw Sultan Selim I of the Ottoman Empire defeat Shah Ismail I of the Safavid Empire, securing eastern Anatolia?",
        options: ["Battle of Chaldiran", "Battle of Mohacs", "Battle of Marj Dabiq", "Battle of Kosovo"],
        correctAnswer: "Battle of Chaldiran",
        explanation:
          "The Battle of Chaldiran was a decisive Ottoman victory utilizing firearms and artillery against Safavid cavalry forces.",
      },
      {
        question: "Who authored 'Al-Milal wa al-Nihal' (The Book of Sects and Creeds), a monumental comparative study of world religions, philosophies, and sects?",
        options: ["Al-Shahrastani", "Al-Baghdadi", "Ibn Hazm", "Al-Maqrizi"],
        correctAnswer: "Al-Shahrastani",
        explanation:
          "Taj al-Din al-Shahrastani provided objective analyses of diverse theological schools, philosophical systems, and religious traditions in medieval Islam.",
      },
      {
        question: "What was the primary function of the 'Hisbah' institution in classical Islamic governance?",
        options: [
          "Supervising military recruitment",
          "Regulating public morality, market ethics, and preventing fraud in commerce",
          "Collecting Zakat and distributing state funds",
          "Conducting diplomatic embassies abroad"
        ],
        correctAnswer: "Regulating public morality, market ethics, and preventing fraud in commerce",
        explanation:
          "The Muhtasib (market inspector) appointed through the Hisbah ensured fair trade practices, weights and measures accuracy, and public order in bazaars.",
      },
      {
        question: "Which 13th-century polymath and astronomer corrected planetary models and introduced non-Ptolemaic mechanisms at the Damascus observatory?",
        options: ["Ibn al-Shatir", "Al-Tusi", "Al-Bitruji", "Qadi Zada al-Rumi"],
        correctAnswer: "Ibn al-Shatir",
        explanation:
          "Ala al-Din ibn al-Shatir developed lunar and solar models mathematically identical to those later used by Copernicus.",
      },
      {
        question: "Which ruling dynasty in Central Asia and Iran promoted Persian literature, patronized poets like Ferdowsi, and preceded the Seljuks?",
        options: ["Samanid Empire", "Buyid Dynasty", "Ghaznavid Empire", "Khwarazmian Empire"],
        correctAnswer: "Samanid Empire",
        explanation:
          "The Samanids revived Persian culture and scholarship in Transoxiana and Khorasan, laying foundations for the subsequent Turko-Persian golden age.",
      },
      {
        question: "Which prominent Shafi'i jurist and statesman authored 'As-Siyasah al-Shariyyah' and served as Grand Qadi of Damascus?",
        options: ["Izz al-Din ibn 'Abd al-Salam", "Al-Mawardi", "Al-Juwayni", "Taqi al-Din al-Subki"],
        correctAnswer: "Izz al-Din ibn 'Abd al-Salam",
        explanation:
          "Known as the 'Sultan of Scholars', Izz al-Din ibn 'Abd al-Salam fearlessly defended Islamic principles and challenged Mamluk rulers on governance ethics.",
      },
      {
        question: "What was the primary objective of the council (Shura) established by Umar ibn al-Khattab on his deathbed?",
        options: [
          "To draft a new civil code for conquered provinces",
          "To select the next Caliph from among six nominated senior companions",
          "To reorganize the military budget",
          "To oversee the expansion of the Prophet's Mosque"
        ],
        correctAnswer: "To select the next Caliph from among six nominated senior companions",
        explanation:
          "Umar appointed a six-member Shura council comprising Uthman, Ali, Talhah, Zubayr, Sa'd ibn Abi Waqqas, and Abd al-Rahman ibn Awf to choose his successor.",
      },
      {
        question: "Which Fatimid Caliph ordered the destruction of the Church of the Holy Sepulchre in Jerusalem in 1009 CE, an event that later reverberated in Crusade rhetoric?",
        options: ["Al-Mu'izz", "Al-Hakim bi-Amr Allah", "Al-Mustansir", "Al-Zahir"],
        correctAnswer: "Al-Hakim bi-Amr Allah",
        explanation:
          "Al-Hakim bi-Amr Allah ordered the demolition of the church, though his successor later permitted its reconstruction.",
      },
      {
        question: "Which notable Andalusian mystic and philosopher wrote 'Hayy ibn Yaqzhan', an allegorical philosophical tale of human intellect discovering truth independently?",
        options: ["Ibn Tufayl", "Ibn Rushd", "Avempace (Ibn Bajjah)", "Maslama al-Majriti"],
        correctAnswer: "Ibn Tufayl",
        explanation:
          "Ibn Tufayl's philosophical romance 'Hayy ibn Yaqzhan' explored natural theology and human reasoning without societal conditioning.",
      },
      {
        question: "Which prominent Hadith scholar and historian authored 'Al-Bidayah wa al-Nihayah' (The Beginning and the End), an extensive universal history?",
        options: ["Al-Tabari", "Ibn Kathir", "Ibn al-Athir", "Al-Dhahabi"],
        correctAnswer: "Ibn Kathir",
        explanation:
          "Imam Ibn Kathir, famed for his Quranic exegesis (Tafsir al-Quran al-Azim), also compiled a massive universal history chronicling prophetic stories and Islamic history.",
      },
      {
        question: "What was the significance of the 1250 CE revolution in Egypt that brought the Mamluks to political power?",
        options: [
          "It established the Ayyubid Dynasty",
          "It transitioned Egypt from Ayyubid dynastic rule to a military oligarchy of freed slave soldiers",
          "It restored the Fatimid Caliphate",
          "It initiated direct Abbasid rule over Cairo"
        ],
        correctAnswer: "It transitioned Egypt from Ayyubid dynastic rule to a military oligarchy of freed slave soldiers",
        explanation:
          "Following the death of Ayyubid Sultan Turan-Shah, Mamluk commanders seized control, establishing the Mamluk Sultanate that ruled Egypt and Syria for centuries.",
      },
      {
        question: "Which major collection of Sunni Hadith is categorized specifically according to legal rulings (Ahkam) rather than thematic or narrator books?",
        options: ["Sahih al-Bukhari", "Sunan al-Daraqutni", "Musnad Ahmad", "Al-Mu'jam al-Kabir"],
        correctAnswer: "Sunan al-Daraqutni",
        explanation:
          "Sunan works like those of Daraqutni and Bayhaqi focus specifically on traditions utilized for legal deductions and jurisprudential arguments.",
      },
      {
        question: "Which great 12th-century Kurdish statesman and military leader unified Muslim lands across Syria, Egypt, and Mesopotamia to confront the Crusader states?",
        options: ["Nur al-Din Zengi", "Salah ad-Din (Saladin)", "Imad al-Din Zengi", "Qutb-ud-din Mawdud"],
        correctAnswer: "Salah ad-Din (Saladin)",
        explanation:
          "Saladin built upon the foundations laid by Nur al-Din Zengi, unifying the Muslim front and successfully liberating Jerusalem in 1187 CE.",
      }
    ]
  }
}

export default islamicHistoryCategory;
