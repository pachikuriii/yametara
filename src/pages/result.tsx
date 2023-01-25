import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/button';
import CheckedTodoPlate from '../components/molecules/checked-todo-plate';
import ResultMain from '../components/organisms/ResultMain';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import { Storage, initialStorageData } from '../local-stroage';
import styles from '../styles/Result.module.css';

export default function Home() {
  const [healthInsuranceAfterRetirement, sethealthInsuranceAfterRetirement] =
    useState(0);

  const [storage, setStorage] = useState<Storage>({
    started: false,
    retirement_date: '',
    retirement_reason: 0,
    re_employment: 0,
    age: 0,
    post_code: 0,
    family: 0,
    emp_ins_last_two_years: 0,
    emp_ins_total: 0,
    health_ins_last_two_month: 0,
    health_ins_after_retirement: 0,
    tax: 0,
    question: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchStorage = localStorage.getItem('yametara');
      const storageContent: Storage = fetchStorage
        ? JSON.parse(fetchStorage)
        : [];
      localStorage.setItem('yametara', JSON.stringify(storageContent));
      setStorage(storageContent);
    }
  }, []);

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

          <div className='flex flex-col w-1/3 '>
            <CheckedTodoPlate className={storage.tax === 4 ? 'hidden' : ''}>
              健康保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={storage.tax === 3 ? 'hidden' : ''}>
              年金
            </CheckedTodoPlate>
            <CheckedTodoPlate className={storage.tax === 2 ? ' hidden' : ''}>
              雇用保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={storage.tax === 1 ? ' hidden' : ''}>
              税金
            </CheckedTodoPlate>
          </div>

          <div className={styles.box}>
            <h2>手続き内容の詳細</h2>
            <ResultMain
              sethealthInsuranceAfterRetirement={
                sethealthInsuranceAfterRetirement
              }
              storage={storage}
            ></ResultMain>
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
