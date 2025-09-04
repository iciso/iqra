"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {
  Book,
  Users,
  Heart,
  Scale,
  MSquare as Mosque,
  Scroll,
  Globe,
  DollarSign,
  Baby,
  Shield,
  Zap,
  BookOpen,
  Star,
  Target,
  Brain,
  Lightbulb,
  Sparkles,
  Trophy,
  Crown,
  Gem,
  Diamond,
} from "lucide-react"
import { getAllCategories } from "@/data/quiz-data-manager"

const iconMap: Record<string, any> = {
  Book,
  Users,
  Heart,
  Scale,
  Mosque,
  Scroll,
  Globe,
  DollarSign,
  Baby,
  Shield,
  Zap,
  BookOpen,
  Star,
  Target,
  Brain,
  Lightbulb,
  Sparkles,
  Trophy,
  Crown,
  Gem,
  Diamond,
}

export default function CategoriesPage() {
  const router = useRouter()
  const [selectedDifficulty, setSelectedDifficulty] = useState<"easy" | "advanced">("easy")

  const categories = getAllCategories()

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/quiz?category=${categoryId}&difficulty=${selectedDifficulty}`)
  }

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName] || Book
    return <IconComponent className="h-8 w-8 mb-4 text-green-600" />
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Choose Your Learning Path</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Select a category and difficulty level to begin your Islamic knowledge journey
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={selectedDifficulty === "easy" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("easy")}
            className="px-8"
          >
            Easy
          </Button>
          <Button
            variant={selectedDifficulty === "advanced" ? "default" : "outline"}
            onClick={() => setSelectedDifficulty("advanced")}
            className="px-8"
          >
            Advanced
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-2 hover:border-green-200"
            onClick={() => handleCategorySelect(category.id)}
          >
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center">{getIconComponent(category.icon)}</div>
              <CardTitle className="text-xl">{category.name}</CardTitle>
              <CardDescription className="text-sm">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">
                  {selectedDifficulty === "easy"
                    ? `${category.easyQuestions} Easy Questions`
                    : `${category.advancedQuestions} Advanced Questions`}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
