import React from 'react'
import styles from './banner.module.css';
import Image from 'next/image';
const Banner = (props) => {
    // const imgUrl = props.imgUrl;//./about.jpg
    const {imgUrl} = props;
console.log(imgUrl)
return (
    <div className={styles.imageContainer}>
        <Image
          src={imgUrl}
          alt="navjot is hero"
          width={3000}
          height={100}
        ></Image>
      </div>
)
}

export default Banner;
