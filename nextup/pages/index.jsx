import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Modal from 'react-modal';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import EventCard from '../components/event-card';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="">

        <EventCard imageUrl={'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} title="Party with eminem" datetime={new Date()}
          location={'6391 Elgin St. Celina, Delaware'}
          maxUsers={100}
        />


        <button className='btn btn-primary' onClick={() => setModalOpen(!modalOpen)}>Sign up</button>
        <button className='btn btn-alt' onClick={() => setModalOpen(!modalOpen)}>Sign up</button>
        <button className='btn btn-alt btn-fat' onClick={() => setModalOpen(!modalOpen)}>Sign up</button>
        <button className="btn btn-primary btn-icon"><i className='bi bi-x'></i></button>
        <Modal isOpen={modalOpen}
        >
          <div className="">regular text</div>
          <div className="body">non regular text</div>
          <div className='h1'>header 1</div>
          <div className='h2'>header 2</div>
          <div className='bold'>bold text</div>
          <i class="bi bi-1-circle"></i>
          <button onClick={() => setModalOpen(false)}>close</button>
        </Modal>
      </div>
    </>
  )
}
