import Vue from 'vue'
import Router from 'vue-router'

//路由懒加载，当路由被访问的时候才加载对应组件
const Login = () => import('@com/login/login')
const Layout = () => import('@com/layout/layout')

Vue.use(Router)

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
let routers = [...defaultRouter];

contexts.keys().forEach(key => {
  if (contexts(key).default && contexts(key).default.path) {
    contexts(key).default.component = Layout
    routers.push(contexts(key).default);
  }
})

//404页面跳转
routers.push({
  path: '*',
  icon: 'fa fa-home',
  component: Layout,
  hidden: true
})

console.log(routers)

const router = new Router({
  mode: 'hash',
  routes: routers
})

router.beforeEach((to, from, next) => {
  // defaultRouter[2].children = [...routers];
  next();
});

export default router
