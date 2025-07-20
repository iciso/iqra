import { createServerClient, type CookieOptions } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    // Initialize Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({ name, value: "", ...options });
          },
        },
      }
    );

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
        return NextResponse.redirect(new URL("/login", request.url));
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
};
