import type { QuizCategory } from "@/types/quiz"

const inheritanceCategory: QuizCategory = {
  id: "inheritance",
  title: "Inheritance & Family Equity",
  description: "The fiqh of Mirath (inheritance after death), the distinction from Hiba (gifts during life), the obligation of equity in gifts, and how following Allah's prescribed shares preserves family unity and justice",
  icon: "Milestone",
  levels: {
    easy: [
      {
        question: "When does legal inheritance (Mirath) take effect in Islamic law?",
        options: ["While the person is still alive", "Only after the person's death is confirmed", "When the person becomes elderly", "Whenever the family decides"],
        correctAnswer: "Only after the person's death is confirmed",
        explanation: "A person's wealth does not become inheritance until after their death is confirmed. Transfers made while alive are gifts (Hiba), not Mirath.",
        references: "Consensus of the scholars; Surah An-Nisa 4:11-12"
      },
      {
        question: "What is the Arabic term for the Islamic science of inheritance shares?",
        options: ["Hiba", "Wasiyyah", "Ilm al-Fara'id (or Mirath)", "Zakat"],
        correctAnswer: "Ilm al-Fara'id (or Mirath)",
        explanation: "Ilm al-Fara'id is the science of the fixed shares of inheritance prescribed by Allah in the Quran and explained by the Sunnah.",
        references: "Surah An-Nisa 4:11-12, 4:176"
      },
      {
        question: "What is Hiba in Islamic law?",
        options: ["Inheritance after death", "A gift given during one's lifetime", "A will that takes effect after death", "A debt"],
        correctAnswer: "A gift given during one's lifetime",
        explanation: "Hiba is the voluntary transfer of ownership of property from one person to another without compensation while the giver is still alive.",
        references: "Classical fiqh definitions"
      },
      {
        question: "According to the Quran, what is the share of a son compared to a daughter when both inherit?",
        options: ["Equal shares", "The male receives a share equal to that of two females", "The daughter receives more", "Sons do not inherit"],
        correctAnswer: "The male receives a share equal to that of two females",
        explanation: "Allah says: 'Allah instructs you concerning your children: for the male, what is equal to the share of two females.'",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What is the husband's share of his wife's estate if she leaves no children?",
        options: ["One-quarter", "One-half", "One-eighth", "One-third"],
        correctAnswer: "One-half",
        explanation: "Allah says: 'And for you is half of what your wives leave if they have no child.'",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "What is the husband's share of his wife's estate if she leaves children?",
        options: ["One-half", "One-quarter", "One-eighth", "One-third"],
        correctAnswer: "One-quarter",
        explanation: "Allah says: 'But if they have a child, for you is one fourth of what they leave.'",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "What is the wife's share of her husband's estate if he leaves no children?",
        options: ["One-half", "One-quarter", "One-eighth", "One-third"],
        correctAnswer: "One-quarter",
        explanation: "Allah says: 'And for the wives is one fourth if you leave no child.'",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "What is the wife's share of her husband's estate if he leaves children?",
        options: ["One-quarter", "One-eighth", "One-half", "One-sixth"],
        correctAnswer: "One-eighth",
        explanation: "Allah says: 'But if you leave a child, then for them is an eighth of what you leave.'",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "What is the share of a single daughter when there is no son?",
        options: ["One-third", "One-half", "Two-thirds", "One-sixth"],
        correctAnswer: "One-half",
        explanation: "Allah says: 'And if there is only one [daughter], for her is half.'",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What is the share of two or more daughters when there is no son?",
        options: ["One-half", "Two-thirds", "One-third", "One-quarter"],
        correctAnswer: "Two-thirds",
        explanation: "Allah says: 'But if there are [only] daughters, two or more, for them is two-thirds of what he left.'",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What is the share of each parent when the deceased leaves children?",
        options: ["One-third each", "One-sixth each", "One-half each", "Nothing"],
        correctAnswer: "One-sixth each",
        explanation: "Allah says: 'And for one's parents, to each one of them is a sixth of what he left if he had children.'",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What must be settled from the estate before the fixed shares are distributed?",
        options: ["Nothing", "Funeral expenses, debts, and any valid bequest (up to one-third)", "Only the will", "Gifts to friends"],
        correctAnswer: "Funeral expenses, debts, and any valid bequest (up to one-third)",
        explanation: "The Quran repeatedly states that the shares are after any bequest that was made or debt. Debts and funeral costs are settled first.",
        references: "Surah An-Nisa 4:11-12; Hadith"
      },
      {
        question: "What is the maximum portion of the estate that may be given as a bequest (wasiyyah) to non-heirs?",
        options: ["One-half", "One-third", "Two-thirds", "All of it"],
        correctAnswer: "One-third",
        explanation: "The Prophet ﷺ said regarding the bequest: 'A third, and a third is a lot.' A bequest may not exceed one-third of the estate after debts.",
        references: "Sahih Bukhari 2742; Sahih Muslim"
      },
      {
        question: "Is it permissible to make a bequest (wasiyyah) in favour of a legal heir?",
        options: ["Yes, freely", "No, according to the majority; 'There is no bequest for an heir' unless the other heirs consent after death", "Only for the spouse", "Only for children"],
        correctAnswer: "No, according to the majority; 'There is no bequest for an heir' unless the other heirs consent after death",
        explanation: "The Prophet ﷺ said: 'Allah has given every heir his due, so there is no bequest for an heir.'",
        references: "Sunan Abu Dawud 2870; Tirmidhi"
      },
      {
        question: "What did the Prophet ﷺ say when a man gave a gift to only one of his sons?",
        options: ["It is fine", "Fear Allah and be just to your children", "Give more to the eldest", "Gifts have no rules"],
        correctAnswer: "Fear Allah and be just to your children",
        explanation: "Nu'man ibn Bashir reported that his father gave him a gift. The Prophet ﷺ asked if he had given the same to all his children. When told no, he said: 'Fear Allah and be just to your children.'",
        references: "Sahih Bukhari 2587; Sahih Muslim 1623"
      },
      {
        question: "Why do many family disputes arise in Muslim families regarding wealth?",
        options: ["Because Islam has no rules", "Because of unequal gifts (Hiba) during the parents' lifetime and failure to follow the fixed shares of Mirath after death", "Because inheritance is optional", "Because only sons inherit"],
        correctAnswer: "Because of unequal gifts (Hiba) during the parents' lifetime and failure to follow the fixed shares of Mirath after death",
        explanation: "Favouritism in lifetime gifts and deviation from the Quranic shares after death are major causes of broken family ties and resentment.",
        references: "Hadith of Nu'man ibn Bashir; Surah An-Nisa 4:11-14"
      },
      {
        question: "What is the status of following the Quranic shares of inheritance?",
        options: ["Optional advice", "An obligation and one of the limits set by Allah", "Only for the rich", "A cultural custom"],
        correctAnswer: "An obligation and one of the limits set by Allah",
        explanation: "Allah says after mentioning the shares: 'These are the limits set by Allah. And whoever obeys Allah and His Messenger will be admitted to Gardens...'",
        references: "Surah An-Nisa 4:13"
      },
      {
        question: "What is the share of the mother when the deceased leaves no children and no siblings?",
        options: ["One-sixth", "One-third", "One-half", "Nothing"],
        correctAnswer: "One-third",
        explanation: "Allah says: 'If he has no children and his parents are his [only] heirs, then for his mother is one-third.'",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What is the share of the mother when the deceased leaves children or two or more siblings?",
        options: ["One-third", "One-sixth", "One-half", "One-quarter"],
        correctAnswer: "One-sixth",
        explanation: "Allah says the mother receives one-sixth if the deceased had children, or if he had brothers (siblings).",
        references: "Surah An-Nisa 4:11"
      },
      {
        question: "What happens to the remainder of the estate after the fixed shares (furud) are given?",
        options: ["It is given to the poor only", "It goes to the residuary heirs (asaba), the closest male relative according to the Sunnah", "It is left undistributed", "It goes to the state"],
        correctAnswer: "It goes to the residuary heirs (asaba), the closest male relative according to the Sunnah",
        explanation: "The Prophet ﷺ said: 'Give the fixed shares to those entitled to them, and whatever remains is for the closest male relative.'",
        references: "Sahih Bukhari 6732; Sahih Muslim 1615"
      },
      {
        question: "Is a transfer of property made by a parent to a child while the parent is alive considered inheritance?",
        options: ["Yes, it is advance inheritance", "No, it is a gift (Hiba) and is governed by the rules of gifts, not Mirath", "It is a will", "It is invalid"],
        correctAnswer: "No, it is a gift (Hiba) and is governed by the rules of gifts, not Mirath",
        explanation: "Inheritance only begins after death. Any transfer during life is Hiba and should be made with justice among the children.",
        references: "Consensus of the scholars"
      },
      {
        question: "What is the primary purpose of the detailed inheritance laws in the Quran?",
        options: ["To enrich only the eldest son", "To establish justice, protect the rights of all heirs (including women and the vulnerable), and prevent family disputes", "To allow free distribution by the family", "To benefit only the wealthy"],
        correctAnswer: "To establish justice, protect the rights of all heirs (including women and the vulnerable), and prevent family disputes",
        explanation: "The Quranic system replaced pre-Islamic customs that often excluded women and the weak, establishing fixed rights for all entitled heirs.",
        references: "Surah An-Nisa 4:7, 4:11-14; Tafsir"
      },
      {
        question: "What did the Prophet ﷺ say about learning the shares of inheritance?",
        options: ["It is unimportant", "He urged the learning and teaching of the shares of inheritance, describing it as half of knowledge in some narrations", "Only scholars need to know it", "It is secret knowledge"],
        correctAnswer: "He urged the learning and teaching of the shares of inheritance, describing it as half of knowledge in some narrations",
        explanation: "The science of Fara'id was highly emphasised by the Prophet ﷺ because of its importance for justice among families.",
        references: "Narrations in Ibn Majah and others"
      },
      {
        question: "Can a person give away all of their wealth as gifts during their lifetime?",
        options: ["No, never", "Yes, while healthy and of sound mind, a person may dispose of their wealth as they wish, but justice among children is required", "Only one-third", "Only to non-relatives"],
        correctAnswer: "Yes, while healthy and of sound mind, a person may dispose of their wealth as they wish, but justice among children is required",
        explanation: "During life and health, ownership remains with the person. However, when giving to children, justice and equity are required by the Sunnah.",
        references: "Hadith of Nu'man ibn Bashir; classical fiqh"
      },
      {
        question: "What is the ruling on favouring one child over others in gifts without a valid reason?",
        options: ["It is recommended", "It is unjust and the Prophet ﷺ commanded justice; many scholars consider it sinful and requiring rectification", "It is obligatory for the eldest", "It has no ruling"],
        correctAnswer: "It is unjust and the Prophet ﷺ commanded justice; many scholars consider it sinful and requiring rectification",
        explanation: "The Prophet ﷺ ordered the father who favoured one son to either take the gift back or give the same to the others, saying 'Fear Allah and be just.'",
        references: "Sahih Bukhari 2587; Sahih Muslim 1623"
      },
      {
        question: "What is the share of full sisters when the deceased leaves no children, no father, and no full brother?",
        options: ["One-sixth", "One-half for one, two-thirds for two or more", "One-third", "Nothing"],
        correctAnswer: "One-half for one, two-thirds for two or more",
        explanation: "In the case of kalalah (no descendants or ascendants), the sister receives half if alone, and two or more sisters receive two-thirds.",
        references: "Surah An-Nisa 4:176"
      },
      {
        question: "What is the first right that must be fulfilled from the estate of the deceased?",
        options: ["Distribution to the heirs", "Funeral preparation and expenses according to custom", "Gifts to friends", "Charity to the poor"],
        correctAnswer: "Funeral preparation and expenses according to custom",
        explanation: "The rights related to the estate are ordered: first the preparation of the deceased, then debts, then the bequest, then the shares of the heirs.",
        references: "Classical fiqh order of rights on the estate"
      },
      {
        question: "Does the Quran give inheritance rights to women?",
        options: ["No, only men inherit", "Yes, the Quran explicitly grants fixed shares to women (daughters, mothers, wives, sisters)", "Only if there are no male relatives", "Only modern law does"],
        correctAnswer: "Yes, the Quran explicitly grants fixed shares to women (daughters, mothers, wives, sisters)",
        explanation: "Allah says: 'For men is a share of what the parents and close relatives leave, and for women is a share of what the parents and close relatives leave, be it little or much — an obligatory share.'",
        references: "Surah An-Nisa 4:7"
      },
      {
        question: "What is the consequence of altering the shares fixed by Allah?",
        options: ["It is a minor matter", "It is a transgression of the limits set by Allah, with severe warning in the Quran", "It is recommended for family peace", "It has no consequence"],
        correctAnswer: "It is a transgression of the limits set by Allah, with severe warning in the Quran",
        explanation: "Allah says: 'These are the limits of Allah, and whoever obeys Allah and His Messenger... and whoever disobeys Allah and His Messenger and transgresses His limits — He will put him into the Fire...'",
        references: "Surah An-Nisa 4:13-14"
      },
      {
        question: "What is the difference between Hiba and Mirath in terms of timing?",
        options: ["There is no difference", "Hiba occurs during life; Mirath occurs only after death", "Mirath occurs during life; Hiba after death", "Both occur only after death"],
        correctAnswer: "Hiba occurs during life; Mirath occurs only after death",
        explanation: "This distinction is fundamental. Confusing the two leads to many family disputes and injustices.",
        references: "Consensus of the scholars"
      },
      {
        question: "What is the share of maternal half-siblings (from the mother only) when there are no children or father?",
        options: ["One-half", "One-sixth for one, one-third for two or more (shared equally)", "Two-thirds", "Nothing"],
        correctAnswer: "One-sixth for one, one-third for two or more (shared equally)",
        explanation: "Allah says regarding the maternal siblings in the case of kalalah: each receives one-sixth, and if more than two they share one-third.",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "Why is justice in lifetime gifts to children emphasised in the Sunnah?",
        options: ["It is not emphasised", "To preserve love and harmony among siblings and between parents and children, and to avoid the sin of injustice", "Only to increase wealth", "Only for sons"],
        correctAnswer: "To preserve love and harmony among siblings and between parents and children, and to avoid the sin of injustice",
        explanation: "Unequal gifts without valid reason breed resentment, envy, and broken family ties — the opposite of the mercy and unity Islam seeks.",
        references: "Sahih Bukhari 2587; Sahih Muslim 1623"
      },
      {
        question: "What is the status of a gift given during a terminal illness (marad al-mawt)?",
        options: ["It is treated as a normal gift", "It is treated like a bequest and is limited to one-third of the estate, and cannot favour an heir without consent of the others", "It is invalid", "It is obligatory"],
        correctAnswer: "It is treated like a bequest and is limited to one-third of the estate, and cannot favour an heir without consent of the others",
        explanation: "Gifts made during the final illness are restricted because they resemble a disposition of the estate that will soon become inheritance.",
        references: "Classical fiqh rulings on marad al-mawt"
      },
      {
        question: "What is the share of the father when the deceased leaves a son?",
        options: ["One-half", "One-sixth (and the son takes the residue as asaba)", "One-third", "Nothing"],
        correctAnswer: "One-sixth (and the son takes the residue as asaba)",
        explanation: "When there is a son, the father receives a fixed one-sixth, and the remainder goes to the son (and other residuaries).",
        references: "Surah An-Nisa 4:11; Hadith on asaba"
      },
      {
        question: "What preserves family unity according to the guidance on inheritance and gifts?",
        options: ["Ignoring the Quranic shares", "Following the fixed shares of Mirath after death and maintaining equity in Hiba during life", "Giving everything to one child", "Leaving the distribution to chance"],
        correctAnswer: "Following the fixed shares of Mirath after death and maintaining equity in Hiba during life",
        explanation: "Adherence to Allah's prescribed distribution and justice in lifetime gifts prevents the disputes that destroy family bonds.",
        references: "Surah An-Nisa 4:11-14; Hadith of Nu'man ibn Bashir"
      },
      {
        question: "What is the meaning of the Quranic statement that the shares are 'an obligation from Allah'?",
        options: ["They are recommendations", "They are binding divine commands that must be implemented", "They are optional for the family to accept", "They apply only in certain countries"],
        correctAnswer: "They are binding divine commands that must be implemented",
        explanation: "Allah describes the shares as a faridah (obligation) from Him, emphasising that they are not subject to personal preference.",
        references: "Surah An-Nisa 4:11"
      }
    ],
    intermediate: [
      {
        question: "What is the difference between the majority view and the minority view on equality in gifts to sons and daughters?",
        options: ["There is no difference", "Majority (including Hanbali and Shafi'i): equal amounts to sons and daughters; some (including a Hanafi view): the 2:1 ratio of inheritance may be used", "Only sons receive gifts", "Equality is never required"],
        correctAnswer: "Majority (including Hanbali and Shafi'i): equal amounts to sons and daughters; some (including a Hanafi view): the 2:1 ratio of inheritance may be used",
        explanation: "The stronger and safer position is to give equal gifts to sons and daughters during life, as the hadith of Nu'man did not distinguish between male and female children.",
        references: "Sahih Bukhari 2587; classical fiqh comparisons"
      },
      {
        question: "What is the ruling on a parent who gives a large gift to one child and nothing to the others without a valid justification?",
        options: ["It is fully valid and recommended", "It is a form of injustice; the Prophet ﷺ commanded justice, and many scholars require the parent to rectify it by giving the others similar gifts or taking it back", "It is obligatory for the eldest", "It has no religious consequence"],
        correctAnswer: "It is a form of injustice; the Prophet ﷺ commanded justice, and many scholars require the parent to rectify it by giving the others similar gifts or taking it back",
        explanation: "The Prophet ﷺ told the father either to retrieve the gift or to give the same to the other children, establishing the principle of justice.",
        references: "Sahih Bukhari 2587; Sahih Muslim 1623"
      },
      {
        question: "When is it permissible to give one child more than the others during one's lifetime?",
        options: ["Never", "When there is a valid reason such as greater need, disability, large family, or being a student of knowledge, provided it is not done to harm the others", "Always for the eldest son", "Only for daughters"],
        correctAnswer: "When there is a valid reason such as greater need, disability, large family, or being a student of knowledge, provided it is not done to harm the others",
        explanation: "Scholars allow preference when there is a legitimate need, but the intention must not be to deprive or harm the other children.",
        references: "Fatwas of the Permanent Committee and classical works"
      },
      {
        question: "What is the share of the husband and wife when both parents and children are present?",
        options: ["Husband 1/2, wife 1/4", "Husband 1/4, wife 1/8", "Husband 1/3, wife 1/6", "They receive nothing"],
        correctAnswer: "Husband 1/4, wife 1/8",
        explanation: "When there is a child (or son's child), the husband receives one-quarter and the wife (or wives collectively) receives one-eighth.",
        references: "Surah An-Nisa 4:12"
      },
      {
        question: "What is the 'asaba' in the science of inheritance?",
        options: ["The fixed share holders only", "The residuary heirs who take what remains after the fixed shares (furud) are distributed", "Only the daughters", "The debts of the deceased"],
        correctAnswer: "The residuary heirs who take what remains after the fixed shares (furud) are distributed",
        explanation: "After the Quranic fixed shares are given, the remainder goes to the nearest male relative (asaba) according to the hadith.",
        references: "Sahih Bukhari 6732; Sahih Muslim 1615"
      },
      {
        question: "What is the ruling on a wasiyyah (bequest) that exceeds one-third of the estate?",
        options: ["It is fully valid", "The excess over one-third is not executed unless the heirs consent after the death", "It is obligatory", "It cancels all inheritance"],
        correctAnswer: "The excess over one-third is not executed unless the heirs consent after the death",
        explanation: "The Prophet ﷺ limited the bequest to one-third. Anything beyond that requires the approval of the heirs after the death of the testator.",
        references: "Sahih Bukhari 2742"
      },
      {
        question: "What is the share of two or more full sisters in the absence of children, father, and full brothers?",
        options: ["One-half", "Two-thirds", "One-third", "One-sixth"],
        correctAnswer: "Two-thirds",
        explanation: "In the case of kalalah, two or more sisters receive two-thirds of the estate.",
        references: "Surah An-Nisa 4:176"
      },
      {
        question: "What is the effect of a valid Hiba on the estate at the time of death?",
        options: ["The gifted property is still part of the estate", "The gifted property is no longer part of the estate of the giver; it belongs to the recipient", "It is counted as a bequest", "It is invalid after death"],
        correctAnswer: "The gifted property is no longer part of the estate of the giver; it belongs to the recipient",
        explanation: "Once a valid gift with offer, acceptance, and delivery of possession is completed, the property leaves the ownership of the giver and is not subject to Mirath.",
        references: "Classical fiqh of Hiba"
      },
      {
        question: "What is the share of the father's mother (paternal grandmother) when the mother is not alive?",
        options: ["One-third", "One-sixth", "One-half", "Nothing"],
        correctAnswer: "One-sixth",
        explanation: "The grandmother receives one-sixth when the mother is absent, according to the Sunnah and consensus.",
        references: "Sunan Abu Dawud 2894; consensus"
      },
      {
        question: "What is the ruling on distributing the estate according to personal wishes instead of the Quranic shares?",
        options: ["It is allowed for family peace", "It is a transgression of the limits of Allah and is not permissible", "It is recommended", "It is obligatory if the family agrees"],
        correctAnswer: "It is a transgression of the limits of Allah and is not permissible",
        explanation: "Allah calls the shares His limits and warns those who transgress them of the Fire. The distribution is not left to personal choice.",
        references: "Surah An-Nisa 4:13-14"
      },
      {
        question: "What is the 'Umariyyatan' in inheritance?",
        options: ["A type of gift", "The special cases ruled by Umar ibn al-Khattab in which the mother receives one-third of the remainder when there is a spouse and father", "The share of the uncle", "A form of bequest"],
        correctAnswer: "The special cases ruled by Umar ibn al-Khattab in which the mother receives one-third of the remainder when there is a spouse and father",
        explanation: "In the two cases known as the Umariyyatan, when the heirs are only the spouse, mother, and father, the mother receives one-third of what remains after the spouse's share.",
        references: "Ruling of Umar; classical Fara'id works"
      },
      {
        question: "What is the ruling on a gift given by a parent to a child that is not delivered (possession not transferred)?",
        options: ["It is complete", "It is not complete; ownership does not transfer until possession is taken with the permission of the giver", "It becomes inheritance automatically", "It is invalid forever"],
        correctAnswer: "It is not complete; ownership does not transfer until possession is taken with the permission of the giver",
        explanation: "A condition of a valid Hiba is the delivery and taking of possession. Until then, the giver may revoke it.",
        references: "Classical conditions of Hiba"
      },
      {
        question: "What is the share of a son's daughter when there is one daughter and no son?",
        options: ["One-half", "One-sixth (completing the two-thirds with the daughter)", "One-third", "Nothing"],
        correctAnswer: "One-sixth (completing the two-thirds with the daughter)",
        explanation: "The son's daughter receives one-sixth when there is a single daughter, so that together they receive the two-thirds prescribed for daughters.",
        references: "Sahih Bukhari 6736; consensus"
      },
      {
        question: "What is the consequence of deliberately favouring one child in gifts in order to deprive the others of their future inheritance?",
        options: ["It is clever planning", "It is a form of injustice and an attempt to circumvent the shares fixed by Allah; it is sinful even if the gift is legally valid", "It is recommended", "It has no religious ruling"],
        correctAnswer: "It is a form of injustice and an attempt to circumvent the shares fixed by Allah; it is sinful even if the gift is legally valid",
        explanation: "Using Hiba as a means to effectively alter the Quranic shares after death is contrary to the spirit of the Shariah and the command of justice.",
        references: "Principles derived from the hadith of Nu'man and the limits of Allah"
      },
      {
        question: "What is the order of rights on the estate of the deceased?",
        options: ["Heirs first, then debts", "1. Funeral preparation, 2. Debts, 3. Bequest (up to one-third), 4. Fixed shares and residuaries", "Bequest first, then funeral", "Whatever the family decides"],
        correctAnswer: "1. Funeral preparation, 2. Debts, 3. Bequest (up to one-third), 4. Fixed shares and residuaries",
        explanation: "This is the classical order agreed upon by the scholars, based on the Quran and Sunnah.",
        references: "Classical Fara'id texts"
      },
      {
        question: "What is the ruling on a person who dies leaving only a wife and no other heirs?",
        options: ["The wife takes everything", "The wife takes her fixed share (one-quarter or one-eighth according to the presence of children, but if no children and no other heirs she may take the residue by radd in some schools, or the remainder goes to the bayt al-mal)", "The estate goes to the state only", "The wife takes half"],
        correctAnswer: "The wife takes her fixed share (one-quarter or one-eighth according to the presence of children, but if no children and no other heirs she may take the residue by radd in some schools, or the remainder goes to the bayt al-mal)",
        explanation: "The fixed share is given first. The treatment of the residue when there are no residuary heirs varies between the schools (radd or bayt al-mal).",
        references: "Classical Fara'id works"
      },
      {
        question: "What is the linguistic and legal meaning of 'kalalah' in Surah An-Nisa?",
        options: ["A person who leaves many children", "A person who dies leaving neither descendants nor ascendants (no child and no parent)", "Only a person with siblings", "A type of gift"],
        correctAnswer: "A person who dies leaving neither descendants nor ascendants (no child and no parent)",
        explanation: "Kalalah refers to the case where the deceased leaves no child and no parent, so the siblings inherit according to the rules in 4:12 and 4:176.",
        references: "Surah An-Nisa 4:12, 4:176; Tafsir"
      },
      {
        question: "What is the ruling on the one who changes the shares of the heirs after the death of the deceased without their consent?",
        options: ["It is allowed for peace", "It is consuming the wealth of the heirs unjustly and is a major sin", "It is recommended if one is older", "It has no consequence"],
        correctAnswer: "It is consuming the wealth of the heirs unjustly and is a major sin",
        explanation: "The shares are the right of the heirs fixed by Allah. Taking or altering them without right is a form of injustice and consuming wealth in falsehood.",
        references: "Surah An-Nisa 4:10, 4:29; general principles"
      },
      {
        question: "What is the share of the full brother when he inherits as a residuary with full sisters?",
        options: ["Equal to the sister", "Twice the share of the sister (the male receives the share of two females)", "Half the share of the sister", "Nothing"],
        correctAnswer: "Twice the share of the sister (the male receives the share of two females)",
        explanation: "When brothers and sisters inherit together as residuaries, the male receives twice the share of the female, following the principle in the Quran.",
        references: "Surah An-Nisa 4:176; application of the general rule"
      },
      {
        question: "What is the ruling on a gift made by a person who is in debt?",
        options: ["It is always valid", "If the gift harms the rights of the creditors, it may be restricted or challenged; the rights of creditors take priority", "Debts are ignored", "Gifts cancel debts"],
        correctAnswer: "If the gift harms the rights of the creditors, it may be restricted or challenged; the rights of creditors take priority",
        explanation: "A person may not dispose of their wealth in a way that unjustly harms the rights of those to whom they owe debts.",
        references: "General principles of justice and rights"
      },
      {
        question: "What is the share of the mother in the Umariyyatan cases?",
        options: ["One-sixth of the whole estate", "One-third of the remainder after the spouse's share", "One-half", "Nothing"],
        correctAnswer: "One-third of the remainder after the spouse's share",
        explanation: "In the two cases decided by Umar, when the heirs are spouse, mother, and father, the mother receives one-third of what remains after the spouse takes their share, so that the father receives twice her share.",
        references: "Ruling of Umar ibn al-Khattab; Fara'id works"
      },
      {
        question: "What is the ruling on writing a will that distributes the entire estate according to personal preference, ignoring the Quranic shares?",
        options: ["It is valid and binding", "It is invalid with regard to the portion that contradicts the fixed shares; the Quranic shares must be implemented", "It is recommended", "It is obligatory in modern times"],
        correctAnswer: "It is invalid with regard to the portion that contradicts the fixed shares; the Quranic shares must be implemented",
        explanation: "A will cannot override the fixed shares prescribed by Allah. Any such distribution is to be corrected according to the Shariah.",
        references: "Surah An-Nisa 4:11-14; Hadith 'no bequest for an heir'"
      },
      {
        question: "What is the effect of killing the deceased on the right to inherit?",
        options: ["The killer still inherits", "The killer is barred from inheritance according to the hadith and consensus", "Only if the killing was intentional", "It has no effect"],
        correctAnswer: "The killer is barred from inheritance according to the hadith and consensus",
        explanation: "The Prophet ﷺ said that the killer does not inherit. This is a well-known impediment to inheritance.",
        references: "Sunan Abu Dawud; Tirmidhi; consensus"
      },
      {
        question: "What is the ruling on a person who gives all his wealth to one child during his lifetime in order to prevent the other children from inheriting?",
        options: ["It is a valid strategy", "It is a sinful attempt to circumvent the shares fixed by Allah, even if the gift itself may be legally effective", "It is recommended for the eldest", "It is the only way to be fair"],
        correctAnswer: "It is a sinful attempt to circumvent the shares fixed by Allah, even if the gift itself may be legally effective",
        explanation: "While a person may dispose of their wealth during life, doing so with the intention of defeating the divine shares is contrary to the justice commanded by the Prophet ﷺ and the limits of Allah.",
        references: "Hadith of Nu'man; Surah An-Nisa 4:13-14"
      },
      {
        question: "What is the share of the paternal grandfather when the father is not alive and there is a son?",
        options: ["One-half", "One-sixth (like the father)", "One-third", "Nothing"],
        correctAnswer: "One-sixth (like the father)",
        explanation: "The paternal grandfather takes the place of the father in his absence and receives one-sixth when there is a son.",
        references: "Consensus of the scholars"
      },
      {
        question: "What is the ruling on the one who refuses to distribute the inheritance according to the Shariah after the death of the parent?",
        options: ["It is a family matter only", "It is a form of injustice and consuming the rights of the heirs; it is a major sin", "It is allowed if one is the eldest", "It has no religious consequence"],
        correctAnswer: "It is a form of injustice and consuming the rights of the heirs; it is a major sin",
        explanation: "Withholding or altering the shares of the heirs is a violation of the rights fixed by Allah and a cause of family discord.",
        references: "Surah An-Nisa 4:10, 4:29; general principles"
      },
      {
        question: "What is the relationship between equity in Hiba and the preservation of family ties?",
        options: ["No relationship", "Equity in lifetime gifts prevents resentment and envy among siblings, thereby protecting the bonds of kinship that Allah has commanded to be maintained", "Equity destroys family ties", "Only unequal gifts preserve ties"],
        correctAnswer: "Equity in lifetime gifts prevents resentment and envy among siblings, thereby protecting the bonds of kinship that Allah has commanded to be maintained",
        explanation: "The command of justice in gifts is directly linked to the preservation of love and the avoidance of the disputes that sever family ties.",
        references: "Hadith of Nu'man ibn Bashir; principles of Silat ar-Rahim"
      },
      {
        question: "What is the share of the wife when there are multiple wives?",
        options: ["Each wife receives a full one-quarter or one-eighth", "The one-quarter or one-eighth is shared equally among all the wives", "Only the first wife inherits", "Wives do not inherit"],
        correctAnswer: "The one-quarter or one-eighth is shared equally among all the wives",
        explanation: "The Quranic share for the wife (or wives) is a collective share that is divided equally among them.",
        references: "Surah An-Nisa 4:12; consensus"
      },
      {
        question: "What is the ruling on a bequest made to a non-heir for more than one-third when the heirs do not consent?",
        options: ["It is fully executed", "Only one-third is executed; the excess is returned to the estate for the heirs", "The entire bequest is cancelled", "The heirs receive nothing"],
        correctAnswer: "Only one-third is executed; the excess is returned to the estate for the heirs",
        explanation: "The limitation to one-third is binding. The excess over one-third requires the consent of the heirs after the death.",
        references: "Sahih Bukhari 2742"
      },
      {
        question: "What is the advanced understanding of why the Quran specifies the shares in detail rather than leaving distribution to the family?",
        options: ["To make it complicated", "To remove the cause of disputes, protect the weak, ensure justice independent of personal whims, and make the distribution an act of submission to Allah", "To benefit only the males", "To allow free interpretation"],
        correctAnswer: "To remove the cause of disputes, protect the weak, ensure justice independent of personal whims, and make the distribution an act of submission to Allah",
        explanation: "By fixing the shares, Allah removed the arbitrariness of pre-Islamic customs and the potential for favouritism and conflict after death.",
        references: "Surah An-Nisa 4:7, 4:11-14; Tafsir of the scholars"
      },
      {
        question: "What is the ruling on a parent who gives a gift to a child in return for the child taking care of them in old age?",
        options: ["It is invalid", "It is permissible if the conditions of Hiba are met, but it should not be used as a means to deprive other children unjustly", "It is obligatory", "It is the only valid gift"],
        correctAnswer: "It is permissible if the conditions of Hiba are met, but it should not be used as a means to deprive other children unjustly",
        explanation: "A gift in exchange for care can be valid, but the principle of justice among children still applies; it should not become a tool of favouritism.",
        references: "Principles of Hiba and justice"
      },
      {
        question: "What is the share of the maternal grandmother when the mother is alive?",
        options: ["One-sixth", "She is excluded (the mother blocks her)", "One-third", "One-half"],
        correctAnswer: "She is excluded (the mother blocks her)",
        explanation: "The mother, being a closer heir, excludes the maternal grandmother from inheritance.",
        references: "Rules of exclusion (hajb) in Fara'id"
      },
      {
        question: "What is the comprehensive reason why following both the rules of Hiba and the rules of Mirath protects family unity?",
        options: ["It does not protect unity", "Equity in lifetime gifts prevents resentment while alive, and adherence to the divine shares after death prevents conflict over the estate, together preserving the ties of kinship", "Only Mirath matters", "Only Hiba matters"],
        correctAnswer: "Equity in lifetime gifts prevents resentment while alive, and adherence to the divine shares after death prevents conflict over the estate, together preserving the ties of kinship",
        explanation: "Both the justice commanded in gifts and the fixed shares of inheritance are means to the larger goal of maintaining the family bonds that Allah has ordered to be joined.",
        references: "Hadith of Nu'man; Surah An-Nisa 4:1, 4:11-14; principles of Silat ar-Rahim"
      },
      {
        question: "What is the ruling on a parent who sells property to one child at a token price in order to favour them?",
        options: ["It is a normal sale", "If the intention is favouritism and the price is not genuine, it is treated as a gift and the rules of justice among children apply", "It is always valid without restriction", "It is the recommended method"],
        correctAnswer: "If the intention is favouritism and the price is not genuine, it is treated as a gift and the rules of justice among children apply",
        explanation: "Scholars look at the reality of the transaction. A sale at a token price with the intention of favouritism is effectively a gift and must satisfy the requirement of justice.",
        references: "Principles of Hiba and the prevention of circumvention"
      },
      {
        question: "What is the share of the full sister when she inherits together with a full brother as residuaries?",
        options: ["Equal to the brother", "Half the share of the brother (the male receives twice the female)", "Twice the share of the brother", "Nothing"],
        correctAnswer: "Half the share of the brother (the male receives twice the female)",
        explanation: "When brothers and sisters inherit as residuaries, the principle of the male receiving the share of two females is applied.",
        references: "Surah An-Nisa 4:176; application of the general rule"
      },
      {
        question: "What is the ruling on the one who delays the distribution of the estate for years without valid reason, causing harm to the heirs?",
        options: ["It is allowed", "It is a form of injustice and withholding the rights of the heirs; the estate should be distributed promptly after the necessary procedures", "It is recommended for investment", "It has no ruling"],
        correctAnswer: "It is a form of injustice and withholding the rights of the heirs; the estate should be distributed promptly after the necessary procedures",
        explanation: "Once the debts and bequests are settled, the heirs have an immediate right to their shares. Unjustified delay harms them and is contrary to the justice of the Shariah.",
        references: "General principles of rights and justice"
      }
    ],
    advanced: [
      {
        question: "What is the precise distinction between the legal effectiveness of an unequal Hiba and its moral/religious ruling?",
        options: ["There is no distinction", "An unequal gift may be legally effective (ownership transfers) if the conditions of Hiba are met, yet it remains religiously blameworthy and may require rectification according to the command of justice", "Unequal gifts are always invalid", "Unequal gifts are always recommended"],
        correctAnswer: "An unequal gift may be legally effective (ownership transfers) if the conditions of Hiba are met, yet it remains religiously blameworthy and may require rectification according to the command of justice",
        explanation: "The hadith of Nu'man shows that the gift was not automatically void, but the Prophet ﷺ ordered justice, indicating the distinction between legal validity and religious obligation of equity.",
        references: "Sahih Bukhari 2587; Sahih Muslim 1623; classical discussions"
      },
      {
        question: "What is the ruling of the majority of scholars on the obligation of equality in gifts to children?",
        options: ["It is merely recommended", "Many scholars, including the Hanbalis and a strong view among others, hold that justice is obligatory and that favouritism without valid reason is sinful and must be corrected", "It is never obligatory", "It applies only to sons"],
        correctAnswer: "Many scholars, including the Hanbalis and a strong view among others, hold that justice is obligatory and that favouritism without valid reason is sinful and must be corrected",
        explanation: "The command 'Fear Allah and be just to your children' is taken by many as establishing an obligation of equity in gifts.",
        references: "Ibn Qudamah, al-Mughni; views of the schools"
      },
      {
        question: "What is the precise Quranic basis for the priority of debts over the fixed shares?",
        options: ["There is no basis", "The repeated phrase in 4:11 and 4:12 'after any bequest he may have made or debt' establishes that debts and bequests are settled before the shares", "Debts are paid last", "Only funeral costs are paid first"],
        correctAnswer: "The repeated phrase in 4:11 and 4:12 'after any bequest he may have made or debt' establishes that debts and bequests are settled before the shares",
        explanation: "Allah mentions the priority of the bequest and debt in both of the main inheritance verses, and the Sunnah confirms that debts are settled before bequests.",
        references: "Surah An-Nisa 4:11-12; Hadith of Ali"
      },
      {
        question: "What is the advanced understanding of the principle 'no bequest for an heir'?",
        options: ["Heirs can never receive anything extra", "A bequest to a legal heir is not valid without the consent of the other heirs after the death, because Allah has already assigned their shares", "Bequests to heirs are always valid", "The principle is only recommended"],
        correctAnswer: "A bequest to a legal heir is not valid without the consent of the other heirs after the death, because Allah has already assigned their shares",
        explanation: "The Prophet ﷺ said that Allah has given every heir his due, therefore there is no bequest for an heir. The other heirs may voluntarily allow it after the death.",
        references: "Sunan Abu Dawud 2870; Tirmidhi; consensus of the majority"
      },
      {
        question: "What is the effect of 'awl (proportional reduction) when the fixed shares exceed the whole estate?",
        options: ["Some heirs are excluded", "All the fixed shares are reduced proportionally so that they fit within the estate", "The residue is increased", "The distribution is cancelled"],
        correctAnswer: "All the fixed shares are reduced proportionally so that they fit within the estate",
        explanation: "When the sum of the furud exceeds the total, the shares are decreased proportionally by the process known as 'awl, a solution developed by the Companions.",
        references: "Practice of the Companions; classical Fara'id"
      },
      {
        question: "What is the effect of radd (proportional return) when the fixed shares do not exhaust the estate and there are no residuary heirs?",
        options: ["The remainder goes to the state only", "In the view of the majority of scholars, the remainder is returned to the fixed-share heirs in proportion to their shares (except the spouse in the classical Hanafi view)", "The remainder is left undistributed", "The shares are increased arbitrarily"],
        correctAnswer: "In the view of the majority of scholars, the remainder is returned to the fixed-share heirs in proportion to their shares (except the spouse in the classical Hanafi view)",
        explanation: "Radd is the process of returning the surplus to the ashab al-furud when there is no asaba. The schools differ on whether the spouse participates in the radd.",
        references: "Classical Fara'id works"
      },
      {
        question: "What is the precise ruling on a gift made during the final illness (marad al-mawt) to an heir?",
        options: ["It is fully valid like any other gift", "It is treated as a bequest and is not effective for more than one-third, and requires the consent of the other heirs for the portion given to an heir", "It is invalid", "It is obligatory"],
        correctAnswer: "It is treated as a bequest and is not effective for more than one-third, and requires the consent of the other heirs for the portion given to an heir",
        explanation: "Because the final illness is the time when the estate is about to become inheritance, dispositions are restricted to protect the rights of the heirs.",
        references: "Classical fiqh of marad al-mawt"
      },
      {
        question: "What is the advanced understanding of the wisdom behind the 2:1 ratio between male and female shares in many cases?",
        options: ["It is unjust", "It is linked to the financial responsibilities placed on the male (maintenance of wife and family), while the female's share is her own absolute property without corresponding obligations", "It means women have no rights", "It is only a cultural rule"],
        correctAnswer: "It is linked to the financial responsibilities placed on the male (maintenance of wife and family), while the female's share is her own absolute property without corresponding obligations",
        explanation: "The male is obligated to spend on his wife and family, while the female is not. Her share is hers absolutely. The ratio reflects this difference in financial duty.",
        references: "Tafsir and explanations of the scholars"
      },
      {
        question: "What is the ruling on the one who uses lifetime gifts systematically to ensure that after his death the distribution will not follow the Quranic shares?",
        options: ["It is intelligent estate planning", "It is a blameworthy attempt to defeat the limits set by Allah; even if individual gifts are valid, the overall intention is contrary to the Shariah", "It is recommended", "It is the only fair way"],
        correctAnswer: "It is a blameworthy attempt to defeat the limits set by Allah; even if individual gifts are valid, the overall intention is contrary to the Shariah",
        explanation: "The Shariah closes the means to injustice. Using Hiba as a device to nullify the divine shares is contrary to the purpose of the legislation.",
        references: "Principles of sadd al-dhara'i and the limits of Allah in 4:13-14"
      },
      {
        question: "What is the status of the science of Fara'id in the view of the Prophet ﷺ and the early scholars?",
        options: ["It is a minor branch", "It was described as half of knowledge and was among the first sciences to be lost, hence the strong encouragement to learn and teach it", "It is only for judges", "It is obsolete"],
        correctAnswer: "It was described as half of knowledge and was among the first sciences to be lost, hence the strong encouragement to learn and teach it",
        explanation: "The emphasis on learning Fara'id stems from its importance for justice and the prediction that it would be one of the first areas of knowledge to disappear.",
        references: "Narrations in Ibn Majah and others; statements of the Salaf"
      },
      {
        question: "What is the precise interaction between Silat ar-Rahim and the laws of inheritance and gifts?",
        options: ["They are unrelated", "Equity in gifts and adherence to the divine shares are practical means of upholding the ties of kinship and preventing the severance of family bonds that Allah has forbidden", "Inheritance laws destroy family ties", "Only emotional ties matter"],
        correctAnswer: "Equity in gifts and adherence to the divine shares are practical means of upholding the ties of kinship and preventing the severance of family bonds that Allah has forbidden",
        explanation: "The command to join the ties of kinship (Surah An-Nisa 4:1) is protected in practice by justice in lifetime transfers and by the fixed shares after death.",
        references: "Surah An-Nisa 4:1, 4:11-14; Hadith of Nu'man; Hadith on Silat ar-Rahim"
      },
      {
        question: "What is the ruling on a person who dies leaving no heirs at all?",
        options: ["The estate is left unclaimed", "The estate goes to the bayt al-mal (public treasury) for the benefit of the Muslims", "Anyone may take it", "It is buried with the deceased"],
        correctAnswer: "The estate goes to the bayt al-mal (public treasury) for the benefit of the Muslims",
        explanation: "When there are no legal heirs, the residue is returned to the public treasury according to the classical rules.",
        references: "Classical Fara'id works"
      },
      {
        question: "What is the advanced ruling on the exclusion (hajb) of siblings by the father or the son?",
        options: ["Siblings always inherit", "The presence of a son or father excludes the siblings from inheritance in most cases (they are barred by hajb)", "Siblings exclude the father", "Exclusion is not part of the system"],
        correctAnswer: "The presence of a son or father excludes the siblings from inheritance in most cases (they are barred by hajb)",
        explanation: "The rules of hajb (exclusion) determine that closer heirs exclude more distant ones. A son or father prevents the siblings from inheriting.",
        references: "Rules of hajb in Fara'id"
      },
      {
        question: "What is the precise meaning of the Quranic warning that those who transgress the limits of the inheritance shares will enter the Fire?",
        options: ["It is only a metaphor", "It is a severe threat indicating that deliberate alteration or consumption of the fixed shares is a major sin that leads to punishment in the Hereafter unless repented from", "It applies only to non-Muslims", "It is not to be taken seriously"],
        correctAnswer: "It is a severe threat indicating that deliberate alteration or consumption of the fixed shares is a major sin that leads to punishment in the Hereafter unless repented from",
        explanation: "Allah pairs the description of the shares as His limits with the promise of Paradise for obedience and the threat of the Fire for transgression.",
        references: "Surah An-Nisa 4:13-14"
      },
      {
        question: "What is the ruling on a gift that is made with the condition that the recipient will not sell or give away the property?",
        options: ["It is always valid", "Conditions that restrict the ownership after the gift is complete are generally not binding in the view of many scholars; once ownership transfers, the recipient has full rights", "It is the recommended form", "The gift is invalid"],
        correctAnswer: "Conditions that restrict the ownership after the gift is complete are generally not binding in the view of many scholars; once ownership transfers, the recipient has full rights",
        explanation: "A completed Hiba transfers full ownership. Conditions that negate the consequences of ownership are often considered void.",
        references: "Classical discussions on conditions in Hiba"
      },
      {
        question: "What is the advanced understanding of the phrase 'you do not know which of them is nearer to you in benefit' in Surah An-Nisa 4:11?",
        options: ["It means parents and children are equal", "It teaches that the divine distribution is based on Allah's perfect knowledge of benefit, not on human assumptions about who deserves more", "It means one may ignore the shares", "It is only about the mother"],
        correctAnswer: "It teaches that the divine distribution is based on Allah's perfect knowledge of benefit, not on human assumptions about who deserves more",
        explanation: "Allah reminds the believers that they do not know who among the parents and children is more beneficial to them, so they must accept the shares He has assigned.",
        references: "Surah An-Nisa 4:11; Tafsir"
      },
      {
        question: "What is the ruling on the one who distributes the estate according to the civil law of a non-Muslim country when it contradicts the Quranic shares?",
        options: ["It is fully acceptable", "A Muslim is still religiously obligated to ensure that the Quranic shares are given to the entitled heirs, even if civil procedures must also be followed", "Civil law always overrides the Shariah", "The Quranic shares are only for Muslim countries"],
        correctAnswer: "A Muslim is still religiously obligated to ensure that the Quranic shares are given to the entitled heirs, even if civil procedures must also be followed",
        explanation: "The shares fixed by Allah remain an obligation upon the Muslim. Civil requirements may be fulfilled, but the religious rights of the heirs must not be neglected.",
        references: "Principles of the obligation of the Fara'id"
      },
      {
        question: "What is the precise relationship between the command of justice in gifts and the prohibition of severing the ties of kinship?",
        options: ["They are separate", "Injustice in gifts is a common cause of the severance of family ties; the command of justice is therefore a practical protection of the command to maintain the rahm", "Justice in gifts causes severance", "There is no relationship"],
        correctAnswer: "Injustice in gifts is a common cause of the severance of family ties; the command of justice is therefore a practical protection of the command to maintain the rahm",
        explanation: "Favouritism breeds hatred and cutting of ties. By commanding justice, the Prophet ﷺ protected the very bonds that Allah has ordered to be joined.",
        references: "Hadith of Nu'man; Surah An-Nisa 4:1; Hadith on Silat ar-Rahim"
      },
      {
        question: "What is the advanced ruling on a person who dies having made a series of gifts that leave almost nothing for the heirs?",
        options: ["The heirs have no claim", "If the gifts were completed with full ownership transfer while the person was healthy, they stand; however, if they were made with the clear intention of harming the heirs or during final illness, they may be challenged or limited", "All gifts are reversed", "The heirs take everything"],
        correctAnswer: "If the gifts were completed with full ownership transfer while the person was healthy, they stand; however, if they were made with the clear intention of harming the heirs or during final illness, they may be challenged or limited",
        explanation: "Healthy, completed gifts transfer ownership. Gifts in final illness or with proven intent to harm the heirs are subject to the restrictions of the Shariah.",
        references: "Rules of Hiba and marad al-mawt"
      },
      {
        question: "What is the comprehensive wisdom of the Islamic system of Mirath and the rules of Hiba in relation to family unity?",
        options: ["They have no relation to unity", "By fixing the shares after death and commanding justice in gifts during life, the Shariah removes the two main causes of wealth-related family conflict, thereby protecting the sacred ties of kinship that are linked to the Name of Allah Ar-Rahman", "They encourage conflict", "They are only about wealth"],
        correctAnswer: "By fixing the shares after death and commanding justice in gifts during life, the Shariah removes the two main causes of wealth-related family conflict, thereby protecting the sacred ties of kinship that are linked to the Name of Allah Ar-Rahman",
        explanation: "The system is not merely financial; it is a means of preserving the family bonds that Allah has commanded to be maintained and that He has linked to His own Name of Mercy.",
        references: "Surah An-Nisa 4:1, 4:11-14; Sahih Bukhari 2587, 5988; overall objectives of the Shariah"
      },
      {
        question: "What is the final outcome for the one who adheres to the limits of Allah in the distribution of inheritance and justice in gifts?",
        options: ["Only worldly benefit", "The promise of Paradise and the great triumph, as stated by Allah after mentioning the shares, and the preservation of family mercy and unity in this life", "No special outcome", "Only difficulty"],
        correctAnswer: "The promise of Paradise and the great triumph, as stated by Allah after mentioning the shares, and the preservation of family mercy and unity in this life",
        explanation: "Allah concludes the inheritance verses with the promise of Gardens for those who obey Him and His Messenger in these limits, linking the financial rules to the ultimate success of the Hereafter and the harmony of the family.",
        references: "Surah An-Nisa 4:13; Hadith on justice and Silat ar-Rahim"
      },
      {
        question: "What is the precise ruling on a gift of real estate that is not registered in the name of the recipient during the lifetime of the giver?",
        options: ["It is always complete", "In many legal systems and according to the conditions of Hiba, ownership may not transfer fully until possession or registration is completed; the gift may remain incomplete", "Registration is irrelevant", "It becomes inheritance automatically"],
        correctAnswer: "In many legal systems and according to the conditions of Hiba, ownership may not transfer fully until possession or registration is completed; the gift may remain incomplete",
        explanation: "A condition of Hiba is the transfer of possession. If the property remains in the name and control of the giver, the gift may not be complete.",
        references: "Conditions of Hiba in classical fiqh"
      },
      {
        question: "What is the advanced understanding of the role of the bayt al-mal when there are no residuary heirs?",
        options: ["It has no role", "In the classical system the residue may go to the public treasury for the benefit of the Muslims when there are no asaba and radd is not applied to certain heirs", "It takes all the estate always", "It only receives debts"],
        correctAnswer: "In the classical system the residue may go to the public treasury for the benefit of the Muslims when there are no asaba and radd is not applied to certain heirs",
        explanation: "The schools differ on the extent of radd. When the residue is not returned to the fixed-share heirs, it reverts to the bayt al-mal.",
        references: "Classical Fara'id works"
      },
      {
        question: "What is the ruling on a person who forces the other heirs to accept a distribution that contradicts the Quranic shares by using social or financial pressure?",
        options: ["It is valid if they accept", "The acceptance under pressure is not a true consent; the rights of the heirs remain, and the forced distribution is a form of injustice", "Pressure is allowed for the eldest", "It has no religious consequence"],
        correctAnswer: "The acceptance under pressure is not a true consent; the rights of the heirs remain, and the forced distribution is a form of injustice",
        explanation: "True consent must be free. Coercion does not legitimise the consumption of the shares fixed by Allah.",
        references: "Principles of consent and the prohibition of consuming wealth unjustly"
      },
      {
        question: "What is the precise relationship between the prohibition of severing the ties of kinship and the laws of inheritance?",
        options: ["They are unrelated", "Disputes over inheritance and unequal gifts are among the most common causes of the severance of family ties; the divine system is designed to remove that cause", "Inheritance laws cause severance", "Only emotional factors matter"],
        correctAnswer: "Disputes over inheritance and unequal gifts are among the most common causes of the severance of family ties; the divine system is designed to remove that cause",
        explanation: "By fixing the shares and commanding justice in gifts, the Shariah protects the very bonds that Allah has ordered to be maintained.",
        references: "Surah An-Nisa 4:1; Hadith on Silat ar-Rahim; Hadith of Nu'man"
      },
      {
        question: "What is the advanced ruling on a wasiyyah that is made for a purpose that is sinful?",
        options: ["It is valid", "A bequest for a sinful purpose is invalid and is not executed", "It is recommended", "It is only disliked"],
        correctAnswer: "A bequest for a sinful purpose is invalid and is not executed",
        explanation: "The wasiyyah must be for a lawful purpose. A bequest that involves sin is void.",
        references: "Classical conditions of the wasiyyah"
      },
      {
        question: "What is the share of the son's son when the son is not alive and there are daughters?",
        options: ["He is excluded", "He inherits as a residuary (asaba) and takes the remainder after the fixed shares of the daughters and others", "He takes the same as a daughter", "He takes one-sixth"],
        correctAnswer: "He inherits as a residuary (asaba) and takes the remainder after the fixed shares of the daughters and others",
        explanation: "The son's son takes the place of the son in the absence of the son and inherits as a residuary.",
        references: "Rules of asaba and representation in Fara'id"
      },
      {
        question: "What is the ruling on the one who hides the existence of some heirs in order to take a larger share?",
        options: ["It is clever", "It is a major form of injustice and consuming the wealth of others unlawfully; the hidden heirs retain their rights", "It is allowed if one is needy", "It has no consequence"],
        correctAnswer: "It is a major form of injustice and consuming the wealth of others unlawfully; the hidden heirs retain their rights",
        explanation: "Concealing heirs is a form of fraud and consuming wealth in falsehood, which is prohibited in the Quran.",
        references: "Surah An-Nisa 4:29; general principles of justice"
      },
      {
        question: "What is the advanced understanding of why the Quran mentions the shares of the spouses in a separate verse from the children and parents?",
        options: ["It is random", "The structure emphasises the different categories of heirs and the conditions that change their shares, providing a complete and clear system", "Spouses are less important", "It has no significance"],
        correctAnswer: "The structure emphasises the different categories of heirs and the conditions that change their shares, providing a complete and clear system",
        explanation: "Verse 4:11 deals with descendants and ascendants; verse 4:12 deals with spouses and certain siblings. The separation clarifies the conditions for each group.",
        references: "Surah An-Nisa 4:11-12; Tafsir"
      },
      {
        question: "What is the ruling on a gift that is made by a person who is not of sound mind or is under interdiction?",
        options: ["It is valid", "It is not valid; the giver must have the legal capacity to dispose of their property", "It is recommended", "It is only disliked"],
        correctAnswer: "It is not valid; the giver must have the legal capacity to dispose of their property",
        explanation: "A condition of a valid Hiba is that the giver has full capacity to manage their property.",
        references: "Conditions of Hiba in classical fiqh"
      },
      {
        question: "What is the comprehensive final principle that unites the fiqh of Mirath, the rules of Hiba, and the command to maintain family ties?",
        options: ["Wealth is the most important thing", "Justice in the transfer of wealth — whether during life or after death — is a means of protecting the sacred bonds of kinship that Allah has linked to His Name Ar-Rahman, and of submitting to the limits He has set", "Family ties are independent of wealth rules", "Only the Hereafter matters"],
        correctAnswer: "Justice in the transfer of wealth — whether during life or after death — is a means of protecting the sacred bonds of kinship that Allah has linked to His Name Ar-Rahman, and of submitting to the limits He has set",
        explanation: "The entire system of gifts and inheritance is designed to uphold justice, prevent conflict, preserve the family, and express submission to the decree of Allah, the Most Merciful.",
        references: "Surah An-Nisa 4:1, 4:11-14; Sahih Bukhari 2587, 5988; overall objectives of the Shariah"
      },
      {
        question: "What is the ruling on the one who, after the death of the parent, agrees with the other heirs to redistribute the estate in a way that differs from the Quranic shares?",
        options: ["It is always forbidden", "If all the adult heirs freely agree to a different distribution after the death, many scholars allow it as a form of mutual settlement, provided no one is coerced and the rights of minors are protected", "It is obligatory to redistribute", "Only the eldest may decide"],
        correctAnswer: "If all the adult heirs freely agree to a different distribution after the death, many scholars allow it as a form of mutual settlement, provided no one is coerced and the rights of minors are protected",
        explanation: "After the shares have become due, the adult heirs may voluntarily gift or settle among themselves. This is different from a will that attempts to override the shares before death.",
        references: "Classical discussions on settlement among heirs"
      },
      {
        question: "What is the precise meaning of the statement that the shares are 'a duty ordained by Allah'?",
        options: ["They are recommendations", "They are binding obligations that form part of the limits of Allah, and adherence to them is an act of worship and obedience", "They are cultural guidelines", "They apply only in certain eras"],
        correctAnswer: "They are binding obligations that form part of the limits of Allah, and adherence to them is an act of worship and obedience",
        explanation: "The Quran uses the language of obligation and limits, linking the implementation of the shares to obedience to Allah and His Messenger and to the ultimate success of Paradise.",
        references: "Surah An-Nisa 4:11, 4:13-14"
      },
      {
        question: "What is the advanced ruling on a person who uses a trust or company structure to effectively control the distribution of wealth after death in a way that contradicts the Fara'id?",
        options: ["It is always valid modern planning", "If the structure is used as a device to defeat the Quranic shares, it is contrary to the purpose of the Shariah, even if it is legally effective in civil law", "It is recommended", "It is the only fair method"],
        correctAnswer: "If the structure is used as a device to defeat the Quranic shares, it is contrary to the purpose of the Shariah, even if it is legally effective in civil law",
        explanation: "The Shariah looks at the reality and the intention. Using legal forms to circumvent the fixed shares is a form of defeating the limits of Allah.",
        references: "Principles of intention and sadd al-dhara'i"
      },
      {
        question: "What is the ultimate criterion for success in the matter of inheritance and gifts according to the Quran and Sunnah?",
        options: ["Maximising one's own share", "Adherence to the limits set by Allah, justice among the children during life, prompt and fair distribution after death, and the preservation of family mercy and unity", "Following local custom only", "Leaving everything to the eldest son"],
        correctAnswer: "Adherence to the limits set by Allah, justice among the children during life, prompt and fair distribution after death, and the preservation of family mercy and unity",
        explanation: "Success is measured by obedience to the divine limits, the prevention of injustice, and the protection of the family bonds that are linked to the mercy of Allah.",
        references: "Surah An-Nisa 4:13-14; Sahih Bukhari 2587; principles of Silat ar-Rahim"
      },
      {
        question: "What is the final comprehensive principle that a Muslim should hold regarding wealth, family, and the decree of Allah in the matter of inheritance and gifts?",
        options: ["Wealth belongs only to the strong", "All wealth is a trust from Allah; its transfer during life must be just, its distribution after death must follow His fixed limits, and both are means of preserving the family ties that He has linked to His Name Ar-Rahman and of attaining His pleasure", "Only the Hereafter matters and wealth has no rules", "Family ties are independent of divine law"],
        correctAnswer: "All wealth is a trust from Allah; its transfer during life must be just, its distribution after death must follow His fixed limits, and both are means of preserving the family ties that He has linked to His Name Ar-Rahman and of attaining His pleasure",
        explanation: "The entire system of Hiba and Mirath is an expression of Tawhid in practice: recognising that Allah is the true owner, submitting to His distribution, practising justice, and protecting the bonds of mercy that reflect His Name.",
        references: "Surah An-Nisa 4:1, 4:11-14; Sahih Bukhari 2587, 5988; overall Quranic worldview"
      }
    ]
  }
}

export default inheritanceCategory


