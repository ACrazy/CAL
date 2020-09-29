const userToDo = () => import('@com/userManage/userToDo')

const userManage = {
  path: '/userManage',
  name: "用户管理",
  children: [{
    path: '/userToDo',
    icon: 'el-icon-setting',
    name: "代办事项",
    single: true,
    component: userToDo,
    children: []
  }]
}

export default userManage;
