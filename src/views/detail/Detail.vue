<template>
  <div class="detail">
    <child-nav-bar/>
  </div>
</template>

<script>
import childNavBar from './childComponents/childNavBar'

import {getDetails} from 'network/detail'
export default {
  name: 'App',
  components: {
    childNavBar,
    getDetails
  },
  data() {
    return {
      id: ''
    }
  },
  // 这里要使用activated钩子函数，因为前面使用keep-alive会进行缓存复用，数据得到的会是之前的
  activated() {
    this.id = this.$route.params.id
    getDetails(this.id).then(res => {
      console.log(res);
    })
  },
}
</script>

<style scoped>
</style>