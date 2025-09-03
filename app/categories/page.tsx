"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Source categories dynamically from the synced data manager
import { getAllCategories } from "@/data/quiz-data-manager"

// Icons
import {
  Book,
  Bitcoin,
  Scale,
  BookCopy,
  Brain,
  BriefcaseMedical,
  BookDashed,
  Church,
  Heart,
  User,
  Users,
  Sparkles,
  History,
  Scroll,
  Compass,
  Globe,
  ArrowRight,
  ScanFace,
  Telescope,
  Rainbow,
  Circle,
  HandHeart,
  HelpCircle,
} from "lucide-react"
import type { ReactNode } from "react"

type IconMap = Record<string, ReactNode>

// Map category ids to icons (safe fallback if new ids appear)
const iconMap: IconMap = {
  // Core
  quran: <Book className="h-8 w-8 text-green-600 dark:text-green-400" />,
  tafsir: <BookCopy className="h-8 w-8 text-green-600 dark:text-green-400" />,
  hadeeth: <Scroll className="h-8 w-8 text-green-600 dark:text-green-400" />,
  fiqh: <Scale className="h-8 w-8 text-green-600 dark:text-green-400" />,
  seerah: <User className="h-8 w-8 text-green-600 dark:text-green-400" />,
  aqeedah: <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />,
  tazkiyah: <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400" />,
  history: <History className="h-8 w-8 text-green-600 dark:text-green-400" />,
  dawah: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
  "new-muslims": <Compass className="h-8 w-8 text-green-600 dark:text-green-400" />,
  comparative: <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />,
  christ: <Church className="h-8 w-8 text-green-600 dark:text-green-400" />,
  hindu: <BookDashed className="h-8 w-8 text-green-600 dark:text-green-400" />,
  "islamic-finance": <HandHeart className="h-8 w-8 text-green-600 dark:text-green-400" />,
  crypto: <Bitcoin className="h-8 w-8 text-green-600 dark:text-green-400" />,
  gender: <Circle className="h-8 w-8 text-green-600 dark:text-green-400" />,
  lgbtq: <Rainbow className="h-8 w-8 text-green-600 dark:text-green-400" />,
  psych: <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />,
  parenting: <ScanFace className="h-8 w-8 text-green-600 dark:text-green-400" />,
  "islamic-medical-ethics": <BriefcaseMedical className="h-8 w-8 text-green-600 dark:text-green-400" />,
  peace: <Telescope className="h-8 w-8 text-green-600 dark:text-green-400" />,
}

function getIconFor(id: string): ReactNode {
  return iconMap[id] ?? <HelpCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
}

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const difficultyRef = useRef<HTMLDivElement>(null)

  // Load categories dynamically
  const categories = getAllCategories().map((cat) => ({
    id: cat.id,
    title: cat.title,
    description: cat.description,
  }))

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (selectedCategory && difficultyRef.current) {
      setTimeout(() => {
        difficultyRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    }
  }, [selectedCategory])

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      router.push(`/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}`)
    }
  }

  if (!isClient) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100">
        <Card className="w-full max-w-3xl border-green-200 shadow-lg">
          <CardContent className="text-center py-8">
            <p>Loading categories...</p>
          </CardContent>
        </Card>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute top-4 right-4"></div>

      <Card className="w-full max-w-5xl border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Select Quiz Category</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">
            Choose a category and difficulty level
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Make sure the grid never gets clipped; let the page scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedCategory === category.id
                    ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                    : "border-gray-200 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-700"
                }`}
                onClick={() => setSelectedCategory(category.id)}
                role="button"
                aria-pressed={selectedCategory === category.id}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedCategory(category.id)
                  }
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {getIconFor(category.id)}
                  <h3 className="mt-2 font-medium dark:text-white">{category.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{category.description}</p>
                </div>
              </div>
            ))}
          </div>

          {selectedCategory && (
            <div ref={difficultyRef} className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium mb-4 dark:text-white">Select Difficulty Level</h3>
              <RadioGroup value={selectedDifficulty || ""} onValueChange={setSelectedDifficulty}>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700">
                    <RadioGroupItem value="easy" id="easy" />
                    <Label htmlFor="easy" className="flex flex-col cursor-pointer">
                      <span className="font-medium dark:text-white">Easy</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Basic questions for beginners</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced" className="flex flex-col cursor-pointer">
                      <span className="font-medium dark:text-white">Advanced</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Challenging questions for those with deeper knowledge
                      </span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}
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
    </main>
  )
}
