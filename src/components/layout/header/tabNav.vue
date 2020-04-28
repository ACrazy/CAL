<template>
  <div>
    <div class="tabnavBox">
      <transition-group name="list" tag="ul">
        <li
          v-for="(item, index) in tabData"
          @contextmenu.prevent="openMenu(item,$event,index)"
          :key="item.path"
          class="tabnav"
          :class="{ active: $route.path === item.path }"
        >
          <router-link :to="item.path">{{ item.title }}</router-link>
          <i @click="removeTab(item)" class="el-icon-error" v-if="index !== 0"></i>
        </li>
      </transition-group>
    </div>
    <ul
      v-show="this.rightMenuShow"
      :style="{left:this.left+'px',top:this.top+'px'}"
      class="menuBox"
    >
      <li @click="removeTab">关闭</li>
      <li @click="removeRight">关闭右侧</li>
      <li @click="removeOtherTab">关闭其他</li>
      <li @click="removeAllTab">全部关闭</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabNav",
  watch: {
    rightMenuShow(val) {
      if (val) {
        document.body.addEventListener("click", () => {
          this.rightMenuShow = false;
        });
      } else {
        document.body.removeEventListener("click", () => {
          this.rightMenuShow = false;
        });
      }
    }
  },
  computed: {
    tabData() {
      return this.$store.getters.getNavData;
    }
  },
  data() {
    return {
      rightMenuShow: false,
      left: 0,
      top: 0,
      tabItem: {}
    };
  },
  methods: {
    //右键打开删除菜单
    openMenu(item, e, index) {
      if (index === 0) {
        return false;
      }
      this.rightMenuShow = true;
      this.left = e.clientX + 10;
      this.top = e.clientY;
      this.tabItem = item;
    },
    // 删除tab标签
    removeTab(tabItem) {
      const tab = tabItem || this.tabItem;
      const index = this.tabData.findIndex(item => item.path === tab.path);
      const isCurPath =
        this.$router.currentRoute.fullPath === this.tabData[index].path;

      this.tabData.splice(index, 1);

      /*
       * 如果后面有tab标签，取下一个，否则取前面那个
       */
      const currence = this.tabData[index]
        ? this.tabData[index].path
        : this.tabData[index - 1].path;

      if (isCurPath) {
        this.$router.push(currence);
      }
    },
    // 关闭右侧
    removeRight() {
      const index = this.tabData.findIndex(
        item => item.path === this.tabItem.path
      );

      this.tabData.splice(index + 1, this.tabData.length);

      this.$router.push(this.tabItem.path);
    },
    // 关闭其他
    removeOtherTab() {
      this.tabData.splice(1, this.tabData.length);
      this.tabData.push(this.tabItem);
      this.$router.push(this.tabItem.path);
    },
    // 关闭所有
    removeAllTab() {
      this.tabData.splice(1, this.tabData.length);
      this.$router.push("/index");
    }
  }
};
</script>

<style>
.tabnav {
  display: inline-block;
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-enter-active {
  transition: all 0.5s;
}

.list-leave-active {
  position: absolute;
  transition: all 1s;
}
</style>
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

@mixin set-value($side, $value) {
  @each $prop in $leftright {
    #{$side}-#{$prop}: $value;
  }
}

.tabnavBox {
  @extend %w100;
  height: 42px;
  min-height: 42px;
  overflow: hidden;
  border-#{$top}: 1px solid #f6f6f6;
  border-#{$bottom}: 1px solid #d8dce5;

  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  ul {
    display: flex;
    justify-content: flex-start;
    padding-#{$left}: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;

    li {
      height: 30px;
      line-height: 31px;
      @extend %cursor;
      margin-#{$top}: 6px;
      margin-#{$right}: 5px;

      border: 1px solid #cccccc;

      overflow: hidden;

      &:not(:first-child) {
        padding-#{$right}: 10px;
        min-width: 80px;
      }

      a {
        @include set-value(padding, 13px);
        display: inline-block;
        @extend %h100;
        font-size: 12px;
        color: #999999;
      }

      &:nth-child(n + 2) {
        a {
          padding-#{$right}: 15px;
        }
      }

      i {
        @extend %cursor;

        &:hover {
          color: red;
        }
      }
    }

    li.active {
      background: #409eff;
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  }
}

.menuBox {
  margin: 0;
  background: #fff;
  z-index: 999;
  position: absolute;
  padding: 5px 0;
  border: 1px solid #cccccc;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, 0.3);

  li {
    margin: 0;
    padding: 7px 16px;
    @extend %cursor;

    &:hover {
      background: #e1e6ea;
    }
  }
}
</style>
