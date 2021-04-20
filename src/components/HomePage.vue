<template>
  <homenav></homenav>
  <router-view @contentname="routpage" :name="pagename"></router-view>
</template>

<script>
import { getCurrentInstance, reactive, ref, nextTick } from "vue";
import Nav from "./pagehome/nav.vue";
import contentVue from "./content/content.vue";
import router from "../router/index.js";

export default {
  setup(props, context) {
    let pagename = ref("homecontent");
    const routpage = (mse) => {
      router.push({ name: "content", params: { mse } });
      console.log("1");
    };
    return {
      routpage,
      pagename,
    };
  },
  components: {
    homenav: Nav,
  },
};
</script>
