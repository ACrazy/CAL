import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载，当路由被访问的时候才加载对应组件
const Login = () => import('@com/login/login')
const Layout = () => import('@com/layout/layout')
const page404 = () => import('@com/page404/page404')

Vue.use(Router)

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let Routers = [{
    path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    name: "登录",
    component: Login,
    hidden: true,
    children: []
  },
  {
    path: '/index',
    icon: 'fa fa-home',
    name: "首页",
    meta: false,
    component: Layout,
    single: true,
    children: []
  },
  {
    path: '/account',
    icon: 'el-icon-setting',
    name: "账户管理",
    component: Layout,
    children: []
  },
  {
    path: '/keepAccount',
    icon: 'el-icon-setting',
    name: "记账管理",
    component: Layout,
    children: []
  },
  {
    path: '/userManage',
    icon: 'el-icon-setting',
    name: "用户设置",
    component: Layout,
    children: []
  },
  {
    path: '/reportForm',
    icon: 'el-icon-setting',
    name: "系统报表",
    component: Layout,
    children: []
  },
  {
    path: '/sysSetting',
    icon: 'el-icon-setting',
    name: "系统管理",
    component: Layout,
    children: []
  },
  {
    path: '/dataConfig',
    icon: 'el-icon-setting',
    name: "数据配置",
    component: Layout,
    children: []
  },
  {
    path: '*',
    component: page404,
    hidden: true
  }
]

const contexts = require.context("./", true, /\.js$/);

contexts.keys().forEach(key => {
  if (contexts(key).default && contexts(key).default.path) {
    Routers.forEach(item => {
      if (contexts(key).default.path === item.path) {
        item.children = [...item.children, ...contexts(key).default.children]
      }
    })
  }
})

const router = new Router({
  mode: 'hash',
  routes: Routers
})

router.beforeEach((to, from, next) => {
  // NProgress.start();
  next();
  
});

router.afterEach((to, from, next) => {
  // NProgress.done()
})

export default router
