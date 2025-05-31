// Server-side only Neon Auth configuration
export const neonAuthServerConfig = {
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  publishableKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  secretKey: process.env.STACK_SECRET_SERVER_KEY,
  isConfigured: !!(
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY &&
    process.env.STACK_SECRET_SERVER_KEY
  ),
}

// Helper function to check if Neon Auth is available (server-side only)
export function isNeonAuthAvailable(): boolean {
  return neonAuthServerConfig.isConfigured
}

// Function to get Neon Auth headers for API calls (server-side only)
export function getNeonAuthHeaders() {
  if (!neonAuthServerConfig.secretKey) {
    throw new Error("Neon Auth secret key not configured")
  }

  return {
    Authorization: `Bearer ${neonAuthServerConfig.secretKey}`,
    "Content-Type": "application/json",
  }
}

// Server-side logging only
if (typeof window === "undefined") {
  console.log("🔐 Neon Auth Server Status:", {
    configured: neonAuthServerConfig.isConfigured,
    projectId: neonAuthServerConfig.projectId ? "✅" : "❌",
    publishableKey: neonAuthServerConfig.publishableKey ? "✅" : "❌",
    secretKey: neonAuthServerConfig.secretKey ? "✅" : "❌",
  })
}
