import React, { useState, useEffect } from 'react'
import styles from './search-bar.module.css'
import locationApi from '../../common/services/locationApi'
import eventsApi from '../../common/services/eventsApi'

const SearchBar = ({ onSearchResults }) => {
    const [date, setDate] = useState('')
    const [locationSearchResults, setLocationSearchResults] = useState([])
    const [text, setText] = useState('')
    const [searchText, setSearchText] = useState('')

    async function performAutocomplete() {
        try {
            const formattedText = text?.trim()
            if(!formattedText){
                return
            }

            const searchResults = await locationApi.search(formattedText)
            console.log(searchResults)
            const addressList = searchResults.features.map(res => res.properties?.formatted)
            setLocationSearchResults(addressList)
        } catch (error) {
            console.error(error)
        }
    }

    async function performSearch() {
        const formattedText = text?.trim()
        const formattedDate = date
        if (!formattedText && formattedDate) {
            return
        }

        try {
            console.log('performing search')
            const searchResults = await eventsApi.search(formattedDate, formattedText)
            console.log(searchResults)
            onSearchResults(searchResults)
        } catch (error) {
            console.error(error)
        }

    }

    function selectResult(result) {
        setText(result)
        setLocationSearchResults([])
    }

    useEffect(() => {
        const autocompleteTask = setTimeout(() => {
            performAutocomplete(searchText)
        }, 750)

        return () => {
            clearTimeout(autocompleteTask)
        }
    }, [searchText])


    return (
        <div className={styles.container} >
            <div className={styles.top}>
                <div className={styles.search}>
                    <i className="bi bi-geo-alt-fill"></i>
                    <input
                        onChange={e => {
                            setText(e.currentTarget.value)
                            setSearchText(e.currentTarget.value)
                        }}
                        value={text} className='body input'
                        type="text" placeholder='Search by location' />
                </div>
                <div className={styles.date}>
                    <i className="bi bi-calendar"></i>
                    <input
                        placeholder='dd.mm.yyyy'
                        className='body input' type="date" value={date}
                        onChange={e => {
                            setDate(e.currentTarget.value)
                        }
                        } />
                </div>
                <div className={styles.results} hidden={locationSearchResults?.length == 0}>
                    <ul>
                        {locationSearchResults.map(res => (
                            <li onClick={() => selectResult(res)}>
                                <div className="body">{res}</div>
                            </li>
                        ))}
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