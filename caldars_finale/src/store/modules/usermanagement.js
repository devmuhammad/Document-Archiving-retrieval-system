import api from "../../API/UserManagementAPI"

let state = {
    users: [],
    businesstypes: [],
    userslist: [],
    user: {},
    get_usererror: {},
    get_bizerror: {},
    create_usererror:{},
    create_insterror:{},
    create_instid:undefined,
    create_userstatus:undefined,
    create_inststatus:undefined,
    create_updatestatus:undefined,
    create_passwordstatus:undefined,
    delete_error:{},
    }
  
  const getters = {
    userslist : state => state.userslist,
    get_usererror : state => state.get_usererror,
    create_usererror : state => state.create_usererror,
    businesstypes: state => state.businesstypes,
    get_bizerror:state => state.get_bizerror,
    create_instid:state => state.create_instid,
    create_userstatus: state => state.create_userstatus,
    create_inststatus: state => state.create_inststatus,
    create_updatestatus: state => state.create_updatestatus,
    create_passwordstatus: state => state.create_passwordstatus
  }

  const mutations = {
    getUsers:  async (state,userslist) => {
      try {
      const fetchUsers = () => {
        return new Promise((resolve, reject) => {
          api.GET_USERS(userslist)
          .then((res) => { resolve(res) })
          .catch((err) => {  reject(err) })
        })  
        .then((res) => {state.userslist = res})
        .catch((err) => { console.log({'error':err.message}); state.get_usererror.error = err.message})
      }  
  
      return await fetchUsers()
    } catch (error) {
      console.log({'error':error.message}); state.fetch_error.error = error.message
    }
    },

    createNewUser: async (state, user) => {
      const create = () => {
        return new Promise ((resolve, reject) => {
          state.create_userstatus = 0
        api.CREATE_USER(user)
        .then((res) => { resolve(res)})
        .catch((err) => { reject(err) })
      })
      .then((res) => { state.create_userstatus = res.status; this.GET_USERS(0)})
      .catch((err) => {state.create_usererror.error = err.message})
    }

    return await create()
  },
  createInstitution: async (state, institutionid) => {
    const create = () => {
      return new Promise ((resolve, reject) => {
        state.create_inststatus = 0
      api.CREATE_INSTITUTION(institutionid)
      .then((res) => { resolve(res)})
      .catch((err) => { reject(err) })
      
    })
    .then((res) => { state.create_inststatus = res.status;
      return state.create_instid = res.id
       this.GET_INSTITUTION(0)})
    
    .catch((err) => {state.create_insterror.error = err.message})
  }

  return await create()
},
    

      updateoldUser: async (state, user) => {
        const update = () => {
          return new Promise ((resolve, reject) => {
          state.create_updatestatus = 0
        api.UPDATE_USER(user)
        .then((res) => {resolve(res)})
        .catch((err) => {reject(err)})
        })
        .then((res) => { state.create_updatestatus = res.status; this.GET_USERS(0)})
        .catch((err) => { state.create_usererror.error = err.message })
    
        }

        return await update()
      },

      changeuserpassword: async (state, user) => {
        const change = () => {
          return new Promise ((resolve, reject) => {
          state.create_passwordstatus = 0
        api.CHANGE_PASSWORD(user)
        .then((res) => {resolve(res)})
        .catch((err) => {reject(err)})
        })
        .then((res) => { state.create_passwordstatus = res.status; this.GET_USERS(0)})
        .catch((err) => { state.create_usererror.error = err.message })
    
        }

        return await change()
      },

      getbusinesstypes:  async (state,businesstypes) => {
        try {
        const fetchbusiness = () => {
          return new Promise((resolve, reject) => {
            api.GET_BUSINESSTYPES(businesstypes)
            .then((res) => { resolve(res) })
            .catch((err) => {  reject(err) })
          })  
          .then((res) => {state.businesstypes = res})
          .catch((err) => { console.log({'error':err.message}); state.get_bizerror.error = err.message})
        }  
    
        return await fetchbusiness()
      } catch (error) {
        console.log({'error':error.message}); state.fetch_error.error = error.message
      }
      },


      DeleteUser: (state, userid) => {
        api.DELETE_USER(userid)
        .then((res) => { console.log(res); })
        .catch((err) => { state.delete_error.error = err.message })
      },

      clearStatusLog: (state) => {
        state.create_userstatus = undefined
      },
      clearPasswordStatusLog: (state) => {
        state.create_passwordstatus = undefined
      },

      clearUpdateStatusLog: (state) => {
        state.create_updatestatus = undefined
      }
    }

    const actions = {
        getUsers: ({commit}, userslist) => commit('getUsers', userslist) ,
        createNewUser: ({commit}, user) => commit('createNewUser', user),
        updateoldUser: ({commit}, user) => commit('updateoldUser', user),
        changeuserpassword: ({commit}, user) => commit('changeuserpassword', user),
        createInstitution: ({commit}, institutionid) => commit('createInstitution', institutionid),
        getbusinesstypes: ({commit}, businesstypes) => commit('getbusinesstypes',businesstypes),
        DeleteUser: ({commit}, userid) => commit('DeleteUser', userid)
      }
      export default {
        state,
        getters,
        actions,
        mutations
      }
      