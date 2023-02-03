import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='yametaraは会社を辞めた後、すぐに就職しない選択をはじめてする方におすすめの退職後の手続きシミュレーターです。いくつかの質問に答えるだけで会社を辞めた後に必要な手続きを一括で把握することができます。'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className='bg-emerald-400 text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
