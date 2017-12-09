import {HTTP} from "./http"

export default {
  LIST_ACTIVITY: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.get('list/documentactivitys')
        .then((response) => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  ADD_ACTIVITY: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.post('documentactivitys/add')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  UPDATE_ACTIVITY: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.put('documentactivitys/workflow/update')
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },
  DELETE_ACTIVITY: async () => {
    const res = () => {
      return new Promise((resolve, reject) => {
        HTTP.delete('documentactivitys/delete/' + id)
        .then(response => { resolve(response.data) })
        .catch(e => { reject(e) })
      })
    }

    return await res()
  },

}