const tzAccount = () => import('@com/account/tzAccount')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/tzAccount',
    icon: 'el-icon-setting',
    name: "投资账户",
    single: true,
    component: tzAccount,
    children: []
  }]
}

export default account;
