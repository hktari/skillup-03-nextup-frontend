import React from 'react'

import EventCard from '../event-card'
import styles from './event-carousel.module.css'

const EventCarousel = ({ events }) => {

    function splitIntoGroupsOfThree(events) {
        const groups = []
        let curGroup = []
        for (let i = 0; i < events.length; i++) {
            curGroup.push(events[i])
            if (curGroup.length === 3) {
                groups.push(curGroup)
                curGroup = []
            }
        }

        // special handling for last group of less than three events
        const unevenSplit = events.length % 3 !== 0
        if (unevenSplit) {
            groups.push(curGroup)
        }

        return groups
    }

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                {splitIntoGroupsOfThree(events).map((group, idx) => (
                    <button 
                        key={`${idx}-cd4e9adc-c7ed-420f-85b1-debbdb0ed435`}
                        type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={idx}
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                ))}
            </div>
            <div class="carousel-inner">
                {splitIntoGroupsOfThree(events).map((group, idx) =>
                (
                    <div key={`${idx}-e90c4925-7b46-48f8-82ed-c1c3224e3e63`} class="carousel-item">
                        <div className={styles['item-container']}>
                            {group.map(ev => (
                                <EventCard
                                    key={ev.eventId}
                                    id={ev.eventId}
                                    imageUrl={ev.imageUrl}
                                    datetime={ev.datetime}
                                    title={ev.title}
                                    location={ev.location}
                                    maxUsers={ev.max_users} />
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default EventCarousel