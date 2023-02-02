import Head from 'next/head';
import Footer from '../components/organisms/index/footer';
import Main from '../components/organisms/index/main';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター</title>
      </Head>
      <main className={styles.main}>
        <Main></Main>
        <Footer></Footer>
      </main>
    </>
  );
}
