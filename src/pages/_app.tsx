import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';

// Initialize the Rubik font
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(App);
