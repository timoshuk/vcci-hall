import React from 'react'
import Link from 'next/link'
import styles from "./PhotoLinks.module.css"

const PhotoLinks = ({data})=> {

let items = data.forEach((item)=>{
      return(
          <div className={styles.links_item}>
              
              <Link href={`/Page/:${item.name}`}>
              <img src={item.imageLink} alt={item.name}/>
              </Link>
          </div>
      )  
    });

   

    return (
        <div className={styles.photo_links}>
            asdsfg
            {console.log(items)}
        </div>
    )
}

export default PhotoLinks
