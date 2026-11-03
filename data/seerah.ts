import type { QuizCategory } from "@/types/quiz";

const seerahCategory: QuizCategory = {
  id: "seerah",
  title: "Seerah",
  description: "Prophet's Biography",
  icon: "BookOpen",
  levels: {
    easy: [
      {
        question: "In which year was Prophet Muhammad (peace be upon him) born?",
        options: ["570 CE", "571 CE", "610 CE", "622 CE"],
        correctAnswer: "570 CE",
        explanation: "Prophet Muhammad (peace be upon him) was born in the Year of the Elephant, corresponding to approximately 570 CE in Makkah."
      },
      {
        question: "What was the name of Prophet Muhammad's (peace be upon him) mother?",
        options: ["Halimah", "Khadijah", "Aminah", "Fatimah"],
        correctAnswer: "Aminah",
        explanation: "Aminah bint Wahb was the mother of Prophet Muhammad (peace be upon him)."
      },
      {
        question: "Who was the first wife of Prophet Muhammad (peace be upon him)?",
        options: ["Aishah bint Abi Bakr", "Khadijah bint Khuwaylid", "Hafsah bint Umar", "Zaynab bint Jahsh"],
        correctAnswer: "Khadijah bint Khuwaylid",
        explanation: "Khadijah bint Khuwaylid (RA) was the first wife of the Prophet (PBUH) and the first person to embrace Islam."
      },
      {
        question: "How old was Prophet Muhammad (peace be upon him) when he received his first revelation?",
        options: ["25 years old", "30 years old", "40 years old", "50 years old"],
        correctAnswer: "40 years old",
        explanation: "The Prophet (PBUH) was 40 years old when Jibreel (AS) brought the first revelation in Cave Hira."
      },
      {
        question: "What was the name of the mountain where Prophet Muhammad (peace be upon him) received his first revelation?",
        options: ["Jabal al-Noor (Cave Hira)", "Jabal Thawr", "Jabal Uhud", "Jabal Arafat"],
        correctAnswer: "Jabal al-Noor (Cave Hira)",
        explanation: "The first revelation descended in Cave Hira located on Jabal al-Noor (the Mountain of Light)."
      },
      {
        question: "Who was the first adult male to accept Islam?",
        options: ["Umar ibn al-Khattab", "Abu Bakr al-Siddiq", "Ali ibn Abi Talib", "Uthman ibn Affan"],
        correctAnswer: "Abu Bakr al-Siddiq",
        explanation: "Abu Bakr al-Siddiq (RA) was the first adult free male to accept the message of Islam."
      },
      {
        question: "What is the name of the historic migration of Muslims from Makkah to Madinah?",
        options: ["Isra", "Hijrah", "Miraj", "Umrah"],
        correctAnswer: "Hijrah",
        explanation: "The migration from Makkah to Madinah is known as the Hijrah, which marks the beginning of the Islamic Hijri calendar."
      },
      {
        question: "Which battle was the first major military encounter between the Muslims and the Quraish?",
        options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
        correctAnswer: "Battle of Badr",
        explanation: "The Battle of Badr took place in 2 AH and was the first major battle between the Muslims and Quraish."
      },
      {
        question: "In which Islamic year did Prophet Muhammad (peace be upon him) perform his Farewell Pilgrimage (Hajjat al-Wada)?",
        options: ["8 AH", "9 AH", "10 AH", "11 AH"],
        correctAnswer: "10 AH",
        explanation: "The Prophet (PBUH) performed his Farewell Hajj in the 10th year after Hijrah."
      },
      {
        question: "What was the name of Prophet Muhammad's (peace be upon him) foster mother and wet nurse?",
        options: ["Halimah al-Sa'diyyah", "Barakah (Umm Ayman)", "Thuwaybah", "Fatima bint Asad"],
        correctAnswer: "Halimah al-Sa'diyyah",
        explanation: "Halimah bint Abi Dhu'ayb al-Sa'diyyah raised the Prophet (PBUH) during his early childhood in the desert."
      },
      {
        question: "Which companion served as the chief scribe who collected the Quran into a single volume under Abu Bakr (RA)?",
        options: ["Zayd ibn Thabit", "Mu'awiyah ibn Abi Sufyan", "Ubayy ibn Ka'b", "Abdullah ibn Mas'ud"],
        correctAnswer: "Zayd ibn Thabit",
        explanation: "Zayd ibn Thabit (RA) was appointed by Abu Bakr (RA) to compile the Quran into a single official manuscript."
      },
      {
        question: "How many years did the Prophet (peace be upon him) spend calling people to Islam in Makkah before the Hijrah?",
        options: ["10 years", "13 years", "15 years", "23 years"],
        correctAnswer: "13 years",
        explanation: "The Makkan period of Dawah lasted approximately 13 years before the migration to Madinah."
      },
      {
        question: "What was the name of the Prophet's (peace be upon him) famous she-camel on which he rode during the Hijrah?",
        options: ["Al-Qaswa", "Al-Adba", "Al-Jad'a", "Al-Shahba"],
        correctAnswer: "Al-Qaswa",
        explanation: "Al-Qaswa was the favorite she-camel of the Prophet (PBUH) used during the Hijrah and the Conquest of Makkah."
      },
      {
        question: "Who is recognized in Islamic history as the first martyr (Shaheed) in Islam?",
        options: ["Sumayyah bint Khabbat", "Yasir ibn Amir", "Hamzah ibn Abd al-Muttalib", "Mus'ab ibn Umayr"],
        correctAnswer: "Sumayyah bint Khabbat",
        explanation: "Sumayyah bint Khabbat (RA) was tortured and killed by Abu Jahl, becoming the first martyr in Islam."
      },
      {
        question: "Which Surah's first five verses were revealed first to Prophet Muhammad (peace be upon him)?",
        options: ["Surah Al-Fatiha", "Surah Al-Alaq", "Surah Al-Muddaththir", "Surah Al-Ikhlas"],
        correctAnswer: "Surah Al-Alaq",
        explanation: "The first five verses of Surah Al-Alaq ('Iqra bi-ismi rabbika...') were revealed in Cave Hira."
      },
      {
        question: "What was the age difference between Prophet Muhammad (PBUH) and Khadijah (RA) at the time of their marriage?",
        options: ["10 years", "15 years", "20 years", "5 years"],
        correctAnswer: "15 years",
        explanation: "Prophet Muhammad (PBUH) was 25 years old and Khadijah (RA) was 40 years old when they married."
      },
      {
        question: "How many biological children did Prophet Muhammad (peace be upon him) have in total?",
        options: ["4 children", "6 children", "7 children", "8 children"],
        correctAnswer: "7 children",
        explanation: "The Prophet (PBUH) had 7 children: three sons (Qasim, Abdullah, Ibrahim) and four daughters (Zaynab, Ruqayyah, Umm Kulthum, Fatimah)."
      },
      {
        question: "What was the name of Prophet Muhammad's (peace be upon him) father who passed away before his birth?",
        options: ["Abdullah ibn Abd al-Muttalib", "Abu Talib", "Hamzah", "Al-Abbas"],
        correctAnswer: "Abdullah ibn Abd al-Muttalib",
        explanation: "Abdullah ibn Abd al-Muttalib died in Yathrib before Prophet Muhammad (PBUH) was born."
      },
      {
        question: "Which companion was given the honorific title 'Sayf Allah al-Maslul' (The Drawn Sword of Allah)?",
        options: ["Ali ibn Abi Talib", "Khalid ibn al-Walid", "Abu Ubaidah ibn al-Jarrah", "Hamzah ibn Abd al-Muttalib"],
        correctAnswer: "Khalid ibn al-Walid",
        explanation: "The Prophet (PBUH) gave Khalid ibn al-Walid (RA) the title 'The Drawn Sword of Allah' after the Battle of Mu'tah."
      },
      {
        question: "What was the name of the Prophet's (peace be upon him) grandfather who took care of him after his mother's death?",
        options: ["Abd al-Muttalib", "Hashim", "Kilab", "Qusayy"],
        correctAnswer: "Abd al-Muttalib",
        explanation: "Abd al-Muttalib cared for his grandson Muhammad (PBUH) until his death when the Prophet was eight years old."
      },
      {
        question: "What was the first mosque built in Islamic history?",
        options: ["Al-Masjid an-Nabawi", "Masjid Quba", "Al-Masjid al-Haram", "Masjid al-Qiblatayn"],
        correctAnswer: "Masjid Quba",
        explanation: "Masjid Quba, built on the outskirts of Madinah during the Hijrah, was the first mosque established by the Prophet (PBUH)."
      },
      {
        question: "Who was appointed by the Prophet (PBUH) as the first official caller to prayer (Mu'adhdhin) in Islam?",
        options: ["Bilal ibn Rabah", "Abdullah ibn Umm Maktum", "Abu Mahdhurah", "Salman al-Farsi"],
        correctAnswer: "Bilal ibn Rabah",
        explanation: "Bilal ibn Rabah (RA), the liberated African companion, was appointed as the primary Mu'adhdhin of the Prophet (PBUH)."
      },
      {
        question: "Which companion was given the title 'Dhu al-Nurayn' (Possessor of Two Lights)?",
        options: ["Abu Bakr al-Siddiq", "Uthman ibn Affan", "Ali ibn Abi Talib", "Umar ibn al-Khattab"],
        correctAnswer: "Uthman ibn Affan",
        explanation: "Uthman ibn Affan (RA) was called Dhu al-Nurayn because he married two of the Prophet's daughters (Ruqayyah and later Umm Kulthum)."
      },
      {
        question: "Which uncle of the Prophet (PBUH) initially opposed Islam but embraced it prior to the Conquest of Makkah?",
        options: ["Abu Lahab", "Al-Abbas ibn Abd al-Muttalib", "Abu Talib", "Hamzah"],
        correctAnswer: "Al-Abbas ibn Abd al-Muttalib",
        explanation: "Al-Abbas (RA), the paternal uncle of the Prophet (PBUH), accepted Islam and migrated during the period of the Treaty of Hudaybiyyah."
      },
      {
        question: "In which year after the Hijrah did the Conquest of Makkah (Fath Makkah) take place?",
        options: ["6 AH", "8 AH", "9 AH", "10 AH"],
        correctAnswer: "8 AH",
        explanation: "The bloodless Conquest of Makkah occurred in Ramadan of 8 AH (630 CE)."
      },
      {
        question: "Who was the first ambassador of Islam sent by the Prophet (PBUH) to teach the Quran in Madinah before the Hijrah?",
        options: ["Mus'ab ibn Umayr", "Sa'd ibn Mu'adh", "As'ad ibn Zurarah", "Mu'adh ibn Jabal"],
        correctAnswer: "Mus'ab ibn Umayr",
        explanation: "Mus'ab ibn Umayr (RA) was sent to Yathrib (Madinah) following the First Pledge of Aqabah as the first Islamic ambassador."
      },
      {
        question: "Which companion was the first child to embrace Islam?",
        options: ["Zayd ibn Harithah", "Ali ibn Abi Talib", "Abdullah ibn Umar", "Hasan ibn Ali"],
        correctAnswer: "Ali ibn Abi Talib",
        explanation: "Ali ibn Abi Talib (RA), who lived in the household of the Prophet (PBUH), accepted Islam at around 10 years of age."
      },
      {
        question: "What was the name of the Jewish tribe in Madinah that violated their treaty during the Battle of the Trench?",
        options: ["Banu Qaynuqa", "Banu al-Nadir", "Banu Quraydhah", "Banu Mustaliq"],
        correctAnswer: "Banu Quraydhah",
        explanation: "Banu Quraydhah betrayed their covenant with the Prophet (PBUH) and allied with the confederate forces during the Siege of Madinah."
      },
      {
        question: "How old was Prophet Muhammad (peace be upon him) when he passed away in Madinah?",
        options: ["60 years old", "63 years old", "65 years old", "70 years old"],
        correctAnswer: "63 years old",
        explanation: "Prophet Muhammad (PBUH) passed away at the age of 63 in 11 AH (632 CE)."
      },
      {
        question: "What title was given to Prophet Muhammad (PBUH) by the people of Makkah before his prophethood due to his honesty?",
        options: ["Al-Siddiq and Al-Faruq", "Al-Amin and Al-Sadiq", "Al-Sa'id and Al-Tahir", "Al-Hakim and Al-Adl"],
        correctAnswer: "Al-Amin and Al-Sadiq",
        explanation: "Even before revelation, Makkans knew him as Al-Amin (The Trustworthy) and Al-Sadiq (The Truthful)."
      },
      {
        question: "Where was the Prophet (peace be upon him) laid to rest after his death?",
        options: ["Al-Baqi Cemetery", "In the room of Aishah (RA) inside Al-Masjid an-Nabawi", "Masjid Quba", "Jabal Uhud"],
        correctAnswer: "In the room of Aishah (RA) inside Al-Masjid an-Nabawi",
        explanation: "Prophets are buried where they die; hence the Prophet (PBUH) was buried in Aishah's chamber."
      },
      {
        question: "What was the title of the Christian ruler of Abyssinia (Ethiopia) who sheltered the early Muslim refugees?",
        options: ["Heraclius", "The Negus (Al-Najashi)", "Muqawqis", "Chosroes"],
        correctAnswer: "The Negus (Al-Najashi)",
        explanation: "Al-Najashi (King Ashama) granted safety and freedom to early Muslim migrants in Abyssinia."
      },
      {
        question: "Which companion proposed digging the trench around Madinah during the Battle of Ahzab?",
        options: ["Abu Ubaidah ibn al-Jarrah", "Salman al-Farsi", "Ammar ibn Yasir", "Abu Hurairah"],
        correctAnswer: "Salman al-Farsi",
        explanation: "Salman al-Farsi (RA) suggested the Persian military tactic of digging a deep trench to defend Madinah."
      },
      {
        question: "What was the name of the treaty signed between the Muslims and Quraish in 6 AH?",
        options: ["Treaty of Yathrib", "Treaty of Hudaybiyyah", "Pledge of Ridwan", "Pledge of Aqabah"],
        correctAnswer: "Treaty of Hudaybiyyah",
        explanation: "The Treaty of Hudaybiyyah established a 10-year truce and opened doors for peaceful propagation of Islam."
      },
      {
        question: "Which uncle of the Prophet (PBUH) was martyred at the Battle of Uhud and named 'Sayyid al-Shuhada' (Master of Martyrs)?",
        options: ["Abu Talib", "Hamzah ibn Abd al-Muttalib", "Al-Abbas", "Abu Lahab"],
        correctAnswer: "Hamzah ibn Abd al-Muttalib",
        explanation: "Hamzah (RA) fought courageously at Uhud and was posthumously designated by the Prophet as the Master of Martyrs."
      },
      {
        question: "What was the name of the Prophet's (PBUH) son who died in infancy and whose mother was Mariyah al-Qibtiyyah?",
        options: ["Qasim", "Abdullah", "Ibrahim", "Tahir"],
        correctAnswer: "Ibrahim",
        explanation: "Ibrahim was born to Mariyah al-Qibtiyyah (RA) in Madinah and died in infancy, triggering a solar eclipse on his death."
      },
      {
        question: "What was the primary topic of the early Makkan Surahs of the Quran?",
        options: ["Detailed legal codes and inheritance laws", "Tawheed (Oneness of God), Resurrection, and moral transformation", "Rules of military engagement", "International treaties"],
        correctAnswer: "Tawheed (Oneness of God), Resurrection, and moral transformation",
        explanation: "Makkan revelations focused on establishing pure monotheism, belief in the Day of Judgment, and ethical uprightness."
      },
      {
        question: "Which companion accompanied the Prophet (PBUH) inside Cave Thawr during the Hijrah migration?",
        options: ["Umar ibn al-Khattab", "Abu Bakr al-Siddiq", "Ali ibn Abi Talib", "Uthman ibn Affan"],
        correctAnswer: "Abu Bakr al-Siddiq",
        explanation: "Abu Bakr (RA) was the sole companion during the hideout in Cave Thawr, as mentioned in Quran 9:40."
      },
      {
        question: "Which daughter of the Prophet (PBUH) was married to Ali ibn Abi Talib (RA)?",
        options: ["Ruqayyah", "Umm Kulthum", "Zaynab", "Fatimah"],
        correctAnswer: "Fatimah",
        explanation: "Fatimah al-Zahra (RA) married Ali ibn Abi Talib (RA) and was the mother of Hasan and Husayn."
      },
      {
        question: "What was the original name of the city of Madinah before the Prophet's (PBUH) arrival?",
        options: ["Ta'if", "Yathrib", "Fadak", "Khaybar"],
        correctAnswer: "Yathrib",
        explanation: "The city was known as Yathrib before being renamed Al-Madinah al-Munawwarah (The Illuminated City)."
      }
    ],
    intermediate: [
      {
        question: "What was the name of the pact of chivalry signed in Makkah before Islam to protect the oppressed, in which young Muhammad (PBUH) participated?",
        options: ["Hilf al-Fudul", "Pledge of Ridwan", "Hilf al-Ahlaf", "Charter of Madinah"],
        correctAnswer: "Hilf al-Fudul",
        explanation: "Hilf al-Fudul (League of the Virtuous) was an alliance formed by Makkan clans to uphold justice for any victim of injustice, which the Prophet praised even after Islam."
      },
      {
        question: "What tragic event caused the year 619 CE to be designated as 'Am al-Huzn' (The Year of Grief)?",
        options: [
          "The defeat at the Battle of Uhud",
          "The death of both his beloved wife Khadijah (RA) and his supportive uncle Abu Talib",
          "The expulsion of Muslims to Abyssinia",
          "The destruction of the Kaabah"
        ],
        correctAnswer: "The death of both his beloved wife Khadijah (RA) and his supportive uncle Abu Talib",
        explanation: "Within a short span, the Prophet (PBUH) lost his primary emotional support (Khadijah) and his primary social protector in Makkah (Abu Talib)."
      },
      {
        question: "During his journey to Ta'if to seek protection, how did Prophet Muhammad (PBUH) react when the angel of mountains offered to crush the city between two mountains?",
        options: [
          "He agreed immediately to punish them",
          "He refused and prayed that Allah bring forth from their descendants people who worship Him alone",
          "He asked for monetary compensation instead",
          "He cursed the leaders of Ta'if"
        ],
        correctAnswer: "He refused and prayed that Allah bring forth from their descendants people who worship Him alone",
        explanation: "Demonstrating supreme mercy, the Prophet (PBUH) prayed: 'I hope that Allah will bring forth from their loins those who worship Allah alone without associating partners with Him.'"
      },
      {
        question: "What miraculous event occurred during Isra and Mi'raj regarding the prescribed daily prayers?",
        options: [
          "Prayers were reduced from 50 daily prayers to 5 daily prayers after consultation with Prophet Musa (AS)",
          "Prayers were made optional for travelers",
          "Prayers were increased from 3 to 5",
          "Prayers were mandated only on Fridays"
        ],
        correctAnswer: "Prayers were reduced from 50 daily prayers to 5 daily prayers after consultation with Prophet Musa (AS)",
        explanation: "Allah initially prescribed 50 daily prayers, which were mercifully reduced to 5 while maintaining the reward of 50."
      },
      {
        question: "Who was the Christian monk who recognized the signs of prophethood in young Muhammad (PBUH) during a trade journey to Syria?",
        options: ["Waraqah ibn Nawfal", "Bahira", "Addas", "Suhayb al-Rumi"],
        correctAnswer: "Bahira",
        explanation: "Monk Bahira spotted the cloud shading young Muhammad (PBUH) and the seal of prophethood between his shoulders in Busra."
      },
      {
        question: "What major decision did Prophet Muhammad (PBUH) make during the rebuild of the Kaabah when Makkan clans disputed who would place the Black Stone (Hajar al-Aswad)?",
        options: [
          "He placed it himself without consulting anyone",
          "He placed the Stone on a cloak and had leaders of all clans lift it together",
          "He held a lottery system",
          "He postponed the rebuilding"
        ],
        correctAnswer: "He placed the Stone on a cloak and had leaders of all clans lift it together",
        explanation: "He demonstrated genius diplomacy by letting every clan leader hold an edge of the cloth, preventing tribal warfare."
      },
      {
        question: "What was the main purpose of the First Migration to Abyssinia (Habashah) in the 5th year of Prophethood?",
        options: [
          "To establish a new Islamic state",
          "To escape severe persecution in Makkah and find refuge under a just ruler",
          "To conquer Abyssinian trade routes",
          "To conduct trade for Quraish"
        ],
        correctAnswer: "To escape severe persecution in Makkah and find refuge under a just ruler",
        explanation: "The Prophet (PBUH) advised early Muslims to seek refuge in Abyssinia because its Christian King (Al-Najashi) did not tolerate oppression."
      },
      {
        question: "Which cousin of the Prophet (PBUH) delivered the famous speech defending Islam in front of King Negus of Abyssinia?",
        options: ["Ali ibn Abi Talib", "Ja'far ibn Abi Talib", "Abdullah ibn Abbas", "Fadl ibn Abbas"],
        correctAnswer: "Ja'far ibn Abi Talib",
        explanation: "Ja'far ibn Abi Talib (RA) eloquently recited Surah Maryam and articulated the ethical transformation brought by Islam."
      },
      {
        question: "What was the social and economic boycott imposed by Quraish on Banu Hashim and Banu al-Muttalib, and where were they confined?",
        options: [
          "A 3-year siege confined in the valley of Shi'b Abi Talib",
          "A 1-year exile to Ta'if",
          "A 5-year trade ban inside the Kaabah",
          "A imprisonment in Dar al-Nadwah"
        ],
        correctAnswer: "A 3-year siege confined in the valley of Shi'b Abi Talib",
        explanation: "For nearly 3 years, Muslims and non-Muslim clansmen protecting the Prophet were starved in Shi'b Abi Talib until the boycott parchment was destroyed by ants."
      },
      {
        question: "What was 'Dar al-Arqam' and what role did it play in early Islamic history?",
        options: [
          "The council building of Quraish leaders",
          "The safe house of Al-Arqam ibn Abi al-Arqam where early Muslims secretly met, prayed, and learned the Quran",
          "The first hospital in Madinah",
          "The market of Makkah"
        ],
        correctAnswer: "The safe house of Al-Arqam ibn Abi al-Arqam where early Muslims secretly met, prayed, and learned the Quran",
        explanation: "Dar al-Arqam served as the secret operational base for teaching and spiritual nurturing during the early Makkan period."
      },
      {
        question: "What was the significance of the Second Pledge of Aqabah (Bay'at al-Aqabah al-Thaniyah)?",
        options: [
          "It established peace with Quraish",
          "73 men and 2 women from Madinah pledged to defend the Prophet (PBUH) as they would protect their own families, paving the way for Hijrah",
          "It marked the conquest of Makkah",
          "It was a trade agreement"
        ],
        correctAnswer: "73 men and 2 women from Madinah pledged to defend the Prophet (PBUH) as they would protect their own families, paving the way for Hijrah",
        explanation: "This crucial pledge provided the Prophet (PBUH) with military protection and a territorial homeland in Madinah."
      },
      {
        question: "What was the brotherhood pact (Al-Mu'akhah) instituted by the Prophet (PBUH) upon arriving in Madinah?",
        options: [
          "Pairing each Muhajir (emigrant) with an Ansar (helper) to share home, wealth, and brotherhood",
          "A alliance between Arab tribes and Roman empire",
          "A agreement between Quraish and Aus",
          "A peace treaty with Persian leaders"
        ],
        correctAnswer: "Pairing each Muhajir (emigrant) with an Ansar (helper) to share home, wealth, and brotherhood",
        explanation: "The Mu'akhah bound Emigrants and Helpers into a spiritual brotherhood that surpassed tribal blood ties."
      },
      {
        question: "What was the Constitution of Madinah (Wathiqat al-Madinah)?",
        options: [
          "A tax document for trade",
          "A groundbreaking constitutional charter establishing mutual defense, freedom of religion, and unity among Muslims, Jews, and pagan tribes of Madinah",
          "A personal will of the Prophet",
          "A military manual"
        ],
        correctAnswer: "A groundbreaking constitutional charter establishing mutual defense, freedom of religion, and unity among Muslims, Jews, and pagan tribes of Madinah",
        explanation: "It was one of the earliest written constitutions in human history, establishing a multi-faith pluralistic civic state."
      },
      {
        question: "Why did the direction of prayer (Qiblah) change from Jerusalem (Al-Quds) to Makkah (Al-Masjid al-Haram)?",
        options: [
          "Due to a political alliance",
          "In response to the Prophet's longing and divine command revealed in Surah Al-Baqarah (2:144) in 2 AH",
          "Because Jerusalem was destroyed",
          "By request of the Ansar"
        ],
        correctAnswer: "In response to the Prophet's longing and divine command revealed in Surah Al-Baqarah (2:144) in 2 AH",
        explanation: "The Qiblah was changed after 16-17 months in Madinah at Masjid al-Qiblatayn following divine revelation."
      },
      {
        question: "What immediate action caused the Battle of Badr in 2 AH?",
        options: [
          "An unprovoked invasion of Madinah by Quraish",
          "The Muslims attempting to intercept a wealthy Quraish trade caravan led by Abu Sufyan to reclaim stolen property",
          "A dispute over water wells",
          "The assassination of a companion"
        ],
        correctAnswer: "The Muslims attempting to intercept a wealthy Quraish trade caravan led by Abu Sufyan to reclaim stolen property",
        explanation: "Muslims set out to intercept Abu Sufyan's caravan to recover assets confiscated in Makkah, which led Quraish to march with 1,000 warriors."
      },
      {
        question: "What major strategic mistake led to the setback for Muslims in the Battle of Uhud (3 AH)?",
        options: [
          "Lack of weapons",
          "Archers on Mount Rumat abandoning their positions against the Prophet's strict orders to collect spoils of war",
          "Treachery by Abu Bakr",
          "Surrender of the Ansar"
        ],
        correctAnswer: "Archers on Mount Rumat abandoning their positions against the Prophet's strict orders to collect spoils of war",
        explanation: "Forty archers left their post on the hill of Jabal al-Rumat, allowing Khalid ibn al-Walid's cavalry to flank the Muslim army."
      },
      {
        question: "Who was the leader of the hypocrites (Munafiqun) in Madinah who withdrew 300 soldiers right before the Battle of Uhud?",
        options: ["Abdullah ibn Ubayy ibn Salul", "Ka'b ibn al-Ashraf", "Huyayy ibn Akhtab", "Abu Amir al-Rahib"],
        correctAnswer: "Abdullah ibn Ubayy ibn Salul",
        explanation: "Abdullah ibn Ubayy deserted the army with a third of the troops, seeking to undermine Muslim morale."
      },
      {
        question: "What happened during the Incident of Bi'r Ma'unan (4 AH)?",
        options: [
          "A successful peace treaty with Najd",
          "Seventy expert Quran reciters (Qurra) sent to teach Islam were treacherously ambushed and killed by local tribes",
          "A trade caravan was saved",
          "A fortress was conquered"
        ],
        correctAnswer: "Seventy expert Quran reciters (Qurra) sent to teach Islam were treacherously ambushed and killed by local tribes",
        explanation: "The Prophet (PBUH) was deeply grieved by this tragedy and supplicated Qunut al-Nazilah for a month."
      },
      {
        question: "What was the cause of the expulsion of the Jewish tribe Banu Qaynuqa from Madinah?",
        options: [
          "They refused to pay taxes",
          "A Jewish merchant publicly molested a Muslim woman in the market and breached the Madinah Charter",
          "They attacked the Prophet's house",
          "They allied with the Romans"
        ],
        correctAnswer: "A Jewish merchant publicly molested a Muslim woman in the market and breached the Madinah Charter",
        explanation: "Banu Qaynuqa humiliated a Muslim woman and killed a Muslim who defended her, breaking their security covenant."
      },
      {
        question: "Why was the Jewish tribe Banu al-Nadir expelled from Madinah in 4 AH?",
        options: [
          "They plotted to assassinate the Prophet (PBUH) by dropping a millstone on him from a rooftop",
          "They refused to farm their lands",
          "They left Madinah during Ramadan",
          "They hid weapons for Quraish"
        ],
        correctAnswer: "They plotted to assassinate the Prophet (PBUH) by dropping a millstone on him from a rooftop",
        explanation: "Angel Jibreel informed the Prophet (PBUH) of their treasonous assassination plot while he visited their fortress."
      },
      {
        question: "What was the Pledge of Ridwan (Bay'at al-Ridwan) taken under the tree at Hudaybiyyah?",
        options: [
          "A pledge to fight to the death following rumors that Uthman ibn Affan (RA) had been assassinated by Quraish",
          "A pledge to migrate to Abyssinia",
          "A pledge to rebuild the Kaabah",
          "A pledge to appoint Abu Bakr as successor"
        ],
        correctAnswer: "A pledge to fight to the death following rumors that Uthman ibn Affan (RA) had been assassinated by Quraish",
        explanation: "Over 1,400 companions pledged unwavering allegiance under the tree, earning divine praise mentioned in Surah Al-Fath (48:18)."
      },
      {
        question: "What clause in the Treaty of Hudaybiyyah seemed disadvantageous to Muslims initially but proved to be a major victory?",
        options: [
          "Muslims had to pay annual tribute",
          "Any Quraish member escaping to Madinah without permission must be returned, while any Muslim returning to Makkah would not be sent back",
          "Muslims were banned from Hajj forever",
          "Madinah had to disarm its army"
        ],
        correctAnswer: "Any Quraish member escaping to Madinah without permission must be returned, while any Muslim returning to Makkah would not be sent back",
        explanation: "This clause led escaped Muslims (like Abu Basir) to establish an independent base that disrupted Quraish trade, forcing Quraish to repeal the clause."
      },
      {
        question: "Who was the companion sent by the Prophet (PBUH) with a letter to Heraclius, the Emperor of the Byzantine Empire?",
        options: ["Dihyah al-Kalbi", "Abdullah ibn Hudhafah", "Amr ibn al-As", "Hatib ibn Abi Balta'ah"],
        correctAnswer: "Dihyah al-Kalbi",
        explanation: "Dihyah ibn Khalifah al-Kalbi (RA) delivered the Prophet's letter inviting Heraclius to Islam."
      },
      {
        question: "Which companion was sent with a diplomatic letter to Chosroes (Khosrow II), Emperor of Persia, who tore the letter to pieces?",
        options: ["Abdullah ibn Hudhafah al-Sahmi", "Shuja ibn Wahb", "Al-Ala ibn al-Hadrami", "Salit ibn Amr"],
        correctAnswer: "Abdullah ibn Hudhafah al-Sahmi",
        explanation: "When Khosrow tore the letter, the Prophet (PBUH) supplicated that Allah tear Khosrow's kingdom into complete pieces."
      },
      {
        question: "What took place during the Battle of Khaybar (7 AH)?",
        options: [
          "Muslims conquered the fortified Jewish oases in northern Arabia",
          "Muslims fought against the Roman empire in Syria",
          "A naval battle in the Red Sea",
          "A siege of Makkah"
        ],
        correctAnswer: "Muslims conquered the fortified Jewish oases in northern Arabia",
        explanation: "The heavy fortresses of Khaybar, which funded hostile anti-Muslim coalitions, were conquered under the tactical leadership of Ali ibn Abi Talib (RA)."
      },
      {
        question: "Who was Safiyyah bint Huyayy (RA) and how did she enter the Prophet's household?",
        options: [
          "A noblewoman from Quraish who migrated",
          "The daughter of the chief of Banu al-Nadir, freed and married by the Prophet (PBUH) after Khaybar",
          "A princess from Abyssinia",
          "The sister of Khadijah (RA)"
        ],
        correctAnswer: "The daughter of the chief of Banu al-Nadir, freed and married by the Prophet (PBUH) after Khaybar",
        explanation: "Safiyyah (RA) chose Islam, was emancipated from captivity, and became one of the Mothers of the Believers."
      },
      {
        question: "What happened at the Battle of Mu'tah (8 AH)?",
        options: [
          "3,000 Muslims fought against a massive Byzantine-Ghassanid army of 100,000 to 200,000 in southern Jordan",
          "Muslims easily defeated the Persian army",
          "The Prophet (PBUH) personally led 30,000 troops into Syria",
          "The Quraish surrendered without fighting"
        ],
        correctAnswer: "3,000 Muslims fought against a massive Byzantine-Ghassanid army of 100,000 to 200,000 in southern Jordan",
        explanation: "Three commanders (Zayd, Ja'far, Abdullah ibn Rawahah) were martyred before Khalid ibn al-Walid skillfully executed an organized withdrawal."
      },
      {
        question: "What specific breach by Quraish caused the cancellation of the Treaty of Hudaybiyyah and triggered the Conquest of Makkah?",
        options: [
          "Quraish attacked Madinah directly",
          "Quraish aided their allies Banu Bakr in a night attack against Banu Khuza'ah, who were allies of the Muslims",
          "Quraish executed a Muslim ambassador",
          "Quraish seized Muslim merchant ships"
        ],
        correctAnswer: "Quraish aided their allies Banu Bakr in a night attack against Banu Khuza'ah, who were allies of the Muslims",
        explanation: "By providing arms and men to attack Banu Khuza'ah inside the sacred sanctuary, Quraish violated the non-aggression pact."
      },
      {
        question: "What general amnesty declaration did Prophet Muhammad (PBUH) make to the people of Makkah upon entering the city victoriously?",
        options: [
          "He ordered all Makkan leaders to be imprisoned",
          "He declared: 'Go your way, for you are free (Idhabu fa-antum al-tulaqa)'",
          "He demanded half of their wealth as war indemnity",
          "He required them to leave Makkah within 3 days"
        ],
        correctAnswer: "He declared: 'Go your way, for you are free (Idhabu fa-antum al-tulaqa)'",
        explanation: "Echoing Prophet Yusuf's words to his brothers, the Prophet (PBUH) unconditionally pardoned his lifelong persecutors."
      },
      {
        question: "What major event occurred during the Battle of Hunayn (8 AH) shortly after the Conquest of Makkah?",
        options: [
          "Muslims were initially overwhelmed due to overconfidence in their large numbers (12,000) before regrouping to win",
          "The enemy surrendered before any fighting started",
          "Muslims suffered a complete tactical defeat",
          "The battle was fought in ships"
        ],
        correctAnswer: "Muslims were initially overwhelmed due to overconfidence in their large numbers (12,000) before regrouping to win",
        explanation: "As mentioned in Quran (9:25-26), proud reliance on numbers caused initial chaos until the Prophet stood firm and rallied the believers."
      },
      {
        question: "What was the Expedition of Tabuk (9 AH) also known as, and who was it directed against?",
        options: [
          "Ghazwat al-Usrah (Hardship Expedition) directed against the Roman/Byzantine threat",
          "The Battle of the Trench against Quraish",
          "The Raid of Nakhlah against Yemen",
          "The Campaign of Ta'if against Thaqif"
        ],
        correctAnswer: "Ghazwat al-Usrah (Hardship Expedition) directed against the Roman/Byzantine threat",
        explanation: "Marched during intense summer heat over 500 km, testing the devotion of believers against reported Byzantine troop concentrations."
      },
      {
        question: "Why is the 9th year after Hijrah (9 AH) called 'Am al-Wufud' (The Year of Delegations)?",
        options: [
          "Tribes from all over the Arabian Peninsula sent delegations to Madinah to embrace Islam and swear allegiance to the Prophet",
          "Foreign kings sent gifts to Madinah",
          "Muslims sent delegations to Rome and Persia",
          "The Prophet sent delegates to perform Hajj"
        ],
        correctAnswer: "Tribes from all over the Arabian Peninsula sent delegations to Madinah to embrace Islam and swear allegiance to the Prophet",
        explanation: "Following the victory of Makkah and Tabuk, Arab tribes recognized divine truth and entered Islam in crowds (Surah An-Nasr)."
      },
      {
        question: "What was the 'Mosque of Harm' (Masjid al-Dirar) and what did the Prophet (PBUH) order to be done with it upon returning from Tabuk?",
        options: [
          "A mosque built by hypocrites to sow division and spy for enemy forces; the Prophet ordered it demolished and burned",
          "A mosque destroyed by Romans",
          "The original name of Masjid Quba",
          "A mosque built by converts in Yemen"
        ],
        correctAnswer: "A mosque built by hypocrites to sow division and spy for enemy forces; the Prophet ordered it demolished and burned",
        explanation: "As revealed in Surah At-Tawbah (9:107-108), it was established by Abu Amir al-Rahib and hypocrites to harm the Muslim community."
      },
      {
        question: "What core human rights principles were proclaimed by the Prophet (PBUH) in his Farewell Sermon (Khutbat al-Wada)?",
        options: [
          "Sanctity of life, property, equality of races, women's rights, and abolition of usury (Riba)",
          "Superiority of Arab tribes over non-Arabs",
          "Permission to wage unlimited war",
          "Exclusive economic privileges for Quraish"
        ],
        correctAnswer: "Sanctity of life, property, equality of races, women's rights, and abolition of usury (Riba)",
        explanation: "The Farewell Sermon laid down universal human rights, racial equality ('An Arab has no superiority over a non-Arab...'), and social justice."
      },
      {
        question: "Who was appointed by the Prophet (PBUH) to lead the final military expedition dispatched towards Transjordan just before his death?",
        options: ["Usamah ibn Zayd", "Khalid ibn al-Walid", "Sa'd ibn Abi Waqqas", "Amr ibn al-As"],
        correctAnswer: "Usamah ibn Zayd",
        explanation: "The Prophet appointed 18-year-old Usamah ibn Zayd (RA) to lead an army that included senior companions like Umar and Abu Bakr."
      },
      {
        question: "Who did the Prophet (PBUH) appoint to lead the daily prayers when he became too ill to lead during his final days?",
        options: ["Abu Bakr al-Siddiq", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Abdur Rahman ibn Auf"],
        correctAnswer: "Abu Bakr al-Siddiq",
        explanation: "The Prophet explicitly instructed: 'Tell Abu Bakr to lead the people in prayer,' signaling his leadership status."
      },
      {
        question: "What was the reaction of Umar ibn al-Khattab (RA) upon hearing of the Prophet's death, and how did Abu Bakr (RA) calm the situation?",
        options: [
          "Umar was in denial threatening anyone who said he died; Abu Bakr recited: 'Muhammad is no more than a messenger...'",
          "Umar immediately called for an election",
          "Abu Bakr broke down and Umar took charge",
          "Both companions left Madinah"
        ],
        correctAnswer: "Umar was in denial threatening anyone who said he died; Abu Bakr recited: 'Muhammad is no more than a messenger...'",
        explanation: "Abu Bakr famously declared: 'Whoever worshipped Muhammad, Muhammad has died; but whoever worships Allah, Allah is Ever-Living.'"
      },
      {
        question: "What was the name of the Christian delegation from Najran that visited the Prophet in Madinah to debate theology, leading to the revelation of Surah Ali Imran?",
        options: ["Delegation of Najran", "Delegation of Ta'if", "Delegation of Ghassan", "Delegation of Himyar"],
        correctAnswer: "Delegation of Najran",
        explanation: "60 leaders of Najran Christians engaged in scholarly interfaith dialogue inside Al-Masjid an-Nabawi and were permitted to pray their services there."
      },
      {
        question: "Which companion was known as the 'Keeper of the Secret of the Messenger of Allah' regarding the list of hypocrites?",
        options: ["Hudhayfah ibn al-Yaman", "Abu Hurairah", "Abdullah ibn Umar", "Abu Dharr al-Ghifari"],
        correctAnswer: "Hudhayfah ibn al-Yaman",
        explanation: "The Prophet (PBUH) entrusted Hudhayfah (RA) exclusively with the names of the hypocrites in Madinah."
      },
      {
        question: "What was the 'Event of the Mubahala' (Mutual Imprecation) mentioned in Quran 3:61?",
        options: [
          "A challenge to invoke Allah's curse upon whichever side was lying, issued during discussions with the Christians of Najran",
          "A battle between Muslims and Persians",
          "A covenant signed with Jewish tribes",
          "A arbitration after Uhud"
        ],
        correctAnswer: "A challenge to invoke Allah's curse upon whichever side was lying, issued during discussions with the Christians of Najran",
        explanation: "When the Najran Christians declined the Mubahala after seeing the Prophet bring Fatimah, Ali, Hasan, and Husayn, they agreed to a peace treaty instead."
      }
    ],
    advanced: [
      {
        question: "What was the 'Hilf al-Fudul' (League of the Virtuous) and what was Prophet Muhammad's (peace be upon him) involvement in it?",
        options: [
          "A pre-Islamic alliance to protect trade caravans",
          "An alliance formed before Islam to defend the rights of any oppressed person in Makkah, which the Prophet praised even after his prophethood",
          "A pagan military treaty against Medina",
          "A secret society of Quraish elders"
        ],
        correctAnswer: "An alliance formed before Islam to defend the rights of any oppressed person in Makkah, which the Prophet praised even after his prophethood",
        explanation: "Formed after the Sacrilegious Wars to protect victims of injustice in Makkah, the Prophet (PBUH) stated: 'If I were invited to join a similar pact in Islam, I would comply.'"
      },
      {
        question: "What was the deep spiritual and strategic significance of 'Am al-Huzn' (Year of Grief) in the Prophet's life?",
        options: [
          "It forced him to abandon preaching in Arabia",
          "It stripped away earthly human protection (Abu Talib) and emotional comfort (Khadijah), grounding his reliance solely on Allah before the Isra & Mi'raj",
          "It led directly to the Battle of Badr",
          "It marked the end of Makkan persecution"
        ],
        correctAnswer: "It stripped away earthly human protection (Abu Talib) and emotional comfort (Khadijah), grounding his reliance solely on Allah before the Isra & Mi'raj",
        explanation: "The loss of earthly support preceded the heavenly ascension (Mi'raj), demonstrating that absolute reliance belongs to Allah alone."
      },
      {
        question: "How did the Prophet Muhammad (PBUH) structure governance and administration in Madinah?",
        options: [
          "By creating an autocratic hereditary monarchy",
          "By establishing a decentralized constitutional system based on Shura (consultation), legal rule of law, contractual treaties, and administrative appointments",
          "By copying Byzantine feudal systems",
          "By relying entirely on tribal custom without written laws"
        ],
        correctAnswer: "By establishing a decentralized constitutional system based on Shura (consultation), legal rule of law, contractual treaties, and administrative appointments",
        explanation: "The Prophet (PBUH) established institutional governance with governors, collectors (Ummal), judges (Qadisi), and written treaties."
      },
      {
        question: "What theological and legislative obligations were established during the Isra and Mi'raj?",
        options: [
          "Prescription of 5 daily prayers, the final verses of Surah Al-Baqarah, and the promise of forgiveness for major sins for those who avoid Shirk",
          "Obligation of Zakat and Sawm",
          "Rules of inheritance",
          "Command to wage defensive war"
        ],
        correctAnswer: "Prescription of 5 daily prayers, the final verses of Surah Al-Baqarah, and the promise of forgiveness for major sins for those who avoid Shirk",
        explanation: "As recorded in Sahih Muslim, these three major blessings were gifted directly to the Prophet (PBUH) during the ascension."
      },
      {
        question: "How did Prophet Muhammad (PBUH) handle the leaders of Quraish who had persecuted Muslims for 20 years during the Conquest of Makkah?",
        options: [
          "He executed all enemy military commanders",
          "He granted general amnesty, preserved private property rights, and declared Abu Sufyan's house a sanctuary",
          "He forced all Makkans into exile",
          "He confiscated all Makkan homes for emigrants"
        ],
        correctAnswer: "He granted general amnesty, preserved private property rights, and declared Abu Sufyan's house a sanctuary",
        explanation: "His unprecedented magnanimity converted former bitter enemies like Abu Sufyan, Ikrimah ibn Abi Jahl, and Safwan ibn Umayyah into dedicated Muslims."
      },
      {
        question: "What legal framework governed the Prophet's interactions with non-Muslims under the Constitution of Madinah?",
        options: [
          "Forced conversion or expulsion",
          "Recognition of non-Muslim communities as a 'Ummah alongside the believers' with freedom of religion, judicial autonomy, and joint defense obligations",
          "Total segregation without legal rights",
          "Immediate taxation without protection"
        ],
        correctAnswer: "Recognition of non-Muslim communities as a 'Ummah alongside the believers' with freedom of religion, judicial autonomy, and joint defense obligations",
        explanation: "The Charter granted Jewish tribes legal autonomy to judge by the Torah while forming an integrated civic political alliance."
      },
      {
        question: "How did the Prophet's teachings dismantle pre-Islamic racial and tribal hierarchies?",
        options: [
          "By appointing leaders solely based on piety (Taqwa) and competence rather than lineage (e.g., Bilal, Zayd, Usamah)",
          "By establishing Quraish nobility as ruling caste",
          "By forbidding non-Arabs from holding office",
          "By maintaining traditional Bedouin status structures"
        ],
        correctAnswer: "By appointing leaders solely based on piety (Taqwa) and competence rather than lineage (e.g., Bilal, Zayd, Usamah)",
        explanation: "He elevated individuals regardless of ethnicity or past social status, explicitly declaring in his final sermon that nobility is based solely on piety."
      },
      {
        question: "Why did Allah describe the Treaty of Hudaybiyyah as a 'Manifest Victory' (Fath Mubeen) in Surah Al-Fath?",
        options: [
          "Because Muslims conquered Makkah on that day",
          "Because diplomatic recognition and peace allowed Islam to spread rapidly through peaceful intellectual discourse, doubling converts in 2 years",
          "Because it allowed Muslims to capture war bootys",
          "Because it ended all future conflicts"
        ],
        correctAnswer: "Because diplomatic recognition and peace allowed Islam to spread rapidly through peaceful intellectual discourse, doubling converts in 2 years",
        explanation: "Peace allowed free interaction between Muslims and pagans; more people accepted Islam during the 2 years of Hudaybiyyah than in the previous 19 years combined."
      },
      {
        question: "What constitutional precedent did the 'Charter of Madinah' set in political jurisprudence?",
        options: [
          "The divine right of kings",
          "A contractual rule of law establishing civic citizenship, equal protection, protection of places of worship, and shared fiscal defense responsibilities",
          "A military dictatorship model",
          "A purely theological code without civil laws"
        ],
        correctAnswer: "A contractual rule of law establishing civic citizenship, equal protection, protection of places of worship, and shared fiscal defense responsibilities",
        explanation: "Political scientists recognize it as a pioneering document of constitutional federalism and civic citizenship."
      },
      {
        question: "What took place during the First Pledge of Aqabah (Bay'at al-Aqabah al-Ula) in 621 CE?",
        options: [
          "12 leaders from Yathrib pledged to abstain from Shirk, theft, adultery, infanticide, slander, and disobedience in good deeds",
          "A military pact to attack Quraish",
          "A trade alliance with Abyssinia",
          "A treaty regarding Hajj rights"
        ],
        correctAnswer: "12 leaders from Yathrib pledged to abstain from Shirk, theft, adultery, infanticide, slander, and disobedience in good deeds",
        explanation: "Known as the 'Pledge of Women' (Bay'at al-Nisa) because it contained no military obligations, focusing purely on faith and morality."
      },
      {
        question: "What was the strategic distinction between a 'Ghazwah' and a 'Sariyyah' in the Seerah?",
        options: [
          "Ghazwah refers to campaigns in winter; Sariyyah in summer",
          "Ghazwah refers to expeditions led personally by the Prophet (PBUH); Sariyyah refers to expeditions commanded by appointed companions",
          "Ghazwah were defensive battles; Sariyyah were peace missions",
          "Ghazwah were fought in Makkah; Sariyyah in Madinah"
        ],
        correctAnswer: "Ghazwah refers to expeditions led personally by the Prophet (PBUH); Sariyyah refers to expeditions commanded by appointed companions",
        explanation: "The Prophet personally participated in 27 Ghazawat and dispatched over 50 Saraya under trusted commanders."
      },
      {
        question: "What was the theological significance of the 'Event of Mubahala' with the Christian scholars of Najran?",
        options: [
          "It demonstrated the Prophet's absolute conviction in the divine truth of his message and the human nature of Isa (Jesus, AS)",
          "It resulted in the destruction of Najran",
          "It established mandatory conversion for Christians",
          "It led to the cancellation of Jizyah"
        ],
        correctAnswer: "It demonstrated the Prophet's absolute conviction in the divine truth of his message and the human nature of Isa (Jesus, AS)",
        explanation: "By bringing his closest beloved family members to invoke divine curse on falsehood, the Prophet showed total certainty in revelation."
      },
      {
        question: "How did the Prophet Muhammad (PBUH) systematically work to eliminate human slavery?",
        options: [
          "By outlawing it instantly overnight without economic buffers",
          "By shutting down sources of enslavement (except legal captives of war), while making emancipation an expiation for sins, high act of charity, and institutional mandate",
          "By encouraging slave trade expansion",
          "By restricting freedom exclusively to Arabs"
        ],
        correctAnswer: "By shutting down sources of enslavement (except legal captives of war), while making emancipation an expiation for sins, high act of charity, and institutional mandate",
        explanation: "Islam restricted enslavement sources, mandated equal living standards for captives, and transformed freeing slaves into a primary act of worship."
      },
      {
        question: "Who were the 'Ashab al-Tree' (Companions of the Tree) and what unique spiritual status did they receive?",
        options: [
          "The 1,400 companions who took the Pledge of Ridwan; Allah declared His absolute pleasure (Rida) with them in Quran 48:18",
          "The archers at Uhud",
          "The martyrs of Badr",
          "The builders of Masjid Quba"
        ],
        correctAnswer: "The 1,400 companions who took the Pledge of Ridwan; Allah declared His absolute pleasure (Rida) with them in Quran 48:18",
        explanation: "Surah Al-Fath explicitly affirms: 'Indeed, Allah was pleased with the believers when they pledged allegiance to you under the tree.'"
      },
      {
        question: "What ecological and environmental principles were established by Prophet Muhammad (PBUH)?",
        options: [
          "He prohibited cutting fruit-bearing trees, killing non-combatant animals, wasting water even at a flowing river, and created protected nature reserves (Hima)",
          "He prioritized rapid deforestation for building ships",
          "He permitted burning enemy farmland under all circumstances",
          "He limited environmental care strictly to Makkah"
        ],
        correctAnswer: "He prohibited cutting fruit-bearing trees, killing non-combatant animals, wasting water even at a flowing river, and created protected nature reserves (Hima)",
        explanation: "He instituted 'Hima' (wildlife/forest protection zones) and stated: 'If the Final Hour comes while one of you holds a palm sapling, let him plant it.'"
      },
      {
        question: "What was the military innovation introduced by the Prophet (PBUH) regarding siege warfare at Ta'if?",
        options: [
          "Using cavalry charges inside city walls",
          "Deploying catapults (Manjaniq) and covered siege engines (Dabbabah) constructed with technical advice from companions",
          "Diverting sea water into the city",
          "Poisoning city water wells"
        ],
        correctAnswer: "Deploying catapults (Manjaniq) and covered siege engines (Dabbabah) constructed with technical advice from companions",
        explanation: "During the siege of Ta'if, the Prophet (PBUH) utilized siege artillery engines engineered by Salman al-Farsi and Al-Tufayl ibn Amr."
      },
      {
        question: "What was the Prophet's revolutionary policy regarding prisoners of war captured at the Battle of Badr?",
        options: [
          "Execution of all prisoners",
          "Ransoming captives through wealth, or allowing literate prisoners to gain freedom by teaching 10 Muslim children to read and write",
          "Enslaving all prisoners permanently without ransom options",
          "Exchanging them for weapon supplies only"
        ],
        correctAnswer: "Ransoming captives through wealth, or allowing literate prisoners to gain freedom by teaching 10 Muslim children to read and write",
        explanation: "This policy prioritized education and humane treatment, stunning contemporary 7th-century Arab society."
      },
      {
        question: "Who were the 'Ashab al-Suffah' (People of the Veranda) in Al-Masjid an-Nabawi?",
        options: [
          "A group of poor, unmarried companions who lived on the veranda of the Prophet's mosque dedicated full-time to Islamic learning, worship, and Hadith preservation",
          "The elite personal bodyguards of the Prophet",
          "A guild of merchants in Madinah",
          "Delegates from foreign nations"
        ],
        correctAnswer: "A group of poor, unmarried companions who lived on the veranda of the Prophet's mosque dedicated full-time to Islamic learning, worship, and Hadith preservation",
        explanation: "Companions like Abu Hurairah (RA) lived at the Suffah, becoming primary scholars and preservers of prophetic traditions."
      },
      {
        question: "How did the Prophet (PBUH) maintain filial respect and kindness toward his non-Muslim relatives, such as his uncle Abu Talib?",
        options: [
          "He severed all personal ties with non-Muslim family members",
          "He continuously loved, respected, cared for, and made dua for them, while keeping clear boundaries regarding religious compromise",
          "He refused to speak to them",
          "He disowned his clan"
        ],
        correctAnswer: "He continuously loved, respected, cared for, and made dua for them, while keeping clear boundaries regarding religious compromise",
        explanation: "Islam commands maintaining family ties (Silat al-Rahim) and showing kindness even to non-Muslim parents and relatives (Quran 31:15)."
      },
      {
        question: "What was the 'Incident of Ifk' (Slander against Aishah RA) and how was it resolved?",
        options: [
          "A false accusation engineered by hypocrites; resolved when Allah revealed 10 verses in Surah An-Nur (24:11-20) vindicating her purity",
          "A financial dispute solved by court arbitration",
          "A military revolt led by Abu Sufyan",
          "A treaty disagreement with Banu Qaynuqa"
        ],
        correctAnswer: "A false accusation engineered by hypocrites; resolved when Allah revealed 10 verses in Surah An-Nur (24:11-20) vindicating her purity",
        explanation: "Abdullah ibn Ubayy spread vicious lies; divine revelation directly exonerated Aishah (RA) and instituted strict slander laws (Qadhf)."
      },
      {
        question: "How did the Prophet (PBUH) resolve the deep-rooted centuries-old blood feud between the Aus and Khazraj tribes of Madinah?",
        options: [
          "By imposing heavy military rule",
          "By replacing tribal nationalism with Islamic brotherhood (Ukhuwwah) rooted in faith in Allah",
          "By exiling the Aus leaders",
          "By dividing Madinah with a physical wall"
        ],
        correctAnswer: "By replacing tribal nationalism with Islamic brotherhood (Ukhuwwah) rooted in faith in Allah",
        explanation: "Surah Ali Imran (3:103) highlights: 'You were on the brink of a pit of Fire and He saved you from it. Thus Allah makes clear to you His verses...'"
      },
      {
        question: "What major economic reforms were introduced by the Prophet (PBUH) in Madinah to establish economic equity?",
        options: [
          "Establishment of an open market free from monopolistic price manipulation, prohibition of Riba (usury), mandatory Zakat, and prohibition of deceptive trade (Gharar)",
          "Central state ownership of all agricultural lands",
          "Abolition of private property ownership",
          "Imposition of flat 50% income taxes on all traders"
        ],
        correctAnswer: "Establishment of an open market free from monopolistic price manipulation, prohibition of Riba (usury), mandatory Zakat, and prohibition of deceptive trade (Gharar)",
        explanation: "He created Suk al-Ansar in Madinah with zero market taxes, prohibiting price-fixing, fraud, and usurious exploitation."
      },
      {
        question: "How did the Prophet (PBUH) treat cultural customs ('Urf) of different tribes when they embraced Islam?",
        options: [
          "He abolished all pre-Islamic cultural practices completely",
          "He retained and validated cultural customs that did not contradict Islamic monotheism and ethics",
          "He forced all tribes to adopt Makkan dialect and dress",
          "He prohibited indigenous poetry and folk arts"
        ],
        correctAnswer: "He retained and validated cultural customs that did not contradict Islamic monotheism and ethics",
        explanation: "Legal jurisprudence establishes that approved custom ('Urf Muhakkam) is a source of law when it does not conflict with Shariah principles."
      },
      {
        question: "What was the diplomatic significance of the Year of Delegations (9 AH)?",
        options: [
          "It established Arabia as a unified sovereign Islamic state under Madinah's central leadership",
          "It marked the collapse of Islamic diplomacy",
          "It led to war with Abyssinia",
          "It ended all diplomatic communications"
        ],
        correctAnswer: "It established Arabia as a unified sovereign Islamic state under Madinah's central leadership",
        explanation: "Arabian tribes submitted to Islamic rule, sending emissaries to learn faith, pay Zakat, and integrate into the state."
      },
      {
        question: "What was the Prophet's holistic approach to medicine, healthcare, and hygiene (Tibb al-Nabawi)?",
        options: [
          "Relying solely on spiritual incantations without physical medicine",
          "Combining physical remedies, preventive hygiene, dietary moderation, and spiritual supplication ('Seek treatment, for Allah created no disease without a cure')",
          "Rejecting surgical interventions",
          "Forbidding quarantine practices during plagues"
        ],
        correctAnswer: "Combining physical remedies, preventive hygiene, dietary moderation, and spiritual supplication ('Seek treatment, for Allah created no disease without a cure')",
        explanation: "He instructed companions to seek competent physicians, practice quarantine during outbreaks, and maintain strict personal hygiene."
      },
      {
        question: "What rights were granted to non-Muslim citizens (Ahl al-Dhimmah) under Islamic governance established by the Prophet?",
        options: [
          "Full protection of life, honor, property, freedom of worship, and exemption from military service in exchange for Jizyah tax",
          "Compulsory military draft without property rights",
          "Forced conversion within 10 years",
          "No legal standing in courts"
        ],
        correctAnswer: "Full protection of life, honor, property, freedom of worship, and exemption from military service in exchange for Jizyah tax",
        explanation: "The Prophet warned: 'Whoever harms a Dhimmi (protected non-Muslim citizen), I will be his adversary on the Day of Resurrection.'"
      },
      {
        question: "How did the Prophet Muhammad (PBUH) plan urban municipal infrastructure in Madinah?",
        options: [
          "He designated public road widths (7 cubits minimum), public open spaces, market zones separate from residential areas, and communal wells",
          "He allowed random construction without street planning",
          "He banned public markets inside city limits",
          "He prohibited public wells"
        ],
        correctAnswer: "He designated public road widths (7 cubits minimum), public open spaces, market zones separate from residential areas, and communal wells",
        explanation: "Sunnah traditions specify municipal planning rules, including minimum street widths to allow two loaded camels to pass easily."
      },
      {
        question: "How did the Prophet (PBUH) revolutionize women's social, legal, and economic rights in 7th-century Arabia?",
        options: [
          "By granting women independent financial ownership, inheritance rights, marriage consent, divorce rights (Khul'), and educational access",
          "By restricting women to domestic duties without legal rights",
          "By denying women property ownership",
          "By abolishing dowry rights"
        ],
        correctAnswer: "By granting women independent financial ownership, inheritance rights, marriage consent, divorce rights (Khul'), and educational access",
        explanation: "Islam guaranteed women full legal persona, economic independence, inheritance, and veto power over unwanted marriage contracts."
      },
      {
        question: "What was the Prophet's practice regarding Shura (Mutual Consultation) in state and military affairs?",
        options: [
          "He made all decisions autocratically without consulting anyone",
          "He regularly consulted companions on strategy (e.g., Salman at Khandaq, Hubbab at Badr) and followed majority opinion even when it differed from his personal view",
          "He consulted only his family members",
          "He used consultation only for religious dogma"
        ],
        correctAnswer: "He regularly consulted companions on strategy (e.g., Salman at Khandaq, Hubbab at Badr) and followed majority opinion even when it differed from his personal view",
        explanation: "At Badr, he changed camping locations based on Hubbab ibn al-Mundhir's advice; at Uhud, he accepted the majority vote to fight outside Madinah."
      },
      {
        question: "What was the purpose of the 'Sariyyah' dispatched to Nakhlah under Abdullah ibn Jahsh before the Battle of Badr?",
        options: [
          "To gather intelligence on Quraish movements between Makkah and Ta'if",
          "To attack the city of Ta'if",
          "To negotiate peace with Roman envoys",
          "To capture Yemenite trade ships"
        ],
        correctAnswer: "To gather intelligence on Quraish movements between Makkah and Ta'if",
        explanation: "The reconnaissance mission provided vital intelligence regarding Quraish trade routes and military preparations."
      },
      {
        question: "What unique treaty provision did the Prophet (PBUH) agree to with the Christians of St. Catherine's Monastery (Achtiname)?",
        options: [
          "Covenant guaranteeing Christians protection of churches, tax relief for monks, freedom of worship, and defense by Muslims until the end of time",
          "Requirement to convert to Islam after 5 years",
          "Surrender of all church property to Madinah",
          "Ban on Christian pilgrimages"
        ],
        correctAnswer: "Covenant guaranteeing Christians protection of churches, tax relief for monks, freedom of worship, and defense by Muslims until the end of time",
        explanation: "The Ashtiname covenant guarantees perpetual protection for Christian monks and monasteries under Islamic rule."
      },
      {
        question: "How did the Prophet (PBUH) handle military defense during the Siege of Ahzab (Battle of the Trench)?",
        options: [
          "He built a defensive wall around Makkah",
          "He combined defensive fortification (trench), diplomatic efforts to divide confederate tribes, and psychological warfare",
          "He launched an immediate frontal assault in open desert",
          "He retreated to Abyssinia"
        ],
        correctAnswer: "He combined defensive fortification (trench), diplomatic efforts to divide confederate tribes, and psychological warfare",
        explanation: "He utilized Nu'aym ibn Mas'ud to sow discord between Quraish and Banu Quraydhah while maintaining trench defenses during harsh winter."
      },
      {
        question: "What was the primary reason for the Ghazwah of Banu Mustaliq (5 AH)?",
        options: [
          "Banu Mustaliq was gathering forces under Al-Harith ibn Abi Dirar to launch an invasion against Madinah",
          "A financial debt dispute",
          "A quarrel over pasture lands",
          "To capture trade routes to Egypt"
        ],
        correctAnswer: "Banu Mustaliq was gathering forces under Al-Harith ibn Abi Dirar to launch an invasion against Madinah",
        explanation: "Preemptive defense against confirmed hostile troop mobilization led to this expedition, after which Juwayriyah bint al-Harith (RA) married the Prophet."
      },
      {
        question: "What was the Prophet's instruction regarding the treatment of non-combatants during military conflicts?",
        options: [
          "Strict prohibition against harming women, children, elderly, monks in monasteries, and destruction of crops/property",
          "Permission to attack non-combatants if necessary",
          "Compulsory burning of enemy villages",
          "Destruction of all places of worship"
        ],
        correctAnswer: "Strict prohibition against harming women, children, elderly, monks in monasteries, and destruction of crops/property",
        explanation: "Prophetic rules of engagement formed the earliest international humanitarian codes of war."
      },
      {
        question: "What took place during the Incident of the False Prophet Musaylimah al-Khadhdhab during the Prophet's final months?",
        options: [
          "Musaylimah wrote a letter demanding to share prophethood and Arabia with Muhammad (PBUH); the Prophet rejected him outright calling him 'The Arch-Liar'",
          "Musaylimah converted to Islam in Madinah",
          "The Prophet appointed Musaylimah governor of Yamamah",
          "Musaylimah conquered Makkah"
        ],
        correctAnswer: "Musaylimah wrote a letter demanding to share prophethood and Arabia with Muhammad (PBUH); the Prophet rejected him outright calling him 'The Arch-Liar'",
        explanation: "The Prophet responded: 'The earth belongs to Allah; He causes such of His servants as He wills to inherit it.'"
      },
      {
        question: "What was the legal principle established when the Prophet (PBUH) sent Mu'adh ibn Jabal (RA) as governor and judge to Yemen?",
        options: [
          "Hierarchy of Islamic legal sources: Quran first, Sunnah second, and Ijtihad (analytical reasoning) when no explicit text exists",
          "Relying exclusively on tribal custom",
          "Judging solely by local governor opinion",
          "Forbidding judicial discretion"
        ],
        correctAnswer: "Hierarchy of Islamic legal sources: Quran first, Sunnah second, and Ijtihad (analytical reasoning) when no explicit text exists",
        explanation: "The famous dialogue with Mu'adh established the foundational methodology of Usul al-Fiqh (Islamic jurisprudence)."
      },
      {
        question: "What took place during the Expedition of Dhat al-Riqa (4 AH)?",
        options: [
          "Muslim soldiers wrapped rags around their bleeding feet due to extreme terrain, and Salat al-Khawf (Fear Prayer) was instituted",
          "A naval battle in the Persian Gulf",
          "A major siege of Ta'if",
          "The Conquest of Yemen"
        ],
        correctAnswer: "Muslim soldiers wrapped rags around their bleeding feet due to extreme terrain, and Salat al-Khawf (Fear Prayer) was instituted",
        explanation: "Companions tied rags (Riqa) to their feet while marching over hot volcanic rocks, and congregational prayer rules for combat zones were revealed."
      },
      {
        question: "How did the Prophet (PBUH) handle the death of his beloved son Ibrahim to prevent superstitious beliefs?",
        options: [
          "He claimed the solar eclipse that day was a miracle mourning his son",
          "He explicitly corrected the people stating: 'The sun and moon are signs of Allah; they do not eclipse for the death or life of anyone'",
          "He declared a week of national mourning",
          "He ordered a monument built"
        ],
        correctAnswer: "He explicitly corrected the people stating: 'The sun and moon are signs of Allah; they do not eclipse for the death or life of anyone'",
        explanation: "Even in deep grief, he rejected superstition, proving his sincere prophethood rather than exploiting coincidences for personal grandeur."
      },
      {
        question: "What was the strategic outcome of the Campaign of Daumat al-Jandal (5 AH)?",
        options: [
          "Securing northern trade routes to Syria and neutralizing highway robber tribes threatening Madinah merchants",
          "Conquering the Byzantine capital",
          "Establishing a navy in the Red Sea",
          "Peace pact with Persian forces"
        ],
        correctAnswer: "Securing northern trade routes to Syria and neutralizing highway robber tribes threatening Madinah merchants",
        explanation: "The expedition demonstrated Madinah's capability to project authority over 800 km north to protect international trade."
      },
      {
        question: "What was the ultimate overarching mission of Prophet Muhammad (PBUH) as summarized in Surah Al-Anbiya (21:107)?",
        options: [
          "To establish a political empire",
          "'And We have not sent you, [O Muhammad], except as a mercy to the worlds (Rahmatan lil-'Alamin)'",
          "To conquer regional superpowers",
          "To collect wealth for Quraish"
        ],
        correctAnswer: "'And We have not sent you, [O Muhammad], except as a mercy to the worlds (Rahmatan lil-'Alamin)'",
        explanation: "The Quran encapsulates his entire life, character, teachings, and prophethood as a universal embodiment of divine mercy."
      }
    ]
  }
};

export default seerahCategory;
