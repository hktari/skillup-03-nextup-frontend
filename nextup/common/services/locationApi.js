import axios from './http'

// GET /location/autocomplete?text={}
function search(text) {
    return axios.get('/location/autocomplete', {
        params: {
            text,
        }
    })
}

const locationApi = {
    search
}

export default locationApi