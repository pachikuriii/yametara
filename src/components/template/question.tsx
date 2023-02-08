import { useRouter } from 'next/router';
import { ReactNode, useContext, useState, useMemo } from 'react';
import BackMotion from '../atoms/back-motion';
import Card from '../atoms/card';
import FadeMotion from '../atoms/fade-motion';
import Motion from '../atoms/motion';
import AnswerProgressBar from '../atoms/progress-bar';
import { HistoryContext } from 'src/hooks/history-context';
interface Props {
  children: ReactNode;
}
const Question = ({ children }: Props) => {
  const history = useContext(HistoryContext);
  const router = useRouter();
  const currentPageNumber = Number(
    router.pathname.replace(/^\/questions\//, ''),
  );
  const previousPageNumber = Number(history[1].replace(/^\/questions\//, ''));
  const isNext = currentPageNumber > previousPageNumber;
  const isBack = currentPageNumber < previousPageNumber;
  const fromTop = history[1] === '/';
  const fromResult = history[1] === '/result';
  const [state, setState] = useState(<></>);

  useMemo(() => {
    if (isNext || fromTop) {
      setState(
        <Motion>
          <Card>{children}</Card>
        </Motion>,
      );
    } else if (isBack || fromResult) {
      setState(
        <BackMotion>
          <Card>{children}</Card>
        </BackMotion>,
      );
    } else {
      setState(
        <FadeMotion>
          <Card>{children}</Card>
        </FadeMotion>,
      );
    }
  }, [children, fromResult, fromTop, isBack, isNext]);

  return (
    <>
      <div className='flex-grow'>
        <AnswerProgressBar></AnswerProgressBar>
        {state}
      </div>
    </>
  );
};

export default Question;
