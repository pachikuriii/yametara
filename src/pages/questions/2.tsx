import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/question/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState(false);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.re_employment = inputValue;
    LocalStorage.save(localStrage);
  }

  useEffect(() => {
    reflectDataToLocalStrage();
  });

  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 退職後の予定について
        </title>
      </Head>

      <main className={styles.main}>
        <Header>Q2.退職後の予定について</Header>

        <QuestionTemplate>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>年内に働き始める予定はありますか？</h2>
              <AnswerSelectButton
                onClick={() => {
                  setInputValue(true);
                }}
              >
                ある
              </AnswerSelectButton>
              <AnswerSelectButton
                onClick={() => {
                  setInputValue(false);
                }}
              >
                ない
              </AnswerSelectButton>
            </Card>
          </motion.div>
          <ButtonsPager></ButtonsPager>
        </QuestionTemplate>

        <Footer></Footer>
      </main>
    </>
  );
}
