import Layout from "../components/layout";
import Image from "next/image"
import Button from "react-bootstrap/Button"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Layout head="Оренда конференц-залу">


      <div className={styles.main_content}>
        <h1 >Орендувати</h1>
        <h3>конференц-зал у м.Луцьк</h3>
        <Button href="tel:+380509528247" className={`my-5 py-3 px-4 ${styles.btn_tel}`}>тел: 0509528247</Button>

      </div>
      <Image
        src="/images/main_bg.jpg"
        alt="Picture of the author"
        layout="fill"
      />

    </Layout>
  );
}
