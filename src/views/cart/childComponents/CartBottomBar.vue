<template>
  <div class="cartBottomBar">
    <div class="left">
      <div class="check-all">
        <check-button :is-checked="isSelectAll" @click.native="changeSelectAll"></check-button>
      </div>
      <div class="all">全选</div>
    </div>
    <div class="center">合计:￥{{allAccount}}</div>
    <div class="right" @click="finish">去计算({{selectCount}})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import {mapGetters} from 'vuex'
export default {
  name: "cartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(['cartList']),
    allAccount() {
      return this.cartList.filter(item => { return item.checked} ).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    selectCount() {
      return this.cartList.filter(item => {return item.checked}).reduce((preValue, item) => {
        return preValue+ + item.count 
      }, 0)
    },
    isSelectAll() {
      // if(this.cartList.length === 0) return false
      // 1.filter方法 返回满足条件的元素 会对空数组遍历
      // return !(this.cartList.filter(item => {return !item.checked}).length)

      // 2.find方法 返回true/false 会对空数组遍历
      // return !this.cartList.find(item => {return !item.checked})

      // 3.some方法 返回true/false 会对空数组遍历
      // return !this.cartList.some(item => {return !item.checked})

      // 4.every方法 返回true/false 不会对空数组遍历
      return this.cartList.every(item => {return item.checked})
    }
  },
  methods: {
    changeSelectAll() {
      // 1.当全部被选中的时候
      if(this.isSelectAll){
        this.cartList.forEach(item => {item.checked = false})
      }else {
        // 2.当全部没被选中或者是部分没被选中
        this.cartList.forEach(item => {item.checked = true})
      }
    },
    finish() {
      if(!this.isSelectAll) {
        this.$toast.show("请选择商品再结算")
      }
    }
  }
};
</script>

<style scoped>
.cartBottomBar {
  display: flex;

  text-align: center;
  align-items: center;

  background-color: #fff;
  height: 44px;
}
.check-all {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #ccc;
  padding-top: 2px;
  margin-left: 7px;
}
.all {
  margin-left: 6px;
}
.left {
  display: flex;
  width: 62px;
  margin-left: 5px;
}
.center {
  flex: 1;
  margin-right: 70px;
}
.right {
  width: 80px;
  line-height: 44px;
  background-color: red;
  color: #fff;
}
</style>