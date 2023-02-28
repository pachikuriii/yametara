import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q1 from '../../components/organisms/question/q1';
import Card from 'src/components/atoms/card';
import Modal from 'src/components/atoms/modal';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';

export default function Page1() {
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q1></Q1>
            </Card>
          </Motion>
        </div>

        <Modal id='retirement-reason'>
          <p className='py-4'>質問1のモーダル</p>
        </Modal>

        <Footer></Footer>
      </main>
    </>
  );
}
