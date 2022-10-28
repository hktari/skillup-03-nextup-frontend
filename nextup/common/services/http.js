import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';


export function setAuthBearer(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('unwrapping response', response?.data)
    return response?.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

axios.defaults.transformResponse = [function (data) {
    try {
        const dateKeyRx = /date/i
        return JSON.parse(data, (key, value) => {
            if (dateKeyRx.test(key)) {
                try {
                    return new Date(value)
                } catch (error) {
                    console.error('Failed to parse date', error)
                }
            } else {
                return value
            }
        })
    } catch (error) {
        return undefined
    }
}]


export default axios

