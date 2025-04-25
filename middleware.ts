import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only redirect /challenge to /challenges
  if (request.nextUrl.pathname === "/challenge") {
    return NextResponse.redirect(new URL("/challenges", request.url))
  }

  // Redirect /quiz-challenges to /challenges
  if (request.nextUrl.pathname === "/quiz-challenges") {
    return NextResponse.redirect(new URL("/challenges", request.url))
  }
}

export const config = {
  matcher: ["/challenge", "/quiz-challenges"],
}
