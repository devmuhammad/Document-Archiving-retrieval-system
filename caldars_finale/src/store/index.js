import Vue from 'vue'
import Vuex from 'vuex'
import Activities from './modules/Activities'
import Comments from './modules/Comments'
import Usermanagement from './modules/usermanagement'
import documentCategory from "./modules/documentCategory"
import login from "./modules/login"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Activities,
    Comments,
    Usermanagement,
    login,
    documentCategory
  }
})  
