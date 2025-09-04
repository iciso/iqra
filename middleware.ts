import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Simple redirect logic - no Supabase auth in middleware to avoid Edge runtime issues
  const { pathname } = request.nextUrl

  // Redirect root to home for authenticated users (handled client-side)
  if (pathname === "/") {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
