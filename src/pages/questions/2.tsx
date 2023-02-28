import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q2 from '../../components/organisms/question/q2';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';

export default function Page2() {
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q2></Q2>
            </Card>
          </Motion>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
