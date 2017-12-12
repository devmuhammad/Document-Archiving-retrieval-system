import {HTTP} from "./http"

export default {
  
  LIST_COMMENT: async (docId) => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/comments/filter?docid='+docId+'&userid=0&page=0&size=10')
        .then((response) => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  ADD_COMMENT: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('documentactivitieslog/add')
        .then(response => { resolve(response) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  UPDATE_COMMENT: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.put('documentactivitieslog/add')
        .then(response => { resolve(response) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  DELETE_COMMENT: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.delete('documentactivitieslog/delete/' + id)
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

}