import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './config/rem'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$http = axios


const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
