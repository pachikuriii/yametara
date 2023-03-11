import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Card from 'src/components/atoms/card';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
import { useIsStarted } from 'src/hooks/use-is-started';
interface Props {
  pageTitle: string;
  title: string;
  todo: string;
  children: ReactNode;
}

const QuestionTemplate = ({ pageTitle, title, todo, children }: Props) => {
  useIsStarted();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header title={title} todo={todo} />
        <div className='flex-grow w-11/12 mx-auto max-w-xl'>
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
