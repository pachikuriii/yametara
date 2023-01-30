import { motion } from 'framer-motion';
import Head from 'next/head';
import Alert from '../../components/atoms/alert';
import Card from '../../components/atoms/card';
import Modal from '../../components/atoms/modal';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q5 from '../../components/organisms/question/q5';
import styles from '../../styles/Question.module.css';
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
      <main className={styles.main}>
        <Header>Q5.雇用保険について</Header>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                雇用保険のこれまでの被保険者期間を教えてください
              </h2>
              <Modal
                label={<Alert>雇用保険の被保険者期間の数え方について</Alert>}
                id='how-to-count-emp-period'
              >
                雇用保険の被保険者期間の数え方についてのモーダルの内容
              </Modal>
              <Q5></Q5>
            </Card>
          </motion.div>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
