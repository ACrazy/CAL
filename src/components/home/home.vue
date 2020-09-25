<template>
  <div>
    <el-row :gutter="20" class="card">
      <el-col :span="8" class="card-info">
        <el-card>
          <p class="title">
            <i class="fa fa-th-large fa-lg"></i>快捷方式
          </p>
          <ul>
            <li>
              <router-link to="/addArticle" class="kjfs kjfs-bluee">
                <span>
                  <i class="el-icon-tickets fa-2x"></i>
                </span>
                <span>发表文章</span>
              </router-link>
            </li>
            <li>
              <router-link to="/dragTabe" class="kjfs kjfs-pinkk">
                <span>
                  <i class="fa fa-hand-stop-o fa-2x"></i>
                </span>
                <span>拖拽排序</span>
              </router-link>
            </li>
            <li>
              <router-link to="/pagePermissions" class="kjfs kjfs-yelloww">
                <span>
                  <i class="fa fa-universal-access fa-2x"></i>
                </span>
                <span>权限测试</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="/upload" class="kjfs kjfs-grennn">
                <span>
                  <i class="fa fa-cloud-upload fa-2x"></i>
                </span>
                <span>文件上传</span>
              </router-link>
            </li>
            <li>
              <router-link to="/navClassifies" class="kjfs kjfs-purplee">
                <span>
                  <i class="fa el-icon-menu fa-2x"></i>
                </span>
                <span>前台菜单</span>
              </router-link>
            </li>
            <li>
              <router-link to="/markdown" class="kjfs kjfs-lightBluee">
                <span>
                  <i class="fa fa-file-code-o fa-2x"></i>
                </span>
                <span>编辑器</span>
              </router-link>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8" class="card-info">
        <el-card>
          <p class="title">
            <i class="fa fa-file-text-o"></i>收支情况
          </p>
          <ul>
            <li>
              <router-link to="#">
                <span>今日支出</span>
                <span class="num">66</span>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <span>本月支出</span>
                <span class="num">66</span>
              </router-link>
            </li>
          </ul>
          <ul>
            <li>
              <router-link to="#">
                <span>今日收入</span>
                <span class="num">66</span>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <span>本月收入</span>
                <span class="num">66</span>
              </router-link>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8" class="card-info">
        <el-card>
          <p class="title">
            <i class="fa fa-file-text-o"></i>待办事项
          </p>
          <div class="text">
            <div
              v-for="(o,index) in 5"
              :key="o"
              class="item"
            >{{`${index+1}、列表内容列表内容列表内容列表内容列表内容列表内容列表内容列表内容${o}`}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20"></el-row>
  </div>
</template>

<style lang="scss" scoped>
$pinkk: #eec2d3;
$bluee: #409eff;
$yelloww: #f4d884;
$grennn: #89dda0;
$purplee: #78a2ea;
$lightBluee: #b8d6ff;

.card {
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      flex: 1;

      a {
        color: #666666;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          height: 44px;
        }
        .num {
          line-height: 44px;
          font-size: 42px;
          color: #409eff;
          margin: 0px;
        }
      }

      .kjfs-bluee {
        color: $bluee;
      }
      .kjfs-pinkk {
        color: $pinkk;
      }
      .kjfs-yelloww {
        color: $yelloww;
      }
      .kjfs-grennn {
        color: $grennn;
      }
      .kjfs-purplee {
        color: $purplee;
      }
      .kjfs-lightBluee {
        color: $lightBluee;
      }
      &:hover {
        .kjfs-bluee {
          color: #ffffff;
          background: $bluee;
        }
        .kjfs-pinkk {
          color: #ffffff;
          background: $pinkk;
        }
        .kjfs-yelloww {
          color: #ffffff;
          background: $yelloww;
        }
        .kjfs-grennn {
          color: #ffffff;
          background: $grennn;
        }
        .kjfs-purplee {
          color: #ffffff;
          background: $purplee;
        }
        .kjfs-lightBluee {
          color: #ffffff;
          background: $lightBluee;
        }
      }
    }
  }
  .title {
    font-size: 14px;
    padding: 10px;
    i {
      margin-right: 5px;
    }
  }
  .text {
    .item {
      font-size: 14px;
      padding: 16px 16px;
      margin-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card-info {
    height: 336px;
    overflow: hidden;
  }
}
</style>