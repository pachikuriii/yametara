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
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>
      <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <main className={styles.main}>
          <Header>Q8.住民税について</Header>
          <QuestionTemplate>
            <motion.div
              style={{
                width: '100%',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <p>らら</p>
              </Card>
            </motion.div>

            <Link href='/result'>
              <Button>結果</Button>
            </Link>
          </QuestionTemplate>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
