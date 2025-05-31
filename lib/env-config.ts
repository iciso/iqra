// This helps us detect if we're in build/prerender time
export const isBuildTime = process.env.NODE_ENV === "production" && typeof window === "undefined"

// Only use Neon in runtime, not during build
export const useNeonFallback = !isBuildTime && !!process.env.NEON_NEON_DATABASE_URL
