import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
