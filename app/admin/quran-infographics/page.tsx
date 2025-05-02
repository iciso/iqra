"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getQuizQuestions } from "@/data/quiz-data-manager"
import { quranInfographicCandidates } from "@/data/quran-infographics-questions"
import InteractiveInfographic from "@/components/quiz/interactive-infographic"

export default function QuranInfographicsPreviewPage() {
  const [questions, setQuestions] = useState<any[]>([])
  const [loaded, setLoaded] = useState(false)

  const loadQuestions = () => {
    try {
      const quranQuestions = getQuizQuestions("quran", "easy")
      // Filter to only show questions with infographics
      const questionsWithInfographics = quranQuestions.filter(
        (q) => q.hasInfographic && quranInfographicCandidates.includes(q.id),
      )
      setQuestions(questionsWithInfographics)
      setLoaded(true)
    } catch (error) {
      console.error("Error loading questions:", error)
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

      {loaded && questions.length === 0 && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-center text-gray-500 dark:text-gray-400">No infographics found for Quran questions.</p>
          </CardContent>
        </Card>
      )}

      {loaded && questions.length > 0 && (
        <div className="space-y-8">
          {questions.map((question, index) => (
            <Card key={index} className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">Question: {question.question}</CardTitle>
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
                      Interactive Infographic
                    </h3>
                    <InteractiveInfographic
                      type={question.infographicType}
                      data={question.infographicData}
                      title={`Quran - ${question.question}`}
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
