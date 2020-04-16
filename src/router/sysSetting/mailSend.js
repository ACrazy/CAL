const mailSend = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
    path: '/sysSetting',
    name: "系统管理",
  children: [{
    path: '/mailSend',
    icon: 'el-icon-setting',
    name: "邮件发送",
    single: true,
    component: mailSend,
    children: []
  }]
}

export default sysSetting;
