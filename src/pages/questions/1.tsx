import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import AnswerProgressBar from '../../components/atoms/progress-bar';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q1 from '../../components/organisms/question/q1';

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
        <main>
          <Header>
            <p>Q1.今回の退職について</p>
            <p className='text-sm'>【記入/選択してください】</p>
          </Header>

          <div>
            <AnswerProgressBar></AnswerProgressBar>

            <motion.div exit={{ x: '-100%' }} transition={{ duration: 0.3 }}>
              <Card>
                <Q1></Q1>
              </Card>
            </motion.div>
          </div>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
