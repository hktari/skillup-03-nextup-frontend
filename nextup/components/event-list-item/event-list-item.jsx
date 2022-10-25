import React from 'react'
import styles from './event-list-item.module.css'

const EventListItem = ({ id, datetime, title, location }) => {
    return (
        <div key={id} className={`${styles.container}`}>
            <div className={styles.left}>
                <div className='body'>
                    <span className={`bold ${styles.title}`}>1.Aug</span>
                    <br />
                    <span className=''>Fri. 22:00</span>
                </div>
            </div>
            <div className={styles.middle}>
                <div className="body">
                    <h5 className={styles.title}>Hawaii with Maii on beach Twixie</h5>
                    <span>1901 Thornridge, Hawaii 81063</span>
                </div>
            </div>
            <div className={styles.right}>
                <button className={`btn btn-primary ${styles.check}`}>Check</button>
            </div>
        </div>
    )
}

export default EventListItem