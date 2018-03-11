import {HTTP} from './http'

export default {
    CREATE_USER: async (user) => {
      const res = () => {
        return new Promise ((resolve, reject) => {
          HTTP.post('userprofile/add', user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },
    CREATE_INSTITUTION: async (institutionid) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.post('institution/add', institutionid)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }
  
      return await res()
    },

    UPDATE_USER: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.post(`usersprofile/add`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },

    CHANGE_PASSWORD: async (user) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.put(`changepassword/`, user)
          .then(response => { resolve(response) })
          .catch(e => { reject(e) })
        })
      }

      return await res()
    },


    DELETE_USER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.delete(`usersprofile/delete/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
      
      return await res()
    },

    GET_USER: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`usersprofile/` + id)
          .then(response => { resolve(response.data) })
          .catch(e => { reject(e) })
        })
      }
       
      return await res()
    },

    GET_USERS: async () => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`list/userprofile?page=0&size=10` )
          .then((response) => { resolve(response.data)  })
          .catch(e => { console.log(e); reject(e) })
        })
      }

      return await res()
    },
    GET_INSTITUTION: async (id) => {
      const res = () => {
        return new Promise((resolve, reject) => {
          HTTP.get(`list/institution` + id)
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