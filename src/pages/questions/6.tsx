import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q6 from '../../components/organisms/question/q6';

import styles from '../../styles/Question.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 健康保険について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q6.健康保険について</Header>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div>
                <h2 className='card-title'>
                  退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上あるか教えてください
                </h2>
                <Q6></Q6>
              </div>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
