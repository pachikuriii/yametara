import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q8 from '../../components/organisms/question/q8';
import Question from 'src/components/template/question';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q8.住民税について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <Question>
          <Q8></Q8>
        </Question>

        <Footer></Footer>
      </main>
    </>
  );
}
