import Head from 'next/head'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'
/* eslint-disable import/no-default-export */
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { LoadingIndicator } from '../components/LoadingIndicator';

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
        <meta name="description" content="A simple but powerful DeFi Swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <div className={styles.center}>
          <h1 className={styles.title}>TinySwap</h1>
          <p className={styles.sub}>
            Tiny But Powerful! <br />
            Hosted & Maintained by <a href="https://github.com/paintoshi/tinyswap">Paintoshi</a>
          </p>
          <LiFiWidgetNext />
        </div>
      </main>
    </>
  );
};

export default Home;