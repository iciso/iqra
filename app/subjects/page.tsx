"use client"

import { useState, useRef, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Book, ArrowUp, Bitcoin, Scale, BookCopy, Brain, BriefcaseMedical, BookDashed,
  Calendar1, Church, CirclePlus, HandCoins, Handshake, Home, Heart, Image as ImageIcon, Infinity, Languages, Megaphone, Music, User, Users,
  Sparkles, History, Scroll, Compass, Globe, ArrowLeft, ArrowRight, Milestone, Network, ScanFace, Sprout, Sun, Telescope,
  Tornado, Percent, Rainbow, Split, Circle, HandHeart, Wind, WineOff,
} from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import PageHeader from "@/components/shared/page-header"
import { pageContainerClass } from "@/lib/page-layout"

const categories = [
  { id: "quran", title: "Quran", description: "Quran Basics", icon: <Book className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "fiqh", title: "Fiqh", description: "Islamic Jurisprudence", icon: <Scale className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "tafsir", title: "Tafsir", description: "Quranic Exegesis", icon: <BookCopy className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "hadeeth", title: "Hadeeth", description: "Prophetic Traditions", icon: <Scroll className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "aqeedah", title: "Aqeedah", description: "Islamic Monotheism", icon: <Infinity className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "shirk", title: "Shirk", description: "Assigning Partners", icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "seerah", title: "Seerah", description: "Prophet's Biography", icon: <User className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "tazkiyah", title: "Tazkiyah", description: "Spiritual Purification", icon: <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "salah", title: "Salah", description: "Prayers in Islam", icon: <ArrowUp className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "sawm", title: "Sawm", description: "Fasting & Ramadaan", icon: <Calendar1 className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "chairty", title: "Zakat & Sadaqah", description: "Charity in Islam", icon: <HandCoins className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "hajj", title: "Hajj", description: "Islamic Pilgrimmage", icon: <Compass className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "history", title: "Islamic History", description: "History of Islam", icon: <History className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "dawah", title: "Dawah", description: "Inviting to Islam", icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "new-muslims", title: "New Muslims", description: "Essentials for New Muslims", icon: <Compass className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "comparative", title: "Comparative Religion", description: "Faiths, Non-Faiths & Islam", icon: <Globe className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "christ", title: "Christianity", description: "Islam and Christianity", icon: <Church className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "hindu", title: "Hinduism", description: "Islam and Hinduism", icon: <BookDashed className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "riba", title: "Riba", description: "Usury or interest", icon: <Percent className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "takaful", title: "Takaful", description: "Islamic Insurance", icon: <Handshake className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "bidah", title: "Bidah", description: "Bidah & Tawhid", icon: <CirclePlus className="h-8 w-8 text-green-600 dark:text-green-400" /> }, 
  { id: "islamic-finance", title: "Islamic Finance", description: "Islamic Economics", icon: <HandHeart className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "crypto", title: "Crypto & Blockchain", description: "Shariah & digital currencies", icon: <Bitcoin className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "gender", title: "Gender", description: "Gender in Islam", icon: <Circle className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "lgbtq", title: "Islam and LGBTQIA+", description: "LGBTQIA+ & Islam", icon: <Rainbow className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "psych", title: "Islamic Psychology", description: "Psychology & Islam", icon: <Brain className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "music", title: "Music in Islam", description: "Music in Islam", icon: <Music className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-alcohol-drugs", title: "Alcohol & Drugs in Islam", description: "Alcohol & Drugs in Islam", icon: <WineOff className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "imagery", title: "Images & Animation in Islam", description: "Images & Animation in Islam", icon: <ImageIcon className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "dating", title: "Dating", description: "Dating in Islam", icon: <Heart className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "marriage", title: "Marriage & Family", description: "Family Bonding", icon: <Home className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "parenting", title: "Islamic Parenting", description: "Islam & parenting", icon: <ScanFace className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "madhab", title: "Madhabs", description: "Jurisprudence Schools", icon: <Network className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "inheritance", title: "Inheritance", description: "Inheritance & Equity", icon: <Milestone className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "fitnah", title: "Fitnah", description: "Discord & Unity", icon: <Tornado className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-medical-ethics", title: "Medical Ethics", description: "Islamic Medical Ethics", icon: <BriefcaseMedical className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-eschatology", title: "Islamic End-Days", description: "Islamic End Days", icon: <Megaphone className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "peace", title: "Peace", description: "Peace in Middle East", icon: <Telescope className="h-8 w-8 text-green-600 dark:text-green-400" /> },
]

const categoryGroups = [
  { title: "Quran & Sunnah", ids: ["quran", "tafsir", "hadeeth", "seerah"] },
  { title: "Belief", ids: ["aqeedah", "shirk", "bidah", "islamic-eschatology", "fitnah"] },
  { title: "Prayer", ids: ["salah", "sawm", "chairty", "hajj", "tazkiyah"] },
  { title: "Law", ids: ["fiqh", "madhab", "inheritance", "islamic-medical-ethics"] },
  { title: "Money & Finance", ids: ["riba", "takaful", "islamic-finance", "crypto"] },
  {
    title: "Family & Society",
    ids: ["marriage", "parenting", "gender", "dating", "lgbtq", "psych", "music", "imagery", "islamic-alcohol-drugs"],
  },
  { title: "History & Dawah", ids: ["history", "dawah", "new-muslims", "comparative", "christ", "hindu", "peace"] },
]

const groupedIds = new Set(categoryGroups.flatMap((group) => group.ids))
const ungrouped = categories.filter((category) => !groupedIds.has(category.id))

// A topic missing from categoryGroups still shows, under "More Topics", so adding one never hides it.
const groupedCategories = [
  ...categoryGroups.map((group) => ({
    title: group.title,
    items: group.ids
      .map((id) => categories.find((category) => category.id === id))
      .filter((category): category is (typeof categories)[number] => Boolean(category)),
  })),
  ...(ungrouped.length ? [{ title: "More Topics", items: ungrouped }] : []),
]

function ArabicVocabSection({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null
  setSelectedCategory: (id: string) => void
}) {
  return (
    <section id="vocab" className="w-full max-w-7xl mt-2">
      <Card className="border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">
            Arabic Vocabulary
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">
            Choose the vocabulary track you want to practise
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              className={`border-green-200 hover:border-green-500 transition-colors dark:border-green-800 cursor-pointer ${
                selectedCategory === "quranic-arabic-01"
                  ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                  : ""
              }`}
              onClick={() => setSelectedCategory("quranic-arabic-01")}
            >
              <CardHeader className="items-center text-center">
                <Languages className="h-8 w-8 text-green-600 dark:text-green-400" />
                <CardTitle className="text-lg">Quranic Arabic</CardTitle>
                <CardDescription>Learn Quranic Vocabulary</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {selectedCategory === "quranic-arabic-01" && (
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">Selected ✓</span>
                )}
              </CardContent>
            </Card>

            <Card
              className={`border-green-200 hover:border-green-500 transition-colors dark:border-green-800 cursor-pointer ${
                selectedCategory === "modern-arabic-01"
                  ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                  : ""
              }`}
              onClick={() => setSelectedCategory("modern-arabic-01")}
            >
              <CardHeader className="items-center text-center">
                <Languages className="h-8 w-8 text-green-600 dark:text-green-400" />
                <CardTitle className="text-lg">Modern Standard Arabic</CardTitle>
                <CardDescription>Learn everyday & formal Arabic</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {selectedCategory === "modern-arabic-01" && (
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">Selected ✓</span>
                )}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

const tamilCategories = [
  {
    id: "ta-quran",
    title: "குர்ஆன்",
    description: "குர்ஆன் குறித்த அடிப்படைத் தகவல்கள்",
    icon: Book,
  },
  {
    id: "ta-aqeedah",
    title: "அகீதா",
    description: "ஈமானும் தவ்ஹீதும்",
    icon: Infinity,
  },
  {
    id: "ta-salah",
    title: "தொழுகை (ஸலாஹ்)",
    description: "பிரார்த்தனைகளும் அவற்றின் வழிமுறைகளும்",
    icon: ArrowUp,
  },
  {
    id: "ta-charity",
    title: "ஸகாத் மற்றும் தர்மம்",
    description: "பஸகாத், சதகா வழிகாட்டல்கள்",
    icon: HandCoins,
  },
  {
    id: "ta-fiqh",
    title: "ஃபிக்ஹ்",
    description: "இஸ்லாமிய சட்டவியல் மற்றும் நடைமுறைகள்",
    icon: Scale,
  }
]

function TamilIslamSection({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null
  setSelectedCategory: (id: string) => void
}) {
  return (
    <section id="tamil-islam-studies" className="w-full max-w-7xl mt-2">
      <Card className="border-emerald-200 shadow-lg dark:border-emerald-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">
            தமிழ் இஸ்லாமிய ஆய்வுகள்
          </CardTitle>
          <CardDescription className="text-emerald-700 dark:text-emerald-500">
            பயிற்சி செய்வதற்கு ஓர் இஸ்லாமியக் கல்வித் தலைப்பைத் தேர்ந்தெடுக்கவும்
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {tamilCategories.map((tamil) => {
              const TamilIcon = tamil.icon
              const isSelected = selectedCategory === tamil.id
              return (
                <button
                  type="button"
                  key={tamil.id}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(tamil.id)}
                  className={`rounded-lg border p-4 text-center transition-colors ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/50 dark:border-emerald-600"
                      : "border-gray-200 hover:border-emerald-300 dark:border-gray-700 dark:hover:border-emerald-700"
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <TamilIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    <span className="mt-2 font-medium dark:text-white">{tamil.title}</span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">{tamil.description}</span>
                    {isSelected && (
                      <span className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        Selected ✓
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

const surahCategories = [
  {
    id: "surah-78",
    title: "Surah An-Naba (78)",
    description: "The Great News",
    icon: Megaphone,
  },
  {
    id: "surah-79",
    title: "Surah An-Naziat (79)",
    description: "Those Who Drag Forth",
    icon: Wind,
  },
  {
    id: "surah-80",
    title: "Surah Abasa (80)",
    description: "He Frowned",
    icon: Sprout,
  },
  {
    id: "surah-81",
    title: "Surah At-Takwir (81)",
    description: "The Folding Up",
    icon: Sun,
  },
   {
    id: "surah-82",
    title: "Surah An-Infitar (82)",
    description: "The Cleaving",
    icon: Split,
  },
]

function QuranSurahSection({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null
  setSelectedCategory: (id: string) => void
}) {
  return (
    <section id="quran-surah-studies" className="w-full max-w-7xl mt-2">
      <Card className="border-emerald-200 shadow-lg dark:border-emerald-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-800 dark:text-emerald-400">
            Qur’an Surah Studies
          </CardTitle>
          <CardDescription className="text-emerald-700 dark:text-emerald-500">
            Practise questions from individual Surahs. More Surahs can be added as their question banks are ready.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {surahCategories.map((surah) => {
              const SurahIcon = surah.icon
              const isSelected = selectedCategory === surah.id
              return (
                <button
                  type="button"
                  key={surah.id}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(surah.id)}
                  className={`rounded-lg border p-4 text-center transition-colors ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/50 dark:border-emerald-600"
                      : "border-gray-200 hover:border-emerald-300 dark:border-gray-700 dark:hover:border-emerald-700"
                  }`}
                >
                  <span className="flex flex-col items-center">
                    <SurahIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    <span className="mt-2 font-medium dark:text-white">{surah.title}</span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">{surah.description}</span>
                    {isSelected && (
                      <span className="mt-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        Selected ✓
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

const difficultyLevels = [
  { value: "easy", label: "Easy", description: "Basic questions for beginners" },
  { value: "intermediate", label: "Intermediate", description: "Moderate questions to build on the basics" },
  { value: "advanced", label: "Advanced", description: "Challenging questions for those with deeper knowledge" },
]

type TrackId = "islamic-studies" | "tamil-islam-studies" | "quran-surah-studies" | "vocab"

const tracks: { id: TrackId; title: string; description: string; count: number; icon: typeof Book }[] = [
  { id: "islamic-studies", title: "Islamic Studies", description: "Quran, belief, worship, law and more", count: categories.length, icon: Book },
  { id: "quran-surah-studies", title: "Qur’an Surah Studies", description: "Questions from individual Surahs", count: surahCategories.length, icon: Megaphone },
  { id: "tamil-islam-studies", title: "தமிழ் இஸ்லாமிய ஆய்வுகள்", description: "Islamic Studies in Tamil", count: tamilCategories.length, icon: Languages },
  { id: "vocab", title: "Arabic Vocabulary", description: "Quranic and Modern Standard Arabic", count: 2, icon: Languages },
]

const steps = ["Section", "Topic", "Difficulty"]

// Old links such as /subjects#vocab or /subjects#quran-surah-studies open straight on that section's topics.
const trackFromHash = (hash: string): TrackId | null => {
  const key = hash.replace(/^#/, "").toLowerCase()
  return tracks.find((track) => track.id === key)?.id ?? null
}

const subscribeToHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange)
  return () => window.removeEventListener("hashchange", onChange)
}

const topicTitle = (id: string | null) => {
  if (!id) return ""
  const all: { id: string; title: string }[] = [
    ...categories,
    ...tamilCategories,
    ...surahCategories,
    { id: "quranic-arabic-01", title: "Quranic Arabic" },
    { id: "modern-arabic-01", title: "Modern Standard Arabic" },
  ]
  return all.find((topic) => topic.id === id)?.title ?? id
}

export default function CategoriesPage() {
  const router = useRouter()
  const hashTrack = useSyncExternalStore(subscribeToHash, () => trackFromHash(window.location.hash), () => null)
  const [stepState, setStep] = useState<number | null>(null)
  const [trackState, setTrack] = useState<TrackId | null>(null)
  // Until the visitor clicks anything, a section named in the URL hash opens on its topics.
  const step = stepState ?? (hashTrack ? 2 : 1)
  const track = trackState ?? (stepState === null ? hashTrack : null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const goTo = (next: number) => {
    setStep(next)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleSelectTrack = (id: TrackId) => {
    setTrack(id)
    setSelectedCategory(null)
    setSelectedDifficulty(null)
    goTo(2)
  }

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedDifficulty(null)
    goTo(3)
  }

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      router.push(`/quiz?category=${encodeURIComponent(selectedCategory)}&difficulty=${encodeURIComponent(selectedDifficulty)}`)
    }
  }

  const canOpen = (n: number) => n === 1 || (n === 2 && track !== null) || (n === 3 && selectedCategory !== null)

  return (
    <div className={`${pageContainerClass} flex flex-col items-center`}>
      <PageHeader title="Subjects" subtitle="Pick a section, then a topic and a difficulty to start a quiz." />
      <div ref={topRef} className="w-full max-w-7xl scroll-mt-20">
        <ol aria-label="Quiz setup steps" className="mx-auto mb-6 flex max-w-xl items-center justify-center gap-2">
          {steps.map((label, index) => {
            const n = index + 1
            const isCurrent = step === n
            const isDone = step > n
            return (
              <li key={label} className="flex flex-1 items-center gap-2">
                <button
                  type="button"
                  onClick={() => canOpen(n) && goTo(n)}
                  disabled={!canOpen(n)}
                  aria-current={isCurrent ? "step" : undefined}
                  className={`flex w-full items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed ${
                    isCurrent
                      ? "border-green-600 bg-green-600 text-white dark:border-green-500 dark:bg-green-600"
                      : isDone
                        ? "border-green-300 bg-white text-green-800 hover:border-green-500 dark:border-green-700 dark:bg-gray-900 dark:text-green-300"
                        : "border-gray-200 bg-white/60 text-gray-400 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-500"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                      isCurrent ? "bg-white text-green-700" : isDone ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {isDone ? "✓" : n}
                  </span>
                  <span className="truncate">{label}</span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      {step === 1 && (
        <section className="w-full max-w-7xl">
          <Card className="border-green-200 shadow-lg dark:border-green-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">What do you want to practise?</CardTitle>
              <CardDescription className="text-green-600 dark:text-green-500">Pick a section to see its topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tracks.map((item) => {
                  const TrackIcon = item.icon
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleSelectTrack(item.id)}
                      className={`rounded-lg border p-6 text-center transition-colors ${
                        track === item.id
                          ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                          : "border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-600"
                      }`}
                    >
                      <span className="flex flex-col items-center">
                        <TrackIcon className="h-10 w-10 text-green-600 dark:text-green-400" />
                        <span className="mt-3 text-lg font-semibold dark:text-white">{item.title}</span>
                        <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                        <span className="mt-3 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          {item.count} {item.count === 1 ? "topic" : "topics"}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {step === 2 && (
        <>
          <div className="w-full max-w-7xl">
            <Button variant="outline" onClick={() => goTo(1)} className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All sections
            </Button>
          </div>
          {track === "islamic-studies" && (
            <section id="islamic-studies" className="w-full max-w-7xl mt-2">
              <Card className="border-green-200 shadow-lg dark:border-green-800">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Islamic Studies</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-500">
                    Choose an Islamic Studies topic to practise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {groupedCategories.map((group) => (
                      <div key={group.title}>
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                          {group.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                          {group.items.map((category) => (
                            <button
                              type="button"
                              key={category.id}
                              aria-pressed={selectedCategory === category.id}
                              className={`p-4 rounded-lg border text-left transition-colors ${
                                selectedCategory === category.id
                                  ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                                  : "border-gray-200 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-700"
                              }`}
                              onClick={() => handleSelectCategory(category.id)}
                            >
                              <span className="flex flex-col items-center text-center">
                                {category.icon}
                                <span className="mt-2 font-medium dark:text-white">{category.title}</span>
                                <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">{category.description}</span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
          {track === "tamil-islam-studies" && (
            <TamilIslamSection selectedCategory={selectedCategory} setSelectedCategory={handleSelectCategory} />
          )}
          {track === "quran-surah-studies" && (
            <QuranSurahSection selectedCategory={selectedCategory} setSelectedCategory={handleSelectCategory} />
          )}
          {track === "vocab" && (
            <ArabicVocabSection selectedCategory={selectedCategory} setSelectedCategory={handleSelectCategory} />
          )}
        </>
      )}

      {step === 3 && (
        <section className="w-full max-w-3xl">
          <Card className="border-green-200 shadow-lg dark:border-green-800">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Choose a difficulty</CardTitle>
              <CardDescription className="text-green-600 dark:text-green-500">
                Topic: <span className="font-semibold">{topicTitle(selectedCategory)}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedDifficulty || ""} onValueChange={setSelectedDifficulty}>
                <div className="flex flex-col space-y-3">
                  {difficultyLevels.map((level) => (
                    <div
                      key={level.value}
                      className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700"
                    >
                      <RadioGroupItem value={level.value} id={`quiz-difficulty-${level.value}`} />
                      <Label htmlFor={`quiz-difficulty-${level.value}`} className="flex flex-col cursor-pointer">
                        <span className="font-medium dark:text-white">{level.label}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{level.description}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between gap-3">
              <Button variant="outline" onClick={() => goTo(2)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Change topic
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 flex items-center"
                onClick={handleStartQuiz}
                disabled={!selectedCategory || !selectedDifficulty}
              >
                Start Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </div>
  )
}
