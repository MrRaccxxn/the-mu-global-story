wimport { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`../../public/i18n/${validLocale}/common.json`)).default
  };
}); 