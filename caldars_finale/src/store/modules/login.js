import api from "../../API/Login"
import jwt from "jsonwebtoken"
const secret = "someVeryLongRandomString"
const localStore = window.localStorage;

let state = {
  user: {},
  login_error: null,
  login_status: false,
  isLoggedIn:false,
  login_msg:{},
  loggedInUser:{},
  selectedDocs:[]
}

const getters = {
  login_status: state => state.login_status,
  isLoggedIn: state => state.isLoggedIn,
  login_msg: state => state.login_msg,
  loggedInUser: state => state.loggedInUser,
  selectedDocs: state => state.selectedDocs,
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
          state.login_status = false

          jwt.sign({data: res.users}, secret, { expiresIn: '1h' }, (err, token) => {
            if(!err){
              localStore.setItem("darsxlxl", token)
              state.loggedInUser = res.users;
              state.isLoggedIn = true;
            }else { state.isLoggedIn = false; }  
          });

        }else {   
          state.login_error = res.message
          state.login_status = false
          state.isLoggedIn = false; 
        }   
      })
      .catch((err) => { state.login_error = err.message })
    }

    return await login()
  },
  remShare : async (state) => {
    state.selectedDocs = []
  },

  RESET_LOGIN :(state, data) => { 
    state.loggedInUser = data.user
    state.isLoggedIn = data.loggedIn
  },

  LOGOUT_USER : (state) => {
    state.isLoggedIn = false;
    localStore.removeItem("darsxlxl")
  }
}

const actions = {
  userLogin: ({ commit }, user) => commit('userLogin', user),
  RESET_LOGIN: ({commit}, data) => commit('RESET_LOGIN', data),
  LOGOUT_USER: ({commit}) => commit('LOGOUT_USER'),
  remShare: ({commit}) => commit ('remShare')
}

export default {
  state,
  getters,
  actions,
  mutations
}


