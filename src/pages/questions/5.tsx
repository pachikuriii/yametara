import { motion } from 'framer-motion';
import Head from 'next/head';
import Alert from '../../components/atoms/alert';
import Card from '../../components/atoms/card';
import Modal from '../../components/atoms/modal';
import AnswerProgressBar from '../../components/atoms/progress-bar';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q5 from '../../components/organisms/question/q5';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 雇用保険について
        </title>
      </Head>
      <main>
        <Header>
          <p>Q5.雇用保険について</p>
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
              <Q5></Q5>
            </Card>
          </motion.div>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
