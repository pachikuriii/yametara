import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/atoms/button';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
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

      <main className={styles.main}>
        <Header>Q1.今回の退職について</Header>
        <motion.div
          style={{
            width: '100%',
          }}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <QuestionTemplate>
            <Card>
              <p>らら</p>
            </Card>
            <Link href='/questions/2'>
              <Button>次へ</Button>
            </Link>
          </QuestionTemplate>
        </motion.div>

        <Footer></Footer>
      </main>
    </>
  );
}
