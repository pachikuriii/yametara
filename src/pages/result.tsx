import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import Button from '../components/atoms/button';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import Detail from '../components/organisms/result/detail';
import Main from '../components/organisms/result/main';
import { taxState } from '../local-stroage';
import styles from '../styles/Result.module.css';

export default function Home() {
  const [tax] = useRecoilState(taxState);

  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | シミュレーション結果
        </title>
      </Head>
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main className={styles.main}>
          <Header>シミュレーション結果</Header>
          <p>あなたが会社を辞めたら以下についての手続きが必要です。</p>
          <Main tax={tax}></Main>
          <div className={styles.box}>
            <h2>手続き内容の詳細</h2>
            <Detail></Detail>
            <Link href='questions/8'>
              <Button>もどる</Button>
            </Link>
            <Link href='questions/1'>
              <Button>もう1度シミュレーションする</Button>
            </Link>
          </div>
          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
