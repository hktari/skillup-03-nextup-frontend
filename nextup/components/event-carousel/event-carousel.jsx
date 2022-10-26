import React from 'react'

import { Carousel, CarouselItem } from 'react-bootstrap'
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
        <Carousel controls={false}>
            {splitIntoGroupsOfThree(events).map(group =>
            (
                <CarouselItem>
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
                </CarouselItem>
            )
            )}
        </Carousel >
    )
}

export default EventCarousel