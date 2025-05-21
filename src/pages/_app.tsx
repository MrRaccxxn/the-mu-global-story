import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Roboto_Mono } from 'next/font/google';

// Initialize the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${robotoMono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
