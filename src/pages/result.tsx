import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Button from '../components/atoms/button';
import Modal from '../components/atoms/modal';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import EmploymentInsurance from '../components/organisms/result/employment-insurance';
import HealthlInsurance from '../components/organisms/result/health-insurance';
import Pension from '../components/organisms/result/pension';
import Tax from '../components/organisms/result/tax';
import Todo from '../components/organisms/result/todo';
import dayjs from '../day-js';
import { retirementDateState } from '../local-stroage';
import styles from '../styles/Result.module.css';

export default function Home() {
  const [retirementDate] = useRecoilState(retirementDateState);
  const [retirementDateToDisplay, setRetirementDateToDisplay] = useState('');

  useEffect(() => {
    setRetirementDateToDisplay(dayjs(retirementDate).format('YYYY年MM月DD日'));
  }, [retirementDate]);

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
          <Modal
            label={<p className='text-black'>入力内容を見る</p>}
            id='given_choices'
          >
            <p className='text-black'>入力内容</p>
          </Modal>
          <Header>シミュレーション結果</Header>
          <p>
            あなたが{retirementDateToDisplay}
            に会社を辞めたら以下についての手続きが必要です。
          </p>
          <Todo></Todo>
          <div className={styles.box}>
            <h3>手続き内容の詳細</h3>
            <HealthlInsurance></HealthlInsurance>
            <Pension></Pension>
            <EmploymentInsurance></EmploymentInsurance>
            <Tax></Tax>
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
