import React from 'react'
import styles from './search.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/search-banner.png'
import SearchBar from '../../components/search-bar/search-bar'
import EventCard from '../../components/event-card'
import EventList from '../../components/event-list/event-list'

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
            <section className={`p-4 ${styles.featured}`}>
                <h2 className="h5">Featured events</h2>
                horizontal scroll
                <div className="horizontal-scroll">
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100}
                    />
                </div>
            </section>
            <section className={`p-4 ${styles.events}`}>
                <h2 className="h5">Events</h2>
                <p className="body">All upcoming events</p>
                <div className="mt-4"></div>
                <EventList />
            </section>
        </div>
    )
}

export default SearchPage