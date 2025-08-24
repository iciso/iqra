// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from './lib/supabase/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  try {
    // Skip public files
    if (
      req.nextUrl.pathname.startsWith('/_next') ||
      req.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
      return NextResponse.next();
    }

    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    console.log(`Middleware: Path=${req.nextUrl.pathname}, Cookies=${req.cookies.size}, User=${user?.id || 'none'}, Email=${user?.email || 'none'}, Error=${error?.message || 'none'}`);

    const url = req.nextUrl.clone();
    const { pathname } = req.nextUrl;
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';

    // Public routes
    const publicRoutes = ['/login', '/'];

    // Protected routes
    const protectedRoutes = ['/challenges', '/categories', '/quiz'];

    // Redirect root to /en
    if (pathname === '/') {
      url.pathname = '/en';
      return NextResponse.redirect(url);
    }

    // Redirect non-locale paths to include locale
    if (!pathname.startsWith('/en') && !pathname.startsWith('/ta')) {
      url.pathname = `/${locale}${pathname}`;
      return NextResponse.redirect(url);
    }

    // Handle protected routes
    const pathWithoutLocale = pathname.replace(/^\/(en|ta)/, '');
    if (protectedRoutes.some((route) => pathWithoutLocale.startsWith(route))) {
      if (!user) {
        url.pathname = `/${locale}/login`;
        url.searchParams.set('redirect', pathWithoutLocale);
        return NextResponse.redirect(url);
      }
    }

    // Set locale cookie if not present
    if (!req.cookies.has('NEXT_LOCALE')) {
      const response = NextResponse.next();
      response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|locales).*)'],
};