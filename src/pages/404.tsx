import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { IconContext } from 'react-icons/';

import { FaRegSadTear } from 'react-icons/fa';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/question/header';
import Button from 'src/components/atoms/button';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>
          yametara | 退職後の手続きシミュレーター | ページが見つかりません
        </title>
        <meta
          name='description'
          content='yametaraは会社を辞めた後、すぐに就職しない選択をはじめてする方におすすめの退職後の手続きシミュレーターです。お探しのページは、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。'
        />
      </Head>
      <main className='flex flex-col min-h-screen'>
        <Header />
        <div className='text-center mx-auto max-w-md flex-grow'>
          <IconContext.Provider
            value={{
              className: 'global-class-name mx-auto m-10',
              size: '8em',
            }}
          >
            <FaRegSadTear />
          </IconContext.Provider>
          <div>
            <h1 className='text-2xl'>ページが見つかりません</h1>
            <div className='text-left m-4'>
              <p>
                お探しのページは、一時的にアクセスできない状況にあるか、移動もしくは削除された可能性があります。
                恐れ入りますが、TOPページより改めて該当のページをお探しください。
              </p>
            </div>
          </div>
          <Link href='/'>
            <Button>TOPページへ</Button>
          </Link>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
