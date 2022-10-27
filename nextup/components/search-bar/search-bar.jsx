import React, { useState, useEffect } from 'react'
import styles from './search-bar.module.css'
import locationApi from '../../common/services/locationApi'

const SearchBar = ({ onSearchResults }) => {
    const [date, setDate] = useState(new Date().toISOString().substring(0, 10))
    const [searchResults, setSearchResults] = useState([])
    const [text, setText] = useState('')

    async function performAutocomplete() {
        try {
            const searchResults = await locationApi.search(text)
            console.log(searchResults)
            const addressList = searchResults.features.map(res => res.properties?.formatted)
            setSearchResults(addressList)
        } catch (error) {
            console.error(error)
        }

        onSearchResults && onSearchResults(searchResults)
    }

    useEffect(() => {
        const autocompleteTask = setTimeout(() => {
            performAutocomplete(text)
        }, 750)

        return () => {
            clearTimeout(autocompleteTask)
        }
    }, [text])


    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.search}>
                    <i className="bi bi-geo-alt-fill"></i>
                    <input
                        onChange={e => setText(e.currentTarget.value)}
                        value={text} className='body input'
                        type="text" placeholder='Search by location' />
                </div>
                <div className={styles.date}>
                    <i className="bi bi-calendar"></i>
                    <input
                        placeholder='dd.mm.yyyy'
                        className='body input' type="date" value={date} onChange={e => setDate(e.currentTarget.value)} />
                </div>
                <div className={styles.results} hidden={searchResults?.length == 0}>
                    <ul>
                        {searchResults.map(res => (
                            <li>
                                <div className="body">{res}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <button onClick={() => performAutocomplete()} className="btn btn-primary">Search</button>
            </div>

        </div>
    )
}

export default SearchBar