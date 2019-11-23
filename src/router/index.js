import Vue from 'vue'
import Router from 'vue-router'
import Login from '@com/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
