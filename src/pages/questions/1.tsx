import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q1 from '../../components/organisms/question/q1';
import Modal from 'src/components/atoms/modal';
import Question from 'src/components/template/question';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>

      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q1.今回の退職について</p>
          <p className='text-sm'>【記入/選択してください】</p>
        </Header>
        <Question>
          <Q1></Q1>
        </Question>

        <Modal id='retirement-reason'>
          <p className='py-4'>質問1のモーダル</p>
        </Modal>

        <Footer></Footer>
      </main>
    </>
  );
}
