import React from 'react'
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src='/logo.svg' />
            <div className="d-md-none">
                <button className={`btn ${styles['menu-btn']}`}><img src="/menu-button.svg" alt="menu button" /></button>
            </div>
            <div className="buttons"></div>
        </div>
    )
}

export default Header