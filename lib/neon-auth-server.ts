export function isNeonAuthAvailable(): boolean {
  return !!(
    process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.iqra_NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY &&
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
