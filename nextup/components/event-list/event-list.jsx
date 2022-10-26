import React from 'react'
import EventListItem from '../event-list-item/event-list-item'
import styles from './event-list.module.css'

const EventList = ({ events }) => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    events.map(ev => (
                        <EventListItem
                            key={ev.eventId}
                            id={ev.eventId} datetime={ev.datetime} location={ev.location}
                            title={ev.title} 
                        />))
                }
            </div>
            <div className='text-center mt-4 '>
                <button className={`btn btn-primary`}>Load more</button>
            </div>
        </div>
    )
}

export default EventList