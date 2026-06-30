import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { challengeId, action } = body // action: "accept" | "decline"

    if (!challengeId || !["accept", "decline"].includes(action)) {
      return NextResponse.json({ error: "Missing or invalid challengeId/action" }, { status: 400 })
    }

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) {
      return NextResponse.json({ error: "No database connection configured" }, { status: 500 })
    }

    const newStatus = action === "accept" ? "accepted" : "declined"

    const pool = new Pool({ connectionString: databaseUrl })
    try {
      const client = await pool.connect()
      try {
        const result = await client.query(
          `UPDATE challenges SET status = $1 WHERE id = $2 RETURNING *`,
          [newStatus, challengeId],
        )

        if (result.rows.length === 0) {
          return NextResponse.json({ error: "Challenge not found" }, { status: 404 })
        }

        return NextResponse.json({ success: true, challenge: result.rows[0] }, { status: 200 })
      } finally {
        client.release()
      }
    } finally {
      await pool.end()
    }
  } catch (error) {
    console.error("[challenges] respond error:", error)
    return NextResponse.json(
      { error: "Failed to update challenge", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
