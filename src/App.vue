<template>
  <div id="app">
    <div class="login" v-show="loginState">
      <login></login>
    </div>
    <div class="content" v-show="!loginState">
      <!-- 页面顶部 -->
      <header-menu></header-menu>
      <el-row>
        <el-col :span="5">
          <!-- 页面侧边 -->
          <nav-menu></nav-menu>
        </el-col>
        <el-col :span="19">
          <!-- 页面主体 -->
          <div class="con-view">
            <router-view />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Login from "@com/login/login";
import NavMenu from "@com/common/navMenu/navMenu";
import HeaderMenu from "@com/common/headerMenu/headerMenu";
export default {
  name: "App",
  components: {
    NavMenu,
    HeaderMenu,
    Login
  },
  computed:{
    loginState(){
      return this.$store.getters.getLoginState
    }
  }
};
</script>
<style scoped>
.content {
  /* border: 1px solid black; */
  position: absolute;
  width: 1100px;
  height: 100%;
  left: 50%;
  margin-left: -550px;
}
.login {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
