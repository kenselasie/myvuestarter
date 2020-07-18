/* eslint-disable */
import http from "../Base";

export default {
  login(payload) {
    return http.post('/login/', payload)
      .then(({ data }) => {
        return Promise.resolve(data)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }
};