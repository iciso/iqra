import { getAllCategories } from "@/data/quiz-data-manager"
import type { QuizLevel } from "@/types/quiz"

// The public page for each quiz subject: /subjects/<slug>. The slug is the category id the quiz
// route already uses (/quiz?category=<id>). Names and descriptions are written here, in plain
// words, rather than read from the question files: some of those titles are internal or wrong.

type SubjectText = { name: string; description: string; section: SubjectSection }

export type SubjectSection = "Islamic Studies" | "Qur’an Surah Studies" | "Tamil Islamic Studies" | "Arabic Vocabulary"

const IS: SubjectSection = "Islamic Studies"
const SURAH: SubjectSection = "Qur’an Surah Studies"
const TAMIL: SubjectSection = "Tamil Islamic Studies"
const ARABIC: SubjectSection = "Arabic Vocabulary"

const subjectText: Record<string, SubjectText> = {
  quran: { name: "Quran", section: IS, description: "What you know about the Holy Quran: its revelation, its surahs and its key verses." },
  seerah: { name: "Seerah", section: IS, description: "The life of Prophet Muhammad (peace be upon him), from Makkah to Madinah." },
  aqeedah: { name: "Aqeedah", section: IS, description: "The core beliefs of Islam: the six pillars of Iman and Tawhid." },
  shirk: { name: "Shirk", section: IS, description: "Associating partners with Allah: its types, its dangers and how to avoid it." },
  "new-muslims": { name: "New Muslims", section: IS, description: "The essentials for a new Muslim: belief, prayer and daily practice." },
  tafsir: { name: "Tafsir", section: IS, description: "Explaining the Quran: what its verses mean and why they were revealed." },
  tazkiyah: { name: "Tazkiyah", section: IS, description: "Purifying the soul: sincerity, good character and the diseases of the heart." },
  comparative: { name: "Comparative Religion", section: IS, description: "Atheism, science and other worldviews compared with Islamic thought." },
  "islamic-finance": { name: "Islamic Finance", section: IS, description: "The principles and practice of Islamic economics and banking." },
  crypto: { name: "Crypto & Blockchain", section: IS, description: "Shariah views on Bitcoin, cryptocurrencies and blockchain." },
  history: { name: "Islamic History", section: IS, description: "The golden ages of Islamic civilisation, its scholars and its discoveries." },
  hadeeth: { name: "Hadeeth", section: IS, description: "The sayings and actions of Prophet Muhammad (peace be upon him) and how they were preserved." },
  fiqh: { name: "Fiqh", section: IS, description: "Islamic jurisprudence: the rulings of worship and daily life." },
  christ: { name: "Christianity & Islam", section: IS, description: "What Islam and Christianity share and where they differ." },
  bidah: { name: "Bidah", section: IS, description: "Innovation in religion and how it relates to Tawhid and the Sunnah." },
  riba: { name: "Riba", section: IS, description: "Why Islam forbids interest and usury, and what it allows instead." },
  takaful: { name: "Takaful", section: IS, description: "Islamic insurance: mutual help and shared risk without Riba, Gharar or Maysir." },
  hindu: { name: "Hinduism & Islam", section: IS, description: "What Islam and Hinduism share and where they differ." },
  dawah: { name: "Dawah", section: IS, description: "Inviting others to Islam with wisdom and good manners." },
  gender: { name: "Gender in Islam", section: IS, description: "The roles, rights and dignity of men and women in Islam." },
  lgbtq: { name: "Islam and LGBTQIA+", section: IS, description: "The Islamic perspective on LGBTQIA+ questions." },
  psych: { name: "Islamic Psychology", section: IS, description: "Mental health and wellbeing through Islamic teachings." },
  music: { name: "Music in Islam", section: IS, description: "What the Quran, the Sunnah and the scholars say about music." },
  "islamic-alcohol-drugs": { name: "Alcohol & Drugs in Islam", section: IS, description: "The Islamic rulings on alcohol, drugs and other intoxicants, and the wisdom behind them." },
  imagery: { name: "Images & Animation in Islam", section: IS, description: "Pictures, drawings and animation in the light of Islamic sources." },
  dating: { name: "Dating in Islam", section: IS, description: "Islamic rulings on relationships before marriage, modesty and courtship." },
  marriage: { name: "Marriage & Family", section: IS, description: "Marriage, the rights of spouses and keeping family ties." },
  parenting: { name: "Islamic Parenting", section: IS, description: "Raising children with Islamic values." },
  peace: { name: "Peace in the Middle East", section: IS, description: "Peace in the Middle East through Islamic principles." },
  salah: { name: "Salah", section: IS, description: "The second pillar of Islam: the daily prayers and how to perform them." },
  sawm: { name: "Sawm (Fasting)", section: IS, description: "Fasting in Islam and the month of Ramadan." },
  charity: { name: "Zakat & Sadaqah", section: IS, description: "Obligatory and voluntary charity in Islam." },
  hajj: { name: "Hajj", section: IS, description: "The pilgrimage to Makkah: its rites, its rules and its meaning." },
  madhab: { name: "Madhabs", section: IS, description: "The four schools of Islamic law, their imams and what they share." },
  inheritance: { name: "Inheritance", section: IS, description: "Islamic inheritance law (Mirath), gifts during life and fairness in the family." },
  fitnah: { name: "Fitnah", section: IS, description: "Trials and discord: spotting them early and keeping families and communities united." },
  "islamic-eschatology": { name: "Islamic End Times", section: IS, description: "The signs of the Hour, the grave, the Day of Judgement, Paradise and Hell." },
  "islamic-medical-ethics": { name: "Islamic Medical Ethics", section: IS, description: "Islamic perspectives on medicine and medical ethics." },
  "surah-78": { name: "Surah An-Naba (78)", section: SURAH, description: "Surah An-Naba, The Great News: phrase meanings, tafsir and Arabic vocabulary." },
  "surah-79": { name: "Surah An-Nazi’at (79)", section: SURAH, description: "Surah An-Nazi’at, Those Who Drag Forth: phrase meanings, tafsir and Arabic vocabulary." },
  "surah-80": { name: "Surah Abasa (80)", section: SURAH, description: "Surah Abasa, He Frowned: phrase meanings, tafsir and Arabic vocabulary." },
  "surah-81": { name: "Surah At-Takwir (81)", section: SURAH, description: "Surah At-Takwir, The Folding Up: phrase meanings, tafsir and Arabic vocabulary." },
  "surah-82": { name: "Surah Al-Infitar (82)", section: SURAH, description: "Surah Al-Infitar, The Cleaving: phrase meanings, tafsir and Arabic vocabulary." },
  "ta-quran": { name: "குர்ஆன் (Quran in Tamil)", section: TAMIL, description: "Quran questions in Tamil: புனித குர்ஆனைப் பற்றிய உங்கள் அறிவைச் சோதித்துப் பாருங்கள்." },
  "ta-aqeedah": { name: "அகீதா (Aqeedah in Tamil)", section: TAMIL, description: "The core beliefs of Islam, in Tamil: ஈமானின் ஆறு தூண்கள், தவ்ஹீத்." },
  "ta-salah": { name: "தொழுகை (Salah in Tamil)", section: TAMIL, description: "The daily prayers and how to perform them, in Tamil: கடமையான தொழுகைகளும் அவற்றின் முறைகளும்." },
  "ta-charity": { name: "ஸகாத் மற்றும் தர்மம் (Zakat in Tamil)", section: TAMIL, description: "Zakat and Sadaqah, in Tamil: ஸகாத் மற்றும் சதகா வழிகாட்டல்கள்." },
  "ta-fiqh": { name: "ஃபிக்ஹ் (Fiqh in Tamil)", section: TAMIL, description: "Islamic jurisprudence, in Tamil: இஸ்லாமிய சட்டவியல் மற்றும் நடைமுறைகள்." },
  "quranic-arabic-01": { name: "Quranic Arabic", section: ARABIC, description: "The meanings of short and common words used in the Quran." },
  "modern-arabic-01": { name: "Modern Standard Arabic", section: ARABIC, description: "Everyday and formal Arabic (Fusha) vocabulary: the script, how it sounds and what it means." },
}

export const subjectLevels: { level: QuizLevel; label: string; description: string }[] = [
  { level: "easy", label: "Easy", description: "Basic questions for beginners." },
  { level: "intermediate", label: "Intermediate", description: "Builds on the basics." },
  { level: "advanced", label: "Advanced", description: "For those with deeper knowledge." },
]

export type Subject = SubjectText & {
  slug: string
  counts: Record<QuizLevel, number>
  total: number
}

const toSubject = (category: ReturnType<typeof getAllCategories>[number]): Subject => {
  const text = subjectText[category.id] ?? { name: category.title, description: category.description, section: IS }
  const intermediate = category.levels.intermediate?.length ?? 0
  const counts = {
    easy: category.levels.easy.length,
    // The quiz falls back to Easy when a subject has no Intermediate questions.
    intermediate: intermediate || category.levels.easy.length,
    advanced: category.levels.advanced.length,
  }
  return { ...text, slug: category.id, counts, total: category.levels.easy.length + intermediate + counts.advanced }
}

export const subjects: Subject[] = getAllCategories().map(toSubject)

export const getSubject = (slug: string) => subjects.find((subject) => subject.slug === slug)

export const subjectPath = (slug: string) => `/subjects/${slug}`

/** Search-result text: the subject's own line, then the real question counts. */
export const subjectSeoDescription = (subject: Subject) =>
  `${subject.description} ${subject.total} questions in Easy, Intermediate and Advanced levels. Free Islamic quiz on IQRA.`
