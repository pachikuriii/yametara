import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/question/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Home() {
  const [employmentInsuranceLastTwoYears, setemploymentInsuranceLastTwoYears] =
    useState(0);
  const [employmentInsuranceInThePast, setemploymentInsuranceInThePast] =
    useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.emp_ins_last_two_years = employmentInsuranceLastTwoYears;
    localStrage.emp_ins_total = employmentInsuranceInThePast;
    LocalStorage.save(localStrage);
  }

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 雇用保険について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q5.雇用保険について</Header>
        <QuestionTemplate>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                雇用保険のこれまでの被保険者期間を教えてください
              </h2>
              <p>雇用保険の被保険者期間の数え方について</p>
              <div>
                <p>退職予定日までの2年間では…</p>
                <AnswerSelectButton
                  onClick={() => {
                    setemploymentInsuranceLastTwoYears(1);
                  }}
                >
                  6ヶ月未満
                </AnswerSelectButton>
                <AnswerSelectButton
                  onClick={() => {
                    setemploymentInsuranceLastTwoYears(2);
                  }}
                >
                  6ヶ月以上1年未満
                </AnswerSelectButton>
                <AnswerSelectButton
                  onClick={() => {
                    setemploymentInsuranceLastTwoYears(3);
                  }}
                >
                  1年以上
                </AnswerSelectButton>
              </div>
              <div>
                <p>退職予定日までの通算では…</p>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={100}
                  className='mySwiper'
                  navigation={true}
                  modules={[Navigation]}
                  centeredSlides={true}
                >
                  <SwiperSlide>
                    <AnswerSelectButton
                      onClick={() => {
                        setemploymentInsuranceInThePast(1);
                      }}
                    >
                      1年未満
                    </AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton
                      onClick={() => {
                        setemploymentInsuranceInThePast(2);
                      }}
                    >
                      1年以上5年未満
                    </AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton
                      onClick={() => {
                        setemploymentInsuranceInThePast(3);
                      }}
                    >
                      5年以上10年未満
                    </AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton
                      onClick={() => {
                        setemploymentInsuranceInThePast(4);
                      }}
                    >
                      10年以上20年未満
                    </AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton
                      onClick={() => {
                        setemploymentInsuranceInThePast(5);
                      }}
                    >
                      20年以上
                    </AnswerSelectButton>
                  </SwiperSlide>
                </Swiper>
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
