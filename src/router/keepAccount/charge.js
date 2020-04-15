const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/keepAccount',
  name: "记账管理",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "支出管理",
    single: true,
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
