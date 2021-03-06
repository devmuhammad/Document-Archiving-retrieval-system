import { userHTTP } from './http'


export default {

  LOGIN: async (user) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        userHTTP.post(`entrance/entrance`,user)
        // HTTP.get(`userprofile/authenticate`, { params: { username: user.username, password: user.passw } })
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}
