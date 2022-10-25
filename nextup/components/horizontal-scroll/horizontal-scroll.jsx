import React from 'react'
import EventCard from '../event-card'
import styles from './horizontal-scroll.module.css'

const HorizontalScroll = ({ events }) => {

    return (
        <div className={styles.container}>
            {events.map(ev => (<EventCard
                imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                datetime={new Date()}
                title='Partiy with Eminem'
                location={'6391 Elgin St. Celina, Delaware'}
                maxUsers={100}
            />))}

        </div>
    )
}

export default HorizontalScroll