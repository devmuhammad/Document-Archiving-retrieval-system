import api from "../../API/userGroup"

let state = {
    usergroups: [],
    userroles: [],
    usergroup: {},
    groupid:undefined,
    get_usergrouperror: {},
    create_usergrouperror: null,
    create_usergroupstatus: undefined,
    create_usergrprolestatus: undefined,
    create_updategroupstatus: undefined,
    delete_grouperror: {},
  }

  const getters = {
    groupid: state => state.groupid,
    usergroups: state => state.usergroups,
    userroles: state => state.userroles,
    usergroup: state => state.usergroup,
    get_usergrouperror: state => state.get_usergrouperror,
    create_usergrouperror: state => state.create_usergrouperror,
    create_usergroupstatus: state => state.create_usergroupstatus,
    create_usergrprolestatus: state => state.create_usergrprolestatus,
    create_updategroupstatus: state => state.create_updategroupstatus,
    
  }

  const mutations = {
    getUsergroups: async (state) => {
      try {
        const fetchUsers = () => {
          return new Promise((resolve, reject) => {
            api.GET_USERGROUPS()
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          })
          .then((res) => { state.usergroups = res.data; })
          .catch((err) => {  state.get_usergrouperror.error = err.message })
        }
  
        return await fetchUsers()
      } catch (error) {
        console.log({ 'error': error.message }); state.fetch_error.error = error.message
      }
    },

    getUserroles: async (state) => {
      try {
        const fetchUsers = () => {
          return new Promise((resolve, reject) => {
            api.GET_USERROLES()
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          })
          .then((res) => { state.userroles = res.data; })
          .catch((err) => {  state.get_usergrouperror.error = err.message })
        }
  
        return await fetchUsers()
      } catch (error) {
        console.log({ 'error': error.message }); state.fetch_error.error = error.message
      }
    },
  
    createNewUserGroup: async (state, usergroup) => {
      const create = () => {
        return new Promise((resolve, reject) => {
        //   state.create_usergroupstatus = 0;
          api.CREATE_USERGROUP(usergroup)
          .then((res) => { resolve(res);
            console.log(res)
            state.create_usergroupstatus = res.status
            state.groupid = res.data.data[0].id
            })
          .catch((err) => { reject(err) })
        })
        .then((res) => { state.create_usergroupstatus = res.status;  this.getUsergroups(0) })
        .catch((err) => { state.create_usergrouperror = err.message; })
      }
  
      return await create()
    },
  
    createGroupRoles: async (state, usergroup) => {

      const create = () => {
        return new Promise((resolve, reject) => {
          state.create_usergrprolestatus = 0;
          api.addUserRole(usergroup)
          .then((res) => { resolve(res),console.log(res)})
          .catch((err) => { reject(err) })
        })
        .then((res) => { state.create_usergrprolestatus = res.status; this.getUsergroups(0) })
        .catch((err) => { state.create_usergrouperror = err.message; })
      }
  
      return await create()
    },

    updateUsergroup: async (state, usergroup) => {
        const update = () => {
          return new Promise((resolve, reject) => {
            state.create_updategroupstatus = 0
            api.UPDATE_USERGROUP(usergroup)
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          })
          .then((res) => { state.create_updategroupstatus = res.status; this.getUsergroups(0) })
          .catch((err) => { state.create_usererror.error = err.message })
    
        }
    
        return await update()
      },

      deleteUsergroup: (state, usergroupid) => {
        api.DELETE_USERGROUP(usergroupid)
          .then((res) => { this.getUsergroups(0) })
          .catch((err) => { state.delete_error.error = err.message })
      },
}

const actions = {
    getUsergroups: ({ commit }) => commit('getUsergroups'),
    getUserroles: ({ commit }) => commit('getUserroles'),
    createNewUserGroup: ({ commit }, usergroup) => commit('createNewUserGroup', usergroup),
    createGroupRoles: ({ commit }, usergroup) => commit('createGroupRoles', usergroup),
    updateUsergroup: ({ commit }, usergroup) => commit('updateUsergroup', usergroup),
    deleteUsergroup: ({ commit }, usergroupid) => commit('deleteUsergroup', usergroupid)
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }
  