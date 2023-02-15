import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/atoms/modal';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
import DataInput from '../components/organisms/result/data-input';
import EmploymentInsurance from '../components/organisms/result/employment-insurance';
import HealthlInsurance from '../components/organisms/result/health-insurance';
import Pension from '../components/organisms/result/pension';
import Tax from '../components/organisms/result/tax';
import Todo from '../components/organisms/result/todo';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | シミュレーション結果
        </title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <main>
          <label htmlFor='given_choices'>
            <p className='text-black'>入力内容を見る</p>
          </label>

          <Modal id='given_choices'>
            <DataInput />
          </Modal>

          <Header>シミュレーション結果</Header>
          <Todo></Todo>
          <div>
            <h3>手続き内容の詳細</h3>
            <HealthlInsurance></HealthlInsurance>
            <Pension></Pension>
            <EmploymentInsurance></EmploymentInsurance>
            <Tax></Tax>
            <Link href='questions/8'>
              <p>もどる</p>
            </Link>
            <Link href='questions/1'>
              <p>もう1度シミュレーションする</p>
            </Link>
          </div>
          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
