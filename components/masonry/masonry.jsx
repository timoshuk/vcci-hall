import { Masonry } from "masonic";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    href: "",
    title: "",
    imgLink: "",
    imgAlt: "",
  },
];

import styles from "masonry.module.css";

const Masonry = (props) => <Masonry items={items} render={MasonryCard} />;

const MasonryCard = ({ href, title, imgLink, imgAlt }) => (
  <Link href={href}>
    <div>{title}</div>
    <Image src={imgLink} alt="Picture of the author" layout="fill" />
  </Link>
);

export default Masonry;
