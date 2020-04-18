/* eslint-disable eol-last */
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://157.230.235.122:23000/', 
        // responseType: 'json',
        timeout: 15000,
        headers: {
        }
    })
}