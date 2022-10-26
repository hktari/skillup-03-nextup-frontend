import React from 'react'
import { format } from 'date-fns'
import styles from './event-card.module.css'
import Link from 'next/link'

const EventCard = ({ id, imageUrl, title, datetime, location, maxUsers }) => {

    return (
        <Link href={`/event/${id}`}>
            <div className={styles.container}>
                <img className={styles.img} src={imageUrl} alt={title} />
                <div className={styles.content}>
                    <h2 className={`h3 ${styles.title}`}>
                        {title}
                    </h2>
                    <p className={`body ${styles.datetime}`}>
                        {datetime ? format(datetime, 'd-m-yy, HH:MM') : '-'}
                    </p>

                    <div className={styles.footer}>
                        <div className={styles.location}>
                            <i className="bi bi-geo-alt-fill color-primary"></i><span className='body color-black'>{location}</span>
                        </div>
                        <div className={styles['max-users']}>
                            <i className="bi bi-person-fill color-primary"></i>
                            <span>{maxUsers}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard