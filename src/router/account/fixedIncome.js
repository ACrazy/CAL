const fixedIncome = () => import('@com/account/fixedIncome')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/fixedIncome',
    icon: 'el-icon-setting',
    name: "固定收入",
    single: true,
    component: fixedIncome,
    children: []
  }]
}

export default account;
