<template>
  <el-header class="header-d">
    <el-button type="primary" @click="b">登录</el-button
    ><el-button type="primary">注册</el-button>
    <el-button type="primary" @click="intoPersonCenter">个人信息</el-button>
  </el-header>
</template>

<script>
import { getCurrentInstance, reactive, ref } from "vue";
import router from "../../router/index.js";
import { Login } from "../../api/encapsulates-req.js";

export default {
  setup(props, context) {
    const a = ref("Nav");
    const b = () => {
      Login().then((res) => {});
      //router.push({ name: "login", params: { u: "1" } });
    };
    const intoPersonCenter = () => {
      router.push({ name: "personalcenter", params: { u: "1" } });
    };
    return {
      a,
      b,
      intoPersonCenter,
    };
  },
  props: {},
};
</script>
<style>
.header-d {
  display: flex;
  flex-direction: row-reverse;
  background-color: #99cccc;
}
</style>