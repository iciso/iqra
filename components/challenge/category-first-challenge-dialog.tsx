"use client"

import { useState, useEffect } from "react"
import { NameRequiredMessage } from "./name-required-message"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gamepad2, MoveUp, Zap, Bitcoin, Book, BookCopy, BookDashed, Brain, BriefcaseMedical, CirclePlus, 
        Languages, Megaphone, Music, Percent, Scale, Scroll, Calendar1, Church, Telescope, HandCoins, HandHeart, Heart, 
        Home, Image, Infinity, Trophy, Clock, Target, History, Plane, ScanFace, Sparkles, Sprout, User, Users, 
        Rainbow, Circle, Compass, Globe, AlertCircle, Wind, WineOff, } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

interface User {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score?: number
  best_percentage?: number
}

interface CategoryFirstChallengeDialogProps {
  isOpen: boolean
  onClose: () => void
  opponent: User
}

// Define all categories here for challenges 
const challengeCategories = [
  {
    id: "quran",
    label: "Quran",
    description: "Quran Knowledge",
    icon: Book,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "fiqh",
    label: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: Scale,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "tafsir",
    label: "Tafsir",
    description: "Quran Commentary",
    icon: BookCopy,
    color: "bg-indigo-500 hover:bg-indigo-600",
    textColor: "text-indigo-700",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-300",
  },
  {
    id: "hadeeth",
    label: "Hadeeth",
    description: "Prophetic Traditions",
    icon: Scroll,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
  },
  {
    id: "aqeedah",
    label: "Aqeedah",
    description: "Islamic Creed",
    icon: Infinity,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  },
  {
    id: "shirk",
    label: "Shirk",
    description: "Assigning Partners",
    icon: Users,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
  },
  {
    id: "seerah",
    label: "Seerah",
    description: "Prophet's Biography",
    icon: User,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "tazkiyah",
    label: "Tazkiyah",
    description: "Spiritual Purification",
    icon: Sparkles,
    color: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-teal-700",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-300",
  },
  {
    id: "salah",
    label: "Salah",
    description: "Prayers in Islam",
    icon: MoveUp,
    color: "bg-fuchsia-500 hover:bg-fuchsia-600",
    textColor: "text-fuchsia-700",
    bgLight: "bg-fuchsia-50",
    borderColor: "border-fuchsia-300",
  },
  {
    id: "charity",
    label: "Zakat & Sadaqah",
    description: "Charity in Islam",
    icon: HandCoins,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
  },
  {
    id: "sawm",
    label: "Sawm",
    description: "Fasting & Ramadaan",
    icon: Calendar1,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "hajj",
    label: "Hajj",
    description: "Islamic Pilgrimmage",
    icon: Plane,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "history",
    label: "Islamic History",
    description: "History of Islam and Muslims",
    icon: History,
    color: "bg-orange-500 hover:bg-orange-600",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-300",
  },
  {
    id: "dawah",
    label: "Dawah",
    description: "Inviting to Islam",
    icon: Users,
    color: "bg-cyan-500 hover:bg-cyan-600",
    textColor: "text-cyan-700",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-300",
  },
  {
    id: "new-muslims",
    label: "New Muslims",
    description: "Essentials for New Muslims",
    icon: Compass,
    color: "bg-emerald-500 hover:bg-emerald-600",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-300",
  },
  {
    id: "comparative",
    label: "Comparative Religion",
    description: "Faiths, Non-Faiths & Islam",
    icon: Globe,
    color: "bg-violet-500 hover:bg-violet-600",
    textColor: "text-violet-700",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-300",
  },
  {
    id: "christ",
    label: "Christianity",
    description: "Islam & Christianity",
    icon: Church,
    color: "bg-yellow-500 hover:bg-yellow-600",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-300",
  },
  {
    id: "hindu",
    label: "Hinduism",
    description: "Islam & Hinduism",
    icon: BookDashed,
    color: "bg-fuchsia-500 hover:bg-fuchsia-600",
    textColor: "text-fuchsia-700",
    bgLight: "bg-fuchsia-50",
    borderColor: "border-fuchsia-300",
  },
  {
    id: "bidah",
    label: "Bidah",
    description: "Bidah & Tawheed",
    icon: CirclePlus,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  },
  {
    id: "riba",
    label: "Riba",
    description: "Usury or Interest",
    icon: Percent,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "islamic-finance",
    label: "Islamic Finance",
    description: "Islamic Economics",
    icon: HandHeart,
    color: "bg-rose-500 hover:bg-rose-600",
    textColor: "text-rose-700",
    bgLight: "bg-rose-50",
    borderColor: "border-rose-300",
  },
  {
    id: "crypto",
    label: "Crypto & Blockchain",
    description: "Shariah & digital currencies",
    icon: Bitcoin,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "gender",
    label: "Gender",
    description: "Gender in Islam",
    icon: Circle,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "lgbtq",
    label: "LGBTQIA+",
    description: "LGBTQIA+ & Islam",
    icon: Rainbow,
    color: "bg-indigo-500 hover:bg-indigo-600",
    textColor: "text-indigo-700",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-300",
  },
  {
    id: "psych",
    label: "Islamic Psychology",
    description: "Psychology & Islam",
    icon: Brain,
    color: "bg-lime-500 hover:bg-lime-600",
    textColor: "text-lime-700",
    bgLight: "bg-lime-50",
    borderColor: "border-lime-300",
  },
  {
    id: "music",
    label: "Music in Islam",
    description: "Music in Islam",
    icon: Music,
    color: "bg-yellow-500 hover:bg-yellow-600",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-300",
  },
  {
    id: "islamic-alcohol-drugs",
    label: "Alcohol & Drugs in Islam",
    description: "Alcohol & Drugs in Islam",
    icon: WineOff,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "imagery",
    label: "Images in Islam",
    description: "Images & Animation in Islam",
    icon: Image,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "dating",
    label: "Dating",
    description: "Dating in Islam",
    icon: Heart,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  }, 
     {
    id: "marriage",
    label: "Marriage & Family",
    description: "Family Bonding",
    icon: Home,
    color: "bg-lime-500 hover:bg-lime-600",
    textColor: "text-lime-700",
    bgLight: "bg-lime-50",
    borderColor: "border-lime-300",
  },    
  {
    id: "parenting",
    label: "Islamic Parenting",
    description: "Islam & parenting",
    icon: ScanFace,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "islamic-medical-ethics",
    label: "Medical Ethics",
    description: "Islamic Medical Ethics",
    icon: BriefcaseMedical,
    color: "bg-gray-500 hover:bg-gray-600",
    textColor: "text-gray-700",
    bgLight: "bg-gray-50",
    borderColor: "border-gray-300",
  },
  {
    id: "islamic-eschatology",
    label: "Islamic End-Days",
    description: "Islamic End-Days",
    icon: Megaphone,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "peace",
    label: "Peace",
    description: "Peace in Middle East",
    icon: Telescope,
    color: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-teal-700",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-300",
  },
]

const tamilCategories = [
  {
    id: "ta-quran",
    label: "குர்ஆன்",
    description: "குர்ஆன் குறித்த அடிப்படைத் தகவல்கள்",
    icon: Book,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  },
  {
    id: "ta-salah",
    label: "தொழுகை",
    description: "தொழுகை-ஸலாஹ்",
    icon: MoveUp,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  }, 
  {
    id: "ta-charity",
    label: "தஸகாத் மற்றும் தர்மம்",
    description: "பஸகாத், சதகா வழிகாட்டல்கள்",
    icon: HandCoins,
    color: "bg-amber-500 hover:bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-300",
  }, 
  {
    id: "ta-fiqh",
    label: "ஃபிக்ஹ்",
    description: "இஸ்லாமிய சட்டவியல் மற்றும் நடைமுறைகள்",
    icon: Scale,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
]

const surahCategories = [
  {
    id: "surah-78",
    label: "Surah-78 An-Naba",
    description: "The Great News",
    icon: Megaphone,
    color: "bg-green-500 hover:bg-green-600",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-300",
  },
  {
    id: "surah-79",
    label: "Surah-79 An-Naziah",
    description: "Those Who Drag Forth",
    icon: Wind,
    color: "bg-blue-500 hover:bg-blue-600",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-300",
  },
  {
    id: "surah-80",
    label: "Surah-80 Abasa",
    description: "He Frowned",
    icon: Sprout,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-300",
  },
]

const arabicVocabularyCategories = [
  {
    id: "quranic-arabic-01",
    label: "Quranic Arabic 01",
    description: "Quranic Arabic - Level 1",
    icon: Languages,
    color: "bg-purple-500 hover:bg-purple-600",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
    borderColor: "border-purple-300",
  },
  {
    id: "modern-arabic-01",
    label: "Modern Arabic 01",
    description: "Modern Arabic - Level 1",
    icon: Languages,
    color: "bg-lime-500 hover:bg-lime-600",
    textColor: "text-lime-700",
    bgLight: "bg-lime-50",
    borderColor: "border-lime-300",
  },
]

type SectionInfo = { number: number; size: number }
type SectionData = {
  levels: Record<string, { count: number; sections: SectionInfo[] }>
  played: Record<string, number[]>
}

const DEFAULT_LEVEL_STRUCTURE = {
  count: 30,
  sections: [
    { number: 1, size: 10 },
    { number: 2, size: 10 },
    { number: 3, size: 10 },
  ],
}

// First section these two players have not played; falls back to section 1.
function nextSection(data: SectionData | null, level: string): number | null {
  const levelData = data?.levels[level] || DEFAULT_LEVEL_STRUCTURE
  const sections = levelData.sections ?? DEFAULT_LEVEL_STRUCTURE.sections
  const played = data?.played[level] ?? []
  return (sections.find((s) => !played.includes(s.number)) ?? sections[0])?.number ?? 1
}

const difficulties = [
  { value: "easy", label: "Easy", emoji: "🟢" },
  { value: "intermediate", label: "Intermediate", emoji: "🟡" },
  { value: "advanced", label: "Advanced", emoji: "🔴" },
]

export default function CategoryFirstChallengeDialog({ isOpen, onClose, opponent }: CategoryFirstChallengeDialogProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [nameRequired, setNameRequired] = useState(false)    
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy")
  const [sectionData, setSectionData] = useState<SectionData | null>(null)
  const [loadingSections, setLoadingSections] = useState(false)
  const [selectedSection, setSelectedSection] = useState<number | null>(null)

  const rawLevelInfo = sectionData?.levels[selectedDifficulty]
  const levelInfo = (rawLevelInfo && rawLevelInfo.count > 0) ? rawLevelInfo : DEFAULT_LEVEL_STRUCTURE
  const playedSections = sectionData?.played[selectedDifficulty] ?? []
  const selectedSectionInfo = levelInfo?.sections.find((s) => s.number === selectedSection)
  const questionCount = selectedSectionInfo?.size ?? 10

  const handleSelectLevel = (level: string) => {
    setSelectedDifficulty(level)
    setSelectedSection(nextSection(sectionData, level))
  }

  useEffect(() => {
    if (!selectedCategory) {
      setSectionData(null)
      setSelectedSection(null)
      return
    }
    let cancelled = false
    setLoadingSections(true)
    const challenger =
      localStorage.getItem("userNameForLeaderboard") || localStorage.getItem("tempChallengerId") || ""
    const challenged = opponent.full_name || opponent.username
    const qs = new URLSearchParams({ category: selectedCategory, challenger, challenged })

    fetch(`/api/challenges/sections?${qs.toString()}`)
      .then((r) => r.json())
      .then((data: SectionData & { success: boolean }) => {
        if (cancelled) return
        if (data.success) {
          setSectionData(data)
          setSelectedDifficulty("easy")
          setSelectedSection(nextSection(data, "easy"))
        } else {
          // Fallback structure if API call fails to return standard success
          setSelectedDifficulty("easy")
          setSelectedSection(1)
        }
      })
      .catch((e) => {
        console.error("Could not load sections:", e)
        if (!cancelled) {
          setSelectedDifficulty("easy")
          setSelectedSection(1)
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingSections(false)
      })

    return () => {
      cancelled = true
    }
  }, [selectedCategory, opponent.id])
        
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [challengeSent, setChallengeSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getUserInitials = (user: User) => {
    if (user.full_name) {
      return user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    }
    return user.username.charAt(0).toUpperCase()
  }

  const handleSendChallenge = async () => {
    if (!selectedCategory) {
      toast({
        title: "Select Category",
        description: "Please select a category before sending the challenge",
        variant: "destructive",
      })
      return
    }

    if (selectedSection === null) {
      toast({
        title: "Select a section",
        description: "Please choose a difficulty level and a section of questions",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setError(null)
    setNameRequired(false)

    try {
      console.log(`🎯 Creating challenge: ${opponent.full_name || opponent.username} (${opponent.id})`)
      console.log(`🎯 Challenge details:`, {
        category: selectedCategory,
        difficulty: selectedDifficulty,
        questionCount: questionCount,
        timeLimit: 300,
      })

      // Get the challenger's display name
      const challengerName =
        typeof window !== "undefined"
          ? localStorage.getItem("userNameForLeaderboard") || localStorage.getItem("tempChallengerId")
          : null

      if (!challengerName || challengerName.length < 2) {
        setNameRequired(true)
        toast({
          title: "Name required",
          description: <NameRequiredMessage onNavigate={onClose} />,
          variant: "destructive",
          duration: 10000,
        })
        setIsSubmitting(false)
        return
      }

      localStorage.setItem("userNameForLeaderboard", challengerName)
      localStorage.setItem("tempChallengerId", challengerName)

      const challengedName = opponent.full_name || opponent.username

      const challengeData = {
        challengerName,
        challengedName,
        category: selectedCategory,
        difficulty: selectedDifficulty,
        question_count: questionCount,
        section_number: selectedSection,
        time_limit: 300,
      }

      const apiResponse = await fetch("/api/challenges/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(challengeData),
      })

      let challenge: any = null

      if (apiResponse.ok) {
        const result = await apiResponse.json()
        challenge = result.challenge
        console.log("✅ Challenge created successfully via API:", challenge)
      } else {
        const errData = await apiResponse.json().catch(() => ({}))
        throw new Error(errData.error || "Failed to create challenge")
      }

      setChallengeSent(true)

      const categoryLabel = challengeCategories.find((c) => c.id === selectedCategory)?.label || selectedCategory
      toast({
        title: "Challenge Created! 🎯",
        description: `${categoryLabel} challenge sent to ${opponent.full_name || opponent.username}. Take your quiz now!`,
      })

      setTimeout(() => {
        const challengeUrl = `/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}&challenge=${challenge.id}&questions=${questionCount}&section=${selectedSection}&opponentName=${encodeURIComponent(challengedName)}&challengerTurn=true`
        console.log(`🔗 Redirecting challenger to:`, challengeUrl)
        router.push(challengeUrl)
      }, 1500)
    } catch (error: any) {
      console.error("❌ Error sending challenge:", error)
      setError(error.message || "Failed to send challenge. Please try again.")
      toast({
        title: "Error",
        description: error.message || "Failed to send challenge",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting && !challengeSent) {
      setSelectedCategory(null)
      setSelectedDifficulty("easy")
      setSelectedSection(null)
      setSectionData(null)
      setError(null)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <Gamepad2 className="h-6 w-6 text-green-600" />
            Challenge {opponent.full_name || opponent.username}
          </DialogTitle> 
          <DialogDescription className="sr-only">Select a category and difficulty to challenge this player.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {challengeSent ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Challenge Created! 🎯</h3>
              <p className="text-gray-600 mb-4">Taking you to your quiz now...</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{opponent.full_name || opponent.username} will be notified and can accept when ready.</span>
              </div>
            </div>
          ) : (
            <>
              {/* Opponent Info */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={opponent.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-green-100 text-green-700 text-lg">
                    {getUserInitials(opponent)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{opponent.full_name || opponent.username}</h3>
                  <p className="text-gray-600 dark:text-gray-400">@{opponent.username}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {opponent.best_percentage && (
                      <Badge variant="secondary" className="text-xs">
                        Best: {opponent.best_percentage}%
                      </Badge>
                    )}
                    {opponent.total_score && (
                      <Badge variant="outline" className="text-xs">
                        {opponent.total_score} pts
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Challenging in</div>
                  <div className="font-medium">
                    {selectedCategory
                      ? challengeCategories.find((c) => c.id === selectedCategory)?.label
                      : "Select Category"}
                  </div>
                </div>
              </div>

                {nameRequired && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Name required</p>
                      <p className="text-red-700 text-sm">
                        <NameRequiredMessage onNavigate={onClose} />
                      </p>
                    </div>
                  </div>
                )}
                    
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Challenge Error</p>
                    <p className="text-red-700 text-sm">{error}</p>
                    <p className="text-sm text-red-600 mt-1">
                      Don't worry! You can still take the quiz and we'll try to save your results.
                    </p>
                  </div>
                </div>
              )}

              {/* Category Selection - Most Prominent */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  What do you want to challenge them in?
                </h3>
              
                {/* Islamic Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                    Islamic Knowledge Topics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {challengeCategories.map((category) => {
                      const IconComponent = category.icon
                      const isSelected = selectedCategory === category.id
                      return (
                        <div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                            isSelected
                              ? `${category.bgLight} ${category.borderColor} ring-2 ring-offset-2 ring-blue-500`
                              : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <div className="text-center">
                            <div className={`mx-auto w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h4 className={`font-semibold ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}>
                              {category.label}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                            {isSelected && <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Selected ✓</Badge>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Tamil Islamic Studies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                   தமிழ் இஸ்லாமிய ஆய்வுகள்
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tamilCategories.map((category) => {
                      const IconComponent = category.icon
                      const isSelected = selectedCategory === category.id
                      return (
                        <div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                            isSelected
                              ? `${category.bgLight} ${category.borderColor} ring-2 ring-offset-2 ring-blue-500`
                              : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <div className="text-center">
                            <div className={`mx-auto w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h4 className={`font-semibold ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}>
                              {category.label}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                            {isSelected && <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Selected ✓</Badge>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Quranic Studies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                   Quranic Studies
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {surahCategories.map((category) => {
                      const IconComponent = category.icon
                      const isSelected = selectedCategory === category.id
                      return (
                        <div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                            isSelected
                              ? `${category.bgLight} ${category.borderColor} ring-2 ring-offset-2 ring-blue-500`
                              : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <div className="text-center">
                            <div className={`mx-auto w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h4 className={`font-semibold ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}>
                              {category.label}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                            {isSelected && <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">Selected ✓</Badge>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Arabic Vocabulary */}
                <div>
                  <h4 className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Arabic Vocabulary
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {arabicVocabularyCategories.map((category) => {
                      const IconComponent = category.icon
                      const isSelected = selectedCategory === category.id
                      return (
                        <div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 p-4 rounded-lg border-2 hover:shadow-md ${
                            isSelected
                              ? `${category.bgLight} ${category.borderColor} ring-2 ring-offset-2 ring-purple-500`
                              : "border-purple-200 dark:border-purple-700 hover:border-purple-400"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <div className="text-center">
                            <div className={`mx-auto w-10 h-10 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <h4 className={`font-semibold ${isSelected ? category.textColor : "text-gray-900 dark:text-gray-100"}`}>
                              {category.label}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{category.description}</p>
                            {isSelected && <Badge className="mt-2 bg-purple-100 text-purple-800 text-xs">Selected ✓</Badge>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Difficulty Selection */}
              {selectedCategory && (
                <div className={`p-4 rounded-lg ${challengeCategories.find((c) => c.id === selectedCategory)?.bgLight || "bg-gray-50"}`}>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    Challenge Settings
                  </h4>
              
                  <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {difficulties.map((difficulty) => {
                      const currentCount = sectionData?.levels[difficulty.value]?.count ?? 30
                      const countText = loadingSections ? "Loading..." : `${currentCount} questions`
                      const isActive = selectedDifficulty === difficulty.value
                      return (
                        <button
                          type="button"
                          key={difficulty.value}
                          aria-pressed={isActive}
                          onClick={() => handleSelectLevel(difficulty.value)}
                          className={`rounded-lg border-2 p-3 text-left transition-colors bg-white dark:bg-gray-800 cursor-pointer ${
                            isActive ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                          }`}
                        >
                          <div className="flex items-center gap-2 font-medium">
                            <span>{difficulty.emoji}</span>
                            {difficulty.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {countText}
                          </div>
                        </button>
                      )
                    })}
                  </div>
              
                  {levelInfo && levelInfo.sections.length > 0 && (
                    <>
                      <label className="text-sm font-medium mb-2 block">Choose a section</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                        {levelInfo.sections.map((section) => {
                          const start = (section.number - 1) * 10 + 1
                          const end = start + section.size - 1
                          const alreadyPlayed = playedSections.includes(section.number)
                          const isActive = selectedSection === section.number
                          return (
                            <button
                              type="button"
                              key={section.number}
                              aria-pressed={isActive}
                              onClick={() => setSelectedSection(section.number)}
                              className={`rounded-lg border-2 p-3 text-left transition-colors bg-white dark:bg-gray-800 cursor-pointer ${
                                isActive ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-200 dark:border-gray-600 hover:border-gray-400"
                              }`}
                            >
                              <div className="font-medium">Section {section.number}</div>
                              <div className="text-xs text-gray-500">
                                Questions {start}-{end}
                              </div>
                              {alreadyPlayed && (
                                <Badge variant="secondary" className="mt-1 text-xs">
                                  Played
                                </Badge>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </>
                  )}
              
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <div className="font-medium">Challenge Details:</div>
                    <div>• {questionCount} questions, in the same order for both players</div>
                    <div>• 5 minutes time limit</div>
                    <div>• Winner gets +2 points</div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSendChallenge}
                  disabled={!selectedCategory || selectedSection === null || isSubmitting}
                  className="flex-1 bg-green-600 hover:bg-green-700 h-12 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Creating Challenge...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Send Challenge
                      {selectedCategory && (
                        <span className="ml-2 text-green-200">
                          in {challengeCategories.find((c) => c.id === selectedCategory)?.label}
                        </span>
                      )}
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleClose} className="px-8 h-12" disabled={isSubmitting}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
