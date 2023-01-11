import { motion } from 'framer-motion';
import Head from 'next/head';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnswerSelectButton from '../../components/atoms/answer-select-button';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
import styles from '../../styles/Question.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Home() {
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
                  >
                    <SwiperSlide>
                      <AnswerSelectButton>20歳</AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton>30歳</AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton>40歳</AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton>50歳</AnswerSelectButton>
                    </SwiperSlide>
                    <SwiperSlide>
                      <AnswerSelectButton>60歳</AnswerSelectButton>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div>
                <p>郵便番号</p>
                <input
                  type='text'
                  placeholder='予定日を入力してください'
                  className='input w-full max-w-xs border-accent'
                />
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
