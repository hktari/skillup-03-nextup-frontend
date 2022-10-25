import React from 'react'
import EventCard from '../event-card'
import styles from './horizontal-scroll.module.css'

const HorizontalScroll = ({ events }) => {

    return (
        <div className={styles.container}>
            {events.map(ev =>
            (<EventCard
                key={ev.eventId}
                imageUrl={ev.imageUrl}
                datetime={ev.datetime}
                title={ev.title}
                location={ev.location}
                maxUsers={ev.max_users}
            />))}

        </div>
    )
}

export default HorizontalScroll