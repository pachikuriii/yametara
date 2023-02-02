import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q8 from '../../components/organisms/question/q8';
import styles from '../../styles/Question.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>

      <main className={styles.main}>
        <Header>Q8.住民税について</Header>
        <div className={styles.wrapper}>
          <motion.div
            style={{
              width: '100%',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                今年度の住民税について、残りの支払いはどうしますか？
              </h2>
              <Q8></Q8>
            </Card>
          </motion.div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
