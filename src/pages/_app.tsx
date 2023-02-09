import '../styles/globals.css';
import { Noto_Sans_JP } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';
import { RecoilRoot } from 'recoil';
import { HistoryContext } from 'src/hooks/history-context';

const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['japanese'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [history, setHistory] = useState([router.asPath, '']);

  useMemo(() => {
    setHistory([router.asPath, history[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <HistoryContext.Provider value={history}>
      <RecoilRoot>
        <main className={NotoSansJP.className}>
          <AnimatePresence mode='wait'>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </main>
      </RecoilRoot>
    </HistoryContext.Provider>
  );
}
