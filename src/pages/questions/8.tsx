import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import AnswerProgressBar from '../../components/atoms/progress-bar';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q8 from '../../components/organisms/question/q8';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>

      <main>
        <Header>Q8.住民税について</Header>

        <div>
          <AnswerProgressBar></AnswerProgressBar>
          <motion.div
            style={{
              width: '100%',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <Q8></Q8>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
