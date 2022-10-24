import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <Image src={'/logo.svg'} width={40} height={40} /> */}

      <small className='h5 color-primary'>All Rights Reserved | skillupmentor.com</small>
    </div>
  )
}

export default Footer