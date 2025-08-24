// next.config.mjs
export default {
  experimental: {
    // Add any existing experimental flags
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
};