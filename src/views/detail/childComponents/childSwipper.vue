<template>
  <div class="childSwipper">
    <swipper >
      <CarouselItem v-for="(item, key) in topImages" :key="key" >
        <img :src="item" alt />
      </CarouselItem>
    </swipper>
  </div>
</template>

<script>
import swipper from "components/common/swipper/Swipper";
export default {
  name: "app",
  components: {
    swipper,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>

img {
  height: 200px;
  width: 100%;
 
}

</style>