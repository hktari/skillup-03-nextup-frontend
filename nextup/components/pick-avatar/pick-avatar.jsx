import React, { useRef, useState } from 'react'
import { fileToBase64 } from '../../common/util/fileUtil';
import styles from './pick-avatar.module.css'


const PickAvatarComponent = ({ onImagePicked, image = '' }) => {
    const [selectedImage, setSelectedImage] = useState(image)
    const selectedImageRef = useRef(null);

    async function handleOnImagePicked(event) {
        if (event.target && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);

            const selectedImgEl = document.getElementById('selectedImage')
            selectedImgEl.onload = () => {
                URL.revokeObjectURL(selectedImgEl.src);
            }

            setSelectedImage(URL.createObjectURL(event.target.files[0]))

            const imgBase64 = await fileToBase64(event.target.files[0])
            onImagePicked(imgBase64)
        }
    }

    return (
        <button className={`btn btn-circle ${styles.avatar}`}
            onClick={() => selectedImageRef.current?.click()}>
            <i className="bi bi-person-circle"></i>
            <img id='selectedImage' src={selectedImage} alt="" hidden={!selectedImage} />
            <input accept="image/png, image/jpeg" type='file' id='image'
                ref={selectedImageRef} style={{ display: 'none' }}
                onChange={handleOnImagePicked} />
        </button>
    )
}

export default PickAvatarComponent