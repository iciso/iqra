"use server"

// Server-side only Stack Auth configuration
export async function isStackAuthAvailable(): Promise<boolean> {
  return !!(
    process.env.iqra_NEXT_PUBLIC_STACK_PROJECT_ID &&
    process.env.iqra_STACK_PUBLISHABLE_CLIENT_KEY &&
    process.env.iqra_STACK_SECRET_SERVER_KEY
  )
}

export async function getStackAuthHeaders() {
  if (!(await isStackAuthAvailable())) {
    throw new Error("Stack Auth not configured")
  }

  return {
    Authorization: `Bearer ${process.env.iqra_STACK_SECRET_SERVER_KEY}`,
    "Content-Type": "application/json",
  }
}
