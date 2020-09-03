<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="left-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="left-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="left-item"  @click="collectGoods">
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    collectGoods() {
      console.log("1");
    },
    addCart() {
      this.$emit("addCart")
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: relative;
  display: flex;
}
.bar-item, 
.left-item,
.cart,
.buy{
  flex: 1;
}
.bar-left,
.bar-right {
  display: flex;
  text-align: center;
}
.cart {
  background-color: #ffe817;
}
.buy {
  background-color: #f69;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto ;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -53px;
}
.bar-left .shop {
  background-position: 0 -248px;
}
.bar-left .text {
  font-size: 13px;
}
.bar-right {
  text-align: center;
  line-height: 49px;
}
</style>