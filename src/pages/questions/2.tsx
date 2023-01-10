import Head from 'next/head';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/footer';
import Header from '../../components/organisms/header';
import QuestionTemplate from '../../components/templates/question';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 退職後の予定について
        </title>
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <QuestionTemplate />
        <ButtonsPager></ButtonsPager>
        <Footer></Footer>
      </main>
    </>
  );
}
