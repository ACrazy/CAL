const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/',
  icon: 'el-icon-setting',
  name: "系统设置",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "系统设置",
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
