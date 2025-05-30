module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeDetection: false,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}; 