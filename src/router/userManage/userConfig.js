const userConfig = () => import('@com/sysSetting/sysSetting')

const userManage = {
  path: '/userManage',
  name: "用户管理",
  children: [{
    path: '/userConfig',
    icon: 'el-icon-setting',
    name: "个性化配置",
    single: true,
    component: userConfig,
    children: []
  }]
}

export default userManage;
