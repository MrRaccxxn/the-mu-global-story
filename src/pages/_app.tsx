import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

// Initialize the Rubik font
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <NextIntlClientProvider
      locale={router.locale || 'en'}
      messages={pageProps.messages || {}}
    >
      <main className={`${rubik.variable}`}>
        <Component {...pageProps} />
      </main>
    </NextIntlClientProvider>
  );
}

export default App;
