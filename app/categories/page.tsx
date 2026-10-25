"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Book, ArrowUp, Bitcoin, Scale, BookCopy, Brain, BriefcaseMedical, BookDashed,
  Calendar1, Church, CirclePlus, HandCoins, Heart, Image, Infinity, Languages, Megaphone, Music, User, Users,
  Sparkles, History, Scroll, Compass, Globe, ArrowRight, ScanFace, Sprout, Telescope,
  Percent, Rainbow, Circle, HandHeart, Wind, WineOff,
} from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const categories = [
  { id: "quran", title: "Quran", description: "Quran Basics", icon: <Book className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "fiqh", title: "Fiqh", description: "Islamic Jurisprudence", icon: <Scale className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "tafsir", title: "Tafsir", description: "Quranic Exegesis", icon: <BookCopy className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "hadeeth", title: "Hadeeth", description: "Prophetic Traditions", icon: <Scroll className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "aqeedah", title: "Aqeedah", description: "Islamic Monotheism", icon: <Infinity className="h-8 w-8 text-green-600 dark:text-green-400" /> },
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
  { id: "riba", title: "Usury or interest", description: "Usury or interest", icon: <Percent className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "bidah", title: "Bidah", description: "Bidah & Tawhid", icon: <CirclePlus className="h-8 w-8 text-green-600 dark:text-green-400" /> }, 
  { id: "islamic-finance", title: "Islamic Finance", description: "Islamic Economics", icon: <HandHeart className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "crypto", title: "Crypto & Blockchain", description: "Shariah & digital currencies", icon: <Bitcoin className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "gender", title: "Gender", description: "Gender in Islam", icon: <Circle className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "lgbtq", title: "Islam and LGBTQIA+", description: "LGBTQIA+ & Islam", icon: <Rainbow className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "psych", title: "Islamic Psychology", description: "Psychology & Islam", icon: <Brain className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "music", title: "Music in Islam", description: "Music in Islam", icon: <Music className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-alcohol-drugs", title: "Alcohol & Drugs in Islam", description: "Alcohol & Drugs in Islam", icon: <WineOff className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "imagery", title: "Images & Animation in Islam", description: "Images & Animation in Islam", icon: <Image className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "dating", title: "Dating", description: "Dating in Islam", icon: <Heart className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "parenting", title: "Islamic Parenting", description: "Islam & parenting", icon: <ScanFace className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-medical-ethics", title: "Medical Ethics", description: "Islamic Medical Ethics", icon: <BriefcaseMedical className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "islamic-eschatology", title: "Islamic End-Days", description: "Islamic End Days", icon: <Megaphone className="h-8 w-8 text-green-600 dark:text-green-400" /> },
  { id: "peace", title: "Peace", description: "Peace in Middle East", icon: <Telescope className="h-8 w-8 text-green-600 dark:text-green-400" /> },
]


// Arabic vocabulary remains a separate section, distinct from Islamic Studies
// and the Qur'an Surah question banks.
function ArabicVocabSection({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null
  setSelectedCategory: (id: string) => void
}) {
  return (
    <section id="Vocab" className="w-full max-w-3xl mt-8 scroll-mt-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

// Add further Tamil translated files here.
const tamilCategories = [
  {
    id: "ta-quran",
    title: "குர்ஆன்",
    description: "குர்ஆன் குறித்த அடிப்படைத் தகவல்கள்",
    icon: Book,
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
    <section id="tamil-islam-studies" className="w-full max-w-3xl mt-8 scroll-mt-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

// Add further Surahs here as their IQRA data files are registered.
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
]

function QuranSurahSection({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null
  setSelectedCategory: (id: string) => void
}) {
  return (
    <section id="quran-surah-studies" className="w-full max-w-3xl mt-8 scroll-mt-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

// Levels offered to the player. `value` is what goes into the URL (?difficulty=...)
// and is understood by normalizeDifficulty() in app/quiz/page.tsx.
const difficultyLevels = [
  { value: "easy", label: "Easy", description: "Basic questions for beginners" },
  { value: "intermediate", label: "Intermediate", description: "Moderate questions to build on the basics" },
  { value: "advanced", label: "Advanced", description: "Challenging questions for those with deeper knowledge" },
]

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const difficultyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedCategory && difficultyRef.current) {
      const timer = window.setTimeout(() => {
        difficultyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
      return () => window.clearTimeout(timer)
    }
  }, [selectedCategory])

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSelectedDifficulty(null)
  }

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      router.push(`/quiz?category=${encodeURIComponent(selectedCategory)}&difficulty=${encodeURIComponent(selectedDifficulty)}`)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 py-8 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Existing Islamic Studies categories */}
      <section id="islamic-studies" className="w-full max-w-3xl scroll-mt-6">
        <Card className="border-green-200 shadow-lg dark:border-green-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Islamic Studies</CardTitle>
            <CardDescription className="text-green-600 dark:text-green-500">
              Choose an Islamic Studies topic to practise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
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
                    {selectedCategory === category.id && (
                      <span className="mt-2 text-xs font-medium text-green-700 dark:text-green-300">Selected ✓</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

       {/* New separate section for individual Tamil question banks */}
      <TamilIslamSection
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* New separate section for individual Qur'an Surah question banks */}
      <QuranSurahSection
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Existing Arabic Vocabulary section */}
      <ArabicVocabSection
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Shared difficulty and launch controls for whichever category was selected */}
      {selectedCategory && (
        <section ref={difficultyRef} className="w-full max-w-3xl mt-8 scroll-mt-6">
          <Card className="border-green-200 shadow-lg dark:border-green-800">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-green-800 dark:text-green-400">Quiz Setup</CardTitle>
              <CardDescription className="text-green-600 dark:text-green-500">
                Choose a difficulty level for the selected category
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
            <CardFooter className="flex justify-center">
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
    </main>
  )
}
