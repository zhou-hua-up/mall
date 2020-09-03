<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物中心</div>
    </nav-bar>
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="isShowControl1" class="showControl" />
    <Scroll class="content" ref="scroll" :probetype="3" @scrollHeight="contentScroll" :pullupload="true" @pullingUp="loadMore">
      <homeSwipper :banners="banners" @swipperLoad="getTabHeight" />
      <recommend :recommends="recommends" />
      <feature-view />
      <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="nowType" />
    </Scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop" />
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


import {backTopMIX} from 'common/mixin'
import {debounce} from 'common/utils'

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
  mixins: [backTopMIX],
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
      tabHeight: 0,
      isShowControl1: false
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
    // 这个防抖动函数放在外面 否则每次加载会重新初始化这个防抖函数
    const refresh = debounce(this.$refs.scroll.refreshScroll, 200)
    this.$bus.$on("homeImageLoad", () => {
       refresh();
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      // console.log(position.y);
      this.isShowBackTop = (-position.y) > 1000
      this.isShowControl1 = (-position.y) > 610
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 获取tabControl栏距离顶部的高度
    getTabHeight() {
      // 这个问题还没解决
      // 这个测试高度再第一次打开网页的时候，测得的高度是错误的 所以直接测试滚动得到具体的610高度
      // this.tabHeight = this.$refs.tabControl2.$el.offsetTop 
      // console.log(this.tabHeight);
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
        setTimeout(() => {
          this.$refs.scroll.finishPullUp()
        },2000)
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

.showControl {
  position: relative;
   z-index: 9;
}
</style>