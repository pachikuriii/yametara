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
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>
      <main className={styles.main}>
        <Header></Header>
        <QuestionTemplate />
        <Link href='/result'>
          <Button>結果</Button>
        </Link>

        <Footer></Footer>
      </main>
    </>
  );
}
