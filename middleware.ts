import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Keep middleware lightweight and compatible with Edge runtime (default).
// Do NOT import server-only utilities or clients here.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect legacy routes
  if (pathname === "/challenge" || pathname === "/quiz-challenges") {
    return NextResponse.redirect(new URL("/challenges", request.url))
  }

  return NextResponse.next()
}

// Limit to needed routes
export const config = {
  matcher: ["/challenge", "/quiz-challenges"],
}
