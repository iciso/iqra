"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"

interface Player {
  id: string
  username: string
  full_name?: string
  avatar_url?: string
  total_score: number
  best_percentage: number
}

export default function TopPlayers() {
  const { user, loading: authLoading } = useAuth()
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])

  const addDebug = (message: string) => {
    console.log("🏆 DEBUG:", message)
    setDebugInfo((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`])
  }

  useEffect(() => {
    if (!authLoading) {
      loadTopPlayers()
    }
  }, [authLoading])

  // Use the EXACT same function structure as the working test
  const testWithTimeout = async (testName: string, testFunction: () => Promise<any>, timeoutMs = 15000) => {
    addDebug(`Testing ${testName}...`)

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs),
      )

      const result = await Promise.race([testFunction(), timeoutPromise])
      return result
    } catch (error: any) {
      throw error
    }
  }

  const loadTopPlayers = async () => {
    addDebug("Starting loadTopPlayers...")
    setLoading(true)
    setError(null)

    try {
      // Use the EXACT same approach as the working test page
      const result = await testWithTimeout("top players query", async () => {
        addDebug("Executing top players query with exact test structure...")
        const { data, error } = await supabase
          .from("user_profiles")
          .select("id, username, full_name, avatar_url, total_score, best_percentage")
          .order("total_score", { ascending: false })
          .limit(10)

        if (error) throw error
        return data
      })

      addDebug(`Success: Found ${result?.length || 0} players`)

      const data = result || []

      // Filter out current user if needed
      const filteredPlayers = user ? data.filter((player: Player) => player.id !== user.id) : data

      addDebug(`Filtered to ${filteredPlayers.length} players`)
      setPlayers(filteredPlayers)
    } catch (error: any) {
      addDebug(`Error: ${error.message}`)
      setError(error.message)
    } finally {
      addDebug("loadTopPlayers completed")
      setLoading(false)
    }
  }

  const getUserInitials = (player: Player) => {
    if (player.full_name) {
      return player.full_name
        .split(" ")
        .map((n) => n?.[0])
        .join("")
        .toUpperCase()
    }
    return player.username.slice(0, 2).toUpperCase()
  }
}
