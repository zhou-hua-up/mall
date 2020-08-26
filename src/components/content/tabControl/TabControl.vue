<template>
  <div class="TabCotrol">
    <div v-for="(item, index) in titles" :key="index" class="tabItem" @click="itemCheck(index)">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemCheck(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.TabCotrol {
  display: flex;
  text-align: center;
  font-size: 14px;
  background-color: #fff;

  position: sticky;
  top: 44px;
}
.tabItem {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabItem span {
  padding: 5px;
}
.active {
  color: deeppink;
  border-bottom: 3px solid deeppink;
}
</style>