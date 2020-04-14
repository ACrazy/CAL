import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载，当路由被访问的时候才加载对应组件
const Login = () => import('@com/login/login')
const Layout = () => import('@com/layout/layout')

Vue.use(Router)

// 解决两次访问相同路由地址报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let defaultRouter = [{
    path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    name: "登录",
    path: '/login',
    component: Login,
    hidden: true,
    children: []
  }
]

const contexts = require.context("./", true, /\.js$/);
let Routers = [...defaultRouter];

contexts.keys().forEach(key => {
  if (contexts(key).default && contexts(key).default.path) {
    contexts(key).default.component = Layout
    Routers.push(contexts(key).default);
  }
})

//404页面跳转
Routers.push({
  path: '*',
  icon: 'fa fa-home',
  component: Layout,
  hidden: true
})

const router = new Router({
  mode: 'hash',
  routes: Routers
})

router.beforeEach((to, from, next) => {
  // defaultRouter[2].children = [...Routers];
  next();
});

export default router
