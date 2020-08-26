<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'App' 
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;

  z-index: 99;
}
.left,
.right {
  width: 40px;
}
.center {
  flex: 1;
}
</style>