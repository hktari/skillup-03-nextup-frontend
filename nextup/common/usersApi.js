import axios from './http'

// GET /user/{id} OK
function getDetails(userId) {
    return axios.get('/user/' + userId)
}

// GET / user / upcoming - events OK
function getUpcomingEvents() {
    return axios.get('/user/upcoming-events')
}

// GET / user / recent - events OK
function getRecentEvents() {
    return axios.get('/user/recent-events')
}

const usersApi = {
    getDetails,
    getUpcomingEvents,
    getRecentEvents
}

export default usersApi


