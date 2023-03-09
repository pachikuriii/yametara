import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q3 from '../../components/organisms/question/q3';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
import { useIsStarted } from 'src/hooks/use-is-started';
export default function Page3() {
  useIsStarted();
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q3></Q3>
            </Card>
          </Motion>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
