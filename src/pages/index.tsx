import { motion } from 'framer-motion';
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
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main className={styles.main}>
          <Main></Main>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
