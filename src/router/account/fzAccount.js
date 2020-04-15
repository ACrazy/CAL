const fzAccount = () => import('@com/account/fzAccount')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/fzAccount',
    icon: 'el-icon-setting',
    name: "负债账户",
    single: true,
    component: fzAccount,
    children: []
  }]
}

export default account;
