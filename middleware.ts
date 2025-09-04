import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Keep middleware lightweight and compatible with Edge runtime.
// Avoid server-only clients here; enforce auth in server actions/route handlers instead.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect legacy routes
  if (pathname === "/challenge" || pathname === "/quiz-challenges") {
    return NextResponse.redirect(new URL("/challenges", request.url))
  }

  return NextResponse.next()
}

// Only run on the routes we need
export const config = {
  matcher: ["/challenge", "/quiz-challenges"],
}
