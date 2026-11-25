/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The quiz page reads locales/<lng>/<category>.json at request time (lib/i18n/content.server.ts);
  // ship those files with that route's server function.
  outputFileTracingIncludes: {
    "/quiz": ["./locales/**/*.json"],
  },
  async redirects() {
    return [
      { source: "/categories", destination: "/subjects", permanent: true },
      { source: "/categories/:path*", destination: "/subjects/:path*", permanent: true },
    ]
  },
}

export default nextConfig
