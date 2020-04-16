const accountForm = () => import('@com/sysSetting/sysSetting')

const reportForm = {
  path: '/reportForm',
  name: "系统报表",
  children: [{
    path: '/accountForm',
    icon: 'el-icon-setting',
    name: "账户报表",
    single: true,
    component: accountForm,
    children: []
  }]
}

export default reportForm;
