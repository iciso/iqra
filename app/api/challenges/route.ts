import { type NextRequest, NextResponse } from "next/server"
import { Pool } from "@neondatabase/serverless"

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL_NO_SSL || process.env.NEON_DATABASE_URL
}

export async function GET(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get("name")
    if (!name) {
      return NextResponse.json({ error: "Missing required query param: name" }, { status: 400 })
    }

    const databaseUrl = getDatabaseUrl()
    if (!databaseUrl) {
      return NextResponse.json({ challenges: [] }, { status: 200 })
    }

    const pool = new Pool({ connectionString: databaseUrl })
    try {
      const client = await pool.connect()
      try {
        const result = await client.query(
          `SELECT id, challenger_name, challenged_name, category, difficulty, question_count,
                  status, created_at, expires_at
           FROM challenges
           WHERE challenged_name = $1
             AND status = 'pending'
             AND expires_at > NOW()
           ORDER BY created_at DESC`,
          [name],
        )

        return NextResponse.json({ challenges: result.rows }, { status: 200 })
      } finally {
        client.release()
      }
    } finally {
      await pool.end()
    }
  } catch (error) {
    console.error("[challenges] list error:", error)
    // Table may not exist yet if no challenge has ever been created - treat as empty, not an error
    return NextResponse.json({ challenges: [] }, { status: 200 })
  }
}
