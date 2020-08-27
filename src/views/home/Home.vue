<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>
    <Scroll class="content" ref="scroll">
      <homeSwipper :banners="banners" />
      <recommend :recommends="recommends" />
      <feature-view />
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="nowType" />
    </Scroll>
  </div>
</template>

<script>
import navBar from "components/common/navbar/Navbar";
import homeSwipper from "./childrencom/HomeSwipper";
import recommend from "./childrencom/recommend";
import FeatureView from "./childrencom/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import Scroll from "components/common/scroll/Scroll";

import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "App",
  components: {
    navBar,
    homeSwipper,
    recommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
    };
  },
  computed: {
    nowType() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.$bus.$on("ItemImageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    /* 事件监听相关方法  */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /* 网络请求相关方法  */
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      this.goods[type].page += 1;
      getHomeGoods(type, this.goods[type].page).then((res) => {
        this.goods[type].list.push(...res.data.list);
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
  position: relative;
  height: 100vh;
}

.content {
  /* 通过定位设置显示高度 注意这里父元素必须是视口高度 否则不行 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>