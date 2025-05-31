// Mark this file as server-side only
"use server"

// Server-side only Neon Auth configuration
export function isNeonAuthAvailable(): boolean {
  return !!(
    process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY && // Renamed to remove NEXT_PUBLIC_
    process.env.iqra_STACK_SECRET_SERVER_KEY
  )
}

export function getNeonAuthHeaders() {
  if (!isNeonAuthAvailable()) {
    throw new Error("Neon Auth not configured")
  }

  return {
    Authorization: `Bearer ${process.env.iqra_STACK_SECRET_SERVER_KEY}`,
    "Content-Type": "application/json",
  }
}

// Server-side logging only
console.log("🔐 Neon Auth Server Status:", {
  configured: isNeonAuthAvailable(),
  projectId: process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID ? "✅" : "❌",
  publishableKey: process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY ? "✅" : "❌", // Renamed
  secretKey: process.env.iqra_STACK_SECRET_SERVER_KEY ? "✅" : "❌",
})
