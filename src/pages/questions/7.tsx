import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import AnswerProgressBar from '../../components/atoms/progress-bar';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q7 from '../../components/organisms/question/q7';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 健康保険について
        </title>
      </Head>
      <main>
        <Header>
          <p>Q7.健康保険について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <div>
          <AnswerProgressBar></AnswerProgressBar>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <Q7></Q7>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
