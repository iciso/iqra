// Simplified build time detection - avoid complex logic during build
export const isBuildTime = process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV

// Check if we're in the browser (client-side)
export const isBrowser = typeof window !== "undefined"

// Simplified Neon fallback check - only check if we have the URL
export const useNeonFallback = !isBuildTime && !!process.env.iqra_DATABASE_URL

// Simplified client config - avoid complex checks during build
export const clientConfig = {
  hasNeonAuth: !isBuildTime && !!process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID,
}

// Only log in development or runtime
if (!isBuildTime) {
  console.log("🔧 Environment Config:", {
    isBuildTime,
    isBrowser,
    useNeonFallback,
    hasNeonAuth: clientConfig.hasNeonAuth,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
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
