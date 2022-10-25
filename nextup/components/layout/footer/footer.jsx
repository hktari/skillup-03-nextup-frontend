import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <img className={styles.logo} src='logo.svg' />
        <small className={`h5 color-primary ${styles.text}`}>All Rights Reserved | skillupmentor.com</small>
      </div>
    </footer>
  )
}

export default Footer