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
    <div>
      <Image src='/yametara-logo.svg' alt='logo' width='500' height='100' />
      <div>
        <p>
          いくつかの質問に答えるだけで
          会社を辞めて、すぐに就職する予定がない場合に必要な
          社会保険や税金の手続き内容を 簡単にシミュレーションできます。
        </p>
      </div>

      <Link href='/questions/1'>
        <Button
          onClick={() => {
            setStarted(true);
          }}
        >
          はじめる
        </Button>
      </Link>
    </div>
  );
}
