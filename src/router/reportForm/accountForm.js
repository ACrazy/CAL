const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/reportForm',
  name: "系统报表",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "账户报表",
    single: true,
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
