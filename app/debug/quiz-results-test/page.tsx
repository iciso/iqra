"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function QuizResultsTestPage() {
  const { user } = useAuth()
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testInsert = async () => {
    if (!user) {
      setResult({ error: "No authenticated user" })
      return
    }

    setLoading(true)
    try {
      const testData = {
        user_id: user.id,
        score: 5,
        total_questions: 10,
        percentage: 50,
        category: "test",
        difficulty: "easy",
        time_left: 120,
        answers: null,
        challenge_id: null,
      }

      console.log("🧪 Testing quiz_results insert with data:", testData)

      const { data, error } = await supabase.from("quiz_results").insert(testData).select().single()

      if (error) {
        console.error("❌ Insert error details:", {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        })
        setResult({ error: error })
      } else {
        console.log("✅ Insert successful:", data)
        setResult({ success: data })
      }
    } catch (err) {
      console.error("❌ Exception:", err)
      setResult({ error: err })
    } finally {
      setLoading(false)
    }
  }

  const testSelect = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from("quiz_results").select("*").limit(5)

      if (error) {
        console.error("❌ Select error:", error)
        setResult({ error: error })
      } else {
        console.log("✅ Select successful:", data)
        setResult({ success: data })
      }
    } catch (err) {
      console.error("❌ Exception:", err)
      setResult({ error: err })
    } finally {
      setLoading(false)
    }
  }

  const testTableExists = async () => {
    setLoading(true)
    try {
      // Try to get table schema
      const { data, error } = await supabase.from("quiz_results").select("*").limit(0)

      if (error) {
        console.error("❌ Table check error:", error)
        setResult({ error: error })
      } else {
        console.log("✅ Table exists")
        setResult({ success: "Table exists and is accessible" })
      }
    } catch (err) {
      console.error("❌ Exception:", err)
      setResult({ error: err })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Quiz Results Table Debug</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={testTableExists} disabled={loading}>
              Test Table Exists
            </Button>
            <Button onClick={testSelect} disabled={loading}>
              Test Select
            </Button>
            <Button onClick={testInsert} disabled={loading}>
              Test Insert
            </Button>
          </div>

          {loading && <p>Testing...</p>}

          {result && (
            <div className="mt-4 p-4 border rounded">
              <h3 className="font-bold mb-2">Result:</h3>
              <pre className="text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}

          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-bold mb-2">User Info:</h3>
            <p>User ID: {user?.id || "Not authenticated"}</p>
            <p>Email: {user?.email || "No email"}</p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
