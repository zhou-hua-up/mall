<template>
  <div class="GoodsList">
   <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'App' ,
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;


  padding: 3px;
}
</style>