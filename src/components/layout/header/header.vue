<template>
  <div>
    <el-header id="header">
      <span class="hideAside" @click="collapse">
        <i class="fa fa-indent fa-lg"></i>
      </span>
      <div class="bread-crumb">
        <bread-crumb></bread-crumb>
      </div>
      <!-- <bread-crumb class="bread-crumb"></bread-crumb> -->
      <ul class="personal">
        <li class="fullScreen" @click="fullScreen">
          <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
            <i class="fa fa-arrows-alt fa-lg"></i>
          </el-tooltip>
        </li>
        <li>{{ "超级管理员" }}</li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              源稚生
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">个人资料</el-dropdown-item>
              <el-dropdown-item command="b">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="icon">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </li>
      </ul>
    </el-header>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
import BreadCrumb from "./breadCrumb";
import Cookies from "js-cookie";
//   import langSelect from '../../../components/lang/langSelect'
import TabNav from "./tabNav";

export default {
  name: "Header",
  components: { BreadCrumb, TabNav },
  data() {
    return {
      isfullScreen: true,
      avatar: "./static/images/icon.jpg"
    };
  },
  methods: {
    collapse() {
      this.$store.dispatch("collapse");
    },
    fullScreen() {
      if (this.isfullScreen) {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
        this.isfullScreen = false;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        this.isfullScreen = true;
      }
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push("/login")
      }
    }
  }
};
</script>

<style lang="scss">
$top: top;
$bottom: bottom;
$left: left;
$right: right;
$leftright: ($left, $right);

%w100 {
  width: 100%;
}

%h100 {
  height: 100%;
}

%cursor {
  cursor: pointer;
}

html,
body,
#app,
.el-container,
#asideNav,
ul.el-menu {
  @extend %h100;
}

@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}

#header {
  max-height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;

  .hideAside {
    @extend %cursor;
  }

  .bread-crumb {
    position: absolute;
    left: 256px;
    margin-top: 18px;
  }

  .personal {
    display: flex;
    flex-direction: row;

    li {
      @include set-value(margin, 13px);
      font-size: 12px;
    }

    .fullScreen {
      @extend %cursor;
    }

    .el-dropdown-link {
      @extend %cursor;
    }

    .icon {
      margin-top: 5px;
    }
  }
}
</style>
