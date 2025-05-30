import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { getMessages } from 'next-intl/server';

export default function TestPage() {
  const t = useTranslations('');
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'ja' : 'en';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          next-intl Test Page
        </h1>
        
        <div className="space-y-4 text-sm">
          <div>
            <strong>Current Locale:</strong> {locale}
          </div>
          <div>
            <strong>Router Locale:</strong> {router.locale}
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
          Switch to {locale === 'en' ? 'Japanese' : 'English'}
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const messages = await getMessages({ locale: locale || 'en' });
  
  return {
    props: {
      messages,
    },
  };
}; 