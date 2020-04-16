const paramConfig = () => import('@com/sysSetting/sysSetting')

const dataConfig = {
  path: '/dataConfig',
  name: "数据配置",
  children: [{
    path: '/paramConfig',
    icon: 'el-icon-setting',
    name: "参数配置",
    single: true,
    component: paramConfig,
    children: []
  }]
}

export default dataConfig;
