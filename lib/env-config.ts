// More accurate build time detection
export const isBuildTime =
  (typeof window === "undefined" && process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV) ||
  process.env.NEXT_PHASE === "phase-production-build"

// Check if we're in the browser (client-side)
export const isBrowser = typeof window !== "undefined"

// Check if Neon fallback should be used (only in runtime) - use prefixed variables
export const useNeonFallback =
  !isBuildTime && (!!process.env.iqra_DATABASE_URL || !!process.env.iqra_POSTGRES_URL || !!process.env.DATABASE_URL)

// Only expose non-sensitive config to client - use prefixed variables
export const clientConfig = {
  hasNeonAuth: !!process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
}

console.log("🔧 Environment Config:", {
  isBuildTime,
  isBrowser,
  useNeonFallback,
  hasNeonAuth: clientConfig.hasNeonAuth,
  hasNeonDb: !!process.env.iqra_DATABASE_URL || !!process.env.iqra_POSTGRES_URL,
  hasSupabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
})

// Neon Auth configuration - ONLY INCLUDE IN SERVER-SIDE CODE
// Remove reference to sensitive key from this file
export const neonAuthConfig = {
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  baseUrl: "https://api.stack-auth.com",
}

// Server-side only auth config - this will only be included in server components
export const getServerAuthConfig = () => {
  if (typeof window !== "undefined") {
    throw new Error("Server auth config accessed in client code")
  }

  return {
    projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
    publishableClientKey: process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY, // Renamed to remove NEXT_PUBLIC_
    secretServerKey: process.env.iqra_STACK_SECRET_SERVER_KEY,
  }
}
