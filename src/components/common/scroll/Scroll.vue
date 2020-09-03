<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "App",
  props: {
    probetype: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullupload: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probetype,
          pullUpLoad: this.pullupload,

          mouseWheel: true, //开启鼠标滚轮
          disableMouse: false, //启用鼠标拖动
          disableTouch: false, //启用手指触摸
        });
        console.log(this.scroll);
        if(this.probetype === 2 || this.probetype === 3) {
           this.scroll.on("scroll", (position) => {
          this.$emit("scrollHeight", position);
        });
        }

        this.pullupload &&
          this.scroll.on("pullingUp", () => {
            this.$emit("pullingUp");
          });
      }
    });
  },
  methods: {
    refreshScroll() {
      console.log("...."); 
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>