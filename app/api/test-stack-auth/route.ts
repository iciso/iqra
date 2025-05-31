import { NextResponse } from "next/server"
import { isStackAuthAvailable, getStackAuthHeaders } from "@/lib/stack-auth-helpers"

export async function GET() {
  try {
    const authAvailable = await isStackAuthAvailable()

    if (!authAvailable) {
      return NextResponse.json(
        {
          status: "error",
          message: "Stack Auth not configured",
        },
        { status: 500 },
      )
    }

    const headers = await getStackAuthHeaders()

    return NextResponse.json({
      status: "success",
      message: "Stack Auth configured correctly",
      headers: {
        hasAuthorization: !!headers.Authorization,
        hasContentType: !!headers["Content-Type"],
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: `Error: ${error.message}`,
      },
      { status: 500 },
    )
  }
}
