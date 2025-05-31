// More accurate build time detection
export const isBuildTime =
  (typeof window === "undefined" && process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV) ||
  process.env.NEXT_PHASE === "phase-production-build"

// Check if we're in the browser (client-side)
export const isBrowser = typeof window !== "undefined"

// Check if Neon fallback should be used (only in runtime)
export const useNeonFallback =
  !isBuildTime &&
  (!!process.env.NEON_NEON_NEON_DATABASE_URL || !!process.env.POSTGRES_URL || !!process.env.DATABASE_URL)

// Only expose non-sensitive config to client
export const clientConfig = {
  hasNeonAuth: !!process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
}

console.log("🔧 Environment Config:", {
  isBuildTime,
  isBrowser,
  useNeonFallback,
  hasNeonAuth: clientConfig.hasNeonAuth,
  hasNeonDb: !!process.env.DATABASE_URL || !!process.env.POSTGRES_URL,
  hasSupabase: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
})

// Neon Auth configuration
export const neonAuthConfig = {
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  secretServerKey: process.env.STACK_SECRET_SERVER_KEY,
  baseUrl: process.env.NEXT_PUBLIC_STACK_BASE_URL || "https://api.stack-auth.com",
}
