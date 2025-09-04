"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  MSquare as Mosque,
  Heart,
  Users,
  Scale,
  Lightbulb,
  Star,
  Globe,
  Coins,
  Cross,
  Baby,
  Stethoscope,
  Rainbow,
  UserCheck,
  Sparkles,
  Palette,
  Target,
  Zap,
  GraduationCap,
} from "lucide-react"
import { getAllCategories } from "@/data/quiz-data-manager"

// Icon mapping for categories
const categoryIcons: Record<string, any> = {
  quran: BookOpen,
  hadeeth: Mosque,
  tazkiyah: Heart,
  dawah: Users,
  fiqh: Scale,
  tafsir: Lightbulb,
  "islamic-history": Star,
  "comparative-religion": Globe,
  "islamic-finance": Coins,
  christ: Cross,
  parenting: Baby,
  "islamic-medical-ethics": Stethoscope,
  lgbtq: Rainbow,
  "new-muslims": UserCheck,
  peace: Sparkles,
  hindu: Palette,
  gender: Target,
  crypto: Zap,
  psych: GraduationCap,
}

export default function CategoriesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<"easy" | "advanced">("easy")
  const router = useRouter()
  const categories = getAllCategories()

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/quiz?category=${categoryId}&difficulty=${selectedDifficulty}`)
  }

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Choose Your Knowledge Category</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Select a category and difficulty level to begin your Islamic knowledge journey
        </p>

        {/* Difficulty Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={selectedDifficulty === "easy" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("easy")}
            size="lg"
          >
            Easy Level
          </Button>
          <Button
            variant={selectedDifficulty === "advanced" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("advanced")}
            size="lg"
          >
            Advanced Level
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.id] || BookOpen
          const questionsCount = category.questions?.filter((q) => q.difficulty === selectedDifficulty)?.length || 0

          return (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
              onClick={() => handleCategorySelect(category.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary">{questionsCount} questions</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.name}</CardTitle>
                <CardDescription className="text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCategorySelect(category.id)
                  }}
                >
                  Start {selectedDifficulty === "easy" ? "Easy" : "Advanced"} Quiz
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No categories available at the moment.</p>
        </div>
      )}
    </div>
  )
}
