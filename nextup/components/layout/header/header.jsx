import React, { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import { useAuth } from '../../providers/authProvider'
import { useRouter } from 'next/router'

const Header = () => {
    const { state: { user }, actions: { logout } } = useAuth()
    const router = useRouter()

    function loggedIn() {
        // cast object to boolean
        return !!user
    }

    return (
        <>
            <div className={`container d-none d-md-block ${styles.container}`}>
                <img className={styles.logo} src='/logo.svg' />

                <nav className={styles.nav}>
                    <ul className='body'>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/search'}>Search</Link>
                        </li>

                        <li hidden={!loggedIn()}>
                            <Link href={'/event-manager'}>Event Manager</Link>
                        </li>
                    </ul>
                </nav>
                <div hidden={loggedIn()} className={styles.buttons}>
                    <button onClick={() => router.push('/login')} className="btn">Login</button>
                    <button onClick={() => router.push('/signup')} className="btn btn-primary">Sign up</button>
                </div>
                <div hidden={!loggedIn()} className={styles.buttons}>
                    <button onClick={() => {
                        logout()
                        router.push('/')
                    }}
                        className="btn">Logout</button>
                    <button
                        onClick={() => {
                            router.push('/profile')
                        }}
                        className={`btn-circle color-white ${styles.avatar}`}>
                        <i className="bi bi-person-circle"></i>
                        <img src={user?.imageUrl} alt={user?.firstName} />
                    </button>
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