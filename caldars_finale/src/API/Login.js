import { HTTP } from './http'


export default {

  LOGIN: async (user) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get(`user`, { params: { userid: user.userid, password: user.password } })
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}