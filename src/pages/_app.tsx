import '../styles/globals.css';
import { Noto_Sans_JP } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import Loading from 'src/components/atoms/loading';

const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['japanese'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  return (
    <>
      {isLoading ? (
        <div className='h-screen w-screen flex justify-center items-center'>
          <Loading />
        </div>
      ) : (
        <RecoilRoot>
          <main className={NotoSansJP.className}>
            <AnimatePresence mode='wait'>
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
          </main>
        </RecoilRoot>
      )}
    </>
  );
}
