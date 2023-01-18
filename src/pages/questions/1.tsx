import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Button from '../../components/atoms/button';
import Card from '../../components/atoms/card';
import RetirementDateForm from '../../components/atoms/retirement-date-form';
import Modal from '../../components/molecules/modal';
import RetirementReasonButtons from '../../components/molecules/question/q1/buttons-retirement-reason';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [selectedButton, setSelectedButton] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.retirement_date = inputValue;
    localStrage.retirement_reason = selectedButton;
    LocalStorage.save(localStrage);
  }
  useEffect(() => {
    reflectDataToLocalStrage();
  });
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
                    onChange={(event) => handleChange(event)}
                  ></RetirementDateForm>
                </div>
                <div>
                  <p>退職事由</p>
                  <RetirementReasonButtons
                    selectedButton={selectedButton}
                    setSelectedButton={setSelectedButton}
                  ></RetirementReasonButtons>
                  <Modal label='退職事由について' id='retirement-reason'>
                    モーダルの内容
                  </Modal>
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
