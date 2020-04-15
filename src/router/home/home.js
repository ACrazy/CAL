const Home = () => import('@com/home/home')

const home = {
  path: '/index',
  name: "首页",
  children: [{
    path: '/index',
    icon: 'fa fa-home',
    name: "首页",
    component: Home,
    children: []
  }]
}

export default home;
