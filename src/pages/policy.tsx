import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | プライバシーポリシー
        </title>
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
