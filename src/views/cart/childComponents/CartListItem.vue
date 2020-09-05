<template>
  <div class="cartListItem">
    <div class="item left">
      <div class="check-button" @click="checkClick">
      <check-button :isChecked="checkedGoods.checked" />
      </div>
      <img :src="checkedGoods.image" alt="">
    </div>
    <div class="item right">
      <div class="title">
        {{checkedGoods.title}}
      </div>
      <div class="desc">
        {{checkedGoods.desc}}
      </div>
      <div class="params">
        <span class="price">￥{{checkedGoods.price}}</span>
        <span class="number">x{{checkedGoods.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from './CheckButton'
export default {
  name: 'cartListItem' ,
  // data() {
  //   return {
  //     isChecked: false
  //   }
  // },
  props: {
    checkedGoods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    checkButton
  },
  methods: {
    checkClick() {
      // this.isChecked = !this.isChecked
      this.checkedGoods.checked = !this.checkedGoods.checked
    }
  }
}
</script>

<style scoped>
.cartListItem {
  width: 100%;
  display: flex;
  border-bottom: 2px solid #ccc;
  padding: 3px 2px;
}
.cartListItem .item {
  flex: 1;
  overflow: hidden;
}
.left {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.right .desc{
  margin-top: 7px;
}
.left img {
  border-radius: 10px;
  width: 100px;
  height: 116px;

}
.title {
  margin-top: 10px;
  font-size: 18px;
}
.title,
.desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.params {
  margin-top: 43px;
  overflow: hidden;
  font-size: 17px;
}
.params .price {
  float: left;
  color: red;
}
.params .number {
  float: right;
}
.check-button {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #ccc;
}
</style>