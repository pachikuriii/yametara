import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q3 from '../../components/organisms/question/q3';
import Question from 'src/components/template/question';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | あなたについて</title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q3.あなたについて</p>
          <p className='text-sm'>【記入/選択してください】</p>
        </Header>
        <Question>
          <Q3></Q3>
        </Question>
        <Footer></Footer>
      </main>
    </>
  );
}
