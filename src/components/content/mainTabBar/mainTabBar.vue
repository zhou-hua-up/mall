<template>
  <div class="wrapper">
    <router-view></router-view>
    <Tab-Bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="~assets/img/tabbar/ic_tabbar_home_select.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/ic_tabbar_home_select (1).png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/tabbar.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/tabbar (1).png" alt />
        <div slot="item-text">选项</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_shoppingup.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/icon_tabbar_shoppingup (1).png" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_myup.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/icon_tabbar_myup (1).png" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </Tab-Bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>