<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{counter}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cartList>
        <cart-list-item v-for="(item, index) in cartList" :key="index" :checkedGoods="item"></cart-list-item>
      </cartList>
    </scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/Navbar";
import { mapGetters } from "vuex";

import cartList from "./childComponents/CartList";
import cartListItem from "./childComponents/CartListItem";
import cartBottomBar from "./childComponents/CartBottomBar";

import scroll from "components/common/scroll/Scroll";
export default {
  name: "App",
  components: {
    navBar,
    cartList,
    cartListItem,
    cartBottomBar,
    scroll,
  },
  computed: {
    // 第一种用法
    // ...mapGetters(['subCount'])

    // 第二种用法
    ...mapGetters({
      counter: "subCount",
      cartList: "cartList",
    }),
  },
  // 当再次点击到购物车的时候，重新计算可滚动的距离
  activated() {
    this.$refs.scroll.refreshScroll();
  },
};
</script>

<style scoped>
.cart {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: #f69;
  text-align: center;
  color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  border-top:1px solid #ccc;
}
</style>