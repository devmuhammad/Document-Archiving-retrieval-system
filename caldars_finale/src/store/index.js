import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import Activities from './modules/Activities'
import Comments from './modules/Comments'
import Usermanagement from './modules/usermanagement'
import documentCategory from "./modules/documentCategory"
import login from "./modules/login"

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    Activities,
    Comments,
    Usermanagement,
    login,
    documentCategory
  }
})  
