const dataDict = () => import('@com/sysSetting/sysSetting')

const dataConfig = {
  path: '/dataConfig',
  name: "数据配置",
  children: [{
    path: '/dataDict',
    icon: 'el-icon-setting',
    name: "数据字典",
    single: true,
    component: dataDict,
    children: []
  }]
}

export default dataConfig;
