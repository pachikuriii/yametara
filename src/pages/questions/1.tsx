import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/atoms/button';
import Header from '../../components/organisms/header';
import Footer from '../../components/organisms/question-footer';
import QuestionTemplate from '../../components/templates/question';
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
        <Header></Header>
        <QuestionTemplate />
        <Link href='/questions/2'>
          <Button>次へ</Button>
        </Link>
        <Footer></Footer>
      </main>
    </>
  );
}
