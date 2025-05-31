// Fixed environment detection - more accurate runtime detection
export const isBuildTime =
  process.env.NODE_ENV === "production" &&
  !process.env.VERCEL_ENV &&
  !process.env.VERCEL_URL &&
  typeof window === "undefined"

// Check if we're in the browser (client-side)
export const isBrowser = typeof window !== "undefined"

// Better runtime detection for Vercel deployments
export const isVercelRuntime = !!(process.env.VERCEL_ENV || process.env.VERCEL_URL)

// Improved Neon fallback check - should work in production
export const useNeonFallback = !isBuildTime && !!process.env.iqra_DATABASE_URL && isVercelRuntime

// Enhanced client config
export const clientConfig = {
  hasNeonAuth: !isBuildTime && !!process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  isProduction: process.env.NODE_ENV === "production",
  isVercel: isVercelRuntime,
}

// Enhanced logging for debugging
if (!isBuildTime) {
  console.log("🔧 Environment Config:", {
    isBuildTime,
    isBrowser,
    useNeonFallback,
    isVercelRuntime,
    hasNeonAuth: clientConfig.hasNeonAuth,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    vercelUrl: !!process.env.VERCEL_URL,
    hasNeonUrl: !!process.env.iqra_DATABASE_URL,
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  })
}

// Neon Auth configuration - simplified
export const neonAuthConfig = {
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  baseUrl: "https://api.stack-auth.com",
}

// Server-side only auth config - with build-time safety
export const getServerAuthConfig = () => {
  if (typeof window !== "undefined") {
    throw new Error("Server auth config accessed in client code")
  }

  if (isBuildTime) {
    return {
      projectId: undefined,
      publishableClientKey: undefined,
      secretServerKey: undefined,
    }
  }

  return {
    projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
    publishableClientKey: process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY,
    secretServerKey: process.env.iqra_STACK_SECRET_SERVER_KEY,
  }
}
