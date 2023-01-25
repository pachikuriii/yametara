import { motion } from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q7 from '../../components/organisms/question/q7';
import styles from '../../styles/Question.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 健康保険について
        </title>
      </Head>
      <main className={styles.main}>
        <Header>Q7.健康保険について</Header>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h2 className='card-title'>
                退職後、どの健康保険への加入を検討したいか教えてください
              </h2>
              <p>国民皆保険制度により退職後も健康保険への加入が必須です。</p>
              <Q7></Q7>
            </Card>
          </motion.div>
          <ButtonsPager></ButtonsPager>
        </div>

        <Footer></Footer>
      </main>
    </>
  );
}
