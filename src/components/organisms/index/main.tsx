import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { startedState } from '../../../session-stroage';
import Button from '../../atoms/button';

export default function IndexMain() {
  const [started, setStarted] = useRecoilState(startedState);
  useLayoutEffect(() => {}, []);

  return (
    <div className='pt-20 md:text-xl w-11/12 mx-auto text-center leading-relax tracking-wide'>
      <Image
        src='/yametara-logo.svg'
        alt='logo'
        width='600'
        height='100'
        className='mx-auto'
      />

      <div className='py-8'>
        <p>いくつかの質問に答えるだけで</p>
        <p>会社を辞めたら必要な</p>
        <p>社会保険や税金の手続き内容を</p>
        <p>簡単にシミュレーションできます。</p>
      </div>

      <div>
        <Link href='/questions/1'>
          <button
            className='max-sm:w-full md:btn-wide btn btn-outline text-accent md:text-xl bg-primary rounded-full border-secondary hover:bg-secondary-focus hover:border-secondary-focus shadow-md'
            onClick={() => {
              setStarted(true);
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
  );
}
