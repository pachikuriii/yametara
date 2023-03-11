import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import Footer from 'src/components/organisms/footer';
import {
  isNextButtonClicked,
  isBackButtonClicked,
} from 'src/storage/motion-controller';
import { startedState } from 'src/storage/session-stroage';

export default function IndexMain() {
  const setStarted = useSetRecoilState(startedState);
  const setNextButtonClicked = useSetRecoilState(isNextButtonClicked);
  const setBackButtonClicked = useSetRecoilState(isBackButtonClicked);
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター</title>
      </Head>
      <main className='text-center'>
        <div className='mx-auto max-w-md pt-20 pb-10 w-11/12'>
          <Image
            src='/yametara-logo.svg'
            alt='logo'
            width='600'
            height='100'
            className='mx-auto'
          />
          <p>会社を辞めた後の手続き…</p>
          <p>どこで、なにを、いつまでに？</p>
          <div className='py-8'>
            <p>いくつかの質問に答えるだけで</p>
            <p>会社を辞めたら必要な</p>
            <p>社会保険や税金の手続き内容を</p>
            <p>簡単にシミュレーションできます。</p>
          </div>

          <div>
            <Link href='/questions/1'>
              <button
                id='index-start-button'
                className='btn-wide btn btn-outline text-xl text-accent bg-white rounded-full border-2  border-primary no-animation hover:bg-primary-focus  hover:border-primary-focus font-extrabold shadow-select'
                onClick={() => {
                  setStarted(true);
                  setBackButtonClicked(false);
                  setNextButtonClicked(true);
                }}
              >
                はじめる
              </button>
            </Link>
          </div>

          <div className='py-8'>
            <p>所要時間:3分程度</p>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
