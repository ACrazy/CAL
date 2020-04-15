const SysSetting = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
    path: '/sysSetting',
    name: "系统管理",
  children: [{
    path: '/system',
    icon: 'el-icon-setting',
    name: "消息通知",
    single: true,
    component: SysSetting,
    children: []
  }]
}

export default sysSetting;
