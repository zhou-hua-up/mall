<template>
  <div class="detail">
    <child-nav-bar/>
    <child-swipper :top-images="topImages" class="swipper"></child-swipper>
    <detail-base-info :goods="goods" />
  </div>
</template>

<script>
import childNavBar from './childComponents/childNavBar'
import childSwipper from './childComponents/childSwipper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'

import {getDetails, Goods} from 'network/detail'
export default {
  name: 'Detail',
  components: {
    childNavBar,
    childSwipper,
    getDetails,
    DetailBaseInfo
  },
  data() {
    return {
      id: '',
      topImages: [],
      goods: []
    }
  },
  // 这里可以使用activated钩子函数，因为前面使用keep-alive会进行缓存复用，数据得到的会是之前的 
  // 但是这里我们还是使用created()，因为这里被keep-alive，只会执行一次，但是我们可以利用keep-alive的属性exclude="" 不包括这个组件
  created() {
    this.id = this.$route.params.id
    getDetails(this.id).then(res => {
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    })
  },
}
</script>

<style scoped>
.swipper {
  margin-top: 45px;
}
</style>