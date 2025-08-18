import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from './lib/supabase/server';

export async function middleware(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createClient();

    // Check for user session
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Supabase session error:", error);
      return NextResponse.next();
    }

    // Define protected routes
    const protectedRoutes = ["/challenges", "/categories"];

    // Check if the current path is a protected route
    if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
      if (!session) {
        // Redirect unauthenticated users to login page
        const redirectUrl = new URL("/login", request.url);
        redirectUrl.searchParams.set("redirect", request.nextUrl.pathname + request.nextUrl.search);
        return NextResponse.redirect(redirectUrl);
      }
    }

    // Handle redirects for legacy routes
    if (request.nextUrl.pathname === "/challenge" || request.nextUrl.pathname === "/quiz-challenges") {
      return NextResponse.redirect(new URL("/challenges", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/challenge", "/quiz-challenges", "/challenges/:path*", "/categories/:path*"],
  runtime: 'nodejs', // Force Node.js runtime to avoid Edge Runtime issues
};