// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  i18n,
  // Ensure public directory assets are properly served
  async rewrites() {
    return [
      {
        source: '/locales/:path*',
        destination: '/locales/:path*',
      },
    ];
  },
};

module.exports = nextConfig; 