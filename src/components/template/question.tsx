import { ReactNode } from 'react';
import Card from '../atoms/card';
import Motion from '../atoms/motion';
import AnswerProgressBar from '../atoms/progress-bar';
interface Props {
  children: ReactNode;
}

const Question = ({ children }: Props) => {
  return (
    <>
      <div className='flex-grow'>
        <AnswerProgressBar></AnswerProgressBar>
        <Motion>
          <Card>{children}</Card>
        </Motion>
      </div>
    </>
  );
};

export default Question;
