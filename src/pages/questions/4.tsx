import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q4 from '../../components/organisms/question/q4';
import Question from 'src/components/template/question';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | あなたの家族について
        </title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q4.あなたの家族について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <Question>
          <Q4></Q4>
        </Question>
        <Footer></Footer>
      </main>
    </>
  );
}
