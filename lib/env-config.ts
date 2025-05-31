// Detect if we're in build time
export const isBuildTime = process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV

// Check if Neon fallback should be used
export const useNeonFallback = !!process.env.NEON_DATABASE_URL || !!process.env.POSTGRES_URL

console.log("🔧 Environment Config:", {
  isBuildTime,
  useNeonFallback,
  hasNeonUrl: !!process.env.DATABASE_URL,
  hasPostgresUrl: !!process.env.POSTGRES_URL,
  nodeEnv: process.env.NODE_ENV,
  vercelEnv: process.env.VERCEL_ENV,
})
