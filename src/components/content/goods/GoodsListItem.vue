<template>
  <div class="GoodsListItem">
    <img :src="showImage" alt @load="imageLoad" @click="itemClick" />
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
  methods: {
    imageLoad() {
      // 这里可以针对路由设定每个页面的指定的加载完成事件，这样当detail页面的GoodsListItem图片加载完成之后，
      // 就不会触发Home组件的刷新事件,这是第一种办法
      // 第二种办法是在离开页面的时候，取消掉监听事件 利用this.$bus.$off("监听的事件"，"要做的事情的方法名字")
      if ((this.$route.path.indexOf("/home")) != -1) {
        this.$bus.$emit("homeImageLoad");
        console.log("true");
      }else if((this.$route.path.indexOf("/detail")) != -1) {
        this.$bus.$emit("detailImageLoad");
        console.log("true");
      }
    },
    itemClick() {
      // 拼接参数
      this.$router.push("/detail/" + this.goodsItem.iid);
      // console.log("点击");
    },
  },
  computed: {
    showImage() {
      // 这里 || 的左右顺序不能变
      return this.goodsItem.image || this.goodsItem.show.img;
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
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  top: -3px;
  left: -15px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>