import Vue from 'vue'
import Vuex from 'vuex'
import documentCategory from "./modules/documentCategory"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    documentCategory
  }
})  
