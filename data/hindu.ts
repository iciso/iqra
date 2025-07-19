import type { QuizCategory } from "@/types/quiz";

const hinduCategory: QuizCategory = {
  id: "hindu",
  title: "Commonalities between Islam and Hinduism",
  description: "Explore the commonalities and differences between Islam and Hinduism",
  icon: "",
  levels: {
    easy: [
      {
        question: "What is the core Islamic view of Hindu scriptures?",
        options: [
          "Completely divine revelation",
          "Partially contain divine wisdom",
          "Purely man-made",
          "Identical to Quranic teachings"
        ],
        correctAnswer: "Partially contain divine wisdom",
        explanation: "Islam acknowledges that Allah sent guidance to all nations (Quran 35:24). While Vedas/Upanishads aren't considered preserved scriptures like Torah/Injeel, they may contain remnants of original monotheistic teachings (tawhid) before polytheistic additions. The Quran states: *'To every people we sent a warner'* (35:24)."
      },
      {
        question: "Which Hindu concept aligns closest with Islamic Tawhid?",
        options: [
          "Avatar theory",
          "Brahman as supreme reality",
          "Trimurti",
          "Atman is Brahman"
        ],
        correctAnswer: "Brahman as supreme reality",
        explanation: "The Upanishadic concept of Nirguna Brahman (formless ultimate reality) parallels Islamic tawhid: *'Say: He is Allah, the One'* (Quran 112:1). Both reject anthropomorphism (Bhagavad Gita 12:5/Quran 42:11). Differences emerge in pantheistic interpretations of 'All is Brahman' vs Quranic creator-creature distinction (25:2)."
      },
      {
        question: "How does Islam view the caste system?",
        options: [
          "Accepts it as divine order",
          "Condemns its hereditary hierarchy",
          "Only rejects untouchability",
          "Mandates it for converts"
        ],
        correctAnswer: "Condemns its hereditary hierarchy",
        explanation: "Islam establishes equality: *'No Arab has superiority over non-Arab... except by piety'* (Prophet's Farewell Sermon). The Quran states: *'We created you from male and female and made you peoples and tribes to know one another'* (49:13). Contrast with Manusmriti's birth-based varnas (1:87-91)."
      },
      {
        question: "Which Islamic concept parallels Hindu ideas of cosmic order?",
        options: [
          "Qadr (Divine Decree)",
          "Rita (cosmic order)",
          "Sunnah of Allah",
          "Fitra (primordial nature)"
        ],
        correctAnswer: "Sunnah of Allah",
        explanation: "The Quranic concept of *'Sunnat Allah'* (Allah's unchanging ways - 33:62) resembles Vedic Rita (cosmic order). Both describe natural/spiritual laws governing existence (Rigveda 1.164.46/Quran 30:30). Key difference: Sunnah originates from Allah's will, while Rita is impersonal cosmic principle."
      },
      {
        question: "What is Islam's position on karma theory?",
        options: [
          "Accepts it fully",
          "Rejects rebirth but affirms moral causation",
          "Only accepts good karma",
          "Considers it identical to qadr"
        ],
        correctAnswer: "Rejects rebirth but affirms moral causation",
        explanation: "Islam teaches: *'Whoever does an atom's weight of good will see it'* (Quran 99:7-8), affirming moral accountability. But rejects rebirth (83:18-20) in favor of resurrection (75:3-4). Divine mercy (39:53) transcends strict karmic retribution. Actions matter but don't bind Allah's forgiveness."
      },
      {
        question: "Which Hindu practice finds partial resonance in Islam?",
        options: [
          "Idol worship",
          "Cow veneration",
          "Vegetarianism",
          "Meditation (dhyana)"
        ],
        correctAnswer: "Meditation (dhyana)",
        explanation: "Islamic muraqaba (mindfulness) resembles dhyana but with tawhid focus: *'Remember Allah with much remembrance'* (33:41). Prophet Muhammad meditated in Hira cave before revelation (Bukhari 3). Contrast with idol worship (5:90) or cow sanctity (Bhagavad Gita 18:44 vs Quran 22:36's sacrificial animals)."
      },
      {
        question: "How does Islamic monotheism view the Trimurti?",
        options: [
          "As valid trinity",
          "As manifestation hierarchy",
          "As shirk (associating partners with God)",
          "As angelic beings"
        ],
        correctAnswer: "As shirk (associating partners with God)",
        explanation: "Quran strictly prohibits associating divine functions: *'No son did Allah beget... Nor is any like Him'* (112:3-4). Contrast with Brahma-Vishnu-Shiva roles (Puranas). Islam acknowledges all creation/maintenance/destruction originate from Allah alone (7:54, 30:11, 55:26-27)."
      },
      {
        question: "What is the Islamic perspective on yoga?",
        options: [
          "Forbidden entirely",
          "Permitted as physical exercise",
          "Only spiritual aspects allowed",
          "Mandatory for Muslims"
        ],
        correctAnswer: "Permitted as physical exercise",
        explanation: "Physical postures (asanas) without theological elements are permissible like any exercise. But practices invoking deities (e.g., Surya Namaskar) conflict with tawhid (4:48). Breathing techniques must avoid Hindu mantras. Prophet said: *'The strong believer is better...'* (Muslim 2664)."
      },
      {
        question: "Which Islamic value aligns with ahimsa?",
        options: [
          "Jihad",
          "Mercy (rahma)",
          "Strict justice (qisas)",
          "Predestination"
        ],
        correctAnswer: "Mercy (rahma)",
        explanation: "While Islam permits defensive war (2:190), it shares ahimsa's spirit in: *'Allah is Kind and loves kindness'* (Muslim 2593). Prohibits animal cruelty (Hadith - Abu Dawud 2549) like Mahavira. Differences: Islam allows meat consumption (5:1) and just retribution (2:178)."
      },
      {
        question: "How does Islam view the Gita's teaching on detached action?",
        options: [
          "Rejects entirely",
          "Parallels but with different intent",
          "Only accepts for monks",
          "Considers it identical to tawakkul"
        ],
        correctAnswer: "Parallels but with different intent",
        explanation: "Gita's nishkama karma (2:47) resembles Islamic sincerity (ikhlas): *'Worship Allah as if you see Him'* (Muslim 8). But Islamic actions serve Allah alone (98:5), not merging with Brahman. Prophet said: *'Do for this world as if living forever...'* (Ibn Majah 4100) balancing material/spiritual."
      },
      {
        question: "What is Islam's stance on avatar theory?",
        options: [
          "Accepts all divine incarnations",
          "Only accepts Krishna",
          "Rejects all human manifestations of God",
          "Accepts Rama as prophet"
        ],
        correctAnswer: "Rejects all human manifestations of God",
        explanation: "Quran states: *'Nothing is like Him'* (42:11), rejecting divine incarnation. Contrasts Vishnu's avatars (Bhagavata Purana) with Islamic view of prophets as fully human (3:79). Jesus in Islam is created prophet (3:59), not God incarnate. Allah *'begets not nor is begotten'* (112:3)."
      },
      {
        question: "Which Hindu festival has an Islamic ethical parallel?",
        options: [
          "Diwali (lights)",
          "Holi (colors)",
          "Navratri (fasting)",
          "Pongal (charity)"
        ],
        correctAnswer: "Pongal (charity)",
        explanation: "Islamic zakat (2.5% wealth charity - Quran 9:60) parallels harvest festivals' generosity. Contrasts Diwali's Lakshmi worship (prohibited in 17:23) or Holi's revelry. Eid al-Fitr shares Pongal's communal feasting aspect but with takbir (Allah's glorification) not deity thanks."
      },
      {
        question: "How does Quranic creation narrative compare to Puranic accounts?",
        options: [
          "Identical sequence",
          "Both have cosmic egg theory",
          "Quran rejects cyclical creation",
          "Both describe god's exhaustion"
        ],
        correctAnswer: "Quran rejects cyclical creation",
        explanation: "Quran describes linear creation in six ayyaam (periods - 41:9-12), contrasting Puranic cycles of creation/destruction (kalpas). Both mention water's primacy (Rigveda 10.129/Quran 21:30) but Quran emphasizes Allah's effortless command (2:117) vs Brahma's labor (Manusmriti 1:5-16)."
      },
      {
        question: "What is the Islamic view of moksha?",
        options: [
          "Identical to jannah",
          "Rejects liberation as merging with God",
          "Accepts it as angelic state",
          "Only for prophets"
        ],
        correctAnswer: "Rejects liberation as merging with God",
        explanation: "Islam promises eternal paradise (jannah) with Allah's presence (9:72) but no ontological merging: *'Everyone thereon will pass away; there remains the Face of your Lord...'* (55:26-27). Contrasts Advaita's nirvana (Mandukya Upanishad 7). Soul remains distinct worshipping Allah (19:93)."
      },
      {
        question: "Which Islamic concept parallels dharma?",
        options: [
          "Sharia",
          "Iman",
          "Dunya",
          "Qiyamah"
        ],
        correctAnswer: "Sharia",
        explanation: "Both prescribe righteous living (dharma/sharia) but differ foundationally. Sanatana Dharma derives from smritis/shrutis, while sharia comes from Quran/sunnah. Islam's fixed moral law (5:3) contrasts Hinduism's contextual dharma (Bhagavad Gita 2:31). Both include worship, ethics, and law."
      },
      {
        question: "How does Islamic afterlife differ from samsara?",
        options: [
          "Both have eternal rebirth",
          "Islam has single earthly life",
          "Only hell is similar",
          "Jannah equals moksha"
        ],
        correctAnswer: "Islam has single earthly life",
        explanation: "Quran states: *'When death comes to one of you... then after that resurrection'* (23:99-100). Single earthly test (67:2) contrasts karma-driven rebirths. Paradise/hell are final (43:74-77). Islamic accountability is individual (6:164), not through multiple lives to burn karma."
      },
      {
        question: "What is Islam's position on bhakti (devotional worship)?",
        options: [
          "Only allows silent meditation",
          "Permits with tawhid focus",
          "Rejects all emotional worship",
          "Identical to Hindu practices"
        ],
        correctAnswer: "Permits with tawhid focus",
        explanation: "Islamic dua (supplication - 40:60) and dhikr (remembrance - 33:41) resemble bhakti but direct all love/worship to Allah alone (2:165). Contrasts deity-specific pujas. Prophet's emotional night prayers (Bukhari 1121) show devotion within tawhid framework."
      },
      {
        question: "Which Hindu sage's teachings align partially with Islamic values?",
        options: [
          "Chanakya's realism",
          "Patanjali's yamas",
          "Kapila's atheism",
          "Charvaka's materialism"
        ],
        correctAnswer: "Patanjali's yamas",
        explanation: "Yoga Sutra's yamas (ethical restraints) parallel Islamic morals: truth (satya - Quran 9:119), non-stealing (asteya - 2:188), celibacy in fasting (brahmacharya - 24:33). But niyamas' deity focus conflicts. Chanakya's pragmatism contradicts Islamic trust in Allah (65:3)."
      },
      {
        question: "How does Islamic prayer differ from puja?",
        options: [
          "Both use idol offerings",
          "Only Islam faces sacred direction",
          "Islamic salah is submission without imagery",
          "Identical ritual sequences"
        ],
        correctAnswer: "Islamic salah is submission without imagery",
        explanation: "Salah involves prescribed movements (Bukhari 794) without idols/murtis (5:90). Puja includes offerings/pranama to deities. Both have purification (wudu/snan) but Muslim prayer focuses on Allah alone (1:5). Qibla direction (2:144) differs from temple deity orientations."
      },
      {
        question: "What is the Islamic view of Vedanta philosophy?",
        options: [
          "Accepts non-dualism fully",
          "Rejects pantheistic elements",
          "Only validates Dvaita school",
          "Considers it identical to Sufism"
        ],
        correctAnswer: "Rejects pantheistic elements",
        explanation: "While Sufi concepts like wahdat al-wujud resemble Advaita, mainstream Islam rejects creation's ontological unity with Creator (112:4). Quranic *'He is with you wherever you are'* (57:4) describes knowledge, not essence. Dvaita's creator-creation distinction aligns closer but still differs theologically."
      },
      {
        question: "Which Islamic practice parallels japa (mantra repetition)?",
        options: [
          "Salah",
          "Dhikr",
          "Hajj",
          "Zakat"
        ],
        correctAnswer: "Dhikr",
        explanation: "Repetitive dhikr like 'SubhanAllah' (Muslim 680) resembles japa but affirms tawhid, not deity energies. Prophet said: *'The best remembrance is La ilaha illallah'* (Tirmidhi 3383). Contrasts om mantra's impersonal focus. Islamic dhikr uses Arabic, not Sanskrit syllables."
      },
      {
        question: "How does Islamic tawakkul differ from karma yoga's surrender?",
        options: [
          "Both reject divine planning",
          "Tawakkul combines trust with effort",
          "Identical concepts",
          "Only karma yoga accepts destiny"
        ],
        correctAnswer: "Tawakkul combines trust with effort",
        explanation: "Quran commands: *'Trust in Allah but tie your camel'* (Hadith - Tirmidhi 2517). Contrasts fatalistic interpretations of karma yoga. Islam balances qadr (divine decree - 57:22) with human responsibility (2:286). Surrender isn't passive but involves sharia-compliant action."
      },
      {
        question: "What is Islam's stance on Hindu astrology?",
        options: [
          "Permits fully",
          "Rejects fortune-telling aspects",
          "Only allows birth charts",
          "Mandates for all Muslims"
        ],
        correctAnswer: "Rejects fortune-telling aspects",
        explanation: "Prohibited as shirk: *'Whoever learns astrology...'* (Abu Dawud 3905). Planets obey Allah (7:54), don't influence fates. Contrasts Jyotisha's nakshatra system. Permissible astronomy (moon phases for Ramadan - 2:189) differs from horoscopes. Divine knowledge alone is supreme (31:34)."
      },
      {
        question: "Which Islamic concept parallels the guru-shishya tradition?",
        options: [
          "Ulama-ta'lim",
          "Sufi murshid-murid",
          "Caliph-subject",
          "Parent-child"
        ],
        correctAnswer: "Sufi murshid-murid",
        explanation: "Sufi spiritual mentoring resembles guru-disciple relationships but with key differences: Murshids don't possess divine status (3:79), teaching Quran/sunnah not personal revelations. Prophet said: *'Scholars are inheritors of prophets'* (Abu Dawud 3641) - knowledge transfer not self-realization techniques."
      },
      {
        question: "How does Islamic animal sacrifice differ from yajna?",
        options: [
          "Both appease deities",
          "Islamic udhiya commemorates Prophet Ibrahim",
          "Identical rituals",
          "Only Hindus say God's name"
        ],
        correctAnswer: "Islamic udhiya commemorates Prophet Ibrahim",
        explanation: "Qurbani remembers Ibrahim's sacrifice (37:102-107), not deity offerings like yajnas. Prohibits blood for altars (22:37): *'Their meat will not reach Allah... but your piety does'*. Shares Vedic Abrahamic roots but Islam rejects fire rituals (5:3). Both emphasize charity (22:36/Rigveda 1.164.50)."
      },
      {
        question: "What is the Islamic view of Hindu temple architecture?",
        options: [
          "Forbids all geometric patterns",
          "Permits non-idolatrous designs",
          "Mandates identical mosque designs",
          "Considers it shirk automatically"
        ],
        correctAnswer: "Permits non-idolatrous designs",
        explanation: "Islamic architecture uses geometry/calligraphy (2:144) avoiding deity imagery. Shared elements: domes (Quba Mosque/Tirumala), minarets (inspired by gopurams?). Key difference: mosques avoid murti garbhagriha (sanctums). Mughal architecture fused styles but maintained tawhid principles."
      },
      {
        question: "How does Islamic fasting differ from Hindu vratas?",
        options: [
          "Both are moon-dependent",
          "Ramadan has fixed lunar dates",
          "Identical food restrictions",
          "Only Hindus fast for gods"
        ],
        correctAnswer: "Ramadan has fixed lunar dates",
        explanation: "Islamic fasting follows hijri calendar (2:185), while Hindu vratas vary (Ekadashi/Purnima). Muslims abstain dawn-dusk (2:187); some Hindu fasts allow fruits. Intent differs: Ramadan earns taqwa (2:183) vs vratas for deity boons. Both emphasize charity (Bukhari 1903/Skanda Purana)."
      },
      {
        question: "Which Islamic theological school engaged most with Hindu philosophy?",
        options: [
          "Mu'tazila",
          "Ash'ari",
          "Maturidi",
          "Ahl al-Hadith"
        ],
        correctAnswer: "Maturidi",
        explanation: "Central Asian Maturidis (al-Biruni, Shah Waliullah) systematically compared Hindu concepts. Al-Biruni's 'India' (1030 CE) analyzed Vedanta. Contrasts literalist Ahl al-Hadith. Shared with Mu'tazila: rational approach but Maturidis balanced it with revelation. Sufis like Dara Shikoh translated Upanishads."
      }
    ],
    advanced: [
      {
        question: "How does Islamic ontology differ from Vedantic maya theory?",
        options: [
          "Both consider world illusory",
          "Islam affirms creation's reality",
          "Only Vedanta accepts material truth",
          "Identical concepts"
        ],
        correctAnswer: "Islam affirms creation's reality",
        explanation: "Quran states: *'We created not heaven and earth... except in truth'* (44:38-39). Contrasts Advaita's maya (illusion). Islamic occasionalism (creation renewed each moment - 55:29) differs from Brahman's lila (divine play). World is Allah's ayah (sign - 3:190), not veil over reality."
      },
      {
        question: "What is the Islamic critique of saguna Brahman worship?",
        options: [
          "Accepts deity forms as valid",
          "Rejects all form-based devotion",
          "Only allows Vishnu worship",
          "Permits with tawhid adjustments"
        ],
        correctAnswer: "Rejects all form-based devotion",
        explanation: "Quran prohibits deity representations: *'Those you worship besides Allah cannot create...'* (16:20-21). Nirguna Brahman aligns somewhat with tawhid but saguna forms (Krishna/Shiva) constitute shirk (4:48). Allah's attributes (asma ul-husna) aren't separate beings but one essence."
      },
      {
        question: "How does Islamic prophetology reconcile with Hindu avatar cycles?",
        options: [
          "Accepts avatars as prophets",
          "Rejects cyclical manifestations",
          "Only validates Krishna",
          "Considers Buddha as last avatar"
        ],
        correctAnswer: "Rejects cyclical manifestations",
        explanation: "Islam teaches linear prophecy ending with Muhammad (33:40). Avatars' divine descent contradicts Quranic *'Nothing is like Him'* (42:11). Some scholars (e.g., Hamiduddin Farahi) suggested Hindu sages may have been regional warners (35:24) but their messages got distorted into incarnation theology."
      },
      {
        question: "What is the Islamic position on Hindu monastic orders?",
        options: [
          "Mandates sannyasa for all",
          "Permits temporary renunciation",
          "Rejects celibate monasticism",
          "Only allows female ascetics"
        ],
        correctAnswer: "Rejects celibate monasticism",
        explanation: "Quran states: *'Monasticism they invented...'* (57:27). Prophet said: *'No monasticism in Islam'* (Musnad Ahmad 14982). Contrasts Hindu sannyasa (Bhagavad Gita 5:3). Permits zuhd (asceticism) within society (Hadith - Tirmidhi 2374). Sufi tariqas aren't monastic but emphasize communal worship."
      },
      {
        question: "How does Islamic law view Hindu marriage customs?",
        options: [
          "Accepts kanyadaan fully",
          "Validates only love marriages",
          "Permits with Islamic conditions",
          "Rejects all Hindu ceremonies"
        ],
        correctAnswer: "Permits with Islamic conditions",
        explanation: "Non-idolatrous customs (mehndi, jaimala) are permissible if they don't contradict sharia. Key requirements: mutual consent (4:21), mahr (4:4), no caste restrictions (49:13). Prohibits: saptapadi around fire (5:90), deity invocations. Interfaith marriages: Muslim men may marry Hindu women (5:5) with conditions."
      },
      {
        question: "What is the Islamic view of the Bhagavad Gita's battlefield ethics?",
        options: [
          "Rejects all warfare",
          "Parallels just war principles",
          "Only accepts non-violence",
          "Considers it identical to jihad"
        ],
        correctAnswer: "Parallels just war principles",
        explanation: "Gita's kshatriya dharma (2:31-38) resembles Islamic combat ethics: no aggression (2:190), protect oppressed (4:75), avoid civilians (Hadith - Abu Dawud 2668). Differences: jihad requires state declaration; Gita permits war for caste duty. Islam emphasizes intent: *'Fight in Allah's cause...'* (4:76)."
      },
      {
        question: "How does Islamic theology interpret Hindu deity hierarchies?",
        options: [
          "As corrupted angelology",
          "As valid polytheism",
          "As cultural symbols only",
          "As jinn manifestations"
        ],
        correctAnswer: "As corrupted angelology",
        explanation: "Some scholars suggest devas (Indra, Agni) reflect distorted memories of angels (malaika - 35:1). Quran states jinn mislead humans (6:112), possibly explaining some deity worship. But all supernatural power ultimately belongs to Allah (40:62). Trimurti functions resemble but exceed angelic roles in Islam."
      },
      {
        question: "What is the Islamic perspective on Hindu death rituals?",
        options: [
          "Accepts shraddha ceremonies",
          "Permits only cremation",
          "Replaces with Islamic janazah",
          "Validates asthi visarjan"
        ],
        correctAnswer: "Replaces with Islamic janazah",
        explanation: "Islamic burial within 24 hours (Hadith - Abu Dawud 3156) contrasts Hindu cremation (Garuda Purana). Prohibits shraddha's pinda offerings (5:3). Permits non-shirk condolence customs. Soul's fate is sealed at death (23:99-100), no preta/bhuta states. Dua replaces tarpan rituals."
      },
      {
        question: "How does Islamic eschatology compare with Hindu kali yuga concepts?",
        options: [
          "Both predict moral decline",
          "Only Islam has final judgment",
          "Identical cyclical views",
          "Kali yuga equals Islamic golden age"
        ],
        correctAnswer: "Both predict moral decline",
        explanation: "Hadith describe Dajjal's fitna (Muslim 2934) resembling kali yuga's chaos (Bhagavata Purana 12.1). Differences: Islamic decline isn't cosmically mandated but results from sin (30:41). Judgment Day is final (69:13-18), not cycle's end. Mahdi's arrival (Abu Dawud 4282) parallels Kalki avatar but for tawhid."
      },
      {
        question: "What is the Islamic critique of bhakti's deity emotionalism?",
        options: [
          "Encourages identical devotion",
          "Permits only to Allah",
          "Rejects all emotional worship",
          "Only allows prophetic love"
        ],
        correctAnswer: "Permits only to Allah",
        explanation: "Islamic mahabbah (divine love) directs all passion to Allah: *'Those who believe are strongest in love for Allah'* (2:165). Contrasts Krishna bhakti's romantic imagery (Gita Govinda). Sufi poets (Rumi) expressed love within tawhid. Prohibits shrine-based ecstatic practices (5:90)."
      },
      {
        question: "How does Islamic art theology differ from Hindu iconography?",
        options: [
          "Both mandate deity images",
          "Islam prohibits all religious art",
          "Islamic aniconism contrasts murti puja",
          "Only calligraphy is allowed"
        ],
        correctAnswer: "Islamic aniconism contrasts murti puja",
        explanation: "Hadith prohibit images of living beings (Bukhari 5951), focusing on geometric/calligraphic art (Quran 2:144). Contrasts Hindu pratima worship (Yajur Veda 12.95). Mosques avoid imagery; temples center on vigrahas. Shared aesthetic principles but divergent theology of representation."
      },
      {
        question: "What is the Islamic position on Ayurvedic medicine?",
        options: [
          "Rejects entirely as shirk",
          "Permits physical treatments",
          "Only allows herbal remedies",
          "Mandates over modern medicine"
        ],
        correctAnswer: "Permits physical treatments",
        explanation: "Permissible if free from shirk elements (mantras/deity invocations). Prophet said: *'Allah has not made a disease without creating a cure'* (Bukhari 5678). Dosha theory is acceptable as observational science, not theology. Prohibits forbidden ingredients (alcohol - 5:90)."
      },
      {
        question: "How does Islamic theology view the concept of Ishvara?",
        options: [
          "As identical to Allah",
          "As valid personal god concept",
          "As shirk when multiple",
          "As angelic being"
        ],
        correctAnswer: "As shirk when multiple",
        explanation: "Nyaya school's Ishvara resembles Islamic tawhid but Hindu theology's multiplicity (Brahma-Vishnu-Shiva) conflicts with Quranic *'No god but He'* (2:163). Dvaita's Vishnu as supreme comes closest but still differs in attributes. Islam rejects philosophical theism equating all deity concepts."
      },
      {
        question: "What is the Islamic critique of jnana yoga's path?",
        options: [
          "Rejects all intellectual pursuit",
          "Accepts if combined with bhakti",
          "Permits within tawhid framework",
          "Mandates identical approach"
        ],
        correctAnswer: "Permits within tawhid framework",
        explanation: "Islam values ilm (knowledge - 58:11) but grounds it in revelation: *'Only those fear Allah who have knowledge'* (35:28). Contrasts jnana's reliance on personal realization (Upanishads). Kalam theology uses reason but submits to Quran/sunnah. Sufi ma'rifah (gnosis) differs from Vedantic jnana."
      },
      {
        question: "How does Islamic environmental ethics compare with Hindu dharma?",
        options: [
          "Both permit deforestation",
          "Islam balances use and conservation",
          "Only Hinduism protects nature",
          "Identical stewardship concepts"
        ],
        correctAnswer: "Islam balances use and conservation",
        explanation: "Quran permits resource use (67:15) with responsibility: *'Do not waste'* (7:31). Contrasts extreme ahimsa (Jainism) or sacred groves. Islamic hima (protected zones) parallel vana dharma. Prophet prohibited cutting fruit-bearing trees (Muslim 4743). Animals have rights (Hadith - Abu Dawud 2549)."
      },
      {
        question: "What is the Islamic view of Hindu caste-based occupations?",
        options: [
          "Mandates identical system",
          "Permits if voluntary",
          "Rejects hereditary restrictions",
          "Only accepts Brahmin roles"
        ],
        correctAnswer: "Rejects hereditary restrictions",
        explanation: "Prophet said: *'All occupations are lawful except what Islam prohibits'* (Bayhaqi). Bilal (ex-slave) became muadhin; Salman (Persian) was sahabi. Quran states: *'The most noble... is most righteous'* (49:13). Contrasts varnashrama dharma's birth-based duties (Bhagavad Gita 18:41-44)."
      },
      {
        question: "How does Islamic finance compare with Hindu economic dharma?",
        options: [
          "Both permit interest",
          "Only Islam prohibits gambling",
          "Zakat parallels danam but is obligatory",
          "Identical wealth distribution"
        ],
        correctAnswer: "Zakat parallels danam but is obligatory",
        explanation: "Zakat (2.5% wealth - Quran 9:60) resembles danam (charity) but is fixed, not voluntary. Prohibits riba (2:275) like Dharmashastras but more strictly. Islamic profit-sharing (mudarabah) parallels ancient guilds. Contrasts Hindu temple wealth accumulation vs Islamic waqf community benefits."
      },
      {
        question: "What is the Islamic position on Hindu musical traditions?",
        options: [
          "Prohibits all music",
          "Permits non-religious forms",
          "Only allows devotional bhajans",
          "Mandates identical qawwali"
        ],
        correctAnswer: "Permits non-religious forms",
        explanation: "Scholars differ on music; most permit non-promiscuous forms (Fatwa - Ibn Baz 3/423). Prohibits instruments used in worship (5:90). Qawwali differs from bhajans by avoiding deity praise. Carnatic/Hindustani music permissible if lyrics are Islamically appropriate. Contrasts Sikh kirtan's theological acceptance."
      },
      {
        question: "How does Islamic time theology differ from Hindu kalpa cycles?",
        options: [
          "Both have eternal time",
          "Islam has linear creation to judgment",
          "Identical yuga concepts",
          "Only Hinduism measures time"
        ],
        correctAnswer: "Islam has linear creation to judgment",
        explanation: "Quranic time is linear: creation (21:30), earthly test (67:2), resurrection (36:51-53). Contrasts kalpas' 4.32 billion-year cycles (Mahabharata 12.231). Islamic 'day' equals 50,000 years (70:4) metaphorically. Houris/jannah are eternal (44:51-57), not temporary svarga."
      },
      {
        question: "What is the Islamic critique of tantric practices?",
        options: [
          "Accepts all esoteric methods",
          "Rejects shirk and illicit elements",
          "Only allows left-hand path",
          "Mandates identical Sufi techniques"
        ],
        correctAnswer: "Rejects shirk and illicit elements",
        explanation: "Prohibits deity visualization (42:11), sexual rituals (17:32), and substance use (5:90). Sufi dhikr differs from tantric mantras by avoiding bija syllables. Permissible ruqya (healing) has strict conditions (Hadith - Bukhari 5735). Islam channels spiritual energy (barakah) through halal means only."
      },
      {
        question: "How does Islamic social justice compare with varna dharma?",
        options: [
          "Both enforce hereditary classes",
          "Islam establishes equality before law",
          "Only Hinduism has charity systems",
          "Identical mobility restrictions"
        ],
        correctAnswer: "Islam establishes equality before law",
        explanation: "Prophet said: *'No Arab has superiority over non-Arab...'* (Farewell Sermon). Contrasts Manusmriti's fixed varnas (1:87-91). Islamic justice examples: Bilal's emancipation, Umar's equal stipends. Zakat uplifts all poor (9:60), not caste-specific danam. Caliph Umar punished elite offenders (Tarikh al-Tabari)."
      },
      {
        question: "What is the Islamic view of Hindu cosmological models?",
        options: [
          "Accepts loka theory fully",
          "Rejects flat earth concepts",
          "Only validates Mount Meru",
          "Considers it identical to Quran"
        ],
        correctAnswer: "Rejects flat earth concepts",
        explanation: "Quran describes spherical earth (39:5) and expanding universe (51:47), contradicting Puranic flat earth/mandala models. Seven heavens (67:3) are metaphorical, not literal lokas. Scientific miracles in Quran align with modern cosmology, while Hindu models reflect ancient knowledge. Both agree on universe's divine origin."
      },
      {
        question: "How does Islamic spirituality address Hindu kundalini concepts?",
        options: [
          "Accepts chakra awakening",
          "Replaces with ruh (soul) purification",
          "Only allows base chakra work",
          "Mandates identical energy practices"
        ],
        correctAnswer: "Replaces with ruh (soul) purification",
        explanation: "Sufi lataif (subtle centers) differ from chakras by avoiding physical locations. Spiritual ascent through dhikr/muraqaba, not kundalini rising. Prophet's night journey (Isra 17:1) represents spiritual not energetic ascent. Prohibits practices involving shirk or forbidden acts (5:90)."
      },
      {
        question: "What is the Islamic position on Hindu temple donations?",
        options: [
          "Permits for goodwill",
          "Only allows to poor outside temples",
          "Prohibits all funding of shirk",
          "Mandates equal zakat distribution"
        ],
        correctAnswer: "Prohibits all funding of shirk",
        explanation: "Quran states: *'Do not cooperate in sin...'* (5:2). Donations supporting idolatry are forbidden. Permissible: helping poor Hindus through Islamic charities. Contrasts with dharmic obligation of temple danam. Waqf funds must avoid shirk activities (Fatwa - Ibn Uthaymin 2/293)."
      },
      {
        question: "How does Islamic theology interpret Hindu saint miracles?",
        options: [
          "As divine proof of their path",
          "As possible karamat of righteous people",
          "As always demonic deception",
          "As identical to prophetic miracles"
        ],
        correctAnswer: "As possible karamat of righteous people",
        explanation: "Allah may grant wonders to non-Muslims testing believers (Quran 2:258). But true karamat don't contradict tawhid (Hadith - Muslim 2262). Distinguish from sihr (magic - 2:102). Some Hindu saints may have been awliya (friends of Allah) despite theological differences, like Christian ascetics."
      },
      {
        question: "What is the Islamic critique of murti puja's theology?",
        options: [
          "Accepts it as symbolic worship",
          "Rejects all form-based devotion",
          "Only criticizes stone idols",
          "Permits with tawhid declaration"
        ],
        correctAnswer: "Rejects all form-based devotion",
        explanation: "Quran states: *'Do you worship what you carve?'* (37:95). Abraham rejected idol worship (6:74-79). Even 'symbolic' worship risks shirk (4:48). Allah's closeness (50:16) needs no physical媒介. Tawhid requires direct connection without imagery (2:115). Sufi visualization differs by avoiding physical forms."
      },
      {
        question: "How does Islamic da'wa approach Hindu concepts positively?",
        options: [
          "By rejecting all Hindu terms",
          "Using shared values as bridges",
          "Only quoting criticisms",
          "Mandating immediate shahada"
        ],
        correctAnswer: "Using shared values as bridges",
        explanation: "Prophet used common ground with Arabs (Hadith - Bukhari 3371). Examples: Brahman's transcendence introducing tawhid, karma's justice leading to Quranic accountability (99:7-8). Al-Biruni's methodology: understand then critique. Avoid mocking deities (6:108). Focus on shared prophets (35:24) and mercy (21:107)."
      }
    ],
    intermediate: [
      // Copy the first 10 questions from easy level
      // This is a temporary solution until proper intermediate questions are created
    ]
  }
}

// Add this line to copy questions to intermediate level if it doesn't exist
if (!hinduCategory.levels.intermediate || hinduCategory.levels.intermediate.length === 0) {
  hinduCategory.levels.intermediate = [...hinduCategory.levels.easy.slice(0, 10)]
}

export default hinduCategory