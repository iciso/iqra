"use client"

import { useEffect, useState } from "react"
import { getAllCategories } from "@/data/quiz-data-manager"
import type { QuizCategory } from "@/types/quiz"

export default function DebugPage() {
  const [categories, setCategories] = useState<QuizCategory[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const allCategories = getAllCategories()
      setCategories(allCategories)
      console.log(
        "Loaded categories:",
        allCategories.map((c) => c.id),
      )
    } catch (error) {
      console.error("Error loading categories:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quiz Categories Debug</h1>

      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <div className="space-y-4">
          <p className="text-lg">Total Categories: {categories.length}</p>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Easy Questions</th>
                <th className="border border-gray-300 p-2">Advanced Questions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="border border-gray-300 p-2">{category.id}</td>
                  <td className="border border-gray-300 p-2">{category.title}</td>
                  <td className="border border-gray-300 p-2">{category.levels.easy.length}</td>
                  <td className="border border-gray-300 p-2">{category.levels.advanced.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
