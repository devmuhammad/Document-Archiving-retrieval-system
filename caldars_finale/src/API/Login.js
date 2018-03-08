import { HTTP } from './http'


export default {

  LOGIN: async (userlog) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get(`userprofile/authenticate`, { params: { username: userlog.username, password: userlog.password } })
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}