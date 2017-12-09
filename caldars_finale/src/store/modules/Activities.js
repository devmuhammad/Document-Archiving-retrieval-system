import api from "../../API/activities"

let state = {
    activitylist :[],
    activity: {},
    get_error: {},
    delete_error:{},
}

const getters = {
    activitylist : state => state.activitylist,
    get_error : state => state.get_error,
}

const mutations = {
    getActivities:  async (state,activitylist) => {
      try {
      const fetchActivities = () => {
        return new Promise((resolve, reject) => {
          api.LIST_ACTIVITY(activitylist)
          .then((res) => { resolve(res) })
          .catch((err) => {  reject(err) })
        })  
        .then((res) => {state.activitylist = res})
        .catch((err) => { console.log({'error':err.message}); state.get_error.error = err.message})
      }  
  
      return await fetchActivities()
    } catch (error) {
      console.log({'error':error.message}); state.fetch_error.error = error.message
    }
    },
    DeleteActivity: (state, id) => {
        api.DELETE_ACTIVITY(id)
        .then((res) => { console.log(res); })
        .catch((err) => { state.delete_error.error = err.message })
      },
}

const actions = {
    getActivities: ({commit}, activitylist) => commit('getActivities', activitylist) ,
    DeleteActivity: ({commit}, id) => commit('DeleteActivity', id)
}

export default {
    state,
    getters,
    actions,
    mutations
  }