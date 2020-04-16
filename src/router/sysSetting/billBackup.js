const billBackup = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/sysSetting',
  name: "系统管理",
  children: [{
    path: '/billBackup',
    icon: 'el-icon-setting',
    name: "账单备份",
    single: true,
    component: billBackup,
    children: []
  }]
}

export default sysSetting;
