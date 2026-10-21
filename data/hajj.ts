import type { QuizCategory } from "@/types/quiz"

const hajjCategory: QuizCategory = {
  id: "hajj",
  title: "Hajj",
  description: "The Sacred Pilgrimage to the House of Allah",
  icon: "kaaba",
  levels: {
    easy: [
      {
        question: "What is the linguistic meaning of the word 'Hajj'?",
        options: [
          "To fast",
          "To intend or to set out for a purpose",
          "To give charity",
          "To pray",
        ],
        correctAnswer: "To intend or to set out for a purpose",
        explanation:
          "Hajj linguistically means to intend or to set out towards a particular destination. In Islamic terminology it refers to the specific pilgrimage to the Sacred House of Allah in Makkah during the prescribed days.",
      },
      {
        question: "Hajj is which of the five pillars of Islam?",
        options: [
          "The first pillar",
          "The fifth pillar",
          "The third pillar",
          "It is not a pillar",
        ],
        correctAnswer: "The fifth pillar",
        explanation:
          "The Prophet (PBUH) said: 'Islam is built upon five (pillars): ... and Hajj to the House (of Allah).' (Sahih al-Bukhari and Muslim). It is the fifth and final pillar.",
      },
      {
        question: "According to the Quran, upon whom is Hajj obligatory?",
        options: [
          "Every Muslim regardless of ability",
          "Those who are able to find a way (have the means)",
          "Only the residents of Makkah",
          "Only men",
        ],
        correctAnswer: "Those who are able to find a way (have the means)",
        explanation:
          "Allah says: 'And Hajj to the House is a duty that mankind owes to Allah, those who can afford the expenses (for one's conveyance, provision and residence).' (Aal-Imran 3:97).",
      },
      {
        question: "How many times in a lifetime is Hajj obligatory upon a person who meets the conditions?",
        options: [
          "Every year",
          "Once in a lifetime",
          "Five times",
          "As many times as possible",
        ],
        correctAnswer: "Once in a lifetime",
        explanation:
          "When the Prophet (PBUH) was asked if Hajj is every year, he remained silent until the question was repeated three times, then said that if he had said yes it would have become obligatory and people would not have been able to do it. (Sahih Muslim).",
      },
      {
        question: "What is the reward of a Hajj that is accepted (Hajj Mabrur)?",
        options: [
          "Ten good deeds",
          "Nothing but Paradise",
          "Forgiveness of minor sins only",
          "A high rank in this world",
        ],
        correctAnswer: "Nothing but Paradise",
        explanation:
          "The Prophet (PBUH) said: 'The reward of Hajj Mabrur (an accepted pilgrimage) is nothing but Paradise.' (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What did the Prophet (PBUH) say about a person who performs Hajj without committing any obscenity or transgression?",
        options: [
          "He returns with the same sins",
          "He returns as pure from sins as the day his mother gave birth to him",
          "He receives a small reward",
          "He must repeat Hajj",
        ],
        correctAnswer: "He returns as pure from sins as the day his mother gave birth to him",
        explanation:
          "Abu Hurairah (RA) reported that the Prophet (PBUH) said: 'Whoever performs Hajj for Allah's sake and does not have sexual relations nor commit sin nor dispute unjustly, then he returns as pure and free from sins as on the day on which his mother gave birth to him.' (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What are the three types of Hajj?",
        options: [
          "Major, Minor and Combined",
          "Ifrad, Qiran and Tamattu'",
          "Sunnah, Nafl and Fard",
          "Local, International and Special",
        ],
        correctAnswer: "Ifrad, Qiran and Tamattu'",
        explanation:
          "The three well-known types are: Ifrad (Hajj alone), Qiran (combining Umrah and Hajj in one ihram), and Tamattu' (Umrah followed by exiting ihram, then entering ihram again for Hajj).",
      },
      {
        question: "Which type of Hajj did the Prophet (PBUH) perform in his Farewell Hajj?",
        options: [
          "Ifrad",
          "Qiran",
          "Tamattu'",
          "None of the above",
        ],
        correctAnswer: "Qiran",
        explanation:
          "The Prophet (PBUH) performed Qiran in his Farewell Hajj, combining Umrah and Hajj without exiting ihram in between, although he instructed many of his companions to perform Tamattu'.",
      },
      {
        question: "What is the most important pillar (rukn) of Hajj without which Hajj is invalid?",
        options: [
          "Stoning the Jamarat",
          "Standing at Arafah (Wuquf)",
          "Shaving the head",
          "Spending the night in Mina",
        ],
        correctAnswer: "Standing at Arafah (Wuquf)",
        explanation:
          "The Prophet (PBUH) said: 'Hajj is Arafah.' (Ahmad, Abu Dawud, al-Nasa'i – authenticated). Missing the standing at Arafah invalidates the entire Hajj.",
      },
      {
        question: "On which day does the standing at Arafah take place?",
        options: [
          "8th of Dhul-Hijjah",
          "9th of Dhul-Hijjah",
          "10th of Dhul-Hijjah",
          "11th of Dhul-Hijjah",
        ],
        correctAnswer: "9th of Dhul-Hijjah",
        explanation:
          "The Day of Arafah is the 9th of Dhul-Hijjah. Pilgrims stand at Arafah from after midday until sunset, making du'a and dhikr.",
      },
      {
        question: "What is the Talbiyah that the pilgrim recites?",
        options: [
          "Allahu Akbar only",
          "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
          "Subhanallah walhamdulillah",
          "La ilaha illallah",
        ],
        correctAnswer: "Labbayk Allahumma labbayk, labbayka la sharika laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
        explanation:
          "This is the authentic Talbiyah of the Prophet (PBUH): 'Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise and blessings are Yours, and all sovereignty, You have no partner.' (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What is the miqat?",
        options: [
          "The place of sacrifice",
          "The boundary points from which one must enter the state of ihram for Hajj or Umrah",
          "The mountain of Arafah",
          "The Black Stone",
        ],
        correctAnswer: "The boundary points from which one must enter the state of ihram for Hajj or Umrah",
        explanation:
          "The miqats are the designated stations fixed by the Prophet (PBUH) beyond which a person intending Hajj or Umrah must not pass without entering ihram.",
      },
      {
        question: "What are the two pieces of unstitched cloth worn by a male pilgrim in ihram called?",
        options: [
          "Thobe and turban",
          "Izar (lower garment) and Rida' (upper garment)",
          "Shirt and trousers",
          "Jubbah and cloak",
        ],
        correctAnswer: "Izar (lower garment) and Rida' (upper garment)",
        explanation:
          "A man in ihram wears two unstitched pieces of cloth: the izar wrapped around the lower body and the rida' placed over the upper body, with the head uncovered.",
      },
      {
        question: "Is a woman required to wear a specific colour or unstitched garments for ihram?",
        options: [
          "Yes, she must wear white unstitched clothes",
          "No – a woman wears her ordinary modest clothing; she is only forbidden from the niqab and gloves",
          "She must wear black only",
          "She must uncover her face and hands at all times",
        ],
        correctAnswer: "No – a woman wears her ordinary modest clothing; she is only forbidden from the niqab and gloves",
        explanation:
          "The Prophet (PBUH) said: 'A woman in ihram should not wear a face-veil (niqab) or gloves.' (Sahih al-Bukhari). She may wear any modest clothing that covers her properly.",
      },
      {
        question: "How many circuits (shawt) are performed in Tawaf?",
        options: [
          "Three",
          "Five",
          "Seven",
          "Ten",
        ],
        correctAnswer: "Seven",
        explanation:
          "Tawaf consists of seven complete circuits around the Ka'bah, beginning and ending at the Black Stone, with the Ka'bah on one's left.",
      },
      {
        question: "What is Sa'i?",
        options: [
          "Circling the Ka'bah",
          "Walking/running seven times between the hills of Safa and Marwah",
          "Stoning the pillars",
          "Standing at Arafah",
        ],
        correctAnswer: "Walking/running seven times between the hills of Safa and Marwah",
        explanation:
          "Sa'i is the rite of walking seven times between Safa and Marwah, beginning at Safa and ending at Marwah, in emulation of Hajar (AS) seeking water for her son Isma'il.",
      },
      {
        question: "Where do pilgrims spend the night of the 8th of Dhul-Hijjah (Yawm al-Tarwiyah)?",
        options: [
          "In Makkah",
          "In Mina",
          "In Arafah",
          "In Muzdalifah",
        ],
        correctAnswer: "In Mina",
        explanation:
          "On the 8th of Dhul-Hijjah the pilgrims proceed to Mina after entering ihram and spend the night there, praying five prayers (Zuhr to Fajr).",
      },
      {
        question: "After sunset on the Day of Arafah, where do the pilgrims go?",
        options: [
          "Back to Makkah",
          "To Muzdalifah",
          "Directly to the Jamarat",
          "To Madinah",
        ],
        correctAnswer: "To Muzdalifah",
        explanation:
          "After sunset on the 9th, the pilgrims leave Arafah and go to Muzdalifah, where they pray Maghrib and Isha combined and spend the night.",
      },
      {
        question: "What is the first major rite performed on the morning of the 10th of Dhul-Hijjah?",
        options: [
          "Tawaf al-Ifadah",
          "Stoning Jamrat al-Aqabah",
          "Sa'i",
          "Farewell Tawaf",
        ],
        correctAnswer: "Stoning Jamrat al-Aqabah",
        explanation:
          "On the morning of the 10th (Yawm al-Nahr), the first act is to stone Jamrat al-Aqabah with seven pebbles, saying 'Allahu Akbar' with each throw.",
      },
      {
        question: "What is preferred for a man after the sacrifice on the 10th of Dhul-Hijjah?",
        options: [
          "To cut a small amount of hair",
          "To shave the entire head",
          "To leave the hair as it is",
          "To dye the hair",
        ],
        correctAnswer: "To shave the entire head",
        explanation:
          "The Prophet (PBUH) prayed for mercy three times upon those who shaved their heads and only once upon those who shortened their hair. (Sahih al-Bukhari and Muslim). Shaving is therefore preferred for men.",
      },
      {
        question: "How much hair should a woman cut after the sacrifice?",
        options: [
          "She should shave her head",
          "The length of a fingertip from each portion of her hair",
          "She does not cut any hair",
          "She cuts half of her hair",
        ],
        correctAnswer: "The length of a fingertip from each portion of her hair",
        explanation:
          "Women do not shave; they cut a small amount (approximately the length of a fingertip) from their hair. This is the established practice.",
      },
      {
        question: "What is Tawaf al-Ifadah (also called Tawaf az-Ziyarah)?",
        options: [
          "The farewell circumambulation",
          "The main Tawaf of Hajj that is a pillar of Hajj",
          "The Tawaf of arrival",
          "A voluntary Tawaf",
        ],
        correctAnswer: "The main Tawaf of Hajj that is a pillar of Hajj",
        explanation:
          "Tawaf al-Ifadah is one of the pillars of Hajj. It is performed after the stoning, sacrifice and shaving/cutting on the 10th or during the days of Tashriq.",
      },
      {
        question: "What is the Farewell Tawaf (Tawaf al-Wada')?",
        options: [
          "A pillar of Hajj",
          "An obligatory act performed as the last thing before leaving Makkah",
          "A recommended act only",
          "Only for residents of Makkah",
        ],
        correctAnswer: "An obligatory act performed as the last thing before leaving Makkah",
        explanation:
          "Ibn Abbas (RA) reported that the people were ordered to make the last of their acts the Tawaf around the House, except for the menstruating woman who is excused. (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "On which days are the three Jamarat stoned?",
        options: [
          "Only on the 10th",
          "On the 10th (Jamrat al-Aqabah only) and on the 11th, 12th (and 13th if one stays)",
          "Only on the 11th and 12th",
          "Every day of Dhul-Hijjah",
        ],
        correctAnswer: "On the 10th (Jamrat al-Aqabah only) and on the 11th, 12th (and 13th if one stays)",
        explanation:
          "On the 10th only Jamrat al-Aqabah is stoned. On the 11th and 12th (and optionally the 13th) all three Jamarat are stoned, starting with the small one and ending with the large one.",
      },
      {
        question: "What is the minimum number of pebbles thrown at each Jamarah?",
        options: [
          "Three",
          "Five",
          "Seven",
          "Ten",
        ],
        correctAnswer: "Seven",
        explanation:
          "Seven small pebbles are thrown at each Jamarah, one after another, saying 'Allahu Akbar' with each throw. The pebbles should be the size of a chickpea or slightly larger.",
      },
      {
        question: "Is it permissible for a pilgrim to leave Mina on the 12th before sunset?",
        options: [
          "No, one must stay until the 13th",
          "Yes – if one has completed the stoning on the 12th, one may hasten and leave (the concession of ta'jil)",
          "Only men may leave early",
          "Only if one is sick",
        ],
        correctAnswer: "Yes – if one has completed the stoning on the 12th, one may hasten and leave (the concession of ta'jil)",
        explanation:
          "Allah says: 'Then whoever hastens (his departure) in two days, there is no sin on him, and whoever delays, there is no sin on him.' (Al-Baqarah 2:203). One who finishes the rites on the 12th may leave before sunset.",
      },
      {
        question: "What is the hadiy?",
        options: [
          "The hair that is cut",
          "The sacrificial animal offered by the pilgrim performing Tamattu' or Qiran",
          "The cloth of ihram",
          "The pebbles used for stoning",
        ],
        correctAnswer: "The sacrificial animal offered by the pilgrim performing Tamattu' or Qiran",
        explanation:
          "Those performing Tamattu' or Qiran must offer a sacrifice (hady). Allah says: 'Whoever performs the Umrah in the months of Hajj, before the Hajj, must slaughter a hady such as he can afford.' (Al-Baqarah 2:196).",
      },
      {
        question: "If a person cannot afford the hadiy, what should he do?",
        options: [
          "Nothing",
          "Fast three days during Hajj and seven days after returning home (ten in total)",
          "Give charity only",
          "Repeat the Hajj",
        ],
        correctAnswer: "Fast three days during Hajj and seven days after returning home (ten in total)",
        explanation:
          "Allah says: '...but if he cannot afford it, he should fast three days during the Hajj and seven days after his return, making ten days in all.' (Al-Baqarah 2:196).",
      },
      {
        question: "What is one of the greatest virtues of the Day of Arafah?",
        options: [
          "It is the day of Eid",
          "There is no day on which Allah sets free more slaves from the Fire than the Day of Arafah",
          "It is the day of the first revelation",
          "It is the day the Quran was completed",
        ],
        correctAnswer: "There is no day on which Allah sets free more slaves from the Fire than the Day of Arafah",
        explanation:
          "Aishah (RA) reported that the Prophet (PBUH) said: 'There is no day on which Allah sets free more slaves from Hell than He does on the Day of Arafah.' (Sahih Muslim).",
      },
      {
        question: "What should a pilgrim avoid while in the state of ihram?",
        options: [
          "Praying and making dhikr",
          "Cutting hair or nails, using perfume, wearing stitched clothing (for men), hunting, and marital relations",
          "Eating and drinking",
          "Speaking to others",
        ],
        correctAnswer: "Cutting hair or nails, using perfume, wearing stitched clothing (for men), hunting, and marital relations",
        explanation:
          "These are among the well-known prohibitions of ihram. Violating them deliberately requires a fidyah (expiation) according to the type of violation.",
      },
      {
        question: "Is Hajj accepted if performed before the age of puberty?",
        options: [
          "Yes, and it fulfils the obligatory Hajj",
          "It is valid as a voluntary Hajj, but the person must still perform the obligatory Hajj after reaching puberty",
          "It is completely invalid",
          "Only if the parents intend it for the child",
        ],
        correctAnswer: "It is valid as a voluntary Hajj, but the person must still perform the obligatory Hajj after reaching puberty",
        explanation:
          "The Prophet (PBUH) said the pen is lifted from the child until he reaches puberty. A child's Hajj is valid and rewarded, but it does not discharge the obligatory Hajj that becomes due after maturity.",
      },
      {
        question: "What is the ruling on a woman performing Hajj without a mahram according to the majority of scholars?",
        options: [
          "Fully permissible",
          "Not permissible; she must have a mahram or husband with her for the journey",
          "Only allowed if she travels with a group of women",
          "Only allowed for elderly women",
        ],
        correctAnswer: "Not permissible; she must have a mahram or husband with her for the journey",
        explanation:
          "The Prophet (PBUH) said that a woman should not travel except with a mahram. The majority of scholars apply this to the journey of Hajj as well.",
      },
      {
        question: "What did the Prophet (PBUH) say about following up Hajj and Umrah?",
        options: [
          "They have no special virtue",
          "They wipe out poverty and sins just as the furnace removes impurities from iron",
          "They should be done only once",
          "They are only for the rich",
        ],
        correctAnswer: "They wipe out poverty and sins just as the furnace removes impurities from iron",
        explanation:
          "The Prophet (PBUH) said: 'Follow up the Hajj and the Umrah, for they remove poverty and sins as the bellows remove the impurities from iron, gold and silver.' (Authenticated by al-Albani).",
      },
      {
        question: "What is the first thing a pilgrim should do upon entering al-Masjid al-Haram?",
        options: [
          "Pray two rak'ahs anywhere",
          "Go to the Black Stone and begin Tawaf (after the appropriate entry du'a)",
          "Go directly to Safa",
          "Sit and rest",
        ],
        correctAnswer: "Go to the Black Stone and begin Tawaf (after the appropriate entry du'a)",
        explanation:
          "The Sunnah is to enter with the right foot, say the entry supplication, then proceed to the Black Stone to begin the Tawaf of arrival or the Tawaf of Umrah/Hajj.",
      },
      {
        question: "What is the ruling on kissing the Black Stone?",
        options: [
          "It is obligatory",
          "It is a Sunnah; if one cannot reach it due to the crowd, pointing to it and saying Allahu Akbar is sufficient",
          "It is forbidden",
          "It is only for men",
        ],
        correctAnswer: "It is a Sunnah; if one cannot reach it due to the crowd, pointing to it and saying Allahu Akbar is sufficient",
        explanation:
          "The Prophet (PBUH) kissed the Black Stone. When the crowd is intense, the Sunnah is to face it, point with the hand or a stick, and say Allahu Akbar, without harming others.",
      },
      {
        question: "During which part of Tawaf is it recommended for men to uncover the right shoulder (idtiba')?",
        options: [
          "Throughout all seven circuits of every Tawaf",
          "During the Tawaf of arrival (Tawaf al-Qudum) or the Tawaf of Umrah for those performing Tamattu'",
          "Only during the Farewell Tawaf",
          "Never",
        ],
        correctAnswer: "During the Tawaf of arrival (Tawaf al-Qudum) or the Tawaf of Umrah for those performing Tamattu'",
        explanation:
          "Idtiba' (placing the middle of the upper garment under the right armpit and the ends over the left shoulder) is a Sunnah during the Tawaf of arrival for those who will perform Sa'i afterwards.",
      },
      {
        question: "What is the Sunnah regarding the pace of walking during the first three circuits of Tawaf on arrival for men?",
        options: [
          "Always walk slowly",
          "Raml or walking quickly with short steps",
          "Run at full speed all seven circuits",
          "There is no Sunnah regarding pace",
        ],
        correctAnswer: "Raml (walking quickly with short steps) during the first three circuits of the arrival Tawaf",
        explanation:
          "The Prophet (PBUH) performed raml in the first three circuits of the Tawaf of arrival. It is a Sunnah for men who are able.",
      },
      {
        question: "Where should the pilgrim face while making du'a at Arafah?",
        options: [
          "Towards the mountain of Rahmah only",
          "Towards the Qiblah",
          "Towards Mina",
          "Any direction is the same",
        ],
        correctAnswer: "Towards the Qiblah",
        explanation:
          "The Sunnah is to face the Qiblah while standing at Arafah, raise the hands, and make abundant du'a, dhikr and istighfar until sunset.",
      },
      {
        question: "Is it necessary to stand on the mountain of Rahmah itself at Arafah?",
        options: [
          "Yes, it is a pillar",
          "No – the entire plain of Arafah is a place of standing; the Prophet (PBUH) said 'All of Arafah is a standing place'",
          "Only the base of the mountain is valid",
          "One must climb to the top",
        ],
        correctAnswer: "No – the entire plain of Arafah is a place of standing; the Prophet (PBUH) said 'All of Arafah is a standing place'",
        explanation:
          "The Prophet (PBUH) said: 'I have stood here, and all of Arafah is a place of standing.' (Sahih Muslim). Being anywhere within the boundaries of Arafah is sufficient.",
      },
      {
        question: "What is the ruling on combining and shortening the prayers at Arafah?",
        options: [
          "It is not allowed",
          "Zuhr and Asr are combined and shortened at the time of Zuhr",
          "Only Maghrib and Isha are combined",
          "All five prayers are combined into one",
        ],
        correctAnswer: "Zuhr and Asr are combined and shortened at the time of Zuhr",
        explanation:
          "The Prophet (PBUH) prayed Zuhr and Asr at Arafah combined and shortened (two rak'ahs each) at the time of Zuhr, with one adhan and two iqamahs.",
      },
    ],
    intermediate: [
      {
        question: "What are the four pillars (arkan) of Hajj according to the majority of scholars?",
        options: [
          "Ihram, Tawaf, Sa'i, and Stoning",
          "Ihram, Standing at Arafah, Tawaf al-Ifadah, and Sa'i",
          "Mina, Arafah, Muzdalifah, and Jamarat",
          "Talbiyah, Tawaf, Sacrifice, and Shaving",
        ],
        correctAnswer: "Ihram, Standing at Arafah, Tawaf al-Ifadah, and Sa'i",
        explanation:
          "According to the Hanbali school and many scholars (as summarised by al-Bahuti and others): 1) Ihram (intention), 2) Standing at Arafah, 3) Tawaf al-Ifadah, 4) Sa'i. Missing any one of these invalidates the Hajj.",
      },
      {
        question: "What are the seven obligatory acts (wajibat) of Hajj according to many scholars?",
        options: [
          "Only the four pillars",
          "Entering ihram from the miqat, standing at Arafah until sunset, overnight in Mina, overnight in Muzdalifah, stoning the Jamarat, shaving/cutting hair, and the Farewell Tawaf",
          "Only Tawaf and Sa'i",
          "Only the days of Tashriq",
        ],
        correctAnswer: "Entering ihram from the miqat, standing at Arafah until sunset, overnight in Mina, overnight in Muzdalifah, stoning the Jamarat, shaving/cutting hair, and the Farewell Tawaf",
        explanation:
          "These seven are widely listed as wajibat. Omitting a wajib does not invalidate Hajj but requires a compensatory sacrifice (dam) according to the majority.",
      },
      {
        question: "What is the difference between a pillar (rukn) and an obligatory act (wajib) in Hajj?",
        options: [
          "There is no difference",
          "A pillar is essential; missing it invalidates Hajj. A wajib, if missed, does not invalidate Hajj but requires a sacrifice as compensation",
          "A wajib is more important than a pillar",
          "Both can be missed without consequence",
        ],
        correctAnswer: "A pillar is essential; missing it invalidates Hajj. A wajib, if missed, does not invalidate Hajj but requires a sacrifice as compensation",
        explanation:
          "This is the standard distinction used by the jurists. The four arkan must be performed for the Hajj to be valid; the wajibat are required but compensated for if omitted.",
      },
      {
        question: "In Tamattu', when does the pilgrim exit the first ihram?",
        options: [
          "After the Farewell Tawaf",
          "After completing the Umrah (Tawaf, Sa'i and cutting/shaving the hair)",
          "After standing at Arafah",
          "He never exits until the end of Hajj",
        ],
        correctAnswer: "After completing the Umrah (Tawaf, Sa'i and cutting/shaving the hair)",
        explanation:
          "In Tamattu' the pilgrim performs Umrah first, exits ihram completely, enjoys normal life, then enters a new ihram for Hajj on the 8th of Dhul-Hijjah.",
      },
      {
        question: "In Qiran, does the pilgrim perform Sa'i once or twice?",
        options: [
          "Twice – once for Umrah and once for Hajj",
          "Once is sufficient for both, according to the stronger view, although some perform it twice",
          "He does not perform Sa'i at all",
          "Only after the Farewell Tawaf",
        ],
        correctAnswer: "Once is sufficient for both, according to the stronger view, although some perform it twice",
        explanation:
          "The Prophet (PBUH) performed Qiran and did Sa'i only once. Many scholars hold that one Sa'i suffices for the one who is performing Qiran.",
      },
      {
        question: "What is the ruling if a pilgrim passes the miqat without entering ihram?",
        options: [
          "His Hajj is invalid",
          "He must return to the miqat and enter ihram from there; if he cannot, he enters ihram from where he is and offers a sacrifice",
          "Nothing is required",
          "He only needs to say the Talbiyah",
        ],
        correctAnswer: "He must return to the miqat and enter ihram from there; if he cannot, he enters ihram from where he is and offers a sacrifice",
        explanation:
          "Entering ihram from the miqat is obligatory. Neglecting it requires a compensatory sacrifice if one cannot return.",
      },
      {
        question: "Until when must a pilgrim who arrives at Arafah by day remain there?",
        options: [
          "Until midday only",
          "Until sunset",
          "Until midnight",
          "Until the next morning",
        ],
        correctAnswer: "Until sunset",
        explanation:
          "Standing at Arafah until sunset is obligatory for the one who is present there during the day. Leaving before sunset without a valid reason requires a sacrifice according to many scholars.",
      },
      {
        question: "What is the minimum time that must be spent in Muzdalifah according to many scholars?",
        options: [
          "The entire night",
          "Until after midnight (or the time when the moon sets for those who have an excuse)",
          "Only a few minutes",
          "Until sunrise only",
        ],
        correctAnswer: "Until after midnight (or the time when the moon sets for those who have an excuse)",
        explanation:
          "The majority require staying in Muzdalifah for the greater part of the night or at least until after midnight. The weak, women and those caring for them are given a concession to leave after the moon has set.",
      },
      {
        question: "In what order should the three main rites of the 10th of Dhul-Hijjah ideally be performed?",
        options: [
          "Shaving, then stoning, then sacrifice",
          "Stoning Jamrat al-Aqabah, then sacrifice, then shaving/cutting the hair",
          "Sacrifice, then Tawaf, then stoning",
          "Any order is exactly the same",
        ],
        correctAnswer: "Stoning Jamrat al-Aqabah, then sacrifice, then shaving/cutting the hair",
        explanation:
          "This is the order performed by the Prophet (PBUH). However, the majority of scholars hold that if the order is changed there is no penalty, based on the Hadith in which the Prophet said 'Do it, and there is no harm' when people reported different sequences.",
      },
      {
        question: "What is the ruling on offering the sacrifice before stoning Jamrat al-Aqabah?",
        options: [
          "It invalidates the sacrifice",
          "It is permissible and there is no harm, according to the authentic Hadith",
          "It is strictly forbidden",
          "Only camels may be sacrificed early",
        ],
        correctAnswer: "It is permissible and there is no harm, according to the authentic Hadith",
        explanation:
          "When people told the Prophet (PBUH) that they had done some rites before others, he repeatedly said: 'Do it, and there is no harm.' (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What is the fidyah for most violations of the prohibitions of ihram (such as cutting hair, using perfume, or wearing stitched clothing for men)?",
        options: [
          "A camel must be sacrificed",
          "A choice between fasting three days, or feeding six poor people, or sacrificing a sheep",
          "Only repentance",
          "Repeating the entire Hajj",
        ],
        correctAnswer: "A choice between fasting three days, or feeding six poor people, or sacrificing a sheep",
        explanation:
          "For the majority of the restrictions of ihram (other than intercourse and marriage contracts), the fidyah is the choice of three days' fasting, feeding six poor persons, or a sheep.",
      },
      {
        question: "What is the penalty for having sexual intercourse before the first stage of exiting ihram?",
        options: [
          "Nothing",
          "A camel must be sacrificed and the Hajj is invalid; it must be repeated",
          "Only fasting",
          "Only feeding the poor",
        ],
        correctAnswer: "A camel must be sacrificed and the Hajj is invalid; it must be repeated",
        explanation:
          "Intercourse before the partial exit from ihram (after stoning, sacrifice and shaving) is one of the most serious violations. It invalidates the Hajj and requires a camel as fidyah, and the person must complete the remaining rites and repeat the Hajj later.",
      },
      {
        question: "Is the Farewell Tawaf required of a menstruating woman?",
        options: [
          "Yes, she must wait until she is pure",
          "No – she is excused from the Farewell Tawaf",
          "She must perform it in a state of impurity",
          "She must send someone to perform it on her behalf",
        ],
        correctAnswer: "No – she is excused from the Farewell Tawaf",
        explanation:
          "Ibn Abbas (RA) reported that the Prophet (PBUH) excused the menstruating woman from the Farewell Tawaf. (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What is the ruling on performing Tawaf al-Ifadah before stoning Jamrat al-Aqabah?",
        options: [
          "It is invalid",
          "It is permissible according to many scholars, especially for those with excuses, although the preferred order is stoning first",
          "It is only allowed for women",
          "It cancels the stoning",
        ],
        correctAnswer: "It is permissible according to many scholars, especially for those with excuses, although the preferred order is stoning first",
        explanation:
          "The flexibility given by the Prophet (PBUH) in the sequence of the rites of the 10th allows this, particularly when there is overcrowding or hardship.",
      },
      {
        question: "What is the Sunnah regarding the size of the pebbles used for stoning?",
        options: [
          "As large as possible",
          "Small pebbles, approximately the size of a chickpea or a fava bean",
          "Stones the size of a fist",
          "Any size is acceptable",
        ],
        correctAnswer: "Small pebbles, approximately the size of a chickpea or a fava bean",
        explanation:
          "Ibn Abbas (RA) picked up pebbles for the Prophet (PBUH) that were suitable for 'khadhf' (flicking). The Prophet told him to throw ones like those and warned against exaggeration in religion.",
      },
      {
        question: "In which direction should the pilgrim face when stoning Jamrat al-Aqabah?",
        options: [
          "Towards the Qiblah",
          "With Makkah to his left and Mina to his right (facing the Jamarah)",
          "Towards Madinah",
          "Any direction",
        ],
        correctAnswer: "With Makkah to his left and Mina to his right (facing the Jamarah)",
        explanation:
          "This is the description given in the authentic narrations of the Prophet's action when stoning Jamrat al-Aqabah.",
      },
      {
        question: "What is the ruling on staying overnight in Mina during the days of Tashriq?",
        options: [
          "It is a pillar",
          "It is obligatory according to the majority; missing it without excuse requires a sacrifice",
          "It is only recommended",
          "It is not required at all",
        ],
        correctAnswer: "It is obligatory according to the majority; missing it without excuse requires a sacrifice",
        explanation:
          "Spending the nights of the 11th and 12th (and 13th if one stays) in Mina is listed among the wajibat by many scholars. Those who have a valid excuse (such as water carriers or shepherds) are exempted.",
      },
      {
        question: "Can a person who is performing Hajj on behalf of someone else (Hajj Badal) do so if he has not yet performed his own obligatory Hajj?",
        options: [
          "Yes, freely",
          "It is disliked or prohibited according to many scholars; one should perform one's own obligatory Hajj first",
          "It is recommended",
          "Only if the other person is a parent",
        ],
        correctAnswer: "It is disliked or prohibited according to many scholars; one should perform one's own obligatory Hajj first",
        explanation:
          "The principle is that a person should discharge his own obligation before performing the rite on behalf of another. Some schools regard it as makruh or invalid for the one who has not yet done his own Hajj.",
      },
      {
        question: "What is the best type of Hajj according to many scholars, based on the final instruction of the Prophet (PBUH)?",
        options: [
          "Ifrad",
          "Qiran",
          "Tamattu'",
          "Any type is exactly equal",
        ],
        correctAnswer: "Tamattu'",
        explanation:
          "Although the Prophet (PBUH) himself performed Qiran, he ordered many of his companions to make it Tamattu'. Many scholars therefore consider Tamattu' the most virtuous for those coming from outside the Haram.",
      },
      {
        question: "What should a pilgrim do if he is unable to spend the night in Muzdalifah due to overcrowding or illness?",
        options: [
          "His Hajj is invalid",
          "He is excused; the obligation is lifted when there is genuine hardship",
          "He must repeat the night later",
          "He must offer a camel",
        ],
        correctAnswer: "He is excused; the obligation is lifted when there is genuine hardship",
        explanation:
          "Islamic law is based on ease. When a wajib becomes extremely difficult or impossible, the person is excused and no compensation is required in many such cases of necessity.",
      },
      {
        question: "Is it permissible to perform the stoning of the Jamarat on behalf of someone who is unable (such as a sick or elderly person)?",
        options: [
          "No, never",
          "Yes – a person who has already stoned for himself may stone on behalf of another who is unable",
          "Only a mahram may do so",
          "Only the officials may do so",
        ],
        correctAnswer: "Yes – a person who has already stoned for himself may stone on behalf of another who is unable",
        explanation:
          "The Companions stoned on behalf of the weak and the children. The one who is able should first stone for himself, then for the person he is representing.",
      },
      {
        question: "What is the ruling on covering the face while sleeping in the state of ihram?",
        options: [
          "Fully permissible",
          "Not permissible; the face of a man in ihram should not be covered",
          "Only women may cover",
          "It requires a camel as fidyah",
        ],
        correctAnswer: "Not permissible; the face of a man in ihram should not be covered",
        explanation:
          "Covering the head (and by extension the face for men) is prohibited in ihram. Care should be taken even while sleeping not to cover the face deliberately.",
      },
      {
        question: "What is the status of Tawaf al-Qudum (the arrival Tawaf)?",
        options: [
          "It is a pillar",
          "It is a Sunnah for the one who enters Makkah for Hajj before the Day of Arafah",
          "It is obligatory on everyone",
          "It replaces Tawaf al-Ifadah",
        ],
        correctAnswer: "It is a Sunnah for the one who enters Makkah for Hajj before the Day of Arafah",
        explanation:
          "Tawaf al-Qudum is a recommended Sunnah for the non-resident who arrives for Hajj. It is not required of the resident of Makkah or of the one who arrives after the standing at Arafah.",
      },
      {
        question: "What did the Prophet (PBUH) say about the pilgrims?",
        options: [
          "They are ordinary travellers",
          "The pilgrims for Hajj and Umrah are the guests of Allah; if they ask Him He gives them, and if they seek His forgiveness He forgives them",
          "They have no special status",
          "They are only guests if they are poor",
        ],
        correctAnswer: "The pilgrims for Hajj and Umrah are the guests of Allah; if they ask Him He gives them, and if they seek His forgiveness He forgives them",
        explanation:
          "This meaning is reported in several narrations. The pilgrims are described as the delegation of Allah, whom He has invited and whom He answers.",
      },
      {
        question: "Is it permissible to perform Sa'i on the upper levels of the Masa'a?",
        options: [
          "No, only the ground floor is valid",
          "Yes – the entire Masa'a in its multi-level structure is valid for Sa'i",
          "Only the middle level is valid",
          "Only at night",
        ],
        correctAnswer: "Yes – the entire Masa'a in its multi-level structure is valid for Sa'i",
        explanation:
          "Contemporary scholars and the Saudi fatwa bodies have confirmed that Sa'i on any of the levels of the expanded Masa'a is valid, as they are all within the area of Safa and Marwah.",
      },
      {
        question: "What is the ruling on performing Tawaf on the upper levels of the Haram?",
        options: [
          "Invalid",
          "Valid – the multi-level Mataf is accepted by the scholars",
          "Only the ground floor counts",
          "Only for women",
        ],
        correctAnswer: "Valid – the multi-level Mataf is accepted by the scholars",
        explanation:
          "The expanded Mataf on multiple levels is considered valid for Tawaf by the major contemporary fatwa councils, as it remains within the area surrounding the Ka'bah.",
      },
      {
        question: "What should a person do if he doubts the number of circuits he has performed in Tawaf?",
        options: [
          "Start over completely",
          "Base his action on the lower number (the number he is certain of) and complete the remainder",
          "Ignore the doubt",
          "Ask someone next to him to decide",
        ],
        correctAnswer: "Base his action on the lower number (the number he is certain of) and complete the remainder",
        explanation:
          "The principle in acts of worship is to act upon certainty and discard doubt. If one is unsure whether he has done five or six circuits, he counts five and performs the remaining two.",
      },
      {
        question: "Is the prayer of two rak'ahs after Tawaf a wajib or a Sunnah?",
        options: [
          "A pillar of Tawaf",
          "A highly recommended Sunnah; many scholars regard it as required with the Tawaf",
          "Completely optional with no merit",
          "Only for the Farewell Tawaf",
        ],
        correctAnswer: "A highly recommended Sunnah; many scholars regard it as required with the Tawaf",
        explanation:
          "The Prophet (PBUH) prayed two rak'ahs after Tawaf behind Maqam Ibrahim. It is a confirmed Sunnah; some schools treat it as closely linked to the validity of the Tawaf.",
      },
      {
        question: "What is the du'a that is specifically reported at Safa and Marwah?",
        options: [
          "Only Allahu Akbar",
          "Facing the Qiblah, saying Allahu Akbar three times, and making the du'a: 'La ilaha illallah wahdahu la sharika lah...' and personal supplications",
          "There is no specific du'a",
          "Only the Talbiyah",
        ],
        correctAnswer: "Facing the Qiblah, saying Allahu Akbar three times, and making the du'a: 'La ilaha illallah wahdahu la sharika lah...' and personal supplications",
        explanation:
          "The Prophet (PBUH) climbed Safa, faced the Qiblah, declared the oneness of Allah, made takbir, and supplicated. He did the same at Marwah. (Sahih Muslim – Hadith of Jabir).",
      },
      {
        question: "What is the ruling on a person who enters ihram for Hajj but then is prevented from reaching Makkah (ihsar)?",
        options: [
          "He remains in ihram indefinitely",
          "He offers a sacrifice where he is, shaves his head, and exits ihram",
          "He must wait until next year",
          "His ihram is automatically cancelled",
        ],
        correctAnswer: "He offers a sacrifice where he is, shaves his head, and exits ihram",
        explanation:
          "Allah says: 'And if you are prevented, then offer a sacrifice such as you can afford...' (Al-Baqarah 2:196). The prevented person slaughters, shaves, and ends his ihram.",
      },
    ],
    advanced: [
      {
        question: "According to the detailed Hadith of Jabir (RA) describing the Farewell Hajj, what did the Prophet (PBUH) do after praying Fajr in Muzdalifah?",
        options: [
          "He went immediately to Makkah",
          "He came to al-Mash'ar al-Haram, faced the Qiblah, made du'a, takbir and tahlil until the daylight was clear, then left before sunrise",
          "He stoned the Jamarat before sunrise",
          "He stayed until midday",
        ],
        correctAnswer: "He came to al-Mash'ar al-Haram, faced the Qiblah, made du'a, takbir and tahlil until the daylight was clear, then left before sunrise",
        explanation:
          "The long Hadith of Jabir in Sahih Muslim is the most comprehensive description of the Prophet's Hajj. After Fajr in Muzdalifah he stood at al-Mash'ar al-Haram making dhikr until just before sunrise, then moved on.",
      },
      {
        question: "In the Farewell Hajj, how many camels did the Prophet (PBUH) sacrifice, and how many did he slaughter with his own hand?",
        options: [
          "Seven in total",
          "One hundred camels; he slaughtered sixty-three with his own hand and gave the rest to Ali (RA)",
          "Only one sheep",
          "Thirty-three camels",
        ],
        correctAnswer: "One hundred camels; he slaughtered sixty-three with his own hand and gave the rest to Ali (RA)",
        explanation:
          "The Hadith of Jabir states that the Prophet (PBUH) brought one hundred camels. He slaughtered sixty-three with his own hand and ordered Ali to slaughter the remainder. A piece from each was cooked and he ate from the meat and broth.",
      },
      {
        question: "What is the precise definition of 'ability' (istita'ah) that makes Hajj obligatory?",
        options: [
          "Merely wishing to go",
          "Physical health, financial means for the journey and provisions, and (for a woman) the presence of a mahram, surplus to the needs of those one is obliged to support",
          "Only financial wealth",
          "Only physical strength",
        ],
        correctAnswer: "Physical health, financial means for the journey and provisions, and (for a woman) the presence of a mahram, surplus to the needs of those one is obliged to support",
        explanation:
          "The scholars define istita'ah as the combination of bodily capability, sufficient wealth for the round trip and maintenance of dependents during absence, and the legal ability to travel (including a mahram for women).",
      },
      {
        question: "What is the ruling if a person delays Hajj after it has become obligatory upon him and then dies?",
        options: [
          "Nothing is required of the heirs",
          "It is recommended that Hajj be performed on his behalf from his estate, and some scholars regard it as a debt that must be discharged",
          "His faith is incomplete forever",
          "Only fasting can compensate",
        ],
        correctAnswer: "It is recommended that Hajj be performed on his behalf from his estate, and some scholars regard it as a debt that must be discharged",
        explanation:
          "Many scholars treat the missed obligatory Hajj as a debt to Allah that should be fulfilled by the heirs from the deceased's estate, analogous to other outstanding obligations.",
      },
      {
        question: "In the advanced discussion of the pillars, why do some scholars count 'stoning the Jamarat' or 'overnight in Mina' differently?",
        options: [
          "Because there is no evidence",
          "Because there is a difference in classification between arkan and wajibat among the schools; the Hanbalis list four arkan while others may emphasise different elements as essential",
          "Because the Quran is silent",
          "Because only the Hanafis discuss it",
        ],
        correctAnswer: "Because there is a difference in classification between arkan and wajibat among the schools; the Hanbalis list four arkan while others may emphasise different elements as essential",
        explanation:
          "The core rites are agreed upon; the precise labelling of what is rukn versus wajib varies slightly among the four schools, which affects the consequence of omission.",
      },
      {
        question: "What is the wisdom behind the prohibition of wearing stitched clothing and covering the head in ihram for men?",
        options: [
          "There is no wisdom",
          "It creates a state of humility, equality among all pilgrims regardless of wealth or status, and a visible reminder that one is in a sacred state devoted to Allah",
          "It is only for climate reasons",
          "It is to make the pilgrimage difficult",
        ],
        correctAnswer: "It creates a state of humility, equality among all pilgrims regardless of wealth or status, and a visible reminder that one is in a sacred state devoted to Allah",
        explanation:
          "The outward form of ihram strips away worldly distinctions and places every pilgrim in the same simple attire, reinforcing the spiritual purpose of the journey.",
      },
      {
        question: "How did the Prophet (PBUH) respond when people reported that they had performed the rites of the 10th in different orders?",
        options: [
          "He ordered them to repeat the rites",
          "He said 'Do it, and there is no harm' for each variation that was reported",
          "He remained silent",
          "He specified only one correct order",
        ],
        correctAnswer: "He said 'Do it, and there is no harm' for each variation that was reported",
        explanation:
          "This is a well-known set of narrations in Sahih al-Bukhari and Muslim. The Prophet (PBUH) repeatedly affirmed that changing the order of stoning, sacrificing, shaving and Tawaf did not require any compensation.",
      },
      {
        question: "What is the status of the Hadith 'Hajj is Arafah' in terms of authenticity and legal implication?",
        options: [
          "It is weak",
          "It is authentic and establishes that the standing at Arafah is the central pillar without which Hajj is invalid",
          "It is only metaphorical",
          "It applies only to the Prophet",
        ],
        correctAnswer: "It is authentic and establishes that the standing at Arafah is the central pillar without which Hajj is invalid",
        explanation:
          "The Hadith is reported by Ahmad, Abu Dawud, al-Tirmidhi, al-Nasa'i and Ibn Majah, and authenticated by the major Hadith scholars. It is the primary textual basis for treating Wuquf at Arafah as a rukn.",
      },
      {
        question: "In the case of a person who commits a violation of ihram out of forgetfulness or ignorance, what is the ruling on the fidyah?",
        options: [
          "The fidyah is still required",
          "No fidyah is required; the excuse of forgetfulness or ignorance lifts the penalty for most violations",
          "He must repeat the Hajj",
          "Only fasting is required",
        ],
        correctAnswer: "No fidyah is required; the excuse of forgetfulness or ignorance lifts the penalty for most violations",
        explanation:
          "The general principle is that Allah does not hold a person accountable for what is done by mistake or out of ignorance when the prohibition is not known. This applies to the majority of the restrictions of ihram.",
      },
      {
        question: "What is the advanced ruling on performing Hajj with wealth that is acquired through doubtful or haram means?",
        options: [
          "The Hajj is still fully accepted",
          "The person should repent and try to purify the wealth; many scholars hold that Hajj performed with pure wealth is more likely to be accepted, and one should not deliberately use haram funds",
          "The Hajj is automatically invalid",
          "Only the travel is affected",
        ],
        correctAnswer: "The person should repent and try to purify the wealth; many scholars hold that Hajj performed with pure wealth is more likely to be accepted, and one should not deliberately use haram funds",
        explanation:
          "While the outward rites may be performed, the acceptance (qubul) of acts of worship is linked to the purity of the means. Scholars strongly advise using halal wealth for Hajj.",
      },
      {
        question: "How should a pilgrim who arrives in Makkah after the Day of Arafah proceed?",
        options: [
          "His Hajj is missed completely",
          "If he catches the standing at Arafah even for a moment before the dawn of the 10th, his Hajj is valid; otherwise he has missed the pillar",
          "He only performs Umrah",
          "He waits until next year automatically",
        ],
        correctAnswer: "If he catches the standing at Arafah even for a moment before the dawn of the 10th, his Hajj is valid; otherwise he has missed the pillar",
        explanation:
          "The time of standing extends from the noon of the 9th until the dawn of the 10th. Catching any part of that period is sufficient for the rukn of Arafah.",
      },
      {
        question: "What is the ruling on the Talbiyah – when does it begin and when does it end?",
        options: [
          "It is recited only once at the miqat",
          "It begins when entering ihram and continues until the stoning of Jamrat al-Aqabah on the 10th (for the one performing Hajj)",
          "It continues until the Farewell Tawaf",
          "It is only for Umrah",
        ],
        correctAnswer: "It begins when entering ihram and continues until the stoning of Jamrat al-Aqabah on the 10th (for the one performing Hajj)",
        explanation:
          "The pilgrim starts the Talbiyah upon entering ihram and ceases it when throwing the first pebble at Jamrat al-Aqabah, according to the practice of the Prophet (PBUH) and the majority of scholars.",
      },
      {
        question: "In the detailed fiqh of the hadiy, can one animal be shared?",
        options: [
          "A sheep cannot be shared; a camel or cow may be shared by up to seven people",
          "Any animal may be shared by any number",
          "Sharing is never allowed",
          "Only two people may share a sheep",
        ],
        correctAnswer: "A sheep cannot be shared; a camel or cow may be shared by up to seven people",
        explanation:
          "The Sunnah establishes that a camel or a cow may be shared by seven people for the hadiy or udhiyah, while a sheep is for one person only.",
      },
      {
        question: "What is the preferred place for the slaughter of the hadiy?",
        options: [
          "Anywhere in the world",
          "Within the boundaries of the Haram of Makkah (Mina is preferred)",
          "Only in one's home country",
          "Only in Arafah",
        ],
        correctAnswer: "Within the boundaries of the Haram of Makkah (Mina is preferred)",
        explanation:
          "The hadiy of Hajj should be slaughtered within the Haram. Mina is the preferred location because that is where the Prophet (PBUH) slaughtered.",
      },
      {
        question: "What is the ruling on selling the meat of the hadiy or giving it to non-poor people?",
        options: [
          "It may be sold freely",
          "The meat should be distributed; the pilgrim may eat from it, give to the poor, and give to others, but selling it is not permissible",
          "It must all be given to the poor only",
          "It must be burnt",
        ],
        correctAnswer: "The meat should be distributed; the pilgrim may eat from it, give to the poor, and give to others, but selling it is not permissible",
        explanation:
          "The Prophet (PBUH) ordered that the meat of the sacrificial animals be distributed. Selling the hadiy meat is prohibited; the pilgrim may consume a portion and give the rest away.",
      },
      {
        question: "How does the concept of 'Hajj Mabrur' relate to the behaviour of the pilgrim during the journey?",
        options: [
          "It only concerns the correct performance of the physical rites",
          "It includes both the correct performance of the rites and the avoidance of sin, obscenity and argumentation; the accepted Hajj transforms the pilgrim's character",
          "It is only about spending a lot of money",
          "It is only for those who go every year",
        ],
        correctAnswer: "It includes both the correct performance of the rites and the avoidance of sin, obscenity and argumentation; the accepted Hajj transforms the pilgrim's character",
        explanation:
          "The Hadith that links the pure return to the avoidance of rafath, fusuq and jidal shows that the moral and spiritual conduct is an integral part of an accepted Hajj.",
      },
      {
        question: "What is the advanced understanding of the verse 'Then let them complete the rites prescribed for them, fulfil their vows, and circumambulate the Ancient House' (22:29)?",
        options: [
          "It only refers to Umrah",
          "It encompasses the completion of the remaining rites after the standing at Arafah, including Tawaf al-Ifadah, and the fulfilment of any vows made",
          "It is only about animal sacrifice",
          "It has no practical ruling",
        ],
        correctAnswer: "It encompasses the completion of the remaining rites after the standing at Arafah, including Tawaf al-Ifadah, and the fulfilment of any vows made",
        explanation:
          "The verse is cited by the scholars as evidence for Tawaf al-Ifadah being a required rite, and for the general completion of all the prescribed acts of Hajj.",
      },
      {
        question: "In the methodology of the Salaf, how was the description of the Prophet's Hajj treated?",
        options: [
          "As a historical story only",
          "As the primary practical manual; the Hadith of Jabir and other detailed narrations were taken as the binding model for every generation",
          "As optional",
          "As applicable only to the Companions",
        ],
        correctAnswer: "As the primary practical manual; the Hadith of Jabir and other detailed narrations were taken as the binding model for every generation",
        explanation:
          "The principle 'Take your rites from me' (reported in various forms) made the observed practice of the Prophet (PBUH) the definitive source for the performance of Hajj.",
      },
      {
        question: "What is the ruling on a person who performs the stoning before the time it becomes due (for example, stoning the Jamarat of the 11th on the night before)?",
        options: [
          "It is fully valid according to all",
          "The majority hold that stoning before the time (after the zenith of the previous day for the days of Tashriq) is not valid; one must wait until the proper time",
          "It is only allowed for the 10th",
          "It requires a camel",
        ],
        correctAnswer: "The majority hold that stoning before the time (after the zenith of the previous day for the days of Tashriq) is not valid; one must wait until the proper time",
        explanation:
          "The time for stoning on the 11th and 12th begins after the sun has passed the zenith. Stoning earlier is not accepted according to the stronger view of the majority.",
      },
      {
        question: "What is the final comprehensive advice of the scholars for a person intending to perform Hajj?",
        options: [
          "Focus only on the physical exercise",
          "Learn the rites thoroughly, purify the intention for Allah alone, prepare with halal wealth, maintain good character throughout, and follow the Sunnah of the Prophet (PBUH) as closely as possible",
          "Rely only on the group leader",
          "Leave all learning until arrival in Makkah",
        ],
        correctAnswer: "Learn the rites thoroughly, purify the intention for Allah alone, prepare with halal wealth, maintain good character throughout, and follow the Sunnah of the Prophet (PBUH) as closely as possible",
        explanation:
          "An accepted Hajj combines correct knowledge, sincere intention, lawful means, excellent conduct, and adherence to the prophetic model. This is the path to Hajj Mabrur.",
      },
      {
        question: "What is the ruling on a pilgrim who omits the overnight stay in Mina without a valid excuse?",
        options: [
          "His Hajj is invalid",
          "He must offer a compensatory sacrifice (dam) according to the majority of scholars",
          "Nothing is required",
          "He must repeat the entire Hajj",
        ],
        correctAnswer: "He must offer a compensatory sacrifice (dam) according to the majority of scholars",
        explanation:
          "Spending the nights of Tashriq in Mina is a wajib. Omitting it without excuse requires a sheep as compensation, but the Hajj itself remains valid.",
      },
      {
        question: "According to the Hadith, what is the best Jihad for women?",
        options: [
          "Fighting on the battlefield",
          "A Hajj that is accepted (Hajj Mabrur)",
          "Fasting extra days",
          "Giving large amounts of charity",
        ],
        correctAnswer: "A Hajj that is accepted (Hajj Mabrur)",
        explanation:
          "Aishah (RA) reported that she asked about Jihad and the Prophet (PBUH) replied: 'The best Jihad for you is Hajj Mabrur.' (Sahih al-Bukhari).",
      },
      {
        question: "What is the significance of the Black Stone in Tawaf according to the authentic reports?",
        options: [
          "It has the power to forgive sins by itself",
          "It is a means of following the Sunnah of the Prophet (PBUH); kissing or touching it is an act of devotion to Allah, not to the stone",
          "It is obligatory to kiss it for the Tawaf to be valid",
          "It was placed by the angels for decoration only",
        ],
        correctAnswer: "It is a means of following the Sunnah of the Prophet (PBUH); kissing or touching it is an act of devotion to Allah, not to the stone",
        explanation:
          "Umar (RA) said while kissing the Stone: 'I know that you are only a stone that can neither harm nor benefit; had I not seen the Messenger of Allah kiss you I would not have kissed you.' (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What is the ruling on performing the rites of Hajj on behalf of a living person who is permanently unable?",
        options: [
          "Never allowed",
          "Permissible if the person has the financial ability and is physically incapable of performing it himself, and the one performing it has already completed his own obligatory Hajj",
          "Only for parents",
          "Only after the person dies",
        ],
        correctAnswer: "Permissible if the person has the financial ability and is physically incapable of performing it himself, and the one performing it has already completed his own obligatory Hajj",
        explanation:
          "The principle of performing Hajj on behalf of another is established in the Sunnah for those who are permanently unable. The proxy should have performed his own obligatory Hajj first.",
      },
      {
        question: "In the advanced fiqh of Arafah, what is the status of standing at Arafah after sunset for one who arrived late?",
        options: [
          "It is invalid",
          "Standing at any time between midday of the 9th and dawn of the 10th is valid for the pillar",
          "Only before midday is valid",
          "Only on the mountain itself is valid",
        ],
        correctAnswer: "Standing at any time between midday of the 9th and dawn of the 10th is valid for the pillar",
        explanation:
          "The time of Wuquf extends until the dawn of the Day of Nahr. Anyone who is present in Arafah for even a moment during this period has fulfilled the pillar.",
      },
      {
        question: "What did the Prophet (PBUH) say about the one who dies while in the state of ihram?",
        options: [
          "He is washed and shrouded normally",
          "He should be washed with water and sidr, shrouded in his two pieces of cloth, and not have his head covered, and he will be raised on the Day of Resurrection reciting the Talbiyah",
          "He is buried without washing",
          "His Hajj is cancelled",
        ],
        correctAnswer: "He should be washed with water and sidr, shrouded in his two pieces of cloth, and not have his head covered, and he will be raised on the Day of Resurrection reciting the Talbiyah",
        explanation:
          "This is the ruling given by the Prophet (PBUH) regarding a man who fell from his camel and died while in ihram. (Sahih al-Bukhari and Muslim).",
      },
      {
        question: "What is the relationship between the Hadith 'Take your rites from me' and the detailed practice of Hajj?",
        options: [
          "It has no connection",
          "It establishes that the observed actions of the Prophet (PBUH) in the Farewell Hajj are the authoritative source for every subsequent generation",
          "It only applies to the Companions",
          "It refers only to the intention",
        ],
        correctAnswer: "It establishes that the observed actions of the Prophet (PBUH) in the Farewell Hajj are the authoritative source for every subsequent generation",
        explanation:
          "The command to take the rites from the Prophet (PBUH) makes his practical demonstration in the Farewell Hajj the binding model, as preserved especially in the long Hadith of Jabir.",
      },
      {
        question: "In the discussion of the three types of Hajj, why do many scholars prefer Tamattu' for the one coming from outside the Haram?",
        options: [
          "Because it is the easiest",
          "Because the Prophet (PBUH) ordered his companions who had not brought sacrificial animals to cancel their Hajj intention and make it Umrah, then enter ihram again for Hajj – showing his preference for that form for them",
          "Because it requires no sacrifice",
          "Because it is the only valid type",
        ],
        correctAnswer: "Because the Prophet (PBUH) ordered his companions who had not brought sacrificial animals to cancel their Hajj intention and make it Umrah, then enter ihram again for Hajj – showing his preference for that form for them",
        explanation:
          "Although the Prophet himself was performing Qiran (having brought the hadiy), he directed those without sacrificial animals to perform Tamattu', and this is taken as evidence of its virtue for the majority of pilgrims.",
      },
      {
        question: "What is the ruling on a pilgrim who performs Tawaf al-Ifadah in a state of minor impurity (without wudu)?",
        options: [
          "It is fully valid according to all schools",
          "According to the majority it is not valid; purity is a condition for Tawaf, similar to prayer",
          "It is only disliked",
          "It requires a camel",
        ],
        correctAnswer: "According to the majority it is not valid; purity is a condition for Tawaf, similar to prayer",
        explanation:
          "The majority of scholars hold that ritual purity is required for Tawaf, based on the Hadith that Tawaf is a form of prayer (with certain exceptions). The Hanafi school has a different analysis but still requires purity for the completeness of the rite.",
      },
      {
        question: "What is the ultimate purpose of the rites of Hajj as understood from the Quran and Sunnah?",
        options: [
          "Physical exercise and tourism",
          "To answer the call of Allah, to commemorate the submission of Ibrahim and his family, to seek forgiveness, and to return purified and renewed in faith",
          "To gain social status",
          "To fulfil a cultural tradition only",
        ],
        correctAnswer: "To answer the call of Allah, to commemorate the submission of Ibrahim and his family, to seek forgiveness, and to return purified and renewed in faith",
        explanation:
          "Hajj is a response to the call of Allah (the Talbiyah), a living remembrance of the trials and submission of Ibrahim, Isma'il and Hajar, and a means of returning as pure as the day one was born when performed correctly and sincerely.",
      },
    ],
  },
}

export default hajjCategory
