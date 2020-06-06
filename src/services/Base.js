/* eslint-disable eol-last */
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: process.env.VUE_APP_BASE_URL, 
        // responseType: 'json',
        timeout: 15000,
        headers: {
        }
    })
}