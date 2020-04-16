const userAuthority = () => import('@com/sysSetting/sysSetting')

const sysSetting = {
    path: '/sysSetting',
    name: "系统管理",
  children: [{
    path: '/userAuthority',
    icon: 'el-icon-setting',
    name: "用户权限",
    single: true,
    component: userAuthority,
    children: []
  }]
}

export default sysSetting;
