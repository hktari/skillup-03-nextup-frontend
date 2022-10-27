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
                    <i className="bi bi-geo-alt-fill"></i>
                    <input className='body input' type="text" placeholder='Search by location' />
                </div>
                <div className={styles.date}>
                    <i className="bi bi-calendar"></i>
                    <input
                        placeholder='dd.mm.yyyy'
                        className='body input' type="date" value={date} onChange={e => setDate(e.currentTarget.value)} />
                </div>
                <div className={styles.results}>
                    <ul>
                        <li>
                            <div className="body">first</div>
                        </li>
                        <li>
                            <div className="body">second</div>
                        </li>
                        <li>
                            <div className="body">third</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <button onClick={() => performSearch()} className="btn btn-primary">Search</button>
            </div>

        </div>
    )
}

export default SearchBar