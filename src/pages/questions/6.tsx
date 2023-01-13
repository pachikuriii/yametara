import { motion } from 'framer-motion';
import Head from 'next/head';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
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
        <QuestionTemplate>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <div>
                <h2 className='card-title'>
                  退職予定日までの健康保険の被保険者期間が継続して2ヶ月以上あるか教えてください
                </h2>
                <AnswerSelectButton>ある</AnswerSelectButton>
                <AnswerSelectButton>ない</AnswerSelectButton>
              </div>
            </Card>
          </motion.div>
          <ButtonsPager></ButtonsPager>
        </QuestionTemplate>

        <Footer></Footer>
      </main>
    </>
  );
}
