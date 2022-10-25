import axios from './http'

function getFeatured(){
    return axios.get('/event')
}

const eventsApi = {
    getFeatured
}

export default eventsApi

