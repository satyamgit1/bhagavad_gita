import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="VBR-GaJDEvot2qswTeNcaVlGvqtAUVMrT7Vxqahgzrc" />
        <meta name="yandex-verification" content="f4b4b4b4b4b4b4b4" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}
