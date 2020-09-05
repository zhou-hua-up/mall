<template>
  <div id="detail">
    <child-nav-bar class="nav-bar" @titleClick="titleCheck" ref="nav" />
    <!-- <ul>
      <li v-for="(item, index) in this.$store.state.cartList" :key="index">{{item.iid}}{{item.count}}</li>
    </ul> -->
    <scroll class="content" ref="scroll" :probetype="3" @scrollHeight="scrollContent">
      <child-swipper :top-images="topImages" class="swipper"></child-swipper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-image-info :imagesInfo="imagesInfo" @imgLoad="imgLoad" />
      <detail-params-info :paramInfo="paramInfo" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addCart="addTOCart" />
    <back-top @click.native="topClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import childNavBar from "./childComponents/childNavBar";
import childSwipper from "./childComponents/childSwipper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import detailImageInfo from "./childComponents/detailImageInfo";
import DetailParamsInfo from "./childComponents/DetailParamsInfo";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import DetailBottomBar from './childComponents/DetailBottomBar'

import {
  getDetails,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "network/detail";
import GoodsList from "components/content/goods/GoodsList";

import scroll from "components/common/scroll/Scroll";

import {backTopMIX} from 'common/mixin'
import { debounce } from "common/utils";

import { imageListener } from "common/mixin";

import {mapActions} from 'vuex'
export default {
  name: "Detail",
  components: {
    childNavBar,
    childSwipper,
    getDetails,
    DetailBaseInfo,
    DetailShopInfo,
    detailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    scroll,
  },
  mixins: [backTopMIX],
  data() {
    return {
      id: "",
      topImages: [],
      goods: {},
      shop: {},
      imagesInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      scrollTarget: [],
      length: 0,
      positionY: 0,
      currentIndex: 0,
    };
  },
  // 这里可以使用activated钩子函数，因为前面使用keep-alive会进行缓存复用，数据得到的会是之前的
  // 但是这里我们还是使用created()，因为这里被keep-alive，只会执行一次，但是我们可以利用keep-alive的属性exclude="" 不包括这个组件
  created() {
    this.id = this.$route.params.id;
    getDetails(this.id).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);

      this.imagesInfo = data.detailInfo;

      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {
    // 这个防抖动函数放在外面 否则每次加载会重新初始化这个防抖函数
    const refresh = debounce(this.$refs.scroll.refreshScroll, 200);
    this.$bus.$on("detailImageLoad", () => {
      refresh();
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refreshScroll();

      this.scrollTarget = [];
      this.scrollTarget.push(0);
      this.scrollTarget.push(this.$refs.params.$el.offsetTop);
      this.scrollTarget.push(this.$refs.comment.$el.offsetTop);
      this.scrollTarget.push(this.$refs.recommend.$el.offsetTop);
    },
    titleCheck(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollTarget[index] + 50, 100);
    },
    scrollContent(position) {
      this.positionY = -position.y + 50;
      this.length = this.scrollTarget.length;
      for (let i in this.scrollTarget) {
        // for in 里面的 i全是字符串型
        // 利用this.currentIndex != parseInt(i) 阻止相等是重复判断
        // 这是普通做法
        // 特殊做法(hacker)是在scrollTarget中push一个极大值。Number.Math_Value(),然后再做判断
        // 如下：
        // this.currentIndex != parseInt(i) &&
        // this.positionY >= this.scrollTarget[parseInt(i)] &&
        // this.positionY < this.scrollTarget[parseInt(i) + 1]
        if (
          this.currentIndex != parseInt(i) &&
          parseInt(i) <= this.length - 2 &&
          this.positionY >= this.scrollTarget[parseInt(i)] &&
          this.positionY < this.scrollTarget[parseInt(i) + 1]
        ) {
          this.currentIndex = parseInt(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        } else if (
          this.currentIndex != parseInt(i) &&
          parseInt(i) === this.length - 1 &&
          this.positionY >= this.scrollTarget[parseInt(i)]
        ) {
          this.currentIndex = parseInt(i);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = (-position.y) > 1000
    },
    ...mapActions(["addProduct"]),
    addTOCart() {
      // 1.获取购物车界面需要展示的数据
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.lowNowPrice
      product.iid = this.id

      // 2.提交(普通方式)
      // this.$store.dispatch("addProduct", product).then(res => {
      //   console.log(res);
      // })
      this.addProduct(product).then(res => {
        this.$toast.show(res, 1500)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #ffff;
  height: 100vh;
}
.content {
  height: calc(100% - 50px - 49px);
  overflow: hidden;
}
</style>