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
                <AnswerSelectButton>6ヶ月未満</AnswerSelectButton>
                <AnswerSelectButton>6ヶ月以上1年未満</AnswerSelectButton>
                <AnswerSelectButton>1年以上</AnswerSelectButton>
              </div>
              <div>
                <p>退職予定日までの通算では…</p>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={100}
                  className='mySwiper'
                  navigation={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide>
                    <AnswerSelectButton>1年未満</AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton>1年以上5年未満</AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton>5年以上10年未満</AnswerSelectButton>
                  </SwiperSlide>
                  <SwiperSlide>
                    <AnswerSelectButton>10年以上</AnswerSelectButton>
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
