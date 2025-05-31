import { neonAuthConfig } from "./env-config"

// Neon Auth client configuration
export const neonAuth = {
  projectId: neonAuthConfig.projectId,
  publishableKey: neonAuthConfig.publishableKey,
  isConfigured: neonAuthConfig.isConfigured,
}

// Helper function to check if Neon Auth is available
export function isNeonAuthAvailable(): boolean {
  return neonAuthConfig.isConfigured
}

// Function to get Neon Auth headers for API calls
export function getNeonAuthHeaders() {
  if (!neonAuthConfig.secretKey) {
    throw new Error("Neon Auth secret key not configured")
  }

  return {
    Authorization: `Bearer ${neonAuthConfig.secretKey}`,
    "Content-Type": "application/json",
  }
}

// Log Neon Auth status
console.log("🔐 Neon Auth Status:", {
  configured: neonAuthConfig.isConfigured,
  projectId: neonAuthConfig.projectId ? "✅" : "❌",
  publishableKey: neonAuthConfig.publishableKey ? "✅" : "❌",
  secretKey: neonAuthConfig.secretKey ? "✅" : "❌",
})
