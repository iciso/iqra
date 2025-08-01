"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
} from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Define all categories here for the quiz 
const categories = [
  {
    id: "quran",
    title: "Quran",
    description: "Quran Basics",
    icon: <Book className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "fiqh",
    title: "Fiqh",
    description: "Islamic Jurisprudence",
    icon: <Scale className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "tafsir",
    title: "Tafsir",
    description: "Quranic Exegesis",
    icon: <BookCopy className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "hadeeth",
    title: "Hadeeth",
    description: "Prophetic Traditions",
    icon: <Scroll className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "aqeedah",
    title: "Aqeedah",
    description: "Islamic Monotheism",
    icon: <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "seerah",
    title: "Seerah",
    description: "Prophet's Biography",
    icon: <User className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "tazkiyah",
    title: "Tazkiyah",
    description: "Spiritual Purification", 
    icon: <Sparkles className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "history",
    title: "Islamic History",
    description: "History of Islam",
    icon: <History className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "dawah",
    title: "Dawah",
    description: "Inviting to Islam",
    icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "new-muslims",
    title: "New Muslims",
    description: "Essentials for New Muslims",
    icon: <Compass className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "comparative",
    title: "Comparative Religion",
    description: "Faiths, Non-Faiths & Islam",
    icon: <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
    {
    id: "christ",
    title: "Christianity",
    description: "Islam and Christianity",
    icon: <Church className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
    {
    id: "hindu",
    title: "Hinduism",
    description: "Islam and Hinduism",
    icon: <BookDashed className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "islamic-finance",
    title: "Islamic Finance",
    description: "Islamic Economics",
    icon: <HandHeart className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
    {
    id: "crypto",
    title: "Crypto & Blockchain",
    description: "Shariah & digital currencies",
    icon: <Bitcoin className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
   {
    id: "gender",
    title: "Gender",
    description: "Gender in Islam",
    icon: <Circle className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
   {
    id: "lgbtq",
    title: "Islam and LGBTQIA+",
    description: "LGBTQIA+ & Islam",
    icon: <Rainbow className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },   
   {
    id: "psych",
    title: "Islamic Psychology",
    description: "Psychology & Islam",
    icon: <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
     {
    id: "parenting",
    title: "Islamic Parenting",
    description: "Islam & parenting",
    icon: <ScanFace className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
    {
    id: "islamic-medical-ethics",
    title: "Medical Ethics",
    description: "Islamic Medical Ethics",
    icon: <BriefcaseMedical className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    id: "peace",
    title: "Peace",
    description: "Peace in Middle East",
    icon: <Telescope className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
]

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const difficultyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Add effect to scroll to difficulty section when category is selected
  useEffect(() => {
    if (selectedCategory && difficultyRef.current) {
      // Add a small delay to ensure the section is rendered
      setTimeout(() => {
        difficultyRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 100)
    }
  }, [selectedCategory])

  const handleStartQuiz = () => {
    if (selectedCategory && selectedDifficulty) {
      router.push(`/quiz?category=${selectedCategory}&difficulty=${selectedDifficulty}`)
    }
  }

  // If we're not on the client yet, show a simple loading state
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
      <div className="absolute top-4 right-4">
     
      </div>

      <Card className="w-full max-w-3xl border-green-200 shadow-lg dark:border-green-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800 dark:text-green-400">Select Quiz Category</CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">
            Choose a category and difficulty level
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors
                 ${
                   selectedCategory === category.id
                     ? "border-green-500 bg-green-50 dark:bg-green-900/50 dark:border-green-600"
                     : "border-gray-200 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-700"
                 }`}
                onClick={() => {
                  console.log(`Selected category: ${category.id}`)
                  setSelectedCategory(category.id)
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {category.icon}
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
