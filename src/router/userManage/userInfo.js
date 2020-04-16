const userInfo = () => import('@com/sysSetting/sysSetting')

const userManage = {
  path: '/userManage',
  name: "用户管理",
  children: [{
    path: '/userInfo',
    icon: 'el-icon-setting',
    name: "个人信息",
    single: true,
    component: userInfo,
    children: []
  }]
}

export default userManage;
