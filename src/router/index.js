import Vue from 'vue'
import Router from 'vue-router'
import Login from '@com/login/login'
import Layout  from '@com/layout/layout'
import Home from '@com/home/home'
import SysSetting from '@com/sysSetting/sysSetting'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      component: Layout,
      // alone: true,
      children: [{
        path: '/index',
        component: Home
      }]
    },
    {
      path: '/aaaaa',
      component: Layout,
      children: [{
        path: '/aa',
        component: SysSetting
      }]
    }
  ]
})
