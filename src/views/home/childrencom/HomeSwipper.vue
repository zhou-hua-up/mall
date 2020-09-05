<template>
  <div class="HomeSwipper">
    <swipper>
      <CarouselItem v-for="(item, key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt @load="swipperImgLoad" />
        </a>
      </CarouselItem>
    </swipper>
  </div>
</template>

<script>
import swipper from "components/common/swipper/Swipper";
export default {
  name: "App",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isEmit: false,
    };
  },
  components: {
    swipper,
  },
  methods: {
    swipperImgLoad() {
      // 我们只需要一张图片加载完成得发送
      this.$nextTick(() => {
        if (!this.isEmit) {
          this.$emit("swipperLoad");
          this.isEmit = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.HomeSwipper {
  width: 100%;
}
img {
  width: 100%;
}
</style>