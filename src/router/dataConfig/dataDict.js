const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/dataConfig',
  name: "数据配置",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "数据字典",
    single: true,
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
