const Home = () => import('@com/home/home')

const home = {
  path: '/index',
  icon: 'fa fa-home',
  name: "首页",
  single: true,
  children: [{
    path: '/index',
    icon: 'fa fa-home',
    name: "首页",
    component: Home,
    children: []
  }]
}

export default home;
