import type { QuizCategory } from "@/types/quiz"

const shirkCategory: QuizCategory = {
  id: "shirk",
  title: "Shirk",
  description: "Associating partners with Allah: its definition, types (major, minor, hidden), dangers, and how to avoid it according to the Quran and Sunnah",
  icon: "AlertTriangle",
  levels: {
    easy: [
      {
        question: "What is the Arabic term for associating partners with Allah?",
        options: ["Kufr", "Shirk", "Nifaq", "Bid'ah"],
        correctAnswer: "Shirk",
        explanation: "Shirk means ascribing a partner or rival to Allah in His Lordship, worship, or Names and Attributes.",
        references: "Surah An-Nisa 4:48; IslamQA"
      },
      {
        question: "What is the greatest sin in Islam?",
        options: ["Murder", "Shirk", "Lying", "Theft"],
        correctAnswer: "Shirk",
        explanation: "Allah does not forgive shirk if one dies upon it without repentance, while He may forgive other sins.",
        references: "Surah An-Nisa 4:48"
      },
      {
        question: "Does Allah forgive major shirk if a person dies without repenting from it?",
        options: ["Yes, always", "No, He does not forgive it", "Only if the person was a scholar", "Only on the Day of Judgment"],
        correctAnswer: "No, He does not forgive it",
        explanation: "Allah explicitly states that He does not forgive that partners be associated with Him, but may forgive anything less than that for whom He wills.",
        references: "Surah An-Nisa 4:48 and 4:116"
      },
      {
        question: "What is the opposite of Tawhid?",
        options: ["Iman", "Shirk", "Ihsan", "Taqwa"],
        correctAnswer: "Shirk",
        explanation: "Tawhid is the pure Oneness of Allah; shirk is its direct opposite — associating partners with Him.",
        references: "Surah Al-Ikhlas 112:1-4"
      },
      {
        question: "How many main types of shirk do scholars commonly divide it into?",
        options: ["One", "Two (major and minor)", "Four", "Five"],
        correctAnswer: "Two (major and minor)",
        explanation: "Scholars primarily divide shirk into major shirk (shirk akbar) which expels from Islam, and minor shirk (shirk asghar) which does not.",
        references: "IslamQA: What is Shirk and its types?"
      },
      {
        question: "What is major shirk (shirk akbar)?",
        options: ["Showing off in prayer", "Associating partners with Allah in a way that takes one out of Islam", "Swearing by one's father", "Wearing a ring for beauty"],
        correctAnswer: "Associating partners with Allah in a way that takes one out of Islam",
        explanation: "Major shirk includes worshipping others besides Allah, calling upon the dead, or believing someone shares in Allah's unique rights.",
        references: "IslamQA; Surah Al-Ma'idah 5:72"
      },
      {
        question: "What is minor shirk (shirk asghar)?",
        options: ["Worshipping idols", "Actions described as shirk in the texts that do not expel from Islam, such as showing off", "Denying the Quran", "Rejecting the Prophets"],
        correctAnswer: "Actions described as shirk in the texts that do not expel from Islam, such as showing off",
        explanation: "Minor shirk includes riya (showing off), swearing by other than Allah, and certain superstitious practices; it diminishes Tawhid but does not remove one from Islam.",
        references: "IslamQA; Hadith on riya"
      },
      {
        question: "What did the Prophet ﷺ say he feared for his ummah more than the Dajjal?",
        options: ["Poverty", "Hidden shirk (riya)", "War", "Natural disasters"],
        correctAnswer: "Hidden shirk (riya)",
        explanation: "The Prophet ﷺ said he feared for his ummah the hidden shirk more than the Dajjal, referring to showing off in worship.",
        references: "Musnad Ahmad"
      },
      {
        question: "What is riya?",
        options: ["Sincerity in worship", "Showing off in acts of worship to gain praise from people", "Fasting in secret", "Giving charity anonymously"],
        correctAnswer: "Showing off in acts of worship to gain praise from people",
        explanation: "Riya is performing deeds of worship so that people will see and praise them, rather than purely for Allah; it is a form of minor/hidden shirk.",
        references: "Surah Al-Kahf 18:110; Hadith"
      },
      {
        question: "Is swearing by other than Allah permitted?",
        options: ["Yes, always", "No, it is a form of shirk", "Only by the Prophet ﷺ", "Only by one's parents"],
        correctAnswer: "No, it is a form of shirk",
        explanation: "The Prophet ﷺ said: 'Whoever swears by other than Allah has committed shirk.' It is generally classified as minor shirk.",
        references: "Sunan Abu Dawud; Musnad Ahmad"
      },
      {
        question: "What should a Muslim say instead of 'What Allah wills and so-and-so wills'?",
        options: ["What Allah wills and so-and-so wills (same)", "What Allah alone wills, then what so-and-so wills", "Whatever happens", "Nothing"],
        correctAnswer: "What Allah alone wills, then what so-and-so wills",
        explanation: "The Prophet ﷺ corrected the phrase that equates others with Allah and taught to say 'What Allah wills, then what so-and-so wills.'",
        references: "Sunan Abu Dawud"
      },
      {
        question: "What is the fate of one who dies upon major shirk without repentance?",
        options: ["He will enter Paradise after purification", "Paradise is forbidden for him and the Fire is his abode", "He will be forgiven automatically", "Only Prophets decide"],
        correctAnswer: "Paradise is forbidden for him and the Fire is his abode",
        explanation: "Allah says that whoever associates partners with Him, Paradise is forbidden for him and his abode is the Fire.",
        references: "Surah Al-Ma'idah 5:72"
      },
      {
        question: "Does merely uttering 'La ilaha illallah' protect from shirk if one still worships others?",
        options: ["Yes, the words alone are enough", "No, the conditions of the Shahadah must be fulfilled, including sincerity and rejecting other deities", "Only if said in Arabic", "Only on Fridays"],
        correctAnswer: "No, the conditions of the Shahadah must be fulfilled, including sincerity and rejecting other deities",
        explanation: "The Shahadah requires knowledge, certainty, sincerity, truthfulness, love, submission, acceptance, and rejection of all that is worshipped besides Allah.",
        references: "Classical conditions of La ilaha illallah"
      },
      {
        question: "What is an example of major shirk in worship (Uluhiyyah)?",
        options: ["Praying to Allah alone", "Calling upon a deceased saint for help", "Reading Quran", "Giving zakat"],
        correctAnswer: "Calling upon a deceased saint for help",
        explanation: "Directing dua, seeking help, or any act of worship to anyone other than Allah is major shirk.",
        references: "Surah Al-Jinn 72:18-20; IslamQA"
      },
      {
        question: "What is an example of shirk in Lordship (Rububiyyah)?",
        options: ["Believing Allah is the only Creator", "Believing that someone else creates, gives life, or controls the universe along with Allah", "Affirming Allah's Names", "Praying five times a day"],
        correctAnswer: "Believing that someone else creates, gives life, or controls the universe along with Allah",
        explanation: "Shirk in Rububiyyah is ascribing to others the actions that belong only to Allah: creating, sustaining, giving life and death, and controlling the universe.",
        references: "IslamQA; classical Aqeedah texts"
      },
      {
        question: "What is an example of shirk in Names and Attributes?",
        options: ["Calling Allah by His revealed Names", "Giving Allah's unique Names or Attributes to created beings, or likening Allah to His creation", "Reciting Surah Al-Ikhlas", "Saying SubhanAllah"],
        correctAnswer: "Giving Allah's unique Names or Attributes to created beings, or likening Allah to His creation",
        explanation: "Shirk in Asma wa Sifat includes naming idols after Allah's Names or believing that any creature shares Allah's unique perfect Attributes.",
        references: "Surah Al-A'raf 7:180"
      },
      {
        question: "Are amulets (tamimah) that are believed to protect from harm permissible?",
        options: ["Yes, always", "No, wearing them for protection is a form of shirk", "Only if made of gold", "Only for children"],
        correctAnswer: "No, wearing them for protection is a form of shirk",
        explanation: "The Prophet ﷺ said: 'Whoever wears an amulet has committed shirk.' Seeking protection through means not legislated by Allah is shirk.",
        references: "Musnad Ahmad"
      },
      {
        question: "What did Luqman advise his son regarding shirk?",
        options: ["Shirk is a small matter", "Do not associate partners with Allah; indeed, shirk is a great injustice", "Shirk is only for non-Muslims", "Shirk can be forgiven easily"],
        correctAnswer: "Do not associate partners with Allah; indeed, shirk is a great injustice",
        explanation: "Luqman said to his son: 'O my son, do not associate anything with Allah. Indeed, association [with Him] is a great injustice.'",
        references: "Surah Luqman 31:13"
      },
      {
        question: "Is it permissible to slaughter an animal for a grave or a jinn?",
        options: ["Yes, if done with good intention", "No, it is major shirk", "Only on Eid", "Only if the meat is given in charity"],
        correctAnswer: "No, it is major shirk",
        explanation: "Slaughtering for other than Allah is an act of worship directed to other than Him and is major shirk.",
        references: "Surah Al-An'am 6:162-163; Nullifiers of Islam"
      },
      {
        question: "What is the first of the ten nullifiers of Islam mentioned by scholars?",
        options: ["Magic", "Shirk in the worship of Allah", "Mocking the religion", "Supporting the disbelievers"],
        correctAnswer: "Shirk in the worship of Allah",
        explanation: "The first nullifier is shirk in worshipping Allah, such as slaughtering for other than Him or calling upon others.",
        references: "Nullifiers of Islam (Nawaqid al-Islam)"
      },
      {
        question: "Does major shirk nullify all previous good deeds?",
        options: ["No, good deeds remain", "Yes, if one dies upon it without repentance, previous deeds are nullified", "Only if the person was a hypocrite", "Only worldly deeds"],
        correctAnswer: "Yes, if one dies upon it without repentance, previous deeds are nullified",
        explanation: "Allah says that if they had associated others with Him, all that they used to do would have become worthless.",
        references: "Surah Al-An'am 6:88"
      },
      {
        question: "What is the correct response when someone says 'By the life of so-and-so'?",
        options: ["Accept it as normal", "Remind that one should swear only by Allah", "Swear by the same person", "Ignore it"],
        correctAnswer: "Remind that one should swear only by Allah",
        explanation: "Swearing by other than Allah is prohibited and is a form of minor shirk; one should swear only by Allah or remain silent.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "Is believing that the stars control events in the universe a form of shirk?",
        options: ["No, it is science", "Yes, if one believes the stars themselves cause events, it is major shirk", "Only minor shirk", "It is recommended"],
        correctAnswer: "Yes, if one believes the stars themselves cause events, it is major shirk",
        explanation: "Believing that stars or planets control destiny or cause rain and events is shirk in Rububiyyah.",
        references: "IslamQA"
      },
      {
        question: "What is the meaning of 'La ilaha illallah' in relation to shirk?",
        options: ["There is no creator except Allah", "There is no god truly worthy of worship except Allah (negating all false objects of worship)", "Allah is the greatest", "Muhammad is the Messenger"],
        correctAnswer: "There is no god truly worthy of worship except Allah (negating all false objects of worship)",
        explanation: "The Kalima negates all that is worshipped besides Allah and affirms that only Allah deserves worship, thereby rejecting shirk.",
        references: "Classical tafsir and Aqeedah works"
      },
      {
        question: "Can a person who commits major shirk still be considered a Muslim?",
        options: ["Yes, if they pray", "No, major shirk expels a person from Islam", "Only if they are ignorant", "Only on Fridays"],
        correctAnswer: "No, major shirk expels a person from Islam",
        explanation: "Major shirk takes a person out of the fold of Islam; repentance is required to return to Islam.",
        references: "IslamQA; consensus of Ahlus-Sunnah"
      },
      {
        question: "What is hidden shirk (shirk khafi) often referring to?",
        options: ["Open idol worship", "Subtle forms such as riya (showing off) that people may not notice", "Only the shirk of the past nations", "Denying Allah's existence"],
        correctAnswer: "Subtle forms such as riya (showing off) that people may not notice",
        explanation: "Hidden shirk is more inconspicuous than the crawling of a black ant on a black rock in the dark night; it includes beautifying prayer because others are watching.",
        references: "Hadith in Musnad Ahmad"
      },
      {
        question: "Is it shirk to say 'If not for Allah and so-and-so, this would not have happened'?",
        options: ["No, it is fine", "Yes, it is a form of minor shirk because it equates others with Allah", "Only if said in Arabic", "Only if the person is a non-Muslim"],
        correctAnswer: "Yes, it is a form of minor shirk because it equates others with Allah",
        explanation: "Equating others with Allah in will or causation by using 'and' is a form of minor shirk; one should say 'If not for Allah, then so-and-so.'",
        references: "Hadith of the Prophet ﷺ"
      },
      {
        question: "What is the ruling on seeking help from the dead at graves?",
        options: ["It is recommended for barakah", "It is major shirk", "It is only minor shirk", "It is permissible if the person was a wali"],
        correctAnswer: "It is major shirk",
        explanation: "Calling upon the dead for help, relief, or intercession in matters only Allah can do is major shirk.",
        references: "Surah Fatir 35:22; IslamQA"
      },
      {
        question: "Does ignorance completely excuse major shirk in all cases?",
        options: ["Yes, always", "Not necessarily; the basic message of Tawhid is clear, and one must learn", "Only for children", "Only for non-Arabs"],
        correctAnswer: "Not necessarily; the basic message of Tawhid is clear, and one must learn",
        explanation: "While Allah is Just, the fundamental call of all Prophets was Tawhid, and adults are responsible to seek knowledge of what is required of them.",
        references: "General principles of Aqeedah"
      },
      {
        question: "What is the reward for one who avoids shirk and dies upon pure Tawhid?",
        options: ["Nothing special", "Paradise, by Allah's mercy", "Only worldly success", "A temporary reward"],
        correctAnswer: "Paradise, by Allah's mercy",
        explanation: "The one who dies free of major shirk will eventually enter Paradise, even if after purification if he had major sins.",
        references: "Sahih Muslim; Surah An-Nisa 4:48"
      },
      {
        question: "Is fortune-telling or believing in fortune-tellers a form of shirk?",
        options: ["No, it is entertainment", "Yes, claiming knowledge of the unseen or believing those who claim it is shirk", "Only if paid for", "Only for non-Muslims"],
        correctAnswer: "Yes, claiming knowledge of the unseen or believing those who claim it is shirk",
        explanation: "Knowledge of the unseen belongs only to Allah; claiming it or believing those who claim it is a form of shirk.",
        references: "Surah An-Naml 27:65; Hadith"
      },
      {
        question: "What should a Muslim do if they realize they have fallen into a form of shirk?",
        options: ["Ignore it", "Immediately repent sincerely to Allah, abandon the act, and return to pure Tawhid", "Only tell a scholar", "Wait until Hajj"],
        correctAnswer: "Immediately repent sincerely to Allah, abandon the act, and return to pure Tawhid",
        explanation: "Repentance from shirk is accepted if done sincerely before death; one must abandon the shirk and renew pure Tawhid.",
        references: "Surah Az-Zumar 39:53-54"
      },
      {
        question: "Is loving someone more than Allah a form of shirk?",
        options: ["No, love is natural", "If the love leads to preferring that person over obedience to Allah, it can be a form of shirk", "Only if the person is a non-Muslim", "Love has no relation to shirk"],
        correctAnswer: "If the love leads to preferring that person over obedience to Allah, it can be a form of shirk",
        explanation: "Allah criticizes those who take rivals and love them as they love Allah; true love for Allah requires preferring His commands.",
        references: "Surah Al-Baqarah 2:165"
      },
      {
        question: "What is the ruling on hanging blue beads or 'evil eye' charms for protection?",
        options: ["Recommended", "It is a form of minor shirk if done for protection, as it is an unlegislated means", "Only for decoration it is fine", "Obligatory"],
        correctAnswer: "It is a form of minor shirk if done for protection, as it is an unlegislated means",
        explanation: "Using objects as protection when Allah has not made them a means is a form of minor shirk.",
        references: "IslamQA; Hadith on amulets"
      },
      {
        question: "Did the polytheists of Makkah believe in Allah as Creator?",
        options: ["No, they denied Allah completely", "Yes, many affirmed Allah as Creator but committed shirk in worship", "They only worshipped idols", "They were atheists"],
        correctAnswer: "Yes, many affirmed Allah as Creator but committed shirk in worship",
        explanation: "The mushrikin of Makkah largely affirmed Tawhid ar-Rububiyyah but committed shirk in Uluhiyyah by directing worship to others.",
        references: "Surah Az-Zumar 39:3; Surah Yunus 10:31"
      },
      {
        question: "What is the safest way to protect oneself from shirk?",
        options: ["Rely on amulets", "Learn pure Tawhid, make dua for steadfastness, and avoid all forms of associating partners with Allah", "Avoid all people", "Only pray the obligatory prayers"],
        correctAnswer: "Learn pure Tawhid, make dua for steadfastness, and avoid all forms of associating partners with Allah",
        explanation: "The Prophet ﷺ taught dua seeking refuge from associating partners with Allah knowingly or unknowingly.",
        references: "Hadith; Surah Al-Kahf 18:110"
      }
    ],
    intermediate: [
      {
        question: "What are the three main categories of shirk corresponding to the three categories of Tawhid?",
        options: ["Shirk in belief, speech, and action", "Shirk in Rububiyyah, Uluhiyyah, and Asma wa Sifat", "Major, minor, and hidden only", "Past, present, and future"],
        correctAnswer: "Shirk in Rububiyyah, Uluhiyyah, and Asma wa Sifat",
        explanation: "Just as Tawhid has three categories, shirk opposes each: associating partners in Lordship, in worship, and in Names and Attributes.",
        references: "Classical works of Aqeedah (e.g., Ibn Baz, Ibn Uthaymeen)"
      },
      {
        question: "What is the difference between major and minor shirk regarding one's status as a Muslim?",
        options: ["There is no difference", "Major shirk expels from Islam; minor shirk does not but is still a major sin", "Minor shirk is worse", "Both expel from Islam"],
        correctAnswer: "Major shirk expels from Islam; minor shirk does not but is still a major sin",
        explanation: "Major shirk nullifies Islam and, if one dies upon it, leads to eternal Fire. Minor shirk diminishes perfect Tawhid but leaves one within Islam.",
        references: "IslamQA"
      },
      {
        question: "When does swearing by other than Allah become major shirk?",
        options: ["Always", "When the person believes the one sworn by has the same status or veneration as Allah", "Never", "Only if said in a mosque"],
        correctAnswer: "When the person believes the one sworn by has the same status or veneration as Allah",
        explanation: "Swearing by other than Allah is normally minor shirk; it becomes major if the heart holds the object of the oath equal to Allah in glorification.",
        references: "Ibn Uthaymeen; Ibn Baz"
      },
      {
        question: "What is the ruling on saying 'What Allah wills and you will' to a person?",
        options: ["Recommended", "It is a form of minor shirk; one should say 'What Allah alone wills'", "Only permissible for the Prophet ﷺ", "It is major shirk always"],
        correctAnswer: "It is a form of minor shirk; one should say 'What Allah alone wills'",
        explanation: "The Prophet ﷺ corrected a man who said this to him, saying: 'Have you made me a rival to Allah? Say: What Allah alone wills.'",
        references: "Al-Adab al-Mufrad; Sunan an-Nasa'i"
      },
      {
        question: "Is wearing an amulet containing Quranic verses free from any concern?",
        options: ["Yes, completely safe", "Many scholars still regard it as disliked or a form of minor shirk because it is an unlegislated means; verbal ruqyah is safer", "It is obligatory", "Only if written in gold"],
        correctAnswer: "Many scholars still regard it as disliked or a form of minor shirk because it is an unlegislated means; verbal ruqyah is safer",
        explanation: "Even Quranic amulets are disputed; the safest path is to recite ruqyah and dua verbally as the Prophet ﷺ taught, without hanging objects.",
        references: "IslamQA and classical discussions"
      },
      {
        question: "What is the ruling on going to a fortune-teller or soothsayer and believing them?",
        options: ["Permissible for curiosity", "Disbelief (kufr) if one believes they know the unseen", "Only minor sin", "Recommended before marriage"],
        correctAnswer: "Disbelief (kufr) if one believes they know the unseen",
        explanation: "The Prophet ﷺ said that whoever goes to a soothsayer and believes what he says has disbelieved in what was revealed to Muhammad ﷺ.",
        references: "Sunan Abu Dawud; Sahih Muslim"
      },
      {
        question: "What is shirk in obedience (related to legislation)?",
        options: ["Obeying parents in good", "Making lawful what Allah made unlawful or unlawful what Allah made lawful, and following that as religion", "Following traffic laws", "Obeying a teacher in studies"],
        correctAnswer: "Making lawful what Allah made unlawful or unlawful what Allah made lawful, and following that as religion",
        explanation: "Taking rabbis, monks, or anyone else as legislators who make the lawful unlawful and vice versa is a form of major shirk, as in Surah At-Tawbah 9:31.",
        references: "Surah At-Tawbah 9:31; Tafsir"
      },
      {
        question: "What is the correct belief about intercession (shafa'ah) to avoid shirk?",
        options: ["Anyone can intercede freely", "Intercession is only by Allah's permission and for those with whom He is pleased", "The dead can intercede independently", "Saints control intercession"],
        correctAnswer: "Intercession is only by Allah's permission and for those with whom He is pleased",
        explanation: "All intercession belongs to Allah; no one intercedes except after His permission. Seeking intercession by calling upon the dead is shirk.",
        references: "Surah Al-Baqarah 2:255; Surah An-Najm 53:26"
      },
      {
        question: "What is the difference between permissible tawassul and forbidden istighathah?",
        options: ["There is no difference", "Permissible tawassul is through one's deeds, Allah's Names, or the living; forbidden istighathah is calling upon the dead for help", "All tawassul is forbidden", "Only tawassul through the Prophet ﷺ after his death by calling him is allowed"],
        correctAnswer: "Permissible tawassul is through one's deeds, Allah's Names, or the living; forbidden istighathah is calling upon the dead for help",
        explanation: "Asking Allah by His Names or one's good deeds is permitted. Calling upon the deceased for help is major shirk.",
        references: "IslamQA; classical fatwas"
      },
      {
        question: "Is it major shirk to believe that a wali (saint) can independently benefit or harm?",
        options: ["No, it is respect", "Yes, because benefit and harm belong only to Allah", "Only minor shirk", "It is recommended in some cultures"],
        correctAnswer: "Yes, because benefit and harm belong only to Allah",
        explanation: "Believing any created being has independent power to benefit or harm is shirk in Rububiyyah.",
        references: "Surah Yunus 10:107; Surah Al-Fatihah 1:5"
      },
      {
        question: "What is the ruling on magic (sihr) that involves seeking help from jinn or other than Allah?",
        options: ["It is a skill", "It is major kufr and shirk", "It is only minor sin", "It is permissible for protection"],
        correctAnswer: "It is major kufr and shirk",
        explanation: "Magic that involves invoking other than Allah or believing in its independent power is major disbelief and shirk.",
        references: "Surah Al-Baqarah 2:102; Nullifiers of Islam"
      },
      {
        question: "What is the correct understanding of the hadith 'Whoever dies while knowing there is no god but Allah will enter Paradise'?",
        options: ["Mere utterance is enough regardless of actions", "It refers to one who dies upon pure Tawhid free of major shirk", "It means no deeds are required", "It applies only to the Companions"],
        correctAnswer: "It refers to one who dies upon pure Tawhid free of major shirk",
        explanation: "The hadith affirms that the one who dies upon Tawhid (free of major shirk) will enter Paradise, though major sinners may first be purified if Allah wills.",
        references: "Sahih Muslim"
      },
      {
        question: "What is the danger of excessive praise of the righteous that can lead to shirk?",
        options: ["There is no danger", "It can lead to elevating them to the level of worship, as happened with previous nations", "It is always recommended", "Only non-Muslims fall into it"],
        correctAnswer: "It can lead to elevating them to the level of worship, as happened with previous nations",
        explanation: "The Prophet ﷺ warned against excessive praise, and previous nations fell into shirk by exaggerating the status of the righteous and taking their graves as places of worship.",
        references: "Sahih Bukhari; Hadith on Jews and Christians"
      },
      {
        question: "Is it permissible to make a vow (nadhr) to other than Allah?",
        options: ["Yes, for the righteous", "No, a vow is an act of worship and must be made only to Allah", "Only if the vow is for charity", "Only in times of need"],
        correctAnswer: "No, a vow is an act of worship and must be made only to Allah",
        explanation: "Making a vow to a grave, saint, or anyone other than Allah is major shirk because vows are a form of worship.",
        references: "Surah Al-Insan 76:7; classical fiqh"
      },
      {
        question: "What is the ruling on taking the graves of the righteous as places of worship?",
        options: ["Recommended for barakah", "It is forbidden and a means to shirk; the Prophet ﷺ cursed those who did so", "Only for Prophets it is allowed", "It is a cultural practice"],
        correctAnswer: "It is forbidden and a means to shirk; the Prophet ﷺ cursed those who did so",
        explanation: "The Prophet ﷺ cursed the Jews and Christians for taking the graves of their Prophets as places of worship and forbade this for his ummah.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the status of one who does not regard the mushrikin as disbelievers?",
        options: ["He is still a complete Muslim", "He himself commits an act of disbelief according to scholarly consensus", "It is a minor issue", "It is only a difference of opinion"],
        correctAnswer: "He himself commits an act of disbelief according to scholarly consensus",
        explanation: "One of the nullifiers of Islam is not declaring the polytheists as disbelievers, or doubting their disbelief, or approving their way.",
        references: "Nullifiers of Islam; IslamQA"
      },
      {
        question: "What is the correct way to seek protection from the evil eye and envy?",
        options: ["Wear blue beads", "Use the authentic ruqyah and dua from the Quran and Sunnah, and put one's trust in Allah", "Visit a fortune-teller", "Hang amulets"],
        correctAnswer: "Use the authentic ruqyah and dua from the Quran and Sunnah, and put one's trust in Allah",
        explanation: "The Prophet ﷺ taught specific dua and ruqyah for protection; relying on unlegislated means is a form of shirk.",
        references: "Sahih Muslim; Sunan"
      },
      {
        question: "Is it shirk to believe that the Prophet ﷺ has knowledge of the unseen independently?",
        options: ["No, he knows everything", "Yes, knowledge of the unseen belongs only to Allah; the Prophet ﷺ knew only what Allah revealed to him", "Only minor shirk", "It is a high level of faith"],
        correctAnswer: "Yes, knowledge of the unseen belongs only to Allah; the Prophet ﷺ knew only what Allah revealed to him",
        explanation: "Allah says that none in the heavens or earth knows the unseen except Him. The Prophet ﷺ was given specific knowledge by revelation, not independent knowledge of the ghayb.",
        references: "Surah An-Naml 27:65; Surah Al-A'raf 7:188"
      },
      {
        question: "What is the ruling on showing off (riya) in a portion of one's deed?",
        options: ["The entire deed is still accepted", "The portion done for show is nullified; if the original intention was for Allah, the rest may remain", "It is major shirk", "It has no effect"],
        correctAnswer: "The portion done for show is nullified; if the original intention was for Allah, the rest may remain",
        explanation: "If a person begins a deed for Allah then is affected by riya, the portion affected is compromised; pure sincerity is required for full acceptance.",
        references: "Classical discussions on riya"
      },
      {
        question: "What is the danger of saying 'In the name of Allah and the name of the shaykh' when starting something?",
        options: ["No danger", "It is a form of minor shirk because it associates others with Allah in beginning actions", "It is recommended", "Only major shirk if intentional"],
        correctAnswer: "It is a form of minor shirk because it associates others with Allah in beginning actions",
        explanation: "Beginning actions with the name of other than Allah, or equating others with Him, is a form of shirk in speech.",
        references: "General principles of Tawhid"
      },
      {
        question: "Is it permissible to ask a living righteous person to make dua for you?",
        options: ["No, never", "Yes, this is permissible tawassul through the living", "Only if the person is a scholar", "Only during Hajj"],
        correctAnswer: "Yes, this is permissible tawassul through the living",
        explanation: "Requesting dua from a living person is allowed and was practiced by the Companions; it is not the same as calling upon the dead.",
        references: "Authentic practice of the Salaf"
      },
      {
        question: "What is the ruling on believing that the universe is eternal and not created by Allah?",
        options: ["It is a scientific opinion", "It is major shirk (or kufr) because it denies Allah as the Creator", "It is minor shirk", "It is acceptable in philosophy"],
        correctAnswer: "It is major shirk (or kufr) because it denies Allah as the Creator",
        explanation: "Denying that Allah created the universe and affirming its eternity is a form of shirk by negation in Rububiyyah.",
        references: "Classical Aqeedah texts"
      },
      {
        question: "What is the correct response to someone who claims that calling upon the Prophet ﷺ after his death is not shirk?",
        options: ["Agree with them", "Explain that calling upon the dead is major shirk, and the Prophet ﷺ taught us to call upon Allah alone", "Ignore the issue", "Say it is only cultural"],
        correctAnswer: "Explain that calling upon the dead is major shirk, and the Prophet ﷺ taught us to call upon Allah alone",
        explanation: "The Quran and Sunnah consistently direct all dua to Allah alone. The dead cannot hear or respond in the manner of the living.",
        references: "Surah Al-Ahqaf 46:5; Surah Fatir 35:22"
      },
      {
        question: "What is the ruling on using 'lucky' charms or objects believed to bring good fortune?",
        options: ["Permissible if cultural", "It is a form of minor shirk because one is attaching to a means that has no basis in the Shariah", "Recommended", "Only for non-Muslims"],
        correctAnswer: "It is a form of minor shirk because one is attaching to a means that has no basis in the Shariah",
        explanation: "Attaching the heart to unlegislated means for benefit or protection is a form of minor shirk.",
        references: "IslamQA"
      },
      {
        question: "What is the status of one who prefers the judgment of taghut (false laws) over the judgment of Allah?",
        options: ["He is a sinner but Muslim", "He has committed an act of disbelief", "It is a minor issue", "It is only political"],
        correctAnswer: "He has committed an act of disbelief",
        explanation: "Preferring other laws over the Shariah of Allah, or believing they are better, is one of the nullifiers of Islam.",
        references: "Surah Al-Ma'idah 5:44, 5:50; Nullifiers of Islam"
      },
      {
        question: "Is it shirk to fear other than Allah in the sense of the fear of worship?",
        options: ["No, fear is natural", "Yes, the fear that includes reverence and submission due only to Allah, if directed to others, is a form of shirk", "Only if the person is a non-Muslim", "Fear has no relation to shirk"],
        correctAnswer: "Yes, the fear that includes reverence and submission due only to Allah, if directed to others, is a form of shirk",
        explanation: "Natural fear is not shirk, but the fear of worship (khawf al-ibadah) that includes reverence and hope is due only to Allah.",
        references: "Surah Al-Baqarah 2:150; classical distinctions"
      },
      {
        question: "What is the ruling on sacrificing an animal at a particular place believing the place itself has special power?",
        options: ["Recommended for barakah", "If one believes the place has independent power, it is shirk; sacrifice must be for Allah alone", "Only minor issue", "Permissible if the meat is distributed"],
        correctAnswer: "If one believes the place has independent power, it is shirk; sacrifice must be for Allah alone",
        explanation: "Sacrifice is an act of worship that must be purely for Allah; attributing power to places or objects is shirk.",
        references: "Surah Al-Kawthar 108:2"
      },
      {
        question: "What is the correct understanding of the statement 'The shirk of this ummah is more hidden than the crawling of an ant'?",
        options: ["Shirk no longer exists", "Subtle forms of shirk, especially riya and attachment of the heart, can be very hidden and require constant vigilance", "Only major shirk is hidden", "It refers only to the past"],
        correctAnswer: "Subtle forms of shirk, especially riya and attachment of the heart, can be very hidden and require constant vigilance",
        explanation: "The Prophet ﷺ warned that shirk in this ummah is more hidden than a black ant on a black rock in the darkness of night.",
        references: "Musnad Ahmad"
      },
      {
        question: "Is it permissible to seek blessing (tabarruk) from the remnants of the Prophet ﷺ that are authentically established?",
        options: ["No, never", "The Companions sought blessing from things that touched him during his life; after his death, the focus is on following his Sunnah", "Yes, from any claimed relic today without verification", "Only from graves"],
        correctAnswer: "The Companions sought blessing from things that touched him during his life; after his death, the focus is on following his Sunnah",
        explanation: "Tabarruk with the Prophet's physical remnants was practiced by the Companions while he was alive. After his death, the correct path is adherence to his teachings, not seeking unverified relics.",
        references: "Authentic reports of the Sahabah"
      },
      {
        question: "What is the ruling on believing that some people know what is in the hearts of others without revelation?",
        options: ["It is a spiritual gift", "It is a form of shirk or false claim because knowledge of the hearts belongs to Allah", "Only minor issue", "It is common among the righteous"],
        correctAnswer: "It is a form of shirk or false claim because knowledge of the hearts belongs to Allah",
        explanation: "Allah alone knows what is in the hearts. Claiming such knowledge without revelation is a false claim that can involve shirk in Attributes.",
        references: "Surah Al-Mulk 67:13; Surah Qaf 50:16"
      },
      {
        question: "What should a person do if they have been involved in minor shirk such as riya?",
        options: ["Ignore it because it is minor", "Repent, renew sincerity, and strive to make all deeds purely for Allah", "Only perform deeds in secret forever", "Leave all acts of worship"],
        correctAnswer: "Repent, renew sincerity, and strive to make all deeds purely for Allah",
        explanation: "Minor shirk requires repentance and correction of intention. The Prophet ﷺ taught to seek refuge from associating partners with Allah even unknowingly.",
        references: "Hadith of seeking refuge from shirk"
      },
      {
        question: "Is it shirk to obey a created being in disobedience to Allah?",
        options: ["No, obedience is always good", "If one obeys a created being in clear disobedience to Allah while believing it is correct, it can reach the level of shirk", "Only if the person is a ruler", "Obedience has no relation to shirk"],
        correctAnswer: "If one obeys a created being in clear disobedience to Allah while believing it is correct, it can reach the level of shirk",
        explanation: "Absolute obedience is due only to Allah. Obeying others in what is disobedience to Allah, while regarding it as correct, is a form of taking them as lords.",
        references: "Surah At-Tawbah 9:31"
      },
      {
        question: "What is the ruling on astrology and believing that the position of stars determines one's destiny?",
        options: ["It is a science", "It is a form of shirk because it attributes control of events to the stars", "Only entertainment", "Permissible if not taken seriously"],
        correctAnswer: "It is a form of shirk because it attributes control of events to the stars",
        explanation: "Believing that stars determine destiny or events is shirk in Rububiyyah. Studying stars for navigation or time is different.",
        references: "Hadith; IslamQA"
      },
      {
        question: "What is the correct belief about the power of dua?",
        options: ["Dua has independent power", "Dua is a means; Allah alone answers and has full power", "Only the dua of saints is answered", "Dua is unnecessary because of Qadr"],
        correctAnswer: "Dua is a means; Allah alone answers and has full power",
        explanation: "Dua is one of the greatest acts of worship and a means that Allah has legislated; the response is entirely in Allah's hands.",
        references: "Surah Ghafir 40:60"
      },
      {
        question: "What is the danger of the statement 'The shaykh will take care of my affairs in the grave and on the Day of Judgment'?",
        options: ["No danger if said with love", "It is major shirk because it attributes to a created being what belongs only to Allah", "It is minor shirk", "It is a cultural expression"],
        correctAnswer: "It is major shirk because it attributes to a created being what belongs only to Allah",
        explanation: "Believing that any created being controls one's fate in the grave or on the Day of Judgment is major shirk in Rububiyyah and Uluhiyyah.",
        references: "General principles of Tawhid"
      },
      {
        question: "What is the ruling on believing that some natural objects (trees, stones, etc.) have independent power to benefit or harm?",
        options: ["It is a cultural tradition", "It is major shirk because benefit and harm belong only to Allah", "It is minor shirk only", "It is permissible if done for barakah"],
        correctAnswer: "It is major shirk because benefit and harm belong only to Allah",
        explanation: "Attributing independent power of benefit or harm to any created object is major shirk in Rububiyyah.",
        references: "Surah Al-Anbiya 21:66-67; IslamQA"
      }
    ],
    advanced: [
      {
        question: "What is the precise definition of major shirk according to the scholars of Ahlus-Sunnah?",
        options: ["Any sin", "Ascribing to other than Allah something that belongs exclusively to Allah in Rububiyyah, Uluhiyyah, or Asma wa Sifat, in a way that expels from Islam", "Only idol worship", "Only denying Allah"],
        correctAnswer: "Ascribing to other than Allah something that belongs exclusively to Allah in Rububiyyah, Uluhiyyah, or Asma wa Sifat, in a way that expels from Islam",
        explanation: "Major shirk is to give to others the rights that are unique to Allah, whether in His Lordship, His exclusive right to be worshipped, or His Names and Attributes.",
        references: "IslamQA; Ibn Taymiyyah and later scholars"
      },
      {
        question: "What is the difference between shirk in belief (i'tiqad) and shirk in action?",
        options: ["There is no difference", "Shirk in belief is holding a creed that associates partners with Allah; shirk in action is performing acts of worship for other than Allah", "Only belief is shirk", "Only action is shirk"],
        correctAnswer: "Shirk in belief is holding a creed that associates partners with Allah; shirk in action is performing acts of worship for other than Allah",
        explanation: "Both can be major. Belief that someone shares in Allah's unique attributes is shirk in creed; prostrating to or calling upon other than Allah is shirk in action.",
        references: "Classical Aqeedah categorizations"
      },
      {
        question: "How does the shirk of the polytheists of Makkah primarily manifest according to the Quran?",
        options: ["They denied Allah as Creator", "They largely affirmed Allah as Creator but directed worship (dua, sacrifice, etc.) to others as intermediaries", "They were atheists", "They only worshipped the sun"],
        correctAnswer: "They largely affirmed Allah as Creator but directed worship (dua, sacrifice, etc.) to others as intermediaries",
        explanation: "The Quran shows that the mushrikin acknowledged Allah as Creator and Sustainer but said they worshipped others only to bring them closer to Allah.",
        references: "Surah Az-Zumar 39:3; Surah Yunus 10:18"
      },
      {
        question: "What is the ruling on the one who makes intermediaries between himself and Allah, calling upon them and putting trust in them?",
        options: ["He is a sinner but Muslim", "He is a disbeliever by scholarly consensus", "It is a minor issue", "It is recommended for the common people"],
        correctAnswer: "He is a disbeliever by scholarly consensus",
        explanation: "One of the nullifiers of Islam is to set up intermediaries between oneself and Allah, calling upon them, asking them, and putting trust in them.",
        references: "Nullifiers of Islam; IslamQA"
      },
      {
        question: "What is the correct understanding of the verse 'They have taken their scholars and monks as lords besides Allah'?",
        options: ["It only refers to literal worship", "It includes obeying them in making lawful what Allah made unlawful and unlawful what Allah made lawful", "It is only historical", "It does not apply today"],
        correctAnswer: "It includes obeying them in making lawful what Allah made unlawful and unlawful what Allah made lawful",
        explanation: "When Adi ibn Hatim heard this verse, the Prophet ﷺ explained that it meant taking as lawful what they made lawful and unlawful what they made unlawful.",
        references: "Surah At-Tawbah 9:31; Tirmidhi"
      },
      {
        question: "What is the difference between the general and specific Ma'iyyah of Allah, and how does misunderstanding it lead to shirk?",
        options: ["There is no difference", "General Ma'iyyah is with all creation by knowledge and power; specific is with the believers by support. Believing Allah is mixed with creation is a form of shirk or deviation", "Allah is only with the believers", "Ma'iyyah means physical presence"],
        correctAnswer: "General Ma'iyyah is with all creation by knowledge and power; specific is with the believers by support. Believing Allah is mixed with creation is a form of shirk or deviation",
        explanation: "Ahlus-Sunnah affirm Allah's withness without mixing or incarnation. Pantheistic or incarnationist beliefs fall into shirk or major deviation.",
        references: "Surah Al-Hadid 57:4; classical explanations"
      },
      {
        question: "What is the ruling on the one who believes that the Quran is created?",
        options: ["It is a minor difference", "It is a major innovation that opposes the creed of Ahlus-Sunnah; the Quran is the uncreated Speech of Allah", "It is the correct view", "It is only a linguistic issue"],
        correctAnswer: "It is a major innovation that opposes the creed of Ahlus-Sunnah; the Quran is the uncreated Speech of Allah",
        explanation: "The view that the Quran is created was a major fitnah. Ahlus-Sunnah affirm that the Quran is the eternal, uncreated Kalam of Allah.",
        references: "Consensus of the Salaf; works of Aqeedah"
      },
      {
        question: "How can minor shirk become major shirk?",
        options: ["It never does", "When the person holds a belief that elevates the object to the level of a rival to Allah (e.g., believing the one sworn by has the same status as Allah)", "Only after death", "Only if done in public"],
        correctAnswer: "When the person holds a belief that elevates the object to the level of a rival to Allah (e.g., believing the one sworn by has the same status as Allah)",
        explanation: "Minor shirk remains minor as long as the heart does not equate the object with Allah. When the belief reaches the level of taking a rival, it becomes major.",
        references: "Ibn Uthaymeen; Ibn Baz"
      },
      {
        question: "What is the correct position on seeking blessing from the graves of the righteous?",
        options: ["It is recommended", "It is forbidden and a means that led previous nations into shirk; the Prophet ﷺ severely warned against it", "It is only minor shirk", "It is permissible if done with pure intention"],
        correctAnswer: "It is forbidden and a means that led previous nations into shirk; the Prophet ﷺ severely warned against it",
        explanation: "The Prophet ﷺ forbade taking graves as places of worship and warned that excessive veneration of the righteous leads to shirk.",
        references: "Sahih Bukhari & Muslim"
      },
      {
        question: "What is the ruling on the one who mocks Allah, His Messenger, or the religion of Islam?",
        options: ["He is a sinner but remains Muslim", "He has committed major kufr and left Islam, whether done seriously or in jest", "It is only minor if in jest", "It depends on the culture"],
        correctAnswer: "He has committed major kufr and left Islam, whether done seriously or in jest",
        explanation: "Allah says about those who mocked: 'Was it Allah and His verses and His Messenger that you were mocking? Make no excuse; you have disbelieved after your belief.'",
        references: "Surah At-Tawbah 9:65-66"
      },
      {
        question: "What is the precise danger of the statement 'Had it not been for so-and-so, such-and-such would not have happened' when said with attachment of the heart?",
        options: ["No danger", "It can be minor shirk in speech and, if the heart relies on the person as the true cause, it approaches major shirk", "It is always major shirk", "It is only a linguistic error"],
        correctAnswer: "It can be minor shirk in speech and, if the heart relies on the person as the true cause, it approaches major shirk",
        explanation: "The Prophet ﷺ taught to say 'What Allah willed, then what so-and-so willed.' Relying on created beings as independent causes is a form of shirk.",
        references: "Hadith; explanations of scholars"
      },
      {
        question: "What is the ruling on the one who believes that some of the awliya have the ability to dispose of the affairs of the universe (tasarruf)?",
        options: ["It is a high spiritual station", "It is major shirk because disposal of the universe belongs only to Allah", "It is minor shirk", "It is acceptable in some Sufi paths"],
        correctAnswer: "It is major shirk because disposal of the universe belongs only to Allah",
        explanation: "Believing that any created being has independent control or disposal over the universe is major shirk in Rububiyyah.",
        references: "Surah Al-Fatihah 1:2; classical fatwas"
      },
      {
        question: "What is the correct understanding of the hadith in which the Prophet ﷺ said that shirk is more hidden than the crawling of an ant?",
        options: ["Shirk is rare", "Even believers can fall into subtle forms of shirk (especially riya and attachment of the heart) without realizing, so constant vigilance and dua are required", "Only non-Muslims fall into shirk", "The hadith is weak"],
        correctAnswer: "Even believers can fall into subtle forms of shirk (especially riya and attachment of the heart) without realizing, so constant vigilance and dua are required",
        explanation: "The Prophet ﷺ taught a specific dua seeking refuge from associating partners with Allah knowingly and asking forgiveness for what one does unknowingly.",
        references: "Musnad Ahmad; Al-Adab al-Mufrad"
      },
      {
        question: "What is the ruling on the one who does not declare the polytheists to be disbelievers, or doubts their disbelief?",
        options: ["He is still a full Muslim", "He himself is a disbeliever according to the consensus of the scholars", "It is a minor difference of opinion", "It is only a political matter"],
        correctAnswer: "He himself is a disbeliever according to the consensus of the scholars",
        explanation: "One of the clear nullifiers of Islam is failing to regard the mushrikin as kuffar, or doubting their disbelief, or approving of their religion.",
        references: "Nullifiers of Islam; IslamQA"
      },
      {
        question: "What is the difference between the shirk of the Christians and the shirk of the Arab polytheists according to the scholars?",
        options: ["There is no difference", "The Arab polytheists mainly committed shirk in Uluhiyyah while affirming Rububiyyah; the Christians committed shirk in both Rububiyyah (Trinity) and Uluhiyyah", "Only the Christians committed shirk", "Only the Arabs committed shirk"],
        correctAnswer: "The Arab polytheists mainly committed shirk in Uluhiyyah while affirming Rububiyyah; the Christians committed shirk in both Rububiyyah (Trinity) and Uluhiyyah",
        explanation: "The Christians' belief in the Trinity is shirk in Rububiyyah and Asma wa Sifat, while also involving shirk in worship.",
        references: "Classical comparisons in Aqeedah works"
      },
      {
        question: "What is the ruling on the one who believes that the dead can hear and respond to calls for help in the same way as the living?",
        options: ["It is a valid opinion", "It is a false belief that leads to major shirk when one calls upon them for help", "It is only minor shirk", "It is established by the Quran"],
        correctAnswer: "It is a false belief that leads to major shirk when one calls upon them for help",
        explanation: "The Quran states that the dead do not hear in the sense of responding to calls for help. Calling upon them is major shirk.",
        references: "Surah Fatir 35:22; Surah An-Naml 27:80"
      },
      {
        question: "What is the correct position on the issue of whether minor shirk is forgiven without repentance?",
        options: ["It is automatically forgiven", "Like other sins, it requires repentance; Allah may forgive it or hold the person accountable", "It is never forgiven", "It is only a cultural issue"],
        correctAnswer: "Like other sins, it requires repentance; Allah may forgive it or hold the person accountable",
        explanation: "Minor shirk is still a serious sin. One must repent from it. Allah may forgive it by His mercy or punish for it, but it does not expel from Islam.",
        references: "General principles of tawbah and sin"
      },
      {
        question: "What is the ruling on the one who supports or allies with the disbelievers against the Muslims out of love for their religion?",
        options: ["It is a political choice", "If done out of love for their religion or approval of their disbelief, it is a nullifier of Islam", "It is only a minor sin", "It is recommended for peace"],
        correctAnswer: "If done out of love for their religion or approval of their disbelief, it is a nullifier of Islam",
        explanation: "Taking the disbelievers as allies in preference to the believers, especially with approval of their religion, is a form of disbelief mentioned in the Quran.",
        references: "Surah Al-Ma'idah 5:51; Nullifiers of Islam"
      },
      {
        question: "What is the precise meaning of the condition of 'rejection of taghut' in the Shahadah?",
        options: ["Rejecting only idols", "Disbelieving in and rejecting everything that is worshipped besides Allah, and declaring it false", "Only rejecting political systems", "It is optional"],
        correctAnswer: "Disbelieving in and rejecting everything that is worshipped besides Allah, and declaring it false",
        explanation: "The Shahadah requires both affirmation of Allah's sole right to worship and rejection (kufr) of all taghut — everything worshipped besides Him.",
        references: "Surah Al-Baqarah 2:256; conditions of La ilaha illallah"
      },
      {
        question: "What is the ruling on the one who believes that some people are not required to follow the Shariah of Muhammad ﷺ?",
        options: ["It is a valid spiritual station", "It is major disbelief because the Shariah of Muhammad ﷺ is for all of humanity until the Day of Judgment", "It is minor shirk", "It is only a difference of schools"],
        correctAnswer: "It is major disbelief because the Shariah of Muhammad ﷺ is for all of humanity until the Day of Judgment",
        explanation: "Believing that anyone is exempt from the final Shariah, or that another path is better, is a nullifier of Islam.",
        references: "Nullifiers of Islam; Surah Al-Ahzab 33:40"
      },
      {
        question: "How does the concept of 'blocking the means' (sadd adh-dhara'i) apply to minor shirk?",
        options: ["It does not apply", "Many forms of minor shirk are prohibited to block the path to major shirk", "Only major shirk is blocked", "It is a modern concept"],
        correctAnswer: "Many forms of minor shirk are prohibited to block the path to major shirk",
        explanation: "The Shariah prohibits means that lead to major shirk, such as certain forms of oaths, amulets, and excessive veneration of the righteous.",
        references: "Principles of Usul al-Fiqh and Aqeedah"
      },
      {
        question: "What is the correct belief about the hearing of the dead in the context of avoiding shirk?",
        options: ["The dead hear everything and can respond", "The dead may hear in a limited sense (as in the hadith of the well of Badr), but they cannot respond to calls for help; calling upon them is still shirk", "The dead hear nothing at all", "Only the Prophets hear"],
        correctAnswer: "The dead may hear in a limited sense (as in the hadith of the well of Badr), but they cannot respond to calls for help; calling upon them is still shirk",
        explanation: "Even if limited hearing is affirmed, the dead cannot fulfill requests or help. Calling upon them remains major shirk.",
        references: "Sahih Bukhari (hadith of Badr); Surah Fatir 35:22"
      },
      {
        question: "What is the ruling on the one who claims that the awliya know the unseen or have independent knowledge of future events?",
        options: ["It is a spiritual gift", "It is a false claim and a form of shirk in Asma wa Sifat, because knowledge of the unseen belongs only to Allah", "It is minor shirk", "It is established for the highest ranks"],
        correctAnswer: "It is a false claim and a form of shirk in Asma wa Sifat, because knowledge of the unseen belongs only to Allah",
        explanation: "Allah alone knows the unseen. Any claim that created beings possess independent knowledge of the ghayb is a form of shirk.",
        references: "Surah An-Naml 27:65; Surah Al-Jinn 72:26-27"
      },
      {
        question: "What is the correct understanding of the verse 'Your Lord has decreed that you worship none but Him'?",
        options: ["It is only a recommendation", "It is a command that establishes the exclusive right of Allah to be worshipped, making any worship of others major shirk", "It applies only to the Prophets", "It is abrogated"],
        correctAnswer: "It is a command that establishes the exclusive right of Allah to be worshipped, making any worship of others major shirk",
        explanation: "This verse and similar ones form the foundation of Tawhid al-Uluhiyyah; violating it by directing worship to others is major shirk.",
        references: "Surah Al-Isra 17:23"
      },
      {
        question: "What is the ruling on the one who turns away from the judgment of Allah and seeks judgment from taghut while believing the taghut judgment is better?",
        options: ["He is a sinner but Muslim", "He has committed major disbelief", "It is a political disagreement", "It is only minor if temporary"],
        correctAnswer: "He has committed major disbelief",
        explanation: "Preferring the judgment of taghut over the judgment of Allah, or believing it is better, is clear kufr according to the Quran and the nullifiers of Islam.",
        references: "Surah An-Nisa 4:60-61; Surah Al-Ma'idah 5:50"
      },
      {
        question: "What is the precise reason why riya is called minor shirk?",
        options: ["Because it is not serious", "Because the person still directs the outward act toward Allah, but shares the intention with the desire for praise from people", "Because it is only in the heart", "Because it is common"],
        correctAnswer: "Because the person still directs the outward act toward Allah, but shares the intention with the desire for praise from people",
        explanation: "In riya, the act of worship is performed, but the intention is contaminated by seeking the praise of creation. This is minor shirk that nullifies or diminishes the reward.",
        references: "Classical explanations of riya"
      },
      {
        question: "What is the ruling on the one who believes that the Prophet ﷺ has the right of independent intercession without Allah's permission?",
        options: ["It is a high level of respect", "It is a form of shirk because all intercession belongs to Allah and occurs only by His permission", "It is minor shirk", "It is the correct creed"],
        correctAnswer: "It is a form of shirk because all intercession belongs to Allah and occurs only by His permission",
        explanation: "The Quran affirms that intercession is entirely in Allah's hands. No one intercedes except after His permission.",
        references: "Surah Az-Zumar 39:44; Surah Al-Baqarah 2:255"
      },
      {
        question: "What is the correct methodology for protecting oneself from both major and minor shirk?",
        options: ["Avoid all people", "Learn pure Tawhid from the Quran and Sunnah, constantly renew sincerity, make the dua of seeking refuge from shirk, and avoid all means that lead to shirk", "Only perform the five prayers", "Rely on a shaykh completely"],
        correctAnswer: "Learn pure Tawhid from the Quran and Sunnah, constantly renew sincerity, make the dua of seeking refuge from shirk, and avoid all means that lead to shirk",
        explanation: "The Prophet ﷺ taught a specific dua: 'O Allah, I seek refuge in You from associating partners with You knowingly, and I seek Your forgiveness for what I do unknowingly.'",
        references: "Musnad Ahmad; Al-Adab al-Mufrad"
      },
      {
        question: "What is the ruling on the one who claims that some verses of the Quran or some hadiths are not applicable today because of modern times?",
        options: ["It is a valid ijtihad", "If it involves rejecting clear obligations or making lawful what Allah made unlawful, it can reach the level of disbelief", "It is only a difference of interpretation", "It is recommended for progress"],
        correctAnswer: "If it involves rejecting clear obligations or making lawful what Allah made unlawful, it can reach the level of disbelief",
        explanation: "Rejecting clear texts of the Quran or Sunnah, or claiming they are no longer applicable, can constitute major disbelief depending on the nature of the rejection.",
        references: "Principles of Aqeedah and Usul"
      },
      {
        question: "What is the final outcome for the one who dies upon pure Tawhid, free of major shirk, even if he had major sins?",
        options: ["He is permanently in Hell", "He will eventually enter Paradise by Allah's mercy, after possible purification if Allah wills", "He is equal to the Prophets", "His sins are automatically erased without any process"],
        correctAnswer: "He will eventually enter Paradise by Allah's mercy, after possible purification if Allah wills",
        explanation: "The one who dies upon Tawhid will enter Paradise. Major sinners among the believers may be punished for a time if Allah wills, then enter Paradise by His mercy and the intercession He grants.",
        references: "Sahih Bukhari & Muslim; Surah An-Nisa 4:48"
      },
      {
        question: "What is the comprehensive way to understand the relationship between shirk and the nullifiers of Islam?",
        options: ["Shirk is the only nullifier", "Major shirk is the first and most serious of the nullifiers; other nullifiers are forms of kufr that may or may not involve shirk", "Nullifiers are only political", "Shirk is separate from the nullifiers"],
        correctAnswer: "Major shirk is the first and most serious of the nullifiers; other nullifiers are forms of kufr that may or may not involve shirk",
        explanation: "The ten nullifiers begin with shirk. Other nullifiers include setting up intermediaries, not declaring mushrikin as disbelievers, preferring other laws, mocking the religion, and supporting disbelievers against Muslims out of love for their religion.",
        references: "Nullifiers of Islam by Muhammad ibn Abd al-Wahhab; IslamQA"
      },
      {
        question: "What is the ultimate protection from falling into shirk according to the Quran and Sunnah?",
        options: ["Relying on one's own knowledge alone", "Sincere attachment to pure Tawhid, constant dua for steadfastness, learning the boundaries of Tawhid and shirk, and following the way of the Prophet ﷺ and his Companions", "Avoiding all forms of worship that involve other people", "Only living in isolation"],
        correctAnswer: "Sincere attachment to pure Tawhid, constant dua for steadfastness, learning the boundaries of Tawhid and shirk, and following the way of the Prophet ﷺ and his Companions",
        explanation: "The Quran and Sunnah emphasize knowledge of Tawhid, sincerity, seeking refuge from shirk, and adhering to the path of the Salaf as the protection from all forms of associating partners with Allah.",
        references: "Surah Al-Kahf 18:110; Hadith of seeking refuge from shirk; Surah Al-An'am 6:153"
      },
      {
        question: "What is the ruling on the one who believes that the angels or jinn have independent authority to decree benefit or harm?",
        options: ["It is a high level of faith in the unseen", "It is major shirk because decree and control belong only to Allah", "It is minor shirk", "It is acceptable in some traditions"],
        correctAnswer: "It is major shirk because decree and control belong only to Allah",
        explanation: "Angels and jinn are created servants of Allah. Attributing independent authority of decree, benefit, or harm to them is major shirk in Rububiyyah.",
        references: "Surah An-Nahl 16:49-50; Surah Al-Jinn 72:1-15"
      },
      {
        question: "What is the correct understanding of the statement that 'shirk is the greatest form of oppression (zulm)'?",
        options: ["It is only a moral statement", "It is the greatest injustice because it denies Allah His exclusive right to be worshipped and ascribes His rights to others", "It applies only to major sins of the limbs", "It is an exaggeration"],
        correctAnswer: "It is the greatest injustice because it denies Allah His exclusive right to be worshipped and ascribes His rights to others",
        explanation: "Luqman called shirk a great injustice. It is the greatest oppression because it violates the most fundamental right of the Creator.",
        references: "Surah Luqman 31:13; Tafsir"
      },
      {
        question: "What is the ruling on the one who claims that certain acts of worship (such as tawaf or sacrifice) can be directed to other than Allah for the sake of nearness?",
        options: ["It is a valid means of nearness", "It is major shirk because all acts of worship must be directed purely to Allah alone", "It is minor shirk", "It is permissible if the intention is good"],
        correctAnswer: "It is major shirk because all acts of worship must be directed purely to Allah alone",
        explanation: "Any act of worship — including tawaf, sacrifice, vow, or dua — directed to other than Allah is major shirk, regardless of the claim of seeking nearness.",
        references: "Surah Al-An'am 6:162-163; Surah Az-Zumar 39:3"
      },
      {
        question: "What is the comprehensive definition of shirk that covers both major and minor forms according to the texts?",
        options: ["Only worshipping idols", "Ascribing a partner or rival to Allah in any of His exclusive rights — whether in Lordship, worship, or Names and Attributes — whether that reaches the level of expelling from Islam or remains a serious sin that diminishes Tawhid", "Only denying Allah's existence", "Only the actions of the polytheists of the past"],
        correctAnswer: "Ascribing a partner or rival to Allah in any of His exclusive rights — whether in Lordship, worship, or Names and Attributes — whether that reaches the level of expelling from Islam or remains a serious sin that diminishes Tawhid",
        explanation: "This definition encompasses major shirk (which expels from Islam) and minor shirk (which does not, but is still a grave sin that compromises pure Tawhid).",
        references: "IslamQA; classical definitions of shirk"
      }
    ]
  }
}

export default shirkCategory

