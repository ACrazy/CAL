const mesgNot = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
    path: '/sysSetting',
    name: "系统管理",
  children: [{
    path: '/mesgNot',
    icon: 'el-icon-setting',
    name: "消息通知",
    single: true,
    component: mesgNot,
    children: []
  }]
}

export default sysSetting;
