import Head from 'next/head';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Header from '../../components/organisms/header';
import Footer from '../../components/organisms/question-footer';
import QuestionTemplate from '../../components/templates/question';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | あなたについて</title>
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
