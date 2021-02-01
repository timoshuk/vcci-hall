import React from "react";
import Link from "next/link";
import styles from "./PhotoLinks.module.css";

const PhotoLinks = ({ data }) => {
  let items = data.map((item, id) => {
    return (
      <div key={`${data.name}${id}`} className={styles.links_item}>
        <Link href={`/Page`}>
          <img src={item.imageLink} alt={item.name} />
        </Link>
      </div>
    );
  });

  return <div className={styles.photo_links}>{items}</div>;
};

export default PhotoLinks;
