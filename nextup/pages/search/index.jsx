import React, { useEffect, useState } from 'react'
import styles from './search.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/search-banner.png'
import SearchBar from '../../components/search-bar/search-bar'
import EventCard from '../../components/event-card'
import EventList from '../../components/event-list/event-list'
import HorizontalScroll from '../../components/horizontal-scroll/horizontal-scroll'
import EventCarousel from '../../components/event-carousel/event-carousel'
import eventsApi from '../../common/services/eventsApi'

const SearchPage = () => {

    const [featuredEvents, setFeaturedEvents] = useState([])
    const [upcomingEvents, setUpcomingEvents] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        async function getFeaturedEvents() {
            const featuredEvents = await eventsApi.getFeatured(5)
            console.log(featuredEvents)
            setFeaturedEvents(featuredEvents)
        }

        async function getUpcomingEvents() {
            const upcomingEvents = await eventsApi.all()
            console.log(upcomingEvents)
            setUpcomingEvents(upcomingEvents.items)
        }

        getFeaturedEvents()
        getUpcomingEvents()
    }, [])

    return (
        <div className="offset-app-header">
            <div className={`${styles.container}`}>
                <section className={styles.header}>
                    <div className={styles.banner}>
                        <Image src={bannerImg} height={656} width={1440} layout='fill' />
                    </div>
                    <div className="container  p-4 offset-top-header">
                        <h3 className="h5 color-black">SEARCH FOR EVENTS</h3>
                        <h1 className="h2 color-primary">What is next ?</h1>
                        <div className="mt-4"></div>
                        <SearchBar onItemSelected={text => setSearchText(text)} />
                    </div>
                </section>

                <section className={`d-md-none ${styles.featured}`}>
                    <h2 className="h5 mx-4">Featured events</h2>
                    <HorizontalScroll events={featuredEvents} />
                </section>

                <section className={`container p-4 d-none d-md-block ${styles.featured}`}>
                    <h2 className="h5">Featured events</h2>
                    <EventCarousel events={featuredEvents} />
                </section>
                <section className={`container  p-4 ${styles.events}`}>
                    <h2 className="h5">Events</h2>
                    <p className="body">All upcoming events</p>
                    <div className="mt-4"></div>
                    <EventList events={upcomingEvents} />
                </section>
            </div>
        </div>
    )
}

export default SearchPage