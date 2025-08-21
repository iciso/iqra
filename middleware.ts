import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from './lib/supabase/server';

export async function middleware(request: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    console.log(`Middleware: Path=${request.nextUrl.pathname}, Cookies=${request.cookies.size}, User=${user?.id || 'none'}, Email=${user?.email || 'none'}, Error=${error?.message || 'none'}`);

    if (error) {
      console.error("Supabase auth error:", error);
      return NextResponse.next();
    }

    const protectedRoutes = ["/challenges", "/categories", "/quiz"];
    const locale = request.nextUrl.pathname.split('/')[1] || 'en';
    const pathWithoutLocale = request.nextUrl.pathname.replace(/^\/(en|ta)/, '');

    if (protectedRoutes.some((route) => pathWithoutLocale.startsWith(route))) {
      if (!user) {
        console.log(`Middleware: Redirecting unauthenticated user from ${request.nextUrl.pathname} to /${locale}/login`);
        const redirectUrl = new URL(`/${locale}/login`, request.url);
        redirectUrl.searchParams.set("redirect", request.nextUrl.pathname + request.nextUrl.search);
        return NextResponse.redirect(redirectUrl);
      }
    }

    if (pathWithoutLocale === "/challenge" || pathWithoutLocale === "/quiz-challenges") {
      console.log(`Middleware: Redirecting legacy route ${request.nextUrl.pathname} to /${locale}/challenges`);
      return NextResponse.redirect(new URL(`/${locale}/challenges`, request.url));
    }

    console.log(`Middleware: Allowing access to ${request.nextUrl.pathname} for user ${user?.id || 'none'}`);
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
