"use server"

import { isNeonAuthAvailable } from "@/lib/neon-auth-server"

interface ConnectionResult {
  name: string
  status: "success" | "error" | "warning"
  message: string
  details?: any
}

export async function testDatabaseConnections(): Promise<ConnectionResult[]> {
  const results: ConnectionResult[] = []

  // Test Supabase Database
  try {
    const { supabase } = await import("@/lib/supabase")
    const { data, error } = await supabase.from("user_profiles").select("count").limit(1)

    if (error) throw error

    results.push({
      name: "Supabase Database",
      status: "success",
      message: "Connected successfully",
      details: { recordCount: data?.length || 0 },
    })
  } catch (error) {
    results.push({
      name: "Supabase Database",
      status: "error",
      message: `Connection failed: ${error}`,
    })
  }

  // Test Neon Database
  try {
    const { isNeonAvailable } = await import("@/lib/neon-fallback")

    if (!isNeonAvailable()) {
      results.push({
        name: "Neon Database",
        status: "warning",
        message: "No Neon database URL configured",
      })
    } else {
      const { initializeFallbackTables } = await import("@/lib/neon-fallback")
      const result = await initializeFallbackTables()

      results.push({
        name: "Neon Database",
        status: result ? "success" : "warning",
        message: result ? "Connected and initialized" : "Connected but initialization failed",
        details: { initialized: result },
      })
    }
  } catch (error) {
    results.push({
      name: "Neon Database",
      status: "error",
      message: `Connection failed: ${error}`,
    })
  }

  // Test Neon Auth (server-side only)
  try {
    if (!isNeonAuthAvailable()) {
      results.push({
        name: "Neon Auth",
        status: "warning",
        message: "Neon Auth not configured",
      })
    } else {
      results.push({
        name: "Neon Auth",
        status: "success",
        message: "Neon Auth configured",
        details: {
          projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
          hasPublishableKey: !!process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
          hasSecretKey: !!process.env.STACK_SECRET_SERVER_KEY,
        },
      })
    }
  } catch (error) {
    results.push({
      name: "Neon Auth",
      status: "error",
      message: `Auth config failed: ${error}`,
    })
  }

  // Test Environment Variables
  const envVars = [
    "iqra_DATABASE_URL",
    "iqra_POSTGRES_URL",
    "iqra_NEXT_PUBLIC_STACK_PROJECT_ID",
    "iqra_STACK_SECRET_SERVER_KEY",
    "iqra_NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY",
    "SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  ]

  const envStatus = envVars.map((varName) => ({
    name: varName,
    present: !!process.env[varName],
  }))

  results.push({
    name: "Environment Variables",
    status: envStatus.filter((env) => env.present).length >= 5 ? "success" : "warning",
    message: `${envStatus.filter((env) => env.present).length}/${envVars.length} variables configured`,
    details: envStatus,
  })

  // Test Fallback System
  try {
    const { getLeaderboardWithFallback } = await import("@/lib/database-with-fallback")
    const result = await getLeaderboardWithFallback()

    results.push({
      name: "Fallback System",
      status: "success",
      message: `Working - using ${result.source}`,
      details: { source: result.source, recordCount: result.data.length },
    })
  } catch (error) {
    results.push({
      name: "Fallback System",
      status: "error",
      message: `Fallback failed: ${error}`,
    })
  }

  return results
}
