import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/images/cropped-BoockmaskLogo-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Оренда конференц-залу у Луцьку" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-navbutton-color" content="#000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
      </Head>
      <Container>
        <Navbar
          variant="dark"
          expand="md"
          collapseOnSelect={true}
          className={styles.nav}
        >
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
      <Container className="p-0" fluid>
        <main className={styles.main_content}>{children}</main>
      </Container>
    </div>
  );
}
