import type { QuizCategory } from "@/types/quiz";

export const islamicEschatologyCategory: QuizCategory = {
  id: "islamic-eschatology",
  name: "Islamic Eschatology",
  description: "Explore the end times, the realm of Barzakh, the Day of Judgment, Paradise, and Hell in Islamic theology.",
  icon: "Clock",
  levels: {
    easy: [
      {
        id: "eschatology-e-1",
        question: "What is the intermediate realm between worldly life and the Day of Judgment called?",
        options: ["Al-Akhirah", "Al-Barzakh", "Al-Jannah", "Jahannam"],
        correctAnswer: "Al-Barzakh",
        explanation: "Barzakh literally means a barrier or partition. In Islamic theology, it is the realm where souls reside between death and resurrection."
      },
      {
        id: "eschatology-e-2",
        question: "Which two angels interrogate the deceased in the grave regarding their Lord, religion, and Prophet?",
        options: ["Munkar and Nakir", "Jibril and Mika'il", "Israfil and Izrail", "Raqib and Atid"],
        correctAnswer: "Munkar and Nakir",
        explanation: "Munkar and Nakir are the two angels tasked with questioning every soul in the grave about their faith."
      },
      {
        id: "eschatology-e-3",
        question: "What is the name of the angel of death responsible for taking souls?",
        options: ["Malik", "Israfil", "Malakul-Mawt (Izrail)", "Ridwan"],
        correctAnswer: "Malakul-Mawt (Izrail)",
        explanation: "Malakul-Mawt is designated as the Angel of Death who extracts souls from bodies as decreed by Allah."
      },
      {
        id: "eschatology-e-4",
        question: "What does the soul experience in the grave if the person was a righteous believer?",
        options: ["Severe torment and darkness", "A window opening to Paradise and peace", "Total annihilation until resurrection", "Reincarnation into another body"],
        correctAnswer: "A window opening to Paradise and peace",
        explanation: "The grave of a believer becomes spacious, illuminated, and filled with the fragrance and comfort of Paradise."
      },
      {
        id: "eschatology-e-5",
        question: "What is 'Adhab al-Qabr'?",
        options: ["The reward of the righteous", "The punishment of the grave", "The blowing of the trumpet", "The crossing of the bridge"],
        correctAnswer: "The punishment of the grave",
        explanation: "Adhab al-Qabr refers to the punishment inflicted upon disbelievers and wrongdoers in the realm of Barzakh."
      },
      {
        id: "eschatology-e-6",
        question: "Which habit is frequently cited in Hadith as a primary cause of the punishment of the grave?",
        options: ["Sleeping through Fajr", "Carelessness regarding cleanliness from urine and gossip (Namimah)", "Eating non-halal food accidentally", "Failing to give charity"],
        correctAnswer: "Carelessness regarding cleanliness from urine and gossip (Namimah)",
        explanation: "Prophet Muhammad (PBUH) warned that many punishments in the grave happen due to not shielding oneself properly from urine splashes and spreading gossip."
      },
      {
        id: "eschatology-e-7",
        question: "Which Surah of the Quran is recommended to be recited nightly as a protection against the punishment of the grave?",
        options: ["Surah Al-Baqarah", "Surah Al-Mulk", "Surah Yaseen", "Surah Al-Kahf"],
        correctAnswer: "Surah Al-Mulk",
        explanation: "Surah Al-Mulk acts as an intercessor for its reader in the grave until they are forgiven."
      },
      {
        id: "eschatology-e-8",
        question: "Do the souls in Barzakh have awareness of worldly visitors?",
        options: ["No, they are completely unconscious", "Yes, they can recognize and hear those who visit their graves", "Only prophets have awareness", "Only on Fridays"],
        correctAnswer: "Yes, they can recognize and hear those who visit their graves",
        explanation: "Authentic narrations indicate that the deceased recognize visitors and respond to greetings of Salaam in their spiritual state."
      },
      {
        id: "eschatology-e-9",
        question: "What is the state of the soul of a martyr (Shaheed) immediately after death?",
        options: ["Resting in the hearts of green birds flying in Paradise", "Sleeping deeply in the earth", "Waiting at the gates of Hell", "Wandering on earth"],
        correctAnswer: "Resting in the hearts of green birds flying in Paradise",
        explanation: "The souls of martyrs reside in the crops/hearts of green birds that take light from lamps hanging in Paradise."
      },
      {
        id: "eschatology-e-10",
        question: "What is the term for the questioning in the grave?",
        options: ["Su'al al-Qabr", "Hisab", "Mizan", "Ba'th"],
        correctAnswer: "Su'al al-Qabr",
        explanation: "Su'al al-Qabr translates literally to the 'Questioning of the Grave'."
      },
      {
        id: "eschatology-e-11",
        question: "Which of the following is classified as a minor sign of the Day of Judgment?",
        options: ["The rising of the sun from the west", "The appearance of the Dajjal", "The widespread prevalence of ignorance and loss of authentic knowledge", "The descent of Prophet Isa"],
        correctAnswer: "The widespread prevalence of ignorance and loss of authentic knowledge",
        explanation: "The lifting of knowledge and spread of ignorance are established minor signs that precede the major changes."
      },
      {
        id: "eschatology-e-12",
        question: "What phenomenon did the Prophet (PBUH) predict regarding barefoot, destitute herdsmen?",
        options: ["They would become rulers of empires", "They would compete in constructing tall buildings", "They would discover oil", "They would migrate to the West"],
        correctAnswer: "They would compete in constructing tall buildings",
        explanation: "A famous narration in Sahih Muslim mentions barefoot shepherds competing with one another in building high-rises."
      },
      {
        id: "eschatology-e-13",
        question: "What minor sign relates to the frequency of time near the end of days?",
        options: ["Days will lengthen significantly", "Time will pass quickly, so a year feels like a month", "Seasons will freeze permanently", "The moon will rotate slower"],
        correctAnswer: "Time will pass quickly, so a year feels like a month",
        explanation: "The Prophet (PBUH) stated that time will contract, meaning a year will pass like a month, a month like a week, and a week like an hour."
      },
      {
        id: "eschatology-e-14",
        question: "Which of these is a sign concerning moral decay before the Hour?",
        options: ["Honesty will be treated as untrustworthiness", "Wealth will disappear entirely", "All people will become Arabic speakers", "No one will commit sins"],
        correctAnswer: "Honesty will be treated as untrustworthiness",
        explanation: "The Prophet noted that trust will be lost, and people will distrust the honest while trusting the dishonest."
      },
      {
        id: "eschatology-e-15",
        question: "What does the explosion of murder and killing indicate as a minor sign?",
        options: ["Peace treaties", "Al-Harj (widespread killing where the killer knows not why he kills)", "Global disarmament", "The spread of justice"],
        correctAnswer: "Al-Harj (widespread killing where the killer knows not why he kills)",
        explanation: "Al-Harj refers to a time of chaos and civil strife where bloodshed becomes rampant for trivial or unknown reasons."
      },
      {
        id: "eschatology-e-16",
        question: "Which geographical region was explicitly mentioned regarding the return of green pastures and rivers in Arabia?",
        options: ["The deserts of Arabia returning to meadows and rivers", "The Sahara transforming into a forest", "The Arctic melting completely", "The Amazon drying up"],
        correctAnswer: "The deserts of Arabia returning to meadows and rivers",
        explanation: "A sign of the Hour is that the land of Arabia will once again become pastures and rivers."
      },
      {
        id: "eschatology-e-17",
        question: "What happens to trust and governance when matters are handed over to unqualified people?",
        options: ["It leads to prosperity", "It is a sign of the approaching Hour", "It brings divine blessings", "It stabilizes society"],
        correctAnswer: "It is a sign of the approaching Hour",
        explanation: "When leadership or authority is given to those who are unfit for it, the Prophet (PBUH) instructed to wait for the Hour."
      },
      {
        id: "eschatology-e-18",
        question: "The proliferation of what economic practice is noted as a sign of the end times?",
        options: ["Zakat collection", "Interest / Usury (Riba)", "Free-market trading", "Gold standard commerce"],
        correctAnswer: "Interest / Usury (Riba)",
        explanation: "The Prophet warned that a time would come when no one would remain who does not consume Riba (or at least be touched by its dust)."
      },
      {
        id: "eschatology-e-19",
        question: "What is predicted about musical instruments and entertainment before the Day of Judgment?",
        options: ["They will be strictly banned globally", "They will be made permissible and widespread", "People will lose interest in art", "Only classical music will survive"],
        correctAnswer: "They will be made permissible and widespread",
        explanation: "Prophetic traditions warn of a time when people will legalize or widely indulge in intoxicants, silk (for men), and musical instruments under different names."
      },
      {
        id: "eschatology-e-20",
        question: "What will happen to the population ratio of men to women close to the Hour?",
        options: ["Men will vastly outnumber women", "Women will outnumber men significantly (50 to 1 in some accounts)", "The ratio will remain perfectly equal", "There will be no children born"],
        correctAnswer: "Women will outnumber men significantly (50 to 1 in some accounts)",
        explanation: "Due to wars and fitnah, traditions mention that fifty women may look after a single man."
      },
      {
        id: "eschatology-e-21",
        question: "How many major signs of the Day of Judgment are outlined in comprehensive Hadiths (such as Sahih Muslim)?",
        options: ["5", "10", "12", "20"],
        correctAnswer: "10",
        explanation: "There are 10 major signs mentioned by the Prophet (PBUH) that will unfold sequentially like beads falling from a broken string."
      },
      {
        id: "eschatology-e-22",
        question: "Who is Al-Masih ad-Dajjal (the Antichrist)?",
        options: ["A righteous king who restores justice", "A one-eyed false messiah who will deceive humanity", "An angel testing mankind", "A righteous scholar from Madinah"],
        correctAnswer: "A one-eyed false messiah who will deceive humanity",
        explanation: "Dajjal is a deceptive figure who will claim divinity, possessing false miracles to test humanity before the end of the world."
      },
      {
        id: "eschatology-e-23",
        question: "Which prophet will return to Earth to defeat the Dajjal?",
        options: ["Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)", "Prophet Isa (Jesus)", "Prophet Nuh (Noah)"],
        correctAnswer: "Prophet Isa (Jesus)",
        explanation: "Prophet Isa (Jesus, son of Mary) will descend from the heavens near a white minaret in Damascus and slay the Dajjal at the gate of Lud."
      },
      {
        id: "eschatology-e-24",
        question: "Who are Yajuj and Majuj (Gog and Magog)?",
        options: ["Two righteous rulers", "Corrupt, destructive tribes locked behind a barrier built by Dhul-Qarnayn", "Angels guarding the gates of heaven", "Jinn who accept Islam"],
        correctAnswer: "Corrupt, destructive tribes locked behind a barrier built by Dhul-Qarnayn",
        explanation: "Yajuj and Majuj are turbulent tribes whose release is one of the major signs; they will swarm over every hill and drink up water sources."
      },
      {
        id: "eschatology-e-25",
        question: "What is 'Dabat al-Ard' (The Beast of the Earth)?",
        options: ["A monstrous creature that will speak to people and mark believers and disbelievers", "A giant locust swarm", "A mythical beast of the sea", "A volcano eruption"],
        correctAnswer: "A monstrous creature that will speak to people and mark believers and disbelievers",
        explanation: "The Beast will emerge from the earth near the end times, speaking to humans and stamping their foreheads to distinguish faith."
      },
      {
        id: "eschatology-e-26",
        question: "From which direction will the sun rise as a major sign indicating the closing of the door of repentance?",
        options: ["East", "North", "West", "South"],
        correctAnswer: "West",
        explanation: "When the sun rises from the west, the gate of repentance will be permanently closed, and faith will no longer avail those who did not believe previously."
      },
      {
        id: "eschatology-e-27",
        question: "How many major eclipses or landslides (Khasf) are predicted as major signs?",
        options: ["One in the East, one in the West, and one in the Arabian Peninsula", "Only one in Makkah", "Five in Europe", "None"],
        correctAnswer: "One in the East, one in the West, and one in the Arabian Peninsula",
        explanation: "Three major sinkholes or landslides will swallow parts of the earth: one in the east, one in the west, and one in the Arabian Peninsula."
      },
      {
        id: "eschatology-e-28",
        question: "What is the great fire that will drive people toward their gathering place?",
        options: ["A fire emerging from Yemen", "A volcanic eruption in Iceland", "A meteor strike", "A forest fire in the Americas"],
        correctAnswer: "A fire emerging from Yemen",
        explanation: "A massive fire will emerge from the region of Yemen, driving humanity towards their place of assembly (Mahshar)."
      },
      {
        id: "eschatology-e-29",
        question: "What will happen to the Quran near the very end of worldly life?",
        options: ["It will be translated into every language", "It will be lifted from the hearts of men and the pages of books overnight", "It will remain untouched forever", "It will transform into gold"],
        correctAnswer: "It will be lifted from the hearts of men and the pages of books overnight",
        explanation: "In the final eras, the text of the Quran will vanish from copies and memories, leaving no trace of it on earth."
      },
      {
        id: "eschatology-e-30",
        question: "What is the order of the first major signs when they begin to drop rapidly?",
        options: ["They are like a broken string of beads, following one after another quickly", "They occur once every century", "They happen simultaneously across the cosmos", "They are random and unrecorded"],
        correctAnswer: "They are like a broken string of beads, following one after another quickly",
        explanation: "Once the major signs start appearing, they will follow in rapid succession like beads falling from a snapped string."
      },
      {
        id: "eschatology-e-31",
        question: "Which angel is tasked with blowing the Trumpet (Sur)?",
        options: ["Mika'il", "Israfil", "Jibril", "Azrail"],
        correctAnswer: "Israfil",
        explanation: "Angel Israfil holds the Trumpet to his lips, waiting for Allah's command to blow it."
      },
      {
        id: "eschatology-e-32",
        question: "What happens when the Trumpet is blown for the first time (Nafkhat al-Faza' or Sa'q)?",
        options: ["All creatures in the heavens and earth swoon or die", "Everyone wakes up", "The stars fall into the ocean", "People begin calculating their deeds"],
        correctAnswer: "All creatures in the heavens and earth swoon or die",
        explanation: "The first blast causes absolute terror and the death of all living things in the universe, except those whom Allah wills."
      },
      {
        id: "eschatology-e-33",
        question: "What occurs during the second blast of the Trumpet (Nafkhat al-Qiyam)?",
        options: ["Everything is destroyed", "All creation is resurrected standing and looking", "The Earth splits in half", "The angels descend"],
        correctAnswer: "All creation is resurrected standing and looking",
        explanation: "The second blast resurrects all human beings from their graves, standing before their Lord for judgment."
      },
      {
        id: "eschatology-e-34",
        question: "How long is the duration between the two blasts of the Trumpet?",
        options: ["40 days", "40 years", "40 hours", "40 centuries"],
        correctAnswer: "40 years",
        explanation: "Hadiths specify that the time between the two blows of the trumpet is forty years."
      }
    ],
    intermediate: [
      {
        id: "eschatology-i-1",
        question: "In what physical condition will humans be resurrected on the Day of Judgment?",
        options: ["Clothed in royal garments", "Barefoot, naked, and uncircumcised", "Wearing their burial shrouds (Kafan)", "In adult perfection with modern clothes"],
        correctAnswer: "Barefoot, naked, and uncircumcised",
        explanation: "The Prophet (PBUH) stated that humanity will be raised barefoot, naked, and uncircumcised, exactly as they were born."
      },
      {
        id: "eschatology-i-2",
        question: "What will happen to the mountains on the Day of Judgment?",
        options: ["They will turn into gold", "They will be blown away as scattered dust / mirage", "They will grow taller", "They will sink into the sea"],
        correctAnswer: "They will be blown away as scattered dust / mirage",
        explanation: "The Quran describes mountains being pulverized and turning into loose sand or mirages."
      },
      {
        id: "eschatology-i-3",
        question: "What will happen to the oceans and seas on the Last Day?",
        options: ["They will freeze solid", "They will overflow and ignite / burst forth", "They will evaporate completely into mist", "They will turn into fresh drinking water"],
        correctAnswer: "They will overflow and ignite / burst forth",
        explanation: "Surah Al-Infitar and Surah Al-Takwir describe the seas bursting forth and boiling over."
      },
      {
        id: "eschatology-i-4",
        question: "What is 'Al-Ard al-Bayda' (The White Earth)?",
        options: ["The earth where humanity will be gathered, made like pure silver with no landmarks", "The snow-capped north pole", "The white sand deserts of Arabia", "The moon"],
        correctAnswer: "The earth where humanity will be gathered, made like pure silver with no landmarks",
        explanation: "Earth will be flattened and transformed into a brilliant white plain with no features, marking the gathering field."
      },
      {
        id: "eschatology-i-5",
        question: "Will animals be resurrected on the Day of Judgment?",
        options: ["No, their existence ends at death", "Yes, justice will be enacted between them, and then they will become dust", "Yes, they enter Paradise automatically", "Only pets enter Paradise"],
        correctAnswer: "Yes, justice will be enacted between them, and then they will become dust",
        explanation: "Animals will be gathered, rights will be settled (such as a horned sheep settling a score with a hornless one), and then Allah will command them: 'Be dust!'"
      },
      {
        id: "eschatology-i-6",
        question: "What is 'Al-Hashr'?",
        options: ["The gathering of all creation on the flat plain for judgment", "The questioning in the grave", "The bridge over Hell", "The pond of the Prophet"],
        correctAnswer: "The gathering of all creation on the flat plain for judgment",
        explanation: "Al-Hashr is the assembly of every human, jinn, and animal on the plains of resurrection."
      },
      {
        id: "eschatology-i-7",
        question: "How long will the standing (Al-Mawqif) on the Day of Judgment feel for the disbelievers?",
        options: ["50 minutes", "A day equivalent to 50,000 years", "100 years", "A brief moment"],
        correctAnswer: "A day equivalent to 50,000 years",
        explanation: "The Quran notes that the Day measures fifty thousand years for those who disbelieved."
      },
      {
        id: "eschatology-i-8",
        question: "How will the believers experience the long standing on the Day of Judgment?",
        options: ["Like a single obligatory prayer time", "They will sleep through it", "They will wander lost", "They will feel intense burning"],
        correctAnswer: "Like a single obligatory prayer time",
        explanation: "For the true believer, that immense duration will be made short and light, passing like the time it takes to pray an obligatory prayer."
      },
      {
        id: "eschatology-i-9",
        question: "What is the intensity of the sun on the Day of Judgment?",
        options: ["Normal warmth", "Brought extremely close to people, causing them to drown in their sweat", "Blocked by thick clouds", "Cold and freezing"],
        correctAnswer: "Brought extremely close to people, causing them to drown in their sweat",
        explanation: "The sun will be brought down to a distance of a mile, and people will sweat according to their deeds—some up to their ankles, others up to their mouths."
      },
      {
        id: "eschatology-i-10",
        question: "Who are the seven categories of people shaded by Allah's Arsh (Throne) on the Day when there is no shade except His?",
        options: ["Just rulers, youth raised in worship, those whose hearts are attached to mosques, etc.", "Only prophets and martyrs", "Those who gave away all their wealth", "Those who memorized the entire Quran"],
        correctAnswer: "Just rulers, youth raised in worship, those whose hearts are attached to mosques, etc.",
        explanation: "A famous Hadith outlines seven specific righteous archetypes who receive divine shade under the Throne."
      },
      {
        id: "eschatology-i-11",
        question: "What is 'Hawd al-Kawthar' (The Cistern / Pond)?",
        options: ["A river in Hell", "The Prophet Muhammad's special basin of sweet water on the Day of Judgment", "The well of Zamzam", "The pool where people wash before judgment"],
        correctAnswer: "The Prophet Muhammad's special basin of sweet water on the Day of Judgment",
        explanation: "Al-Kawthar is the Prophet's grand basin whose water is whiter than milk and sweeter than honey; whoever drinks from it will never thirst again."
      },
      {
        id: "eschatology-i-12",
        question: "Who will be driven away from the Prophet's Hawd?",
        options: ["Those who innovated in religion and altered the Sunnah", "All disbelievers from ancient nations", "Those who missed daily prayers occasionally", "Those who were poor"],
        correctAnswer: "Those who innovated in religion and altered the Sunnah",
        explanation: "The Prophet will recognize his followers by their glowing traces of ablution (Wudu), but innovators who changed the religion will be pushed away by angels."
      },
      {
        id: "eschatology-i-13",
        question: "What is the intercession (Shafa'ah) requested from Prophet Muhammad (PBUH) when humanity is overwhelmed at the Mawqif?",
        options: ["Al-Shafa'ah al-Uzma (The Great Intercession for judgment to begin)", "Intercession to enter Paradise directly", "Intercession to forgive all disbelievers", "Intercession to stop the sun"],
        correctAnswer: "Al-Shafa'ah al-Uzma (The Great Intercession for judgment to begin)",
        explanation: "When people go from prophet to prophet seeking relief from the agonizing wait, Prophet Muhammad accepts the Great Intercession for Allah to begin the reckoning."
      },
      {
        id: "eschatology-i-14",
        question: "Who holds the supreme authority of judgment on that Day?",
        options: ["The Angels", "Prophet Muhammad", "Allah Alone", "A council of prophets"],
        correctAnswer: "Allah Alone",
        explanation: "Absolute sovereignty and judgment belong exclusively to Allah (Maliki Yawm al-Din)."
      },
      {
        id: "eschatology-i-15",
        question: "What will human limbs do during the reckoning?",
        options: ["They will remain silent", "They will bear witness against their owner for what they did", "They will ask for mercy", "They will detach and fly away"],
        correctAnswer: "They will bear witness against their owner for what they did",
        explanation: "Hands, feet, skin, and eyes will speak up and testify regarding the deeds committed in the worldly life."
      },
      {
        id: "eschatology-i-16",
        question: "What is 'Kitab al-Amal' (The Book of Deeds)?",
        options: ["A book compiled by guardian angels containing every action", "The Quran", "The Law of Moses", "A historical record of nations"],
        correctAnswer: "A book compiled by guardian angels containing every action",
        explanation: "Every person will be handed their comprehensive record of deeds compiled by Kiraman Katibin."
      },
      {
        id: "eschatology-i-17",
        question: "How will the records (books of deeds) be distributed?",
        options: ["In the right hand for believers and behind the back/left hand for disbelievers", "Randomly distributed", "Via mail", "Placed on the ground"],
        correctAnswer: "In the right hand for believers and behind the back/left hand for disbelievers",
        explanation: "The righteous receive their book in their right hand with joy, while the wretched receive it behind their backs or in their left hand."
      },
      {
        id: "eschatology-i-18",
        question: "What is 'Al-Mizan' (The Scale)?",
        options: ["A bridge over Hell", "A literal divine scale of absolute precision to weigh deeds", "A measure of wealth", "A book of laws"],
        correctAnswer: "A literal divine scale of absolute precision to weigh deeds",
        explanation: "Al-Mizan is a real scale with two pans that weighs good and bad deeds accurately down to the weight of an atom."
      },
      {
        id: "eschatology-i-19",
        question: "Which statement or phrase is heaviest on the Scale according to Hadith?",
        options: ["Subhanallahi wa bi-hamdihi, Subhanallahil-Azim", "Allahu Akbar", "La ilaha illallah", "Alhamdulillah"],
        correctAnswer: "Subhanallahi wa bi-hamdihi, Subhanallahil-Azim",
        explanation: "The Prophet taught two phrases that are light on the tongue, heavy on the Mizan, and beloved to the Most Merciful."
      },
      {
        id: "eschatology-i-20",
        question: "What is 'As-Sirat'?",
        options: ["The gate of Paradise", "A bridge set over the abyss of Hell", "The meeting place of prophets", "The scroll of judgment"],
        correctAnswer: "A bridge set over the abyss of Hell",
        explanation: "As-Sirat is a bridge stretched over Hellfire that every single human must cross to reach Paradise."
      },
      {
        id: "eschatology-i-21",
        question: "How is As-Sirat described in terms of sharpness and thinness?",
        options: ["As wide as a highway", "Thinner than a hair and sharper than a sword", "A wide stone bridge", "A rope ladder"],
        correctAnswer: "Thinner than a hair and sharper than a sword",
        explanation: "Narrations describe the Sirat as extremely fine and sharp, making crossing it dependent on one's faith and deeds."
      },
      {
        id: "eschatology-i-22",
        question: "How do people cross As-Sirat?",
        options: ["Everyone crosses at the exact same speed", "At speeds varying from lightning, wind, running horses, to crawling on hands and knees", "Everyone flies across with wings", "No one crosses successfully without falling"],
        correctAnswer: "At speeds varying from lightning, wind, running horses, to crawling on hands and knees",
        explanation: "People cross the Sirat according to the light of their faith; some cross like lightning, others like falling stars, and some crawl with difficulty."
      },
      {
        id: "eschatology-i-23",
        question: "What are the hooks hanging along the sides of As-Sirat?",
        options: ["Decorations of gold", "Hooks commanded to snatch and pull people into Hell based on their sins", "Anchors for stability", "Tools to guide travelers"],
        correctAnswer: "Hooks commanded to snatch and pull people into Hell based on their sins",
        explanation: "There are hooks and thorns along the bridge that grab people based on specific sins they failed to repent from."
      },
      {
        id: "eschatology-i-24",
        question: "What is 'Al-Qantarah'?",
        options: ["A bridge for settling mutual injustices among believers before entering Paradise", "The deepest part of Hell", "The entrance to the Garden", "The throne of judgment"],
        correctAnswer: "A bridge for settling mutual injustices among believers before entering Paradise",
        explanation: "After crossing the Sirat, believers who are saved from Hell are detained at Al-Qantarah to resolve personal grievances and wrongs between one another."
      },
      {
        id: "eschatology-i-25",
        question: "What is 'Hisab Yaseer' (An Easy Reckoning)?",
        options: ["A detailed cross-examination of every single second", "A presentation of deeds where sins are overlooked without strict interrogation", "A test of math", "A judgment without a book"],
        correctAnswer: "A presentation of deeds where sins are overlooked without strict interrogation",
        explanation: "An easy reckoning is when a believer's sins are concealed and reviewed gently by Allah without rigorous cross-examination."
      },
      {
        id: "eschatology-i-26",
        question: "Who are the group of people who will enter Paradise without any reckoning or punishment?",
        options: ["70,000 believers who do not practice ruqyah, cauterize, take omens, and rely solely on Allah", "All rich people", "Everyone who lived in Madinah", "All scholars"],
        correctAnswer: "70,000 believers who do not practice ruqyah, cauterize, take omens, and rely solely on Allah",
        explanation: "Seventy thousand from the Ummah of Muhammad will enter Jannah without reckoning or punishment due to their supreme level of Tawakkul."
      },
      {
        id: "eschatology-i-27",
        question: "What is the primary Arabic term for Hellfire?",
        options: ["Jahannam", "Al-Barzakh", "Al-A'raf", "Illiyyin"],
        correctAnswer: "Jahannam",
        explanation: "Jahannam is the principal name for Hell in the Quran and Islamic tradition."
      },
      {
        id: "eschatology-i-28",
        question: "How many gates does Jahannam have?",
        options: ["3", "7", "8", "100"],
        correctAnswer: "7",
        explanation: "The Quran states that Jahannam has seven gates, each designated for a specific class of sinners."
      },
      {
        id: "eschatology-i-29",
        question: "How does the heat of worldly fire compare to the fire of Hell?",
        options: ["They are of equal temperature", "Worldly fire is one-seventieth part of the heat of Hellfire", "Hellfire is cooler than worldly fire", "Hellfire is made of ice"],
        correctAnswer: "Worldly fire is one-seventieth part of the heat of Hellfire",
        explanation: "The Prophet (PBUH) noted that the fire we use in this world is 1/70th of the intensity of the Hellfire."
      },
      {
        id: "eschatology-i-30",
        question: "What is the food of the inhabitants of Hell?",
        options: ["Zaqqum (a bitter, thorny tree) and Dari'", "Fruits and honey", "Pure water and bread", "Milk and dates"],
        correctAnswer: "Zaqqum (a bitter, thorny tree) and Dari'",
        explanation: "Zaqqum is a tree that grows at the bottom of Hell, whose fruit is like the heads of devils, alongside boiling pus (Dari')."
      },
      {
        id: "eschatology-i-31",
        question: "What is the drink of the people of Hell?",
        options: ["Al-Kawthar", "Hamim (boiling water) and Ghassaq (pus/discharge)", "Fresh mountain spring water", "Sweetened juice"],
        correctAnswer: "Hamim (boiling water) and Ghassaq (pus/discharge)",
        explanation: "Their drink will be boiling water that melts their insides, and pus oozing from the dwellers of Hell."
      },
      {
        id: "eschatology-i-32",
        question: "Who is the angel in charge of guarding Hell?",
        options: ["Ridwan", "Malik", "Israfil", "Gabriel"],
        correctAnswer: "Malik",
        explanation: "Angel Malik is the chief guardian / keeper of Jahannam."
      },
      {
        id: "eschatology-i-33",
        question: "Will sinful Muslims who died with Tawhid remain in Hell forever?",
        options: ["Yes, forever without exit", "No, after serving their punishment or through intercession, they will be removed and taken to Paradise", "They turn into dust immediately", "They are transferred to Barzakh"],
        correctAnswer: "No, after serving their punishment or through intercession, they will be removed and taken to Paradise",
        explanation: "Anyone who died with even an atom's weight of faith (Tawhid) in their heart will eventually be taken out of Hellfire."
      }
    ],
    advanced: [
      {
        id: "eschatology-a-1",
        question: "What is the lowest and most severe level of Hell typically associated with?",
        options: ["Hypocrites and the worst enemies of truth", "Minor sinners", "People who missed voluntary prayers", "Those who forgot charity"],
        correctAnswer: "Hypocrites and the worst enemies of truth",
        explanation: "The hypocrites will be in the lowest depths (Ad-Darq al-Asfal) of the Fire."
      },
      {
        id: "eschatology-a-2",
        question: "What is 'Al-Hutamah'?",
        options: ["A garden of Eden", "One of the names/levels of Hell that crushes everything thrown into it", "A bridge over the fire", "A lake in Paradise"],
        correctAnswer: "One of the names/levels of Hell that crushes everything thrown into it",
        explanation: "Al-Hutamah is the crushing fire of Hell mentioned in Surah Al-Humazah."
      },
      {
        id: "eschatology-a-3",
        question: "What is the reaction of the disbelievers when they realize their eternal destiny in Hell?",
        options: ["They will praise Allah", "They will wish they were turned into dust", "They will rule over Hell", "They will escape successfully"],
        correctAnswer: "They will wish they were turned into dust",
        explanation: "The disbeliever will cry out on that day, 'O I wish I were dust!' due to the horror of their punishment."
      },
      {
        id: "eschatology-a-4",
        question: "What is the Islamic term for Paradise?",
        options: ["Al-Jannah", "Jahannam", "Al-Barzakh", "Dar al-Salam"],
        correctAnswer: "Al-Jannah",
        explanation: "Al-Jannah literally means 'The Garden' and refers to the eternal abode of bliss for believers."
      },
      {
        id: "eschatology-a-5",
        question: "How many gates does Paradise have?",
        options: ["5", "7", "8", "12"],
        correctAnswer: "8",
        explanation: "Jannah has eight gates, including gates named after specific deeds like Bab al-Rayyan (for fasting) and Bab al-Salah."
      },
      {
        id: "eschatology-a-6",
        question: "Who is the angel in charge of guarding and welcoming people to Paradise?",
        options: ["Malik", "Ridwan", "Israfil", "Mikail"],
        correctAnswer: "Ridwan",
        explanation: "Ridwan is the prominent angel identified in traditional commentaries as the keeper of Paradise."
      },
      {
        id: "eschatology-a-7",
        question: "What is the highest level of Paradise directly underneath the Throne of the Most Merciful?",
        options: ["Jannat al-Ma'wa", "Al-Firdaus al-A'la", "Dar al-Salam", "Jannat 'Adn"],
        correctAnswer: "Al-Firdaus al-A'la",
        explanation: "Al-Firdaus is the highest and most excellent garden of Paradise, from which the rivers of Jannah spring."
      },
      {
        id: "eschatology-a-8",
        question: "What are the building materials of the palaces of Paradise described in Hadith?",
        options: ["Red brick and cement", "Bricks of gold and silver, and mortar of fragrant musk", "Marble and granite", "Glass and wood"],
        correctAnswer: "Bricks of gold and silver, and mortar of fragrant musk",
        explanation: "The Prophet described the structures of Jannah as being built with alternating bricks of gold and silver, cemented with pure musk."
      },
      {
        id: "eschatology-a-9",
        question: "What kind of rivers flow through Paradise?",
        options: ["Rivers of water that does not age, milk of unchanging taste, wine delicious to drinkers, and pure honey", "Only water and soda", "Muddy rivers", "Saltwater streams"],
        correctAnswer: "Rivers of water that does not age, milk of unchanging taste, wine delicious to drinkers, and pure honey",
        explanation: "Surah Muhammad describes these four distinct rivers flowing through the gardens of Paradise."
      },
      {
        id: "eschatology-a-10",
        question: "What physical age will the inhabitants of Paradise be when they enter?",
        options: ["Newborn babies", "In the prime of youth, around 33 years old", "Elderly sages", "Teenagers"],
        correctAnswer: "In the prime of youth, around 33 years old",
        explanation: "Inhabitants of Jannah will enter eternally young, matching the age of 33, hairless/beardless, with radiant faces."
      },
      {
        id: "eschatology-a-11",
        question: "What is the greatest blessing and reward for the people of Paradise?",
        options: ["Eating delicious fruits", "Wearing silk garments", "Seeing the Face of Allah (Ru'yatullah)", "Living in golden mansions"],
        correctAnswer: "Seeing the Face of Allah (Ru'yatullah)",
        explanation: "The pinnacle delight of Paradise, superseding all physical pleasures, is gazing upon the Majestic Countenance of Allah."
      },
      {
        id: "eschatology-a-12",
        question: "Do people in Paradise experience fatigue, boredom, illness, or death?",
        options: ["Yes, they age slowly", "No, they experience eternal life, health, and contentment without fatigue", "They die and are resurrected every 100 years", "They must work to maintain their gardens"],
        correctAnswer: "No, they experience eternal life, health, and contentment without fatigue",
        explanation: "Paradise is an abode of permanent bliss where residents never grow old, fall sick, tire, or die."
      },
      {
        id: "eschatology-a-13",
        question: "What is 'Tuba'?",
        options: ["A tree in Paradise whose distance is a 100-year ride", "A gate of Hell", "An angel of mercy", "A special garment"],
        correctAnswer: "A tree in Paradise whose distance is a 100-year ride",
        explanation: "Tuba is a magnificent tree in Jannah from whose garments the clothes of the inhabitants are fashioned."
      },
      {
        id: "eschatology-a-14",
        question: "What is 'Al-A'raf'?",
        options: ["The highest heaven", "A high wall/barrier with heights between Paradise and Hell for those whose good and bad deeds are equal", "The bridge over Hell", "The pond of the Prophet"],
        correctAnswer: "A high wall/barrier with heights between Paradise and Hell for those whose good and bad deeds are equal",
        explanation: "Al-A'raf is a partition separating Jannah and Jahannam where people whose good and bad scale deeds balanced out temporarily reside before entering Paradise."
      },
      {
        id: "eschatology-a-15",
        question: "What happens to Death itself on the Day of Judgment?",
        options: ["It remains alive forever", "It is brought in the form of a ram between Paradise and Hell and slaughtered", "It transforms into an angel", "It is locked in Jahannam"],
        correctAnswer: "It is brought in the form of a ram between Paradise and Hell and slaughtered",
        explanation: "A famous narration states that Death will be slaughtered, and a proclamation will be made: 'O people of Paradise, eternity and no death! O people of Hell, eternity and no death!'"
      },
      {
        id: "eschatology-a-16",
        question: "What is 'Al-Ba'th'?",
        options: ["The resurrection of bodies from the graves", "The journey across the bridge", "The questioning in the grave", "The final weeping"],
        correctAnswer: "The resurrection of bodies from the graves",
        explanation: "Al-Ba'th refers to the raising of all dead souls back into their reassembled physical forms on the Last Day."
      },
      {
        id: "eschatology-a-17",
        question: "What is 'An-Nushur'?",
        options: ["The scattering or spreading out of humanity after resurrection towards the gathering place", "The creation of Adam", "The blowing of the horn", "The closing of Hell"],
        correctAnswer: "The scattering or spreading out of humanity after resurrection towards the gathering place",
        explanation: "Nushur is the dissemination of resurrected humanity as they emerge from their graves toward the place of judgment."
      },
      {
        id: "eschatology-a-18",
        question: "What is 'As-Sa'ah' (The Hour)?",
        options: ["A specific minute in time", "One of the Quranic names for the Day of Judgment due to its sudden onset", "The duration of the standing", "The time of prayer"],
        correctAnswer: "One of the Quranic names for the Day of Judgment due to its sudden onset",
        explanation: "Al-Sa'ah (The Hour) highlights that the Day of Resurrection will arrive suddenly and unexpectedly."
      },
      {
        id: "eschatology-a-19",
        question: "What does Islamic theology teach about knowing the exact date of the Day of Judgment?",
        options: ["It is known to high-ranking angels only", "It is known only to Allah; no prophet or angel knows it", "It is revealed in hidden letters of the Quran", "It occurs every 1,000 years"],
        correctAnswer: "It is known only to Allah; no prophet or angel knows it",
        explanation: "When Angel Jibril asked the Prophet (PBUH) about the Hour, the Prophet replied, 'The one asked knows no more than the asker.'"
      },
      {
        id: "eschatology-a-20",
        question: "What is 'Yawm al-Fasl'?",
        options: ["The Day of Separation / Decision between truth and falsehood", "The day of fasting", "The day of pilgrimage", "The day of creation"],
        correctAnswer: "The Day of Separation / Decision between truth and falsehood",
        explanation: "Yawm al-Fasl is a Quranic designation for the Day of Judgment when humanity is separated into the righteous and wicked."
      },
      {
        id: "eschatology-a-21",
        question: "What is 'Yawm al-Jam''?",
        options: ["The Day of Assembly / Gathering", "The day of Friday prayers", "The day of Eid", "The day of charity"],
        correctAnswer: "The Day of Assembly / Gathering",
        explanation: "Yawm al-Jam' is another name for the Day of Judgment when all generations of humanity are gathered together."
      },
      {
        id: "eschatology-a-22",
        question: "What is 'Al-Tammah al-Kubra'?",
        options: ["The Great Overwhelming Calamity (the Day of Judgment)", "A minor earthquake", "A plague", "An eclipse"],
        correctAnswer: "The Great Overwhelming Calamity (the Day of Judgment)",
        explanation: "Mentioned in Surah An-Nazi'at, Al-Tammah al-Kubra describes the supreme catastrophe of the final hour."
      },
      {
        id: "eschatology-a-23",
        question: "What is 'Al-Qari'ah'?",
        options: ["The Striking Calamity / Knocking Event", "The splitting sky", "The blowing wind", "The flowing river"],
        correctAnswer: "The Striking Calamity / Knocking Event",
        explanation: "Al-Qari'ah is a name for the Day of Judgment, signifying how it strikes hearts with terror."
      },
      {
        id: "eschatology-a-24",
        question: "Who besides Prophet Muhammad (PBUH) will be granted the right of intercession (Shafa'ah) on the Day of Judgment?",
        options: ["Only angels", "Prophets, righteous scholars, martyrs, pious family members, and even the Quran itself", "No one else has this right", "Only kings"],
        correctAnswer: "Prophets, righteous scholars, martyrs, pious family members, and even the Quran itself",
        explanation: "Allah grants permission to prophets, angels, and believers of high status to intercede for others whom Allah permits."
      },
      {
        id: "eschatology-a-25",
        question: "What is the intercession of the 'Hafiz al-Quran' (Memorizer of the Quran) for their parents?",
        options: ["They will be given a crown of light whose brilliance outshines the sun", "They will bypass all judgment instantly", "They will rule over Jannah", "They will receive extra wealth"],
        correctAnswer: "They will be given a crown of light whose brilliance outshines the sun",
        explanation: "Hadiths note that parents of someone who memorized and lived by the Quran will be crowned with light on Judgment Day."
      },
      {
        id: "eschatology-a-26",
        question: "Can anyone intercede for another person without Allah's express permission and approval?",
        options: ["Yes, prophets can intercede for anyone anytime", "No one can intercede except after Allah grants permission and is pleased with the person", "Angels intercede automatically for all humanity", "Monarchs decide who gets intercession"],
        correctAnswer: "No one can intercede except after Allah grants permission and is pleased with the person",
        explanation: "The Quran clearly states: 'Who is it that can intercede with Him except by His permission?'"
      },
      {
        id: "eschatology-a-27",
        question: "What happens to children who die before reaching the age of puberty?",
        options: ["They enter Paradise and are cared for by Prophet Ibrahim", "They go to Barzakh permanently", "They undergo reckoning like adults", "They become angels"],
        correctAnswer: "They enter Paradise and are cared for by Prophet Ibrahim",
        explanation: "Children who pass away before the age of accountability enter Jannah, often mentioned as being looked after by Ibrahim (AS) in the higher realms."
      },
      {
        id: "eschatology-a-28",
        question: "What is the ultimate fate of people who never received any message or revelation (Ahl al-Fatra)?",
        options: ["They are automatically sent to Hell", "They are tested by Allah through a special trial on the Day of Judgment", "They become dust", "They enter Paradise automatically"],
        correctAnswer: "They are tested by Allah through a special trial on the Day of Judgment",
        explanation: "Scholars explain that those in 'Fatra' (those unreached by prophetic guidance, deaf persons, or infants of disbelievers) will be tested with a command by Allah on the Last Day; whoever obeys enters Jannah, and whoever disobeys enters the Fire."
      },
      {
        id: "eschatology-a-29",
        question: "What is 'Al-Wasilah'?",
        options: ["A high station in Paradise specifically requested for Prophet Muhammad in post-adhan supplications", "The bridge over Hell", "The book of deeds", "The scale of justice"],
        correctAnswer: "A high station in Paradise specifically requested for Prophet Muhammad in post-adhan supplications",
        explanation: "Al-Wasilah is a supreme rank in Jannah that the Prophet instructed Muslims to pray for him to attain after hearing the Adhan."
      },
      {
        id: "eschatology-a-30",
        question: "What role do good deeds like regular prayers and charity play regarding the punishment of the grave and the afterlife?",
        options: ["They protect and surround the believer like a shield or glowing light", "They have no impact once a person dies", "They only help in worldly life", "They reduce the lifespan"],
        correctAnswer: "They protect and surround the believer like a shield or glowing light",
        explanation: "Good deeds physically manifest in Barzakh and the Hereafter to comfort, shade, and protect their doer."
      },
      {
        id: "eschatology-a-31",
        question: "What is the significance of belief in the Hereafter (Al-Akhirah) in Islamic creed (Aqidah)?",
        options: ["It is one of the six core pillars of Islamic Faith (Iman)", "It is completely optional", "It is only a cultural metaphor", "It applies only to past nations"],
        correctAnswer: "It is one of the six core pillars of Islamic Faith (Iman)",
        explanation: "Belief in Allah, His Angels, His Books, His Messengers, the Last Day, and Divine Decree forms the six fundamental pillars of Islamic belief."
      },
      {
        id: "eschatology-a-32",
        question: "How does belief in the Day of Judgment influence a Muslim's daily moral life?",
        options: ["It encourages accountability, justice, patience in hardship, and ethical behavior", "It leads to despair and inaction", "It has no effect on daily actions", "It encourages reckless living"],
        correctAnswer: "It encourages accountability, justice, patience in hardship, and ethical behavior",
        explanation: "Consciousness of accountability before Allah inspires individuals to act righteously, uphold justice, and remain steadfast through trials."
      },
      {
        id: "eschatology-a-33",
        question: "What is the final phrase uttered by the inhabitants of Paradise when they enter their eternal home?",
        options: ["'Alhamdulillah, all praise is due to Allah who has guided us to this'", "'We wish we could return to earth'", "'Peace be upon the angels'", "'We are finally free from work'"],
        correctAnswer: "'Alhamdulillah, all praise is due to Allah who has guided us to this'",
        explanation: "The Quran records that the ultimate expression of the people of Jannah upon entry will be praise and gratitude to Allah for guiding them to success."
      }
    ]
  }
};

export default islamicEschatologyCategory;
