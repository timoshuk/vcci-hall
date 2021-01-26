import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Оренда залу</title>
        <link rel="icon" href="/images/cropped-BoockmaskLogo-32x32.png" />
      </Head>

      <main>
        <h1>Orenda Zall</h1>
      </main>
    </div>
  );
}
