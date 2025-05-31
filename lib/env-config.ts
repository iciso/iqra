// Environment configuration utilities
export const isBuildTime = typeof window === "undefined" && process.env.NODE_ENV === "production"
export const isBrowser = typeof window !== "undefined"

// Check if Neon fallback should be used - use your prefixed variables
export const useNeonFallback = !isBuildTime && (!!process.env.iqra_DATABASE_URL || !!process.env.iqra_POSTGRES_URL)

// Only expose non-sensitive config to client - use your prefixed variables
export const clientConfig = {
  hasNeonAuth: !!process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  hasSupabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  hasNeonDb: !!process.env.iqra_DATABASE_URL || !!process.env.iqra_POSTGRES_URL,
}

console.log("🔧 Environment Config:", {
  isBuildTime,
  isBrowser,
  useNeonFallback,
  hasNeonAuth: clientConfig.hasNeonAuth,
  hasNeonDb: clientConfig.hasNeonDb,
  hasSupabase: clientConfig.hasSupabase,
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
})

// Neon Auth configuration
export const neonAuthConfig = {
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  baseUrl: "https://api.stack-auth.com",
}

// Server-side only auth config
export const getServerAuthConfig = () => {
  if (typeof window !== "undefined") {
    throw new Error("Server auth config accessed in client code")
  }

  return {
    projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
    publishableClientKey: process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY,
    secretServerKey: process.env.iqra_STACK_SECRET_SERVER_KEY,
  }
}
