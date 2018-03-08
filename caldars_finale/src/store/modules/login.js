import api from "../../API/Login"

let state = {
  user: {},
  login_error: {},
  login_status: false,
  isLoggedIn:false,
  login_msg:{},
  loggedInUser:"",
  loggedInUsername:"",
  selectedDocs:[]
}

const getters = {
  login_status: state => state.login_status,
  login_error: state => state.login_error,
  isLoggedIn: state => state.isLoggedIn,
  login_msg: state => state.login_msg,
  loggedInUser: state => state.loggedInUser,
  loggedInUser: state => state.loggedInUser,
  selectedDocs: state => state.selectedDocs
}

const mutations = {
  userLogin: async (state, userlog) => {
    const login = () => {
      return new Promise((resolve, reject) => {
        state.login_status = 0
        api.LOGIN(userlog)
        .then((res) => { resolve(res) })
        .catch((err) => { reject(err) })
      })
      .then((res) => { 
        state.login_msg=res.message
        
        return (res.message == "Login Succcessfull") ? state.isLoggedIn = true:state.isLoggedIn = false;
        //return (res.message == "Invalid Login!!! Username/Password not valid") ? state.login_status = 1:state.login_status = 0;
        state.loggedInUser = res.users.id
        state.loggedInUsername = res.users.firstName +' '+ res.users.lastName
      })
      .catch((err) => { state.login_error.error = err.message })
    }

    return await login()
    //state.isLoggedIn = true
  }
}

const actions = {
  userLogin: ({ commit }, userlog) => commit('userLogin', userlog)
}

export default {
    state,
    getters,
    actions,
    mutations
}


