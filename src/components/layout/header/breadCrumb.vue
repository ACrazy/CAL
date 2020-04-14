<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
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
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/index", name: "首页" }].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
};
</script>