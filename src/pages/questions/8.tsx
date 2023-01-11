import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/atoms/button';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/question';
import styles from '../../styles/Question.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main className={styles.main}>
          <Header></Header>
          <motion.div
            style={{
              width: '100%',
            }}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionTemplate />
          </motion.div>
          <Link href='/result'>
            <Button>結果</Button>
          </Link>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
