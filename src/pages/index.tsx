import Head from 'next/head';
import Footer from '../components/organisms/index/footer';
import Main from '../components/organisms/index/main';

export default function Home() {
  return (
    <>
      <Head>
        <title>yametara | 退職後の手続きシミュレーター</title>
      </Head>
      <main className='text-center leading-relax tracking-wide'>
        <Main></Main>
        <Footer></Footer>
      </main>
    </>
  );
}
