import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import styles from "../styles/PhotoLinks.module.css";

const PhotoLinks = ({ data }) => {
  const lastChildWith = data.length % 2 != 0 ? `${styles.full_width}` : "";

  let items = data.map((item, id) => {
    const last = id === data.length - 1;

    return (
      <Link
        key={`${item.name}${id}`}
        href="/view/[id]"
        as={`/view/${item.name}`}
      >
        <div className={classnames(styles.links_item, last && lastChildWith)}>
          <h2 className={styles.links_item_title}>{item.headerText}</h2>
          <Image src={item.imageLink} alt={item.name} layout="fill" />
        </div>
      </Link>
    );
  });

  return <div className={styles.photo_links}>{items}</div>;
};

export default PhotoLinks;
