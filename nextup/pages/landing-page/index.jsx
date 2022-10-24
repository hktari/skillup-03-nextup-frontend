import Head from 'next/head'
import Image from 'next/image'
import Modal from 'react-modal';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import EventCard from '../../components/event-card';
import styles from './landing-page.module.css'
import Header from '../../components/layout/header/header';
import SearchBar from '../../components/search-bar/search-bar';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles['header-img']}
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          <img className={styles['header-img']}
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>

        <div className={styles.body}>
          <section className={styles['next-event']}>
            <h3 className="h3 color-white">FIND THE BEST EVENTS</h3>
            <h1 className={`h2 color-primary ${styles.title}`}>Are you looking for your next event?</h1>

            <p className="body mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro fugit velit autem omnis quis dolores? Modi tempora, inventore, veritatis aut ipsam nostrum voluptatem soluta illo laboriosam possimus quam, saepe consequatur. Voluptate laudantium dolores accusantium natus?
            </p>
          </section>

          <section className={`${styles.search} pt-4`}>
            <h3 className="h3 color-black">FIND YOUR NEXT EVENT</h3>

            <p className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia sed obcaecati deserunt explicabo ipsa.</p>

            <div className="mt-5">
            </div>
            <SearchBar />
            <div className="mt-5">
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
