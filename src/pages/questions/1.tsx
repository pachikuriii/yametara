import Head from 'next/head';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q1 from '../../components/organisms/question/q1';
import Card from 'src/components/atoms/card';
import Modal from 'src/components/atoms/modal';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';

export default function Page1() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 今回の退職について
        </title>
      </Head>

      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q1.今回の退職について</p>
          <p className='text-sm'>【記入/選択してください】</p>
        </Header>
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q1></Q1>
            </Card>
          </Motion>
        </div>

        <Modal id='retirement-reason'>
          <div className='w-full bg-primary'>
            <h2 className='text-white text-xl text-center py-2 font-extrabold'>
              退職事由について
            </h2>
          </div>
          <div className='px-6 py-6'>
            <div className='pb-4'>
              <div className='flex justify-center pb-2'>
                <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary no-animation  font-extrabold'>
                  自己都合
                </p>
              </div>
              <p className='text-center'>
                「会社都合」と「その他」のいずれにも該当しない退職の場合
              </p>
            </div>
            <div className='pb-4'>
              <div className='flex justify-center pb-2'>
                <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary no-animation  font-extrabold'>
                  会社都合
                </p>
              </div>
              <p className='text-center'>倒産/解雇等などでの退職の場合</p>
            </div>
            <div>
              <div className='flex justify-center pb-2'>
                <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary no-animation  font-extrabold'>
                  その他
                </p>
              </div>
              <div className='text-center'>
                <p>疾病/けが/介護/通勤困難など</p>
                <p>正当な理由のある自己都合での退職の場合</p>
                <p className='text-xs'>
                  ※「正当な理由」の詳細は
                  <a
                    className='link'
                    href='https://www.hellowork.mhlw.go.jp/insurance/insurance_range.html'
                  >
                    ハローワークHP
                  </a>
                  を参照
                </p>
              </div>
            </div>
          </div>
        </Modal>

        <Footer></Footer>
      </main>
    </>
  );
}
