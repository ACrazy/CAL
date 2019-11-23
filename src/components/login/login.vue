<template>
  <div class="content">
    <div class="login-box">
      <div>
        <el-row>
          <el-col :span="14">
            <p>疯狂会计狮记账管理系统</p>
            <p>一个神奇的记账系统-爱用不用</p>
          </el-col>
          <el-col :span="10">
            <div class="login">
              <div>
                <p>密码登录</p>
                <div class="radio-box">
                  <el-radio v-model="radio" label="1">普通用户</el-radio>
                  <el-radio v-model="radio" label="2">系统管理员</el-radio>
                </div>
              </div>
              <el-input placeholder="请输入用户名" suffix-icon="el-icon-user" v-model="userName" class="login-input"></el-input>
              <el-input placeholder="请输入密码" suffix-icon="el-icon-lock" show-password v-model="password" class="login-input" ></el-input>
              <el-button type="primary" @click="submitForm()" class="submit-btn">提交</el-button>
              <div class="login-link">
                <el-link :underline="false" class="pdr10">忘记密码</el-link>
                <el-link :underline="false">注册</el-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      radio: "1"
    };
  },methods:{
      submitForm(){

      }
  }
};
</script>
<style lang="scss" scoped>
.content {
  position: absolute;
  margin-left: -50%;
  width: 100%;
  height: 100%;
  background-color: #409eff;
  .login-box {
    width: 1000px;
    margin: auto;
    position: relative;
    height: 388px;
    top: 300px;
    p {
      font-size: 34px;
      font-weight: 600;
      color: white;
      margin-top: 30px;
    }
    .login {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      background-color: white;
      width: 380px;
      height: 325px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0.5px;
      p {
        font-size: 18px;
        font-weight: 400;
        color: #303133;
        float: left;
      }
      .login-input {
        margin-top: 20px;
      }
      .radio-box {
        margin-top: 37px;
        font-size: 14px;
        float: right;
      }
      .submit-btn {
        margin-top: 20px;
        width: 100%;
        // margin-left: -42px;
      }
      .login-link {
        color: #999999;
        margin-top: 20px;
        float: right;
      }
    }
  }
}
.pdr10{
        padding-right: 10px;
}
</style>