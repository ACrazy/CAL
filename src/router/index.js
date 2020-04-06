import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载，当路由被访问的时候才加载对应组件
const Login = () =>import('@com/login/login')
const Layout = () =>import('@com/layout/layout')
const Home = () =>import('@com/home/home')
const SysSetting = () =>import('@com/sysSetting/sysSetting')

Vue.use(Router)

let defaultRouter = [
  { path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    hidden: true,
    children: []
  },
  {
    path: '/index',
    icon: 'fa fa-dashboard', // 图标样式class
    component: Layout,
    children: [
      {
        path: '/index',
        icon: 'fa fa-dashboard', // 图标样式class
        component: Home,
        children: []
      }
    ]
  }
]

export default new Router({
  mode: 'hash',
  routes: defaultRouter
})
