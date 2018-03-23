// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueChartjs from 'vue-chartjs'
import router from './router'
import store from "./store"
import VueNetwork from "vue-network-plugin"
Vue.config.productionTip = false

Vue.use(vueChartjs)
Vue.use(VueNetwork, { displayNotification:true })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
