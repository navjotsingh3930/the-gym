import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
      <div className={styles.Container}>
        <div className={styles.logoContainer}>
          <Image src={'/thegym-logo.jpg'} alt='jaspreet is hero' width={500} height={500}/>
        </div>
        <ul className={styles.links}>
          <li>
            <Link href={'/'}>HOME</Link>
          </li>
          <li>
            <Link href={'/about'}>ABOUT</Link>
          </li>
          <li>
            <Link href={'/find_the_gym'}>FIND THE GYM</Link>
          </li>
          <li>
            <Link href={'/classes'}>CLASSES</Link>
          </li>
          <li>
            <Link href={'/membership'}>MEMBERSHIP</Link>
          </li>
          <li>
            <Link href={'/franchise'}>FRANCHISE</Link>
          </li>
          <li>
            <Link href={'/faq'}>FAQ</Link>
          </li>
          <li>
            <Link href={'/contact'}>CONTACT</Link>
          </li>
        </ul>
      </div>
  )
}

export default Header
