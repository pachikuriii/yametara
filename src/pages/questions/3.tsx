import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import AnswerProgressBar from '../../components/atoms/progress-bar';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q3 from '../../components/organisms/question/q3';
import styles from '../../styles/Question.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | あなたについて</title>
      </Head>

      <main className={styles.main}>
        <Header>Q3.あなたについて</Header>
        <div className={styles.wrapper}>
          <AnswerProgressBar></AnswerProgressBar>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                退職予定日におけるあなたの年齢とお住まいの住所の郵便番号を教えてください
              </h2>
              <Q3></Q3>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
