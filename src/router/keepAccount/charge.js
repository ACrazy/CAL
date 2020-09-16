const charge = () => import("@com/keepAccount/charge");

const keepAccount = {
  path: "/keepAccount",
  name: "记账管理",
  children: [
    {
      path: "/charge",
      icon: "el-icon-setting",
      name: "支出管理",
      single: true,
      component: charge,
      children: []
    }
  ]
};

export default keepAccount;
