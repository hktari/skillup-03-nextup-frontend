import React from 'react'
import styles from './event-list-item.module.css'

const EventListItem = ({ id, datetime, title, location }) => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.left}>
                <p className="body">
                    <span className='bold h5'>1.Aug</span>
                    <br />
                    <span>Fri. 22:00</span>
                </p>
            </div>
            <div className={styles.middle}>
                <p className="body">
                    <h5 className="h5">Hawaii with Maii on beach Twixie</h5>
                    <span>1901 Thornridge, Hawaii 81063</span>
                </p>
            </div>
            <div className={styles.right}>
                <button className={`btn btn-primary ${styles.check}`}>Check</button>
            </div>
        </div>
    )
}

export default EventListItem