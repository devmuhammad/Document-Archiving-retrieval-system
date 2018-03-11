import { HTTP } from './http'


export default {

  LOGIN: async (user) => {
    console.log(user)
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get(`userprofile/authenticate`, { params: { username: user.username, password: user.passw } })
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}