import Head from 'next/head';
import Main from '../components/organisms/index/main';
import Footer from 'src/components/organisms/index/footer';

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
