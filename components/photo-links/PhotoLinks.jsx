import React from "react";
import Link from "next/link";
import classnames from 'classnames';
import styles from "./PhotoLinks.module.css";

const PhotoLinks = ({ data }) => {
  const lastChildWith = data.length % 2 != 0 ? `${styles.full_width}` : "";
  
  let items = data.map((item, id) => {

    const last = id === (data.length -1);

    return (
      <div tabindex='1' key={`${data.name}${id}`} className={classnames(styles.links_item, last && lastChildWith)}>
        <h2 className={styles.links_item_title}>{item.headerText}</h2>
        <Link href ={`/Page`}>
          <img src={item.imageLink} alt={item.name} />
          </Link>
        
      </div>
    );
  });

  return <div className={styles.photo_links}>{items}</div>;
};

export default PhotoLinks;
