import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/supabase-js";

export async function middleware(request: NextRequest) {
  // Initialize Supabase client
  const supabase = createMiddlewareClient(
    { req: request },
    {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    }
  );

  // Check for user session
  const { data: { session } } = await supabase.auth.getSession();

  // Define protected routes
  const protectedRoutes = ["/challenges", "/categories"];

  // Check if the current path is a protected route
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (!session) {
      // Redirect unauthenticated users to login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Handle redirects for legacy routes
  if (request.nextUrl.pathname === "/challenge" || request.nextUrl.pathname === "/quiz-challenges") {
    return NextResponse.redirect(new URL("/challenges", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/challenge", "/quiz-challenges", "/challenges/:path*", "/categories/:path*"],
};
