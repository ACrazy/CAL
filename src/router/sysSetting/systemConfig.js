const systemConfig = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/sysSetting',
  name: "系统管理",
  children: [{
    path: '/systemConfig',
    icon: 'el-icon-setting',
    name: "系统设置",
    single: true,
    component: systemConfig,
    children: []
  }]
}

export default sysSetting;
