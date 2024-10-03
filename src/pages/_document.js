import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta name="google-site-verification" content="VBR-GaJDEvot2qswTeNcaVlGvqtAUVMrT7Vxqahgzrc" />
        <meta name="yandex-verification" content="f4b4b4b4b4b4b4b4" />
        
        {/* PWA Configuration */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" /> {/* Adjust your theme color */}
        
        {/* Add any other custom head elements here */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
