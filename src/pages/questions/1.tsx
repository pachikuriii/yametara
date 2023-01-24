import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q1 from '../../components/organisms/question/q1';
import QuestionTemplate from '../../components/templates/questions/question';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <main className={styles.main}>
          <Header>Q1.今回の退職について</Header>

          <QuestionTemplate>
            <motion.div exit={{ x: '-100%' }} transition={{ duration: 0.3 }}>
              <Card>
                <h2 className='card-title'>
                  退職予定日と退職事由を教えてください
                </h2>
                <div>
                  <Q1></Q1>
                </div>
              </Card>
            </motion.div>
          </QuestionTemplate>
          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
