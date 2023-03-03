import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import Footer from 'src/components/organisms/footer';
import {
  isNextButtonClicked,
  isBackButtonClicked,
} from 'src/motion-controller';
import { startedState } from 'src/session-stroage';

export default function IndexMain() {
  const setStarted = useSetRecoilState(startedState);
  const setNextButtonClicked = useSetRecoilState(isNextButtonClicked);
  const setBackButtonClicked = useSetRecoilState(isBackButtonClicked);
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター</title>
      </Head>
      <main className='text-center leading-relax tracking-wide'>
        <div className='pt-20 w-11/12 mx-auto'>
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
                className='max-sm:w-full md:btn-wide btn btn-outline text-accent md:text-xl bg-white rounded-full border-secondary hover:bg-secondary-focus hover:border-secondary-focus shadow-basic'
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
