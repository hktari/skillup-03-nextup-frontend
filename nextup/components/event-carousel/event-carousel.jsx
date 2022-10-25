import React from 'react'

import { Carousel, CarouselItem } from 'react-bootstrap'
import EventCard from '../event-card'
import styles from './event-carousel.module.css'

const EventCarousel = () => {
    return (
        <Carousel controls={false}>
            <CarouselItem>
                <div className={styles['item-container']}>
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className={styles['item-container']}>
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                    <EventCard
                        imageUrl={'https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
                        datetime={new Date()}
                        title='Partiy with Eminem'
                        location={'6391 Elgin St. Celina, Delaware'}
                        maxUsers={100} />
                </div>
            </CarouselItem>            
        </Carousel >
    )
}

export default EventCarousel