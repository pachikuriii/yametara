import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Card from '../../components/atoms/card';
import FormPostCode from '../../components/atoms/form-postcode';
import ButtonsPager from '../../components/molecules/question/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const [age, setAge] = useState(0);
  const [postCode, setPostCode] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCode(Number(event.target.value));
  };
  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.age = age;
    localStrage.post_code = postCode;
    LocalStorage.save(localStrage);
  }
  useEffect(() => {
    reflectDataToLocalStrage();
  });
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | あなたについて</title>
      </Head>

      <main className={styles.main}>
        <Header>Q3.あなたについて</Header>
        <QuestionTemplate>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                退職予定日におけるあなたの年齢とお住まいの住所の郵便番号を教えてください
              </h2>
              <div>
                <p>年齢</p>
                <div>
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
                          setAge(1);
                        }}
                      >
                        30歳未満
                      </AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton
                        onClick={() => {
                          setAge(2);
                        }}
                      >
                        30歳以上35歳未満
                      </AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton
                        onClick={() => {
                          setAge(3);
                        }}
                      >
                        35歳以上45歳未満
                      </AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton
                        onClick={() => {
                          setAge(4);
                        }}
                      >
                        45歳以上60歳未満
                      </AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton
                        onClick={() => {
                          setAge(5);
                        }}
                      >
                        60歳以上65歳未満
                      </AnswerSelectButton>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <p>郵便番号</p>
                <FormPostCode
                  value={postCode}
                  onChange={(event) => handleChange(event)}
                ></FormPostCode>
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
