import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q2 from '../../components/organisms/question/q2';
import Question from 'src/components/template/question';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 退職後の予定について
        </title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p> Q2.退職後の予定について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <Question>
          <Q2></Q2>
        </Question>
        <Footer></Footer>
      </main>
    </>
  );
}
