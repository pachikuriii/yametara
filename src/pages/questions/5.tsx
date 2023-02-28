import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q5 from '../../components/organisms/question/q5';
import Card from 'src/components/atoms/card';
import Modal from 'src/components/atoms/modal';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q5></Q5>
            </Card>
          </Motion>
        </div>
        <Modal id='how-to-count-emp-period'>
          <p className='py-4'>質問5のモーダル</p>
        </Modal>
        <Footer></Footer>
      </main>
    </>
  );
}
