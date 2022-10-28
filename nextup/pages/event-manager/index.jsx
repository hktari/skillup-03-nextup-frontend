import React from 'react'
import styles from './event-manager.module.css'
import EventList from '../../components/event-list/event-list'
import { useRef, useState, useEffect } from 'react'
import eventsApi from '../../common/services/eventsApi'
import usersApi from '../../common/services/usersApi'
import { useAuth } from '../../components/providers/authProvider'
import AddEventComponent from '../../components/add-event/add-event'

const EventManagerPage = () => {
  
    const [addedEvents, setAddedEvents] = useState([])
    const { state: { user } } = useAuth()

    useEffect(() => {
        async function getEvents() {
            try {
                console.log('retrieving user events')
                const events = await usersApi.getUpcomingEvents()
                console.log(events)
                setAddedEvents(events.items)
            } catch (error) {
                console.error(error)
            }
        }

        getEvents()
    }, [user])
    return (
        <div className="bg-alt pt-5 px-4 px-md-0">
            <div className="container offset-app-header">
                <div style={styles.container}>
                    <section className={styles.add}>
                        <AddEventComponent />
                    </section>
                    <section className={`mt-5 ${styles.events}`}>
                        <h2 className="h4 color-black">Added events</h2>
                        <EventList events={addedEvents} />
                    </section>
                </div>
            </div>
        </div >
    )
}

export default EventManagerPage