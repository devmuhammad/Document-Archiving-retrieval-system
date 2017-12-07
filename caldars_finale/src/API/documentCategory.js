import {HTTP} from "./http"

export default {
  LIST: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/documenttypes')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
}