import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <main className={styles.main}>
          <Header>Q1.今回の退職について</Header>

          <QuestionTemplate>
            <motion.div exit={{ x: '-100%' }} transition={{ duration: 0.3 }}>
              <Card>
                <h2 className='card-title'>
                  退職予定日と退職事由を教えてください
                </h2>
                <div>
                  <p>退職予定日</p>
                  <input
                    type='text'
                    placeholder='予定日を入力してください'
                    className='input w-full max-w-xs border-accent'
                  />
                </div>
                <div>
                  <p>退職事由</p>
                  <AnswerSelectButton>自己都合</AnswerSelectButton>
                  <AnswerSelectButton>会社都合</AnswerSelectButton>
                  <AnswerSelectButton>その他</AnswerSelectButton>
                  <p>退職事由について</p>
                </div>
              </Card>
            </motion.div>
            <Link href='/questions/2'>
              <Button>次へ</Button>
            </Link>
          </QuestionTemplate>

          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
