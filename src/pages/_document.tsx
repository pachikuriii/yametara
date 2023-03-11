import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ja'>
      <Head prefix='og:http://ogp.me/ns#'>
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:title'
          content='yametara｜退職後の社会保険や税金の手続き内容をシミュレーション'
        />
        <meta
          property='og:description'
          content='yametaraは会社を辞めた後、すぐに就職しない選択をはじめてする方におすすめの退職後の手続きシミュレーターです。いくつかの質問に答えるだけで会社を辞めた後に必要な手続きを一括で把握することができます。'
        ></meta>
        <meta property='og:url' content='https://www.yametara.com/'></meta>
        <meta
          property='og:image'
          content='https://www.yametara.com/yametara-ogp.png'
        ></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:site_name' content='yametara'></meta>
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='pachikuriii'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body className='text-gray-800 bg-emerald-50 leading-relaxed tracking-wide'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
