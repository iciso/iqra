"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getQuizQuestions, getAllCategories } from "@/data/quiz-data-manager"
import InteractiveInfographic from "@/components/quiz/interactive-infographic"

export default function InfographicsDebugPage() {
  const [category, setCategory] = useState("quran")
  const [difficulty, setDifficulty] = useState("easy")
  const [questions, setQuestions] = useState<any[]>([])
  const [loaded, setLoaded] = useState(false)

  const loadQuestions = () => {
    try {
      const fetchedQuestions = getQuizQuestions(category, difficulty as any)
      setQuestions(fetchedQuestions)
      setLoaded(true)
    } catch (error) {
      console.error("Error loading questions:", error)
    }
  }

  const categories = getAllCategories()

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-400">Infographics Debug Page</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This page helps debug the infographics feature by showing which questions have infographics attached.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Difficulty</label>
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/3 flex items-end">
          <Button
            onClick={loadQuestions}
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
          >
            Load Questions
          </Button>
        </div>
      </div>

      {loaded && (
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <p className="text-gray-700 dark:text-gray-300">
            Loaded {questions.length} questions. {questions.filter((q) => q.hasInfographic).length} have infographics.
          </p>
        </div>
      )}

      {loaded && questions.length > 0 && (
        <div className="space-y-8">
          {questions.map((question, index) => (
            <Card key={index} className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">
                  Question {index + 1}: {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <strong className="text-gray-700 dark:text-gray-300">ID:</strong> {question.id || "No ID"}
                </div>
                <div className="mb-2">
                  <strong className="text-gray-700 dark:text-gray-300">Has Infographic:</strong>{" "}
                  {question.hasInfographic ? "Yes" : "No"}
                </div>
                {question.hasInfographic && (
                  <div className="mb-2">
                    <strong className="text-gray-700 dark:text-gray-300">Infographic Type:</strong>{" "}
                    {question.infographicType}
                  </div>
                )}
                <div className="mb-4">
                  <strong className="text-gray-700 dark:text-gray-300">Correct Answer:</strong> {question.correctAnswer}
                </div>
                <div className="mb-4">
                  <strong className="text-gray-700 dark:text-gray-300">Explanation:</strong> {question.explanation}
                </div>

                {question.hasInfographic && question.infographicType && question.infographicData && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3 text-green-700 dark:text-green-400">
                      Interactive Infographic Preview
                    </h3>
                    <InteractiveInfographic
                      type={question.infographicType}
                      data={question.infographicData}
                      title={`${category} - ${question.question}`}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
