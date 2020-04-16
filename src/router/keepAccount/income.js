const income = () => import('@com/sysSetting/sysSetting')

const keepAccount = {
  path: '/keepAccount',
  name: "记账管理",
  children: [{
    path: '/income',
    icon: 'el-icon-setting',
    name: "收入管理",
    single: true,
    component: income,
    children: []
  }]
}

export default keepAccount;
