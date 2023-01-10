import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/atoms/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>
      <main>
        <div>
          <p>ららら</p>
          <Link href='/result'>
            <Button>結果</Button>
          </Link>
        </div>
      </main>
    </>
  );
}
