import {HTTP} from './http'
import {userHTTP} from './http'

export default {
    CREATE_USER: async (user) => {
      const res = () => {
        return new Promise ((resolve, reject) => {
          // HTTP.post('userprofile/add', user)
          userHTTP.post('users/user/add', user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },
    CREATE_INSTITUTION: async (institutionid) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.post('institution/add', institutionid)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }
  
      return await res()
    },

    UPDATE_USER: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.post(`users/user/update`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    UPDATE_FILEPATH: async (path) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.post(`institution/update`, path)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    CHANGE_PASSWORD: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.put(`users/user/changepassword`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },


    DELETE_USER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.delete(`users/user/delete/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
      
      return await res()
    },

    GET_USER: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.get(`users/user/retrieve/`)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
       
      return await res()
    },

    GET_USERS: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.get(`users/user/list` )
          .then((response) => { resolve(response.data)  })
          .catch(e => { console.log(e); reject(e) })
        })
      }

      return await res()
    },

    GET_INSTITUTIONS: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          userHTTP.get(`institution/retrieve/defualt`)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
       
      return await res()
    },

    GET_BUSINESSTYPES: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`businesstypes` )
          .then((response) => { resolve(response.data)  })
          .catch(e => { console.log(e); reject(e) })
        })
      }

      return await res()
    }
}