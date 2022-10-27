import React from 'react'
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src='/logo.svg' />
            <div className="buttons"></div>
        </div>
    )
}

export default Header