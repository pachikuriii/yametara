import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../components/atoms/button';
import Card from '../../components/atoms/card';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import LocalStorage from '../../local-stroage';
import styles from '../../styles/Question.module.css';
export default function Home() {
  const [tax, setTax] = useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.tax = tax;
    LocalStorage.save(localStrage);
  }

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター | 住民税について</title>
      </Head>
      <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <main className={styles.main}>
          <Header>Q8.住民税について</Header>
          <div className={styles.wrapper}>
            <motion.div
              style={{
                width: '100%',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <h2 className='card-title'>
                  今年度の住民税について、残りの支払いはどうしますか？
                </h2>

                <div
                  onClick={() => {
                    setTax(1);
                  }}
                >
                  <input type='radio' name='radio-1' className='radio' />
                  <p>
                    退職時に給与/退職金から会社に翌年5月分まで天引きしてもらう（一括徴収）
                  </p>
                </div>

                <div
                  onClick={() => {
                    setTax(2);
                  }}
                >
                  <input type='radio' name='radio-1' className='radio' />
                  <p>
                    送付される納税通知書に基づいて自分で分割で納める（普通徴収）
                  </p>
                </div>

                <div
                  onClick={() => {
                    setTax(3);
                  }}
                >
                  <input type='radio' name='radio-1' className='radio' />
                  <p>今年度の住民税の支払いはなし</p>
                </div>
              </Card>
            </motion.div>
            <Link href='/questions/7'>
              <Button>戻る</Button>
            </Link>
            <Link href='/result'>
              <Button>結果</Button>
            </Link>
          </div>
          <Footer></Footer>
        </main>
      </motion.div>
    </>
  );
}
