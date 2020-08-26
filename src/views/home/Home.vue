<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>
   <homeSwipper :banners="banners"/>
   <recommend :recommends="recommends" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/Navbar";
import homeSwipper from './childrencom/HomeSwipper';
import recommend from './childrencom/recommend'

import { getHomeMultiData } from "network/home";

export default {
  name: "App",
  components: {
    navBar,
    homeSwipper,
    recommend
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}

</style>