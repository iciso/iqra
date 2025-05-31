import { type NextRequest, NextResponse } from "next/server"
import { getNeonAuthHeaders, isNeonAuthAvailable } from "@/lib/neon-auth-server"

export async function GET(request: NextRequest) {
  try {
    // Check if Neon Auth is configured
    if (!isNeonAuthAvailable()) {
      return NextResponse.json(
        {
          success: false,
          message: "Neon Auth not configured",
          configured: false,
        },
        { status: 400 },
      )
    }

    // Test getting auth headers (don't expose the actual values)
    const headers = getNeonAuthHeaders()

    return NextResponse.json({
      success: true,
      message: "Neon Auth is properly configured",
      configured: true,
      hasHeaders: !!headers.Authorization,
      projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
      hasPublishableKey: !!process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
      hasSecretKey: !!process.env.STACK_SECRET_SERVER_KEY,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `Neon Auth test failed: ${error}`,
        configured: false,
      },
      { status: 500 },
    )
  }
}
