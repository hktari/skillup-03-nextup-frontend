import React from 'react'
import styles from './event-details.module.css'

import eventsApi from '../../common/services/eventsApi'
import Image from 'next/image'
import Header from '../../components/layout/header/header'
import Footer from '../../components/layout/footer/footer'

const EventDetailPage = ({ event }) => {
  return (
    <div className={styles.container}>

      <div className={`d-none d-md-block ${styles['image-container']}`}>
        <img className={styles.image} width={757} height={693} src={event?.imageUrl} alt={event?.title} />
      </div>

      <div className={`d-md-none ${styles['image-container']}`}>
        <Image className={styles.image} width={757} height={693} src={event?.imageUrl} alt={event?.title} layout={'intrinsic'} />
        <p className={`body bold ${styles.datetime}`}>
          <span>1.2.2020</span>
          <span>20:00</span>
        </p>
      </div>

      <div className={`mx-4 mx-md-0 ${styles['details-container']}`}>
        <div>
          <h1 className={`h2 mt-2 color-primary ${styles.title}`}>{event?.title}</h1>

          <div className={`pt-2 mt-2 ${styles['info-container']}`}>
            <div className={styles.location}>
              <i className="bi bi-geo-alt-fill color-primary"></i>
              <span className='body color-black'>{event?.location}</span>
            </div>
            <div className={styles['max-users']}>
              <i className="bi bi-person-fill color-primary"></i>
              <span>{event?.max_users}</span>
            </div>
          </div>
          <div className="pt-4"></div>
          <h2 className="h5 mt-4">EVENT DESCRIPTION</h2>
          <p className="body">{event?.description}</p>

          <button className={`btn btn-primary my-5 d-block ms-auto ${styles.book}`}>Book</button>
        </div>
        <div className="d-none d-md-block">
          <Footer />
        </div>  
      </div>
    </div>
  )
}

EventDetailPage.getLayout = function getLayout(page) {
  console.warn('IM HERE')
  return (
    <>
      <div className="page-wrap">
        <Header />
        <main>{page}</main>
      </div>
      <div className="d-md-none">
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const events = await eventsApi.all()
  return {
    paths: events.items.map(ev => {
      return { params: { eventId: ev.eventId } }
    }),
    fallback: true, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {

  const event = await eventsApi.getDetails(context.params.eventId)
  console.log('getStaticProps', context.params.eventId)
  console.log(event)

  if (!event) {
    return {
      notFound: true,
    }
  } else {
    return {
      // Passed to the page component as props
      props: { event: JSON.parse(JSON.stringify(event)) }
    }
  }
}

export default EventDetailPage