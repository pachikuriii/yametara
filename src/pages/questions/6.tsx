import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q6 from '../../components/organisms/question/q6';
import Question from 'src/components/template/question';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 健康保険について
        </title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q6.健康保険について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <Question>
          <Q6></Q6>
        </Question>
        <Footer></Footer>
      </main>
    </>
  );
}
