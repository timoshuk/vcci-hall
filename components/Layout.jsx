import Head from "next/head";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.page}>
      <Head>
        <link rel="icon" href="/images/cropped-BoockmaskLogo-32x32.png" />
        <meta name="description" content="Оренда конференц-залу у Луцьку" />
      </Head>
      <Container>
        <Navbar variant="dark" expand="md" className={styles.nav}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Головна</Nav.Link>
              </Link>
              <Link href="/Version" passHref>
                <Nav.Link>Варіанти розстановки</Nav.Link>
              </Link>
              <Link href="/Presentation" passHref>
                <Nav.Link>Презентація</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container fluid>
        <main className={styles.main_content}>{children}</main>
      </Container>
    </div>
  );
}
