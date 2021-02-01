import Head from "next/head";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./layout.module.css";

export default function Layout({ children, head }) {
  return (
    <div>
      <Head>
        <title>{head}</title>
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
              <Link href="/Views" passHref>
                <Nav.Link>Варіанти розстановки</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Container fluid>
        <main>{children}</main>
      </Container>
    </div>
  );
}
