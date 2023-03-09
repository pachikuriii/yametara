import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q8 from '../../components/organisms/question/q8';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
import { useIsStarted } from 'src/hooks/use-is-started';
export default function Page8() {
  useIsStarted();
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
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q8></Q8>
            </Card>
          </Motion>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
