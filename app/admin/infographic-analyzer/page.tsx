"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getAllCategories } from "@/data/categories"
import { getQuizQuestions } from "@/data/quiz-data-manager"
import { batchAnalyzeForInfographics } from "@/utils/infographic-analyzer"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function InfographicAnalyzerPage() {
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [difficulty, setDifficulty] = useState("easy")
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const allCategories = getAllCategories()
    setCategories(allCategories)
  }, [])

  const handleAnalyze = () => {
    if (!selectedCategory) return

    setIsLoading(true)

    try {
      const questions = getQuizQuestions(selectedCategory, difficulty as any)
      const results = batchAnalyzeForInfographics(questions)
      setAnalysisResults(results)
    } catch (error) {
      console.error("Error analyzing questions:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 80) {
      return <Badge className="bg-green-500">High Confidence</Badge>
    } else if (confidence >= 50) {
      return <Badge className="bg-yellow-500">Medium Confidence</Badge>
    } else {
      return <Badge className="bg-gray-500">Low Confidence</Badge>
    }
  }

  const getInfographicTypeLabel = (type: string) => {
    switch (type) {
      case "timeline":
        return "Timeline"
      case "comparison":
        return "Comparison"
      case "process":
        return "Process/Steps"
      case "map":
        return "Map/Location"
      case "chart":
        return "Chart/Data"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-400">Infographic Analyzer Tool</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This tool analyzes quiz questions to identify which ones would benefit from interactive infographics.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-green-700 dark:text-green-400">Select Category to Analyze</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Difficulty</label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800">
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!selectedCategory || isLoading}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            {isLoading ? "Analyzing..." : "Analyze Questions"}
          </Button>
        </CardContent>
      </Card>

      {analysisResults.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-green-700 dark:text-green-400">Analysis Results</h2>

          <div className="space-y-4">
            {analysisResults
              .filter((r) => r.analysis.needsInfographic)
              .map((result, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${
                    result.analysis.confidence >= 80 ? "border-l-green-500" : "border-l-yellow-500"
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium dark:text-white">{result.question.question}</h3>
                      <div className="flex items-center space-x-2">
                        {getConfidenceBadge(result.analysis.confidence)}
                        <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                          {getInfographicTypeLabel(result.analysis.recommendedType)}
                        </Badge>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-4">
                      <strong>Explanation:</strong> {result.question.explanation}
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className="inline-block h-4 w-4 mr-1 text-green-500" />
                      Recommended for {result.analysis.recommendedType} infographic with {result.analysis.confidence}%
                      confidence
                    </div>
                  </CardContent>
                </Card>
              ))}

            {analysisResults.filter((r) => !r.analysis.needsInfographic).length > 0 && (
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-600 dark:text-gray-400 text-lg">
                    Questions Not Needing Infographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <AlertCircle className="inline-block h-4 w-4 mr-1" />
                    {analysisResults.filter((r) => !r.analysis.needsInfographic).length} questions were analyzed but
                    don't appear to need infographics.
                  </p>
                  <Button variant="outline" className="text-sm">
                    Show These Questions
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
