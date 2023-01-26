import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q4 from '../../components/organisms/question/q4';
import styles from '../../styles/Question.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | あなたの家族について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q4.あなたの家族について</Header>
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
                  生計を共にしている社会保険の被保険者の家族がいますか？
                </h2>
                <Q4></Q4>
              </div>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
