import axios from 'axios'
require('dotenv').config()

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosInstance