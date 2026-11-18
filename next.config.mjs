/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/categories", destination: "/subjects", permanent: true },
      { source: "/categories/:path*", destination: "/subjects/:path*", permanent: true },
    ]
  },
}

export default nextConfig
