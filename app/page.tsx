import Image from "next/image";
import styles from "./page.module.css";
import { Widget } from "@/app/components/Widget";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={styles.title}>TinySwap</h1>
        <p className={styles.description}>
          Simple and powerful Cross-chain Swap/Bridge
        </p>
        <p className={styles.description}>
          <strong>An exploit being <a href="https://x.com/lifiprotocol/status/1813207291778215955" target="_blank" rel="noopener noreferrer">investigated</a> by the Li.Fi team.</strong><br/><br/>
          If you set unlimited approval for any of the following on any chain, please revoke them at <a href="https://revoke.cash/" target="_blank" rel="noopener noreferrer">revoke.cash</a><br/><br/>
          0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae<br/>
          0x341e94069f53234fE6DabeF707aD424830525715<br/>
          0xDE1E598b81620773454588B85D6b5D4eEC32573e<br/>
          0x24ca98fB6972F5eE05f0dB00595c7f68D9FaFd68<br/><br/>
          The Li.Fi widget has been disabled for now.
        </p>
        {/**
          <Widget />
         */}
      </div>
      <a className={styles.githubLink} href="https://github.com/paintoshi/tinyswap" target="_blank" rel="noopener noreferrer"><Image src="/github.svg" className={styles.githubImage} alt="Github" width={32} height={32} /></a>
    </main>
  );
}
