/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'accept-language',
            value: '(.*ja.*)',
          },
        ],
        destination: '/ja',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; 