import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function TestPage() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  const handleLanguageSwitch = () => {
    const newLocale = router.locale === 'en' ? 'ja' : 'en';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          next-i18next Test Page
        </h1>
        
        <div className="space-y-4 text-sm">
          <div>
            <strong>Current Locale:</strong> {router.locale}
          </div>
          <div>
            <strong>i18n Language:</strong> {i18n.language}
          </div>
          <div>
            <strong>Test Translation:</strong> {t('hero.mainTitle')}
          </div>
          <div>
            <strong>Meta Title:</strong> {t('meta.title')}
          </div>
        </div>
        
        <button 
          onClick={handleLanguageSwitch}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Switch to {router.locale === 'en' ? 'Japanese' : 'English'}
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}; 