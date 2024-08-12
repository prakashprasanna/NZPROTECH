import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQ0H1RLLHD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQ0H1RLLHD');
            `,
          }}
        />
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-THFM3QZM"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
