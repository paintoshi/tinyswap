import Image from "next/image";
import styles from "./page.module.css";
import WidgetContainer from "@/app/components/WidgetContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar} />
      <div className={styles.center}>
        <p className={styles.description}>
          Simple and powerful Cross-chain Swap/Bridge
        </p>
        <WidgetContainer />
      </div>
      <div className={styles.logo}>
        <h1 className={styles.title}>TinySwap</h1>
      </div>
      <a className={styles.githubLink} href="https://github.com/paintoshi/tinyswap" target="_blank" rel="noopener noreferrer"><Image src="/github.svg" className={styles.githubImage} alt="Github" width={32} height={32} /></a>
    </main>
  );
}
