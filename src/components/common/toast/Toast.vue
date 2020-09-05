<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(messages, duration=2000) {
      this.message = messages
      this.isShow = true
      setTimeout(() => {
        this.message =''
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  background-color: rgba(0, 0, 0, .7);
  z-index: 999;
  border-radius: 10px;
  padding: 8px;
}
</style>