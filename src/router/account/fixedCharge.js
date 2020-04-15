const fixedCharge = () => import('@com/account/fixedCharge')

const account = {
  path: '/account',
  name: "账户管理",
  children: [{
    path: '/fixedCharge',
    icon: 'el-icon-setting',
    name: "固定支出",
    single: true,
    component: fixedCharge,
    children: []
  }]
}

export default account;
