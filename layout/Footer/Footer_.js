import React from 'react'
import styles from './footer.module.css'
import { FaBeer } from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import {SiIndeed} from 'react-icons/si';
import {BsInstagram} from 'react-icons/bs';
import Link from 'next/link';
const Footer_ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topFooter}>
         <h1>OUR NETWORK</h1>
      </div>
      <div className={styles.middleFooter}>
        <h1>DELHI</h1>
        <ul className={styles.locationLinks}>
            <li>THE GYM PITAMPURA</li>
            <li>THE GYM PATEL NAGAR</li>
            <li>THE GYM RAJOURI GARDEN</li>
            <li>THE GYM JANAKPURI</li>
            <li>THE GYM PASCHIM VIHAR</li>
            <li>THE GYM MODEL TOWN</li>
            <li>THE GYM VIKAS PURI</li>
            <li>THE GYM MALVIYA NAGAR</li>
            <li>THE GYM SHALIMAR BAGH</li>
            <li>THE GYM ROHINI, SEC 15</li>
            <li>THE GYM ROHINI, SEC 9</li>
            <li>THE GYM ASHOK VIHAR</li>
            <li>THE GYM KAILASH COLONY</li>
            <li>THE GYM KAROLBAGH</li>
            <li>THE GYM KIRTI NAGAR</li>
            <li>THE GYM DWARKA</li>
        </ul>
        <h1>UTTAR PRADESH</h1>
        <ul className={styles.locationLinks}> 
        <li>THE GYM NOIDA</li>
        <li>THE GYM FARIDABAD</li>
        </ul>
        <h1>HARYANA</h1>
        <ul className={styles.locationLinks}> 
        <li>THE GYM GURUGRAM</li>
        <li>THE GYM SIRSA</li>
        <li>THE GYM KARNAL</li>
        <li>THE GYM ROHTAK</li>
        </ul>
        <h1>PUNJAB</h1>
        <ul className={styles.locationLinks}> 
        <li>THE GYM LUDHIANA</li>
        </ul>
        <h1>UTTRAKHAND</h1>
        <ul className={styles.locationLinks}> 
        <li>THE GYM DEHARDUN</li>
        </ul>
      </div>
      <div className={styles.bottomFooter}>
       <ul className={styles.socialMedia}>
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

export default Footer_
