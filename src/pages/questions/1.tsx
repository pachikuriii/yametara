import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Button from '../../components/atoms/button';
import Card from '../../components/atoms/card';
import RetirementDateForm from '../../components/atoms/retirement-date-form';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';

// function changeStartedStatus(retirement_date) {
//   const localStrage = LocalStorage.fetch();
//   localStrage.started = true;
//   LocalStorage.save(localStrage);
// }

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
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
                  <RetirementDateForm
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                  ></RetirementDateForm>
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
