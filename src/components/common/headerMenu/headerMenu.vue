<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item class="title">疯狂会计狮</el-menu-item>
    <el-menu-item class="float-right">退出</el-menu-item>
    <el-menu-item class="float-right">处理中心</el-menu-item>
    <el-menu-item class="float-right">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.float-right {
  float: right;
}
.title {
  position: absolute;
  float: left;
  font-size: 24px;
  color: black;
  font-weight: 600;
}
</style>