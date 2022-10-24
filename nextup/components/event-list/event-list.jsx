import React from 'react'
import EventListItem from '../event-list-item/event-list-item'
import styles from './event-list.module.css'

const EventList = () => {
    const items = [0, 1, 2, 3, 4]
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    items.map(i => <EventListItem />)
                }
            </div>
            <div className='text-center mt-4 '>
                <button className={`btn btn-primary`}>Load more</button>
            </div>
        </div>
    )
}

export default EventList