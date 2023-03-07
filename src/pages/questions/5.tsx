import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/organisms/question/footer';
import Header from '../../components/organisms/question/header';
import Q5 from '../../components/organisms/question/q5';
import Card from 'src/components/atoms/card';
import Modal from 'src/components/atoms/modal';
import Motion from 'src/components/atoms/motion';
import AnswerProgressBar from 'src/components/atoms/progress-bar';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | 雇用保険について
        </title>
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header>
          <p>Q5.雇用保険について</p>
          <p className='text-sm'>【選択してください】</p>
        </Header>
        <div className='flex-grow'>
          <AnswerProgressBar></AnswerProgressBar>
          <Motion>
            <Card>
              <Q5></Q5>
            </Card>
          </Motion>
        </div>
        <Modal id='how-to-count-emp-period'>
          <div className='w-full bg-primary'>
            <h2 className='text-white text-xl text-center py-2 font-extrabold'>
              被保険者期間の数え方について
            </h2>
          </div>
          <div className='px-6 py-6'>
            <p className='pb-4'>
              以下のいずれかに当てはまる場合は、それまでのすべての雇用保険の被保険者期間はカウントに含めないでください。
            </p>
            <ul>
              <div className='pb-4'>
                <div className='flex justify-center pb-2'>
                  <p className='text-accent'>
                    ・雇用保険の被保険者でない状態が1年以上続いたことがある場合
                  </p>
                </div>
                <Image
                  src='/employment-insurance/not-count-over-year.svg'
                  alt='logo'
                  width='400'
                  height='100'
                  className='mx-auto pb-4'
                />
                <Image
                  src='/employment-insurance/count.svg'
                  alt='logo'
                  width='400'
                  height='100'
                  className='mx-auto'
                />
              </div>

              <div>
                <div className='flex justify-center pb-2'>
                  <p className='text-accent '>
                    ・雇用保険の被保険者でなくなったのち、失業手当の受給を受けたことがある場合
                  </p>
                </div>
                <Image
                  src='/employment-insurance/not-count-paid.svg'
                  alt='logo'
                  width='400'
                  height='100'
                  className='mx-auto'
                />
              </div>
            </ul>
          </div>
        </Modal>
        <Footer></Footer>
      </main>
    </>
  );
}
