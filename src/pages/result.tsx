import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import Button from '../components/atoms/button';
import CheckedTodoPlate from '../components/molecules/checked-todo-plate';
import ResultMain from '../components/organisms/ResultMain';
import Footer from '../components/organisms/question/footer';
import Header from '../components/organisms/question/header';
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

          <div className='flex flex-col w-1/3 '>
            <CheckedTodoPlate className={tax === 4 ? 'hidden' : ''}>
              健康保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={tax === 3 ? 'hidden' : ''}>
              年金
            </CheckedTodoPlate>
            <CheckedTodoPlate className={tax === 2 ? ' hidden' : ''}>
              雇用保険
            </CheckedTodoPlate>
            <CheckedTodoPlate className={tax === 3 ? ' hidden' : ''}>
              税金
            </CheckedTodoPlate>
          </div>

          <div className={styles.box}>
            <h2>手続き内容の詳細</h2>
            <ResultMain></ResultMain>
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
