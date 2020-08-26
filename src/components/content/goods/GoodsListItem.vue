<template>
  <div class="GoodsListItem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt />
    </a>
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.GoodsListItem {
  font-size: 13px;
  width: 30%;
}
.GoodsListItem img {
  width: 100%;
}
.info {
  text-align: center;
}
.info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .price {
  color: #f00;
  margin-right: 25px;
  font-size: 10px;
}
.info .collect {
  position: relative;
  font-size: 10px;
}

.info .collect::before {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  top: -3px;
  left: -15px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>