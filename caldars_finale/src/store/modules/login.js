import api from "../../API/Login"
import { stat } from "fs";

let state = {
  user: {},
  login_error: null,
  login_status: false,
  isLoggedIn:false
}

const getters = {
  login_status: state => state.login_status,
  isLoggedIn: state => state.isLoggedIn,
  login_error: state => state.login_error
}

const mutations = {
  userLogin: async (state, user) => {
    const login = () => {
      return new Promise((resolve, reject) => {
        state.login_status = true
        api.LOGIN(user)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((res) => { 
        if (res.message == "Login Succcessfull") 
        {
          const localStore = window.localStorage
          state.login_status = false
          state.isLoggedIn = true
          localStore.setItem("darsxlxl", )

        }else {   
          state.login_error = res.message
          state.login_status = false
          state.isLoggedIn = false; 
        }   
      })
      .catch((err) => { state.login_error.error = err.message })
    }

    return await login()
    //state.isLoggedIn = true;
  }
}

const actions = {
  userLogin: ({ commit }, user) => commit('userLogin', user)
}

export default {
    state,
    getters,
    actions,
    mutations
}


