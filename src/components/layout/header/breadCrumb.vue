<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" :to="toPath(item.path)">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      breadList: []
    };
  },
  watch: {
    $route(val) {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.path === "/index";
    },
    //跳转path是否为导航栏父节点
    isLegal(path){
      return this.$route.matched[0].path !== path;
    },
    getBreadcrumb() {
      let matched = this.$route.matched;

      if (!this.isHome(matched[0])) {
        matched = [{ path: "/index", name: "首页" }].concat(matched);
      }
      this.breadList = matched;
    },
    toPath(path) {
      if (this.isHome(path)) {
        return { path: path };
      } else {
        return this.isLegal(path) ? { path: path } : {};
      }
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>