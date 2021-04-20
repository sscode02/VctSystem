<template>
  <el-main>
    <h1>{{ a }}</h1>
    <div>
      <el-row :gutter="10" style="margin: 10%">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" @click="b"
          ><div class="grid-content bg-purple">1</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
          ><div class="grid-content bg-purple-light">2</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
          ><div class="grid-content bg-purple">3</div></el-col
        >
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
          ><div class="grid-content bg-purple-light">4</div></el-col
        >
      </el-row>
    </div>
  </el-main>
</template>

<script>
import { ref } from "vue";
import router from "../../router/index.js";
export default {
  setup(props, ctx) {
    let a = ref("this is homeContet");

    const b = () => {
      ctx.emit("contentname", {});
    };
    return {
      a,
      b,
    };
  },
};
</script>

<style>
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>