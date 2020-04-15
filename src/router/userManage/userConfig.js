const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/userManage',
  name: "用户管理",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "个性化配置",
    single: true,
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
