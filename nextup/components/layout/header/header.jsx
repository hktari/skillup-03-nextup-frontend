import React, { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)

    return (
        <>
            <div className={`container d-none d-md-block`}>
                <div className={styles.container}>
                    <img className={styles.logo} src='/logo.svg' />

                    <nav className={styles.nav}>
                        <ul className='body'>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/search'}>Search</Link>
                            </li>

                            <li hidden={!loggedIn}>
                                <Link href={'/event-manager'}>Event Manager</Link>
                            </li>
                        </ul>
                    </nav>
                    <div hidden={loggedIn} className={styles.buttons}>
                        <button className="btn">Login</button>
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div hidden={!loggedIn} className={styles.buttons}>
                        <button className="btn">Logout</button>
                        <button className="btn-circle color-white"><i className="bi bi-person-circle"></i></button>
                    </div>
                </div>
            </div>

            <div className={`d-md-none ${styles.container}`}>
                <img className={styles.logo} src='/logo.svg' />
                <button className={`btn ${styles['menu-btn']}`}><img src="/menu-button.svg" alt="menu button" /></button>
            </div>
        </>

    )
}

export default Header