import React from 'react'
import styles from './search.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/search-banner.png'
import SearchBar from '../../components/search-bar/search-bar'

const SearchPage = () => {
    return (
        <div className={styles.container}>
            <section className={styles.header}>
                <div className={styles.banner}>

                    <Image src={bannerImg} height={656} width={1440} layout='fill' />
                </div>
                <div className="p-4 offset-top-header">
                    <h3 className="h5 color-black">SEARCH FOR EVENTS</h3>
                    <h1 className="h2 color-primary">What is next ?</h1>
                    <div className="mt-4"></div>
                    <SearchBar />
                </div>
            </section>
            <section className={styles.featured}></section>
            <section className={styles.events}></section>
        </div>
    )
}

export default SearchPage