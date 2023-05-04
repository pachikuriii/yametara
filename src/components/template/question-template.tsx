import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
import { useIsStarted } from 'src/hooks/use-is-started';
interface Props {
  title: string;
  todo: string;
  children: ReactNode;
}

const QuestionTemplate = ({ title, todo, children }: Props) => {
  useIsStarted();
  return (
    <>
      <Head>
        <title>
          {'yametara | 退職後の手続きシミュレーター | ' + `${title}`}
        </title>
        <meta
          name='description'
          content='yametaraは会社を辞めた後、すぐに就職しない選択をはじめてする方におすすめの退職後の手続きシミュレーターです。会社を辞めた後に必要な手続きを把握するために、いくつかの質問に答えてみましょう。'
        />
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header title={title} todo={todo} />
        <div className='flex-grow w-11/12 mx-auto max-w-md'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>{children}</Card>
          </Motion>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default QuestionTemplate;
