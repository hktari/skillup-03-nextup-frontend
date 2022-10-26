import axios from './http'


// - PUT /profile
function update(firstName, lastName, imageBase64) {
    return axios.put('/profile', {
        firstName,
        lastName,
        imageBase64
    })
}

// - POST /profile/change-password
function changePassword(oldPassword, newPassword) {
    return axios.post('/profile/change-password', {
        oldPassword,
        newPassword
    })
}

// - GET /profile 
function get() {
    return axios.get('/profile')
}

const profileApi = {
    update,
    changePassword,
    get
}

export default profileApi