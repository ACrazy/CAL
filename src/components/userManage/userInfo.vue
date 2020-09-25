<template>
  <div id="userInfo">
    <el-card class="user-card">
      <header>
        <el-card class="header-card">
          <p>源稚生</p>
          <p>BREAK OR DIE</p>
        </el-card>
      </header>
      <div class="content">
        <span>123</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#userInfo {
  height: 100%;
  .user-card {
    padding: 0;
    border: none;

    /deep/ .el-card__body {
      padding: 0;
    }
    header {
      width: 100%;
      height: 300px;
      background: #a5a5a5;
      display: flex;
      justify-content: center;
      align-items:flex-end;

      background: url("https://cn.bing.com/th?id=OHR.Matamata_ZH-CN8111830275_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp");
      .header-card {
        width: 33%;
        height: 200px;
        margin-bottom: -60px;
      }
    }
    .content {
      height: 500px;
      background: #e3e3e3;
    }
  }
}
</style>