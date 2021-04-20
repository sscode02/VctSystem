
<template>
  <el-container>
    <el-header><homenav></homenav></el-header>
    <el-container>
      <el-aside width="200px" class="aside-el">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>


<script >
import { ref } from "vue";
import Nav from "../pagehome/nav.vue";

export default {
  setup() {
    return {};
  },
  components: {
    homenav: Nav,
  },
};
</script>

<style scoped>
.aside-el {
  height: 100%;
}
</style>