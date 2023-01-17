import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/button';
import ResultMain from '../components/organisms/ResultMain';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [healthInsuranceAfterRetirement, sethealthInsuranceAfterRetirement] =
    useState(0);

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

          <p className='text-lg'>健康保険</p>
          <p className='text-lg'>年金</p>
          <p className='text-lg'>雇用保険</p>
          <p className='text-lg'>税金</p>

          <h2>手続き内容の詳細</h2>
          <ResultMain
            sethealthInsuranceAfterRetirement={
              sethealthInsuranceAfterRetirement
            }
          ></ResultMain>
          <Link href='questions/8'>
            <Button>もどる</Button>
          </Link>
          <Link href='questions/1'>
            <Button>もう1度シミュレーションする</Button>
          </Link>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
