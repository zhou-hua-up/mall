import {debounce} from 'common/utils'

import backTop from "components/content/backTop/BackTop";

export const imageListener = {
  // 下面这些以及生命周期函数都可以混入
  components: {},
  methods: {},
  data() {
    return {}
  },
  created() {

  },
  mounted() {
    // 这个防抖动函数放在外面 否则每次加载会重新初始化这个防抖函数
    // const refresh = debounce(this.$refs.scroll.refreshScroll, 500)
    // this.$bus.$on("homeImageLoad", () => {
    //    refresh();
    // });
  //   this.$bus.$on("detailImageLoad", () => {
  //     refresh();
  //  });
  },
}

export const backTopMIX = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    backTop
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 400);
    },
  }
}