import { HTTP } from './http'


export default {

  SHARE: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post(`sharedocuments/add`, )
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}