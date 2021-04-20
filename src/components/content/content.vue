<template>
  <div>
    <homenav></homenav>
    <div class="ct-d">
      <div class="ct-c">
        <el-button type="primary">报名</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Nav from "../pagehome/nav.vue";
export default defineComponent({
  setup() {},
  components: {
    homenav: Nav,
  },
});
</script>
<style scoped>
.ct-d {
  width: 100%;
  margin-top: 100px;
}
.ct-c {
  width: 1000px;
  height: 100px;
  margin: 0 auto;
  background: chartreuse;
}
</style>
