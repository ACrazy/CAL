const xnAccount = () => import('@com/account/xnAccount')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/xnAccount',
    icon: 'el-icon-setting',
    name: "虚拟账户",
    single: true,
    component: xnAccount,
    children: []
  }]
}

export default account;
