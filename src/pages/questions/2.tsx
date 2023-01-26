import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q2 from '../../components/organisms/question/q2';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 退職後の予定について
        </title>
      </Head>

      <main className={styles.main}>
        <Header>Q2.退職後の予定について</Header>

        <div className={styles.wrapper}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>年内に働き始める予定はありますか？</h2>
              <Q2></Q2>
            </Card>
          </motion.div>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
