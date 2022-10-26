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

// POST /auth/password-reset
function requestPasswordReset(email) {
    return axios.post('/auth/password-reset', {
        email
    })
}

// GET /auth/password-reset/:token
function validatePasswordResetToken(token) {
    return axios.get('/auth/password-reset/' + token)
}

// POST /auth/password-reset/:token
function performPasswordReset(token, password) {
    return axios.post('/auth/password-reset/' + token, {
        password
    })
}


const authApi = {
    login,
    signup,
    requestPasswordReset,
    validatePasswordResetToken,
    performPasswordReset
}

export default authApi
