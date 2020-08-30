<template>
  <div class="childNavBar">
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/img/common/back.svg" alt @click="backClick" />
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, index) in titles"
          :key="index"
          :class="{active: currentIndex === index}"
          @click="titleClick(index)"
        >{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/Navbar";
export default {
  name: "App",
  components: {
    navBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.childNavBar {
  text-align: center;
  font-size: 13px;
}
.left {
  margin-left: 5px;
  margin-top: 6px;
}
.active {
  color: #f00;
}
.center {
  display: flex;
}
.center span {
  flex: 1;
}
</style>