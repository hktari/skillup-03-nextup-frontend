import axios from './http'

// GET /event/featured
function getFeatured() {
    return axios.get('/event/featured')
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
function create(event) {
    return axios.post('/event', event)
}

// DELETE /event (auth guard)
function remove(eventId) {
    return axios.delete('/event/' + eventId)
}

// PUT /event (auth guard)
function update(event) {
    return axios.put('/event/' + eventId, event)
}

// GET /event/search (?date&location)
function search(date, location) {
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

