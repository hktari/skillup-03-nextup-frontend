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
          <h1>hello there</h1>
          <button onClick={() => setModalOpen(false)}>close</button>
        </Modal>
      </div>
    </>
  )
}
