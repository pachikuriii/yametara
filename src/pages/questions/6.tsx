import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import styles from '../../styles/Question.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 健康保険について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q6.健康保険について</Header>
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
            <ButtonsPager></ButtonsPager>
          </QuestionTemplate>
        </motion.div>

        <Footer></Footer>
      </main>
    </>
  );
}
