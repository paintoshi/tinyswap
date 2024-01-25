import Head from 'next/head'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { LoadingIndicator } from '../components/LoadingIndicator';
import Script from 'next/script';

const manrope = Manrope({ subsets: ['latin'] })

export const LiFiWidgetNext = dynamic(
  () => import('../components/Widget').then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <LoadingIndicator />,
  },
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TinySwap</title>
        <meta name="description" content="A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="keywords" content="defi, swap, crypto, lifi, li.fi, exchange, metamask" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TinySwap - The Simplest Crypto Swap/Bridge Ever!" />
        <meta name="twitter:image" content="https://tinyswap.app/og.png" />
        <meta name="twitter:domain" content="tinyswap.app" />
        <meta name="twitter:site" content="@paintoshi" />
        <meta name="twitter:creator" content="@paintoshi" />
        <meta
          name="twitter:description"
          content="A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI."
        />

        <meta property="og:title" content="TinySwap - The Simplest Crypto Swap/Bridge Ever!" />
        <meta property="og:description" content="A simple and powerful Cross-chain Swap/Bridge, powered by LI.FI." />
        <meta property="og:image" content="https://tinyswap.app/og.png" />
        <meta property="og:url" content="https://tinyswap.app" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          <h1 className={styles.title}>TinySwap</h1>
          <LiFiWidgetNext />
        </div>
        <a className={styles.githubLink} href="https://github.com/paintoshi/tinyswap" target="_blank" rel="noopener noreferrer"><img src="/github.svg" className={styles.githubImage} alt="Github" /></a>
      </main>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        id="google-tag1"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CYE6KFRLTH`}
      />
      <Script
        strategy="afterInteractive"
        id="google-tag2"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CYE6KFRLTH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Home;