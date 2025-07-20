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
        explanation: "Islam acknowledges that Allah sent guidance to all nations, stating: *'To every people we sent a warner'* [Quran 35:24]. While Vedas/Upanishads aren't considered preserved scriptures like Torah/Injeel, they may contain remnants of original monotheistic teachings (Tawhid) before polytheistic additions."
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
        explanation: "The Upanishadic concept of Nirguna Brahman (formless ultimate reality) parallels Islamic Tawhid: *'Say: He is Allah, the One'* [Quran 112:1]. Both reject anthropomorphism [Bhagavad Gita 12:5; Quran 42:11]. Differences emerge in pantheistic interpretations of 'All is Brahman' vs. Quranic creator-creature distinction [Quran 25:2]."
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
        explanation: "Islam establishes equality, as the Prophet (PBUH) said: *'No Arab has superiority over non-Arab... except by piety'* [Prophet's Farewell Sermon]. The Quran states: *'We created you from male and female and made you peoples and tribes to know one another'* [Quran 49:13]. This contrasts with Manusmriti's birth-based varnas [Manusmriti 1:87-91]."
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
        explanation: "The Quranic concept of *'Sunnat Allah'* (Allah's unchanging ways) [Quran 33:62] resembles Vedic Rita (cosmic order). Both describe natural and spiritual laws governing existence [Rigveda 1.164.46; Quran 30:30]. A key difference is that Sunnah originates from Allah's will, while Rita is often presented as an impersonal cosmic principle."
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
        explanation: "Islam teaches: *'Whoever does an atom's weight of good will see it'* [Quran 99:7-8], affirming moral accountability for actions. While it shares the principle that deeds have consequences, Islam rejects rebirth [Quran 83:18-20] in favor of resurrection and a single earthly life [Quran 75:3-4]. Divine mercy [Quran 39:53] transcends strict karmic retribution."
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
        explanation: "Islamic *muraqaba* (mindfulness and contemplation of Allah) resembles *dhyana* (meditation), but with a Tawhid focus: *'Remember Allah with much remembrance'* [Quran 33:41]. Prophet Muhammad (PBUH) meditated in Hira cave before revelation [Bukhari 3]. This contrasts with idol worship [Quran 5:90] or cow sanctity [Bhagavad Gita 18:44 vs. Quran 22:36's sacrificial animals]."
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
        explanation: "Islamic theology, while acknowledging divine attributes (e.g., Creator, Preserver, Destroyer), strictly ascribes all divine functions to Allah alone, stating: *'No son did Allah beget... Nor is any like Him'* [Quran 112:3-4]. All creation, maintenance, and destruction originate solely from Allah [Quran 7:54, 30:11, 55:26-27]. While the Trimurti conceptualizes these roles, Islamic Tawhid asserts their singular, indivisible source, prohibiting the association of partners with God [Quran 4:48]."
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
        explanation: "Physical postures (asanas) without theological elements are permissible in Islam like any beneficial exercise. However, practices invoking deities (e.g., Surya Namaskar) conflict with Tawhid [Quran 4:48]. Breathing techniques must avoid Hindu mantras. The Prophet (PBUH) said: *'The strong believer is better and more beloved to Allah than the weak believer'* [Muslim 2664], encouraging physical well-being."
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
        explanation: "While Islam permits defensive war [Quran 2:190], it shares the spirit of *ahimsa* (non-violence) in its emphasis on mercy (*rahma*): *'Allah is Kind and loves kindness'* [Muslim 2593]. Islam prohibits animal cruelty [Hadith - Abu Dawud 2549]. Differences exist as Islam allows meat consumption [Quran 5:1] and just retribution [Quran 2:178]."
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
        explanation: "The Gita's *nishkama karma* (action without attachment to results) [Bhagavad Gita 2:47] resembles Islamic sincerity (*ikhlas*), which instructs: *'Worship Allah as if you see Him'* [Muslim 8]. However, Islamic actions ultimately serve Allah alone [Quran 98:5], without merging with a supreme being. The Prophet (PBUH) balanced material and spiritual: *'Do for this world as if living forever, and do for the Hereafter as if you will die tomorrow'* [Ibn Majah 4100]."
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
        explanation: "The Quran states: *'Nothing is like Him'* [Quran 42:11], firmly rejecting the concept of divine incarnation. This contrasts Vishnu's avatars [Bhagavata Purana]. Islam views prophets (like Jesus in Islam) as fully human messengers [Quran 3:79, 3:59], not God incarnate. Allah *'begets not nor is begotten'* [Quran 112:3]."
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
        explanation: "Islamic *zakat* (obligatory charity, 2.5% of wealth) [Quran 9:60] parallels the spirit of generosity seen in harvest festivals like Pongal. This practice of giving shares a common ethical ground with the charitable aspects of some Hindu festivals. Eid al-Fitr in Islam also shares a communal feasting aspect, but with *takbir* (glorification of Allah) instead of deity thanks."
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
        explanation: "The Quran describes a linear creation in six *ayyaam* (periods) [Quran 41:9-12], contrasting with Puranic cycles of creation and destruction (kalpas). Both traditions, however, mention the primacy of water in creation [Rigveda 10.129; Quran 21:30], but the Quran emphasizes Allah's effortless command *'Be, and it is'* [Quran 2:117] versus Brahma's labor in some Hindu texts [Manusmriti 1:5-16]."
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
        explanation: "Islam promises eternal paradise (*Jannah*) with Allah's presence [Quran 9:72], but it maintains a clear distinction between the Creator and creation, with no ontological merging: *'Everyone thereon will pass away; there remains the Face of your Lord...'* [Quran 55:26-27]. This contrasts with Advaita Vedanta's concept of *moksha* or *nirvana* as merging with Brahman [Mandukya Upanishad 7]. The soul in Islam remains a distinct entity, worshipping Allah [Quran 19:93]."
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
        explanation: "Both *dharma* and *Sharia* prescribe righteous living and a way of life guided by divine principles, but their foundations differ. Sanatana Dharma derives from *smritis* and *shrutis*, while Sharia comes from the Quran and Sunnah. Islam presents a fixed moral law [Quran 5:3], contrasting with Hinduism's often contextual dharma [Bhagavad Gita 2:31]. Both encompass worship, ethics, and law."
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
        explanation: "The Quran states: *'When death comes to one of you... then after that resurrection'* [Quran 23:99-100]. Islam teaches a single earthly life as a test [Quran 67:2], which contrasts with the karma-driven cycle of rebirths (*samsara*). Paradise and hell are final states in Islam [Quran 43:74-77]. Islamic accountability is individual [Quran 6:164], not requiring multiple lives to burn off karma."
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
        explanation: "Islamic *dua* (supplication) [Quran 40:60] and *dhikr* (remembrance of Allah) [Quran 33:41] resemble *bhakti* but direct all love and worship to Allah alone [Quran 2:165]. This contrasts with deity-specific *pujas*. The Prophet's (PBUH) emotional night prayers [Bukhari 1121] demonstrate profound devotion within a strict Tawhid framework."
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
        explanation: "Patanjali's Yoga Sutra's *yamas* (ethical restraints) parallel Islamic morals, such as truth (*satya* vs. *sidq* - Quran 9:119), non-stealing (*asteya* vs. prohibition of theft - Quran 2:188), and restraint in desires. However, the *niyamas'* deity focus conflicts with Tawhid. Chanakya's pragmatism, for example, often contradicts Islamic reliance and trust in Allah (*tawakkul*) [Quran 65:3]."
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
        explanation: "Islamic *salah* involves prescribed movements and recitations [Bukhari 794] performed without idols or *murtis* [Quran 5:90]. *Puja*, in contrast, often includes offerings and *pranama* (prostrations) to deities. While both have purification rituals (*wudu* vs. *snan*), Muslim prayer focuses on direct submission to Allah alone [Quran 1:5]. The *Qibla* direction [Quran 2:144] in Islam differs from temple deity orientations."
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
        explanation: "While Sufi concepts like *wahdat al-wujud* (unity of existence) share conceptual parallels with Advaita, mainstream Islam rejects the ontological unity of creation with the Creator [Quran 112:4]. The Quranic phrase *'He is with you wherever you are'* [Quran 57:4] describes Allah's knowledge and presence, not an essential merging. Dvaita's creator-creation distinction aligns closer with Islamic theology but still maintains fundamental differences."
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
        explanation: "Repetitive *dhikr* (remembrance of Allah) like 'SubhanAllah' or 'Alhamdulillah' [Muslim 680] resembles *japa* (mantra repetition) in its method but affirms Tawhid, focusing solely on the glorification of Allah. The Prophet (PBUH) stated: *'The best remembrance is La ilaha illallah'* [Tirmidhi 3383]. This contrasts with *om* mantra's impersonal focus, as Islamic *dhikr* uses Arabic phrases affirming God's oneness."
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
        explanation: "Islamic *tawakkul* (trust in Allah) combines reliance on God with diligent effort, as the Prophet (PBUH) advised: *'Trust in Allah but tie your camel'* [Hadith - Tirmidhi 2517]. This contrasts with potentially fatalistic interpretations of *karma yoga*. Islam balances *Qadr* (divine decree) [Quran 57:22] with human responsibility [Quran 2:286]. Surrender in Islam is active engagement, not passive acceptance."
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
        explanation: "Astrology is prohibited in Islam as a form of *shirk* (associating partners with God) because it attributes influence over fate to celestial bodies, which is solely Allah's domain: *'Whoever learns astrology has learnt a branch of magic'* [Abu Dawud 3905]. Planets obey Allah [Quran 7:54], they do not influence human destinies. Permissible astronomy for practical purposes (e.g., moon phases for Ramadan) [Quran 2:189] differs from horoscopes and fortune-telling."
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
        explanation: "The Sufi spiritual mentoring relationship between a *murshid* (guide) and *murid* (disciple) resembles the Hindu guru-disciple tradition. However, *murshids* do not possess divine status [Quran 3:79], and their role is to teach Quran and Sunnah, not personal revelations. The Prophet (PBUH) said: *'Scholars are the inheritors of the prophets'* [Abu Dawud 3641], emphasizing knowledge transfer for spiritual growth rather than self-realization techniques that might involve deification."
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
        explanation: "Islamic *Qurbani* (animal sacrifice) during Eid al-Adha commemorates Prophet Ibrahim's obedience to Allah [Quran 37:102-107], not offerings to deities like Hindu *yajnas*. Islam prohibits offering blood to altars [Quran 22:37], emphasizing that *'Their meat will not reach Allah... but your piety does'*. While both traditions share ancient Abrahamic roots, Islam rejects fire rituals and focuses on charity with the meat [Quran 22:36; Rigveda 1.164.50]."
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
        explanation: "Islamic architecture utilizes geometry and calligraphy [Quran 2:144], avoiding imagery of living beings due to the prohibition of idol worship. There are shared architectural elements like domes (e.g., Quba Mosque and Tirumala Temple) and minarets (possibly inspired by *gopurams*). However, a key difference is that mosques meticulously avoid *murti garbhagriha* (sanctums for idols), maintaining strict Tawhid principles in design."
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
        explanation: "Islamic fasting (e.g., Ramadan) follows fixed dates of the lunar Hijri calendar [Quran 2:185], while Hindu *vratas* (fasts) vary in timing (e.g., Ekadashi, Purnima). Muslims abstain from food and drink from dawn to dusk [Quran 2:187]; some Hindu fasts allow specific foods. The intent also differs: Ramadan aims for *taqwa* (God-consciousness) [Quran 2:183], while *vratas* are often for deity boons. Both emphasize charity and self-discipline [Bukhari 1903; Skanda Purana]."
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
        explanation: "Central Asian Maturidi scholars, such as al-Biruni and Shah Waliullah, systematically engaged with and compared Hindu concepts. Al-Biruni's seminal work 'Kitab fi Tahqiq ma li l-Hind' (often called 'India', 1030 CE) provided a detailed analysis of Vedanta and other Hindu philosophies. This contrasts with more literalist schools like Ahl al-Hadith. Sufis, like Dara Shikoh, also contributed by translating Upanishads."
      },
      {
        question: "Which foundational ethical principle is shared by both Islam and Hinduism?",
        options: [
          "Karma",
          "Rebirth",
          "Truthfulness",
          "Idol worship"
        ],
        correctAnswer: "Truthfulness",
        explanation: "Both Islam and Hinduism emphasize the importance of truthfulness (صدق - *sidq* in Islam, *satya* in Hinduism). The Quran states: *'O you who have believed, be mindful of Allah and be with those who are truthful.'* [Quran 9:119]. Similarly, the Mahabharata declares: *'Truth is the highest dharma.'* [Mahabharata, Shanti Parva 162.24]. While their theological frameworks differ, honesty is a universal virtue enjoined by both."
      },
      {
        question: "What shared concept emphasizes the importance of human accountability for actions?",
        options: [
          "Nirvana",
          "Resurrection",
          "Moral Causation",
          "Pantheism"
        ],
        correctAnswer: "Moral Causation",
        explanation: "Both Islam and Hinduism uphold a principle of moral causation, where actions have consequences. Islam teaches: *'Whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it.'* [Quran 99:7-8]. This parallels the Hindu concept of *karma*, where deeds determine future states. Though Islam rejects rebirth and affirms a singular accountability in the afterlife [Quran 75:3-4], both faiths stress that human actions are not without divine reckoning."
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
        explanation: "The Quran states: *'We created not heaven and earth... except in truth'* [Quran 44:38-39], firmly affirming the reality and purposeful nature of creation. This contrasts with Advaita Vedanta's *maya* (illusion) theory, which often posits the world as ultimately unreal. While Islam acknowledges the transient nature of this life, it views the world as Allah's *ayah* (sign) [Quran 3:190], a real manifestation of His power and wisdom, not a veil over reality."
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
        explanation: "Islamic theology, while affirming Allah's attributes (*Asma ul-Husna*), strictly prohibits deity representations: *'Those you worship besides Allah cannot create...'* [Quran 16:20-21]. Nirguna Brahman (formless ultimate reality) aligns somewhat with Tawhid's formlessness, but *Saguna* forms (e.g., Krishna/Shiva) constitute *shirk* (associating partners) [Quran 4:48], as Allah's attributes are not separate beings but belong to His singular essence and are not to be personified."
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
        explanation: "Islam teaches a linear history of prophecy culminating with Muhammad (PBUH) as the final prophet [Quran 33:40]. The concept of avatars' divine descent directly contradicts the Quranic tenet: *'Nothing is like Him'* [Quran 42:11], which asserts God's absolute transcendence and dissimilarity from creation. While some scholars suggested Hindu sages may have been regional warners [Quran 35:24], their messages were distorted into incarnation theology, which is rejected in Islam."
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
        explanation: "The Quran states: *'Monasticism they invented... We did not prescribe it for them'* [Quran 57:27]. The Prophet (PBUH) explicitly said: *'There is no monasticism in Islam'* [Musnad Ahmad 14982]. This contrasts with Hindu *sannyasa* (complete renunciation of worldly life) [Bhagavad Gita 5:3]. Islam permits *zuhd* (asceticism or detachment from worldly desires) but within the bounds of society and family life [Hadith - Tirmidhi 2374]. Sufi *tariqas* (orders) are not monastic but emphasize communal worship and spiritual discipline."
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
        explanation: "Non-idolatrous customs such as *mehndi* (henna) or *jaimala* (garland exchange) are permissible in Islam if they do not contradict *Sharia*. Key Islamic requirements for marriage include mutual consent [Quran 4:21], *mahr* (dowry) [Quran 4:4], and no caste restrictions [Quran 49:13]. Practices like *saptapadi* (seven steps around fire) [Quran 5:90] or deity invocations are prohibited. Interfaith marriages: Muslim men may marry Hindu women [Quran 5:5] under specific conditions related to the woman's monotheistic belief, though most scholars agree that 'people of the book' refers to Christians and Jews, not Hindus."
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
        explanation: "The Gita's *kshatriya dharma* (duty of a warrior) [Bhagavad Gita 2:31-38] shares parallels with Islamic principles of just war. Islam forbids aggression [Quran 2:190], mandates protecting the oppressed [Quran 4:75], and avoiding harm to non-combatants [Hadith - Abu Dawud 2668]. Differences include that *jihad* (struggle in the path of Allah) requires state declaration and adherence to strict ethical guidelines, while the Gita permits war for caste duty. Islam emphasizes the intent: *'Fight in Allah's cause those who fight you, but do not transgress limits'* [Quran 2:190]."
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
        explanation: "Some Islamic scholars suggest that concepts of *devas* (e.g., Indra, Agni) might reflect distorted memories of angelic beings (*malaika*) [Quran 35:1]. The Quran also explains that *jinn* can mislead humans [Quran 6:112], potentially accounting for certain forms of deity worship. However, Islam firmly asserts that all supernatural power ultimately belongs to Allah alone [Quran 40:62]. The functions attributed to the Trimurti, while resembling divine roles, exceed angelic capacities in Islam and are ultimately ascribed solely to Allah."
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
        explanation: "Islamic burial, typically performed within 24 hours of death [Hadith - Abu Dawud 3156], contrasts with Hindu cremation practices [Garuda Purana]. Islam prohibits practices like *shraddha*'s *pinda* offerings [Quran 5:3] as they can be seen as associating partners with God's ultimate authority over the deceased. While permissible to offer condolences to non-Muslims, the soul's fate is sealed at death in Islam [Quran 23:99-100], and rituals like *dua* (supplication) for the deceased replace *tarpan* rituals."
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
        explanation: "Both traditions predict periods of moral decline. Islamic narrations describe the *fitna* (trials) leading to the appearance of Dajjal (Anti-Christ) [Muslim 2934], which resonates with the chaos and moral degradation prophesied for the *Kali Yuga* [Bhagavata Purana 12.1]. However, a key difference is that in Islam, this decline is not cosmically mandated but results from human sin [Quran 30:41]. Judgment Day in Islam is a final event [Quran 69:13-18], not the end of a cycle. The arrival of the Mahdi [Abu Dawud 4282] in Islam parallels the Kalki avatar in Hinduism, but for the restoration of Tawhid and justice."
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
        explanation: "Islamic *mahabbah* (divine love) directs all passion, emotion, and devotion exclusively to Allah: *'Those who believe are strongest in love for Allah'* [Quran 2:165]. This contrasts with the romantic or anthropomorphic imagery often associated with Krishna *bhakti* [Gita Govinda]. Sufi poets like Rumi expressed profound love, but strictly within the framework of Tawhid. Islam prohibits ecstatic practices or rituals at shrines that may lead to *shirk* [Quran 5:90]."
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
        explanation: "Islamic art theology emphasizes *aniconism*, generally prohibiting the depiction of living beings in religious contexts [Hadith - Bukhari 5951], focusing instead on geometric patterns, arabesques, and calligraphy (reflecting Quranic verses) [Quran 2:144]. This stands in stark contrast to Hindu *pratima* worship (iconography) [Yajur Veda 12.95]. While both traditions may share aesthetic principles in secular art, mosques meticulously avoid *murti* (idol) imagery, whereas temples are centered on *vigrahas* (deity images), reflecting divergent theological approaches to divine representation."
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
        explanation: "Ayurvedic treatments are permissible in Islam if they are free from elements of *shirk* (e.g., mantras invoking deities) and illicit ingredients. The Prophet (PBUH) stated: *'Allah has not made a disease without creating a cure for it'* [Bukhari 5678], encouraging seeking medical treatment. The *dosha* theory can be viewed as an observational scientific framework, not a theological one. However, practices involving forbidden ingredients like alcohol [Quran 5:90] or those with overtly polytheistic rituals are not permitted."
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
        explanation: "While the Nyaya school's concept of Ishvara (a singular, supreme God) can appear to resemble Islamic Tawhid, the multiplicity of deities in the broader Hindu theological framework (e.g., Brahma-Vishnu-Shiva) fundamentally conflicts with the Quranic declaration: *'No god but He'* [Quran 2:163]. Islam rejects any philosophical theism that equates or posits multiple co-equal divine concepts, asserting Allah's absolute oneness and uniqueness [Quran 112:1-4]."
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
        explanation: "Islam highly values *ilm* (knowledge) and intellectual pursuit [Quran 58:11] but grounds it in divine revelation: *'Only those fear Allah, from among His servants, who have knowledge'* [Quran 35:28]. This contrasts with *jnana yoga's* reliance on personal realization or intellectual discernment of the self's unity with Brahman [Upanishads]. While Islamic *Kalam* (theology) uses reason, it always submits to the Quran and Sunnah. Sufi *ma'rifah* (gnosis) is a deeper understanding of Allah but differs from Vedantic *jnana* in its adherence to Tawhid and rejection of ontological merging."
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
        explanation: "Islam permits the responsible use of natural resources [Quran 67:15] with a strong emphasis on avoiding waste and exploitation: *'Do not waste'* [Quran 7:31]. This balances human needs with conservation, differing from some extreme forms of *ahimsa* (non-harm) or sacred groves in Hinduism. Islamic practices like *hima* (protected zones) parallel ancient conservation efforts. The Prophet (PBUH) prohibited cutting fruit-bearing trees during war [Muslim 4743], and animals are recognized as having rights [Hadith - Abu Dawud 2549]. Both traditions underscore human stewardship of the earth as a divine trust."
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
        explanation: "Islam fundamentally rejects hereditary restrictions on occupations. The Prophet (PBUH) stated: *'All occupations are lawful except what Islam prohibits'* [Bayhaqi]. Islamic history provides examples of social mobility based on merit and piety, such as Bilal, an emancipated slave, becoming the first *muadhin* (caller to prayer), and Salman, a Persian, being a revered companion. The Quran emphasizes that *'The most noble... in the sight of Allah is the most righteous'* [Quran 49:13], directly contrasting the birth-based duties of *varnashrama dharma* [Bhagavad Gita 18:41-44]."
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
        explanation: "Islamic *Zakat* (obligatory annual charity, typically 2.5% of wealth) [Quran 9:60] shares a common ethical goal with Hindu *danam* (voluntary charity), but Zakat is a fixed religious obligation. Islam strictly prohibits *riba* (interest) [Quran 2:275], a stance also found in some Dharmashastras but more rigorously applied in Islamic law. Islamic principles like *mudarabah* (profit-sharing partnerships) reflect ancient ethical trade practices. Differences arise in the accumulation of wealth by temples versus Islamic *waqf* (endowments) primarily for community benefits."
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
        explanation: "Islamic scholars have diverse opinions on music, but many permit non-promiscuous forms of music [Fatwa - Ibn Baz 3/423]. However, instruments used in worship that could lead to *shirk* are prohibited [Quran 5:90]. While *Qawwali* (a form of Sufi devotional music) exists in Islamic culture, it differs from Hindu *bhajans* by avoiding deity praise. Carnatic or Hindustani music, if its lyrics are Islamically appropriate and not used for illicit purposes, can be permissible. This contrasts with the theological acceptance of music like Sikh *kirtan*."
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
        explanation: "Islamic time is fundamentally linear, encompassing creation [Quran 21:30], an earthly test [Quran 67:2], and a definitive resurrection and final judgment [Quran 36:51-53]. This contrasts with Hindu *kalpa* cycles, which describe vast, recurring periods of creation and destruction lasting billions of years [Mahabharata 12.231]. While the Quran mentions a 'day' with Allah can be equivalent to 50,000 years [Quran 70:4], this is metaphorical, not indicative of cyclical time. Islamic concepts of Paradise (*Jannah*) and Hell are eternal [Quran 44:51-57], not temporary realms before another cycle."
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
        explanation: "Islam prohibits Tantric practices that involve *shirk* (e.g., deity visualization) [Quran 42:11], illicit sexual rituals [Quran 17:32], or forbidden substances [Quran 5:90]. While Sufi *dhikr* and contemplative practices aim for spiritual purification, they differ from Tantric mantras and rituals by avoiding *bija* syllables and energy work that contradicts Tawhid. Permissible *ruqya* (healing through Quranic recitation and supplication) has strict conditions [Hadith - Bukhari 5735], and Islam channels spiritual energy (*barakah*) exclusively through permissible means."
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
        explanation: "Islam fundamentally establishes equality before the law, as articulated by the Prophet (PBUH): *'No Arab has superiority over non-Arab...'* [Farewell Sermon]. This directly contrasts with Manusmriti's fixed, birth-based *varnas* (castes) [Manusmriti 1:87-91]. Islamic justice examples include the emancipation of slaves like Bilal and the Caliph Umar's equitable distribution of stipends. Islamic *Zakat* aims to uplift all poor regardless of background [Quran 9:60], unlike caste-specific *danam*. Islamic law holds all individuals accountable regardless of social status [Tarikh al-Tabari]."
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
        explanation: "The Quran describes a spherical earth [Quran 39:5] and an expanding universe [Quran 51:47], which contradicts Puranic flat earth or mandala models. The concept of 'seven heavens' in Islam [Quran 67:3] is metaphorical for multiple levels of existence, not literal *lokas* (planes of existence). While both traditions agree on the universe's divine origin, Islamic cosmology, particularly in its scientific interpretations, aligns with modern scientific understanding, whereas Hindu models often reflect ancient geographical and philosophical views."
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
        explanation: "Islamic spirituality, particularly in Sufism, focuses on the purification of the *ruh* (soul) and engagement with *lataif* (subtle centers), which differ from *chakras* by avoiding fixed physical locations. Spiritual ascent is achieved through *dhikr* (remembrance of Allah) and *muraqaba* (contemplation), not through *kundalini* rising. The Prophet's (PBUH) Night Journey (*Isra* and *Mi'raj*) [Quran 17:1] represents a spiritual ascent to divine presence, not an energetic one. Practices involving *shirk* or forbidden acts [Quran 5:90] are explicitly prohibited in Islam."
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
        explanation: "Islam strictly prohibits any act that supports *shirk* (associating partners with God), including financial contributions to institutions where idolatry is practiced [Quran 5:2]. Donations must be for permissible causes. While helping the poor regardless of faith is encouraged in Islam, directly funding temples where idol worship occurs is considered forbidden. Islamic *waqf* (endowments) and *Zakat* funds must be used for purposes that align with Islamic principles and primarily benefit the Muslim community or those in need through permissible means [Fatwa - Ibn Uthaymin 2/293]."
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
        explanation: "In Islamic theology, Allah may grant *karamat* (wonders or divine favors) to righteous individuals (*awliya* - friends of Allah), regardless of their religious affiliation, as a test for believers [Quran 2:258]. However, true *karamat* do not contradict Tawhid [Hadith - Muslim 2262] and are distinct from prophetic miracles (*mu'jizat*), which serve as proof of prophethood. Miraculous occurrences are also distinguished from *sihr* (magic) [Quran 2:102]. Some Hindu saints may have indeed been virtuous individuals whose wonders were a manifestation of Allah's power, even amidst theological differences."
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
        explanation: "Islam unequivocally rejects *murti puja* (idol worship) and all form-based devotion, considering it a severe form of *shirk*. The Quran records Prophet Abraham's rejection of idols: *'Do you worship what you carve?'* [Quran 37:95]. Even if intended as symbolic, such practices are seen as potentially leading to attributing divine qualities to creation [Quran 4:48]. Allah's closeness (*'We are closer to him than his jugular vein'*) [Quran 50:16] emphasizes a direct, unmediated connection without any physical representation or intermediary. Islamic Tawhid requires worship to be directed solely to Allah, who is formless and beyond human comprehension [Quran 112:1-4]."
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
        explanation: "Islamic *da'wa* (invitation to Islam) emphasizes using shared values and common ground as bridges for communication, following the example of the Prophet (PBUH) who engaged with people by highlighting universal truths [Hadith - Bukhari 3371]. This involves acknowledging ethical principles like truthfulness (from *karma*'s justice leading to Quranic accountability [Quran 99:7-8]) and recognizing the possibility of earlier divine warners [Quran 35:24]. Scholars like al-Biruni exemplified this methodology: understanding before offering critique. The approach prioritizes wisdom, good counsel, and avoiding mockery of others' deities [Quran 6:108], focusing on the ultimate message of Tawhid, mercy [Quran 21:107], and the shared human quest for truth."
      },
      {
        question: "How does the concept of divine omnipresence manifest similarly in Islamic and Hindu thought?",
        options: [
          "Through physical idols",
          "Through divine incarnation",
          "As Allah's knowledge encompassing all",
          "As a merging of individual souls with God"
        ],
        correctAnswer: "As Allah's knowledge encompassing all",
        explanation: "In Islam, Allah's omnipresence is understood primarily through His infinite knowledge, power, and witnessing, as stated: *'And He is with you wherever you are; and Allah is Seeing of what you do.'* [Quran 57:4]. This resonates with certain Hindu philosophical schools (e.g., in the Upanishads) which describe Brahman as an all-pervading, unmanifest reality that encompasses everything. While Islam maintains a clear distinction between Creator and creation and rejects pantheistic interpretations, both traditions emphasize a pervasive divine presence that governs existence [Upanishads, e.g., Mundaka Upanishad 2.2.7]."
      },
      {
        question: "What commonality exists in the emphasis on spiritual purity and inner cleansing in both faiths?",
        options: [
          "Ablution for idol worship",
          "Celibacy for spiritual advancement",
          "Heart purification and remembrance of God",
          "Ritualistic bathing only"
        ],
        correctAnswer: "Heart purification and remembrance of God",
        explanation: "Both Islam and Hinduism emphasize inner purification. In Islam, the concept of *tazkiyah al-nafs* (purification of the soul) involves freeing the heart from spiritual ailments through remembrance (*dhikr*) and reflection [Quran 33:41]. Similarly, Hindu practices like *yoga* and *bhakti* aim for inner cleansing and a connection with the divine through meditation (*dhyana*) and devotion. The focus is on purifying the heart as the seat of faith and spiritual insight, rather than mere outward ritual [Bhagavad Gita 18:62; Quran 2:165]."
      },
      {
        question: "How do both Islam and certain Hindu philosophies view the ultimate dependence of creation on a singular divine source?",
        options: [
          "All existence is an illusion",
          "The universe is self-sustaining",
          "Existence originates from and relies on one supreme reality",
          "Multiple gods created different parts of the universe"
        ],
        correctAnswer: "Existence originates from and relies on one supreme reality",
        explanation: "Islam unequivocally states that *'Allah is the Creator of all things, and He is over all things a Disposer of affairs.'* [Quran 39:62]. This absolute dependence of all creation on a singular divine source is a core tenet of Tawhid. While Hinduism has diverse schools, the Upanishadic concept of Brahman as the ultimate, singular reality from which all existence emanates and to which it returns, shares this foundational idea of a singular source of being [Chandogya Upanishad 6.2.1]. Both traditions, despite their differences in defining this ultimate reality, point to a universe fundamentally contingent upon a single, supreme power."
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
