const gdAccount = () => import('@com/account/gdAccount')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/gdAccount',
    icon: 'el-icon-setting',
    name: "固定账户",
    single: true,
    component: gdAccount,
    children: []
  }]
}

export default account;
