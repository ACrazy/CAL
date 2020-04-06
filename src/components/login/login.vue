<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header"></div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">疯狂会计狮</p>
          <p class="title">高档的奢侈品未必能提高你生活的品质</p>
          <el-card shadow="always" class="login-module">
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px">
              <el-form-item>
                <el-input
                  v-model="loginForm.username"
                  suffix-icon="el-icon-user"
                  placeholder="请输入登录账号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="loginForm.password"
                  show-password
                  suffix-icon="el-icon-lock"
                  placeholder="请输入登录密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      smdl: true,
      loginForm: {
        username: "vue-xuadmin",
        password: "123456"
      }
    };
  },
  methods: {
    submitForm() {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        });
        return false;
      } else {
        this.$router.push("/index")
      }
    },
    message() {
      const h = this.$createElement;
      this.$notify({
        title: "欢迎使用",
        message: h(
          "i",
          { style: "color: teal" },
          "你不理财，财不理你！欢迎使用疯狂会计狮-后台管理系统。"
        ),
        duration: 6000
      });
    }
  },
  mounted() {
    this.message();
  }
};
</script>
<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .loginConbox {
    background: #2d3a4b;
  }
  .header {
    height: 60px;
    position: relative;
    background: #2d3a4b;
    /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
    .logo {
      margin-left: 30px;
      width: 500px;
      float: left;
      height: 40px;
      padding-top: 10px;
      img {
        height: 100%;
      }
    }
  }

  .loginBox {
    .iconcolor {
      color: #409eff;
    }

    padding: 74px 0 118px;

    .loginCon {
      width: 990px;
      margin: auto;
      position: relative;
      height: 388px;

      .el-card__header {
        border-bottom: 0px;
      }
      .title {
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        width: 500px;
        float: left;
        margin-top: 0px;
        &:first-child {
          font-size: 34px;
          margin-top: 50px;
          margin-bottom: 30px;
        }
      }
      .login-module {
        width: 380px;
        height: 325px;
        margin-top: 60px;
        border: none;
        position: absolute;
        right: 0;

        .formTitlt {
          font-size: 18px;
          font-weight: 400;

          .titIconbox {
            float: right;

            .pointer {
              cursor: pointer;
            }
          }
        }

        .smalltxt {
          text-align: right;

          .a {
            text-decoration: none;
            color: #999999;
            font-size: 12px;
            margin-left: 8px;
          }
        }
      }

      .el-form-item__content {
        margin-left: 0px !important;

        .subBtn {
          width: 100%;
        }
      }
    }

    .el-input__inner,
    .el-button,
    .el-card,
    .el-message {
      border-radius: 0px !important;
    }

    .el-form-item__content .ico {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      width: 40px;
      height: 39px;
      text-align: center;
      border-right: 1px solid #ccc;
    }

    .ewmbox {
      width: 100%;
      height: 240px;
      margin-top: -25px;

      .ewm {
        width: 140px;
        height: 140px;
        margin: 20px auto;

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }

      .ewmicon {
        width: 140px;
        margin: 20px auto 0;

        .iconfont {
          float: left;
        }

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }
    }
  }
}
</style>
