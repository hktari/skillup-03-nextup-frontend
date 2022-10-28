import React from 'react'
import styles from './event-list-item.module.css'
import Link from 'next/link'

const EventListItem = ({ id, datetime, title, location, canEdit = false }) => {

    function getFormattedDate(datetime) {
        if (!datetime) {
            return '-'
        }

        // format: Oct.28
        const date = datetime.toDateString().substr(4, 6)
        const [weekDay, day] = date.split(' ')
        return `${day}.${weekDay}`
    }

    function getFormattedTime(datetime) {
        if (!datetime) {
            return '-'
        }

        // format: Fri. 22:00
        const dayOfWeek = datetime.toString().substr(0, 3);
        const time24hr = datetime.toString().substr(16, 5);

        return `${dayOfWeek}. ${time24hr}`
    }



    return (
        <div key={id} className={`${styles.container}`}>
            <div className={styles.left}>
                <div className='body'>
                    <span className={`bold ${styles.title}`}>{getFormattedDate(datetime)}</span>
                    <br />
                    <span className='mt-1'>{getFormattedTime(datetime)}</span>
                </div>
            </div>
            <div className={styles.middle}>
                <div className="body">
                    <h5 className={styles.title}>{title}</h5>
                    <span>{location}</span>
                </div>
            </div>
            <div className={styles.right}>
                {
                    canEdit ?
                        (<button className={`btn btn-primary btn-icon`}>
                            <i class="bi bi-gear-fill"></i>
                        </button>) :
                        (<Link href={`/event/${id}`}>
                            <button className={`btn btn-primary ${styles.check}`}>Check</button>
                        </Link>)

                }
            </div>
        </div>
    )
}

export default EventListItem