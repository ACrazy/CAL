import Vue from 'vue'
import Router from 'vue-router'
import Login from '@com/login/login'

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
