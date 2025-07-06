"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

export default function SimpleDbTest() {
  const { user } = useAuth()
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testBasicQuery = async () => {
    setLoading(true)
    setResult("Testing...")

    try {
      const { data, error } = await supabase.from("user_challenges").select("count", { count: "exact", head: true })

      if (error) {
        setResult(`Error: ${error.message}`)
      } else {
        setResult(`Success: Found ${data} total challenges`)
      }
    } catch (e: any) {
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testUserQuery = async () => {
    if (!user) {
      setResult("No user")
      return
    }

    setLoading(true)
    setResult("Testing user query...")

    try {
      const { data, error } = await supabase
        .from("user_challenges")
        .select("id, challenger_id, status")
        .eq("challenged_id", user.id)

      if (error) {
        setResult(`Error: ${error.message}`)
      } else {
        setResult(`Success: Found ${data?.length || 0} challenges for user`)
      }
    } catch (e: any) {
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testProfileQuery = async () => {
    setLoading(true)
    setResult("Testing profile query...")

    try {
      const { data, error } = await supabase.from("user_profiles").select("id, username").limit(1)

      if (error) {
        setResult(`Error: ${error.message}`)
      } else {
        setResult(`Success: Found ${data?.length || 0} profiles`)
      }
    } catch (e: any) {
      setResult(`Exception: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple Database Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={testBasicQuery} disabled={loading} size="sm">
            Test Basic Query
          </Button>
          <Button onClick={testUserQuery} disabled={loading} size="sm">
            Test User Query
          </Button>
          <Button onClick={testProfileQuery} disabled={loading} size="sm">
            Test Profile Query
          </Button>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <p className="text-sm font-mono">{result || "No test run yet"}</p>
        </div>

        {loading && (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
            <span className="text-sm">Running test...</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
