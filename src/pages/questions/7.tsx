import { motion } from 'framer-motion';
import Head from 'next/head';
import Button from '../../components/atoms/button';
import Card from '../../components/atoms/card';
import ButtonsPager from '../../components/molecules/buttons-pager';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import QuestionTemplate from '../../components/templates/questions/question';
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
        <QuestionTemplate>
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

              <div className='tabs'>
                <a className='tab bg-secondary text-accent'>任意継続健康保険</a>
                <a className='tab bg-secondary text-accent tab-active'>
                  国民健康保険
                </a>
                <a className='tab bg-secondary text-accent'>
                  家族の健康保険（被扶養者）
                </a>
              </div>

              <div>
                <h3>国民健康保険</h3>
                <p>
                  他のどの健康保険にも加入していないすべての住民を対象とした健康保険
                </p>
              </div>

              <div>
                <h3>保険料の特徴</h3>
                <ul>
                  <li>
                    前年の所得や保険へ加入する世帯人員数などに応じて保険料が決まる
                  </li>
                  <li>保険料の減免制度が受けられる場合がある</li>
                  <li>居住している市区町村により保険料額が異なる</li>
                </ul>
              </div>
              <Button>
                <input type='checkbox' checked className='checkbox' />
                この保険への加入を検討する
              </Button>
            </Card>
          </motion.div>
          <ButtonsPager></ButtonsPager>
        </QuestionTemplate>

        <Footer></Footer>
      </main>
    </>
  );
}
