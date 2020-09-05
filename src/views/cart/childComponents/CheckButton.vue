<template>
  <div :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: red;
}
.check-button img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>