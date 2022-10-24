import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function setAccessToken(token) {
    axios.defaults.headers.common['Authorization'] = token;
}

export default axios

