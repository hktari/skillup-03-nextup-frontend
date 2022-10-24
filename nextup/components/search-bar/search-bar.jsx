import React, { useState } from 'react'
import styles from './search-bar.module.css'

const SearchBar = ({ onSearchResults }) => {
    const [date, setDate] = useState(new Date().toISOString().substring(0, 10))


    async function performSearch() {
        console.log('performing search')
        onSearchResults({})
    }

    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.search}>
                    <i class="bi bi-geo-alt-fill"></i>
                    <input className='input' type="text" placeholder='Search by location' />
                </div>
                <div className={styles.date}>
                    <i class="bi bi-calendar"></i>
                    <input className='input' type="date" value={date} onChange={e => setDate(e.currentTarget.value)} />
                </div>
            </div>
            <div className={styles.bottom}>
                <button onClick={() => performSearch()} className="btn btn-primary btn-fat w-100">Search</button>
            </div>
        </div>
    )
}

export default SearchBar