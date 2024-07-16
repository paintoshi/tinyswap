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
        <Widget />
      </div>
      <a className={styles.githubLink} href="https://github.com/paintoshi/tinyswap" target="_blank" rel="noopener noreferrer"><Image src="/github.svg" className={styles.githubImage} alt="Github" width={32} height={32} /></a>
    </main>
  );
}
