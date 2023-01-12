import { ReactNode } from 'react';
import styles from './Question.module.css';

interface Props {
  children: ReactNode;
}

const QuestionTemplate = ({ children }: Props) => {
  return (
    <>
      <div className={styles.box}>{children}</div>
    </>
  );
};

export default QuestionTemplate;
