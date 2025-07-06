"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export function SupabaseTest() {
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    try {
      // Test basic connection
      const { data, error } = await supabase.from("profiles").select("count").limit(1)

      if (error) {
        setResult(`Connection Error: ${error.message}`)
      } else {
        setResult("✅ Supabase connection successful!")
      }
    } catch (err) {
      setResult(`Network Error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  const testAuth = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: "test@example.com",
        password: "testpassword123",
      })

      if (error) {
        setResult(`Auth Error: ${error.message}`)
      } else {
        setResult("✅ Auth endpoint reachable!")
      }
    } catch (err) {
      setResult(`Auth Network Error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h3 className="font-bold">Supabase Connection Test</h3>
      <div className="space-x-2">
        <Button onClick={testConnection} disabled={loading}>
          Test Database
        </Button>
        <Button onClick={testAuth} disabled={loading}>
          Test Auth
        </Button>
      </div>
      {result && <div className="p-2 bg-gray-100 rounded text-sm">{result}</div>}
    </div>
  )
}
