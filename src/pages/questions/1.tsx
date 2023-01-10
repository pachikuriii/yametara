import Head from 'next/head';
import ButtonsPager from '../../components/molecules/buttons-pager';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>
      <main className={styles.main}>
        <div>
          <p>ららら</p>
          <ButtonsPager></ButtonsPager>
        </div>
      </main>
    </>
  );
}
