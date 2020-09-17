<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  watch: {
    "$store.state.navData": function (newVal) {
      sessionStorage.setItem(
        "navData",
        JSON.stringify(this.$store.state.navData)
      );
    },
  },
  mounted() {
    if (sessionStorage.getItem("navData")) {
      this.$store.state.navData = [
        ...JSON.parse(sessionStorage.getItem("navData")),
      ];
    }
  },
};
</script>
<style scoped>
body {
  margin: 0px;
  padding: 0px;
  font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC,
    Hiragino Sans GB, SimSun, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
