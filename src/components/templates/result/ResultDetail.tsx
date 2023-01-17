import { ReactNode } from 'react';
import styles from './ResultDetail.module.css';

interface Props {
  children: ReactNode;
}

const ResultDetailTemplate = ({ children }: Props) => {
  return (
    <>
      <div className={styles.box}>{children}</div>
    </>
  );
};

export default ResultDetailTemplate;
