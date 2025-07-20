import type { QuizCategory } from "@/types/quiz"

const christCategory: QuizCategory = {
  id: "christ",
  title: "Christianity",
  description: "Commonalities between Islam and Christianity",
  icon: "church",
  levels: {
    easy: [
      {
        question: "How do Islam and Christianity view biblical prophets?",
        options: [
          "Only local leaders",
          "Mythological figures",
          "Divinely chosen reformers",
          "Limited to their own eras"
        ],
        correctAnswer: "Divinely chosen reformers",
        explanation: "Both honor prophets as God's messengers. The Quran names 25 prophets also in the Bible (e.g., Noah, Abraham, Moses), stating 'We sent every community a warner' (Quran 35:24). Jesus called Elijah 'a prophet' (Matthew 17:12 RSV), and Peter cited 'all the prophets from Samuel onward' (Acts 3:24 RSV)."
      },
      {
        question: "What is the shared concept of God in Islam and Christianity?",
        options: [
          "Multiple gods",
          "Single omnipotent Creator",
          "God as nature itself",
          "God limited by time"
        ],
        correctAnswer: "Single omnipotent Creator",
        explanation: "Both affirm one supreme God: 'Hear O Israel: The Lord our God is one Lord' (Deuteronomy 6:4 RSV) and 'Your God is One God' (Quran 2:163). Shared attributes include omniscience (Psalm 147:5/Quran 6:59) and mercy (Psalm 86:15/Quran 1:3)."
      },
      {
        question: "Which prophet is most frequently mentioned in the Quran?",
        options: [
          "Abraham",
          "Noah",
          "Moses",
          "Jesus"
        ],
        correctAnswer: "Moses",
        explanation: "Moses (Musa) is mentioned 136 times in the Quran, emphasizing his role in both traditions. The Exodus story appears in Quran 20:9-99 and Exodus 14. Both scriptures describe his miracles (Exodus 4:3/Quran 20:17-23) and reception of divine law (Exodus 20/Quran 7:143)."
      },
      {
        question: "What do both faiths teach about the Virgin Mary?",
        options: [
          "She was divine",
          "She remained a virgin perpetually",
          "She was a pious chosen woman",
          "She authored scripture"
        ],
        correctAnswer: "She was a pious chosen woman",
        explanation: "Both honor Mary (Maryam): 'You are highly favored! The Lord is with you' (Luke 1:28 RSV) and 'The angels said: O Mary, Allah has chosen you' (Quran 3:42). A full chapter (19) bears her name in the Quran, more than in the New Testament."
      },
      {
        question: "How do both religions view Satan?",
        options: [
          "As a metaphor for evil",
          "As God's equal opponent",
          "As a fallen spiritual being",
          "As non-existent"
        ],
        correctAnswer: "As a fallen spiritual being",
        explanation: "Both describe Satan's rebellion: 'I saw Satan fall like lightning' (Luke 10:18 RSV) and 'He refused and was proud' (Quran 2:34). He tempts humans (Genesis 3:1-5/Quran 7:20-22) but has no ultimate power over believers (James 4:7/Quran 15:42)."
      },
      {
        question: "What is the shared stance on murder in both faiths?",
        options: [
          "Permitted in war",
          "Allowed for self-defense",
          "Forbidden as grave sin",
          "Acceptable for criminals"
        ],
        correctAnswer: "Forbidden as grave sin",
        explanation: "'You shall not murder' (Exodus 20:13 RSV) and 'Do not kill the soul which Allah has forbidden' (Quran 6:151). Exceptions like just war have similar conditions in both (Deuteronomy 20:10-15/Quran 2:190)."
      },
      {
        question: "Which of these is a shared dietary prohibition?",
        options: [
          "All seafood",
          "Pork products",
          "Dairy with meat",
          "Vegetables"
        ],
        correctAnswer: "Pork products",
        explanation: "'The pig is unclean to you' (Leviticus 11:7 RSV) and 'Forbidden to you is the flesh of swine' (Quran 5:3). Early Christian texts like Didache 6:3 maintained this before Pauline reforms (Acts 10:9-15)."
      },
      {
        question: "What do both say about helping the poor?",
        options: [
          "Optional charity",
          "Mandatory giving",
          "Only for believers",
          "Not emphasized"
        ],
        correctAnswer: "Mandatory giving",
        explanation: "'Give to everyone who begs from you' (Luke 6:30 RSV) and 'The right of the poor is due in their wealth' (Quran 51:19). Zakat (2.5% wealth) parallels tithing (Malachi 3:10), both with detailed rules (Leviticus 27:30/Quran 9:60)."
      },
      {
        question: "How do both view the Golden Rule?",
        options: [
          "As outdated",
          "As optional advice",
          "As core ethical teaching",
          "As only for clergy"
        ],
        correctAnswer: "As core ethical teaching",
        explanation: "'Do to others as you would have them do to you' (Luke 6:31 RSV) and 'No one of you is a believer until he loves for his brother what he loves for himself' (Hadith, Bukhari 13). This ethic appears in Torah (Leviticus 19:18) and Quran (83:1-6)."
      },
      {
        question: "What is the shared teaching about prayer?",
        options: [
          "Only in emergencies",
          "Required at set times",
          "Only in places of worship",
          "Mental reflection only"
        ],
        correctAnswer: "Required at set times",
        explanation: "Daniel prayed three times daily (Daniel 6:10 RSV), while Muslims pray five times (Quran 17:78). Both include bowing (Psalm 95:6/Quran 48:29) and prostration (Matthew 26:39/Quran 3:43). Early Christians kept prayer hours (Acts 3:1)."
      },
      {
        question: "Which angel is recognized in both traditions?",
        options: [
          "Gabriel",
          "Metatron",
          "Azrael",
          "Uriel"
        ],
        correctAnswer: "Gabriel",
        explanation: "Gabriel (Jibril) announced Jesus' birth (Luke 1:26 RSV) and brought Quranic revelations (Quran 2:97). He's called 'who stands in the presence of God' (Luke 1:19) and 'the trustworthy spirit' (Quran 26:193)."
      },
      {
        question: "What do both say about usury/interest?",
        options: [
          "Encouraged",
          "Permitted moderately",
          "Forbidden",
          "Only for non-believers"
        ],
        correctAnswer: "Forbidden",
        explanation: "'Do not charge interest' (Leviticus 25:36 RSV) and 'Allah has permitted trade and forbidden usury' (Quran 2:275). Early Church Fathers like Basil condemned it, while Islamic finance maintains prohibition through profit-sharing models."
      },
      {
        question: "How do both view the afterlife?",
        options: [
          "Only metaphorical",
          "Physical resurrection and judgment",
          "Immediate reincarnation",
          "Universal salvation"
        ],
        correctAnswer: "Physical resurrection and judgment",
        explanation: "'All in the tombs will hear His voice and come out' (John 5:28-29 RSV) and 'The earth will cast out its burdens' (Quran 99:1-4). Both describe Paradise (Revelation 22:1-2/Quran 47:15) and Hell (Mark 9:43/Quran 104:4-7)."
      },
      {
        question: "What is the shared position on adultery?",
        options: [
          "Permitted between consenting adults",
          "Cultural norm",
          "Capital offense",
          "Severe sin"
        ],
        correctAnswer: "Severe sin",
        explanation: "'You shall not commit adultery' (Exodus 20:14 RSV) and 'Do not approach adultery' (Quran 17:32). Both prescribe severe consequences (Deuteronomy 22:22/Quran 24:2) while encouraging repentance (John 8:11/Quran 24:31)."
      },
      {
        question: "Which of these is a shared eschatological sign?",
        options: [
          "Global internet outage",
          "Return of Jesus",
          "Disappearance of the moon",
          "Alien contact"
        ],
        correctAnswer: "Return of Jesus",
        explanation: "'This Jesus will come in the same way' (Acts 1:11 RSV) and 'He will descend near Damascus' (Hadith, Muslim 2937). Both associate his return with defeating false messiahs (1 John 2:18/Quran 43:61) and establishing justice."
      },
      {
        question: "What do both teach about honoring parents?",
        options: [
          "Only if they're believers",
          "Only until adulthood",
          "Unconditional respect",
          "Optional when inconvenient"
        ],
        correctAnswer: "Unconditional respect",
        explanation: "'Honor your father and mother' (Exodus 20:12 RSV) and 'Be kind to parents' (Quran 17:23). Both exempt disobedience if they demand shirk (Matthew 10:37/Quran 29:8), but otherwise emphasize lifelong care (Mark 7:10-13/Quran 31:14)."
      },
      {
        question: "How do both view monasticism?",
        options: [
          "Required for all believers",
          "Praised without reservation",
          "Permitted but not prescribed",
          "Completely forbidden"
        ],
        correctAnswer: "Permitted but not prescribed",
        explanation: "Jesus praised celibacy 'for the kingdom' (Matthew 19:12 RSV), while Quran says 'We did not prescribe monasticism for them' (57:27). Islamic Sufism parallels Christian mysticism in seeking divine closeness while maintaining social duties."
      },
      {
        question: "What is the shared teaching about truthfulness?",
        options: [
          "Permitted in diplomacy",
          "Required in all matters",
          "Only in court testimony",
          "Flexible for convenience"
        ],
        correctAnswer: "Required in all matters",
        explanation: "'Do not lie to one another' (Colossians 3:9 RSV) and 'O you who believe, fear Allah and speak truth' (Quran 33:70). Both warn against false testimony (Exodus 20:16/Quran 25:72) and praise truth-tellers (Psalm 15:2/Hadith, Bukhari 6094)."
      },
      {
        question: "Which biblical figure has a Quranic chapter named after him?",
        options: [
          "Jonah",
          "Solomon",
          "Job",
          "Joseph"
        ],
        correctAnswer: "Joseph",
        explanation: "Surah 12 (Yusuf) details Joseph's story with parallels to Genesis 37-50: betrayal by brothers (Genesis 37:18/Quran 12:8), Potiphar's wife (Genesis 39:7/Quran 12:23), and rise to power (Genesis 41:41/Quran 12:54). It's called 'the most beautiful story' (Quran 12:3)."
      },
      {
        question: "What do both say about repentance?",
        options: [
          "Only before age 40",
          "Always accepted sincerely given",
          "Limited to three times",
          "Requires priestly mediation"
        ],
        correctAnswer: "Always accepted sincerely given",
        explanation: "'If we confess our sins, He is faithful to forgive' (1 John 1:9 RSV) and 'Allah accepts repentance from those who repent' (Quran 9:104). Both require remorse (Psalm 51:17/Quran 66:8), reparation (Luke 19:8/Hadith, Muslim 1688), and resolve to change."
      },
      {
        question: "How do both view the Torah?",
        options: [
          "As completely abrogated",
          "As partially corrupted",
          "As fully preserved",
          "As irrelevant"
        ],
        correctAnswer: "As partially corrupted",
        explanation: "Quran affirms original Torah as guidance (5:44) but notes textual alterations (5:13). Similarly, New Testament references Torah while revising laws (Matthew 5:21-48). Both maintain core commandments (Mark 12:28-31/Quran 4:36) while differing on legal details."
      },
      {
        question: "What is the shared position on gambling?",
        options: [
          "Permitted recreationally",
          "Allowed professionally",
          "Forbidden",
          "Only in moderation"
        ],
        correctAnswer: "Forbidden",
        explanation: "'Do not wear yourself out to get rich' (Proverbs 23:4 RSV) and 'Satan seeks to sow enmity through intoxicants and gambling' (Quran 5:90-91). Both warn against addiction (1 Timothy 6:10/Hadith, Abu Dawood 4289) and family neglect."
      },
      {
        question: "Which of these is a shared miracle story?",
        options: [
          "Parting of the Red Sea",
          "Stopping the sun",
          "Flying carpet",
          "Talking mountains"
        ],
        correctAnswer: "Parting of the Red Sea",
        explanation: "Moses' miracle appears in Exodus 14:21-22 and Quran 26:63. Both describe drowning Pharaoh's army (Exodus 14:28/Quran 10:90-92). The Quran adds Pharaoh's last-moment faith (10:90), showing Allah's mercy even to oppressors."
      },
      {
        question: "What do both teach about fasting?",
        options: [
          "Only for monks",
          "Prescribed periods",
          "Harmful to health",
          "Only during daylight"
        ],
        correctAnswer: "Prescribed periods",
        explanation: "Jesus fasted 40 days (Matthew 4:2 RSV) as Muslims do Ramadan (Quran 2:185). Both exempt the ill (Matthew 9:14-15/Quran 2:184) and value night prayers (Luke 6:12/Quran 73:6). Early Christians fasted Wednesdays/Fridays (Didache 8)."
      },
      {
        question: "How do both view the Psalms of David?",
        options: [
          "As lost scripture",
          "As purely secular poetry",
          "As corrupted hymns",
          "As divine revelation"
        ],
        correctAnswer: "As divine revelation",
        explanation: "Quran calls Psalms (Zabur) revealed scripture (4:163, 17:55). Many biblical psalms parallel Quranic themes: God's majesty (Psalm 8/Quran 67:3-5), repentance (Psalm 51/Quran 39:53), and praise (Psalm 150/Quran 17:111)."
      },
      {
        question: "What is the shared teaching about arrogance?",
        options: [
          "Virtue for leaders",
          "Necessary for success",
          "Disgraceful trait",
          "Genetic predisposition"
        ],
        correctAnswer: "Disgraceful trait",
        explanation: "'God opposes the proud' (James 4:6 RSV) and 'Do not walk arrogantly on earth' (Quran 17:37). Both cite Satan's fall (Isaiah 14:12-15/Quran 7:13) and praise humility (Matthew 23:12/Quran 28:83). Muhammad said 'No one enters Paradise with pride' (Muslim 91)."
      },
      {
        question: "Which prophet's birth narrative appears in both scriptures?",
        options: [
          "John the Baptist",
          "Samuel",
          "Elijah",
          "Elisha"
        ],
        correctAnswer: "John the Baptist",
        explanation: "John (Yahya) appears in Luke 1:5-25 (angelic birth announcement to Zechariah) and Quran 19:2-15 (Allah's gift to aged parents). Both note his asceticism (стора Matthew 3:4/Quran 19:12-14) and role preparing for Jesus (John 1:29-34/Quran 3:39)."
      },
      {
        question: "What do both say about backbiting?",
        options: [
          "Social necessity",
          "Minor offense",
          "Equivalent to eating flesh",
          "Permitted online"
        ],
        correctAnswer: "Equivalent to eating flesh",
        explanation: "'Do not speak against one another' (James 4:11 RSV) and 'Do not backbite... would any of you like to eat his brother's dead flesh?' (Quran 49:12). Both require repentance (Matthew 5:23-24/Hadith, Abu Dawood 4874) and repairing reputations damaged."
      },
        {
        question: "How does Christology differ between Islam and Christianity?",
        options: [
          "Both affirm Trinity",
          "Islam sees Jesus as created prophet",
          "Christianity denies his miracles",
          "Islam rejects his prophethood"
        ],
        correctAnswer: "Islam sees Jesus as created prophet",
        explanation: "Quran affirms Jesus' virgin birth (3:47), miracles (5:110), and return (43:61) but rejects divinity (5:72-75) and crucifixion (4:157). Contrast Nicene Creed's 'true God from true God.' Both agree on his eschatological role (Matthew 24:30-31/Quran 4:159)."
      },
      {
        question: "How do both religions view the Sabbath?",
        options: [
          "Transferred to Sunday",
          "Abrogated entirely",
          "Day of worship focus",
          "Only for Jews"
        ],
        correctAnswer: "Day of worship focus",
        explanation: "While Christians observe Sunday (Acts 20:7) and Muslims Friday (Quran 62:9-11), both maintain Sabbath principles: weekly worship (Hebrews 10:25/Hadith, Bukhari 893), rest (Exodus 20:8-11/Quran 4:154), and family time (Mark 2:27/Hadith, Ibn Majah 1727)."
      }
    ],
    advanced: [
       {
        question: "What is the Islamic view of Pauline theology?",
        options: [
          "Fully accepted",
          "Partially validated",
          "Complete rejection",
          "Unmentioned"
        ],
        correctAnswer: "Complete rejection",
        explanation: "Paul's doctrines (original sin-Romans 5:12, abrogation of law-Galatians 3:13) contradict Quranic teachings: no inherited sin (17:15), Torah still valid (5:43-48). Early sects like Ebionites also rejected Paul. Islamic sources identify him as a corrupter (Ibn Kathir's Qisas al-Anbiya)."
      },
      {
        question: "How do eschatological timelines compare?",
        options: [
          "Identical sequence",
          "Differ in minor signs only",
          "Major structural differences",
          "Islam has no eschatology"
        ],
        correctAnswer: "Major structural differences",
        explanation: "Shared signs: moral decay (2 Timothy 3:1-5/Hadith, Muslim 2670), Dajjal/Antichrist (1 John 2:18/Hadith, Muslim 2934). Differences: Islamic Mahdi (Hadith, Abu Dawood 4282) vs. Christian Millennium (Revelation 20:4), duration of tribulation (Daniel 12:11 vs. Hadith, Muslim 2937)."
      },
      {
        question: "What is the Islamic position on biblical canon formation?",
        options: [
          "Accepts all 66 books",
          "Only recognizes Torah",
          "Affirms original revelation but notes textual corruption",
          "Rejects all pre-Quranic scripture"
        ],
        correctAnswer: "Affirms original revelation but notes textual corruption",
        explanation: "Quran affirms original Torah/Injeel (5:44,48) but notes alterations (5:13,15). Early Muslim scholars identified specific changes: crucifixion denial (4:157) vs. Gospel accounts. Textual criticism now confirms variants like Comma Johanneum (1 John 5:7) missing in earliest manuscripts."
      },
      {
        question: "How does Islamic law compare to Mosaic law?",
        options: [
          "Identical punishments",
          "Sharper leniency in Islam",
          "Stricter in all aspects",
          "No overlap"
        ],
        correctAnswer: "Sharper leniency in Islam",
        explanation: "Shared crimes: theft (Exodus 22:1/Quran 5:38), adultery (Leviticus 20:10/Quran 24:2). Key differences: Islam requires 4 eyewitnesses for adultery (24:4) vs. Deuteronomy 22:22's two; encourages victim pardon (5:34); prohibits collective punishment (Hadith, Bukhari 6916) unlike Achan's family (Joshua 7:24-25)."
      },
      {
        question: "What is the Islamic critique of atonement theology?",
        options: [
          "Accepts it fully",
          "Rejects need for blood sacrifice",
          "Only applies to animal sacrifice",
          "Permits human sacrifice"
        ],
        correctAnswer: "Rejects need for blood sacrifice",
        explanation: "Quran states 'No soul bears another's burden' (53:38), rejecting substitutionary atonement (Romans 5:8). Abraham's sacrifice was a test (37:102-107), not proto-crucifixion. Salvation comes through repentance (25:70) and grace (3:31), not juridical satisfaction. Early sects like Nestorians also rejected penal substitution."
      },
      {
        question: "How do Christ's miracles compare in both traditions?",
        options: [
          "Quran denies all miracles",
          "Bible has more nature miracles",
          "Identical accounts",
          "Quran adds childhood miracles"
        ],
        correctAnswer: "Quran adds childhood miracles",
        explanation: "Shared miracles: healing (Matthew 8:1-3/Quran 3:49), raising dead (John 11:43-44/Quran 3:49). Unique to Quran: speaking in cradle (19:29-33), clay birds (3:49 vs. non-canonical Infancy Gospel of Thomas 2:1-5). Bible has more nature miracles (calming storm-Mark 4:39)."
      },
      {
        question: "What is the Islamic view of the Ecumenical Councils?",
        options: [
          "Accepts all decisions",
          "Valid only until Nicea",
          "Sees them as innovations",
          "Only recognizes Chalcedon"
        ],
        correctAnswer: "Sees them as innovations",
        explanation: "Councils like Nicea (325 CE) established Trinity doctrine absent in early texts. Quranic verses like 4:171 oppose triune concepts. Muslim scholars note political influences (Arius' exile) and chronological distance from Jesus. Early unitarian Christians (Ebionites) shared Islamic objections."
      },
      {
        question: "How does predestination theology differ?",
        options: [
          "Islam has no concept",
          "Christianity rejects free will",
          "Islam balances divine decree with human responsibility",
          "Identical doctrines"
        ],
        correctAnswer: "Islam balances divine decree with human responsibility",
        explanation: "Quran affirms Allah's foreknowledge (57:22) but holds humans accountable (18:29). Contrast Calvinist predestination (Romans 9:16) with Arminian free will parallels. Ash'ari theology posits acquisition (kasb) of preordained actions, avoiding either extreme (Hadith, Muslim 2653)."
      },
      {
        question: "What is the Islamic position on original sin?",
        options: [
          "Affirms it fully",
          "Rejects inherited guilt",
          "Applies only to Eve",
          "Requires infant baptism"
        ],
        correctAnswer: "Rejects inherited guilt",
        explanation: "Quran states Adam repented and was forgiven (2:37, 7:23-24), with no transmission of guilt (17:15). Contrast Augustine's interpretation of Romans 5:12. Islamic view aligns with Pelagius' rejected teaching that humans aren't born sinful. Children die in fitrah (pure state)-Hadith, Muslim 2658."
      },
      {
        question: "How do Mary's narratives differ?",
        options: [
          "Quran denies her virginity",
          "Bible omits her childhood",
          "Both have identical accounts",
          "Quran places her in Aaron's lineage"
        ],
        correctAnswer: "Bible omits her childhood",
        explanation: "Quran details Mary's (Maryam) upbringing (3:35-37), miraculous sustenance (3:37), and annunciation (19:16-21). Bible begins at betrothal (Matthew 1:18). Quran calls her 'sister of Aaron' (19:28) likely denoting Levitical lineage. Both affirm virgin birth (Luke 1:34/Quran 19:20)."
      },
      {
        question: "What is the Islamic view of the Eucharist?",
        options: [
          "Accepts transubstantiation",
          "Sees it as purely symbolic",
          "Views it as shirk (associating partners with God)",
          "Mandates weekly participation"
        ],
        correctAnswer: "Views it as shirk (associating partners with God)",
        explanation: "Quran rejects Jesus as divine sacrifice (4:157) or God incarnate (5:17). Consuming flesh/blood violates 5:3's prohibition. Early Muslim scholars like Ibn Taymiyyah critiqued 'real presence' doctrine as idolatry. Last Supper narrative differs in Quran (5:112-115) with no sacrificial language."
      },
      {
        question: "How does Islamic angelology compare?",
        options: [
          "Denies all angels",
          "Adds hierarchical details",
          "Matches exactly",
          "Rejects Gabriel's role"
        ],
        correctAnswer: "Adds hierarchical details",
        explanation: "Both recognize Gabriel, Michael (Daniel 10:13/Quran 2:98), and angelic functions (Luke 1:19/Quran 13:11). Islam adds names like Malik (hell's keeper-43:77) and Munkar/Nakir (grave angels-Hadith, Abu Dawood 4753). Quran rejects angelic intercession (53:26) unlike Catholic tradition."
      },
      {
        question: "What is the Islamic critique of monasticism?",
        options: [
          "Fully endorses it",
          "Rejects celibacy but values asceticism",
          "Requires it for all believers",
          "Only permits female monastics"
        ],
        correctAnswer: "Rejects celibacy but values asceticism",
        explanation: "Quran states 'We did not prescribe monasticism for them' (57:27), criticizing extremes. But Sufi asceticism parallels desert fathers in moderation. Muhammad praised controlled self-denial (Hadith, Tirmidhi 2378) but mandated marriage for capable (Hadith, Ibn Majah 1845), unlike 1 Timothy 5:9-12's widow restrictions."
      },
      {
        question: "How do creation accounts align?",
        options: [
          "Identical six-day sequence",
          "Quran lacks Adam's creation",
          "Both have God speaking creation",
          "Bible omits angelic prostration"
        ],
        correctAnswer: "Both have God speaking creation",
        explanation: "'God said, Let there be light' (Genesis 1:3) and 'Our command is but one word, as the twinkling of an eye' (Quran 54:50). Differences: Quran notes angels prostrating to Adam (2:34) vs. no biblical parallel; six 'ayyam' (periods-41:9-12) vs. 24-hour days debate."
      },
      {
        question: "What is the Islamic position on the Holy Spirit?",
        options: [
          "Third person of Trinity",
          "Angel Gabriel exclusively",
          "Divine force with no personhood",
          "Non-existent concept"
        ],
        correctAnswer: "Angel Gabriel exclusively",
        explanation: "Quran identifies the 'Holy Spirit' (Ruh al-Qudus) as Gabriel (2:97, 16:102). Contrast Trinitarian view (Matthew 28:19). Islamic theology sees 'spirit' as created (17:85), rejecting Johannine Paraclete (John 14:26) as referring to Muhammad (Ibn Ishaq's Sira)."
      },
      {
        question: "How does Islamic jurisprudence approach biblical laws?",
        options: [
          "Adopts all Mosaic law",
          "Rejects entirely",
          "Selectively validates through Quranic filter",
          "Only follows Pauline revisions"
        ],
        correctAnswer: "Selectively validates through Quranic filter",
        explanation: "Examples: Retributive justice (Exodus 21:24/Quran 5:45) maintained but with victim pardon emphasis (5:34). Pork prohibition (Leviticus 11:7/Quran 5:3) kept. Circumcision (Genesis 17:10) practiced but not Quran-mandated. Stoning for adultery (Deuteronomy 22:21) replaced with lashing (Quran 24:2)."
      },
      {
        question: "What is the Islamic view of Church sacraments?",
        options: [
          "Accepts all seven",
          "Recognizes baptism only",
          "Replaces with Islamic pillars",
          "Only Eucharist valid"
        ],
        correctAnswer: "Replaces with Islamic pillars",
        explanation: "Islam has no sacramental theology. Shahadah replaces baptism (Hadith, Bukhari 1292), salat replaces Eucharist, zakah replaces tithing. Marriage is civil contract, not sacrament. Hajj parallels pilgrimage but with Kaaba focus. Confirmation/ordination have no equivalents in Sunni Islam."
      },
      {
        question: "How do salvation mechanisms differ?",
        options: [
          "Both require blood atonement",
          "Islam combines faith and works",
          "Christianity mandates five pillars",
          "Identical grace-based systems"
        ],
        correctAnswer: "Islam combines faith and works",
        explanation: "Quran states 'Those who believe and do righteous deeds' (2:25, 5:9) attain paradise. Contrast sola fide (Romans 3:28). Islamic 'grace' (fadl) enables works (49:17), while Catholic/Orthodox synergism somewhat parallels. Protestant imputed righteousness differs from Quranic 'scale' of deeds (21:47)."
      },
      {
        question: "What is the Islamic view of the Old Testament prophets?",
        options: [
          "Only recognizes Moses",
          "Accepts all but considers their books corrupted",
          "Rejects all pre-Abrahamic figures",
          "Only those in Mecca"
        ],
        correctAnswer: "Accepts all but considers their books corrupted",
        explanation: "Quran affirms Noah (71:1), Abraham (19:41), David (38:17) etc. as prophets but notes textual distortion (5:13-15). Stories differ: Sodom's destruction (Genesis 19:24/Quran 11:77-83) omits Lot's incest. Jonah's account (37:139-148) lacks Nineveh's repentance details (Jonah 3:5-10)."
      },
      {
        question: "How does Islamic theology view the Fall?",
        options: [
          "As cosmic catastrophe",
          "As moral test with quick redemption",
          "As non-event",
          "As Satan's victory"
        ],
        correctAnswer: "As moral test with quick redemption",
        explanation: "Adam's error (2:35-37) was disobedience, not original sin. After repentance (7:23), he became first prophet (Hadith, Bukhari 3336). Contrast Augustinian 'total depravity.' Islamic view closer to Eastern Orthodox 'ancestral sin' without guilt transmission. Earth was always meant as testing ground (2:30)."
      },
      {
        question: "What is the Islamic position on biblical kings?",
        options: [
          "Only David was righteous",
          "Accepts all Israelite kings",
          "Validates David and Solomon as prophets",
          "Rejects all monarchs"
        ],
        correctAnswer: "Validates David and Solomon as prophets",
        explanation: "David (Dawud) and Solomon (Sulayman) are prophets in Islam (4:163, 27:15-44) with miracles (34:10-13). Saul (Talut) appears positively (2:247-251). Other kings like Ahab omitted. Quran critiques Jewish monarchy demands (2:246) as distrust in divine governance, paralleling 1 Samuel 8:7's 'rejection of Me.'"
      },
      {
        question: "How do purity laws compare?",
        options: [
          "Identical requirements",
          "Islam abolishes all",
          "Christianity is stricter",
          "Islam modifies with some continuity"
        ],
        correctAnswer: "Islam modifies with some continuity",
        explanation: "Shared: menstrual separation (Leviticus 15:19/Quran 2:222), ritual washing (Exodus 30:19-21/Hadith, Muslim 225). Differences: Islamic wudu (5:6) replaces full immersion; pork prohibition remains (5:3) while Acts 10:15 abolishes kosher restrictions. Islamic taharah extends to prayer preparedness."
      },
      {
        question: "What is the Islamic view of the Book of Revelation?",
        options: [
          "Accepts as fully authentic",
          "Sees it as partially correct",
          "Considers it completely fabricated",
          "Only validates beast imagery"
        ],
        correctAnswer: "Considers it completely fabricated",
        explanation: "Muslim scholars reject Revelation's canonicity due to: late authorship disputes, symbolic confusion (Hadith eschatology is more literal), and trinitarian language (1:4-5). Some parallel motifs (Dajjal/Antichrist, Gog-Magog/Yajuj-Majuj) but attribute these to shared ancient Near Eastern tropes."
      },
      {
        question: "How does Islamic inheritance law compare to Mosaic law?",
        options: [
          "Identical distributions",
          "More favorable to women",
          "Excludes daughters entirely",
          "Prioritizes tribe over family"
        ],
        correctAnswer: "More favorable to women",
        explanation: "Quran mandates shares for daughters (4:11), wives (4:12), and mothers (4:11) where Numbers 27:8-11 only mentions sons. Male double share balances financial responsibilities (4:34). Contrast Levirate marriage (Deuteronomy 25:5-10) with Islamic widow autonomy (2:234-240). Both maintain testamentary limits."
      },
      {
        question: "What is the Islamic critique of iconography?",
        options: [
          "Fully embraces religious art",
          "Permits symbolic representation",
          "Prohibits all imagery of prophets",
          "Only allows abstract designs"
        ],
        correctAnswer: "Prohibits all imagery of prophets",
        explanation: "Based on 'Those who make images will be punished' (Hadith, Bukhari 5951), Islam avoids figural representation, especially of prophets, contrasting Christian iconodulism (John of Damascus' defense). Quranic emphasis on Allah's transcendence (42:11) parallels Byzantine iconoclasm periods. Calligraphy replaces visual depictions."
      },
      {
        question: "What is the Islamic view of the Promised Land?",
        options: [
          "Islam rejects any sacred geography",
          "Both affirm Canaanite covenant",
          "Christianity spiritualizes it entirely",
          "Islam reorients toward Mecca"
        ],
        correctAnswer: "Islam reorients toward Mecca",
        explanation: "Quran affirms Allah's earth is spacious (4:97, 29:56), criticizing Jewish exclusivism. Abrahamic promise (2:124) isn't land-based. Hajj reorients sacred geography to Mecca (3:96-97). Contrast Zionist interpretations of Genesis 15:18. Some parallels in Christian supersessionism (Romans 4:13)."
      },
      {
        question: "What is the Islamic position on biblical apocrypha?",
        options: [
          "Accepts all deuterocanonical books",
          "Validates only Enoch and Jubilees",
          "Selectively references some narratives",
          "Rejects all apocryphal texts"
        ],
        correctAnswer: "Selectively references some narratives",
        explanation: "Quran references stories like Saul's kingship (2:246-251) resembling 1 Samuel, and Alexander's wall (18:83-98) similar to 4 Ezra's Gog-Magog. Rejected are doctrinally problematic texts (Tobit's angelology, Maccabees' Hanukkah). Islamic sources like al-Tabari's history critically evaluate biblical material."
      },
      {
        question: "What is the Islamic view of the Ecclesiastical hierarchy?",
        options: [
          "Accepts papal supremacy",
          "Parallels with caliphate structure",
          "Rejects all clerical mediation",
          "Only recognizes Orthodox bishops"
        ],
        correctAnswer: "Rejects all clerical mediation",
        explanation: "Islam has no priesthood; all believers access God directly (2:186). Scholars are guides, not intermediaries. Contrast Catholic apostolic succession (1 Timothy 4:14) or Orthodox apostolicity. Sunni Islam's scholarly consensus (ijma) somewhat parallels conciliarism but lacks institutional hierarchy."
      },
      {
        question: "How does jihad compare to Crusade theology?",
        options: [
          "Identical holy war concepts",
          "Jihad permits forced conversion",
          "Crusades were defensive only",
          "Jihad has strict ethical constraints"
        ],
        correctAnswer: "Jihad has strict ethical constraints",
        explanation: "Islamic jus ad bellum: no aggression (2:190), no compulsion in religion (2:256), only under state authority. Contrast Urban II's 'Deus vult' call. Crusader massacres (Jerusalem 1099) violate Quranic 'Do not kill monks' (Ibn Kathir's chronicles). Defensive jihad parallels just war theory with stricter civilian protections."
      },
      {
        question: "What is the Islamic view of the Synoptic Problem?",
        options: [
          "Affirms Markan priority",
          "Sees all Gospels as equally corrupted",
          "Validates Q source theory",
          "Unconcerned with textual criticism"
        ],
        correctAnswer: "Sees all Gospels as equally corrupted",
        explanation: "Muslim scholars note Synoptic contradictions (Matthew 27:5 vs Acts 1:18 on Judas' death) as evidence of tahrif (textual distortion). Quran's singular Gospel (Injeel-5:46) contrasts four canonical versions. Parallels exist between Islamic oral transmission rigor (isnad) and form criticism concerns."
      }
    ],
    intermediate: [
      // Copy the first 10 questions from easy level
      // This is a temporary solution until proper intermediate questions are created
    ]
  }
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!christCategory.levels.intermediate || christCategory.levels.intermediate.length === 0) {
  christCategory.levels.intermediate = [...christCategory.levels.easy.slice(0, 10)]
}

export default christCategory
