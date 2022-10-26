import axios from './http'

// login OK
function login(email, password) {
    return axios.post('/auth/login', {
        email,
        password
    })
}

// signup OK
function signup(email, firstName, lastName, password, imageBase64) {
    return axios.post('/auth/signup',
        {
            email,
            firstName,
            lastName,
            password,
            imageBase64
        })
}

// password-reset
function requestPasswordReset(email) {
    return axios.post('/auth/password-reset', {
        email
    })
}

const authApi = {
    login,
    signup,
    requestPasswordReset
}

export default authApi
