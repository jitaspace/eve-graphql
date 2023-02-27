import { createStylesServer, ServerStyles } from '@mantine/next';
import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';

const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
