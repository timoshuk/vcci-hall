import Head from "next/head";
import Image from "next/image";
import Button from "react-bootstrap/Button";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Оренда конференц-залу</title>
      </Head>
      <div className={styles.main_content}>
        <h1>Орендувати</h1>
        <h3>конференц-зал у м.Луцьк</h3>
        <Button
          href="tel:+380506665008"
          className={`my-5 py-3 px-4 ${styles.btn_tel}`}
        >
          тел: +38 (050) 66-65-008
        </Button>
      </div>
      <Image
        className={styles.img_bg}
        src="/images/main_bg.jpg"
        alt="Picture of the author"
        layout="fill"
      />
    </>
  );
}
