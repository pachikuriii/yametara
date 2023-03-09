import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q6 from '../../components/organisms/question/q6';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
import { useIsStarted } from 'src/hooks/use-is-started';
export default function Page6() {
  useIsStarted();
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q6></Q6>
            </Card>
          </Motion>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
