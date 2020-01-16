<template>
  <div class="scrol">
    <el-scrollbar class="menu">
      <el-menu class="el-menu-vertical-demo" :unique-opened="true" default-active="0">
        <div v-for="(item,index) in navList" :key="index">
          <!-- 没有下拉子项（判断条件：是否有children） -->
          <el-menu-item :index="String(index)" v-if="!item.children">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <!-- 具有下拉子项 -->
          <el-submenu :index="String(index)" v-else>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group class="mgt-16">
              <div v-for="(elem,num) in item.children" :key="num">
                <el-menu-item :index="String(index)+String(num)" @click="go(elem.tag)">
                  <i class="el-icon-setting"></i>
                  <span slot="title">{{elem.title}}</span>
                </el-menu-item>
              </div>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { menuList } from "@com/constant/navMenu/index";
export default {
  data() {
    return {
      navList: menuList,
      curLocation: ""
    };
  },
  methods: {
    go(url) {
      if (this.curLocation !== url) {
        this.$router.push(url);
        this.curLocation = url;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.scrol {
  .menu {
    width: 200px;
    /deep/ .el-scrollbar__wrap {
      overflow: auto;
    }
    /deep/ .el-menu {
      border: 0;
    }
    .mgt-16 {
      margin-top: -16px;
    }
  }
  /deep/ .el-scrollbar {
    overflow: visible;
  }
}
</style>