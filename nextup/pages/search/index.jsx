import React, { useState } from 'react'
import styles from './search.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/search-banner.png'
import SearchBar from '../../components/search-bar/search-bar'
import EventCard from '../../components/event-card'
import EventList from '../../components/event-list/event-list'
import HorizontalScroll from '../../components/horizontal-scroll/horizontal-scroll'
import EventCarousel from '../../components/event-carousel/event-carousel'
const SearchPage = () => {

    const [featuredEvents, setFeaturedEvents] = useState([1, 2, 3])


    return (
        <div className={`${styles.container}`}>
            <section className={styles.header}>
                <div className={styles.banner}>
                    <Image src={bannerImg} height={656} width={1440} layout='fill' />
                </div>
                <div className="container  p-4 offset-top-header">
                    <h3 className="h5 color-black">SEARCH FOR EVENTS</h3>
                    <h1 className="h2 color-primary">What is next ?</h1>
                    <div className="mt-4"></div>
                    <SearchBar />
                </div>
            </section>
            <section className={`container p-4 ${styles.featured}`}>
                <h2 className="h5">Featured events</h2>
                <div className="d-md-none">
                    <HorizontalScroll events={featuredEvents} />
                </div>
                <div className="d-none d-md-block">
                    <EventCarousel />
                </div>
            </section>
            <section className={`container  p-4 ${styles.events}`}>
                <h2 className="h5">Events</h2>
                <p className="body">All upcoming events</p>
                <div className="mt-4"></div>
                <EventList />
            </section>
        </div>
    )
}

export default SearchPage