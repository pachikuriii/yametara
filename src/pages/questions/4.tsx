import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';
export default function Home() {
  const [family, setFamily] = useState(false);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.family = family;
    LocalStorage.save(localStrage);
  }

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | あなたの家族について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q4.あなたの家族について</Header>
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
                  生計を共にしている社会保険の被保険者の家族がいますか？
                </h2>
                <AnswerSelectButton
                  onClick={() => {
                    setFamily(true);
                  }}
                >
                  いる
                </AnswerSelectButton>
                <AnswerSelectButton
                  onClick={() => {
                    setFamily(false);
                  }}
                >
                  いない
                </AnswerSelectButton>
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
