import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  try {
    if (
      req.nextUrl.pathname.startsWith("/_next") ||
      req.nextUrl.pathname.includes("/api/") ||
      PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
      return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    const { pathname } = req.nextUrl;
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

    const publicRoutes = ["/login", "/"];
    const protectedRoutes = ["/challenges", "/categories", "/quiz"];

    if (pathname === "/") {
      url.pathname = "/en";
      return NextResponse.redirect(url);
    }

    if (!pathname.startsWith("/en") && !pathname.startsWith("/ta")) {
      url.pathname = `/${locale}${pathname}`;
      return NextResponse.redirect(url);
    }

    const pathWithoutLocale = pathname.replace(/^\/(en|ta)/, "");
    if (protectedRoutes.some((route) => pathWithoutLocale.startsWith(route))) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`, {
        headers: {
          Authorization: `Bearer ${req.cookies.get("sb-access-token")?.value || ""}`,
          APIKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
      });
      const user = response.ok ? await response.json() : null;

      if (!user) {
        url.pathname = `/${locale}/login`;
        url.searchParams.set("redirect", pathWithoutLocale);
        return NextResponse.redirect(url);
      }
    }

    if (!req.cookies.has("NEXT_LOCALE")) {
      const response = NextResponse.next();
      response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|translations).*)"],
};
