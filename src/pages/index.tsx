import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/atoms/button';
import Footer from '../components/organisms/index-footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター</title>
      </Head>
      <main className={styles.main}>
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
            <Button>はじめる</Button>
          </Link>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
