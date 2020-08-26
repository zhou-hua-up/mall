<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>
    <homeSwipper :banners="banners" />
    <recommend :recommends="recommends" />
    <feature-view />
    <TabControl :titles="['流行', '新款', '精选']" />
    <goods-list :goods="goods['pop'].list" />
  </div>
</template>

<script>
import navBar from "components/common/navbar/Navbar";
import homeSwipper from "./childrencom/HomeSwipper";
import recommend from "./childrencom/recommend";
import FeatureView from "./childrencom/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList"

import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "App",
  components: {
    navBar,
    homeSwipper,
    recommend,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
         'pop':{
          page: 0,
          list: []
        },
        'new':{
          page: 0,
          list: []
        },
        'sell':{
          page: 0,
          list: []
        }
      }
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      this.goods[type].page += 1;
      getHomeGoods(type, this.goods[type].page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
#home {
  padding-top: 44px;
}
</style>