import '../styles/globals.css';
import { Noto_Sans_JP } from '@next/font/google';
import type { AppProps } from 'next/app';

const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['japanese'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={NotoSansJP.className}>
      <Component {...pageProps} />
    </main>
  );
}
