<template>
  <div id="layout">
    <el-container>
      <layout-aside></layout-aside>
      <el-container>
        <layout-header></layout-header>
        <el-main>
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>
          <layout-footer></layout-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import layoutAside from "./aside/aside";
import layoutHeader from "./header/header";
import layoutFooter from "./footer/footer";

export default {
  components: {
    layoutHeader,
    layoutAside,
    layoutFooter
  }
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: #f2f2f2;
  font-size: 14px;
  color: #333333;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

html,
body,
#layout,
.el-container,
#asideNav,
ul.el-menu {
  height: 100%;
}
</style>