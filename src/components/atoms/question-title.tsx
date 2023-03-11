import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const QuestionTitle = ({ children }: Props) => {
  return <h2 className='text-lg pb-1'>{children}</h2>;
};

export default QuestionTitle;
