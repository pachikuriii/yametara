import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q5 from '../../components/organisms/question/q5';
import Question from 'src/components/template/question';

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
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q5.雇用保険について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <Question>
          <Q5></Q5>
        </Question>

        <Footer></Footer>
      </main>
    </>
  );
}
