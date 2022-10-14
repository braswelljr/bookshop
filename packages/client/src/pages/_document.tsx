import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import clsx from 'clsx'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang="en"
        className={clsx(
          'scroll-smooth bg-white text-neutral-800 dark:bg-neutral-800 dark:text-white'
        )}
      >
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link href="/icons/icon192.png" rel="icon" type="image/png" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <meta name="theme-color" content="#317EFB" />

          <meta name="application-name" content="pee2pee" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="pee2pee" />
          <meta
            name="description"
            content="Open Source peer-to-peer file sharing application"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="pee2pee" />
          <meta
            name="twitter:description"
            content="Open Source peer-to-peer file sharing application"
          />
          <meta
            name="twitter:image"
            content="https://github.com/pee2pee/pee2pee/blob/frontend/web/src/img/folder.png"
          />
          <meta name="twitter:creator" content="open sourcerers" />
          <meta property="og:type" content="GitLab CLI" />
          <meta property="og:title" content="GLab" />
          <meta
            property="og:description"
            content="Open Source peer-to-peer file sharing application"
          />
          <meta property="og:site_name" content="pee2pee" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta
            property="og:image"
            content="https://github.com/pee2pee/pee2pee/blob/frontend/web/src/img/folder.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
