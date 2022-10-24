import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Modal from 'react-modal';
import { useState } from 'react'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="">
        <button onClick={() => setModalOpen(!modalOpen)}>toggle</button>
        <Modal isOpen={modalOpen}
        >
          <div className="">regular text</div>
          <div className="body">non regular text</div>
          <div className='h1'>header 1</div>
          <div className='h2'>header 2</div>
          <div className='bold'>bold text</div>

          <button onClick={() => setModalOpen(false)}>close</button>
        </Modal>
      </div>
    </>
  )
}
