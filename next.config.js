/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
};

module.exports = nextConfig; 