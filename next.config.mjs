/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The quiz page reads locales/<lng>/<category>.json at request time (lib/i18n/content.server.ts),
  // and so does the review-sheet download (lib/review-sheet/files.server.ts);
  // ship those files with each route's server function.
  outputFileTracingIncludes: {
    "/quiz": ["./locales/**/*.json"],
    "/api/review-sheet": ["./locales/**/*.json"],
  },
  async redirects() {
    return [
      { source: "/categories", destination: "/subjects", permanent: true },
      { source: "/categories/:path*", destination: "/subjects/:path*", permanent: true },
    ]
  },
}

export default nextConfig
