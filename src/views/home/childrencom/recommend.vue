<template>
  <div id="recommend">
    <div v-for="(item, key) in recommends" :key="key" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
#recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 2px solid #eee;
  padding: 10px 0 17px;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 70px;
  margin-bottom: 7px;
}
a {
  color: black;
}
</style>