import React from 'react'
import styles from './footer.module.css'
import { FaBeer } from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {SiIndeed} from 'react-icons/si';
import {BsInstagram} from 'react-icons/bs';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topFooter}>
         <h1>OUR NETWORK</h1>
      </div>
      <div className={styles.middleFooter}>
       
      </div>
      <div className={styles.bottomFooter}>
       <ul>
         <li>
         <AiOutlineFacebook/>
         </li>
         <li>
         <AiOutlineYoutube/>
         </li>
         <li>
          <SiIndeed/>
         </li>
         <li>
          <BsInstagram/>
         </li>
       </ul>
       <p>The Gym © 2019 Tucson Fitness Pvt. Ltd.</p>
      </div>
    </div>
  )
}

export default Footer
