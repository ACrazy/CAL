const funLogs = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
  path: '/sysSetting',
  name: "系统管理",
  children: [{
    path: '/funLogs',
    icon: 'el-icon-setting',
    name: "操作日志",
    single: true,
    component: funLogs,
    children: []
  }]
}

export default sysSetting;
