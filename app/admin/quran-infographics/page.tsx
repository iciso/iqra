"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getQuizQuestions } from "@/data/quiz-data-manager"
import InteractiveInfographic from "@/components/quiz/interactive-infographic"

export default function QuranInfographicsPreviewPage() {
  const [questions, setQuestions] = useState<any[]>([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadQuestions = () => {
    try {
      setError(null)
      console.log("Loading Quran questions...")
      const quranQuestions = getQuizQuestions("quran", "easy")
      console.log(`Found ${quranQuestions.length} Quran questions`)

      // Log all question IDs to help with debugging
      console.log(
        "Question IDs:",
        quranQuestions.map((q) => q.id),
      )

      // Filter to only show questions with infographics
      const questionsWithInfographics = quranQuestions.filter((q) => q.hasInfographic)
      console.log(`Found ${questionsWithInfographics.length} questions with infographics`)

      // Don't filter by candidates list - show all infographics
      setQuestions(questionsWithInfographics)
      setLoaded(true)
    } catch (error) {
      console.error("Error loading questions:", error)
      setError("Error loading questions. Please check the console for details.")
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-800 dark:text-green-400">Quran Infographics Preview</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This page shows a preview of the infographics created for the Quran category questions.
      </p>

      {!loaded && (
        <Button
          onClick={loadQuestions}
          className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 mb-8"
        >
          Load Quran Infographics
        </Button>
      )}

      {error && (
        <Card className="mb-8 border-red-300 dark:border-red-700">
          <CardContent className="p-6">
            <p className="text-center text-red-500 dark:text-red-400">{error}</p>
          </CardContent>
        </Card>
      )}

      {loaded && questions.length === 0 && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-center text-gray-500 dark:text-gray-400">No infographics found for Quran questions.</p>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-md border border-amber-200 dark:border-amber-800">
              <h3 className="font-medium text-amber-800 dark:text-amber-400">Troubleshooting</h3>
              <ul className="list-disc pl-5 mt-2 text-sm text-amber-700 dark:text-amber-300">
                <li>Check that infographics are properly linked to question IDs</li>
                <li>Verify that the enhancement function in quiz-data-manager-infographics.tsx is working</li>
                <li>Ensure question IDs match between quiz data and infographic data</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {loaded && questions.length > 0 && (
        <div className="space-y-8">
          {questions.map((question, index) => (
            <Card key={index} className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">Question: {question.question}</CardTitle>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">ID: {question.id}</div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <strong className="text-gray-700 dark:text-gray-300">Correct Answer:</strong> {question.correctAnswer}
                </div>
                <div className="mb-4">
                  <strong className="text-gray-700 dark:text-gray-300">Explanation:</strong> {question.explanation}
                </div>

                {question.hasInfographic && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3 text-green-700 dark:text-green-400">
                      Interactive Infographic ({question.infographicType})
                    </h3>
                    <InteractiveInfographic
                      type={question.infographicType}
                      data={question.infographicData}
                      title={question.infographicTitle || `Quran - ${question.question}`}
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
