<template>
  <div class="HomeSwipper">
     <swipper>
        <CarouselItem v-for="(item, key) in banners" :key="key">
          <a :href="item.link">
            <img :src="item.image" alt />
          </a>
        </CarouselItem>
    </swipper>
  </div>
</template>

<script>
import swipper from "components/common/swipper/Swipper";
export default {
  name: 'App' ,
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swipper
  }
}
</script>

<style scoped>
.HomeSwipper {
  width: 100%;
}
img {
  width: 100%;
}
</style>