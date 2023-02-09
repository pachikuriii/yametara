import '../styles/globals.css';
import { Noto_Sans_JP } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['japanese'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <main className={NotoSansJP.className}>
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </main>
    </RecoilRoot>
  );
}
