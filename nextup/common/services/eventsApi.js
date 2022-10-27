import axios from './http'

// GET /event/featured
function getFeatured(count) {
    const featuredEvents = []
    for (let i = 0; i < count; i++) {
        featuredEvents.push(axios.get('/event/featured'))
    }

    return Promise.all(featuredEvents)
}


// GET /event
function all(startIdx, pageSize) {
    return axios.get('/event/', {
        params: {
            startIdx,
            pageSize
        }
    })
}

// POST /event (auth guard)
function create(title, description, datetime, imageBase64, location, max_users) {
    return axios.post('/event', {
        title,
        description,
        datetime,
        imageBase64,
        location,
        max_users
    })
}

// DELETE /event (auth guard)
function remove(eventId) {
    return axios.delete('/event/' + eventId)
}

// PUT /event (auth guard)
function update(eventId, title, description, datetime, imageBase64, location, max_users) {
    return axios.put('/event/' + eventId, {
        title,
        description,
        datetime,
        imageBase64,
        location,
        max_users
    })
}

// GET /event/search (?date&location)
function search(date, location) {
    return all(3, 3)

    return axios.get('/event/search', {
        params: {
            date,
            location
        }
    })
}

// GET /event/{id}
function getDetails(eventId) {
    return axios.get('/event/' + eventId)
}


// POST /event/{id}/book
function performBooking(eventId) {
    return axios.post(`/event/${eventId}/book`)
}

// DELETE /event/{id}/book
function undoBooking(eventId) {
    return axios.delete(`/event/${eventId}/book`)
}



const eventsApi = {
    getFeatured,
    all,
    create,
    remove,
    update,
    search,
    getDetails,
}

export default eventsApi

