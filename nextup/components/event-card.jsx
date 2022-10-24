import React from 'react'
import { format } from 'date-fns'
import styles from './event-card.module.css'

const EventCard = ({ imageUrl, title, datetime, location, maxUsers }) => {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt={title} />
            <div className={styles.content}>
                <h2 className={`h3 ${styles.title}`}>
                    {title}
                </h2>
                <p className={`body ${styles.datetime}`}>{format(datetime, 'd-m-yy, HH:MM')}</p>

                <div className={styles.footer}>
                    <div className={styles.location}>
                        <i class="bi bi-geo-alt-fill color-primary"></i><span className='body color-black'>{location}</span>
                    </div>
                    <div className={styles['max-users']}>
                        <i class="bi bi-person-fill color-primary"></i>
                        <span>{maxUsers}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard