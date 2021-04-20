<template>
  <div class="loginP">
    <div class="logCont">
      <span>账号</span>
      <el-input v-model="input" placeholder="请输入账号"></el-input>
      <span>密码</span>
      <el-input
        placeholder="请输入密码"
        v-model="inputp"
        show-password
      ></el-input>
      <div class="login-but">
        <el-button type="primary">登录</el-button>
        <el-button type="primary">注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router/index.js";
import { ref } from "vue";

export default {
  setup() {
    const logIn = () => {};
    return {
      input: ref(""), //账号
      inputp: ref(""), //密码
    };
  },
};
</script>
<style scoped>
.loginP {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #188ae2;
}
.logCont {
  padding: 20px;
  max-width: 300px;
  min-width: 280px;
  height: 350px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.el-input__inner {
  margin-top: 30px;
}
.login-but {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>