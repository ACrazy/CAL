<template>
  <el-aside id="asideNav">
    <div class="logo-name">
      <p v-if="$store.getters.logoShow">XU</p>
      <p v-else>疯狂会计狮</p>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
      @select="selectmenu"
      background-color="#03152A"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#ffffff"
      :unique-opened="true"
      :router="true"
    >
      <template v-for="(item,index) in routers">
        <el-submenu
          v-if="!item.single && item.children && item.children.length>0"
          :index="index+''"
          :key="item.path"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name}}</span>
          </template>
          <!-- 侧边栏数据 -->
          <menu-tree :menuData="item.children"></menu-tree>
        </el-submenu>
        <el-menu-item :index="item.path" :key="item.path" v-else-if="!item.hidden">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>    

<script>
import MenuTree from "./menuTree";
export default {
  components: {
    MenuTree
  },
  computed: {
    routers: function() {
      return this.$router.options.routes;
    }
  },
  data() {
    return {
      aa: [
        {
          path: "/index",
          icon: "fa fa-home", // 图标样式class
          name: "test1",
          children: []
        },
        {
          path: "/",
          icon: "fa fa-home", // 图标样式class
          name: "test1",
          children: [
            {
              path: "/aa",
              icon: "fa fa-home", // 图标样式class
              name: "test3",
              children: []
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectmenu(val) {
      // this.$router.push(val);
      console.log(val);
    }
  },
  created() {
    console.log(this.routers);
  }
};
</script>

<style lang="scss" scoped>
#asideNav {
  width: auto !important;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #e6e6e6;
  .logo-name {
    background-color: #03152a !important;
    width: 100%;
    font-weight: 300;
    z-index: 999;
    p {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      color: #5e6d82;
      font-weight: bold;
    }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  /deep/ .el-menu {
    flex: 1;
    overflow: inherit;
    border-right: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .fa {
      vertical-align: middle;
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
    .el-menu-item {
      background-color: #020f1d !important;
      border-bottom: 1px solid #020f1d;
      &:hover {
        color: #ffffff !important;
        background-color: #375573 !important;
      }
    }
    .el-menu-item.is-active {
      background-color: #56a9ff !important;
    }
    .is-opened > .el-submenu__title > .el-icon-arrow-down {
      color: #ffffff;
      font-weight: 500;
      font-size: 18px;
    }
  }
}
</style>