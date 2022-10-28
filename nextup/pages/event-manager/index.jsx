import React from 'react'
import styles from './event-manager.module.css'
import EventList from '../../components/event-list/event-list'
import { useState, useEffect } from 'react'
import eventsApi from '../../common/services/eventsApi'
import usersApi from '../../common/services/usersApi'
import { useAuth } from '../../components/providers/authProvider'

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
                        <h2 className="h4 color-black">Add event</h2>
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">Event name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label for="location" className="form-label">Location</label>
                                <input type="text" className="form-control" id="location" />
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-4">
                                    <div>
                                        <label for="date" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="date" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <label for="time" className="form-label">Hour</label>
                                        <input type="time" className="form-control" id="time" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <label for="max_users" className="form-label">Max users</label>
                                        <input type="number" className="form-control" id="max_users" />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-dark w-100">Add image</button>
                            <button className="btn btn-primary w-100 mt-3 mt-md-0">Submit</button>
                        </form>
                    </section>
                    <section className={styles.events}>
                        <h2 className="h4 color-black">Add event</h2>
                        <EventList events={addedEvents} />
                    </section>
                </div>
            </div>
        </div >
    )
}

export default EventManagerPage