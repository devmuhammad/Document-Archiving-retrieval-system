import {HTTP} from "./http"

export default {
  LIST: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/documenttypes?page=1&size=100')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  getDocumentImage: async () => {
    const res = (parentId) => {
      return new Promise((resolve, reject) => {
        HTTP.get('documenttypes/'+parentId+'/detail')
        .then(response => {resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

  addCategory: async () => {
    const res = (parentId) => {
      return new Promise((resolve, reject) => {
        HTTP.get('documenttypes/add')
        .then(response => {console.log(response.data); resolve(response.data) })
        .catch(e => { console.log(e); reject(e) })
      })
    }

    return await res()
  },
}