import React from 'react'
import styles from './add-event.module.css'

import { fileToBase64 } from '../../common/util/fileUtil'
import { useRef, useState, useEffect } from 'react'
import eventsApi from '../../common/services/eventsApi'

const AddEventComponent = () => {

    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState()
    const [time, setTime] = useState('20:00')
    const [maxUsers, setMaxUsers] = useState(50)
    const [imageBase64, setImageBase64] = useState(null)
    const selectedImageRef = useRef(null)

    useEffect(() => {
        if (!imageBase64) {
            clearImage()
        }
    }, [imageBase64])

    async function onSubmit(ev) {
        ev.preventDefault()
        try {
            const datetime = new Date(date)
            const [hour, min] = time?.split(':')
            datetime.setHours(hour ?? 0)
            datetime.setMinutes(min ?? 0)
            console.log('adding event', datetime)
            const result = await eventsApi.create(
                eventName, description, datetime,
                imageBase64, location, maxUsers)
            console.log('success', result)
            resetForm()
        } catch (error) {
            console.error(error)
        }

    }

    async function onImagePicked(event) {
        if (event.target.files.length > 0) {
            try {
                const selectedImgEl = document.getElementById('selectedImage')

                selectedImgEl.src = URL.createObjectURL(event.target.files[0])
                selectedImgEl.onload = () => {
                    URL.revokeObjectURL(selectedImgEl.src)
                }

                setImageBase64(await fileToBase64(event.target.files[0]))
            } catch (error) {
                console.error('failed to process image', error)
            }
        }
    }

    function resetForm() {
        setEventName('')
        setLocation('')
        setDate('')
        setTime('')
        setMaxUsers(50)
        setDescription('')
        setImageBase64(null)
    }

    function clearImage() {
        const selectedImgEl = document.getElementById('selectedImage')
        selectedImgEl.src = ''
    }


    return (
        <div className={styles.container}>
            <h2 className="h4 color-black">Add event</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Event name</label>
                    <input
                        value={eventName} onChange={e => setEventName(e.currentTarget.value)}
                        type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input
                        value={location} onChange={e => setLocation(e.currentTarget.value)}
                        type="text" className="form-control" id="location" />
                </div>
                <div className="row g-3 mb-3">
                    <div className="col-4">
                        <div>
                            <label for="date" className="form-label">Date</label>
                            <input
                                value={date} onChange={e => setDate(e.currentTarget.value)}
                                type="date" className="form-control" id="date" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <label for="time" className="form-label">Hour</label>
                            <input
                                value={time} onChange={e => setTime(e.currentTarget.value)}
                                type="time" className="form-control" id="time" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <label for="max_users" className="form-label">Max users</label>
                            <input
                                value={maxUsers} onChange={e => setMaxUsers(+e.currentTarget.value)}
                                type="number" className="form-control" id="max_users" />
                        </div>
                    </div>
                </div>
                <div className={`mb-3 ${styles.description}`}>
                    <label for="description" className="form-label">Description</label>
                    <textarea
                        value={description} onChange={e => setDescription(e.currentTarget.value)}
                        type="text" className="form-control" id="description" />
                </div>
                <div >
                    <img className={styles.image} id='selectedImage' alt="" hidden={imageBase64 === null} />
                </div>
                <button
                    hidden={imageBase64}
                    className="btn btn-dark w-100 mb-3"
                    onClick={(ev) => {
                        ev.preventDefault();
                        selectedImageRef.current?.click()
                    }}>
                    Add image
                </button>
                <button
                    hidden={!imageBase64}
                    onClick={ev => {
                        ev.preventDefault()
                        setImageBase64(null)
                    }}
                    className="btn btn-dark w-100">
                    Clear image
                </button>
                <input accept="image/png, image/jpeg" type='file' id='image'
                    ref={selectedImageRef} style={{ display: 'none' }}
                    onChange={onImagePicked} />
                <button type='submit' className="btn btn-primary w-100 mt-3 mt-md-0">Submit</button>
            </form>

        </div>
    )
}

export default AddEventComponent