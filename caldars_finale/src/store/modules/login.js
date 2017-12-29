import api from "../../API/Login"

let state = {
  user: {},
  login_error: {},
  login_status: false,
  isLoggedIn:false
}

const getters = {
  login_status: state => state.login_status,
  isLoggedIn: state => state.isLoggedIn
}

const mutations = {
  userLogin: async (state, user) => {
    const login = () => {
      return new Promise((resolve, reject) => {
        state.login_status = 0
        api.LOGIN(user)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((res) => { 
        console.log(res);
        return (res.respcode == "001") ? state.isLoggedIn = true:state.isLoggedIn = false; 
      })
      .catch((err) => { state.login_error.error = err.message })
    }

    //return await login()
    state.isLoggedIn = true;
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


