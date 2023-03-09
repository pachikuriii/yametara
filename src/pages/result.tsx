import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/';
import { AiOutlineReload } from 'react-icons/ai';
import { FaRegSadTear } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useSetRecoilState } from 'recoil';
import Modal from '../components/atoms/modal';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/question/header';
import DataInput from '../components/organisms/result/data-input';
import EmploymentInsurance from '../components/organisms/result/employment-insurance';
import HealthlInsurance from '../components/organisms/result/health-insurance';
import Pension from '../components/organisms/result/pension';
import Tax from '../components/organisms/result/tax';
import Todo from '../components/organisms/result/todo';
import {
  isNextButtonClicked,
  isBackButtonClicked,
} from 'src/motion-controller';
import { STORAGE_KEYS } from 'src/session-stroage';

export default function Home() {
  const [completed, setCompleted] = useState(false);
  const setNextButtonClicked = useSetRecoilState(isNextButtonClicked);
  const setBackButtonClicked = useSetRecoilState(isBackButtonClicked);
  useEffect(() => {
    const storage = JSON.parse(sessionStorage.getItem('yametara') || '[]');
    for (let key of STORAGE_KEYS) {
      if (!Object.keys(storage).includes(key)) {
        break;
      }
      setCompleted(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | シミュレーション結果
        </title>
      </Head>
      <main>
        <Header title='シミュレーション結果' />
        {completed ? (
          <div>
            <label
              htmlFor='given_choices'
              className='md:w-50 md:p-4 border-r-0 max-sm:text-sm text-accent bg-white border-4  border-primary fixed right-0 md:top-10 max-sm:bottom-6 font-extrabold rounded-l-full z-50'
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
                  あなたの手続き内容の詳細
                </h3>
                <HealthlInsurance></HealthlInsurance>
                <Pension></Pension>
                <EmploymentInsurance></EmploymentInsurance>
                <Tax></Tax>
              </div>
            </div>
            <div className='flex justify-evenly pt-10 pb-20'>
              <Link href='questions/8'>
                <button
                  className='btn text-accent bg-white rounded-full  border-primary border-2  font-extrabold shadow-select no-animation hover:border-primary-focus hover:bg-primary-focus'
                  onClick={() => {
                    setBackButtonClicked(true);
                    setNextButtonClicked(false);
                  }}
                >
                  <IconContext.Provider
                    value={{ className: 'global-class-name', size: '1.2em' }}
                  >
                    <span className='pr-1'>
                      <IoMdArrowRoundBack />
                    </span>
                  </IconContext.Provider>
                  戻る
                </button>
              </Link>
              <Link href='questions/1'>
                <button className='btn text-accent bg-white rounded-full  border-primary border-2  font-extrabold shadow-select no-animation hover:border-primary-focus hover:bg-primary-focus'>
                  <IconContext.Provider
                    value={{ className: 'global-class-name', size: '1.2em' }}
                  >
                    <span className='pr-1'>
                      <AiOutlineReload />
                    </span>
                  </IconContext.Provider>
                  もう1度シミュレーションする
                </button>
              </Link>
            </div>
            <Footer></Footer>
          </div>
        ) : (
          <div>
            <p>全ての質問に回答していないようです。</p>
            <IconContext.Provider
              value={{ className: 'global-class-name', size: '5em' }}
            >
              <span className='pr-1'>
                <FaRegSadTear />
              </span>
            </IconContext.Provider>
            <Link href='questions/1'>
              <button className='btn text-accent bg-white rounded-full  border-primary border-2  font-extrabold shadow-select no-animation hover:border-primary-focus hover:bg-primary-focus'>
                <IconContext.Provider
                  value={{ className: 'global-class-name', size: '1.2em' }}
                >
                  <span className='pr-1'>
                    <AiOutlineReload />
                  </span>
                </IconContext.Provider>
                もう1度シミュレーションする
              </button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
