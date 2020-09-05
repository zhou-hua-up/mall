<template>
  <div class="tab-bar-item" @click="itemCheck">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeColor() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
  methods: {
    itemCheck() {
      // 如果现在活跃的路由路径不等于请求跳转的路径 才进行跳转
      if (this.$route.path != this.path) {
        this.$router.push(this.path);
      }
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.tab-bar-item img {
  width: 20px;
  vertical-align: middle;
  margin-top: 6px;
  margin-bottom: 2px;
}
</style>