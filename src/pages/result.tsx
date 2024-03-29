import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/';
import { AiOutlineReload } from 'react-icons/ai';
import { FaRegSadTear } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useSetRecoilState } from 'recoil';
import Modal from '../components/atoms/modal';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/question/header';
import EmploymentInsurance from '../components/organisms/result/employment-insurance';
import HealthlInsurance from '../components/organisms/result/health-insurance';
import Pension from '../components/organisms/result/pension';
import Tax from '../components/organisms/result/tax';
import Todo from '../components/organisms/result/todo';
import Button from 'src/components/atoms/button';
import Loading from 'src/components/atoms/loading';
import {
  isNextButtonClicked,
  isBackButtonClicked,
} from 'src/storage/motion-controller';
import { STORAGE_KEYS } from 'src/storage/session-stroage';
const DataInput = dynamic(
  () => import('../components/organisms/result/data-input'),
  {
    loading: () => <Loading />,
    ssr: false,
  },
);

export default function Result() {
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const setNextButtonClicked = useSetRecoilState(isNextButtonClicked);
  const setBackButtonClicked = useSetRecoilState(isBackButtonClicked);
  const router = useRouter();
  useEffect(() => {
    router.isReady && setIsLoading(false);
    const storage = JSON.parse(sessionStorage.getItem('yametara') || '[]');
    for (let key of STORAGE_KEYS) {
      if (!Object.keys(storage).includes(key)) {
        break;
      }
      setCompleted(true);
    }
  }, [router.isReady]);

  return (
    <>
      <>
        <Head>
          <title>
            yametara | 退職後の手続きシミュレーター | シミュレーション結果
          </title>
          <meta
            name='description'
            content='yametaraは会社を辞めた後、すぐに就職しない選択をはじめてする方におすすめの退職後の手続きシミュレーターです。シミュレーション結果を参考に退職後のスケジュールを考えてみましょう。'
          />
        </Head>
        <main className='flex flex-col min-h-screen'>
          <Header title='シミュレーション結果' />
          {isLoading ? (
            <div className='h-screen w-screen flex justify-center items-center'>
              <Loading />
            </div>
          ) : (
            <>
              {completed ? (
                <div className='mx-auto max-w-md flex-grow'>
                  <label
                    htmlFor='given_choices'
                    className='md:w-50 md:p-4 border-r-0 max-sm:text-sm text-accent bg-white border-4 border-primary fixed right-0 md:top-10 max-sm:bottom-6 font-extrabold rounded-l-full z-50 cursor-pointer'
                    id='input-confirmation-button'
                  >
                    <p className='m-4'>
                      <span className='max-sm:block'>あなたの</span>入力内容
                    </p>
                  </label>
                  <Modal id='given_choices'>
                    <DataInput />
                  </Modal>
                  <div className='mx-auto w-11/12' id='todo-container'>
                    <div className='mx-auto w-11/12'>
                      <Todo></Todo>
                      <h3 className='text-center font-extrabold text-2xl'>
                        手続き内容の詳細
                      </h3>
                      <HealthlInsurance></HealthlInsurance>
                      <Pension></Pension>
                      <EmploymentInsurance></EmploymentInsurance>
                      <Tax></Tax>
                    </div>
                  </div>
                  <div className='mx-auto w-9/12 flex flex-col space-y-4 pt-10 pb-20'>
                    <Link href='questions/8'>
                      <button
                        className='btn border-2 border-primary-focus text-secondary rounded-full w-full bg-transparent hover:bg-secondary hover:text-white hover:border-secondary font-extrabold'
                        onClick={() => {
                          setBackButtonClicked(true);
                          setNextButtonClicked(false);
                        }}
                      >
                        <IconContext.Provider
                          value={{
                            className: 'global-class-name',
                            size: '1.2em',
                          }}
                        >
                          <span className='pr-1'>
                            <IoMdArrowRoundBack />
                          </span>
                        </IconContext.Provider>
                        1つ前の質問へ戻る
                      </button>
                    </Link>
                    <Link href='questions/1'>
                      <Button>
                        <IconContext.Provider
                          value={{
                            className: 'global-class-name',
                            size: '1.2em',
                          }}
                        >
                          <span className='pr-1'>
                            <AiOutlineReload />
                          </span>
                        </IconContext.Provider>
                        もう1度シミュレーションする
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='text-center mx-auto max-w-md flex-grow my-10'>
                  <IconContext.Provider
                    value={{
                      className: 'global-class-name mx-auto mb-10',
                      size: '8em',
                    }}
                  >
                    <FaRegSadTear />
                  </IconContext.Provider>
                  <div>
                    <h2 className='text-xl'>
                      全ての質問に回答していないようです
                    </h2>
                    <div className='text-left m-4'>
                      <p>
                        質問への回答が完了していないため、結果を表示することが出来ません。
                        恐れ入りますがTOPページの「はじめる」のボタンを押して、はじめから全ての質問への回答をお願いいたします。
                      </p>
                    </div>
                    <Link href='/'>
                      <Button>TOPページへ</Button>
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
          <Footer></Footer>
        </main>
      </>
    </>
  );
}
