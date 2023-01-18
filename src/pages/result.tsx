import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/button';
import CheckedTodoPlate from '../components/molecules/result/checked-todo-plate';
import ResultMain from '../components/organisms/ResultMain';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import ResultDetailTemplate from '../components/templates/result/ResultDetail';
import styles from '../styles/Home.module.css';
export default function Home() {
  interface Storage {
    started: Boolean;
    retirement_date: String;
    retirement_reason: Number;
    re_employment: Boolean;
    age: Number;
    post_code: Number;
    family: Boolean;
    emp_ins_last_two_years: Number;
    emp_ins_total: Number;
    health_ins_last_two_month: Boolean;
    health_ins_after_retirement: Number;
    tax: Number;
    question: Number;
  }

  const initialStorageData: Storage = {
    started: false,
    retirement_date: '',
    retirement_reason: 0,
    re_employment: false,
    age: 0,
    post_code: 0,
    family: false,
    emp_ins_last_two_years: 0,
    emp_ins_total: 0,
    health_ins_last_two_month: false,
    health_ins_after_retirement: 0,
    tax: 0,
    question: 0,
  };

  const [healthInsuranceAfterRetirement, sethealthInsuranceAfterRetirement] =
    useState(0);

  const [state, setState] = useState<Storage>(initialStorageData);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const serializedSearchHistory = localStorage.getItem('yametara');
      const searchHistory: Storage = serializedSearchHistory
        ? JSON.parse(serializedSearchHistory)
        : [];
      setState(searchHistory);
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
          <br></br>
          <div className='flex flex-col w-1/3 '>
            <CheckedTodoPlate className={state.tax === 4 ? 'hidden' : ''}>
              健康保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={state.tax === 3 ? 'hidden' : ''}>
              年金
            </CheckedTodoPlate>
            <CheckedTodoPlate className={state.tax === 2 ? ' hidden' : ''}>
              雇用保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={state.tax === 1 ? ' hidden' : ''}>
              税金
            </CheckedTodoPlate>
          </div>

          <ResultDetailTemplate>
            <h2>手続き内容の詳細</h2>
            {/* <ResultMain
              sethealthInsuranceAfterRetirement={
                sethealthInsuranceAfterRetirement
              }
            ></ResultMain> */}
            <Link href='questions/8'>
              <Button>もどる</Button>
            </Link>
            <Link href='questions/1'>
              <Button>もう1度シミュレーションする</Button>
            </Link>
          </ResultDetailTemplate>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
